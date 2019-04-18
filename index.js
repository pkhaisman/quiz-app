'use-strict';

const STORE = [
    {
        questionIndex: 1
    },
    {
        question: 'What is the main knot used to secure a climber to their rope?',
        options: [
            'Overhand knot',
            'Bowline knot',
            'Figure-eight knot',
            'Clove hitch'
        ],
        correctAnswer: 'Figure-eight knot',
    },
    {
        question: 'Which of these objectives is most suitable for a beginner?',
        options: [
            'Your local gym!',
            'El Capitan',
            'A skyscraper',
            'Your house'
        ],
        correctAnswer: 'Your local gym!'
    },
    {
        question: 'Which of the following are not a piece of gear used for climbing?',
        options: [
            'Nut tool',
            'Spatula',
            'Harness',
            'Rope'
        ],
        correctAnswer: 'Spatula'
    },
    {
        question: 'Are free climbing and free soloing the same thing?',
        options: [
            'No',
            'No',
            'No',
            'No'
        ],
        correctAnswer: 'No'
    },
    {
        question: 'Who is the only climber to have free soloed El Capitan?',
        options: [
            'Alex Honnold',
            'Brad Gobright',
            'Lynn Hill',
            'Nina Williams'
        ],
        correctAnswer: 'Alex Honnold'
    },
    {
        question: 'Which route climbs the most prominent feature on El Capitan?',
        options: [
            'The ear',
            'The nose',
            'The oh-my-god-who-cares',
            'The pinky'
        ],
        correctAnswer: 'The nose'
    },
    {
        question: 'What is the primary purpose of a helmet?',
        options: [
            'To look cool',
            'To protect your head from falling rocks',
            'To protect your head from falcon talons',
            'To signal to others that you are a climber'
        ],
        correctAnswer: 'To protect your head from falling rocks'
    },
    {
        question: 'Which of the following are not a type of climbing?',
        options: [
            'Bouldering',
            'Deep water soloing',
            'Top-roping',
            'Playing football'
        ],
        correctAnswer: 'Playing football'
    },
    {
        question: 'Which of the following are not a climbing destination?',
        options: [
            'Yosemite',
            'The Gunks',
            'The Philadelphia Art Museum',
            'Indian Creek'
        ],
        correctAnswer: 'The Philadelphia Art Museum'
    },
    {
        question: 'When is it ok to untie your knot?',
        options: [
            'Never!',
            'In the middle of a climb',
            'When you are on the ground',
            'Always!'
        ],
        correctAnswer: 'When you are on the ground'
    },
];

// this function will be responsible for rendering the landing
//  page on page load
function renderLandingPage() {
    console.log('renderLandingPage ran');

    let landingPage = `
        <h2 class="quiz-prompt">Ready to begin?</h2>
        <input class="button js-render-question" type="button" value="Sure am!">
    `;

    $('.form-style').html(landingPage);
}


function generateQuizQuestionForm(question) {
    console.log('generateQuizQuestionForm ran');
    
    let index = STORE[0].questionIndex;
    STORE[0].questionIndex++;

    return `
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
        <input class="button js-render-question" type="button" value="Next">
    `;
}

// this function will be responsible for when the user clicks to 
// go to the next question
function renderNextQuestion() {
    console.log('renderNextQuestion ran');

    $('.form-style').on('click', '.js-render-question', event => {
        let quizQuestion = generateQuizQuestionForm(STORE);
        $('.form-style').html(quizQuestion);
    });
}

// this function will be responsible for displaying what question
//  out of ten the user is on
function displayUserProgress() {
    console.log('displayUserProgress ran');
}

// this function will be responsible for when a user submits an answer
function checkIfAnswerCorrect() {
    console.log('checkIfAnswerCorrect ran');
}

// this function will be responsible for when the answer is incorrect
function ifAnswerIncorrect() {
    console.log('ifAnswerIncorrect ran');
}

// this function will be responsible for when the answer is correct
function ifAnswerCorrect() {
    console.log('ifAnswerCorrect ran');
}

// this function will be responsible for display how many questions
//  the user has answered correctly
function displayUserScore() {
    console.log('displayUserScore ran');
}

// this function will be responsible for when the user has answered
//  all questions and reveived all feedback
function renderEndingPage() {
    console.log('renderEndingPage ran');
}


// this function will be our callback when the page loads. it's 
// responsible for initially rendering the shopping list, and 
// activating our individual functions
function renderQuizApp() {
    renderLandingPage();
    renderNextQuestion();
    displayUserProgress();
    checkIfAnswerCorrect();
    ifAnswerCorrect();
    ifAnswerIncorrect();
    displayUserScore();
    renderEndingPage();
}

$(renderQuizApp);