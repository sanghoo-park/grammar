
(function(exports){
    function Bubble(){
        $.getScript("asset/animate/act3/bubble/ani_bubble.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
            }
        },this));
    }

    Bubble.prototype = {
        init : function(canvasID){ // container id 값을 받아 온다.
            this.canvasID = canvasID;
            this.onSettingAni();
        },
        onRemoveAni : function(){
            console.log("act3 remove ani name is Bubble");
            if(this.stage !=undefined){
                if(this.exportRoot) this.stage.removeChild(this.exportRoot);
                createjs.Ticker.removeEventListener("tick", this.stage);
                this.stage = null;
                this.canvas = null;
            }
        },

        onSettingAni : function(){
            this.canvas = document.getElementById(this.canvasID);
            this.comp =AdobeAn.getComposition("63568762832A5B4AB603F8DC5CB0C82E");
            var lib= this.comp.getLibrary();
            this.handleComplete();
        },
        handleComplete : function(){
            var lib= this.comp.getLibrary();
            var ss= this.comp.getSpriteSheet();
            this.exportRoot = new lib.ani_bubble();
            this.explosion = this.exportRoot.mcClick;
            this.bubble = this.exportRoot.mcBubble;
            this.explosion.visible = false;
            this.stage = new lib.Stage(this.canvas);	
            AdobeAn.compositionLoaded(lib.properties.id);
            this.stage.addChild(this.exportRoot);
            createjs.Ticker.setFPS(controller.model.globalFPS);
            createjs.Ticker.addEventListener("tick", this.stage);
        },
        onTickEventListener : function(e){
            if(this.explosion.currentFrame == (parseInt(this.explosion.totalFrames)-1)){
                this.explosion.visible = false;
                this.bubble.visible = false;
                this.stage.removeAllEventListeners("tick");
                // $(window).trigger("ani_act3_Bubble");
                // console.log("visible");
            }
        },
        onBubbleExplosion : function(){
            console.log("onBubbleExplosion")
            this.explosion.visible = true;
            this.bubble.visible = false;
            this.explosion.gotoAndPlay(1);
            this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
            var url = controller.model.soundPath + "act3/explosion";
            controller.effectManager.init(url); //경로.
        }
    };
    exports.Bubble = Bubble;
})(this);
