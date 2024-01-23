// - GIVEN I am taking a code quiz
// - WHEN I click the start button
// - THEN a timer starts and I am presented with a question


var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var secondsLeft = 60;
var firstContainer = document.querySelector('#first');
var secondContainer = document.querySelector("#questions");
var timerInterval;
var questionTitle = document.querySelector("#question")
var choices = document.querySelector('#choices')
var qIndex = 0

var questions = [
    {
        title: '1+1',
        options: [0, 2, 1, 3],
        answer: "2",
    },
    {
        title: '1+2',
        options: [0, 2, 1, 3],
        answer: "3",
    },
]

function startQuiz() {
    startTimer();
    firstContainer.classList.add('hide');
    secondContainer.classList.remove('hide');
    displayQuestion();
}



function startTimer() {
    timerEl.textContent = "Time: " + secondsLeft;
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

function displayQuestion() {
    questionTitle.textContent = questions[qIndex].title

    choices.innerHTML = '';
    for (var i = 0; i < questions[qIndex].options.length; i++) {
        var button = document.createElement('button');
        button.textContent = questions[qIndex].options[i];

        button.addEventListener('click', function () {
            console.log(this.textContent);
            // - WHEN I answer a question - prompt?
            // - THEN I am presented with another question - more prompts, or a for loop?

            // - WHEN I answer a question incorrectly
            // - THEN time is subtracted from the clock - decrement

            if (this.textContent !== questions[qIndex].answer) {
                secondsLeft -= 10;
                timerEl.textContent = "Time: " + secondsLeft;
            }

            qIndex++;


            // - WHEN all questions are answered or the timer reaches 0
            // - THEN the game is over - clearInterval
            // 
            if(questions.length === qIndex){
                alert('game over')
            }else{

                displayQuestion()
            }
        })
        choices.append(button)

    }
}

// - WHEN the game is over
// - THEN I can save my initials and score - Local Storage
startButton.addEventListener("click", startQuiz);

