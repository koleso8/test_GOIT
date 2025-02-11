const nameMain = document.getElementById('nameMain');
const email = document.getElementById('email');
const phone = document.querySelector('.phone');
const phoneRegex = /^[0-9]{10,15}$/;

function validateField(field, isValid) {
  if (isValid) {
    field.classList.remove('input-error');
  } else {
    field.classList.add('input-error');
  }
}

nameMain.addEventListener('input', function () {
  console.log(nameMain.value.trim().length);

  validateField(
    nameMain,
    nameMain.value.trim() !== '' && nameMain.value.trim().length < 2
  );
});

email.addEventListener('input', function () {
  validateField(email, /\S+@\S+\.\S+/.test(email.value));
});

phone.addEventListener('input', function () {
  validateField(phone, phoneRegex.test(phone.value.trim()));
});

document
  .getElementById('registration-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Запобігає надсиланню форми

    const isNameValid = nameMain.value.trim() !== '';
    const isEmailValid = /\S+@\S+\.\S+/.test(email.value);
    const isPhoneValid = phone.value.trim() !== '';
    const isAgreementValid = agreement.checked;

    validateField(nameMain, isNameValid);
    validateField(email, isEmailValid);
    validateField(phone, isPhoneValid);

    if (isNameValid && isEmailValid && isPhoneValid) {
      // Якщо всі поля пройшли перевірку, надсилаємо форму
      event.target.submit();
    } else {
      alert('Будь ласка, заповніть усі поля коректно.');
    }
  });
