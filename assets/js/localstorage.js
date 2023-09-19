// localStorage GENERAL

// Obtener todos los campos de entrada por su ID
const inputFields = [
    "clase", "porcentaje", "tipo", "drenajeNatural", "inundaciones",
    "encharcamientos", "profundidad", "textura",
    "pedregosidad","afloramiento","contenidoSales","contenidoSodio","sales_Sodio","ca_mg","saturacionAluminio","distribucionLluvia","condicionHumedad","temperaturaHeladera",
  ];

  // Cargar los valores del almacenamiento local cuando se carga la página
  window.addEventListener("load", () => {
    inputFields.forEach(fieldId => {
      const fieldValue = localStorage.getItem(fieldId);
      if (fieldValue !== null) {
        document.getElementById(fieldId).value = fieldValue;
      }
    });
  });

  // Guardar valores en el almacenamiento local cuando se cambian
  inputFields.forEach(fieldId => {
    const inputField = document.getElementById(fieldId);
    inputField.addEventListener("input", () => {
      localStorage.setItem(fieldId, inputField.value);
    });
  });


// MOSTRAR DATOS LOCALES DE FERTILIDAD⭐

    // Obtiene el resultado almacenado en el localStorage
    var resultadoFT = window.localStorage.getItem("resultadoFT");
            
    // Muestra el resultado en el campo de entrada
    document.getElementById("resultadoFertilidad").value = resultadoFT;

    
// MOSTRAR DATOS LOCALES DE PISOS TERMICOS⭐

    // Recuperar el resultado almacenado en localStorage
    const pisoTermico = localStorage.getItem('pisoTermico');

    // Mostrar el resultado en la página
    const resultadoPisosTermicos = document.getElementById('resultadoPisosTermicos');
    resultadoPisosTermicos.value = decodeURIComponent(pisoTermico);  


// MOSTRAR DATOS LOCALES DE MOVIMIENTO DE MASA⭐

    // Recuperar el resultado almacenado en localStorage
    const movMasa = localStorage.getItem('movMasa');

    // Mostrar el resultado en la página
    const resultadoMovMasa = document.getElementById('resultadoMovMasa');
    resultadoMovMasa.value = decodeURIComponent(movMasa);

// MOSTRAR DATOS LOCALES DE EROSION⭐

    // Recuperar el resultado almacenado en localStorage
    const erosion = localStorage.getItem('erosion');

    // Mostrar el resultado en la página
    const resultadoErosion = document.getElementById('resultadoErosion');
    resultadoErosion.value = decodeURIComponent('erosion');