const Fight = require("./Fight/fight");
const AbstractPerson = require("./persons/AbstractPerson");
const Monster = require("./persons/Monster");

const promt = require("prompt-sync")();

const WELKOME_TEXT = `Welcome to the Fight club! \nRemember! Never Tell about Fight club!!\n What is your name?`


function main() {
    console.log(WELKOME_TEXT);

    const name = promt();

    console.log(`Welkome ${name}`);

    const hero = new AbstractPerson(name, 20, 1);

    let monster = new Monster(1);

    const getHP = () => `You have ${hero.hp} HP, and ${monster.name} has ${monster.hp} HP.`;

    const getNewMonsterName = () => `Your new opponent ${monster.name}, with ${monster.hp} HP.`;

    console.log(`${name} , welcome to the Fight club!\nYour first monster is: ${monster.name}.\n${getHP()}`);

    while (hero.isAlive()) {
        console.log("Select defence part:\n1. HEAD\n2. BODY\n3. LEGS");
        const defence = promt()
        hero.chooseDefence(defence)

        console.log("Select attack point:\n1. HEAD\n2. BODY\n3. LEGS");
        const attack = promt()
        hero.chooseAttackPart(attack)

        monster.chooseAttackPart(getRandomNumber(3));
        monster.chooseDefence(getRandomNumber(3));

        Fight.attack(hero, monster);

        console.log(`${getHP()}`);
        if (!monster.isAlive()) {
            monster = new Monster(1);
            console.log(getNewMonsterName());
        }
    };
    console.log(`Yor lost!\nYour name ${hero.name} will be forgoten forever.`);
};

function getRandomNumber(max) {
    return Math.floor(Math.random() * max + 1);
};

main();