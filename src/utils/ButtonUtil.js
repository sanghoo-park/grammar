(function(exports){
    function ButtonUtil(){}

    ButtonUtil.prototype = {
         // button id, 이미지 페스, 이미지 이름 확장자 불포함 png로 통일 name2는 토글형태의 버튼셋팅( 버튼을 클릭하면 이미지가 변경되는 형태)
        init : function(id,path,name,alt,name2,alt2){
            this.id = id;
            this.path = path;
            this.name = name;
            this.alt = alt;
            this.alt2 = alt2;
            this.name2 = name2;
            this.activeName = name;
            $("#"+id).css({"cursor":"pointer"});
            if(alt == null) $("#"+id).append($("<img src='"+path+name+".png' />"));
            else {
                $("#"+id).append($("<img src='"+path+name+".png' alt ="+alt+" />"));
                // $("#"+id).append($("<img src='"+path+name+".png' alt ="+alt+" title="+alt+" />"));
            }
            if(name2 != null){
                $("#"+id).on("click",$.proxy(this.onMouseEventListener,this));
            }
            $("#"+id).on("mousedown",$.proxy(this.onMouseEventListener,this));
            $("#"+id).on("mouseout",$.proxy(this.onMouseEventListener,this));
            $("#"+id).on("mouseover",$.proxy(this.onMouseEventListener,this));
        },

        onMouseEventListener : function(e){
            switch(e.type){
                case "mousedown" :
                    // $("#"+this.id+" img").attr("src",this.path+this.activeName+"_d.png");
                break;

                case "mouseout" :
                    $("#"+this.id+">img").attr("src",this.path+this.activeName+".png");
                break;

                case "mouseover" :
                    $("#"+this.id+">img").attr("src",this.path+this.activeName+"_over.png");
                break;

                case "click" :
                    this.onChangeButton();
                break;
            }
        },
        onChangeButton : function(){
            var imgname = $("#"+this.id+" img").attr("src");
            var lastNum = String(imgname).lastIndexOf("_");
            console.log(String(imgname).substr(lastNum+1,1));
            var str = "";
            if(String(imgname).substr(lastNum+1,1) == "o") str = "_over.png";
            else str = ".png";
            if($("#"+this.id+" img")[0].alt == this.alt){
                this.activeName = this.name2;
                $("#"+this.id+" img").attr("src",this.path+this.name2+str);
                $("#"+this.id+" img").attr("alt",this.alt2);
                // $("#"+this.id+" img").attr("title",this.alt2);
            }else{
                this.activeName = this.name;
                $("#"+this.id+" img").attr("src",this.path+this.name+str);
                $("#"+this.id+" img").attr("alt",this.alt);
                // $("#"+this.id+" img").attr("title",this.alt);
            }
        },
        onResetButton : function(){
            this.activeName = this.name;
            $("#"+this.id+" img").attr("src",this.path+this.name+".png");
            $("#"+this.id+" img").attr("alt",this.alt);
            // $("#"+this.id+" img").attr("title",this.alt);
        }

    };
    exports.ButtonUtil = ButtonUtil;
})(this);