document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const messageDiv = document.getElementById('message');
    const userData = [];

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the username is already taken
        if (userData.find(user => user.username === username)) {
            messageDiv.textContent = 'Username already exists. Please choose another.';
            messageDiv.style.color = 'red';
            return;
        }

        // Store user data in the JavaScript array (for demonstration purposes)
        userData.push({ username, password });

        // Clear the form fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        messageDiv.textContent = 'Registration successful!';
        messageDiv.style.color = 'green';
    });
});
