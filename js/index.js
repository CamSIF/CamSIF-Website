
// Logic for form submissions
$("#signup-popup-close").on("click", function() {
    $("#signup-popup").hide();
})

window.addEventListener("load", function() {
    const form = document.getElementById('signup-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
        headers: {}
      })
      .then(response => {
        console.log(response.json());
        $("#signup-popup").show()
        $("#signup-popup").addClass("fadeInSignupPopup");
      })
    });
  });

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

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
