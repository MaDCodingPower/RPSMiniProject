


var wins = 0
var losses = 0
var ties = 0
userConfirmWindow = true



var rpsFunction = function(){

    while (userConfirmWindow === true){
        
        var userConfirm = ()=>{
            var conf = confirm("Wins: " + wins + "\nLosses: " + losses + "\nTies: " + ties + "\nClick 'OK' to play again!")
            if (conf === false){
                userConfirmWindow = false;
            }
        }

        var compChoice = ""

        var compRandomNumber = Math.random();

        var userChoice = prompt("Enter R, P, or S for rock, paper or scissors respectively");

        userChoice = userChoice.toUpperCase();

        if (userChoice !== "R" && userChoice !== "S" && userChoice !== "P"){
            alert("Please choose and type 'R', 'S', or 'P' you fucking idiot.")
            return
        }

        if (compRandomNumber < 0.34){
            compChoice == "rock"
        } else if (compRandomNumber < 0.67){
            compChoice = "paper";
        } else{
            compChoice = "scissors"
        };

        if (userChoice == null){
            alert("Come Play Next Time!")
            userConfirmWindow = false
        } else if (userChoice == "R"){
            if (compChoice == "rock"){
                alert("Opponent chose rock, it's a tie!")
                ties++
                userConfirm()
            } else if (compChoice == "paper"){
                alert("Opponent chose paper, you lose!")
                losses++
                userConfirm()
            } else {
                alert("Opponent chose scissors, you Win!")
                wins++
                userConfirm()
            }
        } else if (compChoice == "P"){
            if (compChoice == "rock"){
                alert("Opponent chose rock, you win!")
                wins++
                userConfirm()
            } else if (compChoice == "paper"){
                alert("Opponent chose paper, it's a tie!")
                ties++
                userConfirm()
            } else {
                alert("Opponent chose scissors, you lose!")
                losses++
                userConfirm()
            }
        } else {
            if (compChoice == "rock"){
                alert("Opponent chose rock, you lose!")
                losses++
                userConfirm()
            } else if(compChoice == "paper"){
                alert("Opponent chose paper, you win!")
                wins++
                userConfirm()
            } else {
                alert("Opponent chose scissors, it's a tie!")
                ties++
                userConfirm()
            }

        }
        
    }
    
    
    
}

rpsFunction();
