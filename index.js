'use-strict';

let index = 0;
let userScore = 0;

const STORE = [
    {
        question: 'What is the main knot used to secure a climber to their rope?',
        options: [
            'Overhand knot',
            'Bowline knot',
            'Figure-eight knot',
            'Clove hitch'
        ],
        correctAnswer: 'answer3',
        answerIndex: 2
    },
    {
        question: 'Which of these objectives is most suitable for a beginner?',
        options: [
            'Your local gym!',
            'El Capitan',
            'A skyscraper',
            'Your house'
        ],
        correctAnswer: 'answer1',
        answerIndex: 0
    },
    {
        question: 'Which of the following are not a piece of gear used for climbing?',
        options: [
            'Nut tool',
            'Spatula',
            'Harness',
            'Rope'
        ],
        correctAnswer: 'answer2',
        answerIndex: 1
    },
    {
        question: 'Are free climbing and free soloing the same thing?',
        options: [
            'Yes',
            'No',
            'Yes',
            'Yes'
        ],
        correctAnswer: 'answer2',
        answerIndex: 1
    },
    {
        question: 'Who is the only climber to have free soloed El Capitan?',
        options: [
            'Alex Honnold',
            'Brad Gobright',
            'Lynn Hill',
            'Nina Williams'
        ],
        correctAnswer: 'answer1',
        answerIndex: 0
    },
    {
        question: 'Which route climbs the most prominent feature on El Capitan?',
        options: [
            'The ear',
            'The nose',
            'The oh-my-god-who-cares',
            'The pinky'
        ],
        correctAnswer: 'answer2',
        answerIndex: 1
    },
    {
        question: 'What is the primary purpose of a helmet?',
        options: [
            'To look cool',
            'To protect your head from falling rocks',
            'To protect your head from falcon talons',
            'To signal to others that you are a climber'
        ],
        correctAnswer: 'answer2',
        answerIndex: 1
    },
    {
        question: 'Which of the following are not a type of climbing?',
        options: [
            'Bouldering',
            'Deep water soloing',
            'Top-roping',
            'Playing football'
        ],
        correctAnswer: 'answer4',
        answerIndex: 3
    },
    {
        question: 'Which of the following are not a climbing destination?',
        options: [
            'Yosemite',
            'The Gunks',
            'The Philadelphia Art Museum',
            'Indian Creek'
        ],
        correctAnswer: 'answer3',
        answerIndex: 2
    },
    {
        question: 'When is it ok to untie your knot?',
        options: [
            'Never!',
            'In the middle of a climb',
            'When you are on the ground',
            'Always!'
        ],
        correctAnswer: 'answer3',
        answerIndex: 2
    },
];

function renderLandingPage() {
    console.log('renderLandingPage ran');

    let landingPage = `    
        <div class='center-landing-page'>
            <div>
                <header class="header">
                    <h1 class="header__title">The Climbing Quiz</h1>
                    <p class="header__subtitle">Prove your climbing knowledge!</p>
                </header>
                <main class="container">
                    <input class="button js-render-first-question" type="submit" value="Start">        
                </main>
            </div>
        </div>
    `;

    $('body').html('');
    $('body').html(landingPage);
}

function generateQuizQuestionForm(question) {
    console.log('generateQuizQuestionForm ran');

    return `
        <div class="flex-container">
            <p class='user-progress'></p>
            <p class='user-score'></p>
        </div>
        <div class="form-style">       
            <form class="question-form">
                <fieldset>
                    <legend class="legend">${STORE[index].question}</legend>
                    <div class="question-form-option">
                        <input class="radio-btn" type="radio" id="answer1" name="answers" value="answer1" required>
                        <label class="btn-label" for="answer1">${STORE[index].options[0]}</label>
                    </div>
                    <div class="question-form-option">
                        <input class="radio-btn" type="radio" id="answer2" name="answers" value="answer2" required>
                        <label class="btn-label" for="answer2">${STORE[index].options[1]}</label>
                    </div>
                    <div class="question-form-option">
                        <input class="radio-btn" type="radio" id="answer3" name="answers" value="answer3" required>
                        <label class="btn-label" for="answer3">${STORE[index].options[2]}</label>
                    </div>
                    <div class="question-form-option">
                        <input class="radio-btn" type="radio" id="answer4" name="answers" value="answer4" required>
                        <label class="btn-label" for="answer4">${STORE[index].options[3]}</label>
                    </div>
                    </fieldset>
                    <input class="button js-check-answer" type="submit" value="Next">
                </form>        
        </div>
    `;
}

function handleNextQuestion() {
    let quizQuestion = generateQuizQuestionForm(STORE);
    index++;
    $('.container').html(quizQuestion);
    checkAnswer();
    updateUserStats();
}

function renderNextQuestion() {
    console.log('renderNextQuestion ran');

    $('.container').on('click', '.js-render-first-question', function () {        
        handleNextQuestion();
    });

    $('.container').on('click', '.js-render-question', function () {        
        handleNextQuestion();     
    });
}

function updateUserStats() {
    displayUserProgress();
    displayUserScore(); 
}

function checkifDone() {
    if (index >= 10) {
        renderEndingPage();
    }
}

function handleCorrectAnswer() {
    console.log('correct');

    userScore++;
    $('.container').html('');
    $('.container').append(`
        <div class="flex-container">
            <p class='user-progress'></p>
            <p class='user-score'></p>
        </div>
        <div class='user-feedback'>
            <div>
                <p class='correct-incorrect'>Correct!</p>
                <input class="button js-render-question" type="button" value="Next">
            </div>
        </div>
    `);
}

function renderCorrectAnswerString() {
    return STORE[index - 1].options[STORE[index - 1].answerIndex];
}

function handleIncorrectAnswer() {
    console.log('incorrect');

    $('.container').html('');
    $('.container').append(`
        <div class="flex-container">
            <p class='user-progress'></p>
            <p class='user-score'></p>
        </div>
        <div class='user-feedback'>
            <div class='correct-answer-msg'>
                <p class='correct-incorrect'>Incorrect!</p>
                <p>The correct answer is '${renderCorrectAnswerString()}'</p>
                <input class="button js-render-question" type="button" value="Next">
            </div>
        </div>
    `);
}

function checkAnswer() {
    console.log('checkAnswer ran');

    $('.question-form').submit(function(event) {
        event.preventDefault();
        let userChoice = $('input[name=answers]:checked', '.question-form').val();
        if (userChoice === STORE[index - 1].correctAnswer) {
            handleCorrectAnswer();
        } else {
            handleIncorrectAnswer();
        }
        checkifDone();
        updateUserStats();
    });
}

function displayUserProgress() {
    console.log('displayUserProgress ran');  

    let userProgress = `Question ${index}/10`;
    $('.user-progress').text(userProgress);    
}

function displayUserScore() {
    console.log('displayUserScore ran');

    let scoreDisplay = `Score: ${userScore}`;
    $('.user-score').text(scoreDisplay);
}

function renderEndingPage() {
    console.log('renderEndingPage ran');

    $('.container').html('');
    $('.container').append(`
        <div class='user-feedback'>
            <div>
                <p>You answered ${userScore}/10 correctly!</p>
                <input class="button js-render-first-question" type="button" value="Restart">
            </div>  
        </div>
    `);

    index = 0;
    userScore = 0;
}

function renderQuizApp() {
    renderLandingPage();
    renderNextQuestion();
}

$(renderQuizApp);