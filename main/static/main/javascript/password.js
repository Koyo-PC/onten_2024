document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("passwordForm").addEventListener("submit", function(event) {
        checkPassword(event);
    });
});

function checkPassword(event) {
    event.preventDefault();

    const enteredPassword = document.getElementById("password").value;
    const correctPassword = "onten";

    const passwordProtectionDiv = document.getElementById("password-protection");
    const contentDiv = document.getElementById("content");

    if (passwordProtectionDiv && contentDiv) {
        if (enteredPassword === correctPassword) {
            passwordProtectionDiv.style.display = "none";
            contentDiv.style.display = "block";
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        console.error("HTML elements not found.");
    }
}