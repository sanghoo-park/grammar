//새로운 화면이 들어오고 기존 화면이 나갈떄 모든 화면제어는 여기서 해준다. 해당 div테그에 add or remove 시켜주는 형태로 작업.

(function(exports){
    function GameView(value){
        this.home = new Home();
        this.act1 = new Activity1();
        this.act2 = new Activity2();
        this.act3 = new Activity3();
        this.findAndSeek = new FindAndSeek();
        this.progress = new Progress();
        this.certificate = new Certificate();
        this.activeAct = this.home;
    }
    
    GameView.prototype = {
        render : function(value){
            $('.result').val(value);
        },
        openAlertPopup : function(){
            new AlertPopup().init();
        },
        openQuitPopup : function(){
            new QuitPopup().init();
        },
        updateUI : function(){
            console.log("ui update");
            controller.globalUI.updateUI();
        },
        onRenderProgress : function(value){
            if(this.progress == null) this.progress = new Progress();
            this.progress.init();
        },
        onRenderCertificate : function(){
            if(this.certificate == null) this.certificate = new Certificate();
            this.certificate.init();
        },
        onRenderHome : function(value){
            if(this.home == null) this.home = new Home();
            this.home.getContent();
            this.updateUI();
            this.home.updateItem();
            this.activeAct = this.home;
        },
        onRenderAct1 : function(value){
            if(this.act1 == null) this.act1 = new Activity1();
            this.activeAct = this.act1;
            if(value == null){
                this.act1.getContent();
            }else if(value == "Nouns" || value == "Verbs" || value == "Adjectives" || value == "Adverbs"){
                this.updateUI();
                controller.model.activeView = 1;
                this.act1.onStart();
            }else if(value == "start"){
                this.act1.onStart();
            }else if(value == "script"){
                controller.model.activeView = 2;
                this.act1.onScript();
            }else if(value == "game"){
                controller.model.activeView = 3;
                this.act1.onGame();
            }else if(value == "resulte"){
                controller.model.activeView = 4;
                this.act1.onResulte();
            }else if(value == "quiz"){
                this.act1.onStageSetting();
            }else if(value == "scriptView"){
                controller.model.activeView = 2;
                this.act1.onScriptComplete();
            }
        },
        onRenderAct2 : function(value){
            if(this.act2 == null) this.act2 = new Activity2();
            this.activeAct = this.act2;
            if(value == null){
                controller.model.activeView = 1;
                this.act2.getContent();
                this.updateUI();
            }else if(value == "start"){
                controller.model.activeView = 1;
                this.act2.onHome();
            }else if(value == "script"){
                controller.model.activeView = 2;
                this.act2.onScript();
            }else if(value == "game"){
                controller.model.activeView = 3;
                this.act2.onGame();
            }else if(value == "resulte"){
                controller.model.activeView = 4;
                this.act2.onResulte();
            }else if(value == "quiz"){
                controller.model.activeView = 3;
                this.act2.onStageSetting();
            }else if(value == "scriptView"){
                controller.model.activeView = 2;
                this.act2.onScriptComplete();
            }
        },
        onRenderAct3 : function(value){
            if(this.act3 == null) this.act3 = new Activity3();
            this.activeAct = this.act3;
            if(value == null){
                controller.model.activeView = 1;
                this.act3.getContent();
                this.updateUI();
            }else if(value == "start"){
                controller.model.activeView = 1;
                this.act3.onHome();
            }else if(value == "script"){
                controller.model.activeView = 2;
                this.act3.onScript();
            }else if(value == "game"){
                controller.model.activeView = 3;
                this.act3.onGame();
            }else if(value == "resulte"){
                controller.model.activeView = 4;
                this.act3.onResulte();
            }else if(value == "quiz"){
                controller.model.activeView = 3;
                this.act3.onStageSetting();
            }else if(value == "scriptView"){
                controller.model.activeView = 2;
                this.act3.onScriptComplete();
            }
        },
        onRenderAct4 : function(value){
            if(this.act4 == null) this.act4 = new Activity4();
            this.activeAct = this.act4;
            if(value == null){
                controller.model.activeView = 1;
                this.act4.getContent();
                this.updateUI();
            }else if(value == "game"){
                controller.model.activeView = 2;
                this.act4.onGame();
            }else if(value == "resulte"){
                controller.model.activeView = 3;
                this.act4.onResulte();
            }else if(value == "quiz"){
                this.act4.onStageSetting();
            }
        },
        onRenderAct5 : function(value){
            if(this.act5 == null) this.act5 = new Activity5();
            this.activeAct = this.act5;
            if(value == null){
                controller.model.activeView = 1;
                this.act5.getContent();
                this.updateUI();
            }else if(value == "game"){
                controller.model.activeView = 2;
                this.act5.onGame();
            }else if(value == "quiz"){
                this.act5.onStageSetting();
            }
        },
        onRenderAct6 : function(value){
            if(this.act6 == null) this.act6 = new Activity6();
            this.activeAct = this.act6;
            if(value == null){
                controller.model.activeView = 1;
                this.act6.getContent();
                this.updateUI();
            }else if(value == "game"){
                controller.model.activeView = 2;
                this.act6.onGame();
            }else if(value == "quiz"){
                this.act6.onStageSetting();
            }
        },
        onRenderAct7 : function(value){
            if(this.act7 == null) this.act7 = new Activity7();
            this.activeAct = this.act7;
            if(value == null){
                controller.model.activeView = 1;
                this.act7.getContent();
                this.updateUI();
            }else if(value == "game"){
                controller.model.activeView = 2;
                this.act7.onGame();
            }else if(value == "quiz"){
                this.act7.onStageSetting();
            }
        },
        onRenderFindAndSeek : function(value){
            $("#gameContainer").html("");
            if(this.findAndSeek == null) this.findAndSeek = new FindAndSeek();
            this.activeAct = this.findAndSeek;
            if(value == null){
                this.findAndSeek.getContent();
            }
        }
    };
    exports.GameView = GameView;
})(this);