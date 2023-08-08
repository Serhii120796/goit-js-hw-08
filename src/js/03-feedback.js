const form = document.querySelector('.feedback-form');
form.addEventListener('input', onInput);

function onInput(evt) {
    console.log(evt.target.value);
}
