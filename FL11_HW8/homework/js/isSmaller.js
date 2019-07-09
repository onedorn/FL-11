// Function with parameters
function isSmaller ( width, height ) {
    return width < height;
}
isSmaller( 4, 3 );
isSmaller( 'age', 'name' );


// Arrow function with parameters
const isBiggerThen = ( speed, agility ) => speed < agility;
isBiggerThen( null, 4 );
isBiggerThen( 'age', 1 );

