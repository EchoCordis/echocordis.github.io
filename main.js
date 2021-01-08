/* var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.boxShadow = "0 0.1vh 2vh 0 #000000";
    } else {
        if (screen.height > 1025){
            document.getElementById("navbar").style.boxShadow = "none";
            console.log("Inside");
        }
        else {
            document.getElementById("navbar").style.boxShadow = "none";
            console.log("Inside");
        }
    }
    prevScrollPos = currentScrollPos;
} */
const toggle = document.querySelector(".menutoggle");
const menu = document.querySelector("#navbar");
/* const menuItems = document.querySelectorAll(".menuitem"); */

var toggleInfo = true;
var resizeMenu = true;

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
    
    /* Might be slightly more efficient than forEach? */
    menu.classList.toggle("menuitems_show");
}

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
});

/* document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && menu.querySelector(".menuitems_show")){
        menuToggle();
    }
    else{
        console.log("Inside");
    }
}); */

toggle.addEventListener('click', menuToggle);

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

/* Changes navbar's BG opacity based on vertical scroll distance */
window.onscroll = function() {
    let vh = window.innerHeight * 0.01;

    if (window.pageYOffset >= 50 * vh) {
        menu.classList.add("navbar_filled");
        menu.classList.remove("navbar_opac");
    }
    else {
        menu.classList.add("navbar_opac");
        menu.classList.remove("navbar_filled");
    }
};