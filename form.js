document.getElementById("signup-toggle").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
});

document.getElementById("login-toggle").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
});

function validateLogin() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    if (email === "" || password === "") {
        alert("Please fill in both fields.");
        return false;
    }

    // Add more validation rules as needed
    return true;
}

function validateSignup() {
    var name = document.getElementById("signup-name").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById("signup-confirm-password").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Add more validation rules as needed
    return true;
}
