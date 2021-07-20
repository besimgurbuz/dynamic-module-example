import './style.css'

const root = document.querySelector('#app');
let enableButton = false;
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.addEventListener('click', checkboxClicked);

root.innerHTML = `
  <h1>Hello Vite!</h1>

  <label>Enable Button?</label>
`
root.appendChild(checkbox);


function checkboxClicked() {
  enableButton = !enableButton;
  const div = document.createElement('div');
  div.id = 'say-hello';
  div.style.margin = '10px 0';

  if (enableButton) {
    import('./button').then(({ default: ButtonElement }) => {
      const button = new ButtonElement({ color: 'blue', label: 'Say Hello!', clickAction: clickEvent });

      button.render(div);
      root.appendChild(div);
    })

  } else {
    const addedDiv = document.querySelector('#say-hello');
    root.removeChild(addedDiv);
  }
}


function clickEvent() {
  const divElement = document.createElement('div');
  const helloText = document.createElement('h2');
  const removeButton = new ButtonElement({
    color: 'red', label: 'Remove', clickAction: () => {
      root.removeChild(divElement)
    }
  });

  helloText.innerText = 'Hello!';
  divElement.appendChild(helloText);
  removeButton.render(divElement);
  root.appendChild(divElement);
}