const closePopup = document.getElementById("popupclose");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");

const boardObj = document.querySelector("#gameBoard");
const p1Cont = document.querySelector("#pieceHolder > div.p1Container");
const p2Cont = document.querySelector("#pieceHolder > div.p2Container");

// const p1Major = document.getElementsByClassName('p1Major');
// const p1Captain = document.getElementById('p1Captain');
// const p1Flag = document.getElementById('p1Flag');
// const p1Bomb = document.querySelector("#p1Bomb");

// const p2Major = document.getElementsByClassName('p2Major');
// const p2Captain = document.getElementById('p2Captain');
// const p2Flag = document.getElementById('p2Flag');
// const p2Bomb = document.getElementById('p2Bomb');

const msgEl = document.querySelector("body > div.container > h2.msg");
const timerEl = document.querySelector("#countdown");

const p1Name = document.querySelector("#pieceHolder > h3.p1Header");
const p2Name = document.querySelector("#pieceHolder > h3.p2Header");
const rules = document.querySelector("#rules");
const reset = document.querySelector("#reset");

let startArrayP1=['c1r0', 'c2r0','c3r0','c4r0','c5r0','c1r1','c2r1','c3r1','c4r1','c5r1'];
let startArrayP2=['c1r5', 'c2r5','c3r5','c4r5','c5r5','c1r6','c2r6','c3r6','c4r6','c5r6'];


let clickedEl = null;
let targetEl = null;
let currentPlayer;
let clickedElParent;
boardEl = [
    [0, 0, 0, 0, 0, 0, 0],  // Column 0
    [0, 0, 0, 0, 0, 0, 0],  // Column 1
    [0, 0, 0, 0, 0, 0, 0],  // Column 2
    [0, 0, 0, 0, 0, 0, 0],  // Column 3
    [0, 0, 0, 0, 0, 0, 0],  // Column 4
    [0, 0, 0, 0, 0, 0, 0],  // Column 5
    [0, 0, 0, 0, 0, 0, 0],  // Column 6
  ];
  const boardTiles = boardObj.children

// //          cashed elements    //


// //          render          //


function updateBoard(){
    for(let i=0; i<boardTiles.length; i++){
        if(boardTiles[i].children.length){
            const piece = boardTiles[i].children[0].className;
            const colIdx = boardTiles[i].id[1]
            const rowIdx = boardTiles[i].id[3]
            switch (piece){
                case 'p1Major':
                    boardEl[rowIdx][colIdx] = 1
                    break;
                case 'p1Bomb':
                    boardEl[rowIdx][colIdx] = 3
                    break;
                case 'p1Captain':
                    boardEl[rowIdx][colIdx] = 2
                    break;
                case 'p1Flag':
                    boardEl[rowIdx][colIdx] = 4
                    break;
                case 'p2Major':
                    boardEl[rowIdx][colIdx] = 11
                    break;
                case 'p2Bomb':
                    boardEl[rowIdx][colIdx] = 13
                    break;
                case 'p2Captain':
                    boardEl[rowIdx][colIdx] = 12
                    break;
                case 'p2Flag':
                    boardEl[rowIdx][colIdx] = 14
                    break;       
                default:
                    boardEl[rowIdx][colIdx] = 0
                    break;      
            }
        } else if(boardTiles[i].children.length === 0){
            const colIdx = boardTiles[i].id[1]
            const rowIdx = boardTiles[i].id[3]
            boardEl[rowIdx][colIdx] = 0
        }
    }
}

// if target square is +-1 row || +-1 column, && space currently is ===0, can move
// else if target square is +-1 row && +-1 column && value is one of your pieces - no move
// else if target square is +-1 row && +-1 column && value enemy piece, compare
//             if higher value lose piece
//             if lower value, remove opp piece and take space
//             if opp bomb, lose your piece
//             if opp flag, win 
// else, not legal move


function resetGame(){
    styleGame();
    resetPieces();
    playerOneSetup();
}


// functions
function canMove(selectedPiece, targetSquare){
    console.log(selectedPiece, targetSquare)
    console.log(clickedElParent)
    const colIdx = targetSquare[1];
    const rowIdx = targetSquare[3];
    // const fromCol = clickedElParent.id[1]
    // const fromRow = clickedElParent.id[3]
    console.log(colIdx, rowIdx)
    // console.log(fromRow, fromCol)
    if(!boardEl[rowIdx][colIdx]){
        // if(selected piece square is +- 1 row || =- 1column)
        move(selectedPiece, targetSquare);
        clearHighlight();
        return true;
    }else if(currentPlayer === p1Name && pieceArrayP1.includes(selectedPiece) && 
            boardEl[rowIdx][colIdx] === 1 || boardEl[rowIdx][colIdx] === 2
            || boardEl[rowIdx][colIdx] === 4 || boardEl[rowIdx][colIdx] === 3){// add in 3 for bomb
                msgEl.innerText = 'cannot move to your same pieces square';
                clearHighlight();
                return false;
    }else if(currentPlayer === p2Name && pieceArrayP2.includes(selectedPiece) && 
            boardEl[rowIdx][colIdx] === 11 || boardEl[rowIdx][colIdx] === 12
            || boardEl[rowIdx][colIdx] === 13 || boardEl[rowIdx][colIdx] === 14){
                msgEl.innerText = 'cannot move to your same pieces square';
                clearHighlight();
                return false;
    }else if(boardEl[rowIdx][colIdx] === 3 || boardEl[rowIdx][colIdx] === 13){
            clickedElParent.removeChild(clickedEl);
                clearHighlight();
                alert('you hit a bomb!');
                return true;
    }else if(currentPlayer === p1Name && boardEl[rowIdx][colIdx] === 14){
                alert(p1Name + ' You captured ' + p2Name + "'s flag! You win");
                clearHighlight();
                //win function 
    
    // }else if(currentPlayer === p1Name && )
}
}
function playerOneSetup(){
    // countdown(2);
    currentPlayer = p1Name;
    notPlayer = p2Name;
    msgEl.innerText = ("Current Player is: " + currentPlayer.innerText 
                    + ' --- You have two minutes to setup your pieces');       
                        //   playerTwoSetup();
      alert(notPlayer.innerText + ', Please look away')
};
function clearHighlight(){
    clickedEl.style.opacity = 1;
    clickedEl = null;
    targetEl = null;
}

function playerTwoSetup(){
    stopCountdown();
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
    currentPlayer = p1Name;
}
function changePlayer() {
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
    stopCountdown();
    countdown(.75);
    clickedEl = null;
    targetEl = null;
  };
  
function playerOneStart(){
    createP1Captain= document.createElement('div');
       createP1Captain.setAttribute('id', 'p1Captain');
       createP1Captain.setAttribute('class', 'p1Captain')
       createP1Captain.innerText = 'C';
       p1Cont.appendChild(createP1Captain)
    createP1Bomb = document.createElement('div');
       createP1Bomb.setAttribute('id', 'p1Bomb');
       createP1Bomb.setAttribute('class', 'p1Bomb');
       createP1Bomb.innerText = 'B';
       p1Cont.appendChild(createP1Bomb)
    createP1Flag = document.createElement('div');
       createP1Flag.setAttribute('id', 'p1Flag');
       createP1Flag.setAttribute('class', 'p1Flag');
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

function playerTwoStart(){
     createP2Captain= document.createElement('div');
        createP2Captain.setAttribute('id', 'p2Captain');
        createP2Captain.setAttribute('class', 'p2Captain');
        createP2Captain.innerText = 'C';
        p2Cont.appendChild(createP2Captain)
     createP2Bomb = document.createElement('div');
        createP2Bomb.setAttribute('id', 'p2Bomb');
        createP2Bomb.setAttribute('class', 'p2Bomb');
        createP2Bomb.innerText = 'B';
        p2Cont.appendChild(createP2Bomb)
     createP2Flag = document.createElement('div');
        createP2Flag.setAttribute('id', 'p2Flag');
        createP2Flag.setAttribute('class', 'p2Flag');
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
function styleGame(){
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
function rulesRend(){
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
function closeRules() {
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
function resetPieces(){
    // for(i=0; i<boardTiles.length; i++){
    //     boardObj.removeChild(document.querySelector('.p1Major'));
    //     boardObj.removeChild(document.querySelector('#p1Flag'));
    //     boardObj.removeChild(document.querySelector('#p1Bomb'));
    //     boardObj.removeChild(document.querySelector('#p1Captain'));
    //     boardObj.removeChild(document.querySelector('.p2Major'));
    //     boardObj.removeChild(document.querySelector('#p2Flag'));
    //     boardObj.removeChild(document.querySelector('#p2Bomb'));
    //     boardObj.removeChild(document.querySelector('#p2Captain'));
    // }
    
    p1Cont.appendChild(createP1Bomb);
    p1Cont.appendChild(createP1Flag);
    p1Cont.appendChild(createP1Captain);
    for(i=0; i<7; i++){
        p1Cont.appendChild(document.querySelector("#p1M"+[i]))
      } 
    p2Cont.appendChild(createP2Bomb);
    p2Cont.appendChild(createP2Flag);
    p2Cont.appendChild(createP2Captain);
    for(i=0; i<7; i++){
        p2Cont.appendChild(document.querySelector("#p2M"+[i]))
      } 
    playerOneSetup();
}
function confirmReset() {
    let e = confirm('Are You Sure You Want To Reset?');
    if(e === true){
        stopCountdown();
        resetPieces();
    }
}

let countdownIntervalId; 
// let timerId; //push value here?

function countdown(start) {    
    let secondsToCount = start * 60; 
    countdownIntervalId = setInterval(timer, 1000);
    function timer() { 
        const minutes = Math.floor(secondsToCount / 60);
        let seconds = secondsToCount - minutes*60;
        timerEl.innerHTML = ("Time Left - " + minutes + ':' + `${seconds}`.padStart(2, '0'))
        secondsToCount = secondsToCount-1;
        if (minutes <= 0 && seconds <= 0) {
            clearInterval(countdownIntervalId);
            console.log('timerOver')
        } 
    }
}

function stopCountdown(){
    if(countdownIntervalId){
        clearInterval(countdownIntervalId)
    }
}

function restartCountdown(){
   setInterval(countdown(start), 1000);
}
function move(char, space) {
    if(space === 'c0r3' || space === 'c1r3' || space === 'c5r3' || space === 'c6r3'){
        msgEl.innerText = 'You cannot move into the water';
        // setTimeout(function(msg){
        //     popup thing here
        // })
        clickedEl.style.opacity = 1;
        clickedEl = null;
    }else if(space ===  'clickContainer' || space === 'pieceHolder' || space === 'gameBoard'){
        msgEl.innerText = 'You must move the piece inside the board';   
        clickedEl.style.opacity = 1;
        clickedEl = null;

        }else{
        document.getElementById(char);
        document.getElementById(space).append(document.getElementById(char));

    }
};
 
function moveAfterStart(selectedPiece, targetSquare){
    if(targetSquare === 'c0r3' || targetSquare === 'c1r3' || targetSquare === 'c5r3' || targetSquare === 'c6r3'){
        msgEl.innerText = 'You cannot move into the water';
        // setTimeout(function(msg){
        //     popup thing here
        // })
        return false;
    }else if(targetSquare ===  'clickContainer' || targetSquare === 'pieceHolder' || targetSquare === 'gameBoard'){
        msgEl.innerText = 'You must move the piece inside the board';   
        return false;
    }else if(selectedPiece ==='p1Bomb' || selectedPiece ==='p1Flag' || selectedPiece ==='p2Bomb' || selectedPiece ==='p2Flag'){
        msgEl.innerText = 'cannot move a bomb of flag once placed';   
        return false;
    }else{
        const colIdx = targetSquare[1];
        const rowIdx = targetSquare[3];
        const fromCol = clickedElParent.id[1]
        const fromRow = clickedElParent.id[3]
        console.log(colIdx, rowIdx)
        console.log(fromRow, fromCol)
        // if(targetSquare === rowIdx +1 || targetSquare === rowIdx -1
        //     || targetSquare === colIdx +1 || targetSquare === colIdx -1){
                if(!boardEl[rowIdx][colIdx]){
                    // if(selected piece square is +- 1 row || =- 1column)
                    move(selectedPiece, targetSquare);
                    clearHighlight();
                    clickedEl = null;
                    return true;
                }else if(currentPlayer === p1Name && pieceArrayP1.includes(selectedPiece) && 
                        (boardEl[rowIdx][colIdx] === 1 || boardEl[rowIdx][colIdx] === 2
                        || boardEl[rowIdx][colIdx] === 4 || boardEl[rowIdx][colIdx] === 3)){// add in 3 for bomb
                            msgEl.innerText = 'cannot move to your same pieces square';
                            return false;
                }else if(currentPlayer === p1Name && pieceArrayP1.includes(selectedPiece) 
                        && p1MajorArray.includes(selectedPiece) && boardEl[rowIdx][colIdx] === 11){
                            clickedElParent.removeChild(clickedEl);
                            targetElParent.removeChild(targetSquare.firstElementChild)
                            clearHighlight();
                            alert('Same piece');
                            return true;  
                }else if(currentPlayer === p1Name && pieceArrayP1.includes(selectedPiece) && 
                        boardEl[rowIdx][colIdx] === 13){// add in 3 for bomb
                            clickedElParent.removeChild(clickedEl);
                            clearHighlight();
                            alert('you hit a bomb!');
                            return true;  
                }else if(currentPlayer === p1Name && boardEl[rowIdx][colIdx] === 14){
                    alert('You captured your opponents flag, you win!');
                            clickedEl = null;
                            clearHighlight();
                            return true;
                            //win function           
                }else if(currentPlayer === p2Name && pieceArrayP2.includes(selectedPiece) && 
                        boardEl[rowIdx][colIdx] === 11 || boardEl[rowIdx][colIdx] === 12
                        || boardEl[rowIdx][colIdx] === 13 || boardEl[rowIdx][colIdx] === 14){
                            msgEl.innerText = 'cannot move to your same pieces square';
                            return false;
                }else if(currentPlayer === p2Name && pieceArrayP2.includes(selectedPiece) && 
                        boardEl[rowIdx][colIdx] === 3){// add in 3 for bomb
                            clickedElParent.removeChild(clickedEl);
                            clearHighlight();
                            alert('you hit a bomb!');
                            return true;         
                }else if(currentPlayer === p2Name && boardEl[rowIdx][colIdx] === 4){
                            alert('You captured your opponents flag, you win!');
                            clearHighlight();
                            return true;
                            //win function 
                }  
            // } else{
            //     msgEl.innerText = 'Can only move one space in one direction'
            //     return false;
            // }
         } // }else if(currentPlayer === p1Name && 
};
// // event listeners 

const startGame = document.querySelector("#start");
startGame.addEventListener('click', init);
const rulesBtnEl = document.querySelector("#rulesBtn");
rulesBtnEl.addEventListener('click', rulesRend);
const closeRulesEl = document.querySelector("#close")
closeRulesEl.addEventListener('click', closeRules)
reset.addEventListener('click', confirmReset);

document.querySelector("#clickContainer").addEventListener('click', function(e){
    if(currentPlayer === p1Name){
        if(clickedEl === null && pieceArrayP1.includes(e.target.id)){
        clickedEl = e.target;
        clickedElParent = clickedEl.parentElement;
        clickedEl.style.opacity = .5;
        } else{
                 if(p1Cont.childElementCount === 0){ 
                    targetEl = e.target.id
                    targetElParent = e.target.parentElement
                    challengeSquare = e.target;
                        if(moveAfterStart(clickedEl.id, targetEl) === true){
                            if(p2Cont.childElementCount !== 0){
                                playerTwoSetup();
                                updateBoard();
                                clearHighlight();
                            } else if(p1Cont.childElementCount === 0){
                                changePlayer();
                                updateBoard();

                                }
                        }else{
                            clearHighlight();
                        }        
                } else if(p1Cont.childElementCount > 0 && startArrayP1.includes(e.target.id)){
                        targetEl = e.target.id;
                        targetElParent = e.target.parentElement
                        challengeSquare = e.target;
                        if(canMove(clickedEl.id, targetEl) === true){//returned from the can Move function - if true,run the next line of code, if false, clear cache, start over.
                                updateBoard();
                                clickedEl = null;
                                    if(p1Cont.childElementCount === 0){
                                        // clearHighlight();
                                        clickedEl = null;
                                        targetEl = null;
                                        playerTwoSetup();
                                        updateBoard();
                                        }
                        }else{
                            clearHighlight();
                        }        
                            }
                        }
        }else{
            if(clickedEl === null && pieceArrayP2.includes(e.target.id)){
                clickedEl = e.target;
                clickedElParent = clickedEl.parentElement;
                clickedEl.style.opacity = .5;
                } else{
                    targetEl = e.target.id;
                    targetElParent = e.target.parentElement;
                    challengeSquare = e.target;
                    if(p2Cont.childElementCount === 0){ 
                        if(moveAfterStart(clickedEl.id, targetEl) === true){
                            updateBoard();
                            if(p1Cont.childElementCount === 0){
                                targetEl = null;
                                clickedEl = null;
                                changePlayer();
                                updateBoard();
                                } 
                        }else{
                                clearHighlight();
                            }    
                            

                        }else if(p2Cont.childElementCount > 0 && startArrayP2.includes(e.target.id)){
                            if(canMove(clickedEl.id, targetEl) === true){//working on this
                                updateBoard();
                                clickedEl = null;
                                targetEl = null;
                                    if(p2Cont.childElementCount === 0){
                                        // clearHighlight();
                                        targetEl = null
                                        clickedEl = null;
                                        changePlayer();
                                        updateBoard();
                                    }
                            }else{
                                clearHighlight();
                            }  
                        }
                    }

                }
    });

pieceArrayP1= ['p1M1', 'p1M2', 'p1M3', 'p1M4', 'p1M5', 'p1M6', 'p1M0', 'p1Bomb', 'p1Flag', 'p1Captain'];
pieceArrayP2= ['p2M1', 'p2M2', 'p2M3', 'p2M4', 'p2M5', 'p2M6', 'p2M0', 'p2Bomb', 'p2Flag', 'p2Captain'];
startArrayP1=['c1r0', 'c2r0','c3r0','c4r0','c5r0','c1r1','c2r1','c3r1','c4r1','c5r1']
startArrayP2=['c1r5', 'c2r5','c3r5','c4r5','c5r5','c1r6','c2r6','c3r6','c4r6','c5r6']
p1MajorArray= ['p1M1', 'p1M2', 'p1M3', 'p1M4', 'p1M5', 'p1M6', 'p1M0']
p2MajorArray= ['p2M1', 'p2M2', 'p2M3', 'p2M4', 'p2M5', 'p2M6', 'p2M0']
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


//update 

//pieces have value
//clicked el then equals null
//then call render to move the piece on teh board
//if clicked sqiare has 0, then value has 1



// remember, you have access to your click event (whatever the user clicked)


// and you have access to the board array (what’s currently recorded on the board)

//on render - do move piece, 





// document.querySelector("#clickContainer").addEventListener('click', function(e){
//     if(currentPlayer === p1Name){
//         if(clickedEl === null && pieceArrayP1.includes(e.target.id)){
//                 clickedEl = e.target;
//                 clickedElParent = clickedEl.parentElement;
//                 clickedEl.style.opacity = .5
//             }else{
//                     if(p1Cont.childElementCount > 0 && startArrayP1.includes(e.target.id)){
//                         targetEl = e.target.id;
//                         canMove(clickedEl.id, targetEl);//working on this
//                         updateBoard();
//                         clearHighlight();
//                             if(p1Cont.childElementCount === 0){ //wont need this for p2
//                                         clearHighlight();
//                                         playerTwoSetup();
//                                         updateBoard();
//                             }else if(p1Cont.childElementCount > 0 && startArrayP1.includes(e.target.id) !==true){
//                                 clickedEl.style.opacity = 1;
//                                 clickedEl = null;
//                                 updateBoard();
//                                 msgEl.innerText = 'must move in the beginning squares highlighted'
//                             }else if(p1Cont.childElementCount === 0){ 
//                                 targetEl = e.target.id
//                                 moveAfterStart(clickedEl.id, targetEl);//potentially weird errors, but still fires
//                                 updateBoard();
//                                 clearHighlight();
//                                 changePlayer();}
            
//                     }
//                 }
//     }else if(currentPlayer === p2Name) {//player two turn
//                 if(clickedEl === null && pieceArrayP2.includes(e.target.id)){
//                     clickedEl = e.target;
//                     clickedElParent = clickedEl.parentElement;
//                     clickedEl.style.opacity = .5
//                     if(p2Cont.childElementCount > 0 && startArrayP2.includes(e.target.id) !== true){ 
//                         clickedEl.style.opacity = 1;
//                         clickedEl = null;
//                         updateBoard();
//                         msgEl.innerText = 'must move in the beginning squares highlighted'
//                     }else if(p2Cont.childElementCount > 0 && startArrayP2.includes(e.target.id)){
//                             targetEl = e.target.id;
//                             canMove(clickedEl.id, targetEl);//working on this
//                             updateBoard();
//                             clearHighlight();
//                                 if(p2Cont.childElementCount === 0){ //wont need this for p2
//                                     clearHighlight();
//                                     changePlayer();
//                                     updateBoard();
//                                 }
//                     }else if(p2Cont.childElementCount === 0){ 
//                         targetEl = e.target.id
//                         moveAfterStart(clickedEl.id, targetEl);//potentially weird errors, but still fires
//                         updateBoard();
//                         clearHighlight();
//                         changePlayer();
//                                 }
//                 }else{
//                     clickedEl.style.opacity = .5;
//                     clickedEl = null;
//                     msgEl.innerText = 'You must select one of your pieces'
//                 }
//     }
// });