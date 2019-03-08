//음성파일 경로 넘겨받음
//음성을 플레이 시키고 음성이 끝날때 상황을 이벤트 전달.

(function(exports){

    function EffectManager(){
        console.log("EffectManager.js load!!!!");
    }

    EffectManager.prototype = {
        init : function(value, callBack){ // 사운드 경로를 담아준다.
            this.contain = $("#effect_contain");
            this.contain.html("");
            $(".effect_url").html(value);
            var audio = $('<audio class="effect_object" autoPlay><source src="'+value+'.mp3" type="audio/mpeg"></audio>');
            this.contain.append(audio);
            audio.on("ended",$.proxy(function(e){
                $(e.target).remove();
                if(callBack != undefined) callBack();
            },this));
        },
        allRemove : function(){
            if(this.contain != null) this.contain.html("");
        }
    };
    exports.EffectManager = EffectManager;
})(this);