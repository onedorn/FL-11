// Math.min with spread operator
const arr = [-1, 10, 17, 29, 35, 41, 50];
const getTheSmallestNumber = () => Math.min( ...arr );
getTheSmallestNumber();

//Get Min looping the array
function getMin () {
  let min = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if( min > arguments[i]) {
        min = arguments[i];
        return min;
      }
    }
}
getMin( 3, -1, 2, 5, 9 );




