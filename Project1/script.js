const themeBtn = document.getElementById('theme-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryCards = document.querySelectorAll('.gallery-card');
const calcBtn = document.getElementById('calc-btn');
const weightInput = document.getElementById('weight-input');
const destinationSelect = document.getElementById('destination-select');
const calcResult = document.getElementById('calc-result');
const scanBtn = document.getElementById('scan-btn');
const scannerChannel = document.getElementById('scanner-channel');
const scannerOutput = document.getElementById('scanner-output');

themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        themeBtn.textContent = 'Switch to Light Mode';
    } else {
        themeBtn.textContent = 'Switch to Dark Mode';
    }
});

filterBtns.forEach(function (button) {
    button.addEventListener('click', function () {
        filterBtns.forEach(function (btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        galleryCards.forEach(function (card) {
            const cardCategory = card.getAttribute('data-category');

            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

calcBtn.addEventListener('click', function () {
    const earthWeight = parseFloat(weightInput.value);
    const gravityFactor = parseFloat(destinationSelect.value);
    const destinationName = destinationSelect.options[destinationSelect.selectedIndex].text;

    if (isNaN(earthWeight) || earthWeight <= 0) {
        calcResult.innerHTML = '<p class="calc-result-text" style="color: #dc2626;">Please enter a valid weight in pounds.</p>';
        return;
    }

    const targetWeight = (earthWeight * gravityFactor).toFixed(1);
    const jumpMultiplier = (1 / gravityFactor).toFixed(1);

    calcResult.innerHTML = `
        <p class="calc-result-text">On ${destinationName}, you would weigh approximately ${targetWeight} lbs.</p>
        <p class="calc-result-note">Surface gravity factor: ${(gravityFactor * 100).toFixed(0)}% of Earth standard. You could jump about ${jumpMultiplier}x higher here.</p>
    `;
});

const scanTransmissions = [
    {
        channel: "Sector Alpha-4 (1420.4 MHz)",
        message: "Scout probe telemetry nominal. Detected clear atmospheric windows across the Martian red canyon ridge."
    },
    {
        channel: "Sector Cryo-9 (2104.8 MHz)",
        message: "Planet Frost sensors report subterranean heat plumes beneath the emerald ice caverns. Mineral harvest ready."
    },
    {
        channel: "Deep Orbital Relay (8410.2 MHz)",
        message: "Lunar station beacon active. Cargo transport docked at Bay 3 with fresh solar battery cells for the Starlight."
    },
    {
        channel: "Asteroid Field Asteria (5022.1 MHz)",
        message: "Minor gravitational wave fluctuation detected. Sparky recommends recalibrating navigation shields before departure."
    },
    {
        channel: "Outpost Sol-Prime (9211.0 MHz)",
        message: "Star charts updated. Next exploration sector scheduled for uncharted moon Europa-Delta."
    }
];

let currentScanIndex = 0;

scanBtn.addEventListener('click', function () {
    const data = scanTransmissions[currentScanIndex];
    scannerChannel.textContent = `Channel: ${data.channel}`;
    scannerOutput.textContent = data.message;

    currentScanIndex = (currentScanIndex + 1) % scanTransmissions.length;
});
