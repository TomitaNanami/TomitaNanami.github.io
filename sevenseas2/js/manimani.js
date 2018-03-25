$(function() {

    setTimeout(function(){
        $('.box0').addClass('in-left');
    },300);

// スクロールイベント
    $(window).on('scroll',function(){
        // console.log('スクロールしている');

        // 上からのスクロール値
        var dy = $(this).scrollTop();
        console.log('dy:' + dy);



        if(dy >= 110){
            $('.box1').addClass('in-right');
        }

        if(dy >= 500){
            $('.box2').addClass('in-left');
        }

        if(dy >= 2000){
            $('.box3').addClass('in-right');
        }

        if(dy >= 2700){
            $('.box4').addClass('in-left');
        }
    });


    //メニュー開いたり閉じたり

    $('.header-container').find('.menu').on('click',function(){
        console.log('くりっく');

        $('.menu-container').css('display','block').removeClass('fade-out').addClass('fade-in');
    });


    $('.w-menu').on('click',function(){
        console.log('くりっく2');

        $('.menu-container').removeClass('fade-in').addClass('fade-out');
        setTimeout(function(){
            $('.menu-container').removeClass('fade-in').css('display','none');
        },1000);
    });


});
