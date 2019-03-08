(function(exports){
    function QuitPopup(){}

    QuitPopup.prototype = {
        init : function(){
            console.log("onQuit");
            this.quitContain = 
            $(
                "<div class='quit_button_contain'>"+
                    "<div id = 'quit_div'><div>"+
                        "<span class='font_embed'>Do you really want to quit?</span>"+
                        "<div class='quit_button'><img class='quit_yes_button' src='./asset/img/common/qyes.png' /><img class='quit_no_button' src='./asset/img/common/qno.png' /></div>"+
                        "<img src='"+controller.model.imgPath+"common/yesno.png' />"+
                    "</div></div>"+
                "</div>");
            this.quitContain.find(".quit_yes_button").on("click",$.proxy(function(e){
                if(controller.isComplete.getComplete()){
                    this.quitContain.hide();
                    $("#gameContainer").hide();
                    $("#gameContainer").html("");
                    $("#globla_ui").hide();
                    controller.videoManager.init($("#top_vod"),controller.model.videoPath+"/outro/part"+controller.model.isPart+"_outro",false,$.proxy(this.onEndingCallBack,this));
                    $("#top_vod video").on("click",$.proxy(this.onEndingCallBack,this));
                }else{
                    self.opener = self;
                    window.close();
                }
                
            },this));
            var url = "";
            this.quitContain.find(".quit_yes_button").on("mouseover",$.proxy(function(e){
                this.quitContain.find(".quit_yes_button").attr("src","./asset/img/common/qyes_over.png");
            },this));

            this.quitContain.find(".quit_yes_button").on("mouseout",$.proxy(function(e){
                this.quitContain.find(".quit_yes_button").attr("src","./asset/img/common/qyes.png");
            },this));

            this.quitContain.find(".quit_no_button").on("click",$.proxy(function(e){
                this.quitContain.remove();
            },this));

            this.quitContain.find(".quit_no_button").on("mouseover",$.proxy(function(e){
                this.quitContain.find(".quit_no_button").attr("src","./asset/img/common/qno_over.png");
            },this));

            this.quitContain.find(".quit_no_button").on("mouseout",$.proxy(function(e){
                this.quitContain.find(".quit_no_button").attr("src","./asset/img/common/qno.png");
            },this));

            this.quitContain.hide();
            this.quitContain.fadeIn(300);
            $("#root").append(this.quitContain);
        },
        onEndingCallBack : function(){
            self.opener = self;
            window.close();
        }
    };
    exports.QuitPopup = QuitPopup;
})(this);