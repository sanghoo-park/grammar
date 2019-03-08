(function(exports){
    function Activity1Game(){
        this.answerNum = this.answerNum||{};
        this.isBox = false;
        this.hitObj = [];
        this.answer = this.answer || {};
        this.totalQuizNum = this.totalQuizNum || {};
        this.quizCuntNum = this.quizCuntNum || {};
        this.dragText = "";
        this.dragIconLeft = "476px";
        $(window).on("gumballMotionEnd",$.proxy(function(){ // 검볼 모션 엔드
            this.dragIcon.show();
            this.dragIcon.css({opacity:'0'});
            this.dragIcon.animate({top: '555px',opacity:'1'}, "slow");
            this.playSound(this.dragIcon.find("span").html());
            var str = "";
            console.log(this.dragIcon.find("span").html())
            if(String(this.dragIcon.find("span").html()).indexOf("<br>") != -1){ // 띄어쓰기가 있으면
                var arr = String(this.dragIcon.find("span").html()).split("<br>");
                str = (arr[0].length > arr[1].length)? arr[0]:arr[1];
            }else{
                str = this.dragIcon.find("span").html();
            }
            console.log(str);

            


            this.dragIcon.find("span").css({"font-size":"13pt","line-height":"13pt"});
            if(str.length > 5){
                this.dragIcon.find("span").css({"font-size":"10pt","line-height":"10pt"});
            }
            if(str.length > 6){
                this.dragIcon.find("span").css({"font-size":"9pt","line-height":"9pt"});
            }
            if(str.length > 7){
                this.dragIcon.find("span").css({"font-size":"8.5pt","line-height":"9pt"});
            }
            if(str.length > 8){
                this.dragIcon.find("span").css({"font-size":"8pt","line-height":"8pt"});
            }
            if(str.length > 9){
                this.dragIcon.find("span").css({"font-size":"7.5pt","line-height":"7pt"});
            }
            if(str.length > 10){
                this.dragIcon.find("span").css({"font-size":"7pt","line-height":"7pt"});
            }
            if(str == "Dan-O’s") this.dragIcon.find("span").css({"font-size":"10pt","line-height":"11pt"});
        },this));

        $(window).on("total_quiz",$.proxy(function(e){ // 퀴즈의 토탈 값을 받아 온다.
            this.quizCuntNum = e.total;
        },this));

        $.getScript("src/libs/Box2D.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                $.getScript("src/view/activity1/Ball.js",$.proxy(function(data, textStatus, jqxhr){
                    if(textStatus == "success"){
                    }
                },this)); 

                $.getScript("src/view/activity1/Physical.js",$.proxy(function(data, textStatus, jqxhr){
                    if(textStatus == "success"){
                        this.physical = new Physical();
                    }
                },this));   
            }
        },this));
    }
    Activity1Game.prototype = {
        onReset : function(){
            controller.animationManager1.resetAni();
            this.stageNum = 1;
            controller.model.activeQuizSetNum = 1;
            this.physical.onReset();
        },
        updateView : function(){
            controller.dataManager.loadLog("init",{"quizNum":controller.model.quizSetNum},$.proxy(this.setView,this));
        },
        setView : function(){
            console.log("updateView");
            this.viewName = controller.model.viewName;
            var bg = $('<div class="act1_background_bg" style="z-index: -1;background:url(./asset/img/act1/'+this.viewName+'_bg.png);position:absolute;width:1000px; height:630px;"></div>');
            $("#gameContainer").append(bg);
            var testButtons = $("<div class='testButtons'></div>");
            this.completeBtn = $("<button id='completeButton'>COMPLETE</button>");
            this.dragIcon = $("<div id='dragicon'><img src='./asset/img/act1/ball"+this.viewName+".png'/><div><span class='font_embed font_embed_ball'>test</span></div></div>");
            // this.elly = $("<div id='elly_act1game'><img class='transform_scaleX' src='./asset/img/character/elly.png' /></div>");
            var canvas = $("<canvas id='canvas' width='400' height='400'></canvas>");
            var debug = $("<canvas id='debug'  width='400' height='400'></canvas>");
            var aniCanvas = $("<canvas id='ani_canvas' width='1000' height='630' style='position:absolute;top:0;left:0;'></canvas>");
            this.gumBallContainer = $("<div id='gumBall_container'><button></button></div>");
            var gumBallMachine = $("<img src='./asset/img/act1/gumballMachine.png' />");
            var level = "";
            if(controller.model.activeLevel == "Easy") level = "1";
            if(controller.model.activeLevel == "Medium") level = "2";
            if(controller.model.activeLevel == "Hard") level = "3";
            var gumBallMachineTitle = $("<div class='gumBallMachine_title'><span class='gumball_title font_embed'>"+this.viewName+
                                        "</span><span class='gumball_level font_embed'>Level "+level+"</span></div>");
            

            if(this.viewName == "Adjectives"){
                gumBallMachineTitle.find(".gumball_title").css({"font-size":"12pt"});
            }

            $("#gameContainer").append(this.gumBallContainer);
            testModule.testButtonInit(testButtons);
            testButtons.append(this.completeBtn);
            $("#gameContainer").append(this.dragIcon);
            $("#gameContainer").append(debug);
            
            
            $("#gameContainer").append(aniCanvas);
            this.gumBallContainer.append(gumBallMachineTitle);
            this.gumBallContainer.append(canvas);
            this.gumBallContainer.append(debug);
            this.gumBallContainer.append(gumBallMachine);
            
            $(".gumball_title").on("click", $.proxy(function(e){
                console.log(this.viewName);
                var url = controller.model.soundPath + "act1/"+this.viewName;
                controller.soundManager.init(url); //경로.
            },this)).css("cursor","pointer");
            
            $(".gumball_level").on("click", $.proxy(function(){
                console.log("click");
                var url = controller.model.soundPath + controller.model.activeLevel;
                controller.soundManager.init(url); //경로.
            },this));

            
            $("#completeButton").on("click",$.proxy(this.onCompleteListener,this));
            $("#dragicon").on("mousedown",$.proxy(this.onMouseDown,this));
            $("body").attr("ondragstart","return false");
            $("body").attr("onselectstart","return false");
            this.dragIcon.hide();
            
            controller.animationManager1.gumballmachine.init("ani_canvas");
            this.gumBallContainer.find("button").on("click",$.proxy(function(){// 검볼머신 클릭
                this.gumBallContainer.find("button").off("click");
                this.physical.removeBall();
                // this.gumBallMachineBody.fadeOut();
                console.log("gumBallContainer click!!!");
                controller.animationManager1.gumballmachine.init("ani_canvas");
            },this));

            $("#dragicon").on("setball",$.proxy(function(e){
                console.log(e.textArr);
                this.answer = e.textArr.answer;
                this.dragText = String(e.textArr.question).replace("/","/<br>");
                this.dragText = String(this.dragText).replace(" ","<br>");
                if("Dan-O’s Diner" != e.textArr.question) this.dragText = String(this.dragText).replace("-","-<br>");
                $("#dragicon span").html(this.dragText);
            },this));

            this.onStageSetting();
            this.setCharater();
        },
        setCharater : function(){
            console.log("------------------------------setCharater---------------------------------");
            var characterCanvas = $("<canvas id='ani_canvas_characte' width='1000' height='630'></canvas>");
            this.characterContain = $("<div id ='charater_contian' style='position:absolute;top:0;left:0;width:1000px;height:630px'></div>"); //케릭터 애니 담을 컨테인
            $("#gameContainer").append(this.characterContain);
            this.characterContain.append(characterCanvas);
            var arr = [];
            arr.push(new Object({
                character:controller.characterManager.elly,
                x : 710,
                y : 400,
                scaleX : -1,
                index : 0
            }));
            controller.characterManager.onSetChrater("ani_canvas_characte",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 
        },
        onSetDragBox : function(){ // 정답 드레그 박스 셋팅.
            this.stageNum = controller.model.activeQuizSetNum;
            var data = this.dataArr[this.stageNum-1];
            this.hitObj = [];
            console.log(data);
            this.answerNum = data.example.length;
            for(var k=0;k<4;k++){
                $("#target"+k).remove();
            }
            var className = [];
            if(data.example.length == 1){
                className = ["left_center"];
            }else if(data.example.length == 2){
                className = ["left_center","right_center"];
            }else if(data.example.length == 3){
                className = ["left_center","right_top","right_bottom"];
            }else if(data.example.length == 4){
                className = ["left_top","right_top","left_bottom","right_bottom"];
            }
            for(var i=data.example.length-1;i>-1;i--){
                var obj = {};
                var boxImgURL = (data.example[i].question.length<=4)? "box.png" : "boxBig.png";
                var boxSize = (data.example[i].question.length<=4)? "238px" : "351px"; 
                var boxTop = (data.example[i].question.length<=4)? "-149px" : "-243px"; 
                obj.target = $("<div class = 'box_size "+className[i]+"'id='target"+i+"'><img src='./asset/img/act1/"+boxImgURL+"' /><span class='box_title font_embed'>"+String(data.example[i].answer).toLowerCase()+"</span>"+
                                    "<div class='box_inner'></div>"+
                                "</div>").css("height",boxSize);
                
                for(k=0;k< data.example[i].question.length;k++){
                    var div = $("<div class='show_ball'><div class = 'act1_game_ball_img'><div class='act1_table_contain'><span class='font_embed font_embed_ball act1_result_ball'></span></div><img src='./asset/img/act1/ball"+this.viewName+".png' /></div><img class='act1_round' src='./asset/img/act1/round.png' /></div>");
                    obj.target.find(".box_inner").append(div);
                }
                obj.type = data.example[i].answer;
                obj.id = "target"+i;
                $("#gameContainer").append(obj.target);
                $(".box_inner").css("top",boxTop);
                $(".act1_game_ball_img").hide();
                this.hitObj.push(obj);
                obj.target.find(".show_ball").css("cursor","default");
                obj.target.find(".box_title").on("click", $.proxy(function(e){
                    console.log($(e.target).html());
                    var url = controller.model.soundPath + "act1/words/" + $(e.target).html();
                    controller.soundManager.init(url); //경로.
                },this)).css("cursor","pointer");
            }
        },
        onCompleteListener : function(e){
            switch(e.target.id){
                case "completeButton" :
                this.onComplete();
                break;
            }
        },
        onComplete : function(){ // 게임을 다풀고 복습화면으로 이동전 로그 저장.
            this.onReset();
            controller.dataManager.loadLog("end",{"quizNum":controller.model.quizSetNum,"yes_cnt":"1","fail_cnt":"1","yes_yn":"Y"},$.proxy(this.onCompleteCallBack,this));
        },
        onCompleteCallBack : function(){// 게임을 다풀고 복습화면으로 이동. 이동하는 좌표값은 2개 일때랑 길떄랑 다 틀리게 해야 한다.
            this.completeBtn.remove();
            controller.onloadAct1("resulte");
            controller.characterManager.onMotion(controller.characterManager.elly, null,null,0,200); //타겟, x , y, alpha, 속도
            controller.characterManager.onMotion(controller.characterManager.reedie,15,260,1,500); //타겟, x , y, alpha, 속도
            console.log($(".box_size").length);
            var data = this.dataArr[this.stageNum-1];
            var top = (data.example[0].question.length<=4)? "43px" : "93px";
            $("#gumBall_container").fadeOut("fast");
            $("#ani_canvas").fadeOut("fast");
            $("#target0").animate({"left":"603px","top":top},function(){
                $(window).trigger("setResult");
            });
            $("#target1").animate({"left":"788px","top":top});
            $("#target2").animate({"left":"603px","top":"267px"});
            $("#target3").animate({"left":"788px","top":"267px"});
            $(".box_size").find(".act1_game_ball_img").fadeOut(250,function(e){
                $(".box_size").find(".act1_game_ball_img span").empty();
            });
        },
        playSound : function(value){
            console.log("playsound : "+value);
            var str = String(value).replace("/<br>"," ");
            str = String(str).replace("-<br>"," ");
            str = String(str).replace("<br>"," ");
            if(str == "Dan-O’s Diner") str = "Dan";
            var url = controller.model.soundPath + "act1/words/" + str;
            console.log(str);
            console.log(url);
            console.log(controller.soundManager);
            controller.soundManager.init(url); //경로.
        },
        onMouseDown : function(e){
            console.log($(e.target).html());
            // this.playSound($(e.target).html());
            console.log("mousedown");
            this.item = e.currentTarget.id;
            var h = $(e.target)[0].clientHeight;
            var w = $(e.target)[0].clientWidth;
            $(e.currentTarget).off("mousedown",this.onMouseDown);
            
            $("body").on("mouseup",$.proxy(this.onMouseMove,this));
            $("body").on("mousemove",$.proxy(this.onMouseMove,this));
        },
        onMouseMove : function(e){
            switch(e.type){
                case "mouseup" :
                console.log("mouseup");
                $("#"+this.item).on("mousedown",$.proxy(this.onMouseDown,this));
                $("body").off("mouseup",this.onMouseMove);
                $("body").off("mousemove",this.onMouseMove);
                var obj = {};
                var count = 0;
                var url = "";
                for(var i=0;i<this.hitObj.length;i++){
                    obj.drag = $("#"+this.item);
                    obj.target = $("#"+this.hitObj[i].id);
                    obj.type = this.hitObj[i].type;
                    if(this.answer == controller.hitTestManager.onHitTest(obj)){
                        var url = controller.model.soundPath + "objectmove";
                        controller.effectManager.init(url); //경로.
                        this.quizCuntNum--;
                        console.log("정답");
                        console.log(this.quizCuntNum);
                        var num = obj.target.find(".box_inner>div").length;
                        this.dragIcon.hide();
                        this.dragIcon.css({top:'530px',left:this.dragIconLeft});
                        for(i=0;i<num;i++){
                            if(obj.target.find(".box_inner>div:nth-child("+(i+1)+") span").html() == ""){
                                console.log("없다");
                                console.log(this.dragText);
                                var span =  obj.target.find(".box_inner>div:nth-child("+(i+1)+") span");
                                obj.target.find(".box_inner>div:nth-child("+(i+1)+") span").html(this.dragText);
                                var str = "";
                                console.log(this.dragIcon.find("span").html());
                                if(String(this.dragText).indexOf("<br>") != -1){ // 띄어쓰기가 있으면
                                    var arr = String(this.dragText).split("<br>");
                                    str = (arr[0].length > arr[1].length)? arr[0]:arr[1];
                                }else{
                                    str = this.dragIcon.find("span").text();
                                }
                                console.log(str);
                                span.css({"font-size":"13pt","line-height":"13pt"});
                                if(str.length > 5){
                                    span.css({"font-size":"10pt","line-height":"10pt"});
                                }
                                if(str.length > 6){
                                    span.css({"font-size":"9pt","line-height":"9pt"});
                                }
                                if(str.length > 7){
                                    span.css({"font-size":"8.5pt","line-height":"9pt"});
                                }
                                if(str.length > 8){
                                    span.css({"font-size":"8pt","line-height":"8pt"});
                                }
                                if(str.length > 9){
                                    span.css({"font-size":"7.5pt","line-height":"7pt"});
                                }
                                if(str.length > 10){
                                    span.css({"font-size":"7pt","line-height":"7pt"});
                                }
                                if(str == "Dan-O’s") span.css({"font-size":"10pt","line-height":"11pt"});

                                obj.target.find(".box_inner>div:nth-child("+(i+1)+") .act1_game_ball_img").fadeIn("500",$.proxy(this.onTextFadeIn,this));
                                obj.target.find(".box_inner>div:nth-child("+(i+1)+")").on("click", $.proxy(this.onResultBallClickListener,this));
                                obj.target.find(".box_inner>div:nth-child("+(i+1)+")").css("cursor","pointer");
                                break;
                            } 
                        }
                        return;
                    }else{
                        count++;
                    }
                }

                if(count == this.answerNum){
                    console.log("오답");
                    url = controller.model.soundPath + "act1/character/wrong/" + parseInt(Math.random()*5 + 1);
                    controller.characterManager.onCharacterPlay("speek",controller.characterManager.elly,url); //경로.
                    this.dragIcon.animate({top:'555px',left:this.dragIconLeft});
                }
                break;

                case "mousemove" :
                var leftmargin = $("#root")[0].offsetLeft * controller.fullScreenModul.scaleW;
                var h = $("#"+this.item)[0].clientHeight * controller.fullScreenModul.scaleH;
                var w = $("#"+this.item)[0].clientWidth * controller.fullScreenModul.scaleW;
                $("#"+this.item).css({"top":(e.clientY-(h/2)) / controller.fullScreenModul.scaleH,"left":(e.clientX-(w/2)-leftmargin) / controller.fullScreenModul.scaleW});
                break;
            }
        },
        onTextFadeIn : function(){
            if(this.quizCuntNum != 0){
                this.gumBallContainer.find("button").on("click",$.proxy(function(){// 검볼머신 클릭
                    this.gumBallContainer.find("button").off("click");
                    this.physical.removeBall();
                    controller.animationManager1.gumballmachine.init("ani_canvas");
                },this));
            }
            var url = "";
            url = controller.model.soundPath + "act1/character/right/" + parseInt(Math.random()*5 + 1);
            controller.characterManager.onCharacterPlay("speek",controller.characterManager.elly,url,$.proxy(function(){
                if(this.quizCuntNum == 0){
                    console.log("stage claer next quiz");
                    console.log(this.stageNum +"stageNum");
                    console.log(this.totalQuizNum +"totalQuizNum");
                    var url = controller.model.soundPath + "/success";
                    controller.effectManager.init(url,$.proxy(function(){
                        if(this.stageNum == 5){
                            //결과 음성 플레이 후에 이동.
                            url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/review/" + controller.model.viewName;
                            controller.soundManager.init(url,true,$.proxy(function(){
                                this.onComplete();
                                console.log("get result!!"); // 스테이지 all 클리어 하면 결과 창으로 이동.
                                // controller.model.activeQuizSetNum = 1;
                                // this.stageNum = 1;
                            },this)); //경로.
                            return;
                        }else{
                            this.gumBallContainer.find("button").on("click",$.proxy(function(){// 검볼머신 클릭
                                this.gumBallContainer.find("button").off("click");
                                this.physical.removeBall();
                                controller.animationManager1.gumballmachine.init("ani_canvas");
                            },this));
                            controller.model.activeQuizSetNum++;
                            this.onSetDragBox();
                            this.physical.init(this.stageNum,this.dataArr);
                        }
                    },this)); //경로.
                }
            },this)); //경로.
            
        },
        onResultBallClickListener : function(e){
            console.log($(e.target).html());
            this.playSound($(e.target).html());
        },
        onStageSetting : function(){
            console.log("문제 다 받아 왔고 이제 문제를 셋팅해보자 stage = ",controller.model.activeQuizSetNum);
            controller.model.quizSetNum = controller.model.quizData.result[0].act_quest[0].set_num;
            console.log("controller.model.quizSetNum : "+controller.model.quizSetNum);
            this.dataArr = [];
            var arr = [];
            var cunt = controller.model.quizData.result[0].act_quest[0].ques_num;
            for(var i=0;i<controller.model.quizData.result[0].act_quest.length;i++){
                if(cunt == controller.model.quizData.result[0].act_quest[i].ques_num){
                    arr.push({"question":String(controller.model.quizData.result[0].act_quest[i].example).split(", "), "answer":controller.model.quizData.result[0].act_quest[i].answer});
                    
                    
                }else{

                    this.dataArr[cunt-1] = 
                    {
                        
                        "act_main_cd":controller.model.quizData.result[0].act_quest[i].act_main_cd,
                        "act_sub_cd":controller.model.quizData.result[0].act_quest[i].act_sub_cd,
                        "example":arr,
                        "level_main_cd":controller.model.quizData.result[0].act_quest[i].level_main_cd,
                        "level_sub_cd":controller.model.quizData.result[0].act_quest[i].level_sub_cd,
                        "ques_num":controller.model.quizData.result[0].act_quest[i].ques_num,
                        "ques_uid":controller.model.quizData.result[0].act_quest[i].ques_uid,
                        "question":controller.model.quizData.result[0].act_quest[i].question,
                        "set_num":controller.model.quizData.result[0].act_quest[i].set_num
                    };
                    
                    cunt = controller.model.quizData.result[0].act_quest[i].ques_num;
                    arr = [];
                    this.dataArr[cunt-1] = {};
                    arr.push({"question":String(controller.model.quizData.result[0].act_quest[i].example).split(", "), "answer":controller.model.quizData.result[0].act_quest[i].answer});
                    this.dataArr[cunt-1] = 
                    {
                        
                        "act_main_cd":controller.model.quizData.result[0].act_quest[i].act_main_cd,
                        "act_sub_cd":controller.model.quizData.result[0].act_quest[i].act_sub_cd,
                        "example":arr,
                        "level_main_cd":controller.model.quizData.result[0].act_quest[i].level_main_cd,
                        "level_sub_cd":controller.model.quizData.result[0].act_quest[i].level_sub_cd,
                        "ques_num":controller.model.quizData.result[0].act_quest[i].ques_num,
                        "ques_uid":controller.model.quizData.result[0].act_quest[i].ques_uid,
                        "question":controller.model.quizData.result[0].act_quest[i].question,
                        "set_num":controller.model.quizData.result[0].act_quest[i].set_num
                    };
                }
                
            }
            console.log(this.dataArr);
            var dataArr = [];
            for(var i=0;i<this.dataArr.length;i++){
                console.log(i+" == "+this.dataArr[i]);
                if(this.dataArr[i] != undefined) dataArr.push(this.dataArr[i]);
            }
            this.dataArr = dataArr;
            // this.totalQuizNum = this.dataArr.length;
            this.onSetDragBox();
            console.log(controller.model.activeQuizSetNum,this.dataArr);
            this.physical.init(controller.model.activeQuizSetNum,this.dataArr);
        },
        setQuiz : function(){
            console.log("퀴즈 셋팅 함수 JSON DATA LOAD");
            controller.onLoadQuiz();
        }
    };
    exports.Activity1Game = Activity1Game;
})(this);