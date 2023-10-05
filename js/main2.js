$(function() {
    $('.slide').bxSlider({
        auto: true, //슬라이드 자동전환
        autoControls : true, // 자동재생 멈춤버튼
        speed: 1000
    })


    $(document).scroll(function(){
        let scTop = $(this).scrollTop();
        console.log(scTop);
        if(scTop>700) {
            $('.information').css({
                'opacity' : 1,
                'transition' : 'all 0.5s ease-in-out'})
        }else {
            $('.information').css('opacity' , 0)
        }
    })
});