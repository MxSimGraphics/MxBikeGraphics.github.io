function applyDiscount() {
    var discountCode = document.getElementById("discountCode").value;
    var discountCodeUsedInput = document.getElementById("discountCodeUsed");
    var originalPriceElement = document.getElementById("originalPrice");
    var selectedSeatCover = document.getElementById("slct5").value; // Get selected seat cover
 // Set the value of the hidden input field
    discountCodeUsedInput.value = discountCode;


    // Calculate original price based on selected seat cover
    var originalPrice = selectedSeatCover.includes("Seat cover") ? 17.00 : 15.00;

    // Check if discount code is valid
    if (discountCode === "43243243242") {
        var discountedPrice = originalPrice * 0.7; // Calculate 30% discount
        originalPriceElement.style.textDecoration = "line-through"; // Add strikethrough
        originalPriceElement.style.color = "red"; // Change color to red
        originalPriceElement.innerHTML = "$" + originalPrice.toFixed(2); // Update to show original price
        var discountedPriceElement = document.getElementById("discountedPrice");
        discountedPriceElement.innerHTML = "$" + discountedPrice.toFixed(2); // Display discounted price
        discountedPriceElement.parentNode.style.display = "block"; // Display discounted price section
    } else {
        // Reset the price to original price
        originalPriceElement.innerHTML = "$" + originalPrice.toFixed(2);
        originalPriceElement.style.textDecoration = "none"; // Remove strikethrough
        originalPriceElement.style.color = "black"; // Change color back to black
        var discountedPriceElement = document.getElementById("discountedPrice");
        discountedPriceElement.parentNode.style.display = "none"; // Hide discounted price section
    }
}
