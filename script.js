
const form = document.getElementById('appointmentForm');
const message = document.getElementById('message');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let allFilled = true;
    const inputs = form.querySelectorAll('input,textarea,select');
    //2.grab all your fields
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });


    if (allFilled) {
        message.textContent = 'Appointment booked Successfully!';
        message.style.color = "green"
    }
    else {
        message.textContent = 'Please fill all the fields';
        message.style.color = "red";
    }

});









