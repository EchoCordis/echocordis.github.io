var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("heading").style.top = "0";
    } else {
        document.getElementById("heading").style.top = "-10%";
    }
    prevScrollPos = currentScrollPos;
}