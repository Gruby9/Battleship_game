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
    game.receiveAttack(6,8)
    game.ships[0].sunk = true
    game.ships[1].sunk = true
    game.ships[2].sunk = true
    game.ships[4].sunk = true
    game.ships[3].sunk = true
    expect(game.checkShips()).toEqual(true);
});