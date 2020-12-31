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
const menuItems = document.querySelectorAll(".menuitems");
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

    menuItems.forEach(item => item.classList.toggle('menuitems_show'));

    /* for (var i = 0; i < menuItems.length; i++){
        var item = menuItems[i].style;
        item.height = item.height === '0' ? '100vh' : '0';
        if (item.height == 0){
            item.height = '5vh';
        }
        else {
            item.height = 0;
        }
        item.opacity = item.opacity === 1 ? 1 : 0; 
        item.visibility = item.visibility === 'hidden' ? 'visible' : 'hidden'; 
    } */
}

toggle.addEventListener('click', menuToggle);