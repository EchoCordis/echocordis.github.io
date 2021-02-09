window.onload = displayClock();

function displayClock(){
  var display = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.querySelector("#clock").textContent = display;
  setTimeout(displayClock, 1000); 
}

function setNightMode() {
  document.body.classList.toggle("nightmode");
  document.querySelector("#clock").classList.toggle("nightText");
}