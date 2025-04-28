function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Sample validation (you can replace with real authentication logic)
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        return true;
    } else {
        document.getElementById("errorMessage").style.display = "block";
        return false;
    }
}