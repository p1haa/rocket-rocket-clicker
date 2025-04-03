let count = 0;
let pointsPerClick = 1;
let autoClickers = 0;
let doublePointsPurchased = 0;
const maxPurchases = 50;

const counter = document.getElementById("counter");
const rocket = document.getElementById("rocket");
const buyDoublePoints = document.getElementById("buyDoublePoints");
const buyAutoClicker = document.getElementById("buyAutoClicker");
const shop = document.getElementById("shop");
const shopToggle = document.getElementById("shopToggle");
const doublePointsCount = document.getElementById("doublePointsCount");
const autoClickerCount = document.getElementById("autoClickerCount");

// Function to update the counter display
function updateCounter() {
    counter.textContent = count;
    checkShopItems();
}

// Check if items in the shop can be purchased
function checkShopItems() {
    buyDoublePoints.disabled = count < 50 || doublePointsPurchased >= maxPurchases;
    buyAutoClicker.disabled = count < 100 || autoClickers >= maxPurchases;
}

// Click event for the rocket (adds points per click)
rocket.addEventListener("click", () => {
    count += pointsPerClick;
    updateCounter();
});

// Purchase Double Points (adds +1 per click)
buyDoublePoints.addEventListener("click", () => {
    if (count >= 50 && doublePointsPurchased < maxPurchases) {
        count -= 50;
        pointsPerClick += 1; // Increase points per click
        doublePointsPurchased++;
        doublePointsCount.textContent = `${doublePointsPurchased}/50`;
        updateCounter();
    }
});

// Purchase Auto-Clicker (adds auto points every second)
buyAutoClicker.addEventListener("click", () => {
    if (count >= 100 && autoClickers < maxPurchases) {
        count -= 100;
        autoClickers++;
        autoClickerCount.textContent = `${autoClickers}/50`;
        updateCounter();

        // Start auto-clicker (adds points per second)
        setInterval(() => {
            count += pointsPerClick;
            updateCounter();
        }, 1000);
    }
});

// Toggle shop sliding in and out
shopToggle.addEventListener("click", () => {
    shop.classList.toggle("open"); // Add/remove "open" class
});
