$(function() {
// スクロールイベント
    $(window).on('scroll',function(){
        // console.log('スクロールしている');

        // 上からのスクロール値
        var dy = $(this).scrollTop();
        console.log('dy:' + dy);


        if(dy >= 0){
            $('.box1').addClass('in-left');

            setTimeout(function(){
                $('.box2').addClass('in-left');
            },300);

                setTimeout(function(){
                    $('.box3').addClass('in-left');
                },600);
        }








    });
});
