console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType) {
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry() {
        this.foodInTummy -= 1;
        console.log(this.foodInTummy);
        console.log(this.name + ' says: WAHHHH!!!');
    }
}

//create new Tamagotchis
const firstOne = new Tamagotchi('cuteName', 'creature1');
const secondOne = new Tamagotchi('secondCuteName', 'secondCreatureType');


//test out your Tamagotchies below via console.logs
console.log(firstOne);
console.log(secondOne);

firstOne.cry();
secondOne.cry();