// 	Create your own assign method which mimics Object.assign.
const course = {
  name: 'Front-End JavaScript',
  score: 57
};

const grade = {
  score: 90
};

function assign(wrapper, ...merging_args) {
  let main_wrapper = Object(wrapper);
  for (let i = 0; i < merging_args.length; i++) {
    const element = merging_args[i];
    for (let key in element) {
      if (Object.prototype.hasOwnProperty.call(element, key)) {
        main_wrapper[key] = element[key];
      }
    }
  }
  return main_wrapper;
}

console.log(assign({}, course, grade, {teacher: 'Oleg Kustov'})); 