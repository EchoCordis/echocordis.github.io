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

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".slide");
  var dots = document.querySelectorAll(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].classList.toggle("active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.toggle("active");
} 

/* document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && menu.querySelector(".menuitems_show")){
        menuToggle();
    }
    else{
        console.log("Inside");
    }
}); */

/* Changes navbar's BG opacity based on vertical scroll distance */
/* window.onscroll = function() {
    let vh = window.innerHeight * 0.01;

    if (window.pageYOffset >= 50 * vh) {
        menu.classList.add("navbar_filled");
        menu.classList.remove("navbar_opac");
        console.log("Visible");
    }
    else {
        menu.classList.add("navbar_opac");
        menu.classList.remove("navbar_filled");
        console.log("Invisible");
    }
}; */