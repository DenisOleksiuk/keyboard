/* eslint-disable import/extensions */

// import * as storage from './storage.js';
import create from './utils/create.js';
import language from './layouts/index.js';
import Key from './Key.js';

export default class Keyboard {
  constructor(rowsOrder) {
    this.rowsOrder = rowsOrder;
    this.keysPressed = {};
    this.isCaps = false;
  }

  init(langCode) {
    const keyboard = document.querySelector('.keyboard');
    this.keysBase = language[langCode];
    this.output = create('textarea', 'output', null, keyboard,
      ['Placeholder', 'Start type something'], ['rows', 5],
      ['cols', 30], ['spallcheck', false], ['autocorrect', 'off']);
    this.container = create('div', 'keyboard', null, 'body', ['language', langCode]);
    return this;
  }

  generateLayout() {
    this.keysButtons = [];
    this.rowsOrder.forEach((row) => {
      const rowElement = create('div', 'keyboard', null);
      rowElement.style.display = 'flex';
      row.forEach((code) => {
        const keyObj = this.keysBase.find((key) => key.code === code);
        if (keyObj) {
          const keyButton = new Key('keyObj');
          this.keysButtons.push('keyButton');
          rowElement.appendChild(keyButton.div);
        }
      });
    });
  }
}
