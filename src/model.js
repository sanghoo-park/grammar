//모든 데이터는 여기서 저장해고 변경해준다. 데이터가 변경되면 항상 view에 이벤트를 전달해주고 view를 업데이트 시켜준다.

(function(exports){
    function GameModel(value){
        //모든 글로벌 데이터는 여기서 변수 등록해주고 설정해준다. 
        value = value || 100;
        this.coin = "0"; // 코인 값
        this.data = value;
        this.progressData = {};
        this.setName = "";
        this.globalFPS = 40;
        this.viewName = "";
        this.animateImgPath = "./asset/animate/act1/gumballmachine/";
        this.soundPath = "./asset/sound/";
        this.videoPath = "./asset/video/";
        this.imgPath = "./asset/img/";
        this.activeAct = ""; //현재 엑트
        this.activeLevel = "Easy"; //현재 레벨
        this.activeView = ""; //현재 화면
        this.activeQuizSetNum = 1; //프론트 단에서 사용하는 변수 문제를 풀떄마다 이변수의 값을 1씩 증가 시키고 데이터를 받아온 토탈 길이와 같으면 다음 view로 넘긴다.
        this.globalSetNum = 1; // 총5 셋트를 진행하면 물건찾기 셋트 진행 글로벌 ui의 손가락 갯수를 조절해주는 변수.
        this.myItems = "";
        this.viewName = ""; // 현제 진행되고 있는 게임의 이름.
        this.testMode;// 테스트 버전일떄 false는 테스트 버전이 아닐떄 구분 변수.
        // this.dataUrlPath = "http://dev.story21.co.kr:9633/grammar/prg/";
        this.dataUrlPath = "./prg/";
        this.quizSetNum = "";
        this.localDataMode;
        this.act7AnswerShow = false;
        this.isPart = "";
        // this.isOutro = true;
        this.allComplete = false;
        this.NounsFirstView = false;
        this.AdverbsFirstView = false;
        this.VerbsFirstView = false;
        this.AdjectivesFirstView = false;
        this.act2FirstView = false;
        this.act3FirstView = false;
        this.find_place = "01"; //물건찾기 장소
        this.find_set = "1"; // 물건찾기 셋트
        this.find_item = "";// 물건찾기 아이템.
        this.isFindButton = false; 
        this.isFinisiFirst = true;
    }


    GameModel.prototype = {
        setAct7AnswerShow : function(value){
            this.act7AnswerShow = value;
            controller.view.act7.act7Game.onTestMode(value);
        },
        increase : function(value){
            value = value || 1;
            this.data += value;
            return this.data;
        },
        decrease : function(value){
            value = value || 1;
            this.data -= value;
            return this.data;
        },
        getData : function(){
            return this.data;
        },
        setItemData : function(value){
            this.item = value;
        },
        getItemData : function(){
            return this.item;
        },
        setHomeData : function(value){
            this.homeData = value;
            var data = this.homeData.result[0].act_quest[0];
            this.globalSetNum = this.homeData.study_cnt; 
            this.coin = this.homeData.user_coin;
            this.myItems = this.homeData.result[0].act_quest[0].items;
            var arr = String(this.myItems).split(",");
            // if(this.isPart == "1"){
            //     if(arr.length == 20 && data.act1_1 == "Y" && data.act1_2 == "Y" && data.act1_3 == "Y" && data.act1_4 == "Y" && data.act2 == "Y" && data.act3 == "Y"){
            //         this.isOutro = true;
            //     }else{
            //         this.isOutro = false;
            //     }
            // }else{
            //     if(arr.length == 20 && data.act4 == "Y" && data.act5 == "Y" && data.act6 == "Y" && data.act7 == "Y"){
            //         this.isOutro = true;
            //     }else{
            //         this.isOutro = false;
            //     }
            // }
            console.log("globalSetNum = " +  this.globalSetNum);
            console.log("coin = " +  this.homeData.user_coin);
            console.log("myItems = " +  this.homeData.result[0].act_quest[0].items);
        },
        getHomeData : function(){
            return this.homeData;
        },
        setSetNum : function(value){
            this.setnum = value;
        },
        setViewName : function(value){
            console.log(value);
            this.viewName = value;
        },
        getViewName : function(){
            return this.viewName;
        },
        setActGameData : function(value){
            this.actData = value;
            console.log(this.actData," = model data");
            //데이터를 넘겨 받은후 모델에 데이터를 저장하고 
            //view를 업데이트 시킨다.
        },
        getActGameData : function(){
            return this.actData;
        },
        setQuizData : function(value){//게임 문제 데이터를 저장한다.
            this.quizData = value;
            console.log(this.quizData," = model.quizData : ");
        }
    };
    exports.GameModel = GameModel;
})(this);