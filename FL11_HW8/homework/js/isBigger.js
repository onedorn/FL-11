// Function with parameters
function isBigger ( width, height ) {
    return width > height;
}
isBigger( 4, -4 );
isBigger( 1, '' );
isBigger( 'age', 'name' );


// Function with default parameters value.
function isGreater ( width = 10, height = 9 ) {
    return width > height;
}
isGreater();
isGreater( 9, 10) ;


// The Boolean() Function
function isGreaterThen ( speed, height ) {
    return Boolean( speed > height );
}
isGreaterThen(4, 1);
isGreaterThen( 9, 10) ;


// Arrow function with parameters
const isBiggerThen = ( speed, agility ) => speed > agility;
isBiggerThen( 5, 4 );
isBiggerThen( 1, 2 );




