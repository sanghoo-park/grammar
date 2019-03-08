(function(exports){
    function GlobalUI(){}

    GlobalUI.prototype = {
        init : function(){
            this.imgPath = "./asset/img/ui/";
            if($("#globla_ui").html() == ""){
                this.container = $("#globla_ui");
                this.leftUI = $("<div>",{id:"left_ui"});
                this.rightUI = $("<div>",{id:"right_ui"});
                this.container.append(this.leftUI);
                this.container.append(this.rightUI);
                this.fullBtn = $("<div id='full_Screen'></div>")
                this.homeBtn = $("<div id='home_button'></div>");
                this.soundBtn = $("<div id='sound_button'></div>");
                this.bookBtn = $("<div id='book_button'></div>");
                this.exitBtn = $("<div id='exit_button'></div>");
                this.pointPanel = $("<div id='pointPanel'><span class='font_embed'></span><img src='"+this.imgPath+"point.png' /><p id = 'coin_20_ani' class='font_embed'>-20</p></div>");
                this.setCount = $("<div id='setCount'><img src='' /></div>");
                this.container.append(this.fullBtn);
                this.leftUI.append(this.homeBtn);
                this.leftUI.append(this.soundBtn);
                this.leftUI.append(this.bookBtn);
                this.leftUI.append(this.exitBtn);
                this.rightUI.append(this.setCount);
                this.rightUI.append(this.pointPanel);
                new ButtonUtil().init("full_Screen",this.imgPath,"full","");
                new ButtonUtil().init("home_button",this.imgPath,"home","");
                new ButtonUtil().init("sound_button",this.imgPath,"sound","on","soundoff","off");
                new ButtonUtil().init("book_button",this.imgPath,"book","");
                new ButtonUtil().init("exit_button",this.imgPath,"exit","");
                this.fullBtn.on("click",$.proxy(this.onClickListener,this));
                this.homeBtn.on("click",$.proxy(this.onClickListener,this));
                this.bookBtn.on("click",$.proxy(this.onClickListener,this));
                this.exitBtn.on("click",$.proxy(this.onClickListener,this));
                this.soundBtn.on("click",$.proxy(this.onClickListener,this));
                this.pointPanel.on("click",$.proxy(this.onClickListener,this)).css("cursor","pointer");
                $("#coin_20_ani").hide();
            }
           
            this.setCount.find("img").attr("src",this.imgPath+"set"+controller.model.globalSetNum+".png");
            var url = controller.model.soundPath+"bgm/home";
            controller.bgmManager.init(url);
            
        },
        onClickListener : function(e){
            console.log(e.currentTarget.id);
            var url = "";
            switch(e.currentTarget.id){

                case "full_Screen" :
                controller.fullScreenModul.full_screen();
                break;


                case "home_button" :
                url = controller.model.soundPath + "ui/home";
                controller.effectManager.init(url,$.proxy(function(){
                    if(controller.view.activeAct == controller.view.home) return;
                    $("#gameContainer").html("");
                    controller.characterManager.resetAni();
                    controller.soundManager.allRemove();
                    controller.videoManager.allRemove();
                    controller.view.activeAct.onReset();
                    controller.loadHome();
                    url = controller.model.soundPath+"bgm/home";
                    controller.bgmManager.init(url);
                },this));
                
                break;
                
                case "book_button" :
                url = controller.model.soundPath + "ui/progress";
                controller.effectManager.init(url,$.proxy(function(){
                    controller.onLoadProgress("data");
                },this));
                break;

                case "exit_button" :
                
                    url = controller.model.soundPath + "ui/exit";
                    controller.effectManager.init(url,$.proxy(function(){
                        if(controller.model.viewName == "home"){
                            controller.onQuit();
                        }else{
                            if(controller.view.activeAct == controller.view.home) return;
                            $("#gameContainer").html("");
                            controller.characterManager.resetAni();
                            controller.soundManager.allRemove();
                            controller.videoManager.allRemove();
                            controller.view.activeAct.onReset();
                            controller.loadHome();
                            url = controller.model.soundPath+"bgm/home";
                            controller.bgmManager.init(url);
                        }
                    },this));
                
                break;

                case "pointPanel" :
                url = controller.model.soundPath + "ui/jewels";
                controller.effectManager.init(url,$.proxy(function(){
                },this));
                break;

                case "sound_button" :
                if($("#"+e.currentTarget.id+" img")[0].alt == "off"){
                    url = controller.model.soundPath + "ui/musicoff";
                    controller.bgmManager.setVolume(0.0);
                }else{
                    url = controller.model.soundPath + "ui/musicon";
                    controller.bgmManager.setVolume(0.5);
                }
                
                controller.effectManager.init(url,$.proxy(function(){
                },this));
                break;
            }
            
        },
        updateUI : function(){
            console.log(this.setCount);
            this.setCount.find("img").attr("src",this.imgPath+"set"+controller.model.globalSetNum+".png");
            this.pointPanel.find("span").html(controller.model.coin);
        },
        coinAni : function(){
            var url = controller.model.soundPath + "coinAni";
            controller.effectManager.init(url);
            var coin = $("#coin_20_ani");
            coin.fadeIn(100);
            coin.animate({"top":"0px"},
            {
                duration: 500,
                specialEasing: {
                    left: "easeOutExpo",
                    top: "easeOutExpo",
                    width: "easeOutExpo",
                    height: "easeOutExpo",
                    
                },complete: $.proxy(nextpostAnimateCalback,this)
            });

            function nextpostAnimateCalback(){
                coin.fadeOut(500,function(){
                    coin.css("top","20px");
                });
            }
        }
    };

    exports.GlobalUI = GlobalUI;
})(this);