//음성파일 경로 넘겨받음
//음성을 플레이 시키고 음성이 끝날때 상황을 이벤트 전달.

(function(exports){

    function Block(){
        console.log("Block.js load!!!!");
    }

    Block.prototype = {
        init : function(){ // 사운드 경로를 담아준다.
            $("#root").prepend($("<div class = 'block'><span>BLOCK MODE...</span></div>"));

            if(controller.model.testMode){
                $(".block").css({"background-color":"rgba(0, 0, 0, 0.11)","width":"1000px","height":"630px","position":"absolute","z-index":"90000"});   
            }else{
                $(".block").css({"background-color":"rgba(0, 0, 0, 0)","height":"630px","position":"absolute","z-index":"90000"});
                $(".block span").hide();
            }
        },
        allRemove : function(){
            $("#root").find(".block").remove();
        }
    };
    
    exports.Block = Block;
})(this);