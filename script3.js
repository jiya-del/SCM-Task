// Handle Contact Form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you for your message, ${name}! We will get back to you at ${email} soon.`;

    // Send the form data to a server (if required)
});

// Handle Sign Up Form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;

    const signupResponseMessage = document.getElementById('signupResponseMessage');
    signupResponseMessage.textContent = `Thank you for signing up, ${name}! We will keep you updated at ${email}.`;

    // Send the form data to a server (if required)
});