'use-strict';

let index = -1;
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

// this function will be responsible for rendering the landing
//  page on page load
function renderLandingPage() {
    console.log('renderLandingPage ran');

    let landingPage = `
        <h2 class="quiz-prompt">Ready to begin?</h2>
        <input class="button js-render-first-question" type="button" value="Sure am!">
    `;

    $('.container').html(landingPage);
}

function generateQuizQuestionForm(question) {
    console.log('generateQuizQuestionForm ran');
    
    index++;

    return `
        <div class="form-style">       
            <form class="question-form" action="/some-patch" method="POST">
                <fieldset>
                    <legend>${STORE[index].question}</legend>
                    <div class="question-form-option">
                        <input type="radio" id="answer1" name="answers" value="answer1">
                        <label for="answer1">${STORE[index].options[0]}</label>
                    </div>
                    <div class="question-form-option">
                        <input type="radio" id="answer2" name="answers" value="answer2">
                        <label for="answer2">${STORE[index].options[1]}</label>
                    </div>
                    <div class="question-form-option">
                        <input type="radio" id="answer3" name="answers" value="answer3">
                        <label for="answer3">${STORE[index].options[2]}</label>
                    </div>
                    <div class="question-form-option">
                        <input type="radio" id="answer4" name="answers" value="answer4">
                        <label for="answer4">${STORE[index].options[3]}</label>
                    </div>
                </fieldset>
             </form>        
        <input class="button js-check-answer" type="button" value="Next">
        </div>
        <div class="flex-container">
            <p class='user-progress'></p>
            <p class='user-score'></p>
        </div>
    `;
}

// this function will be responsible for when the user clicks to 
// go to the next question
function renderNextQuestion() {
    console.log('renderNextQuestion ran');

    $('.container').on('click', '.js-render-first-question', function () {        
        let quizQuestion = generateQuizQuestionForm(STORE);
        $('.container').html(quizQuestion);
        displayUserProgress();
        displayUserScore();
    });

    $('.container').on('click', '.js-render-question', function () {        
        let quizQuestion = generateQuizQuestionForm(STORE);
        $('.container').html(quizQuestion);
        displayUserProgress();
        displayUserScore();        
    });
}

function handleCorrectAnswer() {
    console.log('correct');

    userScore++;
    $('.container').html('');
    $('.container').append(`
        <p>Correct!</p>
        <input class="button js-render-question" type="button" value="Next">
        <div class="flex-container">
            <p class='user-progress'></p>
            <p class='user-score'></p>
        </div>
    `);

    displayUserProgress();
    displayUserScore(); 

    if (index >= 9) {
        renderEndingPage();
    }
}

function renderCorrectAnswerString() {
    return STORE[index].options[STORE[index].answerIndex];
}

function handleIncorrectAnswer() {
    console.log('incorrect');

    $('.container').html('');
    $('.container').append(`
        <p>Incorrect! The correct answer is ${renderCorrectAnswerString()}</p>
        <input class="button js-render-question" type="button" value="Next">
        <div class="flex-container">
            <p class='user-progress'></p>
            <p class='user-score'></p>
        </div>
    `);

    displayUserProgress();
    displayUserScore(); 

    if (index >= 9) {
        renderEndingPage();
    }
}

// this function will be responsible for when a user submits an answer
function checkAnswer() {
    console.log('checkAnswer ran');

    $('.container').on('click', '.js-check-answer', function () {
        let userChoice = $('input[name=answers]:checked', '.question-form').val();
        if (userChoice === STORE[index].correctAnswer) {
            handleCorrectAnswer();
        } else {
            handleIncorrectAnswer();
        }
    });
}

// this function will be responsible for displaying what question
//  out of ten the user is on
function displayUserProgress() {
    console.log('displayUserProgress ran');  

    let userProgress = `Question ${index + 1}/10`;
    $('.user-progress').text(userProgress);    
}

// this function will be responsible for display how many questions
//  the user has answered correctly
function displayUserScore() {
    console.log('displayUserScore ran');

    let scoreDisplay = `Score: ${userScore}`;
    $('.user-score').text(scoreDisplay);
}

// this function will be responsible for when the user has answered
//  all questions and reveived all feedback
function renderEndingPage() {
    console.log('renderEndingPage ran');

    $('.container').html('');
    $('.container').append(`
        <p>You answered x/10 correctly!</p>
        <input class="button js-render-first-question" type="button" value="Restart">
    `);

    index = -1;
}


// this function will be our callback when the page loads. it's 
// responsible for initially rendering the shopping list, and 
// activating our individual functions
function renderQuizApp() {
    renderLandingPage();
    renderNextQuestion();
    checkAnswer();
}

$(renderQuizApp);