const btn = document.querySelector(".btn");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
function validatePhoneNumber(phoneInput) {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(phoneInput);
}

function validateEmail(emailInput) {
  const regex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-zA-Z]{2,7})$/;
  return regex.test(emailInput);
}

function validateName(nameInput) {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(nameInput);
}

btn.addEventListener("click", onSubmit);
function onSubmit(e) {
  console.log(validatePhoneNumber(phoneInput.value));
  console.log(validateEmail(emailInput.value));
  console.log(validateName(nameInput.value));

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    phoneInput.value === ""
  ) {
    document.querySelector(".container").style.backgroundColor = "red";
  } else if (
    validatePhoneNumber(phoneInput.value) &&
    validateEmail(emailInput.value) &&
    validateName(nameInput.value)
  ) {
    document.querySelector(".container").style.backgroundColor = "green";
  } else {
    document.querySelector(".container").style.backgroundColor = "red";
  }
  e.preventDefault();
}
