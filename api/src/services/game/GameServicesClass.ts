
import { IPlayable } from '../../entities/Playable';
import IBoard from '../../entities/Board';
import ITile from '../../entities/Tile';
import Board from '../../entities/Board';
import { Dict } from '../../entities/types';
import Queue from '../../entities/Queue';
import {IBoardTransitions, IBoardTransition, BoardTransitions} from '../../entities/BoardTransitions';
// interface BoardTransitions {
//     chosenColour: string;
//     board: IPlayable;
// }
class GameServicesClass {

    public board: IPlayable;
    public originalBoard: IPlayable;
    private tileMarkedCount = 0;
    private tileMarkedMaxJ = 0;
    private chosenColour1 = "";
    private chosenColour2 = "";
    private previousColour1 = "";
    private firstLoop = false;
    //public boardTransitions: { chosenColour: string, board: IPlayable }[] = [];
    //public boardTransitions: BoardTransitions[] = [];
    public boardTransitions: IBoardTransitions;
    private col = 0;
    private k = 0;
    private selectedColorToMark = "";
    private newColor = "";
    constructor(board: IPlayable) {
        this.board = board;
        this.originalBoard = this.board;
        //this.boardTransitions[0] = { chosenColour: "", board: this.board };
        this.boardTransitions = new BoardTransitions([]);
        this.selectedColorToMark = this.board.colourPalette[0];
    }
    public getfinalBoard(): IPlayable {
        this.tileMarkedCount = 0;
        this.tileMarkedMaxJ = 0;
        this.col = 0;
        this.k = 0;
        this.previousColour1 = "";
        this.firstLoop = true;
        let col = this.col;

        while (this.k < this.board.tiles[0].length) {
            this.getMostPopularColorInColumnAlgo();
            console.log("this.chosenColour1: " + this.chosenColour1);
            console.log("this.chosenColour2: " + this.chosenColour2);
            console.log("this.k: " + this.k);
            //console.log("this.board.coloursHashTable[this.chosenColour1]" + this.board.coloursHashTable[this.chosenColour1]);

            if (this.board.coloursHashTable[this.chosenColour1] == this.board.tiles.length) {
                this.k += 1;
                continue;
            }

            this.resetColumnCount();
            this.selectColourToChange();
            //this.markConnTilesByColourAlgo(0, col);
            this.markConnTilesByBFSNonRecur();
            this.nextBoard();
            if (this.k == this.board.tiles[0].length - 1) {
                this.k = 0;
                break;
            }
            else {
                this.k += 1;
            }
        }

        return this.board;
    }
    public selectColourToChange() {
        if (this.firstLoop)
            this.selectedColorToMark = this.chosenColour2;
        else
            this.selectedColorToMark = this.previousColour1;
        this.firstLoop = false;
    }
    public resetColumnCount() {
        this.tileMarkedCount = 0;
        this.tileMarkedMaxJ = 0;
    }

    public markConnTilesByColourAlgo(i: number, j: number) {
        //console.log("color " + this.selectedColorToMark);
        //console.log("this.board.tiles[i][j].colour " + i + " " + j + " " + this.board.tiles[i][j].colour);

        if (!this.board.tiles[i][j].isVisited)
            this.board.tiles[i][j].isVisited = true;
        else
            return;
        if (this.board.tiles[i][j].colour == this.selectedColorToMark) {
            this.board.tiles[i][j].isMarked = true;
            this.tileMarkedMaxJ = j > this.tileMarkedMaxJ ? j : this.tileMarkedMaxJ;
            this.tileMarkedCount += 1;
            //console.log("this.tileMarkedMaxJ " + this.tileMarkedMaxJ);
            //console.log("this.tileMarkedCount " + this.tileMarkedCount);

            if (j < this.board.tiles[0].length - 1) {
                this.markConnTilesByColourAlgo(i, j + 1);
            }
            if (j >= 1) {
                this.markConnTilesByColourAlgo(i, j - 1);
            }
            if (i < this.board.tiles.length - 1) {
                this.markConnTilesByColourAlgo(i + 1, j);
            }

            if (i >= 1) {
                this.markConnTilesByColourAlgo(i - 1, j);
            }
        }
        else {
            if (i < this.board.tiles.length - 1 && j == 0) {
                this.markConnTilesByColourAlgo(i + 1, j);
            }
        }
    }

    public markConnTilesByBFSNonRecur() {
        console.log("markConnTilesByBFSNonRecur");
        let queue = new Queue<ITile>();
        let i = 0;
        let j = 0;
        let s = this.board.tiles[i][j];
        this.board.tiles[i][j].isVisited = true;
        queue.add(this.board.tiles[i][j]);
        console.log(queue);
        console.log("queue.Size" + queue.Size());
        console.log("queue.isEmpty" + queue.isEmpty());
        while (!queue.isEmpty()) {
            //Removing that vertex from queue,whose neighbour will be visited now
            let v: ITile | undefined = queue.pop();
            console.log("V" + v);
            //console.log("V"+v.colour); 
            console.log("this.selectedColorToMark " + this.selectedColorToMark);
            console.log("queue.Size" + queue.Size());
            if (v) {
                console.log(v.colour);
                this.board.tiles[v.xPos][v.yPos].isVisited = true;
                if (this.board.tiles[v.xPos][v.yPos].colour == this.selectedColorToMark) {
                    this.tileMarkedMaxJ = v.yPos > this.tileMarkedMaxJ ? v.yPos : this.tileMarkedMaxJ;
                    this.tileMarkedCount += 1;

                    console.log(v.xPos + "," + v.yPos);
                    this.board.tiles[v.xPos][v.yPos].isMarked = true;
                    
                        let rightv = this.getRightTile(v.xPos, v.yPos);
                        if (rightv && !rightv.isVisited)
                            queue.add(rightv);


                        let topv = this.getTopTile(v.xPos, v.yPos);
                        if (topv && !topv.isVisited)
                            queue.add(topv);

                        let bottomv = this.getBottomTile(v.xPos, v.yPos);
                        if (bottomv && !bottomv.isVisited)
                            queue.add(bottomv);
                   

                }
                else if (v.yPos == 0) {

                    let bottomv = this.getBottomTile(v.xPos, v.yPos);
                    if (bottomv && !bottomv.isVisited)
                        queue.add(bottomv);
                }

                console.log("queue.Size" + queue.Size());
            }

            //processing all the neighbours of v  for all neighbours w of v in Graph G
            // if w is not visited 
            //     Q.enqueue( w )             //Stores w in Q to further visit its neighbour
            // mark w as visited.
        }
    }
    public getBottomTile(i: number, j: number): ITile | undefined {
        if (i < this.board.tiles.length - 1) {
            return this.board.tiles[i + 1][j];
        }
        return undefined;
    }
    public getRightTile(i: number, j: number): ITile | undefined {
        if (j < this.board.tiles[0].length - 1) {
            return this.board.tiles[i][j + 1];
        }
        return undefined;
    }
    public getTopTile(i: number, j: number): ITile | undefined {
        if (i > 0) {
            return this.board.tiles[i - 1][j];
        }
        return undefined;
    }

    public getfinalBoardNonRecur(): IPlayable {
        this.tileMarkedCount = 0;
        this.tileMarkedMaxJ = 0;
        this.col = 0;
        this.k = 0;
        this.previousColour1 = "";
        this.firstLoop = true;
        let col = this.col;

        while (this.k < this.board.tiles[0].length) {
            this.getMostPopularColorInColumnAlgo();
            console.log("this.chosenColour1: " + this.chosenColour1);
            console.log("this.chosenColour2: " + this.chosenColour2);
            console.log("this.k: " + this.k);
            //console.log("this.board.coloursHashTable[this.chosenColour1]" + this.board.coloursHashTable[this.chosenColour1]);

            if (this.board.coloursHashTable[this.chosenColour1] == this.board.tiles.length) {
                this.k += 1;
                continue;
            }

            this.resetColumnCount();
            this.selectColourToChange();
            //this.markConnTilesByColourAlgo(0, col);
            this.markConnTilesByBFSNonRecur();
            this.nextBoard();
            if (this.k == this.board.tiles[0].length - 1) {
                this.k = 0;
                //break;
            }
            else {
                this.k += 1;
            }
        }

        return this.board;
    }
    public getMostPopularColorInColumnAlgo() {
        this.board.coloursHashTable = {};
        for (let i = 0; i < this.board.tiles.length; i++) {
            let colour = this.board.tiles[i][this.k].colour;
            if (this.board.coloursHashTable[colour] == undefined) {
                this.board.coloursHashTable[colour] = 1;
            }
            else {
                this.board.coloursHashTable[colour] += 1;
            }
        }
        this.getChosenColorsAlgo();
    }

    public getChosenColorsAlgo() {
        const dict_sorted = this.sortDictionary();
        this.chosenColour1 = dict_sorted[0] == undefined ? "" : String(dict_sorted[0][0]);
        this.chosenColour2 = dict_sorted[1] == undefined ? "" : String(dict_sorted[1][0]);
    }
    public sortDictionary(): (string | number)[][] {
        let dict = this.board.coloursHashTable;
        // Create items array
        const items = Object.keys(dict).map(function (key) {
            return [key, dict[key]];
        });

        // Sort the array based on the second element
        items.sort(function (first: (string | number)[], second: (string | number)[]): number {
            // return second[1] - first[1];
            return new Number(second[1]).valueOf() - new Number(first[1]).valueOf();
        });
        return items;
    }
    public selectNewColour(){
        //let newColor: string = "";
        if (this.previousColour1 == this.chosenColour1) {
            this.newColor = this.chosenColour2;
        }
        else {
            this.newColor = this.chosenColour1;
        }
    }
    public nextBoard() {
        this.selectNewColour();
        this.previousColour1 =this.newColor;
        for (let i = 0; i < this.board.tiles.length; i++) {
            for (let j = 0; j < this.board.tiles[i].length; j++) {
                console.log("this.board.tiles[i][j]" + this.board.tiles[i][j].isMarked + " -" + this.board.tiles[i][j].colour);
                if (this.board.tiles[i][j].isMarked) {    
                    this.board.tiles[i][j].isMarked = false;                
                    this.board.tiles[i][j].colour = this.newColor;
                    if (j > this.tileMarkedMaxJ) {
                        this.tileMarkedMaxJ = j;
                    }
                }
                this.board.tiles[i][j].isVisited = false;
                
            }
        }
        //console.log("boardtrnsitions"+this.board.boardTransitions.length);
        //this.board.boardTransitions.push({ chosenColour: newColor, board: this.board })
        ///this.boardTransitions.push({ chosenColour: this.newColor, board: this.board })
        this.boardTransitions.transitions.push({ chosenColour: this.newColor, board: this.board });
    }
    public getBoardTransitions(): IBoardTransitions {

        return this.boardTransitions;
    }
}
export default GameServicesClass;





