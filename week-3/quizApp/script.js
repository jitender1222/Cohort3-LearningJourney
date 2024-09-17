//  use this quizData in your app.
const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]

let nextQuestion=0;
let total=0;
const quizDiv=document.getElementById("quizDiv");
const questionTitle=document.getElementById("questionTitle");
const optionsList=document.querySelectorAll(".optionsList");
const option=document.getElementById("option")

const optionKeys = ['a', 'b', 'c', 'd'];

let moveOverQuizData=[];

function loadQuestion() {
    const currentData = quizData[nextQuestion];
    questionTitle.innerHTML = currentData.question;

    // Dynamically update options
    const optionKeys = ['a', 'b', 'c', 'd'];
    optionsList.forEach((optionElement, index) => {
        optionElement.innerHTML = currentData[optionKeys[index]];
    });
}

function moveNext() {
    nextQuestion++;
    if (nextQuestion < quizData.length) {
        loadQuestion();  // Load the next question
    } else {
        alert("Quiz Completed!");
        nextQuestion=0;
        alert(`Your Score is ${total}`)
        loadQuestion();
    }
}

function checkIsCorrect(num){
    if(num === quizData[nextQuestion].correct){ 
        total++;
    }
    moveNext();
}   
console.log(total);
// Load the first question on page load
loadQuestion();
