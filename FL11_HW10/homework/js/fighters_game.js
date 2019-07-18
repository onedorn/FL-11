const Fighter = class Fighter {
  constructor ({name, damage, health, agility}) {
    this.name = name;
    this.damage = damage;
    this.health = health;
    this.agility = agility;
    this.wins = 0;
    this.loses = 0;
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
  }
  dealDamage( damage ) {
    this.health = this.health - damage;
    this.health < 0 ? this.health = 0 : this.health - damage;
  }
  logCombatHistory() {
    let message = `Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.loses}`;
    return console.log(message);
  }
  heal( healPoints ) {
    let totalHP = 100;
    let currentHP = this.health;
    let results = healPoints + currentHP;
    results <= totalHP ? this.health += healPoints : console.log(`You can get only ${this.health = totalHP}`);
  }
  addWin() {
    let score = this.wins += 1;
    return score;
  }
  addLoss() {
    let score = this.loses += 1;
    return score;
  }
}

const mario = new Fighter({name: 'Mario', damage: 25, health: 100, agility: 70});
const luigi = new Fighter({name: 'Luigi', damage: 20, health: 100, agility: 50});

const battle = ( warriorOne, warriorTwo ) => {

  while (warriorOne.health > 0 && warriorTwo.health > 0) {

    warriorOne.health > 0 || warriorTwo.health > 0 ? warriorOne.attack( warriorTwo ) : '';
    warriorOne.health > 0 || warriorTwo.health > 0 ? warriorTwo.attack( warriorOne ) : '';

    warriorOne.health === 0 ? console.log(`${warriorOne.name} is dead and can't fight!`) : '';
    warriorTwo.health === 0 ? console.log(`${warriorTwo.name} is dead and can't fight!`) : '';
  }
  warriorOne.health > 0 ? warriorOne.addWin() : warriorOne.addLoss();
  warriorTwo.health > 0 ? warriorTwo.addWin() : warriorTwo.addLoss();
}