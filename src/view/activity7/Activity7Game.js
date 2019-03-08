(function(exports){
    function Activity7Game(){
        
        this.exampleArr = {
            Easy:[{x:90,y:30},{x:90,y:120},{x:280,y:80},{x:560,y:57},{x:560,y:104}],
            Medium:
            [
                {x:50,y:15},{x:40,y:120},{x:170,y:70},{x:290,y:100},{x:340,y:40},
                {x:470,y:15},{x:460,y:120},{x:590,y:70},{x:690,y:100},{x:740,y:40}
            ],
            Hard:
            [
                {x:20,y:0},{x:20,y:30},{x:20,y:60},{x:20,y:90},
                {x:450,y:15},{x:450,y:45},{x:450,y:75},{x:450,y:105}
            ]
        };

        this.targetArr = {
            Easy:[{x:162,y:213},{x:162,y:262},{x:162,y:325},{x:162,y:404},{x:162,y:464}],
            Medium:
            [
                {x:36,y:270},{x:36,y:312},{x:36,y:363},{x:36,y:427},{x:36,y:482},
                {x:310,y:270},{x:310,y:312},{x:310,y:363},{x:310,y:427},{x:310,y:482}
            ],
            Hard:
            [
                {x:165,y:132},{x:165,y:179},{x:165,y:222},{x:165,y:274},
                {x:165,y:331},{x:165,y:389},{x:165,y:439},{x:165,y:490}
            ]
        };
//2줄일떄는 10pt line 9pt
        this.targetArrSize = {
            Easy:{width:262,height:19,fontSize:"12pt"},
            Medium:{width:220,height:19,fontSize:"10pt"},
            Hard:{width:262,height:19,fontSize:"12pt"}
        };
        this.answerArr = [];
        
    }

    Activity7Game.prototype = {
        initialize : function(){

        },
        updateView : function(){
            $(window).off("coin_ani_end");
            $(window).on("coin_ani_end", $.proxy(this.onCoinAniEnd,this));
            $("body").attr("ondragstart","return false");
            $("body").attr("onselectstart","return false");
            this.quiz_num = 0; // 전체 퀴즈 진행 넘버
            var completeBtn = $("<button id='completeButton'>COMPLETE</button>");
            this.testButtons = $("<div class='testButtons'></div>");
            testModule.testButtonInit(this.testButtons);
            this.testButtons.append(completeBtn);
            testModule.act7ShowAnswerMode(this.testButtons);
            $("#completeButton").on("click",$.proxy(this.onHomeListener,this));
            this.burger = 
            $(
                "<div id='act7_game_burger_contain'>"+
                "</div>"
            );

            this.button = 
            $(
                "<div id = 'act7_quiz_button'></div>"
            );
            
            $("#gameContainer").append(this.burger);
            $("#gameContainer").append(this.button);
            
            new ButtonUtil().init("act7_quiz_button",controller.model.imgPath+"/"+controller.model.activeAct+"/","next"); //id,path,name,alt,name2,alt2
            

            
            var burgerImg;
            var title = "";
            this.positionY = 0;
            if(controller.model.activeLevel == "Easy"){
                burgerImg = $("<img src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/burger_middle.png"+"' />");
                this.burger.css("left","128px");
                this.burger.append("<div class='burger_button_1'><button class='act7_topic'></button><button class='act7_details'></button>"+
                "<button class='act7_details'></button><button class='act7_details'></button><button class='act7_closing'></button></div>");
                this.positionY = 179;
            }else if(controller.model.activeLevel == "Medium"){
                burgerImg = $(
                    "<img src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/burger_small.png"+"' />"+
                    "<img src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/burger_small.png"+"' />"
                );
                this.burger.css("left","8px");
                this.burger.append
                (
                    "<div class='burger_button_2'>"+
                        "<div>"+
                            "<span class='font_embed'>First Paragraph</span>"+
                            "<button class='act7_topic'></button><button class='act7_details'></button><button class='act7_details'></button><button class='act7_details'></button><button class='act7_closing'></button>"+
                        "</div>"+
                        "<div>"+
                            "<span class='font_embed'>Second Paragraph</span>"+
                            "<button class='act7_topic'></button><button class='act7_details'></button><button class='act7_details'></button><button class='act7_details'></button><button class='act7_closing'></button>"+
                        "</div>"+
                    "</div>"
                );
                this.positionY = 154;
            }else if(controller.model.activeLevel == "Hard"){
                burgerImg = $("<img src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/burger_big.png"+"' />");
                this.burger.css("left","120px");
                this.burger.append
                (
                    "<div class='burger_button_3'>"+
                        "<button class='act7_topic'></button>"+
                        "<button class='act7_details'></button><button class='act7_supporting'></button><button class='act7_details'></button>"+
                        "<button class='act7_supporting'></button><button class='act7_details'></button><button class='act7_supporting'></button>"+
                        "<button class='act7_closing'></button>"+
                    "</div>"
                );
                this.positionY = 109;
            }
            this.burger.append(burgerImg);   
            this.burger.find("button").on("click", $.proxy(this.onBurgerTitleClick,this));
            this.button.on("click", $.proxy(this.onButtonListener,this));

            this.setCharater();


            var str = "1";
            if(controller.model.activeLevel == "Medium") str = "2";
            var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/howToPlay"+str;

            controller.characterManager.onCharacterPlay("speek", controller.characterManager.nick2, url, $.proxy(function(){
                this.setQuiz();
            },this), true);// 동작 타입, 움직을 케릭터, 음성 경로
        },
        onBurgerTitleClick : function(e){
            console.log($(e.target).attr("class"))
            var str = String($(e.target).attr("class")).replace("act7_","");
            url = controller.model.soundPath + controller.model.activeAct+"/character/"+str;
            controller.characterManager.onCharacterPlay("speek",controller.characterManager.nick2,url); //경로.

        },
        setCharater : function(){
            console.log("------------------------------setCharater---------------------------------")
            var characterCanvas = $("<canvas id='ani_canvas_characte' width='1000' height='630'></canvas>");
            var characterContain = $("<div id ='charater_contian' style='position:absolute;top:0;left:0;width:1000px;height:630px'></div>"); //케릭터 애니 담을 컨테인
            $("#gameContainer").append(characterContain);
            characterContain.append(characterCanvas);
            var arr = [];

            arr.push(new Object({
                character:controller.characterManager.nick2,
                x :740,
                y :290,
                index : 0
            }));


            arr.push(new Object({
                character:controller.characterManager.gram2,
                x : 655,
                y : 500,
                index : 1
            }));
            arr.push(new Object({
                character:controller.characterManager.reedie2,
                x : 785,
                y : 540,
                index : 2
            }));

            arr.push(new Object({
                character:controller.characterManager.elly,
                x : 815,
                y : 380,
                scaleX: -1,
                index : 3
            }));

            
            this.arr = arr;
            controller.characterManager.onSetChrater("ani_canvas_characte",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 
        },

        onTestMode : function(value){
            if(value){
                $(".act7_test_answer").show();
            }else{
                $(".act7_test_answer").hide();
            }
        },
        inburgerAni : function(){
            //burger 들어오는 애니메이션 들어올때 문장 셋팅.
            this.burger.css({"top":"650px"});
            this.burger.animate({"top":this.positionY+"px"},
            {
                duration: 1000,
                specialEasing: {
                    top: "easeOutExpo"
                },complete: $.proxy(animateCalback,this)
            });

            function animateCalback(){
                this.answerSet();
            }
        },
        onButtonListener : function(e){
            console.log("정답 체크")
            this.isAnswer = false;
            for(var i=0;i< $("#gameContainer").find(".act7_target").length;i++){
                console.log($($($("#gameContainer").find(".act7_target")[i])[0]).attr("value"))
                console.log("example : "+(i+1))
                
                if(parseInt($($($("#gameContainer").find(".act7_target")[i])[0]).attr("value")) == (i+1)){
                    console.log(this.example[i])
                    this.isAnswer = true;
                }else{
                    this.isAnswer = false;
                    break;
                }
            }
            console.log("정답 체크 = " + this.isAnswer)
            this.answerSentencecheck(this.isAnswer);
        },
        answerSentencecheck : function(value){
            var url = "";
            if(!value){
                console.log("오답 오답 오답 오답 오답 *************************************.");
                url = controller.model.soundPath + controller.model.activeAct+"/character/wrong/" + parseInt(Math.random()*5 + 1);
                controller.characterManager.onCharacterPlay("wrong"+parseInt(Math.random()*3 + 1),controller.characterManager.reedie2,url, $.proxy(function(){
                    this.exampleSet();
                },this)); //경로.
            }else{
                console.log("정답 정답 정답 정답 정답*************************************.");
                
                url = controller.model.soundPath + controller.model.activeAct+"/character/right/" + parseInt(Math.random()*5 + 1);
                controller.characterManager.onCharacterPlay("win"+parseInt(Math.random()*3 + 1),controller.characterManager.gram2,url, $.proxy(function(){
                    this.onPopup()
                },this),true); //경로.
            }

            

        },
        onPopup : function(){

            var soundUrl = controller.model.soundPath+controller.model.activeAct+"/result/"+controller.model.activeLevel+
            "/set"+this.data[this.quiz_num].set_num+"/"+this.data[this.quiz_num].ques_num;
            controller.soundManager.init(soundUrl,true); //경로.


            var popup = $("<div id='act7_result_popup'><div class='act7_con'></div><img src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/resultPanel.png"+"' /></div>");
            $("#gameContainer").append(popup);
            var url = controller.model.imgPath+"/common/nextbutton_s.png";
            var nextButton = $("<img id='act7_next_button' src='"+url+"' />");
            nextButton.css("cursor","pointer");
            popup.append(nextButton);
            
            // new ButtonUtil().init("act7_next_button", controller.model.imgPath+"/common/","nextbutton_s","");
            console.log(this.example);
            var str = "&nbsp;&nbsp;&nbsp;&nbsp;";
            for(var i=0;i< this.example.length;i++){
                if(controller.model.activeLevel == "Medium" && i == 4){
                    str = str +this.example[i]+"<br><br>";
                }else if(controller.model.activeLevel == "Medium" && i == 5){
                    str = str +"&nbsp;&nbsp;&nbsp;&nbsp;"+this.example[i]+" ";
                }else{
                    str = str +this.example[i]+" ";
                }
            }
            $(".act7_con").append("<div class='act7_popup_span_contain'><p class='font_embed'>"+str+"</p></div>");
            $(".act7_popup_span_contain").on("click", $.proxy(function(){
                controller.soundManager.init(soundUrl,true); //경로.
            },this)).css("cursor","pointer");
            var imgContain = $("<div class='act7_result_popup_img'><div><div class ='act7_img_contain'></div></div></div>");
            $(".act7_con").prepend(imgContain);
            if(controller.model.activeLevel == "Medium"){
                $(".act7_popup_span_contain").find("p").css("font-size","10pt");
                imgContain.find(".act7_img_contain").css({"width":"340px","height":"109px"});
                imgContain.find(".act7_img_contain").append($("<img src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/photo/"+controller.model.activeLevel+
                "/set"+this.data[this.quiz_num].set_num+"/"+this.data[this.quiz_num].ques_num+"_1.png"+"' />"));
                imgContain.find(".act7_img_contain").append($("<img src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/photo/"+controller.model.activeLevel+
                "/set"+this.data[this.quiz_num].set_num+"/"+this.data[this.quiz_num].ques_num+"_2.png"+"' />"));
                imgContain.find(".act7_img_contain img").css({"width":"160px","height":"109px"});
            }else{
                $(".act7_popup_span_contain").find("p").css("font-size","12t");
                imgContain.find(".act7_img_contain").css({"width":"250px","height":"170px"});
                imgContain.find(".act7_img_contain").append($("<img src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/photo/"+controller.model.activeLevel+
                "/set"+this.data[this.quiz_num].set_num+"/"+this.data[this.quiz_num].ques_num+".png"+"' />"));
                imgContain.find(".act7_img_contain img").css({"width":"250px","height":"170px"});
            }

            if(controller.model.activeLevel == "Medium" || controller.model.activeLevel == "Hard"){
                $(".act7_popup_span_contain").find("p").css("font-size","10.5pt");
            }else{
                $(".act7_popup_span_contain").find("p").css("font-size","12pt");
            }

            
            nextButton.on("click",$.proxy(function(e){

                var url = controller.model.soundPath + "success";
                controller.soundManager.init(url,true,$.proxy(function(){
                    this.quiz_num++;
                    if(this.quiz_num < 3){ // 퀴즈가 3번쨰 이전이면 다음 문제 셋팅 
                        var data = controller.model.quizData.result[0].act_quest;
                        var example = String(data[this.quiz_num].sentence).split("|") || [];
                        this.num = parseInt(Math.random() * example.length);
                        this.exampleSet();
                        popup.animate({"top":"-650px"},
                        {
                            duration: 1000,
                            specialEasing: {
                                top: "easeOutExpo"
                            },complete: $.proxy(animateCalback2,this)
                        });
                    }else {
                        this.onFinish();
                    }
    
                    function animateCalback2(){
                        $("#act7_result_popup").remove();
                    }
                },this));
            },this));

            popup.css({"top":"-650px"});
            popup.animate({"top":"5px"},
            {
                duration: 1000,
                specialEasing: {
                    top: "easeOutExpo"
                },complete: $.proxy(animateCalback,this)
            });

            function animateCalback(){
                // this.answerSet();
                //음성 플레이/
            }


            if(this.quiz_num < 3){ // 퀴즈가 3번쨰 이전이면 다음 문제 셋팅 
                // this.exampleSet();
                //종료.
            }
            
        },
        onStageSetting : function(){
            //quiz 데이터가 다 들어오면 실행되는 함수.
            console.log(controller.model.quizData);
            controller.model.quizSetNum = controller.model.quizData.result[0].act_quest[0].set_num;
            this.totalQuizNum = controller.model.quizData.result[0].act_quest.length;
            this.quiz_num = 0;
            this.inburgerAni();
        },
        
        
        exampleSet : function(){
            var data = controller.model.quizData.result[0].act_quest;
            this.data = data;
            this.example = String(data[this.quiz_num].sentence).split("|") || [];
            this.reandomArr = [];
            this.reandomArr = randomArray.getRandomArrayNumber(this.example);
            var i=0;
            this.hitObj = [];
            $("#gameContainer").find(".act7_target").remove();
            $("#gameContainer").find(".act7_drag").remove();

            for(i=0;i<this.reandomArr.length;i++){
                var obj = {};
                $("#gameContainer").append($("<div class = 'act7_target font_embed' id='act7_game_target_"+i+"'></div>").css(
                    {"font-size":this.targetArrSize[controller.model.activeLevel].fontSize,"width":this.targetArrSize[controller.model.activeLevel].width+"px",
                    "height":this.targetArrSize[controller.model.activeLevel].height+"px","position":"absolute",
                    "left":this.targetArr[controller.model.activeLevel][i].x+"px","top":this.targetArr[controller.model.activeLevel][i].y+"px",
                    "text-shadow":"-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"}
                ));
                $("#gameContainer").append($("<div value = '"+(i+1)+"' class = 'act7_drag font_embed' id='act7_game_drag_"+i+"'></div>").on("mousedown",$.proxy(this.onMouseDown,this)).css({"position":"absolute","left":this.exampleArr[controller.model.activeLevel][this.reandomArr[i]].x+"px","top":this.exampleArr[controller.model.activeLevel][this.reandomArr[i]].y+"px"}));
                obj.id = "act7_game_target_"+i;
                this.hitObj.push(obj);
            }
            $(".act7_target").on("click", $.proxy(function(e){
                console.log($(e.target).attr("value"));
                if(undefined != $(e.target).attr("value")){
                    var num = $(e.target).attr("value");
                    var url = controller.model.soundPath +"/"+controller.model.activeAct+"/"+controller.model.activeLevel+"/set"+controller.model.quizSetNum+"/"+data[this.quiz_num].ques_num+"/"+num;
                    controller.soundManager.init(url,true); //경로.
                }
            },this));
            developerTrace.trace("정답 : "+this.example);
            for(i=0;i<this.example.length;i++){
                $("#act7_game_drag_"+i).html("<span class='act7_test_answer'>"+(i+1)+". </span>"+this.example[i]);
            }

            var num = this.num;
            console.log("num"+num);
            this.hitObj.splice(num, 1);
            $("#act7_game_target_"+num).css("cursor","pointer");
            $("#act7_game_target_"+num).html($("#act7_game_drag_"+num).html());
            $("#act7_game_target_"+num).attr("value", $("#act7_game_drag_"+num).attr("value"));
            $("#act7_game_target_"+num).find(".act7_test_answer").remove();
            $("#act7_game_drag_"+num).hide();
            var obj = {};
            obj.drag = $("#act7_game_drag_"+num);
            obj.target = $("#act7_game_target_"+num);
            var top;
            console.log(obj.drag.text())
            console.log(obj.drag.text().length)
            if(controller.model.activeLevel == "Medium"){
                if(String(obj.drag.text()).length > 32){
                    top = parseInt(obj.target.css("top"))-4;
                    obj.target.css({"font-size":"9.5pt","line-height":"9pt","top":top+"px"});
                }
            }else{
                if(String(obj.drag.text()).length > 32 && String(obj.drag.text()).length < 40){
                    top = parseInt(obj.target.css("top"))+3;
                    console.log(parseInt(top));
                    obj.target.css({"font-size":"10pt","line-height":"9pt","top":top+"px"});
                }else if(String(obj.drag.text()).length >= 40){
                    top = parseInt(obj.target.css("top"))-4;
                    obj.target.css({"font-size":"10pt","line-height":"9pt","top":top+"px"});
                }
            }


            // if(controller.model.activeLevel == "Medium"){
            //     if(String($("#act7_game_drag_"+num).html()).length > 32){
            //         top = parseInt($("#act7_game_target_"+num).css("top"))-4;
            //         $("#act7_game_target_"+num).css({"font-size":"10pt","line-height":"9pt","top":top+"px"});
            //     }
            // }else{
            //     if(String($("#act7_game_drag_"+num).html()).length > 32 && String($("#act7_game_drag_"+num).html()).length < 40){
            //         top = parseInt($("#act7_game_target_"+num).css("top"))+3;
            //         console.log(parseInt(top));
            //         $("#act7_game_target_"+num).css({"font-size":"10pt","line-height":"9pt","top":top+"px"});
            //     }else if(String($("#act7_game_drag_"+num).html()).length >= 40){
            //         top = parseInt($("#act7_game_target_"+num).css("top"))-4;
            //         $("#act7_game_target_"+num).css({"font-size":"10pt","line-height":"9pt","top":top+"px"});
            //     }
            // }

            if(controller.model.act7AnswerShow) $(".act7_test_answer").show();
            else $(".act7_test_answer").hide();
            
        },
        answerSet : function(){
            console.log("answerSet==============================")
            console.log(this.quiz_num);
            this.answerArr = [];
            var data = controller.model.quizData.result[0].act_quest;
            var questionText = data[this.quiz_num].sentence;
            this.hitObj = [];
            var example = String(data[this.quiz_num].sentence).split("|") || [];
            this.num = parseInt(Math.random() * example.length);
            this.exampleSet();
            
        },
        onMouseDown : function(e){
            var data = this.data;
            console.log($(e.target).html());
            console.log($(e.target).attr("value"));//ques_num data[this.quiz_num].ques_num
            var url = controller.model.soundPath +"/"+controller.model.activeAct+"/"+controller.model.activeLevel+"/set"+controller.model.quizSetNum+"/"+data[this.quiz_num].ques_num+"/"+$(e.target).attr("value");
            controller.soundManager.init(url,true,$.proxy(function(){
            },this)); //경로.

            console.log("mousedown");
            this.item = e.currentTarget.id;
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
                var url = "";
                var count = 0;
                for(var i=0;i<this.hitObj.length;i++){
                    obj.drag = $("#"+this.item);
                    obj.target = $("#"+this.hitObj[i].id);
                    if(controller.hitTestManager.onHitTest(obj)){
                        this.hitObj.splice(i, 1);
                        console.log("정답");
                        console.log(this.hitObj);
                        obj.drag.find(".act7_test_answer").remove();
                        obj.drag.remove();
                        obj.target.html(obj.drag.html());
                        obj.target.css("cursor","pointer");
                        obj.target.attr("value", obj.drag.attr("value"));
                        var top;
                        if(controller.model.activeLevel == "Medium"){
                            if(String(obj.drag.html()).length > 32){
                                top = parseInt(obj.target.css("top"))-4;
                                obj.target.css({"font-size":"10pt","line-height":"9pt","top":top+"px"});
                            }
                        }else{
                            if(String(obj.drag.html()).length > 32 && String(obj.drag.html()).length < 40){
                                top = parseInt(obj.target.css("top"))+3;
                                console.log(parseInt(top));
                                obj.target.css({"font-size":"10pt","line-height":"9pt","top":top+"px"});
                            }else if(String(obj.drag.html()).length >= 40){
                                top = parseInt(obj.target.css("top"))-4;
                                obj.target.css({"font-size":"10pt","line-height":"9pt","top":top+"px"});
                            }
                        }

                        return;
                    }else{
                        count++;
                    }
                }

                if(count == this.hitObj.length){
                    console.log("오답 드레그 원위치.");
                    obj.drag.animate({top:this.exampleArr[controller.model.activeLevel][this.reandomArr[parseInt(obj.drag.attr("value"))-1]].y,left:this.exampleArr[controller.model.activeLevel][this.reandomArr[parseInt(obj.drag.attr("value"))-1]].x});
                }
                break;

                case "mousemove" :
                var leftmargin = $("#root")[0].offsetLeft * controller.fullScreenModul.scaleW;
                var h = $("#"+this.item)[0].clientHeight * controller.fullScreenModul.scaleH;
                var w = $("#"+this.item)[0].clientWidth * controller.fullScreenModul.scaleW;
                $("#"+this.item).css({"top":(e.clientY-(h/2))/controller.fullScreenModul.scaleH,"left":(e.clientX-(w/2)-leftmargin)/controller.fullScreenModul.scaleW});
                break;
            }
        },
        setQuiz : function(){
            console.log("퀴즈 셋팅 함수 JSON DATA LOAD");
            controller.onLoadQuiz();
        },
        onHomeListener : function(e){
            switch(e.target.id){
                case "completeButton" :
                this.onFinish();
                // this.onPopup();
                break;
            }
        },
        onReset : function(){
            this.quiz_num = 0;
            controller.model.activeQuizSetNum = 1;
            $("#gameContainer").html("");
            controller.characterManager.resetAni();
            controller.animationManager7.resetAni();
            this.testButtons.remove();
            
        },
        goToView1 : function(){
            $(window).trigger("result_go_back_act7");
            this.onReset();
            controller.onloadAct7("data");
        },
        onFinish : function(){
            console.log("onFinish");
            var url = "";
            controller.dataManager.loadLog("end",{"quizNum":controller.model.quizSetNum,"yes_cnt":"1","fail_cnt":"1","yes_yn":"Y"},$.proxy(function(){
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
            if(controller.model.globalSetNum == 6){
                url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/letsgo";
                controller.soundManager.init(url,true,$.proxy(function(){
                    controller.loadFinditemGame("data");
                },this)); //경로.
            }else{
                url = controller.model.soundPath + controller.model.activeAct+"/character/finish";
                controller.characterManager.onCharacterPlay("speek",controller.characterManager.nick2,url, $.proxy(function(){
                    //1번 화면으로 이동
                    this.quiz_num = 0;
                    this.goToView1();
                },this)); //경로.
            }
        },
    };
    exports.Activity7Game = Activity7Game;
})(this);