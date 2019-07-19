let rootNode = document.getElementById('root');
const todosList = document.querySelector('.todos-list');
const addForm = document.querySelector('.search');

// Add todos
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.search.value.trim();
  if(todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

const generateTemplate = todo => {
  const html = `
  <li>
    <input type="checkbox" name="todo_list" id="checkbox-one">
    <label for="checkbox-one">${todo}</label>
    <i class="material-icons edit">edit</i>
    <i class="material-icons delete">delete</i>
  </li>
  `;
  todosList.innerHTML += html;
};

// Delete todos
todosList.addEventListener('click', e=> {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});