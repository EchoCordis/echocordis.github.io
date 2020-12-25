var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        if (screen.height > 1025){
            document.getElementById("header").style.top = "-10%";
        }
        else {
            document.getElementById("header").style.top = "-12.5%";
        }
    }
    prevScrollPos = currentScrollPos;
}