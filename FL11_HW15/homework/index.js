// Create function constructor with props
function Hamburger(type, calories) {

  // Do calories field hidden from programmers.
  let _calories = calories;
  this.type = type

  // Create two methods to work with props
  this.getCalories = function() {
    return _calories;
  }
  this.setCalories = function(calories) {
    return _calories = calories;
  }
}

const myHamburger = new Hamburger('classic', 600);
console.log(myHamburger);

