class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}

class Team {
    constructor(array=[]) {
        this.members = [...array];
    }

    add(char) {
        if (char instanceof Character) {
            this.members.push(char);
        }
        else {
            throw new Error('Можно добавлять только объекты типа Character')
        }
    }

    [Symbol.iterator]() {
        let index = 0;
        const members = this.members;

        return {
            next() {
                if (index < members.length) {
                    return {
                        value: members[index++],
                        done: false,
                    }
                } else {
                    return {
                        done: true,
                    }
                }
            }
        }
    }
}


const team = new Team();

team.add(new Character('Лучник', 'Bowman', 50, 1, 40, 10));
team.add(new Character('Мечник', 'Swordsman', 70, 1, 30, 20));
team.add(new Character('Маг', 'Wizard', 40, 1, 50, 5));


for (const character of team) {
    console.log(character);
}