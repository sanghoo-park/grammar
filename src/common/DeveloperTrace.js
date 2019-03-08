(function(exports){
    function DeveloperTrace(){}

    DeveloperTrace.prototype = {
        init : function(){
            this.contain = $("<div id='developer_contain'></div>");
            this.soundTrace = $("<div id='developer_sound_url'><span>sound URL : </span><div></div></div>");
            this.gameSetTrace = $("<div id='developer_gameSet_url'><span>GAME SET : </span><div></div></div>");
            testModule.contain.append(this.contain);
            this.contain.append(this.soundTrace);
            this.contain.append(this.gameSetTrace);
            this.soundTrace.find("span").css("float","left");
            this.gameSetTrace.find("span").css("float","left");
        },
        soundURL : function(value){
            this.soundTrace.find("div").html(value);
            
        },
        gameSet : function(value){
            this.gameSetTrace.find("div").html(value);
        },
        trace : function(value){
            this.contain.find(".developer_trace").remove();
            this.contain.append("<p class='developer_trace'>"+value+"</p>");
        }
    };

    exports.DeveloperTrace = DeveloperTrace;
})(this);