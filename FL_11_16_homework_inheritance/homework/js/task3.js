function Blueprint (name, type, specie, wings = false) {
    this.name = name;
    this.type = type;
    this.specie = specie;
    this.wings = wings;
}

Blueprint.prototype.getType = function () {
    return this.type;
}

Blueprint.prototype.getPokemonType = function () {
    return this.name;
}

Blueprint.prototype.canFly = function () {
    return this.wings;
}

Blueprint.prototype.getSpecie = function () {
    return this.specie;
}

Blueprint.prototype.evolve = function () {
    return 'Hello from this page'
}

const Charmander = function () {
    return Blueprint.call(this, 'Charmander', 'Fire', 'Lizard Pokemon');
}

Charmander.prototype = Blueprint.prototype;
Charmander.prototype.constructor = Charmander;

const Charmeleon = function () {
    return Blueprint.call(this, 'Charmeleon', 'Fire', 'Flame Pokémon');
}

Charmeleon.prototype = Charmander.prototype;
Charmeleon.prototype.constructor = Charmeleon;

const Charizard = function () {
    return Blueprint.call(this, 'Charizard', 'Fire', 'Flame Pokémon', true);
}

Charizard.prototype = Charmeleon.prototype;
Charizard.prototype.constructor = Charizard;

const Pichu = function () {
    return Object.assign(this, new Blueprint('Pichu', 'Electric', 'Mouse Pokémon'));
}

Pichu.prototype = Charizard.prototype;
Pichu.prototype.constructor = Pichu;

const Pikachu = function () {
    return Object.assign(this, new Blueprint('Pikachu', 'Electric', 'Mouse Pokémon'));
}

Pikachu.prototype = Pichu.prototype;
Pikachu.prototype.constructor = Pikachu;

const Raichu = function () {
    return Object.assign(this, new Blueprint('Raichu', 'Electric', 'Mouse Pokémon'));
}

Raichu.prototype = Pikachu.prototype;
Raichu.prototype.constructor = Raichu;

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();
const pikachu = new Pikachu();
const raichu = new Raichu();
const pichu = new Pichu();

console.log('------------------ Get type -----------------');
console.log(charmander.getType());
console.log(charmander.getType() === charmeleon.getType());
console.log(charmander.getType() === charizard.getType());

console.log('------------------ Can fly ------------------');
console.log(charmander.getSpecie());
console.log(charmeleon.getSpecie());
console.log(charizard.getSpecie() === charmeleon.getSpecie());

console.log('----------------- Get specie ----------------');
console.log(charmander.canFly());
console.log(charmander.canFly() === charmeleon.canFly());
console.log(charizard.canFly());

console.log('------------------ Evolve -------------------');
console.log(charmander.evolve().constructor === Charmeleon);
console.log(charmeleon.evolve().constructor === Charizard);



