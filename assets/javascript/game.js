//Computer array to choose from
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//variables
var wins = 0;
var losses = 0;
// total attemps
var guesses = 9;
var guessesLeft = 9;
// var for letters user has choosen and bring to an array
var guessedLetters = [];
// where we will safe the letter randomly chose by computer. 
var letterToGuess = null;

//computer choose a letter randomly. 
function computerRandomLetterChoice(){
    letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(letterToGuess);
    };
//call the first letter to guess
computerRandomLetterChoice();

function guessesToGo(){
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    };

//call the first guesses to go    
guessesToGo();

function guessesLettersStrings(){
    //this will print the array guessedLetters separated by a coma on the guesses html element. 
    document.getElementById("guesses").innerHTML = guessedLetters.join(',');
    };

// Reset
var reset = function() {
    
    guessesLeft = 9;
    guessedLetters = [];
    computerRandomLetterChoice();
    guessesToGo();
    guessesLettersStrings();
};

//When key is released it becomes the users guess
document.onkeyup = function(event) {
    //variable asign the key press character value to userGuess variable and lowercase
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //asign a variable that is a boolean that checks if the key the user pressed is a valid one. 
    var check = computerChoices.includes(userGuess);
    console.log('user guess' + userGuess);

    //if the key user pressed is not on the possible choices (computerChoices array) then its not valid
    if (check === false) {
        alert("Not a Valid Key, try again");
        return false;
        //check if user has already choose that letter, avoid repeat letters
    } else if (guessedLetters.indexOf(userGuess) >= 0 ){
        alert('you have already choose this letter, try again');
    } else if (check === true) {
        //If the Users choice was an alphabet char then update guesses left and add users guess to the array of guessed letters
        guessesLeft--;
        console.log('Guesses Left: ' + guessesLeft);
        // this will push the value contained in userGuess to the array guessedLetters
        guessedLetters.push(userGuess);
        console.log('Letters Guessed: ' + guessedLetters);
        //update lives to go
        guessesToGo();
        //update the array and print it 
        guessesLettersStrings();
        
        //check if you have lives left
        if (guessesLeft > 0) {
            if (userGuess)
            // check if the user choice is right
            if (userGuess == letterToGuess) {
                //if its right sum one point to wins
                wins++;
                console.log('wins: ' + wins);
                //print the wins
                document.getElementById("wins").innerHTML = wins;
                //alert what was the guess
                userGuess = userGuess.toUpperCase();
                alert("You Win: " + userGuess);
                //reset the lives to 9 again and choose a new letter to guess. 
                reset();
            }
            //if no more lives to go
        } else if (guessesLeft == 0) {
            // sum looses
            losses++;
            console.log('losses: ' + wins);
            //print looses
            document.getElementById("losses").innerHTML = losses;
            alert("Game Over, Try Again?");
            // Then we'll call the reset. 
            reset();
        }
        return false;
    } else {
        alert("error");
    }

};

    

