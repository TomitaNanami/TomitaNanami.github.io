$('.header-container').find('.menu').on('click',function(){
    console.log('くりっく');
    $('.home').css('display','none');
    $('.menu-container').css('display','block').removeClass('fade-out').addClass('fade-in');
});

$('.w-menu').on('click',function(){
    console.log('くりっく2');
    $('.home').css('display','block');
    $('.menu-container').removeClass('fade-in').addClass('fade-out');
    setTimeout(function(){
        $('.menu-container').remove();
    },1000);
});



var windowWidth;
var windowHeight;

    // windowをリサイズしたら
    $(window).on('resize',function(){
        console.log('リサイズ');

        resizeWindow();


    });


function resizeWindow(){
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    $('.menu-container').width(windowWidth);
    $('.menu-container').height(windowHeight);

}
