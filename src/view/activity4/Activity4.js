(function(exports){
    function Activity4(value){
        this.isAniPlay = true;
        $(window).on("result_go_back_act4",$.proxy(function(){
            console.log("result_go_back_act4");
            this.isAniPlay = false;
        },this));
        this.data = value || {};

        $.getScript("src/view/activity4/AnimationManager4.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                controller.animationManager4 = new AnimationManager4(); // act2 에니메이션 메니져 생성
                controller.animationManager4.init();
            }
        },this));

        $.getScript("src/view/activity4/Activity4Game.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                this.act4Game = new Activity4Game();
            }
        },this));

        $.getScript("src/view/activity4/Activity4Resulte.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                this.act4Resulte = new Activity4Resulte();
            }
        },this));
    }

    Activity4.prototype = {
        onReset : function(){
            controller.characterManager.resetAni();
            this.act4Game.onReset();
            this.act4Resulte.onReset();
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
            controller.videoManager.init(vod,controller.model.videoPath+"/"+controller.model.activeAct+"/"+controller.model.activeLevel+"/Scene",false,$.proxy(this.init, this));
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
            var str = "";
            if(this.data[0].now_level_cd == "1") controller.model.activeLevel = "Easy";
            if(this.data[1].now_level_cd == "2") controller.model.activeLevel = "Medium";
            if(this.data[2].now_level_cd == "3") controller.model.activeLevel = "Hard";
            if(this.data[0].yes_yn == "Y") str = "_1";
            if(this.data[1].yes_yn == "Y") str = "_1";
            if(this.data[2].yes_yn == "Y") str = "_1";


            var url = controller.model.soundPath + controller.model.activeAct+"/character/replay/"+controller.model.activeLevel+str;
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.fireMan, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
        },

        onSpeekCharacter2 : function(){
            var str = "";
            var level = "";
            if(this.data[0].now_level_cd == "1") level = "Easy2";
            if(this.data[1].now_level_cd == "2") level = "Medium2";
            if(this.data[2].now_level_cd == "3") level = "Hard2";
            if(this.data[0].yes_yn == "Y") str = "_1";
            if(this.data[1].yes_yn == "Y") str = "_1";
            if(this.data[2].yes_yn == "Y") str = "_1";


            var url = controller.model.soundPath + controller.model.activeAct+"/character/replay/"+level+str;
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.fireMan, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
        },
        init : function(){
            this.imgPath = controller.model.imgPath + "act4/";
            var active_act = controller.model.activeAct;
            var startBtn = $("<button id='startButton'>START</button>");
            var bg = $('<div style="z-index: -1;background:url(./asset/img/act4/bg.png);position:absolute;width:1000px; height:630px;"></div>');
            
            this.levelButton1 = $("<div class='act4_level_button1 level_click'></div>");
            this.levelButton2 = $("<div class='act4_level_button2 level_click'></div>");
            this.levelButton3 = $("<div class='act4_level_button3 level_click'></div>");
            var _viewName = $("<div>STAGE : "+active_act+"</div>");
            var _gameLevel = $("<div id ='gameLevel'>MY LEVEL : "+controller.model.activeLevel+"</div>");
            var _gameSet = $("<div id ='gameSet'>GAME SET : "+this.data.setNum+"</div>");
            var testButtons = $("<div class='testButtons'></div>");

            this.panleContainer = $("<div></div>");
            var panel = $("<div id='act4_panel'><ul class='act4_panel_contain'>"+
                            "<li><div id='act4_level1_items'><img src='./asset/img/act4/panel.png' /></div><div><ul class='font_embed level_text letter-space'><li>Level 1</li><li>"+this.data[0].yes_cnt+"</li></ul></div></li>"+
                            "<li><div id='act4_level2_items'><img src='./asset/img/act4/panel.png' /></div><div><ul class='font_embed level_text letter-space'><li>Level 2</li><li>"+this.data[1].yes_cnt+"</li></ul></div></li>"+
                            "<li><div id='act4_level3_items'><img src='./asset/img/act4/panel.png' /></div><div><ul class='font_embed level_text letter-space'><li>Level 3</li><li>"+this.data[2].yes_cnt+"</li></ul></div></li>"+
                        "</ul></div>");
            testModule.testButtonInit(testButtons);
            $("#gameContainer").append(bg);
            $("#gameContainer").append(this.levelButton1);
            $("#gameContainer").append(this.levelButton2);
            $("#gameContainer").append(this.levelButton3);
            $("#gameContainer").append(this.panleContainer);


            var obj = {};
            
            this.playButton1 = $("<div id='act4_start_button1'></div>");
            this.playButton2 = $("<div id='act4_start_button2'></div>");
            this.playButton3 = $("<div id='act4_start_button3'></div>");
            
            $("#gameContainer").append(this.playButton1);
            $("#gameContainer").append(this.playButton2);
            $("#gameContainer").append(this.playButton3);

            new ButtonUtil().init("act4_start_button1",this.imgPath,"Easy"); //id,path,name,alt,name2,alt2
            new ButtonUtil().init("act4_start_button2",this.imgPath,"Medium"); //id,path,name,alt,name2,alt2
            new ButtonUtil().init("act4_start_button3",this.imgPath,"Hard"); //id,path,name,alt,name2,alt2
            this.playButton1.css({"left":"140px","top":"430px","position":"absolute","z-index":"1000"});
            this.playButton2.css({"left":"30px","top":"100px","position":"absolute","z-index":"1000"});
            this.playButton3.css({"left":"120px","top":"438px","position":"absolute","z-index":"1000"});
            if(controller.model.activeLevel == "Easy"){
                this.playButton1.on("click",$.proxy(this.onGameStart,this));
            }else if(controller.model.activeLevel == "Medium"){
                this.playButton2.on("click",$.proxy(this.onGameStart,this));
            }else if(controller.model.activeLevel == "Hard"){
                this.playButton3.on("click",$.proxy(this.onGameStart,this));
            }
            this.setCharater();

            if(!this.isAniPlay) this.onSpeekCharacter();
            else this.onSpeekCharacter2();
            this.isAniPlay = true;

            var items1 = $("<ul class='act4_point'></ul>");
            var items2 = $("<ul class='act4_point'></ul>");
            var items3 = $("<ul class='act4_point'></ul>");

            for(var i=0;i<10;i++){
                items1.append($("<li><img src='"+this.imgPath+"item_over.png' /></li>"));
            }

            for(i=0;i<15;i++){
                items2.append($("<li><img src='"+this.imgPath+"item_over.png' /></li>"));
            }

            for(i=0;i<15;i++){
                items3.append($("<li><img src='"+this.imgPath+"item_over.png' /></li>"));
            }
            console.log(items1);
            panel.find("#act4_level1_items").prepend(items1);
            panel.find("#act4_level2_items").prepend(items2);
            panel.find("#act4_level3_items").prepend(items3);
            this.panleContainer.append(panel);
            testButtons.append(startBtn);
            testButtons.append(_viewName);
            testButtons.append(_gameLevel);
            testButtons.append(_gameSet);
            $("#startButton").on("click",$.proxy(this.onGameStart,this));
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
                x : 956,
                y : 281,
                index : 0,
                scaleX : -1
            }));
            arr.push(new Object({
                character:controller.characterManager.reedie,
                x : 1006,
                y : 311,
                index : 1,
                scaleX : -1
            }));

            arr.push(new Object({
                character:controller.characterManager.coco,
                x : 856,
                y : 431,
                index : 2,
                scaleX : -0.4
            }));

            arr.push(new Object({
                character:controller.characterManager.elly,
                x : 916,
                y : 381,
                index : 3,
                scaleX : -1
            }));
            

            arr.push(new Object({
                character:controller.characterManager.fireMan,
                x : 20,
                y : 275,
                index : 4
            }));
            
            controller.characterManager.onSetChrater("ani_canvas_characte",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 
        },

        onSetItems : function(){
            var level1 = $("#act4_level1_items");
            var level2 = $("#act4_level2_items");
            var level3 = $("#act4_level3_items");
            var num1 = (this.data[0].set_num_cnt>10)?10:this.data[0].set_num_cnt;
            var num2 = (this.data[1].set_num_cnt>15)?15:this.data[1].set_num_cnt;
            var num3 = (this.data[2].set_num_cnt>15)?15:this.data[2].set_num_cnt;

            if(num1 >= 10 && num2 < 15){
                this.levelButton1.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                this.levelButton2.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
            }else if(num1 >= 10 && num2 >= 15){
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
            if($(e.currentTarget).attr("class") == "act4_level_button1 level_click"){
                controller.model.activeLevel = "Easy";
            } 
            if($(e.currentTarget).attr("class") == "act4_level_button2 level_click"){
                controller.model.activeLevel = "Medium";
            } 
            if($(e.currentTarget).attr("class") == "act4_level_button3 level_click") {
                controller.model.activeLevel = "Hard";
            }
            controller.dataManager.loadLog("end", null, function(){
                var url = controller.model.soundPath + controller.model.activeAct+"/character/levelClick";
                controller.characterManager.onCharacterPlay("speek", controller.characterManager.fireMan, url, function(){
                    controller.characterManager.resetAni();
                    $("#gameContainer").html("");
                    controller.onloadAct4("game");
                }, true);// 동작 타입, 움직을 케릭터, 음성 경로
            });
        },
        onHome : function(){ // 액트1 스타트 화면.
            this.act4Start.updateView();
        },
        onGame : function(){ // 게임 화면
            this.act4Game.updateView();
        },
        onStageSetting : function(){ // 게임 화면
            this.act4Game.onStageSetting();
        },
        onResulte : function(){
            this.act4Resulte.updateView();
        },
        onGameStart : function(e){
            controller.dataManager.loadLog("end", null, function(){
                var url = controller.model.soundPath + controller.model.activeAct+"/character/gameStart";
                controller.characterManager.onCharacterPlay("speek", controller.characterManager.fireMan, url, function(){
                    controller.characterManager.resetAni();
                    $("#gameContainer").html("");
                    controller.onloadAct4("game");
                }, true);// 동작 타입, 움직을 케릭터, 음성 경로
                // controller.characterManager.onCharacterPlay("speek",controller.characterManager.fireMan,url,);
            });
            
        }
    };
    exports.Activity4 = Activity4;
})(this);
