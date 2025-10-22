const form = document.querySelector('form');
const main = document.querySelector('main');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');



const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const subjectError = document.getElementById('subject-error');
const messageError = document.getElementById('message-error');


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


function hideErrors() {
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    subjectError.style.display = 'none';
    messageError.style.display = 'none';
    
}

function validateField(field, errorElement, validationFn) {
    if (!validationFn()) {
        errorElement.style.display = 'block';
        field.classList.add('invalid');
        return false;
    } else {
        errorElement.style.display = 'none';
        field.classList.remove('invalid');
        return true;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    hideErrors();

    let isValid = true;

    isValid &= validateField(fullName, nameError, () => fullName.value.trim() !== '');

    isValid &= validateField(email, emailError, () => emailRegex.test(email.value.trim()));

    isValid &= validateField(subject, subjectError, () => subject.value.trim() !== '');

    isValid &= validateField(message, messageError, () => message.value.trim().length >= 10);

    if (isValid) {
        showSuccessMessage();
        form.reset();
    }
})

function showSuccessMessage() {
    const successContainer = document.createElement('div');
    successContainer.className = 'success-container';
    const successMsg = document.createElement('div');
    successContainer.appendChild(successMsg);
    successMsg.className = 'success-message';
    successMsg.textContent = 'Thank you! I will get back to you shortly';    

    main.parentNode.insertBefore(successContainer, main);

    setTimeout(() => {
        successContainer.remove();
    }, 3000);
}

hideErrors();