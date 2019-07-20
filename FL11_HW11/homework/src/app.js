let rootNode = document.getElementById('root');
const todosList = document.querySelector('.todos-list');
const addForm = document.querySelector('.search');
const listItems = document.getElementsByTagName('li');
const addTodo = document.querySelector('.add_box');
const fieldInput = document.querySelector('.field');
const notification = document.querySelector('.notification');
const restriction = 9;

// Add todos
addTodo.addEventListener('click', e => {
  e.preventDefault();
  const todo = addForm.search.value.trim();
  if(todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
  // Disabled button and notification
  if (listItems.length >= restriction) {
    fieldInput.setAttribute('disabled', 'true');
    addTodo.setAttribute('disabled', '');
    addTodo.style.backgroundColor = '#C8D0D8';
    notification.style.opacity = '1';
  }
});

// Delete todos
todosList.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

// Generate todos
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
};


// 
// fieldInput.addEventListener('focus', function () {
// })

// fieldInput.addEventListener('blur', function () {
// })


