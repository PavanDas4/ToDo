setInterval(() => {
  document.querySelector(".loader-contents>span:nth-child(2)").innerHTML = "&nbsp;Todo";
}, 1950);
setInterval(() => {
  document.querySelector(".loader-wrap").style.display = "none";
}, 4000);

// current date update
let date = new Date();
document.querySelector(".Date-parts-number").innerHTML = date.getDate();
document.querySelector(".Date-parts-month").innerHTML = date.toLocaleString('default', { month: 'short' });
document.querySelector(".Date-parts-year").innerHTML = date.getFullYear();
//create task
let createTask = document.querySelector(".creates-task");
createTask.addEventListener("click", () => {
  let task = prompt("Enter your task");
  if (task) {
    let taskSection = document.querySelector(".taskSection");
    let taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = task;
    taskSection.appendChild(taskElement);
  }
});

// section switch
let sectionSwitch = document.querySelectorAll(".section-switch>li");
let section = document.querySelectorAll(".todo-main>section");
for (let i = 0; i < sectionSwitch.length; i++) {
  sectionSwitch[i].addEventListener("click", () => {
    for (let j = 0; j < section.length; j++) {
      section[j].style.display = "none";
    }
    section[i].style.display = "flex";
  });
}

// Timer fullscreen
let focusSection = document.querySelector(".focusSection").classList;
let fullscreen = document.querySelector(".navbuttons>span:nth-child(1)");
let fullscreenExit = document.querySelector(".navbuttons>span:nth-child(2)");
fullscreen.addEventListener("click", () => {
  fullscreen.style.display = "none";
  fullscreenExit.style.display = "block";
  focusSection.add("full");
});
fullscreenExit.addEventListener("click", () => {
  fullscreen.style.display = "block";
  fullscreenExit.style.display = "none";
  focusSection.remove("full");
});

// timer models
let digit1 = document.querySelector(".digit1");
let digit2 = document.querySelector(".digit2");
let digit4 = document.querySelector(".digit4");
let digit5 = document.querySelector(".digit5");
let Pomo_minutes = 25; // timer in minutes
let Pomo_seconds = 0; // timer in seconds
let interval = null; // timer interval
let playButton = document.querySelector(".timer-button1");
let pauseButton = document.querySelector(".timer-button2");
let stopButton = document.querySelector(".timer-button3");

// start timer
playButton.addEventListener("click", () => {
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
  playButton.style.display = "none";
  pauseButton.style.display = "block";
});
// pause timer
pauseButton.addEventListener("click", () => {
  clearInterval(interval);
  playButton.style.display = "block";
  pauseButton.style.display = "none";
})
// stop timer
stopButton.addEventListener("click", () => {
  clearInterval(interval);
  Pomo_minutes = 25;
  Pomo_seconds = 0;
  digit1.innerHTML = Math.floor(Pomo_minutes / 10);
  digit2.innerHTML = Pomo_minutes % 10;
  digit4.innerHTML = Math.floor(Pomo_seconds / 10);
  digit5.innerHTML = Pomo_seconds % 10;
  playButton.style.display = "block";
  pauseButton.style.display = "none";
});

if (Pomo_minutes == 0 && Pomo_seconds == 0) {
  playButton.style.display = "block";
  pauseButton.style.display = "none";
}