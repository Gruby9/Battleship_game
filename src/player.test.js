const Player = require("./player")

const ja = new Player
ja.generatePossibleMoves()
ja.lastAttack = [true, [2,2]]

test('return possible moves', () => {
    expect(ja.autoAttack()).toBe(true)
});