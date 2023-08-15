    const toggleButton = document.getElementById('toggleButton');
    const miVideo = document.getElementById('miVideo');
    const animateText = document.getElementById('animate-text1');
    let animationActive = false;

    miVideo.autoplay = false; // Pausar el video al inicio
    miVideo.controls = false; // Ocultar los controles del video al inicio

    toggleButton.addEventListener('click', () => {
        // Toggle para la animación
        var tambaleoElements = document.querySelectorAll('.tambaleo');
        if (!animationActive) {
            tambaleoElements.forEach(function(element) {
                element.style.animation = 'tambaleoAnim 2s infinite alternate ease-in-out';
            });
            animationActive = true;
        } else {
            tambaleoElements.forEach(function(element) {
                element.style.animation = 'none';
            });
            animationActive = false;
        }

        // Toggle para el video
        if (miVideo.paused) {
            miVideo.play();
            miVideo.controls = true; // Mostrar los controles cuando se reproduce
        } else {
            miVideo.pause();
            miVideo.controls = false; // Ocultar los controles cuando está en pausa
        }

        // Toggle para la animación de texto
        if (animationActive) {
            animateText.classList.remove('zoom');
        } else {
            animateText.classList.add('zoom');
        }
    });