import './style.css';
import displayList from './displaylist.js';
import getList from './getlist.js';
import storeList from './storelist.js';
import Task from './task.js';
import remCompleted from './remcompleted.js';

// const testList = [
//   { task: 'Do dishes', completed: false, index: 1 },
//   { task: 'Do laundry', completed: false, index: 3 },
//   { task: 'Walk dog', completed: false, index: 2 },
// ];
// storeList(testList);
let list = getList;
const newT = document.querySelector('#newToDo');
newT.addEventListener('keypress', (ev) => {
  if (ev.key === 'Enter' && ev.value !== '') {
    const task = new Task(newT.value, list.length);
    list.push(task);
    newT.value = '';
    storeList(list);
    displayList(list);
  }
});
const removeCompleted = document.querySelector('#delCompleted');
removeCompleted.addEventListener('click', () => {
  list = remCompleted(list);
  storeList(list);
  displayList(list);
});
displayList(list);