
window.addEventListener('scroll', () => {
    const topBtn = document.getElementById('scroll-top-btn');
    
    if (topBtn) {
        if (window.scrollY > (window.innerHeight * 0.66)) {
            topBtn.classList.remove('hidden');
        } else {
            topBtn.classList.add('hidden');
        }
    }
});

const btnScrollTop = document.getElementById('scroll-top-btn');
if (btnScrollTop) {
    btnScrollTop.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}