// Function with parameters
function isBigger ( width, height ) {
    return width > height;
}
isBigger( 4, 3 );

// Function with default parameters value.
function isGreater ( width = 10, height = 9 ) {
    return width > height;
}
isGreater();

// Arrow function with parameters
const isBiggerThen = (speed, agility) => speed > agility;
isBiggerThen(5, 4);