$('.header-container').find('.menu').on('click',function(){
    console.log('くりっく');
    $('.home').css('display','none');
    $('.menu-container').css('display','block').addClass('fade-in')
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
