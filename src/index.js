import './style.css';

import Keyboard from './Keyboard';
import drawElement from './drawElement';
import btnObjs from './buttonObjects';

// задаем язык (пока захардкожено, после нужно будет подгружать из кэша)
const lang = 'ru';

// создаем клавиатуру и рисуем все элементы для страницы
const keyboard = new Keyboard('keyboard');
const keyboardHTML = keyboard.createKeyboard();

const inputField = '<textarea class="input" autofocus></textarea>';
const h1 = '<h1>Virtual Keyboard</h1>';
const info = '<p>This keyboard is created in Windows.<br> To swicth languages use <b>LeftShift+LeftCtrl</b></p>';

const pageElements = [h1, inputField, keyboardHTML, info];
pageElements.forEach((elem) => drawElement(elem));

// находим клавиатуру на странице
const keyboardFromPage = document.querySelector('#keyboard');

// создаем функцию рендера кнопок внутри клавиатуры и рендерим ее
function renderKeyboard(buttonsObj, shift = false) {
  if (shift === true) {
    const langShift = `${lang}Shift`;
    keyboardFromPage.innerHTML = '';
    buttonsObj.forEach((button) => {
      keyboardFromPage.innerHTML += `<div class="${button.className}" data-name=${button.name}>${button[langShift] ? button[langShift] : button[lang].toUpperCase()}</div>`;
    });
  } else {
    keyboardFromPage.innerHTML = '';
    buttonsObj.forEach((button) => {
      keyboardFromPage.innerHTML += `<div class="${button.className}" data-name=${button.name}>${button[lang]}</div>`;
    });
  }
}

renderKeyboard(btnObjs);

// работа с виртуальной клавиатурой
const buttons = Array.from(document.querySelectorAll('div[data-name]'));
const inputFieldFromHTML = document.querySelector('.input');
inputFieldFromHTML.value = '';

// переменная для отслеживания нажатой с виртуальной и реальной клавиатур
let currentPressedVirtual = null;
let currentPressedReal = null;

// функция клика по кнопке
function clickOnButton(button) {
  if (button.target) {
    if (button.target.hasAttribute('data-name')) {
      currentPressedVirtual = button.target;
      button.target.classList.add('button-active');
      inputFieldFromHTML.value += button.target.innerText;
    }
  } else {
    button.classList.add('button-active');
    inputFieldFromHTML.value += button.innerText;
  }
}

// функция отжатия кнопки
function unclickButton(button) {
  button.classList.remove('button-active');
}

// слушатели на события с виртуальной и реальной клавиатуры
keyboardFromPage.addEventListener('mousedown', (event) => {
  clickOnButton(event);
});

keyboardFromPage.addEventListener('mouseup', () => {
  unclickButton(currentPressedVirtual);
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  currentPressedReal = buttons.find((item) => item.dataset.name === event.code);
  clickOnButton(currentPressedReal);
});

document.addEventListener('keyup', (event) => {
  currentPressedReal = buttons.find((item) => item.dataset.name === event.code);
  unclickButton(currentPressedReal);
});
