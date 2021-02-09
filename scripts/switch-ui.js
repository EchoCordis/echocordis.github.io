/* window.onload = displayClock();
function displayClock(){
  var display = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.body.innerHTML = display;
  setTimeout(displayClock, 1000); 
} */

function setNightMode() {
  document.body.classList.add("nightmode");
  console.log("HI");
}