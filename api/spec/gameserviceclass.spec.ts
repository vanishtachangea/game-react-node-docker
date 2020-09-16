import supertest from 'supertest';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { Response, SuperTest, Test } from 'supertest';

//import app from '@server';
//import app from '../src/Server';
import app from '../src/index';
//import { pErr } from '@shared/functions';
//import { paramMissingError } from '@shared/constants';
import Board from '../src/entities/Board';
import IPlayable from '../src/entities/Playable';
import GameServicesClass from '../src/services/game/GameServicesClass';

describe('Game Tests', () => {

    const gamePath = '/api/game';
    const getGamePath = `${gamePath}/all`;
    const startGamePath = `${gamePath}/add`;


    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe(`Board Tests`, () => {
        // it(`should return the final board after all the required moves`, (done) => {
        //     let initialBoard: Board = new Board(2,2);
        //     initialBoard.testBoard();
        //     let gameService = new GameServicesClass(initialBoard);
        //     console.log(initialBoard);
        //     for (let i = 0; i < initialBoard.tiles.length; i++) {
        //         for (let j = 0; j < initialBoard.tiles[i].length; j++) {
        //             console.log("("+i+","+j+") "+initialBoard.tiles[i][j].colour);
        //         }
        //     }
            
        //     //let bd = gameService.getfinalBoard();
        //     let bd = gameService.getfinalBoardNonRecur();
        //     console.log("After final board");
        //     console.log(initialBoard);
        //     for (let i = 0; i < bd.tiles.length; i++) {
        //         for (let j = 0; j < bd.tiles[i].length; j++) {
        //             console.log("("+i+","+j+") "+bd.tiles[i][j].colour);
        //         }
        //     }

        //     let expectedBoard: Board = new Board(2,2);
        //     expectedBoard.testresultBoard();
        //     //onsole.log("board transitions : "+bd.boardTransitions.length);
        //     console.log("board transitions : "+gameService.getBoardTransitions.length);
        //     expect(expectedBoard.tiles).toEqual(bd.tiles);
            
        //     done();
        // });
        it(`should return the final board after all the required moves - test randomise`, (done) => {
            let initialBoard: Board = new Board(6,6);
            //initialBoard.testBoard();
            let gameService = new GameServicesClass(initialBoard);
            console.log(initialBoard);
            for (let i = 0; i < initialBoard.tiles.length; i++) {
                for (let j = 0; j < initialBoard.tiles[i].length; j++) {
                    console.log("("+i+","+j+") "+initialBoard.tiles[i][j].colour);
                }
            }
            
            //let bd = gameService.getfinalBoard();
            let bd = gameService.getfinalBoardNonRecur();
            console.log("After final board");
            console.log(initialBoard);
            for (let i = 0; i < bd.tiles.length; i++) {
                for (let j = 0; j < bd.tiles[i].length; j++) {
                    console.log("("+i+","+j+") "+bd.tiles[i][j].colour);
                }
            }

             let expectedBoard: Board = new Board(6,6);
            // expectedBoard.testresultBoard();
            // //console.log("board transitions : "+bd.boardTransitions.length);
            console.log("board transitions : "+gameService.getBoardTransitions.length);
            expect(expectedBoard.tiles).toEqual(expectedBoard.tiles);
            
            done();
        });

    });
    
});

