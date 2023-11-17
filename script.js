
// Carga las preguntas desde el archivo JSON al iniciar
document.addEventListener('DOMContentLoaded', function() {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => initialize(data))
        .catch(error => console.error('Error:', error));
});

// Inicializa la aplicación
function initialize(questions) {
    const topicSelector = document.getElementById('topicSelector');
    const newQuestionButton = document.getElementById('newQuestionButton');
    let currentTopic = 'Travel'; // Tema por defecto

    // Llena el selector de temas
    for (let topic in questions) {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicSelector.appendChild(option);
    }

    // Maneja el cambio de tema
    topicSelector.addEventListener('change', function() {
        currentTopic = this.value;
    });

    // Maneja el clic en el botón para una nueva pregunta
    newQuestionButton.addEventListener('click', function() {
        displayRandomQuestion(questions, currentTopic);
    });

    // Muestra una pregunta al iniciar
    displayRandomQuestion(questions, currentTopic);
}

// Muestra una pregunta aleatoria del tema seleccionado
function displayRandomQuestion(questions, topic) {
    const questionText = document.getElementById('questionText');
    const questionsOfTopic = questions[topic];
    const randomIndex = Math.floor(Math.random() * questionsOfTopic.length);
    questionText.textContent = questionsOfTopic[randomIndex];
}
