// JavaScript to handle the donation functionality
document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const donateButton = document.getElementById("donate-button");
    const donationInput = document.getElementById("donation-amount");
    const totalDonate = document.getElementById("total-donate");

    // Event listener for "Donate Now" button
    donateButton.addEventListener("click", () => {
        // Get the entered donation amount
        const donationValue = parseFloat(donationInput.value);

        // Check if the input is a valid number
        if (!isNaN(donationValue) && donationValue > 0) {
            // Add the donation amount to the current total
            const currentTotal = parseFloat(totalDonate.textContent);
            const newTotal = currentTotal + donationValue;

            // Update the total donate amount on the page
            totalDonate.textContent = newTotal.toFixed(2);

            // Clear the input field
            donationInput.value = "";
        } else {
            alert("Please enter a valid donation amount.");
        }
    });
});
