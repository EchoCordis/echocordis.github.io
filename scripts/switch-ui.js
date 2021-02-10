window.onload = displayClock();
var nightMode = false;

function displayClock(){
  var display = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  document.querySelector("#clock").textContent = display;
  setTimeout(displayClock, 1000); 
}

function setNightMode() {
  document.body.classList.toggle("nightmode");
  document.querySelector("#header").classList.toggle("nightHeader");
  document.querySelector("#footer").classList.toggle("nightFooter");

  document.querySelectorAll(".cart").forEach((el) => {
    el.classList.toggle('nightCart');
    el.classList.toggle('nightEmpty');
  });

  document.querySelectorAll(".optionBtn").forEach((el) => {
    el.classList.toggle('nightBtn');
  });

  if (nightMode) {
    document.querySelector("#footer").style.borderColor ="black";
    nightMode = false;
    console.log("Night mode off");
  }
  else {
    document.querySelector("#footer").style.borderColor ="white";
    nightMode = true;
    console.log("Night mode on");
  }
  
}