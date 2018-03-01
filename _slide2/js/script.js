// 画像を保存する配列
var manifest = [
    {src: 'images/ph01.jpg'},
    {src: 'images/ph02.jpg'},
    {src: 'images/ph03.jpg'}
    // {src: imgPath + 'header_illust02@2x.png'},
    // {src: imgPath + 'header_photo@2x.png'},
    // {src: imgPath + 'header_title@2x.png'},
    // {src: imgPath + 'illust01@2x.png'},
    // {src: imgPath + 'illust02@2x.png'},
    // {src: imgPath + 'illust03@2x.png'},
    // {src: imgPath + 'illust04@2x.png'},
    // {src: imgPath + 'illust05@2x.png'},
    // {src: imgPath + 'illust06@2x.png'},
    // {src: imgPath + 'illust07@2x.png'},
    // {src: imgPath + 'illust08@2x.png'},
    // {src: imgPath + 'illust09@2x.png'},
    // {src: imgPath + 'illust11@2x.png'},
    // {src: imgPath + 'method01.jpg'},
    // {src: imgPath + 'method02-2.jpg'},
    // {src: imgPath + 'method02.jpg'},
    // {src: imgPath + 'method03.jpg'},
    // {src: imgPath + 'method04.jpg'},
    // {src: imgPath + 'method05.jpg'},
    // {src: imgPath + 'method06.jpg'},
    // {src: imgPath + 'method07.jpg'},
    // {src: imgPath + 'p6-7.jpg'},
    // {src: imgPath + 'p28-29.jpg'},
    // {src: imgPath + 'p30-31.jpg'},
    // {src: imgPath + 'p76-77.jpg'},
    // {src: imgPath + 'profile_photo@2x.png'},
    // {src: imgPath + 'profile_photo2@2x.jpg'}
];





$(function (){

    // パズル全体を管理する配列全部が1になると揃う
    var puzzleArr = [0,1,1,1,1,1];

    // -----------------------------------------------
    // グローバル変数
    // -----------------------------------------------


    // 画像の元の配列
    var photoArr = [manifest[0].src,manifest[1].src,manifest[2].src];
    var correctNumber = 1;  //↑の中でどれが正解なのか指定
    var shuffleArr = [];  //var photoArrをシャッフルした配列
    var correctCount;  //シャッフル後、何番目が正解の画像か探す変数

    var imageWidth = 360;  //画像の幅
    var imageLength = 3; //画像の数

    var clickCount = 0;  //何回クリックしたか(=0は初期値)
    var clickflag = true;  //クリックできるかどうかのフラグ

    var photoDiv = $('#photos01'); //画像が梱包されているdiv
    var photoUl = $(photoDiv).find('ul'); //画像リストのulこれを複製




    // -----------------------------------------------
    // 関数
    // -----------------------------------------------

    init();  //ロード後に実行する

    function init(){  //初期設定

        //画像の配列をシャッフル
        shuffleArr = _.shuffle(photoArr);
        console.log(shuffleArr);

        //正解の番号がシャッフル後の何番目かを調べる
        correctCount = _.indexOf(shuffleArr,photoArr[1]);
        console.log('correctCount:' + correctCount);

        //jQueryで画像をシャッフルする
        $(photoUl).find('li').each(function(i){ //3つの画像を入れ替えるには3回処理
            $(this).find('img').attr('src',shuffleArr[i]); //アトリビュートをいじる
        });

        setTimeout(function(){
            startAnime();  //initが終わったらstartAnimeを実行
        },1000)

    }


    function startAnime(){
        //最初のシャッフルアニメーション
        $(photoDiv).addClass('trX0');
        setTimeout(function(){
            filterCount();  //アニメーションが終わってからfilterCountを実行
        },1000);
    }

    function clickAnime(){

        if(clickflag == true){  //フラグがオンなら

             clickflag = false;  //フラグをオフにする
             $(photoDiv).removeAttr('class'); //photoDivから一旦classごと削除
             $(photoDiv).addClass('trX' + clickCount);
             setTimeout(function(){
                 clickflag = true;  //フラグを元に戻す
                 filterCount();  //アニメーションが終わってからfilterCountを実行
             },1000);

        }else{
            return false; //フラグがオフならこの関数から抜ける(=押せない)
        }
    }


    function filterCount(){
        clickCount ++;

        if(clickCount == imageLength - 1){  //2枚目に来た時にphotoUlをクローン
            $(photoUl).clone().prependTo(photoDiv);
        }

        if(clickCount >= imageLength){  //もしクリックの数が画像の枚数を超えたら
            clickCount = 0;  //clickCountを0に戻す
            $(photoDiv).find('ul:first').remove();  //左に消えた(先頭の)ulを削除
            $(photoDiv).removeClass('trX2');  //cssアニメーションを削除、元の位置に戻す
        }
        console.log('clickCount:' + clickCount);

        setPuzzle(0)
    }


    function setPuzzle(num){
        //クリック回数と正解の番号が一致したら
        if (clickCount == correctCount){
            puzzleArr[num] = 1;
            console.log('ピースのひとつが正解');
        }else{
            puzzleArr[num] = 0;
        }
        console.log(puzzleArr);

        clearPuzzle();
    }


    function clearPuzzle(){
        //配列の全ての値が一致したらtrueを返す
        var result = _.every(puzzleArr,function(value){
            return value == 1;
        });
        if(result == true){
            console.log('パズルをクリアしました');
            //ここに鍵が開くアニメーションをはじめるfunctionを入れる
        }
    }



    // -----------------------------------------------
    // イベント
    // -----------------------------------------------

    $('#btn01').on('click',function(){  //ボタンをクリックしたら
        clickAnime();
    });




});
