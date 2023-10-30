   function familaTextura(arena, limo, arcilla) {
        // Verifica que los porcentajes sean válidos
        if (arena < 0 || arena > 100) {
            throw new Error("El porcentaje de arena debe ser un valor entre 0 y 100");
        }
        if (limo < 0 || limo > 100) {
            throw new Error("El porcentaje de limo debe ser un valor entre 0 y 100");
        }
        if (arcilla < 0 || arcilla > 100) {
            throw new Error("El porcentaje de arcilla debe ser un valor entre 0 y 100");
        }

        // Determina el tipo de textura
        if (arena > 70) {
            return "Arenoso";
        } else if (arena >= 50 && arena <= 70) {
            if (limo >= 20 && limo <= 35) {
                return "Franco-arenosa";
            } else {
                return "Franco";
            }
        } else if (arena >= 25 && arena <= 50) {
            if (limo >= 20 && limo <= 35) {
                return "Franco-arcillosa";
            } else if (arcilla >= 15 && arcilla <= 30) {
                return "Franco";
            } else {
                return "Limosa";
            }
        } else if (arcilla >= 45 && arcilla <= 60) {
            return "Arcillosa";
        } else if (arcilla >= 60 && arcilla <= 75) {
            return "Arcilloso-pesado";
        } else if (arcilla >= 75 && arcilla <= 90) {
            return "Franco-limosa";
        } else if (arcilla >= 90 && arcilla <= 95) {
            return "Franco-arenoso-limoso";
        } else if (arcilla >= 95 && arcilla <= 99) {
            return "Franco-limoso-arenoso";
        } else {
            return "Arcillo-limosa";
        }
        
    }

    // Evento de clic del botón de calcular
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();

        const arena = parseInt(document.querySelector("#arena").value);
        const limo = parseInt(document.querySelector("#limo").value);
        const arcilla = parseInt(document.querySelector("#arcilla").value);

        const texture = familaTextura(arena, limo, arcilla);

        document.querySelector("#resultado_textura").value = texture;
        // Llamar a la función color cuando el valor cambie
        color();

        Swal.fire({
            icon: 'success',
            title: 'Datos de la textura guardados y exportados',
            showConfirmButton: false,
            timer: 2000,

            })
        // Almacenar los datos en localStorage
        localStorage.setItem('texture', encodeURIComponent(texture));

        // Mostrar el resultado en la página actual
        resultado_textura.value = texture;
            
        });
    

    function color(){
        const colorSelector = document.getElementById('resultado_textura');
        const svgFiguras = document.querySelectorAll('.cls-1'); // Selecciona las figuras SVG

        const selectedColor = colorSelector.value;

        // Cambiar el color del trazo (stroke) de las figuras SVG
        svgFiguras.forEach((figura) => {
            const figuraColor = figura.getAttribute('data-color');
            if (figuraColor === selectedColor) {
                figura.style.fill = '#682a00'; // Cambia el color del trazo a negro
            } else {
                figura.style.fill = '#5c66329f'; // Restaura el color del trazo original
            }
        });
    }


    function grupoTexture() {
        const resultado_textura = document.querySelector("#resultado_textura");
        const grupoTexturaInput = document.querySelector("#grupoTexturaInput");
    
        const selectedTexture = resultado_textura.value;
    
        // Cambiar el valor del campo de texto según la condición
        if (selectedTexture === "Arcillosa") {
            grupoTexturaInput.value = "Muy finos";
        } else {
            grupoTexturaInput.value = "none";
        }
    }
    
    

    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        
        grupoTexture();
        // Almacenar los datos en localStorage
        localStorage.setItem('Grupo texture', encodeURIComponent("selectedTexture"));
    });
    // Llama a la función color cuando se carga la página para establecer el color inicial
    color();