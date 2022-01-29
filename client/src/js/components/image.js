class Image {
    constructor(imgUrl) {
        this.imgUrl = imgUrl;
        this.nodo = document.createElement('div');
        this.addCSSClasses();
        this.addStyles();
    }

    addCSSClasses() {
        $(this.nodo).addClass('image__container');
    }

    addStyles() {
        if (this.imgUrl) {
            $(this.nodo).css({
                'background-image': `url(${this.imgUrl})`
            });
        }
    }

    changeImage(imgUrl) {
        this.imgUrl = imgUrl;
        this.addStyles();
    }
}