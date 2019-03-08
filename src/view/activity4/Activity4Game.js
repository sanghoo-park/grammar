(function(exports){
    function Activity4Game(){
        $(window).on("act4_siren_Click", $.proxy(this.answerSentencecheck,this));
        
        this.exampleArr = [{x:106,y:460},{x:437,y:460},{x:584,y:460}];
        this.answerArr = [];
        this.resultArr = [];
    }

    Activity4Game.prototype = {
        initialize : function(){

        },
        updateView : function(){
            
            this.quiz_num = 1; // 전체 퀴즈 진행 넘버
            this.prev_quiz_num = 1; //이전 퀴즈 번호.
            this.quiz_sub_num = 1; // 한문제당 진행되는 드래그 순번. 빈칸순서대로 루프 ex)1 2 3 반복
            this.prev_quiz_start = 1;
            this.exampleNum = 0; //문제 음성 플레이 넘버.
            
            var bg = $('<div class="act4_background_bg" style="z-index: -1;background:url(./asset/img/act4/bg2.png);position:absolute;width:1000px; height:630px;"></div>');
            $("#gameContainer").append(bg);
            var completeBtn = $("<button id='completeButton'>COMPLETE</button>");
            this.testButtons = $("<div class='testButtons'></div>");
            testModule.testButtonInit(this.testButtons);
            this.testButtons.append(completeBtn);
            completeBtn.on("click",$.proxy(this.onHomeListener,this));
            this.car = 
            $(
                "<div id='act4_game_car_contain'>"+
                    "<canvas id='ani_canvas_act4_siren' width='290' height='140' style='position:absolute'></canvas>"+
                    "<img class='fire_car' src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/car.png"+"' />"+
                    "<div class='door_img_contain'>"+
                        "<img class='left_door' src = '"+controller.model.imgPath+"/"+controller.model.activeAct+"/leftDoor.png"+"' />"+
                        "<img class='right_door' src = '"+controller.model.imgPath+"/"+controller.model.activeAct+"/rightDoor.png"+"' />"+
                    "</div>"+
                    
                    "<div id='textContain'>"+
                        "<div id='act4_text_click'></div>"+
                        "<p class='textAnswer font_embed'>"+
                        "</p>"+
                        "<div class='drag_text'>"+
                            "<div><p></p></div>"+
                            "<div><p></p></div>"+
                            "<div><p></p></div>"+
                        "</div>"+
                    "</div>"+
                "</div>"
            );
            $("#gameContainer").append(this.car);
            controller.animationManager4.siren.init("ani_canvas_act4_siren");   
            this.isDrag = true;
            for(i=0;i<3;i++){
                this.car.find(".drag_text div:nth-child("+(i+1)+")").on("mousedown",$.proxy(this.onMouseDown, this));
            }
            $("body").attr("ondragstart","return false");
            $("body").attr("onselectstart","return false");
            
            var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/howToPlay";
            controller.soundManager.init(url,true,$.proxy(function(){
                this.setCharater();
                this.setQuiz();
            },this)); //경로.

            $("#act4_text_click").on("click",$.proxy(this.textClick,this));
            
        },
        textClick : function(e){
            console.log("click");
            var data = controller.model.quizData.result[0].act_quest;
            var ques_num = data[this.quiz_num-1].ques_num;
            var url = controller.model.soundPath +controller.model.activeAct+"/example/"+controller.model.activeLevel+"/set"+controller.model.quizSetNum+"/"+ques_num;
            controller.soundManager.init(url,true); //경로.
        },

        

        inAniCar : function(){
                var url = controller.model.soundPath + "act4/carStop";
                controller.effectManager.init(url); //경로.
                this.car.animate({"left":110+"px"},
                {
                    duration: 3000,
                    specialEasing: {
                        left: "easeOutExpo"
                    },complete: $.proxy(animateCalback,this)
                });
    
                function animateCalback(){
                    for(var i=0;i<this.quizArr.length;i++){
                        textColorAni.init(this.car.find(".drag_text div:nth-child("+(i+1)+")"));
                    }
                    var data = controller.model.quizData.result[0].act_quest;
                    var ques_num = data[this.quiz_num-1].ques_num;
                    var url = controller.model.soundPath +controller.model.activeAct+"/example/"+controller.model.activeLevel+"/set"+controller.model.quizSetNum+"/"+ques_num;
                    controller.soundManager.init(url,true); //경로.
                }
            
        },
        outAniCar : function(){
            $("#act4_text_click").off("click");
            $("#act4_text_click").on("click",$.proxy(this.textClick,this));
            controller.animationManager4.siren.onPlaySiren("siren_out");
            this.car.animate({"left":-1100+"px"},
            {
                duration: 3000,
                specialEasing: {
                    left: "easeOutExpo"
                },complete: $.proxy(animateCalback,this)
            });
    
            function animateCalback(){
                this.car.css("left","1100px");
                this.answerSet();
            }
        },
        setCharater : function(){
            console.log("------------------------------setCharater---------------------------------")
            var characterCanvas = $("<canvas id='ani_canvas_fire' width='250' height='135' style='position:absolute;'></canvas>");
            // var characterContain = $("<div id ='charater_contian_fire' style='position:absolute;top:0;left:0;width:250;height:200'></div>"); //케릭터 애니 담을 컨테인
            this.car.append(characterCanvas);
            // characterContain.append(characterCanvas);
            var arr = [];
            arr.push(new Object({
                character:controller.characterManager.fireMan2,
                x : 120,
                y : 171,
            }));
            
            controller.characterManager.onSetChrater("ani_canvas_fire",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 
        },
        onMouseDown : function(e){
            if(this.isDrag){
                console.log($(e.target).html());
                this.item = e.currentTarget.id;
                var h = $(e.target)[0].clientHeight;
                var w = $(e.target)[0].clientWidth;
                $(e.currentTarget).off("mousedown",this.onMouseDown);
                $("body").on("mouseup",$.proxy(this.onMouseMove,this));
                $("body").on("mousemove",$.proxy(this.onMouseMove,this));
            }
            
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
                        obj.drag = $("#"+this.item);
                        obj.target = $("#"+this.hitObj.id);
                        obj.dL = $("#act4_game_car_contain")[0].offsetLeft;
                        obj.dT = $("#act4_game_car_contain")[0].offsetTop;
                        obj.tL = $("#act4_game_car_contain")[0].offsetLeft + $(".textAnswer")[0].offsetLeft;
                        obj.tT = $("#act4_game_car_contain")[0].offsetTop + $(".textAnswer")[0].offsetTop;
                        console.log($("#"+this.item));
                        console.log($("#"+this.hitObj.id));
                        obj.type = true;
                        if(controller.hitTestManager2.onHitTest(obj)){
                            console.log("hit~~!!");
                            var url = controller.model.soundPath + "objectmove";
                            controller.effectManager.init(url); //경로.
                            obj.drag.hide();
                            obj.target.find("p").html(String(obj.drag.text()).replace("-",""));
                            this.car.find(".textAnswer span:nth-child("+this.quiz_sub_num+")").removeClass("act4_line_ani");
                            this.car.find(".textAnswer span:nth-child("+this.quiz_sub_num+")").finish();
                            this.car.find(".textAnswer span:nth-child("+this.quiz_sub_num+")").css("color","black");
                            if(this.data.length > this.quiz_num){
                                if(this.prev_quiz_num == this.data[this.quiz_num].ques_num){//이전 퀴즈번호랑 현제 퀴즈번호가 같으면
                                    this.quiz_num++; // 전체 퀴즈 진행 넘버
                                    this.quiz_sub_num++; //다음 문제.
                                    obj.drag.show();
                                    this.car.find(".textAnswer span:nth-child("+this.quiz_sub_num+")").addClass("act4_line_ani");
                                    this.textColorAnimate();
                                    this.exampleSet();
                                }else{
                                    this.isDrag = false;
                                    // for(i=0;i<3;i++){
                                    //     this.car.find(".drag_text div:nth-child("+(i+1)+")").off("mousedown",$.proxy(this.onMouseDown, this));
                                    // }
                                }
                            }else{
                                 
                            }
                            
                            
                        }else{
                            console.log("오답");
                            for(var i=0;i<this.car.find(".drag_text div").length;i++){
                                if(this.car.find(".drag_text div:nth-child("+(i+1)+")").attr("id") == this.item){
                                    this.car.find(".drag_text div:nth-child("+(i+1)+")").animate({"left":this.exampleArr[i].x+"px","top":this.exampleArr[i].y+"px"},{
                                        duration: 800,
                                        specialEasing: {
                                            top: "easeOutExpo",
                                            left: "easeOutExpo"
                                        }
                                    });
                                }
                            }
                            // this.dragIcon.animate({top:'555px',left:this.dragIconLeft});
                        }
                break;

                case "mousemove" :
                    var leftmargin = $("#root")[0].offsetLeft * controller.fullScreenModul.scaleW;
                    var h = $("#"+this.item)[0].clientHeight * controller.fullScreenModul.scaleH;
                    var w = $("#"+this.item)[0].clientWidth * controller.fullScreenModul.scaleW;
                    $("#"+this.item).css({"top":((e.clientY-(h/2) - ($("#act4_game_car_contain")[0].offsetTop) * controller.fullScreenModul.scaleH)) / controller.fullScreenModul.scaleH,"left":((e.clientX-(w/2)-leftmargin - ($("#act4_game_car_contain")[0].offsetLeft) * controller.fullScreenModul.scaleW)) / controller.fullScreenModul.scaleW});
                break;
            }
        },

        textColorAnimate : function(){
            $(".act4_line_ani").animate({"color":"red"},$.proxy(function(){
                $(".act4_line_ani").animate({"color":"black"},$.proxy(this.textColorAnimate,this));
            },this));
        },

        answerSentencecheck : function(){
            console.log("act4_siren_Click act4_siren_Click act4_siren_Click")
            controller.block.init();
            this.car.find(".textAnswer span:nth-child("+this.quiz_sub_num+")").removeClass("act4_line_ani");
            this.car.find(".textAnswer span:nth-child("+this.quiz_sub_num+")").finish();
            this.car.find(".textAnswer span:nth-child("+this.quiz_sub_num+")").css("color","black");
            this.quiz_sub_num=1;//정답 체크후 다음 문제 or 다시 문제 셋팅.
            for(var i=0;i<this.car.find(".textAnswer span").length;i++){
                console.log(this.car.find(".textAnswer span:nth-child("+(i+1)+") p").html()+ "//" +this.answerArr[i]);
                if(this.car.find(".textAnswer span:nth-child("+(i+1)+") p").html().split(' ').join('') != this.answerArr[i].split(' ').join('')){
                    //오답
                    this.answerArr = [];
                    console.log("빈칸의 단어가 틀렸음.");
                    url = controller.model.soundPath + controller.model.activeAct+"/character/wrong/" + parseInt(Math.random()*5 + 1);
                    controller.characterManager.onCharacterPlay("wrong",controller.characterManager.fireMan2,url, $.proxy(function(){
                        for(var k=0;k<this.car.find(".textAnswer span").length;k++){
                            this.car.find(".textAnswer span:nth-child("+(k+1)+") p").html("");
                        }
                        this.quiz_num = this.prev_quiz_start;
                        $(".drag_text div").show();
                        this.car.find(".textAnswer span:nth-child(1)").addClass("act4_line_ani");
                        this.textColorAnimate();
                        this.exampleSet();
                        
                    },this)); //경로.
                    return;
                    break;
                }
            }
            //정답.
            console.log("빈칸의 단어가 맞음.");
            controller.animationManager4.siren.onPlaySiren("siren");
            for(var i=0;i<this.car.find(".textAnswer span").length;i++){
                this.car.find(".textAnswer span:nth-child("+(i+1)+")").html("<span>"+this.car.find(".textAnswer span:nth-child("+(i+1)+")").text().replace(/\_/g, "")+"</span>");  
                this.car.find(".textAnswer span:nth-child("+(i+1)+") span").addClass("act4_red");  
            }
            if(controller.model.activeLevel == "Hard"){
                this.car.find(".act4_red").css("font-size","12pt");
                this.car.find(".font_embed_line").css("font-size","14pt");
            }else{
                this.car.find(".act4_red").css("font-size","14pt");
                this.car.find(".font_embed_line").css("font-size","16pt");
            }
            url = controller.model.soundPath + controller.model.activeAct+"/character/right/" + parseInt(Math.random()*5 + 1);
            controller.characterManager.onCharacterPlay("win",controller.characterManager.fireMan2,url, $.proxy(function(){
                this.answerArr = [];
                var ques_num = this.data[this.quiz_num-1].ques_num;
                var url = controller.model.soundPath +controller.model.activeAct+"/answer/"+controller.model.activeLevel+"/set"+controller.model.quizSetNum+"/"+ques_num;
                $("#act4_text_click").off("click",$.proxy(this.textClick,this));
                $("#act4_text_click").on("click",$.proxy(function(){
                    this.quiz_num++;
                    this.prev_quiz_start = this.quiz_num;
                    $(".drag_text div").show();
                    this.outAniCar();
                },this));
                controller.soundManager.init(url,true,$.proxy(function(){
                    this.resultArr.push(this.data[this.quiz_num-1].sentence);
                    if(this.data.length == this.quiz_num){
                        //마지막 그림 보여주고 워드 종합 해서 보여주고나서 다음으로 
                        setTimeout($.proxy(this.onShowPopup,this),2000);
                        // this.onNextView();
                    }else{
                        this.quiz_num++;
                        this.prev_quiz_start = this.quiz_num;
                        $(".drag_text div").show();
                        //car 아웃 하고 나서 
                        
                        this.outAniCar();
                    }
                },this),true); //경로.
            },this)); //경로.
        },
        onResultClick : function(e){
            console.log(e.target.id);
            var url = "";
            switch(e.target.id){
                case "act4_resultnote_0" :
                url = controller.model.soundPath +controller.model.activeAct+"/answer/"+controller.model.activeLevel+"/set"+controller.model.quizSetNum+"/1";
                break;
                
                case "act4_resultnote_1" :
                url = controller.model.soundPath +controller.model.activeAct+"/answer/"+controller.model.activeLevel+"/set"+controller.model.quizSetNum+"/2";
                break;
                
                case "act4_resultnote_2" :
                url = controller.model.soundPath +controller.model.activeAct+"/answer/"+controller.model.activeLevel+"/set"+controller.model.quizSetNum+"/3";
                break;
            }
            controller.soundManager.init(url,true); //경로.
        },
        onShowPopup : function(){
            controller.block.allRemove();
            var url = controller.model.soundPath + "act4/openDoor";
            controller.effectManager.init(url); //경로.

            var str = "";
            for(var i=0;i<this.resultArr.length;i++){
                str = str+"<div id='act4_resultnote_"+i+"'>&nbsp;&nbsp;&nbsp;"+this.resultArr[i]+"</div><br>";
                
            }


            this.data = controller.model.quizData.result[0].act_quest;
            var data = this.data;
            var url = controller.model.soundPath +controller.model.activeAct+"/"+controller.model.activeLevel+"/sentence/result/"+controller.model.quizSetNum;
            controller.soundManager.init(url,true,$.proxy(function(){
                url = controller.model.imgPath+"/common/nextbutton.png";
                var nextButton = $("<img id='act4_next_button' src='"+url+"' />");
                $("#gameContainer").append(nextButton);
                nextButton.on("mouseover",function(e){
                    nextButton.attr("src",controller.model.imgPath+"/common/nextbutton_over.png")
                });

                nextButton.on("mouseout",function(e){
                    nextButton.attr("src",controller.model.imgPath+"/common/nextbutton.png")
                });

                nextButton.on("click",$.proxy(function(e){
                    this.onNextView();
                },this));
            },this)); //경로.


            url = controller.model.imgPath+"/"+controller.model.activeAct+"/result/"+controller.model.activeLevel+"/"+controller.model.quizSetNum;
            var img = $("<img class = 'act4_result_img' src='"+url+".png' />").css({"margin-left":"50px", "width":"400px","height":"272px"});
            url = controller.model.imgPath+"/"+controller.model.activeAct+"/note.png";
            var img2 = $("<div class = 'act4_result_note'><img src='"+url+"' /><div id='act4_result_note_text_contain'><span class='font_embed'>"+str+"</span></div></div>");
            $(".door_img_contain").prepend(img);
            $("#gameContainer").append(img2);
            img2.css("right","-260px");
            img2.animate({"right":"10px"},
            {
                duration: 1000,
                specialEasing: {
                    right: "easeOutExpo"
                }
            });
            $("#act4_game_car_contain").find("#textContain").fadeOut(100);
            $(".door_img_contain").find(".left_door").animate({"left":"-200px"},
            {
                duration: 3000,
                specialEasing: {
                    left: "easeOutExpo"
                }
            });

            this.car.animate({"left":10+"px"},
            {
                duration: 1000,
                specialEasing: {
                    left: "easeOutExpo"
                }
            });


            $(".door_img_contain").find(".right_door").animate({"left":"450px"},
            {
                duration: 3000,
                specialEasing: {
                    left: "easeOutExpo"
                },complete: $.proxy(animateCalback,this)
            });
            for(i=0;i<3;i++){
                $("#act4_resultnote_"+i).on("click",$.proxy(this.onResultClick,this));
            }
            function animateCalback(){
                
            }
        },
        onStageSetting : function(){
            //quiz 데이터가 다 들어오면 실행되는 함수.
            console.log(controller.model.quizData);
            this.totalQuizNum = controller.model.quizData.result[0].act_quest.length;
            this.inCarAni();
        },
        onReset : function(){
            console.log("act 4 reset");
            controller.soundManager.init("");
            controller.block.allRemove();
            if(this.car != null){
                this.car.clearQueue();
                this.car.stop();
            } 
            
            this.quiz_num = 1; // 전체 퀴즈 진행 넘버
            this.prev_quiz_num = 1; //이전 퀴즈 번호.
            this.quiz_sub_num = 1; // 한문제당 진행되는 드래그 순번. 빈칸순서대로 루프 ex)1 2 3 반복
            this.prev_quiz_start = 1;
            this.exampleNum = 0;
            this.answerArr = [];
            this.resultArr = [];
            controller.model.activeQuizSetNum = 1;
            controller.animationManager4.resetAni();
            $("#gameContainer").html("");
        },
        onNextView : function(){
            controller.dataManager.loadLog("end",{"quizNum":controller.model.quizSetNum,"yes_cnt":"1","fail_cnt":"1","yes_yn":"Y"},$.proxy(function(){
                url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/review/1";
                controller.characterManager.onCharacterPlay("speek",controller.characterManager.fireMan2,url, $.proxy(function(){
                    this.onReset();
                    this.testButtons.remove();
                    controller.onloadAct4("resulte");
                },this),true); //경로.
                
            },this));
            
            
        },
        inCarAni : function(){
            //자동차 들어오는 애니메이션 들어올때 퀴즈 셋팅하고 
            
            this.answerSet(); //동일상 문제 일떄는 실행 하지 않고 문제가 봐낄때
        },
        outCarAni : function(){

        },
        exampleSet : function(){
            console.log("exampleSet")
            controller.block.allRemove();
            controller.animationManager4.siren.onClickEvent();
            var data = controller.model.quizData.result[0].act_quest;
            this.data = data;
            var answer = data[this.quiz_num-1].answer;
            this.answerArr.push(String(answer).replace("-","")); // 빈칸을 다 셋팅했을때 정답 체크용 배열.
            
            console.log("정답 : "+ answer);
            developerTrace.trace("정답 : "+answer);
            var example = data[this.quiz_num-1].example;
            var arr = String(example).split(",");
            var quizArr = [];
            for(var i=0;i<arr.length;i++){
                quizArr.push(arr[i]);
            }
            arr.push(answer);
            quizArr = randomArray.getRandomArray(arr);
            console.log(quizArr);
            this.quizArr = quizArr;
            this.hitObj = {};
            console.log("this.quiz_sub_num++++++"+this.quiz_sub_num);
            this.hitObj.target = this.car.find(".textAnswer span:nth-child("+this.quiz_sub_num+")");
            this.hitObj.type = "";
            this.hitObj.id = "target"+(this.quiz_sub_num-1);

            
            for(i=0;i<quizArr.length;i++){
                this.car.find(".drag_text div:nth-child("+(i+1)+") p").html(quizArr[i]);
                this.car.find(".drag_text div:nth-child("+(i+1)+")").addClass("font_embed");
                this.car.find(".drag_text div:nth-child("+(i+1)+")").attr("id","drag"+i);
                this.car.find(".drag_text div:nth-child("+(i+1)+")").css({"left":this.exampleArr[i].x,"top":this.exampleArr[i].y});
                $("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").css("font-size","14pt");
                if($("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").width() > 80){
                    $("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").css("font-size","13.5pt");
                }
                
                if($("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").width() > 80){
                    $("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").css("font-size","13pt");
                }
                
                if($("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").width() > 80){
                    $("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").css("font-size","12.5pt");
                }
                
                if($("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").width() > 80){
                    $("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").css("font-size","12pt");
                }
                
                if($("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").width() > 80){
                    $("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").css("font-size","11.5pt");
                }
                
                if($("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").width() > 80){
                    $("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").css("font-size","11pt");
                }
                
                if($("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").width() > 80){
                    $("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").css("font-size","10.5pt");
                }
                
                if($("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").width() > 80){
                    $("#act4_game_car_contain .drag_text div:nth-child("+(i+1)+") p").css("font-size","10pt");
                }
                if(this.isbool) textColorAni.init(this.car.find(".drag_text div:nth-child("+(i+1)+")"));
                
            }
            this.isbool = true;
            this.prev_quiz_num = data[this.quiz_num-1].ques_num;
            this.isDrag = true;
            // for(i=0;i<3;i++){
            //     this.car.find(".drag_text div:nth-child("+(i+1)+")").on("mousedown",$.proxy(this.onMouseDown, this));
            // }
            
        },
        answerSet : function(){
            controller.block.allRemove();
            this.isbool = false;
            this.exampleNum++;
            console.log("this.exampleNum = "+this.exampleNum)
            var data = controller.model.quizData.result[0].act_quest;
            var questionText = data[this.quiz_num-1].question;
            var ques_num = data[this.quiz_num-1].ques_num;

            this.inAniCar();
            
            this.car.find(".textAnswer").html(String(questionText).replace(/\(tmp\)/g, "<span></span>"));
            // this.car.find(".textAnswer span").html();

            this.strLength = 1;
            console.log(this.car.find("span").length)
            var num = this.car.find("span").length;
            for(var i=(this.exampleNum*num)-num;i<(this.exampleNum*num);i++){ //3번 로테.
                console.log(i);
                var answer = data[i].answer;
                var example = data[i].example;
                var arr = String(example).split(",");
                arr.push(answer);
                console.log("문제 arr : "+arr);
                for(var k=0;k<arr.length;k++){
                    if(this.strLength < String(arr[k]).length){
                        this.strLength = String(arr[k]).length;
                    } 
                }
                var str = "_";
                for(k=0;k<this.strLength;k++){
                    str = str+"_";
                }
                this.strLength = 1;
                this.car.find(".textAnswer span:nth-child("+((i%num)+1)+")").html("<p></p>"+str);
            }
            
            
            console.log(this.car.find(".textAnswer span").length);
            for(var i=0;i<this.car.find(".textAnswer span").length;i++){
                console.log(this.car.find(".textAnswer span").length);
                
                this.car.find(".textAnswer span:nth-child("+(i+1)+")").addClass("font_embed_line");
                this.car.find(".textAnswer span:nth-child("+(i+1)+")").find("p").addClass("font_embed");
                this.car.find(".textAnswer span:nth-child("+(i+1)+")").find("p").addClass("act4_blank");
                this.car.find(".textAnswer span:nth-child("+(i+1)+")").attr("id","target"+i);
            }
            if(controller.model.activeLevel == "Hard"){
                this.car.find(".textAnswer").css("font-size","12pt");
                this.car.find(".act4_blank").css({"font-size":"12pt","top":"3px"});
            }else{
                this.car.find(".textAnswer").css("font-size","14pt");
                this.car.find(".act4_blank").css({"font-size":"14pt","top":"0px"});
            }
            this.car.find(".textAnswer span:nth-child(1)").addClass("act4_line_ani");
            this.textColorAnimate();
            this.exampleSet();
        },

        

        setQuiz : function(){
            console.log("퀴즈 셋팅 함수 JSON DATA LOAD");
            controller.onLoadQuiz();
        },
        onHomeListener : function(e){
            switch(e.target.id){
                case "completeButton" :
                // this.onShowPopup();
                this.onNextView();
                break;
            }
        }
    };
    exports.Activity4Game = Activity4Game;
})(this);