(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

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


(lib.사이렌 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D73B3B").ss(1,1,1).p("ABBirQA/ANAxAmQA9AwAJBCIAfC5IhiAAIluAAIhbAAIAfi5QAJhCA9gwQAtgkA5gNQAjgJAnAAQAiAAAfAHg");
	this.shape.setTransform(27.8,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.4)","rgba(231,0,0,0.502)"],[0,1],0,-18.3,0,18.3).s().p("Ai2CzQAdkgBTg8QAjgJAmAAQAjAAAfAHQBVAgAdE+g");
	this.shape_1.setTransform(27.4,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.702)","rgba(231,0,0,0.902)"],[0,1],-0.3,-18.6,-0.3,18).s().p("AC0CvQgek9hVghQA/ANAwAnQA+AwAJBCIAfC4gAkVCvIAfi4QAKhCA8gwQAugkA4gOQhSA9geEfg");
	this.shape_2.setTransform(27.8,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,57.5,37.8);


(lib.ob_사이렌_불빛01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,225,131,0.667)","#FFFFFF"],[0,1,1],-14.2,1,60.6,41.5).s().p("AqdChIGUr2IOnNbQh8AXgnBsIglDNg");
	this.shape.setTransform(67,59.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,119.7);


(lib.ob_사이렌_불빛 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.298)").s().p("ArPA6QkqgYAAgiQAAghEqgYQEqgZGlAAQGlAAErAZQEqAYAAAhQAAAikqAYQkrAYmlAAQmlAAkqgYg");
	this.shape.setTransform(101.8,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203.6,16.5);


(lib.ob_사이렌_아래 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#797979").ss(1,1,1).p("Al9A8QAAACAAACQADAQAPAJILWAAQAPgJADgQQACgIgCgKIg1htQgXgagTABIhRAAInrAAQgTgBgXAaIg0BtQgCAIABAGg");
	this.shape.setTransform(38.2,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFFFC").s().p("AlABKQgBgGACgHIA0huQAXgaATACIHrAAIA2B0QAIAcguADg");
	this.shape_1.setTransform(32.1,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2E2E2").s().p("AlrBZQgPgJgDgQIAAgEIJaAAQAugEgIgbIg2h1IBRAAQATgBAXAaIA1BtQACAKgCAIQgDAQgPAJg");
	this.shape_2.setTransform(38.2,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,78.4,19.8);


(lib.ob_사이렌_위 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.사이렌();
	this.instance.parent = this;
	this.instance.setTransform(27.8,17.9,1,1,0,0,0,27.8,17.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(206,0,0,0.302)").s().p("AhSBTQgjgiAAgxQAAgwAjgiQAigjAwAAQAxAAAiAjQAjAiAAAwQAAAxgjAiQgiAjgxAAQgwAAgigjg");
	this.shape.setTransform(28.4,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFC00").s().p("AhhBqQAFjbBkAIQBaALAADIg");
	this.shape_1.setTransform(28.1,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,56.5,36.8);


(lib.심볼1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ob_사이렌_아래
	this.instance = new lib.ob_사이렌_아래("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(38.2,42.4,1,1,0,0,0,38.2,8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ob_사이렌_위
	this.instance_1 = new lib.ob_사이렌_위("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(38.1,17.9,1,1,0,0,0,27.8,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.심볼1, new cjs.Rectangle(-1,-1,78.4,53.3), null);


(lib.ob_사이렌_울림 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_11
	this.instance = new lib.ob_사이렌_불빛("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.4,19.4,1,1,0,0,0,101.8,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).to({scaleX:0.12,scaleY:1.73,x:39.5,y:19.5},5).to({scaleX:1,scaleY:1,x:39.4,y:19.4},5).wait(2).to({startPosition:0},0).to({scaleX:0.12,scaleY:1.73,x:39.5,y:19.5},5).to({scaleX:1,scaleY:1,x:39.4,y:19.4},5).wait(2).to({startPosition:0},0).to({scaleX:0.12,scaleY:1.73,x:39.5,y:19.5},5).to({scaleX:1,scaleY:1,x:39.4,y:19.4},5).wait(2));

	// ob_사이렌_아래
	this.instance_1 = new lib.ob_사이렌_아래("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(38.2,42.4,1,1,0,0,0,38.2,8.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({startPosition:0},5).to({startPosition:0},5).wait(2));

	// ob_사이렌_위
	this.instance_2 = new lib.ob_사이렌_위("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(38.1,17.9,1,1,0,0,0,27.8,17.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).to({startPosition:0},5).to({startPosition:0},5).wait(2));

	// ob_사이렌_불빛01
	this.instance_3 = new lib.ob_사이렌_불빛01("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-37.3,-24.6,1,1,0,0,0,67,59.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({alpha:0},5).to({alpha:1},5).wait(2));

	// ob_사이렌_불빛01
	this.instance_4 = new lib.ob_사이렌_불빛01("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(113.7,-24.6,1,1,0,0,180,67,59.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({alpha:0},5).to({alpha:1},5).wait(2));

	// ob_사이렌_아래
	this.instance_5 = new lib.ob_사이렌_아래("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(38.2,42.4,1,1,0,0,0,38.2,8.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({startPosition:0},5).to({startPosition:0},5).to({_off:true},2).wait(12));

	// ob_사이렌_위
	this.instance_6 = new lib.ob_사이렌_위("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(38.1,17.9,1,1,0,0,0,27.8,17.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({startPosition:0},5).to({startPosition:0},5).to({_off:true},2).wait(12));

	// ob_사이렌_불빛01
	this.instance_7 = new lib.ob_사이렌_불빛01("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-37.3,-24.6,1,1,0,0,0,67,59.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({alpha:0},5).to({alpha:1},5).to({_off:true},2).wait(12));

	// ob_사이렌_불빛01
	this.instance_8 = new lib.ob_사이렌_불빛01("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(113.7,-24.6,1,1,0,0,180,67,59.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({alpha:0},5).to({alpha:1},5).to({_off:true},2).wait(12));

	// ob_사이렌_아래
	this.instance_9 = new lib.ob_사이렌_아래("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(38.2,42.4,1,1,0,0,0,38.2,8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({startPosition:0},0).to({startPosition:0},5).to({startPosition:0},5).to({_off:true},2).wait(24));

	// ob_사이렌_위
	this.instance_10 = new lib.ob_사이렌_위("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(38.1,17.9,1,1,0,0,0,27.8,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({startPosition:0},0).to({startPosition:0},5).to({startPosition:0},5).to({_off:true},2).wait(24));

	// ob_사이렌_불빛01
	this.instance_11 = new lib.ob_사이렌_불빛01("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-37.3,-24.6,1,1,0,0,0,67,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({startPosition:0},0).to({alpha:0},5).to({alpha:1},5).to({_off:true},2).wait(24));

	// ob_사이렌_불빛01
	this.instance_12 = new lib.ob_사이렌_불빛01("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(113.7,-24.6,1,1,0,0,180,67,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({startPosition:0},0).to({alpha:0},5).to({alpha:1},5).to({_off:true},2).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-84.4,285,136.8);


(lib.ob_사이렌_기본 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.심볼1();
	this.instance.parent = this;
	this.instance.setTransform(38.2,25.7,1,1,0,0,0,38.2,25.7);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.instance.cache(-3,-3,82,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,80,55);


(lib.심볼2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.mcRight = new lib.ob_사이렌_울림();
	this.mcRight.name = "mcRight";
	this.mcRight.parent = this;
	this.mcRight.setTransform(142.6,110.2,1,1,0,0,0,38.2,25.7);

	this.mcNomal = new lib.ob_사이렌_기본();
	this.mcNomal.name = "mcNomal";
	this.mcNomal.parent = this;
	this.mcNomal.setTransform(142.6,110.2,1,1,0,0,0,38.2,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcNomal},{t:this.mcRight}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.심볼2, new cjs.Rectangle(0,0,285,141), null);


// stage content:
(lib.ani_siren = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mcRight
	this.mcContain = new lib.심볼2();
	this.mcContain.name = "mcContain";
	this.mcContain.parent = this;
	this.mcContain.setTransform(144.6,70.8,1,1,0,0,0,142.5,68.1);

	this.timeline.addTween(cjs.Tween.get(this.mcContain).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.1,72.7,285,140);
// library properties:
lib.properties = {
	id: 'A1B82D0BAC3FCA429A6831DEFB17C87A',
	width: 290,
	height: 140,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
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
an.compositions['A1B82D0BAC3FCA429A6831DEFB17C87A'] = {
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