var controller;
controller = new Controller();
controller.model.isPart = "1";
var randomArray = new RandomArray();
var testModule;
var developerTrace;
var speed = 15000;
window.addEventListener("load",function(){
    console.log("execute!!!!");
    loadTitle();
});

function loadTitle(){
    $("#gameContainer").hide();
    $("#progress").hide();
    $("#top_vod").append($("<img src='./asset/img/title1.png' />"));
    var btn = $("<div id='start_button'></div>");
    $("#top_vod").append(btn);
    btn.css({"position":"absolute","left":" 151px","top":"35px"});
    new ButtonUtil().init("start_button","./asset/img/","startBtn1");
    controller.bgmManager.init("./asset/sound/title",false);
    $("#start_button").on("click",function(e){
        $("#start_button").off("click");
        controller.bgmManager.allRemove();
        // $("#top_vod").html("");
        loadIntro();
    });
}

function loadIntro(){
    controller.videoManager.init($("#top_vod"),controller.model.videoPath+"/intro/part1_intro",false,loadHomeAni);
    setTimeout(function(){
        $("#top_vod video").on("click",function(e){
            $("#top_vod video").off("click");
            controller.videoManager.allRemove();
            // $("#top_vod").html("");
            loadHomeAni();
        });
    },speed)
    
}

function loadHomeAni(){
    console.log("click");
    controller.videoManager.init($("#top_vod"),controller.model.videoPath+"/home/home1",false,end);
    $("#top_vod video").on("click",function(e){
        console.log("click");
        end();
    });

    function end(){
        $("#gameContainer").show();
        controller.videoManager.allRemove();
        loadCharacter();
    }
}

function loadCharacter(){
    $.getScript("src/common/CharacterManager.js",$.proxy(function(data, textStatus, jqxhr){
        if(textStatus == "success"){
            console.log("CharacterManager / "+textStatus);
            controller.model.isPart = "1";
            controller.characterManager = new CharacterManager(); // act1 에니메이션 메니져 생성
            controller.characterManager.init();
            onloadComplete();
        }
    },this));
}
var isDevelopMode = false;
function onloadComplete(){

    testModule = new TestModule();
    developerTrace = new DeveloperTrace();
    testModule.init();
    developerTrace.init();
    isDevelopMode = true;
    // $("#root").css("overflow","visible");
    // var num = 0;
    // $(document).on("keydown","body", function(e){
    //     console.log(e.which);
    //     num = num + parseInt(e.which);
    //     if(num == 82 && isDevelopMode == false){
    //         // testModule = new TestModule();
    //         // developerTrace = new DeveloperTrace();
    //         // console.log("true");
    //         // testModule.init();
    //         // developerTrace.init();
    //         // isDevelopMode = true;
    //         // $("#root").css("overflow","visible");
    //     } 
    // });

    // $(document).on("keyup","body", function(e){
    //     num = 0;
    // });
    
    
    
    controller.loadHome();
}