class ItemForm {
    constructor() {
        this.inputs = [];
        this.nodo = document.createElement('form');
        this.addFields();
    }

    addFields() {
        const inputItemName = new Input('itemName', 'Nombre del Item:');

        const inputImageUrl = new Input('imageUrl', 'Image URL del Item:');
        const image = new Image();

        inputImageUrl.addEvent(image.changeImage.bind(image));

        const inputTag = new Input('tags', 'Tags:');
        const inputQty = new Input('qty', 'Cantidad:');

        this.inputs.push(inputItemName, inputImageUrl, inputTag, inputQty);
        this.nodo.append(inputItemName.nodo, inputImageUrl.nodo, image.nodo, inputTag.nodo, inputQty.nodo);
    }

    saveForm() {
        const item = {};
        for (const input of this.inputs) {
            item[input.id] = document.getElementById(input.id).value;
        }

        item.id = uuid.v1();

        localStorage.setItem(item.id, JSON.stringify(item));
    }
}