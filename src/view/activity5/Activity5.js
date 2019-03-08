(function(exports){
    function Activity5(value){

        this.isAniPlay = true;
        $(window).on("result_go_back_act5",$.proxy(function(){
            console.log("result_go_back_act5");
            this.isAniPlay = false;
        },this));

        this.data = value || {};

        $.getScript("src/view/activity5/AnimationManager5.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                controller.animationManager5 = new AnimationManager5(); // act2 에니메이션 메니져 생성
                controller.animationManager5.init();
            }
        },this));

        $.getScript("src/view/activity5/Activity5Game.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                this.act5Game = new Activity5Game();
            }
        },this));
    }

    Activity5.prototype = {
        onReset : function(){
            controller.characterManager.resetAni();
            this.act5Game.onReset();
            this.act5Resulte.onReset();
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
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.gram, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
        },
        onSpeekCharacter2 : function(){
            if(this.data[0].now_level_cd == "1") controller.model.activeLevel = "Easy";
            if(this.data[1].now_level_cd == "2") controller.model.activeLevel = "Medium";
            if(this.data[2].now_level_cd == "3") controller.model.activeLevel = "Hard";
            var url = controller.model.soundPath + controller.model.activeAct+"/character/replay2/"+controller.model.activeLevel;
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.gram, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
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
            this.imgPath = controller.model.imgPath + "act5/";
            var active_act = controller.model.activeAct;
            var startBtn = $("<button id='startButton'>START</button>");
            var bg = $('<div style="z-index: -1;background:url(./asset/img/act5/bg.png);position:absolute;width:1000px; height:630px;"></div>');

            

            this.playButton1 = $("<div id='act5_start_button1'></div>");
            this.playButton2 = $("<div id='act5_start_button2'></div>");
            this.playButton3 = $("<div id='act5_start_button3'></div>");
            this.levelButton1 = $("<div class='act5_level_button1 act5_level_click'></div>");
            this.levelButton2 = $("<div class='act5_level_button2 act5_level_click'></div>");
            this.levelButton3 = $("<div class='act5_level_button3 act5_level_click'></div>");
            var _viewName = $("<div>STAGE : "+active_act+"</div>");
            var _gameLevel = $("<div id ='gameLevel'>MY LEVEL : "+controller.model.activeLevel+"</div>");
            var _gameSet = $("<div id ='gameSet'>GAME SET : "+this.data.setNum+"</div>");
            var testButtons = $("<div class='testButtons'></div>");

            var panel = $("<div id='act5_panel'>"+
                            "<ul class='act5_panel_contain'>"+
                                "<li>"+
                                    "<div id='act5_level1_items'>"+
                                        "<img src='./asset/img/act5/panel.png' />"+
                                        "<div>"+
                                            "<ul class='font_embed level_text letter-space'>"+
                                                "<li>Level 1</li><li>"+this.data[0].yes_cnt+"</li>"+
                                            "</ul>"+
                                        "</div>"+
                                    "</div>"+
                                "</li>"+
                                "<li>"+
                                    "<div id='act5_level2_items'>"+
                                        "<img src='./asset/img/act5/panel.png' />"+
                                        "<div>"+
                                            "<ul class='font_embed level_text letter-space'>"+
                                                "<li>Level 1</li><li>"+this.data[1].yes_cnt+"</li>"+
                                            "</ul>"+
                                        "</div>"+
                                    "</div>"+
                                "</li>"+
                                "<li>"+
                                    "<div id='act5_level3_items'>"+
                                        "<img src='./asset/img/act5/panel.png' />"+
                                        "<div>"+
                                            "<ul class='font_embed level_text letter-space'>"+
                                                "<li>Level 1</li><li>"+this.data[2].yes_cnt+"</li>"+
                                            "</ul>"+
                                        "</div>"+
                                    "</div>"+
                                "</li>"+
                            "</ul>"+
                        "</div>");
            this.panel = panel;
            testModule.testButtonInit(testButtons);
            

            $("#gameContainer").append(bg);
            $("#gameContainer").append(this.levelButton1);
            $("#gameContainer").append(this.levelButton2);
            $("#gameContainer").append(this.levelButton3);
            $("#gameContainer").append(this.playButton1);
            $("#gameContainer").append(this.playButton2);
            $("#gameContainer").append(this.playButton3);
            this.playButton1.off("click",$.proxy(this.onGameStart,this));
            this.playButton2.off("click",$.proxy(this.onGameStart,this));
            this.playButton3.off("click",$.proxy(this.onGameStart,this));
            if(controller.model.activeLevel == "Easy") this.playButton1.on("click",$.proxy(this.onGameStart,this));
            if(controller.model.activeLevel == "Medium") this.playButton2.on("click",$.proxy(this.onGameStart,this));
            if(controller.model.activeLevel == "Hard") this.playButton3.on("click",$.proxy(this.onGameStart,this));
            // new ButtonUtil().init("act5_start_button1",this.imgPath,"click1"); //id,path,name,alt,name2,alt2
            // new ButtonUtil().init("act5_start_button2",this.imgPath,"click2"); //id,path,name,alt,name2,alt2
            // new ButtonUtil().init("act5_start_button3",this.imgPath,"click3"); //id,path,name,alt,name2,alt2
            
            this.setCharater();

            if(!this.isAniPlay) this.onSpeekCharacter();
            else this.onSpeekCharacter2();
            this.isAniPlay = true;
            // this.onSpeekCharacter();
            
            var items = $("<ul class='act5_point'></ul>");
            for(var i=0;i<5;i++){
                items.append($("<li><img src='"+this.imgPath+"item_over.png' /></li>"));
            }
            panel.find(".act5_panel_contain>li>div").prepend(items);

            
            $("#gameContainer").append(panel);
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
                x : 20,
                y : 280,
                index : 0
            }));
            arr.push(new Object({
                character:controller.characterManager.reedie,
                x : 960,
                y : 280,
                index : 1,
                scaleX : -1
            }));
            arr.push(new Object({
                character:controller.characterManager.elly,
                x :880,
                y : 365,
                index : 2,
                scaleX : -1
            }));
            arr.push(new Object({
                character:controller.characterManager.coco,
                x :110,
                y :420,
                index : 3
            }));
            this.arr = arr;
            controller.characterManager.onSetChrater("ani_canvas_characte",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 
        },

        onSetItems : function(){
            var level1 = $("#act5_level1_items");
            var level2 = $("#act5_level2_items");
            var level3 = $("#act5_level3_items");
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
            if($(e.currentTarget).attr("class") == "act5_level_button1 act5_level_click"){
                controller.model.activeLevel = "Easy";
            } 
            if($(e.currentTarget).attr("class") == "act5_level_button2 act5_level_click"){
                controller.model.activeLevel = "Medium";
            } 
            if($(e.currentTarget).attr("class") == "act5_level_button3 act5_level_click") {
                controller.model.activeLevel = "Hard";
            }
            var url = controller.model.soundPath + controller.model.activeAct+"/character/levelClick";
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.gram, url, $.proxy(function(){
                controller.dataManager.loadLog("end", null, $.proxy(function(){
                    this.onObjectOut();
                    controller.onloadAct5("game");
                },this));
            },this), true);// 동작 타입, 움직을 케릭터, 음성 경로
        },
        onHome : function(){ // 액트1 스타트 화면.
            this.act5Start.updateView();
        },
        onGame : function(){ // 게임 화면
            this.act5Game.updateView();
        },
        onStageSetting : function(){ // 게임 화면
            this.act5Game.onStageSetting();
        },
        onResulte : function(){
            this.act5Resulte.updateView();
        },
        onGameStart : function(e){
            controller.dataManager.loadLog("end", null, $.proxy(function(){
                var url = controller.model.soundPath + controller.model.activeAct+"/character/gameStart";
                controller.characterManager.onCharacterPlay("speek", controller.characterManager.gram, url, $.proxy(function(){
                    this.onObjectOut();
                    controller.onloadAct5("game");
                },this), true);// 동작 타입, 움직을 케릭터, 음성 경로
            },this));
        },
        onObjectOut : function(){
            this.onCharcterMotion();
            this.panel.fadeOut();
            this.levelButton1.hide();
            this.levelButton2.hide();
            this.levelButton3.hide();
        },
        onCharcterMotion : function(){
            console.log("motion");
                controller.characterManager.onMotion(controller.characterManager.elly, null,null,0,400); //타겟, x , y, alpha, 속도
                controller.characterManager.onMotion(controller.characterManager.coco, null,null,0,400); //타겟, x , y, alpha, 속도
                controller.characterManager.onMotion(controller.characterManager.reedie,960,null,null,200); //타겟, x , y, alpha, 속도
                controller.characterManager.onMotion(controller.characterManager.gram,null,null,0,200); //타겟, x , y, alpha, 속도
            
        },
        onReset : function(){
            
        }
    };
    exports.Activity5 = Activity5;
})(this);
