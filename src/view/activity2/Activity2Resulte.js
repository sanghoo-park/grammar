(function(exports){
    function Activity2Resulte(){
        $(window).on("resultForgClick", $.proxy(this.onFrogClick,this));
        
        
    }

    Activity2Resulte.prototype = {
        initialize : function(){

        },
        updateView : function(){
            $(window).off("coin_ani_end");
            $(window).on("coin_ani_end", $.proxy(this.onCoinAniEnd,this));
            controller.dataManager.loadLog("init",{"quizNum":controller.model.quizSetNum},$.proxy(this.setView,this));
        },
        setView : function(){
            this.setNum = 0;
            var bg = $('<div class="act1_background_bg" style="z-index: -1;background:url(./asset/img/act2/bg3.png);position:absolute;width:1000px; height:630px;"></div>');
            this.resultPanel = $("<div id='act2_result_panel'><img src='./asset/img/act2/resultPanel.png' /></div>");
            // this.resultTextFiled = $("<div class='act2_result_textFiled font_embed'></div>");
            this.replayButton = $("<div class='act2_result_replay'><img src='./asset/img/act2/replayButton.png' /></div>");
            var aniCanvas = $("<canvas id='ani_canvas' width='131' height='150' style='position:absolute;top:0;left:0;'></canvas>");

            aniCanvas.css({"left":"660px","top":"362px","pointer-events":"all","cursor":"pointer"});

            this.data = controller.model.quizData.result[0].review;
            $("#gameContainer").append(bg);
            this.setCharater();
            $("#gameContainer").append(this.resultPanel);
            // $("#gameContainer").append(this.resultTextFiled);
            $("#gameContainer").append(this.replayButton);
            $("#gameContainer").append(aniCanvas);
            var titleText = "";
            if(controller.model.quizSetNum == "1" || controller.model.quizSetNum == "2"){
                titleText = "Demonstratives";
            }else if(controller.model.quizSetNum == "3" || controller.model.quizSetNum == "4"){
                titleText = "Subject/ Object Pronouns";
            }else if(controller.model.quizSetNum == "5" || controller.model.quizSetNum == "6"){
                titleText = "Possessive Adjectives";
            }else if(controller.model.quizSetNum == "7" || controller.model.quizSetNum == "8"){
                titleText = "Conjunctions";
            }else if(controller.model.quizSetNum == "9" || controller.model.quizSetNum == "10"){
                titleText = "Comparatives/ Superlatives";
            }
            
            if(controller.model.activeLevel == "Easy"){
                if(controller.model.quizSetNum == "1" || controller.model.quizSetNum == "2"){
                    titleText = "Articles";
                }
            }
            this.title = $("<div id='act2_result_title' class='font_embed'><span>"+titleText+"</span></div>");
            this.resultPanel.append(this.title);
            this.title.on("click", $.proxy(function(){
                console.log(titleText)
                var text = titleText;
                if(titleText == "Subject/ Object Pronouns") text = "Subject";
                if(titleText == "Possessive Adjectives") text = "Possessive";
                if(titleText == "Comparatives/ Superlatives") text = "Comparatives";

                var url = controller.model.soundPath + "act2/"+ text;
                controller.soundManager.init(url,true); //경로.

            },this));
            var finishBtn = $("<button id='finishButton'>FINISH</button>");
            var testButtons = $("<div class='testButtons'></div>");
            testModule.testButtonInit(testButtons);
            testButtons.append(finishBtn);
            $("#finishButton").on("click",$.proxy(this.onFinish,this));
            this.container = $("<ul class='act2_result_contain'></ul>");
            this.resultPanel.append(this.container);
            controller.animationManager2.resultFrog.init("ani_canvas");
            var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/complete";
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.reedie, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
            // controller.soundManager.init(url,true);
        },
        setCharater : function(){
            console.log("------------------------------setCharater---------------------------------")
            var characterCanvas = $("<canvas id='ani_canvas_characte' width='1000' height='630'></canvas>");
            var characterContain = $("<div id ='charater_contian' style='position:absolute;top:0;left:0;width:1000px;height:630px'></div>"); //케릭터 애니 담을 컨테인
            $("#gameContainer").append(characterContain);
            characterContain.append(characterCanvas);
            var obj1 = {};
            var obj2 = {};
            var arr = [];

            obj1.character = controller.characterManager.reedie;
            obj1.x = 63;
            obj1.y = 260;
            arr.push(obj1);

            obj2.character = controller.characterManager.elly;
            obj2.x = 155;
            obj2.y = 335;
            arr.push(obj2);
            controller.characterManager.onSetChrater("ani_canvas_characte",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 

            controller.characterManager.onRemoveClick(controller.characterManager.elly);
            controller.characterManager.onRemoveClick(controller.characterManager.reedie);
        },

        playSound : function(value,isblock,callBack){
            var url = controller.model.soundPath + "act2/"+ value;
            controller.soundManager.init(url,isblock,callBack); //경로.
        },
        onFrogClick : function(){
            if(5 > this.setNum){
                this.onSetPanel();
            }
        },
        onSetPanel : function(){
            var data = this.data;
            this.arr = [];
            var obj = {};
            obj.sentence = data[this.setNum].sentence2;
            obj.set_num = data[this.setNum].set_num;
            obj.quiz_num = data[this.setNum].ques_num;

            obj.answer = data[this.setNum].answer.split(",");
            obj.sentence = String(obj.sentence).replace(/\(tmp\)/g, "<span></span>");

            this.arr.push(obj);
            var text = $("<li code='"+obj.set_num+obj.quiz_num+"'><img src='./asset/img/common/check.png' /><div class='font_embed'>"+obj.sentence+"</div></li>");
            text.find("span:nth-child(1)").text(obj.answer[0]);
            text.find("span:nth-child(2)").text(obj.answer[1]);
            text.find("span").css("color","red");
            text.find("p").remove();
            this.container.append(text);


            if(parseInt(text.find("div").css("height")) > 37){
                text.find("div").css("font-size","9.5pt");  
            }

            if(parseInt(text.find("div").css("height")) > 37){
                text.find("div").css("font-size","9pt");  
            }

            if(parseInt(text.find("div").css("height")) > 37){
                text.find("div").css("font-size","8.5pt");  
            }

            if(parseInt(text.find("div").css("height")) > 37){
                text.find("div").css("font-size","8pt");  
            }
            

            text.on("click", $.proxy(this.onResultClick,this));
            this.setNum++;
            // this.resultTextFiled.html(text.find("div").html());
            var fileName = controller.model.activeLevel+"/answer/"+obj.set_num+obj.quiz_num;
            if(this.setNum == 5){
                this.playSound(fileName,true,$.proxy(this.onFinish,this));
            }else{
                this.playSound(fileName,true);
            }
            
        },
        onFinish : function(){
            controller.dataManager.loadLog("end",{"quizNum":controller.model.quizSetNum},$.proxy(function(){
                controller.animationManager.coin.init();
            },this),true);
        },
        onCoinAniEnd : function(){
            var num;
            if(controller.model.activeLevel == "Easy") num = 1;
            if(controller.model.activeLevel == "Medium") num = 2;
            if(controller.model.activeLevel == "Hard") num = 3;
            $("#pointPanel").find("span").html(parseInt(controller.model.coin)+num);
            controller.model.globalSetNum = parseInt(controller.model.globalSetNum) + 1;
            controller.globalUI.setCount.find("img").attr("src",controller.model.imgPath+"ui/set"+controller.model.globalSetNum+".png");
            var url = "";
            if(controller.model.globalSetNum == 6){
                url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/letsgo";
                controller.soundManager.init(url,true,$.proxy(function(){
                    controller.loadFinditemGame("data");
                },this)); //경로.
            }else{
                this.replayButton.on("click", $.proxy(this.onComplete,this));
                url = controller.model.soundPath + controller.model.activeAct+"/character/finish";
                controller.characterManager.onCharacterPlay("speek", controller.characterManager.reedie, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
            }
            // controller.soundManager.init(url,true); //경로.
        },
        onResultClick : function(e){
            // this.resultTextFiled.html($(e.currentTarget).find("div").html());
            var fileName = controller.model.activeLevel+"/answer/"+$(e.currentTarget).attr("code");
            this.playSound(fileName,true);
        },
        onComplete : function(){
            //데이터 매니저를 통해서 현제 진행상황에 대한 데이터를 서버에 저장해주고 리턴 받아서 홈으로 돌려 보낸다.
            var url = controller.model.soundPath + controller.model.activeAct+"/character/replayClick";
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.reedie, url, function(){
                $(window).trigger("result_go_back_act2");
                controller.characterManager.resetAni();
                $("#gameContainer").html("");
                controller.onloadAct2("data");
            }, true);// 동작 타입, 움직을 케릭터, 음성 경로
            
        }
    };
    exports.Activity2Resulte = Activity2Resulte;
})(this);


