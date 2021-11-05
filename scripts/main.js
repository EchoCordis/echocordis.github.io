/* Loads the particles.js module onto the page */
particlesJS.load('particles-js', '/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

/* The navbar's toggle button on mobile */
const toggle = document.querySelector(".menutoggle");
/* The navbar on mobile */
const menu = document.querySelector("#navbar");
/* Boolean to control if the menu items in the navbar are shown */
var toggleInfo = true;

/* Controls the opening/closing of the mobile navmenu */
function menuToggle() {
    if (toggleInfo) {
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
        toggleInfo = false;
        /* Darkens overlay opacity to hide page content */
        document.querySelector(".navOverlay").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
    else {
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
        toggleInfo = true;
        /* Reverts overlay opacity to show page content*/
        document.querySelector(".navOverlay").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    /* menuItems.forEach(item => item.classList.toggle('menuitems_show')); */
    
    menu.classList.toggle("menuitems_show");
}

/* Adds menuToggle as an event */
toggle.addEventListener('click', menuToggle);


/* Closes navbar menu when the device's size is changed. */
window.addEventListener('resize', () => {
    if (document.body.clientWidth > 720 && !toggleInfo) {
        menuToggle();
    }
});

/* Closes navbar menu when the device's orientation is closed. */
window.addEventListener('orientationchange', () => {
    if (!toggleInfo) {
        menuToggle();
    }
    if (toggle){
        toggle.addEventListener('click', menuToggle);
    }
});

/* Slideshow image gallery related functions */
var slideIndex = 1;
// List of all slides in the gallery.
const slides = document.querySelectorAll(".slide");
// List of all dots in the gallery for controlling slide.
const dots = document.querySelectorAll(".dot");
const autoplayDelay = 6000;   // Delay for auto-switching slides
// Variable to store autoplay interval
var slideInterval = setInterval(function() {plusSlides(1);}, autoplayDelay);
showSlides(slideIndex); // Show first gallery slide.

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Show the selected gallery slide.
function showSlides(n) {
  var i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
  resetInterval();
}

// Begin auto-play for the gallery slides on projects page.
function restartAutoplay() {
    slideInterval = setInterval(function() {plusSlides(1);}, autoplayDelay);
}

// Reset interval time for gallery auto-play.
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = null;
    restartAutoplay();
}