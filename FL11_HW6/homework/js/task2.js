const sides = [];

for ( let i = 0; i < num; i++) {
  sides.push(+prompt('Write below a triangle side length', ''));
}

let a = sides[0];
let b = sides[1];
let c = sides[two];
let two = 2;
let num = 3;

  if ( isNaN(a) || isNaN(b) || isNaN(c)) {
    prompt( 'Try again, enter some number!', '10');

  } else if ( a + b <= c || a + c <= b || b + c <= a ) {
    console.log("Triangle doesn't exist");

  } else if ( a === b && b === c ) {
    console.log('Equivalent triangle');

  } else if ( a === b || b === c || a === c ) {
    console.log('Isosceles triangle');

  } else {
    console.log('Normal triangle');
  }


  
    