(function(exports){
    function HitTestManager(){

    }

    HitTestManager.prototype = {
        onHitTest : function(value){
            var drag = value.drag;
            var target = value.target;
            var dragMinX = drag[0].offsetLeft;
            var dragMaxX = drag[0].offsetLeft+drag[0].clientWidth;
            var targetMinX = target[0].offsetLeft;
            var targetMaxX = target[0].offsetLeft+target[0].clientWidth;

            var dragMinY = drag[0].offsetTop;
            var dragMaxY = drag[0].offsetTop+drag[0].clientHeight;
            var targetMinY = target[0].offsetTop;
            var targetMaxY = target[0].offsetTop+target[0].clientHeight;
            if(dragMinX < targetMaxX && dragMaxX > targetMinX){
                if(dragMinY < targetMaxY && dragMaxY > targetMinY){
                    console.log(" HIT!!!!");
                    if(value.type == null) return true;
                    else return value.type;
                }
            }

            
            //value.drag, value.target 을 받아온다. 
            //drag의 x min좌표 값이 target의 x max값보다 작거나 
            //drag의 x max좌표 값이 target의 x min값보다 클때 
        }
    };

    exports.HitTestManager = HitTestManager;
})(this);