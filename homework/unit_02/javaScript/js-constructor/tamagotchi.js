console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor() {
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry() {
        this.foodInTummy -= 1;
        console.log(this.foodInTummy);
        console.log('WAHHHH!!!');
    }
}

//create new Tamagotchis
const firstOne = new Tamagotchi;
const secondOne = new Tamagotchi;


//test out your Tamagotchies below via console.logs
console.log(firstOne);
console.log(secondOne);

firstOne.cry();
secondOne.cry();