const checkbox = document.querySelectorAll('.agreement');
const svgUse = document.querySelector('.svg-check');
const svgUseModal = document.querySelector('.svg-check-modal');

checkbox.forEach((el, i) =>
  el.addEventListener('change', function () {
    if (checkbox[i].checked) {
      svgUse.style.stroke = 'green';
      svgUseModal.style.stroke = 'green';
    } else {
      svgUse.style.stroke = 'transparent';
      svgUseModal.style.stroke = 'transparent';
    }
  })
);

document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.querySelector('.registration-form');
  const modalRegistrationForm = document.getElementById(
    'modal-registration-form'
  );
  const registerButton = document.getElementById('register-button');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementsByClassName('close')[0];

  registerButton.addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function () {
    document.body.style.overflow = 'unset';
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      document.body.style.overflow = 'unset';
      modal.style.display = 'none';
    }
  });

  function handleFormSubmission(form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const phone = form.querySelector('input[name="phone"]').value.trim();
      const agreement = form.querySelector('input[type="checkbox"]').checked;

      const req = {
        name: name,
        email: email,
        phone: phone,
        agreement: agreement,
      };
      console.log(req);

      if (!name || !email || !phone || !agreement) {
        alert(
          'Будь ласка, заповніть всі поля та погодьтеся з Політикою конфіденційності та Умовами користування.'
        );
        return;
      }

      fetch('https://example.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
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
