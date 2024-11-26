// Obtenemos los elementos necesarios del DOM
const contadorVisitas = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');

// Función para actualizar el contador en el localStorage
function actualizarContador() {
  let visitas = localStorage.getItem('visitas');  // Obtenemos el número de visitas desde localStorage
  if (visitas === null) {
    visitas = 0; // Si no hay visitas previas, comenzamos desde 0
  }
  visitas = parseInt(visitas) + 1; // Aumentamos el contador
  localStorage.setItem('visitas', visitas); // Guardamos el contador actualizado en localStorage
  contadorVisitas.textContent = visitas;  // Actualizamos el texto en el HTML
}

// Función para reiniciar el contador
function reiniciarContador() {
  localStorage.setItem('visitas', 0);  // Reiniciamos el contador en localStorage
  contadorVisitas.textContent = 0;  // Actualizamos el contador en la página
}

// Al cargar la página, actualizamos el contador
document.addEventListener('DOMContentLoaded', function () {
  actualizarContador(); // Llamamos a la función para actualizar el contador cada vez que se carga la página
});

// Evento para el botón de reiniciar
btnReestablecer.addEventListener('click', reiniciarContador);