//         constants          //          
// gameboard div

// p1 pieces
//     1 flag
//     1 1
//     1 bomb
//     7 2
// p2 pieces
//     1 flag
//     1 1
//     1 bomb
//     7 2
// const p1;
// const p2;
const p1Major = document.getElementsByClassName('p1Major');
const p1Captain = document.getElementById('p1Captain');
const p1Flag = document.getElementById('p1Flag');
const p1Bomb = document.getElementById('p1Bomb');

const p2Major = document.getElementsByClassName('p2Major');
const p2Captain = document.getElementById('p2Captain');
const p2Flag = document.getElementById('p2Flag');
const p2Bomb = document.getElementById('p2Bomb');

// const p1CreateMajor = document.createElement('div')
//                         .setAttribute('class', 'p1Major');
// const p2CreateMajor = document.createElement('div')
//                         .setAttribute('class', 'p2Major');
// const p2CreateCaptain = document.createElement('div')
//                         .setAttribute('class', 'p1Captain')
// const p2CreateCaptain = document.createElement('div')
//                         .setAttribute('class', 'p1Captain')
// class Captain{
//     constructor(player){
//     this.player = player;
//     this.value = 4;
//     }
// move(){
// //can move 1 in any direction that is avail
//     }
// };
// class Major{
//     constructor(player){
//     this.player = player;
//     this.value = 3;
//     }
// move(){
// //can move 1 space in any direction that is avail
//     }
// };
// class Bomb{
//     constructor(player){
//     this.player = player;
//     }
// blowUp(){
// //will 'kill' the enemy piece that attacks it
//     }
// };
// class Flag{
//     constructor(player){
//     this.player = player;
//     }
// loss(){
//if grabbed, will end the game -winner will be who grabs the opposite flag
//     }
// };


//          state            //

// location of the pieces
// logic for understanding areas that can be moved to




//          cashed elements    //

// player 1 pieces 
        // on board
        // 'taken'
// player 2 pieces
        // on board
        // 'taken'

//          render          //

// display moved piece
// change msg on board for next player


// functions
init = function(){
    playerOneStart();
    playerTwoStart();
    // appendP1();
    // appendP2();
    defineBoard();
}
const playerOneStart = function(){
   const createP1Captain= document.createElement('div');
        createP1Captain.setAttribute('id', 'p1Captain');
   const createP1Bomb = document.createElement('div');
        createP1Bomb.setAttribute('id', 'p1Bomb');
    const createP1Flag = document.createElement('div');
        createP1Flag.setAttribute('id', 'p1Flag');
    const createP1Major = document.createElement('div');
        for(i=0; i<6; i++){
        createP1Major.setAttribute('class', 'p1Major')
    };
    console.log('creating p1 pieces')
};
const playerTwoStart = function(){
    const createP2Captain= document.createElement('div');
        createP2Captain.setAttribute('id', 'p2Captain');
    const createP2Bomb = document.createElement('div');
        createP2Bomb.setAttribute('id', 'p2Bomb');
    const createP2Flag = document.createElement('div');
        createP2Flag.setAttribute('id', 'p2Flag');
    const createP2Major = document.createElement('div');
    for(i=0; i<6; i++){
        createP2Major.setAttribute('class', 'p2Major')
    };
};
const appendP1 = function(){
    document.querySelector("#pieceHolder > div.p1Container").append(p1Major)
};
const defineBoard = function(){
    for(i)
}
init();

// event listeners 


// const btn = document.querySelector("body > button")
// btn.addEventListener('click', begin())

// function begin(){
//     console.log('hello!');
// }

// board array to logically represent the squares
const board = new Array(8);
const boardFiles = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h'
}
// create 2D array with square notation for each element
for (let i=0; i<8; i++) {
    board[i] = new Array(8);
    for (let j=0; j<8; j++) {
        board[i][j] = boardFiles[i] + String(j+1);
    }
}
function defineBoard(boardObj) {
    for (let i=0; i<boardObj.length; i++) {
        for (let j=0; j<boardObj.length; j++) {
            let square = document.querySelector("#gameBoard" > 'div');
            square.setAttribute('id', boardObj[i][j])
            if ((i+j) % 2 === 0) {
                square.style.backgroundColor = '#8A3F09'
            } else {
                square.style.backgroundColor = '#E7AA71'
            }
            boardEl.appendChild(square);
        }
    }
}