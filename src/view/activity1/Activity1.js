//액트1은 게임종류 1~4까지 선택 해서 진행
(function(exports){
    function Activity1(value){
        this.data = value || {};

        $.getScript("src/view/activity1/AnimationManager1.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                console.log("animationManager1"+textStatus);
                controller.animationManager1 = new AnimationManager1(); // act1 에니메이션 메니져 생성
                controller.animationManager1.init();
            }
        },this));

        $.getScript("src/view/activity1/Activity1Start.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                console.log("act1Start"+textStatus);
                this.act1Start = new Activity1Start();
            }
        },this));

        $.getScript("src/view/activity1/Activity1Script.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                console.log("act1Script"+textStatus);
                this.act1Script = new Activity1Script();
            }
        },this));

        $.getScript("src/view/activity1/Activity1Game.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                console.log("act1Game"+textStatus);
                this.act1Game = new Activity1Game();
            }
        },this));

        $.getScript("src/view/activity1/Activity1Resulte.js",$.proxy(function(data, textStatus, jqxhr){
            if(textStatus == "success"){
                console.log("act1Resulte"+textStatus);
                this.act1Resulte = new Activity1Resulte();
            }
        },this));
    }

    Activity1.prototype = {
        onReset : function () {  
            this.act1Game.onReset();
            this.act1Start.onReset();
        },

        getContent : function(value){
            controller.model.setViewName(controller.model.viewName);
            console.log(controller.model.viewName);
            this.onHomeListener(controller.model.viewName);
        },
        onHome : function(){ // 액트1 스타트 화면.
            controller.loadAct1Data();
            //this.act1Start.updateView();
        },
        onStart : function(){
            console.log(this.act1Start);
            this.act1Start.updateView();
        },
        onScript : function(){ // 대사 화면
            this.act1Script.updateView();
        },
        onScriptComplete : function(){ // 대사 화면
            this.act1Script.setView();
        },
        onGame : function(){ // 게임 화면
            this.act1Game.updateView();
        },
        onStageSetting : function(){
            this.act1Game.onStageSetting();
        },
        onResulte : function(){
            this.act1Resulte.updateView();
        },
        onHomeListener : function(value){
            switch(value){
                case "Nouns" :
                controller.onloadAct1("data");
                break;

                case "Verbs" :
                controller.onloadAct1("data");
                break;

                case "Adjectives" :
                controller.onloadAct1("data");
                break;

                case "Adverbs" :
                controller.onloadAct1("data");
                break;

                case "homeButton" :
                $("#gameContainer").html("");
                controller.loadHome();
                break;
            }
        }
    };
    exports.Activity1 = Activity1;
})(this);