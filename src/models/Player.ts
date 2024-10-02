export class Player {
    private position: number = 1;
    private readonly boardSize;
    readonly name: string;

    constructor(name: string, boardSize: number) {
        this.name = name;
        this.boardSize = boardSize
    }

    // This moves the player forward the specified number of steps
    moveForward(steps: number): number {
        if (!Number.isInteger(steps) || steps < 1 || steps > 6) {
            throw new Error("Invalid move: steps must be between 1 and 6.");
        }
        if (this.position + steps > this.boardSize) {
            console.log("You are going to far!");
            return this.position;
        }
        this.position += steps;
        // TODO: here should be a check whether the field has a snake head or the bottom of a ladder
        // TODO: if so, the player should be moved accordingly
        return this.position;
    }

    getPosition() {
        return this.position;
    }
}