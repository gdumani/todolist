import './style.css';

const testList = [
  { task: 'Do dishes', completed: false, index: 1 },
  { task: 'Do laundry', completed: false, index: 3 },
  { task: 'Walk dog', completed: false, index: 2 },
];

function displayList(l) {
  const sortList = l.sort((a, b) => a.index - b.index);
  sortList.forEach((el) => {
    const liHtml = document.createElement('li');
    liHtml.innerHTML += `<input type="checkbox" class="checkTask" data-key=${el.index}>
    <span>${el.task}</span>
    <button class = 'delTask'><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
    `;
    liHtml.className = 'listLine';

    document.getElementById('list').appendChild(liHtml);
  });
}
displayList(testList);