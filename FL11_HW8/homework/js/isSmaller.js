// Function with parameters
function isSmaller ( width, height ) {
    return width < height;
}
isSmaller( 4, 3 );
isSmaller( 'age', 'name' );

// Arrow function with parameters
const isSmallerThen = ( speed, agility ) => speed < agility;
isSmallerThen( null, 4 );
isSmallerThen( 'age', 1 );

