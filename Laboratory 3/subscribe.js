
window.addEventListener('load', () => {
    if (!localStorage.getItem('isSubscribed')) {
        setTimeout(() => {
            const banner = document.getElementById('sub-banner');
            if (banner) banner.classList.remove('hidden');
        }, 3000);
    }
});

const acceptBtn = document.getElementById('sub-accept');
if (acceptBtn) {
    acceptBtn.onclick = () => {
        localStorage.setItem('isSubscribed', 'true');
        alert("Дякуємо за підписку!");
        document.getElementById('sub-banner').classList.add('hidden');
    };
}

const declineBtn = document.getElementById('sub-decline');
if (declineBtn) {
    declineBtn.onclick = () => {
        document.getElementById('sub-banner').classList.add('hidden');
    };
}