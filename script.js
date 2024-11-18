const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
 
let shuffledQuestions, currentQuestionIndex;
 
let correctAnswers = 0; //can add wrong as well
 
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});
 
function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}
 
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
 
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}
 
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
 
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}
 
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}
 
 
 
const questions = [{
        question: "До кой век продължава Средновековието?",
        answers: [{
                text: "до XIII век (включително)",
                correct: false
            },
            {
                text: "до XIV век (включително)",
                correct: true
            },
            {
                text: "до XV век (включително) ",
                correct: false
            },
            {
                text: "до XVI век (включително) ",
                correct: false
            },
        ],
    },
    {
        question: "С имената на кои библейски герои се свързва мотивът за братоубийството?",
        answers: [{
                text: "Адам и Ева",
                correct: false
            },
            {
                text: "Мойсей и фараона",
                correct: false
            },
            {
                text: "Каин и Авел ",
                correct: true
            },
            {
                text: "Пилат и Симон ",
                correct: false
            },
        ],
    },
    {
        question: "Кое НЕ е тема в текстовете на старобългарската литература?",
        answers: [{
                text: "животът на светците",
                correct: false
            },
            {
                text: "славянската азбука ",
                correct: false
            },
            {
                text: "реално съществували личности",
                correct: false
            },
            {
                text: "природата",
                correct: true
            },
        ],
    },
    {
        question: "Какво е апология?",
        answers: [{
                text: "възторжена възхвала на някого или на нещо",
                correct: true
            },
            {
                text: "уподобяване на един предмет е друг ",
                correct: false
            },
            {
                text: "песен в чест на бог Аполон",
                correct: false
            },
            {
                text: "извинение към хората и Бог",
                correct: false
            },
        ],
    },
    {
        question: `Авторът на "Азбучна молитва" е:`,
        answers: [{
                text: "създателят на старобългарската кирилска азбука",
                correct: false
            },
            {
                text: "най-плодовитият последовател на Солунските братя",
                correct: true
            },
            {
                text: `основателят на книжовната школа през "Златния век"`,
                correct: false
            },
            {
                text: "най-добрият от преките ученици на Константин-Кирил",
                correct: false
            },
        ],
    },
    {
        question: `Декамерон"е:`,
        answers: [{
                text: "роман",
                correct: false
            },
            {
                text: "сборник с новели ",
                correct: true
            },
            {
                text: "епическа поема",
                correct: false
            },
            {
                text: "комедия",
                correct: false
            },
        ],
    },
    {
        question: `Кой е основният проблем, поставен в поемата "Илиада"?`,
        answers: [{
                text: "за гибелта на Троя",
                correct: false
            },
            {
                text: "борбата за любовта",
                correct: false
            },
            {
                text: "за войната и победата",
                correct: false
            },
            {
                text: "за наранената чест и достойнство",
                correct: true
            },
        ],
    },
];