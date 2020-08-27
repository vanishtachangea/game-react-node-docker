# A Very Popular Game 
## Description of Project 
1. Preliminaries and rules 
Please proceed in an incremental way using baby steps! Ensure that at any point in time, your solution can be executed and add small features one by one. In this way, the time limit will not hinder you to deliver at least a partial solution – which is very acceptable! Other requirements:
The chosen programming language has to be Typescript.
Backend - The game engine has to be written inside a Node.JS API using Express.JS. framework
Share the code over a git repository of your choice.
The purpose of the challenge is to evaluate generic coding skills and it’s up to the developer how much time he wants to invest to show these skills.
2. Definition of Done
The definition of done for any feature is: 
Unit tests are given that demonstrate the correctness of your code 
The code adheres to high quality standards (as few lines of code as possible), best practices and a clear structure.
The resulting software is functional and can be tested by us.
The game engine works as expected
3. Requirements 
Today we are going to implement a popular one player game. The player is given an n x n board of tiles where each tile is given one of m colors. Each tile is connected to up to four adjacent tiles in the North, South, East, and West directions. A tile is connected to the origin (the tile in the upper left corner) if it has the same color as the origin and there is a path to the origin consisting only of tiles of this color. A player makes a move by choosing one of the m colors. After the choice is made, all tiles that are connected to the origin are changed to the chosen color. The game proceeds until all tiles of the board have the same color. The goal of the game is to change all the tiles to the same color, preferably with the fewest number of moves possible. 

It has been proven that finding the optimal moves is a very hard computational problem. It has also been shown that finding the minimum number of flooding operations is NP-hard for m > 3. This even holds true when the player can perform flooding operations from any position on the board. However, this variant can be solved in polynomial time for the special case of m = 2. For an unbounded number of colors, even this variant remains NP-hard for boards of a dimension of at least n = 3 and is solvable in polynomial time for boards of dimension n = 2.

## How To Run Applications in Dev

### client 
```
cd client
npm start
```
### api
```
cd api
npm start
```

### Project Plan 
1. Get the Initial MERN Stack folders right
1. Api
1. TDD
1. Algorithm
1. More Tests
1. Improve Docker to add the other services. 
1. React
 







