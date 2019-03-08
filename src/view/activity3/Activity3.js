(function(exports){
    function Activity3(value){

        this.isAniPlay = true;
        $(window).on("result_go_back_act3",$.proxy(function(){
            console.log("result_go_back_act2");
            this.isAniPlay = false;
        },this));

        this.data = value || {};

        $.getScript("src/view/activity3/AnimationManager3.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                controller.animationManager3 = new AnimationManager3(); // act2 에니메이션 메니져 생성
                controller.animationManager3.init();
            }
        },this));

        $.getScript("src/view/activity3/activity3Script.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                this.act3Script = new Activity3Script();
            }
        },this));

        $.getScript("src/view/activity3/activity3Game.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                this.act3Game = new Activity3Game();
            }
        },this));

        $.getScript("src/view/activity3/activity3Resulte.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                this.act3Resulte = new Activity3Resulte();
            }
        },this));
    }

    Activity3.prototype = {
        onReset : function(){
            controller.characterManager.resetAni();
            this.act3Game.onReset();
            this.act3Resulte.onReset();
        },
        getContent : function(){
            this.data = controller.model.getActGameData().result[0].act_quest;
            controller.model.coin = controller.model.getActGameData().user_coin;
            controller.model.globalSetNum = controller.model.getActGameData().study_cnt;
            controller.globalUI.updateUI();
            if(this.data[0].now_level_cd == "1") controller.model.activeLevel = "Easy";
            if(this.data[0].now_level_cd == "2") controller.model.activeLevel = "Medium";
            if(this.data[0].now_level_cd == "3") controller.model.activeLevel = "Hard";

            if(this.isAniPlay) this.onAniMation(); // 처음 들어올때만 플레이. 화면4에서 다시 돌아올떄는 플래이 시키지 않는다.
            else this.init();
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
        onSpeekCharacter : function(){
            var level = (controller.model.activeLevel == "Easy")?"1":"2";
            var url = controller.model.soundPath + controller.model.activeAct+"/character/replay/"+level;
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.gram, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
        },
        onSpeekCharacter2 : function(){
            var level = (controller.model.activeLevel == "Easy")?"1":"2";
            var url = controller.model.soundPath + controller.model.activeAct+"/character/replay2/"+level;
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.reedie, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
        },

        init : function(){
            this.imgPath = controller.model.imgPath + "act3/";
            var active_act = controller.model.activeAct;
            var bg = $('<div style="z-index: -1;background:url(./asset/img/act3/bg.png);position:absolute;width:1000px; height:630px;"></div>');
            this.playButton = $("<button class='act3_start_button'></button>");
            this.levelButton1 = $("<button class='act3_level_button1 level_click'></button>");
            this.levelButton2 = $("<button class='act3_level_button2 level_click'></button>");
            this.levelButton3 = $("<button class='act3_level_button3 level_click'></button>");
            var sprinkler = $("<div class='act3_sprinkler'><img src='./asset/img/act3/sprinkler.png' /></div>");
            var _viewName = $("<div>STAGE : "+active_act+"</div>");
            var _gameLevel = $("<div id ='gameLevel'>MY LEVEL : "+controller.model.activeLevel+"</div>");
            var _gameSet = $("<div id ='gameSet'>GAME SET : "+this.data[0].set_num_cnt+"</div>");
            var testButtons = $("<div class='testButtons'></div>");

            this.panleContainer = $("<div></div>");
            var panel = $("<div id='act3_panel'><ul class='act3_panel_contain'>"+
                            "<li><div id='act3_level1_items'><img src='./asset/img/act3/panel.png' /></div><div><ul class='font_embed level_text letter-space'><li>Level 1</li><li>"+this.data[0].yes_cnt+"</li></ul></div></li>"+
                            "<li><div id='act3_level2_items'><img src='./asset/img/act3/panel.png' /></div><div><ul class='font_embed level_text letter-space'><li>Level 2</li><li>"+this.data[1].yes_cnt+"</li></ul></div></li>"+
                            "<li><div id='act3_level3_items'><img src='./asset/img/act3/panel.png' /></div><div><ul class='font_embed level_text letter-space'><li>Level 3</li><li>"+this.data[2].yes_cnt+"</li></ul></div></li>"+
                        "</ul></div>");
            testModule.testButtonInit(testButtons);
            $("#gameContainer").append(bg);
            $("#gameContainer").append(this.levelButton1);
            $("#gameContainer").append(this.levelButton2);
            $("#gameContainer").append(this.levelButton3);
            $("#gameContainer").append(this.panleContainer);
            $("#gameContainer").append(sprinkler);
            $("#gameContainer").append(this.playButton);
           
            this.playButton.on("click",$.proxy(this.onGameStart,this));
            this.setCharater();

            if(!this.isAniPlay) this.onSpeekCharacter();
            else this.onSpeekCharacter2();
            this.isAniPlay = true;


            var items = $("<ul class='act3_point'>"+
            "<li><img src='"+this.imgPath+"item_over.png' /></li><li><img src='"+this.imgPath+"item_over.png' /></li><li><img src='"+this.imgPath+"item_over.png' /></li><li><img src='"+this.imgPath+"item_over.png' /></li><li><img src='"+this.imgPath+"item_over.png' /></li>"+
            "<ul>");
            panel.find(".act3_panel_contain>li div:first-child").prepend(items);
            this.panleContainer.append(panel);
            testButtons.append(_viewName);
            testButtons.append(_gameLevel);
            testButtons.append(_gameSet);
            this.onSetItems();
            testModule.onSetLevel();
        },
        setCharater : function(){
            console.log("------------------------------setCharater---------------------------------")
            var characterCanvas = $("<canvas id='ani_canvas_characte' width='1000' height='630'></canvas>");
            var characterContain = $("<div id ='charater_contian' style='position:absolute;top:0;left:0;width:1000px;height:630px'></div>"); //케릭터 애니 담을 컨테인
            $("#gameContainer").append(characterContain);
            characterContain.append(characterCanvas);
            var arr = [];
            arr.push(new Object({
                character:controller.characterManager.gram,
                x : 77,
                y : 243,
                index : 0
            }));
            arr.push(new Object({
                character:controller.characterManager.reedie,
                x : 24,
                y : 289,
                index : 1
            }));
            
            arr.push(new Object({
                character:controller.characterManager.coco,
                x : 128,
                y : 427,
                index : 2
            }));
            arr.push(new Object({
                character:controller.characterManager.toto,
                x : 840,
                y : 431,
                index : 3
            }));

            arr.push(new Object({
                character:controller.characterManager.elly,
                x : 956,
                y : 361,
                index : 4,
                scaleX : -1
            }));
            
            controller.characterManager.onSetChrater("ani_canvas_characte",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 
        },

        onSetItems : function(){
            var level1 = $("#act3_level1_items");
            var level2 = $("#act3_level2_items");
            var level3 = $("#act3_level3_items");
            var num1 = (this.data[0].set_num_cnt>5)?5:this.data[0].set_num_cnt;
            var num2 = (this.data[1].set_num_cnt>5)?5:this.data[1].set_num_cnt;
            var num3 = (this.data[2].set_num_cnt>5)?5:this.data[2].set_num_cnt;

            if(num1 >= 5 && num2 < 5){
                this.levelButton1.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                this.levelButton2.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
            }else if(num1 >= 5 && num2 >= 5){
                this.levelButton1.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                this.levelButton2.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                this.levelButton3.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
            }

            for(var i=0;i<num1;i++){
                level1.find("ul li:nth-child("+(i+1)+") img").attr("src",this.imgPath+"item.png");
            } 
            
            for(i=0;i<num2;i++){
                level2.find("ul li:nth-child("+(i+1)+") img").attr("src",this.imgPath+"item.png");
            } 

            for(i=0;i<num3;i++){
                level3.find("ul li:nth-child("+(i+1)+") img").attr("src",this.imgPath+"item.png");
            } 
            
        },
        onLevelClickListener : function(e){
            console.log($(e.currentTarget).attr("class"));
            if($(e.currentTarget).attr("class") == "act3_level_button1 level_click"){
                controller.model.activeLevel = "Easy";
                // this.panel.find("li:last-child").html("Level 1");
            } 
            if($(e.currentTarget).attr("class") == "act3_level_button2 level_click"){
                controller.model.activeLevel = "Medium";
                // this.panel.find("li:last-child").html("Level 2");
            } 
            if($(e.currentTarget).attr("class") == "act3_level_button3 level_click") {
                controller.model.activeLevel = "Hard";
                // this.panel.find("li:last-child").html("Level 3");
            }
            var url = controller.model.soundPath + controller.model.activeAct+"/character/levelClick";
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.reedie, url, $.proxy(function(){
                controller.dataManager.loadLog("end", null, function(){
                    controller.characterManager.resetAni();
                    $("#gameContainer").html("");
                    controller.onloadAct3("script");
                });
            },this), true);// 동작 타입, 움직을 케릭터, 음성 경로
        },
        onHome : function(){ // 액트1 스타트 화면.
            this.act3Start.updateView();
        },
        onScript : function(){ // 대사 화면
            this.act3Script.updateView();
        },
        onScriptComplete : function(){ // 대사 화면
            this.act3Script.setView();
        },
        onGame : function(){ // 게임 화면
            this.act3Game.updateView();
        },
        onResulte : function(){
            this.act3Resulte.updateView();
        },
        onGameStart : function(e){
            controller.dataManager.loadLog("end", null, function(){
                var url = controller.model.soundPath + controller.model.activeAct+"/character/gameStart";
                controller.characterManager.onCharacterPlay("speek", controller.characterManager.reedie, url, function(){
                    controller.characterManager.resetAni();
                    $("#gameContainer").html("");
                    controller.onloadAct3("script");
                }, true);// 동작 타입, 움직을 케릭터, 음성 경로
            });
            
        },
        onStageSetting : function(){
            this.act3Game.onStageSetting();
        }
    };
    exports.Activity3 = Activity3;
})(this);
