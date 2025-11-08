/** @type {HTMLElement} */
const form = document.getElementById('form');

/** @type {HTMLElement} */
const textbox = form.querySelector('.email .textbox');

/** @type {HTMLElement} */
const emailError = document.getElementById('email-error');

/** @type {HTMLElement} */
const btnDismiss = document.getElementById('btn-dismiss');

/** @type {HTMLElement} */
const pageSignup = document.getElementById('page-signup');

/** @type {HTMLElement} */
const pageSuccess = document.getElementById('page-success');

/**
 * if it's an email address.
 * @param {String} str 
 * @returns 
 */
function isEmail(str) {
    return str.match(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/);
}

textbox.addEventListener('change', (e) => {
    if (!isEmail(textbox.value)) {
        textbox.classList.add('textbox-error');
        emailError.style.display = 'block';
    } else {
        textbox.classList.remove('textbox-error');
        emailError.style.display = 'none';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    const email = data.email;

    if (isEmail(email)) {
        pageSignup.style.display = 'none';
        pageSuccess.style.display = 'flex';
    }
});

btnDismiss.onclick = () => {
    console.log("aaa");
    pageSignup.style.display = 'flex';
    pageSuccess.style.display = 'none';
};
