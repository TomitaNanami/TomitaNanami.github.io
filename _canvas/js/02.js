var splashSprite = {
	images: ["img/splash.png"],
	frames:{width:530,height:239},
	animations:{
		move:[0,30]
	}
}





window.addEventListener('load',function(){


    var stage = new createjs.StageGL("canvasEl",{ antialias: true });
    stage.setClearColor("#4ACFF1");

    // 画像を保存する配列
    var manifest = [
        {src: 'img/ground.png'},
        {src: 'img/tomato.png'},
        {src: 'img/homevis/earth.png'},
        {src: 'img/homevis/skybg.png'},
        {src: 'img/homevis/nanami2.png'},
        {src: 'img/splash.png'}
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
        // addBitmap2();
        addBitmap3();
        nanamiTween();
        addSprite();
        addBitmap1();

    });

    var earth;
    // var skybg;
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


    // function addBitmap2(data){
    //     skybg = new createjs.Bitmap(manifest[3].src);
    //     skybg.x = stage.canvas.width/2;
    //     skybg.y = 1100;
    //     skybg.width = 2503;
    //     skybg.height = 2503;
    //     skybg.regX = skybg.width/2;
    //     // tomato.regX = 400;
    //     skybg.regY = skybg.height/2;
    //     // tomato.regY = 400;
    //     stage.addChild(skybg);
    // }
    //
    //
  	// createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
  	// createjs.Ticker.setFPS(30);
    //
    // createjs.Ticker.addEventListener('tick',function(){
    //
    //     skybg.rotation += 1;
    //
    //
    //     stage.update();
    // })


    function addBitmap3(data){
        nanami = new createjs.Bitmap(manifest[4].src);
        nanami.x = 310;
        nanami.y = 280;
        nanami.width = 516;
        nanami.height = 671;
        // nanami.scaleX = 0.5;
        // nanami.scaleY = 0.5;
        // earth.regX = earth.width/2;
        // // tomato.regX = 400;
        // earth.regY = earth.height/2;
        // // tomato.regY = 400;
        stage.addChild(nanami);
    }


    // スプライトシート
  function addSprite(){
	// ビタミンC
    var splashSheet = new createjs.SpriteSheet(splashSprite);
    var splash = new createjs.Sprite(splashSheet,'move');
    stage.addChild(splash);
		// stage.addChildAt(2,vitaminC);
		splash.x = 190;
		splash.y = 280;
        splash.scaleX = 0.7;
        splash.scaleY = 0.7;
		// splash.alpha = 0;
    // splash.gotoAndPlay('move');
    // createjs.Tween.get(splash).to({alpha: 1}, 500).wait(1000).call(vitaminCWalk).to({x: 500}, 4000).call(vitaminCStop);

		// vitaminC.addEventListener('click',function(evt){
		// 	// console.log(evt.target);
		// 	charaJump(evt.target);
		// });


    // function vitaminCWalk(){
    //   vitaminC.gotoAndPlay('walk');
    // }
    //
    // function vitaminCStop(){
    //   vitaminC.gotoAndPlay('stop');
    // }
    // function charaJump(target){
	// 	console.log('jump' + target);
	// 	createjs.Tween.get(target).to({y: 400},  500, createjs.Ease.quartOut).to({y: 480}, 300, createjs.Ease.quartOut);
	// }



    stage.update();
  }






  	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
  	createjs.Ticker.setFPS(30);

    createjs.Ticker.addEventListener('tick',function(){
        // earth.rotation -= 1;
        stage.update();
    })

    function nanamiTween(){
        createjs.Tween.get(nanami,{loop: true}).to({x: 310, y:300},500).call(function(){
            splash.gotoAndPlay('move');
        }).to({x: 310, y:280},500);
    }


});
