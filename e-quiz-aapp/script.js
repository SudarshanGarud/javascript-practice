const questions = [
    {
        question: "Which language runs directly in the browser?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: 2
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Hyper Tool Multi Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: 1
    }
]

let currentQuestionIndex = 0
let score = 0

const options = document.getElementById("options")

const question = document.getElementById("question")
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex]
    question.textContent = currentQuestion.question

    options.innerHTML = ""
    currentQuestion.options.forEach(function(option, index) {
        const optionBtn = document.createElement("button")
        optionBtn.textContent = option
        options.appendChild(optionBtn)

        optionBtn.addEventListener("click", function() {
            if (index === currentQuestion.answer) {
                score++
            }

            currentQuestionIndex++

            if (currentQuestionIndex < questions.length) {
                showQuestion()
            } else {
                question.textContent = "Quiz Finished!"
                options.innerHTML = ""
                scoreDisplay.textContent = "Your Score: " + score
            }
        })
    })

}

showQuestion()

const btn = document.getElementById("btn")

const scoreDisplay = document.getElementById("score")