(function(exports){
    function CharacterManager(){
        this.aniArr = [];
        this.stage = null;
        
    }

    CharacterManager.prototype = {
        
        init : function(){
            $(window).on("elly_click", $.proxy(this.onCharacterClickListener,this));
            $(window).on("coco_click", $.proxy(this.onCharacterClickListener,this));
            $(window).on("gram_click", $.proxy(this.onCharacterClickListener,this));
            $(window).on("reedie_click", $.proxy(this.onCharacterClickListener,this));
            $(window).on("toto_click", $.proxy(this.onCharacterClickListener,this));
            $(window).on("fireMan_click", $.proxy(this.onCharacterClickListener,this));
            $(window).on("fireMan2_click", $.proxy(this.onCharacterClickListener,this));
            $(window).on("nick_click", $.proxy(this.onCharacterClickListener,this));
            $(window).on("nick2_click", $.proxy(this.onCharacterClickListener,this));
            $(window).on("gram2_click", $.proxy(this.onCharacterClickListener,this));
            $(window).on("reedie2_click", $.proxy(this.onCharacterClickListener,this));

            $.getScript("asset/animate/character/fireMan2/FireMan2.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC FireMan2.js load success");
                    this.fireMan2 = new FireMan2();
                    this.aniArr.push(this.fireMan2);
                }
            },this));
            $.getScript("asset/animate/character/elly/Elly.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Elly.js load success");
                    this.elly = new Elly();
                    this.aniArr.push(this.elly);
                }
            },this));

            $.getScript("asset/animate/character/gram/Gram.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Gram.js load success");
                    this.gram = new Gram();
                    this.aniArr.push(this.gram);
                }
            },this));

            $.getScript("asset/animate/character/reedie/Reedie.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Reedie.js load success");
                    this.reedie = new Reedie();
                    this.aniArr.push(this.reedie);
                }
            },this));

            $.getScript("asset/animate/character/coco/Coco.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Coco.js load success");
                    this.coco = new Coco();
                    this.aniArr.push(this.coco);
                }
            },this));

            $.getScript("asset/animate/character/toto/Toto.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Toto.js load success");
                    this.toto = new Toto();
                    this.aniArr.push(this.toto);
                }
            },this));

            $.getScript("asset/animate/character/fireMan/FireMan.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC FireMan.js load success");
                    this.fireMan = new FireMan();
                    this.aniArr.push(this.fireMan);
                }
            },this));

            $.getScript("asset/animate/character/nick/Nick.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Nick.js load success");
                    this.nick = new Nick();
                    this.aniArr.push(this.nick);
                }
            },this));

            $.getScript("asset/animate/character/nick2/Nick2.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Nick2.js load success");
                    this.nick2 = new Nick2();
                    this.aniArr.push(this.nick2);
                }
            },this));

            $.getScript("asset/animate/character/reedie2/Reedie2.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Reedie2.js load success");
                    this.reedie2 = new Reedie2();
                    this.aniArr.push(this.reedie2);
                }
            },this));

            $.getScript("asset/animate/character/gram2/Gram2.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC gram2.js load success");
                    this.gram2 = new Gram2();
                    this.aniArr.push(this.gram2);
                }
            },this));

            
            
        },
        onMotion : function(target,targetX,targetY,targetAlpha,targetSpeed){// 타겟, x , y, alpha, 속도
            this.contain = target.exportRoot.mcContain;
            this.containX = targetX;
            createjs.Tween.get(target.exportRoot.mcContain, {loop: false})
          .to({x:targetX, y:targetY, alpha:targetAlpha}, targetSpeed, createjs.Ease.getPowInOut(4));
          this.stage.addEventListener("tick", $.proxy(this.onMotionEventListener,this));
        },
        onMotionEventListener : function(e){
            if(this.contain.x == this.containX){
                console.log("remove onMotionEventListener ====== ");
                this.stage.removeAllEventListeners("tick");
            }
        },
        onRemoveClick : function(value){
            value.exportRoot.mcContain.removeAllEventListeners("click");
            value.exportRoot.mcContain.cursor = "default";
        },
        onCharacterClickListener : function(e){
            if(this.prevCharacter != null && this.prevCharacter != e.character){
                this.prevCharacter.name = "nomal";
                this.prevCharacter.onChangeAni();
            } 
            this.prevCharacter = e.character;

            //음성을 플레이할 파일 위치를 찾아 온다. ex) 현제 엑트, 레벨, 화면, 케릭터
            var path = controller.model.soundPath;
            var randomNum = (controller.model.activeView == 3) ? parseInt(Math.random() * 3)+1 : randomNum = parseInt(Math.random() * 2)+1;
            var url = "";
            //set"+controller.model.quizSetNum

            if(controller.model.activeAct == "act1"){
                url = 
                path+controller.model.activeAct+"/character/"+e.name+"/view"+controller.model.activeView+"/"+
                controller.model.viewName+"/"+controller.model.activeLevel+"/click"+randomNum;
            }else if(controller.model.activeAct == "act2" && controller.model.activeView == "2"){
                url = 
                path+controller.model.activeAct+"/character/"+e.name+"/view"+controller.model.activeView+"/"+
                controller.model.activeLevel+"/set"+controller.model.quizSetNum+"/click"+randomNum;
            }else if(controller.model.activeAct == "act2"){
                url = 
                path+controller.model.activeAct+"/character/"+e.name+"/view"+controller.model.activeView+"/"+
                controller.model.activeLevel+"/click"+randomNum;
            }else if(controller.model.activeAct == "act3" && controller.model.activeView == "2"){
                url = 
                path+controller.model.activeAct+"/character/"+e.name+"/view"+controller.model.activeView+"/set"+
                controller.model.quizSetNum+"/click"+randomNum;
            }else if(controller.model.activeAct == "act3" && controller.model.activeView == "3"){
                randomNum = parseInt(Math.random() * 2)+1;
                url = 
                path+controller.model.activeAct+"/character/"+e.name+"/view"+controller.model.activeView+"/"+
                "set"+controller.model.quizSetNum+"/click"+randomNum;
            }else if(controller.model.activeAct == "act4" && controller.model.activeView == "2"){
                url = 
                path+controller.model.activeAct+"/character/"+e.name+"/view"+controller.model.activeView+"/"+
                "click"+(parseInt(Math.random() * 4)+1);
            }else if(controller.model.activeAct == "act5" && controller.model.activeView == "2"){
                url = 
                path+controller.model.activeAct+"/character/"+e.name+"/view"+controller.model.activeView+"/"+
                "click"+(parseInt(Math.random() * 6)+1);
            }else if(controller.model.activeAct == "act6" && controller.model.activeView == "2"){
                url = 
                path+controller.model.activeAct+"/character/"+e.name+"/view"+controller.model.activeView+"/"+
                "click"+(parseInt(Math.random() * 8)+1);
            }else if(controller.model.activeAct == "act7" && controller.model.activeView == "2"){
                url = 
                path+controller.model.activeAct+"/character/"+e.name+"/view"+controller.model.activeView+"/"+ controller.model.activeLevel+"/"+
                "click"+(parseInt(Math.random() * 2)+1);
            }else{
                url = 
                path+controller.model.activeAct+"/character/"+e.name+"/view"+controller.model.activeView+"/"+
                "click"+randomNum;
            }
            
            //케릭터 클릭 음성 액션 등록. 캐릭터가 대기 상태일떄만 클릭 액션 실행 
            if(e.name != "coco" && e.name != "toto"){
                if(e.character.name == "nomal"){
                    this.onCharacterPlay("speek",e.character,url);
                }
            }else{
                if(e.character.name == "nomal"){
                    url = path+e.name;
                    this.onCharacterPlay("speek",e.character,url);
                }
            }
            
            switch(e.type){
                case "elly_click" :
                break;

                case "gram_click" :
                break;

                case "reedie_click" :
                break;

                case "coco_click" :
                break;

                case "toto_click" :
                break;
            }
        },
        onCharacterPlay : function(type,character,url,callback,isblock){ //동작 타입, 움직을 케릭터, 음성 경로
            console.log("onCharacterPlay----------------------------------")
            console.log(character);
            controller.soundManager.init(url,isblock,$.proxy(function(){
                console.log("callback");
                character.name = "nomal";
                character.onChangeAni();
                this.prevCharacter = null;
                if(callback != null) callback();
            },this));

            character.name = type;
            character.onChangeAni();  
        },
        setStage : function($stage){
            this.stage = $stage;
            this.stage.enableMouseOver(20);
        },
        addEvent : function(value){
            value.mouseChildren = false;
            value.cursor = "pointer";
        },

        removeAni : function(value){
            value.onRemoveAni();
            // if(value.exportRoot) this.stage.removeChild(value.exportRoot);
        },
        resetAni : function(){
            this.stage = null;
            for(var i=0;i<this.aniArr.length;i++){
                if(this.aniArr[i].onRemoveAni() != undefined) this.aniArr[i].onRemoveAni();
            }
            $("#"+this.id).remove();
        },
        onSetChrater : function(id,value){
            this.id = id;
            console.log(this.stage);
            for(var i=0;i<value.length;i++){
                if(this.stage != null) {
                    if(this.stage.contains(value[i].character)) console.log("true");
                    else{
                        console.log("false");

                    } 
                }
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var element = value[key];
                    }
                }
                value[i].character.init(id,value[i].x,value[i].y,value[i].index,value[i].scaleX);
            }

        }
    };
    exports.CharacterManager = CharacterManager;
})(this);