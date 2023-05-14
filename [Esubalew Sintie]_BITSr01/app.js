const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessages = document.querySelectorAll('.error-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === '') {
    setErrorFor(nameInput, 'Name cannot be blank');
  } else {
    setSuccessFor(nameInput);
  }

  if (emailValue === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailInput, 'Email is not valid');
  } else {
    setSuccessFor(emailInput);
  }

  if (messageValue === '') {
    setErrorFor(messageInput, 'Message cannot be blank');
  } else {
    setSuccessFor(messageInput);
  }
}

function setErrorFor(input, message) {
  const errorMessage = input.nextElementSibling;
  errorMessage.innerText = message;
  input.classList.add('error');
}

function setSuccessFor(input) {
  const errorMessage = input.nextElementSibling;
  errorMessage.innerText = '';
  input.classList.remove('error');
}

function isEmail(email) {
  return /^[\w-\.]+@