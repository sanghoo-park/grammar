
(function(exports){
    function Activity1Script(){

    }
    Activity1Script.prototype = {
        initialize : function(){
            
        },
        updateView : function(){
            // var bg = $("<div id='bg'><img src='./asset/img/act1/view2_bg.png' /></div>");
            // controller.dataManager.loadLog("init",null,$.proxy(this.setView,this));
            controller.onLoadQuiz(); //퀴즈를 불러온다. 완료되면 model에 quizData변수에 데이터를 남고 setView  함수 호출
        },
        setView : function(){
            
            var bg = $('<div class="act1_background_bg" style="z-index: -1;background:url(./asset/img/act1/view2_bg.png);position:absolute;width:1000px; height:630px;"></div>');
            var testButtons = $("<div class='testButtons'></div>");
            testModule.testButtonInit(testButtons);
            $("#gameContainer").append(bg);
            this.videoContain = $("<div id='video_contain'></div>");
            $("#gameContainer").append(this.videoContain);
            this.onPlayVideo();
            
            
        },
        onPlayVideo : function(){
            var url = controller.model.videoPath + controller.model.activeAct+"/view"+ controller.model.activeView+"/"+controller.model.viewName+"/"+
            controller.model.activeLevel+"/1";
            var isBool;
            if(controller.model.viewName == "Nouns") isBool = this.NounsFirstView;
            if(controller.model.viewName == "Adverbs") isBool = this.AdverbsFirstView;
            if(controller.model.viewName == "Verbs") isBool = this.VerbsFirstView;
            if(controller.model.viewName == "Adjectives") isBool = this.AdjectivesFirstView;
            controller.videoManager.init(this.videoContain,url,true,$.proxy(this.setCharater,this),isBool); //경로.
            if(controller.model.viewName == "Nouns") this.NounsFirstView = true;
            if(controller.model.viewName == "Adverbs") this.AdverbsFirstView = true;
            if(controller.model.viewName == "Verbs") this.VerbsFirstView = true;
            if(controller.model.viewName == "Adjectives") this.AdjectivesFirstView = true;
        },
        onSetButtons : function(){
            this.yesnoButtonContain = $("<div class='yes_no_button_contain'><img class='yes_button' src='./asset/img/common/yes.png' /><img class='no_button' src='./asset/img/common/no.png' /></div>");
            this.yesnoButtonContain.find(".yes_button").on("click",$.proxy(function(e){
                this.onNextView();
            },this));
            var url = "";
            this.yesnoButtonContain.find(".yes_button").on("mouseover",$.proxy(function(e){
                this.yesnoButtonContain.find(".yes_button").attr("src","./asset/img/common/yes_over.png");
                url = controller.model.soundPath + "/"+controller.model.activeAct+"/character/view2/"+controller.model.viewName+"/yes";
                controller.soundManager.init(url);
            },this));

            this.yesnoButtonContain.find(".yes_button").on("mouseout",$.proxy(function(e){
                this.yesnoButtonContain.find(".yes_button").attr("src","./asset/img/common/yes.png");
            },this));

            this.yesnoButtonContain.find(".no_button").on("click",$.proxy(function(e){
                controller.characterManager.resetAni();
                this.yesnoButtonContain.remove();
                this.characterContain.remove();
                this.onPlayVideo();
            },this));

            this.yesnoButtonContain.find(".no_button").on("mouseover",$.proxy(function(e){
                url = controller.model.soundPath + "/"+controller.model.activeAct+"/character/view2/"+controller.model.viewName+"/no";
                controller.soundManager.init(url);
                this.yesnoButtonContain.find(".no_button").attr("src","./asset/img/common/no_over.png");
            },this));

            this.yesnoButtonContain.find(".no_button").on("mouseout",$.proxy(function(e){
                this.yesnoButtonContain.find(".no_button").attr("src","./asset/img/common/no.png");
            },this));

            this.yesnoButtonContain.hide();
            this.yesnoButtonContain.fadeIn(600);
            $("#gameContainer").append(this.yesnoButtonContain);
        },
        setCharater : function(){
            console.log("------------------------------setCharater---------------------------------");
            this.onSetButtons();
            var characterCanvas = $("<canvas id='ani_canvas_characte' width='1000' height='630'></canvas>");
            this.characterContain = $("<div id ='charater_contian' style='position:absolute;top:0;left:0;width:1000px;height:630px'></div>"); //케릭터 애니 담을 컨테인
            $("#gameContainer").append(this.characterContain);
            this.characterContain.append(characterCanvas);
            var arr = [];
            var ch;
            if(controller.model.viewName == "Nouns" || controller.model.viewName == "Adjectives"){
                ch = controller.characterManager.reedie;
                arr.push(new Object({
                    character:controller.characterManager.reedie,
                    x : 50,
                    y : 269,
                    index : 0
                }));
            }else{
                ch = controller.characterManager.gram;
                arr.push(new Object({
                    character:controller.characterManager.gram,
                    x : 50,
                    y : 269,
                    index : 0
                }));
            }
            arr.push(new Object({
                character:controller.characterManager.coco,
                x : 136,
                y : 418,
                index : 1
            }));
            arr.push(new Object({
                character:controller.characterManager.elly,
                x : 942,
                y : 350,
                scaleX : -1,
                index : 2
            }));
            controller.characterManager.onSetChrater("ani_canvas_characte",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 
            controller.characterManager.onRemoveClick(ch);
            url = controller.model.soundPath + "act1/character/view2/" +controller.model.viewName+"/go";
            controller.characterManager.onCharacterPlay("speek",ch,url,null,true); //경로.
        },
        onNextView : function(){
            controller.dataManager.loadLog("end",{"quizNum":controller.model.quizSetNum,"yes_cnt":"1","fail_cnt":"1","yes_yn":"Y"},function(){
                controller.characterManager.resetAni();
                $("#gameContainer").html("");
                controller.onloadAct1("game");
                var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/howToPlay/" + controller.model.viewName;
                controller.soundManager.init(url,true); //경로.
            });
        }
    };
    exports.Activity1Script = Activity1Script;
})(this);