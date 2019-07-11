function pipe(num) {
  for (let i = 1; i < arguments.length; i++) {
    num = arguments[i](num);
  }
  return num;
}

function addOne (x) {
  return x + 1;
}

pipe(1, addOne); // 2
pipe(1, addOne, addOne); // 3

