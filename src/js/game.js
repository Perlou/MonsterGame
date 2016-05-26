/**
 * @author Perlou
 * @index.js
 * @exports {Func} gamePage
 */

'use strict';

//js
var jc = require('./jCanvaScript'),
	utils = require('./utils'),
	getNum = utils.getNum,
	view = utils.view,
	s = utils.s;

String.prototype.findNum = function(){
	return this.match(/\d+/g);
}

/**
 * 游戏对象构造函数
 * @params {obj} option
 */
function gamePage(options){

	var _this = this;

	s('page').width = view().w;
	s('page').height = view().h;

	_this.mon = {
		mon1: function(option){
			jc.start(option.canvas,true);
			var monster1 = new Image();
			monster1.src = require('../images/monster1.png');
			monster1.onload = function(){
			console.log('mon1');
				jc.start(option.canvas);
				jc.image(monster1,100,100,109,114).id(option.id).level(2);
			}
		},
		mon2: function(option){
			jc.start(option.canvas,true);
			var monster2 = new Image();
			monster2.src = require('../images/monster2.png');
			monster2.onload = function(){
				jc.start(option.canvas);
				jc.image(monster2,-200,-200,109,113).id(option.id).level(2);
			}
		},
		mon3: function(option){
			jc.start(option.canvas,true);
			var monster3 = new Image();
			monster3.src = require('../images/monster3.png');
			monster3.onload = function(){
				jc.start(option.canvas);
				jc.image(monster3,-200,-200,107,129).id(option.id).level(2);
			}
		},
		mon4: function(option){
			jc.start(option.canvas,true);
			var monster4 = new Image();
			monster4.src = require('../images/monster4.png');
			monster4.onload = function(){
				jc.start(option.canvas);
				jc.image(monster4,-200,-200,125,110).id(option.id).level(2);
			}
		},
		m1: [180,138],
		m2: [146,84],
		m3: [103,94],
		m4: [92,107],
	};
	_this.time = [10];
	
	_this.monNum = [];
	var monNum = 1;
	
	// 设置关卡怪物数量
	createmonNum();
	function createmonNum(){
		for(var i=0; i<monNum; i++){
			_this.monNum.push(monNum);
		}
		monNum ++;
		if(monNum<30){
			createmonNum();	
		}
	}

	/**
	 * 游戏相关属性
	 */
	_this.score = 0;
	_this.w = view().w-50;
	_this.h = view().h -50;
	_this.monomer = {};
	_this.position = {};
	_this.num = 0;
	
	_this.minW = 50;
	_this.minH = 50;
	_this.maxW = _this.w - 120;
	_this.maxH = _this.h - 150;
	_this.speed = 18;//所有怪物变化间隔时间(毫秒);
	_this.roundT = 20000;//怪物公转一圈所用时间

	function monomer(option){

		var _mon = this,
			firstPositionArea = getNum({
				num: 1,
				min: 0,
				max: 3
			});

		_mon.obj = option.obj;
		_mon.jdC = 200;
		_mon.jd = option.jd || -2;
		_mon.r = option.r || 200;
		_mon.clockwise = option.clockwise?false:true;
		
		_mon.variable = (_this.w + _this.h)*2/(_this.roundT/_this.speed);
		
		_mon.timeC = true;

		switch(firstPositionArea[0]){
			case 0: _this.firstPositionX = getNum({num:1,min:_that.minW,max:_that.maxW})[0]; _this.firstPositionY = _that.minH; _this.jdC = 100;
			break;
			case 1: _this.firstPositionY = getNum({num:1,min:_that.minH,max:_that.maxH})[0]; _this.firstPositionX = _that.minW; _this.jdC = -330;
			break;
			case 2: _this.firstPositionX = getNum({num:1,min:_that.minW,max:_that.maxW})[0]; _this.firstPositionY = _that.maxH; _this.jdC = -100;
			break;
			case 3: _this.firstPositionY = getNum({num:1,min:_that.minH,max:_that.maxH})[0]; _this.firstPositionX = _that.maxW; _this.jdC = 200;
			break;
		};
		
		// var firstPositionArea = getNum({num:1,min:0,max:3});		
	}

}

gamePage.prototype.begin = function(){

	var _this = this;
	this.mon.mon1({
		canvas: 'page',
		id: '234234'
	});
	console.log('game begin');
};

module.exports = gamePage;


























// function gamePage(){

// 	this.oGameCanvas = document.getElementById('gameCanvas');
// 	this.time = [10];
// 	this.arrNum = [];
// 	this.passNum = 0;
// 	this.num = 1;
// 	this.roundT = 10000;
// 	this.speed = 30;

// 	this.firstPositionArea = 0;

// 	this.MinX = 50;
// 	this.MinY = 50;
// 	this.MaxX = view().w - 50;
// 	this.MaxY = view().h - 50;

// 	this.changeNum = Math.floor( ((this.MaxX - this.MinX) + (this.MaxY - this.MinY)) * 2 / (this.roundT/this.speed) );
// 	console.log(this.changeNum);
// 	this.monster = {
// 		mon1: function( option ){
// 			jc.start(option.canvas,true);
// 			var monster1 = new Image();
// 			monster1.src = require('../images/monster1.png');
// 			monster1.onload = function(){
// 				jc.start(option.canvas);
// 				jc.image(monster1,100,100,109,114).id(option.id);
// 				// jc.image(monster1,-200,-200,109,114);
// 			};
// 		},
// 		mon2: function( option ){
// 			jc.start(option.canvas,true);
// 			var monster2 = new Image();
// 			monster2.src = require('../images/monster2.png');
// 			monster2.onload = function(){
// 				jc.start(option.canvas);
// 				jc.image(monster2,100,100,109,114).id(option.id);
// 				// jc.image(monster2,-200,-200,109,113).id(option.id).level(2);
// 			};
// 		},
// 		mon3: function( option ){
// 			jc.start(option.canvas,true);
// 			var monster3 = new Image();
// 			monster3.src = require('../images/monster3.png');
// 			monster3.onload = function(){
// 				jc.start(option.canvas);
// 				jc.image(monster3,100,100,109,114).id(option.id);
// 			// jc.image(monster3,-200,-200,107,129).id(option.id).level(2);
// 			};
// 		},
// 		mon4: function( option ){
// 			jc.start(option.canvas,true);
// 			var monster4 = new Image();
// 			monster4.src = require('../images/monster4.png');
// 			monster4.onload = function(){
// 			 	jc.start(option.canvas);
// 				jc.image(monster4,100,100,109,114).id(option.id);
// 			// jc.image(monster4,-200,-200,125,110).id(option.id).level(2);
// 			};
// 		},
// 		m1: [180,138],
// 		m2: [146,84],
// 		m3: [103,94],
// 		m4: [92,107]
// 	};
// 	this.init();
// } 

// gamePage.prototype = {

// 	init: function(){
// 		var _this = this;
// 		_this.oGameCanvas.width = view().w;
// 		_this.oGameCanvas.height = view().h;
// 		_this.createNum();
// 		// _this.createMonster();

// 	},
// 	createNum: function(){
// 		var _this = this;

// 		for(var i=0; i<_this.num; i++){
// 			_this.arrNum.push(_this.num);
// 		}
// 		_this.num++;
// 		if(_this.num<10){
// 			_this.createNum();
// 		}else{
// 			_this.createMonster();
// 		}
// 	},
// 	createMonster: function(){
// 		var _this = this;
// 		var mon = 0;
// 		for(var i=0; i<_this.arrNum[_this.passNum]; i++){
// 			mon = getNum({
// 				min: 1,
// 				max: 4,
// 				num: 1
// 			})[0];
// 			_this.monster['mon' + mon]({
// 				canvas: 'gameCanvas',
// 				id: 'mon' + i + _this.passNum
// 			});
// 			_this.monsterMove({
// 				obj: 'mon' + i + _this.passNum
// 			});
// 		}
// 	},
// 	monsterMove: function(option){
// 		var _this = this;

// 		function monMove(){
// 			var _monMove = this;

// 			_monMove.firstPositionArea = getNum({
// 				min: 1,
// 				max: 4,
// 				num: 1
// 			})[0];

// 			switch(_monMove.firstPositionArea){
// 				case 1: _this.X = getNum({
// 							min: _this.MinX,
// 							max: _this.MaxX,
// 							num: 1
// 						})[0];
// 						_this.Y = _this.MinY;
// 					break;	

// 				case 2: _this.X = _this.MinX;
// 						_this.Y =  getNum({
// 							min: _this.MinY,
// 							max: _this.MaxY,
// 							num: 1
// 						})[0];
// 					break;	

// 				case 3: _this.X = getNum({
// 							min: _this.MinX,
// 							max: _this.MaxX,
// 							num: 1
// 						})[0];
// 						_this.Y = _this.MaxY;
// 					break;	

// 				case 4: _this.X = _this.MaxX;
// 						_this.Y = getNum({
// 							min: _this.MinY,
// 							max: _this.MaxY,
// 							num: 1
// 						})[0];
// 					break;	
// 			}

// 			setTimeout(function(){
// 				_this.monsterMoveRun();
// 			},60);			
// 		}


// 	},
// 	monsterMoveRun: function(){
// 		var _this = this;
// 		if(_this.X < _this.MaxX && _this.Y == _this.MinY && _this.X > _this.MinX){
// 			_this.X = _this.X - _this.changeNum;
// 			if( _this.X < _this.MinX ){
// 				_this.X = _this.MinX;
// 			}
// 		}
// 	}
// };

// module.exports = gamePage;
