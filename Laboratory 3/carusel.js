const track = document.getElementById('track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentPosition = 0; 

nextBtn.addEventListener('click', () => {
    const slide = document.querySelector('.carusel-slide');
    const slideWidth = slide.offsetWidth + 20;
    
    const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;

    if (currentPosition < maxScroll) {
        currentPosition += slideWidth;
        
        if (currentPosition > maxScroll) {
            currentPosition = maxScroll;
        }
        
        track.style.marginLeft = "-" + currentPosition + "px";
    }
});

prevBtn.addEventListener('click', () => {
    const slide = document.querySelector('.carusel-slide');
    const slideWidth = slide.offsetWidth + 20;

    if (currentPosition > 0) {
        currentPosition -= slideWidth;
        
        if (currentPosition < 0) {
            currentPosition = 0;
        }
        
        track.style.marginLeft = "-" + currentPosition + "px";
    }
});