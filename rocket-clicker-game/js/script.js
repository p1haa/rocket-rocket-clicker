let count = 0;
let pointsPerClick = 1;
let autoClickers = 0;
const maxPurchases = 50;

const counter = document.getElementById("counter");
const rocket = document.getElementById("rocket");
const buyMorePerClick = document.getElementById("buyDoublePoints");
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
    buyMorePerClick.disabled = count < 50 || buyMorePerClick >= maxPurchases;
    buyAutoClicker.disabled = count < 100 || autoClickers >= maxPurchases;
}

// Click event for the rocket (increments points)
rocket.addEventListener("click", () => {
    count += pointsPerClick;
    updateCounter();
});

// Purchase Double Points
buyMorePerClick.addEventListener("click", () => {
    if (count >= 50 && buyMorePerClick < maxPurchases) {
        count -= 50;
        pointsPerClick *= 2; // Double the points per click
        buyMorePerClick++;
        doublePointsCount.textContent = `${doublePointsPurchased}/50`;
        updateCounter();
    }
});

// Purchase Auto-Clicker
buyAutoClicker.addEventListener("click", () => {
    if (count >= 100 && autoClickers < maxPurchases) {
        count -= 100;
        autoClickers++;
        autoClickerCount.textContent = `${autoClickers}/50`;
        updateCounter();

        // Start auto-clicker (adds points every second)
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
