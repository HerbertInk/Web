document.getElementById("username").onblur = function() {
    const username = this.value;

    if (username.length < 3) {
        alert("Username is a minimum of 3 char");
    }
};

function validateForm() {
    const firstName = document.getElementById("first-name").value;
    const surname = document.getElementById("surname").value;
    const username = document.getElementById("username").value;
    const contactInfo = document.getElementById("contact-info").value;
    const createPassword = document.getElementById("create-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const bio = document.getElementById("bio").value;

    if (username.length < 3) {
        alert("Username is minimum of 3 char");
        return false;
    }

    if (firstName === "" || surname === "" || username === "" || contactInfo === "" || createPassword === "" || confirmPassword === "" || gender === null) {
        alert(`Hello @${username}, missing.`);
        return false;
    }

    const contactPattern = /^\+\d{1,3}\s\d{6,15}$/; // Matches a country code  '+256' followed by numbers.
    if (!contactPattern.test(contactInfo)) {
        alert(`Hello @${username}, Contact :: includes valid country code (+256) 123456789.`);
        return false;
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    if (!passwordPattern.test(createPassword)) {
        alert(`Hello @${username}, password should have at least one uppercase char, one lowercase char, one digit, one symbol, should be 8 characters long`);
        return false;
    }

    if (bio.length > 256) {
        alert(`Hello @${username}, Bio should be a maxi of 256 char`);
        return false;
    }

    // valid.
    return true;
}
