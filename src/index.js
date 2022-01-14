import './style.css';
import displayList from './displaylist.js';
import getList from './getlist.js';
import storeList from './storelist.js';



const testList = [
  { task: 'Do dishes', completed: false, index: 1 },
  { task: 'Do laundry', completed: false, index: 3 },
  { task: 'Walk dog', completed: false, index: 2 },
];
storeList(testList);
const list = getList;
console.log(list);
displayList(list);