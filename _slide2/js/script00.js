$(function(){

    // パズル全体を管理する配列全部が1になると揃う
    var puzzleArr = [0,1,1,1,1,1];




    // -----------------------------------------------
    // グローバル変数
    // -----------------------------------------------

    // 画像の元の配列
    var photoArr = ['images/ph01.jpg','images/ph02.jpg','images/ph03.jpg'];
    var correctNumber = 1;// 正解画像
    var shuffleArr = []; // シャッフルした配列
    var correctCount; // 正解番号

    var imageWidth = 360;  //画像の幅
    var imageLength = 3; //画像の数

    var clickCount = 0; // クリックカウント
    var clickflag = true; // クリックできるかどうかのフラグ

    var photoDiv = $('#photos01'); //画像が梱包されているdiv
    var photoUl = $(photoDiv).find('ul'); //画像リストのulこれを複製


    // -----------------------------------------------
    // 関数
    // -----------------------------------------------
    init();

    function init(){
        // 画像の配列をシャッフル
        shuffleArr = _.shuffle(photoArr);
        console.log(shuffleArr);
        // 正解番号:シャッフルされた配列から正解が何番目に入っているか調べる
        correctCount = _.indexOf(shuffleArr, photoArr[correctNumber]);
        console.log('correctCount' + correctCount);
        // jQueryで画像を入れ替え
        $(photoUl).find('li').each(function(i){
            $(this).find('img').attr('src', shuffleArr[i]);
        });
        // 最初のアニメーション
        startAnime();
    }

    function startAnime(){
        // 最初のアニメーション
        var time = _.random(0, 3);
        console.log('time: ' +time);
        $(photoDiv).delay(time* 1000).animate({'opacity':1},1000,function(){
            // CSSアニメーションをaddClassで付与
            $(photoDiv).addClass('trX0');
            setTimeout(function(){
                filterCount(); // カウントをフィルタリング
            }, 1000);
        });
    }

    function clickAnime(){
        if (clickflag == true) {
            // console.log('click start');
            // フラグをオフにする
            clickflag = false;
            // photoDivから一旦classを外す
            $(photoDiv).removeAttr('class');
            // CSSアニメーションをaddClassで付与
            $(photoDiv).addClass('trX' + clickCount);
            setTimeout(function(){
                clickflag = true; // フラグを元に戻す
                // console.log('click restart');
                filterCount(); // カウントをフィルタリング
            }, 1000);
        } else {
            // フラグがオフの場合に押せない
            // console.log('click skip');
            return false;
        }
    }

    function filterCount(){
        clickCount++; // クリックする度にカウントアップ
        // 2枚目になったら次のulをクローン
        if(clickCount == imageLength - 1){
            $(photoUl).clone().prependTo(photoDiv);
        }
        // 枚数分を超えたら0に戻す
        if (clickCount >= imageLength) {
            clickCount = 0;
            $(photoDiv).find('ul:first').remove();// 左に消えたulを削除
            $(photoDiv).removeClass('trX2'); //CSSアニメーションを削除。元の位置に戻す
        }
        console.log('clickCount: ' + clickCount);

        setPuzzle(0);
    }

    function setPuzzle(num){
        // クリックカウントと正解番号が一致したら
        if( clickCount == correctCount){
            puzzleArr[num] = 1;
            console.log('正解 !!!!!!!!!!!!!!');
        } else {
            puzzleArr[num] = 0;
        }
        console.log(puzzleArr);

        clearPuzzle();

    }

    function clearPuzzle(){
        //配列のすべての値が一致した場合のみtrueを返す
        var result = _.every(puzzleArr, function(value){
            return value == 1;
        });
        if(result == true){
            console.log('パズルをクリアしました');
        }
    }


    // -----------------------------------------------
    // イベント
    // -----------------------------------------------

    $('#btn01').on('click',function(){
        // ボタンをクリックしたら
        clickAnime();
    });

});
