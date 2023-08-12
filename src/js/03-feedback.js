import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const { email, message } = form.elements;

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', onSubmit);

function handlerInput() {
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  );
}

function onSubmit (evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
};

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
  updateForm(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
}

function updateForm({ email: lsEmail, message: lsMessage }) {
  email.value = lsEmail;
  message.value = lsMessage;
}