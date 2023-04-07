
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
        
function game(){
    let playerSelection , computerSelection , roundResult , CorrectShape;
    gameHistory = [];
    for( let i = 0;i<5; i++ ){
        computerSelection = getComputerChoice();

        playerSelection = prompt("Choose a hand").toLowerCase();
        CorrectShape = playerSelection in ["rock","paper","scissors"];
        while(!CorrectShape){
            playerSelection = prompt("Wrong wording please choose a hand").toLowerCase();
            CorrectShape = playerSelection in ["rock","paper","scissors"];
        }
        roundResult  = playRound(playerSelection,computerSelection);
        if(roundResult === "draw"){
            console.log("Draw");
        }else{
            console.log(roundResult + " Won");
        }
        gameHistory.push(roundResult);
    }
}

game()