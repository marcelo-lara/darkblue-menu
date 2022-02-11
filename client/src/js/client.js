import {addItem, getItem, delItem, getItems, getItemsByTags, getTagsList, updateItem} from '../controllers/store.js';

console.clear();
console.log("Welcome to MY world");

const removeAllChildNodes = (parent)=> {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const itemList = [];

class Item {
    constructor(i){
        this.title = i.title;
        this.description = i.description;
        this.qty = i.qty;
        this.tags = i.tags;
        return this;
    }

    render() {
        const placeholder = document.createElement('div');
        placeholder.innerHTML = `
        <div>
            <h3 class="title">${this.title}</h3>
            <div class="description">${this.description}</div>
            <span class="tags">${this.tags}</span>
            <span class="qty">Cantidad: ${this.qty}</span>
            <button class="button pick">Pick</button>
        </div>
      `;
      
      return placeholder.firstElementChild;         
    }

}

class SelectedItem {
    constructor(wrapperElem){
        this.elem = wrapperElem;
        this.selectedItem = undefined;
    }

    pick(item) {
        this.selectedItem = item;
        removeAllChildNodes(this.elem);
        const ret = this.elem.appendChild(item.render());
        ret.querySelector('button').innerHTML="yup";

    }

}
const selectedItem = new SelectedItem(document.querySelector('div.selected'));

//main menu
(()=>{
    console.log(":: Menu start ::");

    const menu = document.querySelector('div.menu');
    

    getItems()
    .then((items)=>{
        for(const item of items){
            const obj = new Item(item);
            const elem = obj.render();
            elem.querySelector('button.pick')
                .addEventListener('click', ()=>{selectedItem.pick(obj)});
            menu.appendChild(elem);
            itemList.push(obj);
        }
    })

})();
