// ⭐INHABILITA LA RUEDA DEL MOUSE EN LOS INPUTS

// Obtén todos los inputs de tipo "number"
const numberInputs = document.querySelectorAll('input[type="number"]');

// Deshabilita la funcionalidad de la rueda del mouse en los inputs de tipo "number"
numberInputs.forEach(input => {
  input.addEventListener('wheel', event => {
    event.preventDefault();
  });
});


// Función para borrar todos los datos del localStorage
function clear_localStorage() {
  // Limpia todo el localStorage
  localStorage.clear();
  Swal.fire({
    title: 'Datos borrados',
    html: '<p>Todos los datos del Local Storage han sido borrados.</p>',
    })
}


// ------------------------------------------------- //
// Función para mostrar el div durante 4 segundos
function mostrarDivTemporal() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';

  setTimeout(function() {
    popup.style.display = 'none';

    // Programar la ocultación del div durante 5 segundos
    setTimeout(ocultarDivTemporal, 7000);
  }, 7000); // 4000 ms (4 segundos)
}

// Función para ocultar el div durante 5 segundos
function ocultarDivTemporal() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';

  // Programar la aparición del div nuevamente después de 5 segundos
  setTimeout(mostrarDivTemporal, 7000); // 5000 ms (5 segundos)
}

// Llamar a la función para mostrar el div inicialmente
mostrarDivTemporal();