(function(exports){
    function FindAndSeek(){
        this.objPosition = 
        [
            //part1
            [
                [{x:598,y:424},{x:9,y:501},{x:319,y:3},{x:917,y:373},{x:507,y:409}], //놀이터 셋트1 비치볼, 모래상자, 자전거, 보라색버킷, 축구공
                [{x:143,y:205},{x:138,y:345},{x:77,y:13},{x:483.5,y:26},{x:584,y:289}], //놀이터 셋트2 초록터널, 회전기구, 왼쪽그네, 왼쪽벤치, 말
                [{x:699.5,y:53},{x:625,y:58},{x:378,y:107},{x:627,y:27},{x:695,y:388}], //놀이터 셋트3 미끄럼틀, 식수대, 정글짐, 오른쪽벤치, 시소
                [{x:523,y:381},{x:326,y:469},{x:187.5,y:13},{x:138,y:345},{x:319,y:3}]  //놀이터 셋트4 줄넘기, 야구공, 오른쪽 그네, 회전기구, 빨강 자전거.
            ],
            [
                [{x:22,y:33},{x:376,y:150},{x:101,y:454},{x:696,y:394},{x:285,y:265}], //빨간 박스, 벽포스터, 무지개색러그, 노랑소파, 빨강노랑 책진열대
                [{x:593,y:262},{x:165,y:495},{x:295,y:452},{x:161,y:526},{x:191,y:343}], // 세일 싸인, 열린책, 원형테이블, 파랑의자, 두꺼운 검정 책
                [{x:673,y:478},{x:298,y:177},{x:409,y:475},{x:599,y:133},{x:656,y:227}], // 쌓여있는책, 오랜지색풍선들, 원형태이블위에 중앙에 있는책, 시계 , 컴퓨터
                [{x:297,y:381},{x:508,y:174},{x:661,y:527},{x:640,y:76},{x:219,y:286}] // 테이블, 초록풍선들, 보라색의자, 인포싸인, 벤치.
            ],
            [
                [{x:621,y:244},{x:153,y:88},{x:681,y:551},{x:450,y:187},{x:562,y:414}],//토이박스, 작은 로봇, 장난감 자동차, 베게, 반바지 
                [{x:456,y:393},{x:814,y:378},{x:437,y:468},{x:14.5,y:361.5},{x:174.3,y:241.5}],//야구공, 비치볼, 열린책, 러그, 이불
                [{x:2,y:237},{x:581,y:34},{x:170,y:170},{x:233.5,y:201.7},{x:-3,y:207}],// 포스트가담긴박스, 가방, 램프, 큐브, 책상
                [{x:480,y:81},{x:1,y:152},{x:65,y:174.5},{x:59,y:381},{x:281,y:463}] // 침대위선반에 책들, 지구본, 책상위 연필꽃이, telescope, 런치박스
            ],
            [
                [{x:865,y:58},{x:471,y:316},{x:244,y:484},{x:390,y:182},{x:759,y:113}], //블랙툴박스, 자, 버켓, 삽, 빨강케비넷
                [{x:186,y:129},{x:807,y:348},{x:171,y:248},{x:57,y:240},{x:819,y:511}], //안전안경, 붓, 오랜지쇼핑바구니, 케쉬 레지스터, 노란 로프
                [{x:885,y:331.5},{x:517,y:201.5},{x:437.5,y:169.5},{x:244,y:31},{x:942,y:426}], //망치 , 사다리, 빗자루, 노랑페인트, 자전거 열쇠
                [{x:198.5,y:185.5},{x:616,y:144.2},{x:515,y:323},{x:486,y:42},{x:395,y:36}] //목장갑, 톱, 새깔 종이 테이프, 핑크 페인트, 박스
            ],
            [
                [{x:1,y:197},{x:83,y:457},{x:222.7,y:475.7},{x:227,y:216},{x:283,y:249.5}], //시계, 백팩, 공바구니, 축구공, 곰인형
                [{x:312,y:82},{x:837,y:344},{x:324,y:351},{x:467,y:241},{x:222,y:177}], //벽시계, 막대사탕, cones, 케쉬레지스터, 농구공
                [{x:541,y:490},{x:490,y:369.5},{x:98,y:313.5},{x:397,y:438},{x:838,y:485}], // 지팡이사탕, 테이블, 필통, 개구리 인형, 머그컵
                [{x:78,y:348},{x:231.5,y:257.5},{x:190,y:300.5},{x:448,y:320.5},{x:79,y:186}] // 크레이용박스들, 야구공, 배드민턴 라켓, 소방차, 야구모자.
            ],
            //part2
            [
                [{x:828,y:47},{x:436,y:531},{x:260,y:222},{x:362.5,y:79},{x:89,y:523}], //거울, 바닥에있는가방, 램프, 책선반, 연필통
                [{x:4,y:354},{x:809,y:191},{x:861,y:352},{x:229.5,y:485.5},{x:923,y:292}], //빨래 바구니, 알람 시계, 양말, 곰인형, 쓰레기통
                [{x:580,y:27},{x:709,y:100},{x:62.8,y:265.8},{x:416,y:199},{x:635,y:299}], //옷장, 우산, 서랍장, 배게, 잠옷
                [{x:183.5,y:253},{x:354.5,y:157.5},{x:117,y:273},{x:197.5,y:453.5},{x:518,y:272}]  //달력, 침대, 루빅큐브, 러그, 핸드폰
            ],
            [
                [{x:143,y:186},{x:528,y:508},{x:598,y:330},{x:472,y:534},{x:603,y:521}], //냉장, 냄비,접시들, 볼, 햄버거빵, 
                [{x:517.3,y:382.8},{x:370,y:356},{x:663,y:387},{x:881,y:101},{x:796,y:319}], // 우유, 팬, 전자렌지, 시계, 스위치
                [{x:643,y:121.5},{x:274.7,y:334.8},{x:873,y:158},{x:260,y:449.5},{x:268,y:343.5}], // clean plates, 오븐, 출구표, 양상추 한박스, 감자튀귐한팬.
                [{x:165,y:128},{x:830,y:443},{x:114,y:451},{x:543,y:91},{x:489,y:315.5}]// 냉장고위박스, 쓰레기통, 토마토 한상자, 음료수컵, 빨간 냄비.
            ],
            [
                [{x:0,y:141.5},{x:758,y:71},{x:651,y:437},{x:392,y:310},{x:452,y:268}], //옷걸이, 벽에 단어장, 책가방, 식물, 연필깍기
                [{x:815,y:229},{x:142,y:278},{x:311,y:85},{x:772,y:446},{x:633,y:140}],//햄스터와우리, 보라색꽃, 하루일정, 크레용, 교실문
                [{x:727,y:301.5},{x:38,y:92},{x:384,y:474},{x:836,y:465},{x:454,y:410}], //초록케비넷, 지도, 오렌지의자, 주스, 필통
                [{x:942,y:371},{x:455.5,y:153},{x:64,y:419},{x:470,y:343},{x:915,y:482}] // 농구공, 달력, 연필통, 지구본, 사과.
            ],
            [
                [{x:-9,y:213},{x:686,y:60},{x:273,y:327},{x:639,y:370},{x:527,y:35}], //큰 식물, 피쉬탱크, 오렌지 테이블, 쌓인책, 책장
                [{x:414,y:352},{x:35,y:144},{x:264,y:67},{x:615,y:66},{x:403,y:237}], // 러그, 컴퓨터, 노랑색 책장, 길고 얇은책, 파랑색 소파
                [{x:668,y:157},{x:1,y:425},{x:539.5,y:225.5},{x:170,y:26},{x:242,y:431}], // 파랑색 캐비넛, 보라색 테이블, 핑크소파, 시계, 책가방
                [{x:338,y:351},{x:92.5,y:257},{x:705,y:261.5},{x:104,y:376},{x:958,y:86}] // 노랑색 의자, 쓰레기통, 빈백 의자, 초록색의자, 선인장.
            ],
            [
                [{x:825,y:176},{x:269,y:252},{x:0,y:168},{x:258,y:516},{x:430.5,y:234}], //버켓, 도끼, 소방서문, 소방관 가방, 소방관 잠바
                [{x:394,y:485},{x:512,y:220},{x:231,y:243},{x:6,y:420},{x:784,y:273}], //호스, 확성기, 삽, 교통 콘, 운전자 석
                [{x:679,y:188},{x:602.5,y:532},{x:104,y:331},{x:481,y:195},{x:165,y:483}], // 소방관 모자, 소방관 마스크, 소방관 장갑, 사다리, 소화기
                [{x:841,y:495},{x:240,y:154},{x:256,y:387},{x:281,y:470.5},{x:305,y:435}] // 소방관 부츠, 알람, 소화전, 컴페스, 플레쉬라이트
            ]
        ];
    }

    FindAndSeek.prototype = {
        getContent : function(){
            controller.characterManager.resetAni();
            controller.soundManager.allRemove();
            controller.videoManager.allRemove();
            // controller.view.activeAct.onReset();
            $(window).off("find_ani_end");
            $(window).on("find_ani_end", $.proxy(this.onSuccessSound,this));
            if(!controller.model.isFindButton){
                controller.model.globalSetNum = 6;
                controller.globalUI.updateUI();
            }
            controller.model.isFindButton = false;
            this.seccess = false;
            this.sec = 1000 * 30; // 30초
            this.sec2 = 1000 * 1; // 1초
            this.answerNum = 0; //정답 넘버 3이면 게임 클리어 데이터 저장 아이템 획득.
            this.setNum = 0;
            this.soundPath = controller.model.soundPath;
            this.globalLife = 3; //총5문제중 3번의 기회가 있다. 총5문제중 3문제를 맞춰야 게임 클리어 아이템 획득.
            this.soundPath = controller.model.soundPath;
            this.imgPath = controller.model.imgPath;
            this.objectArr = [];
            console.log("아이템 찾기 게임 ");
            this.data = controller.model.getActGameData().result[0].act_quest[0];
            controller.model.coin = controller.model.getActGameData().user_coin;
            $("#pointPanel").find("span").html(controller.model.coin);
            if(controller.model.localDataMode == true){
                this.data.ref2 = controller.model.find_place;
                this.data.ref3 = controller.model.find_set;
            }
            console.log(this.data);
            console.log("장소 넘버 : "+this.data.ref2);
            console.log("셋트 넘버 : "+this.data.ref3);
            this.itemArr = randomArray.getRandomArrayNumber(this.objPosition[parseInt(this.data.ref2)-1][parseInt(this.data.ref3)-1]);
            this.gameContain = $("#gameContainer");
            var bg = $('<div style="z-index: 0;background:url(./asset/img/findAndSeek/'+this.data.ref2+'/bg.png);position:absolute;width:1000px; height:630px;"></div>');
            this.bg = bg;
            this.gameContain.append(bg);
            var testButtons = $("<div class='testButtons'></div>");
            
            this.activeSet = $("<div>현제 set : <span></span></div>");
            this.quizChance = $("<div>문제 기회 : <span></span></div>");
            this.selectChance = $("<div>선택 기회 : <span></span></div>");
            this.quizAnswer = $("<div>맞춘 문제 : <span></span></div>");
            testModule.testButtonInit(testButtons);
            testButtons.append(this.activeSet);
            testButtons.append(this.quizChance);
            testButtons.append(this.selectChance);
            testButtons.append(this.quizAnswer);

            var url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/start";
            controller.soundManager.init(url,true,$.proxy(function(){
                this.setItems(); // 문제의 아이템을 스테이지에 위치 시켜 준다.
                this.nextGame();
                this.onInterval();
            },this)); //경로.
            $("body").keydown(function(event){
                console.log(event.ctrlKey);
                var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
                console.log(pressedKey);
                if (event.ctrlKey && (pressedKey == "a")) {
                  // disable key press porcessing
                  console.log(event.returnValue);
                //   event.returnValue = false;
                  return false;
                }
            });
        },
        onInterval : function(){
            this.interval = setInterval($.proxy(function(){
                var num = parseInt(Math.random() * 4)+1;
                var path = this.soundPath + "/findAndSeek/"+this.pathName+"/interval"+num;
                controller.soundManager.init(path,true);
            },this),this.sec);
        },
        setItems : function(){
            this.pathName = "";
            if(parseInt(this.data.ref2) <= 5) this.pathName = "common1";
            else this.pathName = "common2";
            for(var i=0;i<5;i++){
                var item = $("<div><img value = '"+(i+1)+"' src='"+this.imgPath+"findAndSeek/"+this.data.ref2+"/set"+this.data.ref3+"/object"+(i+1)+".png' />"+
                "<img class = '' src='"+this.imgPath+"findAndSeek/"+this.data.ref2+"/set"+this.data.ref3+"/object"+(i+1)+"_over.png'></div>");
                this.gameContain.append(item);
                this.objectArr.push(item);
                var x = this.objPosition[parseInt(this.data.ref2)-1][parseInt(this.data.ref3)-1][i].x;
                var y = this.objPosition[parseInt(this.data.ref2)-1][parseInt(this.data.ref3)-1][i].y;
                item.css({"position":"absolute","left":x+"px","top":y+"px"});
                item.find("img:nth-child(2)").css({"position":"absolute","left":"0px","top":"0px"});
                item.find("img:nth-child(2)").hide();
            }

        },
        nextGame : function(){
            this.clickNum = "";
            this.quizLife = 3; //한문제당 위치 클릭 기회값은3
            this.quizNum = this.itemArr[this.setNum]; // 0 1 2 3 4 현제 퀴즈 번호.
            this.activeSet.find("span").html(this.quizNum+1);
            this.selectChance.find("span").html(this.quizLife);
            this.quizChance.find("span").html(this.globalLife);
            //문제 사운드 플레이.
            this.objectArr[this.itemArr[this.setNum]].off("click", $.proxy(this.onItemClick,this));
            this.bg.off("click",$.proxy(this.onRootClick,this));
            var path = this.soundPath + "/findAndSeek/"+this.data.ref2+"/set"+this.data.ref3+"/answer"+(parseInt(this.itemArr[this.setNum])+1);
            controller.soundManager.init(path,true);
            for(var i=0;i<this.objectArr.length;i++){
                this.objectArr[i].hide();
            }
            this.objectArr[this.itemArr[this.setNum]].show();
            this.objectArr[this.itemArr[this.setNum]].on("click", $.proxy(this.onItemClick,this));
            this.bg.on("click",$.proxy(this.onRootClick,this));
        },
        
        goHome : function(value){
            controller.view.activeAct.onReset();
            $("#gameContainer").html("");
            controller.loadHome();
        },
        onDataSave : function(isSuccess){
            var obj = {};
            obj.main_cd = "008";
            obj.sub_cd = this.data.sub_cd;
            obj.yes_yn = isSuccess;
            obj.yes_cnt = this.answerNum;
            obj.fail_cnt = 3 - this.globalLife;
            

            // sub_cd,mode_sub_cd,yes_yn,yes_cnt,fail_cnt 

            if(isSuccess == "Y") this.seccess = true;
            controller.dataManager.findAndSeek(obj,$.proxy(this.goHome,this)); // 오브젝트 , 콜백 함수
        },
        onWorngSound : function(){ // 틀렸을때 리액션 사운드 
            this.bg.off("click",$.proxy(this.onRootClick,this));
            var num = parseInt(Math.random() * 5)+1;
            var path = this.soundPath + "/findAndSeek/"+this.pathName+"/worngReaction"+num;
            controller.soundManager.init(path,true,$.proxy(this.onWorngNext,this));
        },
        onWorngNext : function(){
            
            this.interval2 = setTimeout($.proxy(function(){
                var path = "";
                if(this.quizLife == 2){
                    //처음 틀리면
                    path = this.soundPath + "/findAndSeek/"+this.data.ref2+"/set"+this.data.ref3+"/wrong1/"+(parseInt(this.itemArr[this.setNum])+1);
                    controller.soundManager.init(path,true);
                }else if(this.quizLife == 1){
                    //두번 틀리면
                    path = this.soundPath + "/findAndSeek/"+this.data.ref2+"/set"+this.data.ref3+"/wrong2/"+(parseInt(this.itemArr[this.setNum])+1);
                    controller.soundManager.init(path,true);
                }else if(this.quizLife == 0){
                    //세번 틀리면
                    this.bg.off("click",$.proxy(this.onRootClick,this));
                    this.globalLife--; //글로벌 게임 기회 -1점 0점이면 게임셋.
                    console.log("3번기회 사용 오답처리");
                    this.objectArr[this.itemArr[this.setNum]].find("img:nth-child(2)").addClass("object_over");
                    this.onButtonAni();
                    path = this.soundPath + "/findAndSeek/"+this.data.ref2+"/set"+this.data.ref3+"/wrong3/"+(parseInt(this.itemArr[this.setNum])+1);
                    controller.soundManager.init(path,true,$.proxy(this.setReplayButton,this));
                }
                this.bg.on("click",$.proxy(this.onRootClick,this));
            },this),this.sec2);
        },
        onButtonAni : function(){
            var obj = this.objectArr[this.itemArr[this.setNum]].find(".object_over");
            obj.fadeIn(1000,$.proxy(function(){
                obj.fadeOut(1000,$.proxy(this.onButtonAni,this));
            },this));
        },
        setReplayButton : function(){
            this.bg.off("click",$.proxy(this.onRootClick,this));
            this.objectArr[this.itemArr[this.setNum]].off("click", $.proxy(this.onItemClick,this));
            this.objectArr[this.itemArr[this.setNum]].on("click", $.proxy(this.onReplayButtonListener,this));
            this.objectArr[this.itemArr[this.setNum]].css("cursor","pointer");
            
        },
        onReplayButtonListener : function(e){
            if(this.globalLife == 0){ // 마지막 3번의 문제 기회에서 틀렸을때 홈으로 가기 처리
                console.log("game over and go home");
                clearInterval(this.interval);
                clearTimeout(this.interval2);
                // var num = parseInt(Math.random() * 4)+1;
                // path = this.soundPath + "/findAndSeek/"+this.pathName+"/gameover"+num;
                // controller.soundManager.init(path,true,$.proxy(function(){
                    var url = controller.model.soundPath +"findAndSeek/one";
                    controller.soundManager.init(url,true,$.proxy(function(){
                        var url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/fail";
                        controller.soundManager.init(url,true,$.proxy(function(){
                            this.onDataSave("N");
                        },this));
                    },this));
                // },this));
                
            }else{
                this.objectArr[this.itemArr[this.setNum]].css("cursor","default");
                this.objectArr[this.itemArr[this.setNum]].find("img:nth-child(2)").removeClass();
                this.setNum++;
                var num = parseInt(Math.random() * 4)+1;
                path = this.soundPath + "/findAndSeek/"+this.pathName+"/next"+num;
                controller.soundManager.init(path,true,$.proxy(this.nextGame,this));
            }
        },
        onRootClick : function(e){
            clearInterval(this.interval);
            clearTimeout(this.interval2);
            this.onInterval();
            console.log(this.clickNum);
            console.log(this.quizNum);
            if(this.clickNum == ""){
                console.log("오답");
                this.quizLife--;
                this.selectChance.find("span").html(this.quizLife);
                this.onWorngSound();
            }else if(this.quizNum+1 == this.clickNum){
                controller.effectManager.init("./asset/sound/findAndSeek/success");
                console.log("정답");
                this.answerNum++;
                this.quizAnswer.find("span").html(this.answerNum);
                var path = "";
                if(this.answerNum==3){
                    console.log("3문제 다 맞췄음.!!!");
                    clearInterval(this.interval);
                    clearTimeout(this.interval2);


                    var path = this.soundPath + "/findAndSeek/"+this.data.ref2+"/set"+this.data.ref3+"/finish/"+(parseInt(this.itemArr[this.setNum])+1);
                    controller.soundManager.init(path,true,$.proxy(function(){
                        controller.animationManager.findAni.init();
                        console.log(this.data);
                        controller.model.find_item = this.data.sub_cd;
                        this.item = $("<img style='position: absolute; z-index:100000; id='find_item' src='"+this.imgPath+"findAndSeek/"+this.data.sub_cd+".png' />");
                        $("#root").prepend(this.item);
                        this.item.css({"left":"460px","top":"275px"});
                        this.item.hide();
    
                        this.item.fadeIn(50);
                        // {"width":"150px","height":"150px","left":"425px","top":"240px"}
                        // {"width":"100px","height":"100px","left":"450px","top":"265px"}
                        this.item.animate({"width":"150px","height":"150px","left":"425px","top":"240px"},
                        {
                            duration: 300,
                            specialEasing: {
                                left: "easeOutBounce",
                                top: "easeOutBounce",
                                width: "easeOutBounce",
                                height: "easeOutBounce",
                                
                            },complete: $.proxy(nextpostAnimateCalback,this)
                        });
    
                        function nextpostAnimateCalback(){
                            this.item.animate({"width":"100px","height":"100px","left":"450px","top":"265px"},
                            {
                                duration: 300,
                                specialEasing: {
                                    left: "easeOutBounce",
                                    top: "easeOutBounce",
                                    width: "easeOutBounce",
                                    height: "easeOutBounce",
                                    
                                },complete: $.proxy(nextpostAnimateCalback2,this)
                            });
                        }
    
                        function nextpostAnimateCalback2(){
                            // this.onDataSave("Y");
                        }
                    },this));

                    

                    // $("#gameContainer").html("");
                    // controller.view.activeAct.onReset();
                    // controller.loadHome();
                }else{
                    path = this.soundPath + "/findAndSeek/"+this.data.ref2+"/set"+this.data.ref3+"/right/"+(parseInt(this.itemArr[this.setNum])+1);
                    controller.soundManager.init(path,true,$.proxy(this.nextGame,this));
                    this.setNum++;
                }
            }
        },

        onSuccessSound : function(){
            this.item.fadeOut(1000,$.proxy(function(){
                this.onDataSave("Y");
            },this));
            

            // var path = this.soundPath + "/findAndSeek/"+this.data.ref2+"/set"+this.data.ref3+"/finish/"+(parseInt(this.itemArr[this.setNum])+1);
            // controller.soundManager.init(path,true,$.proxy(function(){
            // },this));
        },
        onItemClick : function(e){
            console.log($(e.target).attr("value"));
            this.clickNum = $(e.target).attr("value");
            this.onRootClick();
        },
        onReset : function(){
            //click 이벤트 삭제
            clearInterval(this.interval);
            clearTimeout(this.interval2);
            this.bg.off("click",$.proxy(this.onRootClick,this));
        }
    };
    exports.FindAndSeek = FindAndSeek;
})(this);
