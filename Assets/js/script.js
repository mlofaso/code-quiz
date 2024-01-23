
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
var userScore = document.querySelector('#userScore')

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

        button.addEventListener('click', function() {
            if (this.textContent !== questions[qIndex].answer) {
                secondsLeft -= 10;
                timerEl.textContent = "Time: " + secondsLeft;
            }

            qIndex++;

            if (questions.length === qIndex) {
                secondContainer.classList.add('hide');
                thirdContainer.classList.remove('hide');
            }
            else {
                displayQuestion()
            }
        })
        choices.append(button)
    }
}

// - WHEN the game is over
// - THEN I can save my initials and score
function saveScore() {
    // Grab value of nameInput field
    // Store value in an object variable w/ their score
    // Push name + value to list of scores array
    // Save scores array to local storage
    nameInput = nameInput.value
};

localStorage.setItem('high scores', JSON.stringify(scores));

startButton.addEventListener("click", startQuiz);

