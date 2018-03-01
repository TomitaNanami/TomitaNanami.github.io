window.addEventListener('load',function(){

    var stage = new createjs.StageGL("canvasEl",{ animations:true });
    stage.setClearColor("#4ACFF1");

    //画像を保存する配列
    var manifest =[
        {src: 'img/tomato.png'}
    ];

    //loadQueueクラス
    var loadQueue = new createjs.LoadQueue();

    //読み込み開始
    var loadQueue = new createjs.LoadQueue();

    //読み込み開始
    loadQueue.loadManifest(manifest);

    //読み込み状況
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
    });


    var tomato;

    function addBitmap(data){
        tomato = new createjs.Bitmap(manifest[0].src);
        tomato.x = stage.canvas.width/2;
        tomato.y = 200;
        tomato.width = 116;
        tomato.height = 104;
        tomato.regX = tomato.width/2;
        // tomato.regX = 400;
        tomato.regY = tomato.height/2;
        // tomato.regY = 400;
        stage.addChild(tomato);
    }

    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
  	createjs.Ticker.setFPS(30);

    createjs.Ticker.addEventListener('tick',function(){

        tomato.rotation++;

        // tomato.x += 1;

        // if(tomato.x > stage.canvas.width + 10){
        //     tomato.x = -10;
        // }

        stage.update();
    })








});  //l1の閉じカッコ
