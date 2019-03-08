//사용자 인터렉션처리는 여기서 한다 인터렉션후 모델의 데이터를 변경해주고 데이터가 변경되면 view에게 화면을 업데이트 시켜 달라고 요청한다.

(function(exports){
    function Controller(value){
        this.model = new GameModel();
        this.view = new GameView();
        this.globalUI = new GlobalUI();
        this.dataManager = new DataManager();
        this.hitTestManager = new HitTestManager();
        this.hitTestManager2 = new HitTestManager2();
        this.soundManager = new SoundManager();
        this.effectManager = new EffectManager();
        this.videoManager = new VideoManager();
        this.bgmManager = new BgmManager();
        this.isComplete = new IsComplete();
        this.fullScreenModul = new FullScreenModul();
        this.block = new Block();
    }

    Controller.prototype = {
        loadHome : function(value){
            this.dataManager.loadHomeData();
        },
        onEnding : function(){
            console.log("ending");
            $("#gameContainer").hide();
            $("#gameContainer").html("");
            $("#globla_ui").hide();
            controller.videoManager.init($("#top_vod"),controller.model.videoPath+"/outro/part"+controller.model.isPart+"_outro",false,$.proxy(this.onEndingCallBack,this));
            controller.bgmManager.init("");
            setTimeout($.proxy(function(){
                $("#top_vod video").on("click",$.proxy(this.onEndingCallBack,this));
            },this), 15000);
        },
        onEndingCallBack : function(){
            $("#globla_ui").show();
            $("#gameContainer").show();
            $("#top_vod video").off("click");
            $("#gameContainer").html("");

            controller.characterManager.resetAni();
            controller.soundManager.allRemove();
            controller.effectManager.allRemove();
            controller.videoManager.allRemove();
            controller.view.activeAct.onReset();
            controller.loadHome();
            this.view.onRenderCertificate();
        },
        onAlertPopup : function(){
            this.view.openAlertPopup();
        },
        onQuit : function(){
            this.view.openQuitPopup();
        },
        onLoadProgress : function(value){
            console.log("onLoadProgress : "+value);
            if(value == "data"){
                this.dataManager.loadProgressData();
            }else{
                this.view.onRenderProgress(value);
            }
        },
        onloadAct1 : function(value){
            console.log("onloadAct1 : "+value);
            if(value == "data"){
                this.dataManager.loadAct1Data();
            }else{
                this.view.onRenderAct1(value);
            }
        },
        onloadAct2 : function(value){
            if(value == "data"){
                this.dataManager.loadAct2Data();
            }else{
                this.view.onRenderAct2(value);
            }
        },
        onloadAct3 : function(value){
            if(value == "data"){
                this.dataManager.loadAct3Data();
            }else{
                this.view.onRenderAct3(value);
            }
        },
        onloadAct4 : function(value){
            if(value == "data"){
                this.dataManager.loadAct4Data();
            }else{
                this.view.onRenderAct4(value);
            }
        },
        onloadAct5 : function(value){
            if(value == "data"){
                this.dataManager.loadAct5Data();
            }else{
                this.view.onRenderAct5(value);
            }
        },
        onloadAct6 : function(value){
            if(value == "data"){
                this.dataManager.loadAct6Data();
            }else{
                this.view.onRenderAct6(value);
            }
        },
        onloadAct7 : function(value){
            if(value == "data"){
                this.dataManager.loadAct7Data();
            }else{
                this.view.onRenderAct7(value);
            }
        },
        loadFinditemGame : function(value){
            if(value == "data"){
                this.dataManager.loadFindData();
            }else{
                this.view.onRenderFindAndSeek(value);
            }
        },
        onModelSave : function(value){
            this.model.setHomeData(value);
            this.view.onRenderHome();
        },
        onLoadQuiz : function(){
            this.dataManager.loadQuze();
        },
        setQuizData : function(value){
            this.model.setQuizData(value); // 여기서 셋트넘 처리 해주고 셋트넘 등록
            controller.model.quizSetNum = controller.model.quizData.result[0].act_quest[0].set_num;
            developerTrace.gameSet(controller.model.quizSetNum);
            if(this.model.activeAct == "act1") this.view.onRenderAct1("scriptView");
            else if(this.model.activeAct == "act2") this.view.onRenderAct2("scriptView");
            else if(this.model.activeAct == "act3") this.view.onRenderAct3("scriptView");
            else if(this.model.activeAct == "act4") this.view.onRenderAct4("quiz");
            else if(this.model.activeAct == "act5") this.view.onRenderAct5("quiz");
            else if(this.model.activeAct == "act6") this.view.onRenderAct6("quiz");
            else if(this.model.activeAct == "act7") this.view.onRenderAct7("quiz");
            
        }
    };
    exports.Controller = Controller;
})(this);