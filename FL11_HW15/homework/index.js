// Create function constructor with props
function Hamburger(type, calories, special_ingredient ) {
  let cheese = [];
  let secret = [];
  let tomato = [];
  let stomach = [];

  // Hidden property from developers
  let _calories = calories;
  this.type = type, 
  this.special_ingredient = special_ingredient

  // Create two methods to work with props
  this.getCalories = function() {
    return _calories;
  }
  this.setCalories = function(calories) {
    return _calories += calories;
  }
  
  // Implement method addCheese.
  this.addCheese = function () {
    if (!stomach.length) {

      if(!cheese.length) {
        cheese.push(this.setCalories(120));
        return this.getCalories();
      } 
      if(cheese.length) {
       return 'Sorry, you can add cheese only once!';
      }

    } else {
      return `It's a bit late for extra cheese!`;
    }
  }

  // Implement method addTomato.
  this.addTomato = function () {
    if (!stomach.length) {
      
      if(tomato.length < 2) {
        tomato.push(this.setCalories(20));
        return this.getCalories();
      } 
      if(tomato.length >= 2) {
        return 'Sorry, you can add tomato only twice!';
      }

    } else {
      return `It's a bit late for extra tomato!`;
    }
  }

  // Implement method addSecretIngredient.
  this.addSecretIngredient = function () {
    if(!stomach.length) {
      
      if (!cheese.length && tomato.length === 0) {
        if(!secret.length) {
          secret.push(this.setCalories(100));
          return this.getCalories();
        }
        if (secret.length) {
          return 'Sorry, you can add secret ingredient only once';
        };
      }
      if (cheese.length || tomato.length) {
        return `
      Secret ingredient always goes first!
      If you want to add some "special ingredient" - 
      you have to add "special" before all other "ingredients"!  

`;
      }

    } else {
      return `It's a bit late for secret ingredient!`;
    }
  }

  // Automatically add secret ingredient via third argument
  if (special_ingredient) {
    secret.push(this.setCalories(100));
    special_ingredient = false;
  }

  // Implement method bite.
  this.bite = function () {
    stomach.push(this.getCalories());
    return `You have bitten ${stomach.length} times!`
  }

  // Implement method info.
  this.info = function() {
    const report = `
      Classic hamburger: ${secret.length ? 'with secret ingredient' : 'without secret ingredient'}, 
      ${cheese.length ? 'with cheese' : 'without cheese'}, with ${tomato.length} tomato, 
      is bit ${stomach.length} times. Total calories ${_calories};

`;  
    return report;
  }
}

const myHamburger = new Hamburger('classic', 600, true);
console.log(myHamburger);

