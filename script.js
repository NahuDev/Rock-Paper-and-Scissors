let gameHistory = [0,0,1];
let beginningTable = document.querySelector("table").cloneNode(true);

function getComputerChoice(){
    return ["rock","paper","scissors"][Math.floor(3*Math.random())]
}

function playRound( playerSelection , computerSelection ){
    if (playerSelection === computerSelection){
        return "draw";
    }
    switch(playerSelection){
        case "rock":
            if(computerSelection =="paper"){
                return "Computer";
            }else{
                return "Player";
            }
            break;
            case "paper":
                if(computerSelection =="scissors"){
                return "Computer";
            }else{
                return "Player";
            }
            break;
            case "scissors":
                if(computerSelection =="rock"){
                    return "Computer";
                }else{
                    return "Player";
                }
                break;
            }
        }
        

function play(playerSelection){
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection,computerSelection);
    let table = document.querySelector("table");
    gameHistory[2]++;
    if(roundResult == "Player"){
        gameHistory[0]++;
    }else if(roundResult == "Computer"){
        gameHistory[1]++;
    }
    let row = table.insertRow();
    let last = gameHistory.length-1;
    let rowElements = [playerSelection,computerSelection,roundResult,String(gameHistory[0]),String(gameHistory[1]),String(gameHistory[2])];
        console.log(rowElements);
    for(el of rowElements){
        let cell = row.insertCell();
        let text = document.createTextNode(el);
        cell.appendChild(text);
    }
}

function restart(){
    document.querySelector("table").replaceWith(beginningTable.cloneNode(true));
}