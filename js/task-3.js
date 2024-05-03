const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener("input", handleInput);

function handleInput(event) {
    const name = event.target.value
    if (name.trim() == '') {
        nameOutput.textContent = `Anonymous`;
    } else {
        nameOutput.textContent = name.trim();
    }
}