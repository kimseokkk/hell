$(document).ready(function () {
    let currentSection = 0;
    let totalSections = $("section").length;
    let wheelCount = 0; // 휠 이벤트 발생 횟수를 추적할 변수 추가
    let isTransitionEnabled = true; // 트랜지션 활성화 여부를 추적하는 변수

    // 페이지 로드 후 첫 번째 섹션 표시
    $("section").hide();
    $("section").eq(currentSection).show();

    const video = document.getElementById("everVideo");

    // 페이지 로드 후 비디오의 opacity를 1로 변경

    // 페이지 로드 후 5초 뒤에 비디오 재생
    setTimeout(function () {
        video.play();
    }, 2000); // 5초 (5000 밀리초) 지연

    setTimeout(function () {
        $('.main-title .flex-box').css({ 
            transform: 'translate(0, 0)', 
            transition: 'all 1s ease-out'
        });
    }, 4000);

    $('.hamburger-btn').click(function () {
        $('.right-menu')
            .animate({'left' : 0}, 1000, 'swing');
    });

    $('#closeBtn').click(function () {
        $('.right-menu')
            .animate({'left' : '-528px'}, 1000, 'swing');
    });

    $(window).on("wheel", function (event) {
        wheelCount++;

        if (event.originalEvent.deltaY > 0) {
            // 스크롤 다운 (다음 섹션으로 이동)
            if (currentSection < totalSections - 1) {
                $("section").eq(currentSection).slideUp(500);
                currentSection++;
                $("section").eq(currentSection).slideDown(500);
            } 
        } else {
            // 스크롤 업 (이전 섹션으로 이동)
            if (currentSection > 0) {
                $("section").eq(currentSection).slideUp(500);
                currentSection--;
                $("section").eq(currentSection).slideDown(500);
            }
        }
    
        // currentSection에 따라 비디오 표시 여부 업데이트
        if (currentSection > 0){
            $(video).css({
                'display' : 'none',
                'transition' : 'none'
            });
        } else {
            $(video).css({
                'display' : 'block',
                'transition' : 'none'
            });
        }
    
        console.log(currentSection);
        });
    $(document).stop().keydown(function(event) {
        if (event.which === 40) {
            if (currentSection < totalSections) {
                $("section").eq(currentSection).slideDown(500);
                currentSection++;
                $("section").eq(currentSection).slideUp(0);
            } 
        } else if (event.which === 38) {
            if (currentSection >= 0) {
                $("section").eq(currentSection).slideUp(500);
                currentSection--;
                $("section").eq(currentSection).slideDown(0);
            }
        }
        console.log('현재 섹션 번호: ' + currentSection); // 현재 섹션 번호 출력
    });
});
