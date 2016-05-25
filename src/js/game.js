/**
 * @author Perlou
 * @index.js
 * @exports {Func} gamePage
 */

'use strict';

//js
var jc = require('./jCanvaScript');
var utils = require('./utils');
var getNum = utils.getNum;
var view = utils.view;

function gamePage(){

}

gamePage.prototype.begin = function(){
	console.log('begin');
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
