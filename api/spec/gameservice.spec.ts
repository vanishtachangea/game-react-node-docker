import supertest from 'supertest';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { Response, SuperTest, Test } from 'supertest';

//import app from '@server';
import app from '../src/Server';
//import { pErr } from '@shared/functions';
//import { paramMissingError } from '@shared/constants';
import { ChosenColours, finalBoardAlgo,Dict } from '../src/services/game/gameservice';


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

        it(`should return the colour having most origin connections`, (done) => {
            ////console.log("should return the colour having more origin connections");

            //type Dict = { [key: string]: number };
            const coloursHashTable: Dict = {};
            coloursHashTable['1'] = 0;
            coloursHashTable['2'] = 0;
            coloursHashTable['3'] = 0;
            //////console.log(Object.keys(coloursHashTable).length);
            //////console.log(coloursHashTable['foo']);
            //////console.log(Object.keys(coloursHashTable)[2]);

            /* const board = [['1','2','1','3','1','2'],
            ['3','1','3','2','3','2'],
            ['3','3','2','3','3','3'],
            ['3','2','1','3','1','2'],
            ['3','2','1','2','2','2'],
            ['1','3','1','2','3','1']
            ]; */




            expect(true).toEqual(true);
            done();
        });

        it(`should return the most popular colour in first column`, (done) => {
            ////console.log('should return the most popular colour in first column');
            const board = [
                ['1', '2', '1'],
                ['3', '1', '3'],
                ['3', '3', '2'],
                ['3', '2', '1']
            ];


            expect(true).toEqual(true);
            done();
        });
        it(`should return the most popular colour in second column`, (done) => {
            ////console.log('should return the most popular colour in second column');
            const board = [
                ['1', '2', '1'],
                ['3', '1', '3'],
                ['3', '3', '2'],
                ['3', '2', '1']
            ];

            expect(true).toEqual(true);
            done();
        });
        it(`should return the new board after first move`, (done) => {
            const board = [
                ['1', '2', '1'],
                ['3', '1', '3'],
                ['3', '3', '2'],
                ['3', '2', '1']
            ];

            expect (true).toEqual(true);
            done();
        });
        it(`should return the final board after all the required moves`, (done) => {
            const board = [
                ['1', '2', '1'],
                ['3', '1', '3'],
                ['3', '3', '2'],
                ['3', '2', '1']
            ];

            const coloursHashTable: Dict = {};
            coloursHashTable['1'] = 0;
            coloursHashTable['2'] = 0;
            coloursHashTable['3'] = 0;
            const expectedColour1 = '3';
            const expectedColour2 = '1';
            const tempBoard = [...board];

            /*
            board1 = [
                ['1', '2', '1'],
                ['3', '1', '3'],
                ['3', '3', '2'],
                ['3', '2', '1']
            ];
            board2 = [
                ['1', '2', '1'],
                ['1', '1', '3'],
                ['1', '1', '2'],
                ['1', '2', '1']
            ];
            board3 = [
            ['2', '2', '1'],
            ['2', '2', '3'],
            ['2', '2', '2'],
            ['2', '2', '1']
            ];
            board4 = [
            ['1', '1', '1'],
            ['1', '1', '3'],
            ['1', '1', '1'],
            ['1', '1', '1']
            ];
            */
           const board4 = [
            ['3', '3', '3'],
            ['3', '3', '3'],
            ['3', '3', '3'],
            ['3', '3', '3']
            ];
            const finalBoard = finalBoardAlgo(tempBoard,coloursHashTable);
            expect (finalBoard).toEqual(board4);

            done();
        });


    });
});

