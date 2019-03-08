(function(exports){
    function AnimationManager2(){
        // this.gumballmachine;
        this.aniArr = [];
        this.loadChack = [false,false,false,false];
    }

    AnimationManager2.prototype = {
        init : function(){
            $.getScript("asset/animate/act2/gameFrog/GameFrog.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC GameFrog.js load success");
                    this.gameFrog = new GameFrog();
                    this.aniArr.push(this.gameFrog);
                    this.loadChack[0] = true;
                    this.onLoadComplete();
                }
            },this));

            $.getScript("asset/animate/act2/resultFrog/ResultFrog.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC ResultFrog.js load success");
                    this.loadChack[1] = true;
                    this.resultFrog = new ResultFrog();
                    this.aniArr.push(this.resultFrog);
                    this.onLoadComplete();
                }
            },this));

            $.getScript("asset/animate/act2/fly/Fly.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC Fly.js load success");
                    this.loadChack[2] = true;
                    this.fly = new Fly();
                    this.aniArr.push(this.fly);
                    this.onLoadComplete();
                }
            },this));

            $.getScript("asset/animate/act2/startFrog/StartFrog.js",$.proxy(function(data, textStatus, jqxhr){
                if(textStatus == "success"){
                    console.log("animateCC StartFrog.js load success");
                    this.loadChack[3] = true;
                    this.startFrog = new StartFrog();
                    this.aniArr.push(this.startFrog);
                    this.onLoadComplete();
                }
            },this));
        },
        onLoadComplete : function(){
            // for(var i=0;i<this.loadChack.length;i++){
            //     if(!this.loadChack[i]){
            //         return false;
            //     }
            // }
            // $(window).trigger("act2AniLoadComplete");
        },
        resetAni : function(){
            for(var i=0;i<this.aniArr.length;i++){
                this.aniArr[i].onRemoveAni();
            }
        }
    };
    exports.AnimationManager2 = AnimationManager2;
})(this);