// 画像を保存する配列
var manifest = [
    {src: 'images/ph01.jpg'},
    {src: 'images/ph02.jpg'},
    {src: 'images/ph03.jpg'}
];

$(function(){

    // パズル全体を管理する配列全部が1になると揃う
    var puzzleArr = [0,1,1,1,1,1];


    // 画像の元の配列  ひとつめのパズルで使う画像はこれだよ
    var photoArr01 = [manifest[0].src,manifest[1].src,manifest[2].src];


    //たいやき機
    class Puzzle {
        constructor(photoArr,correctNumber,slideDiv,puzzleNumber) {
            console.log('コンストラクタ');

            // -----------------------------------------------
            // プロパティ(=グローバル変数)
            // -----------------------------------------------
            // 画像の元の配列
            this.photoArr = photoArr;
            this.correctNumber = correctNumber; //正解番号

            this.shuffleArr = [];  //var photoArrをシャッフルした配列
            this.correctCount;  //シャッフル後、何番目が正解の画像か探す変数
            this.mageWidth = 360;  //画像の幅
            this.imageLength = 3; //画像の数
            this.clickCount = 0;  //何回クリックしたか(=0は初期値)
            this.clickflag = true;  //クリックできるかどうかのフラグ

            this.slideDiv = slideDiv; //#slider0*にアクセスする
            this.photoDiv = $(this.slideDiv).find('.photos'); //画像が梱包されているdiv
            this.photoUl = $(this.photoDiv).find('ul'); //画像リストのulこれを複製

            this.puzzleNumber = puzzleNumber;

            this.init();  //ロード後に実行する

        }


        // -----------------------------------------------
        // メソッド(=関数)
        // -----------------------------------------------

        init(){  //初期設定

            //画像の配列をシャッフル
            this.shuffleArr = _.shuffle(this.photoArr);
            console.log(this.shuffleArr);

            //正解の番号がシャッフル後の何番目かを調べる
            this.correctCount = _.indexOf(this.shuffleArr,this.photoArr[this.correctCount]);
            console.log('correctCount:' + this.correctCount);

            //jQueryで画像をシャッフルする
            var that = this;
            $(this.photoUl).find('li').each(function(i){ //3つの画像を入れ替えるには3回処理
                $(this).find('img').attr('src',that.shuffleArr[i]); //アトリビュートをいじる
            });

            setTimeout(function(){
                that.startAnime();  //initが終わったらstartAnimeを実行
            },1000)
        }

        startAnime(){
            //最初のシャッフルアニメーション
            $(this.photoDiv).addClass('trX0');
            var that = this;
            setTimeout(function(){
                that.filterCount();  //アニメーションが終わってからfilterCountを実行
            },1000);
        }

        clickAnime(){

            if(this.clickflag == true){  //フラグがオンなら

                 this.clickflag = false;  //フラグをオフにする
                 $(this.photoDiv).removeAttr('class'); //photoDivから一旦classごと削除
                 $(this.photoDiv).addClass('trX' + this.clickCount);
                 var that = this;
                 setTimeout(function(){
                     that.clickflag = true;  //フラグを元に戻す
                     that.filterCount();  //アニメーションが終わってからfilterCountを実行
                 },1000);

            }else{
                return false; //フラグがオフならこの関数から抜ける(=押せない)
            }
        }

        filterCount(){
            this.clickCount ++;

            if(this.clickCount == this.imageLength - 1){  //2枚目に来た時にphotoUlをクローン
                $(this.photoUl).clone().prependTo(this.photoDiv);
            }

            if(this.clickCount >= this.imageLength){  //もしクリックの数が画像の枚数を超えたら
                this.clickCount = 0;  //clickCountを0に戻す
                $(this.photoDiv).find('ul:first').remove();  //左に消えた(先頭の)ulを削除
                $(this.photoDiv).removeClass('trX2');  //cssアニメーションを削除、元の位置に戻す
            }
            console.log('clickCount:' + this.clickCount);

            this.setPuzzle();
        }

        setPuzzle(){
            //クリック回数と正解の番号が一致したら
            if (this.clickCount == this.correctCount){
                puzzleArr[this.puzzleNumber] = 1;
                console.log('ピースのひとつが正解');
            }else{
                puzzleArr[this.puzzleNumber] = 0;
            }
            console.log(this.puzzleArr);

            this.clearPuzzle();
        }

        clearPuzzle(){
            //配列の全ての値が一致したらtrueを返す
            var result = _.every(this.puzzleArr,function(value){
                return value == 1;
            });
            if(result == true){
                console.log('パズルをクリアしました');
                //ここに鍵が開くアニメーションをはじめるfunctionを入れる
            }
        }

    }

    //たいやき1 (インスタンス)
    var puzzle1 = new Puzzle(photoArr01,1,'#slider01',0);


    // -----------------------------------------------
    // イベント
    // -----------------------------------------------

    $('#btn01').on('click',function(){  //ボタンをクリックしたら
        puzzle1.clickAnime();
    });


});
