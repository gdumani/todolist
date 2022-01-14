
const displayList = (l) => {
  console.log("lista en displayList",l)
  l.forEach((el) => {
    const liHtml = document.createElement('li');
    liHtml.innerHTML += `<input type="checkbox" class="checkTask" data-key=${el.index}>
    <span>${el.task}</span>
    <button class = 'delTask'><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
    `;
    liHtml.className = 'listLine';

    document.getElementById('list').appendChild(liHtml);
  });
}
export default displayList;
