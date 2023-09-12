// -------------------------⭐ PISOS TERMICOS  ⭐----------------------------------------
// Función para cargar los datos almacenados, si existen
function cargarDatosAlmacenados() {
    const alturaGuardada = localStorage.getItem('altura');
    const temperaturaGuardada = localStorage.getItem('temperatura');
    const afectacionMovMasaGuardada = localStorage.getItem('afectacionMovMasa')

    // Si hay datos guardados, cargarlos en los campos de entrada
    if (alturaGuardada !== null && temperaturaGuardada !== null &&
        afectacionMovMasaGuardada !== null
        ) {
        document.getElementById('altura').value = alturaGuardada;
        document.getElementById('temperatura').value = temperaturaGuardada;
        document.getElementById('afectacionMovMasa').value = afectacionMovMasaGuardada;
    }


    
}

// Llamar a la función para cargar los datos almacenados
cargarDatosAlmacenados();


// Función para calcular el piso térmico
function calcularPisoTermico() {
    let altura = parseFloat(document.getElementById('altura').value);
    let temperatura = parseFloat(document.getElementById('temperatura').value);
    let resultadoPisosTermicos = document.getElementById('resultadoPisosTermicos');

    let pisoTermico = "";

    if (altura <= 1000 && temperatura > 24) {
        pisoTermico = "Cálido ";
    } else if (altura <= 2000 && temperatura >= 18 && temperatura <= 24) {
        pisoTermico = "Templado ";
    } else if (altura <= 3000 && temperatura >= 12 && temperatura <= 18) {
        pisoTermico = "Frío";
    } else if (altura <= 3600 && temperatura >= 8 && temperatura <= 12) {
        pisoTermico = "Muy frío";
    } else if (altura <= 4200 && temperatura >= 4 && temperatura <= 8) {
        pisoTermico = "Extremadamente frío ";
    } else if (altura <= 4700 && temperatura >= 1.5 && temperatura <= 4) {
        pisoTermico = "Subnival";
    } else if (altura > 4700 && temperatura < 1.5) {
        pisoTermico = "Nival";
    } else {
        pisoTermico = "¡Datos inconcretos!";
    }

    // Almacenar los datos en localStorage
    localStorage.setItem('pisoTermico', encodeURIComponent(pisoTermico));
    localStorage.setItem('altura', altura);
    localStorage.setItem('temperatura', temperatura);

    // Mostrar el resultado en la página actual
    resultadoPisosTermicos.value = pisoTermico;
    
    // Mostrar el botón "Exportar"
    let exportarBtn = document.getElementById('exportarBtn');
    exportarBtn.style.display = "block";

}

// -------------------------⭐ PENDIENTE  ⭐----------------------------------------

function calcularTipo() {
  const porcentaje = parseFloat(document.getElementById("porcentaje").value);
  let tipo = "";

  if (porcentaje >= 0 && porcentaje <= 1) {
    tipo = "A nivel";
  } else if (porcentaje <= 3) {
    tipo = "Plana";
  } else if (porcentaje <= 7) {
    tipo = "Ligeramente inclinada";
  } else if (porcentaje <= 12) {
    tipo = "Moderadamente inclinada";
  } else if (porcentaje <= 25) {
    tipo = "Fuertemente inclinada";
  } else if (porcentaje <= 50) {
    tipo = "Ligeramente escarpada";
  } else if (porcentaje <= 75) {
    tipo = "Moderadamente escarpada";
  } else {
    tipo = "Fuertemente escarpada";
  }

  document.getElementById("tipo").value = tipo;
}

// -------------------------⭐ EROSIÓN HÍDRICA  ⭐----------------------------------------
function calcularErosion () {
    // Obtener referencias a los elementos por su ID
    const parametroErosion = document.getElementById("parametroErosion");
    const variacionErosion = document.getElementById("variacionErosion");

    // Agregar evento input al campo de parametro
    parametroErosion.addEventListener("input", function () {
        const parametro = parseFloat(parametroErosion.value);

        let resultadoErosion = "";
        if (!isNaN(parametro)) {
        if (parametro == 0) {
            resultadoErosion = "Sin erosión";
        } else if (parametro >= 1 && parametro < 5) {
            resultadoErosion = "Ligera";
        } else if (parametro >= 25 && parametro < 10) {
            resultadoErosion = "Moderada";
        } else if (parametro >= 10 && parametro < 15) {
            resultadoErosion = "Severa";
        } else {
            resultadoErosion = "Sin clasificación";
        }
        } 

        variacionErosion.value = resultadoErosion;
    });

}

// -------------------------⭐ MOVIMIENTO DE MASA  ⭐----------------------------------------

function calcularMovMasa() {
    let afectacionMovMasa = parseFloat(document.getElementById('afectacionMovMasa').value);
    let resultadoMovMasa = document.getElementById('resultadoMovMasa');

    let movMasa = "";

    if (afectacionMovMasa <= 0 ) {
        movMasa = "No hay";
    } else if (afectacionMovMasa < 10 ) {
        movMasa = "Pocas";
    } else if (afectacionMovMasa >= 10 && afectacionMovMasa <= 24 ) {
        movMasa = "Frecuentes";
    } else if (afectacionMovMasa >= 25 && afectacionMovMasa <= 74 ) {
        movMasa = "Abundantes";
    } else if (afectacionMovMasa >= 75) {
        movMasa = "Muy abundantes";
    } else {
        movMasa = "¡Datos inconcretos!";
    }

    // Almacenar los datos en localStorage
    localStorage.setItem('movMasa', encodeURIComponent(movMasa));
    localStorage.setItem('afectacionMovMasa', afectacionMovMasa);

    // Mostrar el resultado en la página actual
    resultadoMovMasa.value = movMasa;
    
    // Mostrar el botón "Exportar"
    let exportarBtn = document.getElementById('exportarBtn');
    exportarBtn.style.display = "block";

}

// -------------------------⭐ EROSION HÍDRICA ⭐----------------------------------------

function calcularErosion() {
    let perdidaSuelo = parseFloat(document.getElementById('perdidaSuelo').value);
    let resultadoErosion = document.getElementById('resultadoErosion');

    let erosion = "";

    if (perdidaSuelo <=24 ) {
        erosion = "Sin erosión";
    } else if (perdidaSuelo == 25 ) {
        erosion = "Ligera";
    } else if (perdidaSuelo > 25 && perdidaSuelo <= 74 ) {
        erosion = "Moderada";
    } else if (perdidaSuelo >= 75 && perdidaSuelo < 100  ) {
        erosion = "Severa";
    } else if (perdidaSuelo == 100) {
        erosion = "Muy Severa";
    } else {
        erosion = "¡Datos no validos!";
    }

    // Almacenar los datos en localStorage
    localStorage.setItem('erosion', encodeURIComponent(erosion));
    localStorage.setItem('perdidaSuelo', perdidaSuelo);

    // Mostrar el resultado en la página actual
    resultadoErosion.value = erosion;
    
    // Mostrar el botón "Exportar"
    let exportarBtn = document.getElementById('exportarBtn');
    exportarBtn.style.display = "block";

}