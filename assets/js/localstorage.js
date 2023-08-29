// localStorage GENERAL

// Obtener todos los campos de entrada por su ID
const inputFields = [
    "clase", "porcentaje", "tipo", "parametroErosion",
    "afectacionMov_masa","claseMov_masa",
    "movimientoMasa", "drenajeNatural", "inundaciones",
    "encharcamientos", "profundidad", "textura",
    "pedregosidad","afloramiento","contenidoSales","contenidoSodio","sales_Sodio","ca_mg","saturacionAluminio","distribucionLluvia","condicionHumedad","temperatura"
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