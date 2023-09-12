// Shared with CSS!
MOBILE_WIDTH = 1100;

const menu = document.querySelector("nav");
const menuCheck = document.getElementById("hamburger-checkbox");

function openMenu() {
    menu.style.display = menuCheck.checked ? "flex" : "none";
}

function goToSignUp() {
    if (window.innerWidth <= MOBILE_WIDTH) {
        menu.style.display = "none";
        menuCheck.checked = false;
    }
}

window.addEventListener("resize", function () {
    if (window.innerWidth > MOBILE_WIDTH) {
        menu.style.display = "flex";
        menuCheck.checked = false;
    }
    else {
        menu.style.display = "none";
        menuCheck.checked = false;
    }
});

const popup = document.getElementById("signup-popup");
popup.onclick = function(){
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