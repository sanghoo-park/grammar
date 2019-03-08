
(function(exports){
    function Fly(){
        $.getScript("asset/animate/act2/fly/ani_fly.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
            }
        },this));
    }

    Fly.prototype = {
        init : function(canvasID){ // container id 값을 받아 온다.
            this.canvasID = canvasID;
            this.onSettingAni();
        },
        onRemoveAni : function(){
            console.log("act2 remove ani name is fly");
            if(this.stage !=undefined){
                if(this.exportRoot) this.stage.removeChild(this.exportRoot);
                createjs.Ticker.removeEventListener("tick", this.stage);
                this.stage = null;
                this.canvas = null;
            }
        },

        onSettingAni : function(){
            console.log("fly ani set" + this.canvasID);
            this.canvas = document.getElementById(this.canvasID);
            this.comp=AdobeAn.getComposition("0FBE1EC775967049AABDAF674EAD5637");
            this.handleComplete();
            
        },
        handleComplete : function(){
            var lib=this.comp.getLibrary();
            var ss= this.comp.getSpriteSheet();
            this.exportRoot = new lib.ani_fly();
            this.stage = new lib.Stage(this.canvas);	
            AdobeAn.compositionLoaded(lib.properties.id);
            this.stage.addChild(this.exportRoot);
            createjs.Ticker.setFPS(controller.model.globalFPS);
            createjs.Ticker.addEventListener("tick", this.stage);
        }
    };
    exports.Fly = Fly;
})(this);
