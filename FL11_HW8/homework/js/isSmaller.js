function isBigger ( width, height ) {
    return width > height;
}

function isSmaller ( width, height ) {
    return !isBigger( width, height);
}
isSmaller ( 4, 3 );