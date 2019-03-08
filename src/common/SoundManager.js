//음성파일 경로 넘겨받음
//음성을 플레이 시키고 음성이 끝날때 상황을 이벤트 전달.

(function(exports){

    function SoundManager(){
        console.log("soundmanager.js load!!!!");
    }

    SoundManager.prototype = {
        init : function(value,isblock,callBack,isSkip){ // 사운드 경로를 담아준다.
            if(isDevelopMode) developerTrace.soundURL(value);
            this.contain = $("#sound_contain");
            this.contain.html("");
            if(this.prevCallBack != null || this.prevCallBack != undefined){
                this.prevCallBack();
                this.prevCallBack = undefined;
            } 
            if(callBack != null || callBack != undefined) this.prevCallBack = callBack;
            $(".sound_url").html(value);
            if(isblock){
                $("#root").prepend($("<div class = 'isblock'><span>BLOCK MODE...<button id = 'developer_skip_button' type='button' class='btn btn-outline-primary btn-sm'> skip </button></but</span></div>"));

                if(controller.model.testMode){
                    $(".isblock").css({"background-color":"rgba(0, 0, 0, 0.11)"});
                    
                }else{
                    $(".isblock").css({"background-color":"rgba(0, 0, 0, 0)"});
                    $(".isblock span").hide();
                }

                $("#developer_skip_button").on("click",$.proxy(function(){
                    this.contain.html("");
                    this.prevCallBack = null;
                    this.prevCallBack = undefined;
                    $("#root").find(".isblock").remove();
                    $(".audio_object").remove();
                    if(callBack != undefined) callBack();
                },this));
            }
            var audio = $('<audio class="audio_object" autoPlay><source src="'+value+'.mp3" type="audio/mpeg"></audio>');
            this.contain.append(audio);
            audio.on("ended",$.proxy(function(e){
                this.prevCallBack = null;
                this.prevCallBack = undefined;

                $(e.target).remove();
                $("#root").find(".isblock").remove();
                if(callBack != undefined) callBack();
                
            },this));

            if(isSkip){
                $(".isblock").on("click",$.proxy(function(){
                    this.contain.html("");
                    this.prevCallBack = null;
                    this.prevCallBack = undefined;
                    $("#root").find(".isblock").remove();
                    $(".audio_object").remove();
                    if(callBack != undefined) callBack();
                }, this))
            }
        },
        allRemove : function(){
            if(this.contain != null) this.contain.html("");
            
        }
    };
    
    exports.SoundManager = SoundManager;
})(this);