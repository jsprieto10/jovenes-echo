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

    act_sect = 0

    
    d3.select("#titulo_footer").text("Tercer Encuentro: ¿Qué quiero hacer?");
   


    $('#sect' + (act_sect)).css('visibility', 'visible');
    $('html, body').animate({
        scrollTop: $("#sect" + act_sect).offset().top - 85
    }, 500);
    $('#sect' + (act_sect + 1)).css('visibility', 'hidden');
}

function bajar_scroll(){


    act_sect = 1;
    d3.select("#titulo_footer").text("Tercer Encuentro: Tres primeras acciones");

    $('#sect' + (act_sect)).css('visibility', 'visible');
    $('html, body').animate({
        scrollTop: $("#sect" + act_sect).offset().top - 85
    }, 500);
    $('#sect' + (act_sect - 1)).css('visibility', 'hidden');

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