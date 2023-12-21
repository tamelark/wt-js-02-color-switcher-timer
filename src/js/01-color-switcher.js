function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const dataStart = document.querySelector('button[data-start]');
const dataStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;
let isColorChangeEnabled = false; 

dataStop.setAttribute('disabled', true);

dataStart.addEventListener('click', () => {
  dataStop.removeAttribute('disabled');document.addEventListener('click', (event) => {
  if (isColorChangeEnabled) {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }
});
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
  }, 100000000);
  dataStart.setAttribute('disabled', true);
  isColorChangeEnabled = true; 
});


dataStop.addEventListener('click', () => {
  dataStart.removeAttribute('disabled');
  clearInterval(timerId);
  dataStop.setAttribute('disabled', true);
  isColorChangeEnabled = false; 
});
