
(function(exports){
    function FindAni(){
        this.prevObj = {};
        this.Cheack = "";
    }

    FindAni.prototype = {
        init : function(canvasID){ // container id 값을 받아 온다.
            this.canvas = $("<canvas id = 'find_ani' width='1000' height='630' style='position: absolute; z-index:10000;'></canvas>");
            $("#root").prepend(this.canvas);
            this.canvasID = "find_ani";
            if(this.exportRoot == null){
                $.getScript("asset/animate/findAni/ani_find.js",$.proxy(function(data, textStatus, jqxhr){
                    if(textStatus == "success"){
                        this.onSettingAni();
                    }
                },this));
            }else{
                if(this.stage == null){
                    this.canvas = document.getElementById(this.canvasID);
                    this.comp=AdobeAn.getComposition("852D08871FD8D842A48A182EB2609AF8");
                    var lib= this.comp.getLibrary();
                    this.stage = new lib.Stage(this.canvas);	
                    this.stage.addChild(this.exportRoot);
                    createjs.Ticker.setFPS(controller.model.globalFPS);
                    createjs.Ticker.addEventListener("tick", this.stage);
                    this.obj = this.exportRoot.mc;
                    this.obj.visible = true;
                    this.obj.gotoAndPlay(1);
                    this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                }else{
                    this.obj = this.exportRoot.mc;
                    this.obj.visible = true;
                    this.obj.gotoAndPlay(1);
                    this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                }
                this.stage.enableMouseOver(20);
                // this.exportRoot.mcContain.mouseChildren = false;
                // this.exportRoot.mcContain.cursor = "pointer";
                url = controller.model.soundPath +"coin";
                controller.effectManager.init(url); //경로.
            }
        },
        onTickEventListener : function(e){
            if(this.obj.currentFrame == (parseInt(this.obj.totalFrames)-1)){
                this.stage.removeAllEventListeners("tick");
                this.obj.stop();
                this.obj.visible = false;
                $("#find_ani").remove();
                this.onRemoveAni();
                $(window).trigger("find_ani_end");
            }
        },
        onRemoveAni : function(){
            console.log("remove ani name is find ani");
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
            this.canvas = document.getElementById("find_ani");
            this.comp=AdobeAn.getComposition("852D08871FD8D842A48A182EB2609AF8");
            var lib = this.comp.getLibrary();
            this.handleComplete();
        },
        handleComplete : function(){
            if(this.exportRoot == undefined){
                var lib=this.comp.getLibrary();
                var ss= this.comp.getSpriteSheet();
                this.exportRoot = new lib.ani_find();
                this.stage = new lib.Stage(this.canvas);	
                AdobeAn.compositionLoaded(lib.properties.id);
                this.stage.addChild(this.exportRoot);
                createjs.Ticker.setFPS(controller.model.globalFPS);
                createjs.Ticker.addEventListener("tick", this.stage);
                this.obj = this.exportRoot.mc;
                this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                this.stage.enableMouseOver(20);
            }
            url = controller.model.soundPath +"coin";
            controller.effectManager.init(url); //경로.
        },
    };
    exports.FindAni = FindAni;
})(this);
