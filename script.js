const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const celebration = document.getElementById('celebration');
let noBtnSize = 18;

yesBtn.addEventListener('click', () => {
    celebration.style.display = 'block';
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('h1').textContent = 'Purr-fect! You said yes! 😻💝';
    document.querySelector('.cat').textContent = '';
    createConfetti();
});

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    
    noBtnSize = Math.max(8, noBtnSize - 2);
    noBtn.style.fontSize = noBtnSize + 'px';
    yesBtn.style.fontSize = (18 + (18 - noBtnSize) * 2) + 'px';
});

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = ['#e74c3c', '#f39c12', '#9b59b6', '#3498db'][Math.floor(Math.random() * 4)];
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 50);
    }
}

function createFloatingCats() {
    return;
}

createFloatingCats();
