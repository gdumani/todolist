const storeList = (l) => {
  localStorage.setItem('todo',
    JSON.stringify(l.sort((a, b) => a.index - b.index)));
};
export default storeList;