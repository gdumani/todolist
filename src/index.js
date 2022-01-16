import './style.css';
import displayList from './displaylist.js';
import getList from './getlist.js';
import storeList from './storelist.js';
import Task from './task.js';
import remCompleted from './remcompleted.js';

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
const removeCompleted = document.querySelector('.delCompleted');
removeCompleted.addEventListener('click', () => {
  list = remCompleted(list);
  storeList(list);
  displayList(list);
});
displayList(list);