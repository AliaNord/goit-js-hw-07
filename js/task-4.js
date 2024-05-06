const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;

  const info = {
    email: email.trim(),
    password: password.trim(),
  };



  if (password.trim() == "" || email.trim() == "") {
    alert("All form fields must be filled in");
  } else {
    console.log(info);
    event.currentTarget.reset();
  }
}
