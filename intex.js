const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which programming language is used for web styling?",
    options: ["Java", "Python", "CSS", "C++"],
    answer: "CSS"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<href>", "<a>", "<hyper>"],
    answer: "<a>"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: "<script>"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score");

function loadQuestion() {
  let q = questions[currentQuestion];
  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.onclick = () => checkAnswer(button, q.answer);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(button, answer) {
  const selected = button.textContent;
  if (selected === answer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  Array.from(optionsElement.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === answer) {
      btn.classList.add("correct");
    }
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultBox.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestion();
}

loadQuestion();