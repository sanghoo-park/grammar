(function(exports){
    function Activity4Resulte(){
        this.bubblePostion = [{x:766,y:100},{x:640,y:160},{x:900,y:176},{x:925,y:294},{x:855,y:403}];
        this.activeBubble = [];
    }

    Activity4Resulte.prototype = {
        initialize : function(){

        },
        updateView : function(){
            $(window).off("coin_ani_end");
            $(window).on("coin_ani_end", $.proxy(this.onCoinAniEnd,this));
            controller.dataManager.loadLog("init",{"quizNum":controller.model.quizSetNum},$.proxy(this.setView,this));
        },
        setView : function(){
            var bg = $('<div class="act1_background_bg" style="z-index: -1;background:url(./asset/img/act4/bg3.png);position:absolute;width:1000px; height:630px;"></div>');
            this.answerFilde = $(".act4_game_answerF");
            this.resultPanel = $("<div id='act4_result_panel'><img src='./asset/img/act4/resultPanel.png' /></div>");
            var finishBtn = $("<button id='finishButton'>FINISH</button>");
            var testButtons = $("<div class='testButtons'></div>");
            this.bubbleContain = $("<div class='act4_game_bubble_contain'></div>"); // 버블 컨테이너 
            this.replayButton1 = $("<div id='act4_result_replay1'></div>");
            this.replayButton2 = $("<div id='act4_result_replay2'></div>");
            this.replayButton3 = $("<div id='act4_result_replay3'></div>");
            
            testModule.testButtonInit(testButtons);
            $("#gameContainer").append(bg);
            $("#gameContainer").append(this.resultPanel);
            $("#gameContainer").append(this.replayButton1);
            $("#gameContainer").append(this.replayButton2);
            $("#gameContainer").append(this.replayButton3);
            $("#gameContainer").append(this.bubbleContain);
            this.imgPath = controller.model.imgPath + "act4/";
            // new ButtonUtil().init("act4_result_replay1",this.imgPath,"click1"); //id,path,name,alt,name2,alt2
            new ButtonUtil().init("act4_result_replay2",this.imgPath,"click2"); //id,path,name,alt,name2,alt2
            new ButtonUtil().init("act4_result_replay3",this.imgPath,"click3"); //id,path,name,alt,name2,alt2
            // this.replayButton.hide();
            this.fireCanvas = $("<canvas width='280' height='310' id='act4_ani_fireCanvas'></canvas>"); 
            this.fireManCanvas = $("<canvas width='500' height='300' id='act4_ani_fireManCanvas'></canvas>"); 
            $("#gameContainer").append(this.fireCanvas);
            $("#gameContainer").append(this.fireManCanvas);
            this.resultPanel.css({"position":"absolute","top":"-300px"});
            this.resultPanel.animate({"top":"100px"},
            {
                duration: 1600,
                specialEasing: {
                    top: "easeOutExpo",
                },complete: $.proxy(this.onSetPanel,this)
            });
            testButtons.append(finishBtn);
            $("#finishButton").on("click",$.proxy(this.onFinish,this));
            controller.animationManager4.fire.init("act4_ani_fireCanvas");    
            controller.animationManager4.fireManResult.init("act4_ani_fireManCanvas"); 
            var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/complete";
            controller.characterManager.onCharacterPlay("speek",controller.characterManager.gram,url, $.proxy(function(){
               
            },this),true);
        },
        onSetPanel : function(){
            var data = controller.model.quizData.result[0].review;
            this.arr = [];
            for(var k=0;k<data.length;k++){
                var obj = {};
                var str1 = ",";
                var str2 = "";
                // obj.sentence = data[k].example.replace(/\,/g,"");
                obj.sentence = data[k].sentence2;
                obj.set_num = data[k].set_num;
                obj.quiz_num = data[k].ques_num;
                obj.code = data[k].voice_num;
                this.arr.push(obj);
            }

            this.container = $("<ul class='act4_result_contain'></ul>");
            this.resultPanel.append(this.container);
            this.onSetQuiz();
        },
        onSetQuiz : function(e){ //퀴즈를 화면에 셋팅한다.
            this.aniNum = 0;
            for(var i=0;i<this.arr.length;i++){
                this.onSetBubble();
            }
        },
        onSetBubble : function(){
            var ani_X = this.bubblePostion[this.aniNum].x;
            var ani_Y = this.bubblePostion[this.aniNum].y;
            var data = controller.model.quizData.result[0].review;
            
            var bubble = $("<div value = '"+this.aniNum+"'><canvas width='267' height='237' id='bubble_"+this.aniNum+"'></canvas><span class='font_embed'>"+data[this.aniNum].answer+"</span><button></button></div>");
            this.bubbleContain.append(bubble);
            bubble.css({"-webkit-animation":"mymove 1s","animation":"mymove 1s","position":"absolute","top":"340px","left":"640px"});
            bubble.animate({"top":ani_Y-70,"left":ani_X-85},
            {
                duration: 800+(Math.random()*100),
                specialEasing: {
                    top: "easeOutBack",
                    left: "easeOutBack"
                },complete: bubbleUpDownMotion
            });

            function bubbleUpDownMotion(){
                bubble.animate({"top":ani_Y-85},
                {
                    duration: Math.random()*1000+1500,
                    specialEasing: {
                        top: "swing",
                    }
                }).animate({"top":ani_Y-70},
                {
                    duration: Math.random()*1000+1500,
                    specialEasing: {
                        top: "swing",
                    },complete: bubbleUpDownMotion
                });
            }
            var ani_bubble = controller.animationManager4.getNewBubble();
            this.activeBubble.push(ani_bubble);
            ani_bubble.init("bubble_"+this.aniNum);
            this.aniNum++;
            this.clickNum = 0;
            bubble.find("button").on("click",$.proxy(function(e){ // 버블 클릭 이벤트 처리
                this.clickNum++;
                controller.animationManager4.fire.onRemove("mc"+this.clickNum);  
                ani_bubble.onBubbleExplosion();
                // bubble.hide();
                bubble.find("button").hide();
                bubble.find("span").hide();
                //정답 텍스트 컬러 삭제.
                // var str = this.arr[bubble.attr("value")].sentence; 
                // var word = bubble.find("span").text();
                // console.log(str)
                // console.log(word)
                // var sen = String(str).replace(String(word),"<span class='red_color'>"+word+"</span>");
                // console.log(sen);
                var text = $("<li><img src='./asset/img/common/check.png' /><p value='"+bubble.attr("value")+"' class='font_embed'>"+this.arr[bubble.attr("value")].sentence+"</p></li>");
                this.container.append(text);
                var url = controller.model.soundPath + controller.model.activeAct+"/"+controller.model.activeLevel+"/sentence/set"+controller.model.quizSetNum+"/"+this.arr[bubble.attr("value")].code;
                controller.soundManager.init(url,true,$.proxy(function(){
                    text.on("click", $.proxy(this.onResultClick,this));
                    this.answerFilde.find("p").html("");
                    this.answerFilde.find("p").append(this.arr[bubble.attr("value")].sentence);
                    
                    console.log(this.clickNum+" // "+this.arr.length);
                    if(this.clickNum == this.arr.length){
                        for(i=0;i<this.activeBubble.length;i++){
                            this.activeBubble[i].onRemoveAni();
                        }
                        bubble.remove();
                        this.bubbleContain.empty();
                    }
                    this.onCheackSentence();
                },this)); //경로.
                
            },this));
        },
        onResultClick : function(e){ // 결과창 텍스트 클릭시 하단 텍스트 노출 및 음성 플레이.
            var num = $(e.target).attr("value");
            this.answerFilde.find("p").html("");
            this.answerFilde.find("p").append(this.arr[num].sentence);
            console.log("code : "+this.arr[num].code);
            var url = controller.model.soundPath + "act4/"+controller.model.activeLevel+"/sentence/set"+controller.model.quizSetNum+"/"+this.arr[num].code;
            controller.soundManager.init(url,true); //경로.
        },
        onCheackSentence : function(){
            var isFinish = true;
            for(var i=0;i<$(".act4_game_bubble_contain div").length;i++){
                if($(".act4_game_bubble_contain div:nth-child("+(i+1)+") button").css("display") != "none"){
                    isFinish = false;
                    break;
                }else{
                }
            }
            if(isFinish){
                this.onFinish();
            }
        },
        onFinish : function(){
            controller.dataManager.loadLog("end",{"quizNum":controller.model.quizSetNum},$.proxy(function(){
                controller.animationManager.coin.init();
                controller.animationManager4.fireManResult.exportRoot.mcWarter.visible = false;
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
            var url = controller.model.soundPath + controller.model.activeAct+"/character/finish/"+controller.model.activeLevel+"/finish";
            controller.soundManager.init(url,true,$.proxy(function(){
                // this.replayButton.show();
                // this.replayButton1.off("click", $.proxy(this.onComplete,this)).css("cursor","pointer");
                // this.replayButton2.off("click", $.proxy(this.onComplete,this)).css("cursor","pointer");
                // this.replayButton3.off("click", $.proxy(this.onComplete,this)).css("cursor","pointer");
                // if(controller.model.activeLevel == "Easy") this.replayButton1.on("click", $.proxy(this.onComplete,this)).css("cursor","pointer");
                // if(controller.model.activeLevel == "Medium") this.replayButton2.on("click", $.proxy(this.onComplete,this)).css("cursor","pointer");
                // if(controller.model.activeLevel == "Hard") this.replayButton3.on("click", $.proxy(this.onComplete,this)).css("cursor","pointer");

                this.replayButton1.on("click", $.proxy(this.onComplete,this)).css("cursor","pointer");
                this.replayButton2.on("click", $.proxy(this.onComplete,this)).css("cursor","pointer");
                this.replayButton3.on("click", $.proxy(this.onComplete,this)).css("cursor","pointer");
                
                
            },this));

        },
        onComplete : function(e){
            console.log(e.currentTarget.id);
            switch(e.currentTarget.id){
                case "act4_result_replay1" :
                if(controller.model.activeLevel == "Easy"){
                    this.onCompleteNext();
                }else{
                    var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/resultObject/"+controller.model.activeLevel;
                    controller.soundManager.init(url,true);
                }
                break;
                case "act4_result_replay2" :
                if(controller.model.activeLevel == "Medium"){
                    this.onCompleteNext();
                }else{
                    var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/resultObject/"+controller.model.activeLevel;
                    controller.soundManager.init(url,true);
                }
                break;
                case "act4_result_replay3" :
                if(controller.model.activeLevel == "Hard"){
                    this.onCompleteNext();
                }else{
                    var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/resultObject/"+controller.model.activeLevel;
                    controller.soundManager.init(url,true);
                }
                break;
            }
            
        },
        onCompleteNext : function(){
            if(controller.model.globalSetNum == 6){
                url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/letsgo";
                controller.soundManager.init(url,true,$.proxy(function(){
                    controller.loadFinditemGame("data");
                },this)); //경로.
            }else{
                $(window).trigger("result_go_back_act4");
                controller.characterManager.resetAni();
                controller.animationManager4.resetAni();
                $("#gameContainer").html("");
                controller.onloadAct4("data");
            }
        },
        onReset : function(){
            for(i=0;i<this.activeBubble.length;i++){
                this.activeBubble[i].onRemoveAni();
            }
            // $(window).off("ani_act4_newBubble", $.proxy(this.onSetBubble,this));
            controller.animationManager4.resetAni();
        }
    };
    exports.Activity4Resulte = Activity4Resulte;
})(this);


