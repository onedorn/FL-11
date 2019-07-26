const rootNode = document.querySelector('#root');

// Your code goes here
const hash_for_main_page = location.hash = '';
const add_new_item_hash = location.hash = '#/add';
const modify_item_hash = location.hash = '#/modify/:item_id';

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

const create_main_page = function() {
    rootNode.innerHTML = '';

    const header = create_element('h1', 'main-page-header', 'Simple TODO application');
    const add_button = create_element('button', 'add-button', 'Add new task');
    const empty_block = create_element('h2', 'empty-block', 'TODO is empty');
    const danger = create_element('div', 'danger');
    const danger_h3 = create_element('h3', 'danger-h3', 'Danger!');
    const danger_p = create_element('p', 'danger-p', 'You can\'t add already exist item');
    
    danger.appendChild(danger_h3);
    danger.appendChild(danger_p);
    rootNode.appendChild(danger);
    rootNode.appendChild(header);
    rootNode.appendChild(add_button);
    rootNode.appendChild(empty_block);

}

const create_new_item_page = function() {
    rootNode.innerHTML = '';

    const header = create_element('h1', 'add-task-header', 'Add task');
    const form = create_element('form', 'add-todos-form');
    const input = create_element('input', 'add-task-input', '');
    const container = create_element('div', 'btn-wrap');
    const btn_cancel = create_element('button', 'cancel', 'Cancel');
    const btn_save_changes = create_element('button', 'save-changes', 'Save changes');

    container.appendChild(btn_cancel);
    container.appendChild(btn_save_changes);
    form.appendChild(input);
    form.appendChild(container);
    rootNode.appendChild(header);
    rootNode.appendChild(form);

}

const create_modify_item_page = function() {
    rootNode.innerHTML = '';

    const header = create_element('h1', 'modify-item-header', 'Modify item');
    const form = create_element('form', 'modify-todos-form');
    const input = create_element('input', 'modify-item-input', '');
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

}





























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