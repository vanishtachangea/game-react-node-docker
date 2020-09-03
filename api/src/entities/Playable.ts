import { IBoard } from './Board';

//How can you be an argument to nextBoard
export interface IPlayable {
    initialBoard: IBoard;
    colourPalette:string[];
    boardTransitions: { chosenColour: string, newBoard: IBoard }[];
    NewBoard():void;    
}