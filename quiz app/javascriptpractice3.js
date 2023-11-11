const quizDate = [
    {
        question: "who is the President of Russian Federation? ",
        a: "Sergey Lavrov",
        b: "Lukashenko",
        c: "Vladimir Putin",
        d: "Alexandro",
        correct: "c"
    },
    {
        question: "What is the most used programming language in the world?",
        a: "Java",
        b: "Javascript",
        c: "Python",
        d: "C++",
        correct: "b"
    }, 
    {
        question: "What is the oldest programming language?",
        a: "Java",
        b: "Javascript",
        c: "Python",
        d: "C++",
        correct: "d"
    },
    {
        question: "Who is the richest man in the world?",
        a: "Jeff Bezos",
        b: "Ilon Mask",
        c: "Mark Zukenberg",
        d: "Steve Jobs",
        correct: "a"
    },




];


const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectedAnswers();

const currentQuizDate = quizDate[currentQuiz];

questionEl.innerText = currentQuizDate.question;
a_text.innerText = currentQuizDate.a;
b_text.innerText = currentQuizDate.b;
c_text.innerText = currentQuizDate.c;
d_text.innerText = currentQuizDate.d;



}

function getSelected(){
    let answer = undefined;
    

    answersEls.forEach((answerEl) =>{
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}

function deselectedAnswers() {
    answersEls.forEach((answerEl) => {
    answerEl.checked = false;

    });
  
}

submitBtn.addEventListener('click',() => {

        const answer = getSelected();


        if(answer){
            if (answer === quizDate[currentQuiz].correct){

                    score++;

                }
                currentQuiz++;
    
    
            
            
 
            if(currentQuiz < quizDate.length){
                loadQuiz();

            } else {

                quiz.innerHTML= `<h2>You answered correctly at ${score}/${quizDate.length} question.</h>
                <button onclick="location.reload()">Reload</button>`;

            }
            
        }
         
    });
        



    
