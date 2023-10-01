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

let statAnim = anime({
    targets: '.stat',
    opacity: [0, 1],
    translateY: [-100, 0],
    duration: 1000,
    easing: 'easeInOutQuad',
    autoplay: false,
    delay: anime.stagger(200),
    complete: function(anim) {
        anim.remove('.stat');
    }
});

let meetingAnim = anime({
    targets: '.detail-text li',
    opacity: [0, 1],
    translateY: [-100, 0],
    duration: 1000,
    easing: 'easeInOutQuad',
    autoplay: false,
    delay: anime.stagger(200),
    complete: function(anim) {
        anim.remove('.detail-text li');
    }
});

$(window).scroll(function () {
    $('.stat').each(function(i, obj) {
        if ($(obj).isInViewport()) {
            statAnim.play();
        }
    });
    $('.detail-text li').each(function(i, obj) {
        if ($(obj).isInViewport()) {
            meetingAnim.play();
        }
    });
});

