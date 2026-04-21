document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        let errors = [];

        const name = document.getElementById("CardName").value.trim();
        const number = document.getElementById("CardNumber").value.trim();
        const type = document.getElementById("CardType").value;
        const expMonth = document.getElementById("ExpDateMonth").value.trim();
        const expYear = document.getElementById("ExpDateYear").value.trim();
        const cvv = document.getElementById("CVV").value.trim();

        // Cardholder name
        if (name === "") {
            errors.push("Cardholder name is required");
        }

        // Card number (basic 16-digit check)
        if (!/^\d{16}$/.test(number)) {
            errors.push("Card number must be 16 digits");
        }

        // Card type
        if (type === "") {
            errors.push("Please select a card type");
        }

        // Expiration month (1–12)
        if (!/^(0?[1-9]|1[0-2])$/.test(expMonth)) {
            errors.push("Invalid expiration month");
        }

        // Expiration year (2 or 4 digits)
        if (!/^\d{2,4}$/.test(expYear)) {
            errors.push("Invalid expiration year");
        }

        // CVV (3 or 4 digits)
        if (!/^\d{3,4}$/.test(cvv)) {
            errors.push("Invalid CVV");
        }

        // If errors exist, stop form submission
        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        }
    });
});