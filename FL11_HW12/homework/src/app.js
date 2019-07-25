const rootNode = document.getElementById('root');
const todoItems = [
  {isDone: false, id: 12345, description: 'Todo 1'}
];

// Add_new_task page 
const add_new_task = document.querySelector('.add-new-task');
const add_task_button = document.querySelector('button[type="submit"]');
const list_of_todo = document.querySelector('.list-of-todo');
const todo = document.querySelectorAll('.todo');
const todo_text = document.querySelectorAll('.todo-text');
const remove_todo = document.querySelectorAll('.delete');
const notification = document.querySelector('.add-new-task-notification');
const checkbox = document.querySelectorAll('.done');

// Add_task_form page
const add_task_form = document.querySelector('.add-task-form');
const create_form = document.querySelector('.create');
const create_task = document.querySelector('#create-task');
const save_changes = document.querySelector('.save-changes');
const cancel = document.querySelector('.cancel');

// Modify_todo page
const modify_todo = document.querySelector('.modify-todo');
const cancel_modify = document.querySelector('.cancel-modify');
const save_modify = document.querySelector('.save-modify');
let create_task_new = document.querySelector('#create-task-new');



// If list is empty check
const empty_or_not = () => {

  if(list_of_todo.children.length) {
    notification.style.display = 'none';
  } else {
    notification.style.display = 'block';
  }
}; empty_or_not()

// Add task button
add_task_button.addEventListener('click', () => {
  if(add_task_button) {
    add_new_task.style.display = 'none';
    add_task_form.style.display = 'block';
    create_form[0].setAttribute('autofocus', '');
  }
});

// Adding todos to the list or cancel operation
save_changes.addEventListener('click', e => {
  const user_input_value = create_task.value.trim();
  e.preventDefault();
  // Save changes button
  if(user_input_value.length) {
    generate_todo_template(user_input_value);
    add_new_task.style.display = 'block';
    add_task_form.style.display = 'none';
    create_form.reset();
    empty_or_not();
  } 
  // Cancel button
  cancel.addEventListener('click', e => {
    e.preventDefault();
    add_new_task.style.display = 'block';
    add_task_form.style.display = 'none';
    create_form.reset();
  });
});

// Remove todo from the list
list_of_todo.addEventListener('click', e => {
  if(e.target.className === 'delete'){
    e.target.parentElement.remove();
    empty_or_not();
  }
});

// Generate html for todo item
const generate_todo_template = (user_input_value) => {
  const html = `
    <li class="todo"> 
      <input type="checkbox" name="todo-check" class="done">
      <label class="todo-text">${user_input_value}</label>
      <img class="delete" src="assets/img/remove-s.jpg">
    </li>
    `;
  list_of_todo.innerHTML += html;
};


// Modify todo page
add_new_task.addEventListener('click', e => {
  if (e.target.className === 'todo-text') {
    add_new_task.style.display = 'none';
    modify_todo.style.display = 'block';
    const old_value = e.target.parentElement.children[1].textContent;
    create_task_new.value = old_value;
  }
})

modify_todo.addEventListener('click', e => {
  e.preventDefault();
  // Save changes
  if (e.target.className === 'save-modify') {
    add_new_task.style.display = 'block';
    modify_todo.style.display = 'none';
    const new_value = create_task_new.value.trim();
    generate_todo_template(new_value);
  } 
  // Cancel changes
  if (e.target.className === 'cancel-modify') {
    add_new_task.style.display = 'block';
    modify_todo.style.display = 'none';
  }
})

