document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation (you can replace this with server-side validation)
  if (username === 'user' && password === 'pass') {
      alert('Login successful!');
      // Redirect to another page or perform other actions
  } else {
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = 'Invalid username or password.';
  }
});             
