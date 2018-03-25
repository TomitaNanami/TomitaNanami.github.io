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

        $('.header-container').find('.menu').on('click',function(){
            console.log('くりっく');

            $('.menu-container').css('display','block').removeClass('fade-out').addClass('fade-in');
        });


        $('.w-menu').on('click',function(){
            console.log('くりっく2');

            $('.menu-container').removeClass('fade-in').addClass('fade-out');
            setTimeout(function(){
                $('.menu-container').removeClass('fade-in').css('display','none');
            },1000);
        });




    //canvasの中身
    var stage = new createjs.StageGL("canvasEl",{ antialias: true });
    stage.setClearColor("#000")//("#BDE1DB");
    // 画像を保存する配列
    var manifest = [
        {src: '../img/homevis/earth.png'},
        {src: '../img/homevis/nanami2.png'},
        {src: '../img/homevis/splash.png'},
		{src: '../img/homevis/inbg.png'},
		{src: '../img/homevis/outbg.png'}
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
	var inbg;
	var outbg;


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
		splash.y = 300;
        splash.scaleX = 0.7;
        splash.scaleY = 0.7;
        splash.gotoAndStop('stop');

		// inbg
        inbg = new createjs.Bitmap(manifest[3].src);
        inbg.x = stage.canvas.width/2;
        inbg.y = 1100;
        inbg.width = 2109;
        inbg.height = 2109;
        inbg.regX = inbg.width/2;
        inbg.regY = inbg.height/2;
		inbg.scaleX = 0.9;
        inbg.scaleY = 0.9;
        stage.addChild(inbg);

		// outbg
        outbg = new createjs.Bitmap(manifest[4].src);
        outbg.x = stage.canvas.width/2;
        outbg.y = 1100;
        outbg.width = 2980;
        outbg.height = 2980;
        outbg.regX = outbg.width/2;
        outbg.regY = outbg.height/2;
		outbg.scaleX = 0.9;
        outbg.scaleY = 0.9;
        stage.addChild(outbg);

        //  レイヤー
		stage.setChildIndex(outbg,1);
		stage.setChildIndex(inbg,2);
        stage.setChildIndex(nanami,3);
        stage.setChildIndex(earth,4);

        moveS();
        function moveS(){
            createjs.Tween.get(nanami).wait(100).to({x: 310, y:300},500).call(function(){
                splash.gotoAndPlay('move');
            }).wait(380).to({x: 310, y:280},700).call(function(){
                splash.gotoAndPlay('stop');
                moveS();
            });
        }

		createjs.Tween.get(earth, {loop:true}).to({rotation: -360}, 100000);
		createjs.Tween.get(inbg, {loop:true}).to({rotation: -360}, 200000);
		createjs.Tween.get(outbg, {loop:true}).to({rotation: -360}, 300000);

		stage.update();


	  	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	  	createjs.Ticker.setFPS(30);
	    createjs.Ticker.addEventListener('tick',function(){

	        // earth.rotation -= 0.3;
			// inbg.rotation += 0.15;
			// outbg.rotation += 0.2;
	        stage.update();
	    })
    }



	//スクロールイベント
	$(window).on('scroll',function(){
        // console.log('スクロールしている');

        // 上からのスクロール値
        var dy = $(this).scrollTop();
        console.log('dy:' + dy);


        if(dy >= 200){
            $('.box1').addClass('in-left');
        }
		if(dy >= 700){
            $('.box2').addClass('in-right');
        }
		if(dy >= 1000){
            $('.box3').addClass('in-left');
        }
		if(dy >= 1400){
            $('.box4').addClass('in-right');
        }







    });






});
