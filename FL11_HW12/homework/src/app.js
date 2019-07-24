const rootNode = document.getElementById('root');
const todoItems = [
  {isDone: false, id: 12345, description: 'Todo 1'}
];

// Add_new_task page 
const add_new_task = document.querySelector('.add-new-task');
const add_task_button = document.querySelector('button[type="submit"]');
const list_of_todo = document.querySelector('.list-of-todo');
const todo = document.querySelectorAll('.todo');
const remove_todo = document.querySelectorAll('.delete');
const notification = document.querySelector('.add-new-task-notification');

// Add_task_form page
const add_task_form = document.querySelector('.add-task-form');
const create_form = document.querySelector('.create');
const create_task = document.querySelector('#create-task');
const save_changes = document.querySelector('.save-changes');

// Modify_todo page
const modify_todo = document.querySelector('.modify-todo');


// If list is empty check
const empty_or_not = () => {
  if(list_of_todo.children.length) {
    notification.style.display = 'none';
  } else {
    notification.style.display = 'block';
  }
};

// Listen for click on add task button
add_task_button.addEventListener('click', () => {
  if(add_task_button) {
    add_new_task.style.display = 'none';
    add_task_form.style.display = 'block';
  }
});

// Appending todo to the list
save_changes.addEventListener('click', e => {
  const user_input_value = create_task.value.trim();
  e.preventDefault();
  
  if(user_input_value.length) {
    generate_todo_template(user_input_value);
    add_new_task.style.display = 'block';
    add_task_form.style.display = 'none';
    create_form.reset();
    empty_or_not();
  }
});

// Generate html for todo item
const generate_todo_template = (user_input_value) => {
  const id = list_of_todo.children.length;
  const html = `
    <li class="todo"> 
      <input type="checkbox" name="todo-check" id="todo-check${id}">
      <label for="todo-check${id}">${user_input_value}</label>
      <img class="delete" src="assets/img/remove-s.jpg" alt="delete-todo-icon">
    </li>
    `;
  list_of_todo.innerHTML += html;
}

// Remove todo from the list
list_of_todo.addEventListener('click', e => {
  if(e.target.className === 'delete'){
    e.target.parentElement.remove();
    empty_or_not();
  }
})