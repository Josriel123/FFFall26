const themeBtn = document.getElementById('theme-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const dinoCards = document.querySelectorAll('.dino-card');
const calcScaleBtn = document.getElementById('calc-scale-btn');
const userWeightInput = document.getElementById('user-weight');
const dinoSelect = document.getElementById('dino-select');
const scaleResult = document.getElementById('scale-result');
const soundSelectBtns = document.querySelectorAll('.sound-select-btn');
const soundTitle = document.getElementById('sound-title');
const soundDesc = document.getElementById('sound-desc');
const soundFreq = document.getElementById('sound-freq');
const soundDb = document.getElementById('sound-db');
const soundRole = document.getElementById('sound-role');

themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        themeBtn.textContent = 'Switch to Daylight Mode';
    } else {
        themeBtn.textContent = 'Switch to Volcanic Night';
    }
});

filterBtns.forEach(function (button) {
    button.addEventListener('click', function () {
        filterBtns.forEach(function (btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        dinoCards.forEach(function (card) {
            const cardCategory = card.getAttribute('data-category');

            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

calcScaleBtn.addEventListener('click', function () {
    const userWeight = parseFloat(userWeightInput.value);
    const dinoWeight = parseFloat(dinoSelect.value);
    const dinoName = dinoSelect.options[dinoSelect.selectedIndex].text.split('(')[0].trim();

    if (isNaN(userWeight) || userWeight <= 0) {
        scaleResult.innerHTML = '<p class="calc-result-title" style="color: #dc2626;">Please enter a valid weight in pounds.</p>';
        return;
    }

    if (dinoWeight < userWeight) {
        const ratio = (userWeight / dinoWeight).toFixed(1);
        scaleResult.innerHTML = `
            <p class="calc-result-title">You are about ${ratio}x heavier than a ${dinoName}!</p>
            <p class="calc-result-detail">Velociraptors were turkey-sized agile hunters weighing around 35 lbs, relying on pack coordination and speed rather than sheer mass.</p>
        `;
    } else {
        const ratio = (dinoWeight / userWeight).toFixed(1);
        const humansNeeded = Math.round(dinoWeight / userWeight);
        const dailyMeatOrPlants = Math.round(dinoWeight * 0.05);

        scaleResult.innerHTML = `
            <p class="calc-result-title">A ${dinoName} was approximately ${ratio}x your body weight!</p>
            <p class="calc-result-detail">It would take roughly ${humansNeeded} people of your weight to balance the scales against this creature. Estimated daily sustenance required: ~${dailyMeatOrPlants.toLocaleString()} lbs of food per day.</p>
        `;
    }
});

const acousticProfiles = {
    trex: {
        title: "Acoustic Profile: Tyrannosaurus Rex Infrasound",
        desc: "Low-frequency infrasound vibration below 20 Hz. This deep vibrational rumble could travel for miles through dense prehistoric forest floors without alerting distant prey.",
        freq: "Frequency: 12 - 35 Hz",
        db: "Intensity: ~115 dB (Sub-audible rumble)",
        role: "Purpose: Territory Marking & Infrasonic Communication"
    },
    brachio: {
        title: "Acoustic Profile: Brachiosaurus Resonant Call",
        desc: "Massive cavernous chest reverberation producing deep brass-like bellowing. Sound traveled along river basins to maintain herd cohesion over vast Jurassic floodplains.",
        freq: "Frequency: 45 - 90 Hz",
        db: "Intensity: ~125 dB (Distant thunder tone)",
        role: "Purpose: Herd Navigation & Long-Range Calling"
    },
    raptor: {
        title: "Acoustic Profile: Velociraptor Pack Hiss & Chirp",
        desc: "High-frequency avian vocalizations, sharp predatory chirps, and warning hisses modulated through flexible tracheal syrinx chambers during coordinated canyon flanking.",
        freq: "Frequency: 400 - 1800 Hz",
        db: "Intensity: ~85 dB (Audible sharp click)",
        role: "Purpose: Tactical Pack Coordination & Alarm Signals"
    },
    spino: {
        title: "Acoustic Profile: Spinosaurus Semi-Aquatic Growl",
        desc: "Throaty aquatic bellows and surface water slapping vibrations. Used along murky river deltas to disorient shoals of prehistoric fish and assert dominance along river banks.",
        freq: "Frequency: 60 - 150 Hz",
        db: "Intensity: ~110 dB (Throaty gutter growl)",
        role: "Purpose: Waterway Dominance & Ambush Signaling"
    }
};

soundSelectBtns.forEach(function (button) {
    button.addEventListener('click', function () {
        soundSelectBtns.forEach(function (btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        const dinoKey = button.getAttribute('data-dino');
        const profile = acousticProfiles[dinoKey];

        if (profile) {
            soundTitle.textContent = profile.title;
            soundDesc.textContent = profile.desc;
            soundFreq.textContent = profile.freq;
            soundDb.textContent = profile.db;
            soundRole.textContent = profile.role;
        }
    });
});
