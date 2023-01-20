class Ship {
    constructor(length, hits, sunk = false) {
        this.length = length,
        this.hits = hits,
        this.sunk = sunk
    }

    hit() {
        this.hits ++
    }

    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true
        }
    }
}