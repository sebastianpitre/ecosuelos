/*Datos Horizonte 1
ph=unidades de ph; 
saturación de aluminio(SAl)=%;
cic=capacidad de intercambio cationico (miliequivalentes/100 gramos) (meq/100g)
calcio=10.2 (miliequivalentes/100 centimetros cubicos) meq/100cc;
potasio=0.27 meq/100cc;
sodio=meq/l   (miliequivalentes/litro)
carbono orgánico (co)=0.9%
magnesio (mg)=6.7 meq/100cc
fosforo(p)=60 ppm (partes por millon)
DensidadAparente=1.16 g/cc
PesoAtomicoSodio=23/10
ConductividadElectrica=0.37 mS/cm (deciSiemens/centimetros)
*/

/*Datos Horizonte 2
ph=unidades de ph; 
saturación de aluminio(SAl)=%;
cic=capacidad de intercambio cationico (miliequivalentes/100 gramos) (meq/100g)
calcio=10.2 (miliequivalentes/100 centimetros cubicos) meq/100cc;
potasio=0.27 meq/100cc;
sodio=meq/l   (miliequivalentes/litro)
carbono orgánico (co)=0.9%
magnesio (mg)=6.7 meq/100cc
fosforo(p)=60 ppm (partes por millon)
DensidadAparente=1.16 g/cc
PesoAtomicoSodio=23/10
ConductividadElectrica=0.37 mS/cm (deciSiemens/centimetros)
*/

function calculo_fertilidad (ph,SAl,cic,calcio,potasio,sodio,CarbonoOrganico,ConductividadElectrica,ClimaCarbono){
//let ph=7.08, SAl=0, cic=23.46, calcio=13.74,potasio=0.38,sodio=1.21,ClimaCarbono="MEDIO";
//let CarbonoOrganico=1.78,magnesio=6.74,fosforo=86,DensidadAparente=1.16,ConductividadElectrica=0.37;
let BasesTotales,PorcentajeSaturacion;
let PorcentajeSaturacionSodio;
const PesoAtomicoSodio=(23/10);

//document.write(ph);
//Primer Horizonte (0-25 cm)
//cálculo las bases totales porque voy a estandarizar unidades meq/100 g (pag 31) para convertir calcio, magnesio y potasio 

calcio=calcio/DensidadAparente;
magnesio=magnesio/DensidadAparente;
potasio=potasio/DensidadAparente;
sodio=sodio*PesoAtomicoSodio;
BasesTotales=calcio+magnesio+potasio+sodio;
PorcentajeSaturacion=BasesTotales/(cic*100);
//divido entre 1000 para pasar de mS/cm a dS/m
ConductividadElectrica=ConductividadElectrica/1000;
PorcentajeSaturacionSodio=sodio/(cic*100);

/////calificacion del ph/////
let puntajeph=0;
if (ph<=4.5 || ph>=8.5)
    puntajeph=1;
else if((ph>=4.6 && ph<=5.0) || (ph>=7.9 && ph<=8.4 ))
    puntajeph=2;
else if((ph>=5.1 && ph<=5.5) || (ph>=7.4 && ph<=7.8 ))
    puntajeph=3;
else if(ph>=5.6 && ph<=6.0) 
    puntajeph=4;
else
    //(ph>=6.1 && ph<=7.3 ))
    puntajeph=5;

/////calificacion SAl se mide si ph<=5.5/////
let puntajeSAl=0;
if (ph<=5.5){
    if (SAl>60)
        puntajeSAl=1;
    else if(SAl<=60 && SAl<=30) 
        puntajeSAl=2;
    else if(SAl<=29 && SAl<=15) 
        puntajeSAl=3;
    else if(SAl<=14 && SAl<=5)  
        puntajeSAl=4;
    else
        //(SAl<5)  
        puntajeSAl=5;
}
/////calificacion cic/////
    let puntajecic=0;
    if (cic<5)
        puntajecic=1;
    else if(cic>=5 && cic<=10) 
        puntajecic=2;
    else if(cic>=11 && cic<=15) 
        puntajecic=3;
    else if(cic>=16 && cic<=20)  
        puntajecic=4;
    else
        //(cic>20)  
        puntajecic=5;
    
    /////calificacion BasesTotales/////
    let puntajebt=0;
    if (BasesTotales<4)
        puntajebt=0.5;
    else if(BasesTotales>=4 && BasesTotales<=8) 
        puntajebt=1;
    else if(BasesTotales>=8.1 && BasesTotales<=12) 
        puntajebt=1.5;
    else if(BasesTotales>12 && BasesTotales<=16)  
        puntajebt=2;
    else
        //(BasesTotales>16)  
        puntajebt=2.5;

    /////calificacion Porcentaje de saturación/////
    let puntajePorcentajeSaturacion=0;
    if (PorcentajeSaturacion<10)
        puntajePorcentajeSaturacion=0.5;
    else if(PorcentajeSaturacion>=10 && PorcentajeSaturacion<=35) 
        puntajePorcentajeSaturacion=1;
    else if(PorcentajeSaturacion>=36 && PorcentajeSaturacion<=50) 
        puntajePorcentajeSaturacion=1.5;
    else if(PorcentajeSaturacion>=51 && PorcentajeSaturacion<=70)  
        puntajePorcentajeSaturacion=2;
    else
        //(PorcentajeSaturacion>70)  
        puntajePorcentajeSaturacion=2.5;
    
    /////calificacion carbono orgánico/////
    let puntajeCarbonoOrganico=0;
    if (ClimaCarbono=="CALIDO"){
        if (CarbonoOrganico<0.2)
            puntajeCarbonoOrganico=1;
        else if(CarbonoOrganico>=0.2 && CarbonoOrganico<=0.5) 
            puntajeCarbonoOrganico=2;
        else if(CarbonoOrganico>0.5 && CarbonoOrganico<=1.7) 
            puntajeCarbonoOrganico=3;
        else if(CarbonoOrganico>1.7 && CarbonoOrganico<3)  
            puntajeCarbonoOrganico=4;
        else
            //(CarbonoOrganico>3)  
            puntajeCarbonoOrganico=5;
    }

    if (ClimaCarbono=="MEDIO"){
        if (CarbonoOrganico<0.5)
            puntajeCarbonoOrganico=1;
        else if((CarbonoOrganico>0.5 && CarbonoOrganico<=1.7) ||CarbonoOrganico>7.6) 
            puntajeCarbonoOrganico=2;
        else if((CarbonoOrganico>1.7 && CarbonoOrganico<3)||(CarbonoOrganico>=6.5 && CarbonoOrganico<=7.6)) 
            puntajeCarbonoOrganico=3;
        else if((CarbonoOrganico>=3 && CarbonoOrganico<=4.1)||(CarbonoOrganico>=5.4 && CarbonoOrganico<=6.5))   
            puntajeCarbonoOrganico=4;
        else
            //(CarbonoOrganico>=4.2 a 5.3)  
            puntajeCarbonoOrganico=5;
    }

    if (ClimaCarbono=="FRIO"){
        if (CarbonoOrganico<=1.3)
            puntajeCarbonoOrganico=1;
        else if((CarbonoOrganico>1.3 && CarbonoOrganico<=2.6) || (CarbonoOrganico>10)) 
            puntajeCarbonoOrganico=2;
        else if((CarbonoOrganico>=8.1 && CarbonoOrganico<=10) || (CarbonoOrganico>2.6 && CarbonoOrganico<=4))
            puntajeCarbonoOrganico=3;
        else if((CarbonoOrganico>4 && CarbonoOrganico<=5.2) ||  (CarbonoOrganico<8.1 && CarbonoOrganico>=6.6))
            puntajeCarbonoOrganico=4;
        else
            //(CarbonoOrganico>=5.3 hasta 6.5)  
            puntajeCarbonoOrganico=5;
    }

    /////calificacion fosforo/////
    let puntajefosforo=0;
    if (fosforo<10)
        puntajefosforo=1;
    else if(fosforo>=10 && fosforo<=20) 
        puntajefosforo=2;
    else if(fosforo>20 && fosforo<=30) 
        puntajefosforo=3;
    else if(fosforo>30 && fosforo<=40)  
        puntajefosforo=4;
    else
        //(BasesTotales>40)  
        puntajefosforo=5;

    /////calificacion potasio/////
    let puntajepotasio=0;
    if (potasio<0.1)
        puntajepotasio=1;
    else if(potasio>=0.1 && potasio<=0.2) 
        puntajepotasio=2;
    else if(potasio>0.2 && potasio<=0.3) 
        puntajepotasio=3;
    else if(potasio>0.3 && potasio<=0.4)  
        puntajepotasio=4;
    else
        //(BasesTotales>0.4)  
        puntajepotasio=5;
    
    let F1=puntajeph+puntajeSAl+puntajeCarbonoOrganico+puntajePorcentajeSaturacion+puntajebt+puntajecic+puntajepotasio+puntajefosforo;
    
    return F1;
    // F2=0;
    // //para suelos salinos pagina 32
    // FT=(0.7*F1)+(0.3*F2)*K;

    // document.write("El horizonte 1 es:",F1,"<BR>");
    // document.write("El horizonte 2 es:",F2,"<BR>");

    // //grado de fertilidad pag 30
    // document.write("La Fertilidad total es:",FT);


//------------------ LOCALSTORAGE -------------------------------------------------------------------------------------------//
}

  // Función para cargar los datos guardados en el almacenamiento local
  function cargarDatosGuardados() {
    const inputs = document.querySelectorAll('input[type="number"], input[type="text"], select');
    inputs.forEach(input => {
      const savedValue = localStorage.getItem(input.id);
      if (savedValue !== null) {
        input.value = savedValue;
      }
    });
  }

  // Función para guardar los datos en el almacenamiento local
  function guardarDatos() {
    const inputs = document.querySelectorAll('input[type="number"], input[type="text"], select');
    inputs.forEach(input => {
      localStorage.setItem(input.id, input.value);
    });
  }
  
//------------------ CALCULAR FERTILIDAD -------------------------------------------------------------------------------------------//
  function calcularFT(){
    //calculo_fertilidad (ph,SAL,cic,calcio,potasio,sodio,CarbonoOrganico,ConductividadElectrica,ClimaCarbono)
    //let ph=7.08, SAl=0, cic=23.46, calcio=13.74,potasio=0.38,sodio=1.21,ClimaCarbono="MEDIO";
    //let CarbonoOrganico=1.78,magnesio=6.74,fosforo=86,DensidadAparente=1.16,ConductividadElectrica=0.37;

    //let ph=7.08, SAl=0, cic=23.46, calcio=13.74,potasio=0.38,sodio=1.21,ClimaCarbono="MEDIO";
    //let CarbonoOrganico=1.78,magnesio=6.74,fosforo=86,DensidadAparente=1.16,ConductividadElectrica=0.37;
    const K= 0.285;
      //Calculo del Horizonte 1
    ph=document.getElementById('ph').value
    SAl=document.getElementById('SAl').value
    cic=document.getElementById('cic').value
    calcio=document.getElementById('calcio').value
    potasio=document.getElementById('potasio').value
    sodio=document.getElementById('sodio').value
    ClimaCarbono=document.getElementById('ClimaCarbono').value
    CarbonoOrganico=document.getElementById('CarbonoOrganico').value
    magnesio=document.getElementById('magnesio').value
    fosforo=document.getElementById('fosforo').value
    DensidadAparente=document.getElementById('DensidadAparente').value
    ConductividadElectrica=document.getElementById('ConductividadElectrica').value

    F1=calculo_fertilidad (ph,SAl,cic,calcio,potasio,sodio,CarbonoOrganico,ConductividadElectrica,ClimaCarbono)

    //Calculo del horizonte 2
    //ph=7.08, SAl=0, cic=23.46, calcio=0,potasio=0.38,sodio=1.21,ClimaCarbono="FRIO";
    // CarbonoOrganico=1.78,magnesio=6.74,fosforo=86,DensidadAparente=1.16,ConductividadElectrica=0.37;
    ph=document.getElementById('ph2').value
    SAl=document.getElementById('SAl2').value
    cic=document.getElementById('cic2').value
    calcio=document.getElementById('calcio2').value
    potasio=document.getElementById('potasio2').value
    sodio=document.getElementById('sodio2').value
    ClimaCarbono=document.getElementById('ClimaCarbono2').value
    CarbonoOrganico=document.getElementById('CarbonoOrganico2').value
    magnesio=document.getElementById('magnesio2').value
    fosforo=document.getElementById('fosforo2').value
    DensidadAparente=document.getElementById('DensidadAparente2').value
    ConductividadElectrica=document.getElementById('ConductividadElectrica2').value

    F2=calculo_fertilidad (ph,SAl,cic,calcio,potasio,sodio,CarbonoOrganico,ConductividadElectrica,ClimaCarbono) 
    //para suelos salinos página 32
    FT=(0.7*F1)+(0.3*F2)*K;
    FT=parseFloat(FT).toFixed(2);
    r=" El horizonte 1 es: <b><span style='color: #4CAF50 ;font-size:25px ;'>" + F1 + "</span></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    r=r+"El horizonte 2 es: <b><span style='color: #4CAF50 ;font-size:25px ;'>" + F2 + "</span></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    //grado de fertilidad pag 30
    r=r+"La Fertilidad total es: <b><span style='color: red;font-size:25px ;'>" + FT + "</b></span>";
    result=document.getElementById('resultado');
    result.innerHTML=r;
    localStorage.setItem("resultadoFT", FT);

    // Mostrar el botón "Exportar"
    let exportarBtn = document.getElementById('exportarBtn');
    exportarBtn.style.display = "block";

    // Guardar los datos antes de calcular LOCALSTORAGE
    guardarDatos();
}

    

  // Ejecutar al cargar  la página LOCALSTORAJE
  window.onload = function () {
    cargarDatosGuardados();
  };