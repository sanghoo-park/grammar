(function(exports){
    function AnimationManager(){
        // this.gumballmachine;
        this.aniArr = [];
    }

    AnimationManager.prototype = {
        init : function(){
            $.getScript("asset/animate/coin/Coin.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Coin.js load success");
                    this.coin = new Coin();
                    this.aniArr.push(this.coin);
                }
            },this));

            $.getScript("asset/animate/findAni/FindAni.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC FindAni.js load success");
                    this.findAni = new FindAni();
                    this.aniArr.push(this.findAni);
                }
            },this));
        },
        resetAni : function(){
            for(var i=0;i<this.aniArr.length;i++){
                this.aniArr[i].onRemoveAni();
            }
        },
    };
    exports.AnimationManager = AnimationManager;
})(this);