(function(exports){
    function FullScreenModul(){
        this.scaleW = 1;
        this.scaleH = 1;
        //called when an event goes full screen and vice-versa.
        document.addEventListener("fullscreenchange", $.proxy(this.screen_change,this));
        document.addEventListener("webkitfullscreenchange", $.proxy(this.screen_change,this));
        document.addEventListener("mozfullscreenchange", $.proxy(this.screen_change,this));
        document.addEventListener("MSFullscreenChange", $.proxy(this.screen_change,this));

        //called when requestFullscreen(); fails. it may fail if iframe don't have allowfullscreen attribute enabled or for something else. 
        document.addEventListener("fullscreenerror", function(){console.log("Full screen failed");});
        document.addEventListener("webkitfullscreenerror", function(){console.log("Full screen failed");});
        document.addEventListener("mozfullscreenerror", function(){console.log("Full screen failed");});
        document.addEventListener("MSFullscreenError", function(){console.log("Full screen failed");});
    }

    FullScreenModul.prototype = {
        init : function(){
            FullScreenHelper.on(function (e) {
                console.log(FullScreenHelper.state());
            });

            
        },
        full_screen : function(){

            if("fullscreenEnabled" in document || "webkitFullscreenEnabled" in document || "mozFullScreenEnabled" in document || "msFullscreenEnabled" in document) 
            {

                

                if(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                {
                    $("#full_Screen").hide();
                    console.log("User allows fullscreen");
                    $("#root").css({"width":"100%","height":"100%"});
                    var element = document.getElementById("root");
                    //requestFullscreen is used to display an element in full screen mode.
                    if("requestFullscreen" in element) 
                    {
                        element.requestFullscreen();
                    } 
                    else if ("webkitRequestFullscreen" in element) 
                    {
                        element.webkitRequestFullscreen();
                    } 
                    else if ("mozRequestFullScreen" in element) 
                    {
                        element.mozRequestFullScreen();
                    } 
                    else if ("msRequestFullscreen" in element) 
                    {
                        element.msRequestFullscreen();
                    }

                }

                
                setTimeout($.proxy(function(){
                    console.log("time out")
                    console.log($("#root").width() / 1000)
                    console.log($("#root").height() / 630)
                    this.scaleW = $("#root").width() / 1000;
                    this.scaleH = $("#root").height() / 630;
                    $("#gameContainer").css({"transform":"scale("+this.scaleW+", "+this.scaleH+")"});
                    $("#progress").css({"transform":"scale("+this.scaleW+", "+this.scaleH+")"});
                    $("#top_vod").css({"transform":"scale("+this.scaleW+", "+this.scaleH+")"});
                },this),300);
            }
            else
            {
                console.log("User doesn't allow full screen");
            }
        },

        screen_change : function()
        {
            console.log("this.screen_change");
            //fullscreenElement is assigned to html element if any element is in full screen mode.
            if(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) 
            {
                console.log("Current full screen element is : " + (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement))
                
                this.time = setTimeout($.proxy(function(){
                    this.scaleW = $("#root").width() / 1000;
                    this.scaleH = $("#root").height() / 630;
                    console.log(this.scaleW);
                    console.log(this.scaleH);
                    $("#full_Screen").hide();
                    $("#gameContainer").css({"transform":"scale("+this.scaleW+", "+this.scaleH+")"});
                    $("#progress").css({"transform":"scale("+this.scaleW+", "+this.scaleH+")"});
                    $("#top_vod").css({"transform":"scale("+this.scaleW+", "+this.scaleH+")"});
                },this),100);

               
            }
            else
            {
                $("#full_Screen").show();
                $("#root").css({"width":"1000px","height":"630px"});
                $("#gameContainer").css({"transform":"scale(1, 1)"});
                $("#progress").css({"transform":"scale(1, 1)"});
                $("#top_vod").css({"transform":"scale(1, 1)"});
                this.scaleW = 1;
                this.scaleH = 1;
                // exitFullscreen us used to exit full screen manually
                if ("exitFullscreen" in document) 
                {
                    document.exitFullscreen();
                } 
                else if ("webkitExitFullscreen" in document) 
                {
                    document.webkitExitFullscreen();
                } 
                else if ("mozCancelFullScreen" in document) 
                {
                    document.mozCancelFullScreen();
                } 
                else if ("msExitFullscreen" in document) 
                {
                    document.msExitFullscreen();
                }
            }
        }         
    };

    exports.FullScreenModul = FullScreenModul;
})(this);