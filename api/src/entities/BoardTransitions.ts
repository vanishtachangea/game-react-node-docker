import IPlayable from './Playable';

export interface IBoardTransition {
    chosenColour: string;
    board: IPlayable;
}

export class BoardTransition implements IBoardTransition {

    public chosenColour: string;
    public board: IPlayable;

    constructor(chosenColour: string, board: IPlayable) {
        this.chosenColour = chosenColour;
        this.board = board;
    }
}

export interface IBoardTransitions {
    transitions: IBoardTransition[]
}

export class BoardTransitions implements IBoardTransitions {

    public transitions: IBoardTransition[]
 
    constructor(boardTransitions: IBoardTransition[]) {
        this.transitions= boardTransitions;
    }
}
