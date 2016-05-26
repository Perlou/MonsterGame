/**
 * @author Perlou
 * @index.js
 */

'use strict';

// css
// require('./styles/App.css');
// require('./styles/animation.css');
require('./styles/move.css');
require('./styles/common.css');
//js
var gamePage = require('./js/game');

var utils = require('./js/utils'),
	bind = utils.bind,
	removeClass = utils.removeClass,
	addClass = utils.addClass,
	remove = utils.remove,
	view = utils.view,
	getByClass = utils.getByClass,
	s = utils.s;

var loadImg = [
	require('./images/arrow2.png'),
	require('./images/bgStart.png'),
	require('./images/rocket.png'),
	require('./images/thanks.png'),
	require('./images/widthyou.png')
];

var loadF = false;
var imgNum = 0;

loading();
changePage();
musicShow();

function loading(){
	var loadNum = 0,
		oLoading = document.getElementById('ProgressBar').getElementsByTagName('span')[0];

	s('animation').style.opacity = 1;

	for(var i=0; i<loadImg.length; i++){
		var aImg = document.createElement('img');
		aImg.src = loadImg[i];

		aImg.onload = function(){
			loadNum++;
			oLoading.style.width = Math.floor(loadNum/loadImg.length) * 100 + '%';

			if(loadNum == loadImg.length){
				loadF = true;
				remove(oLoading.parentNode);
			}

		}

	}

}

/**
 * {Func} changePage
 */
function changePage(){
	
	var off = true,
		oAnSection = s('animation'),
		section = oAnSection.getElementsByTagName('section'),	
		now = getByClass(document, 'section', 'sectionIn')[0],
		index = 0,	
		downY = 0;

	gameBegin();	

	bind(oAnSection, 'touchstart', function(ev){
		ev = ev || event;
		ev.preventDefault();
		var touchs = ev.changedTouches[0];
		downY = touchs.pageY;
	});
	
	bind(oAnSection, 'touchend', function(ev){
		ev = ev || event;
		var touchs = ev.changedTouches[0];
		if(downY - touchs.pageY > 40 && off && loadF){
			c( -1 );
		}else if(downY - touchs.pageY < -40 && off && loadF){
			c( +1 );
		}
	});
	
	bind(s('start'), 'touchend', function(ev){
		gameBegin();
	});

	function c(num){
		
		if(index == 0 && num == 1 ){
			return false;
		}
		
		if(index == 3 && num == -1 ){
			gameBegin();
			// window.location.href = 'game.html';
		}
		
		removeClass(section[index], 'sectionIn');
		addClass(section[index], 'sectionOut');
		off = false;
		setTimeout(function(){
			removeClass(section[index], 'sectionOut');
			addClass(section[index], 'sectionHid');
			removeClass(section[index - num], 'sectionHid');
			addClass(section[index - num], 'sectionIn');
			index = index - num;
			off = true;
		},600);
	}

	function gameBegin(){
		var au = s('anMusic').getElementsByTagName('audio')[0];

		setTimeout(function(){
			oAnSection.style.display = 'none';
			au.pause();

			s('game').style.display = 'block';
			setTimeout(function(){
				s('game').style.opacity = 1;
			},60);
			
			// game
			var game = new gamePage();
			game.begin();

		},100);

	}
	
};

function musicShow(){
	var au = s('anMusic').getElementsByTagName('audio')[0];
	
	au.autoplay = true;
	au.play();
	
	bind(s('anMusic'),'touchstart',function(){
		if(au.paused){
			au.play();
			addClass(s('anMusic'), 'bgMusic');
			removeClass(s('anMusic'),'bgMusicStop');
		}
		else{
			au.pause();
			removeClass(s('anMusic'), 'bgMusic');
			addClass(s('anMusic'),'bgMusicStop');
		}
	});
}





// changePage();
// musicShow();
// loading();

// var game = new gamePage;
// console.log(game);
// game.begin();

// function changePage(){
// 	var section = document.getElementsByTagName('section'),
// 		pageDown = 0,
// 		pageUp = 0;

// 	bind(document, 'touchstart', function(ev){
// 		var ev = ev || event;
// 		pageDown = ev.changedTouches[0].pageY;
// 	});

// 	bind(document, 'touchend', function(ev){
// 		var ev = ev || event;
// 		pageUp = ev.changedTouches[0].pageY;

// 		if(pageUp > pageDown){
// 			console.log('xia');
// 		}else if(pageUp < pageDown){
// 			removeClass(section[0], 'sectionIn');
// 			addClass(section[0], 'sectionOut');
// 			console.log('shang');
// 		}else{
// 			console.log('zhong');
// 			return;
// 		}

// 	});

// }

// function musicShow(){
// 	var oAnMusic = document.getElementById('anMusic'),
// 		au = oAnMusic.getElementsByTagName('audio')[0];

// 	bind(oAnMusic,'touchstart',function(ev){
// 		var ev = ev || event;
// 		console.log(ev);
// 		if(au.paused){
// 			au.play();
// 			removeClass(oAnMusic, 'musicStop');
// 			addClass(oAnMusic, 'musicRun');
// 		}else{
// 			au.pause();
// 			removeClass(oAnMusic, 'musicRun');
// 			addClass(oAnMusic, 'musicStop');
// 		}
// 	})
// }

// function loading(){
// 	var loadNum = 0,
// 		oLoading = document.getElementById('loading').getElementsByTagName('span')[0];

// 	for(var i=0; i<loadImg.length; i++){
// 		var aImg = document.createElement('img');
// 		aImg.src = loadImg[i];

// 		aImg.onload = function(){
// 			loadNum++;
// 			oLoading.style.width = Math.floor(loadNum/loadImg.length) * 100 + '%';

// 			if(loadNum == loadImg.length){
// 				remove(oLoading.parentNode);
// 			}

// 		}

// 	}

// }
