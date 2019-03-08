(function(exports){
    function AnimationManager3(){
        // this.gumballmachine;
        this.aniArr = [];
    }

    AnimationManager3.prototype = {
        init : function(){
            $.getScript("asset/animate/act3/bubble/Bubble.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Bubble.js load success");
                    this.bubble = new Bubble();
                    // this.aniArr.push(this.bubble);
                }
            },this));

            $.getScript("asset/animate/act3/newBubble/NewBubble.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC NewBubble.js load success");
                    this.newBubble = new NewBubble();
                    this.aniArr.push(this.newBubble);
                }
            },this));
        },

        getNewBubble : function(){
            var bubble = new Bubble();
            this.aniArr.push(this.bubble);
            return bubble;
        },
        resetAni : function(){
            for(var i=0;i<this.aniArr.length;i++){
                this.aniArr[i].onRemoveAni();
            }
        }
    };
    exports.AnimationManager3 = AnimationManager3;
})(this);