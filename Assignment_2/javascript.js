// Function to show the enlarged pizza image
function showEnlargedPizza(imageSrc) {
    const enlargedImage = document.getElementById('enlargedPizza');
    enlargedImage.src = imageSrc;
    enlargedImage.style.display = 'block'; // Make the enlarged image visible
}

// Function to hide the enlarged pizza image
function hideEnlargedPizza() {
    const enlargedImage = document.getElementById('enlargedPizza');
    enlargedImage.style.display = 'none'; // Hide the enlarged image
}

// Function to toggle the coupon code input based on user selection
function toggleCouponCode(enableCoupon) {
    const couponCodeInput = document.getElementById('coupon_code');
    couponCodeInput.disabled = !enableCoupon; // Enable/disable the coupon code input based on user selection
}

// Function to add fries to the order
function addFries() {
    // Assuming you have a way to get the price of fries
    let friesPrice = 3; // Replace this with your actual method to get the price

    // Get the current total price
    let totalPrice = parseFloat(document.getElementById("total-price").innerText);

    // Calculate the new total price by adding the fries price
    let newTotalPrice = totalPrice + friesPrice;

    // Update the fries price and total price display
    document.getElementById("fries-price").innerText = friesPrice.toFixed(2);
    document.getElementById("total-price").innerText = newTotalPrice.toFixed(2);
}

// Function to add cold drink to the order
function addColdDrink() {
    // Assuming you have a way to get the price of cold drinks
    let coldDrinkPrice = 2; // Replace this with your actual method to get the price

    // Get the current total price
    let totalPrice = parseFloat(document.getElementById("total-price").innerText);

    // Calculate the new total price by adding the cold drink price
    let newTotalPrice = totalPrice + coldDrinkPrice;

    // Update the cold drink price and total price display
    document.getElementById("cold-drink-price").innerText = coldDrinkPrice.toFixed(2);
    document.getElementById("total-price").innerText = newTotalPrice.toFixed(2);
}
