const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const preguntas = require('./public/preguntas.js');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const estadoJuego = {  respuestasCorrectas: 0,
    posicion: 0,
    };
const DISTANCIA_POR_RESPUESTA = 1; 
const RESPUESTAS_A_GANAR = 14;  // Deben responder 7 preguntas correctas para ganar
const jugadores = {};
const maxJugadores = 2;

app.use(express.static('public'));

io.on('connection', (socket) => {
    if (Object.keys(jugadores).length < maxJugadores) {
        const jugadorId = Object.keys(jugadores).length === 0 ? 'jugador1' : 'jugador2';
        jugadores[socket.id] = jugadorId;

        console.log(`Jugador conectado: ${socket.id} asignado a ${jugadorId}`);
        socket.emit('asignarId', { idJugador: jugadorId });

        // Inicializar estado del jugador
        estadoJuego[socket.id] = {
            respuestasCorrectas: 0,
            posicion: 0,
            comodines: {
                cambiarPregunta: true,
                eliminarOpciones: true
            }
        };

        // Enviar la primera pregunta al jugador
        enviarPregunta(socket);
    } else {
        socket.emit('mensaje', { tipo: 'error', texto: 'Juego lleno. Intenta más tarde.' });
        socket.disconnect();
    }

    socket.on('respuesta', (respuesta) => {
        const { correcta } = verificarRespuesta(respuesta);
        
        if (correcta) {
            estadoJuego[socket.id].respuestasCorrectas++;
            estadoJuego[socket.id].posicion += DISTANCIA_POR_RESPUESTA;

            console.log(`Jugador ${jugadores[socket.id]} ha avanzado a la posición: ${estadoJuego[socket.id].posicion}`);
            io.emit('actualizarPosicion', { idJugador: jugadores[socket.id], posicion: estadoJuego[socket.id].posicion });
            io.to(socket.id).emit('mensaje', { tipo: 'success', texto: '¡Respuesta correcta!' });
        } else {
            io.to(socket.id).emit('mensaje', { tipo: 'error', texto: 'Respuesta incorrecta!' });
        }

        // Verificar si el jugador ha ganado
        if (estadoJuego[socket.id].respuestasCorrectas >= RESPUESTAS_A_GANAR) {
            io.emit('ganador', { color: jugadores[socket.id], mensaje: `¡El jugador ${jugadores[socket.id]} ha ganado!` });
            // Posicionar al jugador en la meta
            estadoJuego[socket.id].posicion = RESPUESTAS_A_GANAR; // Asignar la posición final
            io.emit('actualizarPosicion', { idJugador: jugadores[socket.id], posicion: estadoJuego[socket.id].posicion });
            return; // Terminar el juego
        }

        // Enviar la siguiente pregunta
        enviarPregunta(socket);
    });

    // Limpiar cuando un jugador se desconecta
    socket.on('disconnect', () => {
        console.log(`Jugador desconectado: ${socket.id}`);
        delete estadoJuego[socket.id];
        delete jugadores[socket.id];
    });
});



// Enviar una pregunta al jugador
const enviarPregunta = (socket) => {
    const preguntaIndex = Math.floor(Math.random() * preguntas.length);
    const preguntaSeleccionada = preguntas[preguntaIndex]; 

    console.log(`Enviando pregunta a ${socket.id}:`, preguntaSeleccionada);

    // Emitir la pregunta seleccionada al jugador
    io.to(socket.id).emit('pregunta', preguntaSeleccionada);
};

// Verificar si la respuesta es correcta
const verificarRespuesta = (respuesta) => {
    const pregunta = preguntas.find(p => p.pregunta === respuesta.pregunta);
    return { correcta: pregunta && pregunta.respuesta === respuesta.respuesta };
};

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
