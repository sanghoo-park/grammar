//데이터를 써버에 전달하거나 써버에서 데이터를 요청할때 사용
(function(exports){
    function DataManager(){

    }

    DataManager.prototype = {

        loadProgressData : function(){
            var url = (controller.model.localDataMode == true) ? "./asset/testData/progress.json" : controller.model.dataUrlPath + "p"+controller.model.isPart+"_progress_q.asp";
            var jqxhr = $.getJSON(url, function() {
                console.log( "success" );
            }).done(function(data) {
                console.log("progress data load success!!!");
                console.log(data);
                controller.model.progressData = data;
                controller.onLoadProgress();
                
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            }).always(function() {
                console.log( "complete" );
            });
        },

        loadHomeData : function(){
            //p1_home_q.asp
            var url = (controller.model.localDataMode == true) ? "./asset/testData/homeData.json" : controller.model.dataUrlPath + "p"+controller.model.isPart+"_home_q.asp";
            console.log(url)
            var jqxhr = $.getJSON(url, function() {
                console.log( "success" );
            }).done(function(data) {
                console.log("home data load success!!!");
                console.log(data);
                controller.globalUI.init();
                controller.onModelSave(data);
                
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            }).always(function() {
                console.log( "complete" );
            });
        },
        
        findAndSeek : function(value,callback){ // 아이템 저장.
            var obj = value;
            if(!controller.model.localDataMode){
                if(!controller.isComplete.getItemComplete()){
                    var url = (controller.model.isPart == "1")? controller.model.dataUrlPath + "p1_findseek_s.asp":controller.model.dataUrlPath + "p2_findseek_s.asp";
                
                    var jqxhr = $.getJSON(url, obj, function() {
                        console.log( "success" );
                        callback();
                    }).done(function(data) {
                        console.log(data);
                    }).fail(function( jqxhr, textStatus, error ) {
                        var err = textStatus + ", " + error;
                        console.log( "Request Failed: " + err );
                    }).always(function() {
                        console.log( "complete" );
                    });
                }else{
                    callback();
                }
            }else{
                callback();
            }
        },

        useCoin : function(callback){ // 아이템 저장.
            if(!controller.model.localDataMode){
                var url = (controller.model.isPart == "1")? controller.model.dataUrlPath + "p1_findhome_q.asp":controller.model.dataUrlPath + "p2_findhome_q.asp";
                
                var jqxhr = $.getJSON(url,"",function() {
                    console.log( "success" );
                    controller.globalUI.coinAni();
                    controller.model.coin = parseInt(controller.model.coin) - 20;
                    controller.globalUI.updateUI();
                    controller.loadFinditemGame("data");
                }).done(function(data) {
                    console.log(data);
                }).fail(function( jqxhr, textStatus, error ) {
                    var err = textStatus + ", " + error;
                    console.log( "Request Failed: " + err );
                    controller.onAlertPopup();
                }).always(function() {
                    console.log( "complete" );
                });
            }else{
                if(callback != null || callback != undefined) callback();
                else{
                    controller.globalUI.coinAni();
                }
            }
        },

        loadAct1Data : function(){
            var url = (controller.model.localDataMode == true) ? "./asset/testData/act1GameData.json" : controller.model.dataUrlPath + "p1_sc1_q.asp";
            var obj = {};
            if(controller.model.viewName == "Nouns") obj.act_sub_cd = "001";
            if(controller.model.viewName == "Verbs") obj.act_sub_cd = "002";
            if(controller.model.viewName == "Adjectives") obj.act_sub_cd = "003";
            if(controller.model.viewName == "Adverbs") obj.act_sub_cd = "004";
            obj.screen_cd = "1";
            console.log(obj);
            if(controller.model.localDataMode) obj ={};
            var jqxhr = $.getJSON(url, obj, function() {
                console.log( "success" );
            }).done(function(data) {
                console.log(controller.model.getViewName() + " :act1 data load success",data );
                controller.model.setActGameData(data);
                controller.onloadAct1(controller.model.getViewName());
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            }).always(function() {
                console.log( "complete" );
            });
        },
        loadAct2Data : function(){
            var url = (controller.model.localDataMode == true) ? "./asset/testData/act2GameData.json" : controller.model.dataUrlPath + "p1_sc1_q.asp";
            var obj = {};
            obj.act_sub_cd = "005";
            obj.screen_cd = "1";
            if(controller.model.localDataMode) obj ={};

            var jqxhr = $.getJSON(url, obj, function() {
                console.log( "success" );
            }).done(function(data) {
                console.log( "act2 data load success ");
                controller.model.setActGameData(data);
                controller.onloadAct2();
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            }).always(function() {
                console.log( "complete" );
            });
        },
        loadAct3Data : function(){
            var url = (controller.model.localDataMode == true) ? "./asset/testData/act3GameData.json" : controller.model.dataUrlPath + "p1_sc1_q.asp";
            var obj = {};
            obj.act_sub_cd = "006";
            obj.screen_cd = "1";
            if(controller.model.localDataMode) obj ={};


            var jqxhr = $.getJSON(url, obj, function() {
                console.log( "success" );
            }).done(function(data) {
                console.log( "act3 data load success ");
                controller.model.setActGameData(data);
                controller.onloadAct3();
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            }).always(function() {
                console.log( "complete" );
            });
        },
        loadAct4Data : function(){
            console.log(controller.model.localDataMode);
            var url = (controller.model.localDataMode == true) ? "./asset/testData/act4GameData.json" : controller.model.dataUrlPath + "p2_sc1_q.asp";
            var obj = {};
            obj.act_sub_cd = "007";
            obj.screen_cd = "1";
            if(controller.model.localDataMode) obj ={};


            var jqxhr = $.getJSON(url, obj, function() {
                console.log( "success" );
            }).done(function(data) {
                console.log( "act4 data load success ");
                controller.model.setActGameData(data);
                controller.onloadAct4();
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            }).always(function() {
                console.log( "complete" );
            });
        },
        loadAct5Data : function(){
            var url = (controller.model.localDataMode == true) ? "./asset/testData/act5GameData.json" : controller.model.dataUrlPath + "p2_sc1_q.asp";
            var obj = {};
            obj.act_sub_cd = "008";
            obj.screen_cd = "1";
            if(controller.model.localDataMode) obj ={};
            var jqxhr = $.getJSON(url, obj, function() {
                console.log( "success" );
            }).done(function(data) {
                console.log( "act5 data load success ");
                controller.model.setActGameData(data);
                controller.onloadAct5();
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            }).always(function() {
                console.log( "complete" );
            });
        },

        loadAct6Data : function(){
            var url = (controller.model.localDataMode == true) ? "./asset/testData/act6GameData.json" : controller.model.dataUrlPath + "p2_sc1_q.asp";
            var obj = {};
            obj.act_sub_cd = "009";
            obj.screen_cd = "1";
            if(controller.model.localDataMode) obj ={};
            var jqxhr = $.getJSON(url, obj, function() {
                console.log( "success" );
            }).done(function(data) {
                console.log( "act6 data load success ");
                controller.model.setActGameData(data);
                controller.onloadAct6();
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            }).always(function() {
                console.log( "complete" );
            });
        },

        loadAct7Data : function(){
            var url = (controller.model.localDataMode == true) ? "./asset/testData/act7GameData.json" : controller.model.dataUrlPath + "p2_sc1_q.asp";
            var obj = {};
            obj.act_sub_cd = "010";
            obj.screen_cd = "1";
            if(controller.model.localDataMode) obj ={};
            var jqxhr = $.getJSON(url, obj, function() {
                console.log( "success" );
            }).done(function(data) {
                console.log( "act7 data load success ");
                controller.model.setActGameData(data);
                controller.onloadAct7();
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            }).always(function() {
                console.log( "complete" );
            });
        },

        loadFindData : function(){
            var str = controller.model.isPart;
            var url = (controller.model.localDataMode == true) ? "./asset/testData/findGameData.json" : controller.model.dataUrlPath + "p"+str+"_findseek_q.asp";
            var jqxhr = $.getJSON(url, function() {
                console.log( "success" );
            }).done(function(data) {
                console.log( "find & seek data load success ");
                controller.model.setActGameData(data);
                controller.loadFinditemGame();
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            }).always(function() {
                console.log( "complete" );
            });
        },

        loadJewel : function(){
            var str = controller.model.isPart;
            var url = (controller.model.localDataMode == true) ? "./asset/testData/findGameData.json" : controller.model.dataUrlPath + "p"+str+"_findseek_q.asp";
            var jqxhr = $.getJSON(url, function() {
                console.log( "success" );
            }).done(function(data) {
                console.log( "find & seek data load success ");
                controller.model.setActGameData(data);
                controller.loadFinditemGame();
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
                
            }).always(function() {
                console.log( "complete" );
            });
        },

        loadQuze : function(){
            var act = controller.model.activeAct;
            var url = "";
            var obj = {};
            obj.screen_cd = controller.model.activeView;
            if(controller.model.activeLevel == "Easy") obj.level_sub_cd = "1";
            if(controller.model.activeLevel == "Medium") obj.level_sub_cd = "2";
            if(controller.model.activeLevel == "Hard") obj.level_sub_cd = "3";
            if(act == "act1"){
                if(controller.model.viewName == "Nouns") obj.act_sub_cd = "001";
                if(controller.model.viewName == "Verbs") obj.act_sub_cd = "002";
                if(controller.model.viewName == "Adjectives") obj.act_sub_cd = "003";
                if(controller.model.viewName == "Adverbs") obj.act_sub_cd = "004";
                url = (controller.model.localDataMode == true) ? "./asset/testData/act1Quiz.json" : controller.model.dataUrlPath + "p1_sc2_q.asp";
            }else if(act == "act2"){
                obj.act_sub_cd = "005";
                url = (controller.model.localDataMode == true) ? "./asset/testData/act2Quiz.json" : controller.model.dataUrlPath + "p1_sc2_q.asp";
            }else if(act == "act3"){
                obj.act_sub_cd = "006";
                url = (controller.model.localDataMode == true) ? "./asset/testData/act3Quiz.json" : controller.model.dataUrlPath + "p1_sc2_q.asp";
            }else if(act == "act4"){
                obj.act_sub_cd = "007";
                url = (controller.model.localDataMode == true) ? "./asset/testData/act4Quiz.json" : controller.model.dataUrlPath + "p2_sc2_q.asp";
            }else if(act == "act5"){
                obj.act_sub_cd = "008";
                url = (controller.model.localDataMode == true) ? "./asset/testData/act5Quiz.json" : controller.model.dataUrlPath + "p2_sc2_q.asp";
            }else if(act == "act6"){
                obj.act_sub_cd = "009";
                url = (controller.model.localDataMode == true) ? "./asset/testData/act6Quiz.json" : controller.model.dataUrlPath + "p2_sc2_q.asp";
            }else if(act == "act7"){
                obj.act_sub_cd = "010";
                url = (controller.model.localDataMode == true) ? "./asset/testData/act7Quiz.json" : controller.model.dataUrlPath + "p2_sc2_q.asp";
            }
            console.log(obj);


            var jqxhr = $.getJSON(url, obj, function() {
                console.log( "success" );
            }).done(function(data) {
                console.log( "Quiz load success ");
                controller.setQuizData(data);
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log(jqxhr );
                console.log( "Request Failed: " + err );
            });
        },
        loadLog : function(value, data, callback, isSave){ 
            console.log("data manager loadLog : " + value );
            var act = controller.model.activeAct;
            var url = "";
            var obj = {};
            if(act == "act1"){
            }else if(act == "act2"){
            }else if(act == "act3"){
            }
            if(controller.model.viewName == "Nouns") obj.act_sub_cd = "001";
            if(controller.model.viewName == "Verbs") obj.act_sub_cd = "002";
            if(controller.model.viewName == "Adjectives") obj.act_sub_cd = "003";
            if(controller.model.viewName == "Adverbs") obj.act_sub_cd = "004";
            if(controller.model.viewName == "EatEmUp") obj.act_sub_cd = "005";
            if(controller.model.viewName == "PopPopPop") obj.act_sub_cd = "006";
            if(act == "act4") obj.act_sub_cd = "007";
            if(act == "act5") obj.act_sub_cd = "008";
            if(act == "act6") obj.act_sub_cd = "009";
            if(act == "act7") obj.act_sub_cd = "010";
            
            if(controller.model.activeLevel == "Easy") obj.level_sub_cd = "1";
            if(controller.model.activeLevel == "Medium") obj.level_sub_cd = "2";
            if(controller.model.activeLevel == "Hard") obj.level_sub_cd = "3";
            obj.screen_cd = controller.model.activeView;
            if(data != null){
                if(data.quizNum != null) obj.set_num = data.quizNum;
                if(data.yes_cnt != null) obj.yes_cnt = data.yes_cnt;
                if(data.fail_cnt != null) obj.fail_cnt = data.fail_cnt;
                if(data.yes_yn != null) obj.yes_yn = data.yes_yn;
            }

            var partStr = (parseInt(obj.act_sub_cd) <= 6)?"p1":"p2";
            url = (value == "init") ? controller.model.dataUrlPath+partStr+"_actlog_init.asp" : controller.model.dataUrlPath+partStr+"_actlog_end.asp";
            console.log(obj)
            console.log("url : "+url)
            
            if(controller.model.localDataMode == false){
                var jqxhr = $.getJSON(url, obj, function() {
                    console.log( "success" );
                }).done(function(data) {
                    console.log(data);
                    console.log( "loadLog success");
                    console.log(isSave);
                    if(isSave){
                        var url = controller.model.dataUrlPath +"p"+controller.model.isPart+"_home_q.asp";
                        var jqxhr = $.getJSON(url, function() {
                            console.log( "success" );
                        }).done(function(data) {
                            console.log("home data load success!!!");
                            console.log(data);
                            var itemsArr = String(data.result[0].act_quest[0].items).split(",");
                            if(controller.model.isPart == "1"){
                                if(data.result[0].act_quest[0].act1_1 == "Y" && data.result[0].act_quest[0].act1_2 == "Y" && data.result[0].act_quest[0].act1_3 == "Y" && data.result[0].act_quest[0].act1_4 == "Y" && data.result[0].act_quest[0].act2 == "Y" && data.result[0].act_quest[0].act3 == "Y" && itemsArr.length == 20){
                                    if(controller.model.isFinisiFirst) controller.onEnding();
                                    else callback();
                                    
                                }else{
                                    callback();
                                }
                            }else{
                                if(data.result[0].act_quest[0].act4 == "Y" && data.result[0].act_quest[0].act5 == "Y" && data.result[0].act_quest[0].act6 == "Y" && data.result[0].act_quest[0].act7 == "Y" && itemsArr.length == 20){
                                    if(controller.model.isFinisiFirst) controller.onEnding();
                                    else callback();
                                }else{
                                    callback();
                                }
                            }
                        }).fail(function( jqxhr, textStatus, error ) {
                            var err = textStatus + ", " + error;
                            console.log( "Request Failed: " + err );
                        }).always(function() {
                            console.log( "complete" );
                        });
                    }else{
                        callback();
                    }
                }).fail(function( jqxhr, textStatus, error ) {
                    var err = textStatus + ", " + error;
                    console.log( "Request Failed: " + err );
                }).always(function() {
                    console.log( "complete" );
                });
            }else{
                if(isSave){
                    url = (controller.model.localDataMode == true) ? "./asset/testData/homeData.json" : controller.model.dataUrlPath + "p"+controller.model.isPart+"_home_q.asp";
                    var jqxhr = $.getJSON(url, function() {
                        console.log( "success" );
                    }).done(function(data) {
                        console.log("home data load success!!!");
                        console.log(data);
                        var itemsArr = String(data.result[0].act_quest[0].items).split(",");
                        if(controller.model.isPart == "1"){
                            if(controller.model.allComplete == false && data.result[0].act_quest[0].act1_1 == "Y" && data.result[0].act_quest[0].act1_2 == "Y" && data.result[0].act_quest[0].act1_3 == "Y" && data.result[0].act_quest[0].act1_4 == "Y" && data.result[0].act_quest[0].act2 == "Y" && data.result[0].act_quest[0].act3 == "Y" && itemsArr.length == 20){
                                controller.onEnding();
                            }else{
                                callback();
                            }
                        }else{
                            if(controller.model.allComplete == false && data.result[0].act_quest[0].act4 == "Y" && data.result[0].act_quest[0].act5 == "Y" && data.result[0].act_quest[0].act6 == "Y" && data.result[0].act_quest[0].act7 == "Y" && itemsArr.length == 20){
                                controller.onEnding();
                            }else{
                                callback();
                            }
                        }
                        
                    }).fail(function( jqxhr, textStatus, error ) {
                        var err = textStatus + ", " + error;
                        console.log( "Request Failed: " + err );
                    }).always(function() {
                        console.log( "complete" );
                    });
                }else{
                    callback();
                }
            }
            
        }
    };
    exports.DataManager = DataManager;
})(this);