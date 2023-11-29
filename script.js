const questions = [
    {
        question: "Quel est l'animal le plus gros du monde?",
        answers: [
            { text: "requin", correct: false},
            { text: "Baleine Bleue ", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe ", correct: false},
        ]       
    },
    {
        question: "Quel est le plus petit pays  du monde? ",
        answers: [
            { text: "Vatican", correct: true},
            { text: "Bhoutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Sri Lanka", correct: false},
        ]         
    },
    {
        question: "Quel est le plus grand desert du monde ",
        answers: [
            { text: "kalahari", correct: false},
            { text: "Gobi", correct: true},
            { text: "Sahara", correct: false},
            { text: "Antarctique", correct: true},
        ]      
    },
    {
        question: "Quel est le plus petit continet du monde? ",
        answers:[
            { text: "Asie", correct: false},
            { text: "Australie", correct: true},
            { text: "Arctique", correct: false},
            { text: "Afrique", correct: false},
        ]      
    }
];

const questionElement = document.getElementById("question");
const answerButtons= document.querySelector(".answer-buttons");
console.log(answerButtons)
const nextButton = document.querySelector("#next-btn");
  
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHtml = "Next";
    showQuestion();
}
function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild)

        }
    }

    function selectAnswer(e){
      const selectedBtn = e.target;
      const iscorrect = selectedBtn.dataset.correct === "true";
      if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
      }else{
        selectedBtn.classList.add("incorrect");
      }
     Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
          button.disabled = true;
     });
     nextButton.style.display = "block";    
    }
    function showScore(){
        resetState();
        questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";

    }

    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }
console.log(nextButton)
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    });
startQuiz();  

console.log(answerButtons)