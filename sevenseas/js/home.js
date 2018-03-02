var splashSprite = {
	images: ["../img/homevis/splash.png"],
	frames:{width:530,height:239},
	animations:{
        stop:[0],
		move:[0,30]
	}
}



// DOMの読み込み
$(function(){


    //メニュー開いたり閉じたり
    $('.right-menu').on('click',function(){
        $('header nav').addClass('right-menu-open').addClass('fade-in');
        $('.right-menu').css('opacity',0);
    });
    $('.right-close').on('click',function(){
        $('header nav').removeClass('right-menu-open').removeClass('fade-in');
        $('.right-menu').css('opacity',1);
    });



    //canvasの中身
    var stage = new createjs.StageGL("canvasEl",{ antialias: true });
    stage.setClearColor("#BDE1DB");
    // 画像を保存する配列
    var manifest = [
        {src: '../img/homevis/earth.png'},
        {src: '../img/homevis/nanami2.png'},
        {src: '../img/splash.png'}
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
        startCanvas();

    });

    var earth;
    var splash;
    var nanami;


    function startCanvas(){

        // earth
        earth = new createjs.Bitmap(manifest[0].src);
        earth.x = stage.canvas.width/2;
        earth.y = 1100;
        earth.width = 1483;
        earth.height = 1470;
        earth.regX = earth.width/2;
        earth.regY = earth.height/2;
        stage.addChild(earth);

        // nanami
        nanami = new createjs.Bitmap(manifest[1].src);
        nanami.x = 310;
        nanami.y = 280;
        nanami.width = 516;
        nanami.height = 671;
        stage.addChild(nanami);

        // splash
        var splashSheet = new createjs.SpriteSheet(splashSprite);
        splash = new createjs.Sprite(splashSheet,'move');
        stage.addChild(splash);
		splash.x = 190;
		splash.y = 280;
        splash.scaleX = 0.7;
        splash.scaleY = 0.7;
        splash.gotoAndStop('stop');

        //  レイヤー
        stage.setChildIndex(nanami,1);
        stage.setChildIndex(earth,2);

        moveS();
        function moveS(){
            createjs.Tween.get(nanami).wait(100).to({x: 310, y:300},500).call(function(){
                splash.gotoAndPlay('move');
            }).wait(380).to({x: 310, y:280},700).call(function(){
                splash.gotoAndPlay('stop');
                moveS();
            });
        }
        stage.update();
    }

  	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
  	createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener('tick',function(){

        earth.rotation -= 0.1;
        stage.update();
    })







});
