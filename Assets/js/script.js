// - GIVEN I am taking a code quiz
// - WHEN I click the start button
// - THEN a timer starts and I am presented with a question

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

// - WHEN I answer a question incorrectly
// - THEN time is subtracted from the clock - decrement

// - WHEN all questions are answered or the timer reaches 0
// - THEN the game is over - clearInterval

// - WHEN the game is over
// - THEN I can save my initials and score - Local Storage

