
(function(exports){
    function FireManResult(){
        $.getScript("asset/animate/act4/fireManResult/ani_fireManResult.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
            }
        },this));
    }

    FireManResult.prototype = {
        init : function(canvasID){ // container id 값을 받아 온다.
            this.canvasID = canvasID;
            this.onSettingAni();
        },
        onRemoveAni : function(){
            console.log("act4 remove ani name is FireManResult");
            if(this.stage !=undefined){
                if(this.exportRoot) this.stage.removeChild(this.exportRoot);
                createjs.Ticker.removeEventListener("tick", this.stage);
                this.stage = null;
                this.canvas = null;
            }
        },

        onSettingAni : function(){
            console.log("FireManResult ani set" + this.canvasID);
            this.canvas = document.getElementById(this.canvasID);
            this.comp=AdobeAn.getComposition("8CC5EED8DA945449882A7D4CA6F180D8");
            this.handleComplete();
            
        },
        handleComplete : function(){
            var lib=this.comp.getLibrary();
            var ss= this.comp.getSpriteSheet();
            this.exportRoot = new lib.ani_fireManResult();
            this.stage = new lib.Stage(this.canvas);	
            AdobeAn.compositionLoaded(lib.properties.id);
            this.stage.addChild(this.exportRoot);
            createjs.Ticker.setFPS(controller.model.globalFPS);
            createjs.Ticker.addEventListener("tick", this.stage);
        }
    };
    exports.FireManResult = FireManResult;
})(this);
