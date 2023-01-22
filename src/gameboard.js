const Ship = require("./ship");

class Gameboard {

    constructor(ships = [],fiveShip,fourShip,three1Ship,three2Ship,
        twoShip, fiveCoor = [], fourCoor = [], three1Coor = [], 
        three2Coor = [], twoCoor = [], coors = [], hitsMissed = [], 
        hitsInTarget = []) {
        this.ships = ships,
        this.fiveShip = fiveShip,
        this.fourShip = fourShip,
        this.three1Ship = three1Ship,
        this.three2Ship = three2Ship,
        this.twoShip = twoShip
        // this.fiveCoor = fiveCoor,
        // this.fourCoor = fourCoor,
        // this.three1Coor = three1Coor,
        // this.three2Coor = three2Coor,
        // this.twoCoor = twoCoor
        this.coors = coors,
        this.hitsMissed = hitsMissed,
        this.hitsInTarget = hitsInTarget

    }

    createShips() {
        this.fiveShip = new Ship(5)
        this.fourShip = new Ship(4)
        this.three1Ship = new Ship(3)
        this.three2Ship = new Ship(3)
        this.twoShip = new Ship(2)
        this.ships.push(this.fiveShip, this.fourShip, this.three1Ship,
            this.three2Ship,this.twoShip)
        // this.fiveCoor = [[2,9],[2,8],[2,7],[2,6],[2,4]]
        // this.fourCoor = [[5,8],[6,8],[7,8],[8,8]]
        // this.three1Coor = [[5,5],[5,4],[5,3]]
        // this.three2Coor = [[7,5],[7,4],[7,3]]
        // this.twoCoor = [[9,1],[10,1]]
        this.coors = [
            [[2,9],[2,8],[2,7],[2,6],[2,4],[5,8]],
            [[5,8],[6,8],[7,8],[8,8]],
            [[6,8],[7,8],[8,8]],
            [[5,5],[5,4],[5,3]],
            [[7,5],[7,4],[7,3]],
            [[9,1],[10,1]]]
    }

    receiveAttack(x, y) {    
        this.hitsMissed.push([x, y])
        for ( let n = 0; n < this.coors.length; n++) {
            for ( let i = 0; i < this.coors[n].length; i++) {
                if (this.coors[n][i][0] == x && 
                    this.coors[n][i][1] == y) {
                        this.hitsMissed.pop()
                        this.ships[n].hit()
                        this.ships[n].isSunk()
                        this.hitsInTarget.push([x, y])
                        return this.hitsMissed
                    }
            }
        }
    }

    checkShips() {
        let count = 0
        for ( let n = 0; n < this.ships.length; n++) {
            if (this.ships[n].sunk === true) count++
        }
        if (count === 5) return 'player looses'
    }
}

module.exports = Gameboard