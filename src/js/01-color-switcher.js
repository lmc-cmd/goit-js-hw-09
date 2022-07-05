`use strict`;

const bodyEl = document.querySelector(`body`);
const btnStart = document.querySelector(`[data-start]`);
const btnStop = document.querySelector(`[data-stop]`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let repeater = null;

bodyEl.addEventListener(`click`, e => {
  if (e.target == btnStart) {
    btnStart.disabled = true;
    repeater = setInterval(() => {
      bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
  if (e.target == btnStop) {
    btnStart.disabled = false;
    clearInterval(repeater);
  }
});
