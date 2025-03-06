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

    *[Symbol.iterator]() {
        for (const member of this.members) {
        yield member; 
        }
    }
}

export default Team;
