// isInteger function
function isInteger (x) {
    return Number.isInteger(x);
}
isInteger(5);
isInteger(5.5);
isInteger(-5);
isInteger('Vladymyr');

// isInteger with 'Reminder' operator
function isBiggerThen (x) {
    return x % 1 === 0;
}
isBiggerThen(5.6);
isBiggerThen(5);
