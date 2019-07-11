function reserveNumber(item) {
  let input = 0;
  
  while (item !== 0 ) {
    input *= 10;
    input += item % 10;
    item -= item % 10;
    item = item / 10;
  }
  return input;
}

console.log(reserveNumber(123)); //321
console.log(reserveNumber(-456)); //-654
console.log(reserveNumber(10000)); //1