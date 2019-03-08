(function(exports){
    function Certificate(){}

    Certificate.prototype = {
        init : function(){
            console.log("Certificate");
            this.stage = $("#progress");
            var imgPath = controller.model.imgPath;
            var imgurl = (controller.model.isPart == "1")?"certificate1.png":"certificate2.png"
            var img_X = (controller.model.isPart == "1")?"422px":"113px"
            this.img = $("<img src='"+controller.model.imgPath+"common/"+imgurl+"' />");
            this.img.css("position","absolute")
            this.quitButton = $("<div id='certificate_quit_button'></div>");
            this.printButton = $("<div id='certificate_print_button'></div>");
            this.textFiled = $("<ul id='certificate_top_textF' class='font_embed'><li></li><li></li><ul>");
            this.stage.append(this.img);
            this.stage.append(this.quitButton);
            this.stage.append(this.printButton);
            this.stage.append(this.textFiled);
            new ButtonUtil().init("certificate_quit_button",imgPath+"common/","close");
            new ButtonUtil().init("certificate_print_button",imgPath+"common/","print");
            this.printButton.css("right",img_X);
            var data = controller.model.homeData;
            console.log(data);
            this.textFiled.find("li:nth-child(1)").text(data.user_nm+",");
            var d = new Date();
            var month = "";
            if(d.getMonth() == 0) month = "Jan";
            if(d.getMonth() == 1) month = "Feb";
            if(d.getMonth() == 2) month = "Mar";
            if(d.getMonth() == 3) month = "Apr";
            if(d.getMonth() == 4) month = "May";
            if(d.getMonth() == 5) month = "Jun";
            if(d.getMonth() == 6) month = "Jul";
            if(d.getMonth() == 7) month = "Aug";
            if(d.getMonth() == 8) month = "Sep";
            if(d.getMonth() == 9) month = "Oct";
            if(d.getMonth() == 10) month = "Nov";
            if(d.getMonth() == 11) month = "Dec";
            var day = month+" "+d.getUTCDate()+", " + d.getFullYear();
            this.textFiled.find("li:nth-child(2)").text(day);

            $("#progress").show();
            this.stage.hide();
            this.stage.fadeIn(1000);
            var url = controller.model.soundPath + "success";
            controller.effectManager.init(url); //경로.
            this.quitButton.on("click",$.proxy(this.onClickListener,this));
            this.printButton.on("click",$.proxy(this.onClickListener,this));

            if(controller.model.isPart == "1"){
                $("#certificate_top_textF li:nth-child(2)").css({"margin-top":"-43px","margin-left":"148px"});
                this.textFiled.css({"top": "138px","left":"172px"});
            }else{
                $("#certificate_top_textF li:nth-child(2)").css({"margin-top":"-26px","margin-left":"142px"});
                this.textFiled.css({"top": "121px","left":"488px"});
            }

            
        },
      
        onClickListener : function(e){
            console.log(e.currentTarget.id)
            switch(e.currentTarget.id){
                case "certificate_quit_button" :
                this.stage.fadeOut(1000,$.proxy(function(){
                    $("#progress").html("");
                },this));
                break;

                case "certificate_print_button" :
                window.print();
                break;
            }
        }
    };

    exports.Certificate  = Certificate;
})(this);