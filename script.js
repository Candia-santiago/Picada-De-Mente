// script.js
const preguntaContainer = document.getElementById('contenedorPreguntas');
const respuestaInput = document.getElementById('respuestaUsuario');
const enviarBtn = document.getElementById('enviarRespuesta');
const mensajeResultado = document.getElementById('mensajeResultado');
const formulario = document.getElementById('formularioRespuesta');

let preguntaSeleccionada;

// Seleccionar y mostrar una pregunta aleatoria
function mostrarPreguntaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * preguntas.length);
    preguntaSeleccionada = preguntas[indiceAleatorio];
    preguntaContainer.textContent = preguntaSeleccionada.pregunta;
}

// Verificar la respuesta del usuario
function verificarRespuesta(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
    const respuestaUsuario = respuestaInput.value.trim();
    mensajeResultado.textContent = "";
    if (respuestaUsuario.toLowerCase() === preguntaSeleccionada.respuesta.toLowerCase()) {
        mensajeResultado.textContent = "¡Respuesta correcta!";
        mensajeResultado.style.color = "green";
        // Aquí podrías agregar la lógica para avanzar en el juego.
        // Mostrar una nueva pregunta
        mostrarPreguntaAleatoria();
        // Limpiar el campo de entrada
        respuestaInput.value = "";

    } else {
        mensajeResultado.textContent = "Respuesta incorrecta. Intenta de nuevo.";
        mensajeResultado.style.color = "red";
        mostrarPreguntaAleatoria();
        respuestaInput.value = "";
    }
    
}

// Mostrar una pregunta al cargar la página
window.onload = mostrarPreguntaAleatoria;

// Asociar la función al evento submit del formulario
formulario.addEventListener('submit', verificarRespuesta);


