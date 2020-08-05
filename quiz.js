//Go to HTML and grab the elements:
var question = document.querySelector("#question");
var answerChoices = Array.from(document.querySelectorAll(".quiz"));
var timeEl = document.querySelector(".time")
var scoreCount = document.getElementById("currentScore")
    //console.log(scoreCount)

//Set the Variables for questions and answers of the quiz. Create array for the Questions and Answers. 
var questionsArray = [





    {
        question: "I can contract HIV from: ",
        choice1: " kissing ",
        choice2: "sharing a drink/ food",
        choice3: "direct contact with blood, semen, vaginal fluids, and breastmilk. ",
        choice4: "high-five",
        answer: 3

    },
    {
        question: "True or False: I can get an STD from a toilet seat?",
        choice1: "True",
        choice2: "False",
        choice3: "",
        choice4: "",
        answer: 2
    },
    {
        question: "Which STD/STI does not have a cure?",
        choice1: "Gonorrhea",
        choice2: "Clamydia",
        choice3: "Syphilis",
        choice4: "HIV",
        answer: 4
    },
    {
        question: "Which of the following in not a real STD?",
        choice1: "gGonorrhea",
        choice2: "herpes",
        choice3: "yeast infection",
        choice4: "HPV",
        answer: 3
    },
    {
        question: "True or False: Birth Control pills protect you from STDs/STIs. ",
        choice1: "True",
        choice2: "False",
        choice3: "",
        choice4: "",
        answer: 2
    },
    {
        question: "Which of the following does not protect from STDs/STIs?",
        choice1: "dental dam ",
        choice2: "IUD ",
        choice3: "condom",
        choice4: "abstinence ",
        answer: 2
    },
    {
        question: "What is the national age of consent in the USA?",
        choice1: "16",
        choice2: "17",
        choice3: "18",
        choice4: "Age of consent varries by state",
        answer: 4
    },
    {
        question: "What does HIV stand for?",
        choice1: "Human Infected with Virus",
        choice2: "Hyper Immunodeficiency Virus",
        choice3: "Human Immunodeficiency Virus",
        choice4: " Hypo Immunodeficiency Virus",
        answer: 3
    },
];

var currentQuestionEl = {};
var questionTracker = 0;
var questions = [];
var answers = [];


//creating Var for the array of questions that we will use as index values inside the function
var questionsArrayIndex

//Track the game score. Assign value to correct questiions.
var correctAns = 20;
scoreCount = 0;


//  Start the Quiz
function startQuiz() {
    questionTracker = 0;
    scoreCount = 0;
    // put our questionsArray into empty questions array. 
    questions = [...questionsArray];
    nextQuestion();
};
// Create function to go to the next question:
function nextQuestion() {
    for (i = 0; i >= questions.length; i++) {

        if (questions.length === 0) {
            return window.location.assign("initials.html");
        };
    };
    questionsArrayIndex = Math.floor(Math.random() * questions.length);
    currentQuestionEl = questions[questionsArrayIndex];
    question.innerHTML = currentQuestionEl.question
        //console.log(currentQuestionEl)
    questionTracker++;

    answerChoices.forEach(choice => {
        var number = choice.dataset['index'];
        choice.innerHTML = currentQuestionEl['choice' + number]; // console.log(number) this console.logs 1-4 which pertains to the the data set and our 4 answer choices per question. 

    })
}
// adding event listenener for user to click on choices. 
answerChoices.forEach(choice => {
    choice.addEventListener("click", e => {

        var userChoice = e.target;
        var userAnswer = userChoice.dataset["index"];
        //console.log(userAnswer);
        questions.splice(questionsArrayIndex, 1);
        nextQuestion();

    });



});

startQuiz();

// Save High Score: