<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/logo-ct-dark.png">
  <link rel="icon" type="image/png" href="../assets/img/logo-ct-dark.png">
  <title>
    php con dalto
  </title>
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  <!-- Nucleo Icons -->
  <link href= "../assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href= "../assets/css/nucleo-svg.css" rel="stylesheet" />
  <!-- Font Awesome Icons -->
  <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
  <!-- Material Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
  <!-- CSS Files -->
  <link id="pagestyle" href= "../assets/css/material-kit.css?v=3.0.4" rel="stylesheet" />
  <!-- Nepcha Analytics (nepcha.com) -->
  <!-- Nepcha is a easy-to-use web analytics. No cookies and fully compliant with GDPR, CCPA and PECR. -->
  <script defer data-site="YOUR_DOMAIN_HERE" src="https://api.nepcha.com/js/nepcha-analytics.js"></script>
  

   <!-- Favicon -->
   <link href= "../assets/img/favicon.ico" rel="icon">

   <!-- Google Web Fonts -->
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">   

   <!-- Icon Font Stylesheet -->
   <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
   <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

   <!-- Libraries Stylesheet -->
   <link href="lib/animate/animate.min.css" rel="stylesheet">
   <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
   <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">

   <!-- Customized Bootstrap Stylesheet -->
   <link href= "../assets/css/bootstrap.min.css" rel="stylesheet">

   <!-- Template Stylesheet -->
   <link href= "../assets/css/style.css" rel="stylesheet">
   <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body class="bg-gray-200">

<div class="row">
	<div class="card col mt-4 mb-4" style="height: 45vh;">
		<form method="post" class="row mb-4">
    		<h1>¡Suscribete!</h1>
			<input class="col-10" type="text" name="name" placeholder="Nombre completo">
			<input class="col-10 mt-4" type="email" name="email" placeholder="Email">
			<input class="col-6 mx-auto" class="btn btn-success" type="submit" name="register">
    	</form>
		<div class="container">
		<?php 
        	include("registrar.php");
		?>
		</div>

	</div>
	<div class="col mt-4">
		<?php 
        include("mostrar.php");
		?>
	</div>
</div>
	
		
		

</body>
</html>