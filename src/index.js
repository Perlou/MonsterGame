/**
 * @author Perlou
 * @index.js
 */

'use strict';

//css
require('./styles/App.css');
require('./styles/animation.css');
//js
var gamePage = require('./js/game');
var utils = require('./js/utils'),
	bind = utils.bind,
	removeClass = utils.removeClass,
	addClass = utils.addClass,
	remove = utils.remove,
	view = utils.view;

var loadImg = [
	require('./images/arrow2.png'),
	require('./images/bgStart.png'),
	require('./images/rocket.png'),
	require('./images/thanks.png'),
	require('./images/widthyou.png')
];

// changePage();
musicShow();
loading();

var game = new gamePage;

function changePage(){
	var section = document.getElementsByTagName('section'),
		pageDown = 0,
		pageUp = 0;

	bind(document, 'touchstart', function(ev){
		var ev = ev || event;
		pageDown = ev.changedTouches[0].pageY;
	});

	bind(document, 'touchend', function(ev){
		var ev = ev || event;
		pageUp = ev.changedTouches[0].pageY;

		if(pageUp > pageDown){
			console.log('xia');
		}else if(pageUp < pageDown){
			removeClass(section[0], 'sectionIn');
			addClass(section[0], 'sectionOut');
			console.log('shang');
		}else{
			console.log('zhong');
			return;
		}

	});

}

function musicShow(){
	var oAnMusic = document.getElementById('anMusic'),
		au = oAnMusic.getElementsByTagName('audio')[0];

	bind(oAnMusic,'touchstart',function(ev){
		var ev = ev || event;
		console.log(ev);
		if(au.paused){
			au.play();
			removeClass(oAnMusic, 'musicStop');
			addClass(oAnMusic, 'musicRun');
		}else{
			au.pause();
			removeClass(oAnMusic, 'musicRun');
			addClass(oAnMusic, 'musicStop');
		}
	})
}

function loading(){
	var loadNum = 0,
		oLoading = document.getElementById('loading').getElementsByTagName('span')[0];

	for(var i=0; i<loadImg.length; i++){
		var aImg = document.createElement('img');
		aImg.src = loadImg[i];

		aImg.onload = function(){
			loadNum++;
			oLoading.style.width = Math.floor(loadNum/loadImg.length) * 100 + '%';

			if(loadNum == loadImg.length){
				remove(oLoading.parentNode);
			}

		}

	}

}
