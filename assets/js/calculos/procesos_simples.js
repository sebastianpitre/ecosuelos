

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

    Swal.fire({
        icon: 'success',
        title: 'Datos guardados',
        showConfirmButton: false,
        timer: 2000,

        })

    // Almacenar los datos en localStorage
    localStorage.setItem('pisoTermico', encodeURIComponent(pisoTermico));
    localStorage.setItem('altura', altura);
    localStorage.setItem('temperatura', temperatura);

    // Mostrar el resultado en la página actual
    resultadoPisosTermicos.value = pisoTermico;

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


    Swal.fire({
        icon: 'success',
        title: 'Datos guardados',
        showConfirmButton: false,
        timer: 2000,

        })
    // Almacenar los datos en localStorage
    localStorage.setItem('movMasa', encodeURIComponent(movMasa));
    localStorage.setItem('afectacionMovMasa', afectacionMovMasa);

    // Mostrar el resultado en la página actual
    resultadoMovMasa.value = movMasa;
    

}

// -------------------------⭐ EROSION HÍDRICA ⭐----------------------------------------

function calcularErosion() {
    let perdidaSuelo = parseFloat(document.getElementById('perdidaSuelo').value);
    let resultadoErosion = document.getElementById('resultadoErosion');

    let R_erosion = "";

    if (perdidaSuelo <=24 ) {
        R_erosion = "Sin erosión";
    } else if (perdidaSuelo == 25 ) {
        R_erosion = "Ligera";
    } else if (perdidaSuelo > 25 && perdidaSuelo <= 74 ) {
        R_erosion = "Moderada";
    } else if (perdidaSuelo >= 75 && perdidaSuelo < 100  ) {
        R_erosion = "Severa";
    } else if (perdidaSuelo == 100) {
        R_erosion = "Muy Severa";
    } else {
        R_erosion = "¡Datos no validos!";
    }

    Swal.fire({
        icon: 'success',
        title: 'Datos guardados',
        showConfirmButton: false,
        timer: 2000,

        })
    // Almacenar los datos en localStorage
    localStorage.setItem('R_erosion', encodeURIComponent(R_erosion));
    localStorage.setItem('perdidaSuelo', perdidaSuelo);

    // Mostrar el resultado en la página actual
    resultadoErosion.value = R_erosion;
    

}