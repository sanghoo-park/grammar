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


(lib.s8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#501616").ss(1,1,1).p("ABnjiIAAgMIg7gaIgVgJIgLgFIgYAAIhvA6IAhAzIAMASIABAeIABAvIgRCMIAQgLIBcg/IAKgHIALgHIgBgXIgHiHABTjWIgCARIgNCIIgmBZIgCgDIgBgUIgCgUABnjiIgMAHIgIAFAhOiXIABAAIAPgEIBQgWIAKgDIA3giABxCQIAthvIgdhCIgRh/IgJhCAidgCIAIAIIA4A8AgbEXIgDgIIgEgNIgPgoIgDgfIgFgPIgkhqAidgCIA5B7IAcA+IACApIAeAyIALAEIACABIACgBIAWgHIARgHIAfgtIBEhLAAeAcIAFAHIAJALIAEAGIAKAPIAFAHIAfAsIATAaAAbAwIACArIgcA3IAGAfIgdBWAidgCIAija");
	this.shape.setTransform(20,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009AB5").s().p("AgsELIgegyIgCgpIgcg9IArAyIAFAPIADAfIAOAoIgOgoIgDgfIgFgPIgkhpIAQgLIBcg/IgJAVIhBA6IANBUIgGAWIAQASIAEA2IgDAIIAFANIABAHgAAhC4IAng9IgSg/IAFAHIAfAsIAohYIgXg+IgIhPIAJgwIARB+IAdBCIgtBvIgTgaIATAaIhEBLIgfAtIgRAHgAhhA8Ig4g8IAAgCIApghIAfhcIABAvIgRCMgAhNAaIBLgyIANgZIgGiCIAJgEIAKgDIgKADIhQAVIBOgpIAigqIgGgZIA7AaIAAAMIgMAHIgIAFIAIgFIgBBuIgOA6IggBhIgJgLIgFgIIAmhZIANiHIACgRIg3AiIAHCGIABAXIgLAIIgKAHIhcA/g");
	this.shape_1.setTransform(20.4,31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEEPIgFgNIADgIIAXhEIgHgtIAahGIACgtIAOgRIABAUIACADIAFAHIgIANIACAsIgcA2IAGAfIgdBWIgDAPIgCABgABTBDIgKgPIArhSIACgwIAPAzIgfA2IgOAvgAgyhKIgCgvIgBgeIABAAIgBAAIgMgSIghgyIBvg7IAZAAIAKAFIg8AWIg8AiIAUBCIAPgEIBQgWIgJAFIg/AlIgDAYIABAvIgRBhIgDAXIgQALgAiEgCIAijZIAhAyIgZgJIghC2IgBACgAA1i0IA3ghIgCAQIgpAcIgFB8g");
	this.shape_2.setTransform(17.5,30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AgREUIgBgHIADAIgAgKEEIAdhVIgGgfIAcg3IgCgsIAIgMIAJALIAghhIAOg5IABhvIAMgHIAJBCIgJAxIAIBPIAXA9IgoBZIgfgsIANgvIAgg2IgQgzIgBAwIgsBSIALAOIASBAIgnA9IgpBPIgVAIgAA7AyIgDgGgAgYDBIgQgRIAGgWIgNhUIBBg7IAJgVIAKgHIALgHIgBgXIAFh8IApgcIgNCIIgmBZIgCgDIgBgUIgCgUIACAUIgPAQIgBAuIgZBGIAGAtIgYBDgAhYB3Ig5h7IAIAHIA4A9IAkBpgAgshCIgBgvIADgYIA/glIAGCBIgOAZIhKAygAAnADgAhni0IAZAJIAMASIABAeIgfBdIgpAfgAhVjbIA8giIA8gXIAVAKIAGAaIgiAqIhOAoIgPAEg");
	this.shape_3.setTransform(18.8,30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.s8, new cjs.Rectangle(3.2,1.6,33.7,57.8), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EhOHAxOMAAAhibMCcPAAAMAAABibg");
	this.shape.setTransform(500,315);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,630);


(lib.aa02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgSAAIApAEIgtgHg");
	this.shape.setTransform(-8.8,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.369,0.867],50.7,2.4,0,50.7,2.4,512.6).s().p("ABEBPIgOAeIgDACIAAACIgnBVIgHAKIunfHQk+gQkvgaIgKgBQkAgWjygeIgngDMAgAgeWIALgOIAOgKIAHgHIAOgKIAAgDIAGgEIAAgDIAKgJIgKAHIgGACIhAAoIgDABMgt+AcOQjogujgg1IgqgKQmdhml/iAIg1gSMBCzgXpIgOACMhM/ATdQiBg7h0g+Ig4gfQiuhfiOhkIgngdMBLygMSIAHAAIJ3hmMhbVAIrQgtg4ghg6QgSgYgNgZQhri/gMjOQgDgSgBgSMBfyAAAMhezgFnQASgtAZgsQAMgcAQgbQBOiGB9h/QANgOAPgPMBbrAMEMhUxgRRIB3hIIBRgsQFLivG4igIA1gSMBGEAYyMg5ogckQBmgbBpgYQGVhgG0hGIAjgGIAHAIMAo7AfvIADAEIAAgVMgZWghgQCWgNCXgKQJbgpKJAAIA+AAIAHAAMAAAAigIAZAgIgHADIAEABIADgBIAAgDIAHgPIADgDMAQLgiMIAZABQC2ALCzAPQGUAjGBA1MgiiAgnIBqgkMAv8gdWIA8AOQC2ApCvAuQGDBlFlB/IBJAaMhDOAXzIg1AeIgDAEIADgBIBigOIhpAaIBiAAMBbhgIrQANAUALAVQA+BlAkBpQAuCLAACQIAAAZMheJAAAIheAJIADABIBtAOMBcYAFeQgJATgMAUQg9B2hhBwQg2A/hBA9MhXugLnIhKgEIgDgBIhOgFIBcARIADABIAOADIAEABMBRNAQpIgyAcQi5BqjhBlQjwBskeBlIgDABMhDhgX6IAIAIIANAKIAEABIALAJIADADMA2vAbJIg0AOQkvBMk+A9QiHAaiHAXIg4AKMgmbgd0IgDgEIgDgBIgSgRIgEgBIgRgQIgHgCIgOgKIgKgEIAAADIADABIAHAMIAHAIIAAACIADAEIAEABIAEAEIAKAQIADABIAdAoIAAACIXnfJIgVADQk0AclAASIhKADQm5AWnTACgAhqAgIAqAFIgugJgAEMgDMBNDgTeQAbAOAZAPQCUBNB+BRQCFBVBtBYMhWBAN4g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-627.2,-221.9,1254.4,444);


(lib.gak_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_2
	this.instance = new lib.s8();
	this.instance.parent = this;
	this.instance.setTransform(37.5,-15.2,1.128,1.128,0,0,0,36,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-44,36.9,64.1);


(lib.aa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.467,1],0,0,0,0,0,85.2).s().p("ApVJWQj3j4AAleQAAleD3j3QD4j3FdAAQFeAAD4D3QD3D3AAFeQAAFej3D4Qj4D3leAAQldAAj4j3g");
	this.shape.setTransform(-4.3,-4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(12));

	// Layer 1
	this.instance = new lib.aa02("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-8,-0.7,0.35,0.956,-0.1);
	this.instance.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:39.9},0).wait(3).to({rotation:79.9},0).wait(3).to({rotation:119.9},0).wait(3).to({rotation:-0.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.8,-212.9,439.5,424.4);


(lib.coin_earning_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 11
	this.instance = new lib.gak_c("synched",1);
	this.instance.parent = this;
	this.instance.setTransform(501.2,233.9,1.62,1.62,0,0,0,18.8,-15.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:3.24,scaleY:3.24,x:501.3,y:233.8,startPosition:10},9,cjs.Ease.get(1)).to({scaleX:3.4,scaleY:3.4,startPosition:13},3,cjs.Ease.get(1)).to({scaleX:3.24,scaleY:3.24,startPosition:2},3,cjs.Ease.get(1)).wait(28).to({startPosition:2},0).to({scaleX:3.75,scaleY:3.75,startPosition:8},6).to({scaleX:1.04,scaleY:1.04,x:862,y:581.9,startPosition:9},27,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// 레이어 8
	this.instance_1 = new lib.gak_c("synched",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(577.2,374.9,1.62,1.62,0,0,0,18.8,-15.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:3.24,scaleY:3.24,x:577.3,y:374.8,startPosition:10},9,cjs.Ease.get(1)).to({scaleX:3.4,scaleY:3.4,startPosition:13},3,cjs.Ease.get(1)).to({scaleX:3.24,scaleY:3.24,startPosition:2},3,cjs.Ease.get(1)).wait(28).to({startPosition:2},0).to({scaleX:3.75,scaleY:3.75,startPosition:8},6).to({scaleX:1.04,scaleY:1.04,x:862,y:581.9,startPosition:9},27,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// 레이어 2
	this.instance_2 = new lib.gak_c("synched",1);
	this.instance_2.parent = this;
	this.instance_2.setTransform(431.2,374.9,1.62,1.62,0,0,0,18.8,-15.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({scaleX:3.24,scaleY:3.24,x:431.3,y:374.8,startPosition:10},9,cjs.Ease.get(1)).to({scaleX:3.4,scaleY:3.4,startPosition:13},3,cjs.Ease.get(1)).to({scaleX:3.24,scaleY:3.24,startPosition:2},3,cjs.Ease.get(1)).wait(28).to({startPosition:2},0).to({scaleX:3.75,scaleY:3.75,startPosition:8},6).to({scaleX:1.04,scaleY:1.04,x:862,y:581.9,startPosition:9},27,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// 빛 뱅글뱅글
	this.instance_3 = new lib.aa("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(492.4,326.5,3.36,3.36,0,0,0,-8.1,-0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({alpha:1,startPosition:5},5).wait(34).to({startPosition:3},0).to({alpha:0,startPosition:9},6).to({_off:true},1).wait(26));

	// 레이어 1
	this.instance_4 = new lib.black("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(500,315,1,1,0,0,0,500,315);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({alpha:1},6).wait(64).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coin_earning_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 8
	this.instance = new lib.gak_c("synched",1);
	this.instance.parent = this;
	this.instance.setTransform(577.2,314.9,1.62,1.62,0,0,0,18.8,-15.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:3.24,scaleY:3.24,x:577.3,y:314.8,startPosition:10},9,cjs.Ease.get(1)).to({scaleX:3.4,scaleY:3.4,startPosition:13},3,cjs.Ease.get(1)).to({scaleX:3.24,scaleY:3.24,startPosition:2},3,cjs.Ease.get(1)).wait(28).to({startPosition:2},0).to({scaleX:3.75,scaleY:3.75,startPosition:8},6).to({scaleX:1.04,scaleY:1.04,x:859.6,y:584.3,startPosition:9},27,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// 레이어 2
	this.instance_1 = new lib.gak_c("synched",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(431.2,314.9,1.62,1.62,0,0,0,18.8,-15.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:3.24,scaleY:3.24,x:431.3,y:314.8,startPosition:10},9,cjs.Ease.get(1)).to({scaleX:3.4,scaleY:3.4,startPosition:13},3,cjs.Ease.get(1)).to({scaleX:3.24,scaleY:3.24,startPosition:2},3,cjs.Ease.get(1)).wait(28).to({startPosition:2},0).to({scaleX:3.75,scaleY:3.75,startPosition:8},6).to({scaleX:1.04,scaleY:1.04,x:859.6,y:584.3,startPosition:9},27,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// 빛 뱅글뱅글
	this.instance_2 = new lib.aa("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(492.4,326.5,3.36,3.36,0,0,0,-8.1,-0.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({alpha:1,startPosition:5},5).wait(34).to({startPosition:3},0).to({alpha:0,startPosition:9},6).to({_off:true},1).wait(26));

	// 레이어 1
	this.instance_3 = new lib.black("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(500,315,1,1,0,0,0,500,315);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({alpha:1},6).wait(64).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coin_earning = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 2
	this.instance = new lib.gak_c("synched",1);
	this.instance.parent = this;
	this.instance.setTransform(503.2,314.9,1.62,1.62,0,0,0,18.8,-15.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:3.24,scaleY:3.24,x:503.3,y:314.8,startPosition:10},9,cjs.Ease.get(1)).to({scaleX:3.4,scaleY:3.4,startPosition:13},3,cjs.Ease.get(1)).to({scaleX:3.24,scaleY:3.24,startPosition:2},3,cjs.Ease.get(1)).wait(28).to({startPosition:2},0).to({scaleX:3.75,scaleY:3.75,startPosition:8},6).to({scaleX:1.04,scaleY:1.04,x:859.6,y:581.9,startPosition:9},27,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// 빛 뱅글뱅글
	this.instance_1 = new lib.aa("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(492.4,326.5,3.36,3.36,0,0,0,-8.1,-0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({alpha:1,startPosition:5},5).wait(34).to({startPosition:3},0).to({alpha:0,startPosition:9},6).to({_off:true},1).wait(26));

	// 레이어 1
	this.instance_2 = new lib.black("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(500,315,1,1,0,0,0,500,315);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({alpha:1},6).wait(64).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coin_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// coin_earning
	this.mcCoin1 = new lib.coin_earning();
	this.mcCoin1.name = "mcCoin1";
	this.mcCoin1.parent = this;
	this.mcCoin1.setTransform(-501.2,265.1,1,1,0,0,0,500,315);

	this.timeline.addTween(cjs.Tween.get(this.mcCoin1).wait(80));

	// coin_earning_02
	this.mcCoin2 = new lib.coin_earning_02();
	this.mcCoin2.name = "mcCoin2";
	this.mcCoin2.parent = this;
	this.mcCoin2.setTransform(-501.2,265.1,1,1,0,0,0,500,315);

	this.timeline.addTween(cjs.Tween.get(this.mcCoin2).wait(80));

	// coin_earning_03
	this.mcCoin3 = new lib.coin_earning_03();
	this.mcCoin3.name = "mcCoin3";
	this.mcCoin3.parent = this;
	this.mcCoin3.setTransform(-501.2,265.1,1,1,0,0,0,500,315);

	this.timeline.addTween(cjs.Tween.get(this.mcCoin3).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.ani_coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.mcContain = new lib.coin_03();
	this.mcContain.name = "mcContain";
	this.mcContain.parent = this;
	this.mcContain.setTransform(833.3,182.5,1,1,0,0,0,-168,132.5);

	this.timeline.addTween(cjs.Tween.get(this.mcContain).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '852D08871FD8D842A48A182EB2609AF8',
	width: 1000,
	height: 630,
	fps: 30,
	color: "#424242",
	opacity: 1.00,
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
an.compositions['852D08871FD8D842A48A182EB2609AF8'] = {
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