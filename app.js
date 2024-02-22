const team = {
    _players: [
        { firstName: 'Isabella', lastName: 'Turner', age: 28 },
        { firstName: 'Olivia', lastName: 'Foster', age: 29 },
        { firstName: 'Lily', lastName: 'Carter', age: 32 },
    ],
    _games: [
        { opponent: 'Nebula Ninjas', teamPoints: 20, opponentPoints: 17 },
        { opponent: 'Sapphire Sisters', teamPoints: 19, opponentPoints: 23 },
        { opponent: 'Celestial Challengers', teamPoints: 26, opponentPoints: 18 }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        let player = { firstName: newFirstName, lastName: newLastName, age: newAge }
        this.players.push(player);
    },
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);