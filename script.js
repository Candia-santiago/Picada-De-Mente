const preguntaContainer = document.getElementById('contenedorPreguntas');
const opcionesContainer = document.getElementById('opciones');
const enviarBtn = document.getElementById('enviarRespuesta');
const mensajeResultado = document.getElementById('mensajeResultado');
const formulario = document.getElementById('formularioRespuesta');

let preguntaSeleccionada;

// Seleccionar y mostrar una pregunta aleatoria
function mostrarPreguntaAleatoria() {
    if (preguntas.length === 0) {
        mensajeResultado.textContent = "¡Felicitaciones! Has respondido todas las preguntas.";
        mensajeResultado.style.color = "blue";
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * preguntas.length);
    preguntaSeleccionada = preguntas.splice(indiceAleatorio, 1)[0];
    preguntaContainer.textContent = preguntaSeleccionada.pregunta;
    mostrarOpciones(preguntaSeleccionada.opciones);
}

// Mostrar opciones de respuesta
function mostrarOpciones(opciones) {
    opcionesContainer.innerHTML = ''; // Limpiar opciones anteriores
    opciones.forEach((opcion, index) => {
        const div = document.createElement('div');
        div.classList.add('form-check'); // Clase de Bootstrap para opciones
        div.innerHTML = `
            <input type="radio" class="form-check-input" id="opcion${index}" name="opcion" value="${opcion}">
            <label class="form-check-label" for="opcion${index}">${opcion}</label>
        `;
        opcionesContainer.appendChild(div);
    });
}

// Verificar la respuesta del usuario
function verificarRespuesta(event) {
    event.preventDefault();
    const respuestaUsuario = document.querySelector('input[name="opcion"]:checked');
    
    if (!respuestaUsuario) {
        mensajeResultado.textContent = "Por favor, seleccione una opción.";
        mensajeResultado.style.color = "orange";
        return;
    }

    if (respuestaUsuario.value === preguntaSeleccionada.respuesta) {
        mensajeResultado.textContent = "¡Respuesta correcta!";
        mensajeResultado.style.color = "green";
        avanzarAuto();
        mostrarPreguntaAleatoria();
    } else {
        mensajeResultado.textContent = "Respuesta incorrecta. Intenta de nuevo.";
        mensajeResultado.style.color = "red";
        mostrarPreguntaAleatoria();
    }
}

// Lógica para avanzar el auto
function avanzarAuto() {
    const autoRojo = document.querySelector('.carril img[alt="autoRojo"]');
    const autoAzul = document.querySelector('.carril img[alt="autoAzul"]');
    
    let currentPosRojo = autoRojo.style.marginLeft ? parseInt(autoRojo.style.marginLeft) : 0;
    let currentPosAzul = autoAzul.style.marginLeft ? parseInt(autoAzul.style.marginLeft) : 0;

    currentPosRojo += Math.random() * 10; // Avanza una distancia aleatoria
    currentPosAzul += Math.random() * 10;

    autoRojo.style.marginLeft = `${currentPosRojo}%`;
    autoAzul.style.marginLeft = `${currentPosAzul}%`;

    verificarMeta(autoRojo, autoAzul);
}

// Verificar si algún auto ha llegado a la meta
function verificarMeta(autoRojo, autoAzul) {
    if (parseInt(autoRojo.style.marginLeft) >= 90) {
        alert("¡El auto rojo ha ganado!");
        resetGame();
    } else if (parseInt(autoAzul.style.marginLeft) >= 90) {
        alert("¡El auto azul ha ganado!");
        resetGame();
    }
}

// Resetear el juego
function resetGame() {
    const autoRojo = document.querySelector('.carril img[alt="autoRojo"]');
    const autoAzul = document.querySelector('.carril img[alt="autoAzul"]');
    
    autoRojo.style.marginLeft = '0%';
    autoAzul.style.marginLeft = '0%';
    preguntas = [...preguntasOriginales]; // Restaura las preguntas originales
    mostrarPreguntaAleatoria();
}

// Mostrar una pregunta al cargar la página
window.onload = mostrarPreguntaAleatoria;

// Asociar la función al evento submit del formulario
formulario.addEventListener('submit', verificarRespuesta);
