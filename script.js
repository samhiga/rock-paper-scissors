//create an prompt for users to input their choice
var userWin = 0;
var computerWin = 0;
var tie = 0;
var choices = ["R","P","S"];

function userPrompt(){
    var userChoice = prompt("Please enter Rock (R), Paper (P), Scissors (S)","");
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    alert("Computer chose: " + computerChoice);

    if (userChoice === computerChoice) {
        tie++;
        alert("It's a tie!");
    }

    else if (userChoice === "R" && computerChoice === "S" ||
            userChoice === "P" && computerChoice === "R" ||
            userChoice === "S" && computerChoice === "P") {
                alert("You Win!")
                userWin++;
            }
            else {
                alert("You Lose!");
                computerWin++;
            }
            alert("User wins: " + userWin + "\nComputer Wins: " + computerWin + "\nTies: " + tie)
        }