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
                    console.log(arr[i]);
                    if(controller.model.isPart == "1"){
                        this.item_ui.find("#item_contain").append($("<img src='./asset/img/findAndSeek/"+arr[i]+".png' / value = '"+arr[i]+"'>"));
                        this.item_ui.find("#item_contain img:nth-child("+(i+1)+")").on("click", $.proxy(this.onItemClick,this));
                        this.item_ui.find("#item_contain img:nth-child("+(i+1)+")").css("cursor","pointer");
                    }else{
                        this.item_ui.find("#item_contain").append($("<img src='./asset/img/findAndSeek/"+arr[i]+".png' / value = '"+(parseInt(arr[i])-20)+"'>"));
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
            var item = this.item_ui.find("#item_contain img:nth-child("+(parseInt(controller.model.find_item)-20)+")").show();
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
            console.log("게임 클리어 여부 확인 : "+controller.isComplete.getComplete());
            controller.model.allComplete = controller.isComplete.getComplete();
            
            $.each(controller.model.getHomeData(), function (indexInArray, valueOfElement) { 
                console.log(indexInArray+" // "+valueOfElement);
            });
            console.log(controller.model.myItems);
            var item_ui = $("<div id='item_ui'><img id = 'item_ui_arrow' src ='./asset/img/common/down.png'/><div id='item_contain'></div><button id='none_button'></button><img src='./asset/img/common/itemList.png' /></div>");
            this.item_ui = item_ui;
            for(var i=20;i<40;i++){
                // item_ui.find("#item_contain").append($("<img src='./asset/img/findAndSeek/"+(i+1)+".png' />"));
                // this.item_ui.find("#item_contain img:nth-child("+((i+1)-20)+")").hide();
            }
            var bg = $('<div class="act1_background_bg" style="z-index: -1;background:url('+this.imgPath+'pt02_bg.png);position:absolute;width:1000px; height:630px;"></div>');

            var act4 = $("<div id='act4_button' class='img_button'></div>");
            var act5 = $("<div id='act5_button' class='img_button'></div>");
            var act6 = $("<div id='act6_button' class='img_button'></div>");
            var act7 = $("<div id='act7_button' class='img_button'></div>");
            var reedieHome = $("<div id='reedie_Home' class='img_button'></div>");
            var home1 = $("<div id='part1_Home1'></div>");
            var home2 = $("<div id='part1_Home2'></div>");
            var home3 = $("<div id='part1_Home3'></div>");
            var home4 = $("<div id='part1_Home4'></div>");
            var findGame = $("<div id='findgame_button'></div>");
            var certificate = $("<div id='certi_buttin'></div>");
            $("#gameContainer").append(act4);
            $("#gameContainer").append(act5);
            $("#gameContainer").append(act6);
            $("#gameContainer").append(act7);
            $("#gameContainer").append(reedieHome);
            $("#gameContainer").append(home1);
            $("#gameContainer").append(home2);
            $("#gameContainer").append(home3);
            $("#gameContainer").append(home4);
            $("#gameContainer").append(findGame);
            $("#gameContainer").append(certificate);
            new ButtonUtil().init("act4_button",this.imgPath,"act4","");
            new ButtonUtil().init("act5_button",this.imgPath,"act5","");
            new ButtonUtil().init("act6_button",this.imgPath,"act6","");
            new ButtonUtil().init("act7_button",this.imgPath,"act7","");
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
            act4.on("click", $.proxy(this.onClickListener,this));
            act5.on("click", $.proxy(this.onClickListener,this));
            act6.on("click", $.proxy(this.onClickListener,this));
            act7.on("click", $.proxy(this.onClickListener,this));
            reedieHome.on("click", $.proxy(this.onClickListener,this));
            home1.on("click", $.proxy(this.onClickListener,this));
            home2.on("click", $.proxy(this.onClickListener,this));
            home3.on("click", $.proxy(this.onClickListener,this));
            home4.on("click", $.proxy(this.onClickListener,this));
            findGame.on("click", $.proxy(this.onClickListener,this));
            certificate.on("click", $.proxy(this.onClickListener,this));

            if(controller.view.activeAct == controller.view.findAndSeek){
                var url = "";
                var arr = String(controller.model.myItems).split(",");
                var callback = function(){};
                if(arr.length == 20){
                    this.itemAni();
                    url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/complete";
                    callback = $.proxy(function(){
                        if(controller.model.allComplete && controller.model.isFinisiFirst){ // 물건20개 각액트 다 클리어면.
                            controller.onEnding()
                        }
                    },this);
                    // 
                }else if(controller.view.findAndSeek.seccess){
                    url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/success";
                    this.itemAni();
                }else{
                    url = controller.model.soundPath +"findAndSeek/common"+controller.model.isPart+"/fail";
                }
                
                controller.soundManager.init(url,true,callback); //경로.
            }else{
                controller.model.isFinisiFirst = !controller.model.allComplete;
            }
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
                var url = controller.model.soundPath + "home2/"+num;
                controller.soundManager.init(url,true); //경로.
                break;

                case "part1_Home2" :
                var num = parseInt(Math.random()*2)+4;
                var url = controller.model.soundPath + "home2/"+num;
                controller.soundManager.init(url,true); //경로.
                break;

                case "part1_Home3" :
                var num = parseInt(Math.random()*2)+6;
                var url = controller.model.soundPath + "home2/"+num;
                controller.soundManager.init(url,true); //경로.
                break;

                case "part1_Home4" :
                var num = parseInt(Math.random()*2)+8;
                var url = controller.model.soundPath + "home2/"+num;
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

                case "act4_button" :
                var url = controller.model.soundPath + "home/actClick/StayAlert";
                controller.soundManager.init(url,true,function(){
                    controller.model.viewName = "StayAlert";
                    controller.model.activeAct = "act4";
                    $("#gameContainer").html("");
                    controller.onloadAct4("data");
                    controller.bgmManager.init(controller.model.soundPath+"/bgm/act4");
                });
                
                break;

                case "act5_button" :
                url = controller.model.soundPath + "home/actClick/ProofIt";
                controller.soundManager.init(url,true,function(){
                    controller.model.viewName = "ProofIt";
                    controller.model.activeAct = "act5";
                    $("#gameContainer").html("");
                    controller.onloadAct5("data");
                    controller.bgmManager.init(controller.model.soundPath+"/bgm/act5");
                });
                break;

                case "act6_button" :
                url = controller.model.soundPath + "home/actClick/ReadingConnection";
                controller.soundManager.init(url,true,function(){
                    controller.model.viewName = "ReadingConnection";
                    controller.model.activeAct = "act6";
                    $("#gameContainer").html("");
                    controller.onloadAct6("data");
                    controller.bgmManager.init(controller.model.soundPath+"/bgm/act6");
                });
                break;

                case "act7_button" :
                url = controller.model.soundPath + "home/actClick/Lunchtime";
                controller.soundManager.init(url,true,function(){
                    controller.model.viewName = "Lunchtime";
                    controller.model.activeAct = "act7";
                    $("#gameContainer").html("");
                    controller.onloadAct7("data");
                    controller.bgmManager.init(controller.model.soundPath+"/bgm/act7");
                });
                break;

                case "item_ui" :
                var str = $(e.currentTarget).css("top");
                var num = str.substr(0,str.indexOf("px"));
                if(num < 0){
                    $("#item_ui_arrow").attr("src","./asset/img/common/up.png");
                    $(e.currentTarget).animate({"top":"0px"});
                }else{
                    $("#item_ui_arrow").attr("src","./asset/img/common/down.png");
                    $(e.currentTarget).animate({"top":"-210px"});
                } 
                break;
            }
        }  
    };
    exports.Home = Home;
})(this);