const yttut = [];
let navbar = document.getElementById("navbar"),
navbar_title = document.getElementById("navbar-title"),
navbar_option1 = document.getElementById("navbar-option1"),
navbar_option4 = document.getElementById("navbar-option4");

function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("navbar-closed");
  // Call the toggleNavbar function on page load to hide the navbar
  window.onload = function() {
    toggleNavbar();
  };
    let minimizeButton = document.getElementById("navbar-minimize");
    if (navbar.style.width === "50px") {
      navbar.style.width = "300px";
      navbar_title.style.display = "block";
      navbar_option1.style.display = "block";

        navbar_option4.style.display = "block";
      minimizeButton.innerHTML = "&times;";
    } else {
      navbar.style.width = "50px";
        navbar_title.style.display = "none";
        navbar_option1.style.display = "none";
        navbar_option4.style.display = "none";
      minimizeButton.innerHTML = "&hellip;";
    }
}

function showScreen(screenId) {
    let screens = document.getElementsByClassName("screen");
    for (let i = 0; i < screens.length; i++) {
      screens[i].classList.remove("active");
    }
    document.getElementById(screenId).classList.add("active");
}

window.addEventListener('DOMContentLoaded', function() {
  var navbar = document.querySelector('.navbar');
  var minimizeButton = document.querySelector('.navbar-minimize');

  minimizeButton.addEventListener('click', function() {
    navbar.classList.toggle('navbar-closed');
  });
});
