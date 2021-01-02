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
const menuItems = document.querySelectorAll(".menuitem");
const menu = document.querySelector("#navbar");
var toggleInfo = true;

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

    /* item.height = item.height === '0' ? '100vh' : '0'; */
}

function closeMenu() {

}

toggle.addEventListener('click', menuToggle);
document.addEventListener('click', closeMenu);
