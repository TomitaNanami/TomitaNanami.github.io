// DOMの読み込み
$(function(){

    $('.menuImg').on('click',function(){
        $('nav').addClass('menuOpen').addClass('fade-in');
        $('.menuImg').css('opacity',0);
    });
    $('.menuClose').on('click',function(){
        $('nav').removeClass('menuOpen').removeClass('fade-in');
        $('.menuImg').css('opacity',1);
    });



});
