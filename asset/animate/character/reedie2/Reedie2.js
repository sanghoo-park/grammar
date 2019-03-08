
(function(exports){
    function Reedie2(){
        this.name = "nomal"; // 에니매에선 클립 이름 설정. remove할때 쓰임.
        this.prevObj = {};
        this.Cheack = "";
        $.getScript("asset/animate/character/reedie2/ani_reedie2.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                this.comp=AdobeAn.getComposition("9971E7FC7620A24FA1BBB935BF05203C");
                var lib = this.comp.getLibrary();
                this.exportRoot = new lib.ani_reedie2();
                this.mcObj = 
                {
                    "speek":this.exportRoot.mcContain.mcSpeek,
                    "nomal":this.exportRoot.mcContain.mcNomal,
                    "wrong1":this.exportRoot.mcContain.mcWrong1,
                    "wrong2":this.exportRoot.mcContain.mcWrong2,
                    "wrong3":this.exportRoot.mcContain.mcWrong3
                };
                this.exportRoot.mcContain.mcSpeek.visible = false;
                this.exportRoot.mcContain.mcWrong1.visible = false;
                this.exportRoot.mcContain.mcWrong2.visible = false;
                this.exportRoot.mcContain.mcWrong3.visible = false;
                this.name = "nomal";
                this.obj = this.mcObj[this.name];
                this.obj.visible = true;
                this.prevObj = this.obj;
                
            }
        },this));
    }

    Reedie2.prototype = {
        init : function(canvasID,x,y,index,scaleX){ // container id 값을 받아 온다.

            this.exportRoot.mcContain.addEventListener("click", $.proxy(this.handleClick,this));
            this.exportRoot.mcContain.mouseChildren = false;
            this.exportRoot.mcContain.cursor = "pointer";

            this.x = x;
            this.y = y;
            if(scaleX == null) scaleX = 1;
            this.scaleX = scaleX;
            this.index = index;
            this.canvasID = canvasID;
            this.canvas = document.getElementById(this.canvasID);
            this.comp=AdobeAn.getComposition("9971E7FC7620A24FA1BBB935BF05203C");
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
            this.exportRoot.mcContain.x = this.x;
            this.exportRoot.mcContain.y = this.y;
            this.exportRoot.mcContain.scaleX  = this.scaleX;
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
            console.log("ani_Reedie2 remove");
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
            console.log("Reedie2_click : type = " + this.name);
            $(window).trigger({type:"reedie2_click",character:this,name:"reedie"});
        },
        onChangeAni : function(){
            this.obj = this.mcObj[this.name];
            this.obj.gotoAndPlay(1);
            this.prevObj.visible = false;
            this.obj.visible = true;
            this.prevObj = this.obj;
        }
    };
    exports.Reedie2 = Reedie2;
})(this);
