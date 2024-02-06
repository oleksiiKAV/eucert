
  // import axios from "axios";
  document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение отправки формы

    let formData = new FormData(this); // Получаем данные формы

    axios.post('contacts.php', formData)
      .then(function(response) {
        const language = window.location.hash; // Get the language suffix from the URL

        switch (language) {
          case '#en':
            document.getElementById('contacts-response-message').textContent = 'Your message has been delivered, we will contact you shortly.';
            break;
          case '#ru':
            document.getElementById('contacts-response-message').textContent = 'Ваше сообщение доставлено, мы свяжемся с вами в ближайшее время.';
            break;
          case '#ua':
            document.getElementById('contacts-response-message').textContent = "Ваше повідомлення доставлено, ми зв'яжемося з вами найближчим часом.";
            break;
          default:
            document.getElementById('contacts-response-message').textContent = 'An error occurred while sending the message.';
            break;
        }

        document.getElementById('contacts-response-message').classList.add('success');
        document.getElementById('contact').reset(); // Очищаем форму
        setTimeout(function() {
          document.getElementById('contacts-response-message').textContent = '';
        }, 5000);
      })
      .catch(function(error) {
        const language = window.location.hash; // Get the language suffix from the URL

        switch (language) {
          case '#en':
            document.getElementById('contacts-response-message').textContent = 'An error occurred while sending the message.';
            break;
          case '#ru':
            document.getElementById('contacts-response-message').textContent = 'Произошла ошибка при отправке сообщения.';
            break;
          case '#ua':
            document.getElementById('contacts-response-message').textContent = 'Виникла помилка при відправці повідомлення.';
            break;
          default:
            document.getElementById('contacts-response-message').textContent = 'An error occurred while sending the message.';
            break;
        }
        document.getElementById('contacts-response-message').classList.add('error');
        setTimeout(function() {
          document.getElementById('contacts-response-message').textContent = '';
        }, 5000);
      });
  });

