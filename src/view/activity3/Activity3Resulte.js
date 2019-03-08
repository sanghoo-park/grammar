(function(exports){
    function Activity3Resulte(){
        this.bubblePostion = [{x:756,y:75},{x:640,y:160},{x:858,y:186},{x:655,y:294},{x:805,y:303}];
        this.activeBubble = [];
    }

    Activity3Resulte.prototype = {
        initialize : function(){

        },
        updateView : function(){
            $(window).off("coin_ani_end");
            $(window).on("coin_ani_end", $.proxy(this.onCoinAniEnd,this));
            controller.dataManager.loadLog("init",{"quizNum":controller.model.quizSetNum},$.proxy(this.setView,this));
        },
        setView : function(){
            $(window).on("ani_act3_newBubble", $.proxy(this.onSetBubble,this));
            // this.answerFilde = $(".act3_game_answerF");
            this.resultPanel = $("<div id='act3_result_panel'><img src='./asset/img/act3/resultPanel.png' /></div>");
            var finishBtn = $("<button id='finishButton'>FINISH</button>");
            var testButtons = $("<div class='testButtons'></div>");
            this.bubbleContain = $(".act3_game_bubble_contain"); // 버블 컨테이너 
            this.replayButton = $("<div class='act3_result_replay'><img src='./asset/img/act3/house.png' /></div>");
            $("#act3_ani_newBubble").css({"left":"725px","top":"330px"});
            testModule.testButtonInit(testButtons);
            $("#gameContainer").append(this.resultPanel);
            $("#gameContainer").append(this.replayButton);
            $("#gameContainer").append($("<div id='bg_block'></div>"));
            this.resultPanel.css({"position":"absolute","left":"130px","top":"-300px"});
            this.resultPanel.animate({"top":"100px"},
            {
                duration: 1200,
                specialEasing: {
                    top: "easeOutExpo",
                },complete: $.proxy(this.onSetPanel,this)
            });
            testButtons.append(finishBtn);
            $("#finishButton").on("click",$.proxy(this.onFinish,this));
            var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/complete";
            controller.characterManager.onCharacterPlay("speek",controller.characterManager.gram,url, $.proxy(function(){

            },this),true);
            controller.characterManager.onRemoveClick(controller.characterManager.gram);
        },
        onSetPanel : function(){
            var data = controller.model.quizData.result[0].review;
            this.arr = [];
            for(var k=0;k<data.length;k++){
                var obj = {};
                var str1 = ",";
                var str2 = "";
                // obj.sentence = data[k].example.replace(/\,/g,"");
                obj.sentence = data[k].sentence;
                obj.set_num = data[k].set_num;
                obj.quiz_num = data[k].quiz_num;
                obj.code = data[k].voice_num;
                this.arr.push(obj);
            }

            this.container = $("<ul class='act3_result_contain'></ul>");
            this.resultPanel.append(this.container);
            this.onSetQuiz();
        },
        onSetQuiz : function(e){ //퀴즈를 화면에 셋팅한다.
            this.aniNum = 0;
            controller.animationManager3.newBubble.init("act3_ani_newBubble");
        },
        onSetBubble : function(){
            var ani_X = this.bubblePostion[this.aniNum].x;
            var ani_Y = this.bubblePostion[this.aniNum].y;
            var bubble = $("<div value = '"+this.aniNum+"'><canvas width='267' height='237' id='bubble_"+this.aniNum+"'></canvas><span class='font_embed'></span><button></button></div>");
            this.bubbleContain.append(bubble);
            bubble.css({"-webkit-animation":"mymove 1s","animation":"mymove 1s","position":"absolute","top":"340px","left":"640px"});
            bubble.animate({"top":ani_Y-70,"left":ani_X-85},
            {
                duration: 2000,
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
            var ani_bubble = controller.animationManager3.getNewBubble();
            this.activeBubble.push(ani_bubble);
            ani_bubble.init("bubble_"+this.aniNum);
            this.aniNum++;
            this.clickNum = 0;
            bubble.find("button").on("click",$.proxy(function(e){ // 버블 클릭 이벤트 처리
                this.clickNum++;
                console.log("code : "+this.arr[bubble.attr("value")].code);
                
                var text = $("<li><img src='./asset/img/common/check.png' /><p value='"+bubble.attr("value")+"' class='font_embed'>"+this.arr[bubble.attr("value")].sentence+"</p></li>");
                this.container.append(text);
                // text.find("img").hide();
                // text.find("p").hide();
                text.on("click", $.proxy(this.onResultClick,this));


                // this.answerFilde.find("p").html("");
                // this.answerFilde.find("p").append(this.arr[bubble.attr("value")].sentence);
                ani_bubble.onBubbleExplosion();
                bubble.find("button").hide();
                console.log(this.aniNum+" // "+this.arr.length);
                if(this.clickNum == this.arr.length){
                    for(i=0;i<this.activeBubble.length;i++){
                        this.activeBubble[i].onRemoveAni();
                    }
                    bubble.remove();
                    this.bubbleContain.empty();
                }
                var url = controller.model.soundPath + "act3/"+controller.model.activeLevel+"/answer/"+this.arr[bubble.attr("value")].code;
                controller.soundManager.init(url,true,$.proxy(function(){
                    this.onCheackSentence();
                },this)); //경로.
                
            },this));
            
            if(this.aniNum < this.arr.length) controller.animationManager3.newBubble.init("act3_ani_newBubble");
        },
        onResultClick : function(e){ // 결과창 텍스트 클릭시 하단 텍스트 노출 및 음성 플레이.
            var num = $(e.target).attr("value");
            // this.answerFilde.find("p").html("");
            // this.answerFilde.find("p").append(this.arr[num].sentence);
            console.log("code : "+this.arr[num].code);
            var url = controller.model.soundPath + "act3/"+controller.model.activeLevel+"/answer/"+this.arr[num].code;
            controller.soundManager.init(url,true); //경로.
        },
        onCheackSentence : function(){
            var isFinish = true;
            console.log($(".act3_game_bubble_contain div").length);
            if($(".act3_game_bubble_contain div").length == 0) this.onFinish();
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
                url = controller.model.soundPath + controller.model.activeAct+"/character/finish/set"+controller.model.quizSetNum+"/finish";
                controller.characterManager.onCharacterPlay("speek", controller.characterManager.gram, url, $.proxy(function(){
                    console.log("finish 버튼 노출");
                    this.replayButton.on("click", $.proxy(this.onComplete,this)).css({"cursor":"pointer","z-index":"100000"});
                },this), true);// 동작 타입, 움직을 케릭터, 음성 경로
            }
        },
        onComplete : function(){
            var url = controller.model.soundPath + controller.model.activeAct+"/character/replayClick";
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.gram, url, $.proxy(function(){
                $(window).trigger("result_go_back_act3");
                controller.characterManager.resetAni();
                $(window).off("ani_act3_newBubble", $.proxy(this.onSetBubble,this)); 
                $("#gameContainer").html("");
                controller.onloadAct3("data");
            },this), true);// 동작 타입, 움직을 케릭터, 음성 경로
        },
        onReset : function(){
            for(i=0;i<this.activeBubble.length;i++){
                this.activeBubble[i].onRemoveAni();
            }
            $(window).off("ani_act3_newBubble", $.proxy(this.onSetBubble,this));
            controller.animationManager3.resetAni();
        }
    };
    exports.Activity3Resulte = Activity3Resulte;
})(this);


