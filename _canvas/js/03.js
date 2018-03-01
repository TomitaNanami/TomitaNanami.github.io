document.addEventListener('DOMContentLoaded', function(){
    create();
}, false);

function create(){

    // stage生成
    var stageElm = document.querySelector('#canvas');
    var stage = new createjs.Stage(stageElm);
    // フレームレート設定
    createjs.Ticker.setFPS(30);
    // 1フレームごとに実行
    createjs.Ticker.addEventListener('tick', function(){
        stage.update();
    });


    // Bitmapクラスを使ってnanamiをステージに表示する
    var nanami = new createjs.Bitmap('img/homevis/nanami.png');
    //nanamiの位置を設定
    nanami.set({x:500, y:500});
    // スケール変更
    nanami.scaleX = 0.5;
    nanami.scaleY = 0.5;
    // nanamiをステージに追加
    stage.addChild(nanami);


    // nanami動かすようのボタン描画
    var graphic = new createjs.Graphics();
    graphic.beginFill('deeppink') // 色
    .drawCircle(50, 50, 30); // 円の位置とサイズ (x1,y1,size)
    var btnShape = new createjs.Shape(graphic);
    stage.addChild(btnShape);


    // ボタンにmousedownイベント
    btnShape.addEventListener('mousedown', function(evt){
        nanamiTween();
    });

    // nanamiのtween
    function nanamiTween(){
         createjs.Tween.get(nanami).to({x: 500, y:400 }, 500)
                                .to({x:500, y:500},500);
    }

}
