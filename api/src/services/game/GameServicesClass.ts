import { IBoard } from '@entities/Board';
import { ITile } from '@entities/Tile';
import { IPlayable } from '@entities/Playable';

class GameServicesClass{
    public static getfinalBoard(board: IPlayable): IPlayable  {
        // let tempBoard: ITile[][] = [];
        // tempBoard = [...board.tiles];
        // const cols = tempBoard[0].length;
        // let newBoardDetails: NewBoardITiteDetails = {
        //     newBoard: tempBoard,
        //     maxJ: 0
        // };
        // let markDetails: TileMarkDetails;
        // let col = 0;
        // let k = 0;
        // let previousColour1 = "";
        // let firstloop = true;
        // console.log("Original Board:");
        // console.log(board);
        // while (k < board.tiles[0].length) {
        //     chosenColours = getMostPopularColorInColumnAlgo(tempBoard, coloursHashTable, k);
    
        //     if (chosenColours.coloursHashTable[chosenColours.colourNo1] == board.length) {
        //         k += 1;
        //         continue;
        //     }
        //     if (firstloop)
        //         markDetails = markConnTilesByColourAlgo(tempBoard, 0, col, chosenColours.colourNo2, 0, 0);
        //     else
        //         markDetails = markConnTilesByColourAlgo(tempBoard, 0, col, previousColour1, 0, 0);
        //     firstloop = false;
        //     if (previousColour1 == chosenColours.colourNo1)
        //     {
        //         newBoardDetails = nextBoardAlgo(tempBoard, "", chosenColours.colourNo2);
        //         previousColour1 = chosenColours.colourNo2;
        //     }            
        //     else
        //     {
        //         newBoardDetails = nextBoardAlgo(tempBoard, "", chosenColours.colourNo1);
        //         previousColour1 = chosenColours.colourNo1;
        //     }
                
           
        //     console.log("Colour Chosen: "+previousColour1)
        //     console.log("New Board: ");
        //     console.log(newBoardDetails);
    
        //     if (k == board[0].length - 1) {
        //         k = 0;
        //     }
        //     else {
        //         k += 1;
        //     }
        // }
    
        return board;
    }
}
export default GameServicesClass;
///////////////////////////////////////////////////////////////////////////





