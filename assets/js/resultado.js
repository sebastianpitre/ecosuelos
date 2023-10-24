document.getElementById('sueloForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const cond = {
      pendiente: parseFloat(document.getElementById('pendiente').value),
      erosion: document.getElementById('erosion').value,
      // Agrega más campos aquí para otros datos
  };

  // Convierte el objeto 'cond' en una cadena JSON y la envía a la otra página
  const encodedData = encodeURIComponent(JSON.stringify(cond));
  window.location.href = 'result.html?data=' + encodedData;
});