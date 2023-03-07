
// Define a function that starts the game
var wins = 0;
var ties = 0;
var losses = 0;

var options = ["R","P","S"]
function play() {

    var userChoice = prompt('Pick R,P, or S').toUpperCase();
if (!userChoice) return
    // if(userChoice === false){
    //     console.log('it works')
    // };
    // Ask user for their choice using a prompt
    // If user pressed Cancel, immediately end function
    // Get the computer choice by randomly selecting "r", "s", or "p"
    var random = Math.floor(Math.random()*3)
    computerChoice = options[random]
    console.log(computerChoice)
    // Alert user to computer choice using an alert

    alert('The computer chose '+computerChoice)
    // Compare user choice and computer choice
    // if choices are the same, add to the ties variable and
    if(computerChoice === userChoice){
        ties++;
        alert('You have tied')
    }
    if(userChoice ==='R' && computerChoice ==='S'){
        wins++;
        alert('You win');
    }
    if(userChoice ==='P' && computerChoice ==='R'){
        wins++;
        alert('You win');
        
    }
    if(userChoice ==='S' && computerChoice ==='P'){
        wins++;
        alert('You win');
    }
    if(computerChoice ==='R' && userChoice ==="S"){
        losses++;
        alert('You lose');
    }
    if(computerChoice ==='P' && userChoice ==="R"){
        losses++;
        alert('You lose')
    }
    if(computerChoice ==='S' && userChoice ==="P"){
        losses++;
        alert('You lose')
    }
    alert("Wins:" +wins+ "Ties: " +ties+ "Losses: "+losses)
    play();
    // alert user that it is a tie
    // if user wins, add to the wins variable and alert user that they won
    // if user losses, add to losses variable and alert user that they lost
    // alert users of their wins, losses, and ties
    // ask user to play again, if yes call function
  };
  // play the game the first time
  
  
  play();
  
  
  
  
  