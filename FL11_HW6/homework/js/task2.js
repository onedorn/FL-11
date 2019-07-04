let a = Number(window.prompt('Please, enter triangle side length "a"', '0'));
let b = Number(window.prompt('Please, enter triangle side length "b"', '0'));
let c = Number(window.prompt('Please, enter triangle side length "c"', '0'));

    if ( a + b <= c || a + c <= b || b + c <= a) {
        console.log("Triangle doesn't exist")
    } else if ( a === b && b === c ) {
        console.log('Equivalent triangle')
    } else if ( a === b || b === c || a === c ) {
        console.log('Isosceles triangle')
    } else {
        console.log('Normal triangle')
    }
    

    