(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.물방울_분리 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#BDEAFF"],[0,1],0,0,0,0,0,45.7).s().p("AkYFlIghgeIgHgGQhYhYgdhxQgGgYgEgYQgFgjAAglQAAiGBFhrQAagqAlglQCFiFC7AAQC8AACECFQCFCFAAC7QAAA+gOA5QgeBxhZBZQiECFi8AAQifgBh5hgg");
	this.shape.setTransform(45.3,45.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.7,90.7);


(lib.ob_비누방울_기본투명 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("Ak9ExQBVAtBnAAQClAAB2h2QB2h1AAimQAAimh2h2QgYgYgagTQAzAbAtAtQB2B2AACmQAACmh2B1Qh2B2ilAAQiEAAhmhKg");
	this.shape.setTransform(55.2,48.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#39B0FF").ss(2,1,1).p("AG3B3QgeBxhZBZQiECFi8AAQifAAh5hhQgRgPgQgPQgEgDgDgDQhYhZgdhwQgGgYgEgYQgFgjAAglQAAiHBFhqQAagqAlglQCFiFC7AAQC8AACECFQCFCFAAC7QAAA+gOA5g");
	this.shape_1.setTransform(45.3,45.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.instance = new lib.물방울_분리("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45.3,45.4,1,1,0,0,0,45.3,45.4);
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,92.7,92.7);


// stage content:
(lib.ani_newBubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.ob_비누방울_기본투명("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(50.4,128.7,0.041,0.041,0,0,0,46.8,91.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:45.5,regY:90.8,scaleX:0.33,scaleY:0.4},7).to({regX:45.4,scaleX:0.27,scaleY:0.43},4).to({regX:45.5,scaleX:0.33,scaleY:0.33},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(97.5,189,5.7,5.7);
// library properties:
lib.properties = {
	id: '451442D1FDBB2F47993D0FB54B210E30',
	width: 100,
	height: 130,
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
an.compositions['451442D1FDBB2F47993D0FB54B210E30'] = {
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