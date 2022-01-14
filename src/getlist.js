const getList = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
export default getList;