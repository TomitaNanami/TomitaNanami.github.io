function machCount(){
    if(countArray[0] == 0  && countArray[1] == 0 && countArray[2] == 0 && countArray[3] == 0 && countArray[4] == 0 && countArray[5] == 0){

        $('#slider135-container').addClass('openLeft');  //パズル左コンテナ移動
        $('#slider246-container').addClass('openRight');  //パズル右コンテナ移動

        setTimeout(function(){
            $('.close-container').remove();  //閉じ鍵消す

            setTimeout(function(){
                $('.open-container').addClass('fade-out');  //開き鍵フェードアウト

                setTimeout(function(){
                    $('.footer').addClass('fade-out');  //footerフェードアウト

                    setTimeout(function(){
                        $('.contents').css('display','block').css('height','2270px');  //home出現&homeの高さを2270pxに

                        setTimeout(function(){
                            $('.puzzle').addClass('fade-out'); //puzzleをコンテナごとフェードアウト

                            setTimeout(function(){
                                $('.footer').addClass('fade-in-footer');  //footerフェードイン

                            },10);  //footerフェードインのかっこ
                        },1000);//puzzleフェードアウトのかっこ
                    },2000);//home出現のかっこ
                },10);  //footerフェードアウトのかっこ
            },500);//開き鍵フェードアウトのかっこ
        },1500);  //閉じ鍵消すかっこ
    }  //if文のかっこ
}
