import { Player } from "./Player.js";

export class Game {

    // the board is represented as an array of integers, with one array element per field on the board
    // a zero indicates that this is an "empty" field
    // a non-zero, positive integer indicates that this field is the bottom of a ladder, with the value specifying
    // the number of fields to move forward on the ladder, e.g. value 6 means that the ladder ends 6 fields ahead.
    // similarly, a non-zero, negative integer indicates that this field is the head of a snake
    readonly board: number[];

    private readonly players: Player[];
    private currentPlayerIndex = 0; // index of the player whose turn it is

    constructor(boardSize = 100, player_number = 2) {

        this.board = new Array(boardSize).fill(0);

        // TODO: add snakes and ladders. This should be a randomized process to get a new board for each new game.

        // init players with generic names
        this.players = new Array(player_number)
        for (let i = 0; i < player_number; i++) {
            this.players[i] = new Player(`Player ${i.toString()}`, boardSize);
        }
    }

    // This set the currentPlayerIndex to the next player and returns the now active player
    startNewTurn(): Player {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        return this.getCurrentPlayer();
    }

    // This returns an integer between 1 and 6 (inclusive)
    rollDice(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    // This returns the currently active player
    getCurrentPlayer(): Player {
        return this.players[this.currentPlayerIndex];
    }

}