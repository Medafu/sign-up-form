const email = document.querySelector('#email');
const password = document.querySelector('#pwd');
const confirm = document.querySelector('#confirm');
const phone = document.querySelector('#number');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');

const onclick_elements = [email, password, phone, confirm, firstName, lastName];

onclick_elements.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.add('invalid:border-pink-500', 'invalid:focus:border-pink-500');
    })
});