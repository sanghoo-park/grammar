(function(exports){
    function Activity1Start(value){
        this.data = value || {};
        this.isAniPlay = true;
        $(window).on("result_go_back",$.proxy(function(){
            console.log("result_go_back result_go_back result_go_back");
            this.isAniPlay = false;
        },this));
    }

    Activity1Start.prototype = {
        updateView : function(){
            var viewName = controller.model.getViewName();
            // var data = {}
            // data = controller.model.getActGameData();
            this.data = controller.model.getActGameData().result[0].act_quest;
            controller.model.globalSetNum = controller.model.getActGameData().study_cnt;
            controller.model.coin = controller.model.getActGameData().user_coin;
            controller.globalUI.updateUI();
            if(this.data[0].now_level_cd == "1") controller.model.activeLevel = "Easy";
            if(this.data[0].now_level_cd == "2") controller.model.activeLevel = "Medium";
            if(this.data[0].now_level_cd == "3") controller.model.activeLevel = "Hard";
            // $("#gameContainer").hide();
            if(this.isAniPlay) this.onAniMation(); // 처음 들어올때만 플레이. 화면4에서 다시 돌아올떄는 플래이 시키지 않는다.
            else this.init();
            
        },
        onAniMation : function(){
            var vod = $("<div id='view1_vod'></div>");
            $("#gameContainer").append(vod);


            controller.videoManager.init(vod,controller.model.videoPath+"/"+controller.model.activeAct+"/view1/"+controller.model.viewName+"/"+controller.model.activeLevel+"/Scene",false,$.proxy(this.init, this));
            if(controller.model.testMode){

                vod.on("click",$.proxy(function(e){
                    vod.off("click");
                    controller.videoManager.allRemove();
                    this.init();
                },this));
            }
        },
        onSpeekCharacter : function(){
            var level = (controller.model.activeLevel == "Easy")?"1":"2";
            var character;
            if(controller.model.viewName == "Adjectives") character = controller.characterManager.reedie;
            if(controller.model.viewName == "Adverbs") character = controller.characterManager.reedie;
            if(controller.model.viewName == "Nouns") character = controller.characterManager.reedie;
            if(controller.model.viewName == "Verbs") character = controller.characterManager.reedie;
            var url = controller.model.soundPath + controller.model.activeAct+"/character/replay/"+controller.model.viewName+level;
            controller.characterManager.onCharacterPlay("speek", character, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
            // controller.soundManager.init(url,true); //경로.
        },
        onSpeekCharacter2 : function(){
            var level;
            var character;
            if(controller.model.viewName == "Adjectives") character = controller.characterManager.reedie;
            if(controller.model.viewName == "Nouns") character = controller.characterManager.reedie;
            if(controller.model.viewName == "Verbs") character = controller.characterManager.reedie;
            
            if(controller.model.viewName == "Adverbs"){
                character = controller.characterManager.reedie;
                level = (controller.model.activeLevel == "Medium")?"1":"2";
            }else{
                character = controller.characterManager.reedie;
                level = (controller.model.activeLevel == "Easy")?"1":"2";
            } 
            var url = controller.model.soundPath + controller.model.activeAct+"/character/replay2/"+controller.model.viewName+level;
            controller.characterManager.onCharacterPlay("speek", character, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
            // controller.soundManager.init(url,true); //경로.
        },
        init : function(){
            for(var i=0;i<this.data.length-1;i++){
                if(this.data[i].yes_yn == "Y") controller.model.activeLevel = this.data[i+1].code_nm;
            }

            var level = this.data[1].now_level_cd;
            var viewName = controller.model.viewName;
            var _viewName = $("<div id ='"+viewName+"'></div>");
            var _gameLevel = $("<div id ='gameLevel'>MY LEVEL : "+controller.model.activeLevel+"</div>");
            var _gameSet = $("<div id ='gameSet'>GAME SET : "+this.data[0].set_num_cnt+" // "+this.data[1].set_num_cnt+" // "+this.data[2].set_num_cnt+"</div>");
            var bg = $('<div class="act1_background_bg" style="z-index: -1;background:url(./asset/img/act1/'+viewName+'_bg.png);position:absolute;width:1000px; height:630px;"></div>');
            
            var gumball = $("<div id='gumball'><ul class='font_embed gumball_text letter-space'><li class='act1_view1_title'>"+viewName+"</li><li class='act1_level'>Level "+level+"</li></ul><img src='./asset/img/act1/gumbal.png' /></div>");
            this.gumBall = gumball;
            this.levelContain = $("<div id='levelContain'>"+
                                    "<ul class='bottle_contain'>"+
                                        "<li><div id='level1_items'><img src='./asset/img/act1/bottle.png' /></div><div><ul class='font_embed level_text letter-space'><li>Level 1</li><li>"+this.data[0].yes_cnt+"</li></ul><img src='./asset/img/act1/level.png' /></div></li>"+
                                        "<li><div id='level2_items'><img src='./asset/img/act1/bottle.png' /></div><div><ul class='font_embed level_text letter-space'><li>Level 2</li><li>"+this.data[1].yes_cnt+"</li></ul><img src='./asset/img/act1/level.png' /></div></li>"+
                                        "<li><div id='level3_items'><img src='./asset/img/act1/bottle.png' /></div><div><ul class='font_embed level_text letter-space'><li>Level 3</li><li>"+this.data[2].yes_cnt+"</li></ul><img src='./asset/img/act1/level.png' /></div></li>"+
                                    "</ul>"+
                                "</div>");

            console.log(viewName);
            
            var title = "";
            if(viewName == "Adjectives"){
                gumball.find(".act1_view1_title").css({"font-size":"11pt","height":"20px","line-height":"1.5"});
            }else if(viewName == "Adverbs"){
                gumball.find(".act1_view1_title").css({"font-size":"13pt","height":"20px","line-height":"1.2"});
            }

            $("#gameContainer").append(bg);
            this.setCharater();
            if(!this.isAniPlay) this.onSpeekCharacter();
            else this.onSpeekCharacter2();
            this.isAniPlay = true;
            $("#gameContainer").append(this.levelContain);
            $("#gameContainer").append(gumball);
            gumball.on("click",$.proxy(this.onPlayGame,this));
            gumball.css("cursor","pointer");
            // $("#gameContainer").append(reedie);
            var items = $("<ul><li class='candy_left'><img src='./asset/img/act1/candy_over.png' /></li><li class='candy_right'><img src='./asset/img/act1/candy_over.png' /></li><li class='candy_left'><img src='./asset/img/act1/candy_over.png' /></li><li class='candy_right'><img src='./asset/img/act1/candy_over.png' /></li><li class='candy_left'><img src='./asset/img/act1/candy_over.png' /></li><ul>");
            this.levelContain.find(".bottle_contain>li>div:first-child").append(items);
            // this.levelContain.find(".bottle_contain>li>div:first-child li").hide();

            var testButtons = $("<div class='testButtons'></div>");
            testModule.testButtonInit(testButtons);
            testButtons.append(testButtons);
            testButtons.append(_viewName);
            testButtons.append(_gameLevel);
            testButtons.append(_gameSet);
            
            _viewName.append("ACT1 GAME : ", viewName);
            this.onSetItems();
            //케릭터 애니메이션 셋팅.

            if(viewName == "Adverbs"){ // level1은 없다.
                $(".bottle_contain>li:first-child").hide();
                this.levelContain.css("left","321px");
            }
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
                character:controller.characterManager.reedie,
                x : 74,
                y : 267,
                index : 0
            }));

            arr.push(new Object({
                character:controller.characterManager.gram,
                x : 22,
                y : 291,
                index : 1
            }));

            arr.push(new Object({
                character:controller.characterManager.coco,
                x : 185,
                y : 431,
                index : 2
            }));

            arr.push(new Object({
                character:controller.characterManager.elly,
                x : 126,
                y : 381,
                index : 3
            }));

            
            console.log(arr);
            controller.characterManager.onSetChrater("ani_canvas_characte",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 
        },
        onSetItems : function(){
            var level1 = $("#level1_items");
            var level2 = $("#level2_items");
            var level3 = $("#level3_items");
            var num1 = (this.data[0].set_num_cnt>5)?5:this.data[0].set_num_cnt;
            var num2 = (this.data[1].set_num_cnt>5)?5:this.data[1].set_num_cnt;
            var num3 = (this.data[2].set_num_cnt>5)?5:this.data[2].set_num_cnt;
            console.log(num1);
            console.log(num2);
            console.log(num3);
            if(controller.model.viewName != "Adverbs"){
                if(num1 >= 5 && num2 < 5){
                    level1.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                    level2.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                }else if(num1 >= 5 && num2 >= 5){
                    level1.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                    level2.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                    level3.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                } 
            }else{
                if(num2 >= 5){
                    level2.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                    level3.on("click", $.proxy(this.onLevelClickListener,this)).css("cursor","pointer");
                }
            }
            
            for(var i=0;i<this.data[0].set_num_cnt;i++){
                level1.find("ul li:nth-child("+(i+1)+") img").attr("src","./asset/img/act1/candy"+controller.model.viewName+".png");
            } 
            
            for(i=0;i<this.data[1].set_num_cnt;i++){
                level2.find("ul li:nth-child("+(i+1)+") img").attr("src","./asset/img/act1/candy"+controller.model.viewName+".png");
            } 

            for(i=0;i<this.data[2].set_num_cnt;i++){
                level3.find("ul li:nth-child("+(i+1)+") img").attr("src","./asset/img/act1/candy"+controller.model.viewName+".png");
            } 
            
        },
        onLevelClickListener : function(e){
            if(e.currentTarget.id == "level1_items"){
                controller.model.activeLevel = "Easy";
                this.gumBall.find("li:last-child").html("Level 1");
            } 
            if(e.currentTarget.id == "level2_items"){
                controller.model.activeLevel = "Medium";
                this.gumBall.find("li:last-child").html("Level 2");
            } 
            if(e.currentTarget.id == "level3_items") {
                controller.model.activeLevel = "Hard";
                this.gumBall.find("li:last-child").html("Level 3");
            }
            var url = controller.model.soundPath + "act1/character/levelClick/" + controller.model.viewName;
            controller.soundManager.init(url,true,$.proxy(this.onPlayGame,this));
        },
        onPlayGame : function(){ // 검볼머신 클릭 
            controller.dataManager.loadLog("end", null, $.proxy(this.onPlayCallBack,this));
        },
        onPlayCallBack : function (){
            var url = controller.model.soundPath + "act1/character/gumballClick/" + controller.model.viewName;
            controller.soundManager.init(url,true,$.proxy(function(){
                $("#gameContainer").html("");
                this.onReset();                
                controller.characterManager.resetAni();
                controller.onloadAct1("script");
            },this)); //경로.
        },
        onReset : function(){
            controller.characterManager.resetAni();
        }
    };
    exports.Activity1Start = Activity1Start;
})(this);
