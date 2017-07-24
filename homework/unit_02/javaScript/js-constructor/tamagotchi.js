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
    puke() {
        this.foodInTummy -= 1;
        console.log('foodInTummy ' + this.foodInTummy + 'WAAHHHH!!!');
    }
    yawn() {
        this.restedness -= 1;
        console.log(this.name + " has current restedness of: " + this.restedness);
    }
}

//create new Tamagotchis
const firstOne = new Tamagotchi('cuteName', 'creature1');
const secondOne = new Tamagotchi('secondCuteName', 'creature2');
const thirdOne = new Tamagotchi('anotherName', 'creature3');
const fourthOne = new Tamagotchi('oneMoreName', 'creature4');


//test out your Tamagotchies below via console.logs
console.log(firstOne);
console.log(secondOne);
console.log(thirdOne);
console.log(fourthOne);

firstOne.cry();
secondOne.cry();
thirdOne.cry();
fourthOne.cry();

firstOne.puke();
secondOne.puke();

firstOne.yawn();