// DOMの読み込み
$(function(){

    $('.right-menu').on('click',function(){
        $('header nav').addClass('right-menu-open').addClass('fade-in');
        $('.right-menu').css('opacity',0);
    });
    $('.right-close').on('click',function(){
        $('header nav').removeClass('right-menu-open').removeClass('fade-in');
        $('.right-menu').css('opacity',1);
    });



});
