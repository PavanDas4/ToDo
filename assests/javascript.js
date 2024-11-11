// sign in and sign up form
let signforms = document.querySelector(".signforms");
let menu = document.querySelector("#menu");
menu.addEventListener("focus", () => {
  signforms.style.display = "block";
});




// current date update
let date = new Date();
document.querySelector(".Date-parts-number").innerHTML = date.getDate();
document.querySelector(".Date-parts-month").innerHTML = date.toLocaleString('default', { month: 'short' });
document.querySelector(".Date-parts-year").innerHTML = date.getFullYear();

// timer models
let digit1 = document.querySelector(".digit1");
let digit2 = document.querySelector(".digit2");
let digit4 = document.querySelector(".digit4");
let digit5 = document.querySelector(".digit5");
let Pomo_minutes = 25; // timer in minutes
let Pomo_seconds = 0; // timer in seconds
let interval = null; // timer interval
function play() { // start timer
  interval = setInterval(() => { // timer runs after every 1s
    if (Pomo_seconds <= 0) {
      if (Pomo_minutes <= 0) {
        clearInterval(interval); 
      } else {
        Pomo_minutes -= 1; 
        Pomo_seconds = 59;
      }
    } else {
      Pomo_seconds -= 1;
    }
    digit1.innerHTML = Math.floor(Pomo_minutes / 10);
    digit2.innerHTML = Pomo_minutes % 10;
    digit4.innerHTML = Math.floor(Pomo_seconds / 10);
    digit5.innerHTML = Pomo_seconds % 10;
  }, 1000);
}
// pause timer
function pause() { 
  clearInterval(interval);
}
// stop timer
function Stop() { 
  clearInterval(interval);
  Pomo_minutes = 25;
  Pomo_seconds = 0;
  digit1.innerHTML = Math.floor(Pomo_minutes / 10);
  digit2.innerHTML = Pomo_minutes % 10;
  digit4.innerHTML = Math.floor(Pomo_seconds / 10);
  digit5.innerHTML = Pomo_seconds % 10;
}