document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quiz-form");
  const submitButton = document.getElementById("submit-quiz");
  const resetButton = document.getElementById("reset-quiz");
  const resultsSection = document.getElementById("results");
  const scoreElement = document.getElementById("score");
  const questions = document.querySelectorAll(".question");

  const correctAnswers = {
    q1: "c",
    q2: "a",
    q3: "b",
    q4: "c",
    q5: "b",
    q6: "b",
    q7: "b",
    q8: "c",
    q9: "a",
    q10: "a",
    q11: "c",
    q12: "b",
    q13: "a",
    q14: "b",
    q15: "b",
    q16: "c",
    q17: "a",
    q18: "b",
    q19: "c",
    q20: "a",
    q21: "b",
    q22: "c",
    q23: "a",
    q24: "b",
    q25: "c",
    q26: "a",
    q27: "b",
    q28: "a",
    q29: "b",
    q30: "b",
    q31: "c",
    q32: "b",
    q33: "c",
    q34: "b",
    q35: "a",
    q36: "b",
    q37: "a",
    q38: "b",
    q39: "b",
    q40: "a"
  };

  submitButton.addEventListener("click", () => {
    let score = 0;

    questions.forEach((question) => {
      const selectedOption = question.querySelector("input[type='radio']:checked");
      const correctOption = correctAnswers[question.id];

      question.querySelectorAll(".answer").forEach((option) => {
        option.classList.remove("correct", "incorrect");
      });

      if (selectedOption) {
        if (selectedOption.value === correctOption) {
          score++;
          selectedOption.parentNode.classList.add("correct");
        } else {
          selectedOption.parentNode.classList.add("incorrect");
        }
      }

      const correctAnswerElement = question.querySelector(`input[value="${correctOption}"]`).parentNode;
      correctAnswerElement.classList.add("correct");
    });

    scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
    resultsSection.style.display = "block";
  });

  resetButton.addEventListener("click", () => {
    quizForm.reset();
    resultsSection.style.display = "none";

    questions.forEach((question) => {
      question.querySelectorAll(".answer").forEach((option) => {
        option.classList.remove("correct", "incorrect");
      });
    });
  });
});
