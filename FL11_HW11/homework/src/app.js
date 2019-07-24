let rootNode = document.getElementById('root');
const todosList = document.querySelector('.todos-list');
const addForm = document.querySelector('.search');
const listItems = document.getElementsByTagName('li');
const addTodo = document.querySelector('.add_box');
const fieldInput = document.querySelector('.field');
const notification = document.querySelector('.notification');
const edit = document.querySelectorAll('.edit');
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
    notification.style.transition = '0.5s';
    notification.innerHTML = 'Maximum item per list are created ';
  } 
  if(listItems.length < restriction) {
    notification.style.opacity = '0';
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
  if (listItems.length === 0) {
    notification.innerHTML = 'You have no left any of the todos in the list!';
    notification.style.opacity = '1';
    notification.style.transition = '0.5s';
  }
});

// Generate todos
const generateTemplate = todo => {
  const positionInTheList = document.querySelector('.todos-list').children.length;
  const html = `
    <li draggable="true" class="list-item">  
      <div class="flex-wrap">
        <input type="checkbox" name="todo_list" id="checkbox${positionInTheList}" class="checked">
        <label for="checkbox${positionInTheList}">${todo}</label>
        <i class="material-icons edit">edit</i>
      </div>
      <i class="material-icons delete">delete</i>
    </li>
  `;
  todosList.innerHTML += html;
  keepCheckboxChecked();
};

// Disabled button and opposite
fieldInput.addEventListener('focus', function () {
  addTodo.removeAttribute('disabled', '');
  addTodo.style.backgroundColor = '#5eb1f5';
})

// Drag and drop todos
let dragItem;
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

// Edit action.
todosList.addEventListener('click', e => {
  if(e.target.className === 'material-icons edit'){
    const nonDrag = e.target.parentElement.parentElement;
          nonDrag.removeAttribute('draggable', false);
    const oldTodo = e.target.parentElement.children[1].textContent;
    const html = `
      <input type="text" value="${oldTodo}" class="edit-todo">
      <i class="material-icons save">save</i>
    `;
    e.target.parentNode.parentElement.innerHTML = html;
    const save = document.querySelector('.save');
    save.style.marginRight = '420px';
  }  
})

// Save edited action
todosList.addEventListener('click', e => {
  if(e.target.className === 'material-icons save'){
    const editedTodo = document.querySelector('.edit-todo').value,
          uniqueID = e.target.parentNode.parentElement.children.length,
          dragAgain = e.target.parentElement;
          dragAgain.setAttribute('draggable', true);
    
    const html = `
      <div class="flex-wrap">
        <input type="checkbox" name="todo_list" id="new-checkbox${uniqueID}" class="checked">
        <label for="new-checkbox${uniqueID}">${editedTodo}</label>
        <i class="material-icons edit">edit</i>
      </div>
      <i class="material-icons delete">delete</i>
    `;
        e.target.parentElement.innerHTML = html;
        keepCheckboxChecked();
  }
})

// Checkbox can not be unchecked
const box = document.querySelectorAll('.checked');
const keepCheckboxChecked = () => {
  const box = document.querySelectorAll('.checked');
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('change', (e) => {
      e.preventDefault();
        if (box[i].checked) {
            box[i].disabled = true;
        }
        // Save checkbox state to localStorage
        if(box[i].checked) {
          localStorage.setItem('isChecked', 'true')
        }
         // Get checkbox state from local Storage
         if(localStorage.getItem('isChecked') === 'true') {
          box[i].checked = 'true';
        }
      })
    }
  }
  keepCheckboxChecked();