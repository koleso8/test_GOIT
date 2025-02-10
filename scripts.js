import './js/timer.js';

document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registration-form');
  const modalRegistrationForm = document.getElementById(
    'modal-registration-form'
  );
  const registerButton = document.getElementById('register-button');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementsByClassName('close')[0];

  // Show modal on register button click
  registerButton.addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    modal.style.display = 'block';
  });

  // Close modal
  closeModal.addEventListener('click', function () {
    document.body.style.overflow = 'unset';
    modal.style.display = 'none';
  });

  // Close modal if clicking outside of modal content
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      document.body.style.overflow = 'unset';
      modal.style.display = 'none';
    }
  });

  // Form submission logic
  function handleFormSubmission(form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      // Validate form
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const phone = form.querySelector('input[name="phone"]').value.trim();
      const agreement = form.querySelector('input[type="checkbox"]').checked;

      if (!name || !email || !phone || !agreement) {
        alert(
          'Будь ласка, заповніть всі поля та погодьтеся з Політикою конфіденційності та Умовами користування.'
        );
        return;
      }

      // Send POST request
      fetch('https://example.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          agreement: agreement,
        }),
      })
        .then(response => response.json())
        .then(data => {
          alert('Реєстрація успішна!');
          form.reset();
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Виникла помилка під час реєстрації.');
        });
    });
  }

  handleFormSubmission(registrationForm);
  handleFormSubmission(modalRegistrationForm);
});
