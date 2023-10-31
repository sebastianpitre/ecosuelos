function iniciarRecorrido() {
    var intro = introJs();
    intro.setOptions({
            steps: [
                { element: document.getElementById(''),
                intro: '<h6>Hola, soy tu eco-asistente de voz</h6> <audio autoplay class="w-100 mt-3" controls><source src="../assets/mp3/intro1.mp3" type="audio/mpeg"></audio>presiona el botón Next para avanzar',
                step: 0,
                 position: 'right',
                 x: 100, // Coordenada X
                 y: 0, // Coordenada Y
                 },
                { element: document.getElementById('intro1'), 
                intro: '<h6>Este es el formulario que debes diligenciar con la información de tu suelo</h6> <audio autoplay class="w-100 mt-3" controls><source src="../assets/mp3/intro2.mp3" type="audio/mpeg"></audio>', step: 1 },
                { element: document.getElementById('button[data-step="2"]'),
                 intro: "Haga clic aquí para editar su perfil", step: 2 },
                { element: document.getElementById('button[data-step="3"]'),
                 intro: "Haga clic aquí para cerrar la sesión", step: 3 }
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