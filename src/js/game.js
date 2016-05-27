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
	s = utils.s,
	bind = utils.bind,
	remove = utils.remove,
	addClass = utils.addClass,
	removeClass = utils.removeClass;

String.prototype.findNum = function(){
	return this.match(/\d+/g);
}


/**
 * 游戏对象构造函数
 * @params {obj} option
 */
function gamePage(options){

	var _this = this;

	alert('gameing666632424242342343');

	s('page').width = view().w;
	s('page').height = view().h;

	_this.mon = {
		mon1: function(option){
			jc.start(option.canvas,true);
			var monster1 = new Image();
			monster1.src = './images/monster1.png';
			monster1.onload = function(){
				jc.start(option.canvas);
				jc.image(monster1,-200,-200,109,114).id(option.id).level(2);
			}
		},
		mon2: function(option){
			jc.start(option.canvas,true);
			var monster2 = new Image();
			monster2.src = './images/monster2.png';
			monster2.onload = function(){
				jc.start(option.canvas);
				jc.image(monster2,-200,-200,109,113).id(option.id).level(2);
			}
		},
		mon3: function(option){
			jc.start(option.canvas,true);
			var monster3 = new Image();
			monster3.src = './images/monster3.png';
			monster3.onload = function(){
				jc.start(option.canvas);
				jc.image(monster3,-200,-200,107,129).id(option.id).level(2);
			}
		},
		mon4: function(option){
			jc.start(option.canvas,true);
			var monster4 = new Image();
			monster4.src = './images/monster4.png';
			monster4.onload = function(){
				jc.start(option.canvas);
				jc.image(monster4,-200,-200,125,110).id(option.id).level(2);
			}
		},
		m1: [180,138],
		m2: [146,84],
		m3: [103,94],
		m4: [92,107]
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
		_mon.firstPositionX = 0;
		_mon.firstPositionY = 0;
		
		_mon.variable = (_this.w + _this.h)*2/(_this.roundT/_this.speed);
		
		_mon.timeC = true;

		switch(firstPositionArea[0]){
			case 0: _mon.firstPositionX = getNum({num:1,min:_this.minW,max:_this.maxW})[0]; _mon.firstPositionY = _this.minH; _mon.jdC = 100;
			break;
			case 1: _mon.firstPositionY = getNum({num:1,min:_this.minH,max:_this.maxH})[0]; _mon.firstPositionX = _this.minW; _mon.jdC = -330;
			break;
			case 2: _mon.firstPositionX = getNum({num:1,min:_this.minW,max:_this.maxW})[0]; _mon.firstPositionY = _this.maxH; _mon.jdC = -100;
			break;
			case 3: _mon.firstPositionY = getNum({num:1,min:_this.minH,max:_this.maxH})[0]; _mon.firstPositionX = _this.maxW; _mon.jdC = 200;
			break;
		}
		
	}

	monomer.prototype.run = function(){
		var _mon = this;
			if(_mon.clockwise){
				if(_mon.firstPositionX > _this.minW && _mon.firstPositionY == _this.minH){
					_mon.firstPositionX = _mon.firstPositionX - _mon.variable;
					if(_mon.firstPositionX < _this.minW){_mon.firstPositionX = _this.minW;};
					
				}else if( _mon.firstPositionX >= _this.minW && _mon.firstPositionY == _this.maxH && _mon.firstPositionX < _this.maxW){
					_mon.firstPositionX = _mon.firstPositionX + _mon.variable;
					if(_mon.firstPositionX > _this.maxW){_mon.firstPositionX = _this.maxW};
					
				}else if( _mon.firstPositionX == _this.minW && _mon.firstPositionY >= _this.minH && _mon.firstPositionY < _this.maxH ){
					_mon.firstPositionY = _mon.firstPositionY + _mon.variable;
					if(_mon.firstPositionY > _this.maxH){_mon.firstPositionY = _this.maxH};
					
				}else if( _mon.firstPositionX == _this.maxW && _mon.firstPositionY > _this.minH ){
					_mon.firstPositionY = _mon.firstPositionY - _mon.variable;
					if(_mon.firstPositionY < _this.minH){_mon.firstPositionY = _this.minH};
					
				};	
			}else{
				if(_mon.firstPositionX < _this.maxW && _mon.firstPositionY == _this.minH){
					_mon.firstPositionX = _mon.firstPositionX + _mon.variable;
					if(_mon.firstPositionX > _this.maxW){_mon.firstPositionX = _this.maxW;};
					
				}else if( _mon.firstPositionX > _this.minW && _mon.firstPositionY == _this.maxH && _mon.firstPositionX <= _this.maxW){
					_mon.firstPositionX = _mon.firstPositionX - _mon.variable;
					if(_mon.firstPositionX < _this.minW){_mon.firstPositionX = _this.minW};
					
				}else if( _mon.firstPositionX == _this.minW && _mon.firstPositionY > _this.minH && _mon.firstPositionY <= _this.maxH ){
					_mon.firstPositionY = _mon.firstPositionY - _mon.variable;
					if(_mon.firstPositionY < _this.minH){_mon.firstPositionY = _this.minH};
					
				}else if( _mon.firstPositionX == _this.maxW && _mon.firstPositionY < _this.maxH ){
					_mon.firstPositionY = _mon.firstPositionY + _mon.variable;
					if(_mon.firstPositionY > _this.maxH){_mon.firstPositionY = _this.maxH};
					
				};
			};
			
			_mon.jdC = _mon.jdC - _mon.jd;
			
			_mon.x = _mon.firstPositionX-_mon.r*Math.cos(_mon.jdC*Math.PI/180);
			_mon.y = _mon.firstPositionY-_mon.r*Math.sin(_mon.jdC*Math.PI/180);
			
			_this.position[_mon.obj] = [];
			_this.position[_mon.obj][0] = 	_mon.x;
			_this.position[_mon.obj][1] = 	_mon.y;
			
			jc('#'+_mon.obj).animate({
				x:_mon.x,
				y:_mon.y
			},1);
			
	};
	
	monomer.prototype.Stop = function( option ){
		
		if(option.next){
			_this.num ++;
			s('score').innerHTML = 'X' + Number(_this.num);
		}
		
		var _mon = this;
		_mon.timeC = false;
		
		var src = jc( '#'+_mon.obj )._img.src.split('/');
		var mon = src[src.length-1];
		
		jc.start('page',true);
		var monster=new Image();
		monster.src='./images/monster1'+ mon.findNum()[0] + '.png';
		
		monster.onload=function(){
			jc.start('page');
			jc.image(monster, _this.position[option.a][0], _this.position[option.a][1], _this.mon['m' + mon.findNum()[0]][0], _this.mon['m' + mon.findNum()[0]][1] ).id(_mon.obj+'d').level(1);

			var i=1;
			
			_mon.die = {};
			_mon.die[_mon.obj+'d'] = setInterval(function(){
				i++;
				jc('#'+_mon.obj+'d' ).opacity(1-i/40);
				jc('#'+_mon.obj+'d' ).scale((1+i/8000),(1+i/8000));
				if(1-i/40<0){
					jc('#'+_mon.obj+'d' ).del();
					clearInterval(_mon.die[_mon.obj+'d']);
				}
			},60);
			
			jc('#'+_mon.obj ).del();
			
			_this.monomer[option.a] = undefined;
			_this.position[option.a][0] = 0;
			_this.position[option.a][1] = 0;
			
			
			for( var b in _this.monomer){
				if(_this.monomer[b]){
					return false;
				}
			}
			
			clearTimeout(_this.timeC);
			clearInterval(_this.countdown);

			if(option.next){
				setTimeout(function(){
					_this.score++;
					jc.clear();
					_this.next();
				},2000);
			}
			
		}
	};

	_this.next = function(){
		
		_this.position = {};
		_this.monomer = {};
		
		clearTimeout(_this.timeC);
		clearInterval(_this.countdown);
		clearInterval(_this.run);
		_this.runing();
		
		_this.timeC = setTimeout(function(){
			if(_this.num<=0){
				alertWin( {text:'纳尼！你居然一个怪物都按不死！太逊了，给你一个机会，再来一次！',notshare:true} );
			}else{
				alertWin( {text:'恭喜你消灭了'+ _this.num +'只怪物！'} );
			}
			
			for( var a in _this.monomer){
				
				try{
					_this.monomer[a].Stop({a:a});
				}
				catch(err){
					console.log(err.name,err.message);
				}
			};
			
			clearInterval(_this.countdown);
			document.ontouchstart = null;

		},(_this.time[0]+1)*1000);
		
		s('time').innerHTML = _this.time[0] + '秒';
		var time = 1;
		_this.countdown = setInterval(function(){
			s('time').innerHTML = _this.time[0]-time + '秒';
			time++;
		},1000);
		
		var i=0;
		
		create();
		function create(){
			var r = 200
			var clockwise = Math.round( Math.random());
			if(clockwise){
				var j = 3;
			}else{
				var j = -3;
			}
			
			setTimeout(function(){
				_this.mon["mon" + getNum({
					min:0,
					max:4,
					num:1
				})[0]]({
					canvas:'page',
					id:"span"+i+_this.score
				});

				_this.monomer["span"+i + _this.score] = new monomer({
					obj:"span"+i+_this.score,
					jd:j,
					r:r,
					clockwise:clockwise
				});

				i++;
				if(i<_this.monNum[_this.score]){
					create();
				}
			},200);
		}
	};

}

gamePage.prototype.runing = function(){
	var _this = this;
	
	_this.run = setInterval(function(){
		for(var a in _this.monomer){
			if(_this.monomer[a] && _this.monomer[a].timeC){
				_this.monomer[a].run();
			};
		};
	},_this.speed);
	
};

gamePage.prototype.int = function(){
	var _this = this;
	_this.score = 0;
	_this.w = view().w-50;
	_this.h = view().h -50;
	_this.monomer = {};
	_this.position = {};
	_this.num = 0;
	clearTimeout(_this.timeC);
	clearInterval(_this.countdown);
	s('score').innerHTML = 'X' + Number(_this.num);
	jc.clear();
	_this.next();
};

gamePage.prototype.bindEvent = function(){
		
	var _this = this;

	document.ontouchstart = function(ev){
		var ev = ev || event,
			touchs = ev.changedTouches[0],
			touchY = touchs.pageY,
			touchX = touchs.pageX;
		ev.preventDefault();
		for ( var a in _this.position){	
			if( touchX >= _this.position[a][0]-50 && touchX <= (_this.position[a][0] + 150) && touchY >= _this.position[a][1]-50 && touchY <= (_this.position[a][1] + 150)){
				_this.monomer[a].Stop({
					a:a,
					next:true
				});
				return false;
			}
		}
		
		shake();
		function shake(){
			var div = document.createElement('div');
			div.className = 'bg';
			div.id = 'bg';
			document.body.appendChild(div);
			addClass(document.body, 'shake');
			stopPP(div);
			setTimeout(function(){
				removeClass(document.body, 'shake');
				remove( div );
			},1000);
		}
	};

	// bind(document,'touchstart',function(ev){
	// 	var ev = ev || event;
	// 	ev.preventDefault();
		
	// 	var touchs = ev.changedTouches[0];
	// 	var touchY = touchs.pageY;
	// 	var touchX = touchs.pageX;
		
	// 	for ( var a in _this.position){
			
	// 		if( touchX >= _this.position[a][0]-50 && touchX <= (_this.position[a][0] + 150) && touchY >= _this.position[a][1]-50 && touchY <= (_this.position[a][1] + 150)){
	// 			_this.monomer[a].Stop({a:a,next:true});
	// 			return false;
	// 		}
	// 	}
		
	// 	shake();
	// 	function shake(){
	// 		var div = document.createElement('div');
	// 		div.className = 'bg';
	// 		div.id = 'bg';
	// 		document.body.appendChild(div);
	// 		addClass(document.body, 'shake');
	// 		stopPP(div);
	// 		setTimeout(function(){
	// 			removeClass(document.body, 'shake');
	// 			remove( div );
	// 		},1000);
	// 	}
	// });

};

gamePage.prototype.begin = function(){
	var _this = this;
	var div = document.createElement('div');
	div.className = 'alert';
	div.innerHTML = '<em>\
	-<b>游戏规则</b>-<br/>\
	当小怪物飞出来时，翘起你的手指，瞄准后按死“盗版小怪物”们！\
一定要按准哦……<br/>\
	</em><button>开始游戏</button>';
	div.id = 'begin';
	document.body.appendChild(div);
	div.getElementsByTagName('button')[0].ontouchstart = function( ev ){
		var ev = ev || event;
		ev.stopPropagation ? ev.stopPropagation() : ev.cancelBubble = true;
		_this.next();
		musicShow();
		remove(div);
		_this.bindEvent();
	};
};

function alertWin( option ){
	if(option.text){
		var win = document.createElement('div');
		win.className = 'scrollBg';
		win.id = 'scrollBg';
		
		if(option.notshare){
			win.innerHTML = '<div class="alert"><span>'+ option.text +'</span><button>再来一次</button></div>';
		}else{
			win.innerHTML = '<div class="alert"><span>'+ option.text +'</span><a href="javascript:;">分享</a><button>再来一次</button></div>';
		}
		
		document.body.appendChild(win);
		win.getElementsByTagName('button')[0].ontouchstart = function( ev ){
			var ev = ev || event;
			ev.stopPropagation ? ev.stopPropagation() : ev.cancelBubble = true;
			remove(win);
			var game = new gamePage();
			game.begin();
			game.int();
			game.bindEvent();
			s('prompt') && remove(s('prompt'));			
		};
		
		if(win.getElementsByTagName('a')[0]){
			win.getElementsByTagName('a')[0].ontouchstart = function( ev ){				
				var ev = ev || event;
				ev.stopPropagation ? ev.stopPropagation() : ev.cancelBubble = true;
				showPrompt();
			};
		}
	}
}

function showPrompt( option ){
	s('scrollBg').style.opacity = 0;
	var div = document.createElement('div');
	div.className = 'prompt';
	div.innerHTML = '';
	div.id = 'prompt';
	document.body.appendChild(div);
	
	div.ontouchend = function(){
		s('scrollBg').style.opacity = 1;
		remove(div);
	};
	
}


function musicShow(){
	var au = s('gameMusic').getElementsByTagName('audio')[0];
	au.autoPlay;
	au.play();
	
	stopPP(s('gameMusic'));
	
	bind(s('gameMusic'),'touchstart',function(){
		if(au.paused){
			au.play();
			addClass(s('gameMusic'), 'music');
			removeClass(s('gameMusic'),'musicStop');
		}
		else{
			au.pause();
			removeClass(s('gameMusic'), 'music');
			addClass(s('gameMusic'),'musicStop');
		}
	});
}

function stopPP(obj) { //阻止点击事件冒泡
    bind(obj, 'touchstart', function(ev) {
        var ev = ev || event;
        //IE用cancelBubble=true来阻止而FF下需要用stopPropagation方法
        ev.stopPropagation ? ev.stopPropagation() : ev.cancelBubble = true;
    });
}

document.ontouchstart = function( ev ){
	ev.preventDefault();		
};

module.exports = gamePage;





