// Get Min looping the array
function getMin () {
  let items = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if( items > arguments[i]) {
        items = arguments[i];
      return items;
    }
  }
}

getMin(0, -10, 2, -5, 10); // -10