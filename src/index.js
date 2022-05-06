import './style.css';

import Keyboard from './Keyboard';
import drawElement from './drawElement';
import btnObjs from './buttonObjects';

// задаем язык
let lang = 'en';

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
let isLeftShift = false;

// функция клика по кнопке
function clickOnButton(button) {
  button.classList.add('button-active');
  if (button.dataset.name === 'Space') {
    const inputString = inputFieldFromHTML.value.split('');
    const { selectionStart } = inputFieldFromHTML;
    inputString.splice(selectionStart, 0, ' ');
    inputFieldFromHTML.value = inputString.join('');
    inputFieldFromHTML.focus();
    inputFieldFromHTML.setSelectionRange(selectionStart + 1, selectionStart + 1);
  } else if (button.dataset.name === 'Enter') {
    const inputString = inputFieldFromHTML.value.split('');
    const { selectionStart } = inputFieldFromHTML;
    inputString.splice(selectionStart, 0, '\r\n');
    inputFieldFromHTML.value = inputString.join('');
    inputFieldFromHTML.focus();
    inputFieldFromHTML.setSelectionRange(selectionStart + 1, selectionStart + 1);
  } else if (button.dataset.name === 'Backspace') {
    const inputString = inputFieldFromHTML.value.split('');
    const { selectionStart } = inputFieldFromHTML;
    if (selectionStart > 0) {
      inputString.splice(selectionStart - 1, 1);
      inputFieldFromHTML.value = inputString.join('');
      inputFieldFromHTML.focus();
      inputFieldFromHTML.setSelectionRange(selectionStart - 1, selectionStart - 1);
    }
  } else if (button.dataset.name === 'Delete') {
    const inputString = inputFieldFromHTML.value.split('');
    const { selectionStart } = inputFieldFromHTML;
    if (selectionStart < inputString.length) {
      inputString.splice(selectionStart, 1);
      inputFieldFromHTML.value = inputString.join('');
      inputFieldFromHTML.focus();
      inputFieldFromHTML.setSelectionRange(selectionStart, selectionStart);
    }
  } else if (button.dataset.name === 'Tab') {
    const inputString = inputFieldFromHTML.value.split('');
    const { selectionStart } = inputFieldFromHTML;
    inputString.splice(selectionStart, 0, '\t');
    inputFieldFromHTML.value = inputString.join('');
    inputFieldFromHTML.focus();
    inputFieldFromHTML.setSelectionRange(selectionStart + 1, selectionStart + 1);
  } else if (button.dataset.name === 'ShiftLeft') {
    isLeftShift = true;
  } else if (button.dataset.name === 'ControlLeft' && isLeftShift) {
    if (lang === 'ru') {
      lang = 'en';
    } else lang = 'ru';
    renderKeyboard(btnObjs);
  } else if (button.dataset.name !== 'ControlLeft' && button.dataset.name !== 'ShiftLeft') {
    const inputString = inputFieldFromHTML.value.split('');
    const { selectionStart } = inputFieldFromHTML;
    inputString.splice(selectionStart, 0, button.innerText);    
    inputFieldFromHTML.value = inputString.join('');
    inputFieldFromHTML.focus();
    inputFieldFromHTML.setSelectionRange(selectionStart + 1, selectionStart + 1);
  }
}

// функция отжатия кнопки
function unclickButton(button) {
  button.classList.remove('button-active');
  if (button.dataset.name === 'ShiftLeft') {
    isLeftShift = false;
  }
}

// слушатели на события с виртуальной и реальной клавиатуры
keyboardFromPage.addEventListener('mousedown', (event) => {
  if (event.target.hasAttribute('data-name')) {
    currentPressedVirtual = event.target;
    clickOnButton(currentPressedVirtual);
  }
});

keyboardFromPage.addEventListener('mouseup', () => {
  unclickButton(currentPressedVirtual);
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const buttons = Array.from(document.querySelectorAll('div[data-name]'));
  currentPressedReal = buttons.find((item) => item.dataset.name === event.code);
  clickOnButton(currentPressedReal);
});

document.addEventListener('keyup', (event) => {
  const buttons = Array.from(document.querySelectorAll('div[data-name]'));
  currentPressedReal = buttons.find((item) => item.dataset.name === event.code);
  unclickButton(currentPressedReal);
});
