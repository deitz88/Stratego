// - - - - Constants - - - - //

const closePopup = document.getElementById("popupclose");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const boardObj = document.querySelector("#gameBoard");
const p1Cont = document.querySelector("#pieceHolder > div.p1Container");
const p2Cont = document.querySelector("#pieceHolder > div.p2Container");
const msgEl = document.querySelector("body > div.container > h2.msg");
const subMsg = document.querySelector("body > div.container > h3");
const timerEl = document.querySelector("#countdown");
const p1Name = document.querySelector("#pieceHolder > h3.p1Header");
const p2Name = document.querySelector("#pieceHolder > h3.p2Header");
const rules = document.querySelector("#rules");
const reset = document.querySelector("#reset");
const startGame = document.querySelector("#start");
const rulesBtnEl = document.querySelector("#rulesBtn");
const closeRulesEl = document.querySelector("#close")
const pieceArrayP1= ['p1M1', 'p1M2', 'p1M3', 'p1M4', 'p1M5', 'p1M6', 'p1M0', 'p1Bomb', 'p1Flag', 'p1Captain'];
const pieceArrayP2= ['p2M1', 'p2M2', 'p2M3', 'p2M4', 'p2M5', 'p2M6', 'p2M0', 'p2Bomb', 'p2Flag', 'p2Captain'];
const startArrayP1=['c1r0', 'c2r0','c3r0','c4r0','c5r0','c1r1','c2r1','c3r1','c4r1','c5r1']
const startArrayP2=['c1r5', 'c2r5','c3r5','c4r5','c5r5','c1r6','c2r6','c3r6','c4r6','c5r6']
const p1MajorArray= ['p1M1', 'p1M2', 'p1M3', 'p1M4', 'p1M5', 'p1M6', 'p1M0']
const p2MajorArray= ['p2M1', 'p2M2', 'p2M3', 'p2M4', 'p2M5', 'p2M6', 'p2M0']
const p1Cap = ['p1Captain']
const p2Cap = ['p2Captain']


let clickedEl = null;
let targetEl = null;
let currentPlayer;
let clickedElParent;
let countdownIntervalId; 

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


// - - - - Functions - - - - //
function updateBoard(){
    checkTie();
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
function checkTie(){
}

function p1Hide(){
    for(i=0; i<boardTiles.length; i++){ //majors
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '1'){
                if(boardTiles[i].firstElementChild.id[2] === 'M'){
                    boardTiles[i].firstElementChild.innerText = '?';
                }
                
            }
        }
    }
    for(i=0; i<boardTiles.length; i++){ //captain
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '1'){
                if(boardTiles[i].firstElementChild.id[2] === 'C'){
                    boardTiles[i].firstElementChild.innerText = '?';
                }
                
            }
        }
    }
    for(i=0; i<boardTiles.length; i++){ //bomb
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '1'){
                if(boardTiles[i].firstElementChild.id[2] === 'B'){
                    boardTiles[i].firstElementChild.innerText = '?';
                }
                
            }
        }
    }
    for(i=0; i<boardTiles.length; i++){ //flag
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '1'){
                if(boardTiles[i].firstElementChild.id[2] === 'F'){
                    boardTiles[i].firstElementChild.innerText = '?';
                }
                
            }
        }
    }
}
function p2Hide(){
    for(i=0; i<boardTiles.length; i++){ //majors
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '2'){
                if(boardTiles[i].firstElementChild.id[2] === 'M'){
                    boardTiles[i].firstElementChild.innerText = '?';
                }
                
            }
        }
    }
    for(i=0; i<boardTiles.length; i++){ //captain
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '2'){
                if(boardTiles[i].firstElementChild.id[2] === 'C'){
                    boardTiles[i].firstElementChild.innerText = '?';
                }
                
            }
        }
    }
    for(i=0; i<boardTiles.length; i++){ //bomb
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '2'){
                if(boardTiles[i].firstElementChild.id[2] === 'B'){
                    boardTiles[i].firstElementChild.innerText = '?';
                }
                
            }
        }
    }
    for(i=0; i<boardTiles.length; i++){ //flag
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '2'){
                if(boardTiles[i].firstElementChild.id[2] === 'F'){
                    boardTiles[i].firstElementChild.innerText = '?';
                }
                
            }
        }
    }
}

function p1Show(){
    for(i=0; i<boardTiles.length; i++){ //majors
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '1'){
                if(boardTiles[i].firstElementChild.id[2] === 'M'){
                    boardTiles[i].firstElementChild.innerText = 'M';
                }
                
            }
        }
    }
    for(i=0; i<boardTiles.length; i++){ //captain
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '1'){
                if(boardTiles[i].firstElementChild.id[2] === 'C'){
                    boardTiles[i].firstElementChild.innerText = 'C';
                }
                
            }
        }
    }
    for(i=0; i<boardTiles.length; i++){ //bomb
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '1'){
                if(boardTiles[i].firstElementChild.id[2] === 'B'){
                    boardTiles[i].firstElementChild.innerText = 'B';
                }
                
            }
        }
    }
    for(i=0; i<boardTiles.length; i++){ //flag
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '1'){
                if(boardTiles[i].firstElementChild.id[2] === 'F'){
                    boardTiles[i].firstElementChild.innerText = 'F';
                }
                
            }
        }
    }
    p2Hide();
    }

function p2Show(){
    for(i=0; i<boardTiles.length; i++){ //majors
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '2'){
                if(boardTiles[i].firstElementChild.id[2] === 'M'){
                    boardTiles[i].firstElementChild.innerText = 'M';
                }
                
            }
        }
    }
    for(i=0; i<boardTiles.length; i++){ //captain
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '2'){
                if(boardTiles[i].firstElementChild.id[2] === 'C'){
                    boardTiles[i].firstElementChild.innerText = 'C';
                }
                
            }
        }
    }
    for(i=0; i<boardTiles.length; i++){ //bomb
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '2'){
                if(boardTiles[i].firstElementChild.id[2] === 'B'){
                    boardTiles[i].firstElementChild.innerText = 'B';
                }
                
            }
        }
    }
    for(i=0; i<boardTiles.length; i++){ //flag
        if(boardTiles[i].childElementCount > 0){
            if(boardTiles[i].firstElementChild.id[1] === '2'){
                if(boardTiles[i].firstElementChild.id[2] === 'F'){
                    boardTiles[i].firstElementChild.innerText = 'F';
                }
                
            }
        }
    }
    p1Hide();
    }

function resetGame(){
    styleGame();
    resetPieces();
    playerOneSetup();
}

function canMove(selectedPiece, targetSquare){
    const colIdx = targetSquare[1];
    const rowIdx = targetSquare[3];
    if(!boardEl[rowIdx][colIdx]){
        move(selectedPiece, targetSquare);
        clearHighlight();
        return true;
    }else if(currentPlayer === p1Name && pieceArrayP1.includes(selectedPiece) && 
            boardEl[rowIdx][colIdx] === 1 || boardEl[rowIdx][colIdx] === 2
            || boardEl[rowIdx][colIdx] === 4 || boardEl[rowIdx][colIdx] === 3){// add in 3 for bomb
                subMsg.innerText = 'cannot move to your same pieces square';
                clearHighlight();
                return false;
    }else if(currentPlayer === p2Name && pieceArrayP2.includes(selectedPiece) && 
            boardEl[rowIdx][colIdx] === 11 || boardEl[rowIdx][colIdx] === 12
            || boardEl[rowIdx][colIdx] === 13 || boardEl[rowIdx][colIdx] === 14){
                subMsg.innerText = 'cannot move to your same pieces square';
                clearHighlight();
                return false;
    }else if(boardEl[rowIdx][colIdx] === 3 || boardEl[rowIdx][colIdx] === 13){
            clickedElParent.removeChild(clickedEl);
                clearHighlight();
                alert('you hit a bomb!');
                return true;
    }else if(currentPlayer === p1Name && boardEl[rowIdx][colIdx] === 14){
                alert('You Won!');
                clearHighlight();

}
}
function playerOneSetup(){
    countdown(2);

   document.querySelector('#p2M0').innerText = '?';
   document.querySelector('#p2M1').innerText = '?';
   document.querySelector('#p2M2').innerText = '?';
   document.querySelector('#p2M3').innerText = '?';
   document.querySelector('#p2M4').innerText = '?';
   document.querySelector('#p2M5').innerText = '?';
   document.querySelector('#p2M6').innerText = '?';
   document.querySelector('#p2Captain').innerText = '?';
   document.querySelector('#p2Bomb').innerText = '?';
   document.querySelector('#p2Flag').innerText = '?';

    currentPlayer = p1Name;
    notPlayer = p2Name;
    msgEl.innerText = ("Current Player is: " + currentPlayer.innerText 
                    + ' --- You have two minutes to setup your pieces');       
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
    p2Show();
   document.querySelector('#p2M0').innerText = 'M';
   document.querySelector('#p2M1').innerText = 'M';
   document.querySelector('#p2M2').innerText = 'M';
   document.querySelector('#p2M3').innerText = 'M';
   document.querySelector('#p2M4').innerText = 'M';
   document.querySelector('#p2M5').innerText = 'M';
   document.querySelector('#p2M6').innerText = 'M';
   document.querySelector('#p2Captain').innerText = 'C';
   document.querySelector('#p2Bomb').innerText = 'B';
   document.querySelector('#p2Flag').innerText = 'F';
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
    p1Show();
}
function changePlayer() {
    if (currentPlayer === p1Name) {
      currentPlayer = p2Name;
      notPlayer = p1Name;
      p2Show();
    } else {
      currentPlayer = p1Name;
      notPlayer = p2Name;
      p1Show();
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
    subMsg.innerText = "Good Luck"
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
    timerEl.style.display = 'none';
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
    subMsg.style.display = 'table';
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
    subMsg.style.display = 'none';

};
function win(){
    p1Cont.style.display = 'none';
    p2Cont.style.display = 'none';
    msgEl.style.display = 'table';
    timerEl.style.display = 'none';
    boardObj.style.display = 'none';
    rules.style.display = 'none';
    rulesBtn.style.display = 'none';
    p1Name.style.display = "none";
    p2Name.style.display = "none";
    closeRulesEl.style.display = 'inline-block';
    reset.style.display = 'table';
    subMsg.style.display = 'table';
    msgEl.innerText = 'Congradulations on your victory,'
    subMsg.innerText = 'Play again? .....';

}
function closeRules() {
    p1Cont.style.display = 'grid';
    p2Cont.style.display = 'grid';
    msgEl.style.display = 'table';
    timerEl.style.display = 'none';
    boardObj.style.display = 'grid';
    rules.style.display = 'none';
    rulesBtn.style.display = 'inline';
    p1Name.style.display = 'table';
    p2Name.style.display = 'table';
    reset.style.display = 'table';
    subMsg.style.display = 'table';

}
function resetPieces(){
    
    for(let i=0; i<boardTiles.length; i++){
        if(boardTiles[i].childElementCount > 0){
            boardTiles[i].removeChild(boardTiles[i].firstElementChild)
        }
    }
    for(let i=0; i<13; i++){
        if(p1Cont.childElementCount > 0){
            p1Cont.removeChild(p1Cont.firstElementChild)
        }
    }
    for(let i=0; i<13; i++){
        if(p2Cont.childElementCount > 0){
            p2Cont.removeChild(p2Cont.firstElementChild)
        }
    }
    clickedElParent = null;
    targetEl = null;
    init();
}
function confirmReset() {
    let e = confirm('Are You Sure You Want To Reset?');
    if(e === true){
        stopCountdown();
        resetPieces();
    }
}

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
    console.log(targetEl)
    if(targetSquare === 'c0r3' || targetSquare === 'c1r3' || targetSquare === 'c5r3' || targetSquare === 'c6r3'){
        subMsg.innerText = 'You cannot move into the water';
        return false;
    }else if(targetSquare ===  'clickContainer' || targetSquare === 'pieceHolder' || targetSquare === 'gameBoard'){
        subMsg.innerText = 'You must move the piece inside the board';   
        return false;
    }else if(selectedPiece ==='p1Bomb' || selectedPiece ==='p1Flag' || selectedPiece ==='p2Bomb' || selectedPiece ==='p2Flag'){
        subMsg.innerText = 'cannot move a bomb of flag once placed';   
        return false;
    }else{
        const colIdx = targetSquare[1];
        const rowIdx = targetSquare[3];
        const fromCol = clickedElParent.id[1]
        const fromRow = clickedElParent.id[3]
        console.log(colIdx, rowIdx)
        console.log(fromRow, fromCol)
                if(!boardEl[rowIdx][colIdx]){
                    move(selectedPiece, targetSquare);
                    clearHighlight();
                    clickedEl = null;
                    return true;
                }else if(currentPlayer === p1Name && pieceArrayP1.includes(selectedPiece) && 
                        (boardEl[rowIdx][colIdx] === 1 || boardEl[rowIdx][colIdx] === 2
                        || boardEl[rowIdx][colIdx] === 4 || boardEl[rowIdx][colIdx] === 3)){// add in 3 for bomb
                            subMsg.innerText = 'cannot move to your same pieces square';
                            return false;
                }else if(currentPlayer === p1Name && pieceArrayP1.includes(selectedPiece) 
                        && p1MajorArray.includes(selectedPiece) && boardEl[rowIdx][colIdx] === 12){
                            clickedElParent.removeChild(clickedEl);
                            clearHighlight();
                            subMsg.innerText = 'Oooooo not a nice guy, you lost your piece!';
                            return true;
                }else if(currentPlayer === p1Name && pieceArrayP1.includes(selectedPiece) 
                        && p1MajorArray.includes(selectedPiece) && boardEl[rowIdx][colIdx] === 11){
                            clickedElParent.removeChild(clickedEl);
                            document.getElementById(targetEl).removeChild(document.getElementById(targetEl).firstChild)
                            clearHighlight();
                            subMsg.innerText = 'Same piece... both die....shame';
                            return true;
                }else if(currentPlayer === p1Name && pieceArrayP1.includes(selectedPiece) 
                        && p1Cap.includes(selectedPiece) && boardEl[rowIdx][colIdx] === 12){
                            clickedElParent.removeChild(clickedEl);
                            document.getElementById(targetEl).removeChild(document.getElementById(targetEl).firstChild)
                            clearHighlight();
                            subMsg.innerText = 'Same piece... both die....shame';
                            return true; 
                }else if(currentPlayer === p1Name && pieceArrayP1.includes(selectedPiece) 
                        && p1Cap.includes(selectedPiece) && boardEl[rowIdx][colIdx] === 11){
                            document.getElementById(targetEl).removeChild(document.getElementById(targetEl).firstChild)
                            move(selectedPiece, targetSquare);
                            clearHighlight();
                            subMsg.innerText = 'You got his piece! Good work, Commander';
                            return true;             
                }else if(currentPlayer === p1Name && pieceArrayP1.includes(selectedPiece) && 
                        boardEl[rowIdx][colIdx] === 13){// add in 3 for bomb
                            clickedElParent.removeChild(clickedEl);
                            clearHighlight();
                            subMsg.innerText = 'BOOOOOM!!!! ......you hit a bomb';
                            return true;  
                }else if(currentPlayer === p1Name && boardEl[rowIdx][colIdx] === 14){
                            alert('You captured your opponents flag, you win!');
                            win(); 
                }else if(currentPlayer === p2Name && pieceArrayP2.includes(selectedPiece) && 
                        boardEl[rowIdx][colIdx] === 11 || boardEl[rowIdx][colIdx] === 12
                        || boardEl[rowIdx][colIdx] === 13 || boardEl[rowIdx][colIdx] === 14){
                            subMsg.innerText = 'cannot move to your same pieces square';
                            return false;
                }else if(currentPlayer === p2Name && pieceArrayP2.includes(selectedPiece) 
                        && p2MajorArray.includes(selectedPiece) && boardEl[rowIdx][colIdx] === 2){
                            clickedElParent.removeChild(clickedEl);
                            clearHighlight();
                            subMsg.innerText = 'Oooooo not a nice guy, you lost your piece!';
                            return true;
                }else if(currentPlayer === p2Name && pieceArrayP2.includes(selectedPiece) 
                        && p2MajorArray.includes(selectedPiece) && boardEl[rowIdx][colIdx] === 1){
                            clickedElParent.removeChild(clickedEl);
                            document.getElementById(targetEl).removeChild(document.getElementById(targetEl).firstChild)
                            clearHighlight();
                            subMsg.innerText = 'Same piece... both die....shame';
                            return true;
                }else if(currentPlayer === p2Name && pieceArrayP2.includes(selectedPiece) 
                        && p2Cap.includes(selectedPiece) && boardEl[rowIdx][colIdx] === 2){
                            clickedElParent.removeChild(clickedEl);
                            document.getElementById(targetEl).removeChild(document.getElementById(targetEl).firstChild)
                            clearHighlight();
                            subMsg.innerText = 'Same piece... both die....shame';
                            return true; 
                }else if(currentPlayer === p2Name && pieceArrayP2.includes(selectedPiece) 
                        && p2Cap.includes(selectedPiece) && boardEl[rowIdx][colIdx] === 1){
                            document.getElementById(targetEl).removeChild(document.getElementById(targetEl).firstChild)
                            move(selectedPiece, targetSquare);
                            clearHighlight();
                            subMsg.innerText = 'You got his piece! Good work, Commander';
                            return true;
                }else if(currentPlayer === p2Name && pieceArrayP2.includes(selectedPiece) && 
                        boardEl[rowIdx][colIdx] === 3){
                            clickedElParent.removeChild(clickedEl);
                            clearHighlight();
                            subMsg.innerText = 'BOOOOOM!!!! ......you hit a bomb';
                            return true;         
                }else if(currentPlayer === p2Name && boardEl[rowIdx][colIdx] === 4){
                            alert('You captured your opponents flag, you win!');
                            win();
                }  
         } 
};

// - - - - Event Listeners - - - - //
startGame.addEventListener('click', init);
rulesBtnEl.addEventListener('click', rulesRend);
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
                        if(canMove(clickedEl.id, targetEl) === true){
                                updateBoard();
                                clickedEl = null;
                                    if(p1Cont.childElementCount === 0){
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
                            if(canMove(clickedEl.id, targetEl) === true){
                                updateBoard();
                                clickedEl = null;
                                targetEl = null;
                                    if(p2Cont.childElementCount === 0){
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