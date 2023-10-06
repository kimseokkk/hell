$(function() {
    let currentSection = 0;
    let totalSections = $("section").length;

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
    
    $("#top-btn").click(function(){
        $('html').animate({scrollTop : 0}, 1000);
    })
    var scroll = function(){
        
    var    $cnt = null,
            moveCnt = null,
            moveIndex = 0,
            moveCntTop = 0,
            winH = 0,
            time = false; // 새로 만든 변수
    
        $(document).ready(function(){
            init();
            initEvent();
        });
        
        var init = function(){
            $cnt = $("main");
        };
        
        var initEvent = function(){
            $("html ,body").scrollTop(0);
            winResize();
            $(window).resize(function(){
                winResize();
            });
            $(document).on({"mousewheel" : function(e){
                if(time === false){ // time 변수가 펄스일때만 휠 이벤트 실행
                wheel(e);
                }
            }
            });
        };
            
        var winResize = function(){
            winH = $(window).height();
            $cnt.children("section").height(winH);
            $("html ,body").scrollTop(moveIndex.scrollTop);
        };
        
        var wheel = function(e){
            if(e.originalEvent.wheelDelta < 0){
                if(moveIndex < totalSections){
                    moveIndex += 1;
                    moving(moveIndex);
                };
            }else{
                if(moveIndex > 0){
                    moveIndex -= 1;
                    moving(moveIndex);
                };
            };
        };
        
        var moving = function(index){
            time = true // 휠 이벤트가 실행 동시에 true로 변경
            moveCnt = $("section").eq(index);
            moveCntTop = moveCnt.offset().top;
            $("html ,body").stop().animate({
                scrollTop: moveCntTop
            }, 1000, function(){
            time = false; // 휠 이벤트가 끝나면 false로 변경
            });
        };
        
    };
    
    scroll();
    

    console.log($('main').scrollTop())

    if (currentSection > 0){
        $(video).css({
            'opacity' : 0,
            'transition' : 'all 0.3s linear'
        });
    } else {
        $(video).css({
            'opacity' : 1,
            'transition' : 'all 0.3s linear'
        });
    }
});
