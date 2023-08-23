// MOSTRAR DATOS LOCALES DE FERTILIDAD 

    // Obtiene el resultado almacenado en el localStorage
    var resultadoFT = window.localStorage.getItem("resultadoFT");
            
    // Muestra el resultado en el campo de entrada
    document.getElementById("resultadoFertilidad").value = resultadoFT;

// MOSTRAR DATOS LOCALES DE PISOS TERMICOS

    // Recuperar el resultado almacenado en localStorage
    const pisoTermico = localStorage.getItem('pisoTermico');

    // Mostrar el resultado en la página
    const resultadoPisosTermicos = document.getElementById('resultadoPisosTermicos');
    resultadoPisosTermicos.value = decodeURIComponent(pisoTermico);