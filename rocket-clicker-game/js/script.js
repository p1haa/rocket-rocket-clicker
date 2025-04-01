let count = 0;
let pointsPerClick = 1;
let autoClickers = 0;

const counter = document.getElementById("counter");
const rocket = document.getElementById("rocket");
const buyDoublePoints = document.getElementById("buyDoublePoints");
const buyAutoClicker = document.getElementById("buyAutoClicker");
const shop = document.getElementById("shop");
const shopToggle = document.getElementById("shopToggle");

// Function to update the counter display
function updateCounter() {
    counter.textContent = count;
    checkShopItems();
}

// Check if items in the shop can be purchased
function checkShopItems() {
    buyDoublePoints.disabled = count < 50;
    buyAutoClicker.disabled = count < 100;
}

// Click event for the rocket (increments points)
rocket.addEventListener("click", () => {
    count += pointsPerClick;
    updateCounter();
});

// Purchase Double Points
buyDoublePoints.addEventListener("click", () => {
    if (count >= 50) {
        count -= 50;
        pointsPerClick *= 2; // Double the points per click
        updateCounter();
        buyDoublePoints.disabled = true; // Disable after purchase
    }
});

// Purchase Auto-Clicker
buyAutoClicker.addEventListener("click", () => {
    if (count >= 100) {
        count -= 100;
        autoClickers++;
        updateCounter();

        // Start auto-clicker (adds points every second)
        setInterval(() => {
            count += pointsPerClick;
            updateCounter();
        }, 1000); // Every second

        checkShopItems(); // Re-check the shop
    }
});

// Toggle shop sliding in and out
shopToggle.addEventListener("click", () => {
    if (shop.style.left === "0px") {
        shop.style.left = "-300px"; // Slide out
    } else {
        shop.style.left = "0px"; // Slide in
    }
});
