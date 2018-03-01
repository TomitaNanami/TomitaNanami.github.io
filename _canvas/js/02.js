

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
        addBitmap2();
        addBitmap3();
        nanamiTween();
    });

    var earth;
    var skybg;
    var nanami;


    function addBitmap1(data){
        earth = new createjs.Bitmap(manifest[2].src);
        earth.x = stage.canvas.width/2;
        earth.y = 1100;
        earth.width = 1483;
        earth.height = 1470;
        earth.regX = earth.width/2;
        // tomato.regX = 400;
        earth.regY = earth.height/2;
        // tomato.regY = 400;
        stage.addChild(earth);
    }


  	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
  	createjs.Ticker.setFPS(30);

    createjs.Ticker.addEventListener('tick',function(){

        earth.rotation -= 1;


        stage.update();
    })


    function addBitmap2(data){
        skybg = new createjs.Bitmap(manifest[3].src);
        skybg.x = stage.canvas.width/2;
        skybg.y = 1100;
        skybg.width = 2503;
        skybg.height = 2503;
        skybg.regX = skybg.width/2;
        // tomato.regX = 400;
        skybg.regY = skybg.height/2;
        // tomato.regY = 400;
        stage.addChild(skybg);
    }


  	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
  	createjs.Ticker.setFPS(30);

    createjs.Ticker.addEventListener('tick',function(){

        skybg.rotation += 1;


        stage.update();
    })


    function addBitmap3(data){
        nanami = new createjs.Bitmap(manifest[4].src);
        nanami.x = 200;
        nanami.y = 200;
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
        createjs.Tween.get(nanami,{loop: true}).to({x: 200, y:100},500).to({x: 200, y:200},500);
    }



});
