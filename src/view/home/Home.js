(function(exports){
    function Home(value){
        this.data = value || {itam:1,setPlaying:1};
        $.getScript("src/AnimationManager.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                console.log("AnimationManager"+textStatus);
                controller.animationManager = new AnimationManager(); //에니메이션 메니져 생성
                controller.animationManager.init();
            }
        },this));
    }
    
    Home.prototype = {
        onReset : function () {
            console.log("reset home!");
        },
        updateItem : function(){
            var arr = String(controller.model.myItems).split(",");
            if(arr.length > 0 && arr != ""){
                for(var i=0;i<arr.length;i++){
                    if(controller.model.isPart == "1"){
                        this.item_ui.find("#item_contain").append($("<img src='./asset/img/findAndSeek/"+arr[i]+".png' / value = '"+arr[i]+"'>"));
                        this.item_ui.find("#item_contain img:nth-child("+(i+1)+")").on("click", $.proxy(this.onItemClick,this));
                        this.item_ui.find("#item_contain img:nth-child("+(i+1)+")").css("cursor","pointer");
                    }else{
                        this.item_ui.find("#item_contain").append($("<img src='./asset/img/findAndSeek/"+arr[i]+".png' / value = '"+arr[i]+"'>"));
                        this.item_ui.find("#item_contain img:nth-child("+(i+1)+")").on("click", $.proxy(this.onItemClick,this));
                        this.item_ui.find("#item_contain img:nth-child("+(i+1)+")").css("cursor","pointer");
                        // this.item_ui.find("#item_contain img:nth-child("+(parseInt(arr[i])-20)+")").attr("value",(parseInt(arr[i])-20));
                        // this.item_ui.find("#item_contain img:nth-child("+(parseInt(arr[i])-20)+")").on("click", $.proxy(this.onItemClick,this));
                        // this.item_ui.find("#item_contain img:nth-child("+(parseInt(arr[i])-20)+")").css("cursor","pointer");
                    }
                }
            }
        },
        itemAni : function(){
            console.log("iotem anui");
            this.item_ui.animate({"top":"0px"});
            $("#item_ui_arrow").attr("src","./asset/img/common/up.png");
            var item = this.item_ui.find("#item_contain img:nth-child("+controller.model.find_item+")").show();
            item.fadeOut(1000,function(){
                item.fadeIn(1000,function(){
                    item.fadeOut(1000,function(){
                        item.fadeIn(1000,function(){
                            item.fadeOut(1000,function(){
                                item.fadeIn(1000,function(){
                                    
                                });
                            });
                        });
                    });
                });
            });
        },

        onItemClick : function(e){
            var item = $(e.currentTarget);
            console.log(item.attr("value"));
            var url = controller.model.soundPath + "findAndSeek/part"+controller.model.isPart+"/" + item.attr("value");
            controller.soundManager.init(url,true); //경로.
        },


        getContent : function(){
            controller.model.viewName = "home";
            this.imgPath = "./asset/img/home"+controller.model.isPart+"/";
            controller.model.allComplete = controller.isComplete.getComplete();
            
            $.each(controller.model.getHomeData(), function (indexInArray, valueOfElement) { 
                console.log(indexInArray+" // "+valueOfElement);
            });
            console.log(controller.model.myItems);
            var item_ui = $("<div id='item_ui'><img id = 'item_ui_arrow' src ='./asset/img/common/down.png'/><div id='item_contain'></div><button id='none_button'></button><img src='./asset/img/common/itemList.png' /></div>");
            this.item_ui = item_ui;
            // for(var i=0;i<20;i++){
            //     item_ui.find("#item_contain").append($("<img src='./asset/img/findAndSeek/"+(i+1)+".png' />"));
            //     this.item_ui.find("#item_contain img:nth-child("+(i+1)+")").hide();
            // }
            var bg = $('<div class="act1_background_bg" style="z-index: -1;background:url('+this.imgPath+'pt01_bg.png);position:absolute;width:1000px; height:630px;"></div>');

            var nouns = $("<div id='nouns_button' class='img_button'></div>");
            var verbs = $("<div id='verbs_button' class='img_button'></div>");
            var adjectives = $("<div id='adjectives_button' class='img_button'></div>");
            var adverbs = $("<div id='adverbs_button' class='img_button'></div>");
            var act2 = $("<div id='act2_button' class='img_button'></div>");
            var act3 = $("<div id='act3_button' class='img_button'></div>");
            var reedieHome = $("<div id='reedie_Home' class='img_button'></div>");
            var home1 = $("<div id='part1_Home1'></div>");
            var home2 = $("<div id='part1_Home2'></div>");
            var home3 = $("<div id='part1_Home3'></div>");
            var home4 = $("<div id='part1_Home4'></div>");
            var findGame = $("<div id='findgame_button'></div>");
            var certificate = $("<div id='certi_buttin'></div>");
            this.certificate = certificate;
            $("#gameContainer").append(adverbs);
            $("#gameContainer").append(adjectives);
            $("#gameContainer").append(verbs);
            $("#gameContainer").append(nouns);
            $("#gameContainer").append(act2);
            $("#gameContainer").append(act3);
            $("#gameContainer").append(reedieHome);
            $("#gameContainer").append(home1);
            $("#gameContainer").append(home2);
            $("#gameContainer").append(home3);
            $("#gameContainer").append(home4);
            $("#gameContainer").append(findGame);
            $("#gameContainer").append(certificate);
            // findGame.hide();
            // certificate.hide();
            new ButtonUtil().init("nouns_button",this.imgPath,"Nouns","");
            new ButtonUtil().init("verbs_button",this.imgPath,"Verbs","");
            new ButtonUtil().init("adjectives_button",this.imgPath,"Adjectives","");
            new ButtonUtil().init("adverbs_button",this.imgPath,"Adverbs","");
            new ButtonUtil().init("act2_button",this.imgPath,"act2","");
            new ButtonUtil().init("act3_button",this.imgPath,"act3","");
            new ButtonUtil().init("reedie_Home",this.imgPath,"reedieHome","");
            new ButtonUtil().init("findgame_button","./asset/img/","find","");
            new ButtonUtil().init("certi_buttin","./asset/img/","certi","");
            if(!controller.isComplete.getActComplete()) findGame.hide();
            if(!controller.isComplete.getComplete()) certificate.hide();
            $("#gameContainer").append(bg);
            $("#gameContainer").append(item_ui);
            
            this.reedieHomeBool = true;
            // $("#item_ui").append("items : "+controller.model.getHomeData().items+" setNum : "+controller.model.getHomeData().playingSetNum);
            $("#none_button").on("click",$.proxy(this.onItemClickListener,this));
            nouns.on("click", $.proxy(this.onClickListener,this));
            verbs.on("click", $.proxy(this.onClickListener,this));
            adjectives.on("click", $.proxy(this.onClickListener,this));
            adverbs.on("click", $.proxy(this.onClickListener,this));
            act2.on("click", $.proxy(this.onClickListener,this));
            act3.on("click", $.proxy(this.onClickListener,this));
            reedieHome.on("click", $.proxy(this.onClickListener,this));
            home1.on("click", $.proxy(this.onClickListener,this));
            home2.on("click", $.proxy(this.onClickListener,this));
            home3.on("click", $.proxy(this.onClickListener,this));
            home4.on("click", $.proxy(this.onClickListener,this));
            findGame.on("click", $.proxy(this.onClickListener,this));
            certificate.on("click", $.proxy(this.onClickListener,this));


            if(controller.view.activeAct == controller.view.findAndSeek){
                var url = "";
                arr = String(controller.model.myItems).split(",");
                var callback = function(){};
                if(arr.length == 20){
                    this.itemAni();
                    url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/complete";
                    callback = $.proxy(function(){
                        if(controller.model.allComplete && controller.model.isFinisiFirst){ // 물건20개 각액트 다 클리어면.
                            controller.onEnding()
                        }
                    },this);
                    controller.soundManager.init(url,true,callback); //경로.
                    // 
                }else if(controller.view.findAndSeek.seccess){
                    url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/success";
                    this.itemAni();
                    controller.soundManager.init(url,true,callback); //경로.

                }else{
                    // url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/fail";
                }
                
                
            }else{
                controller.model.isFinisiFirst = !controller.model.allComplete;
            }

            controller.view.findAndSeek.seccess = false;
            
        },
        onShowCertificateButton : function(){
            this.certificate.show();
        },
        getData : function(){
            return this.data;
        },
        setData : function(value){
            this.data = value;
        },
        playSound : function(value,block,callback){
            var url = controller.model.soundPath + "home/actClick/" + value;
            controller.soundManager.init(url,block,callback); //경로.
        },

        onItemClickListener : function(e){
            var str = $("#item_ui").css("top");
            var num = str.substr(0,str.indexOf("px"));
            if(num < 0){
                $("#item_ui_arrow").attr("src","./asset/img/common/up.png");
                $("#item_ui").animate({"top":"0px"});
            }else{
                $("#item_ui_arrow").attr("src","./asset/img/common/down.png");
                $("#item_ui").animate({"top":"-210px"});
            } 
        },
        onClickListener : function(e){
            switch(e.currentTarget.id){

                case "findgame_button" :
                controller.model.isFindButton = true;
                controller.dataManager.useCoin(controller.globalUI.coinAni);
                
                break;

                case "certi_buttin" :
                controller.view.onRenderCertificate();
                break;

                case "part1_Home1" :
                var num = parseInt(Math.random()*2)+2;
                var url = controller.model.soundPath + "home/"+num;
                controller.soundManager.init(url,true); //경로.
                break;

                case "part1_Home2" :
                var num = parseInt(Math.random()*2)+4;
                var url = controller.model.soundPath + "home/"+num;
                controller.soundManager.init(url,true); //경로.
                break;

                case "part1_Home3" :
                var num = parseInt(Math.random()*2)+6;
                var url = controller.model.soundPath + "home/"+num;
                controller.soundManager.init(url,true); //경로.
                break;

                case "part1_Home4" :
                var num = parseInt(Math.random()*2)+8;
                var url = controller.model.soundPath + "home/"+num;
                controller.soundManager.init(url,true); //경로.
                
                break;

                case "reedie_Home" :
                    if(this.reedieHomeBool){
                        var url = controller.model.soundPath + "reediehome";
                        controller.soundManager.init(url,true); //경로.
                    }else{
                        controller.bgmManager.init("");
                        $("#gameContainer").hide();
                        $("#globla_ui").hide();
                        var url = (controller.model.isOutro)?controller.model.videoPath+"/outro/part"+controller.model.isPart+"_outro":controller.model.videoPath+"/intro/part"+controller.model.isPart+"_intro";
                        controller.videoManager.init($("#top_vod"),url,false,function(){
                            $("#gameContainer").show();
                            url = controller.model.soundPath+"bgm/home";
                            controller.bgmManager.init(url);
                        });
                        $("#top_vod video").on("click",function(e){
                            url = controller.model.soundPath+"bgm/home";
                            controller.bgmManager.init(url);
                            $("#top_vod video").off("click");
                            controller.videoManager.allRemove();
                            $("#gameContainer").show();
                            $("#globla_ui").show();
                        });
                    }
                    this.reedieHomeBool = !this.reedieHomeBool;
                break;

                case "nouns_button" :
                this.playSound("Nouns",true,function(){
                    controller.model.viewName = "Nouns";
                    controller.model.activeAct = "act1";
                    $("#gameContainer").html("");
                    controller.onloadAct1();
                    controller.bgmManager.init(controller.model.soundPath+"/bgm/act1_1");
                });

                break;


                case "verbs_button" :
                this.playSound("Verbs",true,function(){
                    controller.model.viewName = "Verbs";
                    controller.model.activeAct = "act1";
                    $("#gameContainer").html("");
                    controller.onloadAct1();
                    controller.bgmManager.init(controller.model.soundPath+"/bgm/act1_2");
                });

                break;

                case "adjectives_button" :
                this.playSound("Adjectives",true,function(){
                    controller.model.viewName = "Adjectives";
                    controller.model.activeAct = "act1";
                    $("#gameContainer").html("");
                    controller.onloadAct1();
                    controller.bgmManager.init(controller.model.soundPath+"/bgm/act1_3");
                });

                break;

                case "adverbs_button" :
                this.playSound("Adverbs",true,function(){
                    controller.model.viewName = "Adverbs";
                    controller.model.activeAct = "act1";
                    $("#gameContainer").html("");
                    controller.onloadAct1();
                    controller.bgmManager.init(controller.model.soundPath+"/bgm/act1_4");
                });
                break;

                case "act2_button" :
                this.playSound("EatEmUp",true,function(){
                    controller.model.viewName = "EatEmUp";
                    controller.model.activeAct = "act2";
                    $("#gameContainer").html("");
                    controller.onloadAct2("data");
                    controller.bgmManager.init(controller.model.soundPath+"/bgm/act2");
                });

                break;

                case "act3_button" :
                this.playSound("PopPopPop",true,function(){
                    controller.model.viewName = "PopPopPop";
                    controller.model.activeAct = "act3";
                    $("#gameContainer").html("");
                    controller.onloadAct3("data");
                    controller.bgmManager.init(controller.model.soundPath+"/bgm/act3");
                });

                break;

                
            }
        }  
    };
    exports.Home = Home;
})(this);