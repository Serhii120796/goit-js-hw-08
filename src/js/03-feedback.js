import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const { email, message } = form.elements;

form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem('email', email.value);
    localStorage.setItem('message', message.value);
  }, 500)
);

email.value = '' ? '' : localStorage.getItem('email');
message.value = '' ? '' : localStorage.getItem('message');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  email.value = "";
  message.value = "";
  localStorage.clear();
});
