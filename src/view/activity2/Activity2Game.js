(function(exports){
    function Activity2Game(){
        this.frogAniKey = ["leftTop", "rightTop", "leftBottom", "rightBottom"];
        this.isResult = false;
        $(window).on("frogAniEnd", $.proxy(function(e){
            
            this.onRemoveClick(true);
        },this));
        $(window).on("frogAniRight", $.proxy(function(e){this.onNextQuiz();},this));
        $(window).on("fly_hide", $.proxy(function(e){this.onFlyhide();},this));
        $(window).on("frogAnijump", $.proxy(function(e){
            // this.playAnswerSound();
            // var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/howToPlay/" + controller.model.viewName;
            // controller.soundManager.init(url,true,$.proxy(this.playAnswerSound, this)); //경로.
        },this));
    }

    Activity2Game.prototype = {
        initialize : function(){

        },
        updateView : function(){
            controller.dataManager.loadLog("init",{"quizNum":controller.model.quizSetNum},$.proxy(this.setView,this));
        },
        setView : function(){
            this.soundKey = "";
            this.underLineAniNum = 1;
            var bg = $('<div class="act1_background_bg" style="z-index: -1;background:url(./asset/img/act2/bg2.png);position:absolute;width:1000px; height:630px;"></div>');
            this.quizPanel = $("<div id='act2_quiz_panel'><img src='./asset/img/act2/quizPanel.png' /></div>");
            this.thumbImg = $("<img id = 'act2_thumb_img' src = '"+controller.model.imgPath+controller.model.activeAct+"/nomal.png' />").css({"width":"357px","height":"246px"});;
            this.quizText = $("<div><p class='font_embed'></p></div>");
            var aniCanvas = $("<canvas id='ani_canvas' width='1000' height='630' style='position:absolute;top:0;left:0;z-index:100'></canvas>");
            $("#gameContainer").append(bg);
            $("#gameContainer").append(this.quizPanel);
            this.quizPanel.append(this.thumbImg);
            this.quizPanel.append(this.quizText);
            var completeBtn = $("<button id='completeButton'>COMPLETE</button>");
            var testButtons = $("<div class='testButtons'></div>");
            testModule.testButtonInit(testButtons);
            $("#gameContainer").append(aniCanvas);
            testButtons.append(completeBtn);
            $("#completeButton").on("click",$.proxy(this.onCompleteListener,this));
            controller.animationManager2.gameFrog.init("ani_canvas");
            this.quizText.css("cursor","pointer");
            this.quizText.on("click", $.proxy(this.playAnswerSound,this));
            this.onStageSetting();
        },
        playAnswerSound : function(){  
            var fileName = controller.model.activeLevel+"/example/"+this.data.set_num+this.data.ques_num;
            this.playSound(fileName,true);
        },
        onSetDragBox : function(){ // 정답 드레그 박스 셋팅.
            this.setNum = controller.model.activeQuizSetNum;
            this.data = controller.model.quizData.result[0].act_quest[this.setNum-1];
            this.hitObj = [];
            var exampleArray = this.data.example.split(","); //보기 배열.
            this.answer = this.data.answer.split(",");
            var strLeng = this.answer[0];
            var questTion = String(this.data.question).replace(/\(tmp\)/g, "<span></span>");
            this.quizText.find("p").html(questTion);
            console.log("exampleArray = "+exampleArray);
            var i = 0;
            if(this.answer.length > 1){
                for(i=1;i<this.answer.length;i++){
                    if(String(strLeng).length < String(this.answer[i]).length) strLeng = this.answer[i];
                }
            }
            
            for(i=0;i<exampleArray.length;i++){
                if(String(strLeng).length < String(exampleArray[i]).length) strLeng = exampleArray[i];
            }

            
            var str="_";
            for(var j=0;j<String(strLeng).length;j++){
                str = str+"_";
            }
            str = "<p></p>"+str;

            this.answerNum = exampleArray.length;
            for(var k=0;k<this.answer.length;k++){
                this.quizText.find("p span:nth-child("+(k+1)+")").html(str);
                var num = parseInt(Math.random() * (exampleArray.length+1)); //0,1,2,3               
                exampleArray.splice(num, 0, this.answer[k]);
            }
            
            for(k=0;k<4;k++){
                $("#act2_target"+k).remove();
            }
            var className = [];
            className = ["act2_left_top","act2_right_top","act2_left_bottom","act2_right_bottom"];
            for(i=exampleArray.length-1;i>-1;i--){
                var obj = {};
                var canvas = $('<img src = "./asset/animate/act2/fly/ani_fly.gif" class = "ani_fly" id ="ani_fly_'+i+'" width="132" height="86" style="position: absolute; display: block; background-color:rgba(66, 66, 66, 0.00);" />');
                obj.target = $("<div class ='"+className[i]+"' id='act2_target"+i+"'><img src='./asset/img/act2/box.png' /><span class='font_embed act2_example_text'>"+exampleArray[i]+"</span></div>");
                obj.type = exampleArray[i];
                obj.id = "act2_target"+i;
                $("#gameContainer").append(obj.target);
                obj.target.append(canvas);
                this.hitObj.push(obj);
                obj.target.on("click",$.proxy(this.onPanelClick,this));
            }
            // $("#act2_quiz_panel>div>p span").stop();
            // this.quizText.find("span").css({"color":"black"});
           if(this.answer.length == 2){
                this.quizText.find("span:nth-child(1)").addClass("act2_line_ani");
                this.textColorAnimate();
           }
           this.quizText.find("span:nth-child(1)").addClass("font_embed_line");
           this.quizText.find("span:nth-child(1)").find("p").addClass("font_embed");
           this.quizText.find("span:nth-child(2)").addClass("font_embed_line");
           this.quizText.find("span:nth-child(2)").find("p").addClass("font_embed");
           if(this.setNum!=1){
                this.playAnswerSound(); // 첫문제는 개구리가 뛰어 들어오고나서 음성이 나와야 하기떄문에 따로 처리
           } else{
                var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/howToPlay";
                controller.soundManager.init(url,true,$.proxy(this.playAnswerSound, this)); //경로.
           }
           var imgurl  = "";
           if(controller.model.activeLevel != "Easy"){
                if(this.data.set_num == "1" || this.data.set_num == "2"){
                    imgurl = controller.model.imgPath + controller.model.activeAct+"/illust/"+controller.model.activeLevel+"/set"+this.data.set_num+"/"+this.data.ques_num+".png";
                    this.thumbImg.attr("src",imgurl);
                }else{
                    imgurl = controller.model.imgPath+controller.model.activeAct+"/nomal.png";
                    this.thumbImg.attr("src",imgurl);
                }
            }
        },
        textColorAnimate : function(){
            $(".act2_line_ani").animate({"color":"red"},$.proxy(function(){
                $(".act2_line_ani").animate({"color":"black"},$.proxy(this.textColorAnimate,this));
            },this));
        },
        onFlyhide : function(){
            this.removeFly.hide();
            this.span.hide();
        },
        onPanelClick : function (e){
            var url = controller.model.soundPath +"/"+controller.model.activeAct+"/word/"+String($(e.currentTarget).find("span").html());
            controller.soundManager.init(url,false); //경로.
           var frogKey = this.frogAniKey[String($(e.currentTarget).attr("id")).substr(String($(e.currentTarget).attr("id")).length-1,1)];
           var removeFly = $($(e.currentTarget).find(".ani_fly"));
           this.removeFly = removeFly;
           var span = $($(e.currentTarget).find("span"));
           this.span = span;
           controller.animationManager2.gameFrog.name = frogKey;
           controller.animationManager2.gameFrog.init();
           this.onRemoveClick(false);// 버튼 막기.
           
            for(var i=0;i<this.hitObj.length;i++){
                if(this.hitObj[i].id == $(e.currentTarget).attr("id")){
                    //this.hitObj[i].type 값을 빈칸에 넣는다.
                    
                    if(this.hitObj[i].type == this.answer[0]){
                        
                        console.log("정답!");
                        this.selectType = this.hitObj[i].type;
                        controller.animationManager2.gameFrog.Cheack = "right";
                        this.soundKey = "right";
                        if(this.quizText.find("span:nth-child(1) p").html() == ""){
                            this.activeFilde =  this.quizText.find("span:nth-child(1)");
                            this.quizText.find("span:nth-child(1) p").addClass("right_answer");
                            this.quizText.find("span:nth-child(1) p").html(this.hitObj[i].type);
                        }else{
                            this.activeFilde =  this.quizText.find("span:nth-child(2)");
                            this.quizText.find("span:nth-child(2) p").addClass("right_answer");
                            this.quizText.find("span:nth-child(2) p").html(this.hitObj[i].type);
                        }
                    }else{
                        console.log("오답!");
                        controller.animationManager2.gameFrog.Cheack = "wrong";
                        this.soundKey = "wrong";
                        
                        if(this.quizText.find("span:nth-child(1) p").html() == ""){
                            this.quizText.find("span:nth-child(1) p").html(this.hitObj[i].type);
                        }else{
                            this.quizText.find("span:nth-child(2) p").html(this.hitObj[i].type);
                        }
                        
                    }
                }
            }
        },
        onNextQuiz : function(){
            if(this.answer.length == 1){
                // this.setNum++;
                controller.model.activeQuizSetNum++;
            }else if(this.answer.length == 2){
                this.quizText.find("span:nth-child(1)").removeClass("act2_line_ani");
                this.quizText.find("span:nth-child(2)").addClass("act2_line_ani");
                this.activeFilde.finish();
                this.activeFilde.css("color","black");
                var selectNum=0;
                for(var i=0;i<this.answer.length;i++){
                    if(this.selectType == this.answer[i]) selectNum = i;
                }
                console.log(selectNum+" 정답번호 ??");
                this.answer.splice(selectNum, 1);
                return;
            }
            // $("#act2_quiz_panel div p").html(String($("#act2_quiz_panel div p").html()).replace(/\_/g, ""));
            $("#act2_quiz_panel div p span").removeClass("font_embed_line");
            // $("#act2_quiz_panel div p span:nth-child(1)").html("<p>"+$("#act2_quiz_panel div p span:nth-child(1)").text().replace(/\_/g, "")+"</p>")
            $("#act2_quiz_panel div p span:nth-child(1)").html("<p class='font_embed right_answer'>"+$("#act2_quiz_panel div p span:nth-child(1)").text().replace(/\_/g, "")+"</p>")
            $("#act2_quiz_panel div p span:nth-child(2)").html("<p class='font_embed right_answer'>"+$("#act2_quiz_panel div p span:nth-child(2)").text().replace(/\_/g, "")+" </p>")
            $("#act2_quiz_panel div p span:nth-child(1) p").css({"position":"static","line-height":"12px"});
            $("#act2_quiz_panel div p span:nth-child(2) p").css({"position":"static","line-height":"12px"});
            
            // $("#act2_quiz_panel div p span:nth-child(1)").text($("#act2_quiz_panel div p span:nth-child(1)").text().replace(/\_/g, ""))
            // $("#act2_quiz_panel div p span:nth-child(2)").text($("#act2_quiz_panel div p span:nth-child(2)").text().replace(/\_/g, ""))
            var fileName = controller.model.activeLevel+"/answer/"+this.data.set_num+this.data.ques_num;
            this.playSound(fileName,true,$.proxy(this.onNextQuizSoundCallBack,this));
            
        },
        onNextQuizSoundCallBack : function(){
            console.log(this.setNum,"  <--- 이번 셋트 번호 setNum ");
            console.log(controller.model.activeQuizSetNum,"  <--- 다음 셋트 번호 activeQuizSetNum ");
            if(controller.model.activeQuizSetNum > this.totalQuizNum){
                console.log("get result!!"); // 스테이지 클리어 하면 결과 창으로 이동. 화면 전환 애니 매이션 동작
                this.onComplete();
            }else{
                console.log("다음문제.");
                this.underLineAniNum = 1;
                setTimeout($.proxy(setTimeListener,this),1000);
            }

            function setTimeListener(){
                this.onSetDragBox();
            }
        },
        onRemoveClick : function(value){ //에니메이션 끝나고 버튼 활성화.
            console.log("onRemoveClick")
            console.log(controller.animationManager2.gameFrog.Cheack)
            for(var i=0;i<this.hitObj.length;i++){
                if(value){
                    // class가 없는 애들은 다시 빈칸으로 만든다.
                    console.log(this.hitObj[i].target.find("span").css("display"))
                    if(controller.animationManager2.gameFrog.Cheack == "right"){
                        if(this.hitObj[i].target.find("span").css("display") != "none"){
                            this.hitObj[i].target.on("click",$.proxy(this.onPanelClick,this));
                        }
                        
                        
                    }else{
                        this.hitObj[i].target.on("click",$.proxy(this.onPanelClick,this));
                        this.removeFly.fadeIn();
                        this.span.fadeIn();
                    }
                    
                }else{
                    this.hitObj[i].target.off("click",$.proxy(this.onPanelClick,this));
                }
            }

            if(value){
                console.log(this.quizText.find("span:nth-child(1) p").attr("class"));
                if(this.quizText.find("span:nth-child(1) p").attr("class") != "font_embed right_answer"){
                    this.quizText.find("span:nth-child(1) p").html("");
                }else{
                    this.underLineAniNum = 2;
                    this.textColorAnimate();
                }
                if(this.quizText.find("span:nth-child(2) p").attr("class") != "font_embed right_answer") this.quizText.find("span:nth-child(2) p").html("")
            }
        },
        playSound : function(value,isblock,callBack){
            var url = controller.model.soundPath + "act2/"+ value;
            controller.soundManager.init(url,isblock,callBack); //경로.
        },
        onStageSetting : function(){
            this.data = controller.model.quizData.result[0].act_quest[controller.model.activeQuizSetNum-1];
            controller.model.quizSetNum = controller.model.quizData.result[0].act_quest[0].set_num;
            console.log("문제 다 받아 왔고 이제 문제를 셋팅해보자 stage = ",controller.model.activeQuizSetNum);
            this.totalQuizNum = controller.model.quizData.result[0].act_quest.length;
            this.onSetDragBox();
        },
        setQuiz : function(){
            console.log("퀴즈 셋팅 함수 JSON DATA LOAD");
            controller.onLoadQuiz();
        },
        onReset : function (){
            this.setNum = 1;
            controller.model.activeQuizSetNum = 1;
            controller.animationManager2.resetAni();
            $("#gameContainer").html("");
        },
        onComplete : function(){
            controller.dataManager.loadLog("end",{"quizNum":controller.model.quizSetNum,"yes_cnt":"1","fail_cnt":"1","yes_yn":"Y"},$.proxy(this.onCompleteCallBack,this));
        },
        onCompleteListener : function(e){
            switch(e.target.id){
                case "completeButton" :
                this.onComplete();
                break;
            }
        },
        onCompleteCallBack : function(){
            url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/review/" + controller.model.activeLevel+"/set"+ controller.model.quizSetNum+"/review";
            controller.soundManager.init(url,true,$.proxy(function(){
                console.log("get result!!"); // 스테이지 all 클리어 하면 결과 창으로 이동.
                this.onReset();
                controller.onloadAct2("resulte");
            },this)); //경로.
        }
    };
    exports.Activity2Game = Activity2Game;
})(this);