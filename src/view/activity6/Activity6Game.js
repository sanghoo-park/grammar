(function(exports){
    function Activity6Game(){
        
        this.exampleArr = [{x:750,y:50},{x:750,y:100},{x:750,y:150},{x:750,y:230},{x:750,y:280},{x:750,y:330}];
        this.answerArr = [];
        
    }

    Activity6Game.prototype = {
        initialize : function(){

        },
        updateView : function(){
            $(window).off("coin_ani_end");
            $(window).on("coin_ani_end", $.proxy(this.onCoinAniEnd,this));
            this.prevDragItem1;
            this.prevDragItem2;
            this.allClear = false; //모든 퀴즈 클리어 여부.
            this.quizMain_Num = 0; // 퀴즈 1 2 3 문제 넘버
            this.quiz_num = [0,0,0]; // 전체 퀴즈 진행 넘버
            this.clearArr = [false,false,false];
            this.prev_quiz_start = 0;
            
            var completeBtn = $("<button id='completeButton'>COMPLETE</button>");
            this.testButtons = $("<div class='testButtons'></div>");
            testModule.testButtonInit(this.testButtons);
            this.testButtons.append(completeBtn);
            $("#completeButton").on("click",$.proxy(this.onHomeListener,this));
            this.nextButton = $("<img id='act6_nextButton' src='"+controller.model.imgPath+"/act6/nextbutton.png"+"' />");
            this.prevButton = $("<img id='act6_prevButton' src='"+controller.model.imgPath+"/act6/prevbutton.png"+"' />");
            this.sentanceSoundButton = $("<img id='act6_s_sound' src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/sRepaly.png"+"'/>");
            this.quizSoundButton = $("<img id='act6_q_sound' src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/qRepaly.png"+"'/>");
            this.book = 
            $(
                "<div id='act6_game_book_contain'>"+
                    "<div id='img_block'></div>"+
                    "<img class='fire_book' src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/book.png"+"' /><img class='imgContain' src='' />"+
                    "<div class='textContain'>"+
                        "<div>"+
                            "<p class='textAnswer font_embed'></p>"+
                        "</div>"+
                    "</div>"+
                "</div>"
            );
            $("#gameContainer").append(this.book);
            if(controller.model.activeLevel == "Hard") this.book.find("p").css("font-size","10pt");
            
            this.book.append(this.nextButton);
            this.book.append(this.prevButton);
            this.book.append(this.sentanceSoundButton);
            this.book.append(this.quizSoundButton);

            this.sentanceSoundButton.on("click", $.proxy(this.soundButtonClick,this));
            this.sentanceSoundButton.on("mouseover", $.proxy(this.soundButtonClick,this));
            this.sentanceSoundButton.on("mouseout", $.proxy(this.soundButtonClick,this));
            this.quizSoundButton.on("click", $.proxy(this.soundButtonClick,this));
            this.quizSoundButton.on("mouseover", $.proxy(this.soundButtonClick,this));
            this.quizSoundButton.on("mouseout", $.proxy(this.soundButtonClick,this));

            this.nextButton.on("click",$.proxy(this.onPageListener,this));
            this.prevButton.on("click",$.proxy(this.onPageListener,this));
            this.prevButton.hide();
            this.drag = 
            $(
                "<div id='act6_game_drag_contain'>"+
                    "<div class='drag_icon'></div>"+
                    "<div class='drag_icon'></div>"+
                    "<div class='drag_icon'></div>"+
                    "<div class='drag_icon'></div>"+
                    "<div class='drag_icon'></div>"+
                    "<div class='drag_icon'></div>"+
                "</div>"
            );

            this.dragBg = 
            $(
                "<div id='act6_game_drag_bg_contain'>"+
                    "<img src = '"+controller.model.imgPath+"/"+controller.model.activeAct+"/drag_bg.png"+"'/>"+
                    "<img src = '"+controller.model.imgPath+"/"+controller.model.activeAct+"/drag_bg.png"+"'/>"+
                "</div>"
            );

            this.tragetBg = 
            $(
                "<div id='act6_game_target_bg_contain'>"+
                    "<div id='act6_game_target1'>"+
                        "<div>"+
                            "<p class='font_embed'></p>"+
                        "</div>"+
                        "<span></span>"+
                    "</div>"+
                    "<div id='act6_game_target2'>"+
                        "<div>"+
                        "<p class='font_embed'></p>"+
                        "</div>"+
                        "<span></span>"+
                    "</div>"+
                    "<img src = '"+controller.model.imgPath+"/"+controller.model.activeAct+"/target_bg.png"+"'/>"+
                "</div>"
            );

            this.drag.hide();
            this.tragetBg.hide();
            $("#gameContainer").append(this.drag);
            $("#gameContainer").append(this.tragetBg);
            this.drag.append(this.dragBg);

            for(i=0;i<6;i++){
                this.drag.find("div:nth-child("+(i+1)+")").on("mousedown",$.proxy(this.onMouseDown, this));
            }

            $("body").attr("ondragstart","return false");
            $("body").attr("onselectstart","return false");

            var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/howToPlay";
            controller.characterManager.onCharacterPlay("speek", controller.characterManager.elly, url, $.proxy(function(){
                this.setQuiz();
            },this), true);// 동작 타입, 움직을 케릭터, 음성 경로
        },

        soundButtonClick : function(e){
            var url = "";
            var num = "";
            
            switch(e.target.id){
                case "act6_s_sound" :
                switch(e.type){
                    case "click" :
                    num =  this.data[3*this.quizMain_Num].ques_num;
                    url = controller.model.soundPath +controller.model.activeAct+"/"+controller.model.activeLevel+"/sentence/set"+controller.model.quizSetNum+"/"+num;
                    controller.soundManager.init(url,true);
                    break;
    
                    case "mouseover" :
                    this.sentanceSoundButton.attr("src",controller.model.imgPath+"/"+controller.model.activeAct+"/sRepaly_over.png");
                    break;
    
                    case "mouseout" :
                    this.sentanceSoundButton.attr("src",controller.model.imgPath+"/"+controller.model.activeAct+"/sRepaly.png");
                    break;
                }
                
                break;

                case "act6_q_sound" :
                switch(e.type){
                    case "click" :
                    num =  this.data[(this.quiz_num[this.quizMain_Num])+(this.quizMain_Num*3)].ques_num;
                    url = controller.model.soundPath +"/"+controller.model.activeAct+"/"+controller.model.activeLevel+ "/quiz/set"+controller.model.quizSetNum+"/"+num+"/"+(this.quiz_num[this.quizMain_Num]+1);
                    controller.soundManager.init(url,true);
                    break;
    
                    case "mouseover" :
                    this.quizSoundButton.attr("src",controller.model.imgPath+"/"+controller.model.activeAct+"/qRepaly_over.png");
                    break;
    
                    case "mouseout" :
                    this.quizSoundButton.attr("src",controller.model.imgPath+"/"+controller.model.activeAct+"/qRepaly.png");
                    
                    break;
                }
                
                break;
            }
        },

        onPageListener : function(e){
            console.log(e.target.id);
            $("#act6_game_drag_contain").fadeOut();
            switch(e.target.id){
                case "act6_nextButton" :
                if(this.allClear && this.quizMain_Num == 2){
                    controller.dataManager.loadLog("end",{"quizNum":controller.model.quizSetNum,"yes_cnt":"1","fail_cnt":"1","yes_yn":"Y"},$.proxy(function(){
                        controller.animationManager.coin.init();
                    },this),true);
                    
                    return;
                }
                if(this.quizMain_Num < 2){
                    this.quizMain_Num++;
                    this.answerSet();
                    this.prevButton.show();
                    if(this.quizMain_Num == 2 && !this.allClear)this.nextButton.hide();
                }
                console.log(this.quizMain_Num);
                break;

                case "act6_prevButton" :
                if(this.quizMain_Num > 0){
                    this.nextButton.show();
                    this.quizMain_Num--;
                    console.log(this.quizMain_Num);
                    if(this.quizMain_Num == 0) this.prevButton.hide();
                    this.answerSet();
                }
                break;
            }
        },
        onMouseDown : function(e){
            console.log($(e.target).html());
            console.log("e.currentTarget.id"+e.currentTarget.id);
            var data = this.data;
            var num =  data[(this.quiz_num[this.quizMain_Num])+(this.quizMain_Num*3)].ques_num;
            console.log(parseInt($(e.target).attr("code"))+(this.quiz_num[this.quizMain_Num] * 3)+(this.quizMain_Num*9));
            var url = controller.model.soundPath +"/"+controller.model.activeAct+"/"+controller.model.activeLevel+ "/example"+$(e.target).attr("example")+"/set"+controller.model.quizSetNum+"/"+(parseInt($(e.target).attr("code"))+(this.quiz_num[this.quizMain_Num] * 3)+parseInt(parseInt(num-1)*9)); // 0,9,18 
            controller.soundManager.init(url); //경로.
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
                        if(controller.hitTestManager.onHitTest(obj)){
                            console.log("힛트.");
                            console.log(obj.drag.html());
                            
                            obj.drag.hide();
                            obj.target.find("p").html(obj.drag.html());
                            console.log(obj.type);
                            console.log(obj.target.attr("id"));
                            if("act6_game_target1" == obj.target.attr("id")){
                                if(this.prevDragItem1 != null) this.prevDragItem1.show();
                                this.prevDragItem1 = obj.drag;
                            } 
                            if("act6_game_target2" == obj.target.attr("id")){
                                if(this.prevDragItem2 != null) this.prevDragItem2.show();
                                this.prevDragItem2 = obj.drag;
                            } 
                            console.log(obj.drag);
                            // obj.drag.show();
                            for(i=0;i<this.drag.find(".drag_icon").length;i++){
                                if(this.drag.find(".drag_icon:nth-child("+(i+1)+")").attr("id") == this.item){
                                    this.drag.find(".drag_icon:nth-child("+(i+1)+")").animate({"left":this.exampleArr[i].x+"px","top":this.exampleArr[i].y+"px"},{
                                        duration: 800,
                                        specialEasing: {
                                            top: "easeOutExpo",
                                            left: "easeOutExpo"
                                        }
                                    });
                                }
                            }

                            this.prevDragItem = obj.drag;

                            if($("#act6_game_target_bg_contain div:nth-child(1) p").html() != "" && $("#act6_game_target_bg_contain div:nth-child(2) p").html() != ""){
                                console.log(obj.drag);
                                this.answerSentencecheck(obj.drag); // 문장의 정답 체크.
                            }else{
                                
                            }
                        }else{
                            count++;
                        }
                    }

                    if(count == 2){
                        console.log("not hit!!");
                        for(i=0;i<this.drag.find(".drag_icon").length;i++){
                            if(this.drag.find(".drag_icon:nth-child("+(i+1)+")").attr("id") == this.item){
                                this.drag.find(".drag_icon:nth-child("+(i+1)+")").animate({"left":this.exampleArr[i].x+"px","top":this.exampleArr[i].y+"px"},{
                                    duration: 800,
                                    specialEasing: {
                                        top: "easeOutExpo",
                                        left: "easeOutExpo"
                                    }
                                });
                            }
                        }
                    }

                break;

                case "mousemove" :
                    var leftmargin = $("#root")[0].offsetLeft * controller.fullScreenModul.scaleW;
                    var h = $("#"+this.item)[0].clientHeight * controller.fullScreenModul.scaleH;
                    var w = $("#"+this.item)[0].clientWidth * controller.fullScreenModul.scaleW;
                    $("#"+this.item).css({"top":(e.clientY-(h/2)) / controller.fullScreenModul.scaleH,"left":(e.clientX-(w/2)-(leftmargin)) / controller.fullScreenModul.scaleW});
                break;
            }
        },
        answerSentencecheck : function(value){
            this.prevDragItem1 = null;
            this.prevDragItem2 = null;
            this.tragetBg.find("div");
            var text = this.tragetBg.find("div:nth-child(1) p").html().split(' ').join('')+this.tragetBg.find("div:nth-child(2) p").html().split(' ').join('')
            if(text != this.answerText.split(' ').join('')){
                //오답
                console.log("오답 오답 오답 오답 오답 *************************************.");
                url = controller.model.soundPath + controller.model.activeAct+"/character/wrong/" + parseInt(Math.random()*6 + 1);
                controller.characterManager.onCharacterPlay("wrong"+parseInt(Math.random()*3 + 1),controller.characterManager.elly,url, $.proxy(function(){
                    for(var k=0;k<this.tragetBg.find("div").length;k++){
                        this.tragetBg.find("div:nth-child("+(k+1)+") p").html("");
                    }
                    //this.quiz_num[this.quizMain_Num] = this.prev_quiz_start;
                    value.show();
                    $("#act6_game_drag_contain .drag_icon").show();
                },this)); //경로.
                return;
            }
            //정답.
            console.log("정답 정답 정답 정답 정답*************************************.");
            var str = this.tragetBg.find("div:nth-child(1)>div>p").text()+" "+this.tragetBg.find("div:nth-child(2)>div>p").text();
            this.tragetBg.find("div:nth-child(2)>div>p").text("");
            this.tragetBg.find("span").hide();
            this.tragetBg.find("div:nth-child(1)>div>p").text(str);
            this.tragetBg.find("div:nth-child(1)").css("width","640px");
            
            url = controller.model.soundPath + controller.model.activeAct+"/character/right/" + parseInt(Math.random()*5 + 1);
            controller.characterManager.onCharacterPlay("win"+parseInt(Math.random()*3 + 1),controller.characterManager.elly,url, $.proxy(function(){
                var num =  this.data[(this.quiz_num[this.quizMain_Num])+(this.quizMain_Num*3)].ques_num;
                var url = controller.model.soundPath +"/"+controller.model.activeAct+"/"+controller.model.activeLevel+ "/answer/set"+controller.model.quizSetNum+"/"+num+"/"+(this.quiz_num[this.quizMain_Num]+1);
                controller.soundManager.init(url,true,$.proxy(function(){
                    this.quiz_num[this.quizMain_Num]++;
                    this.prev_quiz_start = this.quiz_num[this.quizMain_Num];
                    this.answerArr = [];
                    controller.block.init();
                    if(this.quiz_num[this.quizMain_Num] < 3){ // 퀴즈가 3번쨰 이전이면 다음 문제 셋팅 
                        this.onInterval($.proxy(function(){
                            controller.block.allRemove();
                            for(var k=0;k<this.tragetBg.find("div").length;k++){
                                this.tragetBg.find("div:nth-child("+(k+1)+")>div>p").html("");
                            }
                            value.show();
                            this.exampleSet();
                        },this));
                    }else {
                        this.onInterval($.proxy(function(){
                            controller.block.allRemove();
                            for(var k=0;k<this.tragetBg.find("div").length;k++){
                                this.tragetBg.find("div:nth-child("+(k+1)+")>div>p").html("");
                            }
                            var url = controller.model.soundPath + "success";
                            controller.soundManager.init(url,true,$.proxy(function(){
                                value.show();
                                var url = controller.model.soundPath +controller.model.activeAct+"/"+controller.model.activeLevel+"/sentence/set"+controller.model.quizSetNum+"/"+num;
                                controller.soundManager.init(url,true,$.proxy(function(){
                                    
                                },this),true);
                                $("#img_block").hide();
        
                                // this.book.find(".textAnswer").fadeIn();
                                // this.book.find(".imgContain").fadeIn();
        
                                this.sentanceSoundButton.hide();
                                this.quizSoundButton.hide();
        
        
                                $("#act6_game_drag_contain").fadeOut();
                                // this.quiz_num[this.quizMain_Num] = 2;
                                this.clearArr[this.quizMain_Num] = true;
        
                                if(this.clearArr[0] == true && this.clearArr[1] == true && this.clearArr[2] == true){ // 게임 끝.
                                    this.allClear = true;
                                    this.onFinish();
                                }
                            },this));
                            
                        },this));
                        
                    }
                },this)); //경로.
            },this),true); //경로.
        },
        onStageSetting : function(){
            //quiz 데이터가 다 들어오면 실행되는 함수.
            console.log(controller.model.quizData);
            controller.model.quizSetNum = controller.model.quizData.result[0].act_quest[0].set_num;
            this.totalQuizNum = controller.model.quizData.result[0].act_quest.length;
            this.inbookAni();
        },
        
        
        inbookAni : function(){
            //book 들어오는 애니메이션 들어올때 문장 셋팅.

            this.book.animate({"top":100+"px","left":150+"px"},
            {
                duration: 1000,
                specialEasing: {
                    top: "easeOutExpo"
                },complete: $.proxy(animateCalback,this)
            });

            function animateCalback(){
                this.answerSet()
            }

            // this.answerSet(); //북 셋팅.
        },
        rightbookAni : function(){
            //화면우측으로 셋팅.
            console.log("book left motion-----");
            if(this.book.css("left") != "20px" && this.book.css("top") != "10px"){
                this.book.animate({"left":20+"px","top":10+"px"},
                {
                    duration: 1000,
                    specialEasing: {
                        left: "easeOutExpo",
                        top: "easeOutExpo"
                    },complete: $.proxy(animateCalback,this)
                });
    
                function animateCalback(){
                    this.exampleSet(); // 오른쪽으로 움직인후 문제 셋팅
                }
            }else{
                this.exampleSet();
            }
            
        },
        exampleSet : function(){
            $("#act6_game_drag_contain").fadeIn();
            var data = controller.model.quizData.result[0].act_quest;
            this.data = data;
            $("#act6_game_drag_contain .drag_icon").show();
            this.tragetBg.find("span").show();
            this.tragetBg.find("div:nth-child(1)").css("width","300px");
            var example1 = data[(this.quiz_num[this.quizMain_Num])+(this.quizMain_Num*3)].example1;
            this.answerText = data[(this.quiz_num[this.quizMain_Num])+(this.quizMain_Num*3)].sentence2;
            var arr = String(example1).split("|");
            this.answerArr.push(arr[0]);
            if(arr.length == 1) arr = String(example1).split(",");
            var quizArr1 = [];
            for(var i=0;i<arr.length;i++){
                quizArr1.push({"example":arr[i],"code":(i+1)});
            }
            quizArr1 = randomArray.getRandomArray(quizArr1);

            var example2 = data[(this.quiz_num[this.quizMain_Num])+(this.quizMain_Num*3)].example2;
            var arr2 = String(example2).split("|");
            this.answerArr.push(arr2[0]);

            console.log("정답 : "+ this.answerText);
            developerTrace.trace("정답 : "+this.answerText);
            
            if(arr2.length == 1) arr2 = String(example2).split(",");
            var quizArr2 = [];
            for(i=0;i<arr2.length;i++){
                quizArr2.push({"example":arr2[i],"code":(i+1)});
            }
            quizArr2 = randomArray.getRandomArray(quizArr2);
            var quizArr = [];
            for(i=0;i<quizArr1.length;i++){
                quizArr.push(quizArr1[i]);
            }

            for(i=0;i<quizArr2.length;i++){
                quizArr.push(quizArr2[i]);
            }
            this.hitObj = [];
            for(i=0;i<2;i++){
                var obj = {};
                obj.target = $("#act6_game_target"+(i+1));
                obj.type = true;
                obj.id = "act6_game_target"+(i+1);
                this.hitObj.push(obj);
            }
            console.log(this.hitObj);
            for(i=0;i<quizArr.length;i++){
                this.drag.find(".drag_icon:nth-child("+(i+1)+")").html(quizArr[i].example);
                this.drag.find(".drag_icon:nth-child("+(i+1)+")").addClass("font_embed");
                this.drag.find(".drag_icon:nth-child("+(i+1)+")").attr("id","drag_"+i);
                this.drag.find(".drag_icon:nth-child("+(i+1)+")").attr("code",quizArr[i].code);
                this.drag.find(".drag_icon:nth-child("+(i+1)+")").attr("example",(parseInt(i/3)+1));
                this.drag.find(".drag_icon:nth-child("+(i+1)+")").css({"left":this.exampleArr[i].x,"top":this.exampleArr[i].y});
            }
            this.drag.fadeIn();
            this.tragetBg.fadeIn();

            var url = controller.model.soundPath + "success";
            controller.soundManager.init(url,true,$.proxy(function(){
                var num =  this.data[(this.quiz_num[this.quizMain_Num])+(this.quizMain_Num*3)].ques_num;
                var url = controller.model.soundPath +"/"+controller.model.activeAct+"/"+controller.model.activeLevel+ "/quiz/set"+controller.model.quizSetNum+"/"+num+"/"+(this.quiz_num[this.quizMain_Num]+1);
                controller.soundManager.init(url,true); //경로.
            },this));

            

        },
        answerSet : function(){
            console.log("answerSet==============================")
            console.log(this.quiz_num);
            console.log(this.quizMain_Num);
            this.book.find(".textAnswer").off("click");
            this.answerArr = [];
            var data = controller.model.quizData.result[0].act_quest;
            this.data = data;
            var questionText = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data[this.quizMain_Num*3].sentence; // 0,3,6
            
            this.book.find(".textAnswer").html(questionText).find("p").addClass("font_embed");
            var num =  data[3*this.quizMain_Num].ques_num;
            this.book.find(".imgContain").attr("src",controller.model.imgPath+"/"+controller.model.activeAct+"/illust/"+controller.model.activeLevel+"/set"+controller.model.quizSetNum+"/"+num+".png");
            // this.book.find(".textAnswer").fadeIn();
            // this.book.find(".imgContain").fadeIn();
            

            this.book.find(".textAnswer").on("click",$.proxy(function(){
                var url = controller.model.soundPath +controller.model.activeAct+"/"+controller.model.activeLevel+"/sentence/set"+controller.model.quizSetNum+"/"+num;
                controller.soundManager.init(url,true,null,true);
            },this)).css("cursor","pointer");

            var isSkip = false;
            if(this.quiz_num[this.quizMain_Num] < 3 && this.clearArr[this.quizMain_Num] == false){ // 3문제 다 맞췃을때는 문제 셋팅을 안한다.
                
                $("#img_block").show();
                this.sentanceSoundButton.fadeIn();
                this.quizSoundButton.fadeIn();
            }else{
                isSkip = true;
                this.sentanceSoundButton.hide();
                this.quizSoundButton.hide();
                $("#img_block").hide();
                // 
            }

            console.log("isSkip = "+ isSkip)
            var url = controller.model.soundPath +controller.model.activeAct+"/"+controller.model.activeLevel+"/sentence/set"+controller.model.quizSetNum+"/"+num;
            controller.soundManager.init(url,true,$.proxy(function(){
                if(this.book.css("left") != "20px" && this.book.css("top") != "10px" && this.allClear == false){
                    if(this.quizMain_Num == 0) this.rightbookAni();
                }
                console.log(this.quizMain_Num + "  // quizMain_Num")
                console.log(this.quiz_num[this.quizMain_Num] + "  // 3문제 다 맞췃을때는 문제 셋팅을 안한다.")
                if(this.quiz_num[this.quizMain_Num] < 3 && this.clearArr[this.quizMain_Num] == false){ // 3문제 다 맞췃을때는 문제 셋팅을 안한다.
                    if(this.quizMain_Num > 0){
                        this.exampleSet();
                    }else{
                        if(this.book.css("left") == "20px" && this.book.css("top") == "10px"){
                            this.exampleSet();
                        }
                    }
                }else{
                    this.book.find(".textAnswer").show();
                    this.book.find(".imgContain").show();
                }
            },this),isSkip);
        },
        onInterval : function(f){
            this.interval = setTimeout(f,2000);
        },
        onClearInterval : function(){
            console.log("clear Interval");
            clearTimeout(this.interval);
        },
        setQuiz : function(){
            console.log("퀴즈 셋팅 함수 JSON DATA LOAD");
            controller.onLoadQuiz();
        },
        onHomeListener : function(e){
            switch(e.target.id){
                case "completeButton" :
                this.onFinish();
                break;
            }
        },
        onReset : function(){
            controller.block.allRemove();
            this.quiz_num = [0,0,0]; // 전체 퀴즈 진행 넘버
            this.prev_quiz_start = 0;
            this.quizMain_Num = 0;
            this.allClear = false;
            this.clearArr = [false,false,false];
            controller.model.activeQuizSetNum = 1;
            this.testButtons.remove();
            
        },
        goToView1 : function(){
            var url = "";
            if(controller.model.globalSetNum == 6){
                url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/letsgo";
                controller.soundManager.init(url,true,$.proxy(function(){
                    controller.loadFinditemGame("data");
                },this)); //경로.
            }else{
                $(window).trigger("result_go_back_act6");
                this.onReset();
                controller.characterManager.resetAni();
                controller.animationManager6.resetAni();
                $("#gameContainer").html("");
                controller.onloadAct6("data");
            }
        },
        onCoinAniEnd : function(){
            var num;
            if(controller.model.activeLevel == "Easy") num = 1;
            if(controller.model.activeLevel == "Medium") num = 2;
            if(controller.model.activeLevel == "Hard") num = 3;
            controller.model.globalSetNum = parseInt(controller.model.globalSetNum) + 1;
            controller.globalUI.setCount.find("img").attr("src",controller.model.imgPath+"ui/set"+controller.model.globalSetNum+".png");
            $("#pointPanel").find("span").html(parseInt(controller.model.coin)+num);
            var url = "";
            // this.nextButton.show();
            url = controller.model.soundPath + controller.model.activeAct+"/character/finish";
            controller.characterManager.onCharacterPlay("speek",controller.characterManager.elly,url, $.proxy(function(){
                this.goToView1();
            },this),true); //경로.
        },
        onFinish : function(){
            console.log("onFinish");
            this.quiz_num = [3,3,3];
            this.clearArr = [true,true,true];
            this.allClear = true;
            $("#act6_game_drag_contain").fadeOut();
            $("#act6_game_target_bg_contain").fadeOut();
            this.nextButton.show();
            this.book.animate({"top":100+"px","left":150+"px"},
            {
                duration: 1000,
                specialEasing: {
                    top: "easeOutExpo",
                    left: "easeOutExpo"
                }
            });
            
        },
    };
    exports.Activity6Game = Activity6Game;
})(this);