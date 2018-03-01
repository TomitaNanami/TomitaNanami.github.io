$(function (){

    //グローバル変数
    var count1 = 0; //カウンタ
    var count2 = 0; //カウンタ
    var count3 = 0; //カウンタ
    var count4 = 0; //カウンタ
    var count5 = 0; //カウンタ
    var count6 = 0; //カウンタ
    var imageWidth = 550; //画像の幅
    var imageLength = 3; //画像の数

    var photoDiv1 = $('#photos1'); //画像が梱包されているdiv
    var photoDiv2 = $('#photos2'); //画像が梱包されているdiv
    var photoDiv3 = $('#photos3');
    var photoDiv4 = $('#photos4');
    var photoDiv5 = $('#photos5');
    var photoDiv6 = $('#photos6');
    var photoUl1 = $('#photos1 ul'); //画像リストulこれを複製
    var photoUl2 = $('#photos2 ul'); //画像リストulこれを複製
    var photoUl3 = $('#photos3 ul');
    var photoUl4 = $('#photos4 ul');
    var photoUl5 = $('#photos5 ul');
    var photoUl6 = $('#photos6 ul');

    var countArray = [0,0,0,0,0,0];

    // 画像リストを複製して.photos要素の前と後ろに追加
    photoUl1.clone().prependTo(photoDiv1);
    photoUl1.clone().appendTo(photoDiv1);
    // 画像リストを複製して.photos要素の前と後ろに追加
    photoUl2.clone().prependTo(photoDiv2);
    photoUl2.clone().appendTo(photoDiv2);
    // 画像リストを複製して.photos要素の前と後ろに追加
    photoUl3.clone().prependTo(photoDiv3);
    photoUl3.clone().appendTo(photoDiv3);
    // 画像リストを複製して.photos要素の前と後ろに追加
    photoUl4.clone().prependTo(photoDiv4);
    photoUl4.clone().appendTo(photoDiv4);
    // 画像リストを複製して.photos要素の前と後ろに追加
    photoUl5.clone().prependTo(photoDiv5);
    photoUl5.clone().appendTo(photoDiv5);
    // 画像リストを複製して.photos要素の前と後ろに追加
    photoUl6.clone().prependTo(photoDiv6);
    photoUl6.clone().appendTo(photoDiv6);



    //スタート時のx座標
    var startPos = -(imageLength * imageWidth);
    photoDiv1.css('left' , startPos);
    console.log(startPos); //-1440が出た
    //スタート時のx座標
    var startPos = -(imageLength * imageWidth);
    photoDiv2.css('left' , startPos);
    console.log(startPos); //-1440が出た
    //スタート時のx座標
    var startPos = -(imageLength * imageWidth);
    photoDiv3.css('left' , startPos);
    console.log(startPos);
    //スタート時のx座標
    var startPos = -(imageLength * imageWidth);
    photoDiv4.css('left' , startPos);
    console.log(startPos);
    //スタート時のx座標
    var startPos = -(imageLength * imageWidth);
    photoDiv5.css('left' , startPos);
    console.log(startPos);
    //スタート時のx座標
    var startPos = -(imageLength * imageWidth);
    photoDiv6.css('left' , startPos);
    console.log(startPos);


    //#rightBtnをクリックしたら
    $('#rightBtn1').click(function(){
        moveRight1();
    });
    $('#rightBtn1').on('click',function(){
        addCount(0);
        matchCount();
    });
    //#rightBtnをクリックしたら
    $('#rightBtn2').click(function(){
        moveRight2();
    });
    $('#rightBtn2').on('click',function(){
        addCount(1);
        matchCount();
    });
    //#rightBtnをクリックしたら
    $('#rightBtn3').click(function(){
        moveRight3();
    });
    $('#rightBtn3').on('click',function(){
        addCount(2);
        matchCount();
    });
    //#rightBtnをクリックしたら
    $('#rightBtn4').click(function(){
        moveRight4();
    });
    $('#rightBtn4').on('click',function(){
        addCount(3);
        matchCount();
    });
    //#rightBtnをクリックしたら
    $('#rightBtn5').click(function(){
        moveRight5();
    });
    $('#rightBtn5').on('click',function(){
        addCount(4);
        matchCount();
    });
    //#rightBtnをクリックしたら
    $('#rightBtn6').click(function(){
        moveRight6();
    });
    $('#rightBtn6').on('click',function(){
        addCount(5);
        matchCount();
    });

    function addCount(num){
        var btnNum = countArray[num]; //countArrayの値をbtnNumに代入
        btnNum += 1; //countNum==クリックして増えた数
        if(btnNum > 2){
            btnNum = 0;
        }
        countArray[num] = btnNum; //クリックして増えた数をcountArrayに戻す
        console.log(countArray);
    }


    function moveRight1(){
        //カウンター変数を1ずつ加算していく
        count1 = count1 + 1;
        photoDiv1.animate({'left' : '-=' + (imageWidth)}, 1000,resetPos1);
    };
    function moveRight2(){
        //カウンター変数を1ずつ加算していく
        count2 = count2 + 1;
        photoDiv2.animate({'left' : '-=' + (imageWidth)}, 1000,resetPos2);
    };
    function moveRight3(){
        //カウンター変数を1ずつ加算していく
        count3 = count3 + 1;
        photoDiv3.animate({'left' : '-=' + (imageWidth)}, 1000,resetPos3);
    };
    function moveRight4(){
        //カウンター変数を1ずつ加算していく
        count4 = count4 + 1;
        photoDiv4.animate({'left' : '-=' + (imageWidth)}, 1000,resetPos4);
    };
    function moveRight5(){
        //カウンター変数を1ずつ加算していく
        count5 = count5 + 1;
        photoDiv5.animate({'left' : '-=' + (imageWidth)}, 1000,resetPos5);
    };
    function moveRight6(){
        //カウンター変数を1ずつ加算していく
        count6 = count6 + 1;
        photoDiv6.animate({'left' : '-=' + (imageWidth)}, 1000,resetPos6);
    };




    //位置をリセット
    function resetPos1() {
        //もしカウンタの絶対値がimageLength(画像の数)=4以上だったら
        if( Math.abs(count1) >= imageLength){

            //div#imageを初期値に戻す
            photoDiv1.css({'left' : startPos});

            //カウンタに0を代入
            count1 = 0;
        }

        console.log('count1:'+count1);
    };
    //位置をリセット
    function resetPos2() {
        //もしカウンタの絶対値がimageLength(画像の数)=4以上だったら
        if( Math.abs(count2) >= imageLength){

            //div#imageを初期値に戻す
            photoDiv2.css({'left' : startPos});

            //カウンタに0を代入
            count2 = 0;
        }

        console.log('count2:'+count2);
    };
    //位置をリセット
    function resetPos3() {
        //もしカウンタの絶対値がimageLength(画像の数)=4以上だったら
        if( Math.abs(count3) >= imageLength){

            //div#imageを初期値に戻す
            photoDiv3.css({'left' : startPos});

            //カウンタに0を代入
            count3 = 0;
        }

        console.log('count3:'+count3);
    };
    //位置をリセット
    function resetPos4() {
        //もしカウンタの絶対値がimageLength(画像の数)=4以上だったら
        if( Math.abs(count4) >= imageLength){

            //div#imageを初期値に戻す
            photoDiv4.css({'left' : startPos});

            //カウンタに0を代入
            count4 = 0;
        }

        console.log('count4:'+count4);
    };
    //位置をリセット
    function resetPos5() {
        //もしカウンタの絶対値がimageLength(画像の数)=4以上だったら
        if( Math.abs(count5) >= imageLength){

            //div#imageを初期値に戻す
            photoDiv5.css({'left' : startPos});

            //カウンタに0を代入
            count5 = 0;
        }

        console.log('count5:'+count5);
    };
    //位置をリセット
    function resetPos6() {
        //もしカウンタの絶対値がimageLength(画像の数)=4以上だったら
        if( Math.abs(count6) >= imageLength){

            //div#imageを初期値に戻す
            photoDiv6.css({'left' : startPos});

            //カウンタに0を代入
            count6 = 0;
        }

        console.log('count6:'+count6);
    };






    //配列の中身が1に揃ったらコンソールを出す
    function matchCount(){
        if(countArray[0] == 0 && countArray[1] == 0 && countArray[2] == 0 && countArray[3] == 0 && countArray[4] == 0 && countArray[5] == 0){
            console.log('finished!!!!!!!!!!!');
            $('#slider135-container').addClass('openLeft');
            $('#slider246-container').addClass('openRight');
            setTimeout(function(){
                console.log('settimeout');
                $('.close-container').remove();
                setTimeout(function(){
                    console.log('open-fade-out');
                    $('.open-container').addClass('fade-out');
                    setTimeout(function(){
                        console.log('settimeout2');
                        $('.footer').addClass('fade-out');
                        setTimeout(function(){
                            console.log('settimeout2');
                            $('.contents').css('display', 'block').css('height','2270px');
                            console.log('block');
                            setTimeout(function(){
                                console.log('puzzle');
                                $('.puzzle').addClass('fade-out');
                                setTimeout(function(){
                                    console.log('BG');
                                    $('.whiteBG').addClass('fade-out');
                                },3000);
                                    setTimeout(function(){
                                        console.log('f-fade-in');
                                        $('.footer').addClass('fade-in-footer');
                                    });
                            },1000);
                        },3000);
                    });
                },10);
            },1500);
        }

    }


    //自動処理
    function startInterval(){

        //setIntervalをクリアする
        clearInterval(interVal);

        //setIntervalに関数moveRightを設定する
        interval = setInterval(moveRight1, 2000);
    };
    //自動処理
    function startInterval(){

        //setIntervalをクリアする
        clearInterval(interVal);

        //setIntervalに関数moveRightを設定する
        interval = setInterval(moveRight2, 2000);
    };




});
