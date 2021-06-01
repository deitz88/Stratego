//         constants          //          
// gameboard div


//letters = this value below:



// hardcode column and row


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
const p1Bomb = document.querySelector("#p1Bomb");

const p2Major = document.getElementsByClassName('p2Major');
const p2Captain = document.getElementById('p2Captain');
const p2Flag = document.getElementById('p2Flag');
const p2Bomb = document.getElementById('p2Bomb');

const msgEl = document.querySelector("body > div.container > h2.msg")
const timerEl = document.querySelector("#countdown")

const p1Name = document.querySelector("#pieceHolder > h3.p1Header")
const p2Name = document.querySelector("#pieceHolder > h3.p2Header")
const rules = document.querySelector("#rules");
const reset = document.querySelector("#reset");
let clickedEl = null;
boardEl = [
    [0, 0, 0, 0, 0, 0, 0],  // Column 0
    [0, 0, 3, 0, 0, 0, 0],  // Column 1
    [0, 0, 0, 0, 0, 0, 0],  // Column 2
    [0, 0, 0, 0, 0, 0, 0],  // Column 3
    [0, 0, 0, 100, 0, 0, 0],  // Column 4
    [0, 0, 0, 0, 0, 0, 0],  // Column 5
    [0, 0, 0, 0, 0, 0, 0],  // Column 6
  ];
  

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

// boardEl.forEach(function(colArr, colIdx) {
//     // Iterate over the col array to access the cell vals
//     colArr.forEach(function(cellVal, colIdx) {
//       // Select the correct div for this cellVal
//       const div = document.getElementById(`c${colIdx}r${rowIdx}`);
//       div.style.backgroundColor = colorLookup[cellVal];
//     });
//     // <conditional expression> ? <truthy val> : <falsey val>;
//     markerEls[colIdx].style.visibility = colArr.includes(0) ? 'visible' : 'hidden';
//     console.log('available' + board[i][j])
//   });







//   board.forEach(function(colArr, colIdx) {
//     // Iterate over the col array to access the cell vals
//     colArr.forEach(function(cellVal, rowIdx) {
//       // Select the correct div for this cellVal
//       const div = document.getElementById(`c${colIdx}r${rowIdx}`);
//       div.style.backgroundColor = colorLookup[cellVal];
//     });
//     // <conditional expression> ? <truthy val> : <falsey val>;
//     markerEls[colIdx].style.visibility = colArr.includes(0) ? 'visible' : 'hidden';
//   });








const render = function(){ //put these in init
    for(i=0; i<boardEl.length; i++){
        for(j=0; j<boardEl.length; j++){
            if(boardEl[i][j] !== 0){ //do this if 0 //else if do this if 2//
      console.log('taken! ' +[i],[j] + ' value is ' +boardEl[i][j]);
          } 
      }
    }


// do loop thingy here of board Array, 
// if value, add piece of that value to that square
// move('id of cached el', 'then to board ([i][j])'')
// after loop, set cachedEl to null
}
const resetGame = function(){
    styleGame();
    resetPieces();
    playerOneSetup();
}
// // display moved piece
// // change msg on board for next player


// // functions
function playerOneSetup(){
    // countdown(2);
    currentPlayer = p1Name;
    notPlayer = p2Name;
    msgEl.innerText = ("Current Player is: " + currentPlayer.innerText 
                    + ' --- You have two minutes to setup your pieces');       
                        //   playerTwoSetup();
 
                        console.log('switch start works')
      alert(notPlayer.innerText + ', Please look away')
};

function playerTwoSetup(){
    countdown(2);
    currentPlayer = p2Name;
    notPlayer = p1Name;
    msgEl.innerText = ("Current Player is: " + currentPlayer.innerText 
    + ' --- You have two minutes to setup your pieces');
alert(notPlayer.innerText + ', Please look away')
};
function init(){
    styleGame();
    playerOneStart();
    playerTwoStart();
    playerOneSetup();
    render();
}
const changePlayer = function() {
    if (currentPlayer === p1Name) {
      currentPlayer = p2Name;
      notPlayer = p1Name;
    } else {
      currentPlayer = p1Name;
      notPlayer = p2Name;
    }
    msgEl.innerText = ("Current Player is: " + currentPlayer.innerText
                     + ' . you have 45 seconds to make a move');
    alert(notPlayer.innerText + ', Please look away');
    countdown(.75);
  };
  
const playerOneStart = function(){
    createP1Captain= document.createElement('div');
       createP1Captain.setAttribute('id', 'p1Captain');
       createP1Captain.innerText = 'C';
       p1Cont.appendChild(createP1Captain)
    createP1Bomb = document.createElement('div');
       createP1Bomb.setAttribute('id', 'p1Bomb');
       createP1Bomb.innerText = 'B';
       p1Cont.appendChild(createP1Bomb)
    createP1Flag = document.createElement('div');
       createP1Flag.setAttribute('id', 'p1Flag');
       createP1Flag.innerText = 'F';
       p1Cont.appendChild(createP1Flag)
       for(i=0; i<7; i++){
           createP1Major = document.createElement('div');
           createP1Major.setAttribute('class', 'p1Major');
           createP1Major.setAttribute('id', 'p1M'+[i])
           createP1Major.innerText = 'M';
           p1Cont.appendChild(createP1Major)
       };   
};

const playerTwoStart = function(){
     createP2Captain= document.createElement('div');
        createP2Captain.setAttribute('id', 'p2Captain');
        createP2Captain.innerText = 'C';
        p2Cont.appendChild(createP2Captain)
     createP2Bomb = document.createElement('div');
        createP2Bomb.setAttribute('id', 'p2Bomb');
        createP2Bomb.innerText = 'B';
        p2Cont.appendChild(createP2Bomb)
     createP2Flag = document.createElement('div');
        createP2Flag.setAttribute('id', 'p2Flag');
        createP2Flag.innerText = 'F';
        p2Cont.appendChild(createP2Flag)
        for(i=0; i<7; i++){
            createP2Major = document.createElement('div');
            createP2Major.setAttribute('class', 'p2Major');
            createP2Major.setAttribute('id', 'p2M'+[i])
            createP2Major.innerText = 'M';
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
    p1Name.innerText = prompt('First Commander, what is your name?');
    p2Name.innerText = prompt('Second Commander, what is your name?')
    p1Name.style.margin = '0px auto 8px auto';
    p2Name.style.margin = '0px auto 8px auto';
    p1Name.style.display = 'table';
    p2Name.style.display = 'table';
    rules.style.display = 'none';
    rulesBtn.style.display = 'inline';
    reset.style.display = 'table';
};
const rulesRend = function(){
    p1Cont.style.display = 'none';
    p2Cont.style.display = 'none';
    msgEl.style.display = 'none';
    timerEl.style.display = 'none';
    boardObj.style.display = 'none';
    rules.style.display = 'table';
    rulesBtn.style.display = 'none';
    p1Name.style.display = "none";
    p2Name.style.display = "none";
    closeRulesEl.style.display = 'inline-block';
    reset.style.display = 'none';
};
const closeRules = function() {
    p1Cont.style.display = 'grid';
    p2Cont.style.display = 'grid';
    msgEl.style.display = 'table';
    timerEl.style.display = 'table';
    boardObj.style.display = 'grid';
    rules.style.display = 'none';
    rulesBtn.style.display = 'inline';
    p1Name.style.display = 'table';
    p2Name.style.display = 'table';
    reset.style.display = 'table';
}
const resetPieces = function(){
    p1Cont.appendChild(createP1Bomb);
    p1Cont.appendChild(createP1Flag);
    p1Cont.appendChild(createP1Captain);
        for(i=0; i<7; i++){
        p1Cont.appendChild(createP1Major)
    }
    p2Cont.appendChild(createP2Bomb);
    p2Cont.appendChild(createP2Flag);
    p2Cont.appendChild(createP2Captain);
        for(i=0; i<7; i++){
        p2Cont.appendChild(createP2Major)
    }
    playerOneSetup();
}
const confirmReset = function() {
    let e = confirm('Are You Sure You Want To Reset?');
    if(e === true){
        resetPieces();
    }
}

let countdownIntervalId; 
// let timerId; //push value here?

// function countdown(start) {    
//     let secondsToCount = start * 60; 
//     countdownIntervalId = setInterval(timer, 1000);
//     function timer() { 
//         const minutes = Math.floor(secondsToCount / 60);
//         let seconds = secondsToCount - minutes*60;
//         timerEl.innerHTML = ("Time Left - " + minutes + ':' + `${seconds}`.padStart(2, '0'))
//         secondsToCount = secondsToCount-1;
//         if (minutes <= 0 && seconds <= 0) {
//             clearInterval(countdownIntervalId);
//             console.log('timerOver')
//         } 
//     }
// }

// function stopCountdown(){
//     if(countdownIntervalId){
//         clearInterval(countdownIntervalId)
//     }
// }

function restartCountdown(){
   setInterval(countdown(start), 1000);
}

// // event listeners 

// event listeners 
const startGame = document.querySelector("#start");
startGame.addEventListener('click', init);
const rulesBtnEl = document.querySelector("#rulesBtn");
rulesBtnEl.addEventListener('click', rulesRend);
const closeRulesEl = document.querySelector("#close")
closeRulesEl.addEventListener('click', closeRules)
reset.addEventListener('click', confirmReset);


function move(char, space) {
    document.getElementById(char)
    document.getElementById(space).append(document.getElementById(char))
    // console.log('moved');
    //itterate over board to see if its avail - if value is open (0)
}


// render()

// document.querySelector("#clickContainer").addEventListener('click', function(e) {
//     e = e || window.event;
//     var target = e.target || e.srcElement,
//         text = target.textContent || target.innerText;   
// }, false);
document.querySelector("#clickContainer").addEventListener('click', function(e){
if(clickedEl === null && e.target === p1M2){
    clickedEl = e.target;
    }else{
        console.log(e.target.id)
       move(clickedEl.id, e.target.id)
       clickedEl = null;
       updateArray();
    }
});


// first click - cache element to clicked
// if clicked el is a value, if isnt a value, cache it. (would mean evmpy cache)
// then - 
// second click - check value of space (get inner text of clickedEl) 
// if m, udate board to whatever value is
// then render the board


// if inner text = 'letter' then = 'value' for board array


//checked to see if clicked el has an element
//if has element - 
//set piece has value

// 1) be able to restart timer - call to function
// 2) click to select a div (347-349) but then be avle to click again and move the div there
//             1a) will createo logiv for what can and cannot be selected
// 3) linking array to gameboard
// 4) logic for checking board moves avail
// 5) logic for what pieces can and cannot move
// 6) create where "dead" pieces go
// 7) create object class for pieces??? link them to div element?
// 8) all majors reset on reset button


//set id manulally
//update 

//pieces have value
//clicked el then equals null
//then call render to move the piece on teh board
//if clicked sqiare has 0, then value has 1
//1 in UI means major




//on render - do move piece, 