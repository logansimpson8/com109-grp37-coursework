// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (!form) {
        console.error("Form not found");
        return;
    }

    form.addEventListener("submit", function (e) {

        // Get all fields
        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const gender = document.getElementById("gender");
        const address = document.getElementById("address");
        const city = document.getElementById("city");
        const postcode = document.getElementById("postalcode"); // matches your HTML

        let isValid = true;
        let message = "";

        // First Name
        if (!fname.value.trim()) {
            isValid = false;
            message += "First name is required\n";
        }

        // Last Name
        if (!lname.value.trim()) {
            isValid = false;
            message += "Last name is required\n";
        }

        // Email
        if (!email.value.trim()) {
            isValid = false;
            message += "Email is required\n";
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            isValid = false;
            message += "Enter a valid email\n";
        }

        // Phone
        if (!phone.value.trim()) {
            isValid = false;
            message += "Phone number is required\n";
        } else if (!/^\d{7,15}$/.test(phone.value)) {
            isValid = false;
            message += "Enter a valid phone number\n";
        }

        // Gender
        if (!gender.value) {
            isValid = false;
            message += "Please select a gender\n";
        }

        // Address
        if (!address.value.trim()) {
            isValid = false;
            message += "Address is required\n";
        }

        // City
        if (!city.value.trim()) {
            isValid = false;
            message += "City is required\n";
        }

        // Postal Code
        if (!postcode.value.trim()) {
            isValid = false;
            message += "Postal code is required\n";
        }

        // If invalid → stop submission
        if (!isValid) {
            e.preventDefault();
            alert(message);
        }else{
            e.preventDefault();
            window.location.href="payment.html";
        }
    });

});
