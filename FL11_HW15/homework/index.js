// Create function constructor with props
function Hamburger(type, calories, special ) {
  let execute = false;
  let secret = [];
  let tomato = [];

  // Hidden property from developers
  let _calories = calories;
  this.type = type, 
  this.special = special

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
     return 'Sorry, you can add cheese only once!';
    }
  }

  // Implement method addTomato.
  this.addTomato = function () {
    if(tomato.length < 2) {
      tomato.push(this.setCalories(20));
      return this.getCalories();
    } 
    if(tomato.length >= 2) {
      return 'Sorry, you can add tomato only twice!';
    }
  }

  // Implement method addSecretIngredient.
  this.addSecretIngredient = function () {

    if (execute === false && tomato.length === 0) {
      if(!secret.length) {
        secret.push(this.setCalories(100));
        return this.getCalories();
      }
      if (secret.length) {
        return 'Sorry, you can add secret ingredient only once';
      };
    }

    console.error(`
    Secret ingredient always goes first!
    If you want to try something "special" - 
    you have to add "special" before all other ingredients!           
    `);
  }

  // Automatically add secret ingredient with third argument
  if (special) {
    secret.push(this.setCalories(100));
    special = false;
  }

  // Implement method bite.
  this.bite = function () {
    
  }

  // Implement method info.
  this.info = function() {

  }
}

const myHamburger = new Hamburger('classic', 600);
console.log(myHamburger);

