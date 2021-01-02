/* var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        if (screen.height > 1025){
            document.getElementById("header").style.top = "-11%";
        }
        else {
            document.getElementById("header").style.top = "-18%";
        }
    }
    prevScrollPos = currentScrollPos;
} */
const toggle = document.querySelector(".menutoggle");
const menu = document.querySelector("#navbar");
/* const menuItems = document.querySelectorAll(".menuitem"); */

var toggleInfo = true;
var resizeMenu = true;

function menuToggle() {
    if (toggleInfo) {
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
        toggleInfo = false;
    }
    else {
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
        toggleInfo = true;
    }

    /* menuItems.forEach(item => item.classList.toggle('menuitems_show')); */
    
    /* Might be slightly more efficient than forEach? */
    menu.classList.toggle("menuitems_show");
}

function closeMenu(e) {

}

window.addEventListener('resize', () => {
    if (document.body.clientWidth > 720) {
        if (resizeMenu) {
            menuToggle();
            resizeMenu = false;
        }
        else {
            resizeMenu = true;
        }
    }
    { passive: false }
});

toggle.addEventListener('click', menuToggle);
document.addEventListener('click', closeMenu);
