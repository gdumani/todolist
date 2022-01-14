export default class Todo {
  constructor() {
    this.list = localStorage.getItem('list') == null
    ? []
    : JSON.parse(localStorage.getItem('list'));
  }


  addItem() {

  }

  editItem(){

  }

  markItem(){

  }
  
  remove() {

  }

  move()  {

  }

  display() {

  }
}