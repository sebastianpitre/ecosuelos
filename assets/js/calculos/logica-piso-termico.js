
let altura = parseFloat(prompt('Digite el dato (h): '));
let temperatura = parseFloat(prompt('Digite el dato (C°): '));

if(altura<=1000 && temperatura > 24){
    document.write(
        "altura: ", altura, "<br>",
        "temperatura: ", temperatura, "<br>",
        "Piso termico: Calido"
    );
} 
else if(altura<=2000 && (temperatura >= 18 && temperatura <=24)){
    document.write(
        "altura: ", altura, "<br>",
        "temperatura: ", temperatura, "<br>",
        "Piso termico: Templado"
    );
} 
else if(altura<=3000 && (temperatura >= 12 && temperatura <=18)){
    document.write(
        "altura: ", altura, "<br>",
        "temperatura: ", temperatura, "<br>",
        "Piso termico: Frío"
    );
}
else if(altura<=3600 && (temperatura >= 8 && temperatura <=12)){
    document.write(
        "altura: ", altura, "<br>",
        "temperatura: ", temperatura, "<br>",
        "Piso termico: Muy frío"
    );
}
else if(altura<=4200 && (temperatura >= 4 && temperatura <=8)){
    document.write(
        "altura: ", altura, "<br>",
        "temperatura: ", temperatura, "<br>",
        "Piso termico: Extremadamente frío"
    );
}
else if(altura<=4700 && (temperatura >= 1.5 && temperatura <=4)){
    document.write(
        "altura: ", altura, "<br>",
        "temperatura: ", temperatura, "<br>",
        "Piso termico: Subnival"
    );
}
else if(altura>4700 && temperatura < 1.5){
    document.write(
        "altura: ", altura, "<br>",
        "temperatura: ", temperatura, "<br>",
        "Piso termico: Nival"
    );
}
else{
    document.write(
        "escriba datos concretos"
    )
}