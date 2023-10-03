window.onload = function() {
    const leftbtn = document.querySelector('.left-btn');
    const rightbtn = document.querySelector('.right-btn');
    const slide = document.querySelector('.story > ul');
    const slides = document.querySelectorAll('.story > ul > li');
    let currentIndex = 0;

    leftbtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });

    rightbtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlidePosition();
        }
    });

    function updateSlidePosition() {
        const newPosition = -1400 * currentIndex;
        slide.style.transform = `translateX(${newPosition}px)`;
    }
}