//음성파일 경로 넘겨받음
//음성을 플레이 시키고 음성이 끝날때 상황을 이벤트 전달.

(function(exports){

    function VideoManager(){
        console.log("VideoManager.js load!!!!");
    }

    VideoManager.prototype = {
        init : function(target, value, isblock, callBack, isSkip){ // 사운드 경로를 담아준다.
            if(isDevelopMode) developerTrace.soundURL(value);
            this.contain = target;
            this.contain.html("");
            if(this.prevCallBack != null || this.prevCallBack != undefined){
                this.prevCallBack();
                this.prevCallBack = undefined;
            } 
            this.callBack = callBack;
            if(callBack != null || callBack != undefined) this.prevCallBack = callBack;
            $(".video_url").html(value);
            var video = $('<video width="1000" height="630" class="video_object" autoPlay><source src="'+value+'.mp4" type="video/mp4"></video>').css({"position":"absolute","top":"0px","left":"0px"});
            this.contain.append(video);
            if(isblock){
                $("#root").prepend($("<div class = 'isblock'><span>BLOCK MODE...<button id = 'developer_skip_button' type='button' class='btn btn-outline-primary btn-sm'> skip </button>"+
                "<button id = 'developer_puse_button' type='button' class='btn btn-outline-primary btn-sm'> pause </button></span></div>"));
                if(controller.model.testMode){
                    $(".isblock").css({"background-color":"rgba(0, 0, 0, 0.11)"});
                    
                }else{
                    $(".isblock").css({"background-color":"rgba(0, 0, 0, 0)"});
                    $(".isblock span").hide();
                }
                $("#developer_skip_button").on("click",$.proxy(function(){
                    this.onSkip();
                },this));

                $("#developer_puse_button").on("click",$.proxy(function(){
                    if(video[0].paused) video[0].play();
                    else video[0].pause();
                },this));

                if(isSkip){
                    $(".isblock").on("click", $.proxy(this.onSkip,this))
                }
            }
            
            video.on("ended",$.proxy(function(e){
                this.prevCallBack = null;
                this.prevCallBack = undefined;
                $(e.target).remove();
                $("#root").find(".isblock").remove();
                if(callBack != undefined) callBack();
            },this));

            
        },
        onSkip : function(){
            this.contain.html("");
            this.prevCallBack = null;
            this.prevCallBack = undefined;
            $("#root").find(".isblock").remove();
            $(".audio_object").remove();
            if(this.callBack != undefined) this.callBack();
        },
        allRemove : function(){
            if(this.contain != null) this.contain.html("");
            this.prevCallBack = null;
            this.prevCallBack = undefined;
            $("#root").find(".isblock").remove();
            $(".audio_object").remove();
        }
    };
    
    exports.VideoManager = VideoManager;
})(this);