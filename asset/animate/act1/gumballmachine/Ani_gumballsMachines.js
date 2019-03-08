(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.coin = function() {
	this.initialize(img.coin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,152);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ob_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(10.5,-9.6).lineTo(28.9,-5.3).lineTo(28.9,5.2).lineTo(10.5,9.6).lineTo(-10.5,9.6).lineTo(-28.9,5.2).lineTo(-28.9,-5.3).lineTo(-10.5,-9.6).lineTo(10.5,-9.6).lineTo(10.5,9.6).moveTo(-10.5,9.6).lineTo(-10.5,-9.6);
	this.shape.setTransform(28.9,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-10.5,9.5).lineTo(-10.5,-9.6).lineTo(10.5,-9.6).lineTo(10.5,9.5).closePath();
	this.shape_1.setTransform(28.9,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#C7DEFA").beginStroke().moveTo(10.5,-9.6).lineTo(28.9,-5.2).lineTo(28.9,5.2).lineTo(10.5,9.5).closePath().moveTo(-28.9,5.2).lineTo(-28.9,-5.2).lineTo(-10.5,-9.6).lineTo(-10.5,9.5).closePath();
	this.shape_2.setTransform(28.9,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#97AECB").beginStroke().moveTo(-11.7,11.2).lineTo(-28.7,7).lineTo(-28.7,-7.2).lineTo(-11.1,-11.2).lineTo(10.5,-11.2).lineTo(28.7,-7.4).lineTo(28.7,7.3).lineTo(11.6,11.2).closePath();
	this.shape_3.setTransform(29.1,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,59.8,22.4);


(lib.ob_coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.coin();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.2,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ob_coin, new cjs.Rectangle(-0.2,-0.2,38,38), null);


(lib.gum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#E09910").setStrokeStyle(1,1,1).moveTo(-22.7,15.2).curveTo(-21.3,17.4,-19.3,19.3).curveTo(-17.2,21.4,-14.8,23).curveTo(-8.3,27.3,-0,27.3).curveTo(11.3,27.3,19.3,19.3).curveTo(27.3,11.3,27.3,0).curveTo(27.3,-10.9,19.8,-18.8).curveTo(19.6,-19.1,19.3,-19.4).curveTo(18.3,-20.3,17.3,-21.1).curveTo(10,-27.3,-0,-27.3).curveTo(-11.3,-27.3,-19.3,-19.4).curveTo(-27.3,-11.3,-27.3,0).curveTo(-27.3,8.6,-22.7,15.2).closePath();
	this.shape.setTransform(27.3,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFCDE").beginStroke().moveTo(-17.2,20.3).lineTo(-17.7,19.7).curveTo(-22.3,13.1,-22.3,4.5).curveTo(-22.3,-6.8,-14.3,-14.9).curveTo(-6.3,-22.8,5,-22.8).curveTo(14.9,-22.8,22.3,-16.6).curveTo(15.8,-20.9,7.5,-20.9).curveTo(-3.7,-20.9,-11.8,-13).curveTo(-19.8,-4.9,-19.8,6.4).curveTo(-19.8,15.7,-14.4,22.8).curveTo(-15.8,21.7,-17.2,20.3).closePath();
	this.shape_1.setTransform(22.3,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#EEB62B").beginStroke().moveTo(-17.1,18.7).curveTo(-19.5,17.2,-21.6,15).curveTo(-23.6,13.1,-25,10.9).lineTo(-24.5,11.5).curveTo(-23.1,12.9,-21.7,14).curveTo(-14.5,19.5,-5.2,19.5).curveTo(6.1,19.5,14.1,11.5).curveTo(22.2,3.5,22.2,-7.8).curveTo(22.2,-16.3,17.6,-23).curveTo(25,-15.2,25,-4.3).curveTo(25,7,17,15).curveTo(9,23,-2.3,23).curveTo(-10.6,23,-17.1,18.7).closePath();
	this.shape_2.setTransform(29.6,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFF78C").beginStroke().moveTo(-19.2,19.1).curveTo(-24.6,12,-24.6,2.7).curveTo(-24.6,-8.6,-16.6,-16.7).curveTo(-8.6,-24.6,2.7,-24.6).curveTo(11,-24.6,17.5,-20.3).lineTo(19.4,-18.6).lineTo(20,-17.9).curveTo(24.6,-11.3,24.6,-2.7).curveTo(24.6,8.6,16.6,16.6).curveTo(8.6,24.6,-2.7,24.6).curveTo(-12.1,24.6,-19.2,19.1).closePath();
	this.shape_3.setTransform(27.2,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#4BAA17").setStrokeStyle(1,1,1).moveTo(17.3,-21.1).curveTo(18.3,-20.3,19.3,-19.4).curveTo(19.6,-19.1,19.8,-18.8).curveTo(27.3,-10.9,27.3,0).curveTo(27.3,11.3,19.3,19.3).curveTo(11.3,27.3,-0,27.3).curveTo(-8.3,27.3,-14.8,23).curveTo(-17.2,21.4,-19.3,19.3).curveTo(-21.3,17.4,-22.7,15.2).curveTo(-27.3,8.6,-27.3,0).curveTo(-27.3,-11.3,-19.3,-19.4).curveTo(-11.3,-27.3,-0,-27.3).curveTo(10,-27.3,17.3,-21.1).closePath();
	this.shape_4.setTransform(27.3,27.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#E0FFD0").beginStroke().moveTo(-17.2,20.3).lineTo(-17.7,19.7).curveTo(-22.3,13.1,-22.3,4.5).curveTo(-22.3,-6.8,-14.3,-14.9).curveTo(-6.3,-22.8,5,-22.8).curveTo(14.9,-22.8,22.3,-16.6).curveTo(15.8,-20.9,7.5,-20.9).curveTo(-3.7,-20.9,-11.8,-13).curveTo(-19.8,-4.9,-19.8,6.4).curveTo(-19.8,15.7,-14.4,22.8).curveTo(-15.8,21.7,-17.2,20.3).closePath();
	this.shape_5.setTransform(22.3,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#A3E281").beginStroke().moveTo(-19.2,19.1).curveTo(-24.6,12,-24.6,2.7).curveTo(-24.6,-8.6,-16.6,-16.7).curveTo(-8.6,-24.6,2.7,-24.6).curveTo(11,-24.6,17.5,-20.3).lineTo(19.4,-18.6).lineTo(20,-17.9).curveTo(24.6,-11.3,24.6,-2.7).curveTo(24.6,8.6,16.6,16.6).curveTo(8.6,24.6,-2.7,24.6).curveTo(-12.1,24.6,-19.2,19.1).closePath();
	this.shape_6.setTransform(27.2,26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#68C634").beginStroke().moveTo(-17.1,18.7).curveTo(-19.5,17.2,-21.6,15).curveTo(-23.6,13.1,-25,10.9).lineTo(-24.5,11.5).curveTo(-23.1,12.9,-21.7,14).curveTo(-14.5,19.5,-5.2,19.5).curveTo(6.1,19.5,14.1,11.5).curveTo(22.2,3.5,22.2,-7.8).curveTo(22.2,-16.3,17.6,-23).curveTo(25,-15.2,25,-4.3).curveTo(25,7,17,15).curveTo(9,23,-2.3,23).curveTo(-10.6,23,-17.1,18.7).closePath();
	this.shape_7.setTransform(29.6,31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#C43B3B").setStrokeStyle(1,1,1).moveTo(17.3,-21.1).curveTo(18.3,-20.3,19.3,-19.4).curveTo(19.6,-19.1,19.8,-18.8).curveTo(27.3,-10.9,27.3,0).curveTo(27.3,11.3,19.3,19.3).curveTo(11.3,27.3,-0,27.3).curveTo(-8.3,27.3,-14.8,23).curveTo(-17.2,21.4,-19.3,19.3).curveTo(-21.3,17.4,-22.7,15.2).curveTo(-27.3,8.6,-27.3,0).curveTo(-27.3,-11.3,-19.3,-19.4).curveTo(-11.3,-27.3,-0,-27.3).curveTo(10,-27.3,17.3,-21.1).closePath();
	this.shape_8.setTransform(27.3,27.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFE0E0").beginStroke().moveTo(-17.2,20.3).lineTo(-17.7,19.7).curveTo(-22.3,13.1,-22.3,4.5).curveTo(-22.3,-6.8,-14.3,-14.9).curveTo(-6.3,-22.8,5,-22.8).curveTo(14.9,-22.8,22.3,-16.6).curveTo(15.8,-20.9,7.5,-20.9).curveTo(-3.7,-20.9,-11.8,-13).curveTo(-19.8,-4.9,-19.8,6.4).curveTo(-19.8,15.7,-14.4,22.8).curveTo(-15.8,21.7,-17.2,20.3).closePath();
	this.shape_9.setTransform(22.3,22.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FF8C8C").beginStroke().moveTo(-19.2,19.1).curveTo(-24.6,12,-24.6,2.7).curveTo(-24.6,-8.6,-16.6,-16.7).curveTo(-8.6,-24.6,2.7,-24.6).curveTo(11,-24.6,17.5,-20.3).lineTo(19.4,-18.6).lineTo(20,-17.9).curveTo(24.6,-11.3,24.6,-2.7).curveTo(24.6,8.6,16.6,16.6).curveTo(8.6,24.6,-2.7,24.6).curveTo(-12.1,24.6,-19.2,19.1).closePath();
	this.shape_10.setTransform(27.2,26.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#E25B5B").beginStroke().moveTo(-17.1,18.7).curveTo(-19.5,17.2,-21.6,15).curveTo(-23.6,13.1,-25,10.9).lineTo(-24.5,11.5).curveTo(-23.1,12.9,-21.7,14).curveTo(-14.5,19.5,-5.2,19.5).curveTo(6.1,19.5,14.1,11.5).curveTo(22.2,3.5,22.2,-7.8).curveTo(22.2,-16.3,17.6,-23).curveTo(25,-15.2,25,-4.3).curveTo(25,7,17,15).curveTo(9,23,-2.3,23).curveTo(-10.6,23,-17.1,18.7).closePath();
	this.shape_11.setTransform(29.6,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill().beginStroke("#4C7DC2").setStrokeStyle(1,1,1).moveTo(17.3,-21.1).curveTo(18.3,-20.3,19.3,-19.4).curveTo(19.6,-19.1,19.8,-18.8).curveTo(27.3,-10.9,27.3,0).curveTo(27.3,11.3,19.3,19.3).curveTo(11.3,27.3,-0,27.3).curveTo(-8.3,27.3,-14.8,23).curveTo(-17.2,21.4,-19.3,19.3).curveTo(-21.3,17.4,-22.7,15.2).curveTo(-27.3,8.6,-27.3,0).curveTo(-27.3,-11.3,-19.3,-19.4).curveTo(-11.3,-27.3,-0,-27.3).curveTo(10,-27.3,17.3,-21.1).closePath();
	this.shape_12.setTransform(27.3,27.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#D4E6FF").beginStroke().moveTo(-17.2,20.3).lineTo(-17.7,19.7).curveTo(-22.3,13.1,-22.3,4.5).curveTo(-22.3,-6.8,-14.3,-14.9).curveTo(-6.3,-22.8,5,-22.8).curveTo(14.9,-22.8,22.3,-16.6).curveTo(15.8,-20.9,7.5,-20.9).curveTo(-3.7,-20.9,-11.8,-13).curveTo(-19.8,-4.9,-19.8,6.4).curveTo(-19.8,15.7,-14.4,22.8).curveTo(-15.8,21.7,-17.2,20.3).closePath();
	this.shape_13.setTransform(22.3,22.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#B4D3FF").beginStroke().moveTo(-19.2,19.1).curveTo(-24.6,12,-24.6,2.7).curveTo(-24.6,-8.6,-16.6,-16.7).curveTo(-8.6,-24.6,2.7,-24.6).curveTo(11,-24.6,17.5,-20.3).lineTo(19.4,-18.6).lineTo(20,-17.9).curveTo(24.6,-11.3,24.6,-2.7).curveTo(24.6,8.6,16.6,16.6).curveTo(8.6,24.6,-2.7,24.6).curveTo(-12.1,24.6,-19.2,19.1).closePath();
	this.shape_14.setTransform(27.2,26.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#7FA7E0").beginStroke().moveTo(-17.1,18.7).curveTo(-19.5,17.2,-21.6,15).curveTo(-23.6,13.1,-25,10.9).lineTo(-24.5,11.5).curveTo(-23.1,12.9,-21.7,14).curveTo(-14.5,19.5,-5.2,19.5).curveTo(6.1,19.5,14.1,11.5).curveTo(22.2,3.5,22.2,-7.8).curveTo(22.2,-16.3,17.6,-23).curveTo(25,-15.2,25,-4.3).curveTo(25,7,17,15).curveTo(9,23,-2.3,23).curveTo(-10.6,23,-17.1,18.7).closePath();
	this.shape_15.setTransform(29.6,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,56.7,56.6);


(lib.inconin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(25.3,43.1).curveTo(15.2,35.2,1.4,35.2).lineTo(1.2,35.2).curveTo(-12.6,35.2,-22.7,43.1).lineTo(-24.1,40.7).lineTo(-24.2,40.8).lineTo(-47.7,21.9).lineTo(-24.2,40.8).lineTo(-24.1,40.7).lineTo(-22.7,43.1).lineTo(-47.7,48.4).lineTo(-47.7,21.9).lineTo(-49.5,-49.7).lineTo(49.5,-49.7).lineTo(49.5,29.7).lineTo(26.8,40.8).lineTo(26.8,40.7).lineTo(25.3,43.1).lineTo(26.8,40.7).lineTo(26.8,40.8).lineTo(49.5,29.7).lineTo(49.5,49.7).closePath();
	mask.setTransform(32.5,33.8);

	// 동전 애니메이션
	this.instance = new lib.ob_coin();
	this.instance.parent = this;
	this.instance.setTransform(34.5,34.5,1.832,1.832,0,0,0,18.8,18.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:18.7,scaleX:1.01,scaleY:0.96,x:33.4,y:76.5},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,69.6,69.6);


(lib.incoin2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(25.3,43.1).curveTo(15.2,35.2,1.4,35.2).lineTo(1.2,35.2).curveTo(-12.6,35.2,-22.7,43.1).lineTo(-24.1,40.7).lineTo(-24.2,40.8).lineTo(-47.7,21.9).lineTo(-24.2,40.8).lineTo(-24.1,40.7).lineTo(-22.7,43.1).lineTo(-47.7,48.4).lineTo(-47.7,21.9).lineTo(-49.5,-49.7).lineTo(49.5,-49.7).lineTo(49.5,29.7).lineTo(26.8,40.8).lineTo(26.8,40.7).lineTo(25.3,43.1).lineTo(26.8,40.7).lineTo(26.8,40.8).lineTo(49.5,29.7).lineTo(49.5,49.7).closePath();
	mask.setTransform(32.5,33.8);

	// 동전 애니메이션
	this.instance = new lib.ob_coin();
	this.instance.parent = this;
	this.instance.setTransform(33.4,76.5,1.011,0.956,0,0,0,18.8,18.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:101},8).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.1,58.3,38.4,36.4);


(lib.green = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(129).call(this.frame_129).wait(1));

	// 레이어 3
	this.instance = new lib.ob_coin();
	this.instance.parent = this;
	this.instance.setTransform(167.8,199.2,2.638,2.638,0,0,0,18.8,18.8);
	this.instance._off = true;

	this.instance_1 = new lib.inconin("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,269,1,1,0,0,0,34.6,38.8);

	this.instance_2 = new lib.incoin2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(168,269,1,1,0,0,0,34.6,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},23).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(6).to({scaleX:1.83,scaleY:1.83,y:264.7},7).to({_off:true},1).wait(115));

	// Layer 13
	this.instance_3 = new lib.ob_hand("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(167.3,335.8,1,1,0,0,0,28.9,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({startPosition:0},0).to({rotation:90,x:167.2},8).wait(94));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#597393").setStrokeStyle(1,1,1).moveTo(-12.8,-5.8).lineTo(-12.7,-5.8).curveTo(2.1,-5.8,12.8,3.4).lineTo(11.3,5.8).curveTo(1.2,-2.2,-12.7,-2.2).lineTo(-12.8,-2.2);
	this.shape.setTransform(179.8,301.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#4A5C70").beginStroke().moveTo(-12.7,-2.2).lineTo(-12.8,-2.2).lineTo(-12.8,-5.8).lineTo(-12.7,-5.8).curveTo(2.1,-5.8,12.8,3.4).lineTo(11.3,5.8).curveTo(1.2,-2.2,-12.7,-2.2).closePath();
	this.shape_1.setTransform(179.8,301.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#597393").setStrokeStyle(1,1,1).moveTo(12.8,-5.8).lineTo(12.7,-5.8).curveTo(-2.2,-5.8,-12.8,3.4).lineTo(-11.3,5.8).curveTo(-1.2,-2.2,12.7,-2.2).lineTo(12.8,-2.2);
	this.shape_2.setTransform(154.4,301.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#4A5C70").beginStroke().moveTo(-12.7,3.4).curveTo(-2.1,-5.8,12.7,-5.8).lineTo(12.7,-5.8).lineTo(12.7,-2.2).lineTo(12.7,-2.2).curveTo(-1.2,-2.2,-11.3,5.8).closePath();
	this.shape_3.setTransform(154.4,301.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(12.3,-25.6).curveTo(16.8,-24,20.7,-21).curveTo(21.6,-20.3,22.4,-19.6).curveTo(31.6,-11.4,31.6,0.1).curveTo(31.6,11.6,22.4,19.6).curveTo(13.3,27.8,0.3,27.8).curveTo(0.2,27.8,-0,27.8).curveTo(-0.2,27.8,-0.3,27.8).curveTo(-13.3,27.8,-22.4,19.6).curveTo(-31.6,11.6,-31.6,0.1).curveTo(-31.6,-11.4,-22.4,-19.6).curveTo(-20.5,-21.3,-18.3,-22.7).curveTo(-15.5,-24.5,-12.3,-25.6).lineTo(-14.7,-29.9).curveTo(-16.5,-29.3,-18.3,-28.3).curveTo(-22.5,-26.2,-26.2,-22.9).curveTo(-36.9,-13.4,-36.9,0).curveTo(-36.9,13.5,-26.2,22.9).curveTo(-15.5,32.4,-0.4,32.4).curveTo(-0.2,32.4,-0,32.4).curveTo(0.2,32.4,0.4,32.4).curveTo(15.5,32.4,26.2,22.9).curveTo(36.9,13.5,36.9,0).curveTo(36.9,-13.4,26.2,-22.9).curveTo(23.6,-25.2,20.7,-27).curveTo(20.5,-27.1,20.3,-27.2).lineTo(14.7,-29.9).moveTo(-14.7,-29.9).curveTo(-8.1,-32.4,-0.4,-32.4).curveTo(-0.2,-32.4,-0,-32.4).curveTo(0.2,-32.4,0.4,-32.4).curveTo(8.1,-32.4,14.7,-29.9).lineTo(12.3,-25.6).moveTo(-12.3,-25.6).curveTo(-6.8,-27.7,-0.3,-27.7).curveTo(-0.2,-27.7,-0,-27.7).curveTo(0.2,-27.7,0.3,-27.7).curveTo(6.8,-27.7,12.3,-25.6);
	this.shape_4.setTransform(167.2,334.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-0,32.4).lineTo(-0.4,32.4).curveTo(-15.5,32.4,-26.2,22.9).curveTo(-36.9,13.5,-36.9,0).curveTo(-36.9,-13.4,-26.2,-22.9).curveTo(-22.5,-26.2,-18.3,-28.3).curveTo(-16.5,-29.3,-14.7,-29.9).curveTo(-8.1,-32.4,-0.4,-32.4).lineTo(-0,-32.4).lineTo(0.4,-32.4).curveTo(8.1,-32.4,14.7,-29.9).lineTo(12.3,-25.6).lineTo(14.7,-29.9).lineTo(20.3,-27.2).lineTo(20.7,-27).curveTo(23.6,-25.2,26.2,-22.9).curveTo(36.9,-13.4,36.9,0).curveTo(36.9,13.5,26.2,22.9).curveTo(15.5,32.4,0.4,32.4).lineTo(-0,32.4).closePath().moveTo(-31.6,0.1).curveTo(-31.6,11.6,-22.4,19.6).curveTo(-13.3,27.8,-0.3,27.8).lineTo(-0,27.8).lineTo(0.3,27.8).curveTo(13.3,27.8,22.4,19.6).curveTo(31.6,11.6,31.6,0.1).curveTo(31.6,-11.4,22.4,-19.6).lineTo(20.7,-21).curveTo(16.8,-24,12.3,-25.6).curveTo(6.8,-27.7,0.3,-27.7).lineTo(-0,-27.7).lineTo(-0.3,-27.7).curveTo(-6.8,-27.7,-12.3,-25.6).lineTo(-14.7,-29.9).lineTo(-12.3,-25.6).curveTo(-15.5,-24.5,-18.3,-22.7).curveTo(-20.5,-21.3,-22.4,-19.6).curveTo(-31.6,-11.4,-31.6,0.1).lineTo(-31.6,0.1).closePath().moveTo(-0,27.8).lineTo(-0.3,27.8).curveTo(-13.3,27.8,-22.4,19.6).curveTo(-31.6,11.6,-31.6,0.1).curveTo(-31.6,-11.4,-22.4,-19.6).curveTo(-20.5,-21.3,-18.3,-22.7).curveTo(-15.5,-24.5,-12.3,-25.6).curveTo(-6.8,-27.7,-0.3,-27.7).lineTo(-0,-27.7).lineTo(0.3,-27.7).curveTo(6.8,-27.7,12.3,-25.6).curveTo(16.8,-24,20.7,-21).lineTo(22.4,-19.6).curveTo(31.6,-11.4,31.6,0.1).curveTo(31.6,11.6,22.4,19.6).curveTo(13.3,27.8,0.3,27.8).lineTo(-0,27.8).closePath().moveTo(-12.3,-25.6).closePath();
	this.shape_5.setTransform(167.2,334.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#597393").setStrokeStyle(1,1,1).moveTo(-36.9,18.8).lineTo(36.9,18.8).curveTo(37,14.2,37,13.6).curveTo(37,0.2,26.3,-9.3).curveTo(15.6,-18.8,0.4,-18.8).curveTo(0.2,-18.8,0,-18.8).curveTo(-0.1,-18.8,-0.3,-18.8).curveTo(-15.5,-18.8,-26.2,-9.3).curveTo(-36.9,0.2,-36.9,13.6).curveTo(-36.9,14.2,-36.9,18.8).closePath();
	this.shape_6.setTransform(167.2,311.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#90A5BF").beginStroke().moveTo(-36.9,18.8).lineTo(-36.9,13.6).curveTo(-36.9,0.1,-26.2,-9.3).curveTo(-15.5,-18.8,-0.4,-18.8).lineTo(-0,-18.8).lineTo(0.4,-18.8).curveTo(15.5,-18.8,26.3,-9.3).curveTo(37,0.1,37,13.6).lineTo(36.9,18.8).closePath();
	this.shape_7.setTransform(167.2,311.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#930404").setStrokeStyle(1,1,1).moveTo(126.2,-42).lineTo(125.4,-46.5).lineTo(116.8,-36.9).curveTo(107.7,-28.1,94.5,-21).curveTo(57.5,-1.3,0.3,-1.6).curveTo(-0,-1.6,-0.3,-1.6).curveTo(-57.6,-1.1,-94.5,-20.5).curveTo(-107.8,-27.5,-116.8,-36.3).lineTo(-125.4,-45.7).lineTo(-125.9,-43).lineTo(-127,-36.7).curveTo(-127,-36.3,-127.1,-36).curveTo(-127.7,-27.7,-126.6,-19.7).curveTo(-125.6,-12.3,-123.3,-5.8).curveTo(-119,6.3,-109.8,14.8).curveTo(-102,22.8,-88.8,30.2).lineTo(-88.4,30.5).curveTo(-83.2,33.2,-77.1,35.6).curveTo(-45.7,47.7,-0.3,46.3).curveTo(-0,46.3,0.3,46.3).curveTo(45.6,47.5,77.1,35.2).curveTo(83.2,32.9,88.4,30).lineTo(88.8,29.7).curveTo(102,22.3,109.8,14.3).curveTo(114.3,10,117.7,4.9).curveTo(124.7,-5.8,126.6,-20.4).curveTo(127.7,-28.4,127.1,-36.7).curveTo(127,-37.1,127,-37.4).closePath();
	this.shape_8.setTransform(167,278.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FF7E7E").beginStroke().moveTo(121.2,-15.2).lineTo(121.3,-15.2).lineTo(123.9,-18.3).lineTo(127.1,-23.2).curveTo(127.7,-14.8,126.6,-6.8).curveTo(124.7,7.8,117.7,18.5).curveTo(114.8,20.9,111.8,23.2).curveTo(120,7.5,121.2,-15.2).closePath().moveTo(-123.3,7.7).curveTo(-125.6,1.3,-126.6,-6.1).curveTo(-127.7,-14.1,-127.1,-22.5).lineTo(-123.9,-17.6).lineTo(-121.9,-15.2).curveTo(-122.8,3.1,-114,18.8).curveTo(-119.1,13.6,-123.3,7.7).closePath();
	this.shape_9.setTransform(167,264.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#D91313").beginStroke().moveTo(-74.3,15.3).curveTo(-80.4,12.9,-85.6,10.2).lineTo(-86,9.9).curveTo(-99.2,2.5,-107,-5.5).curveTo(-116.2,-14,-120.5,-26.1).curveTo(-116.3,-20.3,-111.2,-15.1).curveTo(-66.8,29.4,45.5,18.6).curveTo(86.6,10.5,114.6,-10.7).curveTo(117.6,-13,120.5,-15.4).curveTo(117.1,-10.3,112.6,-6).curveTo(104.8,2,91.6,9.4).lineTo(91.2,9.7).curveTo(86,12.6,79.9,14.9).curveTo(48.4,27.2,3.1,26).lineTo(2.6,26).lineTo(-6.5,26.1).curveTo(-46,26.1,-74.3,15.3).closePath();
	this.shape_10.setTransform(164.2,298.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#F04040").beginStroke().moveTo(-113.6,-0.9).curveTo(-122.4,-16.5,-121.5,-34.9).curveTo(-114.3,-26.7,-103.5,-20).curveTo(-67.3,2.7,0.1,2.1).lineTo(0.7,2.1).curveTo(68.1,2.3,104.2,-20.5).curveTo(114.6,-27,121.6,-34.8).curveTo(120.4,-12.1,112.2,3.5).curveTo(84.2,24.7,43.1,32.8).curveTo(21,34.9,1.6,34.9).curveTo(-78,34.9,-113.6,-0.9).closePath();
	this.shape_11.setTransform(166.6,284.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFD448").beginStroke().moveTo(-103.6,0.3).curveTo(-114.5,-6.4,-121.7,-14.6).lineTo(-120.1,-21.4).curveTo(-106.1,-5.1,-81.2,5.1).curveTo(-45.9,17.9,11.1,17.4).curveTo(48.1,14.8,80.9,5.1).curveTo(105.2,-5.1,121.7,-22.4).lineTo(121.6,-14.5).lineTo(121.5,-14.5).curveTo(114.4,-6.7,104.1,-0.2).curveTo(67.9,22.6,0.5,22.4).lineTo(-0,22.4).lineTo(-3.2,22.4).curveTo(-68.3,22.4,-103.6,0.3).closePath();
	this.shape_12.setTransform(166.8,264);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFE593").beginStroke().moveTo(121.4,-0.7).curveTo(123.9,-3.3,126.2,-6.1).lineTo(127,-1.5).lineTo(127.1,-0.8).lineTo(123.9,4).lineTo(121.3,7.2).closePath().moveTo(-123.9,4.7).lineTo(-127.1,-0.1).lineTo(-127,-0.8).lineTo(-125.9,-7.1).curveTo(-123.4,-3.3,-120.3,0.3).lineTo(-121.9,7.1).lineTo(-123.9,4.7).closePath();
	this.shape_13.setTransform(167,242.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#DBAC12").beginStroke().moveTo(-81.6,12.5).curveTo(-106.5,2.3,-120.5,-14).curveTo(-123.5,-17.6,-126.1,-21.4).lineTo(-125.6,-24.1).lineTo(-117,-14.7).curveTo(-108,-5.9,-94.7,1.1).curveTo(-57.8,20.5,-0.4,20).lineTo(0.1,20).curveTo(57.3,20.3,94.3,0.6).curveTo(107.5,-6.5,116.7,-15.3).lineTo(125.2,-24.9).lineTo(126,-20.4).curveTo(123.7,-17.6,121.2,-15).curveTo(104.8,2.3,80.5,12.5).curveTo(47.7,22.2,10.6,24.8).lineTo(6.8,24.9).curveTo(-47.5,24.9,-81.6,12.5).closePath();
	this.shape_14.setTransform(167.2,256.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill().beginStroke("#1A8DB4").setStrokeStyle(1,1,1).moveTo(57.6,29.9).curveTo(58.2,27.5,56.9,25.3).lineTo(25.2,-8.9).lineTo(25.4,-23.6).curveTo(25.4,-28,24,-33.9).curveTo(23,-38.1,21.8,-40.7).curveTo(18.8,-47.6,11.7,-50.6).curveTo(8.4,-52,5.5,-52.2).curveTo(5.1,-52.3,4.8,-52.3).lineTo(-4.8,-52.3).curveTo(-5.2,-52.3,-5.6,-52.2).curveTo(-8.4,-52,-11.7,-50.6).curveTo(-18.9,-47.6,-21.8,-40.7).curveTo(-23.1,-38.1,-24,-33.9).curveTo(-25.5,-28,-25.4,-23.6).lineTo(-25.3,-8.9).lineTo(-56.9,25.3).curveTo(-57.7,26.5,-57.8,27.8).curveTo(-57.9,28.8,-57.7,29.9).moveTo(58,32.2).curveTo(57.9,34,56.7,35.8).lineTo(53,39.3).curveTo(50.1,41.6,46.1,43.7).curveTo(35.5,49.1,20.1,51.2).curveTo(10,52.3,1.6,52.3).curveTo(1.1,52.3,0.7,52.3).curveTo(0.5,52.3,0.4,52.3).curveTo(0.2,52.3,0,52.3).curveTo(-0.2,52.3,-0.4,52.3).curveTo(-0.5,52.3,-0.7,52.3).curveTo(-1.2,52.3,-1.6,52.3).curveTo(-10,52.3,-20.1,51.2).curveTo(-35.5,49.1,-46.1,43.7).curveTo(-50.2,41.6,-53,39.3).lineTo(-56.8,35.8).curveTo(-57.9,34,-58,32.2).curveTo(-58.1,32,-58,31.7).curveTo(-58,31.4,-58,31.1).curveTo(-57.9,30.5,-57.7,29.9).lineTo(-58,32.2).moveTo(57.6,29.9).lineTo(58,32.2).curveTo(58.1,32,58,31.7).curveTo(58,31.4,57.9,31.1).curveTo(57.9,30.5,57.6,29.9).closePath();
	this.shape_15.setTransform(165.8,523.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-0.6,0.5).lineTo(0.6,-0.5).lineTo(-0.6,0.5).closePath();
	this.shape_16.setTransform(212.1,554.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#EEF5FF").beginStroke().moveTo(0.7,12.9).lineTo(0.4,12.9).lineTo(0,12.9).lineTo(-0.4,12.9).lineTo(-0.7,12.9).lineTo(-1.6,12.9).curveTo(-10,12.9,-20.1,11.8).curveTo(-35.5,9.7,-46.1,4.3).curveTo(-50.2,2.2,-53,-0.1).lineTo(-56.8,-3.6).curveTo(-57.9,-5.4,-58,-7.2).lineTo(-57.7,-9.5).curveTo(-57.3,-10.5,-56.3,-11.4).curveTo(-53.8,-13.8,-50.5,-12.3).curveTo(-49.8,-12,-49.1,-11.5).lineTo(-45.7,-8).lineTo(-45.5,-7.8).lineTo(-45.2,-7.6).lineTo(-45.2,-7.6).curveTo(-43.1,-5.5,-36.1,-2.2).curveTo(-29.1,1,-14.8,1.9).curveTo(-8.1,2.6,-1.5,2.4).lineTo(-0.6,2.4).lineTo(0,2.4).lineTo(0.6,2.4).lineTo(1.5,2.4).curveTo(8,2.6,14.8,1.9).curveTo(29.1,1,36.1,-2.2).curveTo(43.1,-5.5,45.2,-7.6).lineTo(45.3,-7.6).lineTo(45.3,-7.6).lineTo(45.3,-7.7).lineTo(45.7,-8).lineTo(46.9,-9).lineTo(50.4,-12.3).curveTo(53.8,-13.8,56.3,-11.4).curveTo(57.2,-10.5,57.6,-9.5).lineTo(58,-7.2).curveTo(57.9,-5.4,56.7,-3.6).lineTo(53,-0.1).curveTo(50.1,2.2,46.1,4.3).curveTo(35.5,9.7,20.1,11.8).curveTo(10,12.9,1.6,12.9).lineTo(0.7,12.9).closePath();
	this.shape_17.setTransform(165.8,563.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginLinearGradientFill(["#E2EFFF","#71A5E5"],[0.008,1],1.4,28.7,1.4,-43.9).beginStroke().moveTo(1.5,33.4).lineTo(0.6,33.4).lineTo(0,33.4).lineTo(-0.5,33.4).lineTo(-1.5,33.4).curveTo(-8.1,33.6,-14.8,32.9).curveTo(-29.1,32,-36.1,28.8).curveTo(-43.1,25.5,-45.2,23.4).lineTo(-45.2,23.4).lineTo(-45.7,23).lineTo(-49,19.5).curveTo(-49.7,19,-50.5,18.7).lineTo(-20.7,-16).lineTo(-20.9,-30.6).curveTo(-20.9,-32,-20.7,-33.4).lineTo(-19.9,-32).lineTo(-20.3,-32.7).curveTo(-17.6,-26.6,-17,-22.8).curveTo(-16.8,-19.7,-15.4,-15).curveTo(-12.9,-9.2,-7.5,-7.2).curveTo(-4.4,-6.1,-2.5,-5.8).lineTo(0,-5.6).lineTo(2.6,-5.9).curveTo(4.4,-6.1,7.5,-7.2).curveTo(12.9,-9.2,15.4,-15).curveTo(16.8,-19.7,16.9,-22.8).curveTo(17.7,-27,20,-32).lineTo(20.6,-33.4).lineTo(20.8,-32).lineTo(20.8,-30.6).lineTo(20.7,-16).lineTo(50.4,18.7).lineTo(46.9,22).lineTo(45.7,23).lineTo(45.7,23).lineTo(45.4,23.3).lineTo(45.3,23.4).lineTo(45.2,23.4).curveTo(43.1,25.5,36.1,28.8).curveTo(29.1,32,14.8,32.9).curveTo(9.5,33.4,4.4,33.4).lineTo(1.5,33.4).closePath();
	this.shape_18.setTransform(165.8,532.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#40464F").beginStroke().moveTo(-2.5,25.8).curveTo(-4.4,25.6,-7.5,24.4).curveTo(-12.9,22.4,-15.4,16.6).curveTo(-16.8,12,-17,8.9).curveTo(-17.6,5.1,-20.3,-1).lineTo(-19.9,-0.3).lineTo(-20.7,-1.8).curveTo(-20.4,-5.1,-19.4,-9.1).curveTo(-18.4,-13.3,-17.2,-15.8).curveTo(-14.1,-22.5,-6.8,-25).curveTo(-3,-26.3,-0.5,-26).lineTo(0,-26).lineTo(0.5,-26).curveTo(3,-26.3,6.8,-25).curveTo(14.1,-22.5,17.1,-15.8).curveTo(18.4,-13.3,19.4,-9.1).curveTo(20.4,-5.1,20.6,-1.8).lineTo(20,-0.3).curveTo(17.7,4.7,16.9,8.9).curveTo(16.8,12,15.4,16.6).curveTo(12.9,22.4,7.5,24.4).curveTo(4.4,25.6,2.6,25.8).lineTo(0,26).lineTo(-2.5,25.8).closePath();
	this.shape_19.setTransform(165.8,500.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FAFCFF").beginStroke().moveTo(56.3,39.2).curveTo(53.8,36.7,50.4,38.2).lineTo(20.7,3.6).lineTo(20.8,-11).lineTo(20.8,-12.4).lineTo(20.6,-13.9).curveTo(20.4,-17.2,19.4,-21.2).curveTo(18.4,-25.4,17.1,-27.9).curveTo(14,-34.5,6.8,-37.1).curveTo(3,-38.3,0.5,-38.1).lineTo(0,-38.1).lineTo(-0.5,-38.1).curveTo(-3,-38.3,-6.8,-37.1).curveTo(-14.1,-34.5,-17.2,-27.9).curveTo(-18.4,-25.4,-19.4,-21.2).curveTo(-20.4,-17.2,-20.7,-13.9).curveTo(-20.9,-12.4,-20.9,-11).lineTo(-20.7,3.6).lineTo(-50.5,38.2).curveTo(-53.8,36.7,-56.3,39.2).lineTo(-57.8,39).curveTo(-57.7,37.7,-56.9,36.5).lineTo(-25.3,2.3).lineTo(-25.4,-12.4).curveTo(-25.5,-16.9,-24,-22.7).curveTo(-23.1,-26.9,-21.8,-29.5).curveTo(-18.9,-36.5,-11.7,-39.4).curveTo(-8.4,-40.8,-5.6,-41).lineTo(-4.8,-41.1).lineTo(4.8,-41.1).lineTo(5.5,-41).curveTo(8.4,-40.8,11.7,-39.4).curveTo(18.8,-36.5,21.8,-29.5).curveTo(23,-26.9,24,-22.7).curveTo(25.4,-16.9,25.4,-12.4).lineTo(25.2,2.3).lineTo(56.9,36.5).curveTo(58.2,38.7,57.6,41.1).curveTo(57.2,40.1,56.3,39.2).closePath();
	this.shape_20.setTransform(165.8,512.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill().beginStroke("#A35900").setStrokeStyle(1,1,1).moveTo(-77.5,-37.4).lineTo(-77.5,-48.3).lineTo(77.5,-48.3).lineTo(77.5,-37.4).lineTo(77.5,12.3).lineTo(77.5,15.7).lineTo(77.5,25).curveTo(54.3,48,2.9,48.3).curveTo(2.2,48.3,1.5,48.3).lineTo(-1.4,48.3).curveTo(-2.2,48.3,-2.9,48.3).curveTo(-54.2,48,-77.5,25).lineTo(-77.5,15.7).lineTo(-77.5,12.3).closePath();
	this.shape_21.setTransform(167.2,326.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginLinearGradientFill(["#F5A406","#FFDF77","#F5A406"],[0.02,0.573,1],-81.4,-6.5,73.6,-6.5).beginStroke().moveTo(1.5,42.8).lineTo(-1.4,42.8).lineTo(-2.9,42.8).curveTo(-54.2,42.5,-77.5,19.6).lineTo(-77.5,10.3).curveTo(-54.2,33.2,-2.9,33.6).lineTo(-1.4,33.6).lineTo(1.5,33.6).lineTo(2.9,33.6).curveTo(54.3,33.2,77.5,10.3).lineTo(77.5,19.6).curveTo(54.3,42.5,2.9,42.8).lineTo(1.5,42.8).closePath().moveTo(1.4,30.1).lineTo(-1.4,30.1).lineTo(-2.9,30.1).curveTo(-54.2,29.7,-77.5,6.9).lineTo(-77.5,-42.8).curveTo(0.5,-15.6,77.5,-42.8).lineTo(77.5,6.9).curveTo(54.3,29.8,2.9,30.1).lineTo(1.4,30.1).closePath();
	this.shape_22.setTransform(167.2,332.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#D97700").beginStroke().moveTo(1.5,43.7).lineTo(-1.4,43.7).lineTo(-2.9,43.7).curveTo(-54.2,43.3,-77.5,20.3).lineTo(-77.5,16.9).curveTo(-54.2,39.8,-2.9,40.2).lineTo(-1.4,40.2).lineTo(1.4,40.2).lineTo(2.9,40.2).curveTo(54.3,39.9,77.5,16.9).lineTo(77.5,20.3).curveTo(54.3,43.3,2.9,43.7).lineTo(1.5,43.7).closePath().moveTo(-77.5,-32.7).lineTo(-77.5,-43.6).lineTo(77.5,-43.6).lineTo(77.5,-32.7).curveTo(39,-19.2,0.3,-19.2).curveTo(-38.5,-19.2,-77.5,-32.7).closePath();
	this.shape_23.setTransform(167.2,322.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill().beginStroke("#8E8E8E").setStrokeStyle(1,1,1).moveTo(59.8,32.2).lineTo(59.8,-69).lineTo(-59.7,-69).lineTo(-59.7,32.2).lineTo(-59.7,55.9).curveTo(-59.8,56.1,-59.8,56.4).curveTo(-59.8,56.4,-59.8,56.5).curveTo(-59.8,59.9,-52.4,62.7).curveTo(-48.4,64.1,-42.2,65.4).curveTo(-41,65.7,-39.8,65.9).curveTo(-23,69,0,69).curveTo(24.7,69,42.2,65.4).curveTo(59.6,61.8,59.8,56.5).curveTo(59.8,56.5,59.8,56.4).closePath();
	this.shape_24.setTransform(168.4,379.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginLinearGradientFill(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)","#F2F2F2"],[0.02,0.573,1],-57.3,-54,62.2,-54).beginStroke().moveTo(-39.8,15.3).lineTo(-42.2,14.8).curveTo(-48.4,13.5,-52.4,12.1).curveTo(-59.8,9.3,-59.8,5.9).lineTo(-59.7,5.4).lineTo(-59.7,-18.4).lineTo(59.8,-18.4).lineTo(59.8,5.8).lineTo(59.8,6).curveTo(59.6,11.2,42.2,14.8).curveTo(24.7,18.4,0,18.4).curveTo(-23,18.4,-39.8,15.3).closePath();
	this.shape_25.setTransform(168.4,429.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginLinearGradientFill(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)","#F2F2F2"],[0.02,0.573,1],-57.4,22.6,62.1,22.6).beginStroke().moveTo(-59.7,50.6).lineTo(-59.7,-50.6).lineTo(59.7,-50.6).lineTo(59.7,50.6).closePath();
	this.shape_26.setTransform(168.4,360.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill().beginStroke("#A35900").setStrokeStyle(1,1,1).moveTo(-59.6,-24.5).curveTo(-58.3,-19.8,-42.3,-16.5).curveTo(-24.8,-12.9,-0,-12.9).curveTo(24.7,-12.9,42.1,-16.5).curveTo(58.1,-19.8,59.6,-24.5).moveTo(68.9,-24.5).curveTo(69,-24.1,69,-23.7).lineTo(69,-23.5).lineTo(68.9,6.5).curveTo(69,6.8,69,7.2).curveTo(69,14.5,48.7,19.5).curveTo(43.3,20.8,37.3,21.8).curveTo(20.9,24.5,0,24.5).curveTo(-0.9,24.5,-1.8,24.5).curveTo(-29.2,24.4,-48.8,19.5).curveTo(-68.8,14.5,-69,7.3).lineTo(-69,-23.4).moveTo(69,-23.5).curveTo(68.8,-16.2,48.7,-11.2).curveTo(43.3,-9.9,37.3,-9).curveTo(34.7,-8.5,32.2,-8.2).curveTo(17.7,-6.3,0,-6.3).curveTo(-0.9,-6.3,-1.8,-6.3).curveTo(-18.4,-6.4,-32.2,-8.2).curveTo(-41.1,-9.4,-48.8,-11.2).curveTo(-68.8,-16.2,-69,-23.4).curveTo(-69,-23.5,-69,-23.6).curveTo(-69,-24,-69,-24.5);
	this.shape_27.setTransform(168.1,460.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginLinearGradientFill(["#F5A406","#FFDF77","#F5A406"],[0.02,0.573,1],-82.3,-168.2,72.7,-168.2).beginStroke().moveTo(-1.8,24).curveTo(-29.2,23.9,-48.8,19).curveTo(-68.8,14,-69,6.8).lineTo(-69,-23.9).curveTo(-68.8,-16.7,-48.8,-11.7).curveTo(-41.1,-9.9,-32.2,-8.7).curveTo(-18.4,-6.9,-1.8,-6.8).lineTo(0,-6.8).curveTo(17.7,-6.8,32.2,-8.7).lineTo(37.3,-9.5).curveTo(43.3,-10.4,48.7,-11.7).curveTo(68.8,-16.7,69,-24).lineTo(68.9,6).lineTo(69,6.7).curveTo(69,14,48.7,19).curveTo(43.3,20.3,37.3,21.3).curveTo(20.9,24,0,24).lineTo(-1.8,24).closePath();
	this.shape_28.setTransform(168.1,461.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#D97700").beginStroke().moveTo(-1.8,9.1).curveTo(-18.4,9,-32.2,7.2).curveTo(-41.1,6,-48.8,4.2).curveTo(-68.8,-0.8,-69,-8).lineTo(-69,-8.2).lineTo(-69,-9.1).lineTo(-59.6,-9.1).curveTo(-58.3,-4.4,-42.3,-1.1).curveTo(-24.8,2.5,-0,2.5).curveTo(24.7,2.5,42.1,-1.1).curveTo(58.1,-4.4,59.6,-9.1).lineTo(68.9,-9.1).lineTo(69,-8.3).lineTo(69,-8.1).curveTo(68.8,-0.8,48.7,4.2).curveTo(43.3,5.5,37.3,6.4).lineTo(32.2,7.2).curveTo(17.7,9.1,0,9.1).lineTo(-1.8,9.1).closePath();
	this.shape_29.setTransform(168.1,445.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill().beginStroke("#930404").setStrokeStyle(1,1,1).moveTo(-83,-26.9).curveTo(-83,-27,-83,-27.1).curveTo(-82.9,-27.7,-82.7,-28.2).curveTo(-81.9,-30.5,-80.9,-32.1).curveTo(-79.3,-34.5,-77.3,-36.2).curveTo(-75.9,-37.4,-74.2,-38.2).curveTo(-72.8,-38.9,-72.2,-39.1).curveTo(-70.3,-39.7,-64.5,-40.6).curveTo(-47.8,-42.9,-37.9,-43.1).curveTo(-34.9,-43.3,-11.1,-43.1).curveTo(-9.6,-43.1,-8,-43.1).curveTo(-5.6,-43,-3.2,-43).curveTo(-1.5,-43,0.2,-43).curveTo(1.9,-43,3.8,-43).curveTo(5.9,-43,8.1,-43).curveTo(10.1,-43,12.1,-43).curveTo(14,-43,15.9,-43).curveTo(17.6,-43.1,19.4,-43.2).curveTo(35.2,-43.3,37.9,-43.1).curveTo(47.7,-42.9,64.4,-40.6).curveTo(70.2,-39.7,72.1,-39.1).curveTo(72.8,-38.9,74.1,-38.2).curveTo(76.5,-37.1,78.6,-35).curveTo(79.1,-34.5,79.6,-33.8).curveTo(80.2,-33,80.9,-32.1).curveTo(82.1,-30.2,83,-27.1).curveTo(83,-27,83,-26.9).lineTo(83.1,-26.9).curveTo(85.5,-26.9,87.8,-26.3).curveTo(90.7,-25.6,93.3,-23.9).curveTo(93.6,-23.6,94,-23.3).curveTo(98.1,-20.2,98.8,-16.1).moveTo(-83,-26.9).curveTo(-83.7,-23.8,-81.8,-20.3).curveTo(-81.7,-20.2,-81.7,-20.2).lineTo(-81.7,-20.1).lineTo(-81.3,-19.7).curveTo(-80.1,-17.7,-77.6,-15.6).curveTo(-74.9,-13.6,-72,-11.8).curveTo(-64.2,-7.1,-53.1,-4).curveTo(-50.4,-3.4,-47.7,-2.7).curveTo(-44.9,-2.2,-41.6,-1.3).curveTo(-38.3,-0.5,-33.8,-0.1).curveTo(-29.4,0.4,-24.5,0.9).curveTo(-19.5,1.3,-13.9,1.6).curveTo(-9.2,2,1.9,2.1).curveTo(9.1,2,13.9,1.6).curveTo(19.5,1.3,24.4,0.9).curveTo(29.3,0.4,33.8,-0.1).curveTo(38.3,-0.5,41.6,-1.3).curveTo(44.9,-2.2,47.7,-2.7).curveTo(50.4,-3.4,53,-4).curveTo(64.2,-7.1,72,-11.8).curveTo(73.5,-12.8,75.1,-13.8).curveTo(76.3,-14.7,77.6,-15.6).curveTo(80.1,-17.7,81.3,-19.7).lineTo(81.6,-20.1).curveTo(81.7,-20.2,81.8,-20.3).curveTo(82.1,-21,82.4,-21.7).curveTo(83.6,-24.4,83,-26.9).moveTo(-98.8,-16.1).curveTo(-98.9,-15.3,-98.9,-14.5).curveTo(-98.9,-14,-98.7,-13).curveTo(-98.7,-12.7,-98.5,-12.3).curveTo(-98.3,-11.5,-97.9,-10.8).curveTo(-97,-9.1,-95.3,-7.2).curveTo(-95.2,-7.1,-95.1,-7).lineTo(-91.2,-3.8).curveTo(-85.9,0.1,-78.6,3.5).curveTo(-56.1,13.9,-24.3,15.2).curveTo(-23.4,15.2,-22.4,15.2).curveTo(-11.5,16.4,1.9,16.3).curveTo(11.5,16.4,22.4,15.2).curveTo(23.4,15.2,24.2,15.2).curveTo(56.1,13.9,78.6,3.5).curveTo(85.8,0.1,91.2,-3.8).lineTo(95.1,-7).curveTo(97.6,-9.8,98.5,-12.3).curveTo(98.5,-12.3,98.6,-12.4).curveTo(98.6,-12.7,98.7,-13).curveTo(98.9,-14,98.9,-14.5).curveTo(98.9,-15.3,98.8,-16.1).lineTo(102,-16.1).curveTo(102.2,-16.1,102.3,-16.1).curveTo(103.2,-16.1,104.2,-15.8).curveTo(105.2,-15.7,106.3,-15.4).curveTo(106.6,-15.2,107,-15.1).curveTo(112.6,-13,115.4,-7.7).lineTo(116,-5.4).lineTo(116.3,-2.6).curveTo(116.3,-1.6,116.1,-0.6).moveTo(-116.1,-0.6).curveTo(-115.6,2.1,-113.9,4.2).curveTo(-110.2,7.9,-104.2,12.3).curveTo(-97,17.4,-72.6,26.5).curveTo(-49,35.2,1.9,35.8).curveTo(2.1,35.8,2.3,35.8).curveTo(2.6,35.8,2.8,35.8).curveTo(48.9,35.2,72.6,26.5).curveTo(97,17.4,104.2,12.3).curveTo(106,11,107.6,9.8).curveTo(111.3,6.9,113.9,4.2).curveTo(114.2,3.8,114.5,3.5).curveTo(115.1,2.5,115.5,1.3).curveTo(115.9,0.4,116.1,-0.6).curveTo(116.4,-0.4,116.7,-0.1).curveTo(117.7,1,118.4,2.8).curveTo(118.5,3.1,118.7,3.5).curveTo(118.9,3.8,119,4.2).curveTo(119.1,4.5,119.1,4.7).lineTo(119.4,5.7).curveTo(119.7,7.4,118.9,9.5).curveTo(118.5,10.4,118,11.3).curveTo(114.8,17.1,104.9,23.1).curveTo(99.8,26.1,94.6,27.9).curveTo(84.3,31.8,62,37.7).curveTo(39.7,43.4,2.4,43.2).curveTo(-39.7,43.4,-62,37.7).curveTo(-84.3,31.8,-94.6,27.9).curveTo(-99.9,26.1,-105,23.1).curveTo(-115.1,16.9,-118.2,11).curveTo(-118.6,10.3,-118.9,9.5).curveTo(-119,9.1,-119.1,8.8).curveTo(-119.7,7.1,-119.5,5.7).lineTo(-119.1,4.7).curveTo(-119.1,4.5,-119,4.2).curveTo(-118.9,3.9,-118.8,3.6).curveTo(-117.8,1.2,-116.8,-0.1).curveTo(-116.4,-0.4,-116.1,-0.6).curveTo(-116.3,-1.6,-116.3,-2.6).lineTo(-116,-5.4).lineTo(-115.4,-7.7).curveTo(-114.9,-8.7,-114.3,-9.5).curveTo(-114.1,-9.9,-113.9,-10.1).curveTo(-111.2,-13.6,-107.1,-15.1).curveTo(-105.8,-15.6,-104.7,-15.7).curveTo(-103.4,-16.1,-102.3,-16.1).curveTo(-102.2,-16.1,-102.1,-16.1).lineTo(-98.8,-16.1).curveTo(-98.2,-20.2,-94,-23.3).curveTo(-92.3,-24.6,-90.4,-25.5).curveTo(-89.2,-26,-88,-26.3).curveTo(-85.7,-26.9,-83.1,-26.9).lineTo(-83,-26.9);
	this.shape_30.setTransform(167.7,500.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#D91313").beginStroke().moveTo(-31.7,39.4).lineTo(-32.4,39.3).lineTo(-33.3,39.2).curveTo(-88.8,31.4,-111.5,12.2).curveTo(-114.6,9.6,-117.2,6.7).lineTo(-118.6,5).curveTo(-117.6,2.6,-116.6,1.3).lineTo(-116,0.8).curveTo(-115.4,3.5,-113.7,5.6).curveTo(-110,9.3,-104,13.7).curveTo(-96.9,18.8,-72.4,27.9).curveTo(-48.8,36.6,2,37.2).lineTo(2.5,37.2).lineTo(3,37.2).curveTo(49.1,36.6,72.8,27.9).curveTo(97.2,18.8,104.3,13.7).lineTo(107.8,11.2).curveTo(111.5,8.3,114.1,5.6).lineTo(114.7,4.9).curveTo(115.3,3.9,115.7,2.7).curveTo(116,1.8,116.2,0.8).lineTo(116.9,1.3).curveTo(117.8,2.4,118.6,4.2).curveTo(118.1,5.4,117.5,6.6).lineTo(116.2,8.6).curveTo(114.2,11.4,111.2,13.8).curveTo(74,41.8,8.9,41.8).curveTo(-10.2,41.8,-31.7,39.4).closePath().moveTo(-46.4,19).curveTo(-91.5,8.9,-101.6,-5.3).curveTo(-103.1,-7.5,-103.9,-9.9).curveTo(-104.6,-12.1,-104.5,-14.3).curveTo(-103.2,-14.7,-102.1,-14.7).lineTo(-101.9,-14.7).lineTo(-98.6,-14.7).curveTo(-98.8,-13.9,-98.8,-13.1).lineTo(-98.5,-11.6).lineTo(-98.3,-10.9).lineTo(-97.7,-9.4).curveTo(-96.8,-7.7,-95.1,-5.8).lineTo(-94.9,-5.6).lineTo(-91,-2.4).curveTo(-85.7,1.5,-78.5,4.9).curveTo(-55.9,15.3,-24.1,16.6).lineTo(-22.3,16.6).curveTo(-11.3,17.8,2,17.7).curveTo(11.7,17.8,22.6,16.6).lineTo(24.4,16.6).curveTo(56.3,15.3,78.8,4.9).curveTo(86,1.5,91.4,-2.4).lineTo(95.3,-5.6).curveTo(97.8,-8.4,98.7,-10.9).lineTo(98.8,-11).lineTo(98.8,-11.6).lineTo(99,-13.1).lineTo(98.9,-14.7).lineTo(102.2,-14.7).lineTo(102.5,-14.7).curveTo(103.4,-14.7,104.4,-14.4).curveTo(104.7,-11.8,104,-9.2).curveTo(100.1,5.2,65.8,15.1).curveTo(38.9,22.4,4.2,22.4).curveTo(-19.4,22.4,-46.4,19).closePath().moveTo(-86.8,-19.8).curveTo(-87.8,-22.2,-87.8,-24.9).curveTo(-85.5,-25.5,-83,-25.5).lineTo(-82.9,-25.5).curveTo(-83.5,-22.4,-81.6,-18.9).lineTo(-81.5,-18.8).lineTo(-81.5,-18.7).lineTo(-81.1,-18.3).curveTo(-79.9,-16.3,-77.5,-14.2).curveTo(-74.7,-12.2,-71.9,-10.4).curveTo(-64,-5.7,-52.9,-2.6).lineTo(-47.6,-1.3).curveTo(-44.8,-0.8,-41.4,0.1).curveTo(-38.2,0.9,-33.6,1.3).lineTo(-24.3,2.3).lineTo(-13.7,3).curveTo(-9,3.4,2,3.5).curveTo(9.3,3.4,14.1,3).lineTo(24.6,2.3).lineTo(34,1.3).curveTo(38.5,0.9,41.8,0.1).curveTo(45,-0.8,47.8,-1.3).lineTo(53.2,-2.6).curveTo(64.4,-5.7,72.1,-10.4).lineTo(75.3,-12.4).lineTo(77.8,-14.2).curveTo(80.2,-16.3,81.5,-18.3).lineTo(81.8,-18.7).lineTo(81.9,-18.9).lineTo(82.6,-20.3).curveTo(83.8,-23,83.2,-25.5).lineTo(83.3,-25.5).curveTo(85.7,-25.5,88,-24.9).curveTo(88.5,-21.8,87.9,-19).curveTo(86.2,-11.8,77,-6.6).curveTo(56.9,4.9,0.8,7.4).curveTo(-78.6,4.5,-86.8,-19.8).closePath().moveTo(-74.8,-29.7).curveTo(-76.4,-32.1,-77.2,-34.8).curveTo(-75.7,-36,-74,-36.8).curveTo(-72.7,-37.5,-72,-37.7).curveTo(-70.1,-38.3,-64.3,-39.2).curveTo(-47.6,-41.5,-37.8,-41.7).curveTo(-34.7,-41.9,-11,-41.7).lineTo(-7.9,-41.7).lineTo(-3,-41.6).lineTo(0.4,-41.6).lineTo(4,-41.6).lineTo(8.3,-41.6).lineTo(12.3,-41.6).lineTo(16.1,-41.6).lineTo(19.6,-41.8).curveTo(35.4,-41.9,38.1,-41.7).curveTo(47.9,-41.5,64.6,-39.2).curveTo(70.4,-38.3,72.3,-37.7).curveTo(73,-37.5,74.3,-36.8).curveTo(76.7,-35.7,78.8,-33.6).curveTo(78,-31.2,76.3,-29).curveTo(63.6,-12.3,1.6,-10.1).curveTo(-62.2,-10.9,-74.8,-29.7).closePath();
	this.shape_31.setTransform(167.6,499.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#F04040").beginStroke().moveTo(2.5,37.2).curveTo(-39.6,37.4,-61.9,31.6).curveTo(-84.2,25.8,-94.5,21.9).curveTo(-99.8,20,-104.9,17).curveTo(-115,10.8,-118.1,5).lineTo(-117.2,-0.8).curveTo(-114.7,2.1,-111.6,4.8).curveTo(-88.9,23.9,-33.3,31.7).lineTo(-32.5,31.9).lineTo(-31.8,31.9).curveTo(63.1,42.5,111.1,6.4).curveTo(114.2,4,116.2,1.1).lineTo(118.1,5.3).curveTo(114.9,11.1,105,17).curveTo(99.9,20,94.7,21.9).curveTo(84.4,25.8,62.1,31.6).curveTo(40.5,37.2,5,37.2).lineTo(2.5,37.2).closePath().moveTo(2.4,29.7).lineTo(2,29.7).curveTo(-48.9,29.2,-72.5,20.4).curveTo(-96.9,11.3,-104.1,6.2).curveTo(-110.1,1.9,-113.8,-1.8).curveTo(-115.5,-4,-116,-6.7).curveTo(-114.2,-10.6,-112.4,-13).curveTo(-100,3.1,-88.6,4).curveTo(-105.4,-6.2,-107.3,-17.4).curveTo(-105.6,-18,-104,-17.4).curveTo(-103.2,-15,-101.7,-12.7).curveTo(-91.5,1.4,-46.5,11.6).curveTo(20.5,19.9,65.8,7.6).curveTo(100,-2.3,103.9,-16.6).curveTo(105.7,-17,107.4,-16.3).curveTo(111.8,-14.3,115.6,-4.7).curveTo(115.2,-3.6,114.6,-2.6).lineTo(114,-1.8).curveTo(111.4,0.8,107.7,3.7).lineTo(104.3,6.2).curveTo(97.1,11.3,72.7,20.4).curveTo(49,29.2,2.9,29.7).lineTo(2.4,29.7).closePath().moveTo(2,10.2).curveTo(-11.4,10.3,-22.3,9.2).lineTo(-24.2,9.1).curveTo(-56,7.8,-78.5,-2.6).curveTo(-85.8,-6,-91.1,-9.8).lineTo(-95,-13).lineTo(-95.2,-13.2).curveTo(-96.9,-15.1,-97.8,-16.8).curveTo(-94.5,-25.3,-90.4,-26.9).curveTo(-88.7,-27.7,-86.9,-27.2).curveTo(-78.6,-3,0.8,-0).curveTo(56.8,-2.5,76.9,-14.1).curveTo(86.1,-19.3,87.8,-26.5).curveTo(89.3,-26.8,90.9,-26.3).curveTo(95.1,-25.1,98.7,-18.5).lineTo(98.6,-18.3).curveTo(97.7,-15.9,95.2,-13).lineTo(91.3,-9.8).curveTo(85.9,-6,78.7,-2.6).curveTo(56.2,7.8,24.3,9.1).lineTo(22.5,9.2).curveTo(12.5,10.2,3.5,10.2).lineTo(2,10.2).closePath().moveTo(-13.8,-4.4).lineTo(-24.4,-5.2).lineTo(-33.7,-6.1).curveTo(-38.2,-6.6,-41.5,-7.4).curveTo(-44.8,-8.3,-47.6,-8.8).lineTo(-53,-10.1).curveTo(-64.1,-13.1,-71.9,-17.8).curveTo(-74.8,-19.7,-77.5,-21.7).curveTo(-80,-23.8,-81.2,-25.8).lineTo(-81.6,-26.1).lineTo(-81.6,-26.2).curveTo(-80.8,-32.3,-77.8,-35.3).curveTo(-76.5,-36.5,-74.9,-37.2).curveTo(-62.2,-18.4,1.5,-17.6).curveTo(63.5,-19.8,76.2,-36.4).curveTo(77.4,-36,78.6,-34.7).curveTo(80.5,-32.5,82.5,-27.7).lineTo(81.9,-26.4).lineTo(81.7,-26.1).lineTo(81.4,-25.8).curveTo(80.2,-23.8,77.7,-21.7).lineTo(75.2,-19.8).lineTo(72.1,-17.8).curveTo(64.3,-13.1,53.1,-10.1).lineTo(47.8,-8.8).curveTo(45,-8.3,41.7,-7.4).curveTo(38.4,-6.6,33.9,-6.1).lineTo(24.5,-5.2).lineTo(14,-4.4).curveTo(9.2,-4.1,2,-3.9).curveTo(-9.1,-4.1,-13.8,-4.4).closePath();
	this.shape_32.setTransform(167.6,506.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FF7070").beginStroke().moveTo(116.1,19.6).lineTo(117.3,17.7).curveTo(117.9,16.4,118.4,15.2).lineTo(118.7,15.9).lineTo(119,16.7).lineTo(119.1,17.1).lineTo(119.4,18.1).curveTo(119.7,19.9,118.9,21.9).lineTo(118,23.7).closePath().moveTo(-118.9,21.9).lineTo(-119.1,21.2).curveTo(-119.7,19.6,-119.5,18.1).lineTo(-119.1,17.1).lineTo(-119,16.7).lineTo(-118.8,16).lineTo(-117.3,17.7).lineTo(-118.2,23.4).lineTo(-118.9,21.9).closePath().moveTo(-112.5,5.4).curveTo(-114.3,7.9,-116.1,11.8).curveTo(-116.3,10.8,-116.3,9.8).lineTo(-116,7).lineTo(-115.4,4.7).curveTo(-114.9,3.8,-114.3,2.9).lineTo(-113.9,2.3).curveTo(-111.2,-1.2,-107.1,-2.7).curveTo(-105.8,-3.2,-104.7,-3.3).curveTo(-104.8,-1.1,-104.1,1.1).curveTo(-105.7,0.5,-107.4,1.1).curveTo(-105.5,12.3,-88.7,22.5).curveTo(-100.1,21.6,-112.5,5.4).closePath().moveTo(107.3,2.2).curveTo(105.6,1.4,103.8,1.8).curveTo(104.5,-0.7,104.2,-3.4).lineTo(106.3,-2.9).lineTo(107,-2.7).curveTo(112.6,-0.6,115.4,4.7).lineTo(116,7).lineTo(116.3,9.8).curveTo(116.3,10.8,116.1,11.8).curveTo(115.9,12.8,115.5,13.7).curveTo(111.7,4.1,107.3,2.2).closePath().moveTo(-98.5,0.1).lineTo(-98.7,-0.6).lineTo(-98.9,-2).curveTo(-98.9,-2.9,-98.8,-3.7).curveTo(-98.2,-7.8,-94,-10.9).curveTo(-92.3,-12.2,-90.4,-13).curveTo(-89.2,-13.6,-88,-13.8).curveTo(-87.9,-11.2,-87,-8.8).curveTo(-88.8,-9.2,-90.5,-8.4).curveTo(-94.6,-6.8,-97.9,1.7).lineTo(-98.5,0.1).closePath().moveTo(90.8,-7.9).curveTo(89.2,-8.3,87.7,-8).curveTo(88.3,-10.8,87.8,-13.9).curveTo(90.7,-13.1,93.3,-11.5).lineTo(94,-10.9).curveTo(98.1,-7.8,98.8,-3.7).lineTo(98.9,-2).lineTo(98.7,-0.6).lineTo(98.6,0).curveTo(95,-6.6,90.8,-7.9).closePath().moveTo(-81.8,-7.9).curveTo(-83.7,-11.3,-83,-14.5).lineTo(-83,-14.6).lineTo(-82.7,-15.7).curveTo(-81.9,-18.1,-80.9,-19.7).curveTo(-79.3,-22.1,-77.3,-23.7).curveTo(-76.6,-21.1,-75,-18.7).curveTo(-76.6,-18.1,-77.9,-16.8).curveTo(-80.9,-13.8,-81.7,-7.8).lineTo(-81.8,-7.9).closePath().moveTo(78.5,-16.3).curveTo(77.3,-17.6,76.1,-18).curveTo(77.8,-20.2,78.6,-22.6).lineTo(79.6,-21.4).lineTo(80.9,-19.7).curveTo(82.1,-17.8,83,-14.6).lineTo(83,-14.5).curveTo(83.6,-12,82.4,-9.2).curveTo(80.4,-14,78.5,-16.3).closePath();
	this.shape_33.setTransform(167.7,488.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("rgba(0,0,0,0.4)").beginStroke().moveTo(-60,21.3).curveTo(-72.9,18.8,-84.4,15).curveTo(-119.3,3.8,-119.3,-12.1).curveTo(-119.3,-28,-84.4,-39.4).curveTo(-49.4,-50.6,-0,-50.6).curveTo(49.3,-50.6,84.3,-39.4).curveTo(119.3,-28,119.3,-12).curveTo(119.3,3.8,84.3,15).curveTo(71.7,19.1,57.1,21.8).curveTo(62.9,49.8,-3.2,50.6).curveTo(-64.8,49.1,-60,21.3).closePath();
	this.shape_34.setTransform(167.3,529.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(130));

	// Layer 5
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(-5.9,-6.2).curveTo(-5.2,-6.6,-5.2,-6.7).curveTo(-4.1,-7.5,-3.6,-7.8).curveTo(0.4,-10.4,4,-12.7).curveTo(6.2,-14,8.4,-15.3).lineTo(8.4,-15.4).curveTo(13.3,-18.4,16.2,-21.6).curveTo(16.3,-21.8,16.5,-22).curveTo(16.8,-22.7,17.1,-23.4).curveTo(17.1,-23.5,17.1,-23.5).curveTo(18,-25.8,17.2,-29.2).moveTo(13.8,-29.2).curveTo(14,-29,14.2,-28.8).curveTo(14.8,-26.6,14.4,-25.2).lineTo(14.4,-25.1).curveTo(14.2,-24.8,14.1,-24.4).curveTo(11.4,-21.6,7.1,-18.9).curveTo(5.1,-17.8,3,-16.4).curveTo(-0.8,-14.1,-4.9,-11.4).curveTo(-8.9,-8.8,-12.4,-6.5).curveTo(-12.4,-6.5,-12.5,-6.5).curveTo(-12.7,-6.4,-12.9,-6.2).lineTo(-13.2,-6.1).moveTo(-12.9,-6.2).curveTo(-13,-6.1,-13.1,-6.1).lineTo(-13.2,-6.1).lineTo(-17.6,-3.8).moveTo(-17.6,0.7).curveTo(-17.3,0.5,-17,0.4).curveTo(-14.8,-0.8,-12.4,-2.2).lineTo(-12.4,-2.2).lineTo(-5.9,-6.2).curveTo(-2.9,-6.8,-0.7,-6.9).curveTo(-0.5,-6.9,-0.2,-6.9).lineTo(6,-7).curveTo(6.1,-7,6.1,-7).curveTo(14.2,-6.3,16.6,-2.3).curveTo(16.8,-2.1,16.9,-1.8).curveTo(17.4,-0.1,17.6,1.5).lineTo(17.6,1.5).curveTo(17.6,2,17.6,2.5).curveTo(17.6,4.1,17.1,5.4).curveTo(16.9,5.9,16.6,6.4).curveTo(16.6,6.5,16.5,6.5).curveTo(14.8,9.3,12.7,11.3).lineTo(12.7,11.3).curveTo(11.6,12.4,10.4,13.2).curveTo(9.4,13.9,8.4,14.5).lineTo(8.3,14.6).curveTo(7.4,15.2,6.4,15.7).curveTo(6.3,15.7,6.3,15.7).lineTo(6.2,15.8).curveTo(3.2,17.8,-2.2,20.7).lineTo(-2.3,20.7).curveTo(-5.9,22.6,-8.3,24).moveTo(-17.6,24.9).lineTo(-15.8,24).curveTo(-15.5,23.8,-15.2,23.6).curveTo(-14,22.9,-12.1,21.8).curveTo(-9.4,20.2,-3.4,17).curveTo(-0.1,15.2,2.4,13.8).curveTo(3.8,12.9,5,12.2).lineTo(5,12.2).curveTo(6,11.6,7.1,11).lineTo(7.1,11).curveTo(8.3,10.2,9.4,9.3).curveTo(10.2,8.8,11,8).curveTo(12.7,6.4,14.1,4.1).curveTo(14.3,3.9,14.4,3.6).curveTo(14.5,3.1,14.5,2.5).curveTo(14.6,2,14.5,1.5).lineTo(14.5,1.5).curveTo(14.4,0.8,14.2,0).curveTo(12.2,-2.4,6.4,-2.9).curveTo(6.1,-3.1,5.9,-3.1).lineTo(-0.2,-2.9).curveTo(-0.5,-2.9,-0.7,-2.9).curveTo(-5.8,-2.8,-12.4,-2.2).moveTo(-9.2,24.5).lineTo(-9.3,24.5).curveTo(-8.9,24.2,-8.3,24).lineTo(-9.2,24.5).lineTo(-15.2,28).lineTo(-15.3,28).curveTo(-16.5,28.6,-17.6,29.2);
	this.shape_35.setTransform(189.9,384.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-17.6,24.9).lineTo(-15.8,24).lineTo(-15.2,23.6).lineTo(-12.1,21.8).curveTo(-9.4,20.2,-3.4,17).lineTo(2.4,13.8).lineTo(5,12.2).lineTo(5,12.2).lineTo(7.1,11).lineTo(7.1,11).curveTo(8.3,10.2,9.4,9.3).curveTo(10.2,8.8,11,8).curveTo(12.7,6.4,14.1,4.1).lineTo(14.4,3.6).lineTo(14.5,2.5).lineTo(14.5,1.5).lineTo(14.5,1.5).lineTo(14.2,0).curveTo(12.2,-2.4,6.4,-2.9).lineTo(5.9,-3.1).lineTo(-0.2,-2.9).lineTo(-0.7,-2.9).curveTo(-5.8,-2.8,-12.4,-2.2).lineTo(-5.9,-6.2).lineTo(-12.4,-2.2).lineTo(-12.4,-2.2).lineTo(-17,0.4).lineTo(-17.6,0.7).lineTo(-17.6,-3.8).lineTo(-13.2,-6.1).lineTo(-13.1,-6.1).lineTo(-12.9,-6.2).lineTo(-12.5,-6.5).lineTo(-12.4,-6.5).lineTo(-4.9,-11.4).curveTo(-0.8,-14.1,3,-16.4).lineTo(7.1,-18.9).curveTo(11.4,-21.6,14.1,-24.4).lineTo(14.4,-25.1).lineTo(14.4,-25.2).curveTo(14.8,-26.6,14.2,-28.8).lineTo(13.8,-29.2).lineTo(17.2,-29.2).curveTo(18,-25.8,17.1,-23.5).lineTo(17.1,-23.4).lineTo(16.5,-22).lineTo(16.2,-21.6).curveTo(13.3,-18.4,8.4,-15.4).lineTo(8.4,-15.3).lineTo(4,-12.7).lineTo(-3.6,-7.8).lineTo(-5.2,-6.7).lineTo(-5.9,-6.2).curveTo(-2.9,-6.8,-0.7,-6.9).lineTo(-0.2,-6.9).lineTo(6,-7).lineTo(6.1,-7).curveTo(14.2,-6.3,16.6,-2.3).lineTo(16.9,-1.8).curveTo(17.4,-0.1,17.6,1.5).lineTo(17.6,1.5).lineTo(17.6,2.5).curveTo(17.6,4.1,17.1,5.4).lineTo(16.6,6.4).lineTo(16.5,6.5).curveTo(14.8,9.3,12.7,11.3).lineTo(12.7,11.3).curveTo(11.6,12.4,10.4,13.2).curveTo(9.4,13.9,8.4,14.5).lineTo(8.3,14.6).lineTo(6.4,15.7).lineTo(6.3,15.7).lineTo(6.2,15.8).curveTo(3.2,17.8,-2.2,20.7).lineTo(-2.3,20.7).curveTo(-5.9,22.6,-8.3,24).lineTo(-9.3,24.5).lineTo(-9.2,24.5).lineTo(-15.2,28).lineTo(-15.3,28).lineTo(-17.6,29.2).closePath();
	this.shape_36.setTransform(189.9,384.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35}]},104).to({state:[]},25).wait(1));

	// Layer 10
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(-18.2,15.3).curveTo(-15.1,13.8,-11.5,11.7).lineTo(-11.5,11.7).lineTo(-5,7.6).curveTo(-4.3,7.2,-4.3,7.1).curveTo(-3.2,6.4,-2.7,6.1).curveTo(1.3,3.4,4.9,1.2).curveTo(7.1,-0.2,9.3,-1.5).lineTo(9.3,-1.5).curveTo(14.2,-4.6,17.1,-7.7).curveTo(17.2,-7.9,17.4,-8.2).curveTo(17.7,-8.9,18,-9.5).curveTo(18,-9.6,18,-9.7).curveTo(18.9,-12,18.1,-15.4).moveTo(14.7,-15.4).curveTo(14.9,-15.2,15.1,-14.9).curveTo(15.7,-12.7,15.3,-11.3).lineTo(15.3,-11.2).curveTo(15.1,-10.9,15,-10.5).curveTo(12.3,-7.8,8,-5.1).curveTo(6,-3.9,3.9,-2.6).curveTo(0.1,-0.3,-4,2.5).curveTo(-8.1,5.1,-11.6,7.4).curveTo(-11.8,7.5,-12,7.6).curveTo(-12.1,7.7,-12.2,7.8).lineTo(-12.3,7.8).moveTo(-12,7.6).lineTo(-12.3,7.8).lineTo(-18.5,11);
	this.shape_37.setTransform(189,371);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-18.5,15.3).lineTo(-18.5,11).lineTo(-12.3,7.8).lineTo(-12.2,7.8).lineTo(-12,7.7).lineTo(-11.6,7.4).lineTo(-4,2.5).curveTo(0.1,-0.3,3.9,-2.6).lineTo(8,-5).curveTo(12.3,-7.7,15,-10.5).lineTo(15.3,-11.2).lineTo(15.3,-11.3).curveTo(15.7,-12.7,15.1,-14.9).lineTo(14.7,-15.4).lineTo(18.1,-15.4).curveTo(18.9,-11.9,18,-9.7).lineTo(18,-9.5).lineTo(17.4,-8.2).lineTo(17.1,-7.7).curveTo(14.2,-4.6,9.3,-1.5).lineTo(9.3,-1.4).lineTo(4.9,1.2).lineTo(-2.7,6.1).lineTo(-4.3,7.1).lineTo(-5,7.7).lineTo(-11.5,11.7).lineTo(-11.5,11.7).curveTo(-15.1,13.8,-18.2,15.3).closePath();
	this.shape_38.setTransform(189,371);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(16.6,-0.9).curveTo(7.9,2.2,-0.4,3.4).curveTo(-9.4,4.7,-12.5,2.9).curveTo(-13.3,2,-13.6,1.3).curveTo(-12.2,-1.7,-7.4,-2.8).curveTo(-1.6,-3.8,5.5,-3.9).lineTo(12.4,-3.7).lineTo(12.4,-7.9).lineTo(5.5,-7.9).curveTo(-1.9,-7.7,-7.8,-6.8).lineTo(-7.9,-6.7).curveTo(-15.1,-5,-16.5,0.2).curveTo(-16.6,0.5,-16.6,0.8).curveTo(-16.9,3.6,-14.2,6.2).curveTo(-14.1,6.3,-13.9,6.4).curveTo(-10.4,8.8,-0.1,7.4).curveTo(8.1,6.3,16.6,3.3);
	this.shape_39.setTransform(144.5,387.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-13.9,6.4).lineTo(-14.2,6.2).curveTo(-16.9,3.6,-16.6,0.8).lineTo(-16.5,0.2).curveTo(-15.1,-5,-7.9,-6.7).lineTo(-7.8,-6.8).curveTo(-1.9,-7.7,5.5,-7.9).lineTo(12.4,-7.9).lineTo(12.4,-3.7).lineTo(5.5,-3.9).curveTo(-1.6,-3.8,-7.4,-2.8).curveTo(-12.2,-1.7,-13.6,1.3).curveTo(-13.3,2,-12.5,2.9).curveTo(-9.4,4.7,-0.4,3.4).curveTo(7.9,2.2,16.6,-0.9).lineTo(16.6,3.3).curveTo(8.1,6.3,-0.1,7.4).curveTo(-3.8,7.9,-6.7,7.9).curveTo(-11.7,7.9,-13.9,6.4).closePath();
	this.shape_40.setTransform(144.5,387.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37}]},68).to({state:[]},13).to({state:[{t:this.shape_40},{t:this.shape_39}]},15).to({state:[]},33).wait(1));

	// Layer 4
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(10.1,-20.9).lineTo(9.8,-20.7).lineTo(9.9,-20.7).curveTo(10,-20.8,10.1,-20.9).closePath().moveTo(10.1,-20.9).curveTo(10.1,-20.9,10.1,-20.9).moveTo(-10.1,-7.6).curveTo(-6.3,-8.8,-2.4,-10.3).curveTo(-0.3,-11.1,2,-12.2).curveTo(5.7,-14,10.1,-16.6).moveTo(9.8,-20.7).lineTo(0.5,-15.8).curveTo(-1.1,-15,-2.5,-14.4).curveTo(-2.9,-14.3,-3.3,-14.1).curveTo(-6.7,-12.8,-10.1,-11.8).moveTo(-10.1,16.8).curveTo(-6.7,15.7,-3.3,14.4).lineTo(-3.3,14.5).curveTo(-1.4,13.6,0.7,12.7).lineTo(7.2,9.3).curveTo(7.5,9.1,7.8,9).curveTo(8.7,8.4,10.1,7.6).moveTo(10.1,12).lineTo(7.8,13.3).lineTo(7.7,13.3).curveTo(2,16.5,-2.4,18.2).curveTo(-6.3,19.7,-10.1,20.9);
	this.shape_41.setTransform(167,399.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill().beginStroke("#446083").setStrokeStyle(1,1,1).moveTo(-10.1,-13.9).lineTo(-10.1,-46.1).lineTo(10.1,-46.1).lineTo(10.1,-23).moveTo(10.1,9.9).lineTo(10.1,45.9).curveTo(-0.1,46.3,-10.1,45.9).lineTo(-10.1,18.8).moveTo(10.1,-18.7).lineTo(10.1,5.5).moveTo(-10.1,14.6).lineTo(-10.1,-9.7);
	this.shape_42.setTransform(167,401.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginLinearGradientFill(["#8597AD","#BACEE9","#8597AD"],[0.008,0.569,1],-10.1,0,10.1,0).beginStroke().moveTo(-10.1,45.9).lineTo(-10.1,18.8).curveTo(-6.3,17.6,-2.4,16.1).curveTo(2,14.4,7.7,11.2).lineTo(7.7,11.2).lineTo(10.1,9.9).lineTo(10.1,45.9).curveTo(5,46.1,-0.1,46.1).curveTo(-5.1,46.1,-10.1,45.9).closePath().moveTo(-10.1,-9.7).curveTo(-6.3,-10.9,-2.4,-12.4).curveTo(-0.4,-13.2,2,-14.3).curveTo(5.7,-16.1,10.1,-18.7).lineTo(10.1,5.5).lineTo(7.7,6.9).lineTo(7.2,7.2).lineTo(0.7,10.6).lineTo(-3.2,12.4).lineTo(-3.2,12.3).curveTo(-6.7,13.6,-10.1,14.6).closePath().moveTo(-10.1,-46.1).lineTo(10.1,-46.1).lineTo(10.1,-23).lineTo(10.1,-23).lineTo(9.7,-22.8).lineTo(0.4,-17.9).lineTo(-2.5,-16.5).lineTo(-3.2,-16.2).curveTo(-6.7,-14.9,-10.1,-13.9).closePath().moveTo(9.7,-22.8).lineTo(10.1,-23).lineTo(9.8,-22.8).closePath().moveTo(9.7,-22.8).closePath();
	this.shape_43.setTransform(167,401.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-10.1,16.8).curveTo(-6.7,15.7,-3.2,14.4).lineTo(-3.2,14.5).lineTo(0.7,12.7).lineTo(7.2,9.3).lineTo(7.7,9).lineTo(10.1,7.6).lineTo(10.1,12).lineTo(7.7,13.3).lineTo(7.7,13.3).curveTo(2,16.5,-2.4,18.2).curveTo(-6.3,19.7,-10.1,20.9).closePath().moveTo(-10.1,-11.8).curveTo(-6.7,-12.8,-3.2,-14.1).lineTo(-2.5,-14.4).lineTo(0.4,-15.8).lineTo(9.7,-20.7).lineTo(9.8,-20.7).lineTo(10.1,-20.9).lineTo(10.1,-20.9).lineTo(10.1,-16.6).curveTo(5.7,-14,2,-12.2).curveTo(-0.4,-11.1,-2.4,-10.3).curveTo(-6.3,-8.8,-10.1,-7.6).closePath();
	this.shape_44.setTransform(167,399.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},61).to({state:[]},20).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},15).to({state:[]},24).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[]},7).wait(2));

	// Layer 3
	this.instance_4 = new lib.gum("single",2);
	this.instance_4.parent = this;
	this.instance_4.setTransform(190.7,336.8,0.875,0.875,0,0,0,27.3,27.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},0).to({x:186.8,y:340.1},1).to({x:182.9,y:343.4},1).to({x:179,y:346.7},1).to({x:175.1,y:349.9},1).to({x:171.2,y:353.2},1).to({x:167,y:355.9},1).to({x:162.8,y:358.2},1).to({x:158.6,y:360.7},1).to({x:154.4,y:362.6},1).to({x:150.2,y:364.1},1).to({x:146.1,y:365.5},1).to({x:141.9,y:367.2},1).to({x:144.2,y:366.9},1).to({x:146.4,y:366},1).to({x:148.7,y:365.1},1).to({x:151,y:364.2},1).to({x:153.3,y:363.3},1).to({x:155.6,y:362.3},1).to({x:157.9,y:361.4},1).to({x:162.6,y:360.5},1).to({x:167.4,y:359.6},1).to({x:172.1,y:358.7},1).to({x:176.8,y:357.8},1).to({x:181.6,y:356.9},1).to({x:186.3,y:355.9},1).to({x:191.1,y:355},1).to({x:195.1,y:356.5},1).to({x:199.1,y:358.1},1).to({x:203.1,y:359.6},1).to({x:203.9,y:361.1},1).to({x:204.3,y:362.6},1).to({y:365.6},1).to({x:199.9,y:368.6},1).to({x:194.3,y:371.6},1).to({x:188.7,y:374.6},1).to({x:183.1,y:377.6},1).to({x:177.5,y:380.6},1).to({x:172.9,y:383},1).to({x:168.4,y:385.4},1).to({x:163.8,y:387.8},1).to({x:159.2,y:390.2},1).to({x:154.7,y:392.6},1).to({x:151.5,y:393.3},1).to({x:148.3,y:393.9},1).to({x:145.1,y:394.5},1).to({x:141.9,y:395.2},1).to({x:138.7,y:395.8},1).to({y:394},1).to({y:392.1},1).to({y:390.3},1).to({y:388.5},1).to({y:386.6},1).to({x:142.9,y:386.2},1).to({x:147.2,y:385.8},1).to({x:151.4,y:385.4},1).to({x:155.6,y:385},1).to({x:159.9,y:384.6},1).to({x:165.4,y:385},1).to({x:170.9,y:385.4},1).to({x:176.4,y:385.8},1).to({x:182,y:386.2},1).to({x:187.5,y:386.6},1).to({x:191,y:388.7},1).to({x:194.5,y:390.8},1).to({x:198,y:392.9},1).to({x:201.6,y:394.9},1).to({x:204.3,y:397},1).to({x:204.6,y:403.4},1).to({x:204.1,y:409.8},1).to({x:203.6,y:416.2},1).to({x:203.9,y:422.6},1).to({x:200.3,y:423.9},1).to({x:191.1,y:428.4},1).to({x:181.9,y:433.7},1).to({x:172.7,y:439},1).to({x:166.4,y:442.5},1).to({x:160,y:446.7},1).to({x:144.9,y:456.5},1).to({x:144.2,y:459.2},1).to({x:138.7,y:465},1).to({_off:true},1).wait(1));

	// 레이어 1
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(-1.2,0.7).lineTo(1.2,-0.7);
	this.shape_45.setTransform(175.9,412.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill().beginStroke("#446083").setStrokeStyle(1,1,1).moveTo(0,0.8).lineTo(0,-0.8);
	this.shape_46.setTransform(177.1,412.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(9,-22.3).lineTo(-0.3,-17.4).curveTo(-1.8,-16.6,-3.3,-15.9).curveTo(-3.6,-15.9,-4,-15.7).curveTo(-5.3,-15.2,-6.6,-14.8).curveTo(-15.3,-11.7,-23.6,-10.4).curveTo(-32.6,-9.2,-35.7,-11).curveTo(-36.5,-11.9,-36.8,-12.6).curveTo(-35.4,-15.6,-30.6,-16.7).curveTo(-24.8,-17.7,-17.7,-17.8).lineTo(-10.8,-17.6).lineTo(-10.8,-21.8).lineTo(-17.7,-21.8).curveTo(-25.1,-21.6,-31,-20.7).lineTo(-31.1,-20.6).curveTo(-38.3,-18.9,-39.7,-13.7).curveTo(-39.8,-13.4,-39.8,-13.1).curveTo(-40.1,-10.3,-37.4,-7.7).curveTo(-37.3,-7.6,-37.1,-7.5).curveTo(-33.6,-5.1,-23.3,-6.4).curveTo(-15.1,-7.6,-6.6,-10.6).curveTo(-4.9,-11.2,-3.1,-11.9).curveTo(-1.1,-12.7,1.3,-13.8).curveTo(2.2,-14.3,3.2,-14.8).curveTo(3.9,-15.1,4.6,-15.5).curveTo(4.9,-15.7,5.2,-15.8).curveTo(7.2,-16.9,9.4,-18.2).curveTo(9.6,-18.3,9.8,-18.4).lineTo(9.9,-18.4).lineTo(16.3,-22.4).curveTo(17,-22.9,17.1,-22.9).curveTo(18.1,-23.7,18.7,-24).curveTo(22.6,-26.7,26.2,-28.9).curveTo(28.5,-30.3,30.6,-31.6).lineTo(30.6,-31.6).curveTo(35.5,-34.7,38.4,-37.8).curveTo(38.6,-38,38.7,-38.3).curveTo(39.1,-38.9,39.3,-39.6).curveTo(39.4,-39.7,39.4,-39.8).curveTo(40.3,-42.1,39.5,-45.4).moveTo(36,-45.4).curveTo(36.2,-45.3,36.4,-45).curveTo(37,-42.8,36.6,-41.4).lineTo(36.6,-41.3).curveTo(36.5,-41,36.3,-40.6).curveTo(33.7,-37.9,29.4,-35.2).curveTo(27.4,-34,25.3,-32.7).curveTo(21.5,-30.4,17.3,-27.6).curveTo(13.3,-25,9.8,-22.7).curveTo(9.8,-22.7,9.8,-22.7).curveTo(9.6,-22.6,9.4,-22.5).curveTo(9.3,-22.5,9.3,-22.4).curveTo(9.2,-22.4,9.1,-22.3).lineTo(9,-22.3).moveTo(9.3,-22.4).lineTo(9,-22.3).moveTo(7,11.8).lineTo(7,11.8).curveTo(5.8,12.4,4.6,13).curveTo(0.3,15.3,-3.1,16.6).curveTo(-13.4,20.6,-23.3,22.1).curveTo(-33.6,23.4,-37.1,20.9).curveTo(-37.3,20.9,-37.4,20.8).curveTo(-40.1,18.2,-39.8,15.4).curveTo(-39.8,15.1,-39.7,14.8).curveTo(-38.3,9.6,-31.1,7.9).lineTo(-31,7.8).curveTo(-25.1,6.8,-17.7,6.8).lineTo(-10.8,7).lineTo(-10.8,10.9).lineTo(-17.7,10.7).curveTo(-24.8,10.8,-30.6,11.8).curveTo(-35.4,12.9,-36.6,15.7).curveTo(-36.5,16.6,-35.7,17.5).curveTo(-32.6,19.3,-23.6,18.1).curveTo(-14,16.7,-4,12.8).lineTo(-4,12.9).curveTo(-2.1,12.1,-0,11.1).lineTo(6.5,7.8).curveTo(6.7,7.6,7,7.4).curveTo(8,6.8,9.4,6.1).curveTo(9.8,5.8,10.2,5.6).curveTo(12.9,3.9,18.9,0.8).curveTo(22.2,-1,24.7,-2.4).curveTo(26.1,-3.3,27.2,-4).lineTo(27.3,-4).curveTo(28.3,-4.6,29.3,-5.3).lineTo(29.4,-5.3).curveTo(30.6,-6,31.7,-6.9).curveTo(32.5,-7.4,33.2,-8.2).curveTo(35,-9.9,36.4,-12.1).curveTo(36.5,-12.4,36.6,-12.6).curveTo(36.8,-13.1,36.8,-13.7).curveTo(36.8,-14.2,36.7,-14.7).lineTo(36.7,-14.8).curveTo(36.6,-15.4,36.4,-16.2).curveTo(34.4,-18.7,28.6,-19.2).curveTo(28.4,-19.3,28.2,-19.3).lineTo(22,-19.1).curveTo(21.8,-19.1,21.6,-19.1).curveTo(16.5,-19,9.9,-18.4).moveTo(16.3,-22.4).curveTo(19.4,-23.1,21.5,-23.1).curveTo(21.8,-23.1,22,-23.1).lineTo(28.3,-23.3).curveTo(28.3,-23.3,28.4,-23.3).curveTo(36.5,-22.6,38.9,-18.6).curveTo(39,-18.4,39.1,-18.1).curveTo(39.7,-16.3,39.8,-14.8).lineTo(39.8,-14.7).curveTo(39.8,-14.2,39.8,-13.7).curveTo(39.8,-12.1,39.3,-10.9).curveTo(39.1,-10.4,38.9,-9.9).curveTo(38.8,-9.8,38.8,-9.7).curveTo(37,-6.9,34.9,-4.9).lineTo(35,-4.9).curveTo(33.8,-3.9,32.6,-3.1).curveTo(31.6,-2.3,30.6,-1.8).lineTo(30.6,-1.7).curveTo(29.6,-1.1,28.6,-0.5).curveTo(28.6,-0.5,28.5,-0.5).lineTo(28.5,-0.4).curveTo(25.4,1.6,20,4.5).lineTo(20,4.5).curveTo(16.4,6.3,14,7.8).moveTo(13.1,8.3).lineTo(13.8,8.3).curveTo(13.9,8.3,13.9,8.4).curveTo(26.6,10.8,30.6,17.4).lineTo(30.7,17.5).curveTo(31.4,18.6,32,20.1).curveTo(32.8,22.1,33.4,24.8).curveTo(34.6,29.6,33.1,34.3).curveTo(32.5,36.2,31.4,38.3).curveTo(31,39.1,30.7,39.7).curveTo(29.9,41.3,28.1,43.5).curveTo(27.3,44.6,26.5,44.8).moveTo(13.1,8.3).lineTo(12.9,8.3).curveTo(13.4,8,14,7.8).closePath().moveTo(21,45.4).curveTo(23,44.5,26,40.6).curveTo(26.8,39.6,27.6,38.3).curveTo(30.3,34.3,30.6,29.3).curveTo(30.8,27,30.3,24.8).curveTo(29.5,21.9,28.4,20.1).lineTo(28.5,20.1).lineTo(28.4,20.1).curveTo(28.4,20.1,28.3,19.9).curveTo(24.7,14.4,13.5,12.4).lineTo(9.4,12).moveTo(9.4,10.4).lineTo(13.1,8.3);
	this.shape_47.setTransform(167.7,401.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#BBBBBB").beginStroke().moveTo(26,40.7).curveTo(26.8,39.6,27.6,38.3).curveTo(30.3,34.3,30.6,29.3).curveTo(30.8,27,30.3,24.7).curveTo(29.5,21.9,28.4,20.1).lineTo(28.5,20.1).lineTo(28.4,20.1).lineTo(28.3,20).curveTo(24.7,14.4,13.5,12.4).lineTo(9.4,12).lineTo(9.4,10.4).lineTo(7,11.8).lineTo(7,11.8).lineTo(4.6,13).curveTo(0.3,15.3,-3.1,16.6).curveTo(-13.4,20.6,-23.3,22).curveTo(-33.6,23.4,-37.1,21).lineTo(-37.4,20.8).curveTo(-40.1,18.2,-39.8,15.5).lineTo(-39.7,14.7).curveTo(-38.3,9.6,-31.1,7.9).lineTo(-31,7.8).curveTo(-25.1,6.9,-17.7,6.7).lineTo(-10.8,7).lineTo(-10.8,11).lineTo(-17.7,10.7).curveTo(-24.8,10.8,-30.6,11.8).curveTo(-35.4,12.9,-36.6,15.7).curveTo(-36.5,16.6,-35.7,17.5).curveTo(-32.6,19.3,-23.6,18.1).curveTo(-14,16.7,-4,12.8).lineTo(-4,12.9).lineTo(-0,11.1).lineTo(6.5,7.7).lineTo(7,7.4).lineTo(9.4,6).lineTo(10.2,5.6).curveTo(12.9,3.9,18.9,0.8).lineTo(24.7,-2.4).lineTo(27.2,-4).lineTo(27.3,-4).lineTo(29.3,-5.2).lineTo(29.4,-5.2).curveTo(30.6,-6,31.7,-6.9).curveTo(32.5,-7.4,33.2,-8.2).curveTo(35,-9.9,36.4,-12.1).lineTo(36.6,-12.6).lineTo(36.8,-13.7).lineTo(36.7,-14.7).lineTo(36.7,-14.8).lineTo(36.4,-16.2).curveTo(34.4,-18.6,28.6,-19.2).lineTo(28.2,-19.3).lineTo(22,-19.1).lineTo(21.6,-19.1).curveTo(16.5,-19,9.9,-18.4).lineTo(16.3,-22.4).lineTo(9.9,-18.4).lineTo(9.8,-18.4).lineTo(9.4,-18.2).lineTo(5.2,-15.8).lineTo(4.6,-15.5).lineTo(3.2,-14.8).lineTo(1.3,-13.8).curveTo(-1.1,-12.7,-3.1,-11.9).lineTo(-6.6,-10.6).curveTo(-15.1,-7.6,-23.3,-6.5).curveTo(-33.6,-5.1,-37.1,-7.5).lineTo(-37.4,-7.7).curveTo(-40.1,-10.2,-39.8,-13.1).lineTo(-39.7,-13.7).curveTo(-38.3,-18.9,-31.1,-20.6).lineTo(-31,-20.7).curveTo(-25.1,-21.6,-17.7,-21.8).lineTo(-10.8,-21.8).lineTo(-10.8,-17.6).lineTo(-17.7,-17.8).curveTo(-24.8,-17.7,-30.6,-16.7).curveTo(-35.4,-15.6,-36.8,-12.6).curveTo(-36.5,-11.9,-35.7,-11).curveTo(-32.6,-9.2,-23.6,-10.4).curveTo(-15.3,-11.7,-6.6,-14.8).lineTo(-4,-15.7).lineTo(-3.3,-15.9).lineTo(-0.3,-17.4).lineTo(9,-22.3).lineTo(9.1,-22.3).lineTo(9.3,-22.4).lineTo(9.4,-22.5).lineTo(9.8,-22.7).lineTo(9.8,-22.7).lineTo(17.3,-27.6).curveTo(21.5,-30.4,25.3,-32.7).lineTo(29.4,-35.1).curveTo(33.7,-37.8,36.3,-40.6).lineTo(36.6,-41.3).lineTo(36.6,-41.4).curveTo(37,-42.8,36.4,-45).lineTo(36,-45.5).lineTo(39.5,-45.5).curveTo(40.3,-42,39.4,-39.8).lineTo(39.3,-39.6).lineTo(38.7,-38.3).lineTo(38.4,-37.8).curveTo(35.5,-34.7,30.6,-31.6).lineTo(30.6,-31.5).lineTo(26.2,-28.9).lineTo(18.7,-24).lineTo(17.1,-23).lineTo(16.3,-22.4).curveTo(19.4,-23.1,21.5,-23.1).lineTo(22,-23.1).lineTo(28.3,-23.2).lineTo(28.4,-23.2).curveTo(36.5,-22.6,38.9,-18.6).lineTo(39.1,-18).curveTo(39.7,-16.3,39.8,-14.8).lineTo(39.8,-14.7).lineTo(39.8,-13.7).curveTo(39.8,-12.1,39.3,-10.8).lineTo(38.9,-9.8).lineTo(38.8,-9.7).curveTo(37,-6.9,34.9,-5).lineTo(35,-5).curveTo(33.8,-3.8,32.6,-3.1).curveTo(31.6,-2.3,30.6,-1.7).lineTo(30.6,-1.6).lineTo(28.6,-0.5).lineTo(28.5,-0.5).lineTo(28.5,-0.4).curveTo(25.4,1.6,20,4.5).lineTo(20,4.5).curveTo(16.4,6.3,14,7.7).lineTo(12.9,8.3).lineTo(13.1,8.3).lineTo(13.8,8.4).lineTo(13.9,8.4).curveTo(26.6,10.8,30.6,17.4).lineTo(30.7,17.5).curveTo(31.4,18.6,32,20.1).curveTo(32.8,22.1,33.4,24.7).curveTo(34.6,29.6,33.1,34.3).curveTo(32.5,36.2,31.4,38.3).lineTo(30.7,39.7).curveTo(29.9,41.3,28.1,43.5).curveTo(27.3,44.6,26.5,44.8).lineTo(21,45.4).curveTo(23,44.5,26,40.7).closePath().moveTo(9.4,10.4).lineTo(13.1,8.3).closePath();
	this.shape_48.setTransform(167.7,401.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill().beginStroke("#446083").setStrokeStyle(1,1,1).moveTo(10.1,-46.1).lineTo(10.1,45.9).curveTo(-0.1,46.3,-10.1,45.9).lineTo(-10.1,-46.1).closePath();
	this.shape_49.setTransform(167,401.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginLinearGradientFill(["#8597AD","#BACEE9","#8597AD"],[0.008,0.569,1],-10.1,0,10.1,0).beginStroke().moveTo(-10.1,45.9).lineTo(-10.1,-46.1).lineTo(10.1,-46.1).lineTo(10.1,45.9).curveTo(5,46.1,-0.1,46.1).curveTo(-5.1,46.1,-10.1,45.9).closePath();
	this.shape_50.setTransform(167,401.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(130));

	// 레이어 2
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill().beginStroke("#A35900").setStrokeStyle(1,1,1).moveTo(-59.6,8.2).curveTo(-59.8,7.8,-59.8,7.3).curveTo(-59.8,2.1,-42.3,-1.5).curveTo(-24.8,-5.1,-0,-5.1).curveTo(24.7,-5.1,42.1,-1.5).curveTo(59.7,2.1,59.7,7.3).curveTo(59.7,7.8,59.6,8.2).moveTo(68.9,8.2).curveTo(67.8,1.5,48.7,-3.2).curveTo(28.6,-8.2,0,-8.2).curveTo(-28.6,-8.2,-48.8,-3.2).curveTo(-67.8,1.6,-69,8.2);
	this.shape_51.setTransform(168.1,427.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#AA5D00").beginStroke().moveTo(-42.2,8.8).curveTo(-58.1,5.6,-59.5,0.9).curveTo(-59.8,0.5,-59.8,-0).curveTo(-59.8,-5.2,-42.2,-8.8).curveTo(-24.7,-12.5,0.1,-12.4).curveTo(24.7,-12.5,42.2,-8.8).curveTo(59.7,-5.2,59.7,-0).lineTo(59.6,0.9).curveTo(58.2,5.6,42.2,8.8).curveTo(24.7,12.4,0.1,12.4).curveTo(-24.7,12.4,-42.2,8.8).closePath();
	this.shape_52.setTransform(168.1,435.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#D97700").beginStroke().moveTo(59.6,8.2).lineTo(59.7,7.3).curveTo(59.7,2.1,42.1,-1.5).curveTo(24.7,-5.1,0,-5.1).curveTo(-24.8,-5.1,-42.3,-1.5).curveTo(-59.8,2.1,-59.8,7.3).curveTo(-59.8,7.8,-59.6,8.2).lineTo(-68.9,8.2).curveTo(-67.7,1.6,-48.8,-3.2).curveTo(-28.6,-8.2,0,-8.2).curveTo(28.6,-8.2,48.7,-3.2).curveTo(67.8,1.5,69,8.2).closePath();
	this.shape_53.setTransform(168.1,427.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]}).wait(130));

	// Layer 9
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill().beginStroke("#475B73").setStrokeStyle(1,1,1).moveTo(-1.4,1.5).curveTo(-0.8,2,0,2.1).curveTo(0.9,2,1.4,1.5).curveTo(2,0.9,2,0).curveTo(2,-0.8,1.5,-1.4).curveTo(0.9,-2,0,-2).curveTo(-0.8,-2,-1.5,-1.4).curveTo(-2,-0.8,-2,0).curveTo(-2,0.9,-1.4,1.5).closePath();
	this.shape_54.setTransform(77.1,353.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-1.4,1.5).curveTo(-2,0.9,-2.1,0).curveTo(-2,-0.8,-1.5,-1.4).curveTo(-0.9,-2,-0,-2.1).curveTo(0.9,-2,1.4,-1.4).curveTo(2,-0.8,2.1,0).curveTo(2,0.9,1.4,1.5).curveTo(0.8,2,-0,2.1).curveTo(-0.9,2,-1.4,1.5).closePath();
	this.shape_55.setTransform(77.1,353.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(-13.9,-7.7).lineTo(-43,-36.8).curveTo(-44.3,-38.1,-44.2,-39.8).curveTo(-44.2,-41.5,-43,-42.8).curveTo(-41.8,-44,-40,-44).curveTo(-38.3,-44,-37.1,-42.8).lineTo(-4.6,-10.3).lineTo(44.3,38).lineTo(38,44.1).closePath();
	this.shape_56.setTransform(116.6,392.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#6E829A").beginStroke().moveTo(-29.1,-24.6).lineTo(-19.8,-27.2).lineTo(29.1,21.1).lineTo(22.8,27.2).closePath();
	this.shape_57.setTransform(131.8,409.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-18.6,-11).curveTo(-19.9,-12.2,-19.8,-14).curveTo(-19.8,-15.7,-18.6,-16.9).curveTo(-17.4,-18.1,-15.6,-18.2).curveTo(-13.9,-18.2,-12.7,-16.9).lineTo(19.8,15.6).lineTo(10.5,18.2).closePath();
	this.shape_58.setTransform(92.2,366.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(6.9,-6.6).curveTo(6.9,-6.7,6.8,-6.8).curveTo(4,-9.6,0,-9.6).curveTo(-4,-9.6,-6.8,-6.8).curveTo(-9.6,-4,-9.6,0).curveTo(-9.6,2.2,-8.7,4.1).curveTo(-8,5.5,-6.8,6.8).curveTo(-3.9,9.6,-0,9.6).curveTo(4,9.6,6.8,6.8).curveTo(9.6,4,9.6,-0).curveTo(9.6,-3.8,6.9,-6.6).closePath();
	this.shape_59.setTransform(76.8,353.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-8.3,2.8).curveTo(-8.3,-1.2,-5.5,-4).curveTo(-2.6,-6.9,1.4,-6.9).curveTo(5.3,-6.8,8.1,-4).lineTo(8.3,-3.8).lineTo(-7.4,6.9).curveTo(-8.2,5,-8.3,2.8).closePath();
	this.shape_60.setTransform(75.4,350.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-7.2,5.3).curveTo(-8.5,4,-9.2,2.6).lineTo(6.5,-8.1).curveTo(9.2,-5.4,9.2,-1.6).curveTo(9.2,2.4,6.3,5.3).curveTo(3.5,8.1,-0.5,8.1).curveTo(-4.4,8.1,-7.2,5.3).closePath();
	this.shape_61.setTransform(77.2,354.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(45.9,-13.4).lineTo(45.9,13.3).curveTo(45.9,18,41.2,18).lineTo(-41.6,18).curveTo(-46.3,18,-46.3,13.3).lineTo(-46.3,-13.4).curveTo(-46.3,-18.2,-41.6,-18.2).lineTo(41.2,-18.2).curveTo(45.9,-18.2,45.9,-13.4).closePath().moveTo(51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).lineTo(-45.8,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.8,-22.4).lineTo(45.9,-22.4).curveTo(51.7,-22.4,51.7,-16.5).closePath();
	this.shape_62.setTransform(25.4,352.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-41.4,18.1).curveTo(-46.1,18.1,-46.1,13.4).lineTo(-46.1,-13.4).curveTo(-46.1,-18.1,-41.4,-18.1).lineTo(41.4,-18.1).curveTo(46.1,-18.1,46.1,-13.4).lineTo(46.1,13.4).curveTo(46.1,18.1,41.4,18.1).closePath();
	this.shape_63.setTransform(25.2,352.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-45.8,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.8,-22.3).lineTo(45.9,-22.3).curveTo(51.7,-22.4,51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).closePath().moveTo(-46.4,-13.4).lineTo(-46.4,13.3).curveTo(-46.4,18.1,-41.6,18.1).lineTo(41.2,18.1).curveTo(45.9,18.1,45.9,13.3).lineTo(45.9,-13.4).curveTo(45.9,-18.1,41.2,-18.2).lineTo(-41.6,-18.2).curveTo(-46.4,-18.1,-46.4,-13.4).closePath();
	this.shape_64.setTransform(25.4,352.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill().beginStroke("#475B73").setStrokeStyle(1,1,1).moveTo(2,0).curveTo(2,0.9,1.4,1.5).curveTo(0.8,2,0,2.1).curveTo(-0.9,2,-1.4,1.5).curveTo(-2,0.9,-2.1,0).curveTo(-2,-0.8,-1.5,-1.4).curveTo(-0.9,-2,0,-2).curveTo(0.8,-2,1.4,-1.4).curveTo(2,-0.8,2,0).closePath();
	this.shape_65.setTransform(260.1,353.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-1.4,1.5).curveTo(-2,0.9,-2.1,0).curveTo(-2,-0.8,-1.4,-1.4).curveTo(-0.9,-2,0,-2.1).curveTo(0.9,-2,1.4,-1.4).curveTo(2,-0.8,2.1,0).curveTo(2,0.9,1.4,1.5).curveTo(0.9,2,0,2.1).curveTo(-0.9,2,-1.4,1.5).closePath();
	this.shape_66.setTransform(260.1,353.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(13.9,-7.7).lineTo(43,-36.8).curveTo(44.3,-38.1,44.2,-39.8).curveTo(44.2,-41.5,43,-42.8).curveTo(41.8,-44,40,-44).curveTo(38.3,-44,37.1,-42.8).lineTo(4.6,-10.3).lineTo(-44.3,38).lineTo(-38,44.1).closePath();
	this.shape_67.setTransform(220.6,392.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#6E829A").beginStroke().moveTo(-29.1,21.1).lineTo(19.8,-27.2).lineTo(29.1,-24.6).lineTo(-22.8,27.2).closePath();
	this.shape_68.setTransform(205.4,409.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-19.8,15.6).lineTo(12.7,-16.9).curveTo(13.9,-18.2,15.6,-18.2).curveTo(17.4,-18.1,18.6,-16.9).curveTo(19.8,-15.7,19.8,-14).curveTo(19.9,-12.2,18.6,-11).lineTo(-10.5,18.2).closePath();
	this.shape_69.setTransform(245,366.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(8.7,4.1).curveTo(8,5.5,6.8,6.8).curveTo(3.9,9.6,0,9.6).curveTo(-4,9.6,-6.8,6.8).curveTo(-9.6,4,-9.6,-0).curveTo(-9.6,-3.8,-6.9,-6.6).curveTo(-6.9,-6.7,-6.8,-6.8).curveTo(-4,-9.6,-0,-9.6).curveTo(4,-9.6,6.8,-6.8).curveTo(9.6,-4,9.6,0).curveTo(9.6,2.2,8.7,4.1).closePath();
	this.shape_70.setTransform(260.4,353.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-8.3,-3.8).lineTo(-8.1,-4).curveTo(-5.3,-6.8,-1.4,-6.9).curveTo(2.6,-6.9,5.5,-4).curveTo(8.3,-1.2,8.3,2.8).curveTo(8.2,5,7.4,6.9).closePath();
	this.shape_71.setTransform(261.7,350.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-6.3,5.3).curveTo(-9.2,2.4,-9.2,-1.6).curveTo(-9.2,-5.4,-6.5,-8.1).lineTo(9.2,2.6).curveTo(8.5,4,7.2,5.3).curveTo(4.4,8.1,0.5,8.1).curveTo(-3.5,8.1,-6.3,5.3).closePath();
	this.shape_72.setTransform(259.9,354.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(45.9,-13.4).lineTo(45.9,13.3).curveTo(45.9,18,41.2,18).lineTo(-41.6,18).curveTo(-46.4,18,-46.4,13.3).lineTo(-46.4,-13.4).curveTo(-46.4,-18.2,-41.6,-18.2).lineTo(41.2,-18.2).curveTo(45.9,-18.2,45.9,-13.4).closePath().moveTo(51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).lineTo(-45.9,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.9,-22.4).lineTo(45.9,-22.4).curveTo(51.7,-22.4,51.7,-16.5).closePath();
	this.shape_73.setTransform(311.8,352.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-41.4,18.1).curveTo(-46.1,18.1,-46.1,13.4).lineTo(-46.1,-13.4).curveTo(-46.1,-18.1,-41.4,-18.1).lineTo(41.4,-18.1).curveTo(46.1,-18.1,46.1,-13.4).lineTo(46.1,13.4).curveTo(46.1,18.1,41.4,18.1).closePath();
	this.shape_74.setTransform(311.6,352.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-45.9,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.9,-22.3).lineTo(45.9,-22.3).curveTo(51.7,-22.4,51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).closePath().moveTo(-46.4,-13.4).lineTo(-46.4,13.3).curveTo(-46.3,18.1,-41.6,18.1).lineTo(41.2,18.1).curveTo(45.9,18.1,45.9,13.3).lineTo(45.9,-13.4).curveTo(45.9,-18.1,41.2,-18.2).lineTo(-41.6,-18.2).curveTo(-46.3,-18.1,-46.4,-13.4).closePath();
	this.shape_75.setTransform(311.8,352.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,230.7,391.8,349.2);


(lib.blue = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(129).call(this.frame_129).wait(1));

	// 레이어 3
	this.instance = new lib.ob_coin();
	this.instance.parent = this;
	this.instance.setTransform(167.8,199.2,2.638,2.638,0,0,0,18.8,18.8);
	this.instance._off = true;

	this.instance_1 = new lib.inconin("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,269,1,1,0,0,0,34.6,38.8);

	this.instance_2 = new lib.incoin2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(168,269,1,1,0,0,0,34.6,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},23).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(6).to({scaleX:1.83,scaleY:1.83,y:264.7},7).to({_off:true},1).wait(115));

	// Layer 13
	this.instance_3 = new lib.ob_hand("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(167.3,335.8,1,1,0,0,0,28.9,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({startPosition:0},0).to({rotation:90,x:167.2},8).wait(94));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#597393").setStrokeStyle(1,1,1).moveTo(-12.8,-5.8).lineTo(-12.7,-5.8).curveTo(2.1,-5.8,12.8,3.4).lineTo(11.3,5.8).curveTo(1.2,-2.2,-12.7,-2.2).lineTo(-12.8,-2.2);
	this.shape.setTransform(179.8,301.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#4A5C70").beginStroke().moveTo(-12.7,-2.2).lineTo(-12.8,-2.2).lineTo(-12.8,-5.8).lineTo(-12.7,-5.8).curveTo(2.1,-5.8,12.8,3.4).lineTo(11.3,5.8).curveTo(1.2,-2.2,-12.7,-2.2).closePath();
	this.shape_1.setTransform(179.8,301.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#597393").setStrokeStyle(1,1,1).moveTo(12.8,-5.8).lineTo(12.7,-5.8).curveTo(-2.2,-5.8,-12.8,3.4).lineTo(-11.3,5.8).curveTo(-1.2,-2.2,12.7,-2.2).lineTo(12.8,-2.2);
	this.shape_2.setTransform(154.4,301.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#4A5C70").beginStroke().moveTo(-12.7,3.4).curveTo(-2.1,-5.8,12.7,-5.8).lineTo(12.7,-5.8).lineTo(12.7,-2.2).lineTo(12.7,-2.2).curveTo(-1.2,-2.2,-11.3,5.8).closePath();
	this.shape_3.setTransform(154.4,301.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(12.3,-25.6).curveTo(16.8,-24,20.7,-21).curveTo(21.6,-20.3,22.4,-19.6).curveTo(31.6,-11.4,31.6,0.1).curveTo(31.6,11.6,22.4,19.6).curveTo(13.3,27.8,0.3,27.8).curveTo(0.2,27.8,-0,27.8).curveTo(-0.2,27.8,-0.3,27.8).curveTo(-13.3,27.8,-22.4,19.6).curveTo(-31.6,11.6,-31.6,0.1).curveTo(-31.6,-11.4,-22.4,-19.6).curveTo(-20.5,-21.3,-18.3,-22.7).curveTo(-15.5,-24.5,-12.3,-25.6).lineTo(-14.7,-29.9).curveTo(-16.5,-29.3,-18.3,-28.3).curveTo(-22.5,-26.2,-26.2,-22.9).curveTo(-36.9,-13.4,-36.9,0).curveTo(-36.9,13.5,-26.2,22.9).curveTo(-15.5,32.4,-0.4,32.4).curveTo(-0.2,32.4,-0,32.4).curveTo(0.2,32.4,0.4,32.4).curveTo(15.5,32.4,26.2,22.9).curveTo(36.9,13.5,36.9,0).curveTo(36.9,-13.4,26.2,-22.9).curveTo(23.6,-25.2,20.7,-27).curveTo(20.5,-27.1,20.3,-27.2).lineTo(14.7,-29.9).moveTo(-14.7,-29.9).curveTo(-8.1,-32.4,-0.4,-32.4).curveTo(-0.2,-32.4,-0,-32.4).curveTo(0.2,-32.4,0.4,-32.4).curveTo(8.1,-32.4,14.7,-29.9).lineTo(12.3,-25.6).moveTo(-12.3,-25.6).curveTo(-6.8,-27.7,-0.3,-27.7).curveTo(-0.2,-27.7,-0,-27.7).curveTo(0.2,-27.7,0.3,-27.7).curveTo(6.8,-27.7,12.3,-25.6);
	this.shape_4.setTransform(167.2,334.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-0,32.4).lineTo(-0.4,32.4).curveTo(-15.5,32.4,-26.2,22.9).curveTo(-36.9,13.5,-36.9,0).curveTo(-36.9,-13.4,-26.2,-22.9).curveTo(-22.5,-26.2,-18.3,-28.3).curveTo(-16.5,-29.3,-14.7,-29.9).curveTo(-8.1,-32.4,-0.4,-32.4).lineTo(-0,-32.4).lineTo(0.4,-32.4).curveTo(8.1,-32.4,14.7,-29.9).lineTo(12.3,-25.6).lineTo(14.7,-29.9).lineTo(20.3,-27.2).lineTo(20.7,-27).curveTo(23.6,-25.2,26.2,-22.9).curveTo(36.9,-13.4,36.9,0).curveTo(36.9,13.5,26.2,22.9).curveTo(15.5,32.4,0.4,32.4).lineTo(-0,32.4).closePath().moveTo(-31.6,0.1).curveTo(-31.6,11.6,-22.4,19.6).curveTo(-13.3,27.8,-0.3,27.8).lineTo(-0,27.8).lineTo(0.3,27.8).curveTo(13.3,27.8,22.4,19.6).curveTo(31.6,11.6,31.6,0.1).curveTo(31.6,-11.4,22.4,-19.6).lineTo(20.7,-21).curveTo(16.8,-24,12.3,-25.6).curveTo(6.8,-27.7,0.3,-27.7).lineTo(-0,-27.7).lineTo(-0.3,-27.7).curveTo(-6.8,-27.7,-12.3,-25.6).lineTo(-14.7,-29.9).lineTo(-12.3,-25.6).curveTo(-15.5,-24.5,-18.3,-22.7).curveTo(-20.5,-21.3,-22.4,-19.6).curveTo(-31.6,-11.4,-31.6,0.1).lineTo(-31.6,0.1).closePath().moveTo(-0,27.8).lineTo(-0.3,27.8).curveTo(-13.3,27.8,-22.4,19.6).curveTo(-31.6,11.6,-31.6,0.1).curveTo(-31.6,-11.4,-22.4,-19.6).curveTo(-20.5,-21.3,-18.3,-22.7).curveTo(-15.5,-24.5,-12.3,-25.6).curveTo(-6.8,-27.7,-0.3,-27.7).lineTo(-0,-27.7).lineTo(0.3,-27.7).curveTo(6.8,-27.7,12.3,-25.6).curveTo(16.8,-24,20.7,-21).lineTo(22.4,-19.6).curveTo(31.6,-11.4,31.6,0.1).curveTo(31.6,11.6,22.4,19.6).curveTo(13.3,27.8,0.3,27.8).lineTo(-0,27.8).closePath().moveTo(-12.3,-25.6).closePath();
	this.shape_5.setTransform(167.2,334.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#597393").setStrokeStyle(1,1,1).moveTo(-36.9,18.8).lineTo(36.9,18.8).curveTo(37,14.2,37,13.6).curveTo(37,0.2,26.3,-9.3).curveTo(15.6,-18.8,0.4,-18.8).curveTo(0.2,-18.8,0,-18.8).curveTo(-0.1,-18.8,-0.3,-18.8).curveTo(-15.5,-18.8,-26.2,-9.3).curveTo(-36.9,0.2,-36.9,13.6).curveTo(-36.9,14.2,-36.9,18.8).closePath();
	this.shape_6.setTransform(167.2,311.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#90A5BF").beginStroke().moveTo(-36.9,18.8).lineTo(-36.9,13.6).curveTo(-36.9,0.1,-26.2,-9.3).curveTo(-15.5,-18.8,-0.4,-18.8).lineTo(-0,-18.8).lineTo(0.4,-18.8).curveTo(15.5,-18.8,26.3,-9.3).curveTo(37,0.1,37,13.6).lineTo(36.9,18.8).closePath();
	this.shape_7.setTransform(167.2,311.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#930404").setStrokeStyle(1,1,1).moveTo(126.2,-42).lineTo(125.4,-46.5).lineTo(116.8,-36.9).curveTo(107.7,-28.1,94.5,-21).curveTo(57.5,-1.3,0.3,-1.6).curveTo(-0,-1.6,-0.3,-1.6).curveTo(-57.6,-1.1,-94.5,-20.5).curveTo(-107.8,-27.5,-116.8,-36.3).lineTo(-125.4,-45.7).lineTo(-125.9,-43).lineTo(-127,-36.7).curveTo(-127,-36.3,-127.1,-36).curveTo(-127.7,-27.7,-126.6,-19.7).curveTo(-125.6,-12.3,-123.3,-5.8).curveTo(-119,6.3,-109.8,14.8).curveTo(-102,22.8,-88.8,30.2).lineTo(-88.4,30.5).curveTo(-83.2,33.2,-77.1,35.6).curveTo(-45.7,47.7,-0.3,46.3).curveTo(-0,46.3,0.3,46.3).curveTo(45.6,47.5,77.1,35.2).curveTo(83.2,32.9,88.4,30).lineTo(88.8,29.7).curveTo(102,22.3,109.8,14.3).curveTo(114.3,10,117.7,4.9).curveTo(124.7,-5.8,126.6,-20.4).curveTo(127.7,-28.4,127.1,-36.7).curveTo(127,-37.1,127,-37.4).closePath();
	this.shape_8.setTransform(167,278.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FF7E7E").beginStroke().moveTo(121.2,-15.2).lineTo(121.3,-15.2).lineTo(123.9,-18.3).lineTo(127.1,-23.2).curveTo(127.7,-14.8,126.6,-6.8).curveTo(124.7,7.8,117.7,18.5).curveTo(114.8,20.9,111.8,23.2).curveTo(120,7.5,121.2,-15.2).closePath().moveTo(-123.3,7.7).curveTo(-125.6,1.3,-126.6,-6.1).curveTo(-127.7,-14.1,-127.1,-22.5).lineTo(-123.9,-17.6).lineTo(-121.9,-15.2).curveTo(-122.8,3.1,-114,18.8).curveTo(-119.1,13.6,-123.3,7.7).closePath();
	this.shape_9.setTransform(167,264.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#D91313").beginStroke().moveTo(-74.3,15.3).curveTo(-80.4,12.9,-85.6,10.2).lineTo(-86,9.9).curveTo(-99.2,2.5,-107,-5.5).curveTo(-116.2,-14,-120.5,-26.1).curveTo(-116.3,-20.3,-111.2,-15.1).curveTo(-66.8,29.4,45.5,18.6).curveTo(86.6,10.5,114.6,-10.7).curveTo(117.6,-13,120.5,-15.4).curveTo(117.1,-10.3,112.6,-6).curveTo(104.8,2,91.6,9.4).lineTo(91.2,9.7).curveTo(86,12.6,79.9,14.9).curveTo(48.4,27.2,3.1,26).lineTo(2.6,26).lineTo(-6.5,26.1).curveTo(-46,26.1,-74.3,15.3).closePath();
	this.shape_10.setTransform(164.2,298.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#F04040").beginStroke().moveTo(-113.6,-0.9).curveTo(-122.4,-16.5,-121.5,-34.9).curveTo(-114.3,-26.7,-103.5,-20).curveTo(-67.3,2.7,0.1,2.1).lineTo(0.7,2.1).curveTo(68.1,2.3,104.2,-20.5).curveTo(114.6,-27,121.6,-34.8).curveTo(120.4,-12.1,112.2,3.5).curveTo(84.2,24.7,43.1,32.8).curveTo(21,34.9,1.6,34.9).curveTo(-78,34.9,-113.6,-0.9).closePath();
	this.shape_11.setTransform(166.6,284.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFD448").beginStroke().moveTo(-103.6,0.3).curveTo(-114.5,-6.4,-121.7,-14.6).lineTo(-120.1,-21.4).curveTo(-106.1,-5.1,-81.2,5.1).curveTo(-45.9,17.9,11.1,17.4).curveTo(48.1,14.8,80.9,5.1).curveTo(105.2,-5.1,121.7,-22.4).lineTo(121.6,-14.5).lineTo(121.5,-14.5).curveTo(114.4,-6.7,104.1,-0.2).curveTo(67.9,22.6,0.5,22.4).lineTo(-0,22.4).lineTo(-3.2,22.4).curveTo(-68.3,22.4,-103.6,0.3).closePath();
	this.shape_12.setTransform(166.8,264);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFE593").beginStroke().moveTo(121.4,-0.7).curveTo(123.9,-3.3,126.2,-6.1).lineTo(127,-1.5).lineTo(127.1,-0.8).lineTo(123.9,4).lineTo(121.3,7.2).closePath().moveTo(-123.9,4.7).lineTo(-127.1,-0.1).lineTo(-127,-0.8).lineTo(-125.9,-7.1).curveTo(-123.4,-3.3,-120.3,0.3).lineTo(-121.9,7.1).lineTo(-123.9,4.7).closePath();
	this.shape_13.setTransform(167,242.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#DBAC12").beginStroke().moveTo(-81.6,12.5).curveTo(-106.5,2.3,-120.5,-14).curveTo(-123.5,-17.6,-126.1,-21.4).lineTo(-125.6,-24.1).lineTo(-117,-14.7).curveTo(-108,-5.9,-94.7,1.1).curveTo(-57.8,20.5,-0.4,20).lineTo(0.1,20).curveTo(57.3,20.3,94.3,0.6).curveTo(107.5,-6.5,116.7,-15.3).lineTo(125.2,-24.9).lineTo(126,-20.4).curveTo(123.7,-17.6,121.2,-15).curveTo(104.8,2.3,80.5,12.5).curveTo(47.7,22.2,10.6,24.8).lineTo(6.8,24.9).curveTo(-47.5,24.9,-81.6,12.5).closePath();
	this.shape_14.setTransform(167.2,256.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill().beginStroke("#1A8DB4").setStrokeStyle(1,1,1).moveTo(57.6,29.9).curveTo(58.2,27.5,56.9,25.3).lineTo(25.2,-8.9).lineTo(25.4,-23.6).curveTo(25.4,-28,24,-33.9).curveTo(23,-38.1,21.8,-40.7).curveTo(18.8,-47.6,11.7,-50.6).curveTo(8.4,-52,5.5,-52.2).curveTo(5.1,-52.3,4.8,-52.3).lineTo(-4.8,-52.3).curveTo(-5.2,-52.3,-5.6,-52.2).curveTo(-8.4,-52,-11.7,-50.6).curveTo(-18.9,-47.6,-21.8,-40.7).curveTo(-23.1,-38.1,-24,-33.9).curveTo(-25.5,-28,-25.4,-23.6).lineTo(-25.3,-8.9).lineTo(-56.9,25.3).curveTo(-57.7,26.5,-57.8,27.8).curveTo(-57.9,28.8,-57.7,29.9).moveTo(58,32.2).curveTo(57.9,34,56.7,35.8).lineTo(53,39.3).curveTo(50.1,41.6,46.1,43.7).curveTo(35.5,49.1,20.1,51.2).curveTo(10,52.3,1.6,52.3).curveTo(1.1,52.3,0.7,52.3).curveTo(0.5,52.3,0.4,52.3).curveTo(0.2,52.3,0,52.3).curveTo(-0.2,52.3,-0.4,52.3).curveTo(-0.5,52.3,-0.7,52.3).curveTo(-1.2,52.3,-1.6,52.3).curveTo(-10,52.3,-20.1,51.2).curveTo(-35.5,49.1,-46.1,43.7).curveTo(-50.2,41.6,-53,39.3).lineTo(-56.8,35.8).curveTo(-57.9,34,-58,32.2).curveTo(-58.1,32,-58,31.7).curveTo(-58,31.4,-58,31.1).curveTo(-57.9,30.5,-57.7,29.9).lineTo(-58,32.2).moveTo(57.6,29.9).lineTo(58,32.2).curveTo(58.1,32,58,31.7).curveTo(58,31.4,57.9,31.1).curveTo(57.9,30.5,57.6,29.9).closePath();
	this.shape_15.setTransform(165.8,523.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-0.6,0.5).lineTo(0.6,-0.5).lineTo(-0.6,0.5).closePath();
	this.shape_16.setTransform(212.1,554.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#EEF5FF").beginStroke().moveTo(0.7,12.9).lineTo(0.4,12.9).lineTo(0,12.9).lineTo(-0.4,12.9).lineTo(-0.7,12.9).lineTo(-1.6,12.9).curveTo(-10,12.9,-20.1,11.8).curveTo(-35.5,9.7,-46.1,4.3).curveTo(-50.2,2.2,-53,-0.1).lineTo(-56.8,-3.6).curveTo(-57.9,-5.4,-58,-7.2).lineTo(-57.7,-9.5).curveTo(-57.3,-10.5,-56.3,-11.4).curveTo(-53.8,-13.8,-50.5,-12.3).curveTo(-49.8,-12,-49.1,-11.5).lineTo(-45.7,-8).lineTo(-45.5,-7.8).lineTo(-45.2,-7.6).lineTo(-45.2,-7.6).curveTo(-43.1,-5.5,-36.1,-2.2).curveTo(-29.1,1,-14.8,1.9).curveTo(-8.1,2.6,-1.5,2.4).lineTo(-0.6,2.4).lineTo(0,2.4).lineTo(0.6,2.4).lineTo(1.5,2.4).curveTo(8,2.6,14.8,1.9).curveTo(29.1,1,36.1,-2.2).curveTo(43.1,-5.5,45.2,-7.6).lineTo(45.3,-7.6).lineTo(45.3,-7.6).lineTo(45.3,-7.7).lineTo(45.7,-8).lineTo(46.9,-9).lineTo(50.4,-12.3).curveTo(53.8,-13.8,56.3,-11.4).curveTo(57.2,-10.5,57.6,-9.5).lineTo(58,-7.2).curveTo(57.9,-5.4,56.7,-3.6).lineTo(53,-0.1).curveTo(50.1,2.2,46.1,4.3).curveTo(35.5,9.7,20.1,11.8).curveTo(10,12.9,1.6,12.9).lineTo(0.7,12.9).closePath();
	this.shape_17.setTransform(165.8,563.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginLinearGradientFill(["#E2EFFF","#71A5E5"],[0.008,1],1.4,28.7,1.4,-43.9).beginStroke().moveTo(1.5,33.4).lineTo(0.6,33.4).lineTo(0,33.4).lineTo(-0.5,33.4).lineTo(-1.5,33.4).curveTo(-8.1,33.6,-14.8,32.9).curveTo(-29.1,32,-36.1,28.8).curveTo(-43.1,25.5,-45.2,23.4).lineTo(-45.2,23.4).lineTo(-45.7,23).lineTo(-49,19.5).curveTo(-49.7,19,-50.5,18.7).lineTo(-20.7,-16).lineTo(-20.9,-30.6).curveTo(-20.9,-32,-20.7,-33.4).lineTo(-19.9,-32).lineTo(-20.3,-32.7).curveTo(-17.6,-26.6,-17,-22.8).curveTo(-16.8,-19.7,-15.4,-15).curveTo(-12.9,-9.2,-7.5,-7.2).curveTo(-4.4,-6.1,-2.5,-5.8).lineTo(0,-5.6).lineTo(2.6,-5.9).curveTo(4.4,-6.1,7.5,-7.2).curveTo(12.9,-9.2,15.4,-15).curveTo(16.8,-19.7,16.9,-22.8).curveTo(17.7,-27,20,-32).lineTo(20.6,-33.4).lineTo(20.8,-32).lineTo(20.8,-30.6).lineTo(20.7,-16).lineTo(50.4,18.7).lineTo(46.9,22).lineTo(45.7,23).lineTo(45.7,23).lineTo(45.4,23.3).lineTo(45.3,23.4).lineTo(45.2,23.4).curveTo(43.1,25.5,36.1,28.8).curveTo(29.1,32,14.8,32.9).curveTo(9.5,33.4,4.4,33.4).lineTo(1.5,33.4).closePath();
	this.shape_18.setTransform(165.8,532.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#40464F").beginStroke().moveTo(-2.5,25.8).curveTo(-4.4,25.6,-7.5,24.4).curveTo(-12.9,22.4,-15.4,16.6).curveTo(-16.8,12,-17,8.9).curveTo(-17.6,5.1,-20.3,-1).lineTo(-19.9,-0.3).lineTo(-20.7,-1.8).curveTo(-20.4,-5.1,-19.4,-9.1).curveTo(-18.4,-13.3,-17.2,-15.8).curveTo(-14.1,-22.5,-6.8,-25).curveTo(-3,-26.3,-0.5,-26).lineTo(0,-26).lineTo(0.5,-26).curveTo(3,-26.3,6.8,-25).curveTo(14.1,-22.5,17.1,-15.8).curveTo(18.4,-13.3,19.4,-9.1).curveTo(20.4,-5.1,20.6,-1.8).lineTo(20,-0.3).curveTo(17.7,4.7,16.9,8.9).curveTo(16.8,12,15.4,16.6).curveTo(12.9,22.4,7.5,24.4).curveTo(4.4,25.6,2.6,25.8).lineTo(0,26).lineTo(-2.5,25.8).closePath();
	this.shape_19.setTransform(165.8,500.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FAFCFF").beginStroke().moveTo(56.3,39.2).curveTo(53.8,36.7,50.4,38.2).lineTo(20.7,3.6).lineTo(20.8,-11).lineTo(20.8,-12.4).lineTo(20.6,-13.9).curveTo(20.4,-17.2,19.4,-21.2).curveTo(18.4,-25.4,17.1,-27.9).curveTo(14,-34.5,6.8,-37.1).curveTo(3,-38.3,0.5,-38.1).lineTo(0,-38.1).lineTo(-0.5,-38.1).curveTo(-3,-38.3,-6.8,-37.1).curveTo(-14.1,-34.5,-17.2,-27.9).curveTo(-18.4,-25.4,-19.4,-21.2).curveTo(-20.4,-17.2,-20.7,-13.9).curveTo(-20.9,-12.4,-20.9,-11).lineTo(-20.7,3.6).lineTo(-50.5,38.2).curveTo(-53.8,36.7,-56.3,39.2).lineTo(-57.8,39).curveTo(-57.7,37.7,-56.9,36.5).lineTo(-25.3,2.3).lineTo(-25.4,-12.4).curveTo(-25.5,-16.9,-24,-22.7).curveTo(-23.1,-26.9,-21.8,-29.5).curveTo(-18.9,-36.5,-11.7,-39.4).curveTo(-8.4,-40.8,-5.6,-41).lineTo(-4.8,-41.1).lineTo(4.8,-41.1).lineTo(5.5,-41).curveTo(8.4,-40.8,11.7,-39.4).curveTo(18.8,-36.5,21.8,-29.5).curveTo(23,-26.9,24,-22.7).curveTo(25.4,-16.9,25.4,-12.4).lineTo(25.2,2.3).lineTo(56.9,36.5).curveTo(58.2,38.7,57.6,41.1).curveTo(57.2,40.1,56.3,39.2).closePath();
	this.shape_20.setTransform(165.8,512.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill().beginStroke("#A35900").setStrokeStyle(1,1,1).moveTo(-77.5,-37.4).lineTo(-77.5,-48.3).lineTo(77.5,-48.3).lineTo(77.5,-37.4).lineTo(77.5,12.3).lineTo(77.5,15.7).lineTo(77.5,25).curveTo(54.3,48,2.9,48.3).curveTo(2.2,48.3,1.5,48.3).lineTo(-1.4,48.3).curveTo(-2.2,48.3,-2.9,48.3).curveTo(-54.2,48,-77.5,25).lineTo(-77.5,15.7).lineTo(-77.5,12.3).closePath();
	this.shape_21.setTransform(167.2,326.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginLinearGradientFill(["#F5A406","#FFDF77","#F5A406"],[0.02,0.573,1],-81.4,-6.5,73.6,-6.5).beginStroke().moveTo(1.5,42.8).lineTo(-1.4,42.8).lineTo(-2.9,42.8).curveTo(-54.2,42.5,-77.5,19.6).lineTo(-77.5,10.3).curveTo(-54.2,33.2,-2.9,33.6).lineTo(-1.4,33.6).lineTo(1.5,33.6).lineTo(2.9,33.6).curveTo(54.3,33.2,77.5,10.3).lineTo(77.5,19.6).curveTo(54.3,42.5,2.9,42.8).lineTo(1.5,42.8).closePath().moveTo(1.4,30.1).lineTo(-1.4,30.1).lineTo(-2.9,30.1).curveTo(-54.2,29.7,-77.5,6.9).lineTo(-77.5,-42.8).curveTo(0.5,-15.6,77.5,-42.8).lineTo(77.5,6.9).curveTo(54.3,29.8,2.9,30.1).lineTo(1.4,30.1).closePath();
	this.shape_22.setTransform(167.2,332.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#D97700").beginStroke().moveTo(1.5,43.7).lineTo(-1.4,43.7).lineTo(-2.9,43.7).curveTo(-54.2,43.3,-77.5,20.3).lineTo(-77.5,16.9).curveTo(-54.2,39.8,-2.9,40.2).lineTo(-1.4,40.2).lineTo(1.4,40.2).lineTo(2.9,40.2).curveTo(54.3,39.9,77.5,16.9).lineTo(77.5,20.3).curveTo(54.3,43.3,2.9,43.7).lineTo(1.5,43.7).closePath().moveTo(-77.5,-32.7).lineTo(-77.5,-43.6).lineTo(77.5,-43.6).lineTo(77.5,-32.7).curveTo(39,-19.2,0.3,-19.2).curveTo(-38.5,-19.2,-77.5,-32.7).closePath();
	this.shape_23.setTransform(167.2,322.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill().beginStroke("#8E8E8E").setStrokeStyle(1,1,1).moveTo(59.8,32.2).lineTo(59.8,-69).lineTo(-59.7,-69).lineTo(-59.7,32.2).lineTo(-59.7,55.9).curveTo(-59.8,56.1,-59.8,56.4).curveTo(-59.8,56.4,-59.8,56.5).curveTo(-59.8,59.9,-52.4,62.7).curveTo(-48.4,64.1,-42.2,65.4).curveTo(-41,65.7,-39.8,65.9).curveTo(-23,69,0,69).curveTo(24.7,69,42.2,65.4).curveTo(59.6,61.8,59.8,56.5).curveTo(59.8,56.5,59.8,56.4).closePath();
	this.shape_24.setTransform(168.4,379.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginLinearGradientFill(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)","#F2F2F2"],[0.02,0.573,1],-57.3,-54,62.2,-54).beginStroke().moveTo(-39.8,15.3).lineTo(-42.2,14.8).curveTo(-48.4,13.5,-52.4,12.1).curveTo(-59.8,9.3,-59.8,5.9).lineTo(-59.7,5.4).lineTo(-59.7,-18.4).lineTo(59.8,-18.4).lineTo(59.8,5.8).lineTo(59.8,6).curveTo(59.6,11.2,42.2,14.8).curveTo(24.7,18.4,0,18.4).curveTo(-23,18.4,-39.8,15.3).closePath();
	this.shape_25.setTransform(168.4,429.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginLinearGradientFill(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)","#F2F2F2"],[0.02,0.573,1],-57.4,22.6,62.1,22.6).beginStroke().moveTo(-59.7,50.6).lineTo(-59.7,-50.6).lineTo(59.7,-50.6).lineTo(59.7,50.6).closePath();
	this.shape_26.setTransform(168.4,360.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill().beginStroke("#A35900").setStrokeStyle(1,1,1).moveTo(-59.6,-24.5).curveTo(-58.3,-19.8,-42.3,-16.5).curveTo(-24.8,-12.9,-0,-12.9).curveTo(24.7,-12.9,42.1,-16.5).curveTo(58.1,-19.8,59.6,-24.5).moveTo(68.9,-24.5).curveTo(69,-24.1,69,-23.7).lineTo(69,-23.5).lineTo(68.9,6.5).curveTo(69,6.8,69,7.2).curveTo(69,14.5,48.7,19.5).curveTo(43.3,20.8,37.3,21.8).curveTo(20.9,24.5,0,24.5).curveTo(-0.9,24.5,-1.8,24.5).curveTo(-29.2,24.4,-48.8,19.5).curveTo(-68.8,14.5,-69,7.3).lineTo(-69,-23.4).moveTo(69,-23.5).curveTo(68.8,-16.2,48.7,-11.2).curveTo(43.3,-9.9,37.3,-9).curveTo(34.7,-8.5,32.2,-8.2).curveTo(17.7,-6.3,0,-6.3).curveTo(-0.9,-6.3,-1.8,-6.3).curveTo(-18.4,-6.4,-32.2,-8.2).curveTo(-41.1,-9.4,-48.8,-11.2).curveTo(-68.8,-16.2,-69,-23.4).curveTo(-69,-23.5,-69,-23.6).curveTo(-69,-24,-69,-24.5);
	this.shape_27.setTransform(168.1,460.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginLinearGradientFill(["#F5A406","#FFDF77","#F5A406"],[0.02,0.573,1],-82.3,-168.2,72.7,-168.2).beginStroke().moveTo(-1.8,24).curveTo(-29.2,23.9,-48.8,19).curveTo(-68.8,14,-69,6.8).lineTo(-69,-23.9).curveTo(-68.8,-16.7,-48.8,-11.7).curveTo(-41.1,-9.9,-32.2,-8.7).curveTo(-18.4,-6.9,-1.8,-6.8).lineTo(0,-6.8).curveTo(17.7,-6.8,32.2,-8.7).lineTo(37.3,-9.5).curveTo(43.3,-10.4,48.7,-11.7).curveTo(68.8,-16.7,69,-24).lineTo(68.9,6).lineTo(69,6.7).curveTo(69,14,48.7,19).curveTo(43.3,20.3,37.3,21.3).curveTo(20.9,24,0,24).lineTo(-1.8,24).closePath();
	this.shape_28.setTransform(168.1,461.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#D97700").beginStroke().moveTo(-1.8,9.1).curveTo(-18.4,9,-32.2,7.2).curveTo(-41.1,6,-48.8,4.2).curveTo(-68.8,-0.8,-69,-8).lineTo(-69,-8.2).lineTo(-69,-9.1).lineTo(-59.6,-9.1).curveTo(-58.3,-4.4,-42.3,-1.1).curveTo(-24.8,2.5,-0,2.5).curveTo(24.7,2.5,42.1,-1.1).curveTo(58.1,-4.4,59.6,-9.1).lineTo(68.9,-9.1).lineTo(69,-8.3).lineTo(69,-8.1).curveTo(68.8,-0.8,48.7,4.2).curveTo(43.3,5.5,37.3,6.4).lineTo(32.2,7.2).curveTo(17.7,9.1,0,9.1).lineTo(-1.8,9.1).closePath();
	this.shape_29.setTransform(168.1,445.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill().beginStroke("#930404").setStrokeStyle(1,1,1).moveTo(-83,-26.9).curveTo(-83,-27,-83,-27.1).curveTo(-82.9,-27.7,-82.7,-28.2).curveTo(-81.9,-30.5,-80.9,-32.1).curveTo(-79.3,-34.5,-77.3,-36.2).curveTo(-75.9,-37.4,-74.2,-38.2).curveTo(-72.8,-38.9,-72.2,-39.1).curveTo(-70.3,-39.7,-64.5,-40.6).curveTo(-47.8,-42.9,-37.9,-43.1).curveTo(-34.9,-43.3,-11.1,-43.1).curveTo(-9.6,-43.1,-8,-43.1).curveTo(-5.6,-43,-3.2,-43).curveTo(-1.5,-43,0.2,-43).curveTo(1.9,-43,3.8,-43).curveTo(5.9,-43,8.1,-43).curveTo(10.1,-43,12.1,-43).curveTo(14,-43,15.9,-43).curveTo(17.6,-43.1,19.4,-43.2).curveTo(35.2,-43.3,37.9,-43.1).curveTo(47.7,-42.9,64.4,-40.6).curveTo(70.2,-39.7,72.1,-39.1).curveTo(72.8,-38.9,74.1,-38.2).curveTo(76.5,-37.1,78.6,-35).curveTo(79.1,-34.5,79.6,-33.8).curveTo(80.2,-33,80.9,-32.1).curveTo(82.1,-30.2,83,-27.1).curveTo(83,-27,83,-26.9).lineTo(83.1,-26.9).curveTo(85.5,-26.9,87.8,-26.3).curveTo(90.7,-25.6,93.3,-23.9).curveTo(93.6,-23.6,94,-23.3).curveTo(98.1,-20.2,98.8,-16.1).moveTo(-83,-26.9).curveTo(-83.7,-23.8,-81.8,-20.3).curveTo(-81.7,-20.2,-81.7,-20.2).lineTo(-81.7,-20.1).lineTo(-81.3,-19.7).curveTo(-80.1,-17.7,-77.6,-15.6).curveTo(-74.9,-13.6,-72,-11.8).curveTo(-64.2,-7.1,-53.1,-4).curveTo(-50.4,-3.4,-47.7,-2.7).curveTo(-44.9,-2.2,-41.6,-1.3).curveTo(-38.3,-0.5,-33.8,-0.1).curveTo(-29.4,0.4,-24.5,0.9).curveTo(-19.5,1.3,-13.9,1.6).curveTo(-9.2,2,1.9,2.1).curveTo(9.1,2,13.9,1.6).curveTo(19.5,1.3,24.4,0.9).curveTo(29.3,0.4,33.8,-0.1).curveTo(38.3,-0.5,41.6,-1.3).curveTo(44.9,-2.2,47.7,-2.7).curveTo(50.4,-3.4,53,-4).curveTo(64.2,-7.1,72,-11.8).curveTo(73.5,-12.8,75.1,-13.8).curveTo(76.3,-14.7,77.6,-15.6).curveTo(80.1,-17.7,81.3,-19.7).lineTo(81.6,-20.1).curveTo(81.7,-20.2,81.8,-20.3).curveTo(82.1,-21,82.4,-21.7).curveTo(83.6,-24.4,83,-26.9).moveTo(-98.8,-16.1).curveTo(-98.9,-15.3,-98.9,-14.5).curveTo(-98.9,-14,-98.7,-13).curveTo(-98.7,-12.7,-98.5,-12.3).curveTo(-98.3,-11.5,-97.9,-10.8).curveTo(-97,-9.1,-95.3,-7.2).curveTo(-95.2,-7.1,-95.1,-7).lineTo(-91.2,-3.8).curveTo(-85.9,0.1,-78.6,3.5).curveTo(-56.1,13.9,-24.3,15.2).curveTo(-23.4,15.2,-22.4,15.2).curveTo(-11.5,16.4,1.9,16.3).curveTo(11.5,16.4,22.4,15.2).curveTo(23.4,15.2,24.2,15.2).curveTo(56.1,13.9,78.6,3.5).curveTo(85.8,0.1,91.2,-3.8).lineTo(95.1,-7).curveTo(97.6,-9.8,98.5,-12.3).curveTo(98.5,-12.3,98.6,-12.4).curveTo(98.6,-12.7,98.7,-13).curveTo(98.9,-14,98.9,-14.5).curveTo(98.9,-15.3,98.8,-16.1).lineTo(102,-16.1).curveTo(102.2,-16.1,102.3,-16.1).curveTo(103.2,-16.1,104.2,-15.8).curveTo(105.2,-15.7,106.3,-15.4).curveTo(106.6,-15.2,107,-15.1).curveTo(112.6,-13,115.4,-7.7).lineTo(116,-5.4).lineTo(116.3,-2.6).curveTo(116.3,-1.6,116.1,-0.6).moveTo(-116.1,-0.6).curveTo(-115.6,2.1,-113.9,4.2).curveTo(-110.2,7.9,-104.2,12.3).curveTo(-97,17.4,-72.6,26.5).curveTo(-49,35.2,1.9,35.8).curveTo(2.1,35.8,2.3,35.8).curveTo(2.6,35.8,2.8,35.8).curveTo(48.9,35.2,72.6,26.5).curveTo(97,17.4,104.2,12.3).curveTo(106,11,107.6,9.8).curveTo(111.3,6.9,113.9,4.2).curveTo(114.2,3.8,114.5,3.5).curveTo(115.1,2.5,115.5,1.3).curveTo(115.9,0.4,116.1,-0.6).curveTo(116.4,-0.4,116.7,-0.1).curveTo(117.7,1,118.4,2.8).curveTo(118.5,3.1,118.7,3.5).curveTo(118.9,3.8,119,4.2).curveTo(119.1,4.5,119.1,4.7).lineTo(119.4,5.7).curveTo(119.7,7.4,118.9,9.5).curveTo(118.5,10.4,118,11.3).curveTo(114.8,17.1,104.9,23.1).curveTo(99.8,26.1,94.6,27.9).curveTo(84.3,31.8,62,37.7).curveTo(39.7,43.4,2.4,43.2).curveTo(-39.7,43.4,-62,37.7).curveTo(-84.3,31.8,-94.6,27.9).curveTo(-99.9,26.1,-105,23.1).curveTo(-115.1,16.9,-118.2,11).curveTo(-118.6,10.3,-118.9,9.5).curveTo(-119,9.1,-119.1,8.8).curveTo(-119.7,7.1,-119.5,5.7).lineTo(-119.1,4.7).curveTo(-119.1,4.5,-119,4.2).curveTo(-118.9,3.9,-118.8,3.6).curveTo(-117.8,1.2,-116.8,-0.1).curveTo(-116.4,-0.4,-116.1,-0.6).curveTo(-116.3,-1.6,-116.3,-2.6).lineTo(-116,-5.4).lineTo(-115.4,-7.7).curveTo(-114.9,-8.7,-114.3,-9.5).curveTo(-114.1,-9.9,-113.9,-10.1).curveTo(-111.2,-13.6,-107.1,-15.1).curveTo(-105.8,-15.6,-104.7,-15.7).curveTo(-103.4,-16.1,-102.3,-16.1).curveTo(-102.2,-16.1,-102.1,-16.1).lineTo(-98.8,-16.1).curveTo(-98.2,-20.2,-94,-23.3).curveTo(-92.3,-24.6,-90.4,-25.5).curveTo(-89.2,-26,-88,-26.3).curveTo(-85.7,-26.9,-83.1,-26.9).lineTo(-83,-26.9);
	this.shape_30.setTransform(167.7,500.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#D91313").beginStroke().moveTo(-31.7,39.4).lineTo(-32.4,39.3).lineTo(-33.3,39.2).curveTo(-88.8,31.4,-111.5,12.2).curveTo(-114.6,9.6,-117.2,6.7).lineTo(-118.6,5).curveTo(-117.6,2.6,-116.6,1.3).lineTo(-116,0.8).curveTo(-115.4,3.5,-113.7,5.6).curveTo(-110,9.3,-104,13.7).curveTo(-96.9,18.8,-72.4,27.9).curveTo(-48.8,36.6,2,37.2).lineTo(2.5,37.2).lineTo(3,37.2).curveTo(49.1,36.6,72.8,27.9).curveTo(97.2,18.8,104.3,13.7).lineTo(107.8,11.2).curveTo(111.5,8.3,114.1,5.6).lineTo(114.7,4.9).curveTo(115.3,3.9,115.7,2.7).curveTo(116,1.8,116.2,0.8).lineTo(116.9,1.3).curveTo(117.8,2.4,118.6,4.2).curveTo(118.1,5.4,117.5,6.6).lineTo(116.2,8.6).curveTo(114.2,11.4,111.2,13.8).curveTo(74,41.8,8.9,41.8).curveTo(-10.2,41.8,-31.7,39.4).closePath().moveTo(-46.4,19).curveTo(-91.5,8.9,-101.6,-5.3).curveTo(-103.1,-7.5,-103.9,-9.9).curveTo(-104.6,-12.1,-104.5,-14.3).curveTo(-103.2,-14.7,-102.1,-14.7).lineTo(-101.9,-14.7).lineTo(-98.6,-14.7).curveTo(-98.8,-13.9,-98.8,-13.1).lineTo(-98.5,-11.6).lineTo(-98.3,-10.9).lineTo(-97.7,-9.4).curveTo(-96.8,-7.7,-95.1,-5.8).lineTo(-94.9,-5.6).lineTo(-91,-2.4).curveTo(-85.7,1.5,-78.5,4.9).curveTo(-55.9,15.3,-24.1,16.6).lineTo(-22.3,16.6).curveTo(-11.3,17.8,2,17.7).curveTo(11.7,17.8,22.6,16.6).lineTo(24.4,16.6).curveTo(56.3,15.3,78.8,4.9).curveTo(86,1.5,91.4,-2.4).lineTo(95.3,-5.6).curveTo(97.8,-8.4,98.7,-10.9).lineTo(98.8,-11).lineTo(98.8,-11.6).lineTo(99,-13.1).lineTo(98.9,-14.7).lineTo(102.2,-14.7).lineTo(102.5,-14.7).curveTo(103.4,-14.7,104.4,-14.4).curveTo(104.7,-11.8,104,-9.2).curveTo(100.1,5.2,65.8,15.1).curveTo(38.9,22.4,4.2,22.4).curveTo(-19.4,22.4,-46.4,19).closePath().moveTo(-86.8,-19.8).curveTo(-87.8,-22.2,-87.8,-24.9).curveTo(-85.5,-25.5,-83,-25.5).lineTo(-82.9,-25.5).curveTo(-83.5,-22.4,-81.6,-18.9).lineTo(-81.5,-18.8).lineTo(-81.5,-18.7).lineTo(-81.1,-18.3).curveTo(-79.9,-16.3,-77.5,-14.2).curveTo(-74.7,-12.2,-71.9,-10.4).curveTo(-64,-5.7,-52.9,-2.6).lineTo(-47.6,-1.3).curveTo(-44.8,-0.8,-41.4,0.1).curveTo(-38.2,0.9,-33.6,1.3).lineTo(-24.3,2.3).lineTo(-13.7,3).curveTo(-9,3.4,2,3.5).curveTo(9.3,3.4,14.1,3).lineTo(24.6,2.3).lineTo(34,1.3).curveTo(38.5,0.9,41.8,0.1).curveTo(45,-0.8,47.8,-1.3).lineTo(53.2,-2.6).curveTo(64.4,-5.7,72.1,-10.4).lineTo(75.3,-12.4).lineTo(77.8,-14.2).curveTo(80.2,-16.3,81.5,-18.3).lineTo(81.8,-18.7).lineTo(81.9,-18.9).lineTo(82.6,-20.3).curveTo(83.8,-23,83.2,-25.5).lineTo(83.3,-25.5).curveTo(85.7,-25.5,88,-24.9).curveTo(88.5,-21.8,87.9,-19).curveTo(86.2,-11.8,77,-6.6).curveTo(56.9,4.9,0.8,7.4).curveTo(-78.6,4.5,-86.8,-19.8).closePath().moveTo(-74.8,-29.7).curveTo(-76.4,-32.1,-77.2,-34.8).curveTo(-75.7,-36,-74,-36.8).curveTo(-72.7,-37.5,-72,-37.7).curveTo(-70.1,-38.3,-64.3,-39.2).curveTo(-47.6,-41.5,-37.8,-41.7).curveTo(-34.7,-41.9,-11,-41.7).lineTo(-7.9,-41.7).lineTo(-3,-41.6).lineTo(0.4,-41.6).lineTo(4,-41.6).lineTo(8.3,-41.6).lineTo(12.3,-41.6).lineTo(16.1,-41.6).lineTo(19.6,-41.8).curveTo(35.4,-41.9,38.1,-41.7).curveTo(47.9,-41.5,64.6,-39.2).curveTo(70.4,-38.3,72.3,-37.7).curveTo(73,-37.5,74.3,-36.8).curveTo(76.7,-35.7,78.8,-33.6).curveTo(78,-31.2,76.3,-29).curveTo(63.6,-12.3,1.6,-10.1).curveTo(-62.2,-10.9,-74.8,-29.7).closePath();
	this.shape_31.setTransform(167.6,499.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#F04040").beginStroke().moveTo(2.5,37.2).curveTo(-39.6,37.4,-61.9,31.6).curveTo(-84.2,25.8,-94.5,21.9).curveTo(-99.8,20,-104.9,17).curveTo(-115,10.8,-118.1,5).lineTo(-117.2,-0.8).curveTo(-114.7,2.1,-111.6,4.8).curveTo(-88.9,23.9,-33.3,31.7).lineTo(-32.5,31.9).lineTo(-31.8,31.9).curveTo(63.1,42.5,111.1,6.4).curveTo(114.2,4,116.2,1.1).lineTo(118.1,5.3).curveTo(114.9,11.1,105,17).curveTo(99.9,20,94.7,21.9).curveTo(84.4,25.8,62.1,31.6).curveTo(40.5,37.2,5,37.2).lineTo(2.5,37.2).closePath().moveTo(2.4,29.7).lineTo(2,29.7).curveTo(-48.9,29.2,-72.5,20.4).curveTo(-96.9,11.3,-104.1,6.2).curveTo(-110.1,1.9,-113.8,-1.8).curveTo(-115.5,-4,-116,-6.7).curveTo(-114.2,-10.6,-112.4,-13).curveTo(-100,3.1,-88.6,4).curveTo(-105.4,-6.2,-107.3,-17.4).curveTo(-105.6,-18,-104,-17.4).curveTo(-103.2,-15,-101.7,-12.7).curveTo(-91.5,1.4,-46.5,11.6).curveTo(20.5,19.9,65.8,7.6).curveTo(100,-2.3,103.9,-16.6).curveTo(105.7,-17,107.4,-16.3).curveTo(111.8,-14.3,115.6,-4.7).curveTo(115.2,-3.6,114.6,-2.6).lineTo(114,-1.8).curveTo(111.4,0.8,107.7,3.7).lineTo(104.3,6.2).curveTo(97.1,11.3,72.7,20.4).curveTo(49,29.2,2.9,29.7).lineTo(2.4,29.7).closePath().moveTo(2,10.2).curveTo(-11.4,10.3,-22.3,9.2).lineTo(-24.2,9.1).curveTo(-56,7.8,-78.5,-2.6).curveTo(-85.8,-6,-91.1,-9.8).lineTo(-95,-13).lineTo(-95.2,-13.2).curveTo(-96.9,-15.1,-97.8,-16.8).curveTo(-94.5,-25.3,-90.4,-26.9).curveTo(-88.7,-27.7,-86.9,-27.2).curveTo(-78.6,-3,0.8,-0).curveTo(56.8,-2.5,76.9,-14.1).curveTo(86.1,-19.3,87.8,-26.5).curveTo(89.3,-26.8,90.9,-26.3).curveTo(95.1,-25.1,98.7,-18.5).lineTo(98.6,-18.3).curveTo(97.7,-15.9,95.2,-13).lineTo(91.3,-9.8).curveTo(85.9,-6,78.7,-2.6).curveTo(56.2,7.8,24.3,9.1).lineTo(22.5,9.2).curveTo(12.5,10.2,3.5,10.2).lineTo(2,10.2).closePath().moveTo(-13.8,-4.4).lineTo(-24.4,-5.2).lineTo(-33.7,-6.1).curveTo(-38.2,-6.6,-41.5,-7.4).curveTo(-44.8,-8.3,-47.6,-8.8).lineTo(-53,-10.1).curveTo(-64.1,-13.1,-71.9,-17.8).curveTo(-74.8,-19.7,-77.5,-21.7).curveTo(-80,-23.8,-81.2,-25.8).lineTo(-81.6,-26.1).lineTo(-81.6,-26.2).curveTo(-80.8,-32.3,-77.8,-35.3).curveTo(-76.5,-36.5,-74.9,-37.2).curveTo(-62.2,-18.4,1.5,-17.6).curveTo(63.5,-19.8,76.2,-36.4).curveTo(77.4,-36,78.6,-34.7).curveTo(80.5,-32.5,82.5,-27.7).lineTo(81.9,-26.4).lineTo(81.7,-26.1).lineTo(81.4,-25.8).curveTo(80.2,-23.8,77.7,-21.7).lineTo(75.2,-19.8).lineTo(72.1,-17.8).curveTo(64.3,-13.1,53.1,-10.1).lineTo(47.8,-8.8).curveTo(45,-8.3,41.7,-7.4).curveTo(38.4,-6.6,33.9,-6.1).lineTo(24.5,-5.2).lineTo(14,-4.4).curveTo(9.2,-4.1,2,-3.9).curveTo(-9.1,-4.1,-13.8,-4.4).closePath();
	this.shape_32.setTransform(167.6,506.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FF7070").beginStroke().moveTo(116.1,19.6).lineTo(117.3,17.7).curveTo(117.9,16.4,118.4,15.2).lineTo(118.7,15.9).lineTo(119,16.7).lineTo(119.1,17.1).lineTo(119.4,18.1).curveTo(119.7,19.9,118.9,21.9).lineTo(118,23.7).closePath().moveTo(-118.9,21.9).lineTo(-119.1,21.2).curveTo(-119.7,19.6,-119.5,18.1).lineTo(-119.1,17.1).lineTo(-119,16.7).lineTo(-118.8,16).lineTo(-117.3,17.7).lineTo(-118.2,23.4).lineTo(-118.9,21.9).closePath().moveTo(-112.5,5.4).curveTo(-114.3,7.9,-116.1,11.8).curveTo(-116.3,10.8,-116.3,9.8).lineTo(-116,7).lineTo(-115.4,4.7).curveTo(-114.9,3.8,-114.3,2.9).lineTo(-113.9,2.3).curveTo(-111.2,-1.2,-107.1,-2.7).curveTo(-105.8,-3.2,-104.7,-3.3).curveTo(-104.8,-1.1,-104.1,1.1).curveTo(-105.7,0.5,-107.4,1.1).curveTo(-105.5,12.3,-88.7,22.5).curveTo(-100.1,21.6,-112.5,5.4).closePath().moveTo(107.3,2.2).curveTo(105.6,1.4,103.8,1.8).curveTo(104.5,-0.7,104.2,-3.4).lineTo(106.3,-2.9).lineTo(107,-2.7).curveTo(112.6,-0.6,115.4,4.7).lineTo(116,7).lineTo(116.3,9.8).curveTo(116.3,10.8,116.1,11.8).curveTo(115.9,12.8,115.5,13.7).curveTo(111.7,4.1,107.3,2.2).closePath().moveTo(-98.5,0.1).lineTo(-98.7,-0.6).lineTo(-98.9,-2).curveTo(-98.9,-2.9,-98.8,-3.7).curveTo(-98.2,-7.8,-94,-10.9).curveTo(-92.3,-12.2,-90.4,-13).curveTo(-89.2,-13.6,-88,-13.8).curveTo(-87.9,-11.2,-87,-8.8).curveTo(-88.8,-9.2,-90.5,-8.4).curveTo(-94.6,-6.8,-97.9,1.7).lineTo(-98.5,0.1).closePath().moveTo(90.8,-7.9).curveTo(89.2,-8.3,87.7,-8).curveTo(88.3,-10.8,87.8,-13.9).curveTo(90.7,-13.1,93.3,-11.5).lineTo(94,-10.9).curveTo(98.1,-7.8,98.8,-3.7).lineTo(98.9,-2).lineTo(98.7,-0.6).lineTo(98.6,0).curveTo(95,-6.6,90.8,-7.9).closePath().moveTo(-81.8,-7.9).curveTo(-83.7,-11.3,-83,-14.5).lineTo(-83,-14.6).lineTo(-82.7,-15.7).curveTo(-81.9,-18.1,-80.9,-19.7).curveTo(-79.3,-22.1,-77.3,-23.7).curveTo(-76.6,-21.1,-75,-18.7).curveTo(-76.6,-18.1,-77.9,-16.8).curveTo(-80.9,-13.8,-81.7,-7.8).lineTo(-81.8,-7.9).closePath().moveTo(78.5,-16.3).curveTo(77.3,-17.6,76.1,-18).curveTo(77.8,-20.2,78.6,-22.6).lineTo(79.6,-21.4).lineTo(80.9,-19.7).curveTo(82.1,-17.8,83,-14.6).lineTo(83,-14.5).curveTo(83.6,-12,82.4,-9.2).curveTo(80.4,-14,78.5,-16.3).closePath();
	this.shape_33.setTransform(167.7,488.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("rgba(0,0,0,0.4)").beginStroke().moveTo(-60,21.3).curveTo(-72.9,18.8,-84.4,15).curveTo(-119.3,3.8,-119.3,-12.1).curveTo(-119.3,-28,-84.4,-39.4).curveTo(-49.4,-50.6,-0,-50.6).curveTo(49.3,-50.6,84.3,-39.4).curveTo(119.3,-28,119.3,-12).curveTo(119.3,3.8,84.3,15).curveTo(71.7,19.1,57.1,21.8).curveTo(62.9,49.8,-3.2,50.6).curveTo(-64.8,49.1,-60,21.3).closePath();
	this.shape_34.setTransform(167.3,529.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(130));

	// Layer 5
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(-5.9,-6.2).curveTo(-5.2,-6.6,-5.2,-6.7).curveTo(-4.1,-7.5,-3.6,-7.8).curveTo(0.4,-10.4,4,-12.7).curveTo(6.2,-14,8.4,-15.3).lineTo(8.4,-15.4).curveTo(13.3,-18.4,16.2,-21.6).curveTo(16.3,-21.8,16.5,-22).curveTo(16.8,-22.7,17.1,-23.4).curveTo(17.1,-23.5,17.1,-23.5).curveTo(18,-25.8,17.2,-29.2).moveTo(13.8,-29.2).curveTo(14,-29,14.2,-28.8).curveTo(14.8,-26.6,14.4,-25.2).lineTo(14.4,-25.1).curveTo(14.2,-24.8,14.1,-24.4).curveTo(11.4,-21.6,7.1,-18.9).curveTo(5.1,-17.8,3,-16.4).curveTo(-0.8,-14.1,-4.9,-11.4).curveTo(-8.9,-8.8,-12.4,-6.5).curveTo(-12.4,-6.5,-12.5,-6.5).curveTo(-12.7,-6.4,-12.9,-6.2).lineTo(-13.2,-6.1).moveTo(-12.9,-6.2).curveTo(-13,-6.1,-13.1,-6.1).lineTo(-13.2,-6.1).lineTo(-17.6,-3.8).moveTo(-17.6,0.7).curveTo(-17.3,0.5,-17,0.4).curveTo(-14.8,-0.8,-12.4,-2.2).lineTo(-12.4,-2.2).lineTo(-5.9,-6.2).curveTo(-2.9,-6.8,-0.7,-6.9).curveTo(-0.5,-6.9,-0.2,-6.9).lineTo(6,-7).curveTo(6.1,-7,6.1,-7).curveTo(14.2,-6.3,16.6,-2.3).curveTo(16.8,-2.1,16.9,-1.8).curveTo(17.4,-0.1,17.6,1.5).lineTo(17.6,1.5).curveTo(17.6,2,17.6,2.5).curveTo(17.6,4.1,17.1,5.4).curveTo(16.9,5.9,16.6,6.4).curveTo(16.6,6.5,16.5,6.5).curveTo(14.8,9.3,12.7,11.3).lineTo(12.7,11.3).curveTo(11.6,12.4,10.4,13.2).curveTo(9.4,13.9,8.4,14.5).lineTo(8.3,14.6).curveTo(7.4,15.2,6.4,15.7).curveTo(6.3,15.7,6.3,15.7).lineTo(6.2,15.8).curveTo(3.2,17.8,-2.2,20.7).lineTo(-2.3,20.7).curveTo(-5.9,22.6,-8.3,24).moveTo(-17.6,24.9).lineTo(-15.8,24).curveTo(-15.5,23.8,-15.2,23.6).curveTo(-14,22.9,-12.1,21.8).curveTo(-9.4,20.2,-3.4,17).curveTo(-0.1,15.2,2.4,13.8).curveTo(3.8,12.9,5,12.2).lineTo(5,12.2).curveTo(6,11.6,7.1,11).lineTo(7.1,11).curveTo(8.3,10.2,9.4,9.3).curveTo(10.2,8.8,11,8).curveTo(12.7,6.4,14.1,4.1).curveTo(14.3,3.9,14.4,3.6).curveTo(14.5,3.1,14.5,2.5).curveTo(14.6,2,14.5,1.5).lineTo(14.5,1.5).curveTo(14.4,0.8,14.2,0).curveTo(12.2,-2.4,6.4,-2.9).curveTo(6.1,-3.1,5.9,-3.1).lineTo(-0.2,-2.9).curveTo(-0.5,-2.9,-0.7,-2.9).curveTo(-5.8,-2.8,-12.4,-2.2).moveTo(-9.2,24.5).lineTo(-9.3,24.5).curveTo(-8.9,24.2,-8.3,24).lineTo(-9.2,24.5).lineTo(-15.2,28).lineTo(-15.3,28).curveTo(-16.5,28.6,-17.6,29.2);
	this.shape_35.setTransform(189.9,384.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-17.6,24.9).lineTo(-15.8,24).lineTo(-15.2,23.6).lineTo(-12.1,21.8).curveTo(-9.4,20.2,-3.4,17).lineTo(2.4,13.8).lineTo(5,12.2).lineTo(5,12.2).lineTo(7.1,11).lineTo(7.1,11).curveTo(8.3,10.2,9.4,9.3).curveTo(10.2,8.8,11,8).curveTo(12.7,6.4,14.1,4.1).lineTo(14.4,3.6).lineTo(14.5,2.5).lineTo(14.5,1.5).lineTo(14.5,1.5).lineTo(14.2,0).curveTo(12.2,-2.4,6.4,-2.9).lineTo(5.9,-3.1).lineTo(-0.2,-2.9).lineTo(-0.7,-2.9).curveTo(-5.8,-2.8,-12.4,-2.2).lineTo(-5.9,-6.2).lineTo(-12.4,-2.2).lineTo(-12.4,-2.2).lineTo(-17,0.4).lineTo(-17.6,0.7).lineTo(-17.6,-3.8).lineTo(-13.2,-6.1).lineTo(-13.1,-6.1).lineTo(-12.9,-6.2).lineTo(-12.5,-6.5).lineTo(-12.4,-6.5).lineTo(-4.9,-11.4).curveTo(-0.8,-14.1,3,-16.4).lineTo(7.1,-18.9).curveTo(11.4,-21.6,14.1,-24.4).lineTo(14.4,-25.1).lineTo(14.4,-25.2).curveTo(14.8,-26.6,14.2,-28.8).lineTo(13.8,-29.2).lineTo(17.2,-29.2).curveTo(18,-25.8,17.1,-23.5).lineTo(17.1,-23.4).lineTo(16.5,-22).lineTo(16.2,-21.6).curveTo(13.3,-18.4,8.4,-15.4).lineTo(8.4,-15.3).lineTo(4,-12.7).lineTo(-3.6,-7.8).lineTo(-5.2,-6.7).lineTo(-5.9,-6.2).curveTo(-2.9,-6.8,-0.7,-6.9).lineTo(-0.2,-6.9).lineTo(6,-7).lineTo(6.1,-7).curveTo(14.2,-6.3,16.6,-2.3).lineTo(16.9,-1.8).curveTo(17.4,-0.1,17.6,1.5).lineTo(17.6,1.5).lineTo(17.6,2.5).curveTo(17.6,4.1,17.1,5.4).lineTo(16.6,6.4).lineTo(16.5,6.5).curveTo(14.8,9.3,12.7,11.3).lineTo(12.7,11.3).curveTo(11.6,12.4,10.4,13.2).curveTo(9.4,13.9,8.4,14.5).lineTo(8.3,14.6).lineTo(6.4,15.7).lineTo(6.3,15.7).lineTo(6.2,15.8).curveTo(3.2,17.8,-2.2,20.7).lineTo(-2.3,20.7).curveTo(-5.9,22.6,-8.3,24).lineTo(-9.3,24.5).lineTo(-9.2,24.5).lineTo(-15.2,28).lineTo(-15.3,28).lineTo(-17.6,29.2).closePath();
	this.shape_36.setTransform(189.9,384.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35}]},104).to({state:[]},25).wait(1));

	// Layer 10
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(-18.2,15.3).curveTo(-15.1,13.8,-11.5,11.7).lineTo(-11.5,11.7).lineTo(-5,7.6).curveTo(-4.3,7.2,-4.3,7.1).curveTo(-3.2,6.4,-2.7,6.1).curveTo(1.3,3.4,4.9,1.2).curveTo(7.1,-0.2,9.3,-1.5).lineTo(9.3,-1.5).curveTo(14.2,-4.6,17.1,-7.7).curveTo(17.2,-7.9,17.4,-8.2).curveTo(17.7,-8.9,18,-9.5).curveTo(18,-9.6,18,-9.7).curveTo(18.9,-12,18.1,-15.4).moveTo(14.7,-15.4).curveTo(14.9,-15.2,15.1,-14.9).curveTo(15.7,-12.7,15.3,-11.3).lineTo(15.3,-11.2).curveTo(15.1,-10.9,15,-10.5).curveTo(12.3,-7.8,8,-5.1).curveTo(6,-3.9,3.9,-2.6).curveTo(0.1,-0.3,-4,2.5).curveTo(-8.1,5.1,-11.6,7.4).curveTo(-11.8,7.5,-12,7.6).curveTo(-12.1,7.7,-12.2,7.8).lineTo(-12.3,7.8).moveTo(-12,7.6).lineTo(-12.3,7.8).lineTo(-18.5,11);
	this.shape_37.setTransform(189,371);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-18.5,15.3).lineTo(-18.5,11).lineTo(-12.3,7.8).lineTo(-12.2,7.8).lineTo(-12,7.7).lineTo(-11.6,7.4).lineTo(-4,2.5).curveTo(0.1,-0.3,3.9,-2.6).lineTo(8,-5).curveTo(12.3,-7.7,15,-10.5).lineTo(15.3,-11.2).lineTo(15.3,-11.3).curveTo(15.7,-12.7,15.1,-14.9).lineTo(14.7,-15.4).lineTo(18.1,-15.4).curveTo(18.9,-11.9,18,-9.7).lineTo(18,-9.5).lineTo(17.4,-8.2).lineTo(17.1,-7.7).curveTo(14.2,-4.6,9.3,-1.5).lineTo(9.3,-1.4).lineTo(4.9,1.2).lineTo(-2.7,6.1).lineTo(-4.3,7.1).lineTo(-5,7.7).lineTo(-11.5,11.7).lineTo(-11.5,11.7).curveTo(-15.1,13.8,-18.2,15.3).closePath();
	this.shape_38.setTransform(189,371);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(16.6,-0.9).curveTo(7.9,2.2,-0.4,3.4).curveTo(-9.4,4.7,-12.5,2.9).curveTo(-13.3,2,-13.6,1.3).curveTo(-12.2,-1.7,-7.4,-2.8).curveTo(-1.6,-3.8,5.5,-3.9).lineTo(12.4,-3.7).lineTo(12.4,-7.9).lineTo(5.5,-7.9).curveTo(-1.9,-7.7,-7.8,-6.8).lineTo(-7.9,-6.7).curveTo(-15.1,-5,-16.5,0.2).curveTo(-16.6,0.5,-16.6,0.8).curveTo(-16.9,3.6,-14.2,6.2).curveTo(-14.1,6.3,-13.9,6.4).curveTo(-10.4,8.8,-0.1,7.4).curveTo(8.1,6.3,16.6,3.3);
	this.shape_39.setTransform(144.5,387.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-13.9,6.4).lineTo(-14.2,6.2).curveTo(-16.9,3.6,-16.6,0.8).lineTo(-16.5,0.2).curveTo(-15.1,-5,-7.9,-6.7).lineTo(-7.8,-6.8).curveTo(-1.9,-7.7,5.5,-7.9).lineTo(12.4,-7.9).lineTo(12.4,-3.7).lineTo(5.5,-3.9).curveTo(-1.6,-3.8,-7.4,-2.8).curveTo(-12.2,-1.7,-13.6,1.3).curveTo(-13.3,2,-12.5,2.9).curveTo(-9.4,4.7,-0.4,3.4).curveTo(7.9,2.2,16.6,-0.9).lineTo(16.6,3.3).curveTo(8.1,6.3,-0.1,7.4).curveTo(-3.8,7.9,-6.7,7.9).curveTo(-11.7,7.9,-13.9,6.4).closePath();
	this.shape_40.setTransform(144.5,387.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37}]},68).to({state:[]},13).to({state:[{t:this.shape_40},{t:this.shape_39}]},15).to({state:[]},33).wait(1));

	// Layer 4
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(10.1,-20.9).lineTo(9.8,-20.7).lineTo(9.9,-20.7).curveTo(10,-20.8,10.1,-20.9).closePath().moveTo(10.1,-20.9).curveTo(10.1,-20.9,10.1,-20.9).moveTo(-10.1,-7.6).curveTo(-6.3,-8.8,-2.4,-10.3).curveTo(-0.3,-11.1,2,-12.2).curveTo(5.7,-14,10.1,-16.6).moveTo(9.8,-20.7).lineTo(0.5,-15.8).curveTo(-1.1,-15,-2.5,-14.4).curveTo(-2.9,-14.3,-3.3,-14.1).curveTo(-6.7,-12.8,-10.1,-11.8).moveTo(-10.1,16.8).curveTo(-6.7,15.7,-3.3,14.4).lineTo(-3.3,14.5).curveTo(-1.4,13.6,0.7,12.7).lineTo(7.2,9.3).curveTo(7.5,9.1,7.8,9).curveTo(8.7,8.4,10.1,7.6).moveTo(10.1,12).lineTo(7.8,13.3).lineTo(7.7,13.3).curveTo(2,16.5,-2.4,18.2).curveTo(-6.3,19.7,-10.1,20.9);
	this.shape_41.setTransform(167,399.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill().beginStroke("#446083").setStrokeStyle(1,1,1).moveTo(-10.1,-13.9).lineTo(-10.1,-46.1).lineTo(10.1,-46.1).lineTo(10.1,-23).moveTo(10.1,9.9).lineTo(10.1,45.9).curveTo(-0.1,46.3,-10.1,45.9).lineTo(-10.1,18.8).moveTo(10.1,-18.7).lineTo(10.1,5.5).moveTo(-10.1,14.6).lineTo(-10.1,-9.7);
	this.shape_42.setTransform(167,401.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginLinearGradientFill(["#8597AD","#BACEE9","#8597AD"],[0.008,0.569,1],-10.1,0,10.1,0).beginStroke().moveTo(-10.1,45.9).lineTo(-10.1,18.8).curveTo(-6.3,17.6,-2.4,16.1).curveTo(2,14.4,7.7,11.2).lineTo(7.7,11.2).lineTo(10.1,9.9).lineTo(10.1,45.9).curveTo(5,46.1,-0.1,46.1).curveTo(-5.1,46.1,-10.1,45.9).closePath().moveTo(-10.1,-9.7).curveTo(-6.3,-10.9,-2.4,-12.4).curveTo(-0.4,-13.2,2,-14.3).curveTo(5.7,-16.1,10.1,-18.7).lineTo(10.1,5.5).lineTo(7.7,6.9).lineTo(7.2,7.2).lineTo(0.7,10.6).lineTo(-3.2,12.4).lineTo(-3.2,12.3).curveTo(-6.7,13.6,-10.1,14.6).closePath().moveTo(-10.1,-46.1).lineTo(10.1,-46.1).lineTo(10.1,-23).lineTo(10.1,-23).lineTo(9.7,-22.8).lineTo(0.4,-17.9).lineTo(-2.5,-16.5).lineTo(-3.2,-16.2).curveTo(-6.7,-14.9,-10.1,-13.9).closePath().moveTo(9.7,-22.8).lineTo(10.1,-23).lineTo(9.8,-22.8).closePath().moveTo(9.7,-22.8).closePath();
	this.shape_43.setTransform(167,401.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-10.1,16.8).curveTo(-6.7,15.7,-3.2,14.4).lineTo(-3.2,14.5).lineTo(0.7,12.7).lineTo(7.2,9.3).lineTo(7.7,9).lineTo(10.1,7.6).lineTo(10.1,12).lineTo(7.7,13.3).lineTo(7.7,13.3).curveTo(2,16.5,-2.4,18.2).curveTo(-6.3,19.7,-10.1,20.9).closePath().moveTo(-10.1,-11.8).curveTo(-6.7,-12.8,-3.2,-14.1).lineTo(-2.5,-14.4).lineTo(0.4,-15.8).lineTo(9.7,-20.7).lineTo(9.8,-20.7).lineTo(10.1,-20.9).lineTo(10.1,-20.9).lineTo(10.1,-16.6).curveTo(5.7,-14,2,-12.2).curveTo(-0.4,-11.1,-2.4,-10.3).curveTo(-6.3,-8.8,-10.1,-7.6).closePath();
	this.shape_44.setTransform(167,399.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},61).to({state:[]},20).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},15).to({state:[]},24).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[]},7).wait(2));

	// Layer 3
	this.instance_4 = new lib.gum("single",4);
	this.instance_4.parent = this;
	this.instance_4.setTransform(190.7,336.8,0.875,0.875,0,0,0,27.3,27.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},0).to({x:186.8,y:340.1},1).to({x:182.9,y:343.4},1).to({x:179,y:346.7},1).to({x:175.1,y:349.9},1).to({x:171.2,y:353.2},1).to({x:167,y:355.9},1).to({x:162.8,y:358.2},1).to({x:158.6,y:360.7},1).to({x:154.4,y:362.6},1).to({x:150.2,y:364.1},1).to({x:146.1,y:365.5},1).to({x:141.9,y:367.2},1).to({x:144.2,y:366.9},1).to({x:146.4,y:366},1).to({x:148.7,y:365.1},1).to({x:151,y:364.2},1).to({x:153.3,y:363.3},1).to({x:155.6,y:362.3},1).to({x:157.9,y:361.4},1).to({x:162.6,y:360.5},1).to({x:167.4,y:359.6},1).to({x:172.1,y:358.7},1).to({x:176.8,y:357.8},1).to({x:181.6,y:356.9},1).to({x:186.3,y:355.9},1).to({x:191.1,y:355},1).to({x:195.1,y:356.5},1).to({x:199.1,y:358.1},1).to({x:203.1,y:359.6},1).to({x:203.9,y:361.1},1).to({x:204.3,y:362.6},1).to({y:365.6},1).to({x:199.9,y:368.6},1).to({x:194.3,y:371.6},1).to({x:188.7,y:374.6},1).to({x:183.1,y:377.6},1).to({x:177.5,y:380.6},1).to({x:172.9,y:383},1).to({x:168.4,y:385.4},1).to({x:163.8,y:387.8},1).to({x:159.2,y:390.2},1).to({x:154.7,y:392.6},1).to({x:151.5,y:393.3},1).to({x:148.3,y:393.9},1).to({x:145.1,y:394.5},1).to({x:141.9,y:395.2},1).to({x:138.7,y:395.8},1).to({y:394},1).to({y:392.1},1).to({y:390.3},1).to({y:388.5},1).to({y:386.6},1).to({x:142.9,y:386.2},1).to({x:147.2,y:385.8},1).to({x:151.4,y:385.4},1).to({x:155.6,y:385},1).to({x:159.9,y:384.6},1).to({x:165.4,y:385},1).to({x:170.9,y:385.4},1).to({x:176.4,y:385.8},1).to({x:182,y:386.2},1).to({x:187.5,y:386.6},1).to({x:191,y:388.7},1).to({x:194.5,y:390.8},1).to({x:198,y:392.9},1).to({x:201.6,y:394.9},1).to({x:204.3,y:397},1).to({x:204.6,y:403.4},1).to({x:204.1,y:409.8},1).to({x:203.6,y:416.2},1).to({x:203.9,y:422.6},1).to({x:200.3,y:423.9},1).to({x:191.1,y:428.4},1).to({x:181.9,y:433.7},1).to({x:172.7,y:439},1).to({x:166.4,y:442.5},1).to({x:160,y:446.7},1).to({x:144.9,y:456.5},1).to({x:144.2,y:459.2},1).to({x:138.7,y:465},1).to({_off:true},1).wait(1));

	// 레이어 1
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(-1.2,0.7).lineTo(1.2,-0.7);
	this.shape_45.setTransform(175.9,412.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill().beginStroke("#446083").setStrokeStyle(1,1,1).moveTo(0,0.8).lineTo(0,-0.8);
	this.shape_46.setTransform(177.1,412.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(9,-22.3).lineTo(-0.3,-17.4).curveTo(-1.8,-16.6,-3.3,-15.9).curveTo(-3.6,-15.9,-4,-15.7).curveTo(-5.3,-15.2,-6.6,-14.8).curveTo(-15.3,-11.7,-23.6,-10.4).curveTo(-32.6,-9.2,-35.7,-11).curveTo(-36.5,-11.9,-36.8,-12.6).curveTo(-35.4,-15.6,-30.6,-16.7).curveTo(-24.8,-17.7,-17.7,-17.8).lineTo(-10.8,-17.6).lineTo(-10.8,-21.8).lineTo(-17.7,-21.8).curveTo(-25.1,-21.6,-31,-20.7).lineTo(-31.1,-20.6).curveTo(-38.3,-18.9,-39.7,-13.7).curveTo(-39.8,-13.4,-39.8,-13.1).curveTo(-40.1,-10.3,-37.4,-7.7).curveTo(-37.3,-7.6,-37.1,-7.5).curveTo(-33.6,-5.1,-23.3,-6.4).curveTo(-15.1,-7.6,-6.6,-10.6).curveTo(-4.9,-11.2,-3.1,-11.9).curveTo(-1.1,-12.7,1.3,-13.8).curveTo(2.2,-14.3,3.2,-14.8).curveTo(3.9,-15.1,4.6,-15.5).curveTo(4.9,-15.7,5.2,-15.8).curveTo(7.2,-16.9,9.4,-18.2).curveTo(9.6,-18.3,9.8,-18.4).lineTo(9.9,-18.4).lineTo(16.3,-22.4).curveTo(17,-22.9,17.1,-22.9).curveTo(18.1,-23.7,18.7,-24).curveTo(22.6,-26.7,26.2,-28.9).curveTo(28.5,-30.3,30.6,-31.6).lineTo(30.6,-31.6).curveTo(35.5,-34.7,38.4,-37.8).curveTo(38.6,-38,38.7,-38.3).curveTo(39.1,-38.9,39.3,-39.6).curveTo(39.4,-39.7,39.4,-39.8).curveTo(40.3,-42.1,39.5,-45.4).moveTo(36,-45.4).curveTo(36.2,-45.3,36.4,-45).curveTo(37,-42.8,36.6,-41.4).lineTo(36.6,-41.3).curveTo(36.5,-41,36.3,-40.6).curveTo(33.7,-37.9,29.4,-35.2).curveTo(27.4,-34,25.3,-32.7).curveTo(21.5,-30.4,17.3,-27.6).curveTo(13.3,-25,9.8,-22.7).curveTo(9.8,-22.7,9.8,-22.7).curveTo(9.6,-22.6,9.4,-22.5).curveTo(9.3,-22.5,9.3,-22.4).curveTo(9.2,-22.4,9.1,-22.3).lineTo(9,-22.3).moveTo(9.3,-22.4).lineTo(9,-22.3).moveTo(7,11.8).lineTo(7,11.8).curveTo(5.8,12.4,4.6,13).curveTo(0.3,15.3,-3.1,16.6).curveTo(-13.4,20.6,-23.3,22.1).curveTo(-33.6,23.4,-37.1,20.9).curveTo(-37.3,20.9,-37.4,20.8).curveTo(-40.1,18.2,-39.8,15.4).curveTo(-39.8,15.1,-39.7,14.8).curveTo(-38.3,9.6,-31.1,7.9).lineTo(-31,7.8).curveTo(-25.1,6.8,-17.7,6.8).lineTo(-10.8,7).lineTo(-10.8,10.9).lineTo(-17.7,10.7).curveTo(-24.8,10.8,-30.6,11.8).curveTo(-35.4,12.9,-36.6,15.7).curveTo(-36.5,16.6,-35.7,17.5).curveTo(-32.6,19.3,-23.6,18.1).curveTo(-14,16.7,-4,12.8).lineTo(-4,12.9).curveTo(-2.1,12.1,-0,11.1).lineTo(6.5,7.8).curveTo(6.7,7.6,7,7.4).curveTo(8,6.8,9.4,6.1).curveTo(9.8,5.8,10.2,5.6).curveTo(12.9,3.9,18.9,0.8).curveTo(22.2,-1,24.7,-2.4).curveTo(26.1,-3.3,27.2,-4).lineTo(27.3,-4).curveTo(28.3,-4.6,29.3,-5.3).lineTo(29.4,-5.3).curveTo(30.6,-6,31.7,-6.9).curveTo(32.5,-7.4,33.2,-8.2).curveTo(35,-9.9,36.4,-12.1).curveTo(36.5,-12.4,36.6,-12.6).curveTo(36.8,-13.1,36.8,-13.7).curveTo(36.8,-14.2,36.7,-14.7).lineTo(36.7,-14.8).curveTo(36.6,-15.4,36.4,-16.2).curveTo(34.4,-18.7,28.6,-19.2).curveTo(28.4,-19.3,28.2,-19.3).lineTo(22,-19.1).curveTo(21.8,-19.1,21.6,-19.1).curveTo(16.5,-19,9.9,-18.4).moveTo(16.3,-22.4).curveTo(19.4,-23.1,21.5,-23.1).curveTo(21.8,-23.1,22,-23.1).lineTo(28.3,-23.3).curveTo(28.3,-23.3,28.4,-23.3).curveTo(36.5,-22.6,38.9,-18.6).curveTo(39,-18.4,39.1,-18.1).curveTo(39.7,-16.3,39.8,-14.8).lineTo(39.8,-14.7).curveTo(39.8,-14.2,39.8,-13.7).curveTo(39.8,-12.1,39.3,-10.9).curveTo(39.1,-10.4,38.9,-9.9).curveTo(38.8,-9.8,38.8,-9.7).curveTo(37,-6.9,34.9,-4.9).lineTo(35,-4.9).curveTo(33.8,-3.9,32.6,-3.1).curveTo(31.6,-2.3,30.6,-1.8).lineTo(30.6,-1.7).curveTo(29.6,-1.1,28.6,-0.5).curveTo(28.6,-0.5,28.5,-0.5).lineTo(28.5,-0.4).curveTo(25.4,1.6,20,4.5).lineTo(20,4.5).curveTo(16.4,6.3,14,7.8).moveTo(13.1,8.3).lineTo(13.8,8.3).curveTo(13.9,8.3,13.9,8.4).curveTo(26.6,10.8,30.6,17.4).lineTo(30.7,17.5).curveTo(31.4,18.6,32,20.1).curveTo(32.8,22.1,33.4,24.8).curveTo(34.6,29.6,33.1,34.3).curveTo(32.5,36.2,31.4,38.3).curveTo(31,39.1,30.7,39.7).curveTo(29.9,41.3,28.1,43.5).curveTo(27.3,44.6,26.5,44.8).moveTo(13.1,8.3).lineTo(12.9,8.3).curveTo(13.4,8,14,7.8).closePath().moveTo(21,45.4).curveTo(23,44.5,26,40.6).curveTo(26.8,39.6,27.6,38.3).curveTo(30.3,34.3,30.6,29.3).curveTo(30.8,27,30.3,24.8).curveTo(29.5,21.9,28.4,20.1).lineTo(28.5,20.1).lineTo(28.4,20.1).curveTo(28.4,20.1,28.3,19.9).curveTo(24.7,14.4,13.5,12.4).lineTo(9.4,12).moveTo(9.4,10.4).lineTo(13.1,8.3);
	this.shape_47.setTransform(167.7,401.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#BBBBBB").beginStroke().moveTo(26,40.7).curveTo(26.8,39.6,27.6,38.3).curveTo(30.3,34.3,30.6,29.3).curveTo(30.8,27,30.3,24.7).curveTo(29.5,21.9,28.4,20.1).lineTo(28.5,20.1).lineTo(28.4,20.1).lineTo(28.3,20).curveTo(24.7,14.4,13.5,12.4).lineTo(9.4,12).lineTo(9.4,10.4).lineTo(7,11.8).lineTo(7,11.8).lineTo(4.6,13).curveTo(0.3,15.3,-3.1,16.6).curveTo(-13.4,20.6,-23.3,22).curveTo(-33.6,23.4,-37.1,21).lineTo(-37.4,20.8).curveTo(-40.1,18.2,-39.8,15.5).lineTo(-39.7,14.7).curveTo(-38.3,9.6,-31.1,7.9).lineTo(-31,7.8).curveTo(-25.1,6.9,-17.7,6.7).lineTo(-10.8,7).lineTo(-10.8,11).lineTo(-17.7,10.7).curveTo(-24.8,10.8,-30.6,11.8).curveTo(-35.4,12.9,-36.6,15.7).curveTo(-36.5,16.6,-35.7,17.5).curveTo(-32.6,19.3,-23.6,18.1).curveTo(-14,16.7,-4,12.8).lineTo(-4,12.9).lineTo(-0,11.1).lineTo(6.5,7.7).lineTo(7,7.4).lineTo(9.4,6).lineTo(10.2,5.6).curveTo(12.9,3.9,18.9,0.8).lineTo(24.7,-2.4).lineTo(27.2,-4).lineTo(27.3,-4).lineTo(29.3,-5.2).lineTo(29.4,-5.2).curveTo(30.6,-6,31.7,-6.9).curveTo(32.5,-7.4,33.2,-8.2).curveTo(35,-9.9,36.4,-12.1).lineTo(36.6,-12.6).lineTo(36.8,-13.7).lineTo(36.7,-14.7).lineTo(36.7,-14.8).lineTo(36.4,-16.2).curveTo(34.4,-18.6,28.6,-19.2).lineTo(28.2,-19.3).lineTo(22,-19.1).lineTo(21.6,-19.1).curveTo(16.5,-19,9.9,-18.4).lineTo(16.3,-22.4).lineTo(9.9,-18.4).lineTo(9.8,-18.4).lineTo(9.4,-18.2).lineTo(5.2,-15.8).lineTo(4.6,-15.5).lineTo(3.2,-14.8).lineTo(1.3,-13.8).curveTo(-1.1,-12.7,-3.1,-11.9).lineTo(-6.6,-10.6).curveTo(-15.1,-7.6,-23.3,-6.5).curveTo(-33.6,-5.1,-37.1,-7.5).lineTo(-37.4,-7.7).curveTo(-40.1,-10.2,-39.8,-13.1).lineTo(-39.7,-13.7).curveTo(-38.3,-18.9,-31.1,-20.6).lineTo(-31,-20.7).curveTo(-25.1,-21.6,-17.7,-21.8).lineTo(-10.8,-21.8).lineTo(-10.8,-17.6).lineTo(-17.7,-17.8).curveTo(-24.8,-17.7,-30.6,-16.7).curveTo(-35.4,-15.6,-36.8,-12.6).curveTo(-36.5,-11.9,-35.7,-11).curveTo(-32.6,-9.2,-23.6,-10.4).curveTo(-15.3,-11.7,-6.6,-14.8).lineTo(-4,-15.7).lineTo(-3.3,-15.9).lineTo(-0.3,-17.4).lineTo(9,-22.3).lineTo(9.1,-22.3).lineTo(9.3,-22.4).lineTo(9.4,-22.5).lineTo(9.8,-22.7).lineTo(9.8,-22.7).lineTo(17.3,-27.6).curveTo(21.5,-30.4,25.3,-32.7).lineTo(29.4,-35.1).curveTo(33.7,-37.8,36.3,-40.6).lineTo(36.6,-41.3).lineTo(36.6,-41.4).curveTo(37,-42.8,36.4,-45).lineTo(36,-45.5).lineTo(39.5,-45.5).curveTo(40.3,-42,39.4,-39.8).lineTo(39.3,-39.6).lineTo(38.7,-38.3).lineTo(38.4,-37.8).curveTo(35.5,-34.7,30.6,-31.6).lineTo(30.6,-31.5).lineTo(26.2,-28.9).lineTo(18.7,-24).lineTo(17.1,-23).lineTo(16.3,-22.4).curveTo(19.4,-23.1,21.5,-23.1).lineTo(22,-23.1).lineTo(28.3,-23.2).lineTo(28.4,-23.2).curveTo(36.5,-22.6,38.9,-18.6).lineTo(39.1,-18).curveTo(39.7,-16.3,39.8,-14.8).lineTo(39.8,-14.7).lineTo(39.8,-13.7).curveTo(39.8,-12.1,39.3,-10.8).lineTo(38.9,-9.8).lineTo(38.8,-9.7).curveTo(37,-6.9,34.9,-5).lineTo(35,-5).curveTo(33.8,-3.8,32.6,-3.1).curveTo(31.6,-2.3,30.6,-1.7).lineTo(30.6,-1.6).lineTo(28.6,-0.5).lineTo(28.5,-0.5).lineTo(28.5,-0.4).curveTo(25.4,1.6,20,4.5).lineTo(20,4.5).curveTo(16.4,6.3,14,7.7).lineTo(12.9,8.3).lineTo(13.1,8.3).lineTo(13.8,8.4).lineTo(13.9,8.4).curveTo(26.6,10.8,30.6,17.4).lineTo(30.7,17.5).curveTo(31.4,18.6,32,20.1).curveTo(32.8,22.1,33.4,24.7).curveTo(34.6,29.6,33.1,34.3).curveTo(32.5,36.2,31.4,38.3).lineTo(30.7,39.7).curveTo(29.9,41.3,28.1,43.5).curveTo(27.3,44.6,26.5,44.8).lineTo(21,45.4).curveTo(23,44.5,26,40.7).closePath().moveTo(9.4,10.4).lineTo(13.1,8.3).closePath();
	this.shape_48.setTransform(167.7,401.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill().beginStroke("#446083").setStrokeStyle(1,1,1).moveTo(10.1,-46.1).lineTo(10.1,45.9).curveTo(-0.1,46.3,-10.1,45.9).lineTo(-10.1,-46.1).closePath();
	this.shape_49.setTransform(167,401.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginLinearGradientFill(["#8597AD","#BACEE9","#8597AD"],[0.008,0.569,1],-10.1,0,10.1,0).beginStroke().moveTo(-10.1,45.9).lineTo(-10.1,-46.1).lineTo(10.1,-46.1).lineTo(10.1,45.9).curveTo(5,46.1,-0.1,46.1).curveTo(-5.1,46.1,-10.1,45.9).closePath();
	this.shape_50.setTransform(167,401.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(130));

	// 레이어 2
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill().beginStroke("#A35900").setStrokeStyle(1,1,1).moveTo(-59.6,8.2).curveTo(-59.8,7.8,-59.8,7.3).curveTo(-59.8,2.1,-42.3,-1.5).curveTo(-24.8,-5.1,-0,-5.1).curveTo(24.7,-5.1,42.1,-1.5).curveTo(59.7,2.1,59.7,7.3).curveTo(59.7,7.8,59.6,8.2).moveTo(68.9,8.2).curveTo(67.8,1.5,48.7,-3.2).curveTo(28.6,-8.2,0,-8.2).curveTo(-28.6,-8.2,-48.8,-3.2).curveTo(-67.8,1.6,-69,8.2);
	this.shape_51.setTransform(168.1,427.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#AA5D00").beginStroke().moveTo(-42.2,8.8).curveTo(-58.1,5.6,-59.5,0.9).curveTo(-59.8,0.5,-59.8,-0).curveTo(-59.8,-5.2,-42.2,-8.8).curveTo(-24.7,-12.5,0.1,-12.4).curveTo(24.7,-12.5,42.2,-8.8).curveTo(59.7,-5.2,59.7,-0).lineTo(59.6,0.9).curveTo(58.2,5.6,42.2,8.8).curveTo(24.7,12.4,0.1,12.4).curveTo(-24.7,12.4,-42.2,8.8).closePath();
	this.shape_52.setTransform(168.1,435.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#D97700").beginStroke().moveTo(59.6,8.2).lineTo(59.7,7.3).curveTo(59.7,2.1,42.1,-1.5).curveTo(24.7,-5.1,0,-5.1).curveTo(-24.8,-5.1,-42.3,-1.5).curveTo(-59.8,2.1,-59.8,7.3).curveTo(-59.8,7.8,-59.6,8.2).lineTo(-68.9,8.2).curveTo(-67.7,1.6,-48.8,-3.2).curveTo(-28.6,-8.2,0,-8.2).curveTo(28.6,-8.2,48.7,-3.2).curveTo(67.8,1.5,69,8.2).closePath();
	this.shape_53.setTransform(168.1,427.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]}).wait(130));

	// Layer 9
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill().beginStroke("#475B73").setStrokeStyle(1,1,1).moveTo(-1.4,1.5).curveTo(-0.8,2,0,2.1).curveTo(0.9,2,1.4,1.5).curveTo(2,0.9,2,0).curveTo(2,-0.8,1.5,-1.4).curveTo(0.9,-2,0,-2).curveTo(-0.8,-2,-1.5,-1.4).curveTo(-2,-0.8,-2,0).curveTo(-2,0.9,-1.4,1.5).closePath();
	this.shape_54.setTransform(77.1,353.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-1.4,1.5).curveTo(-2,0.9,-2.1,0).curveTo(-2,-0.8,-1.5,-1.4).curveTo(-0.9,-2,-0,-2.1).curveTo(0.9,-2,1.4,-1.4).curveTo(2,-0.8,2.1,0).curveTo(2,0.9,1.4,1.5).curveTo(0.8,2,-0,2.1).curveTo(-0.9,2,-1.4,1.5).closePath();
	this.shape_55.setTransform(77.1,353.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(-13.9,-7.7).lineTo(-43,-36.8).curveTo(-44.3,-38.1,-44.2,-39.8).curveTo(-44.2,-41.5,-43,-42.8).curveTo(-41.8,-44,-40,-44).curveTo(-38.3,-44,-37.1,-42.8).lineTo(-4.6,-10.3).lineTo(44.3,38).lineTo(38,44.1).closePath();
	this.shape_56.setTransform(116.6,392.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#6E829A").beginStroke().moveTo(-29.1,-24.6).lineTo(-19.8,-27.2).lineTo(29.1,21.1).lineTo(22.8,27.2).closePath();
	this.shape_57.setTransform(131.8,409.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-18.6,-11).curveTo(-19.9,-12.2,-19.8,-14).curveTo(-19.8,-15.7,-18.6,-16.9).curveTo(-17.4,-18.1,-15.6,-18.2).curveTo(-13.9,-18.2,-12.7,-16.9).lineTo(19.8,15.6).lineTo(10.5,18.2).closePath();
	this.shape_58.setTransform(92.2,366.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(6.9,-6.6).curveTo(6.9,-6.7,6.8,-6.8).curveTo(4,-9.6,0,-9.6).curveTo(-4,-9.6,-6.8,-6.8).curveTo(-9.6,-4,-9.6,0).curveTo(-9.6,2.2,-8.7,4.1).curveTo(-8,5.5,-6.8,6.8).curveTo(-3.9,9.6,-0,9.6).curveTo(4,9.6,6.8,6.8).curveTo(9.6,4,9.6,-0).curveTo(9.6,-3.8,6.9,-6.6).closePath();
	this.shape_59.setTransform(76.8,353.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-8.3,2.8).curveTo(-8.3,-1.2,-5.5,-4).curveTo(-2.6,-6.9,1.4,-6.9).curveTo(5.3,-6.8,8.1,-4).lineTo(8.3,-3.8).lineTo(-7.4,6.9).curveTo(-8.2,5,-8.3,2.8).closePath();
	this.shape_60.setTransform(75.4,350.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-7.2,5.3).curveTo(-8.5,4,-9.2,2.6).lineTo(6.5,-8.1).curveTo(9.2,-5.4,9.2,-1.6).curveTo(9.2,2.4,6.3,5.3).curveTo(3.5,8.1,-0.5,8.1).curveTo(-4.4,8.1,-7.2,5.3).closePath();
	this.shape_61.setTransform(77.2,354.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(45.9,-13.4).lineTo(45.9,13.3).curveTo(45.9,18,41.2,18).lineTo(-41.6,18).curveTo(-46.3,18,-46.3,13.3).lineTo(-46.3,-13.4).curveTo(-46.3,-18.2,-41.6,-18.2).lineTo(41.2,-18.2).curveTo(45.9,-18.2,45.9,-13.4).closePath().moveTo(51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).lineTo(-45.8,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.8,-22.4).lineTo(45.9,-22.4).curveTo(51.7,-22.4,51.7,-16.5).closePath();
	this.shape_62.setTransform(25.4,352.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-41.4,18.1).curveTo(-46.1,18.1,-46.1,13.4).lineTo(-46.1,-13.4).curveTo(-46.1,-18.1,-41.4,-18.1).lineTo(41.4,-18.1).curveTo(46.1,-18.1,46.1,-13.4).lineTo(46.1,13.4).curveTo(46.1,18.1,41.4,18.1).closePath();
	this.shape_63.setTransform(25.2,352.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-45.8,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.8,-22.3).lineTo(45.9,-22.3).curveTo(51.7,-22.4,51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).closePath().moveTo(-46.4,-13.4).lineTo(-46.4,13.3).curveTo(-46.4,18.1,-41.6,18.1).lineTo(41.2,18.1).curveTo(45.9,18.1,45.9,13.3).lineTo(45.9,-13.4).curveTo(45.9,-18.1,41.2,-18.2).lineTo(-41.6,-18.2).curveTo(-46.4,-18.1,-46.4,-13.4).closePath();
	this.shape_64.setTransform(25.4,352.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill().beginStroke("#475B73").setStrokeStyle(1,1,1).moveTo(2,0).curveTo(2,0.9,1.4,1.5).curveTo(0.8,2,0,2.1).curveTo(-0.9,2,-1.4,1.5).curveTo(-2,0.9,-2.1,0).curveTo(-2,-0.8,-1.5,-1.4).curveTo(-0.9,-2,0,-2).curveTo(0.8,-2,1.4,-1.4).curveTo(2,-0.8,2,0).closePath();
	this.shape_65.setTransform(260.1,353.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-1.4,1.5).curveTo(-2,0.9,-2.1,0).curveTo(-2,-0.8,-1.4,-1.4).curveTo(-0.9,-2,0,-2.1).curveTo(0.9,-2,1.4,-1.4).curveTo(2,-0.8,2.1,0).curveTo(2,0.9,1.4,1.5).curveTo(0.9,2,0,2.1).curveTo(-0.9,2,-1.4,1.5).closePath();
	this.shape_66.setTransform(260.1,353.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(13.9,-7.7).lineTo(43,-36.8).curveTo(44.3,-38.1,44.2,-39.8).curveTo(44.2,-41.5,43,-42.8).curveTo(41.8,-44,40,-44).curveTo(38.3,-44,37.1,-42.8).lineTo(4.6,-10.3).lineTo(-44.3,38).lineTo(-38,44.1).closePath();
	this.shape_67.setTransform(220.6,392.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#6E829A").beginStroke().moveTo(-29.1,21.1).lineTo(19.8,-27.2).lineTo(29.1,-24.6).lineTo(-22.8,27.2).closePath();
	this.shape_68.setTransform(205.4,409.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-19.8,15.6).lineTo(12.7,-16.9).curveTo(13.9,-18.2,15.6,-18.2).curveTo(17.4,-18.1,18.6,-16.9).curveTo(19.8,-15.7,19.8,-14).curveTo(19.9,-12.2,18.6,-11).lineTo(-10.5,18.2).closePath();
	this.shape_69.setTransform(245,366.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(8.7,4.1).curveTo(8,5.5,6.8,6.8).curveTo(3.9,9.6,0,9.6).curveTo(-4,9.6,-6.8,6.8).curveTo(-9.6,4,-9.6,-0).curveTo(-9.6,-3.8,-6.9,-6.6).curveTo(-6.9,-6.7,-6.8,-6.8).curveTo(-4,-9.6,-0,-9.6).curveTo(4,-9.6,6.8,-6.8).curveTo(9.6,-4,9.6,0).curveTo(9.6,2.2,8.7,4.1).closePath();
	this.shape_70.setTransform(260.4,353.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-8.3,-3.8).lineTo(-8.1,-4).curveTo(-5.3,-6.8,-1.4,-6.9).curveTo(2.6,-6.9,5.5,-4).curveTo(8.3,-1.2,8.3,2.8).curveTo(8.2,5,7.4,6.9).closePath();
	this.shape_71.setTransform(261.7,350.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-6.3,5.3).curveTo(-9.2,2.4,-9.2,-1.6).curveTo(-9.2,-5.4,-6.5,-8.1).lineTo(9.2,2.6).curveTo(8.5,4,7.2,5.3).curveTo(4.4,8.1,0.5,8.1).curveTo(-3.5,8.1,-6.3,5.3).closePath();
	this.shape_72.setTransform(259.9,354.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(45.9,-13.4).lineTo(45.9,13.3).curveTo(45.9,18,41.2,18).lineTo(-41.6,18).curveTo(-46.4,18,-46.4,13.3).lineTo(-46.4,-13.4).curveTo(-46.4,-18.2,-41.6,-18.2).lineTo(41.2,-18.2).curveTo(45.9,-18.2,45.9,-13.4).closePath().moveTo(51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).lineTo(-45.9,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.9,-22.4).lineTo(45.9,-22.4).curveTo(51.7,-22.4,51.7,-16.5).closePath();
	this.shape_73.setTransform(311.8,352.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-41.4,18.1).curveTo(-46.1,18.1,-46.1,13.4).lineTo(-46.1,-13.4).curveTo(-46.1,-18.1,-41.4,-18.1).lineTo(41.4,-18.1).curveTo(46.1,-18.1,46.1,-13.4).lineTo(46.1,13.4).curveTo(46.1,18.1,41.4,18.1).closePath();
	this.shape_74.setTransform(311.6,352.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-45.9,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.9,-22.3).lineTo(45.9,-22.3).curveTo(51.7,-22.4,51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).closePath().moveTo(-46.4,-13.4).lineTo(-46.4,13.3).curveTo(-46.3,18.1,-41.6,18.1).lineTo(41.2,18.1).curveTo(45.9,18.1,45.9,13.3).lineTo(45.9,-13.4).curveTo(45.9,-18.1,41.2,-18.2).lineTo(-41.6,-18.2).curveTo(-46.3,-18.1,-46.4,-13.4).closePath();
	this.shape_75.setTransform(311.8,352.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,230.7,391.8,349.2);


(lib.yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(129).call(this.frame_129).wait(1));

	// 레이어 3
	this.instance = new lib.ob_coin();
	this.instance.parent = this;
	this.instance.setTransform(167.8,199.2,2.638,2.638,0,0,0,18.8,18.8);
	this.instance._off = true;

	this.instance_1 = new lib.inconin("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,269,1,1,0,0,0,34.6,38.8);

	this.instance_2 = new lib.incoin2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(168,269,1,1,0,0,0,34.6,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},23).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(6).to({scaleX:1.83,scaleY:1.83,y:264.7},7).to({_off:true},1).wait(115));

	// Layer 13
	this.instance_3 = new lib.ob_hand("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(167.3,335.8,1,1,0,0,0,28.9,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({startPosition:0},0).to({rotation:90,x:167.2},8).wait(94));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#597393").setStrokeStyle(1,1,1).moveTo(-12.8,-5.8).lineTo(-12.7,-5.8).curveTo(2.1,-5.8,12.8,3.4).lineTo(11.3,5.8).curveTo(1.2,-2.2,-12.7,-2.2).lineTo(-12.8,-2.2);
	this.shape.setTransform(179.8,301.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#4A5C70").beginStroke().moveTo(-12.7,-2.2).lineTo(-12.8,-2.2).lineTo(-12.8,-5.8).lineTo(-12.7,-5.8).curveTo(2.1,-5.8,12.8,3.4).lineTo(11.3,5.8).curveTo(1.2,-2.2,-12.7,-2.2).closePath();
	this.shape_1.setTransform(179.8,301.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#597393").setStrokeStyle(1,1,1).moveTo(12.8,-5.8).lineTo(12.7,-5.8).curveTo(-2.2,-5.8,-12.8,3.4).lineTo(-11.3,5.8).curveTo(-1.2,-2.2,12.7,-2.2).lineTo(12.8,-2.2);
	this.shape_2.setTransform(154.4,301.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#4A5C70").beginStroke().moveTo(-12.7,3.4).curveTo(-2.1,-5.8,12.7,-5.8).lineTo(12.7,-5.8).lineTo(12.7,-2.2).lineTo(12.7,-2.2).curveTo(-1.2,-2.2,-11.3,5.8).closePath();
	this.shape_3.setTransform(154.4,301.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(12.3,-25.6).curveTo(16.8,-24,20.7,-21).curveTo(21.6,-20.3,22.4,-19.6).curveTo(31.6,-11.4,31.6,0.1).curveTo(31.6,11.6,22.4,19.6).curveTo(13.3,27.8,0.3,27.8).curveTo(0.2,27.8,-0,27.8).curveTo(-0.2,27.8,-0.3,27.8).curveTo(-13.3,27.8,-22.4,19.6).curveTo(-31.6,11.6,-31.6,0.1).curveTo(-31.6,-11.4,-22.4,-19.6).curveTo(-20.5,-21.3,-18.3,-22.7).curveTo(-15.5,-24.5,-12.3,-25.6).lineTo(-14.7,-29.9).curveTo(-16.5,-29.3,-18.3,-28.3).curveTo(-22.5,-26.2,-26.2,-22.9).curveTo(-36.9,-13.4,-36.9,0).curveTo(-36.9,13.5,-26.2,22.9).curveTo(-15.5,32.4,-0.4,32.4).curveTo(-0.2,32.4,-0,32.4).curveTo(0.2,32.4,0.4,32.4).curveTo(15.5,32.4,26.2,22.9).curveTo(36.9,13.5,36.9,0).curveTo(36.9,-13.4,26.2,-22.9).curveTo(23.6,-25.2,20.7,-27).curveTo(20.5,-27.1,20.3,-27.2).lineTo(14.7,-29.9).moveTo(-14.7,-29.9).curveTo(-8.1,-32.4,-0.4,-32.4).curveTo(-0.2,-32.4,-0,-32.4).curveTo(0.2,-32.4,0.4,-32.4).curveTo(8.1,-32.4,14.7,-29.9).lineTo(12.3,-25.6).moveTo(-12.3,-25.6).curveTo(-6.8,-27.7,-0.3,-27.7).curveTo(-0.2,-27.7,-0,-27.7).curveTo(0.2,-27.7,0.3,-27.7).curveTo(6.8,-27.7,12.3,-25.6);
	this.shape_4.setTransform(167.2,334.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-0,32.4).lineTo(-0.4,32.4).curveTo(-15.5,32.4,-26.2,22.9).curveTo(-36.9,13.5,-36.9,0).curveTo(-36.9,-13.4,-26.2,-22.9).curveTo(-22.5,-26.2,-18.3,-28.3).curveTo(-16.5,-29.3,-14.7,-29.9).curveTo(-8.1,-32.4,-0.4,-32.4).lineTo(-0,-32.4).lineTo(0.4,-32.4).curveTo(8.1,-32.4,14.7,-29.9).lineTo(12.3,-25.6).lineTo(14.7,-29.9).lineTo(20.3,-27.2).lineTo(20.7,-27).curveTo(23.6,-25.2,26.2,-22.9).curveTo(36.9,-13.4,36.9,0).curveTo(36.9,13.5,26.2,22.9).curveTo(15.5,32.4,0.4,32.4).lineTo(-0,32.4).closePath().moveTo(-31.6,0.1).curveTo(-31.6,11.6,-22.4,19.6).curveTo(-13.3,27.8,-0.3,27.8).lineTo(-0,27.8).lineTo(0.3,27.8).curveTo(13.3,27.8,22.4,19.6).curveTo(31.6,11.6,31.6,0.1).curveTo(31.6,-11.4,22.4,-19.6).lineTo(20.7,-21).curveTo(16.8,-24,12.3,-25.6).curveTo(6.8,-27.7,0.3,-27.7).lineTo(-0,-27.7).lineTo(-0.3,-27.7).curveTo(-6.8,-27.7,-12.3,-25.6).lineTo(-14.7,-29.9).lineTo(-12.3,-25.6).curveTo(-15.5,-24.5,-18.3,-22.7).curveTo(-20.5,-21.3,-22.4,-19.6).curveTo(-31.6,-11.4,-31.6,0.1).lineTo(-31.6,0.1).closePath().moveTo(-0,27.8).lineTo(-0.3,27.8).curveTo(-13.3,27.8,-22.4,19.6).curveTo(-31.6,11.6,-31.6,0.1).curveTo(-31.6,-11.4,-22.4,-19.6).curveTo(-20.5,-21.3,-18.3,-22.7).curveTo(-15.5,-24.5,-12.3,-25.6).curveTo(-6.8,-27.7,-0.3,-27.7).lineTo(-0,-27.7).lineTo(0.3,-27.7).curveTo(6.8,-27.7,12.3,-25.6).curveTo(16.8,-24,20.7,-21).lineTo(22.4,-19.6).curveTo(31.6,-11.4,31.6,0.1).curveTo(31.6,11.6,22.4,19.6).curveTo(13.3,27.8,0.3,27.8).lineTo(-0,27.8).closePath().moveTo(-12.3,-25.6).closePath();
	this.shape_5.setTransform(167.2,334.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#597393").setStrokeStyle(1,1,1).moveTo(-36.9,18.8).lineTo(36.9,18.8).curveTo(37,14.2,37,13.6).curveTo(37,0.2,26.3,-9.3).curveTo(15.6,-18.8,0.4,-18.8).curveTo(0.2,-18.8,0,-18.8).curveTo(-0.1,-18.8,-0.3,-18.8).curveTo(-15.5,-18.8,-26.2,-9.3).curveTo(-36.9,0.2,-36.9,13.6).curveTo(-36.9,14.2,-36.9,18.8).closePath();
	this.shape_6.setTransform(167.2,311.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#90A5BF").beginStroke().moveTo(-36.9,18.8).lineTo(-36.9,13.6).curveTo(-36.9,0.1,-26.2,-9.3).curveTo(-15.5,-18.8,-0.4,-18.8).lineTo(-0,-18.8).lineTo(0.4,-18.8).curveTo(15.5,-18.8,26.3,-9.3).curveTo(37,0.1,37,13.6).lineTo(36.9,18.8).closePath();
	this.shape_7.setTransform(167.2,311.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#930404").setStrokeStyle(1,1,1).moveTo(126.2,-42).lineTo(125.4,-46.5).lineTo(116.8,-36.9).curveTo(107.7,-28.1,94.5,-21).curveTo(57.5,-1.3,0.3,-1.6).curveTo(-0,-1.6,-0.3,-1.6).curveTo(-57.6,-1.1,-94.5,-20.5).curveTo(-107.8,-27.5,-116.8,-36.3).lineTo(-125.4,-45.7).lineTo(-125.9,-43).lineTo(-127,-36.7).curveTo(-127,-36.3,-127.1,-36).curveTo(-127.7,-27.7,-126.6,-19.7).curveTo(-125.6,-12.3,-123.3,-5.8).curveTo(-119,6.3,-109.8,14.8).curveTo(-102,22.8,-88.8,30.2).lineTo(-88.4,30.5).curveTo(-83.2,33.2,-77.1,35.6).curveTo(-45.7,47.7,-0.3,46.3).curveTo(-0,46.3,0.3,46.3).curveTo(45.6,47.5,77.1,35.2).curveTo(83.2,32.9,88.4,30).lineTo(88.8,29.7).curveTo(102,22.3,109.8,14.3).curveTo(114.3,10,117.7,4.9).curveTo(124.7,-5.8,126.6,-20.4).curveTo(127.7,-28.4,127.1,-36.7).curveTo(127,-37.1,127,-37.4).closePath();
	this.shape_8.setTransform(167,278.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FF7E7E").beginStroke().moveTo(121.2,-15.2).lineTo(121.3,-15.2).lineTo(123.9,-18.3).lineTo(127.1,-23.2).curveTo(127.7,-14.8,126.6,-6.8).curveTo(124.7,7.8,117.7,18.5).curveTo(114.8,20.9,111.8,23.2).curveTo(120,7.5,121.2,-15.2).closePath().moveTo(-123.3,7.7).curveTo(-125.6,1.3,-126.6,-6.1).curveTo(-127.7,-14.1,-127.1,-22.5).lineTo(-123.9,-17.6).lineTo(-121.9,-15.2).curveTo(-122.8,3.1,-114,18.8).curveTo(-119.1,13.6,-123.3,7.7).closePath();
	this.shape_9.setTransform(167,264.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#D91313").beginStroke().moveTo(-74.3,15.3).curveTo(-80.4,12.9,-85.6,10.2).lineTo(-86,9.9).curveTo(-99.2,2.5,-107,-5.5).curveTo(-116.2,-14,-120.5,-26.1).curveTo(-116.3,-20.3,-111.2,-15.1).curveTo(-66.8,29.4,45.5,18.6).curveTo(86.6,10.5,114.6,-10.7).curveTo(117.6,-13,120.5,-15.4).curveTo(117.1,-10.3,112.6,-6).curveTo(104.8,2,91.6,9.4).lineTo(91.2,9.7).curveTo(86,12.6,79.9,14.9).curveTo(48.4,27.2,3.1,26).lineTo(2.6,26).lineTo(-6.5,26.1).curveTo(-46,26.1,-74.3,15.3).closePath();
	this.shape_10.setTransform(164.2,298.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#F04040").beginStroke().moveTo(-113.6,-0.9).curveTo(-122.4,-16.5,-121.5,-34.9).curveTo(-114.3,-26.7,-103.5,-20).curveTo(-67.3,2.7,0.1,2.1).lineTo(0.7,2.1).curveTo(68.1,2.3,104.2,-20.5).curveTo(114.6,-27,121.6,-34.8).curveTo(120.4,-12.1,112.2,3.5).curveTo(84.2,24.7,43.1,32.8).curveTo(21,34.9,1.6,34.9).curveTo(-78,34.9,-113.6,-0.9).closePath();
	this.shape_11.setTransform(166.6,284.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFD448").beginStroke().moveTo(-103.6,0.3).curveTo(-114.5,-6.4,-121.7,-14.6).lineTo(-120.1,-21.4).curveTo(-106.1,-5.1,-81.2,5.1).curveTo(-45.9,17.9,11.1,17.4).curveTo(48.1,14.8,80.9,5.1).curveTo(105.2,-5.1,121.7,-22.4).lineTo(121.6,-14.5).lineTo(121.5,-14.5).curveTo(114.4,-6.7,104.1,-0.2).curveTo(67.9,22.6,0.5,22.4).lineTo(-0,22.4).lineTo(-3.2,22.4).curveTo(-68.3,22.4,-103.6,0.3).closePath();
	this.shape_12.setTransform(166.8,264);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFE593").beginStroke().moveTo(121.4,-0.7).curveTo(123.9,-3.3,126.2,-6.1).lineTo(127,-1.5).lineTo(127.1,-0.8).lineTo(123.9,4).lineTo(121.3,7.2).closePath().moveTo(-123.9,4.7).lineTo(-127.1,-0.1).lineTo(-127,-0.8).lineTo(-125.9,-7.1).curveTo(-123.4,-3.3,-120.3,0.3).lineTo(-121.9,7.1).lineTo(-123.9,4.7).closePath();
	this.shape_13.setTransform(167,242.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#DBAC12").beginStroke().moveTo(-81.6,12.5).curveTo(-106.5,2.3,-120.5,-14).curveTo(-123.5,-17.6,-126.1,-21.4).lineTo(-125.6,-24.1).lineTo(-117,-14.7).curveTo(-108,-5.9,-94.7,1.1).curveTo(-57.8,20.5,-0.4,20).lineTo(0.1,20).curveTo(57.3,20.3,94.3,0.6).curveTo(107.5,-6.5,116.7,-15.3).lineTo(125.2,-24.9).lineTo(126,-20.4).curveTo(123.7,-17.6,121.2,-15).curveTo(104.8,2.3,80.5,12.5).curveTo(47.7,22.2,10.6,24.8).lineTo(6.8,24.9).curveTo(-47.5,24.9,-81.6,12.5).closePath();
	this.shape_14.setTransform(167.2,256.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill().beginStroke("#1A8DB4").setStrokeStyle(1,1,1).moveTo(57.6,29.9).curveTo(58.2,27.5,56.9,25.3).lineTo(25.2,-8.9).lineTo(25.4,-23.6).curveTo(25.4,-28,24,-33.9).curveTo(23,-38.1,21.8,-40.7).curveTo(18.8,-47.6,11.7,-50.6).curveTo(8.4,-52,5.5,-52.2).curveTo(5.1,-52.3,4.8,-52.3).lineTo(-4.8,-52.3).curveTo(-5.2,-52.3,-5.6,-52.2).curveTo(-8.4,-52,-11.7,-50.6).curveTo(-18.9,-47.6,-21.8,-40.7).curveTo(-23.1,-38.1,-24,-33.9).curveTo(-25.5,-28,-25.4,-23.6).lineTo(-25.3,-8.9).lineTo(-56.9,25.3).curveTo(-57.7,26.5,-57.8,27.8).curveTo(-57.9,28.8,-57.7,29.9).moveTo(58,32.2).curveTo(57.9,34,56.7,35.8).lineTo(53,39.3).curveTo(50.1,41.6,46.1,43.7).curveTo(35.5,49.1,20.1,51.2).curveTo(10,52.3,1.6,52.3).curveTo(1.1,52.3,0.7,52.3).curveTo(0.5,52.3,0.4,52.3).curveTo(0.2,52.3,0,52.3).curveTo(-0.2,52.3,-0.4,52.3).curveTo(-0.5,52.3,-0.7,52.3).curveTo(-1.2,52.3,-1.6,52.3).curveTo(-10,52.3,-20.1,51.2).curveTo(-35.5,49.1,-46.1,43.7).curveTo(-50.2,41.6,-53,39.3).lineTo(-56.8,35.8).curveTo(-57.9,34,-58,32.2).curveTo(-58.1,32,-58,31.7).curveTo(-58,31.4,-58,31.1).curveTo(-57.9,30.5,-57.7,29.9).lineTo(-58,32.2).moveTo(57.6,29.9).lineTo(58,32.2).curveTo(58.1,32,58,31.7).curveTo(58,31.4,57.9,31.1).curveTo(57.9,30.5,57.6,29.9).closePath();
	this.shape_15.setTransform(165.8,523.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-0.6,0.5).lineTo(0.6,-0.5).lineTo(-0.6,0.5).closePath();
	this.shape_16.setTransform(212.1,554.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#EEF5FF").beginStroke().moveTo(0.7,12.9).lineTo(0.4,12.9).lineTo(0,12.9).lineTo(-0.4,12.9).lineTo(-0.7,12.9).lineTo(-1.6,12.9).curveTo(-10,12.9,-20.1,11.8).curveTo(-35.5,9.7,-46.1,4.3).curveTo(-50.2,2.2,-53,-0.1).lineTo(-56.8,-3.6).curveTo(-57.9,-5.4,-58,-7.2).lineTo(-57.7,-9.5).curveTo(-57.3,-10.5,-56.3,-11.4).curveTo(-53.8,-13.8,-50.5,-12.3).curveTo(-49.8,-12,-49.1,-11.5).lineTo(-45.7,-8).lineTo(-45.5,-7.8).lineTo(-45.2,-7.6).lineTo(-45.2,-7.6).curveTo(-43.1,-5.5,-36.1,-2.2).curveTo(-29.1,1,-14.8,1.9).curveTo(-8.1,2.6,-1.5,2.4).lineTo(-0.6,2.4).lineTo(0,2.4).lineTo(0.6,2.4).lineTo(1.5,2.4).curveTo(8,2.6,14.8,1.9).curveTo(29.1,1,36.1,-2.2).curveTo(43.1,-5.5,45.2,-7.6).lineTo(45.3,-7.6).lineTo(45.3,-7.6).lineTo(45.3,-7.7).lineTo(45.7,-8).lineTo(46.9,-9).lineTo(50.4,-12.3).curveTo(53.8,-13.8,56.3,-11.4).curveTo(57.2,-10.5,57.6,-9.5).lineTo(58,-7.2).curveTo(57.9,-5.4,56.7,-3.6).lineTo(53,-0.1).curveTo(50.1,2.2,46.1,4.3).curveTo(35.5,9.7,20.1,11.8).curveTo(10,12.9,1.6,12.9).lineTo(0.7,12.9).closePath();
	this.shape_17.setTransform(165.8,563.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginLinearGradientFill(["#E2EFFF","#71A5E5"],[0.008,1],1.4,28.7,1.4,-43.9).beginStroke().moveTo(1.5,33.4).lineTo(0.6,33.4).lineTo(0,33.4).lineTo(-0.5,33.4).lineTo(-1.5,33.4).curveTo(-8.1,33.6,-14.8,32.9).curveTo(-29.1,32,-36.1,28.8).curveTo(-43.1,25.5,-45.2,23.4).lineTo(-45.2,23.4).lineTo(-45.7,23).lineTo(-49,19.5).curveTo(-49.7,19,-50.5,18.7).lineTo(-20.7,-16).lineTo(-20.9,-30.6).curveTo(-20.9,-32,-20.7,-33.4).lineTo(-19.9,-32).lineTo(-20.3,-32.7).curveTo(-17.6,-26.6,-17,-22.8).curveTo(-16.8,-19.7,-15.4,-15).curveTo(-12.9,-9.2,-7.5,-7.2).curveTo(-4.4,-6.1,-2.5,-5.8).lineTo(0,-5.6).lineTo(2.6,-5.9).curveTo(4.4,-6.1,7.5,-7.2).curveTo(12.9,-9.2,15.4,-15).curveTo(16.8,-19.7,16.9,-22.8).curveTo(17.7,-27,20,-32).lineTo(20.6,-33.4).lineTo(20.8,-32).lineTo(20.8,-30.6).lineTo(20.7,-16).lineTo(50.4,18.7).lineTo(46.9,22).lineTo(45.7,23).lineTo(45.7,23).lineTo(45.4,23.3).lineTo(45.3,23.4).lineTo(45.2,23.4).curveTo(43.1,25.5,36.1,28.8).curveTo(29.1,32,14.8,32.9).curveTo(9.5,33.4,4.4,33.4).lineTo(1.5,33.4).closePath();
	this.shape_18.setTransform(165.8,532.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#40464F").beginStroke().moveTo(-2.5,25.8).curveTo(-4.4,25.6,-7.5,24.4).curveTo(-12.9,22.4,-15.4,16.6).curveTo(-16.8,12,-17,8.9).curveTo(-17.6,5.1,-20.3,-1).lineTo(-19.9,-0.3).lineTo(-20.7,-1.8).curveTo(-20.4,-5.1,-19.4,-9.1).curveTo(-18.4,-13.3,-17.2,-15.8).curveTo(-14.1,-22.5,-6.8,-25).curveTo(-3,-26.3,-0.5,-26).lineTo(0,-26).lineTo(0.5,-26).curveTo(3,-26.3,6.8,-25).curveTo(14.1,-22.5,17.1,-15.8).curveTo(18.4,-13.3,19.4,-9.1).curveTo(20.4,-5.1,20.6,-1.8).lineTo(20,-0.3).curveTo(17.7,4.7,16.9,8.9).curveTo(16.8,12,15.4,16.6).curveTo(12.9,22.4,7.5,24.4).curveTo(4.4,25.6,2.6,25.8).lineTo(0,26).lineTo(-2.5,25.8).closePath();
	this.shape_19.setTransform(165.8,500.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FAFCFF").beginStroke().moveTo(56.3,39.2).curveTo(53.8,36.7,50.4,38.2).lineTo(20.7,3.6).lineTo(20.8,-11).lineTo(20.8,-12.4).lineTo(20.6,-13.9).curveTo(20.4,-17.2,19.4,-21.2).curveTo(18.4,-25.4,17.1,-27.9).curveTo(14,-34.5,6.8,-37.1).curveTo(3,-38.3,0.5,-38.1).lineTo(0,-38.1).lineTo(-0.5,-38.1).curveTo(-3,-38.3,-6.8,-37.1).curveTo(-14.1,-34.5,-17.2,-27.9).curveTo(-18.4,-25.4,-19.4,-21.2).curveTo(-20.4,-17.2,-20.7,-13.9).curveTo(-20.9,-12.4,-20.9,-11).lineTo(-20.7,3.6).lineTo(-50.5,38.2).curveTo(-53.8,36.7,-56.3,39.2).lineTo(-57.8,39).curveTo(-57.7,37.7,-56.9,36.5).lineTo(-25.3,2.3).lineTo(-25.4,-12.4).curveTo(-25.5,-16.9,-24,-22.7).curveTo(-23.1,-26.9,-21.8,-29.5).curveTo(-18.9,-36.5,-11.7,-39.4).curveTo(-8.4,-40.8,-5.6,-41).lineTo(-4.8,-41.1).lineTo(4.8,-41.1).lineTo(5.5,-41).curveTo(8.4,-40.8,11.7,-39.4).curveTo(18.8,-36.5,21.8,-29.5).curveTo(23,-26.9,24,-22.7).curveTo(25.4,-16.9,25.4,-12.4).lineTo(25.2,2.3).lineTo(56.9,36.5).curveTo(58.2,38.7,57.6,41.1).curveTo(57.2,40.1,56.3,39.2).closePath();
	this.shape_20.setTransform(165.8,512.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill().beginStroke("#A35900").setStrokeStyle(1,1,1).moveTo(-77.5,-37.4).lineTo(-77.5,-48.3).lineTo(77.5,-48.3).lineTo(77.5,-37.4).lineTo(77.5,12.3).lineTo(77.5,15.7).lineTo(77.5,25).curveTo(54.3,48,2.9,48.3).curveTo(2.2,48.3,1.5,48.3).lineTo(-1.4,48.3).curveTo(-2.2,48.3,-2.9,48.3).curveTo(-54.2,48,-77.5,25).lineTo(-77.5,15.7).lineTo(-77.5,12.3).closePath();
	this.shape_21.setTransform(167.2,326.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginLinearGradientFill(["#F5A406","#FFDF77","#F5A406"],[0.02,0.573,1],-81.4,-6.5,73.6,-6.5).beginStroke().moveTo(1.5,42.8).lineTo(-1.4,42.8).lineTo(-2.9,42.8).curveTo(-54.2,42.5,-77.5,19.6).lineTo(-77.5,10.3).curveTo(-54.2,33.2,-2.9,33.6).lineTo(-1.4,33.6).lineTo(1.5,33.6).lineTo(2.9,33.6).curveTo(54.3,33.2,77.5,10.3).lineTo(77.5,19.6).curveTo(54.3,42.5,2.9,42.8).lineTo(1.5,42.8).closePath().moveTo(1.4,30.1).lineTo(-1.4,30.1).lineTo(-2.9,30.1).curveTo(-54.2,29.7,-77.5,6.9).lineTo(-77.5,-42.8).curveTo(0.5,-15.6,77.5,-42.8).lineTo(77.5,6.9).curveTo(54.3,29.8,2.9,30.1).lineTo(1.4,30.1).closePath();
	this.shape_22.setTransform(167.2,332.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#D97700").beginStroke().moveTo(1.5,43.7).lineTo(-1.4,43.7).lineTo(-2.9,43.7).curveTo(-54.2,43.3,-77.5,20.3).lineTo(-77.5,16.9).curveTo(-54.2,39.8,-2.9,40.2).lineTo(-1.4,40.2).lineTo(1.4,40.2).lineTo(2.9,40.2).curveTo(54.3,39.9,77.5,16.9).lineTo(77.5,20.3).curveTo(54.3,43.3,2.9,43.7).lineTo(1.5,43.7).closePath().moveTo(-77.5,-32.7).lineTo(-77.5,-43.6).lineTo(77.5,-43.6).lineTo(77.5,-32.7).curveTo(39,-19.2,0.3,-19.2).curveTo(-38.5,-19.2,-77.5,-32.7).closePath();
	this.shape_23.setTransform(167.2,322.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill().beginStroke("#8E8E8E").setStrokeStyle(1,1,1).moveTo(59.8,32.2).lineTo(59.8,-69).lineTo(-59.7,-69).lineTo(-59.7,32.2).lineTo(-59.7,55.9).curveTo(-59.8,56.1,-59.8,56.4).curveTo(-59.8,56.4,-59.8,56.5).curveTo(-59.8,59.9,-52.4,62.7).curveTo(-48.4,64.1,-42.2,65.4).curveTo(-41,65.7,-39.8,65.9).curveTo(-23,69,0,69).curveTo(24.7,69,42.2,65.4).curveTo(59.6,61.8,59.8,56.5).curveTo(59.8,56.5,59.8,56.4).closePath();
	this.shape_24.setTransform(168.4,379.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginLinearGradientFill(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)","#F2F2F2"],[0.02,0.573,1],-57.3,-54,62.2,-54).beginStroke().moveTo(-39.8,15.3).lineTo(-42.2,14.8).curveTo(-48.4,13.5,-52.4,12.1).curveTo(-59.8,9.3,-59.8,5.9).lineTo(-59.7,5.4).lineTo(-59.7,-18.4).lineTo(59.8,-18.4).lineTo(59.8,5.8).lineTo(59.8,6).curveTo(59.6,11.2,42.2,14.8).curveTo(24.7,18.4,0,18.4).curveTo(-23,18.4,-39.8,15.3).closePath();
	this.shape_25.setTransform(168.4,429.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginLinearGradientFill(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)","#F2F2F2"],[0.02,0.573,1],-57.4,22.6,62.1,22.6).beginStroke().moveTo(-59.7,50.6).lineTo(-59.7,-50.6).lineTo(59.7,-50.6).lineTo(59.7,50.6).closePath();
	this.shape_26.setTransform(168.4,360.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill().beginStroke("#A35900").setStrokeStyle(1,1,1).moveTo(-59.6,-24.5).curveTo(-58.3,-19.8,-42.3,-16.5).curveTo(-24.8,-12.9,-0,-12.9).curveTo(24.7,-12.9,42.1,-16.5).curveTo(58.1,-19.8,59.6,-24.5).moveTo(68.9,-24.5).curveTo(69,-24.1,69,-23.7).lineTo(69,-23.5).lineTo(68.9,6.5).curveTo(69,6.8,69,7.2).curveTo(69,14.5,48.7,19.5).curveTo(43.3,20.8,37.3,21.8).curveTo(20.9,24.5,0,24.5).curveTo(-0.9,24.5,-1.8,24.5).curveTo(-29.2,24.4,-48.8,19.5).curveTo(-68.8,14.5,-69,7.3).lineTo(-69,-23.4).moveTo(69,-23.5).curveTo(68.8,-16.2,48.7,-11.2).curveTo(43.3,-9.9,37.3,-9).curveTo(34.7,-8.5,32.2,-8.2).curveTo(17.7,-6.3,0,-6.3).curveTo(-0.9,-6.3,-1.8,-6.3).curveTo(-18.4,-6.4,-32.2,-8.2).curveTo(-41.1,-9.4,-48.8,-11.2).curveTo(-68.8,-16.2,-69,-23.4).curveTo(-69,-23.5,-69,-23.6).curveTo(-69,-24,-69,-24.5);
	this.shape_27.setTransform(168.1,460.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginLinearGradientFill(["#F5A406","#FFDF77","#F5A406"],[0.02,0.573,1],-82.3,-168.2,72.7,-168.2).beginStroke().moveTo(-1.8,24).curveTo(-29.2,23.9,-48.8,19).curveTo(-68.8,14,-69,6.8).lineTo(-69,-23.9).curveTo(-68.8,-16.7,-48.8,-11.7).curveTo(-41.1,-9.9,-32.2,-8.7).curveTo(-18.4,-6.9,-1.8,-6.8).lineTo(0,-6.8).curveTo(17.7,-6.8,32.2,-8.7).lineTo(37.3,-9.5).curveTo(43.3,-10.4,48.7,-11.7).curveTo(68.8,-16.7,69,-24).lineTo(68.9,6).lineTo(69,6.7).curveTo(69,14,48.7,19).curveTo(43.3,20.3,37.3,21.3).curveTo(20.9,24,0,24).lineTo(-1.8,24).closePath();
	this.shape_28.setTransform(168.1,461.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#D97700").beginStroke().moveTo(-1.8,9.1).curveTo(-18.4,9,-32.2,7.2).curveTo(-41.1,6,-48.8,4.2).curveTo(-68.8,-0.8,-69,-8).lineTo(-69,-8.2).lineTo(-69,-9.1).lineTo(-59.6,-9.1).curveTo(-58.3,-4.4,-42.3,-1.1).curveTo(-24.8,2.5,-0,2.5).curveTo(24.7,2.5,42.1,-1.1).curveTo(58.1,-4.4,59.6,-9.1).lineTo(68.9,-9.1).lineTo(69,-8.3).lineTo(69,-8.1).curveTo(68.8,-0.8,48.7,4.2).curveTo(43.3,5.5,37.3,6.4).lineTo(32.2,7.2).curveTo(17.7,9.1,0,9.1).lineTo(-1.8,9.1).closePath();
	this.shape_29.setTransform(168.1,445.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill().beginStroke("#930404").setStrokeStyle(1,1,1).moveTo(-83,-26.9).curveTo(-83,-27,-83,-27.1).curveTo(-82.9,-27.7,-82.7,-28.2).curveTo(-81.9,-30.5,-80.9,-32.1).curveTo(-79.3,-34.5,-77.3,-36.2).curveTo(-75.9,-37.4,-74.2,-38.2).curveTo(-72.8,-38.9,-72.2,-39.1).curveTo(-70.3,-39.7,-64.5,-40.6).curveTo(-47.8,-42.9,-37.9,-43.1).curveTo(-34.9,-43.3,-11.1,-43.1).curveTo(-9.6,-43.1,-8,-43.1).curveTo(-5.6,-43,-3.2,-43).curveTo(-1.5,-43,0.2,-43).curveTo(1.9,-43,3.8,-43).curveTo(5.9,-43,8.1,-43).curveTo(10.1,-43,12.1,-43).curveTo(14,-43,15.9,-43).curveTo(17.6,-43.1,19.4,-43.2).curveTo(35.2,-43.3,37.9,-43.1).curveTo(47.7,-42.9,64.4,-40.6).curveTo(70.2,-39.7,72.1,-39.1).curveTo(72.8,-38.9,74.1,-38.2).curveTo(76.5,-37.1,78.6,-35).curveTo(79.1,-34.5,79.6,-33.8).curveTo(80.2,-33,80.9,-32.1).curveTo(82.1,-30.2,83,-27.1).curveTo(83,-27,83,-26.9).lineTo(83.1,-26.9).curveTo(85.5,-26.9,87.8,-26.3).curveTo(90.7,-25.6,93.3,-23.9).curveTo(93.6,-23.6,94,-23.3).curveTo(98.1,-20.2,98.8,-16.1).moveTo(-83,-26.9).curveTo(-83.7,-23.8,-81.8,-20.3).curveTo(-81.7,-20.2,-81.7,-20.2).lineTo(-81.7,-20.1).lineTo(-81.3,-19.7).curveTo(-80.1,-17.7,-77.6,-15.6).curveTo(-74.9,-13.6,-72,-11.8).curveTo(-64.2,-7.1,-53.1,-4).curveTo(-50.4,-3.4,-47.7,-2.7).curveTo(-44.9,-2.2,-41.6,-1.3).curveTo(-38.3,-0.5,-33.8,-0.1).curveTo(-29.4,0.4,-24.5,0.9).curveTo(-19.5,1.3,-13.9,1.6).curveTo(-9.2,2,1.9,2.1).curveTo(9.1,2,13.9,1.6).curveTo(19.5,1.3,24.4,0.9).curveTo(29.3,0.4,33.8,-0.1).curveTo(38.3,-0.5,41.6,-1.3).curveTo(44.9,-2.2,47.7,-2.7).curveTo(50.4,-3.4,53,-4).curveTo(64.2,-7.1,72,-11.8).curveTo(73.5,-12.8,75.1,-13.8).curveTo(76.3,-14.7,77.6,-15.6).curveTo(80.1,-17.7,81.3,-19.7).lineTo(81.6,-20.1).curveTo(81.7,-20.2,81.8,-20.3).curveTo(82.1,-21,82.4,-21.7).curveTo(83.6,-24.4,83,-26.9).moveTo(-98.8,-16.1).curveTo(-98.9,-15.3,-98.9,-14.5).curveTo(-98.9,-14,-98.7,-13).curveTo(-98.7,-12.7,-98.5,-12.3).curveTo(-98.3,-11.5,-97.9,-10.8).curveTo(-97,-9.1,-95.3,-7.2).curveTo(-95.2,-7.1,-95.1,-7).lineTo(-91.2,-3.8).curveTo(-85.9,0.1,-78.6,3.5).curveTo(-56.1,13.9,-24.3,15.2).curveTo(-23.4,15.2,-22.4,15.2).curveTo(-11.5,16.4,1.9,16.3).curveTo(11.5,16.4,22.4,15.2).curveTo(23.4,15.2,24.2,15.2).curveTo(56.1,13.9,78.6,3.5).curveTo(85.8,0.1,91.2,-3.8).lineTo(95.1,-7).curveTo(97.6,-9.8,98.5,-12.3).curveTo(98.5,-12.3,98.6,-12.4).curveTo(98.6,-12.7,98.7,-13).curveTo(98.9,-14,98.9,-14.5).curveTo(98.9,-15.3,98.8,-16.1).lineTo(102,-16.1).curveTo(102.2,-16.1,102.3,-16.1).curveTo(103.2,-16.1,104.2,-15.8).curveTo(105.2,-15.7,106.3,-15.4).curveTo(106.6,-15.2,107,-15.1).curveTo(112.6,-13,115.4,-7.7).lineTo(116,-5.4).lineTo(116.3,-2.6).curveTo(116.3,-1.6,116.1,-0.6).moveTo(-116.1,-0.6).curveTo(-115.6,2.1,-113.9,4.2).curveTo(-110.2,7.9,-104.2,12.3).curveTo(-97,17.4,-72.6,26.5).curveTo(-49,35.2,1.9,35.8).curveTo(2.1,35.8,2.3,35.8).curveTo(2.6,35.8,2.8,35.8).curveTo(48.9,35.2,72.6,26.5).curveTo(97,17.4,104.2,12.3).curveTo(106,11,107.6,9.8).curveTo(111.3,6.9,113.9,4.2).curveTo(114.2,3.8,114.5,3.5).curveTo(115.1,2.5,115.5,1.3).curveTo(115.9,0.4,116.1,-0.6).curveTo(116.4,-0.4,116.7,-0.1).curveTo(117.7,1,118.4,2.8).curveTo(118.5,3.1,118.7,3.5).curveTo(118.9,3.8,119,4.2).curveTo(119.1,4.5,119.1,4.7).lineTo(119.4,5.7).curveTo(119.7,7.4,118.9,9.5).curveTo(118.5,10.4,118,11.3).curveTo(114.8,17.1,104.9,23.1).curveTo(99.8,26.1,94.6,27.9).curveTo(84.3,31.8,62,37.7).curveTo(39.7,43.4,2.4,43.2).curveTo(-39.7,43.4,-62,37.7).curveTo(-84.3,31.8,-94.6,27.9).curveTo(-99.9,26.1,-105,23.1).curveTo(-115.1,16.9,-118.2,11).curveTo(-118.6,10.3,-118.9,9.5).curveTo(-119,9.1,-119.1,8.8).curveTo(-119.7,7.1,-119.5,5.7).lineTo(-119.1,4.7).curveTo(-119.1,4.5,-119,4.2).curveTo(-118.9,3.9,-118.8,3.6).curveTo(-117.8,1.2,-116.8,-0.1).curveTo(-116.4,-0.4,-116.1,-0.6).curveTo(-116.3,-1.6,-116.3,-2.6).lineTo(-116,-5.4).lineTo(-115.4,-7.7).curveTo(-114.9,-8.7,-114.3,-9.5).curveTo(-114.1,-9.9,-113.9,-10.1).curveTo(-111.2,-13.6,-107.1,-15.1).curveTo(-105.8,-15.6,-104.7,-15.7).curveTo(-103.4,-16.1,-102.3,-16.1).curveTo(-102.2,-16.1,-102.1,-16.1).lineTo(-98.8,-16.1).curveTo(-98.2,-20.2,-94,-23.3).curveTo(-92.3,-24.6,-90.4,-25.5).curveTo(-89.2,-26,-88,-26.3).curveTo(-85.7,-26.9,-83.1,-26.9).lineTo(-83,-26.9);
	this.shape_30.setTransform(167.7,500.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#D91313").beginStroke().moveTo(-31.7,39.4).lineTo(-32.4,39.3).lineTo(-33.3,39.2).curveTo(-88.8,31.4,-111.5,12.2).curveTo(-114.6,9.6,-117.2,6.7).lineTo(-118.6,5).curveTo(-117.6,2.6,-116.6,1.3).lineTo(-116,0.8).curveTo(-115.4,3.5,-113.7,5.6).curveTo(-110,9.3,-104,13.7).curveTo(-96.9,18.8,-72.4,27.9).curveTo(-48.8,36.6,2,37.2).lineTo(2.5,37.2).lineTo(3,37.2).curveTo(49.1,36.6,72.8,27.9).curveTo(97.2,18.8,104.3,13.7).lineTo(107.8,11.2).curveTo(111.5,8.3,114.1,5.6).lineTo(114.7,4.9).curveTo(115.3,3.9,115.7,2.7).curveTo(116,1.8,116.2,0.8).lineTo(116.9,1.3).curveTo(117.8,2.4,118.6,4.2).curveTo(118.1,5.4,117.5,6.6).lineTo(116.2,8.6).curveTo(114.2,11.4,111.2,13.8).curveTo(74,41.8,8.9,41.8).curveTo(-10.2,41.8,-31.7,39.4).closePath().moveTo(-46.4,19).curveTo(-91.5,8.9,-101.6,-5.3).curveTo(-103.1,-7.5,-103.9,-9.9).curveTo(-104.6,-12.1,-104.5,-14.3).curveTo(-103.2,-14.7,-102.1,-14.7).lineTo(-101.9,-14.7).lineTo(-98.6,-14.7).curveTo(-98.8,-13.9,-98.8,-13.1).lineTo(-98.5,-11.6).lineTo(-98.3,-10.9).lineTo(-97.7,-9.4).curveTo(-96.8,-7.7,-95.1,-5.8).lineTo(-94.9,-5.6).lineTo(-91,-2.4).curveTo(-85.7,1.5,-78.5,4.9).curveTo(-55.9,15.3,-24.1,16.6).lineTo(-22.3,16.6).curveTo(-11.3,17.8,2,17.7).curveTo(11.7,17.8,22.6,16.6).lineTo(24.4,16.6).curveTo(56.3,15.3,78.8,4.9).curveTo(86,1.5,91.4,-2.4).lineTo(95.3,-5.6).curveTo(97.8,-8.4,98.7,-10.9).lineTo(98.8,-11).lineTo(98.8,-11.6).lineTo(99,-13.1).lineTo(98.9,-14.7).lineTo(102.2,-14.7).lineTo(102.5,-14.7).curveTo(103.4,-14.7,104.4,-14.4).curveTo(104.7,-11.8,104,-9.2).curveTo(100.1,5.2,65.8,15.1).curveTo(38.9,22.4,4.2,22.4).curveTo(-19.4,22.4,-46.4,19).closePath().moveTo(-86.8,-19.8).curveTo(-87.8,-22.2,-87.8,-24.9).curveTo(-85.5,-25.5,-83,-25.5).lineTo(-82.9,-25.5).curveTo(-83.5,-22.4,-81.6,-18.9).lineTo(-81.5,-18.8).lineTo(-81.5,-18.7).lineTo(-81.1,-18.3).curveTo(-79.9,-16.3,-77.5,-14.2).curveTo(-74.7,-12.2,-71.9,-10.4).curveTo(-64,-5.7,-52.9,-2.6).lineTo(-47.6,-1.3).curveTo(-44.8,-0.8,-41.4,0.1).curveTo(-38.2,0.9,-33.6,1.3).lineTo(-24.3,2.3).lineTo(-13.7,3).curveTo(-9,3.4,2,3.5).curveTo(9.3,3.4,14.1,3).lineTo(24.6,2.3).lineTo(34,1.3).curveTo(38.5,0.9,41.8,0.1).curveTo(45,-0.8,47.8,-1.3).lineTo(53.2,-2.6).curveTo(64.4,-5.7,72.1,-10.4).lineTo(75.3,-12.4).lineTo(77.8,-14.2).curveTo(80.2,-16.3,81.5,-18.3).lineTo(81.8,-18.7).lineTo(81.9,-18.9).lineTo(82.6,-20.3).curveTo(83.8,-23,83.2,-25.5).lineTo(83.3,-25.5).curveTo(85.7,-25.5,88,-24.9).curveTo(88.5,-21.8,87.9,-19).curveTo(86.2,-11.8,77,-6.6).curveTo(56.9,4.9,0.8,7.4).curveTo(-78.6,4.5,-86.8,-19.8).closePath().moveTo(-74.8,-29.7).curveTo(-76.4,-32.1,-77.2,-34.8).curveTo(-75.7,-36,-74,-36.8).curveTo(-72.7,-37.5,-72,-37.7).curveTo(-70.1,-38.3,-64.3,-39.2).curveTo(-47.6,-41.5,-37.8,-41.7).curveTo(-34.7,-41.9,-11,-41.7).lineTo(-7.9,-41.7).lineTo(-3,-41.6).lineTo(0.4,-41.6).lineTo(4,-41.6).lineTo(8.3,-41.6).lineTo(12.3,-41.6).lineTo(16.1,-41.6).lineTo(19.6,-41.8).curveTo(35.4,-41.9,38.1,-41.7).curveTo(47.9,-41.5,64.6,-39.2).curveTo(70.4,-38.3,72.3,-37.7).curveTo(73,-37.5,74.3,-36.8).curveTo(76.7,-35.7,78.8,-33.6).curveTo(78,-31.2,76.3,-29).curveTo(63.6,-12.3,1.6,-10.1).curveTo(-62.2,-10.9,-74.8,-29.7).closePath();
	this.shape_31.setTransform(167.6,499.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#F04040").beginStroke().moveTo(2.5,37.2).curveTo(-39.6,37.4,-61.9,31.6).curveTo(-84.2,25.8,-94.5,21.9).curveTo(-99.8,20,-104.9,17).curveTo(-115,10.8,-118.1,5).lineTo(-117.2,-0.8).curveTo(-114.7,2.1,-111.6,4.8).curveTo(-88.9,23.9,-33.3,31.7).lineTo(-32.5,31.9).lineTo(-31.8,31.9).curveTo(63.1,42.5,111.1,6.4).curveTo(114.2,4,116.2,1.1).lineTo(118.1,5.3).curveTo(114.9,11.1,105,17).curveTo(99.9,20,94.7,21.9).curveTo(84.4,25.8,62.1,31.6).curveTo(40.5,37.2,5,37.2).lineTo(2.5,37.2).closePath().moveTo(2.4,29.7).lineTo(2,29.7).curveTo(-48.9,29.2,-72.5,20.4).curveTo(-96.9,11.3,-104.1,6.2).curveTo(-110.1,1.9,-113.8,-1.8).curveTo(-115.5,-4,-116,-6.7).curveTo(-114.2,-10.6,-112.4,-13).curveTo(-100,3.1,-88.6,4).curveTo(-105.4,-6.2,-107.3,-17.4).curveTo(-105.6,-18,-104,-17.4).curveTo(-103.2,-15,-101.7,-12.7).curveTo(-91.5,1.4,-46.5,11.6).curveTo(20.5,19.9,65.8,7.6).curveTo(100,-2.3,103.9,-16.6).curveTo(105.7,-17,107.4,-16.3).curveTo(111.8,-14.3,115.6,-4.7).curveTo(115.2,-3.6,114.6,-2.6).lineTo(114,-1.8).curveTo(111.4,0.8,107.7,3.7).lineTo(104.3,6.2).curveTo(97.1,11.3,72.7,20.4).curveTo(49,29.2,2.9,29.7).lineTo(2.4,29.7).closePath().moveTo(2,10.2).curveTo(-11.4,10.3,-22.3,9.2).lineTo(-24.2,9.1).curveTo(-56,7.8,-78.5,-2.6).curveTo(-85.8,-6,-91.1,-9.8).lineTo(-95,-13).lineTo(-95.2,-13.2).curveTo(-96.9,-15.1,-97.8,-16.8).curveTo(-94.5,-25.3,-90.4,-26.9).curveTo(-88.7,-27.7,-86.9,-27.2).curveTo(-78.6,-3,0.8,-0).curveTo(56.8,-2.5,76.9,-14.1).curveTo(86.1,-19.3,87.8,-26.5).curveTo(89.3,-26.8,90.9,-26.3).curveTo(95.1,-25.1,98.7,-18.5).lineTo(98.6,-18.3).curveTo(97.7,-15.9,95.2,-13).lineTo(91.3,-9.8).curveTo(85.9,-6,78.7,-2.6).curveTo(56.2,7.8,24.3,9.1).lineTo(22.5,9.2).curveTo(12.5,10.2,3.5,10.2).lineTo(2,10.2).closePath().moveTo(-13.8,-4.4).lineTo(-24.4,-5.2).lineTo(-33.7,-6.1).curveTo(-38.2,-6.6,-41.5,-7.4).curveTo(-44.8,-8.3,-47.6,-8.8).lineTo(-53,-10.1).curveTo(-64.1,-13.1,-71.9,-17.8).curveTo(-74.8,-19.7,-77.5,-21.7).curveTo(-80,-23.8,-81.2,-25.8).lineTo(-81.6,-26.1).lineTo(-81.6,-26.2).curveTo(-80.8,-32.3,-77.8,-35.3).curveTo(-76.5,-36.5,-74.9,-37.2).curveTo(-62.2,-18.4,1.5,-17.6).curveTo(63.5,-19.8,76.2,-36.4).curveTo(77.4,-36,78.6,-34.7).curveTo(80.5,-32.5,82.5,-27.7).lineTo(81.9,-26.4).lineTo(81.7,-26.1).lineTo(81.4,-25.8).curveTo(80.2,-23.8,77.7,-21.7).lineTo(75.2,-19.8).lineTo(72.1,-17.8).curveTo(64.3,-13.1,53.1,-10.1).lineTo(47.8,-8.8).curveTo(45,-8.3,41.7,-7.4).curveTo(38.4,-6.6,33.9,-6.1).lineTo(24.5,-5.2).lineTo(14,-4.4).curveTo(9.2,-4.1,2,-3.9).curveTo(-9.1,-4.1,-13.8,-4.4).closePath();
	this.shape_32.setTransform(167.6,506.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FF7070").beginStroke().moveTo(116.1,19.6).lineTo(117.3,17.7).curveTo(117.9,16.4,118.4,15.2).lineTo(118.7,15.9).lineTo(119,16.7).lineTo(119.1,17.1).lineTo(119.4,18.1).curveTo(119.7,19.9,118.9,21.9).lineTo(118,23.7).closePath().moveTo(-118.9,21.9).lineTo(-119.1,21.2).curveTo(-119.7,19.6,-119.5,18.1).lineTo(-119.1,17.1).lineTo(-119,16.7).lineTo(-118.8,16).lineTo(-117.3,17.7).lineTo(-118.2,23.4).lineTo(-118.9,21.9).closePath().moveTo(-112.5,5.4).curveTo(-114.3,7.9,-116.1,11.8).curveTo(-116.3,10.8,-116.3,9.8).lineTo(-116,7).lineTo(-115.4,4.7).curveTo(-114.9,3.8,-114.3,2.9).lineTo(-113.9,2.3).curveTo(-111.2,-1.2,-107.1,-2.7).curveTo(-105.8,-3.2,-104.7,-3.3).curveTo(-104.8,-1.1,-104.1,1.1).curveTo(-105.7,0.5,-107.4,1.1).curveTo(-105.5,12.3,-88.7,22.5).curveTo(-100.1,21.6,-112.5,5.4).closePath().moveTo(107.3,2.2).curveTo(105.6,1.4,103.8,1.8).curveTo(104.5,-0.7,104.2,-3.4).lineTo(106.3,-2.9).lineTo(107,-2.7).curveTo(112.6,-0.6,115.4,4.7).lineTo(116,7).lineTo(116.3,9.8).curveTo(116.3,10.8,116.1,11.8).curveTo(115.9,12.8,115.5,13.7).curveTo(111.7,4.1,107.3,2.2).closePath().moveTo(-98.5,0.1).lineTo(-98.7,-0.6).lineTo(-98.9,-2).curveTo(-98.9,-2.9,-98.8,-3.7).curveTo(-98.2,-7.8,-94,-10.9).curveTo(-92.3,-12.2,-90.4,-13).curveTo(-89.2,-13.6,-88,-13.8).curveTo(-87.9,-11.2,-87,-8.8).curveTo(-88.8,-9.2,-90.5,-8.4).curveTo(-94.6,-6.8,-97.9,1.7).lineTo(-98.5,0.1).closePath().moveTo(90.8,-7.9).curveTo(89.2,-8.3,87.7,-8).curveTo(88.3,-10.8,87.8,-13.9).curveTo(90.7,-13.1,93.3,-11.5).lineTo(94,-10.9).curveTo(98.1,-7.8,98.8,-3.7).lineTo(98.9,-2).lineTo(98.7,-0.6).lineTo(98.6,0).curveTo(95,-6.6,90.8,-7.9).closePath().moveTo(-81.8,-7.9).curveTo(-83.7,-11.3,-83,-14.5).lineTo(-83,-14.6).lineTo(-82.7,-15.7).curveTo(-81.9,-18.1,-80.9,-19.7).curveTo(-79.3,-22.1,-77.3,-23.7).curveTo(-76.6,-21.1,-75,-18.7).curveTo(-76.6,-18.1,-77.9,-16.8).curveTo(-80.9,-13.8,-81.7,-7.8).lineTo(-81.8,-7.9).closePath().moveTo(78.5,-16.3).curveTo(77.3,-17.6,76.1,-18).curveTo(77.8,-20.2,78.6,-22.6).lineTo(79.6,-21.4).lineTo(80.9,-19.7).curveTo(82.1,-17.8,83,-14.6).lineTo(83,-14.5).curveTo(83.6,-12,82.4,-9.2).curveTo(80.4,-14,78.5,-16.3).closePath();
	this.shape_33.setTransform(167.7,488.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("rgba(0,0,0,0.4)").beginStroke().moveTo(-60,21.3).curveTo(-72.9,18.8,-84.4,15).curveTo(-119.3,3.8,-119.3,-12.1).curveTo(-119.3,-28,-84.4,-39.4).curveTo(-49.4,-50.6,-0,-50.6).curveTo(49.3,-50.6,84.3,-39.4).curveTo(119.3,-28,119.3,-12).curveTo(119.3,3.8,84.3,15).curveTo(71.7,19.1,57.1,21.8).curveTo(62.9,49.8,-3.2,50.6).curveTo(-64.8,49.1,-60,21.3).closePath();
	this.shape_34.setTransform(167.3,529.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(130));

	// Layer 5
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(-5.9,-6.2).curveTo(-5.2,-6.6,-5.2,-6.7).curveTo(-4.1,-7.5,-3.6,-7.8).curveTo(0.4,-10.4,4,-12.7).curveTo(6.2,-14,8.4,-15.3).lineTo(8.4,-15.4).curveTo(13.3,-18.4,16.2,-21.6).curveTo(16.3,-21.8,16.5,-22).curveTo(16.8,-22.7,17.1,-23.4).curveTo(17.1,-23.5,17.1,-23.5).curveTo(18,-25.8,17.2,-29.2).moveTo(13.8,-29.2).curveTo(14,-29,14.2,-28.8).curveTo(14.8,-26.6,14.4,-25.2).lineTo(14.4,-25.1).curveTo(14.2,-24.8,14.1,-24.4).curveTo(11.4,-21.6,7.1,-18.9).curveTo(5.1,-17.8,3,-16.4).curveTo(-0.8,-14.1,-4.9,-11.4).curveTo(-8.9,-8.8,-12.4,-6.5).curveTo(-12.4,-6.5,-12.5,-6.5).curveTo(-12.7,-6.4,-12.9,-6.2).lineTo(-13.2,-6.1).moveTo(-12.9,-6.2).curveTo(-13,-6.1,-13.1,-6.1).lineTo(-13.2,-6.1).lineTo(-17.6,-3.8).moveTo(-17.6,0.7).curveTo(-17.3,0.5,-17,0.4).curveTo(-14.8,-0.8,-12.4,-2.2).lineTo(-12.4,-2.2).lineTo(-5.9,-6.2).curveTo(-2.9,-6.8,-0.7,-6.9).curveTo(-0.5,-6.9,-0.2,-6.9).lineTo(6,-7).curveTo(6.1,-7,6.1,-7).curveTo(14.2,-6.3,16.6,-2.3).curveTo(16.8,-2.1,16.9,-1.8).curveTo(17.4,-0.1,17.6,1.5).lineTo(17.6,1.5).curveTo(17.6,2,17.6,2.5).curveTo(17.6,4.1,17.1,5.4).curveTo(16.9,5.9,16.6,6.4).curveTo(16.6,6.5,16.5,6.5).curveTo(14.8,9.3,12.7,11.3).lineTo(12.7,11.3).curveTo(11.6,12.4,10.4,13.2).curveTo(9.4,13.9,8.4,14.5).lineTo(8.3,14.6).curveTo(7.4,15.2,6.4,15.7).curveTo(6.3,15.7,6.3,15.7).lineTo(6.2,15.8).curveTo(3.2,17.8,-2.2,20.7).lineTo(-2.3,20.7).curveTo(-5.9,22.6,-8.3,24).moveTo(-17.6,24.9).lineTo(-15.8,24).curveTo(-15.5,23.8,-15.2,23.6).curveTo(-14,22.9,-12.1,21.8).curveTo(-9.4,20.2,-3.4,17).curveTo(-0.1,15.2,2.4,13.8).curveTo(3.8,12.9,5,12.2).lineTo(5,12.2).curveTo(6,11.6,7.1,11).lineTo(7.1,11).curveTo(8.3,10.2,9.4,9.3).curveTo(10.2,8.8,11,8).curveTo(12.7,6.4,14.1,4.1).curveTo(14.3,3.9,14.4,3.6).curveTo(14.5,3.1,14.5,2.5).curveTo(14.6,2,14.5,1.5).lineTo(14.5,1.5).curveTo(14.4,0.8,14.2,0).curveTo(12.2,-2.4,6.4,-2.9).curveTo(6.1,-3.1,5.9,-3.1).lineTo(-0.2,-2.9).curveTo(-0.5,-2.9,-0.7,-2.9).curveTo(-5.8,-2.8,-12.4,-2.2).moveTo(-9.2,24.5).lineTo(-9.3,24.5).curveTo(-8.9,24.2,-8.3,24).lineTo(-9.2,24.5).lineTo(-15.2,28).lineTo(-15.3,28).curveTo(-16.5,28.6,-17.6,29.2);
	this.shape_35.setTransform(189.9,384.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-17.6,24.9).lineTo(-15.8,24).lineTo(-15.2,23.6).lineTo(-12.1,21.8).curveTo(-9.4,20.2,-3.4,17).lineTo(2.4,13.8).lineTo(5,12.2).lineTo(5,12.2).lineTo(7.1,11).lineTo(7.1,11).curveTo(8.3,10.2,9.4,9.3).curveTo(10.2,8.8,11,8).curveTo(12.7,6.4,14.1,4.1).lineTo(14.4,3.6).lineTo(14.5,2.5).lineTo(14.5,1.5).lineTo(14.5,1.5).lineTo(14.2,0).curveTo(12.2,-2.4,6.4,-2.9).lineTo(5.9,-3.1).lineTo(-0.2,-2.9).lineTo(-0.7,-2.9).curveTo(-5.8,-2.8,-12.4,-2.2).lineTo(-5.9,-6.2).lineTo(-12.4,-2.2).lineTo(-12.4,-2.2).lineTo(-17,0.4).lineTo(-17.6,0.7).lineTo(-17.6,-3.8).lineTo(-13.2,-6.1).lineTo(-13.1,-6.1).lineTo(-12.9,-6.2).lineTo(-12.5,-6.5).lineTo(-12.4,-6.5).lineTo(-4.9,-11.4).curveTo(-0.8,-14.1,3,-16.4).lineTo(7.1,-18.9).curveTo(11.4,-21.6,14.1,-24.4).lineTo(14.4,-25.1).lineTo(14.4,-25.2).curveTo(14.8,-26.6,14.2,-28.8).lineTo(13.8,-29.2).lineTo(17.2,-29.2).curveTo(18,-25.8,17.1,-23.5).lineTo(17.1,-23.4).lineTo(16.5,-22).lineTo(16.2,-21.6).curveTo(13.3,-18.4,8.4,-15.4).lineTo(8.4,-15.3).lineTo(4,-12.7).lineTo(-3.6,-7.8).lineTo(-5.2,-6.7).lineTo(-5.9,-6.2).curveTo(-2.9,-6.8,-0.7,-6.9).lineTo(-0.2,-6.9).lineTo(6,-7).lineTo(6.1,-7).curveTo(14.2,-6.3,16.6,-2.3).lineTo(16.9,-1.8).curveTo(17.4,-0.1,17.6,1.5).lineTo(17.6,1.5).lineTo(17.6,2.5).curveTo(17.6,4.1,17.1,5.4).lineTo(16.6,6.4).lineTo(16.5,6.5).curveTo(14.8,9.3,12.7,11.3).lineTo(12.7,11.3).curveTo(11.6,12.4,10.4,13.2).curveTo(9.4,13.9,8.4,14.5).lineTo(8.3,14.6).lineTo(6.4,15.7).lineTo(6.3,15.7).lineTo(6.2,15.8).curveTo(3.2,17.8,-2.2,20.7).lineTo(-2.3,20.7).curveTo(-5.9,22.6,-8.3,24).lineTo(-9.3,24.5).lineTo(-9.2,24.5).lineTo(-15.2,28).lineTo(-15.3,28).lineTo(-17.6,29.2).closePath();
	this.shape_36.setTransform(189.9,384.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35}]},104).to({state:[]},25).wait(1));

	// Layer 10
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(-18.2,15.3).curveTo(-15.1,13.8,-11.5,11.7).lineTo(-11.5,11.7).lineTo(-5,7.6).curveTo(-4.3,7.2,-4.3,7.1).curveTo(-3.2,6.4,-2.7,6.1).curveTo(1.3,3.4,4.9,1.2).curveTo(7.1,-0.2,9.3,-1.5).lineTo(9.3,-1.5).curveTo(14.2,-4.6,17.1,-7.7).curveTo(17.2,-7.9,17.4,-8.2).curveTo(17.7,-8.9,18,-9.5).curveTo(18,-9.6,18,-9.7).curveTo(18.9,-12,18.1,-15.4).moveTo(14.7,-15.4).curveTo(14.9,-15.2,15.1,-14.9).curveTo(15.7,-12.7,15.3,-11.3).lineTo(15.3,-11.2).curveTo(15.1,-10.9,15,-10.5).curveTo(12.3,-7.8,8,-5.1).curveTo(6,-3.9,3.9,-2.6).curveTo(0.1,-0.3,-4,2.5).curveTo(-8.1,5.1,-11.6,7.4).curveTo(-11.8,7.5,-12,7.6).curveTo(-12.1,7.7,-12.2,7.8).lineTo(-12.3,7.8).moveTo(-12,7.6).lineTo(-12.3,7.8).lineTo(-18.5,11);
	this.shape_37.setTransform(189,371);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-18.5,15.3).lineTo(-18.5,11).lineTo(-12.3,7.8).lineTo(-12.2,7.8).lineTo(-12,7.7).lineTo(-11.6,7.4).lineTo(-4,2.5).curveTo(0.1,-0.3,3.9,-2.6).lineTo(8,-5).curveTo(12.3,-7.7,15,-10.5).lineTo(15.3,-11.2).lineTo(15.3,-11.3).curveTo(15.7,-12.7,15.1,-14.9).lineTo(14.7,-15.4).lineTo(18.1,-15.4).curveTo(18.9,-11.9,18,-9.7).lineTo(18,-9.5).lineTo(17.4,-8.2).lineTo(17.1,-7.7).curveTo(14.2,-4.6,9.3,-1.5).lineTo(9.3,-1.4).lineTo(4.9,1.2).lineTo(-2.7,6.1).lineTo(-4.3,7.1).lineTo(-5,7.7).lineTo(-11.5,11.7).lineTo(-11.5,11.7).curveTo(-15.1,13.8,-18.2,15.3).closePath();
	this.shape_38.setTransform(189,371);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(16.6,-0.9).curveTo(7.9,2.2,-0.4,3.4).curveTo(-9.4,4.7,-12.5,2.9).curveTo(-13.3,2,-13.6,1.3).curveTo(-12.2,-1.7,-7.4,-2.8).curveTo(-1.6,-3.8,5.5,-3.9).lineTo(12.4,-3.7).lineTo(12.4,-7.9).lineTo(5.5,-7.9).curveTo(-1.9,-7.7,-7.8,-6.8).lineTo(-7.9,-6.7).curveTo(-15.1,-5,-16.5,0.2).curveTo(-16.6,0.5,-16.6,0.8).curveTo(-16.9,3.6,-14.2,6.2).curveTo(-14.1,6.3,-13.9,6.4).curveTo(-10.4,8.8,-0.1,7.4).curveTo(8.1,6.3,16.6,3.3);
	this.shape_39.setTransform(144.5,387.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-13.9,6.4).lineTo(-14.2,6.2).curveTo(-16.9,3.6,-16.6,0.8).lineTo(-16.5,0.2).curveTo(-15.1,-5,-7.9,-6.7).lineTo(-7.8,-6.8).curveTo(-1.9,-7.7,5.5,-7.9).lineTo(12.4,-7.9).lineTo(12.4,-3.7).lineTo(5.5,-3.9).curveTo(-1.6,-3.8,-7.4,-2.8).curveTo(-12.2,-1.7,-13.6,1.3).curveTo(-13.3,2,-12.5,2.9).curveTo(-9.4,4.7,-0.4,3.4).curveTo(7.9,2.2,16.6,-0.9).lineTo(16.6,3.3).curveTo(8.1,6.3,-0.1,7.4).curveTo(-3.8,7.9,-6.7,7.9).curveTo(-11.7,7.9,-13.9,6.4).closePath();
	this.shape_40.setTransform(144.5,387.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37}]},68).to({state:[]},13).to({state:[{t:this.shape_40},{t:this.shape_39}]},15).to({state:[]},33).wait(1));

	// Layer 4
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(10.1,-20.9).lineTo(9.8,-20.7).lineTo(9.9,-20.7).curveTo(10,-20.8,10.1,-20.9).closePath().moveTo(10.1,-20.9).curveTo(10.1,-20.9,10.1,-20.9).moveTo(-10.1,-7.6).curveTo(-6.3,-8.8,-2.4,-10.3).curveTo(-0.3,-11.1,2,-12.2).curveTo(5.7,-14,10.1,-16.6).moveTo(9.8,-20.7).lineTo(0.5,-15.8).curveTo(-1.1,-15,-2.5,-14.4).curveTo(-2.9,-14.3,-3.3,-14.1).curveTo(-6.7,-12.8,-10.1,-11.8).moveTo(-10.1,16.8).curveTo(-6.7,15.7,-3.3,14.4).lineTo(-3.3,14.5).curveTo(-1.4,13.6,0.7,12.7).lineTo(7.2,9.3).curveTo(7.5,9.1,7.8,9).curveTo(8.7,8.4,10.1,7.6).moveTo(10.1,12).lineTo(7.8,13.3).lineTo(7.7,13.3).curveTo(2,16.5,-2.4,18.2).curveTo(-6.3,19.7,-10.1,20.9);
	this.shape_41.setTransform(167,399.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill().beginStroke("#446083").setStrokeStyle(1,1,1).moveTo(-10.1,-13.9).lineTo(-10.1,-46.1).lineTo(10.1,-46.1).lineTo(10.1,-23).moveTo(10.1,9.9).lineTo(10.1,45.9).curveTo(-0.1,46.3,-10.1,45.9).lineTo(-10.1,18.8).moveTo(10.1,-18.7).lineTo(10.1,5.5).moveTo(-10.1,14.6).lineTo(-10.1,-9.7);
	this.shape_42.setTransform(167,401.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginLinearGradientFill(["#8597AD","#BACEE9","#8597AD"],[0.008,0.569,1],-10.1,0,10.1,0).beginStroke().moveTo(-10.1,45.9).lineTo(-10.1,18.8).curveTo(-6.3,17.6,-2.4,16.1).curveTo(2,14.4,7.7,11.2).lineTo(7.7,11.2).lineTo(10.1,9.9).lineTo(10.1,45.9).curveTo(5,46.1,-0.1,46.1).curveTo(-5.1,46.1,-10.1,45.9).closePath().moveTo(-10.1,-9.7).curveTo(-6.3,-10.9,-2.4,-12.4).curveTo(-0.4,-13.2,2,-14.3).curveTo(5.7,-16.1,10.1,-18.7).lineTo(10.1,5.5).lineTo(7.7,6.9).lineTo(7.2,7.2).lineTo(0.7,10.6).lineTo(-3.2,12.4).lineTo(-3.2,12.3).curveTo(-6.7,13.6,-10.1,14.6).closePath().moveTo(-10.1,-46.1).lineTo(10.1,-46.1).lineTo(10.1,-23).lineTo(10.1,-23).lineTo(9.7,-22.8).lineTo(0.4,-17.9).lineTo(-2.5,-16.5).lineTo(-3.2,-16.2).curveTo(-6.7,-14.9,-10.1,-13.9).closePath().moveTo(9.7,-22.8).lineTo(10.1,-23).lineTo(9.8,-22.8).closePath().moveTo(9.7,-22.8).closePath();
	this.shape_43.setTransform(167,401.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-10.1,16.8).curveTo(-6.7,15.7,-3.2,14.4).lineTo(-3.2,14.5).lineTo(0.7,12.7).lineTo(7.2,9.3).lineTo(7.7,9).lineTo(10.1,7.6).lineTo(10.1,12).lineTo(7.7,13.3).lineTo(7.7,13.3).curveTo(2,16.5,-2.4,18.2).curveTo(-6.3,19.7,-10.1,20.9).closePath().moveTo(-10.1,-11.8).curveTo(-6.7,-12.8,-3.2,-14.1).lineTo(-2.5,-14.4).lineTo(0.4,-15.8).lineTo(9.7,-20.7).lineTo(9.8,-20.7).lineTo(10.1,-20.9).lineTo(10.1,-20.9).lineTo(10.1,-16.6).curveTo(5.7,-14,2,-12.2).curveTo(-0.4,-11.1,-2.4,-10.3).curveTo(-6.3,-8.8,-10.1,-7.6).closePath();
	this.shape_44.setTransform(167,399.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},61).to({state:[]},20).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},15).to({state:[]},24).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[]},7).wait(2));

	// Layer 3
	this.instance_4 = new lib.gum("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(190.7,336.8,0.875,0.875,0,0,0,27.3,27.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},0).wait(1).to({x:186.8,y:340.1},0).wait(1).to({x:182.9,y:343.4},0).wait(1).to({x:179,y:346.7},0).wait(1).to({x:175.1,y:349.9},0).wait(1).to({x:171.2,y:353.2},0).wait(1).to({x:167,y:355.9},0).wait(1).to({x:162.8,y:358.2},0).wait(1).to({x:158.6,y:360.7},0).wait(1).to({x:154.4,y:362.6},0).wait(1).to({x:150.2,y:364.1},0).wait(1).to({x:146.1,y:365.5},0).wait(1).to({x:141.9,y:367.2},0).wait(1).to({x:144.2,y:366.9},0).wait(1).to({x:146.4,y:366},0).wait(1).to({x:148.7,y:365.1},0).wait(1).to({x:151,y:364.2},0).wait(1).to({x:153.3,y:363.3},0).wait(1).to({x:155.6,y:362.3},0).wait(1).to({x:157.9,y:361.4},0).wait(1).to({x:162.6,y:360.5},0).wait(1).to({x:167.4,y:359.6},0).wait(1).to({x:172.1,y:358.7},0).wait(1).to({x:176.8,y:357.8},0).wait(1).to({x:181.6,y:356.9},0).wait(1).to({x:186.3,y:355.9},0).wait(1).to({x:191.1,y:355},0).wait(1).to({x:195.1,y:356.5},0).wait(1).to({x:199.1,y:358.1},0).wait(1).to({x:203.1,y:359.6},0).wait(1).to({x:203.9,y:361.1},0).wait(1).to({x:204.3,y:362.6},0).wait(1).to({y:365.6},0).wait(1).to({x:199.9,y:368.6},0).wait(1).to({x:194.3,y:371.6},0).wait(1).to({x:188.7,y:374.6},0).wait(1).to({x:183.1,y:377.6},0).wait(1).to({x:177.5,y:380.6},0).wait(1).to({x:172.9,y:383},0).wait(1).to({x:168.4,y:385.4},0).wait(1).to({x:163.8,y:387.8},0).wait(1).to({x:159.2,y:390.2},0).wait(1).to({x:154.7,y:392.6},0).wait(1).to({x:151.5,y:393.3},0).wait(1).to({x:148.3,y:393.9},0).wait(1).to({x:145.1,y:394.5},0).wait(1).to({x:141.9,y:395.2},0).wait(1).to({x:138.7,y:395.8},0).wait(1).to({y:394},0).wait(1).to({y:392.1},0).wait(1).to({y:390.3},0).wait(1).to({y:388.5},0).wait(1).to({y:386.6},0).wait(1).to({x:142.9,y:386.2},0).wait(1).to({x:147.2,y:385.8},0).wait(1).to({x:151.4,y:385.4},0).wait(1).to({x:155.6,y:385},0).wait(1).to({x:159.9,y:384.6},0).wait(1).to({x:165.4,y:385},0).wait(1).to({x:170.9,y:385.4},0).wait(1).to({x:176.4,y:385.8},0).wait(1).to({x:182,y:386.2},0).wait(1).to({x:187.5,y:386.6},0).wait(1).to({x:191,y:388.7},0).wait(1).to({x:194.5,y:390.8},0).wait(1).to({x:198,y:392.9},0).wait(1).to({x:201.6,y:394.9},0).wait(1).to({x:204.3,y:397},0).wait(1).to({x:204.6,y:403.4},0).wait(1).to({x:204.1,y:409.8},0).wait(1).to({x:203.6,y:416.2},0).wait(1).to({x:203.9,y:422.6},0).wait(1).to({x:200.3,y:423.9},0).wait(1).to({x:191.1,y:428.4},0).wait(1).to({x:181.9,y:433.7},0).wait(1).to({x:172.7,y:439},0).wait(1).to({x:166.4,y:442.5},0).wait(1).to({x:160,y:446.7},0).wait(1).to({x:144.9,y:456.5},0).wait(1).to({x:144.2,y:459.2},0).wait(1).to({x:138.7,y:465},0).to({_off:true},1).wait(1));

	// 레이어 1
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(-1.2,0.7).lineTo(1.2,-0.7);
	this.shape_45.setTransform(175.9,412.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill().beginStroke("#446083").setStrokeStyle(1,1,1).moveTo(0,0.8).lineTo(0,-0.8);
	this.shape_46.setTransform(177.1,412.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(9,-22.3).lineTo(-0.3,-17.4).curveTo(-1.8,-16.6,-3.3,-15.9).curveTo(-3.6,-15.9,-4,-15.7).curveTo(-5.3,-15.2,-6.6,-14.8).curveTo(-15.3,-11.7,-23.6,-10.4).curveTo(-32.6,-9.2,-35.7,-11).curveTo(-36.5,-11.9,-36.8,-12.6).curveTo(-35.4,-15.6,-30.6,-16.7).curveTo(-24.8,-17.7,-17.7,-17.8).lineTo(-10.8,-17.6).lineTo(-10.8,-21.8).lineTo(-17.7,-21.8).curveTo(-25.1,-21.6,-31,-20.7).lineTo(-31.1,-20.6).curveTo(-38.3,-18.9,-39.7,-13.7).curveTo(-39.8,-13.4,-39.8,-13.1).curveTo(-40.1,-10.3,-37.4,-7.7).curveTo(-37.3,-7.6,-37.1,-7.5).curveTo(-33.6,-5.1,-23.3,-6.4).curveTo(-15.1,-7.6,-6.6,-10.6).curveTo(-4.9,-11.2,-3.1,-11.9).curveTo(-1.1,-12.7,1.3,-13.8).curveTo(2.2,-14.3,3.2,-14.8).curveTo(3.9,-15.1,4.6,-15.5).curveTo(4.9,-15.7,5.2,-15.8).curveTo(7.2,-16.9,9.4,-18.2).curveTo(9.6,-18.3,9.8,-18.4).lineTo(9.9,-18.4).lineTo(16.3,-22.4).curveTo(17,-22.9,17.1,-22.9).curveTo(18.1,-23.7,18.7,-24).curveTo(22.6,-26.7,26.2,-28.9).curveTo(28.5,-30.3,30.6,-31.6).lineTo(30.6,-31.6).curveTo(35.5,-34.7,38.4,-37.8).curveTo(38.6,-38,38.7,-38.3).curveTo(39.1,-38.9,39.3,-39.6).curveTo(39.4,-39.7,39.4,-39.8).curveTo(40.3,-42.1,39.5,-45.4).moveTo(36,-45.4).curveTo(36.2,-45.3,36.4,-45).curveTo(37,-42.8,36.6,-41.4).lineTo(36.6,-41.3).curveTo(36.5,-41,36.3,-40.6).curveTo(33.7,-37.9,29.4,-35.2).curveTo(27.4,-34,25.3,-32.7).curveTo(21.5,-30.4,17.3,-27.6).curveTo(13.3,-25,9.8,-22.7).curveTo(9.8,-22.7,9.8,-22.7).curveTo(9.6,-22.6,9.4,-22.5).curveTo(9.3,-22.5,9.3,-22.4).curveTo(9.2,-22.4,9.1,-22.3).lineTo(9,-22.3).moveTo(9.3,-22.4).lineTo(9,-22.3).moveTo(7,11.8).lineTo(7,11.8).curveTo(5.8,12.4,4.6,13).curveTo(0.3,15.3,-3.1,16.6).curveTo(-13.4,20.6,-23.3,22.1).curveTo(-33.6,23.4,-37.1,20.9).curveTo(-37.3,20.9,-37.4,20.8).curveTo(-40.1,18.2,-39.8,15.4).curveTo(-39.8,15.1,-39.7,14.8).curveTo(-38.3,9.6,-31.1,7.9).lineTo(-31,7.8).curveTo(-25.1,6.8,-17.7,6.8).lineTo(-10.8,7).lineTo(-10.8,10.9).lineTo(-17.7,10.7).curveTo(-24.8,10.8,-30.6,11.8).curveTo(-35.4,12.9,-36.6,15.7).curveTo(-36.5,16.6,-35.7,17.5).curveTo(-32.6,19.3,-23.6,18.1).curveTo(-14,16.7,-4,12.8).lineTo(-4,12.9).curveTo(-2.1,12.1,-0,11.1).lineTo(6.5,7.8).curveTo(6.7,7.6,7,7.4).curveTo(8,6.8,9.4,6.1).curveTo(9.8,5.8,10.2,5.6).curveTo(12.9,3.9,18.9,0.8).curveTo(22.2,-1,24.7,-2.4).curveTo(26.1,-3.3,27.2,-4).lineTo(27.3,-4).curveTo(28.3,-4.6,29.3,-5.3).lineTo(29.4,-5.3).curveTo(30.6,-6,31.7,-6.9).curveTo(32.5,-7.4,33.2,-8.2).curveTo(35,-9.9,36.4,-12.1).curveTo(36.5,-12.4,36.6,-12.6).curveTo(36.8,-13.1,36.8,-13.7).curveTo(36.8,-14.2,36.7,-14.7).lineTo(36.7,-14.8).curveTo(36.6,-15.4,36.4,-16.2).curveTo(34.4,-18.7,28.6,-19.2).curveTo(28.4,-19.3,28.2,-19.3).lineTo(22,-19.1).curveTo(21.8,-19.1,21.6,-19.1).curveTo(16.5,-19,9.9,-18.4).moveTo(16.3,-22.4).curveTo(19.4,-23.1,21.5,-23.1).curveTo(21.8,-23.1,22,-23.1).lineTo(28.3,-23.3).curveTo(28.3,-23.3,28.4,-23.3).curveTo(36.5,-22.6,38.9,-18.6).curveTo(39,-18.4,39.1,-18.1).curveTo(39.7,-16.3,39.8,-14.8).lineTo(39.8,-14.7).curveTo(39.8,-14.2,39.8,-13.7).curveTo(39.8,-12.1,39.3,-10.9).curveTo(39.1,-10.4,38.9,-9.9).curveTo(38.8,-9.8,38.8,-9.7).curveTo(37,-6.9,34.9,-4.9).lineTo(35,-4.9).curveTo(33.8,-3.9,32.6,-3.1).curveTo(31.6,-2.3,30.6,-1.8).lineTo(30.6,-1.7).curveTo(29.6,-1.1,28.6,-0.5).curveTo(28.6,-0.5,28.5,-0.5).lineTo(28.5,-0.4).curveTo(25.4,1.6,20,4.5).lineTo(20,4.5).curveTo(16.4,6.3,14,7.8).moveTo(13.1,8.3).lineTo(13.8,8.3).curveTo(13.9,8.3,13.9,8.4).curveTo(26.6,10.8,30.6,17.4).lineTo(30.7,17.5).curveTo(31.4,18.6,32,20.1).curveTo(32.8,22.1,33.4,24.8).curveTo(34.6,29.6,33.1,34.3).curveTo(32.5,36.2,31.4,38.3).curveTo(31,39.1,30.7,39.7).curveTo(29.9,41.3,28.1,43.5).curveTo(27.3,44.6,26.5,44.8).moveTo(13.1,8.3).lineTo(12.9,8.3).curveTo(13.4,8,14,7.8).closePath().moveTo(21,45.4).curveTo(23,44.5,26,40.6).curveTo(26.8,39.6,27.6,38.3).curveTo(30.3,34.3,30.6,29.3).curveTo(30.8,27,30.3,24.8).curveTo(29.5,21.9,28.4,20.1).lineTo(28.5,20.1).lineTo(28.4,20.1).curveTo(28.4,20.1,28.3,19.9).curveTo(24.7,14.4,13.5,12.4).lineTo(9.4,12).moveTo(9.4,10.4).lineTo(13.1,8.3);
	this.shape_47.setTransform(167.7,401.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#BBBBBB").beginStroke().moveTo(26,40.7).curveTo(26.8,39.6,27.6,38.3).curveTo(30.3,34.3,30.6,29.3).curveTo(30.8,27,30.3,24.7).curveTo(29.5,21.9,28.4,20.1).lineTo(28.5,20.1).lineTo(28.4,20.1).lineTo(28.3,20).curveTo(24.7,14.4,13.5,12.4).lineTo(9.4,12).lineTo(9.4,10.4).lineTo(7,11.8).lineTo(7,11.8).lineTo(4.6,13).curveTo(0.3,15.3,-3.1,16.6).curveTo(-13.4,20.6,-23.3,22).curveTo(-33.6,23.4,-37.1,21).lineTo(-37.4,20.8).curveTo(-40.1,18.2,-39.8,15.5).lineTo(-39.7,14.7).curveTo(-38.3,9.6,-31.1,7.9).lineTo(-31,7.8).curveTo(-25.1,6.9,-17.7,6.7).lineTo(-10.8,7).lineTo(-10.8,11).lineTo(-17.7,10.7).curveTo(-24.8,10.8,-30.6,11.8).curveTo(-35.4,12.9,-36.6,15.7).curveTo(-36.5,16.6,-35.7,17.5).curveTo(-32.6,19.3,-23.6,18.1).curveTo(-14,16.7,-4,12.8).lineTo(-4,12.9).lineTo(-0,11.1).lineTo(6.5,7.7).lineTo(7,7.4).lineTo(9.4,6).lineTo(10.2,5.6).curveTo(12.9,3.9,18.9,0.8).lineTo(24.7,-2.4).lineTo(27.2,-4).lineTo(27.3,-4).lineTo(29.3,-5.2).lineTo(29.4,-5.2).curveTo(30.6,-6,31.7,-6.9).curveTo(32.5,-7.4,33.2,-8.2).curveTo(35,-9.9,36.4,-12.1).lineTo(36.6,-12.6).lineTo(36.8,-13.7).lineTo(36.7,-14.7).lineTo(36.7,-14.8).lineTo(36.4,-16.2).curveTo(34.4,-18.6,28.6,-19.2).lineTo(28.2,-19.3).lineTo(22,-19.1).lineTo(21.6,-19.1).curveTo(16.5,-19,9.9,-18.4).lineTo(16.3,-22.4).lineTo(9.9,-18.4).lineTo(9.8,-18.4).lineTo(9.4,-18.2).lineTo(5.2,-15.8).lineTo(4.6,-15.5).lineTo(3.2,-14.8).lineTo(1.3,-13.8).curveTo(-1.1,-12.7,-3.1,-11.9).lineTo(-6.6,-10.6).curveTo(-15.1,-7.6,-23.3,-6.5).curveTo(-33.6,-5.1,-37.1,-7.5).lineTo(-37.4,-7.7).curveTo(-40.1,-10.2,-39.8,-13.1).lineTo(-39.7,-13.7).curveTo(-38.3,-18.9,-31.1,-20.6).lineTo(-31,-20.7).curveTo(-25.1,-21.6,-17.7,-21.8).lineTo(-10.8,-21.8).lineTo(-10.8,-17.6).lineTo(-17.7,-17.8).curveTo(-24.8,-17.7,-30.6,-16.7).curveTo(-35.4,-15.6,-36.8,-12.6).curveTo(-36.5,-11.9,-35.7,-11).curveTo(-32.6,-9.2,-23.6,-10.4).curveTo(-15.3,-11.7,-6.6,-14.8).lineTo(-4,-15.7).lineTo(-3.3,-15.9).lineTo(-0.3,-17.4).lineTo(9,-22.3).lineTo(9.1,-22.3).lineTo(9.3,-22.4).lineTo(9.4,-22.5).lineTo(9.8,-22.7).lineTo(9.8,-22.7).lineTo(17.3,-27.6).curveTo(21.5,-30.4,25.3,-32.7).lineTo(29.4,-35.1).curveTo(33.7,-37.8,36.3,-40.6).lineTo(36.6,-41.3).lineTo(36.6,-41.4).curveTo(37,-42.8,36.4,-45).lineTo(36,-45.5).lineTo(39.5,-45.5).curveTo(40.3,-42,39.4,-39.8).lineTo(39.3,-39.6).lineTo(38.7,-38.3).lineTo(38.4,-37.8).curveTo(35.5,-34.7,30.6,-31.6).lineTo(30.6,-31.5).lineTo(26.2,-28.9).lineTo(18.7,-24).lineTo(17.1,-23).lineTo(16.3,-22.4).curveTo(19.4,-23.1,21.5,-23.1).lineTo(22,-23.1).lineTo(28.3,-23.2).lineTo(28.4,-23.2).curveTo(36.5,-22.6,38.9,-18.6).lineTo(39.1,-18).curveTo(39.7,-16.3,39.8,-14.8).lineTo(39.8,-14.7).lineTo(39.8,-13.7).curveTo(39.8,-12.1,39.3,-10.8).lineTo(38.9,-9.8).lineTo(38.8,-9.7).curveTo(37,-6.9,34.9,-5).lineTo(35,-5).curveTo(33.8,-3.8,32.6,-3.1).curveTo(31.6,-2.3,30.6,-1.7).lineTo(30.6,-1.6).lineTo(28.6,-0.5).lineTo(28.5,-0.5).lineTo(28.5,-0.4).curveTo(25.4,1.6,20,4.5).lineTo(20,4.5).curveTo(16.4,6.3,14,7.7).lineTo(12.9,8.3).lineTo(13.1,8.3).lineTo(13.8,8.4).lineTo(13.9,8.4).curveTo(26.6,10.8,30.6,17.4).lineTo(30.7,17.5).curveTo(31.4,18.6,32,20.1).curveTo(32.8,22.1,33.4,24.7).curveTo(34.6,29.6,33.1,34.3).curveTo(32.5,36.2,31.4,38.3).lineTo(30.7,39.7).curveTo(29.9,41.3,28.1,43.5).curveTo(27.3,44.6,26.5,44.8).lineTo(21,45.4).curveTo(23,44.5,26,40.7).closePath().moveTo(9.4,10.4).lineTo(13.1,8.3).closePath();
	this.shape_48.setTransform(167.7,401.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill().beginStroke("#446083").setStrokeStyle(1,1,1).moveTo(10.1,-46.1).lineTo(10.1,45.9).curveTo(-0.1,46.3,-10.1,45.9).lineTo(-10.1,-46.1).closePath();
	this.shape_49.setTransform(167,401.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginLinearGradientFill(["#8597AD","#BACEE9","#8597AD"],[0.008,0.569,1],-10.1,0,10.1,0).beginStroke().moveTo(-10.1,45.9).lineTo(-10.1,-46.1).lineTo(10.1,-46.1).lineTo(10.1,45.9).curveTo(5,46.1,-0.1,46.1).curveTo(-5.1,46.1,-10.1,45.9).closePath();
	this.shape_50.setTransform(167,401.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(130));

	// 레이어 2
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill().beginStroke("#A35900").setStrokeStyle(1,1,1).moveTo(-59.6,8.2).curveTo(-59.8,7.8,-59.8,7.3).curveTo(-59.8,2.1,-42.3,-1.5).curveTo(-24.8,-5.1,-0,-5.1).curveTo(24.7,-5.1,42.1,-1.5).curveTo(59.7,2.1,59.7,7.3).curveTo(59.7,7.8,59.6,8.2).moveTo(68.9,8.2).curveTo(67.8,1.5,48.7,-3.2).curveTo(28.6,-8.2,0,-8.2).curveTo(-28.6,-8.2,-48.8,-3.2).curveTo(-67.8,1.6,-69,8.2);
	this.shape_51.setTransform(168.1,427.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#AA5D00").beginStroke().moveTo(-42.2,8.8).curveTo(-58.1,5.6,-59.5,0.9).curveTo(-59.8,0.5,-59.8,-0).curveTo(-59.8,-5.2,-42.2,-8.8).curveTo(-24.7,-12.5,0.1,-12.4).curveTo(24.7,-12.5,42.2,-8.8).curveTo(59.7,-5.2,59.7,-0).lineTo(59.6,0.9).curveTo(58.2,5.6,42.2,8.8).curveTo(24.7,12.4,0.1,12.4).curveTo(-24.7,12.4,-42.2,8.8).closePath();
	this.shape_52.setTransform(168.1,435.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#D97700").beginStroke().moveTo(59.6,8.2).lineTo(59.7,7.3).curveTo(59.7,2.1,42.1,-1.5).curveTo(24.7,-5.1,0,-5.1).curveTo(-24.8,-5.1,-42.3,-1.5).curveTo(-59.8,2.1,-59.8,7.3).curveTo(-59.8,7.8,-59.6,8.2).lineTo(-68.9,8.2).curveTo(-67.7,1.6,-48.8,-3.2).curveTo(-28.6,-8.2,0,-8.2).curveTo(28.6,-8.2,48.7,-3.2).curveTo(67.8,1.5,69,8.2).closePath();
	this.shape_53.setTransform(168.1,427.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]}).wait(130));

	// Layer 9
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill().beginStroke("#475B73").setStrokeStyle(1,1,1).moveTo(-1.4,1.5).curveTo(-0.8,2,0,2.1).curveTo(0.9,2,1.4,1.5).curveTo(2,0.9,2,0).curveTo(2,-0.8,1.5,-1.4).curveTo(0.9,-2,0,-2).curveTo(-0.8,-2,-1.5,-1.4).curveTo(-2,-0.8,-2,0).curveTo(-2,0.9,-1.4,1.5).closePath();
	this.shape_54.setTransform(77.1,353.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-1.4,1.5).curveTo(-2,0.9,-2.1,0).curveTo(-2,-0.8,-1.5,-1.4).curveTo(-0.9,-2,-0,-2.1).curveTo(0.9,-2,1.4,-1.4).curveTo(2,-0.8,2.1,0).curveTo(2,0.9,1.4,1.5).curveTo(0.8,2,-0,2.1).curveTo(-0.9,2,-1.4,1.5).closePath();
	this.shape_55.setTransform(77.1,353.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(-13.9,-7.7).lineTo(-43,-36.8).curveTo(-44.3,-38.1,-44.2,-39.8).curveTo(-44.2,-41.5,-43,-42.8).curveTo(-41.8,-44,-40,-44).curveTo(-38.3,-44,-37.1,-42.8).lineTo(-4.6,-10.3).lineTo(44.3,38).lineTo(38,44.1).closePath();
	this.shape_56.setTransform(116.6,392.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#6E829A").beginStroke().moveTo(-29.1,-24.6).lineTo(-19.8,-27.2).lineTo(29.1,21.1).lineTo(22.8,27.2).closePath();
	this.shape_57.setTransform(131.8,409.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-18.6,-11).curveTo(-19.9,-12.2,-19.8,-14).curveTo(-19.8,-15.7,-18.6,-16.9).curveTo(-17.4,-18.1,-15.6,-18.2).curveTo(-13.9,-18.2,-12.7,-16.9).lineTo(19.8,15.6).lineTo(10.5,18.2).closePath();
	this.shape_58.setTransform(92.2,366.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(6.9,-6.6).curveTo(6.9,-6.7,6.8,-6.8).curveTo(4,-9.6,0,-9.6).curveTo(-4,-9.6,-6.8,-6.8).curveTo(-9.6,-4,-9.6,0).curveTo(-9.6,2.2,-8.7,4.1).curveTo(-8,5.5,-6.8,6.8).curveTo(-3.9,9.6,-0,9.6).curveTo(4,9.6,6.8,6.8).curveTo(9.6,4,9.6,-0).curveTo(9.6,-3.8,6.9,-6.6).closePath();
	this.shape_59.setTransform(76.8,353.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-8.3,2.8).curveTo(-8.3,-1.2,-5.5,-4).curveTo(-2.6,-6.9,1.4,-6.9).curveTo(5.3,-6.8,8.1,-4).lineTo(8.3,-3.8).lineTo(-7.4,6.9).curveTo(-8.2,5,-8.3,2.8).closePath();
	this.shape_60.setTransform(75.4,350.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-7.2,5.3).curveTo(-8.5,4,-9.2,2.6).lineTo(6.5,-8.1).curveTo(9.2,-5.4,9.2,-1.6).curveTo(9.2,2.4,6.3,5.3).curveTo(3.5,8.1,-0.5,8.1).curveTo(-4.4,8.1,-7.2,5.3).closePath();
	this.shape_61.setTransform(77.2,354.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(45.9,-13.4).lineTo(45.9,13.3).curveTo(45.9,18,41.2,18).lineTo(-41.6,18).curveTo(-46.3,18,-46.3,13.3).lineTo(-46.3,-13.4).curveTo(-46.3,-18.2,-41.6,-18.2).lineTo(41.2,-18.2).curveTo(45.9,-18.2,45.9,-13.4).closePath().moveTo(51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).lineTo(-45.8,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.8,-22.4).lineTo(45.9,-22.4).curveTo(51.7,-22.4,51.7,-16.5).closePath();
	this.shape_62.setTransform(25.4,352.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-41.4,18.1).curveTo(-46.1,18.1,-46.1,13.4).lineTo(-46.1,-13.4).curveTo(-46.1,-18.1,-41.4,-18.1).lineTo(41.4,-18.1).curveTo(46.1,-18.1,46.1,-13.4).lineTo(46.1,13.4).curveTo(46.1,18.1,41.4,18.1).closePath();
	this.shape_63.setTransform(25.2,352.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-45.8,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.8,-22.3).lineTo(45.9,-22.3).curveTo(51.7,-22.4,51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).closePath().moveTo(-46.4,-13.4).lineTo(-46.4,13.3).curveTo(-46.4,18.1,-41.6,18.1).lineTo(41.2,18.1).curveTo(45.9,18.1,45.9,13.3).lineTo(45.9,-13.4).curveTo(45.9,-18.1,41.2,-18.2).lineTo(-41.6,-18.2).curveTo(-46.4,-18.1,-46.4,-13.4).closePath();
	this.shape_64.setTransform(25.4,352.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill().beginStroke("#475B73").setStrokeStyle(1,1,1).moveTo(2,0).curveTo(2,0.9,1.4,1.5).curveTo(0.8,2,0,2.1).curveTo(-0.9,2,-1.4,1.5).curveTo(-2,0.9,-2.1,0).curveTo(-2,-0.8,-1.5,-1.4).curveTo(-0.9,-2,0,-2).curveTo(0.8,-2,1.4,-1.4).curveTo(2,-0.8,2,0).closePath();
	this.shape_65.setTransform(260.1,353.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-1.4,1.5).curveTo(-2,0.9,-2.1,0).curveTo(-2,-0.8,-1.4,-1.4).curveTo(-0.9,-2,0,-2.1).curveTo(0.9,-2,1.4,-1.4).curveTo(2,-0.8,2.1,0).curveTo(2,0.9,1.4,1.5).curveTo(0.9,2,0,2.1).curveTo(-0.9,2,-1.4,1.5).closePath();
	this.shape_66.setTransform(260.1,353.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(13.9,-7.7).lineTo(43,-36.8).curveTo(44.3,-38.1,44.2,-39.8).curveTo(44.2,-41.5,43,-42.8).curveTo(41.8,-44,40,-44).curveTo(38.3,-44,37.1,-42.8).lineTo(4.6,-10.3).lineTo(-44.3,38).lineTo(-38,44.1).closePath();
	this.shape_67.setTransform(220.6,392.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#6E829A").beginStroke().moveTo(-29.1,21.1).lineTo(19.8,-27.2).lineTo(29.1,-24.6).lineTo(-22.8,27.2).closePath();
	this.shape_68.setTransform(205.4,409.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-19.8,15.6).lineTo(12.7,-16.9).curveTo(13.9,-18.2,15.6,-18.2).curveTo(17.4,-18.1,18.6,-16.9).curveTo(19.8,-15.7,19.8,-14).curveTo(19.9,-12.2,18.6,-11).lineTo(-10.5,18.2).closePath();
	this.shape_69.setTransform(245,366.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(8.7,4.1).curveTo(8,5.5,6.8,6.8).curveTo(3.9,9.6,0,9.6).curveTo(-4,9.6,-6.8,6.8).curveTo(-9.6,4,-9.6,-0).curveTo(-9.6,-3.8,-6.9,-6.6).curveTo(-6.9,-6.7,-6.8,-6.8).curveTo(-4,-9.6,-0,-9.6).curveTo(4,-9.6,6.8,-6.8).curveTo(9.6,-4,9.6,0).curveTo(9.6,2.2,8.7,4.1).closePath();
	this.shape_70.setTransform(260.4,353.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-8.3,-3.8).lineTo(-8.1,-4).curveTo(-5.3,-6.8,-1.4,-6.9).curveTo(2.6,-6.9,5.5,-4).curveTo(8.3,-1.2,8.3,2.8).curveTo(8.2,5,7.4,6.9).closePath();
	this.shape_71.setTransform(261.7,350.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-6.3,5.3).curveTo(-9.2,2.4,-9.2,-1.6).curveTo(-9.2,-5.4,-6.5,-8.1).lineTo(9.2,2.6).curveTo(8.5,4,7.2,5.3).curveTo(4.4,8.1,0.5,8.1).curveTo(-3.5,8.1,-6.3,5.3).closePath();
	this.shape_72.setTransform(259.9,354.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(45.9,-13.4).lineTo(45.9,13.3).curveTo(45.9,18,41.2,18).lineTo(-41.6,18).curveTo(-46.4,18,-46.4,13.3).lineTo(-46.4,-13.4).curveTo(-46.4,-18.2,-41.6,-18.2).lineTo(41.2,-18.2).curveTo(45.9,-18.2,45.9,-13.4).closePath().moveTo(51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).lineTo(-45.9,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.9,-22.4).lineTo(45.9,-22.4).curveTo(51.7,-22.4,51.7,-16.5).closePath();
	this.shape_73.setTransform(311.8,352.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-41.4,18.1).curveTo(-46.1,18.1,-46.1,13.4).lineTo(-46.1,-13.4).curveTo(-46.1,-18.1,-41.4,-18.1).lineTo(41.4,-18.1).curveTo(46.1,-18.1,46.1,-13.4).lineTo(46.1,13.4).curveTo(46.1,18.1,41.4,18.1).closePath();
	this.shape_74.setTransform(311.6,352.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-45.9,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.9,-22.3).lineTo(45.9,-22.3).curveTo(51.7,-22.4,51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).closePath().moveTo(-46.4,-13.4).lineTo(-46.4,13.3).curveTo(-46.3,18.1,-41.6,18.1).lineTo(41.2,18.1).curveTo(45.9,18.1,45.9,13.3).lineTo(45.9,-13.4).curveTo(45.9,-18.1,41.2,-18.2).lineTo(-41.6,-18.2).curveTo(-46.3,-18.1,-46.4,-13.4).closePath();
	this.shape_75.setTransform(311.8,352.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,230.7,391.8,349.2);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(129).call(this.frame_129).wait(1));

	// 레이어 3
	this.instance = new lib.ob_coin();
	this.instance.parent = this;
	this.instance.setTransform(167.8,199.2,2.638,2.638,0,0,0,18.8,18.8);
	this.instance._off = true;

	this.instance_1 = new lib.inconin("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,269,1,1,0,0,0,34.6,38.8);

	this.instance_2 = new lib.incoin2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(168,269,1,1,0,0,0,34.6,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},23).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(6).to({scaleX:1.83,scaleY:1.83,y:264.7},7).to({_off:true},1).wait(115));

	// Layer 13
	this.instance_3 = new lib.ob_hand("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(167.3,335.8,1,1,0,0,0,28.9,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({startPosition:0},0).to({rotation:90,x:167.2},8).wait(94));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#597393").setStrokeStyle(1,1,1).moveTo(-12.8,-5.8).lineTo(-12.7,-5.8).curveTo(2.1,-5.8,12.8,3.4).lineTo(11.3,5.8).curveTo(1.2,-2.2,-12.7,-2.2).lineTo(-12.8,-2.2);
	this.shape.setTransform(179.8,301.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#4A5C70").beginStroke().moveTo(-12.7,-2.2).lineTo(-12.8,-2.2).lineTo(-12.8,-5.8).lineTo(-12.7,-5.8).curveTo(2.1,-5.8,12.8,3.4).lineTo(11.3,5.8).curveTo(1.2,-2.2,-12.7,-2.2).closePath();
	this.shape_1.setTransform(179.8,301.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#597393").setStrokeStyle(1,1,1).moveTo(12.8,-5.8).lineTo(12.7,-5.8).curveTo(-2.2,-5.8,-12.8,3.4).lineTo(-11.3,5.8).curveTo(-1.2,-2.2,12.7,-2.2).lineTo(12.8,-2.2);
	this.shape_2.setTransform(154.4,301.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#4A5C70").beginStroke().moveTo(-12.7,3.4).curveTo(-2.1,-5.8,12.7,-5.8).lineTo(12.7,-5.8).lineTo(12.7,-2.2).lineTo(12.7,-2.2).curveTo(-1.2,-2.2,-11.3,5.8).closePath();
	this.shape_3.setTransform(154.4,301.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(12.3,-25.6).curveTo(16.8,-24,20.7,-21).curveTo(21.6,-20.3,22.4,-19.6).curveTo(31.6,-11.4,31.6,0.1).curveTo(31.6,11.6,22.4,19.6).curveTo(13.3,27.8,0.3,27.8).curveTo(0.2,27.8,-0,27.8).curveTo(-0.2,27.8,-0.3,27.8).curveTo(-13.3,27.8,-22.4,19.6).curveTo(-31.6,11.6,-31.6,0.1).curveTo(-31.6,-11.4,-22.4,-19.6).curveTo(-20.5,-21.3,-18.3,-22.7).curveTo(-15.5,-24.5,-12.3,-25.6).lineTo(-14.7,-29.9).curveTo(-16.5,-29.3,-18.3,-28.3).curveTo(-22.5,-26.2,-26.2,-22.9).curveTo(-36.9,-13.4,-36.9,0).curveTo(-36.9,13.5,-26.2,22.9).curveTo(-15.5,32.4,-0.4,32.4).curveTo(-0.2,32.4,-0,32.4).curveTo(0.2,32.4,0.4,32.4).curveTo(15.5,32.4,26.2,22.9).curveTo(36.9,13.5,36.9,0).curveTo(36.9,-13.4,26.2,-22.9).curveTo(23.6,-25.2,20.7,-27).curveTo(20.5,-27.1,20.3,-27.2).lineTo(14.7,-29.9).moveTo(-14.7,-29.9).curveTo(-8.1,-32.4,-0.4,-32.4).curveTo(-0.2,-32.4,-0,-32.4).curveTo(0.2,-32.4,0.4,-32.4).curveTo(8.1,-32.4,14.7,-29.9).lineTo(12.3,-25.6).moveTo(-12.3,-25.6).curveTo(-6.8,-27.7,-0.3,-27.7).curveTo(-0.2,-27.7,-0,-27.7).curveTo(0.2,-27.7,0.3,-27.7).curveTo(6.8,-27.7,12.3,-25.6);
	this.shape_4.setTransform(167.2,334.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-0,32.4).lineTo(-0.4,32.4).curveTo(-15.5,32.4,-26.2,22.9).curveTo(-36.9,13.5,-36.9,0).curveTo(-36.9,-13.4,-26.2,-22.9).curveTo(-22.5,-26.2,-18.3,-28.3).curveTo(-16.5,-29.3,-14.7,-29.9).curveTo(-8.1,-32.4,-0.4,-32.4).lineTo(-0,-32.4).lineTo(0.4,-32.4).curveTo(8.1,-32.4,14.7,-29.9).lineTo(12.3,-25.6).lineTo(14.7,-29.9).lineTo(20.3,-27.2).lineTo(20.7,-27).curveTo(23.6,-25.2,26.2,-22.9).curveTo(36.9,-13.4,36.9,0).curveTo(36.9,13.5,26.2,22.9).curveTo(15.5,32.4,0.4,32.4).lineTo(-0,32.4).closePath().moveTo(-31.6,0.1).curveTo(-31.6,11.6,-22.4,19.6).curveTo(-13.3,27.8,-0.3,27.8).lineTo(-0,27.8).lineTo(0.3,27.8).curveTo(13.3,27.8,22.4,19.6).curveTo(31.6,11.6,31.6,0.1).curveTo(31.6,-11.4,22.4,-19.6).lineTo(20.7,-21).curveTo(16.8,-24,12.3,-25.6).curveTo(6.8,-27.7,0.3,-27.7).lineTo(-0,-27.7).lineTo(-0.3,-27.7).curveTo(-6.8,-27.7,-12.3,-25.6).lineTo(-14.7,-29.9).lineTo(-12.3,-25.6).curveTo(-15.5,-24.5,-18.3,-22.7).curveTo(-20.5,-21.3,-22.4,-19.6).curveTo(-31.6,-11.4,-31.6,0.1).lineTo(-31.6,0.1).closePath().moveTo(-0,27.8).lineTo(-0.3,27.8).curveTo(-13.3,27.8,-22.4,19.6).curveTo(-31.6,11.6,-31.6,0.1).curveTo(-31.6,-11.4,-22.4,-19.6).curveTo(-20.5,-21.3,-18.3,-22.7).curveTo(-15.5,-24.5,-12.3,-25.6).curveTo(-6.8,-27.7,-0.3,-27.7).lineTo(-0,-27.7).lineTo(0.3,-27.7).curveTo(6.8,-27.7,12.3,-25.6).curveTo(16.8,-24,20.7,-21).lineTo(22.4,-19.6).curveTo(31.6,-11.4,31.6,0.1).curveTo(31.6,11.6,22.4,19.6).curveTo(13.3,27.8,0.3,27.8).lineTo(-0,27.8).closePath().moveTo(-12.3,-25.6).closePath();
	this.shape_5.setTransform(167.2,334.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#597393").setStrokeStyle(1,1,1).moveTo(-36.9,18.8).lineTo(36.9,18.8).curveTo(37,14.2,37,13.6).curveTo(37,0.2,26.3,-9.3).curveTo(15.6,-18.8,0.4,-18.8).curveTo(0.2,-18.8,0,-18.8).curveTo(-0.1,-18.8,-0.3,-18.8).curveTo(-15.5,-18.8,-26.2,-9.3).curveTo(-36.9,0.2,-36.9,13.6).curveTo(-36.9,14.2,-36.9,18.8).closePath();
	this.shape_6.setTransform(167.2,311.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#90A5BF").beginStroke().moveTo(-36.9,18.8).lineTo(-36.9,13.6).curveTo(-36.9,0.1,-26.2,-9.3).curveTo(-15.5,-18.8,-0.4,-18.8).lineTo(-0,-18.8).lineTo(0.4,-18.8).curveTo(15.5,-18.8,26.3,-9.3).curveTo(37,0.1,37,13.6).lineTo(36.9,18.8).closePath();
	this.shape_7.setTransform(167.2,311.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#930404").setStrokeStyle(1,1,1).moveTo(126.2,-42).lineTo(125.4,-46.5).lineTo(116.8,-36.9).curveTo(107.7,-28.1,94.5,-21).curveTo(57.5,-1.3,0.3,-1.6).curveTo(-0,-1.6,-0.3,-1.6).curveTo(-57.6,-1.1,-94.5,-20.5).curveTo(-107.8,-27.5,-116.8,-36.3).lineTo(-125.4,-45.7).lineTo(-125.9,-43).lineTo(-127,-36.7).curveTo(-127,-36.3,-127.1,-36).curveTo(-127.7,-27.7,-126.6,-19.7).curveTo(-125.6,-12.3,-123.3,-5.8).curveTo(-119,6.3,-109.8,14.8).curveTo(-102,22.8,-88.8,30.2).lineTo(-88.4,30.5).curveTo(-83.2,33.2,-77.1,35.6).curveTo(-45.7,47.7,-0.3,46.3).curveTo(-0,46.3,0.3,46.3).curveTo(45.6,47.5,77.1,35.2).curveTo(83.2,32.9,88.4,30).lineTo(88.8,29.7).curveTo(102,22.3,109.8,14.3).curveTo(114.3,10,117.7,4.9).curveTo(124.7,-5.8,126.6,-20.4).curveTo(127.7,-28.4,127.1,-36.7).curveTo(127,-37.1,127,-37.4).closePath();
	this.shape_8.setTransform(167,278.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FF7E7E").beginStroke().moveTo(121.2,-15.2).lineTo(121.3,-15.2).lineTo(123.9,-18.3).lineTo(127.1,-23.2).curveTo(127.7,-14.8,126.6,-6.8).curveTo(124.7,7.8,117.7,18.5).curveTo(114.8,20.9,111.8,23.2).curveTo(120,7.5,121.2,-15.2).closePath().moveTo(-123.3,7.7).curveTo(-125.6,1.3,-126.6,-6.1).curveTo(-127.7,-14.1,-127.1,-22.5).lineTo(-123.9,-17.6).lineTo(-121.9,-15.2).curveTo(-122.8,3.1,-114,18.8).curveTo(-119.1,13.6,-123.3,7.7).closePath();
	this.shape_9.setTransform(167,264.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#D91313").beginStroke().moveTo(-74.3,15.3).curveTo(-80.4,12.9,-85.6,10.2).lineTo(-86,9.9).curveTo(-99.2,2.5,-107,-5.5).curveTo(-116.2,-14,-120.5,-26.1).curveTo(-116.3,-20.3,-111.2,-15.1).curveTo(-66.8,29.4,45.5,18.6).curveTo(86.6,10.5,114.6,-10.7).curveTo(117.6,-13,120.5,-15.4).curveTo(117.1,-10.3,112.6,-6).curveTo(104.8,2,91.6,9.4).lineTo(91.2,9.7).curveTo(86,12.6,79.9,14.9).curveTo(48.4,27.2,3.1,26).lineTo(2.6,26).lineTo(-6.5,26.1).curveTo(-46,26.1,-74.3,15.3).closePath();
	this.shape_10.setTransform(164.2,298.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#F04040").beginStroke().moveTo(-113.6,-0.9).curveTo(-122.4,-16.5,-121.5,-34.9).curveTo(-114.3,-26.7,-103.5,-20).curveTo(-67.3,2.7,0.1,2.1).lineTo(0.7,2.1).curveTo(68.1,2.3,104.2,-20.5).curveTo(114.6,-27,121.6,-34.8).curveTo(120.4,-12.1,112.2,3.5).curveTo(84.2,24.7,43.1,32.8).curveTo(21,34.9,1.6,34.9).curveTo(-78,34.9,-113.6,-0.9).closePath();
	this.shape_11.setTransform(166.6,284.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFD448").beginStroke().moveTo(-103.6,0.3).curveTo(-114.5,-6.4,-121.7,-14.6).lineTo(-120.1,-21.4).curveTo(-106.1,-5.1,-81.2,5.1).curveTo(-45.9,17.9,11.1,17.4).curveTo(48.1,14.8,80.9,5.1).curveTo(105.2,-5.1,121.7,-22.4).lineTo(121.6,-14.5).lineTo(121.5,-14.5).curveTo(114.4,-6.7,104.1,-0.2).curveTo(67.9,22.6,0.5,22.4).lineTo(-0,22.4).lineTo(-3.2,22.4).curveTo(-68.3,22.4,-103.6,0.3).closePath();
	this.shape_12.setTransform(166.8,264);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFE593").beginStroke().moveTo(121.4,-0.7).curveTo(123.9,-3.3,126.2,-6.1).lineTo(127,-1.5).lineTo(127.1,-0.8).lineTo(123.9,4).lineTo(121.3,7.2).closePath().moveTo(-123.9,4.7).lineTo(-127.1,-0.1).lineTo(-127,-0.8).lineTo(-125.9,-7.1).curveTo(-123.4,-3.3,-120.3,0.3).lineTo(-121.9,7.1).lineTo(-123.9,4.7).closePath();
	this.shape_13.setTransform(167,242.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#DBAC12").beginStroke().moveTo(-81.6,12.5).curveTo(-106.5,2.3,-120.5,-14).curveTo(-123.5,-17.6,-126.1,-21.4).lineTo(-125.6,-24.1).lineTo(-117,-14.7).curveTo(-108,-5.9,-94.7,1.1).curveTo(-57.8,20.5,-0.4,20).lineTo(0.1,20).curveTo(57.3,20.3,94.3,0.6).curveTo(107.5,-6.5,116.7,-15.3).lineTo(125.2,-24.9).lineTo(126,-20.4).curveTo(123.7,-17.6,121.2,-15).curveTo(104.8,2.3,80.5,12.5).curveTo(47.7,22.2,10.6,24.8).lineTo(6.8,24.9).curveTo(-47.5,24.9,-81.6,12.5).closePath();
	this.shape_14.setTransform(167.2,256.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill().beginStroke("#1A8DB4").setStrokeStyle(1,1,1).moveTo(57.6,29.9).curveTo(58.2,27.5,56.9,25.3).lineTo(25.2,-8.9).lineTo(25.4,-23.6).curveTo(25.4,-28,24,-33.9).curveTo(23,-38.1,21.8,-40.7).curveTo(18.8,-47.6,11.7,-50.6).curveTo(8.4,-52,5.5,-52.2).curveTo(5.1,-52.3,4.8,-52.3).lineTo(-4.8,-52.3).curveTo(-5.2,-52.3,-5.6,-52.2).curveTo(-8.4,-52,-11.7,-50.6).curveTo(-18.9,-47.6,-21.8,-40.7).curveTo(-23.1,-38.1,-24,-33.9).curveTo(-25.5,-28,-25.4,-23.6).lineTo(-25.3,-8.9).lineTo(-56.9,25.3).curveTo(-57.7,26.5,-57.8,27.8).curveTo(-57.9,28.8,-57.7,29.9).moveTo(58,32.2).curveTo(57.9,34,56.7,35.8).lineTo(53,39.3).curveTo(50.1,41.6,46.1,43.7).curveTo(35.5,49.1,20.1,51.2).curveTo(10,52.3,1.6,52.3).curveTo(1.1,52.3,0.7,52.3).curveTo(0.5,52.3,0.4,52.3).curveTo(0.2,52.3,0,52.3).curveTo(-0.2,52.3,-0.4,52.3).curveTo(-0.5,52.3,-0.7,52.3).curveTo(-1.2,52.3,-1.6,52.3).curveTo(-10,52.3,-20.1,51.2).curveTo(-35.5,49.1,-46.1,43.7).curveTo(-50.2,41.6,-53,39.3).lineTo(-56.8,35.8).curveTo(-57.9,34,-58,32.2).curveTo(-58.1,32,-58,31.7).curveTo(-58,31.4,-58,31.1).curveTo(-57.9,30.5,-57.7,29.9).lineTo(-58,32.2).moveTo(57.6,29.9).lineTo(58,32.2).curveTo(58.1,32,58,31.7).curveTo(58,31.4,57.9,31.1).curveTo(57.9,30.5,57.6,29.9).closePath();
	this.shape_15.setTransform(165.8,523.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-0.6,0.5).lineTo(0.6,-0.5).lineTo(-0.6,0.5).closePath();
	this.shape_16.setTransform(212.1,554.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#EEF5FF").beginStroke().moveTo(0.7,12.9).lineTo(0.4,12.9).lineTo(0,12.9).lineTo(-0.4,12.9).lineTo(-0.7,12.9).lineTo(-1.6,12.9).curveTo(-10,12.9,-20.1,11.8).curveTo(-35.5,9.7,-46.1,4.3).curveTo(-50.2,2.2,-53,-0.1).lineTo(-56.8,-3.6).curveTo(-57.9,-5.4,-58,-7.2).lineTo(-57.7,-9.5).curveTo(-57.3,-10.5,-56.3,-11.4).curveTo(-53.8,-13.8,-50.5,-12.3).curveTo(-49.8,-12,-49.1,-11.5).lineTo(-45.7,-8).lineTo(-45.5,-7.8).lineTo(-45.2,-7.6).lineTo(-45.2,-7.6).curveTo(-43.1,-5.5,-36.1,-2.2).curveTo(-29.1,1,-14.8,1.9).curveTo(-8.1,2.6,-1.5,2.4).lineTo(-0.6,2.4).lineTo(0,2.4).lineTo(0.6,2.4).lineTo(1.5,2.4).curveTo(8,2.6,14.8,1.9).curveTo(29.1,1,36.1,-2.2).curveTo(43.1,-5.5,45.2,-7.6).lineTo(45.3,-7.6).lineTo(45.3,-7.6).lineTo(45.3,-7.7).lineTo(45.7,-8).lineTo(46.9,-9).lineTo(50.4,-12.3).curveTo(53.8,-13.8,56.3,-11.4).curveTo(57.2,-10.5,57.6,-9.5).lineTo(58,-7.2).curveTo(57.9,-5.4,56.7,-3.6).lineTo(53,-0.1).curveTo(50.1,2.2,46.1,4.3).curveTo(35.5,9.7,20.1,11.8).curveTo(10,12.9,1.6,12.9).lineTo(0.7,12.9).closePath();
	this.shape_17.setTransform(165.8,563.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginLinearGradientFill(["#E2EFFF","#71A5E5"],[0.008,1],1.4,28.7,1.4,-43.9).beginStroke().moveTo(1.5,33.4).lineTo(0.6,33.4).lineTo(0,33.4).lineTo(-0.5,33.4).lineTo(-1.5,33.4).curveTo(-8.1,33.6,-14.8,32.9).curveTo(-29.1,32,-36.1,28.8).curveTo(-43.1,25.5,-45.2,23.4).lineTo(-45.2,23.4).lineTo(-45.7,23).lineTo(-49,19.5).curveTo(-49.7,19,-50.5,18.7).lineTo(-20.7,-16).lineTo(-20.9,-30.6).curveTo(-20.9,-32,-20.7,-33.4).lineTo(-19.9,-32).lineTo(-20.3,-32.7).curveTo(-17.6,-26.6,-17,-22.8).curveTo(-16.8,-19.7,-15.4,-15).curveTo(-12.9,-9.2,-7.5,-7.2).curveTo(-4.4,-6.1,-2.5,-5.8).lineTo(0,-5.6).lineTo(2.6,-5.9).curveTo(4.4,-6.1,7.5,-7.2).curveTo(12.9,-9.2,15.4,-15).curveTo(16.8,-19.7,16.9,-22.8).curveTo(17.7,-27,20,-32).lineTo(20.6,-33.4).lineTo(20.8,-32).lineTo(20.8,-30.6).lineTo(20.7,-16).lineTo(50.4,18.7).lineTo(46.9,22).lineTo(45.7,23).lineTo(45.7,23).lineTo(45.4,23.3).lineTo(45.3,23.4).lineTo(45.2,23.4).curveTo(43.1,25.5,36.1,28.8).curveTo(29.1,32,14.8,32.9).curveTo(9.5,33.4,4.4,33.4).lineTo(1.5,33.4).closePath();
	this.shape_18.setTransform(165.8,532.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#40464F").beginStroke().moveTo(-2.5,25.8).curveTo(-4.4,25.6,-7.5,24.4).curveTo(-12.9,22.4,-15.4,16.6).curveTo(-16.8,12,-17,8.9).curveTo(-17.6,5.1,-20.3,-1).lineTo(-19.9,-0.3).lineTo(-20.7,-1.8).curveTo(-20.4,-5.1,-19.4,-9.1).curveTo(-18.4,-13.3,-17.2,-15.8).curveTo(-14.1,-22.5,-6.8,-25).curveTo(-3,-26.3,-0.5,-26).lineTo(0,-26).lineTo(0.5,-26).curveTo(3,-26.3,6.8,-25).curveTo(14.1,-22.5,17.1,-15.8).curveTo(18.4,-13.3,19.4,-9.1).curveTo(20.4,-5.1,20.6,-1.8).lineTo(20,-0.3).curveTo(17.7,4.7,16.9,8.9).curveTo(16.8,12,15.4,16.6).curveTo(12.9,22.4,7.5,24.4).curveTo(4.4,25.6,2.6,25.8).lineTo(0,26).lineTo(-2.5,25.8).closePath();
	this.shape_19.setTransform(165.8,500.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FAFCFF").beginStroke().moveTo(56.3,39.2).curveTo(53.8,36.7,50.4,38.2).lineTo(20.7,3.6).lineTo(20.8,-11).lineTo(20.8,-12.4).lineTo(20.6,-13.9).curveTo(20.4,-17.2,19.4,-21.2).curveTo(18.4,-25.4,17.1,-27.9).curveTo(14,-34.5,6.8,-37.1).curveTo(3,-38.3,0.5,-38.1).lineTo(0,-38.1).lineTo(-0.5,-38.1).curveTo(-3,-38.3,-6.8,-37.1).curveTo(-14.1,-34.5,-17.2,-27.9).curveTo(-18.4,-25.4,-19.4,-21.2).curveTo(-20.4,-17.2,-20.7,-13.9).curveTo(-20.9,-12.4,-20.9,-11).lineTo(-20.7,3.6).lineTo(-50.5,38.2).curveTo(-53.8,36.7,-56.3,39.2).lineTo(-57.8,39).curveTo(-57.7,37.7,-56.9,36.5).lineTo(-25.3,2.3).lineTo(-25.4,-12.4).curveTo(-25.5,-16.9,-24,-22.7).curveTo(-23.1,-26.9,-21.8,-29.5).curveTo(-18.9,-36.5,-11.7,-39.4).curveTo(-8.4,-40.8,-5.6,-41).lineTo(-4.8,-41.1).lineTo(4.8,-41.1).lineTo(5.5,-41).curveTo(8.4,-40.8,11.7,-39.4).curveTo(18.8,-36.5,21.8,-29.5).curveTo(23,-26.9,24,-22.7).curveTo(25.4,-16.9,25.4,-12.4).lineTo(25.2,2.3).lineTo(56.9,36.5).curveTo(58.2,38.7,57.6,41.1).curveTo(57.2,40.1,56.3,39.2).closePath();
	this.shape_20.setTransform(165.8,512.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill().beginStroke("#A35900").setStrokeStyle(1,1,1).moveTo(-77.5,-37.4).lineTo(-77.5,-48.3).lineTo(77.5,-48.3).lineTo(77.5,-37.4).lineTo(77.5,12.3).lineTo(77.5,15.7).lineTo(77.5,25).curveTo(54.3,48,2.9,48.3).curveTo(2.2,48.3,1.5,48.3).lineTo(-1.4,48.3).curveTo(-2.2,48.3,-2.9,48.3).curveTo(-54.2,48,-77.5,25).lineTo(-77.5,15.7).lineTo(-77.5,12.3).closePath();
	this.shape_21.setTransform(167.2,326.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginLinearGradientFill(["#F5A406","#FFDF77","#F5A406"],[0.02,0.573,1],-81.4,-6.5,73.6,-6.5).beginStroke().moveTo(1.5,42.8).lineTo(-1.4,42.8).lineTo(-2.9,42.8).curveTo(-54.2,42.5,-77.5,19.6).lineTo(-77.5,10.3).curveTo(-54.2,33.2,-2.9,33.6).lineTo(-1.4,33.6).lineTo(1.5,33.6).lineTo(2.9,33.6).curveTo(54.3,33.2,77.5,10.3).lineTo(77.5,19.6).curveTo(54.3,42.5,2.9,42.8).lineTo(1.5,42.8).closePath().moveTo(1.4,30.1).lineTo(-1.4,30.1).lineTo(-2.9,30.1).curveTo(-54.2,29.7,-77.5,6.9).lineTo(-77.5,-42.8).curveTo(0.5,-15.6,77.5,-42.8).lineTo(77.5,6.9).curveTo(54.3,29.8,2.9,30.1).lineTo(1.4,30.1).closePath();
	this.shape_22.setTransform(167.2,332.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#D97700").beginStroke().moveTo(1.5,43.7).lineTo(-1.4,43.7).lineTo(-2.9,43.7).curveTo(-54.2,43.3,-77.5,20.3).lineTo(-77.5,16.9).curveTo(-54.2,39.8,-2.9,40.2).lineTo(-1.4,40.2).lineTo(1.4,40.2).lineTo(2.9,40.2).curveTo(54.3,39.9,77.5,16.9).lineTo(77.5,20.3).curveTo(54.3,43.3,2.9,43.7).lineTo(1.5,43.7).closePath().moveTo(-77.5,-32.7).lineTo(-77.5,-43.6).lineTo(77.5,-43.6).lineTo(77.5,-32.7).curveTo(39,-19.2,0.3,-19.2).curveTo(-38.5,-19.2,-77.5,-32.7).closePath();
	this.shape_23.setTransform(167.2,322.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill().beginStroke("#8E8E8E").setStrokeStyle(1,1,1).moveTo(59.8,32.2).lineTo(59.8,-69).lineTo(-59.7,-69).lineTo(-59.7,32.2).lineTo(-59.7,55.9).curveTo(-59.8,56.1,-59.8,56.4).curveTo(-59.8,56.4,-59.8,56.5).curveTo(-59.8,59.9,-52.4,62.7).curveTo(-48.4,64.1,-42.2,65.4).curveTo(-41,65.7,-39.8,65.9).curveTo(-23,69,0,69).curveTo(24.7,69,42.2,65.4).curveTo(59.6,61.8,59.8,56.5).curveTo(59.8,56.5,59.8,56.4).closePath();
	this.shape_24.setTransform(168.4,379.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginLinearGradientFill(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)","#F2F2F2"],[0.02,0.573,1],-57.3,-54,62.2,-54).beginStroke().moveTo(-39.8,15.3).lineTo(-42.2,14.8).curveTo(-48.4,13.5,-52.4,12.1).curveTo(-59.8,9.3,-59.8,5.9).lineTo(-59.7,5.4).lineTo(-59.7,-18.4).lineTo(59.8,-18.4).lineTo(59.8,5.8).lineTo(59.8,6).curveTo(59.6,11.2,42.2,14.8).curveTo(24.7,18.4,0,18.4).curveTo(-23,18.4,-39.8,15.3).closePath();
	this.shape_25.setTransform(168.4,429.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginLinearGradientFill(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)","#F2F2F2"],[0.02,0.573,1],-57.4,22.6,62.1,22.6).beginStroke().moveTo(-59.7,50.6).lineTo(-59.7,-50.6).lineTo(59.7,-50.6).lineTo(59.7,50.6).closePath();
	this.shape_26.setTransform(168.4,360.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill().beginStroke("#A35900").setStrokeStyle(1,1,1).moveTo(-59.6,-24.5).curveTo(-58.3,-19.8,-42.3,-16.5).curveTo(-24.8,-12.9,-0,-12.9).curveTo(24.7,-12.9,42.1,-16.5).curveTo(58.1,-19.8,59.6,-24.5).moveTo(68.9,-24.5).curveTo(69,-24.1,69,-23.7).lineTo(69,-23.5).lineTo(68.9,6.5).curveTo(69,6.8,69,7.2).curveTo(69,14.5,48.7,19.5).curveTo(43.3,20.8,37.3,21.8).curveTo(20.9,24.5,0,24.5).curveTo(-0.9,24.5,-1.8,24.5).curveTo(-29.2,24.4,-48.8,19.5).curveTo(-68.8,14.5,-69,7.3).lineTo(-69,-23.4).moveTo(69,-23.5).curveTo(68.8,-16.2,48.7,-11.2).curveTo(43.3,-9.9,37.3,-9).curveTo(34.7,-8.5,32.2,-8.2).curveTo(17.7,-6.3,0,-6.3).curveTo(-0.9,-6.3,-1.8,-6.3).curveTo(-18.4,-6.4,-32.2,-8.2).curveTo(-41.1,-9.4,-48.8,-11.2).curveTo(-68.8,-16.2,-69,-23.4).curveTo(-69,-23.5,-69,-23.6).curveTo(-69,-24,-69,-24.5);
	this.shape_27.setTransform(168.1,460.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginLinearGradientFill(["#F5A406","#FFDF77","#F5A406"],[0.02,0.573,1],-82.3,-168.2,72.7,-168.2).beginStroke().moveTo(-1.8,24).curveTo(-29.2,23.9,-48.8,19).curveTo(-68.8,14,-69,6.8).lineTo(-69,-23.9).curveTo(-68.8,-16.7,-48.8,-11.7).curveTo(-41.1,-9.9,-32.2,-8.7).curveTo(-18.4,-6.9,-1.8,-6.8).lineTo(0,-6.8).curveTo(17.7,-6.8,32.2,-8.7).lineTo(37.3,-9.5).curveTo(43.3,-10.4,48.7,-11.7).curveTo(68.8,-16.7,69,-24).lineTo(68.9,6).lineTo(69,6.7).curveTo(69,14,48.7,19).curveTo(43.3,20.3,37.3,21.3).curveTo(20.9,24,0,24).lineTo(-1.8,24).closePath();
	this.shape_28.setTransform(168.1,461.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#D97700").beginStroke().moveTo(-1.8,9.1).curveTo(-18.4,9,-32.2,7.2).curveTo(-41.1,6,-48.8,4.2).curveTo(-68.8,-0.8,-69,-8).lineTo(-69,-8.2).lineTo(-69,-9.1).lineTo(-59.6,-9.1).curveTo(-58.3,-4.4,-42.3,-1.1).curveTo(-24.8,2.5,-0,2.5).curveTo(24.7,2.5,42.1,-1.1).curveTo(58.1,-4.4,59.6,-9.1).lineTo(68.9,-9.1).lineTo(69,-8.3).lineTo(69,-8.1).curveTo(68.8,-0.8,48.7,4.2).curveTo(43.3,5.5,37.3,6.4).lineTo(32.2,7.2).curveTo(17.7,9.1,0,9.1).lineTo(-1.8,9.1).closePath();
	this.shape_29.setTransform(168.1,445.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill().beginStroke("#930404").setStrokeStyle(1,1,1).moveTo(-83,-26.9).curveTo(-83,-27,-83,-27.1).curveTo(-82.9,-27.7,-82.7,-28.2).curveTo(-81.9,-30.5,-80.9,-32.1).curveTo(-79.3,-34.5,-77.3,-36.2).curveTo(-75.9,-37.4,-74.2,-38.2).curveTo(-72.8,-38.9,-72.2,-39.1).curveTo(-70.3,-39.7,-64.5,-40.6).curveTo(-47.8,-42.9,-37.9,-43.1).curveTo(-34.9,-43.3,-11.1,-43.1).curveTo(-9.6,-43.1,-8,-43.1).curveTo(-5.6,-43,-3.2,-43).curveTo(-1.5,-43,0.2,-43).curveTo(1.9,-43,3.8,-43).curveTo(5.9,-43,8.1,-43).curveTo(10.1,-43,12.1,-43).curveTo(14,-43,15.9,-43).curveTo(17.6,-43.1,19.4,-43.2).curveTo(35.2,-43.3,37.9,-43.1).curveTo(47.7,-42.9,64.4,-40.6).curveTo(70.2,-39.7,72.1,-39.1).curveTo(72.8,-38.9,74.1,-38.2).curveTo(76.5,-37.1,78.6,-35).curveTo(79.1,-34.5,79.6,-33.8).curveTo(80.2,-33,80.9,-32.1).curveTo(82.1,-30.2,83,-27.1).curveTo(83,-27,83,-26.9).lineTo(83.1,-26.9).curveTo(85.5,-26.9,87.8,-26.3).curveTo(90.7,-25.6,93.3,-23.9).curveTo(93.6,-23.6,94,-23.3).curveTo(98.1,-20.2,98.8,-16.1).moveTo(-83,-26.9).curveTo(-83.7,-23.8,-81.8,-20.3).curveTo(-81.7,-20.2,-81.7,-20.2).lineTo(-81.7,-20.1).lineTo(-81.3,-19.7).curveTo(-80.1,-17.7,-77.6,-15.6).curveTo(-74.9,-13.6,-72,-11.8).curveTo(-64.2,-7.1,-53.1,-4).curveTo(-50.4,-3.4,-47.7,-2.7).curveTo(-44.9,-2.2,-41.6,-1.3).curveTo(-38.3,-0.5,-33.8,-0.1).curveTo(-29.4,0.4,-24.5,0.9).curveTo(-19.5,1.3,-13.9,1.6).curveTo(-9.2,2,1.9,2.1).curveTo(9.1,2,13.9,1.6).curveTo(19.5,1.3,24.4,0.9).curveTo(29.3,0.4,33.8,-0.1).curveTo(38.3,-0.5,41.6,-1.3).curveTo(44.9,-2.2,47.7,-2.7).curveTo(50.4,-3.4,53,-4).curveTo(64.2,-7.1,72,-11.8).curveTo(73.5,-12.8,75.1,-13.8).curveTo(76.3,-14.7,77.6,-15.6).curveTo(80.1,-17.7,81.3,-19.7).lineTo(81.6,-20.1).curveTo(81.7,-20.2,81.8,-20.3).curveTo(82.1,-21,82.4,-21.7).curveTo(83.6,-24.4,83,-26.9).moveTo(-98.8,-16.1).curveTo(-98.9,-15.3,-98.9,-14.5).curveTo(-98.9,-14,-98.7,-13).curveTo(-98.7,-12.7,-98.5,-12.3).curveTo(-98.3,-11.5,-97.9,-10.8).curveTo(-97,-9.1,-95.3,-7.2).curveTo(-95.2,-7.1,-95.1,-7).lineTo(-91.2,-3.8).curveTo(-85.9,0.1,-78.6,3.5).curveTo(-56.1,13.9,-24.3,15.2).curveTo(-23.4,15.2,-22.4,15.2).curveTo(-11.5,16.4,1.9,16.3).curveTo(11.5,16.4,22.4,15.2).curveTo(23.4,15.2,24.2,15.2).curveTo(56.1,13.9,78.6,3.5).curveTo(85.8,0.1,91.2,-3.8).lineTo(95.1,-7).curveTo(97.6,-9.8,98.5,-12.3).curveTo(98.5,-12.3,98.6,-12.4).curveTo(98.6,-12.7,98.7,-13).curveTo(98.9,-14,98.9,-14.5).curveTo(98.9,-15.3,98.8,-16.1).lineTo(102,-16.1).curveTo(102.2,-16.1,102.3,-16.1).curveTo(103.2,-16.1,104.2,-15.8).curveTo(105.2,-15.7,106.3,-15.4).curveTo(106.6,-15.2,107,-15.1).curveTo(112.6,-13,115.4,-7.7).lineTo(116,-5.4).lineTo(116.3,-2.6).curveTo(116.3,-1.6,116.1,-0.6).moveTo(-116.1,-0.6).curveTo(-115.6,2.1,-113.9,4.2).curveTo(-110.2,7.9,-104.2,12.3).curveTo(-97,17.4,-72.6,26.5).curveTo(-49,35.2,1.9,35.8).curveTo(2.1,35.8,2.3,35.8).curveTo(2.6,35.8,2.8,35.8).curveTo(48.9,35.2,72.6,26.5).curveTo(97,17.4,104.2,12.3).curveTo(106,11,107.6,9.8).curveTo(111.3,6.9,113.9,4.2).curveTo(114.2,3.8,114.5,3.5).curveTo(115.1,2.5,115.5,1.3).curveTo(115.9,0.4,116.1,-0.6).curveTo(116.4,-0.4,116.7,-0.1).curveTo(117.7,1,118.4,2.8).curveTo(118.5,3.1,118.7,3.5).curveTo(118.9,3.8,119,4.2).curveTo(119.1,4.5,119.1,4.7).lineTo(119.4,5.7).curveTo(119.7,7.4,118.9,9.5).curveTo(118.5,10.4,118,11.3).curveTo(114.8,17.1,104.9,23.1).curveTo(99.8,26.1,94.6,27.9).curveTo(84.3,31.8,62,37.7).curveTo(39.7,43.4,2.4,43.2).curveTo(-39.7,43.4,-62,37.7).curveTo(-84.3,31.8,-94.6,27.9).curveTo(-99.9,26.1,-105,23.1).curveTo(-115.1,16.9,-118.2,11).curveTo(-118.6,10.3,-118.9,9.5).curveTo(-119,9.1,-119.1,8.8).curveTo(-119.7,7.1,-119.5,5.7).lineTo(-119.1,4.7).curveTo(-119.1,4.5,-119,4.2).curveTo(-118.9,3.9,-118.8,3.6).curveTo(-117.8,1.2,-116.8,-0.1).curveTo(-116.4,-0.4,-116.1,-0.6).curveTo(-116.3,-1.6,-116.3,-2.6).lineTo(-116,-5.4).lineTo(-115.4,-7.7).curveTo(-114.9,-8.7,-114.3,-9.5).curveTo(-114.1,-9.9,-113.9,-10.1).curveTo(-111.2,-13.6,-107.1,-15.1).curveTo(-105.8,-15.6,-104.7,-15.7).curveTo(-103.4,-16.1,-102.3,-16.1).curveTo(-102.2,-16.1,-102.1,-16.1).lineTo(-98.8,-16.1).curveTo(-98.2,-20.2,-94,-23.3).curveTo(-92.3,-24.6,-90.4,-25.5).curveTo(-89.2,-26,-88,-26.3).curveTo(-85.7,-26.9,-83.1,-26.9).lineTo(-83,-26.9);
	this.shape_30.setTransform(167.7,500.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#D91313").beginStroke().moveTo(-31.7,39.4).lineTo(-32.4,39.3).lineTo(-33.3,39.2).curveTo(-88.8,31.4,-111.5,12.2).curveTo(-114.6,9.6,-117.2,6.7).lineTo(-118.6,5).curveTo(-117.6,2.6,-116.6,1.3).lineTo(-116,0.8).curveTo(-115.4,3.5,-113.7,5.6).curveTo(-110,9.3,-104,13.7).curveTo(-96.9,18.8,-72.4,27.9).curveTo(-48.8,36.6,2,37.2).lineTo(2.5,37.2).lineTo(3,37.2).curveTo(49.1,36.6,72.8,27.9).curveTo(97.2,18.8,104.3,13.7).lineTo(107.8,11.2).curveTo(111.5,8.3,114.1,5.6).lineTo(114.7,4.9).curveTo(115.3,3.9,115.7,2.7).curveTo(116,1.8,116.2,0.8).lineTo(116.9,1.3).curveTo(117.8,2.4,118.6,4.2).curveTo(118.1,5.4,117.5,6.6).lineTo(116.2,8.6).curveTo(114.2,11.4,111.2,13.8).curveTo(74,41.8,8.9,41.8).curveTo(-10.2,41.8,-31.7,39.4).closePath().moveTo(-46.4,19).curveTo(-91.5,8.9,-101.6,-5.3).curveTo(-103.1,-7.5,-103.9,-9.9).curveTo(-104.6,-12.1,-104.5,-14.3).curveTo(-103.2,-14.7,-102.1,-14.7).lineTo(-101.9,-14.7).lineTo(-98.6,-14.7).curveTo(-98.8,-13.9,-98.8,-13.1).lineTo(-98.5,-11.6).lineTo(-98.3,-10.9).lineTo(-97.7,-9.4).curveTo(-96.8,-7.7,-95.1,-5.8).lineTo(-94.9,-5.6).lineTo(-91,-2.4).curveTo(-85.7,1.5,-78.5,4.9).curveTo(-55.9,15.3,-24.1,16.6).lineTo(-22.3,16.6).curveTo(-11.3,17.8,2,17.7).curveTo(11.7,17.8,22.6,16.6).lineTo(24.4,16.6).curveTo(56.3,15.3,78.8,4.9).curveTo(86,1.5,91.4,-2.4).lineTo(95.3,-5.6).curveTo(97.8,-8.4,98.7,-10.9).lineTo(98.8,-11).lineTo(98.8,-11.6).lineTo(99,-13.1).lineTo(98.9,-14.7).lineTo(102.2,-14.7).lineTo(102.5,-14.7).curveTo(103.4,-14.7,104.4,-14.4).curveTo(104.7,-11.8,104,-9.2).curveTo(100.1,5.2,65.8,15.1).curveTo(38.9,22.4,4.2,22.4).curveTo(-19.4,22.4,-46.4,19).closePath().moveTo(-86.8,-19.8).curveTo(-87.8,-22.2,-87.8,-24.9).curveTo(-85.5,-25.5,-83,-25.5).lineTo(-82.9,-25.5).curveTo(-83.5,-22.4,-81.6,-18.9).lineTo(-81.5,-18.8).lineTo(-81.5,-18.7).lineTo(-81.1,-18.3).curveTo(-79.9,-16.3,-77.5,-14.2).curveTo(-74.7,-12.2,-71.9,-10.4).curveTo(-64,-5.7,-52.9,-2.6).lineTo(-47.6,-1.3).curveTo(-44.8,-0.8,-41.4,0.1).curveTo(-38.2,0.9,-33.6,1.3).lineTo(-24.3,2.3).lineTo(-13.7,3).curveTo(-9,3.4,2,3.5).curveTo(9.3,3.4,14.1,3).lineTo(24.6,2.3).lineTo(34,1.3).curveTo(38.5,0.9,41.8,0.1).curveTo(45,-0.8,47.8,-1.3).lineTo(53.2,-2.6).curveTo(64.4,-5.7,72.1,-10.4).lineTo(75.3,-12.4).lineTo(77.8,-14.2).curveTo(80.2,-16.3,81.5,-18.3).lineTo(81.8,-18.7).lineTo(81.9,-18.9).lineTo(82.6,-20.3).curveTo(83.8,-23,83.2,-25.5).lineTo(83.3,-25.5).curveTo(85.7,-25.5,88,-24.9).curveTo(88.5,-21.8,87.9,-19).curveTo(86.2,-11.8,77,-6.6).curveTo(56.9,4.9,0.8,7.4).curveTo(-78.6,4.5,-86.8,-19.8).closePath().moveTo(-74.8,-29.7).curveTo(-76.4,-32.1,-77.2,-34.8).curveTo(-75.7,-36,-74,-36.8).curveTo(-72.7,-37.5,-72,-37.7).curveTo(-70.1,-38.3,-64.3,-39.2).curveTo(-47.6,-41.5,-37.8,-41.7).curveTo(-34.7,-41.9,-11,-41.7).lineTo(-7.9,-41.7).lineTo(-3,-41.6).lineTo(0.4,-41.6).lineTo(4,-41.6).lineTo(8.3,-41.6).lineTo(12.3,-41.6).lineTo(16.1,-41.6).lineTo(19.6,-41.8).curveTo(35.4,-41.9,38.1,-41.7).curveTo(47.9,-41.5,64.6,-39.2).curveTo(70.4,-38.3,72.3,-37.7).curveTo(73,-37.5,74.3,-36.8).curveTo(76.7,-35.7,78.8,-33.6).curveTo(78,-31.2,76.3,-29).curveTo(63.6,-12.3,1.6,-10.1).curveTo(-62.2,-10.9,-74.8,-29.7).closePath();
	this.shape_31.setTransform(167.6,499.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#F04040").beginStroke().moveTo(2.5,37.2).curveTo(-39.6,37.4,-61.9,31.6).curveTo(-84.2,25.8,-94.5,21.9).curveTo(-99.8,20,-104.9,17).curveTo(-115,10.8,-118.1,5).lineTo(-117.2,-0.8).curveTo(-114.7,2.1,-111.6,4.8).curveTo(-88.9,23.9,-33.3,31.7).lineTo(-32.5,31.9).lineTo(-31.8,31.9).curveTo(63.1,42.5,111.1,6.4).curveTo(114.2,4,116.2,1.1).lineTo(118.1,5.3).curveTo(114.9,11.1,105,17).curveTo(99.9,20,94.7,21.9).curveTo(84.4,25.8,62.1,31.6).curveTo(40.5,37.2,5,37.2).lineTo(2.5,37.2).closePath().moveTo(2.4,29.7).lineTo(2,29.7).curveTo(-48.9,29.2,-72.5,20.4).curveTo(-96.9,11.3,-104.1,6.2).curveTo(-110.1,1.9,-113.8,-1.8).curveTo(-115.5,-4,-116,-6.7).curveTo(-114.2,-10.6,-112.4,-13).curveTo(-100,3.1,-88.6,4).curveTo(-105.4,-6.2,-107.3,-17.4).curveTo(-105.6,-18,-104,-17.4).curveTo(-103.2,-15,-101.7,-12.7).curveTo(-91.5,1.4,-46.5,11.6).curveTo(20.5,19.9,65.8,7.6).curveTo(100,-2.3,103.9,-16.6).curveTo(105.7,-17,107.4,-16.3).curveTo(111.8,-14.3,115.6,-4.7).curveTo(115.2,-3.6,114.6,-2.6).lineTo(114,-1.8).curveTo(111.4,0.8,107.7,3.7).lineTo(104.3,6.2).curveTo(97.1,11.3,72.7,20.4).curveTo(49,29.2,2.9,29.7).lineTo(2.4,29.7).closePath().moveTo(2,10.2).curveTo(-11.4,10.3,-22.3,9.2).lineTo(-24.2,9.1).curveTo(-56,7.8,-78.5,-2.6).curveTo(-85.8,-6,-91.1,-9.8).lineTo(-95,-13).lineTo(-95.2,-13.2).curveTo(-96.9,-15.1,-97.8,-16.8).curveTo(-94.5,-25.3,-90.4,-26.9).curveTo(-88.7,-27.7,-86.9,-27.2).curveTo(-78.6,-3,0.8,-0).curveTo(56.8,-2.5,76.9,-14.1).curveTo(86.1,-19.3,87.8,-26.5).curveTo(89.3,-26.8,90.9,-26.3).curveTo(95.1,-25.1,98.7,-18.5).lineTo(98.6,-18.3).curveTo(97.7,-15.9,95.2,-13).lineTo(91.3,-9.8).curveTo(85.9,-6,78.7,-2.6).curveTo(56.2,7.8,24.3,9.1).lineTo(22.5,9.2).curveTo(12.5,10.2,3.5,10.2).lineTo(2,10.2).closePath().moveTo(-13.8,-4.4).lineTo(-24.4,-5.2).lineTo(-33.7,-6.1).curveTo(-38.2,-6.6,-41.5,-7.4).curveTo(-44.8,-8.3,-47.6,-8.8).lineTo(-53,-10.1).curveTo(-64.1,-13.1,-71.9,-17.8).curveTo(-74.8,-19.7,-77.5,-21.7).curveTo(-80,-23.8,-81.2,-25.8).lineTo(-81.6,-26.1).lineTo(-81.6,-26.2).curveTo(-80.8,-32.3,-77.8,-35.3).curveTo(-76.5,-36.5,-74.9,-37.2).curveTo(-62.2,-18.4,1.5,-17.6).curveTo(63.5,-19.8,76.2,-36.4).curveTo(77.4,-36,78.6,-34.7).curveTo(80.5,-32.5,82.5,-27.7).lineTo(81.9,-26.4).lineTo(81.7,-26.1).lineTo(81.4,-25.8).curveTo(80.2,-23.8,77.7,-21.7).lineTo(75.2,-19.8).lineTo(72.1,-17.8).curveTo(64.3,-13.1,53.1,-10.1).lineTo(47.8,-8.8).curveTo(45,-8.3,41.7,-7.4).curveTo(38.4,-6.6,33.9,-6.1).lineTo(24.5,-5.2).lineTo(14,-4.4).curveTo(9.2,-4.1,2,-3.9).curveTo(-9.1,-4.1,-13.8,-4.4).closePath();
	this.shape_32.setTransform(167.6,506.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FF7070").beginStroke().moveTo(116.1,19.6).lineTo(117.3,17.7).curveTo(117.9,16.4,118.4,15.2).lineTo(118.7,15.9).lineTo(119,16.7).lineTo(119.1,17.1).lineTo(119.4,18.1).curveTo(119.7,19.9,118.9,21.9).lineTo(118,23.7).closePath().moveTo(-118.9,21.9).lineTo(-119.1,21.2).curveTo(-119.7,19.6,-119.5,18.1).lineTo(-119.1,17.1).lineTo(-119,16.7).lineTo(-118.8,16).lineTo(-117.3,17.7).lineTo(-118.2,23.4).lineTo(-118.9,21.9).closePath().moveTo(-112.5,5.4).curveTo(-114.3,7.9,-116.1,11.8).curveTo(-116.3,10.8,-116.3,9.8).lineTo(-116,7).lineTo(-115.4,4.7).curveTo(-114.9,3.8,-114.3,2.9).lineTo(-113.9,2.3).curveTo(-111.2,-1.2,-107.1,-2.7).curveTo(-105.8,-3.2,-104.7,-3.3).curveTo(-104.8,-1.1,-104.1,1.1).curveTo(-105.7,0.5,-107.4,1.1).curveTo(-105.5,12.3,-88.7,22.5).curveTo(-100.1,21.6,-112.5,5.4).closePath().moveTo(107.3,2.2).curveTo(105.6,1.4,103.8,1.8).curveTo(104.5,-0.7,104.2,-3.4).lineTo(106.3,-2.9).lineTo(107,-2.7).curveTo(112.6,-0.6,115.4,4.7).lineTo(116,7).lineTo(116.3,9.8).curveTo(116.3,10.8,116.1,11.8).curveTo(115.9,12.8,115.5,13.7).curveTo(111.7,4.1,107.3,2.2).closePath().moveTo(-98.5,0.1).lineTo(-98.7,-0.6).lineTo(-98.9,-2).curveTo(-98.9,-2.9,-98.8,-3.7).curveTo(-98.2,-7.8,-94,-10.9).curveTo(-92.3,-12.2,-90.4,-13).curveTo(-89.2,-13.6,-88,-13.8).curveTo(-87.9,-11.2,-87,-8.8).curveTo(-88.8,-9.2,-90.5,-8.4).curveTo(-94.6,-6.8,-97.9,1.7).lineTo(-98.5,0.1).closePath().moveTo(90.8,-7.9).curveTo(89.2,-8.3,87.7,-8).curveTo(88.3,-10.8,87.8,-13.9).curveTo(90.7,-13.1,93.3,-11.5).lineTo(94,-10.9).curveTo(98.1,-7.8,98.8,-3.7).lineTo(98.9,-2).lineTo(98.7,-0.6).lineTo(98.6,0).curveTo(95,-6.6,90.8,-7.9).closePath().moveTo(-81.8,-7.9).curveTo(-83.7,-11.3,-83,-14.5).lineTo(-83,-14.6).lineTo(-82.7,-15.7).curveTo(-81.9,-18.1,-80.9,-19.7).curveTo(-79.3,-22.1,-77.3,-23.7).curveTo(-76.6,-21.1,-75,-18.7).curveTo(-76.6,-18.1,-77.9,-16.8).curveTo(-80.9,-13.8,-81.7,-7.8).lineTo(-81.8,-7.9).closePath().moveTo(78.5,-16.3).curveTo(77.3,-17.6,76.1,-18).curveTo(77.8,-20.2,78.6,-22.6).lineTo(79.6,-21.4).lineTo(80.9,-19.7).curveTo(82.1,-17.8,83,-14.6).lineTo(83,-14.5).curveTo(83.6,-12,82.4,-9.2).curveTo(80.4,-14,78.5,-16.3).closePath();
	this.shape_33.setTransform(167.7,488.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("rgba(0,0,0,0.4)").beginStroke().moveTo(-60,21.3).curveTo(-72.9,18.8,-84.4,15).curveTo(-119.3,3.8,-119.3,-12.1).curveTo(-119.3,-28,-84.4,-39.4).curveTo(-49.4,-50.6,-0,-50.6).curveTo(49.3,-50.6,84.3,-39.4).curveTo(119.3,-28,119.3,-12).curveTo(119.3,3.8,84.3,15).curveTo(71.7,19.1,57.1,21.8).curveTo(62.9,49.8,-3.2,50.6).curveTo(-64.8,49.1,-60,21.3).closePath();
	this.shape_34.setTransform(167.3,529.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(130));

	// Layer 5
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(-5.9,-6.2).curveTo(-5.2,-6.6,-5.2,-6.7).curveTo(-4.1,-7.5,-3.6,-7.8).curveTo(0.4,-10.4,4,-12.7).curveTo(6.2,-14,8.4,-15.3).lineTo(8.4,-15.4).curveTo(13.3,-18.4,16.2,-21.6).curveTo(16.3,-21.8,16.5,-22).curveTo(16.8,-22.7,17.1,-23.4).curveTo(17.1,-23.5,17.1,-23.5).curveTo(18,-25.8,17.2,-29.2).moveTo(13.8,-29.2).curveTo(14,-29,14.2,-28.8).curveTo(14.8,-26.6,14.4,-25.2).lineTo(14.4,-25.1).curveTo(14.2,-24.8,14.1,-24.4).curveTo(11.4,-21.6,7.1,-18.9).curveTo(5.1,-17.8,3,-16.4).curveTo(-0.8,-14.1,-4.9,-11.4).curveTo(-8.9,-8.8,-12.4,-6.5).curveTo(-12.4,-6.5,-12.5,-6.5).curveTo(-12.7,-6.4,-12.9,-6.2).lineTo(-13.2,-6.1).moveTo(-12.9,-6.2).curveTo(-13,-6.1,-13.1,-6.1).lineTo(-13.2,-6.1).lineTo(-17.6,-3.8).moveTo(-17.6,0.7).curveTo(-17.3,0.5,-17,0.4).curveTo(-14.8,-0.8,-12.4,-2.2).lineTo(-12.4,-2.2).lineTo(-5.9,-6.2).curveTo(-2.9,-6.8,-0.7,-6.9).curveTo(-0.5,-6.9,-0.2,-6.9).lineTo(6,-7).curveTo(6.1,-7,6.1,-7).curveTo(14.2,-6.3,16.6,-2.3).curveTo(16.8,-2.1,16.9,-1.8).curveTo(17.4,-0.1,17.6,1.5).lineTo(17.6,1.5).curveTo(17.6,2,17.6,2.5).curveTo(17.6,4.1,17.1,5.4).curveTo(16.9,5.9,16.6,6.4).curveTo(16.6,6.5,16.5,6.5).curveTo(14.8,9.3,12.7,11.3).lineTo(12.7,11.3).curveTo(11.6,12.4,10.4,13.2).curveTo(9.4,13.9,8.4,14.5).lineTo(8.3,14.6).curveTo(7.4,15.2,6.4,15.7).curveTo(6.3,15.7,6.3,15.7).lineTo(6.2,15.8).curveTo(3.2,17.8,-2.2,20.7).lineTo(-2.3,20.7).curveTo(-5.9,22.6,-8.3,24).moveTo(-17.6,24.9).lineTo(-15.8,24).curveTo(-15.5,23.8,-15.2,23.6).curveTo(-14,22.9,-12.1,21.8).curveTo(-9.4,20.2,-3.4,17).curveTo(-0.1,15.2,2.4,13.8).curveTo(3.8,12.9,5,12.2).lineTo(5,12.2).curveTo(6,11.6,7.1,11).lineTo(7.1,11).curveTo(8.3,10.2,9.4,9.3).curveTo(10.2,8.8,11,8).curveTo(12.7,6.4,14.1,4.1).curveTo(14.3,3.9,14.4,3.6).curveTo(14.5,3.1,14.5,2.5).curveTo(14.6,2,14.5,1.5).lineTo(14.5,1.5).curveTo(14.4,0.8,14.2,0).curveTo(12.2,-2.4,6.4,-2.9).curveTo(6.1,-3.1,5.9,-3.1).lineTo(-0.2,-2.9).curveTo(-0.5,-2.9,-0.7,-2.9).curveTo(-5.8,-2.8,-12.4,-2.2).moveTo(-9.2,24.5).lineTo(-9.3,24.5).curveTo(-8.9,24.2,-8.3,24).lineTo(-9.2,24.5).lineTo(-15.2,28).lineTo(-15.3,28).curveTo(-16.5,28.6,-17.6,29.2);
	this.shape_35.setTransform(189.9,384.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-17.6,24.9).lineTo(-15.8,24).lineTo(-15.2,23.6).lineTo(-12.1,21.8).curveTo(-9.4,20.2,-3.4,17).lineTo(2.4,13.8).lineTo(5,12.2).lineTo(5,12.2).lineTo(7.1,11).lineTo(7.1,11).curveTo(8.3,10.2,9.4,9.3).curveTo(10.2,8.8,11,8).curveTo(12.7,6.4,14.1,4.1).lineTo(14.4,3.6).lineTo(14.5,2.5).lineTo(14.5,1.5).lineTo(14.5,1.5).lineTo(14.2,0).curveTo(12.2,-2.4,6.4,-2.9).lineTo(5.9,-3.1).lineTo(-0.2,-2.9).lineTo(-0.7,-2.9).curveTo(-5.8,-2.8,-12.4,-2.2).lineTo(-5.9,-6.2).lineTo(-12.4,-2.2).lineTo(-12.4,-2.2).lineTo(-17,0.4).lineTo(-17.6,0.7).lineTo(-17.6,-3.8).lineTo(-13.2,-6.1).lineTo(-13.1,-6.1).lineTo(-12.9,-6.2).lineTo(-12.5,-6.5).lineTo(-12.4,-6.5).lineTo(-4.9,-11.4).curveTo(-0.8,-14.1,3,-16.4).lineTo(7.1,-18.9).curveTo(11.4,-21.6,14.1,-24.4).lineTo(14.4,-25.1).lineTo(14.4,-25.2).curveTo(14.8,-26.6,14.2,-28.8).lineTo(13.8,-29.2).lineTo(17.2,-29.2).curveTo(18,-25.8,17.1,-23.5).lineTo(17.1,-23.4).lineTo(16.5,-22).lineTo(16.2,-21.6).curveTo(13.3,-18.4,8.4,-15.4).lineTo(8.4,-15.3).lineTo(4,-12.7).lineTo(-3.6,-7.8).lineTo(-5.2,-6.7).lineTo(-5.9,-6.2).curveTo(-2.9,-6.8,-0.7,-6.9).lineTo(-0.2,-6.9).lineTo(6,-7).lineTo(6.1,-7).curveTo(14.2,-6.3,16.6,-2.3).lineTo(16.9,-1.8).curveTo(17.4,-0.1,17.6,1.5).lineTo(17.6,1.5).lineTo(17.6,2.5).curveTo(17.6,4.1,17.1,5.4).lineTo(16.6,6.4).lineTo(16.5,6.5).curveTo(14.8,9.3,12.7,11.3).lineTo(12.7,11.3).curveTo(11.6,12.4,10.4,13.2).curveTo(9.4,13.9,8.4,14.5).lineTo(8.3,14.6).lineTo(6.4,15.7).lineTo(6.3,15.7).lineTo(6.2,15.8).curveTo(3.2,17.8,-2.2,20.7).lineTo(-2.3,20.7).curveTo(-5.9,22.6,-8.3,24).lineTo(-9.3,24.5).lineTo(-9.2,24.5).lineTo(-15.2,28).lineTo(-15.3,28).lineTo(-17.6,29.2).closePath();
	this.shape_36.setTransform(189.9,384.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35}]},104).to({state:[]},25).wait(1));

	// Layer 10
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(-18.2,15.3).curveTo(-15.1,13.8,-11.5,11.7).lineTo(-11.5,11.7).lineTo(-5,7.6).curveTo(-4.3,7.2,-4.3,7.1).curveTo(-3.2,6.4,-2.7,6.1).curveTo(1.3,3.4,4.9,1.2).curveTo(7.1,-0.2,9.3,-1.5).lineTo(9.3,-1.5).curveTo(14.2,-4.6,17.1,-7.7).curveTo(17.2,-7.9,17.4,-8.2).curveTo(17.7,-8.9,18,-9.5).curveTo(18,-9.6,18,-9.7).curveTo(18.9,-12,18.1,-15.4).moveTo(14.7,-15.4).curveTo(14.9,-15.2,15.1,-14.9).curveTo(15.7,-12.7,15.3,-11.3).lineTo(15.3,-11.2).curveTo(15.1,-10.9,15,-10.5).curveTo(12.3,-7.8,8,-5.1).curveTo(6,-3.9,3.9,-2.6).curveTo(0.1,-0.3,-4,2.5).curveTo(-8.1,5.1,-11.6,7.4).curveTo(-11.8,7.5,-12,7.6).curveTo(-12.1,7.7,-12.2,7.8).lineTo(-12.3,7.8).moveTo(-12,7.6).lineTo(-12.3,7.8).lineTo(-18.5,11);
	this.shape_37.setTransform(189,371);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-18.5,15.3).lineTo(-18.5,11).lineTo(-12.3,7.8).lineTo(-12.2,7.8).lineTo(-12,7.7).lineTo(-11.6,7.4).lineTo(-4,2.5).curveTo(0.1,-0.3,3.9,-2.6).lineTo(8,-5).curveTo(12.3,-7.7,15,-10.5).lineTo(15.3,-11.2).lineTo(15.3,-11.3).curveTo(15.7,-12.7,15.1,-14.9).lineTo(14.7,-15.4).lineTo(18.1,-15.4).curveTo(18.9,-11.9,18,-9.7).lineTo(18,-9.5).lineTo(17.4,-8.2).lineTo(17.1,-7.7).curveTo(14.2,-4.6,9.3,-1.5).lineTo(9.3,-1.4).lineTo(4.9,1.2).lineTo(-2.7,6.1).lineTo(-4.3,7.1).lineTo(-5,7.7).lineTo(-11.5,11.7).lineTo(-11.5,11.7).curveTo(-15.1,13.8,-18.2,15.3).closePath();
	this.shape_38.setTransform(189,371);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(16.6,-0.9).curveTo(7.9,2.2,-0.4,3.4).curveTo(-9.4,4.7,-12.5,2.9).curveTo(-13.3,2,-13.6,1.3).curveTo(-12.2,-1.7,-7.4,-2.8).curveTo(-1.6,-3.8,5.5,-3.9).lineTo(12.4,-3.7).lineTo(12.4,-7.9).lineTo(5.5,-7.9).curveTo(-1.9,-7.7,-7.8,-6.8).lineTo(-7.9,-6.7).curveTo(-15.1,-5,-16.5,0.2).curveTo(-16.6,0.5,-16.6,0.8).curveTo(-16.9,3.6,-14.2,6.2).curveTo(-14.1,6.3,-13.9,6.4).curveTo(-10.4,8.8,-0.1,7.4).curveTo(8.1,6.3,16.6,3.3);
	this.shape_39.setTransform(144.5,387.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-13.9,6.4).lineTo(-14.2,6.2).curveTo(-16.9,3.6,-16.6,0.8).lineTo(-16.5,0.2).curveTo(-15.1,-5,-7.9,-6.7).lineTo(-7.8,-6.8).curveTo(-1.9,-7.7,5.5,-7.9).lineTo(12.4,-7.9).lineTo(12.4,-3.7).lineTo(5.5,-3.9).curveTo(-1.6,-3.8,-7.4,-2.8).curveTo(-12.2,-1.7,-13.6,1.3).curveTo(-13.3,2,-12.5,2.9).curveTo(-9.4,4.7,-0.4,3.4).curveTo(7.9,2.2,16.6,-0.9).lineTo(16.6,3.3).curveTo(8.1,6.3,-0.1,7.4).curveTo(-3.8,7.9,-6.7,7.9).curveTo(-11.7,7.9,-13.9,6.4).closePath();
	this.shape_40.setTransform(144.5,387.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37}]},68).to({state:[]},13).to({state:[{t:this.shape_40},{t:this.shape_39}]},15).to({state:[]},33).wait(1));

	// Layer 4
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(10.1,-20.9).lineTo(9.8,-20.7).lineTo(9.9,-20.7).curveTo(10,-20.8,10.1,-20.9).closePath().moveTo(10.1,-20.9).curveTo(10.1,-20.9,10.1,-20.9).moveTo(-10.1,-7.6).curveTo(-6.3,-8.8,-2.4,-10.3).curveTo(-0.3,-11.1,2,-12.2).curveTo(5.7,-14,10.1,-16.6).moveTo(9.8,-20.7).lineTo(0.5,-15.8).curveTo(-1.1,-15,-2.5,-14.4).curveTo(-2.9,-14.3,-3.3,-14.1).curveTo(-6.7,-12.8,-10.1,-11.8).moveTo(-10.1,16.8).curveTo(-6.7,15.7,-3.3,14.4).lineTo(-3.3,14.5).curveTo(-1.4,13.6,0.7,12.7).lineTo(7.2,9.3).curveTo(7.5,9.1,7.8,9).curveTo(8.7,8.4,10.1,7.6).moveTo(10.1,12).lineTo(7.8,13.3).lineTo(7.7,13.3).curveTo(2,16.5,-2.4,18.2).curveTo(-6.3,19.7,-10.1,20.9);
	this.shape_41.setTransform(167,399.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill().beginStroke("#446083").setStrokeStyle(1,1,1).moveTo(-10.1,-13.9).lineTo(-10.1,-46.1).lineTo(10.1,-46.1).lineTo(10.1,-23).moveTo(10.1,9.9).lineTo(10.1,45.9).curveTo(-0.1,46.3,-10.1,45.9).lineTo(-10.1,18.8).moveTo(10.1,-18.7).lineTo(10.1,5.5).moveTo(-10.1,14.6).lineTo(-10.1,-9.7);
	this.shape_42.setTransform(167,401.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginLinearGradientFill(["#8597AD","#BACEE9","#8597AD"],[0.008,0.569,1],-10.1,0,10.1,0).beginStroke().moveTo(-10.1,45.9).lineTo(-10.1,18.8).curveTo(-6.3,17.6,-2.4,16.1).curveTo(2,14.4,7.7,11.2).lineTo(7.7,11.2).lineTo(10.1,9.9).lineTo(10.1,45.9).curveTo(5,46.1,-0.1,46.1).curveTo(-5.1,46.1,-10.1,45.9).closePath().moveTo(-10.1,-9.7).curveTo(-6.3,-10.9,-2.4,-12.4).curveTo(-0.4,-13.2,2,-14.3).curveTo(5.7,-16.1,10.1,-18.7).lineTo(10.1,5.5).lineTo(7.7,6.9).lineTo(7.2,7.2).lineTo(0.7,10.6).lineTo(-3.2,12.4).lineTo(-3.2,12.3).curveTo(-6.7,13.6,-10.1,14.6).closePath().moveTo(-10.1,-46.1).lineTo(10.1,-46.1).lineTo(10.1,-23).lineTo(10.1,-23).lineTo(9.7,-22.8).lineTo(0.4,-17.9).lineTo(-2.5,-16.5).lineTo(-3.2,-16.2).curveTo(-6.7,-14.9,-10.1,-13.9).closePath().moveTo(9.7,-22.8).lineTo(10.1,-23).lineTo(9.8,-22.8).closePath().moveTo(9.7,-22.8).closePath();
	this.shape_43.setTransform(167,401.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#BBBBBB").beginStroke().moveTo(-10.1,16.8).curveTo(-6.7,15.7,-3.2,14.4).lineTo(-3.2,14.5).lineTo(0.7,12.7).lineTo(7.2,9.3).lineTo(7.7,9).lineTo(10.1,7.6).lineTo(10.1,12).lineTo(7.7,13.3).lineTo(7.7,13.3).curveTo(2,16.5,-2.4,18.2).curveTo(-6.3,19.7,-10.1,20.9).closePath().moveTo(-10.1,-11.8).curveTo(-6.7,-12.8,-3.2,-14.1).lineTo(-2.5,-14.4).lineTo(0.4,-15.8).lineTo(9.7,-20.7).lineTo(9.8,-20.7).lineTo(10.1,-20.9).lineTo(10.1,-20.9).lineTo(10.1,-16.6).curveTo(5.7,-14,2,-12.2).curveTo(-0.4,-11.1,-2.4,-10.3).curveTo(-6.3,-8.8,-10.1,-7.6).closePath();
	this.shape_44.setTransform(167,399.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},61).to({state:[]},20).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},15).to({state:[]},24).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[]},7).wait(2));

	// Layer 3
	this.instance_4 = new lib.gum("single",3);
	this.instance_4.parent = this;
	this.instance_4.setTransform(190.7,336.8,0.875,0.875,0,0,0,27.3,27.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},0).to({x:186.8,y:340.1},1).to({x:182.9,y:343.4},1).to({x:179,y:346.7},1).to({x:175.1,y:349.9},1).to({x:171.2,y:353.2},1).to({x:167,y:355.9},1).to({x:162.8,y:358.2},1).to({x:158.6,y:360.7},1).to({x:154.4,y:362.6},1).to({x:150.2,y:364.1},1).to({x:146.1,y:365.5},1).to({x:141.9,y:367.2},1).to({x:144.2,y:366.9},1).to({x:146.4,y:366},1).to({x:148.7,y:365.1},1).to({x:151,y:364.2},1).to({x:153.3,y:363.3},1).to({x:155.6,y:362.3},1).to({x:157.9,y:361.4},1).to({x:162.6,y:360.5},1).to({x:167.4,y:359.6},1).to({x:172.1,y:358.7},1).to({x:176.8,y:357.8},1).to({x:181.6,y:356.9},1).to({x:186.3,y:355.9},1).to({x:191.1,y:355},1).to({x:195.1,y:356.5},1).to({x:199.1,y:358.1},1).to({x:203.1,y:359.6},1).to({x:203.9,y:361.1},1).to({x:204.3,y:362.6},1).to({y:365.6},1).to({x:199.9,y:368.6},1).to({x:194.3,y:371.6},1).to({x:188.7,y:374.6},1).to({x:183.1,y:377.6},1).to({x:177.5,y:380.6},1).to({x:172.9,y:383},1).to({x:168.4,y:385.4},1).to({x:163.8,y:387.8},1).to({x:159.2,y:390.2},1).to({x:154.7,y:392.6},1).to({x:151.5,y:393.3},1).to({x:148.3,y:393.9},1).to({x:145.1,y:394.5},1).to({x:141.9,y:395.2},1).to({x:138.7,y:395.8},1).to({y:394},1).to({y:392.1},1).to({y:390.3},1).to({y:388.5},1).to({y:386.6},1).to({x:142.9,y:386.2},1).to({x:147.2,y:385.8},1).to({x:151.4,y:385.4},1).to({x:155.6,y:385},1).to({x:159.9,y:384.6},1).to({x:165.4,y:385},1).to({x:170.9,y:385.4},1).to({x:176.4,y:385.8},1).to({x:182,y:386.2},1).to({x:187.5,y:386.6},1).to({x:191,y:388.7},1).to({x:194.5,y:390.8},1).to({x:198,y:392.9},1).to({x:201.6,y:394.9},1).to({x:204.3,y:397},1).to({x:204.6,y:403.4},1).to({x:204.1,y:409.8},1).to({x:203.6,y:416.2},1).to({x:203.9,y:422.6},1).to({x:200.3,y:423.9},1).to({x:191.1,y:428.4},1).to({x:181.9,y:433.7},1).to({x:172.7,y:439},1).to({x:166.4,y:442.5},1).to({x:160,y:446.7},1).to({x:144.9,y:456.5},1).to({x:144.2,y:459.2},1).to({x:138.7,y:465},1).to({_off:true},1).wait(1));

	// 레이어 1
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(-1.2,0.7).lineTo(1.2,-0.7);
	this.shape_45.setTransform(175.9,412.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill().beginStroke("#446083").setStrokeStyle(1,1,1).moveTo(0,0.8).lineTo(0,-0.8);
	this.shape_46.setTransform(177.1,412.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill().beginStroke("#6A737E").setStrokeStyle(1,1,1).moveTo(9,-22.3).lineTo(-0.3,-17.4).curveTo(-1.8,-16.6,-3.3,-15.9).curveTo(-3.6,-15.9,-4,-15.7).curveTo(-5.3,-15.2,-6.6,-14.8).curveTo(-15.3,-11.7,-23.6,-10.4).curveTo(-32.6,-9.2,-35.7,-11).curveTo(-36.5,-11.9,-36.8,-12.6).curveTo(-35.4,-15.6,-30.6,-16.7).curveTo(-24.8,-17.7,-17.7,-17.8).lineTo(-10.8,-17.6).lineTo(-10.8,-21.8).lineTo(-17.7,-21.8).curveTo(-25.1,-21.6,-31,-20.7).lineTo(-31.1,-20.6).curveTo(-38.3,-18.9,-39.7,-13.7).curveTo(-39.8,-13.4,-39.8,-13.1).curveTo(-40.1,-10.3,-37.4,-7.7).curveTo(-37.3,-7.6,-37.1,-7.5).curveTo(-33.6,-5.1,-23.3,-6.4).curveTo(-15.1,-7.6,-6.6,-10.6).curveTo(-4.9,-11.2,-3.1,-11.9).curveTo(-1.1,-12.7,1.3,-13.8).curveTo(2.2,-14.3,3.2,-14.8).curveTo(3.9,-15.1,4.6,-15.5).curveTo(4.9,-15.7,5.2,-15.8).curveTo(7.2,-16.9,9.4,-18.2).curveTo(9.6,-18.3,9.8,-18.4).lineTo(9.9,-18.4).lineTo(16.3,-22.4).curveTo(17,-22.9,17.1,-22.9).curveTo(18.1,-23.7,18.7,-24).curveTo(22.6,-26.7,26.2,-28.9).curveTo(28.5,-30.3,30.6,-31.6).lineTo(30.6,-31.6).curveTo(35.5,-34.7,38.4,-37.8).curveTo(38.6,-38,38.7,-38.3).curveTo(39.1,-38.9,39.3,-39.6).curveTo(39.4,-39.7,39.4,-39.8).curveTo(40.3,-42.1,39.5,-45.4).moveTo(36,-45.4).curveTo(36.2,-45.3,36.4,-45).curveTo(37,-42.8,36.6,-41.4).lineTo(36.6,-41.3).curveTo(36.5,-41,36.3,-40.6).curveTo(33.7,-37.9,29.4,-35.2).curveTo(27.4,-34,25.3,-32.7).curveTo(21.5,-30.4,17.3,-27.6).curveTo(13.3,-25,9.8,-22.7).curveTo(9.8,-22.7,9.8,-22.7).curveTo(9.6,-22.6,9.4,-22.5).curveTo(9.3,-22.5,9.3,-22.4).curveTo(9.2,-22.4,9.1,-22.3).lineTo(9,-22.3).moveTo(9.3,-22.4).lineTo(9,-22.3).moveTo(7,11.8).lineTo(7,11.8).curveTo(5.8,12.4,4.6,13).curveTo(0.3,15.3,-3.1,16.6).curveTo(-13.4,20.6,-23.3,22.1).curveTo(-33.6,23.4,-37.1,20.9).curveTo(-37.3,20.9,-37.4,20.8).curveTo(-40.1,18.2,-39.8,15.4).curveTo(-39.8,15.1,-39.7,14.8).curveTo(-38.3,9.6,-31.1,7.9).lineTo(-31,7.8).curveTo(-25.1,6.8,-17.7,6.8).lineTo(-10.8,7).lineTo(-10.8,10.9).lineTo(-17.7,10.7).curveTo(-24.8,10.8,-30.6,11.8).curveTo(-35.4,12.9,-36.6,15.7).curveTo(-36.5,16.6,-35.7,17.5).curveTo(-32.6,19.3,-23.6,18.1).curveTo(-14,16.7,-4,12.8).lineTo(-4,12.9).curveTo(-2.1,12.1,-0,11.1).lineTo(6.5,7.8).curveTo(6.7,7.6,7,7.4).curveTo(8,6.8,9.4,6.1).curveTo(9.8,5.8,10.2,5.6).curveTo(12.9,3.9,18.9,0.8).curveTo(22.2,-1,24.7,-2.4).curveTo(26.1,-3.3,27.2,-4).lineTo(27.3,-4).curveTo(28.3,-4.6,29.3,-5.3).lineTo(29.4,-5.3).curveTo(30.6,-6,31.7,-6.9).curveTo(32.5,-7.4,33.2,-8.2).curveTo(35,-9.9,36.4,-12.1).curveTo(36.5,-12.4,36.6,-12.6).curveTo(36.8,-13.1,36.8,-13.7).curveTo(36.8,-14.2,36.7,-14.7).lineTo(36.7,-14.8).curveTo(36.6,-15.4,36.4,-16.2).curveTo(34.4,-18.7,28.6,-19.2).curveTo(28.4,-19.3,28.2,-19.3).lineTo(22,-19.1).curveTo(21.8,-19.1,21.6,-19.1).curveTo(16.5,-19,9.9,-18.4).moveTo(16.3,-22.4).curveTo(19.4,-23.1,21.5,-23.1).curveTo(21.8,-23.1,22,-23.1).lineTo(28.3,-23.3).curveTo(28.3,-23.3,28.4,-23.3).curveTo(36.5,-22.6,38.9,-18.6).curveTo(39,-18.4,39.1,-18.1).curveTo(39.7,-16.3,39.8,-14.8).lineTo(39.8,-14.7).curveTo(39.8,-14.2,39.8,-13.7).curveTo(39.8,-12.1,39.3,-10.9).curveTo(39.1,-10.4,38.9,-9.9).curveTo(38.8,-9.8,38.8,-9.7).curveTo(37,-6.9,34.9,-4.9).lineTo(35,-4.9).curveTo(33.8,-3.9,32.6,-3.1).curveTo(31.6,-2.3,30.6,-1.8).lineTo(30.6,-1.7).curveTo(29.6,-1.1,28.6,-0.5).curveTo(28.6,-0.5,28.5,-0.5).lineTo(28.5,-0.4).curveTo(25.4,1.6,20,4.5).lineTo(20,4.5).curveTo(16.4,6.3,14,7.8).moveTo(13.1,8.3).lineTo(13.8,8.3).curveTo(13.9,8.3,13.9,8.4).curveTo(26.6,10.8,30.6,17.4).lineTo(30.7,17.5).curveTo(31.4,18.6,32,20.1).curveTo(32.8,22.1,33.4,24.8).curveTo(34.6,29.6,33.1,34.3).curveTo(32.5,36.2,31.4,38.3).curveTo(31,39.1,30.7,39.7).curveTo(29.9,41.3,28.1,43.5).curveTo(27.3,44.6,26.5,44.8).moveTo(13.1,8.3).lineTo(12.9,8.3).curveTo(13.4,8,14,7.8).closePath().moveTo(21,45.4).curveTo(23,44.5,26,40.6).curveTo(26.8,39.6,27.6,38.3).curveTo(30.3,34.3,30.6,29.3).curveTo(30.8,27,30.3,24.8).curveTo(29.5,21.9,28.4,20.1).lineTo(28.5,20.1).lineTo(28.4,20.1).curveTo(28.4,20.1,28.3,19.9).curveTo(24.7,14.4,13.5,12.4).lineTo(9.4,12).moveTo(9.4,10.4).lineTo(13.1,8.3);
	this.shape_47.setTransform(167.7,401.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#BBBBBB").beginStroke().moveTo(26,40.7).curveTo(26.8,39.6,27.6,38.3).curveTo(30.3,34.3,30.6,29.3).curveTo(30.8,27,30.3,24.7).curveTo(29.5,21.9,28.4,20.1).lineTo(28.5,20.1).lineTo(28.4,20.1).lineTo(28.3,20).curveTo(24.7,14.4,13.5,12.4).lineTo(9.4,12).lineTo(9.4,10.4).lineTo(7,11.8).lineTo(7,11.8).lineTo(4.6,13).curveTo(0.3,15.3,-3.1,16.6).curveTo(-13.4,20.6,-23.3,22).curveTo(-33.6,23.4,-37.1,21).lineTo(-37.4,20.8).curveTo(-40.1,18.2,-39.8,15.5).lineTo(-39.7,14.7).curveTo(-38.3,9.6,-31.1,7.9).lineTo(-31,7.8).curveTo(-25.1,6.9,-17.7,6.7).lineTo(-10.8,7).lineTo(-10.8,11).lineTo(-17.7,10.7).curveTo(-24.8,10.8,-30.6,11.8).curveTo(-35.4,12.9,-36.6,15.7).curveTo(-36.5,16.6,-35.7,17.5).curveTo(-32.6,19.3,-23.6,18.1).curveTo(-14,16.7,-4,12.8).lineTo(-4,12.9).lineTo(-0,11.1).lineTo(6.5,7.7).lineTo(7,7.4).lineTo(9.4,6).lineTo(10.2,5.6).curveTo(12.9,3.9,18.9,0.8).lineTo(24.7,-2.4).lineTo(27.2,-4).lineTo(27.3,-4).lineTo(29.3,-5.2).lineTo(29.4,-5.2).curveTo(30.6,-6,31.7,-6.9).curveTo(32.5,-7.4,33.2,-8.2).curveTo(35,-9.9,36.4,-12.1).lineTo(36.6,-12.6).lineTo(36.8,-13.7).lineTo(36.7,-14.7).lineTo(36.7,-14.8).lineTo(36.4,-16.2).curveTo(34.4,-18.6,28.6,-19.2).lineTo(28.2,-19.3).lineTo(22,-19.1).lineTo(21.6,-19.1).curveTo(16.5,-19,9.9,-18.4).lineTo(16.3,-22.4).lineTo(9.9,-18.4).lineTo(9.8,-18.4).lineTo(9.4,-18.2).lineTo(5.2,-15.8).lineTo(4.6,-15.5).lineTo(3.2,-14.8).lineTo(1.3,-13.8).curveTo(-1.1,-12.7,-3.1,-11.9).lineTo(-6.6,-10.6).curveTo(-15.1,-7.6,-23.3,-6.5).curveTo(-33.6,-5.1,-37.1,-7.5).lineTo(-37.4,-7.7).curveTo(-40.1,-10.2,-39.8,-13.1).lineTo(-39.7,-13.7).curveTo(-38.3,-18.9,-31.1,-20.6).lineTo(-31,-20.7).curveTo(-25.1,-21.6,-17.7,-21.8).lineTo(-10.8,-21.8).lineTo(-10.8,-17.6).lineTo(-17.7,-17.8).curveTo(-24.8,-17.7,-30.6,-16.7).curveTo(-35.4,-15.6,-36.8,-12.6).curveTo(-36.5,-11.9,-35.7,-11).curveTo(-32.6,-9.2,-23.6,-10.4).curveTo(-15.3,-11.7,-6.6,-14.8).lineTo(-4,-15.7).lineTo(-3.3,-15.9).lineTo(-0.3,-17.4).lineTo(9,-22.3).lineTo(9.1,-22.3).lineTo(9.3,-22.4).lineTo(9.4,-22.5).lineTo(9.8,-22.7).lineTo(9.8,-22.7).lineTo(17.3,-27.6).curveTo(21.5,-30.4,25.3,-32.7).lineTo(29.4,-35.1).curveTo(33.7,-37.8,36.3,-40.6).lineTo(36.6,-41.3).lineTo(36.6,-41.4).curveTo(37,-42.8,36.4,-45).lineTo(36,-45.5).lineTo(39.5,-45.5).curveTo(40.3,-42,39.4,-39.8).lineTo(39.3,-39.6).lineTo(38.7,-38.3).lineTo(38.4,-37.8).curveTo(35.5,-34.7,30.6,-31.6).lineTo(30.6,-31.5).lineTo(26.2,-28.9).lineTo(18.7,-24).lineTo(17.1,-23).lineTo(16.3,-22.4).curveTo(19.4,-23.1,21.5,-23.1).lineTo(22,-23.1).lineTo(28.3,-23.2).lineTo(28.4,-23.2).curveTo(36.5,-22.6,38.9,-18.6).lineTo(39.1,-18).curveTo(39.7,-16.3,39.8,-14.8).lineTo(39.8,-14.7).lineTo(39.8,-13.7).curveTo(39.8,-12.1,39.3,-10.8).lineTo(38.9,-9.8).lineTo(38.8,-9.7).curveTo(37,-6.9,34.9,-5).lineTo(35,-5).curveTo(33.8,-3.8,32.6,-3.1).curveTo(31.6,-2.3,30.6,-1.7).lineTo(30.6,-1.6).lineTo(28.6,-0.5).lineTo(28.5,-0.5).lineTo(28.5,-0.4).curveTo(25.4,1.6,20,4.5).lineTo(20,4.5).curveTo(16.4,6.3,14,7.7).lineTo(12.9,8.3).lineTo(13.1,8.3).lineTo(13.8,8.4).lineTo(13.9,8.4).curveTo(26.6,10.8,30.6,17.4).lineTo(30.7,17.5).curveTo(31.4,18.6,32,20.1).curveTo(32.8,22.1,33.4,24.7).curveTo(34.6,29.6,33.1,34.3).curveTo(32.5,36.2,31.4,38.3).lineTo(30.7,39.7).curveTo(29.9,41.3,28.1,43.5).curveTo(27.3,44.6,26.5,44.8).lineTo(21,45.4).curveTo(23,44.5,26,40.7).closePath().moveTo(9.4,10.4).lineTo(13.1,8.3).closePath();
	this.shape_48.setTransform(167.7,401.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill().beginStroke("#446083").setStrokeStyle(1,1,1).moveTo(10.1,-46.1).lineTo(10.1,45.9).curveTo(-0.1,46.3,-10.1,45.9).lineTo(-10.1,-46.1).closePath();
	this.shape_49.setTransform(167,401.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginLinearGradientFill(["#8597AD","#BACEE9","#8597AD"],[0.008,0.569,1],-10.1,0,10.1,0).beginStroke().moveTo(-10.1,45.9).lineTo(-10.1,-46.1).lineTo(10.1,-46.1).lineTo(10.1,45.9).curveTo(5,46.1,-0.1,46.1).curveTo(-5.1,46.1,-10.1,45.9).closePath();
	this.shape_50.setTransform(167,401.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(130));

	// 레이어 2
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill().beginStroke("#A35900").setStrokeStyle(1,1,1).moveTo(-59.6,8.2).curveTo(-59.8,7.8,-59.8,7.3).curveTo(-59.8,2.1,-42.3,-1.5).curveTo(-24.8,-5.1,-0,-5.1).curveTo(24.7,-5.1,42.1,-1.5).curveTo(59.7,2.1,59.7,7.3).curveTo(59.7,7.8,59.6,8.2).moveTo(68.9,8.2).curveTo(67.8,1.5,48.7,-3.2).curveTo(28.6,-8.2,0,-8.2).curveTo(-28.6,-8.2,-48.8,-3.2).curveTo(-67.8,1.6,-69,8.2);
	this.shape_51.setTransform(168.1,427.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#AA5D00").beginStroke().moveTo(-42.2,8.8).curveTo(-58.1,5.6,-59.5,0.9).curveTo(-59.8,0.5,-59.8,-0).curveTo(-59.8,-5.2,-42.2,-8.8).curveTo(-24.7,-12.5,0.1,-12.4).curveTo(24.7,-12.5,42.2,-8.8).curveTo(59.7,-5.2,59.7,-0).lineTo(59.6,0.9).curveTo(58.2,5.6,42.2,8.8).curveTo(24.7,12.4,0.1,12.4).curveTo(-24.7,12.4,-42.2,8.8).closePath();
	this.shape_52.setTransform(168.1,435.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#D97700").beginStroke().moveTo(59.6,8.2).lineTo(59.7,7.3).curveTo(59.7,2.1,42.1,-1.5).curveTo(24.7,-5.1,0,-5.1).curveTo(-24.8,-5.1,-42.3,-1.5).curveTo(-59.8,2.1,-59.8,7.3).curveTo(-59.8,7.8,-59.6,8.2).lineTo(-68.9,8.2).curveTo(-67.7,1.6,-48.8,-3.2).curveTo(-28.6,-8.2,0,-8.2).curveTo(28.6,-8.2,48.7,-3.2).curveTo(67.8,1.5,69,8.2).closePath();
	this.shape_53.setTransform(168.1,427.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]}).wait(130));

	// Layer 9
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill().beginStroke("#475B73").setStrokeStyle(1,1,1).moveTo(-1.4,1.5).curveTo(-0.8,2,0,2.1).curveTo(0.9,2,1.4,1.5).curveTo(2,0.9,2,0).curveTo(2,-0.8,1.5,-1.4).curveTo(0.9,-2,0,-2).curveTo(-0.8,-2,-1.5,-1.4).curveTo(-2,-0.8,-2,0).curveTo(-2,0.9,-1.4,1.5).closePath();
	this.shape_54.setTransform(77.1,353.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-1.4,1.5).curveTo(-2,0.9,-2.1,0).curveTo(-2,-0.8,-1.5,-1.4).curveTo(-0.9,-2,-0,-2.1).curveTo(0.9,-2,1.4,-1.4).curveTo(2,-0.8,2.1,0).curveTo(2,0.9,1.4,1.5).curveTo(0.8,2,-0,2.1).curveTo(-0.9,2,-1.4,1.5).closePath();
	this.shape_55.setTransform(77.1,353.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(-13.9,-7.7).lineTo(-43,-36.8).curveTo(-44.3,-38.1,-44.2,-39.8).curveTo(-44.2,-41.5,-43,-42.8).curveTo(-41.8,-44,-40,-44).curveTo(-38.3,-44,-37.1,-42.8).lineTo(-4.6,-10.3).lineTo(44.3,38).lineTo(38,44.1).closePath();
	this.shape_56.setTransform(116.6,392.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#6E829A").beginStroke().moveTo(-29.1,-24.6).lineTo(-19.8,-27.2).lineTo(29.1,21.1).lineTo(22.8,27.2).closePath();
	this.shape_57.setTransform(131.8,409.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-18.6,-11).curveTo(-19.9,-12.2,-19.8,-14).curveTo(-19.8,-15.7,-18.6,-16.9).curveTo(-17.4,-18.1,-15.6,-18.2).curveTo(-13.9,-18.2,-12.7,-16.9).lineTo(19.8,15.6).lineTo(10.5,18.2).closePath();
	this.shape_58.setTransform(92.2,366.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(6.9,-6.6).curveTo(6.9,-6.7,6.8,-6.8).curveTo(4,-9.6,0,-9.6).curveTo(-4,-9.6,-6.8,-6.8).curveTo(-9.6,-4,-9.6,0).curveTo(-9.6,2.2,-8.7,4.1).curveTo(-8,5.5,-6.8,6.8).curveTo(-3.9,9.6,-0,9.6).curveTo(4,9.6,6.8,6.8).curveTo(9.6,4,9.6,-0).curveTo(9.6,-3.8,6.9,-6.6).closePath();
	this.shape_59.setTransform(76.8,353.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-8.3,2.8).curveTo(-8.3,-1.2,-5.5,-4).curveTo(-2.6,-6.9,1.4,-6.9).curveTo(5.3,-6.8,8.1,-4).lineTo(8.3,-3.8).lineTo(-7.4,6.9).curveTo(-8.2,5,-8.3,2.8).closePath();
	this.shape_60.setTransform(75.4,350.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-7.2,5.3).curveTo(-8.5,4,-9.2,2.6).lineTo(6.5,-8.1).curveTo(9.2,-5.4,9.2,-1.6).curveTo(9.2,2.4,6.3,5.3).curveTo(3.5,8.1,-0.5,8.1).curveTo(-4.4,8.1,-7.2,5.3).closePath();
	this.shape_61.setTransform(77.2,354.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(45.9,-13.4).lineTo(45.9,13.3).curveTo(45.9,18,41.2,18).lineTo(-41.6,18).curveTo(-46.3,18,-46.3,13.3).lineTo(-46.3,-13.4).curveTo(-46.3,-18.2,-41.6,-18.2).lineTo(41.2,-18.2).curveTo(45.9,-18.2,45.9,-13.4).closePath().moveTo(51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).lineTo(-45.8,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.8,-22.4).lineTo(45.9,-22.4).curveTo(51.7,-22.4,51.7,-16.5).closePath();
	this.shape_62.setTransform(25.4,352.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-41.4,18.1).curveTo(-46.1,18.1,-46.1,13.4).lineTo(-46.1,-13.4).curveTo(-46.1,-18.1,-41.4,-18.1).lineTo(41.4,-18.1).curveTo(46.1,-18.1,46.1,-13.4).lineTo(46.1,13.4).curveTo(46.1,18.1,41.4,18.1).closePath();
	this.shape_63.setTransform(25.2,352.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-45.8,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.8,-22.3).lineTo(45.9,-22.3).curveTo(51.7,-22.4,51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).closePath().moveTo(-46.4,-13.4).lineTo(-46.4,13.3).curveTo(-46.4,18.1,-41.6,18.1).lineTo(41.2,18.1).curveTo(45.9,18.1,45.9,13.3).lineTo(45.9,-13.4).curveTo(45.9,-18.1,41.2,-18.2).lineTo(-41.6,-18.2).curveTo(-46.4,-18.1,-46.4,-13.4).closePath();
	this.shape_64.setTransform(25.4,352.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill().beginStroke("#475B73").setStrokeStyle(1,1,1).moveTo(2,0).curveTo(2,0.9,1.4,1.5).curveTo(0.8,2,0,2.1).curveTo(-0.9,2,-1.4,1.5).curveTo(-2,0.9,-2.1,0).curveTo(-2,-0.8,-1.5,-1.4).curveTo(-0.9,-2,0,-2).curveTo(0.8,-2,1.4,-1.4).curveTo(2,-0.8,2,0).closePath();
	this.shape_65.setTransform(260.1,353.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-1.4,1.5).curveTo(-2,0.9,-2.1,0).curveTo(-2,-0.8,-1.4,-1.4).curveTo(-0.9,-2,0,-2.1).curveTo(0.9,-2,1.4,-1.4).curveTo(2,-0.8,2.1,0).curveTo(2,0.9,1.4,1.5).curveTo(0.9,2,0,2.1).curveTo(-0.9,2,-1.4,1.5).closePath();
	this.shape_66.setTransform(260.1,353.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(13.9,-7.7).lineTo(43,-36.8).curveTo(44.3,-38.1,44.2,-39.8).curveTo(44.2,-41.5,43,-42.8).curveTo(41.8,-44,40,-44).curveTo(38.3,-44,37.1,-42.8).lineTo(4.6,-10.3).lineTo(-44.3,38).lineTo(-38,44.1).closePath();
	this.shape_67.setTransform(220.6,392.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#6E829A").beginStroke().moveTo(-29.1,21.1).lineTo(19.8,-27.2).lineTo(29.1,-24.6).lineTo(-22.8,27.2).closePath();
	this.shape_68.setTransform(205.4,409.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-19.8,15.6).lineTo(12.7,-16.9).curveTo(13.9,-18.2,15.6,-18.2).curveTo(17.4,-18.1,18.6,-16.9).curveTo(19.8,-15.7,19.8,-14).curveTo(19.9,-12.2,18.6,-11).lineTo(-10.5,18.2).closePath();
	this.shape_69.setTransform(245,366.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill().beginStroke("#7FA4D2").setStrokeStyle(1,1,1).moveTo(8.7,4.1).curveTo(8,5.5,6.8,6.8).curveTo(3.9,9.6,0,9.6).curveTo(-4,9.6,-6.8,6.8).curveTo(-9.6,4,-9.6,-0).curveTo(-9.6,-3.8,-6.9,-6.6).curveTo(-6.9,-6.7,-6.8,-6.8).curveTo(-4,-9.6,-0,-9.6).curveTo(4,-9.6,6.8,-6.8).curveTo(9.6,-4,9.6,0).curveTo(9.6,2.2,8.7,4.1).closePath();
	this.shape_70.setTransform(260.4,353.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#E2EFFF").beginStroke().moveTo(-8.3,-3.8).lineTo(-8.1,-4).curveTo(-5.3,-6.8,-1.4,-6.9).curveTo(2.6,-6.9,5.5,-4).curveTo(8.3,-1.2,8.3,2.8).curveTo(8.2,5,7.4,6.9).closePath();
	this.shape_71.setTransform(261.7,350.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#C8DBF3").beginStroke().moveTo(-6.3,5.3).curveTo(-9.2,2.4,-9.2,-1.6).curveTo(-9.2,-5.4,-6.5,-8.1).lineTo(9.2,2.6).curveTo(8.5,4,7.2,5.3).curveTo(4.4,8.1,0.5,8.1).curveTo(-3.5,8.1,-6.3,5.3).closePath();
	this.shape_72.setTransform(259.9,354.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill().beginStroke("#31465F").setStrokeStyle(1,1,1).moveTo(45.9,-13.4).lineTo(45.9,13.3).curveTo(45.9,18,41.2,18).lineTo(-41.6,18).curveTo(-46.4,18,-46.4,13.3).lineTo(-46.4,-13.4).curveTo(-46.4,-18.2,-41.6,-18.2).lineTo(41.2,-18.2).curveTo(45.9,-18.2,45.9,-13.4).closePath().moveTo(51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).lineTo(-45.9,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.9,-22.4).lineTo(45.9,-22.4).curveTo(51.7,-22.4,51.7,-16.5).closePath();
	this.shape_73.setTransform(311.8,352.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-41.4,18.1).curveTo(-46.1,18.1,-46.1,13.4).lineTo(-46.1,-13.4).curveTo(-46.1,-18.1,-41.4,-18.1).lineTo(41.4,-18.1).curveTo(46.1,-18.1,46.1,-13.4).lineTo(46.1,13.4).curveTo(46.1,18.1,41.4,18.1).closePath();
	this.shape_74.setTransform(311.6,352.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#9EAEC2").beginStroke().moveTo(-45.9,22.3).curveTo(-51.7,22.3,-51.7,16.5).lineTo(-51.7,-16.5).curveTo(-51.7,-22.4,-45.9,-22.3).lineTo(45.9,-22.3).curveTo(51.7,-22.4,51.7,-16.5).lineTo(51.7,16.5).curveTo(51.7,22.3,45.9,22.3).closePath().moveTo(-46.4,-13.4).lineTo(-46.4,13.3).curveTo(-46.3,18.1,-41.6,18.1).lineTo(41.2,18.1).curveTo(45.9,18.1,45.9,13.3).lineTo(45.9,-13.4).curveTo(45.9,-18.1,41.2,-18.2).lineTo(-41.6,-18.2).curveTo(-46.3,-18.1,-46.4,-13.4).closePath();
	this.shape_75.setTransform(311.8,352.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,230.7,391.8,349.2);


(lib.gumball = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 레이어_6
	this.mcAdverbs = new lib.green();
	this.mcAdverbs.name = "mcAdverbs";
	this.mcAdverbs.parent = this;
	this.mcAdverbs.setTransform(181.8,5.3,1,1,0,0,0,155.5,237);

	this.timeline.addTween(cjs.Tween.get(this.mcAdverbs).wait(1));

	// 레이어_5
	this.mcAdjective = new lib.yellow();
	this.mcAdjective.name = "mcAdjective";
	this.mcAdjective.parent = this;
	this.mcAdjective.setTransform(181.8,5.3,1,1,0,0,0,155.5,237);

	this.timeline.addTween(cjs.Tween.get(this.mcAdjective).wait(1));

	// 레이어_4
	this.mcVerbs = new lib.red();
	this.mcVerbs.name = "mcVerbs";
	this.mcVerbs.parent = this;
	this.mcVerbs.setTransform(181.8,5.3,1,1,0,0,0,155.5,237);

	this.timeline.addTween(cjs.Tween.get(this.mcVerbs).wait(1));

	// 레이어 1
	this.mcNoun = new lib.blue();
	this.mcNoun.name = "mcNoun";
	this.mcNoun.parent = this;
	this.mcNoun.setTransform(181.8,5.3,1,1,0,0,0,155.5,237);

	this.timeline.addTween(cjs.Tween.get(this.mcNoun).wait(1));

}).prototype = getMCSymbolPrototype(lib.gumball, new cjs.Rectangle(-0.5,-0.5,390.8,348.7), null);


// stage content:
(lib.Ani_gumballsMachines = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 01
	this.mcBall = new lib.gumball();
	this.mcBall.name = "mcBall";
	this.mcBall.parent = this;
	this.mcBall.setTransform(500.1,421.6,1,1,0,0,0,194.9,173.8);

	this.timeline.addTween(cjs.Tween.get(this.mcBall).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(804.7,562.3,390.8,348.7);
// library properties:
lib.properties = {
	id: '42BE6E0E6516964AB71F06AEBBFA7066',
	width: 1000,
	height: 630,
	fps: 45,
	color: "#424242",
	opacity: 0.00,
	manifest: [
		{src:"images/coin.png?1518508059796", id:"coin"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['42BE6E0E6516964AB71F06AEBBFA7066'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;