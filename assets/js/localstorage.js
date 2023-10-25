// localStorage GENERAL

// Obtener todos los campos de entrada por su ID
const inputFields = [
    "pendiente", "erosion", "movimientosEnMasa", "drenajeNatural", "inundaciones","encharcamientos","profundidadEfectiva","familia_textura","grupo_textural","fragmentosEnElSuelo","pedregosidadSuperficial","afloramientoRocoso","fertilidad","contenidoDeSales","contenidoDeSodio"
    ,"Na_intercambiable_sales_y_sodio" ,"salesYSodio_area_afectada" ,"profundidadDeNa","caMg","saturacionDeAluminio","distribucionDeLluvias","profundidadDeNa","condicionDeHumedad","heladas"];

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

    
// MOSTRAR DATOS LOCALES DE PISOS TÉRMICOS⭐

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

// MOSTRAR DATOS LOCALES DE EROSIÓN⭐

    // Recuperar el resultado almacenado en localStorage
    const erosion = localStorage.getItem('erosion');

    // Mostrar el resultado en la página
    const resultadoErosion = document.getElementById('resultadoErosion');
    resultadoErosion.value = decodeURIComponent(erosion);

    // MOSTRAR DATOS LOCALES DE TEXTURA⭐

    // Recuperar el resultado almacenado en localStorage
    const texture = localStorage.getItem('texture');

    // Mostrar el resultado en la página
    const resultado_textura = document.getElementById('resultado_textura');
    resultado_textura.value = decodeURIComponent(texture);