function encrypt() {
    var message = document.getElementById("message").value;
    var shift = parseInt(document.getElementById("shift").value);

    if (!isNaN(shift)) {
        var encryptedMessage = cipherCesar(message, shift);
        document.getElementById("result").value = encryptedMessage;
    } else {
        alert("Digite um deslocamento válido.");
    }
}

function decrypt() {
    var message = document.getElementById("message").value;
    var shift = parseInt(document.getElementById("shift").value);

    if (!isNaN(shift)) {
        var decryptedMessage = cipherCesar(message, -shift);
        document.getElementById("result").value = decryptedMessage;
    } else {
        alert("Digite um deslocamento válido.");
    }
}

function cipherCesar(message, shift) {
    var result = "";
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            result += String.fromCharCode((charCode - 65 + shift + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            result += String.fromCharCode((charCode - 97 + shift + 26) % 26 + 97);
        } else {
            result += message.charAt(i);
        }
    }
    return result;
}
