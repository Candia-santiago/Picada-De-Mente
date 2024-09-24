// script.js
const socket = io(); // Conexión al servidor

// Evento que se dispara cuando el cliente se conecta al servidor
socket.on('connect', () => {
    console.log('Conectado al servidor:', socket.id);
});

// Manejar eventos de desconexión
socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

// Aquí puedes agregar más lógica relacionada con el juego más adelante
