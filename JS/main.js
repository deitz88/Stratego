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
const boardObj = document.querySelector("#gameBoard");
const p1Cont = document.querySelector("#pieceHolder > div.p1Container")
const p2Cont = document.querySelector("#pieceHolder > div.p2Container")
const p1Major = document.getElementsByClassName('p1Major');
const p1Captain = document.getElementById('p1Captain');
const p1Flag = document.getElementById('p1Flag');
const p1Bomb = document.getElementById('p1Bomb');

const p2Major = document.getElementsByClassName('p2Major');
const p2Captain = document.getElementById('p2Captain');
const p2Flag = document.getElementById('p2Flag');
const p2Bomb = document.getElementById('p2Bomb');
boardEl = [
    [0, 0, 0, 0, 0, 0, 0],  // Column 0
    [0, 0, 0, 0, 0, 0, 0],  // Column 1
    [0, 0, 0, 0, 0, 0, 0],  // Column 2
    [0, 0, 0, 0, 0, 0, 0],  // Column 3
    [0, 0, 0, 0, 5, 0, 0],  // Column 4
    [0, 0, 0, 0, 0, 0, 0],  // Column 5
    [0, 0, 0, 0, 0, 0, 0],  // Column 6
  ];

// // const p1CreateMajor = document.createElement('div')
// //                         .setAttribute('class', 'p1Major');
// // const p2CreateMajor = document.createElement('div')
// //                         .setAttribute('class', 'p2Major');
// // const p2CreateCaptain = document.createElement('div')
// //                         .setAttribute('class', 'p1Captain')
// // const p2CreateCaptain = document.createElement('div')
// //                         .setAttribute('class', 'p1Captain')
// class Captain{
//     constructor(player){
//     this.player = player;
//     this.value = 4;
//     }
// move(){
// //can move 1 in any direction that is avail
//     }
// };
// // class Major{
// //     constructor(player){
// //     this.player = player;
// //     this.value = 3;
// //     }
// // move(){
// // //can move 1 space in any direction that is avail
// //     }
// // };
// // class Bomb{
// //     constructor(player){
// //     this.player = player;
// //     }
// // blowUp(){
// // //will 'kill' the enemy piece that attacks it
// //     }
// // };
// // class Flag{
// //     constructor(player){
// //     this.player = player;
// //     }
// // loss(){
// //if grabbed, will end the game -winner will be who grabs the opposite flag
// //     }
// // };


// //          state            //

// // location of the pieces
// // logic for understanding areas that can be moved to




// //          cashed elements    //

// // player 1 pieces 
//         // on board
//         // 'taken'
// // player 2 pieces
//         // on board
//         // 'taken'

// //          render          //

// // display moved piece
// // change msg on board for next player


// // functions
const init = function(){
    playerOneStart();
//     playerTwoStart();
    appendP1();
    // appendP2();
//     // defineBoard();
}
const playerOneStart = function(){
   createP1Captain= document.createElement('div');
        createP1Captain.setAttribute('id', 'p1Captain');
    createP1Bomb = document.createElement('div');
        createP1Bomb.setAttribute('id', 'p1Bomb');
     createP1Flag = document.createElement('div');
        createP1Flag.setAttribute('id', 'p1Flag');
    for(i=0; i<6; i++){
        createP1Major = document.createElement('div');
        createP1Major.setAttribute('class', 'p1Major');
    };
    console.log('creating p1 pieces')
};

const playerTwoStart = function(){
     createP2Captain= document.createElement('div');
        createP2Captain.setAttribute('id', 'p2Captain');
     createP2Bomb = document.createElement('div');
        createP2Bomb.setAttribute('id', 'p2Bomb');
     createP2Flag = document.createElement('div');
        createP2Flag.setAttribute('id', 'p2Flag');
    for(i=0; i<6; i++){
        createP2Major = document.createElement('div')
        createP2Major.setAttribute('class', 'p2Major')
    };
};

const appendP1 = function(){
    for(i=0; i<6; i++){
        p1Cont.appendChild(createP1Major);
    }
        p1Cont.append(createP1Flag)
        p1Cont.append(createP1Bomb)
        p1Cont.append(createP1Captain)
}
// const appendP2 = function(){
//     for(i=0; i<6; i++){
//         p2Cont.append(createP2Major);
//     // p1Cont.append(p1Major);
//     }
//         p2Cont.append(createP2Flag)
//         p2Cont.append(createP2Bomb)
//         p2Cont.append(createP2Captain)
// }
// // const defineBoard = function(){
// //     for(i)
// // }
init();

// // event listeners 

// event listeners 

// // const btn = document.querySelector("body > button")
// // btn.addEventListener('click', begin())

// // function begin(){
// //     console.log('hello!');
// // }

// board array to logically represent the squares
// const grid = new Array(7);
// const boardFiles = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     3: 'd',
//     4: 'e',
//     5: 'f',
//     6: 'g',
//     7: 'h'
// }
// // create 2D array with square notation for each element
// for (let i=0; i<grid.length; i++) {
//     grid[i] = new Array(7);
//     for (let j=0; j<grid.length; j++) {
//         grid[i][j] = boardFiles[i] + String(j+1);
//     }
// }
// function defineBoard() {
//     for (let i=0; i<7; i++) {
//         for (let j=0; j<7; j++) {
//             // let square = document.createElement('div');
//         let square = document.querySelectorAll("#gameBoard > div");
//             square.setAttribute('id', grid[i][j]);
//             boardEl.appendChild(square);
//         }
//     }
// }

// defineBoard();

for(i=0; i<boardEl.length; i++){
    for(j=0; j<boardEl.length; j++){
      if(p1Major)
        if(boardEl[i][j] !== 0){
  console.log('taken!');
      }
  }
}

// move = function() {
//     document.getElementById('p1Captain')
//     document.getElementById('a6').appendChild(document.getElementById('p1Captain'))
//     // console.log('moved');
// }