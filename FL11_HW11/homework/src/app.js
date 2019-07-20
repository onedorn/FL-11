let rootNode = document.getElementById('root');
const todosList = document.querySelector('.todos-list');
const addForm = document.querySelector('.search');
const listItems = document.getElementsByTagName('li');
const addTodo = document.querySelector('.add_box');

// Add todos
addTodo.addEventListener('click', e => {
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
    <input type="checkbox" name="todo_list" id="checkbox">
    <label for="checkbox">${todo}</label>
    <i class="material-icons edit">edit</i>
    <i class="material-icons delete">delete</i>
  </li>
  `;
  todosList.innerHTML += html;

  // Create notification & disable button (if list full)
  const notification = document.querySelector('.notification');
  listItems.length > 9 ? notification.style.opacity = '1' : notification.style.opacity = '0';
};

// Delete todos
todosList.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

