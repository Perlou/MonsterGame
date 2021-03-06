/*!
 * jCanvaScript JavaScript Library v 1.5.18
 * http://jcscript.com/
 *
 * Copyright 2012, Alexander Savin
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function(ab, z) {
	var ad = [],
		ai = Math,
		f = ai.PI,
		v = f * 2,
		X = 0,
		S = 0,
		N = false,
		ae = false,
		V = /[A-z]+?/,
		Q = /\d.\w\w/,
		a = ab.navigator.userAgent.match(/Firefox\/\w+\.\w+/i),
		E = 180 / f,
		U = ai.max,
		i = ai.min,
		y = ai.cos,
		L = ai.sin,
		O = ai.floor,
		p = ai.round,
		Z = ai.abs,
		Y = ai.pow,
		ap = ai.sqrt,
		M = 1000 / 60,
		c = (function() {
			return ab.requestAnimationFrame || ab.webkitRequestAnimationFrame || ab.mozRequestAnimationFrame || ab.oRequestAnimationFrame || ab.msRequestAnimationFrame ||
			function(ar, m) {
				return setTimeout(ar, M)
			}
		})(),
		I = (function() {
			return ab.cancelAnimationFrame || ab.webkitCancelRequestAnimationFrame || ab.mozCancelRequestAnimationFrame || ab.oCancelRequestAnimationFrame || ab.msCancelRequestAnimationFrame || clearTimeout
		})();
	if (a != "" && a !== null) {
		var A = (parseInt(a[0].split(/[ \/\.]/i)[1]) < 7)
	}
	function ah(au, ar, aw) {
		var ax = ad[au].layers[ar].objs,
			ay = ad[au].layers[ar].grdntsnptrns,
			at = ax.length,
			av = ay.length;
		aw = aw.slice(1);
		for (var m = 0; m < at; m++) {
			if (ax[m].optns.id == aw) {
				return ax[m]
			}
		}
		for (m = 0; m < av; m++) {
			if (ay[m].optns.id == aw) {
				return ay[m]
			}
		}
		return false
	}
	function al(at, ar, au, av) {
		var ax = ad[at].layers[ar].objs,
			ay = ad[at].layers[ar].grdntsnptrns,
			m = av.slice(1).split(".");
		aw(au, m, ax);
		aw(au, m, ay);
		return au;

		function aw(aH, aC, aD) {
			var aE = aD.length,
				aF, aA, aB, az;
			for (aB = 0; aB < aE; aB++) {
				aF = aD[aB]._name.split(" ");
				if (aC.length > aF.length) {
					continue
				}
				var aG = aC.concat();
				for (aA = 0; aA < aF.length; aA++) {
					for (az = 0; az < aG.length; az++) {
						if (aF[aA] === aG[az]) {
							aG.splice(az, 1);
							az--;
							continue
						}
					}
					if (!aG.length) {
						aH.elements.push(aD[aB]);
						break
					}
				}
			}
		}
	}
	function B(au, ar, av) {
		var ax = ad[au].layers[ar].objs,
			ay = ad[au].layers[ar].grdntsnptrns,
			at = ax.length,
			aw = ay.length;
		for (var m = 0; m < at; m++) {
			av.elements.push(ax[m])
		}
		for (m = 0; m < aw; m++) {
			av.elements.push(ay[m])
		}
		return av
	}
	var P = function(aD, m) {
			if (aD === z) {
				return this
			}
			if (typeof aD == "object") {
				m = aD;
				aD = z
			}
			var aC = -1,
				au = -1,
				ar = ad.length,
				aB = G(),
				ay, av, at, az, ax, aw, aA;
			if (m === z) {
				if (aD.charAt(0) === "#") {
					for (ay = 0; ay < ar; ay++) {
						aA = ad[ay].layers.length;
						for (av = 0; av < aA; av++) {
							aw = ah(ay, av, aD);
							if (aw) {
								return aw
							}
						}
					}
				}
				if (aD.charAt(0) === ".") {
					for (ay = 0; ay < ar; ay++) {
						aA = ad[ay].layers.length;
						for (av = 0; av < aA; av++) {
							aB = al(ay, av, aB, aD)
						}
					}
				}
			} else {
				if (m.canvas !== z) {
					for (ay = 0; ay < ar; ay++) {
						if (ad[ay].optns.id == m.canvas) {
							aC = ay;
							at = ad[ay];
							break
						}
					}
				}
				if (m.layer !== z) {
					if (aC != -1) {
						aA = at.layers.length;
						for (ay = 0; ay < aA; ay++) {
							if (at.layers[ay].optns.id == m.layer) {
								au = ay;
								az = at.layers[ay];
								break
							}
						}
					} else {
						for (ay = 0; ay < ar; ay++) {
							ax = ad[ay].layers;
							aA = ax.length;
							for (av = 0; av < aA; av++) {
								if (ax[av].optns.id == m.layer) {
									aC = ay;
									au = av;
									at = ad[ay];
									az = at.layers[av];
									break
								}
							}
							if (az > -1) {
								break
							}
						}
					}
				}
				if (au < 0 && aC < 0) {
					return G()
				}
				if (au < 0) {
					ax = at.layers;
					aA = ax.length;
					if (aD === z) {
						for (av = 0; av < aA; av++) {
							aB = B(aC, av, aB)
						}
					} else {
						if (aD.charAt(0) === "#") {
							for (av = 0; av < aA; av++) {
								aw = ah(aC, av, aD);
								if (aw) {
									return aw
								}
							}
						} else {
							if (aD.charAt(0) === ".") {
								for (av = 0; av < aA; av++) {
									aB = al(aC, av, aB, aD)
								}
							}
						}
					}
				} else {
					if (aD === z) {
						aB = B(aC, au, aB)
					}
					if (aD.charAt(0) === "#") {
						return ah(aC, au, aD)
					}
					if (aD.charAt(0) === ".") {
						aB = al(aC, au, aB, aD)
					}
				}
			}
			if (m !== z) {
				if (m.attrs !== z || m.fns !== z) {
					return aB.find(m)
				}
			}
			if (aB.elements.length) {
				return aB
			}
			return G()
		};

	function k(ar) {
		var m = ar.optns;
		ar.matrix(o(o(o(m.transformMatrix, m.translateMatrix), m.scaleMatrix), m.rotateMatrix));
		j(ar)
	}
	function af(m, at) {
		for (var ar in at) {
			if (m[ar] === z) {
				m[ar] = at[ar]
			}
		}
		return m
	}
	function j(m) {
		D(m).optns.redraw = 1
	}
	function F(av) {
		var ar = av.timeDiff,
			m = 1;
		for (var at = 0; at < this.animateQueue.length; at++) {
			var ay = this.animateQueue[at],
				ax = ay.duration,
				az = ay.easing,
				aw = ay.step,
				aA = ay.onstep,
				au = az.type == "in" || (az.type == "inOut" && m < 0.5),
				aD = az.type == "out" || (az.type == "inOut" && m > 0.5);
			ay.step += ar;
			m = aw / ax;
			for (var aF in ay) {
				if (this[aF] !== z && ay[aF]) {
					var aE = ay[aF],
						aC = aE.to,
						aB = aE.from;
					H(aF, this, ay);
					if (au) {
						this[aF] = (aC - aB) * h[az.fn](m, az) + aB
					}
					if (aD) {
						this[aF] = (aC - aB) * (1 - h[az.fn](1 - m, az)) + aB
					}
					if (aA) {
						aA.fn.call(this, aA)
					}
					if (aw >= ax) {
						this[aF] = aC;
						H(aF, this, ay);
						ay[aF] = false;
						ay.animateKeyCount--;
						if (!ay.animateKeyCount) {
							if (ay.animateFn) {
								ay.animateFn.apply(this)
							}
							this.animateQueue.splice(at, 1);
							at--
						}
					}
				}
			}
		}
		if (this.animateQueue.length) {
			j(this)
		} else {
			this.optns.animated = false
		}
		return this
	}
	function H(at, ar, m) {
		var av = ar[at];
		var au = m[at]["prev"];
		switch (at) {
		case "_rotateAngle":
			ar.rotate(av - au, ar._rotateX, ar._rotateY);
			break;
		case "_translateX":
			ar.translate(av - au, 0);
			break;
		case "_translateY":
			ar.translate(0, av - au);
			break;
		case "_translateToX":
			ar.translateTo(av, z);
			break;
		case "_translateToY":
			ar.translateTo(z, av);
			break;
		case "_scaleX":
			if (!au) {
				au = 1
			}
			ar.scale(av / au, 1);
			break;
		case "_scaleY":
			if (!au) {
				au = 1
			}
			ar.scale(1, av / au);
			break;
		default:
			return
		}
		m[at]["prev"] = av
	}
	function ag(at, ar, m) {
		at = at || ab.event;
		m[ar].event = at;
		m[ar].code = at.charCode || at.keyCode;
		m[ar].val = true;
		m.redraw = 1
	}
	function u(au, at, ar) {
		if (!ar[at].val) {
			return
		}
		au = au || ab.event;
		var m = {
			pageX: au.pageX || au.clientX,
			pageY: au.pageY || au.clientY
		};
		ar[at].event = au;
		ar[at].x = m.pageX - ar.x;
		ar[at].y = m.pageY - ar.y;
		ar.redraw = 1
	}
	function x(ar, m) {
		if (ar === z) {
			this["on" + m]()
		} else {
			this["on" + m] = ar
		}
		if (m == "mouseover" || m == "mouseout") {
			m = "mousemove"
		}
		D(this).optns[m].val = true;
		return this
	}
	function ao(ar, m) {
		if (ar === z) {
			this[m]()
		} else {
			this[m] = ar
		}
		return this
	}
	var h = {
		linear: function(m, ar) {
			return m
		},
		exp: function(m, ar) {
			var at = ar.n || 2;
			return Y(m, at)
		},
		circ: function(m, ar) {
			return 1 - ap(1 - m * m)
		},
		sine: function(m, ar) {
			return 1 - L((1 - m) * f / 2)
		},
		back: function(ar, at) {
			var au = at.n || 2;
			var m = at.x || 1.5;
			return Y(ar, au) * ((m + 1) * ar - m)
		},
		elastic: function(av, aw) {
			var ax = aw.n || 2;
			var at = aw.m || 20;
			var au = aw.k || 3;
			var ar = aw.x || 1.5;
			return Y(ax, 10 * (av - 1)) * y(at * av * f * ar / au)
		},
		bounce: function(at, aw) {
			var ax = aw.n || 4;
			var ar = aw.b || 0.25;
			var av = [1];
			for (var au = 1; au < ax; au++) {
				av[au] = av[au - 1] + Y(ar, au / 2)
			}
			var m = 2 * av[ax - 1] - 1;
			for (au = 0; au < ax; au++) {
				if (m * at >= (au > 0 ? 2 * av[au - 1] - 1 : 0) && m * at <= 2 * av[au] - 1) {
					return Y(m * (at - (2 * av[au] - 1 - Y(ar, au / 2)) / m), 2) + 1 - Y(ar, au)
				}
			}
			return 1
		}
	},
		g = {
			color: {
				fn: function(ax, m, at, aw) {
					var ar, av, au;
					at = at[aw];
					for (av = 0; av < ax; av++) {
						for (au = 0; au < m; au++) {
							ar = this.getPixel(av, au);
							ar[at[0]] = ar[at[0]] * 2 - ar[at[1]] - ar[at[2]];
							ar[at[1]] = 0;
							ar[at[2]] = 0;
							ar[at[0]] = ar[at[0]] > 255 ? 255 : ar[at[0]];
							this.setPixel(av, au, ar)
						}
					}
				},
				matrix: {
					red: [0, 1, 2],
					green: [1, 0, 2],
					blue: [2, 0, 1]
				}
			},
			linear: {
				fn: function(ar, aC, aA, az) {
					var aB = [],
						au, ay, ax, aw, av, at;
					aA = aA[az];
					av = aA.length;
					at = aA[0].length;
					for (ay = 0; ay < ar; ay++) {
						aB[ay] = [];
						for (ax = 0; ax < aC; ax++) {
							aB[ay][ax] = [0, 0, 0, 1];
							for (av = 0; av < 3; av++) {
								for (at = 0; at < 3; at++) {
									au = this.getPixel(ay - parseInt(av / 2), ax - parseInt(at / 2));
									for (aw = 0; aw < 3; aw++) {
										aB[ay][ax][aw] += au[aw] * aA[av][at]
									}
								}
							}
						}
					}
					for (ay = 0; ay < ar; ay++) {
						for (ax = 0; ax < aC; ax++) {
							this.setPixel(ay, ax, aB[ay][ax])
						}
					}
				},
				matrix: {
					sharp: [
						[-0.375, -0.375, -0.375],
						[-0.375, 4, -0.375],
						[-0.375, -0.375, -0.375]
					],
					blur: [
						[0.111, 0.111, 0.111],
						[0.111, 0.111, 0.111],
						[0.111, 0.111, 0.111]
					]
				}
			}
		};

	function o(ar, m) {
		return [[(ar[0][0] * m[0][0] + ar[0][1] * m[1][0]), (ar[0][0] * m[0][1] + ar[0][1] * m[1][1]), (ar[0][0] * m[0][2] + ar[0][1] * m[1][2] + ar[0][2])], [(ar[1][0] * m[0][0] + ar[1][1] * m[1][0]), (ar[1][0] * m[0][1] + ar[1][1] * m[1][1]), (ar[1][0] * m[0][2] + ar[1][1] * m[1][2] + ar[1][2])]]
	}
	function t(at, au, ar) {
		return {
			x: (at * ar[0][0] + au * ar[0][1] + ar[0][2]),
			y: (at * ar[1][0] + au * ar[1][1] + ar[1][2])
		}
	}
	function ac(at, au, ar) {
		return {
			x: (at * ar[1][1] - au * ar[0][1] + ar[0][1] * ar[1][2] - ar[1][1] * ar[0][2]) / (ar[0][0] * ar[1][1] - ar[1][0] * ar[0][1]),
			y: (-at * ar[1][0] + au * ar[0][0] - ar[0][0] * ar[1][2] + ar[1][0] * ar[0][2]) / (ar[0][0] * ar[1][1] - ar[1][0] * ar[0][1])
		}
	}
	function b(aA, aF, aE) {
		if (aE == "poor") {
			return aF
		}
		var aB = {
			x: aF.x,
			y: aF.y
		},
			aG = {
				x: aF.x + aF.width,
				y: aF.y + aF.height
			},
			ax = o(aA.matrix(), aj(aA).matrix()),
			aC = t(aB.x, aB.y, ax),
			az = t(aG.x, aB.y, ax),
			av = t(aB.x, aG.y, ax),
			au = t(aG.x, aG.y, ax),
			aH = [
				[aC.x, aC.y],
				[az.x, az.y],
				[av.x, av.y],
				[au.x, au.y]
			];
		if (aE == "coords") {
			return aH
		}
		var ay, aw, at = ay = aC.x,
			ar = aw = aC.y;
		for (var aD = 0; aD < 4; aD++) {
			if (at < aH[aD][0]) {
				at = aH[aD][0]
			}
			if (ar < aH[aD][1]) {
				ar = aH[aD][1]
			}
			if (ay > aH[aD][0]) {
				ay = aH[aD][0]
			}
			if (aw > aH[aD][1]) {
				aw = aH[aD][1]
			}
		}
		return {
			x: ay,
			y: aw,
			width: at - ay,
			height: ar - aw
		}
	}
	function R(ar, m, at) {
		if (at == "poor") {
			return m
		}
		return t(m.x, m.y, o(ar.matrix(), aj(ar).matrix()))
	}
	function s(au) {
		var aw = {
			color: {
				val: au,
				notColor: z
			},
			r: 0,
			g: 0,
			b: 0,
			a: 1
		};
		if (au.id !== z) {
			aw.color.notColor = {
				level: au._level,
				canvas: au.optns.canvas.number,
				layer: au.optns.layer.number
			};
			return aw
		}
		if (au.r !== z) {
			aw = af(au, {
				r: 0,
				g: 0,
				b: 0,
				a: 1
			});
			aw.color = {
				val: "rgba(" + aw.r + "," + aw.g + "," + aw.b + "," + aw.a + ")",
				notColor: z
			};
			return aw
		}
		if (au.charAt(0) == "#") {
			if (au.length > 4) {
				aw.r = parseInt(au.substr(1, 2), 16);
				aw.g = parseInt(au.substr(3, 2), 16);
				aw.b = parseInt(au.substr(5, 2), 16)
			} else {
				var m = au.charAt(1),
					ay = au.charAt(2),
					az = au.charAt(3);
				aw.r = parseInt(m + m, 16);
				aw.g = parseInt(ay + ay, 16);
				aw.b = parseInt(az + az, 16)
			}
		} else {
			var ax = au.split(",");
			if (ax.length == 4) {
				var av = ax[0].split("(");
				var at = ax[3].split(")");
				aw.r = parseInt(av[1]);
				aw.g = parseInt(ax[1]);
				aw.b = parseInt(ax[2]);
				aw.a = parseFloat(at[0])
			}
			if (ax.length == 3) {
				av = ax[0].split("(");
				var ar = ax[2].split(")");
				aw.r = parseInt(av[1]);
				aw.g = parseInt(ax[1]);
				aw.b = parseInt(ar[0])
			}
		}
		aw.color.notColor = z;
		return aw
	}
	function C(m) {
		if (m.getBoundingClientRect) {
			return r(m)
		} else {
			return aq(m)
		}
	}
	function aq(m) {
		var at = 0,
			ar = 0;
		while (m) {
			at = at + parseInt(m.offsetTop);
			ar = ar + parseInt(m.offsetLeft);
			m = m.offsetParent
		}
		return {
			top: at,
			left: ar
		}
	}
	function r(au) {
		var ax = au.getBoundingClientRect();
		var ay = document.body || {};
		var ar = document.documentElement;
		var m = ab.pageYOffset || ar.scrollTop || ay.scrollTop;
		var av = ab.pageXOffset || ar.scrollLeft || ay.scrollLeft;
		var aw = ar.clientTop || ay.clientTop || 0;
		var az = ar.clientLeft || ay.clientLeft || 0;
		var aA = ax.top + m - aw;
		var at = ax.left + av - az;
		return {
			top: p(aA),
			left: p(at)
		}
	}
	function ak(ar, m) {
		q(ar, m);
		am(ar, m)
	}
	function am(ar, m) {
		if (!ar.optns.focused) {
			return
		}
		if (m.keyDown.val != false) {
			if (typeof ar.onkeydown == "function") {
				ar.onkeydown(m.keyDown)
			}
		}
		if (m.keyUp.val != false) {
			if (typeof ar.onkeyup == "function") {
				ar.onkeyup(m.keyUp)
			}
		}
		if (m.keyPress.val != false) {
			if (typeof ar.onkeypress == "function") {
				ar.onkeypress(m.keyPress)
			}
		}
	}
	function K(ar, ax, av) {
		var ay = {};
		var m = D(ar);
		var az = m.optns.ctx;
		var au = m.layers[ar.optns.layer.number];
		ay.x = ax;
		ay.y = av;
		if (A) {
			ay = ac(ax, av, au.matrix());
			ay = ac(ay.x, ay.y, ar.matrix())
		}
		if (az.isPointInPath === z || ar._img !== z || ar._imgData !== z || ar._proto == "text") {
			var aw = ar.getRect("poor");
			var at = ac(ax, av, o(ar.matrix(), au.matrix()));
			if (aw.x <= at.x && aw.y <= at.y && (aw.x + aw.width) >= at.x && (aw.y + aw.height) >= at.y) {
				return ay
			}
		} else {
			if (az.isPointInPath(ay.x, ay.y)) {
				return ay
			}
		}
		return false
	}
	function q(at, m) {
		var ay = false,
			ar = m.mousemove,
			aw = m.mousedown,
			aA = m.mouseup,
			au = m.click,
			az = m.dblclick,
			ax = ar.x || aw.x || aA.x || az.x || au.x,
			av = ar.y || aw.y || aA.y || az.y || au.y;
		if (ax != false) {
			ay = K(at, ax, av)
		}
		if (ay) {
			if (ar.x != false) {
				ar.object = at
			}
			if (aw.x != false) {
				aw.objects[aw.objects.length] = at
			}
			if (au.x != false) {
				au.objects[au.objects.length] = at
			}
			if (az.x != false) {
				az.objects[az.objects.length] = at
			}
			if (aA.x != false) {
				aA.objects[aA.objects.length] = at
			}
			m.point = ay
		}
	}
	function aj(m) {
		return D(m).layers[m.optns.layer.number]
	}
	function D(m) {
		return ad[m.optns.canvas.number]
	}
	function e(ay, m, au) {
		j(m);
		var ar = m.optns.canvas;
		var at = m.optns.layer;
		if (ay === z) {
			return at.id
		}
		if (at.id == ay) {
			return m
		}
		var av = {
			i: ar.number,
			j: at.number
		};
		at.id = ay;
		var ax = P.layer(ay);
		var az = {
			i: ax.optns.canvas.number,
			j: ax.optns.number
		};
		var aw = ad[av.i].layers[av.j][au],
			aA = ad[az.i].layers[az.j][au];
		aw.splice(m.optns.number, 1);
		m._level = m.optns.number = aA.length;
		aA[m._level] = m;
		at.number = az.j;
		ar.number = az.i;
		ar.id = ax.optns.canvas.id;
		j(m);
		return m
	}
	function J(au, at) {
		for (var ar in at) {
			switch (typeof at[ar]) {
			case "function":
				if (ar.substr(0, 2) == "on") {
					break
				}
				if (au[ar] === z) {
					au[ar] = at[ar]
				}
				break;
			case "object":
				if (ar == "optns" || ar == "animateQueue") {
					break
				}
				if (ar == "objs" || ar == "grdntsnptrns") {
					for (var m in at[ar]) {
						if (at[ar].hasOwnProperty(m)) {
							at[ar][m].clone().layer(au.optns.id)
						}
					}
					break
				}
				if (!at[ar] || ar === "ctx") {
					continue
				}
				au[ar] = typeof at[ar].pop === "function" ? [] : {};
				J(au[ar], at[ar]);
				break;
			default:
				if (ar == "_level") {
					break
				}
				au[ar] = at[ar]
			}
		}
	}
	function n(aw, m, av) {
		j(m);
		var ar = m.optns.canvas;
		var au = m.optns.layer;
		if (aw === z) {
			return ad[ar.number].optns.id
		}
		if (ad[ar.number].optns.id == aw) {
			return m
		}
		var ax = {
			i: ar.number,
			j: au.number
		};
		P.canvas(aw);
		for (var at = 0; at < ad.length; at++) {
			var aA = ad[at];
			if (aA.optns.id == aw) {
				var ay = ad[ax.i].layers[ax.j][av],
					az = aA.layers[0][av];
				ay.splice(m.optns.number, 1);
				d(ay);
				m._level = m.optns.number = az.length;
				az[m._level] = m;
				au.number = 0;
				ar.number = at;
				ar.id = aA.optns.id;
				au.id = aA.layers[0].optns.id
			}
		}
		j(m);
		return m
	}
	function d(ar) {
		for (var m = 0; m < ar.length; m++) {
			ar[m].optns.number = m
		}
	}
	function l(ay, az, aA, at, ax) {
		var au = ay.length,
			m, ar, aw;
		for (var av = 0; av < au; av++) {
			m = ay[av].optns;
			ar = m.canvas;
			aw = m.layer;
			ar.id = at;
			ar.number = ax;
			aw.id = az;
			aw.number = aA
		}
	}
	function T(m) {
		m.sort(function(at, ar) {
			if (at._level > ar._level) {
				return 1
			}
			if (at._level < ar._level) {
				return -1
			}
			return 0
		});
		d(m);
		return m.length
	}
	function W(at) {
		var ar;
		do {
			ar = false;
			for (var m = 0; m < at.length; m++) {
				if (at[m].optns.deleted) {
					at.splice(m, 1);
					ar = true
				}
			}
		} while (ar);
		d(at);
		return at.length
	}
	var w = {};
	w.object = function() {
		this.getCenter = function(ar) {
			var at = this.getRect("poor"),
				m = {
					x: (at.x * 2 + at.width) / 2,
					y: (at.y * 2 + at.height) / 2
				};
			return R(this, m, ar)
		};
		this.position = function() {
			return t(this._x, this._y, o(this.matrix(), aj(this).matrix()))
		};
		this.buffer = function(aw) {
			var at = this.optns.buffer;
			if (aw === z) {
				if (at.val) {
					return at.cnv
				} else {
					return false
				}
			}
			if (at.val === aw) {
				return this
			}
			if (aw) {
				var ar = at.cnv = document.createElement("canvas"),
					m = at.ctx = ar.getContext("2d"),
					av = at.rect = this.getRect(),
					au = this.transform();
				ar.setAttribute("width", av.width);
				ar.setAttribute("height", av.height);
				at.x = this._x;
				at.y = this._y;
				at.dx = this._transformdx;
				at.dy = this._transformdy;
				this._x = this._y = 0;
				this.transform(1, 0, 0, 1, -av.x + at.dx, -av.y + at.dy, true);
				this.setOptns(m);
				J(at.optns = {}, D(this).optns);
				at.optns.ctx = m;
				this.draw(at.optns);
				this._x = at.x;
				this._y = at.y;
				this.transform(au[0][0], au[1][0], au[0][1], au[1][1], av.x, av.y, true);
				at.val = true
			} else {
				this.translate(-at.rect.x + at.dx, -at.rect.y + at.dy);
				this.optns.buffer = {
					val: false
				}
			}
			return this
		};
		this.clone = function(m) {
			var ar = new w[this._proto];
			w[this._proto].prototype.base.call(ar);
			J(ar, this);
			ar.layer(aj(this).optns.id);
			J(ar.optns.transformMatrix, this.optns.transformMatrix);
			J(ar.optns.translateMatrix, this.optns.translateMatrix);
			J(ar.optns.scaleMatrix, this.optns.scaleMatrix);
			J(ar.optns.rotateMatrix, this.optns.rotateMatrix);
			if (m === z) {
				return ar
			}
			return ar.animate(m)
		};
		this.shadow = function(ar) {
			for (var at in ar) {
				switch (at) {
				case "x":
					this._shadowX = ar.x;
					break;
				case "y":
					this._shadowY = ar.y;
					break;
				case "blur":
					this._shadowBlur = ar.blur;
					break;
				case "color":
					var m = s(ar.color);
					this._shadowColor = ar.color.val;
					this._shadowColorR = m.r;
					this._shadowColorG = m.g;
					this._shadowColorB = m.b;
					this._shadowColorA = m.a;
					break
				}
			}
			j(this);
			return this
		};
		this.setOptns = function(ar) {
			ar.globalAlpha = this._opacity;
			ar.shadowOffsetX = this._shadowX;
			ar.shadowOffsetY = this._shadowY;
			ar.shadowBlur = this._shadowBlur;
			ar.globalCompositeOperation = this._composite;
			var av = parseInt(this._shadowColorR),
				au = parseInt(this._shadowColorG),
				m = parseInt(this._shadowColorB),
				at = parseInt(this._shadowColorA * 100) / 100;
			if (this._shadowColorRPrev !== av || this._shadowColorGPrev !== au || this._shadowColorBPrev !== m || this._shadowColorAPrev !== at) {
				ar.shadowColor = this._shadowColor = "rgba(" + av + ", " + au + ", " + m + ", " + at + ")";
				this._shadowColorRPrev = av;
				this._shadowColorGPrev = au;
				this._shadowColorBPrev = m;
				this._shadowColorAPrev = at
			} else {
				ar.shadowColor = this._shadowColor
			}
			ar.transform(this._transform11, this._transform12, this._transform21, this._transform22, this._transformdx, this._transformdy);
			return this
		};
		this.up = function(ar) {
			if (ar === z) {
				ar = 1
			}
			if (ar == "top") {
				this.level(ar)
			} else {
				var m = aj(this).objs[this.optns.number + ar];
				if (m !== z) {
					ar = m._level + 1 - this._level
				}
				this.level(this._level + ar)
			}
			return this
		};
		this.down = function(ar) {
			if (ar == z) {
				ar = 1
			}
			if (ar == "bottom") {
				this.level(ar)
			} else {
				var m = aj(this).objs[this.optns.number - ar];
				if (m !== z) {
					ar = this._level - (m._level - 1)
				}
				this.level(this._level - ar)
			}
			return this
		};
		this.level = function(ar) {
			if (ar == z) {
				return this._level
			}
			var m = aj(this);
			if (ar == "bottom") {
				if (this.optns.number == 0) {
					ar = this._level
				} else {
					ar = m.objs[0]._level - 1
				}
			}
			if (ar == "top") {
				if (this.optns.number == m.objs.length) {
					ar = this._level
				} else {
					ar = m.objs[m.objs.length - 1]._level + 1
				}
			}
			this._level = ar;
			m.optns.anyObjLevelChanged = true;
			j(this);
			return this
		};
		this.del = function() {
			this.optns.deleted = true;
			aj(this).optns.anyObjDeleted = true;
			j(this)
		};
		this.focus = function(m) {
			if (m === z) {
				this.optns.focused = true;
				if (typeof this.onfocus == "function") {
					this.onfocus()
				}
			} else {
				this.onfocus = m
			}
			return this
		};
		this.blur = function(m) {
			if (m === z) {
				this.optns.focused = false;
				if (typeof this.onblur == "function") {
					this.onblur()
				}
			} else {
				this.onblur = m
			}
			return this
		};
		this.click = function(m) {
			return x.call(this, m, "click")
		};
		this.dblclick = function(m) {
			return x.call(this, m, "dblclick")
		};
		this.keypress = function(m) {
			return ao.call(this, m, "onkeypress")
		};
		this.keydown = function(m) {
			return ao.call(this, m, "onkeydown")
		};
		this.keyup = function(m) {
			return ao.call(this, m, "onkeyup")
		};
		this.mousedown = function(m) {
			return x.call(this, m, "mousedown")
		};
		this.mouseup = function(m) {
			return x.call(this, m, "mouseup")
		};
		this.mousemove = function(m) {
			return x.call(this, m, "mousemove")
		};
		this.mouseover = function(m) {
			return x.call(this, m, "mouseover")
		};
		this.mouseout = function(m) {
			return x.call(this, m, "mouseout")
		};
		this.attr = function(at, ar) {
			if (typeof at === "object") {
				var m = at
			} else {
				if (ar === z) {
					return this["_" + at]
				}
				m = {};
				m[at] = ar
			}
			return this.animate(m)
		};
		this.queue = function() {
			var at = this.animateQueue.length,
				m, aw, av, ay = 0,
				ar = 0,
				ax, au = arguments;
			for (aw = 0; aw < au.length; aw++) {
				if (typeof au[aw] == "function") {
					au[aw].apply(this);
					au[aw] = false;
					aw++;
					if (this.animateQueue.length > at) {
						for (av = at; av < this.animateQueue.length; av++) {
							m = this.animateQueue[av];
							if (m.duration !== z) {
								if (m.duration > ay) {
									ay = m.duration;
									ar = av
								}
								break
							}
						}
						if (ay) {
							m = this.animateQueue[ar];
							if (m.animateFn) {
								ax = m.animateFn;
								m.animateFn = function() {
									ax.apply(this);
									this.queue.apply(this, au)
								}
							} else {
								m.animateFn = function() {
									this.queue.apply(this, au)
								}
							}
							break
						}
					}
				}
			}
		};
		this.stop = function(au, av) {
			this.optns.animated = false;
			if (av === z) {
				av = false
			}
			if (au === z) {
				au = false
			}
			for (var at = 0; at < this.animateQueue.length; at++) {
				var m = this.animateQueue[at];
				if (av) {
					m.animateFn.call(this)
				}
				if (au) {
					for (var ar in m) {
						if (m[ar]["from"] !== z) {
							this[ar] = m[ar]["to"];
							H(ar, this, m)
						}
					}
				}
			}
			this.animateQueue = [];
			return this
		};
		this.animate = function(aB, m, av, aw, ax) {
			if (m === z) {
				m = 1
			} else {
				if (typeof m == "function") {
					ax = m;
					m = 1
				}
				if (typeof m == "object") {
					av = m;
					m = 1
				}
			}
			if (av === z) {
				av = {
					fn: "linear",
					type: "in"
				}
			} else {
				if (typeof av == "function") {
					ax = av;
					av = {
						fn: "linear",
						type: "in"
					}
				}
				if (av.type === z) {
					av.type = "in"
				}
			}
			if (aw === z) {
				aw = false
			} else {
				if (typeof aw == "function") {
					ax = aw;
					aw = false
				}
			}
			if (aB.scale !== z) {
				this._scaleX = this._scaleY = 1;
				if (typeof aB.scale != "object") {
					aB.scaleX = aB.scaleY = aB.scale
				} else {
					aB.scaleX = aB.scale.x || 1;
					aB.scaleY = aB.scale.y || 1
				}
			}
			if (aB.translate !== z) {
				this._translateX = this._translateY = 0;
				if (typeof aB.translate != "object") {
					aB.translateX = aB.translateY = aB.translate
				} else {
					aB.translateX = aB.translate.x || 0;
					aB.translateY = aB.translate.y || 0
				}
				aB.translate = z
			}
			if (aB.translateTo !== z) {
				var az = this.position();
				this._translateToX = az.x;
				this._translateToY = az.y;
				if (typeof aB.translateTo != "object") {
					aB.translateToX = aB.translateToY = aB.translateTo
				} else {
					aB.translateToX = aB.translateTo.x || 0;
					aB.translateToY = aB.translateTo.y || 0
				}
				aB.translateTo = z
			}
			if (aB.rotate !== z) {
				aB.rotateAngle = aB.rotate.angle;
				this._rotateAngle = 0;
				this._rotateX = aB.rotate.x || 0;
				this._rotateY = aB.rotate.y || 0;
				aB.rotate = z
			}
			if (aB.color !== z) {
				var at = s(aB.color);
				if (at.color.notColor) {
					this.optns.color.notColor = at.color.notColor
				} else {
					aB.colorR = at.r;
					aB.colorG = at.g;
					aB.colorB = at.b;
					aB.alpha = at.a
				}
				aB.color = z
			}
			if (aB.shadowColor !== z) {
				at = s(aB.shadowColor);
				aB.shadowColorR = at.r;
				aB.shadowColorG = at.g;
				aB.shadowColorB = at.b;
				aB.shadowColorA = at.a;
				aB.shadowColor = z
			}
			if (m > 1) {
				var au = this.animateQueue[this.animateQueue.length] = {
					animateKeyCount: 0
				};
				au.animateFn = ax || false;
				this.optns.animated = true;
				au.duration = m;
				au.step = 0;
				au.easing = av;
				au.onstep = aw
			}
			for (var aA in aB) {
				if (this["_" + aA] !== z && aB[aA] !== z) {
					var ar = aB[aA],
						ay = "_" + aA;
					if (ar != this[ay]) {
						if (ar.charAt) {
							if (aA == "string") {
								this._string = ar
							} else {
								if (ar.charAt(1) == "=") {
									ar = this[ay] + parseInt(ar.charAt(0) + "1") * parseInt(ar.substr(2))
								} else {
									if (!V.test(ar)) {
										ar = parseInt(ar)
									} else {
										this[ay] = ar
									}
								}
							}
						}
						if (m == 1) {
							this[ay] = ar
						} else {
							au[ay] = {
								from: this[ay],
								to: ar,
								prev: 0
							};
							au.animateKeyCount++
						}
					}
				}
			}
			if (m == 1) {
				if (aB.rotateAngle) {
					this.rotate(this._rotateAngle, this._rotateX, this._rotateY)
				}
				if (aB.translateX || aB.translateY) {
					this.translate(this._translateX, this._translateY)
				}
				if (aB.translateToX || aB.translateToY) {
					this.translate(this._translateToX, this._translateToY)
				}
				if (aB.scaleX || aB.scaleY) {
					this.scale(this._scaleX, this._scaleY)
				}
			}
			j(this);
			return this
		};
		this.matrix = function(ar) {
			if (ar === z) {
				return [[this._transform11, this._transform21, this._transformdx], [this._transform12, this._transform22, this._transformdy]]
			}
			this._transform11 = ar[0][0];
			this._transform21 = ar[0][1];
			this._transform12 = ar[1][0];
			this._transform22 = ar[1][1];
			this._transformdx = ar[0][2];
			this._transformdy = ar[1][2];
			return this
		};
		this.translateTo = function(m, az, ar, at, au, aw) {
			if (ar !== z) {
				return this.animate({
					translateTo: {
						x: m,
						y: az
					}
				}, ar, at, au, aw)
			}
			var ay = this.position(),
				ax = 0,
				av = 0;
			if (m !== z) {
				ax = m - ay.x
			}
			if (az !== z) {
				av = az - ay.y
			}
			return this.translate(ax, av)
		};
		this.translate = function(m, aw, au, av, at, ar) {
			if (au !== z) {
				return this.animate({
					translate: {
						x: m,
						y: aw
					}
				}, au, av, at, ar)
			}
			this.optns.translateMatrix = o(this.optns.translateMatrix, [
				[1, 0, m],
				[0, 1, aw]
			]);
			k(this);
			return this
		};
		this.scale = function(m, aw, au, av, at, ar) {
			if (au !== z) {
				return this.animate({
					scale: {
						x: m,
						y: aw
					}
				}, au, av, at, ar)
			}
			if (aw === z) {
				aw = m
			}
			this.optns.scaleMatrix = o(this.optns.scaleMatrix, [
				[m, 0, this._x * (1 - m)],
				[0, aw, this._y * (1 - aw)]
			]);
			k(this);
			return this
		};
		this.rotate = function(aA, ar, az, au, av, ax, ay) {
			if (au !== z) {
				return this.animate({
					rotate: {
						angle: aA,
						x: ar,
						y: az
					}
				}, au, av, ax, ay)
			}
			aA = aA / E;
			var aC = y(aA),
				aw = L(aA),
				at = 0,
				m = 0;
			if (ar !== z) {
				if (ar == "center") {
					var aB = this.getCenter("poor");
					if (az === z) {
						ar = aB.x;
						az = aB.y
					} else {
						ar = aB.x + az.x;
						az = aB.y + az.y
					}
				}
				at = -ar * (aC - 1) + az * aw;
				m = -az * (aC - 1) - ar * aw
			}
			this.optns.rotateMatrix = o(this.optns.rotateMatrix, [
				[aC, -aw, at],
				[aw, aC, m]
			]);
			k(this);
			return this
		};
		this.transform = function(aw, av, ay, ax, ar, m, au) {
			if (aw === z) {
				return this.matrix()
			}
			var at = this.optns;
			if (au !== z) {
				at.transformMatrix = [
					[aw, ay, ar],
					[av, ax, m]
				];
				at.rotateMatrix = [
					[1, 0, 0],
					[0, 1, 0]
				];
				at.scaleMatrix = [
					[1, 0, 0],
					[0, 1, 0]
				];
				at.translateMatrix = [
					[1, 0, 0],
					[0, 1, 0]
				]
			} else {
				at.transformMatrix = o(at.transformMatrix, [
					[aw, ay, ar],
					[av, ax, m]
				])
			}
			k(this);
			return this
		};
		this.beforeDraw = function(ar) {
			if (!this._visible) {
				return false
			}
			var m = ar.ctx;
			m.save();
			if (this.optns.clipObject) {
				var at = this.optns.clipObject;
				at._visible = true;
				if (at.optns.animated) {
					F.call(at, ar)
				}
				at.setOptns(m);
				m.beginPath();
				at.draw(m);
				m.clip()
			}
			this.setOptns(m);
			if (this.optns.animated) {
				F.call(this, ar)
			}
			m.beginPath();
			return true
		};
		this.clip = function(m) {
			if (m === z) {
				return this.optns.clipObject
			}
			aj(this).objs.splice(m.optns.number, 1);
			this.optns.clipObject = m;
			return this
		};
		this.afterDraw = function(m) {
			m.ctx.closePath();
			ak(this, m);
			m.ctx.restore();
			if (this.optns.clipObject) {
				w.shape.prototype.afterDraw.call(this.optns.clipObject, m)
			}
		};
		this.isPointIn = function(az, ax, ar) {
			var au = D(this).optns,
				aB = au.ctx,
				av = false,
				m = this.optns,
				at = false;
			if (ar !== z) {
				az -= au.x;
				ax -= au.y
			}
			if (m.animated) {
				av = true
			}
			m.animated = false;
			if (m.clipObject) {
				var ay = m.clipObject,
					aw = ay.optns;
				if (aw.animated) {
					at = true;
					aw.animated = false
				}
			}
			aj(this).setOptns(aB);
			this.beforeDraw(au);
			this.draw(aB);
			var aA = K(this, az, ax);
			aB.closePath();
			aB.restore();
			aB.setTransform(1, 0, 0, 1, 0, 0);
			m.animated = av;
			if (at) {
				aw.animated = at
			}
			return aA
		};
		this.layer = function(m) {
			return e(m, this, "objs")
		};
		this.canvas = function(m) {
			return n(m, this, "objs")
		};
		this.draggable = function(av, au, ax) {
			if (au === z && typeof av == "object" && av.optns === z) {
				au = av.params;
				ax = av.drag;
				var ar = av.start,
					ay = av.stop,
					aw = av.disabled;
				av = av.object
			}
			var at = this;
			var az = this.optns.drag;
			if (typeof au === "function") {
				ax = au;
				au = z
			}
			if (typeof av == "function") {
				ax = av;
				av = z
			}
			az.shiftX = 0;
			az.shiftY = 0;
			if (au !== z) {
				if (au.shiftX !== z) {
					az.shiftX = au.shiftX;
					au.shiftX = z
				}
				if (au.shiftY !== z) {
					az.shiftY = au.shiftY;
					au.shiftY = z
				}
			}
			if (av !== z) {
				if (av.id) {
					at = (au === z) ? av.visible(false) : av.animate(au).visible(false)
				}
				if (av == "clone") {
					at = this.clone(au).visible(false);
					az.type = "clone"
				}
			}
			az.val = true;
			az.x = this._x;
			az.y = this._y;
			az.dx = this._transformdx;
			az.dy = this._transformdy;
			az.object = at;
			az.params = au;
			az.drag = ax || false;
			az.start = ar || false;
			az.stop = ay || false;
			az.disabled = aw || false;
			var m = D(this).optns;
			m.mousemove.val = true;
			m.mousedown.val = true;
			m.mouseup.val = true;
			return this
		};
		this.droppable = function(m) {
			this.optns.drop.val = true;
			if (m !== z) {
				this.optns.drop.fn = m
			}
			return this
		};
		this.name = function(m) {
			return this.attr("name", m)
		};
		this.hasName = function(m) {
			var at = this.attr("name").split(" "),
				ar = 0;
			while (ar < at.length) {
				if (at[ar] === m) {
					return true
				}
				ar++
			}
			return false
		};
		this.addName = function(m) {
			var at = this.attr("name").split(" "),
				ar = 0;
			while (ar < at.length) {
				if (at[ar] === m) {
					return this
				}
				ar++
			}
			at.push(m);
			return this.attr("name", at.join(" "))
		};
		this.removeName = function(m) {
			var at = this.attr("name").split(" "),
				ar = 0;
			while (ar < at.length) {
				if (at[ar] === m) {
					at.splice(ar, 1);
					return this.attr("name", at.join(" "))
				}
				ar++
			}
			return this
		};
		this.visible = function(m) {
			return this.attr("visible", m)
		};
		this.composite = function(m) {
			return this.attr("composite", m)
		};
		this.id = function(m) {
			if (m === z) {
				return this.optns.id
			}
			this.optns.id = m;
			return this
		};
		this.opacity = function(m) {
			return this.attr("opacity", m)
		};
		this.fadeIn = function(at, au, ar, m) {
			return this.fadeTo(1, at, au, ar, m)
		};
		this.fadeOut = function(at, au, ar, m) {
			return this.fadeTo(0, at, au, ar, m)
		};
		this.fadeTo = function(au, at, av, ar, m) {
			if (at === z) {
				at = 600
			}
			return this.animate({
				opacity: au
			}, at, av, ar, m)
		};
		this.fadeToggle = function(at, au, ar, m) {
			if (this._opacity) {
				this.fadeOut(at, au, ar, m)
			} else {
				this.fadeIn(at, au, ar, m)
			}
			return this
		};
		this.instanceOf = function(m) {
			if (m === z) {
				return this._proto
			}
			return this instanceof w[m]
		};
		this.base = function(ar, aw, m) {
			if (typeof ar == "object") {
				ar = af(ar, {
					x: 0,
					y: 0,
					service: false
				});
				m = ar.service;
				aw = ar.y;
				ar = ar.x
			} else {
				if (m === z) {
					m = false
				}
			}
			var au = ad[X];
			this.optns = {
				animated: false,
				clipObject: false,
				drop: {
					val: false,
					fn: function() {}
				},
				drag: {
					val: false
				},
				layer: {
					id: au.optns.id + "Layer0",
					number: 0
				},
				canvas: {
					number: 0
				},
				focused: false,
				buffer: {
					val: false
				},
				rotateMatrix: [
					[1, 0, 0],
					[0, 1, 0]
				],
				scaleMatrix: [
					[1, 0, 0],
					[0, 1, 0]
				],
				translateMatrix: [
					[1, 0, 0],
					[0, 1, 0]
				],
				transformMatrix: [
					[1, 0, 0],
					[0, 1, 0]
				]
			};
			this.animateQueue = [];
			this._x = ar;
			this._y = aw;
			if (m == false && au !== z && au.layers[0] !== z) {
				this.optns.layer.number = 0;
				this.optns.canvas.number = X;
				var av = aj(this),
					at = av.objs.length;
				this.optns.number = at;
				this._level = at ? (av.objs[at - 1]._level + 1) : 0;
				av.objs[at] = this;
				this.optns.layer.id = av.optns.id;
				j(this)
			}
			return this
		};
		this._visible = true;
		this._composite = "source-over";
		this._name = "";
		this._opacity = 1;
		this._shadowX = 0;
		this._shadowY = 0;
		this._shadowBlur = 0;
		this._shadowColor = "rgba(0,0,0,0)";
		this._shadowColorR = 0;
		this._shadowColorG = 0;
		this._shadowColorB = 0;
		this._shadowColorA = 0;
		this._shadowColorRPrev = 0;
		this._shadowColorGPrev = 0;
		this._shadowColorBPrev = 0;
		this._shadowColorAPrev = 0;
		this._translateX = 0;
		this._translateY = 0;
		this._scaleX = 1;
		this._scaleY = 1;
		this._rotateAngle = 0;
		this._rotateX = 0;
		this._rotateY = 0;
		this._transform11 = 1;
		this._transform12 = 0;
		this._transform21 = 0;
		this._transform22 = 1;
		this._transformdx = 0;
		this._transformdy = 0;
		this._matrixChanged = false
	};
	w.object.prototype = new w.object();
	w.shape = function() {
		this.color = function(m) {
			if (m === z) {
				return [this._colorR, this._colorG, this._colorB, this._alpha]
			}
			return this.attr("color", m)
		};
		this.lineStyle = function(m) {
			return this.attr(m)
		};
		this.setOptns = function(at) {
			w.shape.prototype.setOptns.call(this, at);
			at.lineWidth = this._lineWidth;
			at.lineCap = this._cap;
			at.lineJoin = this._join;
			at.miterLimit = this._miterLimit;
			var au = this.optns.color;
			if (au.notColor === z) {
				var ay = parseInt(this._colorR),
					ax = parseInt(this._colorG),
					ar = parseInt(this._colorB),
					av = parseInt(this._alpha * 100) / 100;
				if (this._colorRPrev !== ay || this._colorGPrev !== ax || this._colorBPrev !== ar || this._alphaPrev !== av) {
					au.val = this._color = "rgba(" + ay + ", " + ax + ", " + ar + ", " + av + ")";
					this._colorRPrev = ay;
					this._colorGPrev = ax;
					this._colorBPrev = ar;
					this._alphaPrev = av
				} else {
					au.val = this._color
				}
			} else {
				var m = au.notColor;
				var aw = ad[m.canvas].layers[m.layer];
				if (aw.grdntsnptrns[m.level] !== z) {
					au.val = aw.grdntsnptrns[m.level].val
				}
			}
			if (this._fill) {
				at.fillStyle = au.val
			} else {
				at.strokeStyle = au.val
			}
		};
		this.afterDraw = function(m) {
			if (this._fill) {
				m.ctx.fill()
			} else {
				m.ctx.stroke()
			}
			w.shape.prototype.afterDraw.call(this, m)
		};
		this.base = function(m) {
			if (m === z) {
				m = {}
			}
			if (m.color === z) {
				m.color = "rgba(0,0,0,1)"
			} else {
				if (!m.color.charAt && m.color.id === z && m.color.r === z) {
					m.fill = m.color;
					m.color = "rgba(0,0,0,1)"
				}
			}
			m = af(m, {
				color: "rgba(0,0,0,1)",
				fill: 0
			});
			w.shape.prototype.base.call(this, m);
			this._fill = m.fill;
			this.optns.color = {
				val: m.color,
				notColor: z
			};
			return this.color(m.color)
		};
		this._colorR = 0;
		this._colorG = 0;
		this._colorB = 0;
		this._alpha = 0;
		this._colorRPrev = 0;
		this._colorGPrev = 0;
		this._colorBPrev = 0;
		this._alphaPrev = 0;
		this._color = "rgba(0,0,0,0)";
		this._lineWidth = 1;
		this._cap = "butt";
		this._join = "miter";
		this._miterLimit = 1
	};
	w.shape.prototype = new w.object;
	w.lines = function() {
		this.getCenter = function(at) {
			var m = {
				x: this._x0,
				y: this._y0
			};
			for (var ar = 1; ar < this.shapesCount; ar++) {
				m.x += this["_x" + ar];
				m.y += this["_y" + ar]
			}
			m.x = m.x / this.shapesCount;
			m.y = m.y / this.shapesCount;
			return R(this, m, at)
		};
		this.position = function() {
			return t(this._x0, this._y0, o(this.matrix(), aj(this).matrix()))
		};
		this.getRect = function(au) {
			var m, ax, aw = m = this._x0,
				av = ax = this._y0;
			for (var ar = 1; ar < this.shapesCount; ar++) {
				if (aw < this["_x" + ar]) {
					aw = this["_x" + ar]
				}
				if (av < this["_y" + ar]) {
					av = this["_y" + ar]
				}
				if (m > this["_x" + ar]) {
					m = this["_x" + ar]
				}
				if (ax > this["_y" + ar]) {
					ax = this["_y" + ar]
				}
			}
			var at = {
				x: m,
				y: ax,
				width: aw - m,
				height: av - ax
			};
			return b(this, at, au)
		};
		this.addPoint = function() {
			j(this);
			var ar = this.pointNames;
			for (var m = 0; m < ar.length; m++) {
				this[ar[m] + this.shapesCount] = arguments[m]
			}
			this.shapesCount++;
			return this
		};
		this.delPoint = function(ar, av, m) {
			j(this);
			if (av === z) {
				var au = this.points();
				au.splice(ar, 1);
				this.points(au)
			} else {
				m = m || 0;
				for (var at = 0; at < this.shapesCount; at++) {
					if (this["_x" + at] < ar + m && this["_x" + at] > ar - m && this["_y" + at] < av + m && this["_y" + at] < av + m) {
						this.delPoint(at);
						at--
					}
				}
			}
			return this
		};
		this.points = function(au) {
			var av = this.pointNames;
			if (au === z) {
				au = [];
				for (var ar = 0; ar < this.shapesCount; ar++) {
					au[ar] = [];
					for (var at = 0; at < av.length; at++) {
						au[ar][at] = this[av[at] + ar]
					}
				}
				return au
			}
			j(this);
			var m = this.shapesCount;
			this.shapesCount = au.length;
			for (ar = 0; ar < this.shapesCount; ar++) {
				for (at = 0; at < av.length; at++) {
					this[av[at] + ar] = au[ar][at]
				}
			}
			for (ar = this.shapesCount; ar < m; ar++) {
				for (at = 0; at < av.length; at++) {
					this[av[at] + ar] = z
				}
			}
			return this
		};
		this.base = function(ar, m, at) {
			if (ar !== z) {
				if (typeof ar.pop == "function") {
					ar = {
						points: ar,
						color: m,
						fill: at
					}
				}
			}
			w.lines.prototype.base.call(this, ar);
			this.shapesCount = 0;
			if (ar !== z) {
				if (ar.points !== z) {
					this.points(ar.points)
				}
			}
			return this
		}
	};
	w.lines.prototype = new w.shape;
	w.line = function() {
		this.draw = function(m) {
			if (this._x0 === z) {
				return
			}
			m.moveTo(this._x0, this._y0);
			for (var ar = 1; ar < this.shapesCount; ar++) {
				m.lineTo(this["_x" + ar], this["_y" + ar])
			}
		};
		this.base = function(ar, m, at) {
			w.line.prototype.base.call(this, ar, m, at);
			return this
		};
		this._proto = "line";
		this.pointNames = ["_x", "_y"]
	};
	w.line.prototype = new w.lines;
	w.qCurve = function() {
		this.draw = function(m) {
			if (this._x0 === z) {
				return
			}
			m.moveTo(this._x0, this._y0);
			for (var ar = 1; ar < this.shapesCount; ar++) {
				m.quadraticCurveTo(this["_cp1x" + ar], this["_cp1y" + ar], this["_x" + ar], this["_y" + ar])
			}
		};
		this.base = function(ar, m, at) {
			w.qCurve.prototype.base.call(this, ar, m, at);
			return this
		};
		this._proto = "qCurve";
		this.pointNames = ["_x", "_y", "_cp1x", "_cp1y"]
	};
	w.qCurve.prototype = new w.lines;
	w.bCurve = function() {
		this.draw = function(m) {
			if (this._x0 === z) {
				return
			}
			m.moveTo(this._x0, this._y0);
			for (var ar = 1; ar < this.shapesCount; ar++) {
				m.bezierCurveTo(this["_cp1x" + ar], this["_cp1y" + ar], this["_cp2x" + ar], this["_cp2y" + ar], this["_x" + ar], this["_y" + ar])
			}
		};
		this.base = function(ar, m, at) {
			w.bCurve.prototype.base.call(this, ar, m, at);
			return this
		};
		this._proto = "bCurve";
		this.pointNames = ["_x", "_y", "_cp1x", "_cp1y", "_cp2x", "_cp2y"]
	};
	w.bCurve.prototype = new w.lines;
	w.circle = function() {
		this.getCenter = function(m) {
			return R(this, {
				x: this._x,
				y: this._y
			}, m)
		};
		this.getRect = function(ar) {
			var m = {
				x: Math.floor(this._x - this._radius),
				y: Math.floor(this._y - this._radius)
			};
			m.width = m.height = Math.ceil(this._radius) * 2;
			return b(this, m, ar)
		};
		this.draw = function(m) {
			m.arc(this._x, this._y, this._radius, 0, v, true)
		};
		this.base = function(ar, av, m, at, au) {
			if (typeof ar != "object") {
				ar = {
					x: ar,
					y: av,
					radius: m,
					color: at,
					fill: au
				}
			}
			ar = af(ar, {
				radius: 0
			});
			w.circle.prototype.base.call(this, ar);
			this._radius = ar.radius;
			return this
		};
		this._proto = "circle"
	};
	w.circle.prototype = new w.shape;
	w.rect = function() {
		this.getRect = function(m) {
			return b(this, {
				x: this._x,
				y: this._y,
				width: this._width,
				height: this._height
			}, m)
		};
		this.draw = function(m) {
			m.rect(this._x, this._y, this._width, this._height)
		};
		this.base = function(ar, aw, au, m, at, av) {
			if (typeof ar != "object") {
				ar = {
					x: ar,
					y: aw,
					width: au,
					height: m,
					color: at,
					fill: av
				}
			}
			ar = af(ar, {
				width: 0,
				height: 0
			});
			w.rect.prototype.base.call(this, ar);
			this._width = ar.width;
			this._height = ar.height;
			return this
		};
		this._proto = "rect"
	};
	w.rect.prototype = new w.shape;
	w.arc = function() {
		this.getRect = function(ay) {
			var az = {
				x: this._x,
				y: this._y
			},
				ax = this._startAngle,
				m = this._endAngle,
				aw = this._radius,
				au = O(L(ax / E) * aw),
				av = O(y(ax / E) * aw),
				aA = O(L(m / E) * aw),
				aB = O(y(m / E) * aw),
				at = av > 0 && aB > 0,
				ar = av < 0 && aB < 0,
				aD = au > 0 && aA > 0,
				aC = au < 0 && aA < 0;
			az.width = az.height = aw;
			if ((this._anticlockwise && ax < m) || (!this._anticlockwise && ax > m)) {
				if (((ar || (at && (aC || aD)))) || (av == 0 && aB == 0)) {
					az.y -= aw;
					az.height += aw
				} else {
					if (at && aA < 0 && au > 0) {
						az.y += aA;
						az.height += aA
					} else {
						if (aB > 0 && aA < 0 && av < 0) {
							az.y += i(aA, au);
							az.height -= i(aA, au)
						} else {
							if (aC) {
								az.y -= U(aA, au)
							} else {
								az.y -= aw
							}
							az.height += U(aA, au)
						}
					}
				}
				if (((aD || (aC && (ar || at)))) || (au == 0 && aA == 0)) {
					az.x -= aw;
					az.width += aw
				} else {
					if (aA < 0 && au > 0) {
						az.x += i(aB, av);
						az.width -= i(aB, av)
					} else {
						if (ar) {
							az.x -= U(aB, av)
						} else {
							az.x -= aw
						}
						az.width += U(aB, av)
					}
				}
			} else {
				at = av >= 0 && aB >= 0;
				aD = au >= 0 && aA >= 0;
				ar = av <= 0 && aB <= 0;
				aC = au <= 0 && aA <= 0;
				if (aC && at) {
					az.x += i(aB, av);
					az.width -= i(aB, av);
					az.y += i(aA, au);
					az.height += U(aA, au)
				} else {
					if (aC && ar) {
						az.x += i(aB, av);
						az.width += U(aB, av);
						az.y += i(aA, au);
						az.height += U(aA, au)
					} else {
						if (aC) {
							az.x += i(aB, av);
							az.width += U(aB, av);
							az.y -= aw;
							az.height += U(aA, au)
						} else {
							if (at && aD) {
								az.x += i(aB, av);
								az.width = Z(aB - av);
								az.y += i(aA, au);
								az.height -= i(aA, au)
							} else {
								if (aD) {
									az.x += i(aB, av);
									az.width = Z(aB) + Z(av);
									az.y += i(aA, au);
									az.height -= i(aA, au)
								} else {
									if (ar) {
										az.x -= aw;
										az.width += U(aB, av);
										az.y -= aw;
										az.height += U(aA, au)
									} else {
										if (at) {
											az.x -= aw;
											az.width += U(aB, av);
											az.y -= aw;
											az.height += aw
										}
									}
								}
							}
						}
					}
				}
			}
			return b(this, az, ay)
		};
		this.draw = function(m) {
			m.arc(this._x, this._y, this._radius, this._startAngle / E, this._endAngle / E, this._anticlockwise)
		};
		this.base = function(ar, ay, m, av, au, aw, at, ax) {
			if (aw !== z) {
				if (aw.charAt) {
					at = aw
				}
				if (aw) {
					aw = true
				} else {
					aw = false
				}
			}
			if (typeof ar != "object") {
				ar = {
					x: ar,
					y: ay,
					radius: m,
					startAngle: av,
					endAngle: au,
					anticlockwise: aw,
					color: at,
					fill: ax
				}
			}
			ar = af(ar, {
				radius: 0,
				startAngle: 0,
				endAngle: 0,
				anticlockwise: true
			});
			w.arc.prototype.base.call(this, ar);
			this._radius = ar.radius;
			this._startAngle = ar.startAngle;
			this._endAngle = ar.endAngle;
			this._anticlockwise = ar.anticlockwise;
			return this
		};
		this._proto = "arc"
	};
	w.arc.prototype = new w.shape;
	w.text = function() {
		this.font = function(m) {
			return this.attr("font", m)
		};
		this._font = "10px sans-serif";
		this.align = function(m) {
			return this.attr("align", m)
		};
		this._align = "start";
		this.baseline = function(m) {
			return this.attr("baseline", m)
		};
		this._baseline = "alphabetic";
		this.string = function(m) {
			return this.attr("string", m)
		};
		this.position = function() {
			var ar = {
				x: this._x,
				y: this._y
			},
				m = D(this).optns.ctx;
			ar.height = parseInt(this._font.match(Q)[0]);
			ar.y -= ar.height;
			m.save();
			m.textBaseline = this._baseline;
			m.font = this._font;
			m.textAlign = this._align;
			ar.width = m.measureText(this._string).width;
			m.restore();
			return b(this, ar)
		};
		this.getRect = function(at) {
			var ar = {
				x: this._x,
				y: this._y
			},
				m = D(this).optns.ctx;
			ar.height = parseInt(this._font.match(Q)[0]);
			ar.y -= ar.height;
			m.save();
			m.textBaseline = this._baseline;
			m.font = this._font;
			m.textAlign = this._align;
			ar.width = m.measureText(this._string).width;
			if (this._align == "center") {
				ar.x -= ar.width / 2
			}
			if (this._align == "right") {
				ar.x -= ar.width
			}
			m.restore();
			return b(this, ar, at)
		};
		this.setOptns = function(m) {
			w.text.prototype.setOptns.call(this, m);
			m.textBaseline = this._baseline;
			m.font = this._font;
			m.textAlign = this._align
		};
		this.draw = function(m) {
			if (this._maxWidth === false) {
				if (this._fill) {
					m.fillText(this._string, this._x, this._y)
				} else {
					m.strokeText(this._string, this._x, this._y)
				}
			} else {
				if (this._fill) {
					m.fillText(this._string, this._x, this._y, this._maxWidth)
				} else {
					m.strokeText(this._string, this._x, this._y, this._maxWidth)
				}
			}
		};
		this.base = function(at, m, aw, au, ar, av) {
			if (au !== z) {
				if (au.charAt) {
					if (ar !== z) {
						av = ar
					}
					ar = au;
					au = false
				}
			}
			if (typeof at != "object") {
				at = {
					string: at,
					x: m,
					y: aw,
					maxWidth: au,
					color: ar,
					fill: av
				}
			}
			at = af(at, {
				string: "",
				maxWidth: false,
				fill: 1
			});
			w.text.prototype.base.call(this, at);
			this._string = at.string;
			this._maxWidth = at.maxWidth;
			return this
		};
		this._proto = "text"
	};
	w.text.prototype = new w.shape;
	w.grdntsnptrn = function() {
		this.layer = function(ar) {
			return e(ar, this, "grdntsnptrns")
		};
		this.canvas = function(ar) {
			return n(ar, this, "grdntsnptrns")
		};
		var m = new w.object;
		this.animate = m.animate;
		this.attr = m.attr;
		this.id = m.id;
		this.name = m.name;
		this.level = m.level;
		this.base = function() {
			this.animateQueue = [];
			this.optns = {
				animated: false,
				name: "",
				layer: {
					id: ad[0].optns.id + "Layer_0",
					number: 0
				},
				canvas: {
					number: 0
				},
				visible: true
			};
			this.optns.layer.id = ad[X].optns.id + "Layer_0";
			this.optns.layer.number = 0;
			this.optns.canvas.number = X;
			var ar = ad[X].layers[0].grdntsnptrns;
			this._level = ar.length;
			ar[this._level] = this;
			j(this)
		};
		return this
	};
	w.gradients = function() {
		this.colorStopsCount = 0;
		this.paramNames = ["_pos", "_colorR", "_colorG", "_colorB", "_alpha"];
		this.addColorStop = function(au, ar) {
			j(this);
			var m = s(ar);
			var at = this.colorStopsCount;
			this["_pos" + at] = au;
			this["_colorR" + at] = m.r;
			this["_colorG" + at] = m.g;
			this["_colorB" + at] = m.b;
			this["_alpha" + at] = m.a;
			this.colorStopsCount++;
			return this
		};
		this.animate = function(av, ax, ay, aw, au) {
			for (var at in av) {
				if (at.substr(0, 5) == "color") {
					var ar = at.substring(5);
					var m = s(av[at]);
					av["colorR" + ar] = m.r;
					av["colorG" + ar] = m.g;
					av["colorB" + ar] = m.b;
					av["alpha" + ar] = m.a
				}
			}
			w.gradients.prototype.animate.call(this, av, ax, ay, aw, au)
		};
		this.delColorStop = function(ar) {
			j(this);
			var m = this.colorStops();
			m.splice(ar, 1);
			if (m.length > 0) {
				this.colorStops(m)
			} else {
				this.colorStopsCount = 0
			}
			return this
		};
		this.colorStops = function(aw) {
			var av = this.paramNames;
			if (aw === z) {
				aw = [];
				for (var at = 0; at < this.colorStopsCount; at++) {
					aw[at] = [];
					for (var au = 0; au < av.length; au++) {
						aw[at][au] = this[av[au] + at]
					}
				}
				return aw
			}
			j(this);
			var ar = this.colorStopsCount;
			var m = aw.length;
			if (aw[0].length == 2) {
				for (at = 0; at < m; at++) {
					this.addColorStop(aw[at][0], aw[at][1])
				}
			} else {
				for (at = 0; at < m; at++) {
					for (au = 0; au < av.length; au++) {
						this[av[au] + at] = aw[at][au]
					}
				}
			}
			for (at = m; at < ar; at++) {
				for (au = 0; au < av.length; au++) {
					this[av[au] + at] = z
				}
			}
			this.colorStopsCount = m;
			return this
		};
		this.base = function(m) {
			w.gradients.prototype.base.call(this);
			if (m == z) {
				return this
			} else {
				return this.colorStops(m)
			}
		}
	};
	w.gradients.prototype = new w.grdntsnptrn;
	w.pattern = function() {
		this.create = function(m) {
			if (this.optns.animated) {
				F.call(this, m)
			}
			this.val = m.ctx.createPattern(this._img, this._type)
		};
		this.base = function(ar, m) {
			if (ar.onload) {
				ar = {
					image: ar,
					type: m
				}
			}
			ar = af(ar, {
				type: "repeat"
			});
			w.pattern.prototype.base.call(this);
			this._img = ar.image;
			this._type = ar.type;
			return this
		};
		this._proto = "pattern"
	};
	w.pattern.prototype = new w.grdntsnptrn;
	w.lGradient = function() {
		this.create = function(ar) {
			if (this.optns.animated) {
				F.call(this, ar)
			}
			this.val = ar.ctx.createLinearGradient(this._x1, this._y1, this._x2, this._y2);
			for (var m = 0; m < this.colorStopsCount; m++) {
				this.val.addColorStop(this["_pos" + m], "rgba(" + parseInt(this["_colorR" + m]) + "," + parseInt(this["_colorG" + m]) + "," + parseInt(this["_colorB" + m]) + "," + this["_alpha" + m] + ")")
			}
		};
		this.base = function(at, av, ar, au, m) {
			if (typeof at !== "object") {
				at = {
					x1: at,
					y1: av,
					x2: ar,
					y2: au,
					colors: m
				}
			}
			at = af(at, {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0
			});
			w.lGradient.prototype.base.call(this, at.colors);
			this._x1 = at.x1;
			this._y1 = at.y1;
			this._x2 = at.x2;
			this._y2 = at.y2;
			return this
		};
		this._proto = "lGradient"
	};
	w.lGradient.prototype = new w.gradients;
	w.rGradient = function() {
		this.create = function(ar) {
			if (this.optns.animated) {
				F.call(this)
			}
			this.val = ar.ctx.createRadialGradient(this._x1, this._y1, this._r1, this._x2, this._y2, this._r2);
			for (var m = 0; m < this.colorStopsCount; m++) {
				this.val.addColorStop(this["_pos" + m], "rgba(" + parseInt(this["_colorR" + m]) + "," + parseInt(this["_colorG" + m]) + "," + parseInt(this["_colorB" + m]) + "," + this["_alpha" + m] + ")")
			}
		};
		this.base = function(av, ax, au, at, aw, ar, m) {
			if (typeof av !== "object") {
				av = {
					x1: av,
					y1: ax,
					r1: au,
					x2: at,
					y2: aw,
					r2: ar,
					colors: m
				}
			}
			av = af(av, {
				x1: 0,
				y1: 0,
				r1: 0,
				x2: 0,
				y2: 0,
				r2: 0
			});
			w.rGradient.prototype.base.call(this, av.colors);
			this._x1 = av.x1;
			this._y1 = av.y1;
			this._r1 = av.r1;
			this._x2 = av.x2;
			this._y2 = av.y2;
			this._r2 = av.r2;
			return this
		};
		this._proto = "rGradient"
	};
	w.rGradient.prototype = new w.gradients;
	w.layer = function() {
		this.position = function() {
			var av = this.objs,
				au, m, at, ar = av.length;
			for (at = 0; at < ar; at++) {
				m = av[at].position();
				if (au === z) {
					au = m
				}
				if (au.x > m.x) {
					au.x = m.x
				}
				if (au.y > m.y) {
					au.y = m.y
				}
			}
			return au
		};
		this.getRect = function(au) {
			var aw = this.objs,
				at, av, ar, m = aw.length;
			if (aw.length == 0) {
				return false
			}
			if (au == "coords") {
				for (ar = 0; ar < m; ar++) {
					av = aw[ar].getRect(au);
					if (at === z) {
						at = av
					}
					if (at[0][0] > av[0][0]) {
						at[0][0] = av[0][0]
					}
					if (at[0][1] > av[0][1]) {
						at[0][1] = av[0][1]
					}
					if (at[1][0] < av[1][0]) {
						at[1][0] = av[1][0]
					}
					if (at[1][1] > av[1][1]) {
						at[1][1] = av[1][1]
					}
					if (at[2][0] > av[2][0]) {
						at[2][0] = av[2][0]
					}
					if (at[2][1] < av[2][1]) {
						at[2][1] = av[2][1]
					}
					if (at[3][0] < av[3][0]) {
						at[3][0] = av[3][0]
					}
					if (at[3][1] < av[3][1]) {
						at[3][1] = av[3][1]
					}
				}
				return at
			}
			for (ar = 0; ar < m; ar++) {
				av = aw[ar].getRect(au);
				av.right = av.width + av.x;
				av.bottom = av.height + av.y;
				if (at === z) {
					at = av
				}
				if (at.x > av.x) {
					at.x = av.x
				}
				if (at.y > av.y) {
					at.y = av.y
				}
				if (at.right < av.right) {
					at.right = av.right
				}
				if (at.bottom < av.bottom) {
					at.bottom = av.bottom
				}
			}
			at.width = at.right - at.x;
			at.height = at.bottom - at.y;
			return at
		};
		this.canvas = function(ar) {
			if (ar === z) {
				return this.idCanvas
			}
			if (this.optns.canvas.id == ar) {
				return this
			}
			var av = -1,
				m = 0,
				ax = ad.length;
			for (var au = 0; au < ax; au++) {
				var aw = ad[au].optns.id;
				if (aw == ar) {
					av = au
				}
				if (aw == this.optns.canvas.id) {
					m = au
				}
			}
			if (av < 0) {
				av = ad.length;
				P.canvas(ar)
			}
			this.optns.canvas.id = ar;
			this.optns.canvas.number = av;
			ad[m].layers.splice(this.optns.number, 1);
			var at = ad[av].layers;
			this._level = this.optns.number = at.length;
			at[this._level] = this;
			l(this.objs, this.optns.id, this._level, ar, av);
			l(this.grdntsnptrns, this.optns.id, this._level, ar, av);
			ad[av].optns.redraw = 1;
			return this
		};
		this.up = function(ar) {
			if (ar === z) {
				ar = 1
			}
			if (ar == "top") {
				this.level(ar)
			} else {
				var m = D(this).layers[this.optns.number + ar];
				if (m !== z) {
					ar = m._level + 1 - this._level
				}
				this.level(this._level + ar)
			}
			return this
		};
		this.down = function(ar) {
			if (ar == z) {
				ar = 1
			}
			if (ar == "bottom") {
				this.level(ar)
			} else {
				var m = D(this).layers[this.optns.number - ar];
				if (m !== z) {
					ar = this._level - (m._level - 1)
				}
				this.level(this._level - ar)
			}
			return this
		};
		this.level = function(at) {
			if (at == z) {
				return this._level
			}
			var ar = D(this),
				m = ar.optns;
			if (at == "bottom") {
				if (this.optns.number == 0) {
					at = this._level
				} else {
					at = ar.layers[0]._level - 1
				}
			}
			if (at == "top") {
				if (this.optns.number == ar.layers.length - 1) {
					at = this._level
				} else {
					at = ar.layers[ar.layers.length - 1]._level + 1
				}
			}
			this._level = at;
			m.anyLayerLevelChanged = true;
			m.redraw = 1;
			return this
		};
		this.del = function() {
			var m = D(this).optns;
			m.anyLayerDeleted = true;
			this.optns.deleted = true;
			this.draw = false;
			m.redraw = 1;
			return
		};
		this.setOptns = function(m) {
			m.setTransform(1, 0, 0, 1, 0, 0);
			w.layer.prototype.setOptns.call(this, m);
			return this
		};
		this.afterDraw = function(m) {
			m.ctx.closePath();
			m.ctx.restore();
			if (this.optns.clipObject) {
				w.layer.prototype.afterDraw.call(this.optns.clipObject, m)
			}
		};
		this.clone = function(at, m) {
			var ar = P.layer(at);
			J(ar, this);
			J(ar.optns.transformMatrix, this.optns.transformMatrix);
			J(ar.optns.translateMatrix, this.optns.translateMatrix);
			J(ar.optns.scaleMatrix, this.optns.scaleMatrix);
			J(ar.optns.rotateMatrix, this.optns.rotateMatrix);
			ar.canvas(D(this).optns.id);
			if (m === z) {
				return ar
			}
			return ar.animate(m)
		};
		this.isPointIn = function(m, av, at) {
			var au = this.objs,
				ar;
			for (ar = 0; ar < au.length; ar++) {
				if (au[ar].isPointIn(m, av, at)) {
					return true
				}
			}
			return false
		};
		this.opacity = function(at) {
			var ar = this.objs;
			for (var m = 0; m < ar.length; m++) {
				ar[m].attr("opacity", at)
			}
			return this
		};
		this.fadeTo = function(aw, au, ax, at, ar) {
			if (au === z) {
				au = 600
			}
			var av = this.objs;
			for (var m = 0; m < av.length; m++) {
				av[m].animate({
					opacity: aw
				}, au, ax, at, ar)
			}
			return this
		};
		this.draw = function(ax) {
			var at = this.optns,
				av = at.buffer,
				m = ax.ctx;
			if (av.val) {
				m.drawImage(av.cnv, av.x, av.y);
				return this
			}
			for (var au = 0; au < this.grdntsnptrns.length; au++) {
				this.grdntsnptrns[au].create(ax)
			}
			if (at.anyObjLevelChanged) {
				T(this.objs);
				at.anyObjLevelChanged = false
			}
			if (at.anyObjDeleted) {
				W(this.objs);
				at.anyObjDeleted = false
			}
			m.globalCompositeOperation = at.gCO;
			for (au = 0; au < this.objs.length; au++) {
				var ar = this.objs[au];
				if (typeof(ar.draw) == "function") {
					this.setOptns(m);
					if (ar.beforeDraw(ax)) {
						if (typeof(ar.draw) == "function") {
							var aw = ar.optns.buffer;
							if (aw.val) {
								m.drawImage(aw.cnv, aw.x, aw.y)
							} else {
								ar.draw(m)
							}
							if (av.optns) {
								ar.afterDraw(av.optns)
							} else {
								ar.afterDraw(ax)
							}
						}
					}
				}
			}
			return this
		};
		this.objects = function(at) {
			var ar = G(),
				m = 0;
			while (this.objs[m] !== z) {
				ar.elements[m] = this.objs[m++]
			}
			if (at !== z) {
				return ar.find(at)
			}
			return ar
		};
		this.base = function(aw) {
			var ar = ad[X],
				av = ar.layers,
				at = ar.optns;
			w.layer.prototype.base.call(this, 0, 0, true);
			var m = av.length;
			av[m] = this;
			this.objs = [];
			this.grdntsnptrns = [];
			this._level = m ? (av[m - 1]._level + 1) : 0;
			this.optns.number = m;
			this.optns.id = aw;
			var au = this.optns;
			au.anyObjDeleted = false;
			au.anyObjLevelChanged = false;
			au.gCO = at.gCO;
			au.canvas.id = at.id;
			au.canvas.number = X;
			return this
		};
		this._proto = "layer"
	};
	w.layer.prototype = new w.object;

	function aa(ar) {
		var m = new w.layer();
		return m.base(ar)
	}
	w.imageData = function() {
		this.filter = function(m, at) {
			var ar = g[m];
			ar.fn.call(this, this._width, this._height, ar.matrix, at);
			return this
		};
		this.getRect = function(ar) {
			var m = {
				x: this._x,
				y: this._y,
				width: this._width,
				height: this._height
			};
			return b(this, m, ar)
		};
		this.setPixel = function(ar, av, at) {
			var m, au = (ar + av * this._width) * 4;
			if (at.r !== z) {
				m = at
			} else {
				if (at[0] !== z) {
					if (!at.charAt) {
						m = {
							r: at[0],
							g: at[1],
							b: at[2],
							a: at[3]
						}
					} else {
						m = s(at)
					}
				}
			}
			this._data[au + 0] = m.r;
			this._data[au + 1] = m.g;
			this._data[au + 2] = m.b;
			this._data[au + 3] = m.a * 255;
			j(this);
			return this
		};
		this.getPixel = function(m, at) {
			var ar = (m + at * this._width) * 4;
			return [this._data[ar + 0], this._data[ar + 1], this._data[ar + 2], this._data[ar + 3] / 255]
		};
		this._getX = 0;
		this._getY = 0;
		this.getData = function(ar, aw, au, m) {
			this._getX = ar;
			this._getY = aw;
			this._width = au;
			this._height = m;
			var at = D(this).optns.ctx;
			try {
				this._imgData = at.getImageData(this._getX, this._getY, this._width, this._height)
			} catch (av) {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
				this._imgData = at.getImageData(this._getX, this._getY, this._width, this._height)
			}
			this._data = this._imgData.data;
			j(this);
			return this
		};
		this.putData = function(m, ar) {
			if (m !== z) {
				this._x = m
			}
			if (ar !== z) {
				this._y = ar
			}
			this._putData = true;
			j(this);
			return this
		};
		this.clone = function() {
			var m = w.imageData.prototype.clone.call(this);
			m._imgData = z;
			return m
		};
		this.draw = function(m) {
			if (this._imgData === z) {
				this._imgData = m.createImageData(this._width, this._height);
				for (var ar = 0; ar < this._width * this._height * 4; ar++) {
					this._imgData.data[ar] = this._data[ar]
				}
				this._data = this._imgData.data
			}
			if (this._putData) {
				m.putImageData(this._imgData, this._x, this._y)
			}
		};
		this.base = function(av, m) {
			w.imageData.prototype.base.call(this);
			if (m === z) {
				var aw = av;
				if (aw._width !== z) {
					av = aw._width;
					m = aw._height
				} else {
					av = af(av, {
						width: 0,
						height: 0
					});
					m = av.height;
					av = av.width
				}
			}
			this._width = av;
			this._height = m;
			this._data = [];
			for (var au = 0; au < this._width; au++) {
				for (var at = 0; at < this._height; at++) {
					var ar = (au + at * this._width) * 4;
					this._data[ar + 0] = 0;
					this._data[ar + 1] = 0;
					this._data[ar + 2] = 0;
					this._data[ar + 3] = 0
				}
			}
			return this
		};
		this._putData = false;
		this._proto = "imageData"
	};
	w.imageData.prototype = new w.object;
	w.image = function() {
		this.getRect = function(ar) {
			var m = {
				x: this._x,
				y: this._y,
				width: this._width,
				height: this._height
			};
			return b(this, m, ar)
		};
		this.draw = function(m) {
			m.drawImage(this._img, this._sx, this._sy, this._swidth, this._sheight, this._x, this._y, this._width, this._height)
		};
		this.base = function(at, ay, av, m, az, ax, aw, au, ar) {
			if (typeof at != "object" || at.src !== z || at.nodeName !== z) {
				at = {
					image: at,
					x: ay,
					y: av,
					width: m,
					height: az,
					sx: ax,
					sy: aw,
					swidth: au,
					sheight: ar
				}
			}
			at = af(at, {
				width: false,
				height: false,
				sx: 0,
				sy: 0,
				swidth: false,
				sheight: false
			});
			if (at.width === false) {
				at.width = at.image.width;
				at.height = at.image.height
			}
			if (at.swidth === false) {
				at.swidth = at.image.width;
				at.sheight = at.image.height
			}
			w.image.prototype.base.call(this, at);
			this._img = at.image;
			this._width = at.width;
			this._height = at.height;
			this._sx = at.sx;
			this._sy = at.sy;
			this._swidth = at.swidth;
			this._sheight = at.sheight;
			return this
		};
		this._proto = "image"
	};
	w.image.prototype = new w.object;
	w.groups = function() {
		for (var m in w) {
			if (m == "group" || m == "groups") {
				continue
			}
			var at = new w[m];
			for (var ar in at) {
				if (typeof at[ar] == "function" && this[ar] === z) {
					(function(av, au) {
						av[au] = function() {
							var az = [];
							var aw = [];
							var ay = 0;
							while (arguments[ay] !== z) {
								aw[ay] = arguments[ay++]
							}
							for (ay = 0; ay < this.elements.length; ay++) {
								var ax = this.elements[ay];
								J(az, aw);
								if (typeof ax[au] == "function") {
									ax[au].apply(ax, az)
								}
							}
							return this
						}
					})(this, ar)
				}
			}
		}
		this.reverse = function() {
			var au = this.elements;
			this.elements = this.unmatchedElements;
			this.unmatchedElements = au;
			return this
		};
		this.end = function(au) {
			if (this.previousGroup === z || au === 0) {
				return this
			}
			if (au !== z) {
				au--
			}
			return this.previousGroup.end(au)
		};
		this.find = function(au) {
			var aC = G(),
				aB = au.attrs,
				aD = au.fns || [],
				aw, av, ax, aE, aA, az, ay;
			aC.previousGroup = this;
			for (aw = 0; aw < this.elements.length; aw++) {
				aC.elements[aw] = this.elements[aw]
			}
			if (aB !== z) {
				for (av in aB) {
					if (aB.hasOwnProperty(av)) {
						if (typeof aB[av] != "object") {
							aB[av] = {
								val: aB[av],
								rel: "=="
							}
						}
						aD[aD.length] = {
							fn: "attr",
							args: [av],
							val: aB[av].val,
							rel: aB[av].rel
						}
					}
				}
			}
			if (aD.length) {
				for (aw = 0; aw < aC.elements.length; aw++) {
					ax = aC.elements[aw];
					for (av = 0; av < aD.length; av++) {
						aA = aD[av];
						ay = aA.val;
						aE = aA.rel;
						if (typeof ax[aA.fn] == "function") {
							az = ax[aA.fn].apply(ax, aA.args)
						} else {
							aE = "del"
						}
						switch (aE) {
						case "!=":
							if (!(az != ay)) {
								aE = "del"
							}
							break;
						case "!==":
							if (!(az !== ay)) {
								aE = "del"
							}
							break;
						case "==":
							if (!(az == ay)) {
								aE = "del"
							}
							break;
						case "===":
							if (!(az === ay)) {
								aE = "del"
							}
							break;
						case ">=":
							if (!(az >= ay)) {
								aE = "del"
							}
							break;
						case "<=":
							if (!(az <= ay)) {
								aE = "del"
							}
							break;
						case ">":
							if (!(az > ay)) {
								aE = "del"
							}
							break;
						case "<":
							if (!(az < ay)) {
								aE = "del"
							}
							break;
						case "typeof":
							if (!(typeof az == ay)) {
								aE = "del"
							}
							break
						}
						if (aE == "del") {
							aC.unmatchedElements[aC.unmatchedElements.length] = ax;
							aC.elements.splice(aw, 1);
							aw--;
							break
						}
					}
				}
			}
			return aC
		};
		this.base = function() {
			this.elements = [];
			this.unmatchedElements = [];
			return this
		}
	};
	w.group = function() {
		this._proto = "group"
	};
	w.group.prototype = new w.groups;

	function G() {
		var m = new w.group;
		return m.base()
	}
	P.addFunction = function(ar, at, m) {
		w[m || "object"].prototype[ar] = at;
		return P
	};
	P.addObject = function(at, av, m, au) {
		w[at] = function(aw) {
			this.draw = w[aw].draw;
			this.base = w[aw].base;
			this._proto = aw
		};
		var ar = w[at];
		if (au === z) {
			au = "shape"
		}
		ar.prototype = new w[au];
		ar.draw = m;
		ar.base = function(ax, aA, aw) {
			ar.prototype.base.call(this, aA);
			var az = 0;
			for (var ay in aA) {
				var aB = (aw[az] !== z) ? aw[az] : aA[ay];
				this["_" + ay] = aB;
				if (ay == "color") {
					this.color(aB)
				}
				az++
			}
			return this
		};
		(function(aw, ax) {
			P[aw] = function() {
				var ay = new w[aw](aw);
				return ay.base(aw, ax, arguments)
			}
		})(at, av);
		return P
	};
	P.addAnimateFunction = function(m, ar) {
		h[m] = ar;
		return P
	};
	P.addImageDataFilter = function(m, ar) {
		if (g[m] === z) {
			g[m] = {}
		}
		if (ar.fn !== z) {
			g[m].fn = ar.fn
		}
		if (ar.matrix !== z && ar.type === z) {
			g[m].matrix = ar.matrix
		}
		if (ar.type !== z) {
			g[m].matrix[type] = ar.matrix
		}
		return P
	};
	P.clear = function(m) {
		if (ad[0] === z) {
			return P
		}
		if (m === z) {
			ad[0].clear();
			return P
		}
		P.canvas(m).clear();
		return P
	};
	P.pause = function(m) {
		if (m === z) {
			ad[0].pause();
			return P
		}
		P.canvas(m).pause();
		return P
	};
	P.start = function(m, ar) {
		P.canvas(m).start(ar);
		return P
	};
	P.pattern = function(m, ar) {
		var at = new w.pattern;
		return at.base(m, ar)
	};
	P.lGradient = function(at, av, ar, au, m) {
		var aw = new w.lGradient;
		return aw.base(at, av, ar, au, m)
	};
	P.rGradient = function(av, ax, au, at, aw, ar, m) {
		var ay = new w.rGradient;
		return ay.base(av, ax, au, at, aw, ar, m)
	};
	P.line = function(at, ar, au) {
		var m = new w.line;
		return m.base(at, ar, au)
	};
	P.qCurve = function(at, m, au) {
		var ar = new w.qCurve;
		return ar.base(at, m, au)
	};
	P.bCurve = function(ar, m, au) {
		var at = new w.bCurve;
		return at.base(ar, m, au)
	};
	P.imageData = function(ar, m) {
		var at = new w.imageData;
		return at.base(ar, m)
	};
	P.image = function(av, az, aw, m, aA, ay, ax, au, ar) {
		var at = new w.image;
		return at.base(av, az, aw, m, aA, ay, ax, au, ar)
	};
	P.circle = function(ar, aw, m, at, av) {
		var au = new w.circle;
		return au.base(ar, aw, m, at, av)
	};
	P.rect = function(ar, ax, au, m, at, aw) {
		var av = new w.rect;
		return av.base(ar, ax, au, m, at, aw)
	};
	P.arc = function(ay, ax, av, aw, ar, at, au, az) {
		var m = new w.arc;
		return m.base(ay, ax, av, aw, ar, at, au, az)
	};
	P.text = function(at, m, ax, au, ar, av) {
		var aw = new w.text;
		return aw.base(at, m, ax, au, ar, av)
	};
	P.canvas = function(ar) {
		if (ar === z) {
			return ad[0]
		}
		var m = ad.length;
		for (var au = 0; au < m; au++) {
			if (ad[au].optns) {
				if (ad[au].optns.id == ar) {
					return ad[au]
				}
			}
		}
		var at = {
			id: function(av) {
				if (av === z) {
					return this.optns.id
				}
				this.optns.id = av;
				return this
			}
		};
		ad[m] = at;
		X = m;
		at.cnv = document.getElementById(ar);
		if ("\v" == "v") {
			if (typeof G_vmlCanvasManager !== "undefined") {
				G_vmlCanvasManager.initElement(at.cnv)
			}
			if (typeof FlashCanvas !== "undefined") {
				FlashCanvas.initElement(at.cnv)
			}
		}
		at.width = function(av) {
			if (av === z) {
				return this.cnv.width
			}
			this.optns.width = this.cnv.width = av;
			this.cnv.style.width = av + "px";
			this.optns.redraw = 1;
			return this
		};
		at.height = function(av) {
			if (av === z) {
				return this.cnv.height
			}
			this.optns.heigth = this.cnv.height = av;
			this.cnv.style.height = av + "px";
			this.optns.redraw = 1;
			return this
		};
		at.optns = {
			id: ar,
			number: X,
			ctx: at.cnv.getContext("2d"),
			width: at.cnv.offsetWidth || at.cnv.width,
			height: at.cnv.offsetHeight || at.cnv.height,
			anyLayerDeleted: false,
			anyLayerLevelChanged: false,
			keyDown: {
				val: false,
				code: false
			},
			keyUp: {
				val: false,
				code: false
			},
			keyPress: {
				val: false,
				code: false
			},
			mousemove: {
				val: false,
				x: false,
				y: false,
				object: false
			},
			click: {
				val: false,
				x: false,
				y: false,
				objects: []
			},
			dblclick: {
				val: false,
				x: false,
				y: false,
				objects: []
			},
			mouseup: {
				val: false,
				x: false,
				y: false,
				objects: []
			},
			mousedown: {
				val: false,
				x: false,
				y: false,
				objects: []
			},
			drag: {
				object: false,
				x: 0,
				y: 0
			},
			gCO: "source-over",
			redraw: 1
		};
		at.toDataURL = function() {
			return at.cnv.toDataURL.apply(at.cnv, arguments)
		};
		at.layers = [];
		at.interval = 0;
		P.layer(ar + "Layer_0").canvas(ar);
		at.recalculateOffset = function() {
			var av = C(this.cnv);
			this.optns.x = av.left + (parseInt(this.cnv.style.borderTopWidth) || 0);
			this.optns.y = av.top + (parseInt(this.cnv.style.borderLeftWidth) || 0);
			return this
		};
		at.start = function(ax) {
			X = this.optns.number;
			if (ax) {
				if (this.interval) {
					return this
				}
				this.isAnimated = ax;
				this.recalculateOffset();
				var aw = ad[this.optns.number],
					av = aw.optns;
				this.cnv.onclick = function(ay) {
					u(ay, "click", av)
				};
				this.cnv.ondblclick = function(az) {
					u(az, "dblclick", av);
					var ay = av.mousemove.val;
					av.mousemove.val = true;
					setTimeout(function() {
						av.mousemove.val = ay
					}, 3000)
				};
				this.cnv.onmousedown = function(ay) {
					u(ay, "mousedown", av)
				};
				this.cnv.onmouseup = function(ay) {
					u(ay, "mouseup", av)
				};
				this.cnv.onkeyup = function(ay) {
					ag(ay, "keyUp", av)
				};
				this.cnv.onkeydown = function(ay) {
					ag(ay, "keyDown", av)
				};
				this.cnv.onkeypress = function(ay) {
					ag(ay, "keyPress", av)
				};
				this.cnv.onmouseout = this.cnv.onmousemove = function(ay) {
					u(ay, "mousemove", av)
				};
				av.timeLast = new Date();
				this.interval = c(function(ay) {
					aw.interval = aw.interval || 1;
					aw.frame(ay)
				}, this.cnv)
			} else {
				return this.frame()
			}
			return this
		};
		at.pause = function() {
			I(this.interval);
			this.interval = 0;
			return this
		};
		at.restart = function() {
			return this.pause().start(true)
		};
		at.del = function() {
			I(this.interval);
			this.layers = [];
			ad.splice(this.optns.number, 1);
			for (var ay = 0; ay < ad.length; ay++) {
				var aw = ad[ay],
					az = aw.layers,
					aA = az.length;
				aw.optns.number = ay;
				for (var av = 0; av < aA; av++) {
					var ax = az[av];
					ax.optns.canvas.number = ay;
					l(ax.objs, ax.optns.id, ax.optns.number, aw.optns.id, aw.optns.number);
					l(ax.grdntsnptrns, ax.optns.id, ax.optns.number, aw.optns.id, aw.optns.number)
				}
			}
			if (this.cnv.parentNode) {
				this.cnv.parentNode.removeChild(this.cnv)
			}
			X = 0;
			return false
		};
		at.clear = function() {
			I(this.interval);
			this.interval = 0;
			this.layers = [];
			P.layer(this.optns.id + "Layer_0").canvas(this.optns.id);
			this.optns.ctx.clearRect(0, 0, this.optns.width, this.optns.height);
			this.optns.redraw++;
			return this
		};
		at.frame = function(az) {
			var aA = this.optns,
				aw = this;
			az = az || (new Date());
			aA.timeDiff = az - aA.timeLast;
			aA.timeLast = az;
			if (this.interval) {
				this.interval = c(function(aW) {
					aw.frame(aW)
				}, aw.cnv);
				this.interval = this.interval || 1
			}
			if (!aA.redraw) {
				return this
			}
			aA.redraw--;
			aA.ctx.clearRect(0, 0, aA.width, aA.height);
			if (this.layers.length == 0) {
				return this
			}
			m = this.layers.length;
			if (aA.anyLayerLevelChanged) {
				m = T(this.layers)
			}
			if (aA.anyLayerDeleted) {
				m = W(this.layers)
			}
			if (aA.anyLayerLevelChanged || aA.anyLayerDeleted) {
				aA.anyLayerLevelChanged = aA.anyLayerDeleted = false;
				for (var aJ = 0; aJ < m; aJ++) {
					var aU = this.layers[aJ],
						aB = aU.optns;
					l(aU.objs, aB.id, aB.number, this.optns.id, this.optns.number);
					l(aU.grdntsnptrns, aB.id, aB.number, ar, this.optns.number)
				}
			}
			for (aJ = 0; aJ < m; aJ++) {
				var aV = this.layers[aJ];
				if (typeof(aV.draw) == "function") {
					if (aV.beforeDraw(aA)) {
						if (typeof(aV.draw) == "function") {
							aV.draw(aA);
							aV.afterDraw(aA)
						}
					}
				}
			}
			var aM = aA.mousemove;
			var aS = aA.mousedown;
			var aP = aA.mouseup;
			var aD = this.optns.click;
			var aK = this.optns.dblclick;
			if (aM.x != false) {
				if (aA.drag.object != false) {
					var aL = aA.drag,
						av = aL.object;
					av.translate(aM.x - aL.x, aM.y - aL.y);
					aL.x = aM.x;
					aL.y = aM.y;
					if (aL.drag) {
						aL.drag.call(av, {
							x: aM.x,
							y: aM.y
						})
					}
				}
				var aF = this.optns.point || {};
				aF.event = aM.event;
				if (aM.object != false) {
					var aN = aM.object,
						aC = aj(aN);
					if (N === aN) {
						if (typeof aN.onmousemove === "function") {
							aN.onmousemove(aF)
						}
						if (aC === ae) {
							if (typeof aC.onmousemove === "function") {
								aC.onmousemove(aF)
							}
						} else {
							if (ae) {
								if (typeof ae.onmouseout === "function") {
									ae.onmouseout(aF)
								}
							}
							if (typeof aC.onmouseover === "function") {
								aC.onmouseover(aF)
							}
							ae = aC
						}
					} else {
						if (N) {
							if (typeof N.onmouseout === "function") {
								N.onmouseout(aF)
							}
						}
						if (typeof aN.onmouseover === "function") {
							aN.onmouseover(aF)
						}
						N = aN
					}
				} else {
					if (N) {
						if (typeof N.onmouseout == "function") {
							N.onmouseout(aF)
						}
						N = false
					}
					if (ae) {
						if (typeof ae.onmouseout == "function") {
							ae.onmouseout(aF)
						}
						ae = false
					}
				}
				aA.mousemove.object = false
			}
			if (aS.objects.length) {
				var aQ = aS.objects.length - 1;
				mdCicle: for (aJ = aQ; aJ > -1; aJ--) {
					var aT = [aS.objects[aJ], aj(aS.objects[aJ])],
						aR;
					for (var aH = 0; aH < 2; aH++) {
						aR = aT[aH];
						if (aR.optns.drag.val == true && aR.optns.drag.disabled == false && aJ == aQ) {
							aL = aA.drag;
							av = aL.object = aR.optns.drag.object.visible(true);
							aL.drag = aR.optns.drag.drag;
							aL.init = aR;
							var aI = aL.init.optns;
							if (aI.drag.params !== z) {
								av.animate(aI.drag.params)
							}
							aL.x = aL.startX = aS.x;
							aL.y = aL.startY = aS.y;
							if (av != aL.init && aI.drag.type != "clone") {
								aF = ac(aS.x, aS.y, av.matrix());
								av.translate(aF.x - av._x, aF.y - av._y)
							}
							av.translate(aI.drag.shiftX, aI.drag.shiftY);
							if (typeof aI.drag.start == "function") {
								aI.drag.start.call(av, {
									x: aS.x,
									y: aS.y
								})
							}
						}
						if (typeof aR.onmousedown == "function") {
							if (aR.onmousedown({
								x: aS.x,
								y: aS.y,
								event: aS.event
							}) === false) {
								break mdCicle
							}
						}
					}
				}
				aS.objects = []
			}
			if (aP.objects.length) {
				muCicle: for (aJ = aP.objects.length - 1; aJ > -1; aJ--) {
					var aE = [aP.objects[aJ], aj(aP.objects[aJ])],
						ay;
					for (aH = 0; aH < 2; aH++) {
						ay = aE[aH];
						if (an(ay, aP, aA)) {
							aD.objects = []
						}
						if (typeof ay.onmouseup == "function") {
							if (ay.onmouseup({
								x: aP.x,
								y: aP.y,
								event: aP.event
							}) === false) {
								break muCicle
							}
						}
					}
				}
				this.optns.drag = {
					object: false,
					x: 0,
					y: 0
				};
				aP.objects = []
			}
			if (aD.objects.length) {
				cCicle: for (aJ = aD.objects.length - 1; aJ > -1; aJ--) {
					var aG = [aD.objects[aJ], aj(aD.objects[aJ])],
						ax;
					for (aH = 0; aH < 2; aH++) {
						ax = aG[aH];
						an(ax, aD, aA);
						if (typeof ax.onclick == "function") {
							if (ax.onclick({
								x: aD.x,
								y: aD.y,
								event: aD.event
							}) === false) {
								break cCicle
							}
						}
					}
				}
				this.optns.drag = {
					object: false,
					x: 0,
					y: 0
				};
				aD.objects = []
			}
			if (aK.objects.length) {
				dcCicle: for (aJ = aK.objects.length - 1; aJ > -1; aJ--) {
					var aO = [aK.objects[aJ], aj(aK.objects[aJ])];
					for (aH = 0; aH < 2; aH++) {
						if (typeof aO[aH].ondblclick == "function") {
							if (aO[aH].ondblclick({
								x: aK.x,
								y: aK.y,
								event: aK.event
							}) === false) {
								break dcCicle
							}
						}
					}
				}
				aK.objects = []
			}
			aA.keyUp.val = aA.keyDown.val = aA.keyPress.val = aD.x = aK.x = aP.x = aS.x = aM.x = false;
			return this
		};
		return at
	};

	function an(ar, au, m) {
		var at = m.drag;
		if (m.drag.init && m.drag.object) {
			if (ar.optns.drop.val == true) {
				if (at.init == at.object) {
					at.init.visible(true)
				}
				if (typeof ar.optns.drop.fn == "function") {
					ar.optns.drop.fn.call(ar, at.init)
				}
			} else {
				at.object.visible(false);
				at.init.visible(true);
				at.init.optns.translateMatrix[0][2] = at.object.optns.translateMatrix[0][2];
				at.init.optns.translateMatrix[1][2] = at.object.optns.translateMatrix[1][2];
				k(at.init);
				if (at.object != at.init) {
					at.object.visible(false)
				}
				if (typeof at.init.optns.drag.stop == "function") {
					at.init.optns.drag.stop.call(at.init, {
						x: au.x,
						y: au.y
					})
				}
			}
			return (at.x != at.startX || at.y !== at.startY)
		}
		return false
	}
	P.layer = function(au) {
		if (au === z) {
			return ad[0].layers[0]
		}
		for (var at = 0; at < ad.length; at++) {
			var ar = ad[at].layers;
			for (var m = 0; m < ar.length; m++) {
				if (ar[m].optns.id == au) {
					return ar[m]
				}
			}
		}
		return aa(au)
	};
	ab.jCanvaScript = ab.jc = P
	module.exports = ab.jCanvaScript;
})(window, undefined);