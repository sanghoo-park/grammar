(function(exports){
    function TextColorAni(){}

    TextColorAni.prototype = {
        init : function(target){
            this.textColorAnimate(target,0);
        },
        textColorAnimate : function(target,num){
            target.animate({"color":"white"},$.proxy(function(){
                target.animate({"color":"black"},$.proxy(function(){
                    num++;
                    if(num < 3) this.textColorAnimate(target,num);
                },this));
            },this));
        }
    };
    exports.TextColorAni = TextColorAni;
})(this);