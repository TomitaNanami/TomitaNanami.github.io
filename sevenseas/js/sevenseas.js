$(function() {

    setTimeout(function(){
        $('.box1').addClass('in-left');
    },300);

// スクロールイベント
    $(window).on('scroll',function(){
        // console.log('スクロールしている');

        // 上からのスクロール値
        var dy = $(this).scrollTop();
        console.log('dy:' + dy);



        if(dy >= 80){
            $('.box2').addClass('in-right');
        }

        if(dy >= 680){
            $('.box3').addClass('in-left');
        }

        if(dy >= 2100){
            $('.box4').addClass('in-right');
        }

        if(dy >= 3000){
            $('.box5').addClass('in-left');
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
