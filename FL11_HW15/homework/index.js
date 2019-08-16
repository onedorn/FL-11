// Create function constructor with props
function Hamburger(type, calories, special_ingredient = false) {
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
    return _calories = calories;
  }
  
  // Implement method addCheese.
  this.addCheese = function () {
    if (!stomach.length) {

      if(!cheese.length) {
        cheese.push(_calories += 120);
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
        tomato.push(_calories += 20);
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
          secret.push(_calories += 100);
          return this.getCalories();
        }
        if (secret.length) {
          return 'Sorry, you can add secret ingredient only once';
        };
      }
      if (cheese.length || tomato.length) {
        const notification = `
      Secret ingredient always goes first!
      If you want to add some "special ingredient" - 
      you have to add "special" before all other "ingredients"!  

        `;      
        return notification;
      }

    } else {
      return `It's a bit late for secret ingredient!`;
    }
  }

  // Automatically add secret ingredient via third argument
  if (special_ingredient) {
    secret.push(_calories += 100);
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
      ${type} hamburger: ${secret.length ? 'with secret ingredient' : 'without secret ingredient'}, 
      ${cheese.length ? 'with cheese' : 'without cheese'}, with ${tomato.length} tomato, 
      is bit ${stomach.length} times. Total calories ${_calories};

    `;  
    return report;
  }
}


// Task 1
const myHamburger = new Hamburger('Vegetarian', 600);
console.log(myHamburger); 

/*
  Hamburger {type: "classic", special_ingredient: undefined, getCalories: ƒ, setCalories: ƒ, addCheese: ƒ, …} 
  addCheese: ƒ ()
  addSecretIngredient: ƒ ()
  addTomato: ƒ ()
  bite: ƒ ()
  getCalories: ƒ ()
  info: ƒ ()
  setCalories: ƒ (calories)
  special_ingredient: undefined
  type: "classic"
  __proto__: Object
*/


// Task 2
/*           
console.log(myHamburger.getCalories());  // => 600
myHamburger.setCalories(700);
console.log(myHamburger.getCalories());  // => 700
*/

// Task 3
/*
myHamburger.addCheese();
console.log(myHamburger.getCalories());  // => 720
console.log(myHamburger.addCheese());    // "Sorry, you can add cheese only once!"
*/

// Task 4
/*
myHamburger.addTomato();
console.log(myHamburger.getCalories());  // => 620
myHamburger.addTomato();
console.log(myHamburger.getCalories());  // => 420
console.log(myHamburger.addTomato());    // "Sorry, you can add tomato only twice!"
*/

// Task 5
/*
myHamburger.addSecretIngredient();
console.log(myHamburger.getCalories());  // => 700
console.log(myHamburger.addSecretIngredient());
                                        // "Sorry, you can add secret ingredient only once"
*/
/*
myHamburger.addTomato();
myHamburger.addSecretIngredient();      // Secret ingredient always goes first!
                                        // If you want to add some "special ingredient" - 
                                        // you have to add "special" before all other "ingredients"! 
*/

// Task 6 
/*
const myHamburger2 = new Hamburger('classic', 600, true);
console.log(myHamburger2);
myHamburger2.addSecretIngredient();      // "Sorry, you can add secret ingredient only once"
myHamburger2.getCalories();              // 700
*/

// Task 7
/*
console.log(myHamburger.addSecretIngredient());
console.log(myHamburger.addTomato());
console.log(myHamburger.addCheese());
console.log(myHamburger.bite());
console.log(myHamburger.bite());
console.log(myHamburger.bite());
console.log(myHamburger.addTomato());    // "It's a bit late for extra tomato!"
*/

// Task 8
/*
console.log(myHamburger.addSecretIngredient());
console.log(myHamburger.addTomato());
console.log(myHamburger.addCheese());
console.log(myHamburger.bite());
console.log(myHamburger.bite());
console.log(myHamburger.bite());
console.log(myHamburger.info());        // Classic hamburger: with secret ingredient,
                                        // with cheese, with 1 tomato, 
                                        // is bit 3 times. Total calories 840
*/