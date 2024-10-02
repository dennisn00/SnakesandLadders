import { Player } from '../dist/models/Player.js';

describe("US 1 - Tokens can move across the board", () => {

    let player: Player;

    beforeEach(() => {
        player = new Player("Player 0", 100);
    });

    test("UAT1 - Token is on square 1 at the start of the game", () => {
        expect(player.getPosition()).toBe(1);
    });

    test("UAT2 - Token moves 3 spaces from square 1 to square 4", () => {
        player.moveForward(3);
        expect(player.getPosition()).toBe(4);
    });

    test("UAT3 - Token moves 3 spaces then 4 spaces to reach square 8", () => {
        player.moveForward(3);
        player.moveForward(4);
        expect(player.getPosition()).toBe(8);
    });
});
