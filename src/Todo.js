export default class Todo {
  constructor() {
    this.list = localStorage.getItem('list') == null
    ? []
    : JSON.parse(localStorage.getItem('list'));
  }

  populate () {
    this.list = [
      
    ]
  }

  addItem() {

  }

  remove() {

  }

  move()  {
    
  }

  display() {

  }
}