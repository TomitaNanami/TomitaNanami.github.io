// DOMの読み込み
$(function(){

    // グローバル変数
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();


    // console.log('読み込んだよ');

    // navの高さ
    var navContainerTop = $('.nav-container').offset().top;
    console.log('navContainerTop: ' + navContainerTop);


    // worksContainerの高さ
    var worksContainerTop = $('.works-container').offset().top;
    // console.log('worksContainerTop:' + worksContainerTop);

    // newsContainerの高さ
    var newsContainerTop = $('.news-container').offset().top;



    //--------------------------------------------------
    // Slide Show
    //--------------------------------------------------
    var slideShow = $('#slide-show');
    var slideLength = slideShow.find('li').length;  // liの数
    var slidePaging = $('#slide-paging');

    // 今の番号
    var currentIndex = -1;
    // 時間を制御する変数
    var timer;

    changeSlide(0);

    // 画像を切り替える関数
    function changeSlide(newIndex){
        // 今の番号は押せないように
        if (currentIndex === newIndex){
            return;  // ここで終わり
        }

        // 一旦タイマー停止
        if(timer){
            clearTimeout(timer);
            timer = null; // timerの値を空にする
        }
        if(currentIndex >= 0){
            // 現在表示している写真を1秒でopacity:0にする
            slideShow.find('li:eq('+currentIndex+')').animate({opacity:0},1000);
        }
        // 次の写真(neeIndex）を1秒でopacity:1にする
        slideShow.find('li:eq('+ newIndex +')').animate({opacity:1},1000);
        currentIndex = newIndex;  // 今の番号を次の番号に更新

        // ページングの指定
        slidePaging.find('li').each(function(index){
            $(this).removeClass('selected');
            if(index == currentIndex){
                $(this).addClass('selected');
            }
        });

        // タイマー
        timer = setTimeout(nextIndex, 4000);
    }

    // 番号を進める関数
    function nextIndex(){
        var newIndex = currentIndex + 1;  // 次の番号
        if(newIndex >= slideLength){
            newIndex = 0;
        }
        changeSlide(newIndex);
    }

    // クリックイベント
    slidePaging.find('li').each(function(index){
        $(this).on('click',function(){
            // liの押した番号をchangeSlideに渡す
            changeSlide(index);
        });
    });


    // スクロールイベント
    $(window).on('scroll',function(){
        // console.log('スクロールしている');

        // 上からのスクロール値
        var dy = $(this).scrollTop();
        console.log('dy:' + dy);



        //--------------------------------------------------
        // nav固定
        //--------------------------------------------------

        // PCサイズのみ
        if(windowWidth > 767){
            // もしdyがnavContainerTop以上になったら
            if(dy >= navContainerTop){
                $('header nav').addClass('nav-fixed');
            }else{
                $('header nav').removeClass('nav-fixed');
            }
        }



        //--------------------------------------------------
        // Scroll Fade
        //--------------------------------------------------

        // dyがworksContainerTop-windowの高さの値になったら
        if(dy >= worksContainerTop - windowHeight){
            console.log('worksContainerTopだよ');
            $('.works-container').find('section').addClass('fade-in');
        }

        // dyがnewsContainerTop-windowの高さの値になったら
        if(dy >= newsContainerTop - windowHeight){
            $('.news-container').find('section').addClass('fade-in-up');
        }

    });


    // windowをリサイズしたら
    $(window).on('resize',function(){
        console.log('リサイズ');
        windowWidth = $(window).width();

        if(windowWidth > 767){
            // PC
        }else{
            // Mobile
        }
    });

    //--------------------------------------------------
    // Responsive Navi
    //--------------------------------------------------
    $('.mobile-menu').on('click',function(){
        $('header nav').addClass('mobile-menu-open').addClass('fade-in');
    });
    $('.mobile-close').on('click',function(){
        $('header nav').removeClass('mobile-menu-open').removeClass('fade-in');
    });


    $('.nav-container ul').find('li:eq(2)').on('click',function(evt){
        evt.preventDefault();
        console.log('クリック');
        $('html,body').animate({scrollTop: worksContainerTop -200
        },500);
    });

});
