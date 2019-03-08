
(function(exports){
    function Siren(){
        this.prevObj = {};
        this.Cheack = "";
    }

    Siren.prototype = {
        init : function(canvasID){ // container id 값을 받아 온다.
            this.canvasID = canvasID;
            if(this.exportRoot == null){
                $.getScript("asset/animate/act4/siren/ani_siren.js",$.proxy(function(data, textStatus, jqxhr){
                    if(textStatus == "success"){
                        this.onSettingAni();
                    }
                },this));
            }else{
                if(this.stage == null){
                    this.canvas = document.getElementById(this.canvasID);
                    this.comp=AdobeAn.getComposition("A1B82D0BAC3FCA429A6831DEFB17C87A");
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
                this.stage.enableMouseOver(20);
                this.exportRoot.mcContain.mouseChildren = false;
                this.exportRoot.mcContain.cursor = "pointer";
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
            console.log("act4 remove ani name is Siren");
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
            this.comp=AdobeAn.getComposition("A1B82D0BAC3FCA429A6831DEFB17C87A");
            var lib = this.comp.getLibrary();
            this.handleComplete();
        },
        handleComplete : function(){
            if(this.exportRoot == undefined){
                var lib=this.comp.getLibrary();
                var ss= this.comp.getSpriteSheet();
                this.exportRoot = new lib.ani_siren();
                this.stage = new lib.Stage(this.canvas);	
                AdobeAn.compositionLoaded(lib.properties.id);
                this.stage.addChild(this.exportRoot);
                createjs.Ticker.setFPS(controller.model.globalFPS);
                createjs.Ticker.addEventListener("tick", this.stage);

                
                this.mcObj = {"right":this.exportRoot.mcContain.mcRight,
                                "nomal":this.exportRoot.mcContain.mcNomal
                                };
                this.mcObj.right.visible = false;
                this.name = "nomal";
                this.mcObj[this.name].visible = true;
                this.obj = this.mcObj[this.name];
                this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                this.stage.enableMouseOver(20);
                
                this.exportRoot.mcContain.mouseChildren = false;
                this.exportRoot.mcContain.cursor = "pointer";
                // this.exportRoot.mcContain.addEventListener("click", $.proxy(this.handleClick,this));

            }
        },
        onClickEvent : function(){
            console.log("onClickEvent///////////")
            this.exportRoot.mcContain.removeAllEventListeners("click");
            this.exportRoot.mcContain.addEventListener("click", $.proxy(this.handleClick,this));
        },
        onPlaySiren : function(value){
            
            var url = controller.model.soundPath + "act4/"+value;
            controller.effectManager.init(url); //경로.
            this.obj.visible = false;
            this.mcObj.right.visible = true;
            this.obj = this.mcObj.right;
            this.obj.gotoAndPlay(1);
            this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
        },
        handleClick : function(){
            console.log("handleClick/////////////////");
            this.exportRoot.mcContain.removeAllEventListeners("click");
            $(window).trigger("act4_siren_Click");
            // var url = controller.model.soundPath + "act4/siren";
            // controller.effectManager.init(url); //경로.
            // this.obj.visible = false;
            // this.mcObj.right.visible = true;
            // this.obj = this.mcObj.right;
            // this.obj.gotoAndPlay(1);
            // this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
        }
    };
    exports.Siren = Siren;
})(this);
