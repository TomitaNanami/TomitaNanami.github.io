// // スプライトシート用のオブジェクト
// var calciumSprite = {
// 	images: ["img/calcium.png"],
// 	frames:{width:160,height:160},
// 	animations:{
// 		stand:34,
// 		walk:[0,33],
// 		stop:34
// 	}
// }
//
// var vitaminCSprite = {
// 	images: ["img/vitaminC.png"],
// 	frames:{width:160,height:160},
// 	animations:{
// 		stand:34,
// 		walk:[0,33],
// 		stop:34
// 	}
// }
//
// var ironSprite = {
// 	images: ["img/iron.png"],
// 	frames:{width:160,height:160},
// 	animations:{
// 		stand:34,
// 		walk:[0,33],
// 		stop:34
// 	}
// }



window.addEventListener('load',function(){
    // stage

    // if (location.search.match(/c2d/i)) {
    //     // force it to use Context2D if c2d appears in the query string: ex. Runners.html?c2d
    //     stage = new createjs.Stage("canvasEl");
    // } else {
    //     stage = new createjs.StageGL("canvasEl",{ antialias: true });
    //     stage.setClearColor("#4ACFF1");
    //     //stage.updateSimultaneousTextureCount(1);
    // }

    var stage = new createjs.StageGL("canvasEl",{ antialias: true });
    stage.setClearColor("#4ACFF1");

    // 画像を保存する配列
    var manifest = [
        {src: 'img/ground.png'},
        {src: 'img/tomato.png'},
        {src: 'img/homevis/earth.png'},
        {src: 'img/logo.png'},
        {src: 'img/vitaminC.png'},
        {src: 'img/iron.png'}
    ];

    // loadQueueクラス
    var loadQueue = new createjs.LoadQueue();

    // 読み込み開始
    loadQueue.loadManifest(manifest);

    // 読み込み状況
    loadQueue.addEventListener('progress',function(evt){
        console.log(evt.progress);
    });

    // ひとつ読み込み終わったら
    loadQueue.addEventListener("fileload", function(evt){
        console.log(evt.result);
    });

    // 全部読み込み終わったら
    loadQueue.addEventListener("complete", function(evt){
        console.log('読み込み完了');
        addBitmap();
        addSprite();
    });

    var tomato;
    // var vitaminC;


    function addBitmap(data){
        tomato = new createjs.Bitmap(manifest[2].src);
        tomato.x = stage.canvas.width/2;
        tomato.y = 1100;
        tomato.width = 1483;
        tomato.height = 1470;
        tomato.regX = tomato.width/2;
        // tomato.regX = 400;
        tomato.regY = tomato.height/2;
        // tomato.regY = 400;
        stage.addChild(tomato);
    }


  	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
  	createjs.Ticker.setFPS(30);

    createjs.Ticker.addEventListener('tick',function(){

        tomato.rotation -= 1;


        stage.update();
    })



});
