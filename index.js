const form = document.querySelector('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirmation');
const toast = document.getElementById('highFiveToast');

const emailError = email.nextElementSibling;
const countryError = country.nextElementSibling;
const zipError = zip.nextElementSibling;
const passwordError = password.nextElementSibling;
const passwordConfirmError = passwordConfirm.nextElementSibling;

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const zipRegExp = /^\d{5}(?:[-\s]\d{4})?$/;

window.addEventListener('load', () => {
  email.className = email.value.length === 0 || emailRegExp.test(email.value) ? 'valid' : 'invalid';
  country.className = country.value.length === 0 ? 'valid' : 'invalid';
  zip.className = zip.value.length === 0 || zipRegExp.test(zip.value) ? 'valid' : 'invalid';

  password.className = password.value.length === 0 ? 'valid' : 'invalid';
  passwordConfirm.className = passwordConfirm.value === password.value ? 'valid' : 'invalid';
});

email.addEventListener('input', () => {
  if (email.value.length === 0 || emailRegExp.test(email.value)) {
    email.className = 'valid';
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    email.className = 'invalid';
  }
});

email.addEventListener('focusout', () => {
  if (email.value.length === 0 || emailRegExp.test(email.value)) {
    email.className = 'valid';
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    email.className = 'invalid';
    emailError.textContent = 'I expect a valid email!';
    emailError.className = 'error active';
  }
});

country.addEventListener('input', () => {
  if (country.value.length > 2) {
    country.className = 'valid';
    countryError.textContent = '';
    countryError.className = 'error';
  } else {
    country.className = 'invalid';
  }
});

country.addEventListener('focusout', () => {
  if (country.value.length > 2) {
    country.className = 'valid';
    countryError.textContent = '';
    countryError.className = 'error';
  } else {
    country.className = 'invalid';
    countryError.textContent = 'The country name should be at least 3 characters long!';
    countryError.className = 'error active';
  }
});

zip.addEventListener('input', () => {
  if (zip.value.length === 0 || zipRegExp.test(zip.value)) {
    zip.className = 'valid';
    zipError.textContent = '';
    zipError.className = 'error';
  } else {
    zip.className = 'invalid';
  }
});

zip.addEventListener('focusout', () => {
  if (zip.value.length === 0 || zipRegExp.test(zip.value)) {
    zip.className = 'valid';
    zipError.textContent = '';
    zipError.className = 'error';
  } else {
    zip.className = 'invalid';
    zipError.textContent = 'I expect a zip code!';
    zipError.className = 'error active';
  }
});

password.addEventListener('input', () => {
  if (password.value.length >= 8) {
    password.className = 'valid';
    passwordError.textContent = '';
    passwordError.className = 'error';
  } else {
    password.className = 'invalid';
  }
});

password.addEventListener('focusout', () => {
  if (password.value.length < 8) {
    password.className = 'invalid';
    passwordError.textContent = 'Password should be at least 8 characters long!';
    passwordError.className = 'error active';
  } else {
    password.className = 'valid';
    passwordError.textContent = '';
    passwordError.className = 'error';
  }
});

passwordConfirm.addEventListener('input', () => {
  if (passwordConfirm.value === password.value) {
    passwordConfirm.className = 'valid';
    passwordConfirmError.textContent = '';
    passwordConfirmError.className = 'error';
  } else {
    passwordConfirm.className = 'invalid';
  }
});

passwordConfirm.addEventListener('focusout', () => {
  if (passwordConfirm.value === password.value) {
    passwordConfirm.className = 'valid';
    passwordConfirmError.textContent = '';
    passwordConfirmError.className = 'error';
  } else {
    passwordConfirm.className = 'invalid';
    passwordConfirmError.textContent = 'The passwords do not match!';
    passwordConfirmError.className = 'error active';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!emailRegExp.test(email.value)) {
    email.className = 'invalid';
    emailError.textContent = 'I expect a valid email!';
    emailError.className = 'error active';
  } else {
    email.className = 'valid';
    emailError.textContent = '';
    emailError.className = 'error';
  }

  if (country.value.length < 3) {
    country.className = 'invalid';
    countryError.textContent = 'The country name should be at least 3 characters long!';
    countryError.className = 'error active';
  } else {
    country.className = 'valid';
    countryError.textContent = '';
    countryError.className = 'error';
  }

  if (!zipRegExp.test(zip.value)) {
    zip.className = 'invalid';
    zipError.textContent = 'I expect a zip code, darling!';
    zipError.className = 'error active';
  } else {
    zip.className = 'valid';
    zipError.textContent = '';
    zipError.className = 'error';
  }

  if (password.value.length < 8) {
    password.className = 'invalid';
    passwordError.textContent = 'I expect a password, darling!';
    passwordError.className = 'error active';
  } else {
    password.className = 'valid';
    passwordError.textContent = '';
    passwordError.className = 'error';
  }

  if (passwordConfirm.value !== password.value) {
    passwordConfirm.className = 'invalid';
    passwordConfirmError.textContent = 'The passwords do not match!';
    passwordConfirmError.className = 'error active';
  } else {
    passwordConfirm.className = 'valid';
    passwordConfirmError.textContent = '';
    passwordConfirmError.className = 'error';
  }

  if (
    email.className === 'valid'
    && country.className === 'valid'
    && zip.className === 'valid'
    && password.className === 'valid'
    && passwordConfirm.className === 'valid'
  ) {
    form.reset();
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
});
