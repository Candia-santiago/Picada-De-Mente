const socket = io();
const distanciaTotal = 7; // Número total de respuestas correctas necesarias para ganar
const distanciaPorCasillero = 100; // Distancia en píxeles que representa un casillero

const jugadores = {};
const maxJugadores = 2;

socket.on('connection', (socket) => {
    if (Object.keys(jugadores).length < maxJugadores) {
        const jugadorId = Object.keys(jugadores).length === 0 ? 'jugador1' : 'jugador2';
        jugadores[socket.id] = jugadorId;
        
        console.log(`Jugador conectado: ${socket.id} asignado a ${jugadorId}`);
        socket.emit('asignarId', { idJugador: jugadorId });
        
        // Enviar la primera pregunta al jugador
        enviarPregunta(socket);
    } else {
        socket.emit('mensaje', { tipo: 'error', texto: 'Juego lleno. Intenta más tarde.' });
        socket.disconnect();
    }
});

socket.on('pregunta', (pregunta) => {
    console.log('Recibiendo pregunta:', pregunta); // Log para verificar que la pregunta llegue

    // Mostrar la pregunta en el contenedor
    document.getElementById('contenedorPreguntas').innerText = pregunta.pregunta;

    // Mostrar las opciones de respuesta
    const opcionesDiv = document.getElementById('opciones');
    opcionesDiv.innerHTML = ''; // Limpiar opciones anteriores

    pregunta.opciones.forEach(opcion => {
        const label = document.createElement('label');
        label.classList.add('form-check');
        label.innerHTML = `
            <input type="radio" name="respuesta" value="${opcion}" class="form-check-input">
            <span class="form-check-label">${opcion}</span>
        `;
        opcionesDiv.appendChild(label);
    });
});

socket.on('mensaje', ({ tipo, texto }) => {
    const mensajeDiv = document.getElementById('mensajeResultado');
    mensajeDiv.innerText = texto;
    mensajeDiv.className = tipo === 'success' ? 'text-success' : tipo === 'error' ? 'text-danger' : 'text-warning';
});

document.getElementById('formularioRespuesta').addEventListener('submit', (event) => {
    event.preventDefault();
    const seleccion = document.querySelector('input[name="respuesta"]:checked');
    const mensajeDiv = document.getElementById('mensajeResultado');

    if (!seleccion) {
        mensajeDiv.innerText = 'Debes seleccionar una respuesta!';
        mensajeDiv.className = 'text-warning';
        return;
    }

    const respuesta = {
        pregunta: document.getElementById('contenedorPreguntas').innerText,
        respuesta: seleccion.value
    };

    // Emitir respuesta y actualizar posición del auto
    socket.emit('respuesta', respuesta);
});

socket.on('actualizarPosicion', ({ idJugador, posicion }) => {
    console.log(`Jugador ${idJugador} ha avanzado a la posición: ${posicion}`);
    const auto = document.querySelector(`#${idJugador} .auto`); // Usar el idJugador dinámico
    if (auto) {
        const nuevaPosicion = posicion * distanciaPorCasillero;
        console.log(`Moviendo el auto a ${nuevaPosicion}px`);
        auto.style.transform = `translateX(${nuevaPosicion}px)`; // Mueve el auto en la pista
    }
});

// Lógica para usar comodines
document.getElementById('cambiarPreguntaBtn').addEventListener('click', () => {
    socket.emit('usarComodin', { tipo: 'cambiarPregunta' });
});

document.getElementById('eliminarOpcionesBtn').addEventListener('click', () => {
    socket.emit('usarComodin', { tipo: 'eliminarOpciones' });
});

socket.on('ganador', ({ color, mensaje }) => {
    // Mostrar el mensaje de ganador
    const mensajeFinal = document.getElementById('mensaje-final');
    const mensajeTexto = document.getElementById('mensaje-texto');

    mensajeTexto.innerText = mensaje; // Mostrar mensaje recibido del servidor
    mensajeFinal.classList.add('visible'); // Mostrar pantalla difuminada

    setTimeout(() => {
        // Opcional: Recargar la página después de 5 segundos
        location.reload();
    }, 5000);
});

// Deshabilitar botones de comodines
socket.on('mensaje', (data) => {
    if (data.texto.includes('Comodín ya utilizado')) {
        if (data.texto.includes('Cambiar Pregunta')) {
            document.getElementById('cambiarPreguntaBtn').disabled = true;
        } else if (data.texto.includes('Eliminar Opciones Incorrectas')) {
            document.getElementById('eliminarOpcionesBtn').disabled = true;
        }
    }
});
