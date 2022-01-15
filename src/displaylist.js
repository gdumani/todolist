import storeList from "./storelist";

const displayList = (l) => {
  const allLi = document.getElementById('list');
  allLi.innerHTML = '';
  l.forEach((el) => {
    const liHtml = document.createElement('li');
    liHtml.className = 'listLine';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkBox';
    checkBox.className = 'checkTask';
    checkBox.checked = el.completed;
    checkBox.addEventListener('change', () => {
      el.completed = !el.completed;
      storeList(l);
    });
    const description = document.createElement('input');
    description.type = 'text';
    description.className = 'editClass';
    description.value = el.description;
    description.addEventListener('keypress', (k) => {
      if (k.key === 'Enter' && k.value !== '') {
        el.description = description.value;
        description.blur();
        storeList(l);
      }
    });
    const delButton = document.createElement('button');
    delButton.className = 'delTask';
    delButton.innerHTML = '<i class="fa fa-ellipsis-v" aria-hidden="true">';

    liHtml.appendChild(checkBox);
    liHtml.appendChild(description);
    liHtml.appendChild(delButton);
    allLi.appendChild(liHtml);
  });
};

export default displayList;
