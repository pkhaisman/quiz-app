questionArray = [
    {
        question: 'This is question 1',
        answer1: 'This is answer 1',
        answer2: 'This is answer 2',
        answer3: 'This is answer 3',
        answer4: 'This is answer 4'
    },
    {
        question: 'This is question 2',
        answer1: 'This is answer 1',
        answer2: 'This is answer 2',
        answer3: 'This is answer 3',
        answer4: 'This is answer 4'
    }
]

function handleNextBtnClick() {
    console.log('handleNextBtnClick ran');
    $('.js-render-next-question').on('click', event => {
        // 
        
    });
}

function renderQuizApp() {
    handleNextBtnClick();
}

$(renderQuizApp);