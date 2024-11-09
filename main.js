const questions = [
    {
        question: "What is the capital of Pakistan?",
        options: ["Lahore", "Karachi", "Islamabad", "Quetta"],
        answer: 2
    },
    {
        question: "What is the national animal of Pakistan?",
        options: ["tiger", "lion", "cat", "Markhor"],
        answer: 3
    },
    {
        question: "What is the highest peak in Pakistan?",
        options: ["waziristan", "Everst", "K-2", "Tirch Mir"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

function showQuestion() {
    let questionData = questions[currentQuestion];
    document.getElementById("question").textContent = questionData.question;

    // Set options text
    const options = document.querySelectorAll("#options label span");
    options.forEach((span, index) => {
        span.textContent = questionData.options[index];
    });

    // Reset radio buttons for new question
    document.querySelectorAll("input[name='option']").forEach(radio => radio.checked = false);
}

function nextQuestion() {
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    // Check if selected answer is correct
    if (parseInt(selectedOption.value) === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("result").style.display = "none";
    document.getElementById("home").style.display = "block";
}