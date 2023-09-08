document.addEventListener('DOMContentLoaded', () => {
    const chatHistory = document.getElementById('chat-history');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        const userMessage = userInput.value.trim();

        if (userMessage === '') return;

        // Simulate chatbot response (replace with your AI logic)
        const chatbotResponse = isEducationalQuestion(userMessage)
            ? 'Here is the answer to your educational question.'
            : 'I can only respond to educational questions.';

        appendMessage('User', userMessage);
        appendMessage('Chatbot', chatbotResponse);

        userInput.value = '';
    });

    function appendMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(sender.toLowerCase());
        messageDiv.textContent = `${sender}: ${message}`;
        chatHistory.appendChild(messageDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    function isEducationalQuestion(question) {
        // Replace this function with your own logic to detect educational questions
        // For simplicity, we're not implementing actual AI here.
        return question.toLowerCase().includes('educational');
    }
});
