let rootNode = document.getElementById('root');
const todosList = document.querySelector('.todos-list');
const addForm = document.querySelector('.search');
const listItems = document.getElementsByTagName('li');
const addTodo = document.querySelector('.add_box');
const fieldInput = document.querySelector('.field');
const notification = document.querySelector('.notification');
const restriction = 9;

// Add todos
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.search.value.trim();
  if(todo.length) {
    addTodo.setAttribute('disabled', '');
    addTodo.style.backgroundColor = '#C8D0D8';
    generateTemplate(todo);
    addForm.reset();
  }
  // Disable input field if list equal 10 and show notification
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
  // Enable input field if list less then 10 and hide notification
  if (listItems.length < restriction){
    fieldInput.removeAttribute('disabled', '');
    notification.style.opacity = '0';
  }
});

// Generate todos
const generateTemplate = todo => {
  const html = `
    <li draggable="true" class="list-item">  
      <input type="checkbox" name="todo_list" id="checkbox">
      <label for="checkbox">${todo}</label>
      <i class="material-icons edit">edit</i>
      <i class="material-icons delete">delete</i>
    </li>
  `;
  todosList.innerHTML += html;
};

// Disabled button and opposite
fieldInput.addEventListener('focus', function () {
  addTodo.removeAttribute('disabled', '');
  addTodo.style.backgroundColor = '#5eb1f5';
})

// Drag and drop todos
let dragItem = null;

todosList.addEventListener('dragstart', function (e) {
    dragItem = e.target;
});

todosList.addEventListener('dragleave', function (e) {
  e.target.style.transform = '';
});

todosList.addEventListener('dragover', function (e) {
  if(e.target.className === 'list-item'){
    e.target.style.transform = 'translateX(10px)';
    e.preventDefault();
  }
});

todosList.addEventListener('drop', function (e) {
  if(e.target.className === 'list-item'){
    e.preventDefault();
    todosList.insertBefore(dragItem, e.target);
    e.target.style.transform = '';
  }
});