const Gameboard = require("./gameboard")
const player = new Gameboard


class Player {
    constructor(name, hitsDone = [], possibleMoves = [],
         lastAttack = [false, []]) {
        this.name = name,
        this.hitsDone = hitsDone,
        this.possibleMoves = possibleMoves,
        this.lastAttack = lastAttack
    }

    generatePossibleMoves() {
        for (let i = 1; i < 11; i++) {
            for (let n = 1; n < 11; n++) {
                this.possibleMoves.push([i, n])
            }
        }
        return this.possibleMoves[20]
    }

    attack(x, y) {
        this.hitsDone.push([x, y])
    }

    randomIndex() {
        const index = Math.floor(Math.random() * 2)
        return index
    }

    autoAttack() {
        if (this.lastAttack[0] === true) {
            const narrowX = this.lastAttack[1][0]
            const narrowY = this.lastAttack[1][1]
            const variations = [[narrowX-1, narrowY-1],
                                [narrowX+1,narrowY-1],
                                [narrowX+1,narrowY+1],
                                [narrowX-1,narrowY+1]]
            for (let i = 0; i < variations.length; i++) {
                const found = this.possibleMoves.find(el => el[0] == variations[i][0] &&
                                                        el[1] == variations[i][1])
                if (found != undefined) {
                    const move = []
                    move[0] = variations[i]
                    return move
                }
            }
        }
        const index = Math.floor(Math.random() * this.possibleMoves.length)
        const move = this.possibleMoves[index]
        if (player.receiveAttack(move[0], move[1]) == true) {
            this.lastAttack[0] = true
            this.lastAttack[1] = move
        }
        return this.possibleMoves[index]
    }
}

module.exports = Player