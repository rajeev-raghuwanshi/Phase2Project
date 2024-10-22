const progressBar = document.querySelector(".progress-bar"),
  progressText = document.querySelector(".progress-text");

const progress = (value) => {
  const percentage = (value / time) * 100;
  progressBar.style.width = ` ${percentage}%`;
  progressText.innerHTML = `${value}`;
};

const startBtn = document.querySelector(".start"),
  numQuestions = document.querySelector("#num-questions"),
  timePerQuestion = document.querySelector("#time"),
  quiz = document.querySelector(".quiz"),
  startScreen = document.querySelector(".start-screen"),
  category = document.querySelector("#category");

let questions = [],
  time = 30,
  score = 0,
  currentQuestion,
  timer;

const startQuiz = () => {
  const num = Number(numQuestions.value);
  const cat = Number(category.value);
  loadingAnimation();

  async function fetchQuestions() {
    try {
      const response = await fetch(`/api/questions/${cat}`);
      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }

      const data = await response.json();
      const allQuetions = data.questions;
      questions = allQuetions.slice(0, num);
      currentQuestion = 0;

      setTimeout(() => {
        startScreen.classList.add("hide");
        quiz.classList.remove("hide");
        showQuestion(questions[currentQuestion]);
        currentQuestion++;
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }

  fetchQuestions(); // Call the function to fetch questions
};

startBtn.addEventListener("click", startQuiz);

const showQuestion = (question) => {
  const questionText = document.querySelector(".question"),
    answersWrapper = document.querySelector(".answer-wrapper");
  const questionNumber = document.querySelector(".number");

  // Display the question text
  questionText.innerHTML = question.question_text;

  // Gather all options into an array, excluding the correct answer
  const options = [
    question.option1,
    question.option2,
    question.option3,
    question.option4,
  ];
  const answers = [...options]; // We no longer include the correct answer here

  // Shuffle the options (without the correct answer)
  answers.sort(() => Math.random() - 0.5);

  // Clear previous answers in the wrapper
  answersWrapper.innerHTML = "";

  // Create answer elements dynamically
  answers.forEach((answer) => {
    answersWrapper.innerHTML += `
      <div class="answer">
        <span class="text">${answer}</span>
        <span class="checkbox">
          <i class="fas fa-check"></i>
        </span>
      </div>
    `;
  });

  // Add the correct answer at the end of the list (for later comparison)
  const correctAnswer = question.correct_answer;
  answersWrapper.innerHTML += `
    <div class="answer correct-answer" style="display: none;">
      <span class="text">${correctAnswer}</span>
      <span class="checkbox">
        <i class="fas fa-check"></i>
      </span>
    </div>
  `;

  questionNumber.innerHTML = `Question <span class="current">${
    questions.indexOf(question) + 1
  }</span> <span class="total">/${questions.length}</span>`;

  // Add event listeners to answers
  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.addEventListener("click", () => {
      if (!answer.classList.contains("checked")) {
        answersDiv.forEach((answer) => {
          answer.classList.remove("selected");
        });
        answer.classList.add("selected");
        submitBtn.disabled = false;
      }
    });
  });

  time = timePerQuestion.value; // Get time per question from input
  startTimer(time);
};

const startTimer = (time) => {
  timer = setInterval(() => {
    if (time === 3) {
      playAdudio("countdown.mp3");
    }
    if (time >= 0) {
      progress(time);
      time--;
    } else {
      checkAnswer();
    }
  }, 1000);
};

const loadingAnimation = () => {
  startBtn.innerHTML = "Loading";
  const loadingInterval = setInterval(() => {
    if (startBtn.innerHTML.length === 10) {
      startBtn.innerHTML = "Loading";
    } else {
      startBtn.innerHTML += ".";
    }
  }, 500);
};

const submitBtn = document.querySelector(".submit"),
  nextBtn = document.querySelector(".next");
submitBtn.addEventListener("click", () => {
  checkAnswer();
});

nextBtn.addEventListener("click", () => {
  nextQuestion();
  submitBtn.style.display = "block";
  nextBtn.style.display = "none";
});

const checkAnswer = () => {
  clearInterval(timer); // Stop the timer

  const selectedAnswer = document.querySelector(".selected");
  const correctAnswerDiv = document.querySelector(".correct-answer"); // Hidden correct answer

  if (selectedAnswer) {
    const answer = selectedAnswer.querySelector(".text").innerHTML;

    // Check if the selected answer matches the correct answer from the hidden element
    if (answer === correctAnswerDiv.querySelector(".text").innerHTML) {
      score++;
      selectedAnswer.classList.add("correct");
    } else {
      selectedAnswer.classList.add("wrong");

      correctAnswerDiv.classList.add("correct");
      correctAnswerDiv.style.display = "block";
    }
  } else {
    // If no answer is selected, reveal the correct answer
    correctAnswerDiv.classList.add("correct");
  }

  // Mark all answers as checked
  document
    .querySelectorAll(".answer")
    .forEach((answer) => answer.classList.add("checked"));
  submitBtn.style.display = "none";
  nextBtn.style.display = "block";
};

const nextQuestion = () => {
  if (currentQuestion < questions.length) {
    currentQuestion++;
    showQuestion(questions[currentQuestion - 1]);
  } else {
    showScore();
  }
};

const endScreen = document.querySelector(".end-screen"),
  finalScore = document.querySelector(".final-score"),
  totalScore = document.querySelector(".total-score");
const showScore = () => {
  endScreen.classList.remove("hide");
  quiz.classList.add("hide");
  finalScore.innerHTML = score;
  totalScore.innerHTML = `${questions.length}`;
};

const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
  window.location.reload();
});

const playAdudio = (src) => {
  const audio = new Audio(src);
  audio.play();
};
