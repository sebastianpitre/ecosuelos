function include(){
  // Obtén el elemento donde deseas mostrar el resultado en formato HTML.
const includeNav = document.getElementById('nav');
    
// Define el código HTML que deseas mostrar.
const nav_include = `
<div class="container position-sticky z-index-sticky top-0">
  <div class="row">
    <div class="col-12">
      <nav class="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
        <div class="container-fluid px-0">
          <a class="navbar-brand font-weight-bolder ms-sm-3" href="../index.html" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom">
            <img src="../assets/img/logo-ct-dark.png" alt="">
          <span class="text-xxl">  <span class="text-dark font-weight-bold"><span class="text-success">Eco</span>suelos</span> 
          </a>
          <a href="../calcular.html" class="btn btn-sm  bg-gradient-success  mb-0 ms-auto d-lg-none d-block">Ingresar</a>
          <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon mt-2">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
            <ul class="navbar-nav navbar-nav-hover ms-auto">
              <li class="nav-item dropdown dropdown-hover mx-2">
                <a href="../index.html"  class="nav-link ps-2 d-flex cursor-pointer align-items-center" >
                  <i class="material-icons opacity-6 me-2 text-md">home</i>
                  Inicio
                </a>
              </li>

              <li class="nav-item dropdown dropdown-hover mx-2">
                <a href="suelo.html"  class="nav-link ps-2 d-flex cursor-pointer align-items-center">
                  <i class="material-icons opacity-6 me-2 text-md"> </i>
                  Suelo
                </a>
              </li>

              <li class="nav-item dropdown dropdown-hover mx-2">
                <a href="clases.html"  class="nav-link ps-2 d-flex cursor-pointer align-items-center">
                  <i class="material-icons opacity-6 me-2 text-md"> </i>
                  Clases
                </a>
              </li>

              <li class="nav-item dropdown dropdown-hover mx-2">
                <a href="subclases.html"  class="nav-link ps-2 d-flex cursor-pointer align-items-center">
                  <i class="material-icons opacity-6 me-2 text-md"> </i>
                  Subclases
                </a>
              </li>
      
              <li class="nav-item dropdown dropdown-hover mx-2">
                <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Grupos
                  <img src="../assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-2 d-lg-block d-none">
                  <img src="../assets/img/down-arrow-dark.svg" alt="down-arrow"
                    class="arrow ms-1 d-lg-none d-block ms-auto">
                </a>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
                  aria-labelledby="dropdownMenuDocs">
                  <div class="d-none d-lg-block">
                    <ul class="list-group">
                      <li class="nav-item list-group-item border-0 p-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="grupo1.html">
                          <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Grupo I</h6>
                        </a>
                      </li>
                      <li class="nav-item list-group-item border-0 p-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="grupo2.html">
                          <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Grupo II</h6>
                        </a>
                      </li>
                      <li class="nav-item list-group-item border-0 p-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="grupo3.html">
                          <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Grupo III</h6>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="row d-lg-none">
                    <div class="col-md-12 g-0">
                      <a class="dropdown-item py-2 ps-3 border-radius-md" href="grupo1.html">
                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Grupo I</h6>
                      </a>
                      <a class="dropdown-item py-2 ps-3 border-radius-md" href="grupo2.html">
                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Grupo II</h6>
                      </a>
                      <a class="dropdown-item py-2 ps-3 border-radius-md" href="grupo3.html">
                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Grupo III</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item ms-lg-auto">
                <a class="nav-link nav-link-icon me-2" href="calcular.html">
                  <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Calcular">Calcular Proceso</p>
                </a>
              </li>
            
            </ul>
            <ul class="navbar-nav d-lg-block d-none">
              <li class="nav-item">
                <a href="calcular.html" class="btn btn-sm bg-gradient-success mb-0" >Ingresar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>
`;

// Establece el contenido HTML del elemento "resultado" con el código HTML generado.
includeNav.innerHTML = nav_include;
}

include()
