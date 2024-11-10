let date = new Date();
document.querySelector(".Date-parts-number").innerHTML = date.getDate();
document.querySelector(".Date-parts-month").innerHTML = date.toLocaleString('default', { month: 'short' });
document.querySelector(".Date-parts-year").innerHTML = date.getFullYear();

let digit1 = document.querySelector(".digit1");
let digit2 = document.querySelector(".digit2");
let digit4 = document.querySelector(".digit4");
let digit5 = document.querySelector(".digit5");
let Pomo_minutes = 25;
let Pomo_seconds = 0;
let interval = null;
function play() { 
  interval = setInterval(() => {
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
function pause() { 
  clearInterval(interval);
}
function Stop() { 
  clearInterval(interval);
  Pomo_minutes = 25;
  Pomo_seconds = 0;
  digit1.innerHTML = Math.floor(Pomo_minutes / 10);
  digit2.innerHTML = Pomo_minutes % 10;
  digit4.innerHTML = Math.floor(Pomo_seconds / 10);
  digit5.innerHTML = Pomo_seconds % 10;
}