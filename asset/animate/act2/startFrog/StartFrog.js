
(function(exports){
    function StartFrog(){
        this.name = "jump"; // 에니매에선 클립 이름 설정. remove할때 쓰임.
        this.prevObj = {};
        this.Cheack = "";
    }

    StartFrog.prototype = {
        init : function(canvasID){ // container id 값을 받아 온다.
            this.canvasID = canvasID;
            if(this.exportRoot == null){
                $.getScript("asset/animate/act2/startFrog/ani_startFrog.js",$.proxy(function(data, textStatus, jqxhr){
                    if(textStatus == "success"){
                        this.onSettingAni();
                    }
                },this));
            }else{
                if(this.stage == null){
                    this.canvas = document.getElementById(this.canvasID);
                    this.comp=AdobeAn.getComposition("8044C054D5420D42A20880420BE51179");
                    var lib= this.comp.getLibrary();
                    this.stage = new lib.Stage(this.canvas);	
                    this.stage.addChild(this.exportRoot);
                    createjs.Ticker.setFPS(controller.model.globalFPS);
                    createjs.Ticker.addEventListener("tick", this.stage);
                    this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                }else{
                    this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                }
            }
        },
        onTickEventListener : function(e){
        },
        onRemoveAni : function(){
            console.log("act2 remove ani name is StartFrog");
            if(this.stage !=undefined){
                if(this.exportRoot) this.stage.removeChild(this.exportRoot);
                createjs.Ticker.removeEventListener("tick", this.stage);
                this.stage = null;
                this.canvas = null;
            }
        },

        onSettingAni : function(){
            this.canvas = document.getElementById(this.canvasID);
            this.comp=AdobeAn.getComposition("8044C054D5420D42A20880420BE51179");
            var lib = this.comp.getLibrary();
            this.handleComplete();
        },
        handleComplete : function(){
            if(this.exportRoot == undefined){
                var lib=this.comp.getLibrary();
                var ss= this.comp.getSpriteSheet();
                this.exportRoot = new lib.ani_startFrog();
                this.stage = new lib.Stage(this.canvas);	
                AdobeAn.compositionLoaded(lib.properties.id);
                this.stage.addChild(this.exportRoot);
                createjs.Ticker.setFPS(controller.model.globalFPS);
                createjs.Ticker.addEventListener("tick", this.stage);
                this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
            }
        },
    };
    exports.StartFrog = StartFrog;
})(this);
