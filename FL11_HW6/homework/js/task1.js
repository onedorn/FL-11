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
let C1 = coordinates.c1;
let C2 = coordinates.c2;

console.log(C1=== A && C2 === B ? 'true' : 'false');