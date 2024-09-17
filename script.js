//script.js
const preguntaContainer = document.getElementById('contenedorPreguntas');
const opcionesContainer = document.getElementById('opciones');
const enviarBtn = document.getElementById('enviarRespuesta');
const mensajeResultado = document.getElementById('mensajeResultado');
const formulario = document.getElementById('formularioRespuesta');
const cambiarPreguntaBtn = document.getElementById('cambiarPreguntaBtn');
const eliminarOpcionesBtn = document.getElementById('eliminarOpcionesBtn');

let preguntaSeleccionada;
let turno = 0; // 0: jugador 1, 1: jugador 2
let respuestasCorrectas = [0, 0]; // Respuestas correctas de cada jugador
const avancePorRespuesta = 12; // 7 respuestas correctas para avanzar 84%, dejando margen para ajustes

// Registro de uso de botones por jugador
const comodinesUsados = [
    { cambiarPregunta: false, eliminarOpciones: false }, // Jugador 1
    { cambiarPregunta: false, eliminarOpciones: false }  // Jugador 2
];

// Función para mostrar una nueva pregunta
function mostrarNuevaPregunta() {
    // Permite cambiar la pregunta si el jugador actual no ha usado el comodín
    if (comodinesUsados[turno].cambiarPregunta) return;

    comodinesUsados[turno].cambiarPregunta = true; // Marcar el comodín como usado
    cambiarPreguntaBtn.classList.add('btn-secondary'); // Cambiar el estilo del botón para indicar que está desactivado
    cambiarPreguntaBtn.disabled = true; // Desactivar el botón
    preguntaSeleccionada = null; // Resetea la pregunta seleccionada
    mostrarPregunta(); // Muestra una nueva pregunta
}

// Función para mostrar la siguiente pregunta
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

// Asociar la función al evento click del botón "Cambiar Pregunta"
cambiarPreguntaBtn.addEventListener('click', mostrarNuevaPregunta);

// Función para mostrar opciones
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

// Función para eliminar dos opciones incorrectas
function eliminarDosOpcionesIncorrectas() {
    // Permite eliminar opciones si el jugador actual no ha usado el comodín
    if (comodinesUsados[turno].eliminarOpciones) return;

    if (!preguntaSeleccionada) {
        mensajeResultado.textContent = "No hay ninguna pregunta seleccionada.";
        mensajeResultado.style.color = "orange";
        return;
    }
    
    comodinesUsados[turno].eliminarOpciones = true; // Marcar el comodín como usado
    eliminarOpcionesBtn.classList.add('btn-secondary'); // Cambiar el estilo del botón para indicar que está desactivado
    eliminarOpcionesBtn.disabled = true; // Desactivar el botón

    const opciones = preguntaSeleccionada.opciones;
    const respuestaCorrecta = preguntaSeleccionada.respuesta;

    // Filtrar opciones incorrectas
    const opcionesIncorrectas = opciones.filter(opcion => opcion !== respuestaCorrecta);

    if (opcionesIncorrectas.length <= 2) {
        mensajeResultado.textContent = "No hay suficientes opciones incorrectas para eliminar.";
        mensajeResultado.style.color = "orange";
        return;
    }

    // Seleccionar aleatoriamente dos opciones incorrectas para eliminar
    const opcionesAEliminar = [];
    while (opcionesAEliminar.length < 2) {
        const randomIndex = Math.floor(Math.random() * opcionesIncorrectas.length);
        const opcionAEliminar = opcionesIncorrectas[randomIndex];
        if (!opcionesAEliminar.includes(opcionAEliminar)) {
            opcionesAEliminar.push(opcionAEliminar);
        }
    }

    // Eliminar las opciones seleccionadas
    const opcionesRestantes = opciones.filter(opcion => !opcionesAEliminar.includes(opcion));
    preguntaSeleccionada.opciones = opcionesRestantes;

    mostrarOpciones(opcionesRestantes);

    mensajeResultado.textContent = "Se han eliminado dos opciones incorrectas.";
    mensajeResultado.style.color = "green";
}

// Asociar la función al evento click del botón "Eliminar dos opciones incorrectas"
eliminarOpcionesBtn.addEventListener('click', eliminarDosOpcionesIncorrectas);

// Función para verificar la respuesta
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
            // Restaurar el estado de los botones al iniciar el turno del nuevo jugador
            cambiarPreguntaBtn.classList.remove('btn-secondary');
            cambiarPreguntaBtn.disabled = false;
            eliminarOpcionesBtn.classList.remove('btn-secondary');
            eliminarOpcionesBtn.disabled = false;
        }
    } else {
        mensajeResultado.textContent = "Respuesta incorrecta. Intenta de nuevo.";
        mensajeResultado.style.color = "red";
        turno = 1 - turno; // Cambiar de turno
        mostrarPregunta();
        // Restaurar el estado de los botones al iniciar el turno del nuevo jugador
        cambiarPreguntaBtn.classList.remove('btn-secondary');
        cambiarPreguntaBtn.disabled = false;
        eliminarOpcionesBtn.classList.remove('btn-secondary');
        eliminarOpcionesBtn.disabled = false;
    }
}

// Función para avanzar el auto
function avanzarAuto(turno) {
    const auto = document.querySelector(`.carril img[alt="auto${turno === 0 ? 'Rojo' : 'Azul'}"]`);
    let currentPos = auto.style.marginLeft ? parseInt(auto.style.marginLeft) : 0;
    currentPos += avancePorRespuesta;
    auto.style.marginLeft = `${currentPos}%`;
    verificarMeta(auto, turno);
}

// Función para verificar si el auto ha ganado
function verificarMeta(auto, turno) {
    if (parseInt(auto.style.marginLeft) >= 90) {
        autoRojo.style.marginLeft = '95%';
        alert(`¡El auto ${turno === 0 ? 'rojo' : 'azul'} ha ganado!`);
        resetGame();
    }
}

// Función para reiniciar el juego
function resetGame() {
    const autos = document.querySelectorAll('.carril img');
    autos.forEach(auto => auto.style.marginLeft = '0%');
    respuestasCorrectas = [0, 0];
    preguntas = [...preguntasOriginales]; // Restaura las preguntas originales
    preguntaSeleccionada = null;
    formulario.reset(); // Cambiar clear() a reset()
    mostrarPregunta();

    // Restaurar el estado de los botones al reiniciar el juego
    comodinesUsados.forEach(c => {
        c.cambiarPregunta = false;
        c.eliminarOpciones = false;
    });
    cambiarPreguntaBtn.classList.remove('btn-secondary');
    cambiarPreguntaBtn.disabled = false;
    eliminarOpcionesBtn.classList.remove('btn-secondary');
    eliminarOpcionesBtn.disabled = false;
}

// Mostrar una pregunta al cargar la página
window.onload = mostrarPregunta;

// Asociar la función al evento submit del formulario
formulario.addEventListener('submit', verificarRespuesta);
