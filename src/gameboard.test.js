const Gameboard = require("./gameboard");
const Ship = require("./ship");

const game = new Gameboard
// game.createShips()

beforeAll(() => {
    game.createShips()
}); 

test('if gameboard craates ships', () => {
    game.receiveAttack(1,1)
    game.receiveAttack(7,7)
    game.receiveAttack(7,5)
    expect(game.receiveAttack(6,8)).toEqual(true);
});