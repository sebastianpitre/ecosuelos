// PISOS TERMICOS-----------------------------------------------
function calcularPisoTermico() {
    let altura = parseFloat(document.getElementById('altura').value);
    let temperatura = parseFloat(document.getElementById('temperatura').value);
    let resultado = document.getElementById('resultado');

    if (altura <= 1000 && temperatura > 24) {
        resultado.value = `Piso termico: Cálido`;
    } else if (altura <= 2000 && temperatura >= 18 && temperatura <= 24) {
        resultado.value = `Piso termico: Templado`;
    } else if (altura <= 3000 && temperatura >= 12 && temperatura <= 18) {
        resultado.value = `Piso termico: Frío`;
    } else if (altura <= 3600 && temperatura >= 8 && temperatura <= 12) {
        resultado.value = `Piso termico: Muy frío`;
    } else if (altura <= 4200 && temperatura >= 4 && temperatura <= 8) {
        resultado.value = `Piso termico: Extremadamente frío`;
    } else if (altura <= 4700 && temperatura >= 1.5 && temperatura <= 4) {
        resultado.value = `Piso termico: Subnival`;
    } else if (altura > 4700 && temperatura < 1.5) {
        resultado.value = `Piso termico: Nival`;
    } else {
        resultado.value = `Escriba datos concretos`;
    }
}