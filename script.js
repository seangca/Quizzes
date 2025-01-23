document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quiz-form");
  const submitButton = document.getElementById("submit-quiz");
  const resetButton = document.getElementById("reset-quiz");
  const resultsSection = document.getElementById("results");
  const scoreElement = document.getElementById("score");
  const questions = document.querySelectorAll(".question");

  const correctAnswers = {
    q1: "b",  // Hypothalamus
    q2: "c",  // Epinephrine
    q3: "b",  // Dendrites
    q4: "c",  // To regulate body processes through hormones
    q5: "c",  // Increases heart rate and prepares the body for “fight or flight”
    q6: "b",  // Pancreas
    q7: "a",  // Cerebellum
    q8: "b",  // It secretes hormones that control other glands, such as the pituitary gland
    q9: "b",  // It regulates the involuntary functions of the body, such as heart rate and digestion
    q10: "b", // Cortisol
    q11: "b", // To speed up the transmission of nerve impulses
    q12: "b", // Medulla Oblongata
    q13: "a", // Kidneys
    q14: "b", // To control other endocrine glands by releasing hormones
    q15: "b", // Axon
    q16: "b", // Estrogen
    q17: "b", // Bacteria and viruses
    q18: "c", // Promotes relaxation and digestion
    q19: "a", // To regulate metabolism through the release of thyroxine
    q20: "a", // Somatic Nervous System
    q21: "b", // Blood-brain barrier
    q22: "c", // Altruism behavior
    q23: "a", // Adrenal glands
    q24: "b", // Pituitary gland
    q25: "c", // Direct stimulation of neurons
    q26: "a", // The synaptic cleft
    q27: "c", // Thalamus
    q28: "b", // Left hemisphere
    q29: "c", // Act as the body’s major thermoregulatory organ
    q30: "a", // Helps to coordinate motor movement
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
