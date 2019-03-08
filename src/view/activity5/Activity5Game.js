(function(exports){
    function Activity5Game(){
        
        this.exampleArr = [{x:750,y:50},{x:750,y:100},{x:750,y:150},{x:750,y:230},{x:750,y:280},{x:750,y:330}];
        this.answerArr = [];
        
    }

    Activity5Game.prototype = {
        initialize : function(){

        },
        updateView : function(){
            $(window).off("coin_ani_end");
            $(window).on("coin_ani_end", $.proxy(this.onCoinAniEnd,this));
            this.quiz_num = 0; // 전체 퀴즈 진행 넘버
            
            var completeBtn = $("<button id='completeButton'>COMPLETE</button>");
            this.testButtons = $("<div class='testButtons'></div>");
            testModule.testButtonInit(this.testButtons);
            this.testButtons.append(completeBtn);
            
            $("#completeButton").on("click",$.proxy(this.onHomeListener,this));
            this.post = 
            $(
                "<div id='act5_game_post_contain'>"+
                    "<div class='center_line'></div>"+
                    "<img class='pos_img' src='' />"+
                    "<img class='fire_post_back' src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/post_back.png"+"' />"+
                    "<img class='fire_post' src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/post.png"+"' />"+
                    "<div class = 'main_contant' >"+
                        "<p class='from_text'></p>"+    
                        "<div class='act5_extContain'>"+
                            "<p class='act5_textAnswer font_embed'></p>"+
                        "</div>"+
                        "<p class='from_text2'></p>"+
                        "<div class='address_contain'>"+
                            "<p class='address1 post_text'></p>"+
                            "<p class='address2 post_text'></p>"+
                            "<p class='address3 post_text'></p>"+
                        "</div>"+
                    "</div>"+
                    "<img class='act5_quiz_next_button' src='"+controller.model.imgPath+"/"+controller.model.activeAct+"/next.png"+"' />"+
                "</div>"
            );

            this.button = 
            $(
                "<div id = 'quiz_button'><div><img src = '"+controller.model.imgPath+"/"+controller.model.activeAct+"/stemp.png"+"'/></div></div>"
            );

            this.nextButtonArrow = 
            $(
                "<div id = 'quiz_next'></div>"
            );

            

            $("#gameContainer").append(this.post);
            this.post.find(".main_contant").append(this.button);
            this.post.find(".main_contant").append(this.nextButtonArrow);
            this.nextButtonArrow.hide();
            new ButtonUtil().init("quiz_next",controller.model.imgPath+"/common/","nextbutton");
            this.post.find(".address_contain").on("click",$.proxy(function(){
                var url = controller.model.soundPath +"/"+controller.model.activeAct+"/"+controller.model.activeLevel+"/address/set"+controller.model.quizSetNum+"/"+this.ques_num;
                controller.soundManager.init(url,true,$.proxy(function(){
                },this)); //경로.
            },this)).css("cursor","pointer");
            this.nextButtonArrow.on("click",$.proxy(function(){
                this.onRotationAni();
            },this))
            this.nextButton = $(".act5_quiz_next_button");
            this.mainContant = this.post.find(".main_contant");
            this.photoImg = this.post.find(".pos_img");
            this.postImg = this.post.find(".fire_post");
            this.postImg_back = this.post.find(".fire_post_back");
            this.postImg_back.hide();
            this.nextButton.on("click", $.proxy(function(){
                this.nextButton.hide();
                this.quiz_num++;
                if(this.quiz_num < 3){ // 퀴즈가 3번쨰 이전이면 다음 문제 셋팅 
                    this.nextpostAni();
                    
                }else {
                    this.onFinish();
                }
            },this));

            this.nextButton.hide();
            
            var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/howToPlay";
            controller.characterManager.onCharacterPlay("speek",controller.characterManager.reedie,url, $.proxy(function(){
                this.setQuiz();
            },this),true);
            this.button.find("div").hide();
            new ButtonUtil().init("quiz_button",controller.model.imgPath+"/"+controller.model.activeAct+"/","button");

            if(controller.model.activeLevel == "Easy"){
                this.post.find(".act5_extContain").css("line-height","50px");
                this.post.find(".act5_textAnswer ").css("font-size","16pt");
                this.post.find(".from_text").css("font-size","16pt");
                this.post.find(".from_text2").css({"font-size":"16pt","left":"34px"});
                this.post.find(".custom-select option").css("font-size","16pt");
                $("#act5_custom_select").css({"font-size":"16pt","height":"28px","padding-top":"0px"});
            }
            if(controller.model.activeLevel == "Medium"){
                this.post.find(".act5_extContain").css("line-height","47px");
                this.post.find(".act5_textAnswer ").css("font-size","15pt");
                this.post.find(".from_text").css("font-size","15pt");
                this.post.find(".from_text2").css({"font-size":"15pt","left":"34px"});
                this.post.find(".custom-select option").css("font-size","15pt");
                $("#act5_custom_select").css({"font-size":"15pt","height":"28px","padding-top":"1px"});
            } 
            if(controller.model.activeLevel == "Hard"){
                this.post.find(".act5_extContain").css("line-height","34px");
                this.post.find(".act5_textAnswer ").css("font-size","13pt");
                this.post.find(".from_text").css("font-size","13pt");
                this.post.find(".from_text2").css({"font-size":"13pt","left":"34px"});
                this.post.find(".custom-select option").css("font-size","13pt");
                $("#act5_custom_select").css({"font-size":"13pt","height":"26px","padding-top":"4px"});
            } 
        },
        nextpostAni : function(){
            //post 들어오는 애니메이션 들어올때 문장 셋팅.
            var url = controller.model.soundPath + "out";
            controller.effectManager.init(url);
            this.button.find("div").hide();
            this.button.find("div img").css({"width":"200px","left":-67+"px","top":-15+"px"});
            this.post.css({"transform": "rotateZ(360deg)"});
            this.post.animate({"left":1100+"px"},
            {
                duration: 1000,
                specialEasing: {
                    left: "easeOutExpo"
                },complete: $.proxy(nextpostAnimateCalback,this)
            });

            function nextpostAnimateCalback(){
                this.photoImg.hide();
                this.postImg_back.hide();
                this.postImg.show();
                this.mainContant.show();
                this.answerSet();
            }
        },
        onButtonListener : function(e){
            console.log("정답 체크")
            this.isAnswer = false;
            var arr = this.post.find(".act5_quiz_text");
            for(var i=0;i<arr.length;i++){
                console.log($(arr[i]).find("select option:selected").html())
                console.log(this.answer[i])
                if($(arr[i]).find("select option:selected").html() === this.answer[i]){
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
            if(!value){
                console.log("오답 오답 오답 오답 오답 *************************************.");
                url = controller.model.soundPath + controller.model.activeAct+"/character/wrong/1";
                controller.characterManager.onCharacterPlay("wrong"+parseInt(Math.random()*3 + 1),controller.characterManager.reedie,url, $.proxy(function(){

                },this),true); //경로.
            }else{
                console.log("정답 정답 정답 정답 정답*************************************.");
                //
                this.button.off("click", $.proxy(this.onButtonListener,this));

                


                this.post.find(".act5_textAnswer").on("click",$.proxy(function(){
                    // this.onRotationAni();
                    var url = controller.model.soundPath +controller.model.activeAct+"/"+controller.model.activeLevel+"/sentence/set"+controller.model.quizSetNum+"/"+this.ques_num;
                    controller.soundManager.init(url,true);
                },this)).css("cursor","pointer");
    
                this.post.find(".from_text").on("click",$.proxy(function(){
                    // this.onRotationAni();
                    var url = controller.model.soundPath +controller.model.activeAct+"/"+controller.model.activeLevel+"/sentence/set"+controller.model.quizSetNum+"/"+this.ques_num;
                    controller.soundManager.init(url,true);
                },this)).css("cursor","pointer");

                
                var url = controller.model.soundPath + controller.model.activeAct+"/character/right/" + parseInt(Math.random()*3 + 1);
                controller.characterManager.onCharacterPlay("win"+parseInt(Math.random()*3 + 1),controller.characterManager.reedie,url, $.proxy(function(){
                    var arr = this.post.find(".act5_quiz_text");
                    for(var i=0;i<arr.length;i++){
                        $(arr[i]).html(this.answer[i]).css("position","static");
                    }
                    var url = controller.model.soundPath +"success";
                    controller.soundManager.init(url,true,$.proxy(function(){

                        var url = controller.model.soundPath +controller.model.activeAct+"/"+controller.model.activeLevel+"/sentence/set"+controller.model.quizSetNum+"/"+this.ques_num;
                        controller.soundManager.init(url,true,$.proxy(function(){
                            var url = controller.model.soundPath +"stamp";
                            controller.effectManager.init(url);
                            
                            this.button.find("div").fadeIn(50);
                            this.button.find("div img").animate({"width":"150px","left":-43+"px","top":-5+"px"},
                            {
                                duration: 300,
                                specialEasing: {
                                    left: "easeOutBounce",
                                    top: "easeOutBounce",
                                    width: "easeOutBounce",
                                    height: "easeOutBounce",
                                    
                                },complete: $.proxy(nextpostAnimateCalback,this)
                            });
                        },this));


                        
        
                        function nextpostAnimateCalback(){
                            this.nextButtonArrow.fadeIn();
                        }

                    },this));
                },this),true); //경로.

                
            }
        },
        onStageSetting : function(){
            //quiz 데이터가 다 들어오면 실행되는 함수.
            console.log(controller.model.quizData);
            controller.model.quizSetNum = controller.model.quizData.result[0].act_quest[0].set_num;
            this.totalQuizNum = controller.model.quizData.result[0].act_quest.length;
            this.answerSet();
        },
        
        inpostAni : function(){
            //post 들어오는 애니메이션 들어올때 문장 셋팅.
            
            this.photoImg.hide();
            this.mainContant.show();
            this.postImg_back.hide();
            this.postImg.show();
            setTimeout($.proxy(function(){
                var url = controller.model.soundPath + "in";
                controller.effectManager.init(url);
                this.post.css({"left":"33px","top":"-550px"});
                this.post.animate({"top":29+"px"},
                {
                    duration: 1000,
                    specialEasing: {
                        top: "easeOutExpo"
                    },complete: $.proxy(animateCalback,this)
                });
            },this),1000);

            function animateCalback(){
                // var url = controller.model.soundPath +controller.model.activeAct+"/"+controller.model.activeLevel+"/sentence/set"+controller.model.quizSetNum+"/"+this.ques_num;
                // controller.soundManager.init(url,true,$.proxy(function(){
                // },this));
            }
        },
        exampleSet : function(){
            this.button.on("click", $.proxy(this.onButtonListener,this));
            var data = controller.model.quizData.result[0].act_quest;
            this.data = data;
            var answer = String(data[this.quiz_num].answer).split("|") || [];
            this.answer = answer;
            var example = String(data[this.quiz_num].example).split("|") || [];
            var example2 = String(data[this.quiz_num].example2).split("|") || [];
            var wrongExample = String(data[this.quiz_num].wrong_ans).split("|") || [];
            var quizArr = [];
            console.log("정답 = " + this.answer)
            developerTrace.trace("정답 : "+this.answer);

            for(var i=0;i<answer.length;i++){
                var arr = [];
                arr.push(answer[i]);
                arr.push(example[i]);
                arr.push(example2[i]);
                quizArr.push(randomArray.getRandomArray(arr));
            }
            console.log (this.post.find(".act5_quiz_text").length);
            console.log (quizArr);
            var arr = this.post.find(".act5_quiz_text");
            console.log(arr);
            var className = "act5_select_"+controller.model.activeLevel;
            for(i=0;i<arr.length;i++){
                $(arr[i]).html
                (
                    '<select id = "act5_custom_select" class="custom-select act5_select '+className+' font_embed">'+
                        '<option value="1" selected>'+wrongExample[i]+'</option>'+
                        '<option value="2">'+quizArr[i][0]+'</option>'+
                        '<option value="3">'+quizArr[i][1]+'</option>'+
                        '<option value="4">'+quizArr[i][2]+'</option>'+
                    '</select>'
                );
            }


            this.inpostAni();
        },
        onRotationAni : function(){ // 옆서 뒤집는 애니메이션..
            var url = controller.model.soundPath + "rotation";
            controller.effectManager.init(url);
            this.nextButtonArrow.hide();
            this.post.css({"transform": "rotateY(90deg)"});
            this.post.on('transitionend', $.proxy(function() { 
                this.post.off('transitionend');
                this.mainContant.hide();
                this.photoImg.show();
                this.postImg_back.show();
                this.postImg.hide();
                this.post.css({"transform": "rotateY(0deg)"});
                this.post.on('transitionend', $.proxy(function() { 
                    this.post.off('transitionend');
                    
                    this.post.css("cursor","pointer");
                    this.post.on("click", $.proxy(this.onPostClick,this));
                    // this.nextButton.fadeIn();
                },this));
             },this));           
        },

        onPostClick : function(e){
            this.post.off("click", $.proxy(this.onPostClick,this));
            this.post.css("cursor","default");
            this.nextButton.hide();
            this.quiz_num++;
            if(this.quiz_num < 3){ // 퀴즈가 3번쨰 이전이면 다음 문제 셋팅 
                this.nextpostAni();
                
            }else {
                this.onFinish();
            }
        },
        answerSet : function(){
            console.log("answerSet==============================")
            console.log(this.quiz_num);

            this.photoImg.hide();
            this.nextButton.hide();
            this.mainContant.show();

            this.post.find(".act5_textAnswer").off("click");
            this.post.find(".from_text").off("click");
            this.answerArr = [];
            var data = controller.model.quizData.result[0].act_quest;
            var questionText = data[this.quiz_num].sentence;
            questionText = String(questionText).replace("<span></span>", "<span class='act5_quiz_text'></span>");
            questionText = String(questionText).replace(/\(tmp\)/g, "<span class='act5_quiz_text'></span>");
            var num = parseInt(String(questionText).indexOf(","));
            var str1 = String(questionText).substring(0,num+1);
            var str2 = String(questionText).substring(num+1,String(questionText).length);
            var ques_num = data[this.quiz_num].ques_num;
            this.ques_num = ques_num;

            num = parseInt(String(data[this.quiz_num].from_all).indexOf(","));
            var str3 = String(data[this.quiz_num].from_all).substring(0,num+1);
            var str4 = String(data[this.quiz_num].from_all).substring(num+1,String(data[this.quiz_num].from_all).length);
            str4 = String(str4).replace("<span><p></p></span>", "<span class='act5_quiz_text'></span>");
            var str = str3+"<br>"+str4;
            console.log(str);

            
            
            var imgUrl = controller.model.imgPath+controller.model.activeAct+"/photo/"+controller.model.activeLevel+"/set"+data[this.quiz_num].set_num+"/"+data[this.quiz_num].ques_num+".png";
            
            this.post.find(".pos_img").attr("src",imgUrl);
            this.post.find(".act5_textAnswer").html("");
            this.post.find(".from_text").html("");
            this.post.find(".address1").html("");
            this.post.find(".address2").html("");
            this.post.find(".address3").html("");

            this.post.find(".act5_textAnswer").hide();
            this.post.find(".act5_textAnswer").html(str2).find("p").addClass("font_embed");
            this.post.find(".from_text").html(str1).addClass("font_embed");
            this.post.find(".from_text2").html(str).addClass("font_embed");
            this.post.find(".address1").html(data[this.quiz_num].address1).addClass("font_embed");
            this.post.find(".address2").html(data[this.quiz_num].address2).addClass("font_embed");
            this.post.find(".address3").html(data[this.quiz_num].address3).addClass("font_embed");

            
            this.post.find(".act5_textAnswer").fadeIn();
            this.post.find(".act5_textAnswer span").on("click",$.proxy(function(e){
                this.post.find(".act5_textAnswer").off("click");
                this.post.find(".act5_textAnswer span").off("click");
                console.log("act5_textAnswer click");
            },this));
            this.exampleSet();
            
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
            this.quiz_num = 0;
            controller.model.activeQuizSetNum = 1;
            $("#gameContainer").html("");
            controller.animationManager5.resetAni();
            this.testButtons.remove();
            
        },
        goToView1 : function(){
            $(window).trigger("result_go_back_act5");
            this.onReset();
            controller.onloadAct5("data");
        },
        onFinish : function(){
            console.log("onFinish");
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
            var url = "";
            if(controller.model.globalSetNum == 6){
                url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/letsgo";
                controller.soundManager.init(url,true,$.proxy(function(){
                    controller.loadFinditemGame("data");
                },this)); //경로.
            }else{
                url = controller.model.soundPath + controller.model.activeAct+"/character/finish";
                controller.characterManager.onCharacterPlay("speek",controller.characterManager.reedie,url, $.proxy(function(){
                    //1번 화면으로 이동
                    controller.characterManager.resetAni();
                    this.quiz_num = 0;
                    this.goToView1();
                },this)); //경로.
            }
        },
    };
    exports.Activity5Game = Activity5Game;
})(this);