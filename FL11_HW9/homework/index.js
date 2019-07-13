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

// Task 0. Write function, which returns array of numbers from string parameter.
function getNumbers (string) {
  let arr = [];
  for(let i = 0; i < string.length; i++){
    if ( !isNaN(string[i])) {
      arr.push(parseInt(string[i]));
    }
  }
  return arr;
}

// Task 1. Write a function that could receive different amount of parameters and returns an object.
function findTypes () {
  const storage = {};
  let val;
  for(let i = 0; i < arguments.length; i++) {
      val = typeof arguments[i];
      if (storage.hasOwnProperty(val)) {
        storage[val] += 1;
      } else {
        storage[val] = 1;
      }
  }
  return storage;
}

// Task 2. Write function, which iterates over array and executes function on each element.
function executeForeEach(array, func) {
  for(let i = 0; i < array.length; i++){
    func(array[i]);
  }
  return array;
}

// Task 3. Write function, which returns transformed array based on function, which passed as a parameter
function mapArray (array, func) {
  const storage = [];
  executeForeEach(array, function(el) {
    storage.push(func(el));
  })
  return storage;
}

// Task 4. Write function, which returns filtered array based on function, which passed as a parameter. 
function filterArray(array, func) {
  const filtered = [];
  executeForeEach(array, function(el) {
    if (func(el)) {
      filtered.push(el);
    }
  })
  return filtered;
}

// Task 5. Write function, which returns formatted date.
function formatedDate(date) {
  const dt = date.toLocaleDateString('en-us', { month: 'short', day: '2-digit'});
  return `Date: ${dt} ${date.getFullYear()}`;
}

// Task 6. Write function, which returns Boolean value.
function canConvertedToDate(date) {
  const input = new Date(date);
  return !isNaN(input);
}

// Task 7. Write function, which returns difference between two dates in days
function daysBetween (dateOne, dateTwo) {
  const ms = 1000,
        sec = 60,
        min = 60,
        hrs = 24;
  const start = new Date(dateOne),
        end = new Date(dateTwo),
        diff = end - start;
  return Math.ceil(diff / (ms * sec * min * hrs));
}

// Task 8. Write function, which returns amount of people, who are over 18.
function getAmountOfAdultPeople(data) {
  let years = 18, days = 365, adults = years * days;  
  return filterArray(data, 
    elem => daysBetween( new Date(elem.birthday), new Date()) > adults ).length;
}

// Task 9. Write function, which returns array of keys of an object.
function keys(object) {
  const keys = [];
  for( let prop in object) {
    if(Object.prototype.hasOwnProperty.call(object, prop)) {
      keys.push(prop);
    }
  }
  return keys;
}
 
// Task 10. Write function, which returns array of values of an object.
function values(object) {
  let values = [];
  for( let val in object) {
    if (Object.prototype.hasOwnProperty.call(object, val)) {
      values.push(object[val]);
    }
  }
  return values;
}