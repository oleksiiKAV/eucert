import { langArr } from './lang';

const select = document.querySelector('.change-lang');
const allLang = ['en', 'ru', 'ua'];

// Функция для сохранения выбранного языка в localStorage
function saveSelectedLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
}

// Функция для получения сохраненного языка из localStorage
function getSelectedLanguage() {
  return localStorage.getItem('selectedLanguage') || 'en'; // Если язык не найден, используем английский по умолчанию
}

// Установка выбранного языка при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = getSelectedLanguage();
  select.value = savedLang;
  
  applyLanguage(savedLang);
});

select.addEventListener('change', changeURLLanguage);

// Перенаправить на URL с указанием языка
function changeURLLanguage() {
  let lang = select.value;
  saveSelectedLanguage(lang); // Сохраняем выбранный язык
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

// Функция для применения языка на странице
function applyLanguage(lang) {
  // Применяем переводы
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][lang];
    }
  }
}

// Применяем язык при загрузке страницы
applyLanguage(getSelectedLanguage());
