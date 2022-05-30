export default class Keyboard {
  constructor(id) {
    this.id = id;
  }

  createKeyboard() {
    return `<div id='${this.id}'></div>`;
  }
}
