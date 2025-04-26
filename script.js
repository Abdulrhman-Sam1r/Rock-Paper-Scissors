function getComputerChoice (){
    let num = Math.random();

    console.log(num);
    if(num > 0.666)
        return "Rock";
    else if (num > 0.333)
        return "Paper";
    else
        return "Scissors"
}

function getHumanChoice (){
    return prompt("Rock Paper Scissors");
}

console.log(getHumanChoice());