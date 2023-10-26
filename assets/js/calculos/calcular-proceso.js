document.getElementById('sueloForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const cond = {
        
        // Agrega más campos aquí para otros datos

        pendiente: parseFloat(document.getElementById("pendiente").value),
        erosion: document.getElementById("erosion").value,
        movimientosEnMasa: document.getElementById("movimientosEnMasa").value,
        drenajeNatural: document.getElementById("drenajeNatural").value,
        inundaciones: document.getElementById("inundaciones").value,
        encharcamientos: document.getElementById("encharcamientos").value,
        profundidadEfectiva: parseFloat(document.getElementById("profundidadEfectiva").value),
        familia_textura: document.getElementById("familia_textura").value,
        grupo_textural: document.getElementById("grupo_textural").value,
        fragmentosEnElSuelo: parseFloat(document.getElementById("fragmentosEnElSuelo").value),
        pedregosidadSuperficial: parseFloat(document.getElementById("pedregosidadSuperficial").value),
        afloramientoRocoso: parseFloat(document.getElementById("afloramientoRocoso").value),
        fertilidad: document.getElementById("fertilidad").value,
        contenidoDeSales: document.getElementById("contenidoDeSales").value,
        contenidoDeSodio: document.getElementById("contenidoDeSodio").value,
        Na_intercambiable_sales_y_sodio: document.getElementById("Na_intercambiable_sales_y_sodio").value,
        salesYSodio_area_afectada: document.getElementById("salesYSodio_area_afectada").value,
        profundidadDeNa: parseFloat(document.getElementById("profundidadDeNa").value),
        caMg: document.getElementById("caMg").value,
        saturacionDeAluminio: parseFloat(document.getElementById("saturacionDeAluminio").value),
        distribucionDeLluvias: parseFloat(document.getElementById("distribucionDeLluvias").value),
        pisoTermico: document.getElementById("pisoTermico").value,
        condicionDeHumedad: document.getElementById("condicionDeHumedad").value,
        temperaturaHeladas: parseFloat(document.getElementById("temperaturaHeladas").value),
        heladas: document.getElementById("heladas").value,
    };

    // Llama a la función para determinar la clase de suelo y muestra el resultado
    function determinarClaseDeSuelo(cond) {
            // Verificar las cond comunes a todas las clases
            if (
                cond.pendiente >= 0 && cond.pendiente <= 3 &&
                cond.erosion === "No hay" &&
                cond.movimientosEnMasa === "No hay" &&
                cond.drenajeNatural === "Bien drenado" &&
                cond.inundaciones === "No se presentan" &&
                cond.encharcamientos === "No hay" &&
                cond.profundidadEfectiva > 100 &&
                cond.familia_textura === "Francosa fina" &&
                cond.grupo_textural === "Moderadamente finos" &&
                cond.fragmentosEnElSuelo < 3 &&
                cond.pedregosidadSuperficial < 0.1 &&
                cond.afloramientoRocoso < 0.1 &&
                (cond.fertilidad === "Muy alta" || cond.fertilidad === "Alta" || cond.fertilidad === "Media") &&
                cond.contenidoDeSales === "No se presentan" &&
                cond.contenidoDeSodio === "No se presenta" &&
                cond.Na_intercambiable_sales_y_sodio === "No hay" &&
                cond.salesYSodio_area_afectada === "No hay" &&
                cond.profundidadDeNa > 100 &&
                cond.caMg === "Normal" &&
                cond.saturacionDeAluminio < 15 &&
                cond.distribucionDeLluvias === 1 &&
                (cond.pisoTermico === "Cálido" || cond.pisoTermico === "Templado" || cond.pisoTermico === "Frío") &&
                cond.condicionDeHumedad === "Húmedo seco" &&
                cond.temperaturaHeladas > 12 &&
                cond.heladas === "No hay"
            ) {
                return "Clase 1";
            } else if (
                cond.pendiente >= 0 && cond.pendiente <= 7 &&
                (cond.erosion === "No hay" || cond.erosion === "Ligero") &&
                cond.movimientosEnMasa === "No hay" &&
                (cond.drenajeNatural === "Bien drenado" || cond.drenajeNatural === "Moderado") &&
                (cond.inundaciones === "No se presentan" || cond.inundaciones === "Raras" || cond.inundaciones === "Extremadamente cortas" || cond.inundaciones === "Muy cortas") &&
                (cond.encharcamientos === "No se presentan" || cond.encharcamientos === "Raros" || cond.encharcamientos === "Extremadamente cortos" || cond.encharcamientos === "Muy cortos") &&
                cond.profundidadEfectiva > 75 &&
                (cond.familia_textura === "Francosa fina" || cond.familia_textura === "Limosa fina" || cond.familia_textura === "Contrastadas") &&
                cond.grupo_textural === "Moderadamente finos" &&
                cond.fragmentosEnElSuelo < 3 &&
                cond.pedregosidadSuperficial < 0.1 &&
                (cond.afloramientoRocoso >= 0.1 && cond.afloramientoRocoso <= 2) &&
                (cond.fertilidad === "Muy alta" || cond.fertilidad === "Alta" || cond.fertilidad === "Media") &&
                (cond.contenidoDeSales === "No se presentan" || cond.contenidoDeSales === "Ligero") &&
                cond.contenidoDeSodio === "No se presenta" &&
                cond.salesYSodio === "No hay" &&
                cond.Na_intercambiable_sales_y_sodio === "No hay" &&
                cond.salesYSodio_area_afectada < 5 &&
                cond.profundidadDeNa > 100 &&
                (cond.caMg === "Normal" || cond.caMg === "Estrecha >50") &&
                cond.saturacionDeAluminio < 15 &&
                (cond.distribucionDeLluvias === 1 || cond.distribucionDeLluvias === 2) &&
                (cond.pisoTermico === "Cálido" || cond.pisoTermico === "Templado" || cond.pisoTermico === "Frío") &&
                cond.condicionDeHumedad === "Húmedo a seco" &&
                cond.temperaturaHeladas > 12 && 
                cond.heladas === "baja frecuencia"
            ) 
            {
                return "Clase 2";
            } else {
                return "No se pudo determinar la clase de suelo";
            }
            
            
        }

        const claseSuelo = determinarClaseDeSuelo(cond);
        
        // conversion
        function conversion_clase(){

            if(claseSuelo === "Clase 1")
            {return "Clase_1";}
            
            else if(claseSuelo === "Clase 2")
            { return "Clase_2";}
            else {
                return "error"
            }

        }
        const conversionClase = conversion_clase();
        // fin conversion

        // Obtén el elemento donde deseas mostrar el resultado en formato HTML.
        const resultadoClases = document.getElementById('Rclase');
        
        // Define el código HTML que deseas mostrar.
        const claseHTML = `
        <div class="info-horizontal border-2 card p-4">
            <div class="ps-0 ps-md-3 mt-3 mt-md-0">
              <div class="mt-n5 card col-lg-4 border-2 text-center" >
                <h5 class="text-dark mt-2">${claseSuelo}</h5>
              </div>
              <p class="text-dark mt-3">El suelo ha sido identificado como ${claseSuelo} </p>
              <a class="text-dark icon-move-right" onclick="open${conversionClase}()">
                Ver más sobre ${claseSuelo}
                <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        `;
        
        // Establece el contenido HTML del elemento "resultado" con el código HTML generado.
        resultadoClases.innerHTML = claseHTML;


    function grupo(){
        if(claseSuelo === "Clase 1" || claseSuelo === "Clase 2" || claseSuelo === "Clase 3" || claseSuelo === "Clase 4")
        {return "Grupo 1";}
        
        else if(claseSuelo === "Clase 5" || claseSuelo === "Clase 6" || claseSuelo === "Clase 7")
        { return "Grupo 2";}

        else if(claseSuelo === "Clase 8")
        {return "Grupo 3";}
        else{
        return "No identificado"
        }
    }

        const grupoCap = grupo();

        // conversion
        function conversion_grupo(){

            if(grupoCap === "Grupo 1")
            {return "Grupo_1";}
            
            else if(grupoCap === "Grupo 2")
            { return "Grupo_2";}
            else {
                return "error_grupo"
            }

        }
        const conversionGrupo = conversion_grupo();
        // fin conversion

        // Obtén el elemento donde deseas mostrar el resultado en formato HTML.
        const resultadoGrupo = document.getElementById('Rgrupo');
            
        // Define el código HTML que deseas mostrar.
        const grupoHTML = `
          <div class="info-horizontal border-2 card p-4">
            <div class="ps-0 ps-md-3 mt-3 mt-md-0">
              <div class="mt-n5 card col-lg-4 border-2 text-center" >
                <h5 class="text-dark mt-2">${grupoCap}</h5>
              </div>
              <p class="text-dark mt-3">El suelo ha sido identificado como ${grupoCap} </p>
              <a class="text-dark icon-move-right" onclick="open${conversionGrupo}()">
                Ver más sobre ${grupoCap}
                <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        `;
        
        // Establece el contenido HTML del elemento "resultado" con el código HTML generado.
        resultadoGrupo.innerHTML = grupoHTML;
    
});
