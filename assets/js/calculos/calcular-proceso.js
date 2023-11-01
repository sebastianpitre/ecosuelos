document.getElementById('sueloForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const cond = {
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

    // --------------CLASE--------------
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
          return "Clase - No identificada";
      }
            
            
    }

    const claseSuelo = determinarClaseDeSuelo(cond);
    
    // conversion clase
    function conversion_clase(){

        if(claseSuelo === "Clase 1")
        {return "Las tierras de la clase 1 no presentan o tienen muy pocas limitaciones para el uso agropecuario, siendo éstas de grado ligero, fácilmente corregibles. Son aptas para una de cultivos adaptados a las condiciones ecológicas, así como para ganadería intensiva con pastos de corte.";}
        
        else if(claseSuelo === "Clase 2")
        { return "Clase_2";}
        else {
            return "No clasificada"
        }

    }

    const conversionClase = conversion_clase();
    // fin conversion

    // Obtén el elemento donde deseas mostrar el resultado en formato HTML.
    const resultadoClases = document.getElementById('Rclase');
    
    // Define el código HTML que deseas mostrar.
    const claseHTML = `
    <div class="info-horizontal border-2 card p-4">
        <div class="p-2 mt-3 mt-md-0">
          <div class="mt-n5 card bg-dark col-lg-auto border-2 text-center" >
            <h5 class="text-white mt-2">${claseSuelo}</h5>
          </div>
          <p class="text-dark mt-3">El suelo ha sido identificado como ${claseSuelo} </p>
          
          <div class="col-md-12 mx-auto mt-n3">
            <div class="accordion" id="accordionRental4">
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingFour">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Más información
                    <i class="collapse-close fa fa-arrow-down text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-arrow-down text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionRental4">
                  <div class="accordion-body text-sm opacity-8">
                    ${conversionClase}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
    
    // Establece el contenido HTML del elemento "resultado" con el código HTML generado.
    resultadoClases.innerHTML = claseHTML;

    // --------------SUBCLASE--------------
    // 1
    function subclase(){
      if(claseSuelo === "Clase 1" || claseSuelo === "Clase 2" || claseSuelo === "Clase 3" || claseSuelo === "Clase 4")
      {return "Pendiente (P)";}
      
      else if(claseSuelo === "Clase 5" || claseSuelo === "Clase 6" || claseSuelo === "Clase 7")
      { return "Erosión (E)";}

      else if(claseSuelo === "Clase 8")
      {return "Humedad (H)";}
      else{
      return "No identificada"
      }
    }

    const Rsubclase = subclase();

    // conversion subclase
    function conversion_subclase(){

      if(Rsubclase === "Pendiente (P)")
      {return "Se refiere al grado de inclinación de la pendiente expresada en porcentaje. La pendiente del suelo y la forma de la superficie de la tierra, son componentes de la configuración de la superficie de la tierra.<br>El factor pendiente interviene en la escorrentía, el drenaje natural, la infiltración, la clase y grado de erosión y en el uso y el manejo de los suelos. Incluye las variables, gradiente, longitud, forma, complejidad y exposición. En este sistema de clasificación únicamente se tiene en cuenta el gradiente, expresado en porcentaje (%).";}
      
      else if(Rsubclase === "Erosión (E)")
      { return "Erosion";}
      else {
          return "No clasificada"
      }

    }
    const conversionSubclase = conversion_subclase();
    // fin conversion

    // 2
    const resultadoSubclase = document.getElementById('Rsubclase');

    // 3
    // Define el código HTML que deseas mostrar.
    const subclaseHTML = `
      <div class="info-horizontal border-2 card p-4">
        <div class="p-2 mt-3 mt-md-0">
          <div class="mt-n5 card bg-dark col-lg-auto border-2 text-center" >
            <h5 class="text-white mt-2">Subclase - ${Rsubclase}</h5>
          </div>
          <p class="text-dark mt-3">El suelo ha sido identificado como ${Rsubclase} </p>

          <div class="col-md-12 mx-auto mt-n3">
            <div class="accordion" id="accordionRental2">
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingTwo">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Más información
                    <i class="collapse-close fa fa-arrow-down text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-arrow-down text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionRental2">
                  <div class="accordion-body text-sm opacity-8">
                  ${conversionSubclase}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;

    // 4
    // Establece el contenido HTML del elemento "resultado" con el código HTML generado.
    resultadoSubclase.innerHTML = subclaseHTML;
    // --------------GRUPO DE CAPACIDAD--------------

    function grupo(){
        if(claseSuelo === "Clase 1" || claseSuelo === "Clase 2" || claseSuelo === "Clase 3" || claseSuelo === "Clase 4")
        {return "Grupo 1";}
        
        else if(claseSuelo === "Clase 5" || claseSuelo === "Clase 6" || claseSuelo === "Clase 7")
        { return "Grupo 2";}

        else if(claseSuelo === "Clase 8")
        {return "Grupo 3";}
        else{
        return "Grupo cap - No identificado"
        }
    }

    const grupoCap = grupo();

    // conversion
    function conversion_grupo(){

        if(grupoCap === "Grupo 1")
        {return "Grupo de tierras con capacidad para ser utilizadas en agricultura y ganadería tecnificada de tipo intensivo y semi-intensivo (clases 1 a 4). <br> tienen capacidad para ser en agricultura y ganadería en sistemas de producción cuya intensidad de manejo y variedad de especies vegetales varía desde muy intensiva en la clase 1 hasta muy restringida en la clase 4; en ese mismo sentido se incrementan las prácticas de manejo y conservación. <br> se consideran con capacidad para ser utilizadas en agricultura y ganadería en forma amplia e intensiva (clase 1) a fuertemente restringida (clase 4); en ese sentido se incrementan las prácticas de manejo y conservación. Las tierras de la clase 4 pueden ser usadas en agroforestería.";}
        
        else if(grupoCap === "Grupo 2")
        { return "Grupo_2";}
        else {
            return "No clasificado"
        }

    }
    const conversionGrupo = conversion_grupo();
    // fin conversion

    // Obtén el elemento donde deseas mostrar el resultado en formato HTML.
    const resultadoGrupo = document.getElementById('Rgrupo');
        
    // Define el código HTML que deseas mostrar.
    const grupoHTML = `
      <div class="info-horizontal border-2 card p-4">
        <div class="p-2 mt-3 mt-md-0">
          <div class="mt-n5 bg-dark card col-lg-auto border-2 text-center" >
            <h5 class="text-white mt-2">${grupoCap}</h5>
          </div>
          <p class="text-dark mt-3">El suelo ha sido identificado como ${grupoCap} </p>
          
          <div class="col-md-12 mx-auto mt-n3">
            <div class="accordion" id="accordionRental3">
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingThree">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Más información
                    <i class="collapse-close fa fa-arrow-down text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-arrow-down text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionRental3">
                  <div class="accordion-body text-sm opacity-8">
                  ${conversionGrupo}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    `;
    
    // Establece el contenido HTML del elemento "resultado" con el código HTML generado.
    resultadoGrupo.innerHTML = grupoHTML;
    
});
