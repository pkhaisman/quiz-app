// this function will be responsible for rendering the landing
//  page on page load
function renderLandingPage() {
    console.log('renderLandingPage ran');
}

// this function will be responsible for when the user clicks to 
// go to the next question
function renderNextQuestion() {
    console.log('renderNextQuestion ran');
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