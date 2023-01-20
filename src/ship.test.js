const Ship = require('./ship')
const carrier = new Ship(3)

beforeEach(() => {
    carrier.hit();
    carrier.isSunk()
});

test('tests sinking after hitting', () => {
    expect(carrier.hits).toBe(1);
    expect(carrier.sunk).toBe(false)
})

test('tests sinking after hitting', () => {
    expect(carrier.hits).toBe(2);
    expect(carrier.sunk).toBe(false)
})

test('tests sinking after hitting', () => {
    expect(carrier.hits).toBe(3);
    expect(carrier.sunk).toBe(true)
})

test('tests sinking after hitting', () => {
    expect(carrier.hits).toBe(4);
    expect(carrier.sunk).toBe(true)
})