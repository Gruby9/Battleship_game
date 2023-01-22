const Gameboard = require("./gameboard");
const Ship = require("./ship");

const game = new Gameboard
// game.createShips()

beforeAll(() => {
    game.createShips()
}); 

test('if gameboard craates ships', () => {
    expect(game.receiveAttack(6,8)).toEqual(true);
});