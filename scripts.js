document.addEventListener("DOMContentLoaded", function () {
    // Change Background Color
    document.getElementById("changeColorBtn").addEventListener("click", function() {
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Registration Form Submission
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Registration Successful!");
    });
});