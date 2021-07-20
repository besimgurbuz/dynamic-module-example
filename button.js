export default class ButtonElement {
  element;
  color;
  label;

  constructor({ color, label, clickAction }) {
    this.element = document.createElement('button');
    this.color = color;
    this.label = label;
    this.element.addEventListener('click', clickAction);
  }

  /**
   * Sets the default styles for the given ButtonElement.
   * @param {HTMLButtonElement} buttonElement
   */
  setStyles(buttonElement) {
    // buttonElement.addEventListener('click', )
    this.element.style.backgroundColor = this.color ?? '#f1f1f1';
    this.element.style.borderRadius = '8px';
    this.element.style.padding = '12px';
    this.element.style.outline = 'none';
    this.element.style.color = '#fff'
    this.element.style.border = 'none';
  }

  /**
   * Appends the button element to given HTMLElement.
   * @param {HTMLElement} parent
   */
  render(parent) {
    this.setStyles();
    this.element.innerHTML = this.label ?? 'Default Label';
    parent.appendChild(this.element);
  }
}