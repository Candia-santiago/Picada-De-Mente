// script.js

const preguntaContainer = document.getElementById('contenedorPreguntas');
const opcionesContainer = document.getElementById('opciones');
const enviarBtn = document.getElementById('enviarRespuesta');
const mensajeResultado = document.getElementById('mensajeResultado');
const formulario = document.getElementById('formularioRespuesta');

let preguntaSeleccionada;
let turno = 0; // 0: jugador 1, 1: jugador 2
let respuestasCorrectas = [0, 0]; // Respuestas correctas de cada jugador
const avancePorRespuesta = 12; // 7 respuestas correctas para avanzar 84%, dejando margen para ajustes

function mostrarPregunta() {
    if (preguntas.length === 0) {
        mensajeResultado.textContent = "¡Felicitaciones! Has respondido todas las preguntas.";
        mensajeResultado.style.color = "blue";
        return;
    }
    if (!preguntaSeleccionada) {
        const indiceAleatorio = Math.floor(Math.random() * preguntas.length);
        preguntaSeleccionada = preguntas[indiceAleatorio];
    }
    preguntaContainer.textContent = `Jugador ${turno + 1}, ${preguntaSeleccionada.pregunta}`;
    mostrarOpciones(preguntaSeleccionada.opciones);
}

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
        respuestasCorrectas[turno]++;
        avanzarAuto(turno);
        if (respuestasCorrectas[turno] >= 7) {
            alert(`¡El jugador ${turno + 1} ha ganado!`);
            resetGame();
        } else {
            preguntaSeleccionada = null; // Nueva pregunta para el siguiente turno
            turno = 1 - turno; // Cambiar de turno
            mostrarPregunta();
        }
    } else {
        mensajeResultado.textContent = "Respuesta incorrecta. Intenta de nuevo.";
        mensajeResultado.style.color = "red";
        turno = 1 - turno; // Cambiar de turno
        mostrarPregunta();
    }
}

function avanzarAuto(turno) {
    const auto = document.querySelector(`.carril img[alt="auto${turno === 0 ? 'Rojo' : 'Azul'}"]`);
    let currentPos = auto.style.marginLeft ? parseInt(auto.style.marginLeft) : 0;
    currentPos += avancePorRespuesta;
    auto.style.marginLeft = `${currentPos}%`;
    verificarMeta(auto, turno);
}

function verificarMeta(auto, turno) {
    if (parseInt(auto.style.marginLeft) >= 90) {
        autoRojo.style.marginLeft = '95%';
        alert(`¡El auto ${turno === 0 ? 'rojo' : 'azul'} ha ganado!`);
        resetGame();
        }
}

function resetGame() {
    const autos = document.querySelectorAll('.carril img');
    autos.forEach(auto => auto.style.marginLeft = '0%');
    respuestasCorrectas = [0, 0];
    preguntas = [...preguntasOriginales]; // Restaura las preguntas originales
    preguntaSeleccionada = null;
    formulario.clear();
    mostrarPregunta();
}

// Mostrar una pregunta al cargar la página
window.onload = mostrarPregunta;

// Asociar la función al evento submit del formulario
formulario.addEventListener('submit', verificarRespuesta);
