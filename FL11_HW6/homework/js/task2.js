// let a = Number(window.prompt('Please, enter triangle side length "a"', ''));
// let b = Number(window.prompt('Please, enter triangle side length "b"', ''));
// let c = Number(window.prompt('Please, enter triangle side length "c"', ''));

    // if ( a + b <= c || a + c <= b || b + c <= a) {
    //     console.log("Triangle doesn't exist")
    // } else if ( a === b && b === c ) {
    //     console.log('Equivalent triangle')
    // } else if ( a === b || b === c || a === c ) {
    //     console.log('Isosceles triangle')
    // } else {
    //     console.log('Normal triangle')
    // }
    

const sides = {
  'a': +prompt('Please, enter triangle side length "a"', ''),
  'b': +prompt('Please, enter triangle side length "b"', ''),
  'c': +prompt('Please, enter triangle side length "c"', '')
}

 if (isNaN(sides.a) || isNaN(sides.b) || isNaN(sides.c) ) {
    prompt('Its not a number, bro')
  }


  
    