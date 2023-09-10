
const popup = document.getElementById("signup-popup");
popup.onclick = function(){
    console.log("bruh");
    popup.style.display = "none";
};

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
        popup.style.display = "block";
        popup.classList.add("fadeInSignupPopup");
      })
    });
  });