// Your code goes here
let a = window.prompt('Please, enter triangle side length "a"', '');
let b = window.prompt('Please, enter triangle side length "b"', '');
let c = window.prompt('Please, enter triangle side length "c"', '');

    if ( a + b <= c || a + c <= b || b + c <= a) {
        console.log("Triangle doesn't exist")
    } else if ( a + b > c || a + c > b|| b + c > a) {
        console.log('Equivalent triangle')
    } else if (a + b === b + c || b + c === c + a ) {
        console.log('Isosceles triangle')
    } else {
        console.log('Normal triangle')
    }