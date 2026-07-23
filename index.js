(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,336,280]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Kosmetyki_plus_text = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.mc_star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgWAUIg4gXIA7gQIAGg9IAhAzIA6gNIgmAvIAgA0Ig6gWIgnAug");
	this.shape.setTransform(7.85,8.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_star, new cjs.Rectangle(0,0,15.7,16.2), null);


(lib.btn_products = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tekst
	this.text = new cjs.Text("", "normal 400 22px 'Quicksand'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 51;
	this.text.alpha = 0.80000000;
	this.text.parent = this;
	this.text.setTransform(319.8,14.35);
	this.text.shadow = new cjs.Shadow("rgba(50,50,50,1)",2,2,1);
	if(!lib.properties.webfonts['Quicksand']) {
		lib.webFontTxtInst['Quicksand'] = lib.webFontTxtInst['Quicksand'] || [];
		lib.webFontTxtInst['Quicksand'].push(this.text);
	}

	this.btn_zobacz_produky = new cjs.Text("Zobacz \nprodukty", "normal 700 22px 'Quicksand'", "#FFFFFF");
	this.btn_zobacz_produky.name = "btn_zobacz_produky";
	this.btn_zobacz_produky.textAlign = "center";
	this.btn_zobacz_produky.lineHeight = 35;
	this.btn_zobacz_produky.lineWidth = 179;
	this.btn_zobacz_produky.alpha = 0.80000000;
	this.btn_zobacz_produky.parent = this;
	this.btn_zobacz_produky.setTransform(136.35,9.05);
	this.btn_zobacz_produky.shadow = new cjs.Shadow("rgba(50,50,50,1)",2,2,1);
	if(!lib.properties.webfonts['Quicksand']) {
		lib.webFontTxtInst['Quicksand'] = lib.webFontTxtInst['Quicksand'] || [];
		lib.webFontTxtInst['Quicksand'].push(this.btn_zobacz_produky);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_zobacz_produky,p:{font:"normal 700 22px 'Quicksand'",lineHeight:34.7}},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.btn_zobacz_produky,p:{font:"normal 700 24px 'Quicksand'",lineHeight:37.65}},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.btn_zobacz_produky,p:{font:"normal 700 24px 'Quicksand'",lineHeight:37.65}},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.btn_zobacz_produky,p:{font:"normal 700 22px 'Quicksand'",lineHeight:34.7}},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#48000A","#EC002F","#000000","#EF5350","#EC002F"],[0,1,1,1,1],-163.7,-6.2,114.5,-6.2).s().p("An5EXQj7Behvi1Qhwi1gTgYQgUgYAGgLQh+g9Bhg/IAAAAQFgiqBmg7QCPhTEEgKQEEgLFjARQFjAQDlFCQDmFBoXgBQh8Fgk0i1QjWCVjXAJIgPAAQjOAAiFjcg");
	this.shape.setTransform(136.5757,46.7599);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#87000A","#EF5350","#000000"],[0,1,1],-158.1,-6.2,108.9,-6.2).s().p("An5EXQj7Behvi1Qhwi1gTgYQgUgYAGgLQh+g9Bhg/IAAAAQFgiqBmg7QCPhTEEgKQEEgLFjARQFjAQDlFCQDmFBoXgBQh8Fgk0i1QjWCVjXAJIgPAAQjOAAiFjcg");
	this.shape_1.setTransform(136.5757,46.7599);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#87000A","#EF5350","#000000"],[0,1,1],-158.8,-6.2,109.6,-6.2).s().p("An5EXQj7Behvi1Qhwi1gTgYQgUgYAGgLQh+g9Bhg/IAAAAQFgiqBmg7QCPhTEEgKQEEgLFjARQFjAQDlFCQDmFBoXgBQh8Fgk0i1QjWCVjXAJIgPAAQjOAAiFjcg");
	this.shape_2.setTransform(136.5757,46.7599);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.2,-3.1,327.6,106.19999999999999);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,88,249];
	// timeline functions:
	this.frame_0 = function() {
		/* Kliknij, aby przejść do strony internetowej
		Kliknięcie wystąpienia symbolu powoduje wczytanie adresu URL w nowym oknie przeglądarki.
		
		Instrukcje:
		1. Zastąp http://www.adobe.com żądanym adresem URL.
		   Zachowaj cudzysłowy ("").
		*/
		
		this.btn_zobacz_produkty.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://github.com/Kasiakwiatek?tab=repositories", "_blank");
		}
	}
	this.frame_88 = function() {
		
	}
	this.frame_249 = function() {
		this.gotoAndPlay(89);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(88).call(this.frame_88).wait(161).call(this.frame_249).wait(8));

	// heart_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA9LiIABgBIgUgSQhwhxgUiYQgFggAAgjQAAjCCJiJQCJiIDBAAIABAAIAhABQBFAEA+AXQBdAiBLBKIASATIALgLQB2h1CigQQAZgDAaAAQBvAABdAtIAQAIIAIAFQA3AeAxAwQCJCKAADCQAABHgTA/QggBuhWBXIgLALIqXKWg");
	var mask_graphics_1 = new cjs.Graphics().p("ABlLtIABgBIgTgRQhshtgTiSQgEgfAAghQAAi7CDiEQCEiDC6AAIABAAIAfABQBDAEA8AWQBZAgBIBIIASASIAKgKQByhxCbgPQAYgDAZAAQBrAABaArIAPAHIAHAEQA2AfAuAuQCECEAAC7QAABEgRA9QgfBqhUBUIgKAKIp9J9g");
	var mask_graphics_2 = new cjs.Graphics().p("ACNL4IABgBIgSgRQhohogTiMQgDgeAAggQAAizB+h/QB/h/CzAAIAAAAIAfABQBAAEA5AVQBVAfBGBGIARARIAKgJQBthuCWgPQAXgCAXAAQBoAABVAqIAPAHIAHAEQA0AdAsAtQB/B/AACzQAABBgRA7QgeBmhQBQIgJAKIplJkg");
	var mask_graphics_3 = new cjs.Graphics().p("AC2MDIABgBIgSgQQhkhkgSiGQgDgdAAgfQAAisB5h5QB6h6CrAAIABAAIAdABQA+AEA2AUQBSAeBDBDIAQAQIAJgJQBqhpCPgOQAWgCAXAAQBjAABSAoIAOAHIAHAEQAxAbArArQB5B6AACsQAAA/gQA4QgcBihNBNIgJAJIpMJLg");
	var mask_graphics_4 = new cjs.Graphics().p("ADeMOIABgBIgRgPQhfhggSiAQgDgcAAgdQAAilB0h0QB1h0CkgBIABAAIAbABQA7AEA1ATQBOAdBABAIAQAQIAIgJQBlhlCJgNQAVgCAWAAQBfAABPAmIANAHIAGADQAwAbApApQB0B0AAClQAAA8gQA2QgbBehJBJIgJAJIoyIyg");
	var mask_graphics_5 = new cjs.Graphics().p("AEHMZIAAgBIgPgOQhchcgQh6QgEgbAAgcQAAidBwhvQBuhvCdgBIABAAIAbABQA4ADAyATQBLAcA9A9IAPAPIAIgJQBghgCEgNQAUgCAVAAQBaAABLAlIANAGIAGAEQAtAZAoAnQBuBwAACdQAAA5gOA0QgaBZhGBHIgJAIIoZIZg");
	var mask_graphics_6 = new cjs.Graphics().p("AEvMkIABgBIgPgNQhYhYgPh1QgDgZAAgaQAAiWBqhqQBphqCWgBIABAAIAZABQA2ADAvASQBIAbA6A6IAOAOIAIgIQBchcB9gMQATgCAUAAQBWAABIAjIAMAGIAGADQArAZAlAlQBqBqAACWQAAA3gOAxQgZBVhDBDIgIAIIoAIAg");
	var mask_graphics_7 = new cjs.Graphics().p("AFYMvIAAAAIgOgOQhThTgPhvQgDgYAAgZQAAiPBlhlQBkhkCPAAIAAAAIAYAAQAzADAuARQBEAZA3A3IAOAOIAHgHQBXhXB3gMQASgCATAAQBSAABEAhIAMAGIAGADQApAXAjAkQBlBlAACOQAAA0gOAvQgXBRhABAIgHAHInnHng");
	var mask_graphics_8 = new cjs.Graphics().p("AGAM6IABAAIgOgNQhPhOgOhqQgDgXAAgYQAAiHBghgQBfhfCHAAIABAAIAXAAQAwADArAQQBBAYA0A0IANANIAHgHQBThSBwgLQASgCASAAQBNAABBAfIALAGIAFADQAnAWAiAhQBfBgAACIQAAAxgMAsQgXBNg8A8IgHAHInOHOg");
	var mask_graphics_9 = new cjs.Graphics().p("AFOMtIAAgBIgOgNQhUhUgPhxQgDgYAAgaQAAiQBmhmQBmhmCQgBIAAAAIAZABQAzADAuARQBFAaA4A4IAOANIAIgHQBYhYB4gMQATgCATAAQBTAABFAhIAMAGIAFAEQAqAXAkAkQBlBmAACRQAAA0gNAvQgYBShABBIgIAIIntHtg");
	var mask_graphics_10 = new cjs.Graphics().p("AEcMfIAAgBIgPgOQhahZgQh4QgDgaAAgbQAAiaBthsQBshtCZAAIABAAIAaABQA3ADAxASQBJAbA7A8IAPAOIAIgIQBehdCAgNQATgCAVAAQBYAABKAkIAMAGIAGADQAsAZAmAmQBtBtAACaQAAA3gPAzQgZBXhFBFIgIAIIoMIMg");
	var mask_graphics_11 = new cjs.Graphics().p("ADpMRIABgBIgQgPQhfhegRh/QgDgcAAgcQAAijBzhzQByhzCjAAIAAAAIAcAAQA6AEA0ATQBNAdA/A/IAQAPIAJgIQBjhkCIgNQAUgCAWAAQBeAABNAmIAOAHIAGADQAvAaAoApQBzBzAACjQAAA7gPA1QgbBdhJBIIgIAJIosIsg");
	var mask_graphics_12 = new cjs.Graphics().p("AC3MDIABAAIgRgQQhkhkgSiGQgEgdAAgfQAAirB6h6QB5h5CrgBIABAAIAdABQA9AEA3AUQBSAfBCBCIARARIAJgKQBphpCPgOQAWgCAXAAQBjAABSAoIAOAHIAHAEQAxAcArAqQB5B6AACsQAAA+gQA4QgcBihNBNIgJAJIpLJLg");
	var mask_graphics_13 = new cjs.Graphics().p("ACFL2IABgBIgTgRQhphpgSiNQgEgfAAggQAAi1B/iAQCAh/C1AAIABAAIAeABQBBAEA6AUQBWAgBGBGIARASIAKgKQBuhvCXgPQAXgCAYAAQBoAABXAqIAPAIIAHAEQA0AdAtAtQB/CAAAC1QAABCgRA7QgdBnhRBRIgKAKIpqJqg");
	var mask_graphics_14 = new cjs.Graphics().p("ABTLnIAAgBIgTgRQhuhvgTiUQgEggAAgiQAAi+CFiHQCGiFC+AAIABAAIAgABQBEAEA9AWQBaAhBJBJIATATIAKgKQB0hzCfgQQAYgCAZAAQBtAABbAsIAQAHIAHAEQA3AeAvAwQCGCGAAC/QAABFgSA+QgfBshVBVIgKAKIqJKKg");
	var mask_graphics_15 = new cjs.Graphics().p("ACKL2IABAAIgTgRQhohpgSiMQgEgfAAgfQAAi0B+iAQB/h+C0AAIABAAIAeAAQBBADA5AWQBWAgBFBFIASASIAJgKQBuhuCWgPQAYgCAXAAQBoAABWAqIAPAHIAHAEQA0AdAsAtQB/B/AAC1QAABBgRA7QgdBmhRBRIgJAJIpnJng");
	var mask_graphics_16 = new cjs.Graphics().p("ADBMGIABgBIgRgQQhjhjgSiEQgEgdAAgeQAAiqB5h4QB4h4CpgBIABAAIAdABQA9AEA2AUQBRAeBBBCIARAQIAJgJQBohoCNgOQAWgCAXAAQBhAABSAoIAOAHIAGADQAxAcAqAqQB4B4AACrQAAA9gQA4QgcBhhMBMIgJAJIpEJEg");
	var mask_graphics_17 = new cjs.Graphics().p("AD5MVIAAgBIgQgOQhdhdgRh9QgDgbAAgdQAAifBxhyQBxhwCfgBIABAAIAbABQA5ADAzATQBMAdA+A9IAQAQIAIgJQBihhCFgOQAVgBAVAAQBcAABMAlIAOAGIAGAEQAuAaAnAnQBxByAACgQAAA6gPA0QgaBbhIBIIgIAIIoiIig");
	var mask_graphics_18 = new cjs.Graphics().p("AEwMkIABAAIgQgOQhXhXgPh1QgEgaAAgaQAAiWBqhqQBqhqCWAAIAAAAIAaABQA1ADAwASQBHAaA6A6IAPAOIAIgHQBbhcB9gMQATgCAUAAQBWAABIAjIAMAGIAGADQArAYAlAmQBqBqAACWQAAA2gOAxQgZBVhDBDIgHAIIoAIAg");
	var mask_graphics_19 = new cjs.Graphics().p("AFnM0IABgBIgOgNQhShRgOhtQgDgYAAgZQAAiLBjhjQBihjCMAAIAAAAIAYAAQAyADAtARQBCAZA2A2IAOANIAHgHQBVhWB1gLQASgCASAAQBRAABDAhIALAFIAGADQAoAXAjAjQBiBjAACMQAAAygNAuQgXBQg+A+IgIAIIndHdg");
	var mask_graphics_20 = new cjs.Graphics().p("AGeNDIABgBIgNgMQhMhLgNhlQgDgWAAgXQAAiCBchcQBbhbCCgBIAAAAIAWABQAvADApAPQA+AXAyAyIANANIAGgHQBQhPBsgLQAQgCASAAQBKAAA+AeIALAGIAFADQAlAVAhAgQBbBcAACCQAAAvgMAqQgVBKg6A6IgHAHIm7G7g");
	var mask_graphics_21 = new cjs.Graphics().p("AHWNSIAAgBIgMgLQhGhFgMheQgDgUAAgVQAAh4BVhVQBUhUB4AAIAAAAIAVAAQAqADAmAOQA5AVAvAuIALAMIAHgGQBJhJBjgKIAggCQBEAAA6AcIAKAFIAEADQAjATAdAeQBVBUAAB4QAAAsgMAnQgTBEg2A1IgGAHImZGZg");
	var mask_graphics_22 = new cjs.Graphics().p("AGUNAIAAgBIgNgMQhMhNgOhmQgDgXAAgXQAAiDBdheQBdhcCDgBIABAAIAWABQAvADAqAPQA/AYAzAyIAMANIAHgHQBRhQBugLQAQgCASAAQBMAAA+AfIALAFIAFADQAmAVAhAhQBdBdAACEQAAAwgNArQgVBLg7A7IgHAHInCHBg");
	var mask_graphics_23 = new cjs.Graphics().p("AFSMtIABAAIgPgNQhThUgPhwQgDgYAAgaQAAiPBlhmQBmhlCPAAIABAAIAYAAQAzADAuARQBEAaA4A3IAOAOIAHgHQBYhYB4gMQASgCATAAQBTAABEAiIAMAFIAGAEQApAXAkAkQBlBlAACQQAAA0gOAvQgXBShABAIgIAHInqHrg");
	var mask_graphics_24 = new cjs.Graphics().p("AERMbIAAAAIgPgPQhbhagQh6QgEgaAAgbQAAicBvhuQBthtCbgBIABAAIAaABQA4ADAyATQBKAbA8A8IAPAPIAIgIQBfhfCCgNQATgCAVAAQBaAABKAkIANAHIAGADQAsAZAnAnQBuBuAACcQAAA4gPAzQgZBZhGBFIgIAIIoTITg");
	var mask_graphics_25 = new cjs.Graphics().p("ADPMJIABgBIgRgPQhihhgRiDQgEgcAAgeQAAinB3h3QB2h2CnAAIABAAIAcAAQA8AEA1AUQBQAdBBBBIAQAQIAJgJQBmhmCMgOQAVgCAWAAQBhAABQAnIANAHIAHAEQAwAbAqApQB2B3AACoQAAA8gQA3QgbBfhLBLIgJAJIo8I8g");
	var mask_graphics_26 = new cjs.Graphics().p("ACNL3IABgBIgSgQQhphpgSiMQgDgeAAggQAAizB+h/QB+h/CzAAIABAAIAfABQBAAEA5AVQBVAgBGBFIARARIAKgJQBthuCWgPQAXgCAXAAQBoAABVAqIAPAHIAHAEQA0AdAsAtQB/B/AAC0QAABBgRA6QgeBmhQBRIgJAJIplJlg");
	var mask_graphics_27 = new cjs.Graphics().p("ABMLlIABgBIgUgSQhuhvgUiVQgEghAAghQAAjACGiHQCHiGC/gBIABAAIAgABQBFAFA9AWQBbAiBKBJIASASIAKgKQB1h0CggPQAYgDAaAAQBuAABbAtIAQAHIAHAFQA3AeAwAvQCHCIAAC/QAABGgSA+QggBthVBWIgKAKIqOKNg");
	var mask_graphics_28 = new cjs.Graphics().p("ACHL1IABAAIgSgRQhphpgSiNQgEgeAAggQAAi1B/h/QB/h/C0AAIABAAIAfABQBAADA6AVQBWAgBFBGIASARIAJgKQBvhuCWgPQAXgCAYAAQBoAABWAqIAPAHIAHAEQA0AdAtAtQB/CAAAC1QAABBgRA7QgeBnhQBRIgKAJIpoJpg");
	var mask_graphics_29 = new cjs.Graphics().p("ADDMGIABgBIgSgPQhihjgSiFQgEgcAAgeQAAiqB4h4QB4h3CpgBIABAAIAdABQA8AEA3AUQBQAeBCBBIAQARIAJgJQBohoCNgOQAWgCAXAAQBhAABRAnIAOAHIAHAEQAwAbArArQB3B4AACqQAAA9gQA3QgcBhhLBMIgJAJIpEJDg");
	var mask_graphics_30 = new cjs.Graphics().p("AD+MXIABgBIgQgPQhchcgRh8QgDgbAAgcQAAifBwhwQBwhwCfgBIAAAAIAbABQA5AEAzASQBLAcA9A+IAQAPIAIgIQBhhhCFgNQAUgCAVAAQBbAABMAlIANAGIAGAEQAuAZAoAoQBwBwAACfQAAA6gPA0QgaBahHBHIgJAJIoeIeg");
	var mask_graphics_31 = new cjs.Graphics().p("AE6MnIABgBIgPgNQhWhWgQh0QgDgZAAgaQAAiUBphpQBohoCUAAIAAAAIAZAAQA1AEAwARQBGAaA5A5IAOAPIAIgIQBbhbB7gMQATgBAUAAQBVAABGAiIAMAGIAGADQArAYAlAlQBoBpAACUQAAA1gOAxQgYBUhCBCIgIAIIn6H5g");
	var mask_graphics_32 = new cjs.Graphics().p("AF2M4IAAgBIgOgNQhPhQgPhqQgDgYAAgYQAAiJBhhhQBhhhCJAAIABAAIAXABQAxADArAQQBCAYA1A1IANANIAHgHQBUhUBygLQASgCASAAQBPAABBAgIAMAGIAFADQAnAWAiAiQBhBhAACJQAAAygNAtQgWBOg+A9IgHAIInUHUg");
	var mask_graphics_33 = new cjs.Graphics().p("AGxNIIABgBIgNgLQhJhKgNhiQgDgWAAgWQAAh+BZhZQBZhZB+gBIABAAIAVABQAtADApAPQA8AWAwAxIANAMIAGgHQBOhNBpgKQAQgCARAAQBIAAA9AdIAKAFIAFADQAkAVAgAfQBZBZAAB/QAAAugMApQgVBIg4A4IgHAHImvGvg");
	var mask_graphics_34 = new cjs.Graphics().p("AF1M3IABAAIgOgNQhQhQgOhrQgDgXAAgYQAAiJBhhiQBhhgCJgBIAAAAIAYABQAxADArAQQBCAYA1A1IANAOIAHgIQBUhTBygMQASgBASAAQBPAABCAfIALAGIAFADQAoAWAiAiQBhBiAACJQAAAygNAsQgXBPg9A9IgIAHInUHVg");
	var mask_graphics_35 = new cjs.Graphics().p("AE5MnIABgBIgPgOQhWhWgQhzQgDgaAAgaQAAiUBphpQBohoCUAAIABAAIAZAAQA1ADAvASQBHAaA5A5IAOAPIAIgIQBbhbB7gMQATgCAUAAQBVAABHAjIAMAGIAGADQAqAYAlAlQBpBpAACUQAAA2gOAwQgZBVhCBCIgIAIIn6H6g");
	var mask_graphics_36 = new cjs.Graphics().p("AD9MWIABgBIgQgOQhdhdgQh8QgEgbAAgcQAAifBxhxQBwhwCfAAIAAAAIAbABQA5ADAzATQBMAcA9A9IAQAQIAIgJQBhhhCFgNQAUgCAVAAQBcAABMAlIANAGIAGAEQAuAaAnAnQBxBxAACfQAAA6gPA0QgbBbhHBHIgIAIIofIfg");
	var mask_graphics_37 = new cjs.Graphics().p("ADBMFIABAAIgRgQQhjhjgSiFQgEgcAAgeQAAiqB5h5QB4h4CpAAIABAAIAdABQA9ADA2AVQBRAeBBBBIARARIAJgJQBohoCNgOQAWgCAXAAQBiAABRAnIAOAHIAGAEQAxAbArArQB4B4AACqQAAA+gRA3QgbBhhMBMIgJAJIpFJFg");
	var mask_graphics_38 = new cjs.Graphics().p("ACFL1IABgBIgTgRQhphpgSiNQgEgfAAggQAAi1B/iAQCAh+C1gBIABAAIAeABQBBAEA6AUQBWAgBGBGIARASIAKgKQBuhvCXgOQAXgDAYAAQBoAABXAqIAPAIIAHAEQA0AdAtAtQCACAAAC2QAABBgSA7QgdBnhRBRIgKAKIpqJqg");
	var mask_graphics_39 = new cjs.Graphics().p("ABILkIABgBIgTgRQhvhwgUiWQgEggAAgiQAAjACHiIQCHiGDAgBIABAAIAgABQBFAEA9AXQBbAiBKBJIATATIAKgLQB1h0CggQQAZgCAZAAQBvAABcAtIAPAHIAIAFQA3AeAwAvQCHCIAADBQAABFgSA/QggBthVBWIgLAKIqPKQg");
	var mask_graphics_40 = new cjs.Graphics().p("ACKL2IABgBIgTgQQhohpgSiMQgEgfAAggQAAi0B+h/QB/h+C0AAIABAAIAeAAQBBADA5AWQBWAgBFBFIASARIAJgJQBuhuCWgPQAXgCAYAAQBoAABWAqIAPAHIAHAEQAzAdAtAtQB/B/AAC1QAABBgRA7QgdBmhRBRIgJAJIpnJng");
	var mask_graphics_41 = new cjs.Graphics().p("ADLMIIABAAIgRgQQhihigRiDQgEgcAAgeQAAioB3h3QB3h2CngBIABAAIAdABQA8AEA1ATQBQAeBBBBIARAQIAIgJQBnhmCMgOQAWgCAWAAQBhAABQAnIAOAHIAGADQAxAcAqApQB2B3AACpQAAA9gQA3QgbBfhLBMIgJAIIo+I/g");
	var mask_graphics_42 = new cjs.Graphics().p("AENMbIABgBIgQgPQhbhagQh6QgEgbAAgbQAAicBvhvQBuhuCcAAIABAAIAaAAQA4AEAyASQBKAcA8A8IAPAPIAJgIQBfhgCCgMQAUgCAVAAQBaAABKAkIANAGIAGAEQAtAZAnAnQBuBuAACdQAAA5gPAyQgZBZhGBGIgIAJIoWIVg");
	var mask_graphics_43 = new cjs.Graphics().p("AFOMtIABgBIgOgNQhUhUgPhxQgEgYAAgaQAAiQBnhmQBlhmCQAAIABAAIAYABQA0ADAuARQBEAZA4A4IAOAOIAIgIQBYhYB4gMQATgBATAAQBTAABFAhIAMAGIAFADQAqAXAjAkQBmBmAACRQAAA0gNAvQgYBThBBAIgHAIIntHsg");
	var mask_graphics_44 = new cjs.Graphics().p("AGQM/IABgBIgOgMQhNhNgOhnQgCgXAAgXQAAiEBdheQBehdCEgBIAAAAIAXABQAvADAqAQQA/AXAzAzIANANIAHgHQBRhRBugLQARgBASAAQBMAAA/AeIALAGIAFADQAmAVAhAhQBdBeAACEQAAAwgMArQgWBMg7A7IgHAHInEHEg");
	var mask_graphics_45 = new cjs.Graphics().p("AHSNRIAAgBIgMgLQhGhGgNheQgCgUAAgVQAAh5BVhVQBVhVB4AAIABAAIAUAAQArADAmAOQA6AVAuAvIAMAMIAGgHQBKhJBkgKIAfgCQBGAAA5AcIAKAFIAFADQAiATAeAeQBVBVAAB5QAAAsgLAnQgUBFg2A1IgGAHImbGbg");
	var mask_graphics_46 = new cjs.Graphics().p("AGSM/IABAAIgNgMQhNhNgOhnQgDgWAAgYQAAiEBehdQBdhdCDAAIABAAIAWAAQAvADAqAQQA/AXAzAzIANANIAHgHQBQhRBugLQARgBASAAQBMAAA/AeIALAGIAFADQAmAVAgAhQBdBdAACEQAAAwgMArQgWBLg7A7IgHAHInCHDg");
	var mask_graphics_47 = new cjs.Graphics().p("AFTMuIABgBIgPgNQhThTgPhwQgDgYAAgaQAAiPBlhmQBlhlCPAAIABAAIAYAAQA0AEAtARQBFAZA3A3IAOAOIAIgHQBXhYB4gMQASgCATAAQBTAABEAiIAMAGIAGADQApAXAjAkQBmBlAACQQAAA0gOAvQgXBRhBBAIgHAIInqHqg");
	var mask_graphics_48 = new cjs.Graphics().p("AEUMdIABgBIgQgOQhahbgQh4QgEgbAAgbQAAibBuhuQBthtCbAAIAAAAIAbABQA3ADAxASQBKAcA8A7IAPAPIAIgIQBfhfCBgMQAUgCAUAAQBaAABKAkIAMAGIAGAEQAtAZAmAmQBuBuAACbQAAA4gPAzQgZBYhGBFIgIAJIoRIRg");
	var mask_graphics_49 = new cjs.Graphics().p("ADVMLIAAgBIgRgPQhghhgSiCQgDgcAAgdQAAinB1h1QB2h2CmAAIABAAIAcABQA7ADA1AUQBQAdBABBIAQAQIAJgJQBmhmCKgOQAWgCAWAAQBgAABPAnIAOAHIAGADQAwAbApAqQB2B2AACnQAAA8gQA2QgbBfhLBKIgIAJIo5I5g");
	var mask_graphics_50 = new cjs.Graphics().p("ACVL6IABgBIgSgQQhohogSiLQgEgeAAgfQAAiyB+h+QB+h+CxAAIABAAIAeABQBAAEA5AVQBUAfBFBFIARARIAKgJQBshtCVgPQAXgCAXAAQBmAABWApIAOAIIAHADQAzAdAtAtQB9B9AACzQAABAgRA6QgdBmhPBPIgKAKIpgJgg");
	var mask_graphics_51 = new cjs.Graphics().p("ABWLoIABAAIgTgSQhuhugTiUQgEggAAghQAAi+CFiGQCFiFC9AAIABAAIAgABQBEAEA9AWQBaAhBJBJIASASIAKgKQB0hzCegPQAYgCAZAAQBtAABbArIAQAHIAHAEQA2AfAwAvQCFCGAAC+QAABFgSA+QgfBshUBUIgLAKIqHKIg");
	var mask_graphics_52 = new cjs.Graphics().p("AAWLWIABgBIgUgSQh0h1gVidQgEgiAAgkQAAjJCNiOQCOiNDIAAIABAAIAiABQBIAEBAAYQBgAjBNBNIAUAUIALgLQB6h6CogQQAagDAaAAQB0AABgAvIARAIIAHAEQA6AhAyAxQCOCOAADKQAABIgTBCQghBzhaBZIgLALIquKvg");
	var mask_graphics_53 = new cjs.Graphics().p("ABoLMIABgBIgTgQQhohqgTiOQgEgfAAggQAAi1B/iBQCAh/C2gBIABAAIAeABQBBAEA6AWQBXAfBGBGIASASIAJgKQBvhuCYgPQAXgCAYAAQBpAABWApIAPAHIAHAEQA1AeAtAtQCACAAAC3QAABBgRA8QgeBnhRBSIgKAJIpsJtg");
	var mask_graphics_54 = new cjs.Graphics().p("AC5LCIABAAIgQgPQhfhfgRh/QgDgbAAgdQAAiiBzhzQByhzCiAAIABAAIAcABQA6ADAzATQBOAdA/A/IAPAPIAJgIQBjhjCHgOQAVgCAWAAQBdAABOAmIANAHIAHADQAuAaApApQByBzAACjQAAA7gPA0QgbBdhIBJIgJAIIorIrg");
	var mask_graphics_55 = new cjs.Graphics().p("AELK4IABAAIgPgNQhThUgPhvQgDgZAAgZQAAiPBlhlQBlhlCPgBIABAAIAYABQAzADAuARQBEAZA3A4IAOANIAHgHQBYhYB3gLQATgCATAAQBSAABEAhIAMAGIAGADQApAXAjAkQBlBlAACQQAAA0gNAuQgYBShABAIgHAHInpHpg");
	var mask_graphics_56 = new cjs.Graphics().p("AFcKvIABgBIgNgLQhIhJgMhgQgDgVAAgWQAAh8BXhYQBYhXB7AAIABAAIAVAAQAsADAoAPQA7AWAwAvIAMAMIAGgGQBMhMBngKQAQgCAQAAQBIAAA7AdIAKAFIAFADQAjAUAfAfQBYBYAAB8QAAAtgMAoQgUBHg4A3IgGAHImnGng");
	var mask_graphics_57 = new cjs.Graphics().p("AGuKlIAAgBIgKgJQg9g9gLhSQgCgSAAgSQAAhpBKhKQBKhJBogBIABAAIARABQAmACAhAMQAyATAoAoIAKAKIAGgFQBAhABXgJIAbgBQA8AAAyAYIAJAFIAEACQAeARAaAaQBKBKAABpQAAAmgKAiQgRA7gvAvIgFAGIlmFlg");
	var mask_graphics_58 = new cjs.Graphics().p("AIAKbIAAgBIgJgHQgxgygJhDQgCgOAAgPQAAhVA8g9QA8g8BWAAIAAAAIAOAAQAfACAbAKQApAPAhAhIAIAIIAEgEQA1g0BHgHIAWgBQAxAAApATIAHAEIADACQAZAOAVAVQA8A8AABWQAAAfgIAbQgOAxgmAmIgFAFIkjEjg");
	var mask_graphics_59 = new cjs.Graphics().p("AJRKRIAAAAIgGgGQgngngHgzIgBgXQAAhCAvgvQAugvBCAAIAAAAIAMABQAXABAVAIQAgALAZAaIAHAGIADgDQAogpA3gFIASgBQAmAAAfAQIAGACIACACQATAKARARQAuAvAABCQAAAYgGAVQgLAmgdAdIgEAEIjhDhg");
	var mask_graphics_60 = new cjs.Graphics().p("AJRKRIAAAAIgGgGQgngngHgzIgBgXQAAhCAvgvQAugvBCAAIAAAAIAMABQAXABAVAIQAgALAZAaIAHAGIADgDQAogpA3gFIASgBQAmAAAfAQIAGACIACACQATAKARARQAuAvAABCQAAAYgGAVQgLAmgdAdIgEAEIjhDhg");
	var mask_graphics_61 = new cjs.Graphics().p("AJRKRIAAAAIgGgGQgngngHgzIgBgXQAAhCAvgvQAugvBCAAIAAAAIAMABQAXABAVAIQAgALAZAaIAHAGIADgDQAogpA3gFIASgBQAmAAAfAQIAGACIACACQATAKARARQAuAvAABCQAAAYgGAVQgLAmgdAdIgEAEIjhDhg");
	var mask_graphics_62 = new cjs.Graphics().p("AJRKRIAAAAIgGgGQgngngHgzIgBgXQAAhCAvgvQAugvBCAAIAAAAIAMABQAXABAVAIQAgALAZAaIAHAGIADgDQAogpA3gFIASgBQAmAAAfAQIAGACIACACQATAKARARQAuAvAABCQAAAYgGAVQgLAmgdAdIgEAEIjhDhg");
	var mask_graphics_63 = new cjs.Graphics().p("AJRKRIAAAAIgGgGQgngngHgzIgBgXQAAhCAvgvQAugvBCAAIAAAAIAMABQAXABAVAIQAgALAZAaIAHAGIADgDQAogpA3gFIASgBQAmAAAfAQIAGACIACACQATAKARARQAuAvAABCQAAAYgGAVQgLAmgdAdIgEAEIjhDhg");
	var mask_graphics_64 = new cjs.Graphics().p("AJRKRIAAAAIgGgGQgngngHgzIgBgXQAAhCAvgvQAugvBCAAIAAAAIAMABQAXABAVAIQAgALAZAaIAHAGIADgDQAogpA3gFIASgBQAmAAAfAQIAGACIACACQATAKARARQAuAvAABCQAAAYgGAVQgLAmgdAdIgEAEIjhDhg");
	var mask_graphics_65 = new cjs.Graphics().p("AJRKRIAAAAIgGgGQgngngHgzIgBgXQAAhCAvgvQAugvBCAAIAAAAIAMABQAXABAVAIQAgALAZAaIAHAGIADgDQAogpA3gFIASgBQAmAAAfAQIAGACIACACQATAKARARQAuAvAABCQAAAYgGAVQgLAmgdAdIgEAEIjhDhg");
	var mask_graphics_66 = new cjs.Graphics().p("AJRKRIAAAAIgGgGQgngngHgzIgBgXQAAhCAvgvQAugvBCAAIAAAAIAMABQAXABAVAIQAgALAZAaIAHAGIADgDQAogpA3gFIASgBQAmAAAfAQIAGACIACACQATAKARARQAuAvAABCQAAAYgGAVQgLAmgdAdIgEAEIjhDhg");
	var mask_graphics_67 = new cjs.Graphics().p("AJRKRIAAAAIgGgGQgngngHgzIgBgXQAAhCAvgvQAugvBCAAIAAAAIAMABQAXABAVAIQAgALAZAaIAHAGIADgDQAogpA3gFIASgBQAmAAAfAQIAGACIACACQATAKARARQAuAvAABCQAAAYgGAVQgLAmgdAdIgEAEIjhDhg");
	var mask_graphics_68 = new cjs.Graphics().p("AJRKRIAAAAIgGgGQgngngHgzIgBgXQAAhCAvgvQAugvBCAAIAAAAIAMABQAXABAVAIQAgALAZAaIAHAGIADgDQAogpA3gFIASgBQAmAAAfAQIAGACIACACQATAKARARQAuAvAABCQAAAYgGAVQgLAmgdAdIgEAEIjhDhg");
	var mask_graphics_69 = new cjs.Graphics().p("AJRKRIAAAAIgHgHQgmgmgHg0IgBgWQAAhCAugvQAvgvBCAAIAAAAIALAAQAYACAVAIQAgALAZAaIAGAGIAEgDQAogpA3gFIASgBQAmAAAfAPIAGADIACACQATAKARARQAuAuAABDQAAAYgGAVQgLAmgdAdIgEAEIjiDhg");
	var mask_graphics_70 = new cjs.Graphics().p("AJQKRIABgBIgHgGQgngmgGg0IgCgXQAAhCAvgvQAvguBCAAIAAAAIALAAQAYABAVAIQAfAMAaAZIAGAHIAEgEQAogoA3gGIASAAQAmAAAfAPIAGADIACABQATALARAQQAuAvAABCQAAAYgGAWQgLAmgdAdIgEAEIjiDig");
	var mask_graphics_71 = new cjs.Graphics().p("AJPKQIABAAIgHgGQgngngHgzIgBgXQAAhDAvguQAvgvBCAAIAAAAIALAAQAYABAVAIQAgAMAaAaIAGAGIADgEQApgoA3gGIASAAQAmAAAfAPIAGADIACABQATALARAQQAvAvAABDQAAAYgHAVQgKAmgeAeIgEADIjiDjg");
	var mask_graphics_72 = new cjs.Graphics().p("AJOKQIAAAAIgHgGQgngngGg0IgCgXQAAhDAvgvQAvgvBDAAIAAAAIALAAQAYACAVAHQAgAMAaAaIAGAGIAEgDQApgpA3gFIARgBQAnAAAgAPIAFADIADACQATAKAQARQAvAvAABDQAAAYgGAWQgLAmgeAdIgDAEIjkDkg");
	var mask_graphics_73 = new cjs.Graphics().p("AJLKPIAAAAIgHgGQgngngHg1IgBgXQAAhDAvgwQAwgvBDAAIAAAAIALAAQAYACAWAIQAgAMAaAZIAGAHIAEgEQApgpA4gFIARgBQAnAAAgAQIAFACIADACQATALARAQQAvAwAABDQAAAZgGAVQgLAngeAeIgEADIjlDlg");
	var mask_graphics_74 = new cjs.Graphics().p("AJHKOIAAAAIgHgHQgngngHg1QgCgLAAgMQAAhEAwgwQAwgwBEAAIAAAAIAMAAQAYABAWAIQAgAMAaAbIAHAGIADgDQAqgqA4gFIASgBQAnAAAhAPIAFADIADACQATALARARQAwAwAABEQAAAYgGAWQgMAngeAeIgEAEIjnDog");
	var mask_graphics_75 = new cjs.Graphics().p("AJBKMIAAAAIgHgGQgogogHg2QgCgMAAgMQAAhFAxgxQAxgxBFAAIAAAAIAMABQAYABAWAIQAhAMAbAbIAGAHIAEgEQAqgqA6gGIASgBQAnAAAhAQIAGADIADACQATALASARQAwAxAABFQAAAZgGAXQgMAngeAfIgEADIjsDsg");
	var mask_graphics_76 = new cjs.Graphics().p("AI4KKIABAAIgIgHQgpgpgHg3QgBgMAAgMQAAhHAxgyQAygxBHgBIAAAAIAMABQAZABAXAJQAhAMAbAbIAHAHIAEgEQArgrA7gGIASAAQApAAAhAQIAGADIADABQAUAMASARQAxAyAABHQAAAagGAXQgMAogfAfIgEAEIjxDxg");
	var mask_graphics_77 = new cjs.Graphics().p("AIsKHIABgBIgIgGQgqgrgHg4QgCgNAAgMQAAhJAzg0QA0gzBIAAIABAAIAMAAQAaACAXAJQAjAMAcAcIAHAHIAEgDQAsgtA8gGIATgBQAqAAAjARIAGADIADACQAVAMASASQAzAzAABJQAAAagHAYQgMApggAhIgEAEIj4D4g");
	var mask_graphics_78 = new cjs.Graphics().p("AIcKCIABAAIgIgHQgsgsgIg7QgCgNAAgNQAAhMA2g1QA1g2BMAAIAAAAIANAAQAbACAYAJQAkANAdAeIAHAHIAFgEQAuguA/gHIATAAQAsAAAkARIAGADIADACQAWAMATATQA1A1AABMQAAAcgHAYQgMArgiAiIgEAEIkDECg");
	var mask_graphics_79 = new cjs.Graphics().p("AIGJ8IABAAIgIgIQgvgugIg+QgCgOAAgOQAAhPA5g5QA4g4BPAAIABAAIANABQAcABAaAKQAmAOAeAeIAIAIIAEgEQAxgxBCgGIAVgBQAuAAAmASIAHAEIADABQAWANAUAUQA4A4AABQQAAAdgHAaQgNAtgkAkIgEAEIkQEQg");
	var mask_graphics_80 = new cjs.Graphics().p("AHpJ0IAAgBIgJgHQgxgygJhCQgCgPAAgPQAAhVA8g8QA8g8BVAAIABAAIAOABQAeABAbAKQApAPAhAhIAIAIIAEgEQA0g0BHgHIAWgBQAxAAApAUIAHADIADACQAZAOAVAVQA8A8AABVQAAAfgIAcQgOAwgmAmIgFAFIkiEig");
	var mask_graphics_81 = new cjs.Graphics().p("AHAJpIABgBIgJgIQg2g2gKhIQgCgQAAgQQAAhcBChCQBBhBBcAAIAAAAIAQABQAhACAdAKQAsARAkAjIAJAJIAFgFQA4g4BNgIIAYgBQA1AAAsAWIAIAEIADACQAbAOAXAXQBBBCAABcQAAAigJAeQgPA0gpAqIgFAFIk7E7g");
	var mask_graphics_82 = new cjs.Graphics().p("AGKJZIAAAAIgKgKQg8g7gKhQQgDgRAAgSQAAhnBJhIQBIhIBmAAIAAAAIASAAQAkACAhANQAwASAoAnIAKAKIAFgFQA/g/BVgIIAbgCQA6AAAxAYIAJAEIAEADQAdAQAZAaQBJBIAABmQAAAlgKAiQgRA6guAuIgFAFIldFdg");
	var mask_graphics_83 = new cjs.Graphics().p("AE+JEIAAgBIgMgKQhDhEgMhaQgDgUAAgUQAAh0BShTQBShRB0gBIABAAIATABQAqACAlAOQA3AVAtAsIALAMIAGgHQBHhGBhgKIAegBQBDAAA3AbIAKAEIAEADQAiATAcAcQBSBTAAB0QAAAqgLAmQgTBCg0A0IgGAGImMGMg");
	var mask_graphics_84 = new cjs.Graphics().p("ADRImIABgBIgOgMQhPhPgOhqQgDgXAAgYQAAiIBghgQBgheCHgBIABAAIAXABQAxADArAQQBAAXA1A0IANANIAHgHQBThSBxgLQARgCATAAQBOAABAAfIAMAFIAFADQAnAWAiAiQBfBgAACIQAAAxgNAtQgWBNg8A9IgIAHInPHPg");
	var mask_graphics_85 = new cjs.Graphics().p("AAxH5IABgBIgRgPQhfhggRiBQgEgcAAgdQAAilB0hzQB0h0ClgBIAAAAIAcABQA7ADA1AUQBOAdBABAIAQAQIAJgJQBkhlCKgNQAVgCAWAAQBfAABOAmIAOAHIAGADQAwAbApApQB0B0AAClQAAA8gPA1QgcBehJBKIgJAJIozIzg");
	var mask_graphics_86 = new cjs.Graphics().p("AjRGxIABgBIgVgUQh7h7gWilQgFgkAAglQAAjTCWiWQCViWDTAAIABAAIAjABQBMAFBEAZQBkAlBSBSIAVAUIALgLQCBiBCxgSQAbgCAcAAQB6AABlAxIASAIIAIAFQA9AiA0A1QCWCWAADTQAABNgUBFQgjB5hfBeIgLAMIrTLTg");
	var mask_graphics_87 = new cjs.Graphics().p("Aq9EnIABgBQgQgNgOgPQiwivgfjqQgHgzAAg1QAAkuDWjVQDUjUEtgBIABAAIAzABQBsAHBfAkQCPA1B1B0IAdAdIAQgQQC4i4D7gZQAngDAoAAQCtAACQBGIAZAMIALAGQBXAxBLBLQDUDVAAEuQAABugcBiQgyCriGCGIgQAQIwFQFg");
	var mask_graphics_88 = new cjs.Graphics().p("EgwEAFtIAFgEQgxgogrgrQoQoPhfrEQgTiZAAigQAAuLKCqCQJ/qAOJgCQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQBNAABNAFQFEATEhBsQGwCgFeFeIBXBYIAwgxQIqoqL0hKQB0gLB5AAQIJAAGyDSQAlASAlATQASAJARALQEFCTDiDhQJ/KCAAONQAAFJhVEoQiVIFmVGUIgxAwMgwZAwag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:153.3506,y:140.0392}).wait(1).to({graphics:mask_graphics_1,x:151.8102,y:138.6362}).wait(1).to({graphics:mask_graphics_2,x:150.2697,y:137.2332}).wait(1).to({graphics:mask_graphics_3,x:148.7292,y:135.8302}).wait(1).to({graphics:mask_graphics_4,x:147.1888,y:134.4272}).wait(1).to({graphics:mask_graphics_5,x:145.6483,y:133.0242}).wait(1).to({graphics:mask_graphics_6,x:144.1078,y:131.6212}).wait(1).to({graphics:mask_graphics_7,x:142.5674,y:130.2182}).wait(1).to({graphics:mask_graphics_8,x:141.0269,y:128.8152}).wait(1).to({graphics:mask_graphics_9,x:142.9493,y:130.566}).wait(1).to({graphics:mask_graphics_10,x:144.8717,y:132.3169}).wait(1).to({graphics:mask_graphics_11,x:146.7941,y:134.0678}).wait(1).to({graphics:mask_graphics_12,x:148.7165,y:135.8187}).wait(1).to({graphics:mask_graphics_13,x:150.6389,y:137.5696}).wait(1).to({graphics:mask_graphics_14,x:152.5383,y:139.2516}).wait(1).to({graphics:mask_graphics_15,x:150.4333,y:137.3434}).wait(1).to({graphics:mask_graphics_16,x:148.3284,y:135.4352}).wait(1).to({graphics:mask_graphics_17,x:146.2234,y:133.527}).wait(1).to({graphics:mask_graphics_18,x:144.1184,y:131.6188}).wait(1).to({graphics:mask_graphics_19,x:142.0135,y:129.7106}).wait(1).to({graphics:mask_graphics_20,x:139.9085,y:127.8024}).wait(1).to({graphics:mask_graphics_21,x:137.7746,y:125.8508}).wait(1).to({graphics:mask_graphics_22,x:140.2756,y:128.1168}).wait(1).to({graphics:mask_graphics_23,x:142.7765,y:130.3829}).wait(1).to({graphics:mask_graphics_24,x:145.2774,y:132.6489}).wait(1).to({graphics:mask_graphics_25,x:147.7784,y:134.915}).wait(1).to({graphics:mask_graphics_26,x:150.2793,y:137.181}).wait(1).to({graphics:mask_graphics_27,x:152.7803,y:139.447}).wait(1).to({graphics:mask_graphics_28,x:150.507,y:137.3932}).wait(1).to({graphics:mask_graphics_29,x:148.2336,y:135.3393}).wait(1).to({graphics:mask_graphics_30,x:145.9603,y:133.2854}).wait(1).to({graphics:mask_graphics_31,x:143.687,y:131.2315}).wait(1).to({graphics:mask_graphics_32,x:141.4136,y:129.1776}).wait(1).to({graphics:mask_graphics_33,x:139.1556,y:127.1085}).wait(1).to({graphics:mask_graphics_34,x:141.4546,y:129.1858}).wait(1).to({graphics:mask_graphics_35,x:143.7535,y:131.2632}).wait(1).to({graphics:mask_graphics_36,x:146.0525,y:133.3405}).wait(1).to({graphics:mask_graphics_37,x:148.3515,y:135.4179}).wait(1).to({graphics:mask_graphics_38,x:150.6505,y:137.4953}).wait(1).to({graphics:mask_graphics_39,x:152.9032,y:139.5726}).wait(1).to({graphics:mask_graphics_40,x:150.4076,y:137.3135}).wait(1).to({graphics:mask_graphics_41,x:147.912,y:135.0543}).wait(1).to({graphics:mask_graphics_42,x:145.4163,y:132.7952}).wait(1).to({graphics:mask_graphics_43,x:142.9207,y:130.536}).wait(1).to({graphics:mask_graphics_44,x:140.4251,y:128.2769}).wait(1).to({graphics:mask_graphics_45,x:137.9295,y:126.0032}).wait(1).to({graphics:mask_graphics_46,x:140.3446,y:128.1971}).wait(1).to({graphics:mask_graphics_47,x:142.7597,y:130.3909}).wait(1).to({graphics:mask_graphics_48,x:145.1748,y:132.5848}).wait(1).to({graphics:mask_graphics_49,x:147.5899,y:134.7786}).wait(1).to({graphics:mask_graphics_50,x:150.005,y:136.9724}).wait(1).to({graphics:mask_graphics_51,x:152.4201,y:139.1663}).wait(1).to({graphics:mask_graphics_52,x:154.7867,y:141.263}).wait(1).to({graphics:mask_graphics_53,x:148.3061,y:133.6888}).wait(1).to({graphics:mask_graphics_54,x:141.8255,y:126.1145}).wait(1).to({graphics:mask_graphics_55,x:135.3449,y:118.5402}).wait(1).to({graphics:mask_graphics_56,x:128.8643,y:110.966}).wait(1).to({graphics:mask_graphics_57,x:122.3837,y:103.3917}).wait(1).to({graphics:mask_graphics_58,x:115.9031,y:95.8174}).wait(1).to({graphics:mask_graphics_59,x:109.4145,y:88.2432}).wait(1).to({graphics:mask_graphics_60,x:109.4145,y:88.2432}).wait(1).to({graphics:mask_graphics_61,x:109.4145,y:88.2432}).wait(1).to({graphics:mask_graphics_62,x:109.4145,y:88.2432}).wait(1).to({graphics:mask_graphics_63,x:109.4145,y:88.2432}).wait(1).to({graphics:mask_graphics_64,x:109.4145,y:88.2432}).wait(1).to({graphics:mask_graphics_65,x:109.4145,y:88.2432}).wait(1).to({graphics:mask_graphics_66,x:109.4145,y:88.2432}).wait(1).to({graphics:mask_graphics_67,x:109.4145,y:88.2432}).wait(1).to({graphics:mask_graphics_68,x:109.4153,y:88.2439}).wait(1).to({graphics:mask_graphics_69,x:109.4212,y:88.2492}).wait(1).to({graphics:mask_graphics_70,x:109.4383,y:88.2647}).wait(1).to({graphics:mask_graphics_71,x:109.4742,y:88.297}).wait(1).to({graphics:mask_graphics_72,x:109.538,y:88.3545}).wait(1).to({graphics:mask_graphics_73,x:109.6411,y:88.4474}).wait(1).to({graphics:mask_graphics_74,x:109.7979,y:88.5887}).wait(1).to({graphics:mask_graphics_75,x:110.0264,y:88.7946}).wait(1).to({graphics:mask_graphics_76,x:110.3496,y:89.0859}).wait(1).to({graphics:mask_graphics_77,x:110.7976,y:89.4897}).wait(1).to({graphics:mask_graphics_78,x:111.4101,y:90.0416}).wait(1).to({graphics:mask_graphics_79,x:112.2405,y:90.79}).wait(1).to({graphics:mask_graphics_80,x:113.3628,y:91.8014}).wait(1).to({graphics:mask_graphics_81,x:114.8829,y:93.1713}).wait(1).to({graphics:mask_graphics_82,x:116.9579,y:95.0414}).wait(1).to({graphics:mask_graphics_83,x:119.8343,y:97.6336}).wait(1).to({graphics:mask_graphics_84,x:123.9267,y:101.3217}).wait(1).to({graphics:mask_graphics_85,x:130.0091,y:106.8033}).wait(1).to({graphics:mask_graphics_86,x:139.7864,y:115.6146}).wait(1).to({graphics:mask_graphics_87,x:158.4252,y:132.4121}).wait(1).to({graphics:mask_graphics_88,x:189.4796,y:149.0503}).wait(169));

	// star2
	this.mc_star2 = new lib.mc_star();
	this.mc_star2.name = "mc_star2";
	this.mc_star2.setTransform(261.4,143.85,1,1,0,0,0,7.9,8.1);
	this.mc_star2._off = true;
	var mc_star2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.mc_star2.filters = [mc_star2Filter_1];
	this.mc_star2.cache(-2,-2,20,20);

	var maskedShapeInstanceList = [this.mc_star2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.mc_star2).wait(88).to({_off:false},0).to({scaleX:1.6011,scaleY:1.6011,rotation:29.9987,x:262.9,y:142.9},8).to({regX:8.2,regY:8,scaleX:1.9994,scaleY:1.9994,rotation:59.9991,x:261.75,y:144.75},6).to({scaleX:1.463,scaleY:1.463,rotation:59.9992,y:147.3},7).to({regX:8.3,regY:7.9,scaleX:0.9849,scaleY:0.9849,rotation:59.9995,x:261.8,y:147.35},6).to({regY:8,scaleX:0.2407,scaleY:0.2407,rotation:60.0001,x:261.85,y:147.4},6).wait(18).to({regX:8.4,regY:7.8,scaleX:0.2373,scaleY:0.2373,rotation:60.0024},0).to({regX:7.9,regY:8.1,scaleX:1,scaleY:1,rotation:0,x:261.4,y:143.85},6).to({scaleX:1.6011,scaleY:1.6011,rotation:29.9987,x:262.9,y:142.9},8).to({regX:8.2,regY:8,scaleX:1.9994,scaleY:1.9994,rotation:59.9991,x:261.75,y:144.75},6).to({scaleX:1.463,scaleY:1.463,rotation:59.9992,y:147.3},7).to({regX:8.3,regY:7.9,scaleX:0.9849,scaleY:0.9849,rotation:59.9995,x:261.8,y:147.35},6).to({regX:8.4,regY:7.8,scaleX:0.2373,scaleY:0.2373,rotation:60.0024,x:261.85,y:147.4},6).to({regX:7.9,regY:8.1,scaleX:1,scaleY:1,rotation:0,x:261.4,y:143.85},6).to({scaleX:1.6011,scaleY:1.6011,rotation:29.9987,x:262.9,y:142.9},8).to({regX:8.2,regY:8,scaleX:1.9994,scaleY:1.9994,rotation:59.9991,x:261.75,y:144.75},6).to({scaleX:1.463,scaleY:1.463,rotation:59.9992,y:147.3},7).to({regX:8.3,regY:7.9,scaleX:0.9849,scaleY:0.9849,rotation:59.9995,x:261.8,y:147.35},6).to({regX:8.4,regY:7.8,scaleX:0.2373,scaleY:0.2373,rotation:60.0024,x:261.85,y:147.4},6).to({regX:8.8,regY:8.8,scaleX:0.661,scaleY:0.661,rotation:60.0035,x:261.35,y:147.9},6).to({regY:8.7,rotation:167.523},7).to({rotation:212.5227,x:261.4},5).wait(22));
	this.timeline.addTween(cjs.Tween.get(mc_star2Filter_1).wait(88).to(new cjs.ColorFilter(0,0,0,1,255,255,150,0), 8).wait(43).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 6).to(new cjs.ColorFilter(0,0,0,1,255,255,150,0), 8).wait(25).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 6).to(new cjs.ColorFilter(0,0,0,1,255,255,150,0), 8).wait(65));

	// star
	this.mc_star1 = new lib.mc_star();
	this.mc_star1.name = "mc_star1";
	this.mc_star1.setTransform(177.05,28.75);
	this.mc_star1._off = true;
	var mc_star1Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.mc_star1.filters = [mc_star1Filter_2];
	this.mc_star1.cache(-2,-2,20,20);

	var maskedShapeInstanceList = [this.mc_star1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.mc_star1).wait(88).to({_off:false},0).to({regX:7.9,regY:8,scaleX:1.3437,scaleY:1.3437,rotation:29.9991,x:199,y:58.3},8).to({regX:8,regY:7.7,scaleX:1.8332,scaleY:1.8332,rotation:89.9995,x:207.6,y:96.5},6).to({scaleX:1.4219,scaleY:1.4219,rotation:119.9984,x:187.35,y:137.9},7).to({regX:7.8,regY:7.6,scaleX:1.7594,scaleY:1.7594,rotation:179.9995,x:153.1,y:147},6).to({regX:7.7,regY:7.9,scaleX:1.8867,scaleY:1.8867,rotation:224.9964,x:129.2,y:146.6},6).to({regX:7.5,scaleX:2.0184,scaleY:2.0184,rotation:209.9973,x:93.7,y:152},6).to({regY:8,scaleX:1.9918,scaleY:1.9918,rotation:254.9977,x:52.75,y:156.75},6).to({regX:7.4,regY:8.1,scaleX:1.6271,scaleY:1.6271,rotation:284.9961,x:9.9,y:136.35},6).to({regX:7.7,regY:8,scaleX:1.6126,scaleY:1.6126,rotation:284.996,x:10.75,y:89.15},6).to({regY:8.1,scaleX:1.643,scaleY:1.643,rotation:344.9964,x:10.6,y:41.15},6).to({regX:7.9,regY:8,scaleX:1.3678,scaleY:1.3678,rotation:419.9964,x:58.25,y:28.55},6).to({regY:8.1,scaleX:0.9998,scaleY:0.9998,rotation:464.9954,x:119.2,y:15.6},7).to({x:182.7,y:40.6},10).to({regX:8,regY:8,scaleX:1.3392,scaleY:1.3392,rotation:419.9962,x:210.35,y:92.7},7).to({scaleX:1.3391,scaleY:1.3391,rotation:479.9959,x:159.9,y:143.1},7).to({regX:8.1,scaleX:1.7181,scaleY:1.7181,rotation:479.9958,x:151.8,y:187.7},7).to({rotation:494.995,x:151.85,y:187.65},6).to({regY:7.9,rotation:524.995,x:151.95,y:187.8},6).to({regX:8,scaleX:2.6344,scaleY:2.6344,rotation:554.9939,x:152.15,y:187.7},6).to({regX:7.9,regY:8,scaleX:4.0639,scaleY:4.0639,rotation:584.9933,x:152.7,y:187.45},6).to({regX:8,regY:7.9,scaleX:1.8475,scaleY:1.8475,rotation:614.9927,x:152.15,y:187.55},6).to({scaleX:1.2166,scaleY:1.2166,rotation:659.9917,x:152.05,y:187.75},6).to({regX:8.1,regY:8,scaleX:0.7221,scaleY:0.7221,rotation:704.9911,x:152.15,y:188},6).to({regY:7.9,scaleX:0.3395,scaleY:0.3395,rotation:734.99},6).to({regX:8.2,regY:8.1,scaleX:0.0882,rotation:720,skewX:14.99,skewY:-165.0162,x:152.1},6).to({_off:true},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(mc_star1Filter_2).wait(88).to(new cjs.ColorFilter(0,0,0,1,255,255,156,0), 8).wait(154));

	// button
	this.btn_zobacz_produkty = new lib.btn_products();
	this.btn_zobacz_produkty.name = "btn_zobacz_produkty";
	this.btn_zobacz_produkty.setTransform(44.2,188.45,0.7131,0.7131,0,0,0,76.7,40.5);
	this.btn_zobacz_produkty.shadow = new cjs.Shadow("rgba(51,0,0,1)",3,3,5);
	new cjs.ButtonHelper(this.btn_zobacz_produkty, 0, 1, 2, false, new lib.btn_products(), 3);

	var maskedShapeInstanceList = [this.btn_zobacz_produkty];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.btn_zobacz_produkty).wait(257));

	// background_with_info
	this.instance = new lib.Kosmetyki_plus_text();
	this.instance.setTransform(1,1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(257));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.mc_star2, startFrame:88, endFrame:88, x:-2, y:-2, w:20, h:20});
	this.filterCacheList.push({instance: this.mc_star2, startFrame:89, endFrame:96, x:-2, y:-2, w:20, h:20});
	this.filterCacheList.push({instance: this.mc_star2, startFrame:140, endFrame:145, x:-2, y:-2, w:20, h:20});
	this.filterCacheList.push({instance: this.mc_star2, startFrame:146, endFrame:153, x:-2, y:-2, w:20, h:20});
	this.filterCacheList.push({instance: this.mc_star2, startFrame:179, endFrame:184, x:-2, y:-2, w:20, h:20});
	this.filterCacheList.push({instance: this.mc_star2, startFrame:185, endFrame:192, x:-2, y:-2, w:20, h:20});
	this.filterCacheList.push({instance: this.mc_star1, startFrame:88, endFrame:88, x:-2, y:-2, w:20, h:20});
	this.filterCacheList.push({instance: this.mc_star1, startFrame:89, endFrame:96, x:-2, y:-2, w:20, h:20});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(120.1,103.9,216.9,179.79999999999998);
// library properties:
lib.properties = {
	id: '43E9E77C4189BF4EABAA051C062E09EA',
	width: 336,
	height: 280,
	fps: 30,
	color: "#660101",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
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
an.compositions['43E9E77C4189BF4EABAA051C062E09EA'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;