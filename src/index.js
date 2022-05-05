import './style.css';

import Keyboard from './Keyboard';
import drawElement from './drawElement';
import { btnArray } from './buttons';
import Button from './Button';

const keyboard = new Keyboard('keyboard');
const btnObjs = [];

const keyboardHTML = keyboard.createKeyboard();
const inputField = '<textarea class="input"></textarea>';
const h1 = '<h1>Virtual Keyboard</h1>';
const info = '<p>This keyboard is created in Windows.<br> To swicth languages use <b>LeftShift+LeftCtrl</b></p>';

const pageElements = [h1, inputField, keyboardHTML, info];
pageElements.forEach((elem) => drawElement(elem));

btnArray.forEach((buttonEl) => {
  const button = new Button(buttonEl);
  button.className();
  btnObjs.push(button);
});

const keyboardFromPage = document.querySelector('#keyboard');
const lang = 'ru';

function renderKeyboard(buttonsObj) {
  buttonsObj.forEach((button) => {
    keyboardFromPage.innerHTML += `<div class="${button.className}" data-name=${button.name}>${button[lang]}</div>`;
  });
}

renderKeyboard(btnObjs);
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
