function getComputerChoice (){
    let num = Math.random();

    if(num > 0.666)
        return "rock";
    else if (num > 0.333)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice (){
    return prompt("Rock Paper Scissors");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    console.log("Human score: "+humanScore+" | Computer score: "+computerScore)
    console.log("Round"+round);
    console.log("Computer Choice:"+computerChoice);
    console.log("Human Choice:"+humanChoice);

    round++;
    if(humanChoice == computerChoice)
        return console.log("Tie!");
    else if (humanChoice == "rock" &&  computerChoice == "paper"){
        computerScore++;
        return console.log("You lose! Paper beats Rock");
    }
    else if (humanChoice == "rock" &&  computerChoice == "scissors"){
        humanScore++;
        return console.log("You win! Rock beats Scissors");
    }
    else if (humanChoice == "paper" &&  computerChoice == "rock"){
        humanScore++;
        return console.log("You win! Paper beats Rock");
    }
    else if (humanChoice == "paper" &&  computerChoice == "scissors"){
        computerScore++;
        return console.log("You lose! Scissors beats Paper");
    }
    else if (humanChoice == "scissors" &&  computerChoice == "rock"){
        computerScore++;
        return console.log("You lose! Rock beats Scissors");
    }
    else if (humanChoice == "scissors" &&  computerChoice == "paper"){
        humanScore++;
        return console.log("You win! Scissors beats Paper");
    }
}

function playGame(){
    for(let i =0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore > computerScore)
        console.log("Winner Winner Chicken dinner!");
    else if(humanScore == computerScore)
        console.log("Game ended. No winner!");
    else
        console.log("Hard Luck!");
    
}

let round = 1;
let computerScore = 0;
let humanScore = 0;

playGame();