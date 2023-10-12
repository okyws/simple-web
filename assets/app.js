const container = document.getElementById("skillContainer");
const header = document.getElementById("header");
let mybutton = document.getElementById("myBtn");
let prevScrollpos = window.pageYOffset;
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
const navLink = document.getElementsByClassName("nav-link");
const dropDown = document.querySelector(".dropdown");
const subMenu = document.querySelector(".submenu");
const body = document.body;

// get current year
const year = (document.getElementById("getyear").innerHTML =
  new Date().getFullYear());

// loop image assets
const technologies = [
  "assets/img/reactjs.png",
  "assets/img/nodejs.png",
  "assets/img/js.png",
  "assets/img/git.png",
  "assets/img/java.png",
  "assets/img/expressjs.png",
  "assets/img/php.png",
  "assets/img/laravel.png",
  "assets/img/mysql.png",
  "assets/img/nginx.png",
  "assets/img/html.png",
  "assets/img/css.png",
  "assets/img/codeigniter.png",
  "assets/img/tailwind.png",
  "assets/img/postgresql.png",
];

technologies.sort();

function createImageNode(imgSrc) {
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = imgSrc;
  return img;
}

technologies.forEach((img) => {
  container.appendChild(createImageNode(img));
});

// Hide navbar on scroll
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
    header.style.position = "sticky";
  } else {
    header.style.top = "-100px";
    subMenu.classList.remove("submenu-show");
    subMenu.classList.add("submenu-hide");
  }
  prevScrollpos = currentScrollPos;
  scrollFunction();
};

// Mobile Navigation
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
  mybutton.style.display = "none";
}

//scroll
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.toggle("active");
    mybutton.style.display = "block";
  } else {
    header.classList.remove("active");
    mybutton.style.display = "none";
  }
}

// scroll to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Dropdown
dropDown.addEventListener("click", function (e) {
  if (subMenu.classList.contains("submenu-hide")) {
    subMenu.classList.remove("submenu-hide");
    subMenu.classList.add("submenu-show");
  } else if (subMenu.classList.contains("submenu-show")) {
    subMenu.classList.remove("submenu-show");
    subMenu.classList.add("submenu-hide");
  }
  e.preventDefault();
});

// dark mode
const toggleButton = document.getElementById("toggle-dark-mode");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

// Check if the user's preference is stored in local storage
const darkModeOn = localStorage.getItem("darkMode") === "enabled";

// Apply dark mode if it's enabled
if (darkModeOn) {
  body.classList.add("dark-mode");
  sun.style.display = "none";
  moon.style.display = "block";
}

// Toggle dark mode when the button is clicked
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const darkModeEnabled = body.classList.contains("dark-mode");

  // Store the user's preference in local storage
  if (darkModeEnabled) {
    localStorage.setItem("darkMode", "enabled");
    sun.style.display = "none";
    moon.style.display = "block";
  } else {
    localStorage.setItem("darkMode", "disabled");
    sun.style.display = "block";
    moon.style.display = "none";
  }
});

// coming soon
function showComingSoon() {
  alert("Coming soon!");
}
