
(function(exports){
    function Fire(){
        $.getScript("asset/animate/act4/fire/ani_fire.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
            }
        },this));
    }

    Fire.prototype = {
        init : function(canvasID){ // container id 값을 받아 온다.
            this.canvasID = canvasID;
            this.onSettingAni();
        },
        onRemoveAni : function(){
            console.log("act4 remove ani name is Fire");
            if(this.stage !=undefined){
                if(this.exportRoot) this.stage.removeChild(this.exportRoot);
                createjs.Ticker.removeEventListener("tick", this.stage);
                this.stage = null;
                this.canvas = null;
            }
        },

        onSettingAni : function(){
            console.log("Fire ani set" + this.canvasID);
            this.canvas = document.getElementById(this.canvasID);
            this.comp=AdobeAn.getComposition("BF32A450EF181C43BB1AE102B111759C");
            this.handleComplete();
            
        },
        handleComplete : function(){
            var lib=this.comp.getLibrary();
            var ss= this.comp.getSpriteSheet();
            this.exportRoot = new lib.ani_fire();
            this.stage = new lib.Stage(this.canvas);	
            AdobeAn.compositionLoaded(lib.properties.id);
            this.stage.addChild(this.exportRoot);
            createjs.Ticker.setFPS(controller.model.globalFPS);
            createjs.Ticker.addEventListener("tick", this.stage);
        },
        onRemove : function(value){
            this.exportRoot.removeChild(this.exportRoot[value]);
        }
    };
    exports.Fire = Fire;
})(this);
