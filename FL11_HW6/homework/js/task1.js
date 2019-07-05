const coordinates = {
    'a1': +prompt('Enter your value for point "A" on axis "x"', ''),
    'a2': +prompt('Enter your value for point "A" on axis "y"', ''),
    'b1': +prompt('Enter your value for point "B" on axis "x"', ''),
    'b2': +prompt('Enter your value for point "B" on axis "y"', ''),
    'c1': +prompt('Enter your value for point "C" on axis "x"', ''),
    'c2': +prompt('Enter your value for point "C" on axis "y"', '')
}

let divide = 2;
let A = (coordinates.a1 + coordinates.b1) / divide;
let B = (coordinates.a2 + coordinates.b2) / divide;

console.log(coordinates.c1 === A && coordinates.c2 === B ? 'true' : 'false');