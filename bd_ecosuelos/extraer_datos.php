<?php
$conexion = new mysqli('localhost', 'root', '', 'siadesos_planmaiz');

if ($conexion->connect_error) {
    die('Error de conexión a la base de datos: ' . $conexion->connect_error);
}

$mostrar = "SELECT  id_conteo_usuarios, nombres_usuarios FROM conteo_usuarios";
$result = $conexion->query($mostrar);

$usuarios = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $usuarios[] = $row;
    }
}

$conexion->close();

echo json_encode($usuarios); // Devuelve los datos como JSON 🤫
?>
