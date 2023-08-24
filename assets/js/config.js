// ⭐INHABILITA LA RUEDA DEL MOUSE EN LOS INPUTS

// Obtén todos los inputs de tipo "number"
const numberInputs = document.querySelectorAll('input[type="number"]');

// Deshabilita la funcionalidad de la rueda del mouse en los inputs de tipo "number"
numberInputs.forEach(input => {
  input.addEventListener('wheel', event => {
    event.preventDefault();
  });
});