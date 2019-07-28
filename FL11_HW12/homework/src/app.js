const rootNode = document.querySelector('#root');
const not_exist = -1;

/************************* HASHING URL *****************************/
const modify_item_hash = location.hash = '#/modify/';
const add_new_item_hash = location.hash = '#/add';
const hash_for_main_page = location.hash = '';

const set_hash_for_main_page = () => {
  window.location.hash = hash_for_main_page;
}

const set_hash_for_new_item_page = () => {
  window.location.hash = add_new_item_hash;
}

const if_hash_changed = () => {
  if(location.hash === hash_for_main_page) {
    create_main_page()
  }
  if(location.hash === add_new_item_hash) {
    create_new_item_page()
  }
  if(location.hash === modify_item_hash) {
    create_modify_item_page()
  }
}

window.addEventListener('load', if_hash_changed);
window.addEventListener('hashchange', if_hash_changed);

/*************************LOCAL STORAGE *****************************/
const ls_key_todo = 'todo_list'; 
const ls_key_done = 'done_kist';

const json_todo = localStorage.getItem(ls_key_todo);
const json_done = localStorage.getItem(ls_key_done);

const todo_item = JSON.parse(json_todo) || [];
const done_item = JSON.parse(json_done) || [];
 
function set_item_to_ls (arr, ls_key) {
  localStorage.setItem(ls_key, JSON.stringify(arr));
}

/************************* RENDER MAIN PAGE *****************************/
const create_main_page = function() {
  rootNode.innerHTML = '';

  const header = create_element('h1', 'main-page-header', 'Simple TODO application');
  const add_button = create_element('button', 'add-button', 'Add new task');
  const danger = create_element('div', 'danger');
  const danger_h3 = create_element('h3', 'danger-h3', 'Danger!');
  const danger_p = create_element('p', 'danger-p', 'You can\'t add already exist item');
  
  rootNode.appendChild(header);
  rootNode.appendChild(add_button);
  danger.appendChild(danger_h3);
  danger.appendChild(danger_p);
  rootNode.appendChild(danger);
  
  const render_todos = todo_item.concat(done_item);
  
  if (render_todos.length) {
    const todo_list = create_element('ul');
    rootNode.appendChild(todo_list);

    render_todos.forEach( item => {
      const todo_item = create_element('li', 'list-item');
      todo_item.setAttribute('id', item.id);
      todo_list.appendChild(todo_item);

      const checkbox = create_element('img', 'checkbox');
      todo_item.appendChild(checkbox);
      
      let todo_action = create_element('a', 'action-description', item.description);
      todo_item.appendChild(todo_action);
      todo_action.setAttribute('href', `${modify_item_hash}${item.id}`);

      if(!item.isDone) {
        checkbox.setAttribute('src', './assets/img/todo-s.png');
      } else {
        checkbox.setAttribute('src', './assets/img/done-s.png');
        todo_action.style.backgroundColor = 'grey';
      }
      
      checkbox.addEventListener('click', checked_or_not);

      const remove = create_element('img', 'remove-todo');
      remove.setAttribute('src', './assets/img/remove-s.jpg');
      todo_item.appendChild(remove);
      remove.addEventListener('click', remove_todos);

    });
  } else {
    const empty_block = create_element('h2', 'empty-block', 'TODO is empty');
    rootNode.appendChild(empty_block);
  }

  add_button.addEventListener('click', set_hash_for_new_item_page);
}

/*********************** RENDER ADD NEW TASK PAGE ************************/
const create_new_item_page = function() {
  rootNode.innerHTML = '';

  const header = create_element('h1', 'add-task-header', 'Add task');
  const form = create_element('form', 'add-todos-form');
  const input = create_element('input', 'add-task-input');
  const container = create_element('div', 'btn-wrap');
  const btn_cancel = create_element('button', 'cancel', 'Cancel');
  const btn_save_changes = create_element('button', 'save-changes', 'Save changes');

  container.appendChild(btn_cancel);
  container.appendChild(btn_save_changes);
  form.appendChild(input);
  form.appendChild(container);
  rootNode.appendChild(header);
  rootNode.appendChild(form);

  btn_cancel.addEventListener('click', set_hash_for_main_page);
  btn_save_changes.addEventListener('click', render_new_todo);
}

/********************** RENDER MODIFY ITEM PAGE **************************/
const create_modify_item_page = function() {

  const id = parseInt(location.hash.split('/').pop());
  const todo_modify = todo_item.find(item => item.id === id);
  if(!todo_modify) {
      window.location.hash = hash_for_main_page;
      return;
  }
  rootNode.innerHTML = '';

  const header = create_element('h1', 'modify-item-header', 'Modify item');
  const form = create_element('form', 'modify-todos-form');
  const input = create_element('input', 'modify-item-input');
  input.defaultValue = todo_modify.description;
  console.log(input);
  
  const container = create_element('div', 'btn-wrap');
  const btn_cancel = create_element('button', 'cancel', 'Cancel');
  const btn_save_changes = create_element('button', 'save-changes', 'Save changes');
  const danger = create_element('div', 'danger');
  const danger_h3 = create_element('h3', 'danger-h3', 'Danger!');
  const danger_p = create_element('p', 'danger-p', 'You can\'t edit already done item');

  danger.appendChild(danger_h3)
  danger.appendChild(danger_p);
  container.appendChild(btn_cancel);
  container.appendChild(btn_save_changes);
  form.appendChild(input);
  form.appendChild(container);
  rootNode.appendChild(danger);
  rootNode.appendChild(header);
  rootNode.appendChild(form);

  btn_cancel.addEventListener('click', set_hash_for_main_page);
  btn_save_changes.addEventListener('click', save_modify_todo);

}

const save_modify_todo = () => {
  const user_input = document.querySelector('.modify-item-input').value;
  if(user_input.length) {
    const id = parseInt(location.hash.split('/').pop());
    todo_item.find(item => item.id === id).description = user_input;
    set_item_to_ls(todo_item, ls_key_todo);
    set_hash_for_main_page();
  }
}
 
/*********************** GENERATE ELEMENTS ************************/
const create_element = (tag, class_name, capture) => {
  let element = document.createElement(tag);
  if (class_name) {
    element.className = class_name;
  }
  if (capture) {
    element.innerHTML = capture;
  }
  return element;
}

/*********************** ADD / REMOVE TODOS **********************/
const render_new_todo = () => {
  const user_input = document.querySelector('.add-task-input').value.trim();
  if(user_input.length) {
    todo_item.push( {isDone: false, id: generate_id(), description: user_input} );
    set_item_to_ls(todo_item, ls_key_todo);
    set_hash_for_main_page();
  }
}

const generate_id = function () {
  const ids = todo_item.concat(done_item).map((item) => item.id);
  return ids.length ? 1 + Math.max(...ids) : 1;
}

const remove_todos = function (e) {
  const id = parseInt(e.target.parentNode.id);

  const remove_from_todo = todo_item.findIndex(item => item.id === id);
  if(remove_from_todo !== not_exist) {
    todo_item.splice(remove_from_todo, 1);
  }

  const remove_from_done = done_item.findIndex(item => item.id === id);
  if(remove_from_done !== not_exist) {
    done_item.splice(remove_from_done, 1);
  }

  set_item_to_ls(todo_item, ls_key_todo);
  set_item_to_ls(done_item, ls_key_done);

  create_main_page();
}

/************************* CHECKBOX *****************************/
const checked_or_not = function (e) {
  const id = parseInt(e.target.parentNode.id);
  const element_to_remove = todo_item.findIndex(item => item.id === id);

  if (element_to_remove === not_exist) {
    return;
  }

  const current_todo = todo_item[element_to_remove];
  current_todo.isDone = true;
  todo_item.splice(element_to_remove, 1);
  done_item.push(current_todo);

  set_item_to_ls(todo_item, ls_key_todo);
  set_item_to_ls(done_item, ls_key_done);

  create_main_page();
}