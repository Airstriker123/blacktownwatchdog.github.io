const cards = document.querySelectorAll('.mouse-cursor-gradient-tracking');
const body = document.querySelectorAll('.body');

cards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    });
});

body.forEach(body => {
  body.addEventListener('mousemove', e => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      body.style.setProperty('--x', x + 'px');
      body.style.setProperty('--y', y + 'px');
  });
});

const glow = document.getElementById('glow');

// Function to update the glow position to follow the cursor
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Update the glow position
  glow.style.left = `${mouseX}px`;
  glow.style.top = `${mouseY}px`;

  // Show the glow effect by setting opacity
  glow.style.opacity = 1;
});

// Optional: Hide the glow when the mouse leaves the page
document.addEventListener('mouseleave', () => {
  glow.style.opacity = 0;
});

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

