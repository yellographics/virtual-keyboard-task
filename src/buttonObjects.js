import { btnArray } from './buttons';
import Button from './Button';

const btnObjs = [];

btnArray.forEach((buttonEl) => {
  const button = new Button(buttonEl);
  button.className();
  btnObjs.push(button);
});

export default btnObjs;
