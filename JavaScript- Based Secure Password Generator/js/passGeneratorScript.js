var keylisting = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%&*/\?";
var temporary = "";

function generatePass(passwordLength) {
    temporary = "";
    for (var i = 0; i < passwordLength; i++) {
        temporary += keylisting.charAt(Math.floor(Math.random() * keylisting.length))
    }
    return temporary;
}

function populateForm(enterLength) {
    document.passGen.output.value = generatePass(enterLength);
}

