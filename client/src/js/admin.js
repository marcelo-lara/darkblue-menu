const app = document.getElementById('container');

const form = new ItemForm();
const header = new Header('Admin');
const button = new Button('Save');

button.addEvent(form.saveForm.bind(form));

app.append(header.nodo, form.nodo, button.nodo);