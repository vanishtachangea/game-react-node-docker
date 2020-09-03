import Tile, { ITile } from './Tile';
import {Dict} from './types';
import {IPlayable} from './Playable';
export interface IBoard {
    rows: number;
    columns: number;
    tiles: ITile[][];
    
}

class Board implements IBoard , IPlayable{

    public rows: number;
    public columns: number;
    public tiles: ITile[][];
    public initialBoard: IBoard;
    //public boardTransitions: { chosenColour: string, newBoard: IBoard }[];
    public colourPalette:string[]=[];
    public boardTransitions: { chosenColour: string, newBoard: IBoard }[]=[];
    public coloursHashTable: Dict= {};
    constructor(rows: number, columns: number, tiles: ITile[][], colourPalette:string[]) {
        this.rows = rows;
        this.columns = columns
        this.tiles = tiles;
        this.colourPalette = colourPalette; 
        this.initialBoard=this;      
    }
    public NewBoard():void{
        let id:number=1;
        for(let i =0;i<this.rows;i++)
        {
            for(let j=0;j<this.columns;j++)
            {
                this.tiles[i][j]= new Tile(String(id++),this.getRandomArrayItem(this.colourPalette),i,j);
            }
        }
        this.initialBoard = this;
    }
    private getRandomArrayItem(items:string[])
    {
        return items[Math.floor(Math.random()*items.length)];
    }
}

export default Board;

