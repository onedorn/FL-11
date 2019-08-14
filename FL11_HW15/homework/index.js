// Create function constructor with props
function Hamburger(type, calories) {
  let execute = false;
  let secret = [];
  let tomato = [];

  // Hidden property from developers
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
    if(tomato.length < 2) {
      tomato.push(`${this.setCalories(20)} calories`);
      return this.getCalories();
    } 
    if(tomato.length >= 2) {
      console.log('Sorry, you can add tomato only twice!');
    }
  }

  // Implement method addSecretIngredient.
  this.addSecretIngredient = function () {
    if (execute === false && tomato.length === 0) {
      if(!secret.length) {
        return secret.push(this.setCalories(100));
      }
      if (secret.length) {
        console.log('Sorry, you can add secret ingredient only once');
      } 
    }
  }
}

const myHamburger = new Hamburger('classic', 600);
console.log(myHamburger);

