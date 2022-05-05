import './style.css';

import Keyboard from './Keyboard';
import drawElement from './drawElement';
import btnObjs from './buttonObjects';

// задаем язык (пока захардкожено, после нужно будет подгружать из кэша)
const lang = 'ru';

// создаем клавиатуру и рисуем все элементы для страницы
const keyboard = new Keyboard('keyboard');
const keyboardHTML = keyboard.createKeyboard();

const inputField = '<textarea class="input"></textarea>';
const h1 = '<h1>Virtual Keyboard</h1>';
const info = '<p>This keyboard is created in Windows.<br> To swicth languages use <b>LeftShift+LeftCtrl</b></p>';

const pageElements = [h1, inputField, keyboardHTML, info];
pageElements.forEach((elem) => drawElement(elem));

// находим клавиатуру на странице
const keyboardFromPage = document.querySelector('#keyboard');

// создаем функцию рендера кнопок внутри клавиатуры и рендерим ее
function renderKeyboard(buttonsObj) {
  buttonsObj.forEach((button) => {
    keyboardFromPage.innerHTML += `<div class="${button.className}" data-name=${button.name}>${button[lang]}</div>`;
  });
}

renderKeyboard(btnObjs);

// работа с виртуальной клавиатурой

const inputFieldFromHTML = document.querySelector('.input');
inputFieldFromHTML.value = '';

let currentPressed = '';

keyboardFromPage.addEventListener('mousedown', (event) => {
  if (event.target.hasAttribute('data-name')) {
    currentPressed = event.target;
    event.target.classList.add('button-active');
    inputFieldFromHTML.value += event.target.innerText;
  }
});

keyboardFromPage.addEventListener('mouseup', () => {
  currentPressed.classList.remove('button-active');
});

document.addEventListener('keydown', (event) => {
  const buttons = Array.from(document.querySelectorAll('div[data-name]'));
  const pressedButton = buttons.find((item) => item.dataset.name === event.code);
  pressedButton.classList.add('button-active');
});

document.addEventListener('keyup', (event) => {
  const buttons = Array.from(document.querySelectorAll('div[data-name]'));
  const pressedButton = buttons.find((item) => item.dataset.name === event.code);
  pressedButton.classList.remove('button-active');
});
