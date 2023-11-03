<?php
$conexion = new mysqli('localhost', 'root', '', 'bd_ecosuelos2');

if ($conexion->connect_error) {
    die('Error de conexión a la base de datos: ' . $conexion->connect_error);
}

$producto = $_POST['producto'];
$cantidad = $_POST['cantidad'];
$usuario_id = $_POST['usuario_id'];

$producto = $conexion->real_escape_string($producto);
$cantidad = $conexion->real_escape_string($cantidad);

$query = "INSERT INTO pedidos (producto, cantidad, usuario_id) VALUES ('$producto', '$cantidad', '$usuario_id')";

if ($conexion->query($query) === TRUE) {
    echo 'Pedido registrado correctamente en la base de datos.';
} else {
    echo 'Error al registrar el pedido: ' . $conexion->error;
}

$conexion->close();
?>