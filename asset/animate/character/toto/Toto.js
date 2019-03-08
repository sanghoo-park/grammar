
(function(exports){
    function Toto(){
        this.name = "nomal"; // 에니매에선 클립 이름 설정. remove할때 쓰임.
        this.prevObj = {};
        this.Cheack = "";
        $.getScript("asset/animate/character/toto/ani_toto.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                this.canvas = document.getElementById(this.canvasID);
                this.comp=AdobeAn.getComposition("A9FB875FD07DD24680382F633530A54B");
                var lib = this.comp.getLibrary();
                this.exportRoot = new lib.ani_toto();
                this.mcObj = {
                    "nomal":this.exportRoot.mcContain.mcNomal,
                    "speek":this.exportRoot.mcContain.mcSpeek
                    };
                this.exportRoot.mcContain.mcSpeek.visible = false;
                this.name = "nomal";
                this.obj = this.mcObj[this.name];
                this.obj.visible = true;
                this.prevObj = this.obj;
                this.exportRoot.mcContain.addEventListener("click", $.proxy(this.handleClick,this));
            }
        },this));
    }

    Toto.prototype = {
        init : function(canvasID,x,y,index){ // container id 값을 받아 온다.
            this.x = x;
            this.y = y;
            this.index = index;
            this.canvasID = canvasID;
            this.canvas = document.getElementById(this.canvasID);
            this.comp=AdobeAn.getComposition("A9FB875FD07DD24680382F633530A54B");
            var lib= this.comp.getLibrary();
            if(controller.characterManager.stage == null){
                this.stage = new lib.Stage(this.canvas);
                controller.characterManager.setStage(this.stage);
                createjs.Ticker.setFPS(controller.model.globalFPS);
                createjs.Ticker.addEventListener("tick", this.stage);
                this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
            }else{
                this.stage = controller.characterManager.stage;
            }
            this.stage.addChildAt(this.exportRoot,this.index);
            controller.characterManager.addEvent(this.exportRoot.mcContain);
            this.exportRoot.mcContain.x = this.x;
            this.exportRoot.mcContain.y = this.y;
            this.exportRoot.mcContain.alpha = 1;
            this.name = "nomal";
            this.obj = this.mcObj[this.name];
            this.prevObj = this.obj;
            this.obj.visible = true;
        },
        onTickEventListener : function(e){
            if(this.obj.currentFrame == (parseInt(this.obj.totalFrames)-1)){
                console.log("name ====== " +this.name);
                this.stage.removeAllEventListeners("tick");
                if(this.name != "nomal"){
                    this.name = "nomal";
                    this.onChangeAni();
                }
            }
        },
        onRemoveAni : function(){
            console.log("ani_Toto remove");
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
        handleClick : function(e){
            console.log("Toto click : type = " + this.name);
            $(window).trigger({type:"toto_click",character:this,name:"toto"});
        },
        onChangeAni : function(){
            this.obj = this.mcObj[this.name];
            console.log(this.name);
            console.log(this.obj);
            this.prevObj.visible = false;
            this.obj.gotoAndPlay(1);
            this.obj.visible = true;
            this.prevObj = this.obj;
        }
    };
    exports.Toto = Toto;
})(this);
