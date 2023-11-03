<?php
$conexion = new mysqli('localhost', 'root', '', 'bd_ecosuelos2');

if ($conexion->connect_error) {
    die('Error de conexión a la base de datos: ' . $conexion->connect_error);
}

$query = "SELECT id, nombre FROM usuarios";
$result = $conexion->query($query);

$usuarios = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $usuarios[] = $row;
    }
}

$conexion->close();

echo json_encode($usuarios);
?>
