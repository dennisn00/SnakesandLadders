import { Game } from '../src/models/Game.js';
import { Player } from '../src/models/Player.js';


describe("US 2 - Player Can Win the Game", () => {

    let game: Game;
    let player: Player;

    beforeEach(() => {
        game = new Game(100, 1);
        player = game.getCurrentPlayer();
    });

    test("UAT1 - Player wins when token reaches square 100", () => {
        player.moveForward(96);
        expect(player.getPosition()).toBe(97)
        player.moveForward(3);
        expect(player.getPosition()).toBe(100);
    });

    test("UAT2 - Player stays on square 97 if they roll beyond the board", () => {
        player.moveForward(96);
        expect(player.getPosition()).toBe(97)
        player.moveForward(4);
        expect(player.getPosition()).toBe(97);
    });
});

describe("US 3 - Moves Are Determined By Dice Rolls", () => {

    let game: Game;
    let player: Player;

    beforeEach(() => {
        game = new Game(100, 1);
        player = game.getCurrentPlayer();
    });

    test("UAT1 - Dice roll is between 1 and 6 inclusive", () => {
        Array.from({ length: 10 }).forEach(() => {
            const roll = game.rollDice();
            expect(roll).toBeGreaterThanOrEqual(1);
            expect(roll).toBeLessThanOrEqual(6);
        });
    });

});