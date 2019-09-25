const $list = $(".list");
const $input = $("#add-input");
const $add = "#add-submit";
const $rm_btn = ".item-remove";
const $completed_todo = '.item-text';


const actions = ((function () {

  const paint_todo = function (e) {
    e.preventDefault();
    let text_content = $($input).val();
    storage.setTodoToLocalStorage(text_content);

    if(text_content.length) {
      let li = $('<li class="item"></li>');
      let span = $(`<span class="item-text">${text_content}</span>`);
      let button = $('<button class="item-remove">Remove</button>');
      li.append(span, button);
      $list.append(li);
      $input.val('');
    } 
    if(!text_content.length) {
      alert('You can come in with something better');
    }
  }

  const delete_todo = function () {
    let target_li = $(this).parent();
    target_li.fadeOut(function () {
      target_li.remove();
    })
  }

  const compleated_todo = function () {
    $(this).addClass('done');
  }

  return {
    paint_todo,
    delete_todo,
    compleated_todo
  }

})())

const storage = ((function () {
  return {
    setTodoToLocalStorage: function (todo) {
      let todos = [];
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
    },
    getTodoFromLocalStorage: function () {
      let todos;
      todos = JSON.parse(localStorage.getItem('todos'));
      return todos;
    }
  }
})())

$(document).ready(function () {
  $(document).on('click', $add, actions.paint_todo);
  $(document).on('click', $rm_btn, actions.delete_todo);
  $(document).on('click', $completed_todo, actions.compleated_todo);
})