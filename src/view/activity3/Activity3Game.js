(function(exports){
    function Activity3Game(){
        //물방울 7개의 위치값을 기반으로 랜덤으로 위치를 잡아준다.
        this.bubblePostion = [{x:362,y:249},{x:441,y:162},{x:548,y:216},{x:605,y:104},{x:336,y:71},{x:477,y:305},{x:494,y:63}];
        this.activeBubble = [];
        this.quiz_num = "";
        this.quiz_sub_num = "";
    }

    Activity3Game.prototype = {
        initialize : function(){

        },
        updateView : function(){
            controller.dataManager.loadLog("init",{"quizNum":controller.model.quizSetNum},$.proxy(this.setView,this));
            
        },
        setView : function(){
            
            $(window).on("ani_act3_newBubble", $.proxy(this.onSetBubble,this));
            this.answerArr = [];
            this.selectArr = []; // 정답 클릭 순서대로 담아서 정답배열과 비교 해서 정답 체크 한다.
            this.activeBubble = []; // 화면에 셋팅된 버블을 담아놨다가 remove 시킬때 사용한다.
            // this.setNum = controller.model.activeQuizSetNum;
            var bg = $('<div class="act3_background_bg" style="z-index: -1;background:url(./asset/img/act3/bg.png);position:absolute;width:1000px; height:630px;"></div>');
            $("#gameContainer").append(bg);

            this.sprinkler = $("<div class='act3_sprinkler'><img src='./asset/img/act3/sprinkler.png' /></div>");
            var completeBtn = $("<button id='completeButton'>COMPLETE</button>");
            this.testButtons = $("<div class='testButtons'></div>");
            testModule.testButtonInit(this.testButtons);
            this.bubbleContain = $("<div class='act3_game_bubble_contain'></div>"); // 버블 컨테이너 
            this.answerFilde = $("<div class='act3_game_answerF'><p class='font_embed'></p></div>");
            this.clickButton = $("<div class='act3_game_click'></div>");
            
            $("#gameContainer").append(this.sprinkler);
            this.setCharater();


            $("#gameContainer").append(this.clickButton);
            $("#gameContainer").append(this.answerFilde);
            
            //물방울 나오는 에니매이션 canvas
            this.newBubbleCanvas = $("<canvas width='100' height='130' id='act3_ani_newBubble'></canvas>"); 
            $("#gameContainer").append(this.newBubbleCanvas);
            this.testButtons.append(completeBtn);
            $("#completeButton").on("click",$.proxy(this.onHomeListener,this));
            this.onStageSetting();

            var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/howToPlay";
            controller.characterManager.onCharacterPlay("speek",controller.characterManager.gram,url, $.proxy(function(){
                this.onSetQuiz();
            },this),true);
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
                scaleX : -1,
                index : 4
            }));
            console.log(arr);
            this.arr = arr;
            controller.characterManager.onSetChrater("ani_canvas_characte",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 
        },

        onStageSetting : function(){
            //quiz 데이터가 다 들어오면 실행되는 함수.
            controller.model.quizSetNum = controller.model.quizData.result[0].act_quest[0].set_num;
            this.totalQuizNum = controller.model.quizData.result[0].act_quest.length;
            this.clickButton.on("click", $.proxy(function(){
                this.bubbleContain.empty();
                this.answerFilde.find("p").html("");
                this.activeBubble = [];
                this.selectArr = [];
                this.onSetQuiz();
            },this));
        },
        onSetBubble : function(){
            var ani_X = this.bubblePostion[this.aniNum].x + (Math.random()*20 - 10);
            var ani_Y = this.bubblePostion[this.aniNum].y + (Math.random()*20 - 10);
            var bubble = $("<div><img src='./asset/animate/act3/bubble/ani_bubble.png' width='267' height='237' id='bubble_"+this.aniNum+"' /><span class='font_embed'></span><button></button></div>");
            bubble.find("span").html(this.exampleArr[this.aniNum].text);
            bubble.find("span").attr("quizSubNum",this.exampleArr[this.aniNum].quizSubNum)
            
            this.bubbleContain.append(bubble);
            bubble.find("span").css({"top":80+(90 / 2 - ($(bubble.find("span"))[0].clientHeight/2))+"px"});
            bubble.css({"-webkit-animation":"mymove 1s","animation":"mymove 1s","position":"absolute","top":"300px","left":"370px"});
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
            // var ani_bubble = controller.animationManager3.getNewBubble();
            // this.activeBubble.push(ani_bubble);
            // ani_bubble.init("bubble_"+this.aniNum);
            
            bubble.find("button").on("click",$.proxy(function(e){ // 버블 클릭 이벤트 처리
                // ani_bubble.onBubbleExplosion();
                var url = controller.model.soundPath + "act3/explosion";
                controller.effectManager.init(url); //경로.
                bubble.find("img").hide();
                bubble.find("img").attr("src","./asset/animate/act3/bubble/ani_bubble_explosion.png");

                bubble.find("img").fadeIn(100,function(){
                    bubble.find("img").fadeOut(100);
                });

                this.selectArr.push(bubble.find("span").html());
                if(this.selectArr.length == this.answerArr.length-1) this.answerFilde.find("p").append(bubble.find("span").html());
                else this.answerFilde.find("p").append(bubble.find("span").html()+" ");
                
                
                console.log(bubble.find("span").html())
                var url = "";
                if(bubble.find("span").html() == "."){
                    url = controller.model.soundPath + controller.model.activeAct+"/period";
                }else if(bubble.find("span").html() == "?"){
                    url = controller.model.soundPath + controller.model.activeAct+"/question";
                }else if(bubble.find("span").html() == "!"){
                    url = controller.model.soundPath + controller.model.activeAct+"/exclamation";
                }else if(bubble.find("span").html() == ","){
                    url = controller.model.soundPath + controller.model.activeAct+"/comma";
                }else{
                    url = controller.model.soundPath + controller.model.activeAct+"/"+controller.model.activeLevel+"/set"+controller.model.quizSetNum+"/"+this.quiz_num+this.quiz_sub_num+bubble.find("span").attr("quizsubnum");
                }
                bubble.find("span").html("");
                controller.soundManager.init(url,true,$.proxy(function(){
                    
                    bubble.find("button").hide();
                    if(this.answerArr.length == this.selectArr.length){
                        //정답 체크 
                        var answer = false;
                        for(var i=0;i<this.answerArr.length;i++){
                            if(this.answerArr[i] != this.selectArr[i]){
                                answer = false;
                                break;
                            }else{
                                answer = true;
                            }
                        }
    
                        for(i=0;i<this.activeBubble.length;i++){
                            this.activeBubble[i].onRemoveAni();
                        }
                        bubble.remove();
                        this.bubbleContain.empty();
                        this.activeBubble = [];
                        this.selectArr = [];
                        var url = "";
                        if(answer){
                            console.log("정답!!! 다음문제");
                            
                            // var set = controller.model.quizData.result[0].act_quest[parseInt(this.setNum-1)].set_num;
                            // var quiz = controller.model.quizData.result[0].act_quest[parseInt(this.setNum-1)].ques_num;
                            var code = controller.model.quizData.result[0].act_quest[parseInt(this.setNum-1)].voice_num;
                            
                            url = controller.model.soundPath + controller.model.activeAct+"/character/right/" + parseInt(Math.random()*5 + 1);
                            controller.characterManager.onCharacterPlay("speek",controller.characterManager.gram,url,$.proxy(function(){
                                url = controller.model.soundPath+controller.model.activeAct+"/"+controller.model.activeLevel+"/answer/"+code;
                                controller.soundManager.init(url,true,$.proxy(function(){
                                    this.onInterval($.proxy(function(){
                                        this.answerFilde.find("p").html("");
                                        if(controller.model.quizData.result[0].act_quest.length == this.setNum){
                                            this.onNextView();
                                        }else{
                                            controller.model.activeQuizSetNum++;
                                            this.onSetQuiz();
                                        }
                                    },this));
                                    
                                },this)); //경로.
                            } ,this),true); //경로.


                        }else{
                            console.log("오답!!! 문제 다시 셋팅");
                            this.answerFilde.find("p").html("");
                            url = controller.model.soundPath + controller.model.activeAct+"/character/wrong/" + parseInt(Math.random()*5 + 1);
                            controller.characterManager.onCharacterPlay("speek",controller.characterManager.gram,url); //경로.
                            this.onSetQuiz();
                        }
                    }       
                },this)); //경로.
                
            },this));
            this.aniNum--;
            if(this.aniNum >= 0) controller.animationManager3.newBubble.init("act3_ani_newBubble");
        },
        onInterval : function(f){
            this.interval = setTimeout(f,3000);
        },
        onReset : function(){
            if(this.bubbleContain != null) this.bubbleContain.empty();
            $(window).off("ani_act3_newBubble", $.proxy(this.onSetBubble,this));
            this.setNum = 1;
            controller.model.activeQuizSetNum = 1;
            controller.animationManager3.resetAni();
            for(i=0;i<this.activeBubble.length;i++){
                this.activeBubble[i].onRemoveAni();
            }
        },
        onNextView : function(){
            this.clickButton.hide();
            controller.dataManager.loadLog("end",{"quizNum":controller.model.quizSetNum,"yes_cnt":"1","fail_cnt":"1","yes_yn":"Y"},$.proxy(function(){
                url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/review/1";
                controller.characterManager.onCharacterPlay("speek",controller.characterManager.gram,url, $.proxy(function(){
                    this.onReset();
                    for(var i=0;i<this.arr.length;i++){
                        if(this.arr[i].character == controller.characterManager.elly) controller.characterManager.onMotion(this.arr[i].character, null,null,0,200); //타겟, x , y, alpha, 속도
                        if(this.arr[i].character == controller.characterManager.reedie) controller.characterManager.onMotion(this.arr[i].character,null,null,0,200); //타겟, x , y, alpha, 속도
                        if(this.arr[i].character == controller.characterManager.gram) controller.characterManager.onMotion(this.arr[i].character,15,null,null,500); //타겟, x , y, alpha, 속도
                        if(this.arr[i].character == controller.characterManager.coco) controller.characterManager.onMotion(this.arr[i].character,null,null,0,200); //타겟, x , y, alpha, 속도
                        if(this.arr[i].character == controller.characterManager.toto) controller.characterManager.onMotion(this.arr[i].character,null,null,0,200); //타겟, x , y, alpha, 속도
                    }
                    this.testButtons.remove();
                    this.sprinkler.animate({"left":"703px","top":"412px"},{
                        duration: 800,
                        specialEasing: {
                            top: "easeOutExpo",
                            left: "easeOutExpo"
                        }
                    });
                    controller.onloadAct3("resulte");
                },this),true); //경로.
                
            },this));
            
            
        },
        playSound : function(value,isblock,callBack){
            var url = controller.model.soundPath + controller.model.activeAct+"/"+ value;
            controller.soundManager.init(url,isblock,callBack); //경로.
        },
        onSetQuiz : function(e){ //퀴즈를 화면에 셋팅한다.
            // this.clickButton.off("click", $.proxy(this.onSetQuiz,this));
            var quizArr = [];
            this.setNum = controller.model.activeQuizSetNum;
            this.quiz_num = controller.model.quizData.result[0].act_quest[parseInt(this.setNum-1)].ques_num;
            this.quiz_sub_num = controller.model.quizData.result[0].act_quest[parseInt(this.setNum-1)].sub_num;
            var str = String(controller.model.quizData.result[0].act_quest[parseInt(this.setNum-1)].example);
            if(str.indexOf(", ") == -1){
                quizArr = String(controller.model.quizData.result[0].act_quest[parseInt(this.setNum-1)].example).split("|");
                this.answerArr = String(controller.model.quizData.result[0].act_quest[parseInt(this.setNum-1)].example).split("|");
                console.log(quizArr);
            }else{
                quizArr = String(controller.model.quizData.result[0].act_quest[parseInt(this.setNum-1)].example).split("|");
                this.answerArr = String(controller.model.quizData.result[0].act_quest[parseInt(this.setNum-1)].example).split("|");
                console.log(quizArr);
            }
            this.exampleArr = [];
            var answerArrNum = [];
            
            for(var i=0;i<quizArr.length;i++){
                quizArr[i] = {text:quizArr[i],quizSubNum:(i+1)};
                answerArrNum.push(i);
            }

            console.log(quizArr);

            while(quizArr.length>0){
                var num = parseInt(Math.random()*quizArr.length);
                this.exampleArr.push({"text":quizArr[num].text,"num":answerArrNum[num],"quizSubNum":quizArr[num].quizSubNum});
                quizArr.splice(num, 1);
                answerArrNum.splice(num, 1);
            }
            console.log(this.exampleArr);
            this.aniNum = this.exampleArr.length-1; //버블이 나오는 애니메이션 카운트;
            
            $("#gameContainer").append(this.bubbleContain);
            controller.animationManager3.newBubble.init("act3_ani_newBubble");
            console.log(this.answerArr);
        },
        setQuiz : function(){
            console.log("퀴즈 셋팅 함수 JSON DATA LOAD");
            controller.onLoadQuiz();
        },
        onHomeListener : function(e){
            switch(e.target.id){
                case "completeButton" :
                this.onNextView();
                break;
            }
        }
    };
    exports.Activity3Game = Activity3Game;
})(this);