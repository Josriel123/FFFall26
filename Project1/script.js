const themeBtn = document.getElementById('theme-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const dinoCards = document.querySelectorAll('.dino-card');
const calcBtn = document.getElementById('calc-btn');
const userWeightInput = document.getElementById('user-weight');
const dinoSelect = document.getElementById('dino-select');
const calcResult = document.getElementById('calc-result');
const soundBtns = document.querySelectorAll('.sound-btn');
const soundName = document.getElementById('sound-name');
const soundDesc = document.getElementById('sound-desc');

themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
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

        const filter = button.getAttribute('data-filter');

        dinoCards.forEach(function (card) {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

calcBtn.addEventListener('click', function () {
    const userWeight = parseFloat(userWeightInput.value);
    const dinoWeight = parseFloat(dinoSelect.value);
    const selectedOption = dinoSelect.options[dinoSelect.selectedIndex].text;

    if (isNaN(userWeight) || userWeight <= 0) {
        calcResult.textContent = 'Please enter a valid weight in pounds.';
        calcResult.style.color = '#d32f2f';
        return;
    }

    calcResult.style.color = '#2e7d32';

    if (dinoWeight < userWeight) {
        const timesLighter = (userWeight / dinoWeight).toFixed(1);
        calcResult.textContent = `You are about ${timesLighter} times heavier than a Velociraptor!`;
    } else {
        const howManyPeople = Math.round(dinoWeight / userWeight);
        calcResult.textContent = `It would take about ${howManyPeople} people of your weight to equal one ${selectedOption}!`;
    }
});

const soundData = {
    trex: {
        name: "T-Rex Deep Rumble",
        desc: "Scientists believe T-Rex made low, vibrating rumbles that traveled through the ground instead of loud roars."
    },
    brachio: {
        name: "Brachiosaurus Low Call",
        desc: "A deep, booming call that could be heard across miles of open Jurassic river plains to keep the herd together."
    },
    raptor: {
        name: "Velociraptor Chirps and Hisses",
        desc: "Sharp bird-like chirps, clicks, and warning hisses used by the pack to communicate while hunting."
    },
    spino: {
        name: "Spinosaurus River Growl",
        desc: "Throaty growls and splashing vibrations near the water to scare away rivals from its fishing territory."
    }
};

soundBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        soundBtns.forEach(function (b) {
            b.classList.remove('active');
        });
        btn.classList.add('active');

        const soundKey = btn.getAttribute('data-sound');
        const selectedSound = soundData[soundKey];

        if (selectedSound) {
            soundName.textContent = selectedSound.name;
            soundDesc.textContent = selectedSound.desc;
        }
    });
});
