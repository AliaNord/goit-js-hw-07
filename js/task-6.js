
const inputField = document.querySelector("#controls>input");
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", handleCreate);
createBtn.style.backgroundColor = `#4E75FF`;

destroyBtn.addEventListener("click", destroyBoxes);
destroyBtn.style.backgroundColor = `#FF4E4E`;

function handleCreate(event) {
  const amount = parseInt(inputField.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
}

function createBoxes(amount) {
  const box = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const baseSize = 30 + i * 10;
    const div = document.createElement("div");
    div.style.width = `${baseSize}px`;
    div.style.height = `${baseSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    box.appendChild(div);
  }
  boxes.innerHTML = "";
  boxes.appendChild(box);
}
function destroyBoxes(event) {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
