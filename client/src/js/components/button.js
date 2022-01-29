class Button {
    constructor(label) {
        this.label = label;
        this.nodo = document.createElement('button');
        this.nodo.innerHTML = label;
        this.addCSSClasses();
    }

    addCSSClasses() {
        $(this.nodo).addClass('button__label');
    }

    addEvent(callback) {
        this.nodo.addEventListener('click', callback);
    }
}