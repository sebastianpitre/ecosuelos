function closed() {
    $("#modalContPisosTermicos").fadeOut();
    $("#modalFramePisosTermicos").attr("src", "");
    $("#modalContPreparacion").fadeOut();
    $("#modalFramePreparacion").attr("src", "");

    // Actualizar la página
    window.location.reload();
};

// separador de modal
$(document).ready(function() {
    $("#openModalPisosTermicos").click(function() {
    $("#modalContPisosTermicos").fadeIn();
    $("#modalFramePisosTermicos").attr("src", "calculos/pisos_termicos.html");
});

// separador de modal
    $("#openModalPreparacion").click(function() {
    $("#modalContPreparacion").fadeIn();
    $("#modalFramePreparacion").attr("src", "about2.html#modal2");
});
});