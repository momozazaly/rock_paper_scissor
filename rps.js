
function getcomputerchoice() {
    let num = Math.random()
    if (num <= 1/3) {
        result = "rock";
    } else if (num <= 2/3) {
        result = "paper";
    }
    else {
        result = "scissor";
    }
    return result
}

function gethumanchoice() {
    return prompt('Please enter "rock", "paper" or "scissor":', "rock")
}

function playgame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i<5; i++) {
        humanSelection = gethumanchoice();
        computerSelection = getcomputerchoice();
        playround(humanSelection, computerSelection);
    }

    function playround(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
        } else if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")) {
            console.log("You win! "+humanChoice+"beats "+computerChoice+"!");
            humanScore += 1;
        } else {
            console.log("You lose! "+computerChoice+"beats "+humanChoice+"!");
            computerScore += 1;
        }
    }
}

playgame();