/* Task 1.*/
const gameSettings = {loss: 0, wins: 0};

const Fighter = class Fighter {
  constructor ({name, damage, health, agility}) {
    this.name = name;
    this.damage = damage;
    this.health = health;
    this.agility = agility;
  }
  getName() {
    return this.name;
  }
  getDamage() {
    return this.damage;
  }
  getHealth() {
    return this.health;
  }
  getAgility() {
    return this.agility;
  }

  attack ( defender ) {
    let totalSuccessOfAttack = 100;
    let successOfAttack = totalSuccessOfAttack - defender.getAgility();
    let probabilityOfSuccess = Math.floor( Math.random() * totalSuccessOfAttack);
    if( probabilityOfSuccess <= successOfAttack ) {
      defender.dealDamage(this.getDamage());
      console.log(`${this.name} make ${this.damage} damage to ${defender.name}`);
    } else {
      console.log(`${this.name} attack missed`);
    }
    return;
  }

  dealDamage( damage ) {
    this.health = this.health - damage;
    this.health < 0 ? this.health = 0 : this.health - damage;
  }

  addWin() {
    return gameSettings.wins++;
  }
  addLoss() {
    return gameSettings.loss++;
  }

  logCombatHistory() {
    let message = `Name: ${this.name}, Wins:  ${this.addWin()}, Losses: ${this.addLoss()}`;
    return console.log(message);
  }

  // heal() {}

}

const mario = new Fighter({name: 'Mario', damage: 20, health: 100, agility: 60});
const luigi = new Fighter({name: 'Luigi', damage: 15, health: 100, agility: 90});

const battle = ( warriorOne, warriorTwo ) => {
  while (warriorOne.health > 0 && warriorTwo.health > 0) {

    if(warriorOne.health > 0 || warriorTwo.health > 0) {
      warriorOne.attack( warriorTwo );
    } 
    if ( warriorOne.health > 0 || warriorTwo.health > 0 ) {
      warriorTwo.attack( warriorOne );
    } 

    warriorOne.health === 0 ? console.log(`${warriorOne.name} is dead and can't fight!`) : '';
    warriorTwo.health === 0 ? console.log(`${warriorTwo.name} is dead and can't fight!`) : '';
    
  }
  warriorOne.health < 0 ? warriorOne.addLoss() : warriorOne.addWin();
  warriorTwo.health < 0 ? warriorTwo.addLoss() : warriorTwo.addWin();
}