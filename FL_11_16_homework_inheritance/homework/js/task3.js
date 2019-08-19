function Blueprint (name, type, specie, Next_pokemon, wings = false) {
    this.name = name;
    this.type = type;
    this.specie = specie;
    this.wings = wings;
    this.Next_pokemon = Next_pokemon;
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
    if(this instanceof this.Next_pokemon) {
        return this;
    }
    return new this.Next_pokemon();
}

const Charmander = function () {
    return Blueprint.call(this, 'Charmander', 'Fire', 'Lizard Pokemon', Charmeleon);
}

const Charmeleon = function () {
    return Blueprint.call(this, 'Charmeleon', 'Fire', 'Flame Pokémon', Charizard);
}

const Charizard = function () {
    return Blueprint.call(this, 'Charizard', 'Fire', 'Flame Pokémon', Charizard, true);
}

const Pichu = function () {
    return Blueprint.call(this, 'Pichu', 'Electric', 'Mouse Pokémon', Pikachu);
}

const Pikachu = function () {
    return Blueprint.call(this, 'Pikachu', 'Electric', 'Mouse Pokémon', Raichu);
}

const Raichu = function () {
    return Blueprint.call(this, 'Raichu', 'Electric', 'Mouse Pokémon', Raichu);
}

Object.assign(Charmander.prototype, Blueprint.prototype);
Object.assign(Charmeleon.prototype, Blueprint.prototype);
Object.assign(Charizard.prototype, Blueprint.prototype);
Object.assign(Pichu.prototype, Blueprint.prototype);
Object.assign(Pikachu.prototype, Blueprint.prototype);
Object.assign(Raichu.prototype, Blueprint.prototype);

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



