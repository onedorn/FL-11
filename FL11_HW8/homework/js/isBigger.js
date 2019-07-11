// Function with parameters
function isBigger ( width, height ) {
    return width > height;
}
isBigger( 4, -4 );
isBigger( 1, 5 );

// Function with default parameters value.
function isGreater ( width = 10, height = 9 ) {
    return width > height;
}
isGreater();
isGreater( 9, 10) ;

// Arrow function with parameters
const isBiggerThen = (speed, agility) => speed > agility;
isBiggerThen(5, 4);
isBiggerThen(4, 5);