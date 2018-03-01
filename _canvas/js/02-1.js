

window.addEventListener('load',function(){




    var stage = new createjs.StageGL("canvasEl",{ antialias: true });
    stage.setClearColor("#4ACFF1");

    // 画像を保存する配列
    var manifest = [
        {src: 'img/ground.png'},
        {src: 'img/tomato.png'},
        {src: 'img/homevis/earth.png'},
        {src: 'img/homevis/skybg.png'},
        {src: 'img/homevis/nanami.png'},
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
        addBitmap1();
        nanamiTween();
        // addBitmap2();
        // addSprite();
    });

    var earth;
    var skybg;
    var nanami;


    function addBitmap1(data){
        nanami = new createjs.Bitmap(manifest[4].src);
        nanami.x = 300;
        nanami.y = 300;
        nanami.width = 516;
        nanami.height = 671;
        nanami.scaleX = 0.5;
        nanami.scaleY = 0.5;
        // earth.regX = earth.width/2;
        // // tomato.regX = 400;
        // earth.regY = earth.height/2;
        // // tomato.regY = 400;
        stage.addChild(nanami);
    }


  	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
  	createjs.Ticker.setFPS(30);

    createjs.Ticker.addEventListener('tick',function(){
        // earth.rotation -= 1;
        stage.update();
    })

    function nanamiTween(){
        createjs.Tween.get(nanami,{loop: true}).to({x: 300, y:200},500).to({x: 300, y:300},500);
    }






});
