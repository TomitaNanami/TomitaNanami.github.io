// DOMの読み込み
$(function(){

    setTimeout(function(){
        $('.box1').addClass('in-left');
    },300);

            setTimeout(function(){
                $('.box2').addClass('in-left');
            },600);

                setTimeout(function(){
                    $('.box3').addClass('in-left');
                },900);

                setTimeout(function(){
                    $('.box4').addClass('in-left');
                },1200);

                    setTimeout(function(){
                        $('.box5').addClass('in-left');
                    },1500);

                        setTimeout(function(){
                            $('.box6').addClass('in-left');
                        },1800);

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
