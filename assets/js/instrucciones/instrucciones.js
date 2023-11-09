function intro_calcular() {
    var intro = introJs();
    intro.setOptions({
            steps: [
                { element: document.getElementById(''),
                intro: 'Hola, soy tu asistente de voz, y te voy a explicar paso a paso como funciona ecosuelos<audio autoplay class="w-100 mt-3" controls><source src="../assets/mp3/calcular1.mp3" type="audio/mpeg"></audio>presiona siguiente para avanzar',
                step: 0,
                 position: 'right',
                 x: 100, // Coordenada X
                 y: 0, // Coordenada Y
                 },
                { element: document.getElementById('intro1'), 
                intro: 'Este es el formulario que debes diligenciar con las características de tus suelos<audio autoplay class="w-100 mt-3" controls><source src="../assets/mp3/calcular2.mp3" type="audio/mpeg"></audio>presiona siguiente para ver más detalles', step: 1 },
                { element: document.getElementById('intro2'),
                 intro: 'En el formulario nos encontramos con las diferentes características del suelo<audio autoplay class="w-100 mt-3" controls><source src="../assets/mp3/calcular3.mp3" type="audio/mpeg"></audio>presiona siguiente para avanzar', step: 2 },
                { element: document.getElementById('intro3'),
                 intro: 'presiona este icono para abrir una ventana emergente donde completaras los campos con su información correspondiente, luego haz clic en el botón para calcular la información y haz clic en la "X" para volver <audio autoplay class="w-100 mt-3" controls><source src="../assets/mp3/example.mp3" type="audio/mpeg"></audio>presiona Next para avanzar', step: 3 },
                 
                 { element: document.getElementById('intro4'),
                 intro: 'Luego de llenar todos los campos presiona "CALCULAR PROCESO" para que el sistema verifique la información digitada <br> <audio autoplay class="w-100 mt-3" controls><source src="../assets/mp3/example.mp3" type="audio/mpeg"></audio>presiona Next para avanzar', step: 4 },
                 { element: document.getElementById('intro5'),
                 intro: 'El sistema arrojará el resultado con la información de como están clasificado tu suelo, según la información digitada <br> <audio autoplay class="w-100 mt-3" controls><source src="../assets/mp3/example.mp3" type="audio/mpeg"></audio>presiona Next para avanzar', step: 4 },
                 { element: document.getElementById('intro6'),
                 intro: 'El sistema arrojará el resultado con la información de como están clasificado tu suelo, según la información digitada <br> <audio autoplay class="w-100 mt-3" controls><source src="../assets/mp3/example.mp3" type="audio/mpeg"></audio>presiona Next para avanzar', step: 5 },
                 ]
           });
           intro.start();
       }
// Estilo personalizado para el tooltip */ es un CSS personalizado para que pueda modificarce el toltip
//.introjs-custom-tooltip {
//    max-width: 400px; /* Ancho máximo del tooltip */
//    font-size: 16px; /* Tamaño de fuente personalizado */
//    /* Otros estilos personalizados, como el fondo, el color de texto, el margen, etc. */
//}