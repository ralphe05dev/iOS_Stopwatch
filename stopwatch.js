const timeText = document.querySelector(".js-timeText");
const minutesText = document.querySelector(".js-minutesText");
const secondsText = document.querySelector(".js-secondsText");
const millisecondsText = document.querySelector(".js-millisecondsText");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const startBtnEl = document.querySelector(".js-startBtn");
const lapBtnEl = document.querySelector(".js-lapBtn");

const timeEl = document.querySelector(".js-timeText");

const lapTimes = [];
const lapTimesContainer = document.querySelector(".lapTimes");

startBtnEl.addEventListener("click", () => {
  updateTime();
  saveToStorage();
  startBtnEl.innerText = "Stop";
  startBtnEl.style.background = "rgba(100, 13, 20, 0.3)";
  startBtnEl.style.color = "rgb(191, 6, 3)";
  lapBtnEl.style.background = "rgba(64, 61, 57, 0.9)";
  lapBtnEl.style.color = "white";
});

lapBtnEl.addEventListener("click", () => {});

function updateTime() {
  setInterval(() => {
    milliseconds++;
    millisecondsText.innerHTML = milliseconds;
  }, 1);

  setInterval(() => {
    milliseconds = 0;
    millisecondsText.innerHTML = milliseconds;
  }, 900);

  setInterval(() => {
    seconds++;
    secondsText.innerHTML = seconds;
  }, 999);

  setInterval(() => {
    seconds = 0;
    secondsText.innerHTML = seconds;
  }, 59999);

  setInterval(() => {
    minutes++;
    minutesText.innerHTML = minutes;
  }, 59999);
}

function saveToStorage() {}
