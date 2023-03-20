const AbstractPerson = require("./AbstractPerson");

class Monster extends AbstractPerson{
    constructor(lvl){
        switch(lvl){
            case 1:
            case 2:
                super("Skeleton", 10, 1);
                break;
        };
    };
};

module.exports = Monster;