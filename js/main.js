$(function () {
    let currentSection = 0;
    let totalSections = $("section").length;
    const video = document.getElementById("everVideo");

    // 페이지 로드 후 비디오의 opacity를 1로 변경

    // 페이지 로드 후 5초 뒤에 비디오 재생
setTimeout(function () {
    video.play();
}, 2000);

setTimeout(function () {
    $('.main-title .flex-box').css({
        transform: 'translate(0, 0)',
        transition: 'all 1s ease-out'
    });
}, 4000);

$('.hamburger-btn').click(function () {
    $('.right-menu').animate({ 'left': 0 }, 1000, 'swing');
});

$('#closeBtn').click(function () {
    $('.right-menu').animate({ 'left': '-528px' }, 1000, 'swing');
});

$("#top-btn").click(function () {
    $('html , body').animate({ scrollTop: 0 }, 1000, function () {
        // 'top-btn' 클릭 이벤트 후에 'scroll()' 함수를 호출하고 moveIndex를 초기화
        scroll();
    });
});

    
function scroll() {
    var $cnt = null,
    moveCnt = null,
    moveIndex = 0,
    moveCntTop = 0,
    winH = 0,
    time = false;
    
    $(document).ready(function () {
        init();
        initEvent();
    });
    
    var init = function () {
        $cnt = $("main");
    };
    
    var initEvent = function () {
        $("html ,body").scrollTop(0);
        winResize();
        $(window).resize(function () {
            winResize();
        });
        $(document).on({
            "mousewheel": function (e) {
                if (time === false) {
                    wheel(e);
                }
            },
        });
    };
    
    var winResize = function () {
        winH = $(window).height();
        $cnt.children("section").height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    var wheel = function (e) {
        if (e.originalEvent.wheelDelta < 0) {
            if (moveIndex < totalSections - 1) {
                moveIndex += 1;
                moving(moveIndex);
            };
        } else {
            if (moveIndex > 0) {
                moveIndex -= 1;
                moving(moveIndex);
            };
        };
    };

    
    var moving = function (index) {
        time = true;
        moveCnt = $("section").eq(index);
        moveCntTop = moveCnt.offset().top;
        
        switch (index) {
            case 1:
                $('.attr-info .attr-bg').css({
                    'top': '',
                    'height': '',
                    'width': '',
                    'opacity': '',
                });
                $('.attr-mask').css({
                    'opacity' : 0,
                    'transition' : 'none'
                });
            break;

            case 2:
                // 2번 섹션에서 실행할 애니메이션 코드
                $('.attr-info .attr-bg').css({
                    'top': '0',
                    'height': '693px',
                    'width': '550px',
                    'opacity': 1,
                    'z-index' : 1
                });
                setTimeout(function () {
                    $('.attr-mask').css({
                        'opacity': 1,
                    });
                }, 900);
                break;

                case 3:
                    // 4번 섹션에서 실행할 애니메이션 코드
                    $('.zooto-info .zooto-bg').css({
                        'left': '',
                        'top': '',
                        'height': '',
                        'width': '',
                        'opacity': ''
                    });
                    break;
        
            case 4:
                // 4번 섹션에서 실행할 애니메이션 코드
                $('.zooto-info .zooto-bg').css({
                    'left': '-20%',
                    'top': '0',
                    'height': '500px',
                    'width': '',
                    'opacity': 1
                });
                break;
        
            default:
                break;
        }

        $("html ,body").animate({ scrollTop: moveCntTop }, 1000, function () {
            time = false;}
)};
    
    

    $('.downBtn').click(function () {
        time = true;
        moveIndex +=1;
        moving(moveIndex);
        time = false;
    });


    let keyCode = 0

    let keyEventActive = true; // 키 이벤트 활성화 상태

    // 키보드 이벤트 처리
    $(document).keydown(function(e){
        // 키 이벤트가 활성화되어 있을 때만 처리
        if (keyEventActive) {
            switch (e.key) {
                case "ArrowDown":
                    if (moveIndex < totalSections - 1) {
                        moveIndex += 1;
                        moving(moveIndex);
                    }
                    break;
                
                case "ArrowUp":
                    if (moveIndex > 0) {
                        moveIndex -= 1;
                        moving(moveIndex);
                    }
                    break;
                default:
                    break;
            }

            // 키 이벤트를 비활성화하여 중복 실행을 방지
            keyEventActive = false;

            // 일정 시간(예: 500ms) 후에 다시 키 이벤트 활성화
            setTimeout(function () {
                keyEventActive = true;
            }, 1000);
        }
    })
    
    // 모든 다운 버튼에 대한 이벤트 핸들러를 할당

    // 'scroll()' 함수가 처음에 한 번 호출될 때 moveIndex 초기화
    moveIndex = 0;
}

scroll(); // 페이지 로드 시 한 번 호출


    console.log($('main').scrollTop())

});
