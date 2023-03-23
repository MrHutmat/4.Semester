const team = {
    _players: [
        {firstName: 'John', lastName: 'Doe', age: 32},
        {firstName: 'Mathias', lastName: 'Jensen', age: 25},
        {firstName: 'Jane', lastName: 'Olsen', age: 19}
    ],
    _games: [
        {opponent: 'Team A', teamPoints: 42, opponentPoints: 34},
        {opponent: 'Team B', teamPoints: 38, opponentPoints: 25},
        {opponent: 'Team C', teamPoints: 25, opponentPoints: 31}
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this.games.push(game);
    }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);

console.log(team.games);