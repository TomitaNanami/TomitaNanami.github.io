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

        if(dy >= 700){
            $('.box2').addClass('in-left');
        }

        if(dy >= 2300){
            $('.box3').addClass('in-right');
        }

        if(dy >= 3050){
            $('.box4').addClass('in-left');
        }


    });
});
