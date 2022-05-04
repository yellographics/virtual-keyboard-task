export default class Button {
  constructor({ name, ru, en }) {
    this.name = name;
    this.ru = ru;
    this.en = en;
  }

  className() {
    this.className = 'button';
    if (this.name !== 'Backspace' && this.name !== 'Tab'
      && this.name !== 'CapsLock' && this.name !== 'CapsLock'
      && this.name !== 'Enter' && this.name !== 'ShiftLeft'
      && this.name !== 'ShiftRight' && this.name !== 'Space') {
      this.className += ' button-squared';
    }
    if (this.name === 'Backspace') {
      this.className += ' button-backspace';
    }
    if (this.name === 'Tab') {
      this.className += ' button-tab';
    }
    if (this.name === 'Delete') {
      this.className += ' button-delete';
    }
    if (this.name === 'Enter') {
      this.className += ' button-enter';
    }
    if (this.name === 'CapsLock') {
      this.className += ' button-capslock';
    }
    if (this.name === 'ShiftLeft') {
      this.className += ' button-shiftLeft';
    }
    if (this.name === 'ShiftRight') {
      this.className += ' button-shiftRight';
    }
    if (this.name === 'Space') {
      this.className += ' button-space';
    }
  }
}
