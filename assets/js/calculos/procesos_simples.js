// -------------------------⭐ PISOS TERMICOS  ⭐----------------------------------------
// Función para cargar los datos almacenados, si existen
function cargarDatosAlmacenados() {
    const alturaGuardada = localStorage.getItem('altura');
    const temperaturaGuardada = localStorage.getItem('temperatura');

    // Si hay datos guardados, cargarlos en los campos de entrada
    if (alturaGuardada !== null && temperaturaGuardada !== null) {
        document.getElementById('altura').value = alturaGuardada;
        document.getElementById('temperatura').value = temperaturaGuardada;
    }
}

// Llamar a la función para cargar los datos almacenados
cargarDatosAlmacenados();


// Función para calcular el piso térmico
function calcularPisoTermico() {
    let altura = parseFloat(document.getElementById('altura').value);
    let temperatura = parseFloat(document.getElementById('temperatura').value);
    let resultado = document.getElementById('resultado');

    let pisoTermico = "";

    if (altura <= 1000 && temperatura > 24) {
        pisoTermico = "Cálido 🥵";
    } else if (altura <= 2000 && temperatura >= 18 && temperatura <= 24) {
        pisoTermico = "Templado 🤒";
    } else if (altura <= 3000 && temperatura >= 12 && temperatura <= 18) {
        pisoTermico = "Frío😖";
    } else if (altura <= 3600 && temperatura >= 8 && temperatura <= 12) {
        pisoTermico = "Muy frío";
    } else if (altura <= 4200 && temperatura >= 4 && temperatura <= 8) {
        pisoTermico = "Extremadamente frío 🥶";
    } else if (altura <= 4700 && temperatura >= 1.5 && temperatura <= 4) {
        pisoTermico = "Subnival😰";
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
    resultado.value = pisoTermico;
    
    // Mostrar el botón "Exportar"
    let exportarBtn = document.getElementById('exportarBtn');
    exportarBtn.style.display = "block";


}
