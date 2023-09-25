<?php
include("con_db.php");

	if (isset($_POST['register'])) {
		
		if  (strlen($_POST['name']) >= 1 && 
			strlen($_POST['email']) >= 1) {
			$name = trim($_POST['name']);
			$email = trim($_POST['email']);
			$fechareg = date("d/m/y");
			$consulta = "INSERT INTO datos(nombre, email, fecha_registro) VALUES ('$name','$email','%fechareg')";
			$resultado = mysqli_query($conex,$consulta);
			if ($resultado) {
				?>
				<h3 class="ok"> te haz inscrito correctamente</h3>
				<?php
			} else {
				?>
				<h3 class="bad"> uh carajo ocurrio una catastrofe</h3>
				<?php
			}
		} else {
			?>
				<h3 class="bad">Por favor complete los campos,  flojera nunca es una opción</h3>
				<?php
		}
	}
	
?>