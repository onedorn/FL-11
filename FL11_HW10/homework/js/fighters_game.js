/* Task 1.*/
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
  }

  dealDamage( damage ) {
    this.health = this.health - damage;
    this.health < 0 ? this.health = 0 : this.health - damage;
  }

  // addWin() {}
  // addLoss() {}
  // logCombatHistory() {}
  // heal() {}

}

const mario = new Fighter({name: 'Mario', damage: 20, health: 100, agility: 60});
const luigi = new Fighter({name: 'Luigi', damage: 15, health: 100, agility: 40});

const battle = function( warriorOne, warriorTwo ) {
  if(warriorOne.health === 0 || warriorTwo.health === 0) {
  console.log(`${this.name} is dead and can't fight!`)
  }
}