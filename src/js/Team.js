import Character from "./Character";

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

export default Team;
