(function(exports){

    function BgmManager(){
        console.log("BgmManager.js load!!!!");
        this.volume = 0.5;
    }

    BgmManager.prototype = {
        init : function(value,isLoop){ // 사운드 경로를 담아준다.
            
            this.contain = $("#bgm_contain");
            this.contain.html("");
            // $(".effect_url").html(value);
            if(isLoop != null){
                this.audio = $('<audio id="bgm_object" autoPlay volume=1.0><source src="'+value+'.mp3" type="audio/mpeg"></audio>');
            }else{
                this.audio = $('<audio id="bgm_object" autoPlay loop=true volume=1.0><source src="'+value+'.mp3" type="audio/mpeg"></audio>');
            } 
            
            this.contain.append(this.audio);
            this.audio.on("ended",$.proxy(function(e){
            },this));

            this.aud = document.getElementById("bgm_object");
            this.aud.volume = this.volume;
        },
        allRemove : function(){
            if(this.contain != null) this.contain.html("");
        },
        setVolume : function(value){
            this.volume  = value;
            this.aud.volume = value;
        }
    };
    exports.BgmManager = BgmManager;
})(this);