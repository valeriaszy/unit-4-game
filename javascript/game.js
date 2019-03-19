//variable
var wins
var losses
var randomNumber
var totalScore
var yourScore = document.getElementById('yourScore');

var NumberToGuess = null;


document.onkeydown = function(event) {

   guessesLeft--;

   
   var heirlooms = event.key.toLowerCase();

 
   guessedNumbers.push(Number);

   
   updateGuessesLeft();
   updateGuessesSoFar();


   
   if ( randomNumber === yourScore ) {

     wins++;
     document.querySelector("#wins").innerHTML = wins;

     
     reset();
   }

   
   if (guessesLeft === 0) {

     
     losses++;
     document.querySelector("#losses").innerHTML = losses;

     
     reset();
   }
 };

var reset = function() {
 guessesLeft = 9;
 guessedNumbers = [];
 updateLetterToGuess();
 updateGuessesLeft();
 updateGuessesSoFar();
};

var updateGuessesLeft = function() {

   document.querySelector("#guesses-left").innerHTML = guessesLeft;
 };
 var update = function() {
  
   letterToGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
   console.log("letterToGuess: ",letterToGuess);
 };

 var updateGuessesSoFar = function() {
   
   document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
 };
 
updateLetterToGuess();
updateGuessesLeft();
function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {

  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {
      alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  } 
}

