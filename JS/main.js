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
const closePopup = document.getElementById("popupclose");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");

const boardObj = document.querySelector("#gameBoard");
const p1Cont = document.querySelector("#pieceHolder > div.p1Container")
const p2Cont = document.querySelector("#pieceHolder > div.p2Container")

const p1Major = document.getElementsByClassName('p1Major');
const p1Captain = document.getElementById('p1Captain');
const p1Flag = document.getElementById('p1Flag');
const p1Bomb = document.querySelector('#p1Bomb');

const p2Major = document.getElementsByClassName('p2Major');
const p2Captain = document.getElementById('p2Captain');
const p2Flag = document.getElementById('p2Flag');
const p2Bomb = document.getElementById('p2Bomb');

const msgEl = document.querySelector("body > div.container > h2.msg")
const timerEl = document.querySelector("#alert")

const p1Name = document.querySelector("#pieceHolder > h3.p1Header")
const p2Name = document.querySelector("#pieceHolder > h3.p2Header")
const rules = document.querySelector("#rules");
boardEl = [
    [0, 0, 0, 0, 0, 0, 0],  // Column 0
    [0, 0, 0, 0, 0, 0, 0],  // Column 1
    [0, 0, 0, 0, 0, 0, 0],  // Column 2
    [0, 0, 0, 0, 0, 0, 0],  // Column 3
    [0, 0, 0, 0, 5, 0, 0],  // Column 4
    [0, 0, 0, 0, 0, 0, 0],  // Column 5
    [0, 0, 0, 0, 0, 0, 0],  // Column 6
  ];
  for(i=0; i<boardEl.length; i++){
    for(j=0; j<boardEl.length; j++){
      if(p1Major)
        if(boardEl[i][j] !== 0){
  console.log('taken!');
      } 
  }
}
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
const render = function(){
    styleGame();
    // p1Name = prompt('Player 1, what is your name?');
}

// // display moved piece
// // change msg on board for next player


// // functions
const init = function(){
    playerOneStart();
    playerTwoStart();
    render();
}
const playerOneStart = function(){
   createP1Captain= document.createElement('div');
        createP1Captain.setAttribute('id', 'p1Captain');
        p1Cont.appendChild(createP1Captain);
    createP1Bomb = document.createElement('div');
        createP1Bomb.setAttribute('id', 'p1Bomb');
        p1Cont.appendChild(createP1Bomb)
     createP1Flag = document.createElement('div');
        createP1Flag.setAttribute('id', 'p1Flag');
        p1Cont.appendChild(createP1Flag)
    for(i=0; i<7; i++){
        createP1Major = document.createElement('div');
        createP1Major.setAttribute('class', 'p1Major');
        createP1Major.setAttribute('id', 'p1M'+[i])
        p1Cont.appendChild(createP1Major)
    };
    console.log('creating p1 pieces')
};

const playerTwoStart = function(){
     createP2Captain= document.createElement('div');
        createP2Captain.setAttribute('id', 'p2Captain');
        p2Cont.appendChild(createP2Captain)
     createP2Bomb = document.createElement('div');
        createP2Bomb.setAttribute('id', 'p2Bomb');
        p2Cont.appendChild(createP2Bomb)
     createP2Flag = document.createElement('div');
        createP2Flag.setAttribute('id', 'p2Flag');
        p2Cont.appendChild(createP2Flag)
        for(i=0; i<7; i++){
            createP2Major = document.createElement('div');
            createP2Major.setAttribute('class', 'p2Major');
            createP2Major.setAttribute('id', 'p2M'+[i])
            p2Cont.appendChild(createP2Major)
        };   
};
const styleGame = function(){
    startGame.style.display = 'none';
    p1Cont.style.display = 'grid';
    p2Cont.style.display = 'grid';
    msgEl.style.display = 'table';
    timerEl.style.display = 'table';
    boardObj.style.display = 'grid';
    p1Name.innerText = prompt('Player 1, what is your name?');
    p2Name.innerText = prompt('Player 2, what is your name?')
    p1Name.style.margin = '0px auto 8px auto';
    p2Name.style.margin = '0px auto 8px auto';
    rules.style.display = 'none';
    rulesBtn.style.display = 'inline';
};
const rulesRend = function(){
    p1Cont.style.display = 'none';
    p2Cont.style.display = 'none';
    msgEl.style.display = 'none';
    timerEl.style.display = 'none';
    boardObj.style.display = 'none';
    rules.style.display = 'table';
};
const closeRules = function() {
    p1Cont.style.display = 'grid';
    p2Cont.style.display = 'grid';
    msgEl.style.display = 'table';
    timerEl.style.display = 'table';
    boardObj.style.display = 'grid';
    rules.style.display = 'none';
}

// // event listeners 

// event listeners 
const startGame = document.querySelector("#start");
startGame.addEventListener('click', init);
// const startGame = document.querySelector("#rules");
// startGame.addEventListener('click', rules);
const rulesBtnEl = document.querySelector("#rulesBtn");
rulesBtnEl.addEventListener('click', rulesRend);
const closeRulesEl = document.querySelector("#close")
closeRulesEl.addEventListener('click', closeRules)


move = function(char, space) {
    document.getElementById(char)
    document.getElementById(space).append(document.getElementById(char))
    // console.log('moved');
}
// idEl = [
//     ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'],  // Column 0
//     ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7'],  // Column 1
//     ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'],  // Column 2
//     ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7'],  // Column 3
//     ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7'],  // Column 4
//     ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7'],  // Column 5
//     ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7'],  // Column 6
//   ];
//   for(i=0; i<idEl.length; i++){
//     for(j=0; j<idEl.length; j++){
//         document.querySelector("#gameBoard" > 'div')
//         if(boardEl[i][j] !== 0){
//   console.log('taken!');
//       }
//   }
// }
// defineBoard();