const nameInput = document.querySelector('.name');
const email = document.querySelector('.email');
const msg = document.querySelector('.message');

addEventListener('submit', () => {
    nameInput.value = '';
    email.value = '';
    msg.value = '';
});