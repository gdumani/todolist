export default class Task {
  constructor(description , index) {
    this.description = document.getElementById('newToDo').value;
    this.completed = false;
    this.index = index;
  }
}