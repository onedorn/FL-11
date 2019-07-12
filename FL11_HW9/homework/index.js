const data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]

// Your code goes here

// Task 0.

// function getNumbers (string) {
//   let regExp = /\d+/g;
//   let result = string.match(regExp);
//   return result;
// }

// console.log(getNumbers('string'));
// console.log(getNumbers('n1um3ber95'));

// Task 1.
function findTypes () {
  const storage = [];
  for(let i = 0; i < arguments.length; i++) {
    storage.push(typeof arguments[i]);
  }
  return storage;
}
console.log(findTypes('number'));
console.log(findTypes(null, 5, 'hello'));


// Task 2. 

function executeForeEach(array, func) {
  for(let i = 0; i < array.length; i++){
    func(array[i]);
  }
  return array;
}
console.log(executeForeEach([1, 2, 3], function(el) {
  return el;
}));

// Task 3. 
function mapArray (array, func) {
  const storage = [];
  executeForeEach(array, function(el) {
    storage.push(func(el + 3));
  })
  return storage;
}
console.log(mapArray([2, 5, 8], function(el) {
  return el;
}))

// Task 4.
function filterArray(array, func) {
  const filtered = [];
  executeForeEach(array, function(el) {
    if (func(el) > 3) {
      filtered.push(el);
    }
  })
  return filtered;
}
console.log(filterArray([2, 5, 8], function(el) {
  return el;
}));