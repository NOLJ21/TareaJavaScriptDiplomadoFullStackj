// Seleccionamos los elementos necesarios
const tarjeta = document.querySelector('.tarjeta');
const botonVerDetalles = document.getElementById('verDetalles');
const botonVolver = document.getElementById('volver');

// Agregar evento para voltear la tarjeta
botonVerDetalles.addEventListener('click', () => {
    tarjeta.classList.add('volteada');
});

// Agregar evento para regresar la tarjeta
botonVolver.addEventListener('click', () => {
    tarjeta.classList.remove('volteada');
});