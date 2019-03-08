(function(exports){
    function Activity1Resulte(){
        this.data = [];
        
        $(window).on("setResult", $.proxy(this.setResult,this));
    }

    Activity1Resulte.prototype = {
        initialize : function(){
        },
        updateView : function(){
            $(window).off("coin_ani_end");
            $(window).on("coin_ani_end", $.proxy(this.onCoinAniEnd,this));
            controller.dataManager.loadLog("init",{"quizNum":controller.model.quizSetNum},$.proxy(this.setView,this));
        },
        setView : function(){
            this.count = 0;
            this.data = controller.model.quizData.result[0].review;
            var testButtons = $("<div class='testButtons'></div>");
            var finishBtn = $("<div><button id='finishButton'>FINISH</button></div>");
            this.replayButton = $("<div class='act1_view4_replay_button'><img src='./asset/img/act1/replayButton.png' /></div>");
            this.note = $("<div id='result_note'><ul></ul><img src='./asset/img/act1/note.png'></div>");
            testModule.testButtonInit(testButtons);
            testButtons.append(finishBtn);
            $("#gameContainer").append(this.note);
            $("#gameContainer").append(this.replayButton);
            this.note.css({"top":"-600px"});
            this.note.animate({"top":"6px"},this.setNoteList());
            $("#finishButton").on("click",$.proxy(this.onComplate,this));
            this.setCharater();
            var url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/complete/" +controller.model.activeLevel+"/"+controller.model.viewName;
            controller.characterManager.onCharacterPlay("speek", this.character, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
            // controller.soundManager.init(url,true);
            
        },
        setNoteList : function(value){
            if(value == null){ // 값이 없으면 최초 리스트 셋팅;
                for(var i=0;i<this.data.length;i++){
                    var list = $("<li><div></div><img src='./asset/img/act1/resultLine.png' /><div><span class='font_embed'></span></div></li>");
                    $("#result_note ul").append(list);
                }
            }else{
                var str = "";
                for(var k=0;k<this.data.length;k++){
                    if(this.data[k].FILE_CD == value) str = this.data[k].SENTENCE;
                }
                for(var j=0;j<$("#result_note ul li").length;j++){
                    console.log($("#result_note ul li:nth-child("+(j+1)+") span").html());
                    if($("#result_note ul li:nth-child("+(j+1)+") span").html() == ""){
                        $("#result_note ul li:nth-child("+(j+1)+") span").attr("value",value);
                        $("#result_note ul li:nth-child("+(j+1)+") span").html(str);
                        $("#result_note ul li:nth-child("+(j+1)+")").on("click", $.proxy(this.textClick,this));
                        $("#result_note ul li:nth-child("+(j+1)+")").css("cursor","pointer");
                        $("#result_note ul li:nth-child("+(j+1)+") div:first-child").addClass("list_check");
                        break;
                    } 
                }
            }
            
        },
        setCharater : function(){
            console.log("------------------------------setCharater---------------------------------");
            var character;
            
            if(controller.model.viewName == "Adjectives") character = controller.characterManager.reedie;
            if(controller.model.viewName == "Adverbs") character = controller.characterManager.gram;
            if(controller.model.viewName == "Nouns") character = controller.characterManager.reedie;
            if(controller.model.viewName == "Verbs") character = controller.characterManager.gram;
            this.character = character;
            var arr = [];
            arr.push(new Object({
                character:character,
                x : 15,
                y : 260,
                index : 0
            }));
            controller.characterManager.onSetChrater("ani_canvas_characte",arr);//cavas id , 셋팅할 케릭터와 x y 좌표 obj 
            controller.characterManager.onRemoveClick(character);
        },
        textClick : function(e){
            this.playSound(controller.model.viewName+"/"+controller.model.activeLevel+"/"+$(e.currentTarget).find("span").attr("value"),true);
        },
        setResult : function(){
            this.data = controller.model.quizData.result[0].review;
            console.log(this.data);
            var chNum = 0;
            for(var i=0;i<$(".box_size").length;i++){
                $("#target"+i+" .box_inner>div:nth-child("+($("#target"+i+" .box_inner div").length)+")").remove();
            }
            for(i=0;i<this.data.length;i++){
                for(var j=0;j<$(".box_size").length;j++){
                    if(String(this.data[i].ANSWER).toUpperCase() == String($("#target"+j+" span").html().toUpperCase())){
                        chNum = j;
                        break;
                    } 
                }
                var num = $("#target"+chNum+" div").length;
                for(var k=0;k<num;k++){
                    if($("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") span").html() == ""){
                        var words = String(this.data[i].WORD).replace("/","/<br>");
                        words = String(words).replace(" ","<br>");
                        if("Dan-O’s Diner" != String(this.data[i].WORD)) words = String(words).replace("-","-<br>");
                        $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") span").html(words);
                        $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") span").attr("value",this.data[i].FILE_CD);
                        //  if(words.indexOf(" ") != -1){ // 띄어쓰기가 있으면
                        //     var arr = String(words).split(" ");
                        //     console.log(arr);
                        //     var str = (arr[0].length > arr[1].length)? arr[0]:arr[1];
                        //     console.log(str);
                        //     if(str.length <= 8 && str.length > 5){
                        //         $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") span").css({"font-size":"10pt","line-height":"9pt"});
                        //     }else if(str.length == 9){
                        //         $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") span").css({"font-size":"8pt","line-height":"8pt"});
                        //     }else if(str.length > 9){
                        //         $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") span").css({"font-size":"7pt","line-height":"7pt"});
                        //     }else{
                        //         $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") span").css({"font-size":"13pt","line-height":"13pt"});
                        //     } 
                        // }else{
                        //     if(String(words).length <= 8 && String(words).length > 5 && String(words).indexOf(" ") == -1 && String(words).indexOf("-") == -1){
                        //         $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") span").css({"font-size":"10pt"});
                        //     }else if(String(words).length == 9 && String(words).indexOf(" ") == -1 && String(words).indexOf("-") == -1){
                        //         $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") span").css({"font-size":"8pt"});
                        //     }else if(String(words).length > 9 && String(words).indexOf(" ") == -1 && String(words).indexOf("-") == -1){
                        //         $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") span").css({"font-size":"7pt"});
                        //     }else{
                        //         $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") span").css({"font-size":"13pt"});
                        //     } 
                        // }

                        var str = "";
                        var span = $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") span");
                        console.log(words)
                        if(words.indexOf("<br>") != -1){ // 띄어쓰기가 있으면
                            var arr = words.split("<br>");
                            str = (arr[0].length > arr[1].length)? arr[0]:arr[1];
                        }else{
                            str = words;
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

                        $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") .act1_game_ball_img").fadeIn(250);
                        $("#target"+chNum+" .box_inner>div:nth-child("+(k+1)+") .act1_game_ball_img>img").hide();
                        break;
                    }
                }
            }
            var arr = [];
            for(i=0;i<$(".box_size").length;i++){ // 2
                console.log($("#target"+i+" .box_inner .act1_result_ball").length);
                for(var k=0;k<$("#target"+i+" .box_inner .act1_result_ball").length;k++){
                    console.log($("#target"+i+" .box_inner .show_ball:nth-child("+(k+1)+")").find("span").text());
                    if($("#target"+i+" .box_inner .show_ball:nth-child("+(k+1)+")").find("span").text() == ""){
                        arr.push($("#target"+i+" .box_inner .show_ball:nth-child("+(k+1)+")"));
                    }
                }
            }

            for(i=0;i<arr.length;i++){
                arr[i].remove();
            }
            $(".show_ball").on("click",$.proxy(this.onClickBall,this)).css("cursor","pointer");
            $(".show_ball").on("mouseover",$.proxy(this.onClickBall,this));
        },
        onClickBall : function(e){
            switch(e.type){
                case "click" : 
                    var url = controller.model.soundPath + controller.model.activeAct+"/"+controller.model.viewName+"/"+controller.model.activeLevel+"/"+$(e.currentTarget).find(".act1_table_contain span").attr("value");
                    if($(e.currentTarget).attr("class") == "show_ball isClick"){
                        controller.soundManager.init(url,true); //경로.
                        return;
                    }
                    this.setNoteList($(e.currentTarget).find(".act1_table_contain span").attr("value"));
                    $(e.currentTarget).addClass("isClick");
                    $(e.currentTarget).find(".act1_game_ball_img img").fadeIn();
                    var str = $(e.target).html();
                    var len = $("#result_note ul li").length;
                    this.count = 0;
                    for(var i=0;i<len;i++){
                        if(str == $("#result_note ul li:nth-child("+(i+1)+")").attr("value")){
                            $("#result_note ul li:nth-child("+(i+1)+") div:first-child").addClass("list_check");
                        }
                        if($($("#result_note ul li:nth-child("+(i+1)+")").find(".list_check")).length == 1) this.count++;
                    }
                    controller.soundManager.init(url,true, $.proxy(function(){
                        if(this.count == len){
                            $(".show_ball").off("mouseover");
                            this.onComplate();
                        }
                    },this)); //경로.
                break;

                case "mouseover" :
                var str = String($(e.currentTarget).find(".act1_table_contain span").html());
                str = String(str).replace("/<br>"," ");
                str = String(str).replace("-<br>"," ");
                str = String(str).replace("<br>"," ");
                if(str == "Dan-O’s Diner") str = "Dan";
                this.playSound("words/"+str);
                break;
            }
            
        },
        playSound : function(value,isblock){
            var url = controller.model.soundPath + "act1/"+ value;
            controller.soundManager.init(url,isblock); //경로.
        },
        onComplate : function(e){
            controller.dataManager.loadLog("end",{"quizNum":controller.model.quizSetNum},$.proxy(this.onComplateSound,this),true);
        },
        onComplateSound : function(){
            controller.animationManager.coin.init();
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
                url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/finish/" +controller.model.activeLevel+"/"+controller.model.viewName;
                if(controller.model.viewName == "Nouns"){
                    if(controller.model.activeLevel == "Medium"){
                        if(controller.model.quizSetNum == "1" || controller.model.quizSetNum == "3" || controller.model.quizSetNum == "5"){
                            url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/finish/Easy/"+controller.model.viewName;
                        }
                    }

                    if(controller.model.activeLevel == "Hard"){
                        if(controller.model.quizSetNum == "2" || controller.model.quizSetNum == "4"){
                            url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/finish/Medium/"+controller.model.viewName;
                        }
                    }
                }

                if(controller.model.viewName == "Verbs"){
                    if(controller.model.activeLevel == "Medium"){
                        if(controller.model.quizSetNum == "1" || controller.model.quizSetNum == "3" || controller.model.quizSetNum == "5"){
                            url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/finish/Easy/"+controller.model.viewName;
                        }
                    }
                }

                if(controller.model.viewName == "Adjectives"){
                    if(controller.model.activeLevel == "Medium"){
                        if(controller.model.quizSetNum == "2" || controller.model.quizSetNum == "4"){
                            url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/finish/Medium/"+controller.model.viewName;
                        }
                    }

                    if(controller.model.activeLevel == "Hard"){
                        if(controller.model.quizSetNum == "2" || controller.model.quizSetNum == "4"){
                            url = controller.model.soundPath +"/"+controller.model.activeAct+"/character/finish/Medium/"+controller.model.viewName;
                        }
                    }
                }

               
                controller.characterManager.onCharacterPlay("speek", this.character, url, null, true);// 동작 타입, 움직을 케릭터, 음성 경로
                $(".show_ball").on("mouseover",$.proxy(this.onClickBall,this));
                this.replayButton.on("click", $.proxy(this.onFinished,this)).css("cursor","pointer"); 
            }
        },
        onFinished : function(e){
            
            var url = controller.model.soundPath + controller.model.activeAct+"/character/replayClick/"+controller.model.viewName;
            controller.characterManager.onCharacterPlay("speek", this.character, url,  $.proxy(function(){
                controller.characterManager.resetAni();
                $("#gameContainer").html("");
                controller.onloadAct1("data");
                $(window).trigger("result_go_back");
            },this), true);// 동작 타입, 움직을 케릭터, 음성 경로
        }
    };
    exports.Activity1Resulte = Activity1Resulte;
})(this);


