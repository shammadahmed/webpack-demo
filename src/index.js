import myName from './myName';

function component() {
  let element = document.createElement('div');

  element.innerHTML = myName('Hammad');

  return element;
}

document.body.appendChild(component());
