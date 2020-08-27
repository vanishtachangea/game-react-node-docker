



const traverseCountRec = (board: string[][], i: number, j: number, color: string, count: number): number => {
    if (board[i][j] == color) {
        count = count + 1;
        board[i][j]='X';

        if (j < board[0].length - 1) {
            //console.log("j+1- right"+j);
            count = traverseCountRec(board, i, j + 1, color, count);
        }
        if (j >= 1) {
            //console.log("j-1 : left"+j);
            count = traverseCountRec(board, i, j - 1, color, count);
        }
        if (i < board.length - 1) {
            //console.log(" MATCHES - i+1 : down "+i+"-"+i+1);
            count = traverseCountRec(board, i + 1, j, color,count);
        }

        if (i >= 1) {
            //console.log("i-1 : up"+i);
            count = traverseCountRec(board, i - 1, j, color, count);
        }  
    }
    else{
        if (i < board.length - 1 && j==0) {
            //console.log(" no match - i+1 : down "+i+"-"+(i+1));
            count = traverseCountRec(board, i + 1, j, color, count);
        }
    }
    return count;
}

const colourMovesArr : string[] =[];
const nextBoard = (board: string[][], newColor: string): string[][] => {
    let newBoard: string[][] = [];
    newBoard = [...board];
    for(let i=0;i <newBoard.length;i++){
        for(let j=0;j<newBoard[i].length;j++){
            if(newBoard[i][j]=='X'){
                newBoard[i][j]=newColor;                
            }
        }
    }
    colourMovesArr.push(newColor);
    return newBoard;
}

type Dict = { [key: string]: number };
const coloursHashTable: Dict = {};
coloursHashTable['1'] = 0;
coloursHashTable['2'] = 0;
coloursHashTable['3'] = 0;
//console.log(Object.keys(coloursHashTable).length);
//console.log(coloursHashTable['foo']);
//console.log(Object.keys(coloursHashTable)[2]);

/* const board = [['1','2','1','3','1','2'],
['3','1','3','2','3','2'],
['3','3','2','3','3','3'],
['3','2','1','3','1','2'],
['3','2','1','2','2','2'],
['1','3','1','2','3','1']
]; */


/* const board = [['1', '1', '3'],
   ['1', '2', '2'],
    ['2', '2', '2']
]; */

const board = [
    ['1','2','1'],
['3','1','3'],
['3','3','2'],
['3','2','1']
];
console.log(board);


const originConnectionsHashTable: Dict = {};
const tempboard =[...board];

let w = tempboard.length;
 //for(let i=0;i<w;i++){

/*     const colour = tempboard[0][0];
    
    const count = traverseCountRec(tempboard, 0, 0, colour,0);
    originConnectionsHashTable[colour] =count; */
//} 
/* const colour2 = tempboard[2][0];
const count2 = traverseCountRec(tempboard, 0, 0, colour2,0);
originConnectionsHashTable[colour] =count2;
console.log(board);
console.log(originConnectionsHashTable); */
/*  for(let i = 0;i< Object.keys(coloursHashTable).length;i++)
{
    let colour = Object.keys(coloursHashTable)[i];
    const tempboard =[...board];
    let count = traverseCountRec(tempboard, 0, 0, colour,0);
    coloursHashTable[colour] =count;
}  */

/* let colour = '3';
const tempboard2 =[...board];
let count = traverseCountRec(tempboard2, 0, 0, colour,0);
coloursHashTable[colour] =count; */
//console.log(tempboard2);
//console.log(coloursHashTable);

for(let i=0;i<3;i++){
    let tempboard4 =[...board];
    let colour = Object.keys(coloursHashTable)[i];
    console.log("colour:"+colour);
    console.log("before");
    console.log(tempboard4);
    let count = traverseCountRec(tempboard4, 0, 0, colour,0);
    console.log("after");
    console.log("colour - "+ colour+" - count :"+count);
    coloursHashTable[colour] =count;
    
    console.log(tempboard4);
    console.log(coloursHashTable);
    let colourForMaxCount = Object.keys(coloursHashTable).reduce((a, b) => coloursHashTable[a] > coloursHashTable[b] ? a : b);
    
    console.log("colourHavingMax"+colourForMaxCount);
    console.log(coloursHashTable);
    coloursHashTable[colourForMaxCount]=0;
    console.log(coloursHashTable);
    let  colourForSecondMaxCount = Object.keys(coloursHashTable).reduce((a, b) => coloursHashTable[a] > coloursHashTable[b] ? a : b);
    console.log("colourHavingSEdonMax"+colourForSecondMaxCount);
    


}
let colourForMaxCount = Object.keys(coloursHashTable).reduce((a, b) => coloursHashTable[a] > coloursHashTable[b] ? a : b);
    
console.log("colourHavingMax"+colourForMaxCount);
console.log(coloursHashTable);
coloursHashTable[colourForMaxCount]=0;
console.log(coloursHashTable);
let  colourForSecondMaxCount = Object.keys(coloursHashTable).reduce((a, b) => coloursHashTable[a] > coloursHashTable[b] ? a : b);
console.log("colourHavingSEdonMax"+colourForSecondMaxCount);


console.log(nextBoard(board,colourForSecondMaxCount));

/* const list = [
    { color: 'white', size: 'XXL' },
    { color: 'red', size: 'XL' },
    { color: 'black', size: 'M' }
  ]
  list.sort((a, b) => (a.color > b.color) ? 1 : -1)
  console.log(list); */