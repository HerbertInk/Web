function validateForm() {
    let service = document.forms["registration"]["service"].value;
    let date = document.forms["registration"]["date"].value;
    let name = document.forms["registration"]["name"].value;
    let phone = document.forms["registration"]["phone"].value;
    let email = document.forms["registration"]["email"].value;
    checkf(service);
    checkf(date);
    checkf(name);
    checkf(phone);
    checkf(email);
}

function checkf(f) {
    if (f == "") {
        alert("Field must be filled out");
        return false;

    }
}