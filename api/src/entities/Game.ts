import {IPlayable} from './Playable';
import GameServicesClass from '../services/game/GameServicesClass';
import Board from './Board';
import { IBoardTransitions } from './BoardTransitions';
export interface IGame {
    name: string;
}

class Game implements IGame {

    public name: string;

    constructor(name: string) {
        this.name = name;

    }
    public start(iplayable:IPlayable):IPlayable{
        iplayable.newBoard();
        return iplayable;
    }
    public nextMove(iplayable:IPlayable, colour:string):void{

    }
    public allAIMoves(iplayable:IPlayable):IBoardTransitions{
      let initialBoard: IPlayable = iplayable;
      let gameService = new GameServicesClass(initialBoard);
      let bd = gameService.getfinalBoardNonRecur();
      return gameService.boardTransitions;
    }
}

export default Game;
