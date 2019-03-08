(function(exports){
    function AnimationManager1(){
        // this.gumballmachine;
        this.aniArr = [];
    }

    AnimationManager1.prototype = {
        init : function(){
            $.getScript("asset/animate/act1/gumballmachine/GumBallMachine.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC gumballmachine.js load success");
                    this.gumballmachine = new GumBallMachine();
                    // this.gumballmachine.init("ani_canvas");
                    this.aniArr.push(this.gumballmachine);
                }
            },this));
        },

        resetAni : function(){
            for(var i=0;i<this.aniArr.length;i++){
                this.aniArr[i].onRemoveAni();
            }
        }
    };
    exports.AnimationManager1 = AnimationManager1;
})(this);