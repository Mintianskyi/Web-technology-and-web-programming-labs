let adShown = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 400 && !adShown) {
        showAdModal();
        adShown = true;
    }
});

function showAdModal() {
    const modal = document.getElementById('ad-modal');
    const closeBtn = document.getElementById('close-ad-btn');
    const timerSpan = document.getElementById('close-ad-timer');
    let timeLeft = 5;

    if (modal) modal.classList.remove('hidden');

    const interval = setInterval(() => {
        timeLeft--;
        timerSpan.innerText = `Закрити через ${timeLeft}...`;
        
        if (timeLeft <= 0) {
            clearInterval(interval);
            timerSpan.classList.add('hidden');
            closeBtn.disabled = false;
        }
    }, 1000);

    if (closeBtn) {
        closeBtn.onclick = () => modal.classList.add('hidden');
    }
}