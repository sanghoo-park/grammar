
(function(exports){
    function Coin(){
        this.prevObj = {};
        this.Cheack = "";
    }

    Coin.prototype = {
        init : function(canvasID){ // container id 값을 받아 온다.
            this.canvas = $("<canvas id = 'coin_ani' width='1000' height='630' style='position: absolute; z-index:100000;'></canvas>");
            $("#root").prepend(this.canvas);
            this.canvasID = "coin_ani";
            if(this.exportRoot == null){
                $.getScript("asset/animate/coin/ani_coin.js",$.proxy(function(data, textStatus, jqxhr){
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
                    this.name = controller.model.activeLevel;
                    
                    this.obj = this.mcObj[this.name];
                    this.obj.visible = true;
                    this.obj.gotoAndPlay(1);
                    this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                }else{
                    this.name = controller.model.activeLevel;
                    console.log(this.mcObj[this.name]);
                    this.obj = this.mcObj[this.name];
                    this.obj.visible = true;
                    this.obj.gotoAndPlay(1);
                    this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                }
                this.stage.enableMouseOver(20);
                this.exportRoot.mcContain.mouseChildren = false;
                this.exportRoot.mcContain.cursor = "pointer";

                url = controller.model.soundPath +"coin";
                controller.effectManager.init(url); //경로.
                var lv = "";
                if(controller.model.activeLevel == "Easy") lv = "1";
                if(controller.model.activeLevel == "Medium") lv = "2";
                if(controller.model.activeLevel == "Hard") lv = "3";
                url = controller.model.soundPath +"coin/"+controller.model.activeAct+"/"+lv;
                controller.soundManager.init(url,false,$.proxy(function(){
                    $(window).trigger("coin_ani_end");
                },this)); //경로.
                
            }
        },
        onTickEventListener : function(e){
            if(this.obj.currentFrame == (parseInt(this.obj.totalFrames)-1)){
                this.stage.removeAllEventListeners("tick");
                this.obj.stop();
                this.obj.visible = false;
                $("#coin_ani").remove();
                this.onRemoveAni();
                
            }
        },
        onRemoveAni : function(){
            console.log("remove ani name is Coin");
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
            this.canvas = document.getElementById("coin_ani");
            this.comp=AdobeAn.getComposition("852D08871FD8D842A48A182EB2609AF8");
            console.log(this.comp);
            var lib = this.comp.getLibrary();
            console.log(lib)
            this.handleComplete();
        },
        handleComplete : function(){
            if(this.exportRoot == undefined){
                var lib=this.comp.getLibrary();
                var ss= this.comp.getSpriteSheet();
                this.exportRoot = new lib.ani_coin();
                this.stage = new lib.Stage(this.canvas);	
                AdobeAn.compositionLoaded(lib.properties.id);
                this.stage.addChild(this.exportRoot);
                createjs.Ticker.setFPS(controller.model.globalFPS);
                createjs.Ticker.addEventListener("tick", this.stage);

                
                this.mcObj = 
                {
                    "Easy":this.exportRoot.mcContain.mcCoin1,
                    "Medium":this.exportRoot.mcContain.mcCoin2,
                    "Hard":this.exportRoot.mcContain.mcCoin3
                };
                this.mcObj.Easy.visible = false;
                this.mcObj.Medium.visible = false;
                this.mcObj.Hard.visible = false;
                this.name = controller.model.activeLevel;
                this.obj = this.mcObj[this.name];
                this.obj.visible = true;
                this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                this.stage.enableMouseOver(20);
                
                this.exportRoot.mcContain.mouseChildren = false;
                this.exportRoot.mcContain.cursor = "pointer";
                // this.exportRoot.mcContain.addEventListener("click", $.proxy(this.handleClick,this));

            }

            url = controller.model.soundPath +"coin";
            controller.effectManager.init(url); //경로.
            var lv = "";
            if(controller.model.activeLevel == "Easy") lv = "1";
            if(controller.model.activeLevel == "Medium") lv = "2";
            if(controller.model.activeLevel == "Hard") lv = "3";
            url = controller.model.soundPath +"coin/"+controller.model.activeAct+"/"+lv;
            controller.soundManager.init(url,false,$.proxy(function(){
                $(window).trigger("coin_ani_end");
            },this)); //경로.
            
        },

        handleClick : function(){
            
            this.obj.visible = false;
            this.mcObj.right.visible = true;
            this.obj = this.mcObj.right;
            this.obj.gotoAndPlay(1);
            this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
        }
    };
    exports.Coin = Coin;
})(this);
