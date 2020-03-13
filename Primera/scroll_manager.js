$('html, body').animate({
    scrollTop: $("#sect" + 0).offset().top - 85
}, 1000);
var act_sect = 0;
var max_sect = 2;
var wait_im_scrolling = false;
$('#sect' + (act_sect + 1)).css('visibility', 'hidden');
$('#sect' + (act_sect + 2)).css('visibility', 'hidden');

function cambiar_pos_directamente(targetId) {
    intTarget = parseInt(targetId.split("sect")[1]);
    while (intTarget != act_sect) {
        if (act_sect >= intTarget) {
            subir_scroll();
        } else {
            bajar_scroll();
        }
    }
}

function subir_scroll() {
    //wait_im_scrolling = true;

    act_sect--;

    d3.select("#titulo_footer").text("¿Cuál es el problema principal de los jovenes?")


    //
    //setTimeout(function () { wait_im_scrolling = false }, 500);
}



document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38:
            subir_scroll();
            break;
        case 40:
            bajar_scroll();
            break;
    }
};