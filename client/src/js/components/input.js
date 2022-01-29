class Input {
    constructor(id, label) {
        this.id = id;
        this.label = label;
        this.nodo = document.createElement('div');
        this.nodo.innerHTML = this.generateHTML();
        this.addCSSClasses();
    }

    addCSSClasses() {
        $(this.nodo).addClass('input__container');
    }

    generateHTML() {
        return `
      <label class="input__label" for="${this.id}">${this.label}</label>
      <input class="input__input" id="${this.id}" />
    `;
    }

    addEvent(callback) {
        this.nodo.addEventListener('change', (evt) => {
            callback(evt.target.value);
        });
    }
}