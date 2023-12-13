const questions = [
  "Do you believe in Santa Claus?",
  "Did you decorate a Christmas tree?",
  "Have you been nice to your family this year?",
  "Have you been nice to your friends this year?",
  "Have you spread joy and happiness to those around you?",
  "Are you sure you are not lying?",
];

let currentQuestion = 0;
let score = 0;
let resultShown = false;

document.addEventListener("DOMContentLoaded", function () {
  showQuestion();
});

function showQuestion() {
  const chatbox = document.getElementById("chatbox");
  const question = questions[currentQuestion];

  const message = document.createElement("div");
  message.className = "message";
  message.innerHTML = `<p>${question}</p>`;

  chatbox.appendChild(message);
}

function submitAnswer(answer) {
  if (resultShown) {
    return;
  }

  if (answer === "yes") {
    score += 10;
  } else if (answer === "no") {
    score -= 5;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const chatbox = document.getElementById("chatbox");

  chatbox.innerHTML += `<p>Your score: ${score}</p>`;

  if (score >= 30) {
    startConfetti();
    chatbox.innerHTML += "<p>Congratulations! You're on Santa's Nice List!</p>";
  } else {
    chatbox.innerHTML +=
      "<p>Oops! You're on Santa's Naughty List. Better luck next year!</p>";
  }

  resultShown = true;

  function startConfetti() {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });
  }
}
