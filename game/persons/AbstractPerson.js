class AbstractPerson {
    constructor(name, hp, lvl) {
        this.name = name;
        this.hp = hp;
        this.lv = lvl;
        this.power = 2 * lvl;
        this.exp = 0;
        this.needExp = 20;
    };

    addExp(initialHP, lvl) {
        this.exp += initialHP * lvl;

        if (this.lv < 2 && this.exp >= 20) {
            this.setLvl(2)
            
        };
        if (this.lv < 3 && this.exp >= 20) {
            this.setLvl(3)
            
        };
        if (this.lv < 4 && this.exp >= 20) {
            this.setLvl(4)
            
        };
        if (this.lv < 5 && this.exp >= 20) {
            this.setLvl(5)
            
        };
        if (this.lv < 6 && this.exp >= 50) {
            this.setLvl(6)
            
        };
        if (this.lv < 7 && this.exp >= 100) {
            this.setLvl(7)
            
        };
        if (this.lv < 8 && this.exp >= 250) {
            this.setLvl(8)
            
        };
        if (this.lv < 9 && this.exp >= 500) {
            this.setLvl(9)
            
        };
        if (this.lv < 10 && this.exp >= 1000) {
            this.setLvl(10)
            
        };
        if (this.lv < 11 && this.exp >= 1500) {
            this.setLvl(11)
            
        };
        // if(lvl < 2 && this.exp >= this.needEXp){
        //     for (let i = 2; i < lvl && this.exp >= this.needEXp; i++) {
            
        //     }
        //     this.setLvl(2)
        // }
    }

    isAlive() {
        return this.hp > 0;
    };

    chooseAttackPart(bodyPart) {
        this.attackPoint = bodyPart;
    };

    chooseDefence(bodyPart) {
        this.defencePart = bodyPart;
    };

    setLvl(lv){
        this.lv = lv;
        this.hp = 20 * this.lv;
        this.power = 2 * this.lv;
    }
};

module.exports = AbstractPerson;