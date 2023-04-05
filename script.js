

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