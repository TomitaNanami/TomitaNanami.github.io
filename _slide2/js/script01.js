$(function(){

    // -----------------------------------------------
    // グローバル変数
    // -----------------------------------------------

    // パズル全体を管理する配列全部が1になると揃う
    var puzzleArr = [0,1,1,1,1,1];
    // 画像の元の配列
    var photoArr01 = ['images/ph01.jpg','images/ph02.jpg','images/ph03.jpg'];



    class Puzzle {
        constructor(puzzleNumber, photoDiv, photoArr, correctNumber) {
            // プロパティ
            this.puzzleNumber = puzzleNumber;
            this.photoDiv = $(photoDiv);
            this.photoArr = photoArr;
            this.correctNumber = correctNumber;

            this.shuffleArr = []; // シャッフルした配列
            this.correctCount; // 正解番号

            this.imageWidth = 360;  //画像の幅
            this.imageLength = 3; //画像の数

            this.clickCount = 0; // クリックカウント
            this.clickflag = true; // クリックできるかどうかのフラグ

            this.photoUl = $(this.photoDiv).find('ul'); //画像リストのulこれを複製

            this.init();

        }

        // -----------------------------------------------
        // メソッド
        // -----------------------------------------------

        init(){
            // 画像の配列をシャッフル
            this.shuffleArr = _.shuffle(this.photoArr);
            console.log(this.shuffleArr);
            // 正解番号:シャッフルされた配列から正解が何番目に入っているか調べる
            this.correctCount = _.indexOf(this.shuffleArr, this.photoArr[this.correctNumber]);
            console.log('correctCount' + this.correctCount);
            // jQueryで画像を入れ替え

            var that = this;
            $(this.photoUl).find('li').each(function(i){
                $(this).find('img').attr('src', that.shuffleArr[i]);
            });
            // 最初のアニメーション
            this.startAnime();
        }

        startAnime(){
            // 最初のアニメーション
            var time = _.random(0, 3);
            console.log('time: ' +time);
            var that = this;
            // console.log('thatMethod: ' +thatMethod);
            $(this.photoDiv).delay(time* 1000).animate({'opacity':1},1000,function(){
                // CSSアニメーションをaddClassで付与
                $(this).addClass('trX0');
                setTimeout(function(){
                    that.filterCount();
                }, 1000);
            });
        }

        clickAnime(){
            if (this.clickflag == true) {
                // console.log('click start');
                // フラグをオフにする
                this.clickflag = false;
                // photoDivから一旦classを外す
                $(this.photoDiv).removeAttr('class');
                // CSSアニメーションをaddClassで付与
                $(this.photoDiv).addClass('trX' + this.clickCount);
                var that = this;
                setTimeout(function(){
                    that.clickflag = true; // フラグを元に戻す
                    // console.log('click restart');
                    that.filterCount(); // カウントをフィルタリング
                }, 1000);
            } else {
                // フラグがオフの場合に押せない
                // console.log('click skip');
                return false;
            }
        }

        filterCount(){
            this.clickCount++; // クリックする度にカウントアップ
            // 2枚目になったら次のulをクローン
            if(this.clickCount == this.imageLength - 1){
                $(this.photoUl).clone().prependTo(this.photoDiv);
            }
            // 枚数分を超えたら0に戻す
            if (this.clickCount >= this.imageLength) {
                this.clickCount = 0;
                $(this.photoDiv).find('ul:first').remove();// 左に消えたulを削除
                $(this.photoDiv).removeClass('trX2'); //CSSアニメーションを削除。元の位置に戻す
            }
            console.log('clickCount: ' + this.clickCount);

            this.setPuzzle();
        }

        setPuzzle(){
            // クリックカウントと正解番号が一致したら
            if( this.clickCount == this.correctCount){
                puzzleArr[this.puzzleNumber] = 1;
                console.log('正解 !!!!!!!!!!!!!!');
            } else {
                puzzleArr[this.puzzleNumber] = 0;
            }
            console.log(puzzleArr);

            this.clearPuzzle();

        }

        clearPuzzle(){
            //配列のすべての値が一致した場合のみtrueを返す
            var result = _.every(puzzleArr, function(value){
                return value == 1;
            });
            if(result == true){
                console.log('パズルをクリアしました');
            }
        }

    }


    // クラスPuzzleのインスタンス
    var puzzle1 = new Puzzle(0,'#photos01',photoArr01,1);

    // -----------------------------------------------
    // イベント
    // -----------------------------------------------

    $('#btn01').on('click',function(){
        // ボタンをクリックしたら
        puzzle1.clickAnime();
    });


});
