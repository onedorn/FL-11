const $list = $(".list");
const $input = $("#add-input");
const $add = "#add-submit";
const $rm_btn = ".item-remove";
const $completed_todo = '.item-text';


const actions = ((function () {
  return {
    paint_todo: function (e) {
      e.preventDefault();
      let text_content = $($input).val();
      
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
    },
    delete_todo: function () {
      let target_li = $(this).parent();
      target_li.fadeOut(function () {
        target_li.remove();
      })
    },
    compleated_todo: function () {
      $(this).addClass('done');
    }
  }
})())


$(document).ready(function () {
  $(document).on('click', $add, actions.paint_todo);
  $(document).on('click', $rm_btn, actions.delete_todo);
  $(document).on('click', $completed_todo, actions.compleated_todo);
})