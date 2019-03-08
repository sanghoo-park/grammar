
(function(exports){
    function ResultFrog(){
        this.name = "jump"; // 에니매에선 클립 이름 설정. remove할때 쓰임.
        this.prevObj = {};
        this.Cheack = "";
    }

    ResultFrog.prototype = {
        init : function(canvasID){ // container id 값을 받아 온다.
            this.canvasID = canvasID;
            if(this.exportRoot == null){
                $.getScript("asset/animate/act2/resultFrog/ani_resultFrog.js",$.proxy(function(data, textStatus, jqxhr){
                    if(textStatus == "success"){
                        this.onSettingAni();
                    }
                },this));
            }else{
                if(this.stage == null){
                    this.canvas = document.getElementById(this.canvasID);
                    this.comp=AdobeAn.getComposition("5DF1B2434D507745AB23027E605AD72F");
                    var lib= this.comp.getLibrary();
                    this.stage = new lib.Stage(this.canvas);	
                    this.stage.addChild(this.exportRoot);
                    createjs.Ticker.setFPS(controller.model.globalFPS);
                    createjs.Ticker.addEventListener("tick", this.stage);
                    this.name = "nomal";
                    this.mcObj[this.name].visible = true;
                    
                    this.obj = this.mcObj[this.name];
                    this.obj.gotoAndPlay(1);
                    this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                }else{
                    if(this.prevObj != null) this.prevObj.visible = false;
                    this.obj = this.mcObj[this.name];
                    this.obj.visible = true;
                    this.obj.gotoAndPlay(1);
                    this.prevObj = this.obj;
                    this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                }
                
            }
        },
        onTickEventListener : function(e){
            if(this.obj.currentFrame == (parseInt(this.obj.totalFrames)-1)){
                this.stage.removeAllEventListeners("tick");
                this.obj.stop();
                this.obj.visible = false;
                this.obj = this.mcObj.nomal;
                this.obj.visible = true;
                
            }
        },
        onRemoveAni : function(){
            console.log("act2 remove ani name is ResultFrog");
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
            this.comp=AdobeAn.getComposition("5DF1B2434D507745AB23027E605AD72F");
            var lib = this.comp.getLibrary();
            this.handleComplete();
        },
        handleComplete : function(){
            if(this.exportRoot == undefined){
                var lib=this.comp.getLibrary();
                var ss= this.comp.getSpriteSheet();
                this.exportRoot = new lib.ani_resultFrog();
                this.stage = new lib.Stage(this.canvas);	
                AdobeAn.compositionLoaded(lib.properties.id);
                this.stage.addChild(this.exportRoot);
                createjs.Ticker.setFPS(controller.model.globalFPS);
                createjs.Ticker.addEventListener("tick", this.stage);

                
                this.mcObj = {"click":this.exportRoot.mcClick,
                                "nomal":this.exportRoot.mcNomal
                                };
                this.mcObj.click.visible = false;
                this.name = "nomal";
                this.mcObj[this.name].visible = true;
                this.obj = this.mcObj[this.name];
                console.log(this.exportRoot.mcClick);
                console.log(this.exportRoot.mcNomal);
                this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                // this.exportRoot.mcNomal.addEventListener("click",function(){console.log("click")});
                this.exportRoot.mcNomal.addEventListener("click", $.proxy(this.handleClick,this));
            }
        },
        handleClick : function(){
            $(window).trigger("resultForgClick");
            this.obj.visible = false;
            this.mcObj.click.visible = true;
            this.obj = this.mcObj.click;
            this.obj.gotoAndPlay(1);
            this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
            var url = controller.model.soundPath + "act2/result_frog";
            controller.effectManager.init(url); //경로.
        }
    };
    exports.ResultFrog = ResultFrog;
})(this);
