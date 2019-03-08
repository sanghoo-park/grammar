(function(exports){
    function Activity7(value){

        this.isAniPlay = true;
        $(window).on("result_go_back_act7",$.proxy(function(){
            console.log("result_go_back_act7");
            this.isAniPlay = false;
        },this));
        this.data = value || {};

        $.getScript("src/view/activity7/AnimationManager7.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                controller.animationManager7 = new AnimationManager7(); // act2 에니메이션 메니져 생성
                controller.animationManager7.init();
            }
        },this));

        $.getScript("src/view/activity7/Activity7Game.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                this.act7Game = new Activity7Game();
            }
        },this));
    }

    Activity7.prototype = {
        onReset : function(){
            controller.characterManager.resetAni();
            this.act7Game.onReset();
            this.act7Resulte.onReset();
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
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.nick, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
        },
        onSpeekCharacter2 : function(){
            // var level = (controller.model.activeLevel == "Easy")?"1":"2";
            var level = "";
            if(controller.model.activeLevel == "Easy") level = "1";
            if(controller.model.activeLevel == "Medium") level = "2";
            if(controller.model.activeLevel == "Hard") level = "3";
            var url = controller.model.soundPath + controller.model.activeAct+"/character/replay2/"+level;
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.nick, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
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
        init : function(){
            this.imgPath = controller.model.imgPath + controller.model.activeAct+"/";
            var active_act = controller.model.activeAct;
            var startBtn = $("<button id='startButton'>START</button>");
            var bg = $('<div style="z-index: -1;background:url(./asset/img/act7/bg.png);position:absolute;width:1000px; height:630px;"></div>');
            this.playButton = $("<button class='act7_start_button'></button>");
            this.levelButton1 = $("<div class='act7_level_button1 act7_level_click'></div>");
            this.levelButton2 = $("<div class='act7_level_button2 act7_level_click'></div>");
            this.levelButton3 = $("<div class='act7_level_button3 act7_level_click'></div>");
            var _viewName = $("<div>STAGE : "+active_act+"</div>");
            var _gameLevel = $("<div id ='gameLevel'>MY LEVEL : "+controller.model.activeLevel+"</div>");
            var _gameSet = $("<div id ='gameSet'>GAME SET : "+this.data.setNum+"</div>");
            var testButtons = $("<div class='testButtons'></div>");

            var panel = $("<div id='act7_panel'>"+
                            "<ul class='act7_panel_contain'>"+
                                "<li>"+
                                    "<div id='act7_level1_items'>"+
                                        "<img src='./asset/img/act7/panel.png' />"+
                                        "<div>"+
                                            "<ul class='font_embed level_text letter-space'>"+
                                                "<li>Level 1</li><li>"+this.data[0].yes_cnt+"</li>"+
                                            "</ul>"+
                                        "</div>"+
                                    "</div>"+
                                "</li>"+
                                "<li>"+
                                    "<div id='act7_level2_items'>"+
                                        "<img src='./asset/img/act7/panel.png' />"+
                                        "<div>"+
                                            "<ul class='font_embed level_text letter-space'>"+
                                                "<li>Level 2</li><li>"+this.data[1].yes_cnt+"</li>"+
                                            "</ul>"+
                                        "</div>"+
                                    "</div>"+
                                "</li>"+
                                "<li>"+
                                    "<div id='act7_level3_items'>"+
                                        "<img src='./asset/img/act7/panel.png' />"+
                                        "<div>"+
                                            "<ul class='font_embed level_text letter-space'>"+
                                                "<li>Level 3</li><li>"+this.data[2].yes_cnt+"</li>"+
                                            "</ul>"+
                                        "</div>"+
                                    "</div>"+
                                "</li>"+
                            "</ul>"+
                        "</div>");
            this.panel = panel;
            testModule.testButtonInit(testButtons);

            this.playButton1 = $("<div id='act7_start_button1'></div>");
            this.playButton2 = $("<div id='act7_start_button2'></div>");
            this.playButton3 = $("<div id='act7_start_button3'></div>");

            this.playImg2 = $("<img id='act7_play_img_2' src='"+this.imgPath+"level2.png' />");
            this.playImg3 = $("<img id='act7_play_img_3' src='"+this.imgPath+"next.png' />");

            $("#gameContainer").append(bg);
            $("#gameContainer").append(this.levelButton1);
            $("#gameContainer").append(this.levelButton2);
            $("#gameContainer").append(this.levelButton3);
            $("#gameContainer").append(this.playButton1);
            $("#gameContainer").append(this.playButton2);
            $("#gameContainer").append(this.playButton3);
            $("#gameContainer").append(this.playImg2);
            $("#gameContainer").append(this.playImg3);

            
            this.setCharater();
            var items = $("<ul class='act7_point'></ul>");
            for(var i=0;i<5;i++){
                items.append($("<li><img src='"+this.imgPath+"item_over.png' /></li>"));
            }
            panel.find(".act7_panel_contain>li>div").prepend(items);
            $("#gameContainer").append(panel);
            testButtons.append(startBtn);
            testButtons.append(_viewName);
            testButtons.append(_gameLevel);
            testButtons.append(_gameSet);
            $("#startButton").on("click",$.proxy(this.onGameStart,this));
            this.onSetItems();     
            testModule.onSetLevel(); 

            this.playButton1.off("click",$.proxy(this.onGameStart,this));
            this.playButton2.off("click",$.proxy(this.onGameStart,this));
            this.playButton3.off("click",$.proxy(this.onGameStart,this));
            if(controller.model.activeLevel == "Easy") this.playButton1.on("click",$.proxy(this.onGameStart,this));
            if(controller.model.activeLevel == "Medium") this.playButton2.on("click",$.proxy(this.onGameStart,this));
            if(controller.model.activeLevel == "Hard") this.playButton3.on("click",$.proxy(this.onGameStart,this));
            if(!this.isAniPlay) this.onSpeekCharacter();
            else this.onSpeekCharacter2();
            this.isAniPlay = true;
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
                x : 90,
                y : 260,
                index : 0
            }));
            arr.push(new Object({
                character:controller.characterManager.reedie,
                x : 30,
                y : 280,
                index : 1
            }));
            arr.push(new Object({
                character:controller.characterManager.elly,
                x : 150,
                y : 365,
                index : 2
            }));

            arr.push(new Object({
                character:controller.characterManager.nick,
                x :850,
                y : 410,
                index : 2
            }));
            this.arr = arr;
            controller.characterManager.onSetChrater("ani_canvas_characte",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 
        },

        onSetItems : function(){
            var level1 = $("#act7_level1_items");
            var level2 = $("#act7_level2_items");
            var level3 = $("#act7_level3_items");
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
            if($(e.currentTarget).attr("class") == "act7_level_button1 act7_level_click"){
                controller.model.activeLevel = "Easy";
            } 
            if($(e.currentTarget).attr("class") == "act7_level_button2 act7_level_click"){
                controller.model.activeLevel = "Medium";
            } 
            if($(e.currentTarget).attr("class") == "act7_level_button3 act7_level_click") {
                controller.model.activeLevel = "Hard";
            }
            var url = controller.model.soundPath + controller.model.activeAct+"/character/levelClick";
            controller.soundManager.init(url,true,$.proxy(function(){
                controller.dataManager.loadLog("end", null, $.proxy(function(){
                    this.onObjectOut();
                    controller.characterManager.resetAni();
                    controller.onloadAct7("game");
                },this));
            },this));
        },
        onHome : function(){ // 액트1 스타트 화면.
            this.act7Start.updateView();
        },
        
        onGame : function(){ // 게임 화면
            this.act7Game.updateView();
        },
        onStageSetting : function(){ // 게임 화면
            this.act7Game.onStageSetting();
        },
        onResulte : function(){
            this.act7Resulte.updateView();
        },
        onGameStart : function(e){
            controller.dataManager.loadLog("end", null, $.proxy(function(){
                var url = controller.model.soundPath + controller.model.activeAct+"/character/gameStart";
                controller.characterManager.onCharacterPlay("speek",controller.characterManager.nick,url,$.proxy(function(){
                    this.onObjectOut();
                    controller.characterManager.resetAni();
                    controller.onloadAct7("game");
                },this));
            },this));
        },
        onObjectOut : function(){
            this.panel.fadeOut();
            this.playButton.hide();
            this.levelButton1.hide();
            this.levelButton2.hide();
            this.levelButton3.hide();
            this.playButton1.hide();
            this.playButton2.hide();
            this.playButton3.hide();
            this.playImg2.hide();
            this.playImg3.hide();
        },
        onReset : function(){
            
        }
    };
    exports.Activity7 = Activity7;
})(this);
