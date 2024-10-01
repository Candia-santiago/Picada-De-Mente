const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const preguntas = require('./public/preguntas.js');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const estadoJuego = {  
    respuestasCorrectas: 0,
    posicion: 0,
    comodines: {
        cambiarPregunta: true,
        eliminarOpciones: true
    }
};

const DISTANCIA_POR_RESPUESTA = 1;
const RESPUESTAS_A_GANAR = 10;
const jugadores = {};
const maxJugadores = 2;
let jugadoresConectados = 0;
let juegoEnCurso = false;

app.use(express.static('public'));

io.on('connection', (socket) => {
    if (Object.keys(jugadores).length < maxJugadores) {
        const jugadorId = Object.keys(jugadores).length === 0 ? 'jugador1' : 'jugador2';
        jugadores[socket.id] = jugadorId;
        jugadoresConectados++;

        console.log(`Jugador conectado: ${socket.id} asignado a ${jugadorId}`);
        socket.emit('asignarId', { idJugador: jugadorId });

        // Inicializar estado del jugador
        estadoJuego[socket.id] = {
            respuestasCorrectas: 0,
            posicion: 0,
            comodines: {
                cambiarPregunta: true,
                eliminarOpciones: true
            },
            preguntasDisponibles: [...preguntas], // Clonamos las preguntas para este jugador
            ultimaPregunta: null
        };

        // Verificar si ambos jugadores están conectados
        if (jugadoresConectados === maxJugadores) {
            io.emit('mensaje', { tipo: 'info', texto: 'Ambos jugadores conectados. El juego comienza ahora!' });
            juegoEnCurso = true;
            
            // Enviar la primera pregunta a ambos jugadores
            Object.keys(jugadores).forEach((socketId) => {
                enviarPregunta(io.sockets.sockets.get(socketId));
            });
        } else {
            socket.emit('mensaje', { tipo: 'info', texto: 'Esperando al otro jugador...' });
        }
    } else {
        socket.emit('mensaje', { tipo: 'error', texto: 'Juego lleno. Intenta más tarde.' });
        socket.disconnect();
    }

    // Manejo de respuestas
    socket.on('respuesta', (respuesta) => {
        if (!juegoEnCurso) {
            socket.emit('mensaje', { tipo: 'error', texto: 'El juego ha terminado. No puedes continuar jugando.' });
            return;
        }

        const { correcta } = verificarRespuesta(respuesta, socket.id);

        if (correcta) {
            estadoJuego[socket.id].respuestasCorrectas++;
            estadoJuego[socket.id].posicion += DISTANCIA_POR_RESPUESTA;

            console.log(`Jugador ${jugadores[socket.id]} ha avanzado a la posición: ${estadoJuego[socket.id].posicion}`);
            io.emit('actualizarPosicion', { idJugador: jugadores[socket.id], posicion: estadoJuego[socket.id].posicion });
            io.to(socket.id).emit('mensaje', { tipo: 'success', texto: '¡Respuesta correcta!' });
        } else {
            io.to(socket.id).emit('mensaje', { tipo: 'error', texto: 'Respuesta incorrecta!' });
        }

        if (estadoJuego[socket.id].respuestasCorrectas >= RESPUESTAS_A_GANAR) {
            io.emit('ganador', { color: jugadores[socket.id], mensaje: `¡El jugador ${jugadores[socket.id]} ha ganado!` });
            estadoJuego[socket.id].posicion = RESPUESTAS_A_GANAR;
            io.emit('actualizarPosicion', { idJugador: jugadores[socket.id], posicion: estadoJuego[socket.id].posicion });
            juegoEnCurso = false;
            return;
        }

        enviarPregunta(socket);
    });

    socket.on('usarComodin', ({ tipo }) => {
        if (!juegoEnCurso) {
            socket.emit('mensaje', { tipo: 'error', texto: 'El juego ha terminado. No puedes usar comodines.' });
            return;
        }

        if (!estadoJuego[socket.id].comodines[tipo]) {
            socket.emit('mensaje', { tipo: 'error', texto: 'Comodín ya utilizado.' });
            return;
        }

        if (tipo === 'cambiarPregunta') {
            estadoJuego[socket.id].comodines.cambiarPregunta = false;
            enviarPregunta(socket);
        } else if (tipo === 'eliminarOpciones') {
            estadoJuego[socket.id].comodines.eliminarOpciones = false;
            eliminarOpcionesIncorrectas(socket);
        }
    });

    socket.on('disconnect', () => {
        console.log(`Jugador desconectado: ${socket.id}`);
        delete estadoJuego[socket.id];
        delete jugadores[socket.id];
        jugadoresConectados--;
    });
});

// Enviar una pregunta al jugador
const enviarPregunta = (socket) => {
    const jugadorEstado = estadoJuego[socket.id];

    if (jugadorEstado.preguntasDisponibles.length === 0) {
        socket.emit('mensaje', { tipo: 'info', texto: 'No quedan más preguntas disponibles.' });
        return;
    }

    // Selecciona una pregunta aleatoria y la elimina de la lista de preguntas disponibles
    const preguntaIndex = Math.floor(Math.random() * jugadorEstado.preguntasDisponibles.length);
    const preguntaSeleccionada = jugadorEstado.preguntasDisponibles.splice(preguntaIndex, 1)[0];

    console.log(`Enviando pregunta a ${socket.id}:`, preguntaSeleccionada);

    // Guardar la pregunta seleccionada para verificar la respuesta
    jugadorEstado.ultimaPregunta = preguntaSeleccionada.pregunta;

    io.to(socket.id).emit('pregunta', preguntaSeleccionada);
};

// Verificar si la respuesta es correcta
const verificarRespuesta = (respuesta, socketId) => {
    const jugadorEstado = estadoJuego[socketId];
    
    // Obtener la última pregunta enviada al jugador
    const ultimaPregunta = jugadorEstado.ultimaPregunta;
    
    // Buscar la pregunta original en el arreglo de preguntas usando la última pregunta enviada
    const preguntaOriginal = preguntas.find(p => p.pregunta === ultimaPregunta);

    // Verificar si la respuesta enviada coincide con la respuesta correcta de la pregunta original
    const correcta = preguntaOriginal && preguntaOriginal.respuesta === respuesta.respuesta;
    
    return { correcta };
};

// Función para eliminar opciones incorrectas
const eliminarOpcionesIncorrectas = (socket) => {
    const jugadorEstado = estadoJuego[socket.id];
    const pregunta = preguntas.find(p => p.pregunta === jugadorEstado.ultimaPregunta);
    
    if (pregunta) {
        const opcionesFiltradas = pregunta.opciones.filter(opcion => opcion !== pregunta.respuesta);
        const opcionesRestantes = [pregunta.respuesta, opcionesFiltradas[Math.floor(Math.random() * opcionesFiltradas.length)]];
        const preguntaConOpcionesEliminadas = { ...pregunta, opciones: opcionesRestantes };
        io.to(socket.id).emit('pregunta', preguntaConOpcionesEliminadas);
    }
};

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
