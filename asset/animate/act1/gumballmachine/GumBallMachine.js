
(function(exports){
    function GumBallMachine(){
        this.name = "gumball"; // 에니매에선 클립 이름 설정. remove할때 쓰임.
    }

    GumBallMachine.prototype = {
        init : function(canvasID){ // container id 값을 받아 온다.
            this.canvasID = canvasID;
            if(this.exportRoot == null){
                $.getScript("asset/animate/act1/gumballmachine/Ani_gumballsMachines.js",$.proxy(function(data, textStatus, jqxhr){
                    if(textStatus == "success"){
                        this.onSettingAni();
                    }
                },this));
            }else{
                if(this.stage == null){
                    this.canvas = document.getElementById(this.canvasID);
                    this.comp=AdobeAn.getComposition("42BE6E0E6516964AB71F06AEBBFA7066");
                    var lib= this.comp.getLibrary();
                    this.stage = new lib.Stage(this.canvas);	
                    this.stage.addChild(this.exportRoot);
                    createjs.Ticker.setFPS(60);
                    createjs.Ticker.addEventListener("tick", this.stage);
                    this.mcObj[controller.model.viewName].visible = true;
                }else{
                    // if(!createjs.Ticker.hasEventListener("tick")) createjs.Ticker.addEventListener("tick", this.stage);
                    this.obj = this.mcObj[controller.model.viewName];
                    this.obj.gotoAndPlay(1);
                    this.stage.addEventListener("tick", $.proxy(this.onTickEventListener,this));
                    var url = controller.model.soundPath + "act1/gumball";
                    controller.effectManager.init(url); //경로.
                }
            }
        },
        onTickEventListener : function(e){
            if(this.obj.currentFrame == (parseInt(this.obj.totalFrames)-1)){
                console.log(this.onTickEventListener);
                this.stage.removeAllEventListeners("tick");
                console.log(this.obj.currentFrame+" // "+(parseInt(this.obj.totalFrames)-1));
                $(window).trigger("gumballMotionEnd");
            }
        },
        onRemoveAni : function(){
            if(this.stage !=undefined){
                this.mcObj[controller.model.viewName].visible = false;
                if(this.exportRoot) this.stage.removeChild(this.exportRoot);
                createjs.Ticker.removeEventListener("tick", this.stage);
                this.stage = null;
                this.canvas = null;
            }
        },

        onSettingAni : function(){
            this.canvas = document.getElementById(this.canvasID);
            this.comp=AdobeAn.getComposition("42BE6E0E6516964AB71F06AEBBFA7066");
            var lib= this.comp.getLibrary();
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", $.proxy(this.handleFileLoad,this));
            loader.addEventListener("complete", $.proxy(this.handleComplete,this));
            lib.properties.manifest[0].src = controller.model.animateImgPath+lib.properties.manifest[0].src;
            loader.loadManifest(lib.properties.manifest);
        },

        handleFileLoad : function(evt){
            var images=this.comp.getImages();	
	        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
        },

        handleComplete : function(evt){
            if(this.exportRoot == undefined){
                var lib=this.comp.getLibrary();
                var ss=this.comp.getSpriteSheet();
                var queue = evt.target;
                var ssMetadata = lib.ssMetadata;
                for(i=0; i<ssMetadata.length; i++) {
                    ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
                }
                this.exportRoot = new lib.Ani_gumballsMachines();
                this.stage = new lib.Stage(this.canvas);	
                AdobeAn.compositionLoaded(lib.properties.id);
                this.stage.addChild(this.exportRoot);
                createjs.Ticker.setFPS(60);
                createjs.Ticker.addEventListener("tick", this.stage);

                
                this.mcObj = {"Nouns":this.exportRoot.mcBall.mcNoun,
                                "Verbs":this.exportRoot.mcBall.mcVerbs,
                                "Adjectives":this.exportRoot.mcBall.mcAdjective,
                                "Adverbs":this.exportRoot.mcBall.mcAdverbs
                                };
                this.exportRoot.mcBall.mcNoun.visible = false;
                this.exportRoot.mcBall.mcVerbs.visible = false;
                this.exportRoot.mcBall.mcAdjective.visible = false;
                this.exportRoot.mcBall.mcAdverbs.visible = false;
                this.mcObj[controller.model.viewName].visible = true;
            }
            
        }
    };
    exports.GumBallMachine = GumBallMachine;
})(this);
