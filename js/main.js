$(document).ready(function () {
    var currentSection = 0;
    var totalSections = $("section").length;

    // 페이지 로드 후 첫 번째 섹션 표시
    $("section").eq(currentSection).addClass("visible");

    var video = document.getElementById("everVideo");

    // 페이지 로드 후 비디오의 opacity를 1로 변경
    $(video).on("canplay", function () {
        $(this).animate({ opacity: 1 }, 2000); // 1초 동안 애니메이션
    });

    // 페이지 로드 후 5초 뒤에 비디오 재생
    setTimeout(function () {
        video.play();
    }, 2500); // 5초 (5000 밀리초) 지연

    setTimeout(function () {
        $('.main-title .flex-box').css({ transform: 'translate(0, 0)' })
    }, 5000)

    $(window).on("wheel", function (event) {
        if (event.originalEvent.deltaY > 0) {
            // 스크롤 다운 (다음 섹션으로 이동)
            if (currentSection < totalSections - 1) {
                $("section").eq(currentSection).removeClass("visible");
                currentSection++;
                $("section").eq(currentSection).addClass("visible");
            }
        } else {
            // 스크롤 업 (이전 섹션으로 이동)
            if (currentSection > 0) {
                $("section").eq(currentSection).removeClass("visible");
                currentSection--;
                $("section").eq(currentSection).addClass("visible");
            }
        }
    });

    $('.hamburger-btn').click(function () {
        $('.right-menu')
            .css({
                'transition': 'all 2s ease-out',
                'left': 0
            })
    })

    $('#closeBtn').click(function () {
        $('.right-menu')
            .css({
                'transition': 'all 2s ease-in',
                'left': '-100%'
            })
    });
});



