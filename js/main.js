//Core logic shared between all pages

// Shared with CSS!
MOBILE_WIDTH = 1100;

function openMenu() {
    if ($("#hamburger-checkbox").prop("checked")) {
        $("nav").css('display', 'flex');
    } else {
        $("nav").hide();
    }
}


function menuClicked() {
    if (window.innerWidth <= MOBILE_WIDTH) {
        $("nav").hide();
        $("#hamburger-checkbox").prop("checked", false);
    }
}

$(document).mouseup(function(e) 
{
    if (!$("nav:visible")) return;
    if(!$(e.target).closest("#nav-container").length){
        menuClicked();
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth > MOBILE_WIDTH) {
        $("nav").css('display', 'flex');
    }
    else {
        $("nav").hide();
    }
    $("#hamburger-checkbox").prop("checked", false);
});


