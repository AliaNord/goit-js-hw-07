const body = document.body;
const button = document.querySelector(".change-color");
const currentColor = document.querySelector(".color")

button.addEventListener("click", handleButton);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleButton(event) {
  currentColor.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}