const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
import preguntas from ("./public/preguntas");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const preg = preguntas()

// Sirve archivos estáticos desde la carpeta public
app.use(express.static('public'));

// Evento cuando un jugador se conecta
io.on('connection', (socket) => {
    console.log('Un jugador se ha conectado:', socket.id);

    socket.emit('preguntas', preguntas());

    
    socket.on('disconnect', () => {
        console.log('Jugador desconectado:', socket.id);
    });
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
