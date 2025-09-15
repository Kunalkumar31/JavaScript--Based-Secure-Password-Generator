// Character sets
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%&*/?";

function generatePass(length) {
    const allChars = lowerCase + upperCase + numbers + symbols;
    let password = "";

    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return password;
}

// Animated typing of password
function populatePasswordAnimated(password) {
    const output = document.getElementById("passwordOutput");
    output.value = "";
    let i = 0;
    const interval = setInterval(() => {
        output.value += password.charAt(i);
        i++;
        if (i >= password.length) clearInterval(interval);
    }, 50); // typing speed
}

document.getElementById("generateBtn").addEventListener("click", () => {
    const length = parseInt(document.getElementById("passwordLength").value) || 8;
    const password = generatePass(length);
    populatePasswordAnimated(password);
});
