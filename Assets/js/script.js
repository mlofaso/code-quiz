// - GIVEN I am taking a code quiz
// - WHEN I click the start button
// - THEN a timer starts and I am presented with a question
// TO-DO: Create a landing page, timer, and a start button for the quiz, have quiz and timer begin when start button clicked

//  Start Button
var startButton = document.querySelector("#startButton")

function startQuiz() {

}

startButton.addEventListener("click", function(){
    startQuiz ();
    startTimer(); 
});


// Timer 
var timerEl = document.querySelector("#timer");

var secondsLeft = 60;

function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

// - WHEN I answer a question
// - THEN I am presented with another question
// TO-DO: Link pages together so that answering a question brings you to the next page

// - WHEN I answer a question incorrectly
// - THEN time is subtracted from the clock
// TO-DO: Link incorrect answers with decrementing the timer

// - WHEN all questions are answered or the timer reaches 0
// - THEN the game is over
// TO-DO: Terminate functions when timer reaches 0 or all questions answered

// - WHEN the game is over
// - THEN I can save my initials and score
// TO-DO: Create the page for entering their info and link entries to local storage

