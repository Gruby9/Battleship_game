const Gameboard = require("./gameboard");
const Ship = require("./ship");
const Player = require("./player")
import "./style.scss"

const game = new Gameboard
const player = new Player
game.createShips()
player.generatePossibleMoves()
console.log(game)
player.lastAttack = [false, [3,3]]
console.log(player.lastAttack)
console.log(player.autoAttack())