const phoneInputField = document.querySelector('#phone');

const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: 'ua',
  geoIpLookup: function (callback) {
    fetch('https://ipinfo.io/json', { headers: { Accept: 'application/json' } })
      .then(response => response.json())
      .then(data => callback(data.country))
      .catch(() => callback('us'));
  },
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
});
const phoneInputFieldMobile = document.querySelector('#phoneMobile');

const phoneInputMobile = window.intlTelInput(phoneInputFieldMobile, {
  initialCountry: 'ua',
  geoIpLookup: function (callback) {
    fetch('https://ipinfo.io/json', { headers: { Accept: 'application/json' } })
      .then(response => response.json())
      .then(data => callback(data.country))
      .catch(() => callback('us'));
  },
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
});
