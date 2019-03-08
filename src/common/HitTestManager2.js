(function(exports){
    function HitTestManager2(){

    }

    HitTestManager2.prototype = {
        onHitTest : function(value){
            var dmarginL = (value.dL)?value.dL:0;
            var dmarginT = (value.dT)?value.dT:0;
            var tmarginL = (value.tL)?value.tL:0;
            var tmarginT = (value.tT)?value.tT:0;
            var drag = value.drag;
            var target = value.target;
            var dragMinX = drag[0].offsetLeft+dmarginL;
            var dragMaxX = drag[0].offsetLeft+drag[0].clientWidth+dmarginL;
            var targetMinX = target[0].offsetLeft+tmarginL;
            var targetMaxX = target[0].offsetLeft+target[0].offsetWidth+tmarginL;

            var dragMinY = drag[0].offsetTop+dmarginT;
            var dragMaxY = drag[0].offsetTop+drag[0].clientHeight+dmarginT;
            var targetMinY = target[0].offsetTop+tmarginT;
            var targetMaxY = target[0].offsetTop+target[0].offsetHeight+tmarginT;
            console.log($(drag[0]));
            console.log($(target[0]));
            console.log("dragMaxX" +dragMaxX);
            console.log("dragMinX" +dragMinX);
            console.log("targetMaxX" +targetMaxX);
            console.log("targetMinX" +targetMinX);

            if(dragMinX < targetMaxX && dragMaxX > targetMinX){
                if(dragMinY < targetMaxY && dragMaxY > targetMinY){
                    console.log(value.type," HIT!!!!");
                    return value.type;
                }
            }

            
            //value.drag, value.target 을 받아온다. 
            //drag의 x min좌표 값이 target의 x max값보다 작거나 
            //drag의 x max좌표 값이 target의 x min값보다 클때 
        }
    };

    exports.HitTestManager2 = HitTestManager2;
})(this);