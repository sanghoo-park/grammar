(function(exports){
    function AlertPopup(){}

    AlertPopup.prototype = {
        init : function(){
            console.log("onalertPopup");
            this.alertPopupContain = 
            $(
                "<div class='popup_button_contain'>"+
                    "<div id = 'popup_div'>"+
                        "<div>"+
                            "<span class='font_embed'>You need at least 20 jewels to continue.</span>"+
                            "<div class='popup_button'>"+
                                "<img class='popup_yes_button' src='./asset/img/common/qyes.png' />"+
                                // "<img class='popup_no_button' src='./asset/img/common/qno.png' />"+
                            "</div>"+
                            "<img src='"+controller.model.imgPath+"common/yesno.png' />"+
                        "</div>"+
                    "</div>"+
                "</div>");
            this.alertPopupContain.find(".popup_yes_button").on("click",$.proxy(function(e){
                this.alertPopupContain.remove();
            },this));
            var url = "";
            this.alertPopupContain.find(".popup_yes_button").on("mouseover",$.proxy(function(e){
                this.alertPopupContain.find(".popup_yes_button").attr("src","./asset/img/common/qyes_over.png");
            },this));

            this.alertPopupContain.find(".popup_yes_button").on("mouseout",$.proxy(function(e){
                this.alertPopupContain.find(".popup_yes_button").attr("src","./asset/img/common/qyes.png");
            },this));

            this.alertPopupContain.find(".popup_no_button").on("click",$.proxy(function(e){
                this.alertPopupContain.remove();
            },this));

            this.alertPopupContain.find(".popup_no_button").on("mouseover",$.proxy(function(e){
                this.alertPopupContain.find(".popup_no_button").attr("src","./asset/img/common/qno_over.png");
            },this));

            this.alertPopupContain.find(".popup_no_button").on("mouseout",$.proxy(function(e){
                this.alertPopupContain.find(".popup_no_button").attr("src","./asset/img/common/qno.png");
            },this));

            this.alertPopupContain.hide();
            this.alertPopupContain.fadeIn(300);
            $("#root").append(this.alertPopupContain);
        }
    };
    exports.AlertPopup = AlertPopup;
})(this);