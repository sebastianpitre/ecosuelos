<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registra Pedido</title>
</head>
<body>
    <form id="miFormulario">
        <input type="text" name="producto" id="producto" placeholder="Producto">
        <input type="number" name="cantidad" id="cantidad" placeholder="Cantidad">
        <select name="usuario_id" id="usuario_id">
            <option value="1">Usuario 1</option>
            <option value="2">Usuario 2</option>
            <!-- Agrega más opciones para otros usuarios si es necesario -->
        </select>
        <button type="button" id="enviar">Registrar Pedido</button>
    </form>

    <script>
    document.getElementById('enviar').addEventListener('click', function() {
      var producto = document.getElementById('producto').value;
      var cantidad = document.getElementById('cantidad').value;
      var usuario_id = document.getElementById('usuario_id').value;

      var formData = new FormData();
      formData.append('producto', producto);
      formData.append('cantidad', cantidad);
      formData.append('usuario_id', usuario_id);

      fetch('index2.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error al enviar datos a PHP: ' + error);
      });
    });
    </script>
</body>
</html>
