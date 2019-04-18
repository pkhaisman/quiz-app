function renderLandingPage() {
    console.log('renderLandingPage ran');
}

function renderNextQuestion() {
    console.log('renderNextQuestion ran');
}

function displayUserProgress() {
    console.log('displayUserProgress ran');
}

function checkIfAnswerCorrect() {
    console.log('checkIfAnswerCorrect ran');
}

function ifAnswerIncorrect() {
    console.log('ifAnswerIncorrect ran');
}

function ifAnswerCorrect() {
    console.log('ifAnswerCorrect ran');
}

function displayUserScore() {
    console.log('displayUserScore ran');
}

function renderEndingPage() {
    console.log('renderEndingPage ran');
}

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