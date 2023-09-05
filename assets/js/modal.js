function closed() {
    $("#modalContPisosTermicos").fadeOut();
    $("#modalFramePisosTermicos").attr("src", "");
    $("#modalContMovMasa").fadeOut();
    $("#modalFrameMovMasa").attr("src", "");

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
    $("#openModalMovMasa").click(function() {
    $("#modalContMovMasa").fadeIn();
    $("#modalFrameMovMasa").attr("src", "calculos/movimiento_masa.html");
});
});