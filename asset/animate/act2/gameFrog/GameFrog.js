
(function(exports){
    function GameFrog(){
        this.name = "jump"; // 에니매에선 클립 이름 설정. remove할때 쓰임.
        this.prevObj = {};
        this.Cheack = "";
    }

    GameFrog.prototype = {
        init : function(canvasID){ // container id 값을 받아 온다.
            this.canvasID = canvasID;
            if(this.exportRoot == null){
                $.getScript("asset/animate/act2/gameFrog/ani_gameFrog.js",$.proxy(function(data, textStatus, jqxhr){
                    if(textStatus == "success"){
                        this.onSettingAni();
                    }
                },this));
            }else{
                if(this.stage == null){
                    this.canvas = document.getElementById(this.canvasID);
                    this.comp=AdobeAn.getComposition("A8D7AF052C970D4DB1A657F0EED05A04");
                    var lib= this.comp.getLibrary();
                    this.stage = new lib.Stage(this.canvas);	
                    this.stage.addChild(this.exportRoot);
                    createjs.Ticker.setFPS(controller.model.globalFPS);
                    createjs.Ticker.addEventListener("tick", this.stage);
                    this.name = "jump";
                    this.mcObj[this.name].visible = true;
                    
                    this.obj = this.mcObj[this.name];
                    this.obj.gotoAndPlay(1);
                    this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                    var url = controller.model.soundPath + "act2/jump";
                    controller.effectManager.init(url); //경로.
                }else{
                    if(this.prevObj != null) this.prevObj.visible = false;
                    this.obj = this.mcObj[this.name];
                    this.obj.visible = true;
                    this.obj.gotoAndPlay(1);
                    this.prevObj = this.obj;
                    this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                    if(this.name == "wrong"){
                        var url = controller.model.soundPath + "act2/die";
                        controller.effectManager.init(url); //경로.
                    }
                }
            }
        },
        onTickEventListener : function(e){
            // console.log(this.obj.currentFrame);
            // console.log(this.obj.totalFrames);
            
            if(this.obj.currentFrame == (parseInt(this.obj.totalFrames)-1)){
                console.log("name ====== " +this.name);
                this.stage.removeAllEventListeners("tick");
                if(this.name == "wrong" || this.name == "right"){
                    $(window).trigger("frogAniEnd");
                }
                if(this.name == "right"){
                    $(window).trigger("frogAniRight");
                }
                if(this.name == ""){
                    this.name = "jump";
                    return;
                } 
                if(this.name != "nomal"){
                    this.obj.stop();
                    this.obj.visible = false;
                } 
                if(this.name == "jump"){
                    $(window).trigger("frogAnijump");
                } 
                if(this.name == "jump" || this.name == "wrong" || this.name == "right"){
                    this.name = "nomal";
                    this.init();
                }
                if(this.name == "leftTop" || this.name == "rightTop" || this.name == "leftBottom" || this.name == "rightBottom"){
                    url = controller.model.soundPath + "act2/character/"+this.Cheack+"/" + parseInt(Math.random()*5 + 1);
                    controller.soundManager.init(url,false);
                    this.name = this.Cheack;
                    console.log(this.name)
                    this.init();
                }
                
                // console.log(this.obj.currentFrame+" // "+(parseInt(this.obj.totalFrames)-1));
            }
        },
        onRemoveAni : function(){
            console.log("act2 remove ani name is frog");
            this.name = ""; // 에니매에선 클립 이름 설정. remove할때 쓰임.
            this.prevObj = {};
            this.Cheack = "";
            if(this.obj != null) this.obj.visible = false;
            
            if(this.stage !=undefined){
                if(this.exportRoot) this.stage.removeChild(this.exportRoot);
                createjs.Ticker.removeEventListener("tick", this.stage);
                this.stage = null;
                this.canvas = null;
            }
        },

        onSettingAni : function(){
            this.canvas = document.getElementById(this.canvasID);
            this.comp=AdobeAn.getComposition("A8D7AF052C970D4DB1A657F0EED05A04");
            var lib = this.comp.getLibrary();
            this.handleComplete();
        },
        handleComplete : function(){
            if(this.exportRoot == undefined){
                var lib=this.comp.getLibrary();
                var ss= this.comp.getSpriteSheet();
                this.exportRoot = new lib.ani_gameFrog();
                this.stage = new lib.Stage(this.canvas);	
                AdobeAn.compositionLoaded(lib.properties.id);
                this.stage.addChild(this.exportRoot);
                createjs.Ticker.setFPS(controller.model.globalFPS);
                createjs.Ticker.addEventListener("tick", this.stage);

                
                this.mcObj = {"jump":this.exportRoot.mcFlog.mcJump,
                                "nomal":this.exportRoot.mcFlog.mcNomal,
                                "leftTop":this.exportRoot.mcFlog.mcLeftTop,
                                "rightTop":this.exportRoot.mcFlog.mcRightTop,
                                "leftBottom":this.exportRoot.mcFlog.mcLeftBottom,
                                "rightBottom":this.exportRoot.mcFlog.mcRightBottom,
                                "right":this.exportRoot.mcFlog.mcRight,
                                "wrong":this.exportRoot.mcFlog.mcWrong,
                                };
                this.exportRoot.mcFlog.mcJump.visible = false;
                this.exportRoot.mcFlog.mcNomal.visible = false;
                this.exportRoot.mcFlog.mcLeftTop.visible = false;
                this.exportRoot.mcFlog.mcRightTop.visible = false;
                this.exportRoot.mcFlog.mcLeftBottom.visible = false;
                this.exportRoot.mcFlog.mcRightBottom.visible = false;
                this.exportRoot.mcFlog.mcRight.visible = false;
                this.exportRoot.mcFlog.mcWrong.visible = false;
                this.name = "jump";
                this.mcObj[this.name].visible = true;
                this.obj = this.mcObj[this.name];
                this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                var url = controller.model.soundPath + "act2/jump";
                controller.effectManager.init(url); //경로.
            }
        }
    };
    exports.GameFrog = GameFrog;
})(this);
