
(function(exports){
    function NewBubble(){

    }

    NewBubble.prototype = {
        init : function(canvasID){ // container id 값을 받아 온다.
            console.log("init")
            this.canvasID = canvasID;
            if(this.exportRoot == null){
                $.getScript("asset/animate/act3/newBubble/ani_newBubble.js",$.proxy(function(data, textStatus, jqxhr){
                    if(textStatus == "success"){
                        this.onSettingAni();
                    }
                },this));
            }else{
                if(this.stage == null){
                    this.onSettingAni();
                }else{
                    this.stage.addChild(this.exportRoot);
                    createjs.Ticker.setFPS(controller.model.globalFPS);
                    createjs.Ticker.addEventListener("tick", this.stage);
                    this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                          
                }
            }
        },
        onRemoveAni : function(){
            console.log("act3 remove ani name is NewBubble");
            if(this.stage !=undefined){
                if(this.exportRoot) this.stage.removeChild(this.exportRoot);
                createjs.Ticker.removeEventListener("tick", this.stage);
                this.stage = null;
                this.canvas = null;
            }
        },
        onSettingAni : function(){
            console.log("NewBubble ani set" + this.canvasID);
            this.canvas = document.getElementById(this.canvasID);
            this.comp=AdobeAn.getComposition("451442D1FDBB2F47993D0FB54B210E30");
            var lib=this.comp.getLibrary();
            this.handleComplete();
        },
        onTickEventListener : function(e){
            console.log("onTickEventListener")
            if(this.exportRoot.currentFrame == (parseInt(this.exportRoot.totalFrames)-1)){
                var url = controller.model.soundPath + "act3/showBubble";
                controller.effectManager.init(url); //경로.  
                this.stage.removeChild(this.exportRoot);
                this.stage.removeAllEventListeners("tick");
                $(window).trigger("ani_act3_newBubble");
            }
        },
        handleComplete : function(){
            var lib=this.comp.getLibrary();
            var ss=this.comp.getSpriteSheet();
            this.exportRoot = new lib.ani_newBubble();
            this.stage = new lib.Stage(this.canvas);	
            AdobeAn.compositionLoaded(lib.properties.id);
            this.stage.addChild(this.exportRoot);
            createjs.Ticker.setFPS(controller.model.globalFPS);
            createjs.Ticker.addEventListener("tick", this.stage);
            this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
            // var url = controller.model.soundPath + "act3/showBubble";
            // controller.effectManager.init(url); //경로.
        }
    };
    exports.NewBubble = NewBubble;
})(this);
