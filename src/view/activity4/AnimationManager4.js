(function(exports){
    function AnimationManager4(){
        // this.gumballmachine;
        this.aniArr = [];
    }

    AnimationManager4.prototype = {
        init : function(){
            $.getScript("asset/animate/act3/bubble/Bubble.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Bubble.js load success part2");
                    this.bubble = new Bubble();
                    this.aniArr.push(this.bubble);
                }
            },this));

            $.getScript("asset/animate/act4/fire/Fire.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC fire.js load success");
                    this.fire = new Fire();
                    this.aniArr.push(this.fire);
                }
            },this));

            $.getScript("asset/animate/act4/siren/Siren.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Siren.js load success");
                    this.siren = new Siren();
                    this.aniArr.push(this.siren);
                }
            },this));

            $.getScript("asset/animate/act4/fireManResult/FireManResult.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC FireManResult.js load success");
                    this.fireManResult = new FireManResult();
                    this.aniArr.push(this.fireManResult);
                }
            },this));
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
    exports.AnimationManager4 = AnimationManager4;
})(this);