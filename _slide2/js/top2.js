// 画像を保存する配列
var manifest = [
    //左上
    {src: 'img/top/l1-a.png'},
    {src: 'img/top/l1-c.png'},
    {src: 'img/top/l1-e.png'},  //2 使用しない
    {src: 'img/top/l1-g.png'},
    //右上
    {src: 'img/top/r1-b.png'},
    {src: 'img/top/r1-d.png'},  //5 使用しない
    {src: 'img/top/r1-f.png'},
    {src: 'img/top/r1-h.png'},
    //左中央
    {src: 'img/top/l2-a.png'},
    {src: 'img/top/l2-c.png'},
    {src: 'img/top/l2-e.png'},
    {src: 'img/top/l2-g.png'},  //11 使用しない
    //右中央
    {src: 'img/top/r2-b.png'},
    {src: 'img/top/r2-d.png'},
    {src: 'img/top/r2-f.png'},  //14 使用しない
    {src: 'img/top/r2-h.png'},
    //左下
    {src: 'img/top/l3-a.png'},
    {src: 'img/top/l3-c.png'},  //17 使用しない
    {src: 'img/top/l3-e.png'},
    {src: 'img/top/l3-g.png'},
    //右下
    {src: 'img/top/r3-b.png'},
    {src: 'img/top/r3-d.png'},
    {src: 'img/top/r3-f.png'},
    {src: 'img/top/r3-h.png'}  //23 使用しない
];

$(function(){

    // パズル全体を管理する配列全部が1になると揃う
    var puzzleArr = [0,0,0,0,0,0];

    // 画像の元の配列  ひとつめのパズルで使う画像はこれだよ
    var photoArr01 = [manifest[0].src,manifest[1].src,manifest[3].src];
    var photoArr02 = [manifest[4].src,manifest[6].src,manifest[7].src];
    var photoArr03 = [manifest[8].src,manifest[9].src,manifest[10].src];
    var photoArr04 = [manifest[12].src,manifest[13].src,manifest[15].src];
    var photoArr05 = [manifest[16].src,manifest[18].src,manifest[19].src];
    var photoArr06 = [manifest[20].src,manifest[21].src,manifest[22].src];


    //たいやき機
    class Puzzle {
        constructor(photoArr,correctNumber,slideDiv,puzzleNumber) {
            // console.log('コンストラクタ');

            // -----------------------------------------------
            // プロパティ(=グローバル変数)
            // -----------------------------------------------
            // 画像の元の配列
            this.photoArr = photoArr;
            this.correctNumber = correctNumber; //正解番号

            this.shuffleArr = [];  //var photoArrをシャッフルした配列
            this.correctCount;  //シャッフル後、何番目が正解の画像か探す変数
            this.imageWidth = 550;  //画像の幅
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
            this.correctCount = _.indexOf(this.shuffleArr,this.photoArr[this.correctNumber]);
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
            // var time = _.random(0, 3);
            var time = Math.random()*2;
            console.log('time: ' +time);
            var that = this;

            $(this.photoDiv).delay(time* 1000).animate({'opacity':1},800,function(){
                // CSSアニメーションをaddClassで付与
                $(this).addClass('trX0');
                setTimeout(function(){
                    that.filterCount();
                }, 1000);
            });
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
                console.log(this.slideDiv + ' ピースのひとつが正解');
            }else{
                puzzleArr[this.puzzleNumber] = 0;
            }
            console.log('setPuzzle_puzzleArr: ' + puzzleArr);

            this.clearPuzzle();
        }

        clearPuzzle(){
            //配列の全ての値が一致したらtrueを返す
            var result = _.every(puzzleArr,function(value){
                return value == 1;
            });
            if(result == true){
                console.log('パズルをクリアしました');
                //ここに鍵が開くアニメーションをはじめるfunctionを入れる
            }
        }

    }

    //たいやき1 (インスタンス)
    var puzzle1 = new Puzzle(photoArr01,0,'#slider01',0);
    // -----------------------------------------------
    // イベント
    // -----------------------------------------------
    $('#btn01').on('click',function(){  //ボタンをクリックしたら
        puzzle1.clickAnime();
    });

    //たいやき2 (インスタンス)
    var puzzle2 = new Puzzle(photoArr02,0,'#slider02',1);
    // -----------------------------------------------
    // イベント
    // -----------------------------------------------
    $('#btn02').on('click',function(){  //ボタンをクリックしたら
        puzzle2.clickAnime();
    });

    //たいやき3 (インスタンス)
    var puzzle3 = new Puzzle(photoArr03,0,'#slider03',2);
    // -----------------------------------------------
    // イベント
    // -----------------------------------------------
    $('#btn03').on('click',function(){  //ボタンをクリックしたら
        puzzle3.clickAnime();
    });

    //たいやき4 (インスタンス)
    var puzzle4 = new Puzzle(photoArr04,0,'#slider04',3);
    // -----------------------------------------------
    // イベント
    // -----------------------------------------------
    $('#btn04').on('click',function(){  //ボタンをクリックしたら
        puzzle4.clickAnime();
    });

    //たいやき5 (インスタンス)
    var puzzle5 = new Puzzle(photoArr05,0,'#slider05',4);
    // -----------------------------------------------
    // イベント
    // -----------------------------------------------
    $('#btn05').on('click',function(){  //ボタンをクリックしたら
        puzzle5.clickAnime();
    });

    //たいやき6 (インスタンス)
    var puzzle6 = new Puzzle(photoArr06,0,'#slider06',5);
    // -----------------------------------------------
    // イベント
    // -----------------------------------------------
    $('#btn06').on('click',function(){  //ボタンをクリックしたら
        puzzle6.clickAnime();
    });


});
