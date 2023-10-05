window.onload = function () {
    const leftbtn = document.querySelector('.left-btn');
    const rightbtn = document.querySelector('.right-btn');
    const slide = document.querySelector('.story > ul');
    const slides = document.querySelectorAll('.story > ul > li');
    let currentIndex = 0;
    const slideWidth = 1400; // 각 슬라이드의 너비
    const slideCount = slides.length;
    const cloneCount = 2; // 왼쪽과 오른쪽에 각각 복제할 슬라이드 수

    // 슬라이드 요소를 복제하여 양쪽에 추가
    for (let i = 0; i < cloneCount; i++) {
        let cloneFirst = slides[i].cloneNode(true);
        let cloneLast = slides[slideCount - i - 1].cloneNode(true);
        slide.prepend(cloneLast);
        slide.appendChild(cloneFirst);
    }

    // 초기 슬라이드 위치 설정
    slide.style.left = `${-slideWidth * (currentIndex + cloneCount)}px`;

    leftbtn.addEventListener('click', () => {
        currentIndex--;
        slide.style.transition = 'transform 0.3s ease-in-out';
        slide.style.transform = `translateX(${currentIndex * -slideWidth}px)`;

        if (currentIndex === -1) {
            // 첫 번째 복제 슬라이드에서 왼쪽 화살표 클릭 시, 무한 루프
            setTimeout(() => {
                currentIndex = slideCount - 1;
                slide.style.transition = 'none'; // 전환 효과 제거
                slide.style.transform = `translateX(${currentIndex * -slideWidth}px)`;
            }, 300);
        }
    });

    rightbtn.addEventListener('click', () => {
        currentIndex++;
        slide.style.transition = 'transform 0.3s ease-in-out';
        slide.style.transform = `translateX(${currentIndex * -slideWidth}px)`;

        if (currentIndex === slideCount + cloneCount) {
            // 마지막 복제 슬라이드에서 오른쪽 화살표 클릭 시, 무한 루프
            setTimeout(() => {
                currentIndex = cloneCount;
                slide.style.transition = 'none'; // 전환 효과 제거
                slide.style.transform = `translateX(${currentIndex * -slideWidth}px)`;
            }, 300);
        }
    });


    const subListLinks = document.querySelectorAll('.sub-list ul li');

    subListLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            currentIndex = index;
            slide.style.transition = 'none';
            slide.style.transform = `translateX(${currentIndex * -slideWidth}px)`;
        });
    });
};
