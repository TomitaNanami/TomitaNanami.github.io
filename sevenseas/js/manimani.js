$(function() {
// スクロールイベント
    $(window).on('scroll',function(){
        // console.log('スクロールしている');

        // 上からのスクロール値
        var dy = $(this).scrollTop();
        console.log('dy:' + dy);


        if(dy >= 0){
            $('.box0').addClass('in-left');
        }

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
});
