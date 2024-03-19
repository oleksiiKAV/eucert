document.getElementById('cert-check').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение отправки формы

    let formData = new FormData(this); // Получаем данные формы
    const language = localStorage.getItem('selectedLanguage') || 'en';
    axios.post('check-cert.php', formData)
      .then(function(response) {
        // const language = window.location.hash; // Get the language suffix from the URL

        switch (language) {
          case 'en':
            document.getElementById('response-message').textContent = 'Your message has been delivered, we will contact you shortly.';
            break;
          case 'ru':
            document.getElementById('response-message').textContent = 'Ваше сообщение доставлено, мы свяжемся с вами в ближайшее время.';
            break;
          case 'ua':
            document.getElementById('response-message').textContent = "Ваше повідомлення доставлено, ми зв'яжемося з вами найближчим часом.";
            break;          
        }

        document.getElementById('response-message').classList.add('success');
        document.getElementById('cert-check').reset(); // Очищаем форму
        setTimeout(function() {
          document.getElementById('response-message').textContent = '';
        }, 5000);
      })
      .catch(function(error) {
        const language = window.location.hash; // Get the language suffix from the URL

        switch (language) {
          case 'en':
            document.getElementById('response-message').textContent = 'An error occurred while sending the message.';
            break;
          case 'ru':
            document.getElementById('response-message').textContent = 'Произошла ошибка при отправке сообщения.';
            break;
          case 'ua':
            document.getElementById('response-message').textContent = 'Виникла помилка при відправці повідомлення.';
            break;          
        }
        document.getElementById('response-message').classList.add('error');
        setTimeout(function() {
          document.getElementById('response-message').textContent = '';
        }, 5000);

      });
  });