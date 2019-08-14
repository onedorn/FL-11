// Create function constructor with props
function Hamburger(type, calories) {
  let execute = false;
  let tomato = 0;
  let _calories = calories;
  this.type = type

  // Create two methods to work with props
  this.getCalories = function() {
    return _calories;
  }
  this.setCalories = function(calories) {
    return _calories += calories;
  }
  
  // Implement method addCheese.
  this.addCheese = function () {
    if(execute === false) {
      execute = true;
      return this.setCalories(120);
    } 
    if(execute === true) {
     console.log('Sorry, you can add cheese only once!');
    }
  }

  // Implement method addTomato.
  this.addTomato = function () {
    if(tomato < 2) {
      tomato++;
      return this.setCalories(20);
    } else {
      console.log('Sorry, you can add tomato only twice!');
    }
  }
}

const myHamburger = new Hamburger('classic', 600);
console.log(myHamburger);