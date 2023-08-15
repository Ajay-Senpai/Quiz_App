const quizData = [
  {
      question: "On subtracting 150 - 125 we get",
      a: "15",
      b: "25",
      c: "10",
      d: "20",
      correct: "b",
  },
  {
      question: "A fruit seller sold 100 oranges, 200 apples and 100 bananas. How many fruits did he sell altogether?",
      a: "500",
      b: "400",
      c: "600",
      d: "300",
      correct: "b",
  },
  {
      question: "What number is 100 less than 900",
      a: "200",
      b: "800",
      c: "700",
      d: "600",
      correct: "b",
  },
  {
      question: "A farmer had 360 oranges. He sold 200 oranges. How many oranges are left?",
      a: "150",
      b: "160",
      c: "450",
      d: "120",
      correct: "b",
  },
  {
    question: "What number is 220 more than 500?",
    a: "550",
    b: "720",
    c: "450",
    d: "620",
    correct: "b",
},
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }
     currentQuiz++
     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>
         <button onclick="location.reload()">Reload</button>
         `
     }
  }
})