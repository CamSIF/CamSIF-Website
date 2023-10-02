
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
        headers: {
        }
      })
      .then(() => {
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