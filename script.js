const modeBtn = document.getElementById('mode-btn');
const toggleGearBtn = document.getElementById('toggle-gear-btn');
const gearList = document.getElementById('gear-list');
const scanBtn = document.getElementById('scan-btn');
const scanStatus = document.getElementById('scan-status');

const discoveries = [
    "Detected an ice cave with water pools on Planet Frost.",
    "Identified a safe landing zone in the Martian red canyons.",
    "Picked up an ancient satellite signal from Sector 7.",
    "Discovered glowing green crystals inside a deep crater.",
    "Mapped an uncharted asteroid path near Jupiter's orbit."
];

let discoveryIndex = 0;

modeBtn.addEventListener('click', function () {
    const darkMode = document.body.classList.toggle('dark-theme');

    if (darkMode) {
        modeBtn.textContent = 'Switch to Light Mode';
    } else {
        modeBtn.textContent = 'Switch to Dark Mode';
    }
});

toggleGearBtn.addEventListener('click', function () {
    if (gearList.style.display === 'none') {
        gearList.style.display = 'block';
        toggleGearBtn.textContent = 'Hide Gear Checklist';
    } else {
        gearList.style.display = 'none';
        toggleGearBtn.textContent = 'Show Gear Checklist';
    }
});

scanBtn.addEventListener('click', function () {
    scanStatus.textContent = discoveries[discoveryIndex];
    discoveryIndex = discoveryIndex + 1;

    if (discoveryIndex === discoveries.length) {
        discoveryIndex = 0;
    }

    scanStatus.classList.add('scan-success');
});
