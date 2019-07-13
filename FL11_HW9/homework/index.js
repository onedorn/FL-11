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

function getNumbers (string) {
  let arr = [];
  for(let i = 0; i < string.length; i++){
    if ( !isNaN(string[i])) {
      arr.push(parseInt(string[i]));
    }
  }
  return arr;
}
console.log(getNumbers('string'));
console.log(getNumbers('n1um3ber95'));

// Task 1.
function findTypes () {
  const storage = {};
  for(let i = 0; i < arguments.length; i++) {
      storage[i] = typeof arguments[i];
  }
  return storage;
}
console.log(findTypes('number')); //returns {“string”:1} 
console.log(findTypes(null, 5, 'hello')); //returns {“object”:1, “number”:1, “string”:1}

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
    storage.push(func(el));
  })
  return storage;
}
console.log(mapArray([2, 5, 8], function(el) {
  return el + 3;
}))

// Task 4.
function filterArray(array, func) {
  const filtered = [];
  executeForeEach(array, function(el) {
    if (func(el)) {
      filtered.push(el);
    }
  })
  return filtered;
}
console.log(filterArray([2, 5, 8], function(el) {
  return el > 3;
}));

// Task 5.
function formatedDate(date) {
  const dt = date.toLocaleDateString('en-us', { month: 'short', day: '2-digit'});
  return `Date: ${dt} ${date.getFullYear()}`;
}
console.log(formatedDate(new Date('2019-01-27T01:10:00'))); // returns ‘Date: Jan 27 2019’

// Task 6.
// Task 7.
// Task 8.

// Task 9.
function keys(object) {
  const keys = [];
  for( let prop in object) {
    if(Object.prototype.hasOwnProperty.call(object, prop)) {
      keys.push(prop);
    }
  }
  return keys;
}
 console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));
 
// Task 10.
function values(object) {
  let values = [];
  for( let val in object) {
    if (Object.prototype.hasOwnProperty.call(object, val)) {
      values.push(object[val]);
    }
  }
  return values;
}
 console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));
