document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you for signing up, ${username}! We will send a confirmation email to ${email}.`;

    // Here, you could also send the form data to a server using Fetch API or XMLHttpRequest
});