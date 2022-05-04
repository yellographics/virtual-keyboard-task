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

function renderKeyboard(buttons) {
  // const keyboard = document.querySelector('#keyboard');
  buttons.forEach((button) => {
    keyboardFromPage.innerHTML += `<div class="${button.className}">${lang === 'ru' ? button.ru : button.en}</div>`;
  });
}

renderKeyboard(btnObjs);
