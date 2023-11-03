<?php
$conexion = new mysqli('localhost', 'root', '', 'bd_ecosuelos2');

if ($conexion->connect_error) {
    die('Error de conexión a la base de datos: ' . $conexion->connect_error);
}

$query = "SELECT id, producto, cantidad, usuario_id FROM pedidos";
$result = $conexion->query($query);

$pedidos = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $pedidos[] = $row;
    }
}

$conexion->close();

echo json_encode($pedidos);
?>
