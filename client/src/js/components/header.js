class Header {
    constructor(text) {
        this.nodo = document.createElement('h2');
        this.nodo.innerText = text;
        this.addCSSClasses();
    }

    addCSSClasses() {
        $(this.nodo).addClass('header__title');
    }
}