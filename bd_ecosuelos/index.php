<?php
// Conecta a la base de datos MySQL
$conexion = new mysqli('localhost', 'root', '', 'bd_ecosuelos');

if ($conexion->connect_error) {
    die('Error de conexión a la base de datos: ' . $conexion->connect_error);
}

// Recibe los datos enviados desde JavaScript
$dato1 = $_POST['dato1'];
$dato2 = $_POST['dato2'];
$dato3 = $_POST['dato3'];

// Escapa los datos para prevenir inyección de SQL (esto es importante para la seguridad)
$dato1 = $conexion->real_escape_string($dato1);
$dato2 = $conexion->real_escape_string($dato2);
$dato3 = $conexion->real_escape_string($dato3);

// Inserta los datos en la base de datos
$query = "INSERT INTO datos (dato1, dato2, dato3) VALUES ('$dato1', '$dato2', '$dato3')";

if ($conexion->query($query) === TRUE) {
    echo 'Dato insertado correctamente en la base de datos.';
} else {
    echo 'Error al insertar el dato: ' . $conexion->error;
}

// Cierra la conexión a la base de datos
$conexion->close();
?>
