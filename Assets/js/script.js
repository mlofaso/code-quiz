
var timerEl = document.querySelector('#timer');
var startButton = document.querySelector('#startButton');
var secondsLeft = 60;
var firstContainer = document.querySelector('#first');
var secondContainer = document.querySelector('#questions');
var timerInterval;
var questionTitle = document.querySelector('#question');
var choices = document.querySelector('#choices');
var qIndex = 0;
var thirdContainer = document.querySelector('#scoreForm');
var scores = [];
var userScoreEl = document.querySelector('#userScore')
var currentScore = 0;
var nameInput = document.querySelector('#nameInput');
var submitButton = document.querySelector('#submit')

var questions = [
    {
        title: 'Commonly used data types DO NOT include _______',
        options: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        title: 'The condition in an if/else statement is enclosed with ______',
        options: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer: 'parenthesis',
    },
    {
        title: 'Arrays in Javascript can be used to store _____',
        options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        title: 'String values must be enclosed within ______ when being assigned to variables',
        options: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        answer: 'quotes',
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger',
        options: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log',
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

        button.addEventListener('click', function() {
            if (this.textContent !== questions[qIndex].answer) {
                secondsLeft -= 10;
                timerEl.textContent = "Time: " + secondsLeft;
            }
           
            else {
                currentScore = currentScore + 20;
            }

            qIndex++;

            if (questions.length === qIndex) {
                secondContainer.classList.add('hide');
                thirdContainer.classList.remove('hide');
                clearInterval(timerInterval);``
                timerEl.textContent = "Time: 0";
            }
            else {
                displayQuestion()
            }
        })
        choices.append(button)
    } 
}

function saveScore() {
    var scoreObject = {
        name: nameInput.value,
        score: currentScore,
    };
    scores.push (scoreObject);
    var highScores = JSON.stringify(scores);
    localStorage.setItem('highScores', highScores);
};

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveScore();
});