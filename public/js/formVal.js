
document.getElementById('form').onsubmit = () => {

    clearErrors();

    // Flag variable to determine if form data is valid
    let isValid = true;

    // Validate first name
    let fname = document.getElementById('fname').value.trim();
    if (!fname) {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }

    // Validate last name
    let lname = document.getElementById('lname').value.trim();
    if (!lname) {
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }

    let date = document.getElementById('date').value.trim();
    if (!date) {
        document.getElementById("err-date").style.display = "block";
        isValid = false;
    }

    let time = document.getElementById('time').value.trim();
    if (!time) {
        document.getElementById("err-time").style.display = "block";
        isValid = false;
    }


    // Return isValid flag
    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}