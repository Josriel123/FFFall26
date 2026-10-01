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
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        modeBtn.innerHTML = 'Switch to Light Mode';
        modeBtn.style.backgroundColor = '#475569';
    } else {
        modeBtn.innerHTML = 'Switch to Dark Mode';
        modeBtn.style.backgroundColor = '#2b6cb0';
    }
});

toggleGearBtn.addEventListener('click', function () {
    if (gearList.style.display === 'none') {
        gearList.style.display = 'block';
        toggleGearBtn.innerHTML = 'Hide Gear Checklist';
        toggleGearBtn.style.backgroundColor = '#2b6cb0';
    } else {
        gearList.style.display = 'none';
        toggleGearBtn.innerHTML = 'Show Gear Checklist';
        toggleGearBtn.style.backgroundColor = '#d97706';
    }
});

scanBtn.addEventListener('click', function () {
    scanStatus.innerHTML = discoveries[discoveryIndex];
    discoveryIndex = (discoveryIndex + 1) % discoveries.length;

    scanStatus.style.color = '#0369a1';
    scanStatus.style.fontWeight = '600';
    scanStatus.classList.add('scan-success');
});
