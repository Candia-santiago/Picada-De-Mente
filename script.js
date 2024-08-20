const preguntaContainer = document.getElementById('contenedorPreguntas');

// Seleccionar una pregunta aleatoria
function mostrarPreguntaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * preguntas.length);
    const preguntaSeleccionada = preguntas[indiceAleatorio].pregunta;

    // Mostrar la pregunta en el contenedor
    preguntaContainer.textContent = preguntaSeleccionada;
}

// Llamar a la función para mostrar una pregunta cuando cargue la página
mostrarPreguntaAleatoria();