function intro_calcular() {
    var intro = introJs();
    intro.setOptions({
            steps: [
                { element: document.getElementById(''),
                intro: 'Hola, soy tu eco-asistente de voz <audio autoplay class="w-100 mt-3" controls><source src="../assets/mp3/intro1.mp3" type="audio/mpeg"></audio>presiona Next para avanzar',
                step: 0,
                 position: 'right',
                 x: 100, // Coordenada X
                 y: 0, // Coordenada Y
                 },
                { element: document.getElementById('intro1'), 
                intro: 'Este es el formulario que debes diligenciar con la información de tu suelo<audio autoplay class="w-100 mt-3" controls><source src="../assets/mp3/intro2.mp3" type="audio/mpeg"></audio>presiona Next para avanzar', step: 1 },
                { element: document.getElementById('intro2'),
                 intro: 'Estos campos con un color oscuro se llenan automáticamente luego de hacer el siguiente paso <audio autoplay class="w-100 mt-3" controls><source src="" type="audio/mpeg"></audio>presiona Next para avanzar', step: 2 },
                { element: document.getElementById('intro3'),
                 intro: 'presiona este icono para abrir una ventana emergente donde completaras los campos con su información correspondiente, luego haz clic en el botón para calcular la información y haz clic en la "X" para volver <audio autoplay class="w-100 mt-3" controls><source src="" type="audio/mpeg"></audio>presiona Next para avanzar', step: 3 },
                 
                 { element: document.getElementById('intro4'),
                 intro: 'Luego de llenar todos los campos presiona "CALCULAR PROCESO" para que el sistema verifique la información digitada <br> <audio autoplay class="w-100 mt-3" controls><source src="" type="audio/mpeg"></audio>presiona Next para avanzar', step: 4 },
                 { element: document.getElementById('intro5'),
                 intro: 'El sistema arrojará el resultado con la información de como están clasificado tu suelo, según la información digitada <br> <audio autoplay class="w-100 mt-3" controls><source src="" type="audio/mpeg"></audio>presiona Next para avanzar', step: 4 },
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