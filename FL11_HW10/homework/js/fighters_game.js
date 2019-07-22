console.log(`
ATTENTION!!! 
My name Mario nad I'm real Italian savage,
I dare you to fight with me, pathetic?
`);

const Fighter = class Fighter {
  constructor ({name, damage, health, agility}) {
    this._name = name;
    this._damage = damage;
    this._health = health;
    this._agility = agility;
    this._wins = 0;
    this._loses = 0;
  }
  getName() {
    return this._name;
  }
  getDamage() {
    return this._damage;
  }
  getHealth() {
    return this._health;
  }
  getAgility() {
    return this._agility;
  }
  attack ( defender ) {
    let totalSuccessOfAttack = 100;
    let successOfAttack = totalSuccessOfAttack - defender.getAgility();
    let probabilityOfSuccess = Math.floor( Math.random() * totalSuccessOfAttack);
    if( probabilityOfSuccess <= successOfAttack ) {
      defender.dealDamage(this.getDamage());
      console.log(`${this._name} make ${this._damage} damage to ${defender._name}`);
    } else {
      console.log(`${this._name} attack missed`);
    }
  }
  dealDamage( damage ) {
    this._health = this._health - damage;
    this._health < 0 ? this._health = 0 : this._health - damage;
  }
  logCombatHistory() {
    let message = `Name: ${this._name}, Wins: ${this._wins}, Losses: ${this._loses}`;
    return console.log(message);
  }
  heal( healPoints ) {
    let totalHP = 100;
    let currentHP = this._health;
    let results = healPoints + currentHP;
    results <= totalHP ? this._health += healPoints : console.log(`You can get only ${this._health = totalHP}`);
  }
  addWin() {
    let score = this._wins += 1;
    return score;
  }
  addLoss() {
    let score = this._loses += 1;
    return score;
  }
}

const mario = new Fighter({name: 'Mario', damage: 25, health: 100, agility: 70});
const luigi = new Fighter({name: 'Luigi', damage: 20, health: 100, agility: 50});

const battle = ( warriorOne, warriorTwo ) => {

  while (warriorOne._health > 0 && warriorTwo._health > 0) {

    warriorOne._health > 0 || warriorTwo._health > 0 ? warriorOne.attack( warriorTwo ) : '';
    warriorOne._health > 0 || warriorTwo._health > 0 ? warriorTwo.attack( warriorOne ) : '';

    warriorOne._health === 0 ? console.log(`${warriorOne._name} is dead and can't fight!`) : '';
    warriorTwo._health === 0 ? console.log(`${warriorTwo._name} is dead and can't fight!`) : '';
  }
  warriorOne._health > 0 ? warriorOne.addWin() : warriorOne.addLoss();
  warriorTwo._health > 0 ? warriorTwo.addWin() : warriorTwo.addLoss();
  console.log(mario);
  console.log(luigi);
  console.log('Mario current health level is ' + mario.getHealth());
  console.log('Luigi current health level is ' + luigi.getHealth());
  console.log(mario.logCombatHistory());
  console.log(luigi.logCombatHistory());
}