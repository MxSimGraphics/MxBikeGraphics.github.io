
function applyDiscount() {
    var discountCode = document.getElementById("discountCode").value;
    var discountCodeUsedInput = document.getElementById("discountCodeUsed");
    var originalPriceElement = document.getElementById("originalPrice");
    var newPriceElement = document.getElementById("newPrice");
    var selectedSeatCover = document.getElementById("slct5").value; // Get selected seat cover
    
    // Set the value of the hidden input field
    discountCodeUsedInput.value = discountCode;

    // Calculate original price based on selected seat cover
    var originalPrice = selectedSeatCover.includes("Seat cover") ? 17.00 : 15.00;
    var newPrice = selectedSeatCover.includes("Seat cover") ? 11.00 : 9.00;

    // Update the prices on the page
    originalPriceElement.innerHTML = "$" + originalPrice.toFixed(2);
    newPriceElement.innerHTML = "$" + newPrice.toFixed(2);

    // Define discount codes and their respective discounts
    var discounts = {
        // "summersale": 0.4,    // 40% discount
        // "sponsorship": 0.3    // 30% discount
    };

    // Check if the discount code is valid
    if (discounts.hasOwnProperty(discountCode)) {
        var discountPercentage = discounts[discountCode];
        var discountedPrice = originalPrice * (1 - discountPercentage); // Calculate discounted price

        // Show discounted price
        var discountedPriceElement = document.getElementById("discountedPrice");
        discountedPriceElement.innerHTML = "$" + discountedPrice.toFixed(2); // Display discounted price
        discountedPriceElement.parentNode.style.display = "block"; // Display discounted price section
    } else {
        // Hide discounted price section
        var discountedPriceElement = document.getElementById("discountedPrice");
        discountedPriceElement.parentNode.style.display = "none"; // Hide discounted price section
    }
}
