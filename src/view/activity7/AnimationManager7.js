(function(exports){
    function AnimationManager7(){
        // this.gumballmachine;
        this.aniArr = [];
    }

    AnimationManager7.prototype = {
        init : function(){
            // $.getScript("asset/animate/act3/bubble/Bubble.js",$.proxy(function(data, textStatus, jqxhr){
            //     if(textStatus == "success"){
            //         console.log("animateCC Bubble.js load success");
            //         this.bubble = new Bubble();
            //         // this.aniArr.push(this.bubble);
            //     }
            // },this));
        },
        resetAni : function(){
            for(var i=0;i<this.aniArr.length;i++){
                this.aniArr[i].onRemoveAni();
            }
        },
        getNewBubble : function(){
            var bubble = new Bubble();
            this.aniArr.push(this.bubble);
            return bubble;
        },
    };
    exports.AnimationManager7 = AnimationManager7;
})(this);