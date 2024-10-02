import * as readline from "readline";
import {Game} from "./models/Game.js";


function askToContinue(query: string): Promise<void> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => rl.question(query, () => {
        rl.close();
        resolve();
    }));
}

async function main() {
    const boardSize = 100;
    const playerNumber = 2;
    let game: Game = new Game(boardSize, playerNumber);
    console.log(`Created a new game with ${playerNumber} Players and ${boardSize} fields.`)
    let currentPlayer = game.getCurrentPlayer()

    while (true) {
        await askToContinue(`\n${currentPlayer.name}'s turn. Press enter to roll the dice...`);

        // roll the dice and move forward
        let steps = game.rollDice();
        console.log(`You rolled a ${steps}`);
        let newPosition = currentPlayer.moveForward(steps);
        console.log(`${currentPlayer.name} moved to position ${newPosition}`);

        // check whether player has won
        if (newPosition == game.board.length) {
            console.log(`${game.getCurrentPlayer().name} is the winner!`);
            break;  // end the game
        }

        // jump to the next player
        currentPlayer = game.startNewTurn()
    }

}

await main();