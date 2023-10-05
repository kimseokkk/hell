$(function(){
    $('.question').click(function(){
        if($(this).next().css('display') =='none') {
            $(this).next().slideDown(300);
        }else {
            $(this).next().slideUp(300);
        }
    })

    $('#sendInquiry').click(e => {
        alert('준비중입니다!')
    })
})