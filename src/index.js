const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove whitespaces
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // check the validity of the form fields
  if (firstNameValue === '') {
    setErrorFor(firstName, 'First Name cannot be empty');
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last Name cannot be empty');
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email Address cannot be empty');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Looks like this is not an email');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';

  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control';
}

function isEmail(email) {
  // regex expression to validate email
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
