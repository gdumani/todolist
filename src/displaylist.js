
const displayList = (l) => {
  let allLi = document.getElementById('list');
  allLi.innerHTML = '';
  l.forEach((el) => {
    const liHtml = document.createElement('li');
    liHtml.innerHTML += `<input type="checkbox" class="checkTask" data-key=${el.index}>
    <span>${el.description}</span>
    <button class = 'delTask'><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
    `;
    liHtml.className = 'listLine';

    allLi.appendChild(liHtml);
  });
}
export default displayList;
