// Create your own Object.create method which mimics Object.create.
const create = function(original, defineNewProps) {
  const Copy = function() {
    //There is a copy of original object.
  }
  Copy.prototype = original;

  if(typeof defineNewProps === 'object') {
    return Object.assign(new Copy(), defineNewProps);
  } else {
    console.error('It should be an Object to proceed!');
  }

  return new Copy();
}

const person = {
  speak: function () {
    return this.phrase;
  },
  eat: function () {
    return this.food;
  }
};

const elliot = create( person, {
  phrase: 'Are you ready to dance!?',
  food: 'Only vegetables and fruits!'
});

console.log(elliot);
console.log(elliot.speak());
console.log(elliot.eat());
console.log(Object.getPrototypeOf(elliot) === person);