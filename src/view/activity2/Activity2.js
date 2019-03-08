(function(exports){
    function Activity2(value){
        this.isAniPlay = true;
        $(window).on("result_go_back_act2",$.proxy(function(){
            console.log("result_go_back_act2");
            this.isAniPlay = false;
        },this));
        
        $(window).on("startForgClick", $.proxy(function(){
            
        },this)); // 개구리 클릭시 게임 스타트.
        this.data = value || {};
        $.getScript("src/view/activity2/AnimationManager2.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                controller.animationManager2 = new AnimationManager2(); // act2 에니메이션 메니져 생성
                controller.animationManager2.init();
            }
        },this));

        $.getScript("src/view/activity2/Activity2Script.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                console.log("Activity2Script");
                this.act2Script = new Activity2Script();
            }
        },this));

        $.getScript("src/view/activity2/Activity2Game.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                this.act2Game = new Activity2Game();
            }
        },this));

        $.getScript("src/view/activity2/Activity2Resulte.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                this.act2Resulte = new Activity2Resulte();
            }
        },this));
    }

    Activity2.prototype = {
        onReset : function(){
            controller.characterManager.resetAni();
            this.act2Game.onReset();
        },

        getContent : function(){
            this.data = controller.model.getActGameData().result[0].act_quest;
            controller.model.globalSetNum = controller.model.getActGameData().study_cnt;
            controller.model.coin = controller.model.getActGameData().user_coin;
            controller.globalUI.updateUI();
            if(this.data[0].now_level_cd == "1") controller.model.activeLevel = "Easy";
            if(this.data[0].now_level_cd == "2") controller.model.activeLevel = "Medium";
            if(this.data[0].now_level_cd == "3") controller.model.activeLevel = "Hard";
            console.log(this.isAniPlay+"  this.isAniPlay")
            if(this.isAniPlay) this.onAniMation(); // 처음 들어올때만 플레이. 화면4에서 다시 돌아올떄는 플래이 시키지 않는다.
            else this.init();

           
        },
        onSpeekCharacter : function(){
            var level = (controller.model.activeLevel == "Easy")?"1":"2";
            var url = controller.model.soundPath + controller.model.activeAct+"/character/replay/"+level;
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.reedie, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
        },
        onSpeekCharacter2 : function(){
            var level = (controller.model.activeLevel == "Easy")?"1":"2";
            var url = controller.model.soundPath + controller.model.activeAct+"/character/replay2/"+level;
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.reedie, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
        },
        onAniMation : function(){
            var vod = $("<div id='view1_vod'></div>");
            $("#gameContainer").append(vod);
            controller.videoManager.init(vod,controller.model.videoPath+"/"+controller.model.activeAct+"/view1/"+controller.model.activeLevel+"/Scene",false,$.proxy(this.init, this));
            if(controller.model.testMode){
                vod.on("click",$.proxy(function(e){
                    vod.off("click");
                    controller.videoManager.allRemove();
                    // $("#top_vod").html("");
                    this.init();
                },this));
            }
        },
        init : function(){
            
            
            
            var active_act = controller.model.activeAct;
            var _viewName = $("<div>STAGE : "+active_act+"</div>");
            var _gameLevel = $("<div id ='gameLevel'>MY LEVEL : "+controller.model.activeLevel+"</div>");
            var _gameSet = $("<div id ='gameSet'>GAME SET : act1 : "+this.data[0].set_num_cnt+" // act2 : "+this.data[1].set_num_cnt+" // act3 : "+this.data[2].set_num_cnt+"</div>");
            this.imgPath = controller.model.imgPath + "act2/";
            var bg = $('<div style="z-index: -1;background:url(./asset/img/act2/bg.png);position:absolute;width:1000px; height:630px;"></div>');
            var panleContainer = $("<div></div>");
            var panel = $("<div id='act2_panel'><ul class='act2_panel_contain'>"+
                            "<li><canvas width='132' height='86' style='position: absolute; display: block; background-color:rgba(66, 66, 66, 0.00);' id='act2_start_fly1'></canvas><div class='fly_items' id='act2_level1_items' value='1'><img src='./asset/img/act2/panel.png' /></div><div><ul class='font_embed level_text letter-space'><li>Level 1</li><li>"+this.data[0].yes_cnt+"</li></ul></div></li>"+
                            "<li><canvas width='132' height='86' style='position: absolute; display: block; background-color:rgba(66, 66, 66, 0.00);' id='act2_start_fly2'></canvas><div class='fly_items' id='act2_level2_items' value='2'><img src='./asset/img/act2/panel.png' /></div><div><ul class='font_embed level_text letter-space'><li>Level 2</li><li>"+this.data[1].yes_cnt+"</li></ul></div></li>"+
                            "<li><canvas width='132' height='86' style='position: absolute; display: block; background-color:rgba(66, 66, 66, 0.00);' id='act2_start_fly3'></canvas><div class='fly_items' id='act2_level3_items' value='3'><img src='./asset/img/act2/panel.png' /></div><div><ul class='font_embed level_text letter-space'><li>Level 3</li><li>"+this.data[2].yes_cnt+"</li></ul></div></li>"+
                        "</ul></div>");
            this.panel = panel;
            // var bg = $("<div id='bg' style='z-index: -1;background-color:#e6d964;position:absolute;width:1000px; height:630px;'></div>");
            $("#gameContainer").append(bg);
            this.setCharater();

            if(!this.isAniPlay) this.onSpeekCharacter();
            else this.onSpeekCharacter2();
            
            this.isAniPlay = true;

            
            $("#gameContainer").append(panleContainer);
            panleContainer.append(panel);

            var testButtons = $("<div class='testButtons'></div>");
            testModule.testButtonInit(testButtons);
            
            
            testButtons.append(_viewName);
            testButtons.append(_gameLevel);
            testButtons.append(_gameSet);
            $("#startButton").on("click",$.proxy(this.onGameStart,this));

            var items = $("<ul class='fly_point'>"+
            "<li><img src='"+this.imgPath+"fly_over.png' /></li><li><img src='"+this.imgPath+"fly_over.png' /></li><li><img src='"+this.imgPath+"fly_over.png' /></li><li><img src='"+this.imgPath+"fly_over.png' /></li><li><img src='"+this.imgPath+"fly_over.png' /></li>"+
            "<li><img src='"+this.imgPath+"fly_over.png' /></li><li><img src='"+this.imgPath+"fly_over.png' /></li><li><img src='"+this.imgPath+"fly_over.png' /></li><li><img src='"+this.imgPath+"fly_over.png' /></li><li><img src='"+this.imgPath+"fly_over.png' /></li>"+
            "<ul>");
            panel.find(".fly_items").prepend(items);
            // panel.find(".fly_items>ul li").hide();
            this.onSetItems();

            var canvas = $('<canvas id ="ani_startFrog" width="100" height="77" style="position: absolute; display: block; background-color:rgba(66, 66, 66, 0.00);"></canvas>');
            $("#gameContainer").append(canvas);
            controller.animationManager2.startFrog.init("ani_startFrog");
            canvas.on("click", $.proxy(function(){
                var url = controller.model.soundPath + controller.model.activeAct+"/character/gameStart";
                controller.characterManager.onCharacterPlay("speek", controller.characterManager.reedie, url, $.proxy(this.onGameStart,this), true);// 동작 타입, 움직을 케릭터, 음성 경로
            },this));

            for(var i=0;i<3;i++){
                console.log(i+1);
               // controller.animationManager2.fly.init("act2_start_fly"+(i+1));
            }
            testModule.onSetLevel();
        },
        setCharater : function(){
            console.log("------------------------------setCharater---------------------------------")
            var characterCanvas = $("<canvas id='ani_canvas_characte' width='1000' height='630'></canvas>");
            var characterContain = $("<div id ='charater_contian' style='position:absolute;top:0;left:0;width:1000px;height:630px'></div>"); //케릭터 애니 담을 컨테인
            $("#gameContainer").append(characterContain);
            characterContain.append(characterCanvas);
            var obj1 = {};
            var obj2 = {};
            var obj3 = {};
            var obj4 = {};
            var arr = [];
            
            

            obj1.character = controller.characterManager.reedie;
            obj1.x = 43;
            obj1.y = 267;
            arr.push(obj1);

            obj2.character = controller.characterManager.gram;
            obj2.x = 86;
            obj2.y = 215;
            arr.push(obj2);

            obj3.character = controller.characterManager.elly;
            obj3.x = 187;
            obj3.y = 349;
            arr.push(obj3);

            obj4.character = controller.characterManager.coco;
            obj4.x = 256;
            obj4.y = 380;
            arr.push(obj4);
            console.log(arr);
            controller.characterManager.onSetChrater("ani_canvas_characte",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 
        },
        onSetItems : function(){
            var level1 = $("#act2_level1_items");
            var level2 = $("#act2_level2_items");
            var level3 = $("#act2_level3_items");
            var num1 = (this.data[0].set_num_cnt>10)?10:this.data[0].set_num_cnt;
            var num2 = (this.data[1].set_num_cnt>10)?10:this.data[1].set_num_cnt;
            var num3 = (this.data[2].set_num_cnt>10)?10:this.data[2].set_num_cnt;
            if(num1 >= 10 && num2 < 10){
                level1.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                level2.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
            }else if(num1 >= 10 && num2 >= 10){
                level1.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                level2.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                level3.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
            } 
            for(var i=0;i<num1;i++){
                level1.find("ul li:nth-child("+(i+1)+") img").attr("src",this.imgPath+"fly.png");
            } 
            
            for(i=0;i<num2;i++){
                level2.find("ul li:nth-child("+(i+1)+") img").attr("src",this.imgPath+"fly.png");
            } 

            for(i=0;i<num3;i++){
                level3.find("ul li:nth-child("+(i+1)+") img").attr("src",this.imgPath+"fly.png");
            } 
            
        },
        onLevelClickListener : function(e){
            if(e.currentTarget.id == "act2_level1_items"){
                controller.model.activeLevel = "Easy";
            } 
            if(e.currentTarget.id == "act2_level2_items"){
                controller.model.activeLevel = "Medium";
            } 
            if(e.currentTarget.id == "act2_level3_items") {
                controller.model.activeLevel = "Hard";
            }
            var url = controller.model.soundPath + controller.model.activeAct+"/character/levelClick";
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.reedie, url, $.proxy(this.onGameStart,this), true);// 동작 타입, 움직을 케릭터, 음성 경로
        },
        onHome : function(){ // 액트1 스타트 화면.
            this.act2Start.updateView();
        },
        onScript : function(){ // 대사 화면
            console.log(this.act2Script);
            this.act2Script.updateView();
        },
        onScriptComplete : function(){ // 대사 화면
            this.act2Script.setView();
        },
        onGame : function(){ // 게임 화면
            this.act2Game.updateView();
        },
        onResulte : function(){
            this.act2Resulte.updateView();
        },
        onGameStart : function(e){
            controller.dataManager.loadLog("end", null, $.proxy(this.onGameStartCallBack,this));
        },
        onGameStartCallBack : function(){
            controller.animationManager2.resetAni();
            controller.characterManager.resetAni();
            $("#gameContainer").html("");
            controller.onloadAct2("script");
        },
        onStageSetting : function(){
            this.act2Game.onStageSetting();
        }
    };
    exports.Activity2 = Activity2;
})(this);







































































    