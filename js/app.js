function msieversion() {
	return ua = window.navigator.userAgent,
		msie = ua.indexOf("MSIE "),
	(msie > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && (window.location.href = "http://ccccontemple.com/ie/index.html"),
		!1
}
var global_custom2; !
	function e(t, i, r) {
		function s(a, o) {
			if (!i[a]) {
				if (!t[a]) {
					var l = "function" == typeof require && require;
					if (!o && l) return l(a, !0);
					if (n) return n(a, !0);
					var c = new Error("Cannot find module '" + a + "'");
					throw c.code = "MODULE_NOT_FOUND",
						c
				}
				var h = i[a] = {
					exports: {}
				};
				t[a][0].call(h.exports,
					function(e) {
						var i = t[a][1][e];
						return s(i ? i: e)
					},
					h, h.exports, e, t, i, r)
			}
			return i[a].exports
		}
		for (var n = "function" == typeof require && require,
			     a = 0; a < r.length; a++) s(r[a]);
		return s
	} ({
			1 : [function(e, t, i) {
				"use strict";
				function r(e) {
					return e && e.__esModule ? e: {
						"default": e
					}
				}
				function s(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function n(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function a(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var o = function() {
						function e(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
									r.configurable = !0,
								"value" in r && (r.writable = !0),
									Object.defineProperty(e, r.key, r)
							}
						}
						return function(t, i, r) {
							return i && e(t.prototype, i),
							r && e(t, r),
								t
						}
					} (),
					l = function d(e, t, i) {
						null === e && (e = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(e, t);
						if (void 0 === r) {
							var s = Object.getPrototypeOf(e);
							return null === s ? void 0 : d(s, t, i)
						}
						if ("value" in r) return r.value;
						var n = r.get;
						return void 0 === n ? void 0 : n.call(i)
					},
					c = e("../../index"),
					h = r(c),
					u = function(e) {
						function t(e) {
							s(this, t);
							var i = n(this, Object.getPrototypeOf(t).call(this, e));
							return i.createExtraBound(),
								i.resizing = !1,
								i.cache = null,
								i.dom.divs = Array.prototype.slice.call(e.divs, 0),
								i
						}
						return a(t, e),
							o(t, [{
								key: "createExtraBound",
								value: function() {
									var e = this; ["getCache", "inViewport"].forEach(function(t) {
										return e[t] = e[t].bind(e)
									})
								}
							},
								{
									key: "resize",
									value: function() {
										this.resizing = !0,
											this.getCache(),
											l(Object.getPrototypeOf(t.prototype), "resize", this).call(this),
											this.resizing = !1
									}
								},
								{
									key: "getCache",
									value: function() {
										var e = this;
										this.cache = [],
											this.dom.divs.forEach(function(t, i) {
												t.style.display = "block",
													t.style.transform = "none";
												var r = e.vars.target,
													s = t.getBoundingClientRect(),
													n = {
														el: t,
														state: !0,
														top: s.top + r,
														left: s.left,
														center: s.height / 2,
														bottom: s.bottom + r,
														speed: t.getAttribute("data-speed") || "-1"
													};
												4 === i && console.log(s.top, r, n.top),
													e.cache.push(n)
											}),
											this.vars.bounding = this.dom.section.getBoundingClientRect().height - (this.vars["native"] ? 0 : this.vars.height)
									}
								},
								{
									key: "run",
									value: function() {
										this.dom.divs.forEach(this.inViewport),
											this.dom.section.style[this.prefix] = this.getTransform( - 1 * this.vars.current),
											l(Object.getPrototypeOf(t.prototype), "run", this).call(this)
									}
								},
								{
									key: "inViewport",
									value: function(e, t) {
										if (this.cache && !this.resizing) {
											var i = this.cache[t],
												r = this.vars.current,
												s = (i.top + i.center - r) * i.speed,
												n = Math.round(i.top + s - r),
												a = Math.round(i.bottom + s - r),
												o = a > 0 && n < this.vars.height;
											o ? (e.style.border = "2px solid green", e.style.display = "block", e.style[this.prefix] = this.getTransform(s)) : e.style.border = "2px solid red"
										}
									}
								}]),
							t
					} (h["default"]);
				i["default"] = u
			},
				{
					"../../index": 3
				}],
			2 : [function(e, t, i) {
				"use strict";
				function r(e) {
					return e && e.__esModule ? e: {
						"default": e
					}
				}
				var s = e("./custom"),
					n = r(s);
				global_custom2 = n
			},
				{
					"./custom": 1
				}],
			3 : [function(e, t, i) {
				"use strict";
				function r(e) {
					return e && e.__esModule ? e: {
						"default": e
					}
				}
				function s(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var n = function() {
						function e(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
									r.configurable = !0,
								"value" in r && (r.writable = !0),
									Object.defineProperty(e, r.key, r)
							}
						}
						return function(t, i, r) {
							return i && e(t.prototype, i),
							r && e(t, r),
								t
						}
					} (),
					a = e("dom-classes"),
					o = r(a),
					l = e("dom-create-element"),
					c = r(l),
					h = e("prefix"),
					u = r(h),
					d = e("virtual-scroll"),
					f = r(d),
					p = e("dom-events"),
					_ = r(p),
					m = function() {
						function e() {
							var t = arguments.length <= 0 || void 0 === arguments[0] ? {}: arguments[0];
							s(this, e),
								this.createBound(),
								this.options = t,
								this.prefix = (0, u["default"])("transform"),
								this.rAF = void 0,
								this["extends"] = "Smooth" != this.constructor.name,
								this.vars = {
									direction: this.options.direction || "vertical",
									"native": this.options["native"] || !1,
									ease: this.options.ease || .075,
									preload: this.options.preload || !1,
									current: 0,
									target: 0,
									height: window.innerHeight,
									width: window.innerWidth,
									bounding: 0,
									timer: null,
									ticking: !1
								},
								this.vs = this.vars["native"] ? null: new f["default"]({
									limitInertia: this.options.vs && this.options.vs.limitInertia || !1,
									mouseMultiplier: this.options.vs && this.options.vs.mouseMultiplier || .6,
									touchMultiplier: this.options.vs && this.options.vs.touchMultiplier || 1.5,
									firefoxMultiplier: this.options.vs && this.options.vs.firefoxMultiplier || 30,
									preventTouch: this.options.vs && this.options.vs.preventTouch || !0
								}),
								this.dom = {
									listener: this.options.listener || document.body,
									section: this.options.section || document.querySelector(".vs-section") || null,
									scrollbar: this.vars["native"] || this.options.noscrollbar ? null: {
										state: {
											clicked: !1,
											x: 0
										},
										el: (0, c["default"])({
											selector: "div",
											styles: "vs-scrollbar vs-" + this.vars.direction + " vs-scrollbar-" + this.constructor.name.toLowerCase()
										}),
										drag: {
											el: (0, c["default"])({
												selector: "div",
												styles: "vs-scrolldrag"
											}),
											delta: 0,
											height: 50
										}
									}
								}
						}
						return n(e, [{
							key: "createBound",
							value: function() {
								var e = this; ["run", "calc", "debounce", "resize", "mouseUp", "mouseDown", "mouseMove", "calcScroll", "scrollTo"].forEach(function(t) {
									return e[t] = e[t].bind(e)
								})
							}
						},
							{
								key: "init",
								value: function() {
									this.addClasses(),
									this.vars.preload && this.preloadImages(),
										this.vars["native"] ? this.addFakeScrollHeight() : !this.options.noscrollbar && this.addFakeScrollBar(),
										this.addEvents(),
										this.resize()
								}
							},
							{
								key: "addClasses",
								value: function() {
									var e = this.vars["native"] ? "native": "virtual",
										t = "vertical" === this.vars.direction ? "y": "x";
									o["default"].add(this.dom.listener, "is-" + e + "-scroll"),
										o["default"].add(this.dom.listener, t + "-scroll")
								}
							},
							{
								key: "preloadImages",
								value: function() {
									var e = this,
										t = Array.prototype.slice.call(this.dom.listener.querySelectorAll("img"), 0);
									t.forEach(function(i) {
										var r = document.createElement("img");
										_["default"].once(r, "load",
											function() {
												t.splice(t.indexOf(i), 1),
												0 === t.length && e.resize()
											}),
											r.src = i.getAttribute("src")
									})
								}
							},
							{
								key: "calc",
								value: function(e) {
									var t = "horizontal" == this.vars.direction ? e.deltaX: e.deltaY;
									this.vars.target += -1 * t,
										this.clampTarget()
								}
							},
							{
								key: "debounce",
								value: function() {
									var e = this,
										t = this.dom.listener === document.body;
									this.vars.target = "vertical" === this.vars.direction ? t ? window.scrollY || window.pageYOffset: this.dom.listener.scrollTop: t ? window.scrollX || window.pageXOffset: this.dom.listener.scrollLeft,
										clearTimeout(this.vars.timer),
									this.vars.ticking || (this.vars.ticking = !0, o["default"].add(this.dom.listener, "is-scrolling")),
										this.vars.timer = setTimeout(function() {
												e.vars.ticking = !1,
													o["default"].remove(e.dom.listener, "is-scrolling")
											},
											200)
								}
							},
							{
								key: "run",
								value: function() {
									if (this.vars.current += (this.vars.target - this.vars.current) * this.vars.ease, this.vars.current < .1 && (this.vars.current = 0), this.rAF = requestAnimationFrame(this.run), this["extends"] || (this.dom.section.style[this.prefix] = this.getTransform( - this.vars.current.toFixed(2))), !this.vars["native"] && !this.options.noscrollbar) {
										var e = this.dom.scrollbar.drag.height,
											t = "vertical" === this.vars.direction ? this.vars.height: this.vars.width,
											i = Math.abs(this.vars.current) / (this.vars.bounding / (t - e)) + e / .5 - e,
											r = Math.max(0, Math.min(i - e, i + e));
										this.dom.scrollbar.drag.el.style[this.prefix] = this.getTransform(r.toFixed(2))
									}
								}
							},
							{
								key: "getTransform",
								value: function(e) {
									return "vertical" === this.vars.direction ? "translate3d(0," + e + "px,0)": "translate3d(" + e + "px,0,0)"
								}
							},
							{
								key: "on",
								value: function() {
									var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0],
										t = this.dom.listener === document.body ? window: this.dom.listener;
									this.vars["native"] ? _["default"].on(t, "scroll", this.debounce) : this.vs && this.vs.on(this.calc),
									e && this.requestAnimationFrame()
								}
							},
							{
								key: "off",
								value: function() {
									var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0],
										t = this.dom.listener === document.body ? window: this.dom.listener;
									this.vars["native"] ? _["default"].off(t, "scroll", this.debounce) : this.vs && this.vs.off(this.calc),
									e && this.cancelAnimationFrame()
								}
							},
							{
								key: "requestAnimationFrame",
								value: function(e) {
									function t() {
										return e.apply(this, arguments)
									}
									return t.toString = function() {
										return e.toString()
									},
										t
								} (function() {
									this.rAF = requestAnimationFrame(this.run)
								})
							},
							{
								key: "cancelAnimationFrame",
								value: function(e) {
									function t() {
										return e.apply(this, arguments)
									}
									return t.toString = function() {
										return e.toString()
									},
										t
								} (function() {
									cancelAnimationFrame(this.rAF)
								})
							},
							{
								key: "addEvents",
								value: function() {
									this.on(),
										_["default"].on(window, "resize", this.resize)
								}
							},
							{
								key: "removeEvents",
								value: function() {
									this.off(),
										_["default"].off(window, "resize", this.resize)
								}
							},
							{
								key: "addFakeScrollBar",
								value: function() {
									this.dom.listener.appendChild(this.dom.scrollbar.el),
										this.dom.scrollbar.el.appendChild(this.dom.scrollbar.drag.el),
										_["default"].on(this.dom.scrollbar.el, "click", this.calcScroll),
										_["default"].on(this.dom.scrollbar.el, "mousedown", this.mouseDown),
										_["default"].on(document, "mousemove", this.mouseMove),
										_["default"].on(document, "mouseup", this.mouseUp)
								}
							},
							{
								key: "removeFakeScrollBar",
								value: function() {
									_["default"].off(this.dom.scrollbar.el, "click", this.calcScroll),
										_["default"].off(this.dom.scrollbar.el, "mousedown", this.mouseDown),
										_["default"].off(document, "mousemove", this.mouseMove),
										_["default"].off(document, "mouseup", this.mouseUp),
										this.dom.listener.removeChild(this.dom.scrollbar.el)
								}
							},
							{
								key: "mouseDown",
								value: function(e) {
									e.preventDefault(),
									1 == e.which && (this.dom.scrollbar.state.clicked = !0)
								}
							},
							{
								key: "mouseUp",
								value: function(e) {
									this.dom.scrollbar.state.clicked = !1,
										o["default"].remove(this.dom.listener, "is-dragging")
								}
							},
							{
								key: "mouseMove",
								value: function(e) {
									this.dom.scrollbar.state.clicked && this.calcScroll(e)
								}
							},
							{
								key: "addFakeScrollHeight",
								value: function() {
									this.dom.scroll = (0, c["default"])({
										selector: "div",
										styles: "vs-scroll-view"
									}),
										this.dom.listener.appendChild(this.dom.scroll)
								}
							},
							{
								key: "removeFakeScrollHeight",
								value: function() {
									this.dom.listener.removeChild(this.dom.scroll)
								}
							},
							{
								key: "calcScroll",
								value: function(e) {
									var t = "vertical" == this.vars.direction ? e.clientY: e.clientX,
										i = "vertical" == this.vars.direction ? this.vars.height: this.vars.width,
										r = t * (this.vars.bounding / i);
									o["default"].add(this.dom.listener, "is-dragging"),
										this.vars.target = r,
										this.clampTarget(),
									this.dom.scrollbar && (this.dom.scrollbar.drag.delta = this.vars.target)
								}
							},
							{
								key: "scrollTo",
								value: function(e) {
									this.vars["native"] ? "vertical" == this.vars.direction ? window.scrollTo(0, e) : window.scrollTo(e, 0) : (this.vars.target = e, this.clampTarget())
								}
							},
							{
								key: "resize",
								value: function() {
									var e = "vertical" === this.vars.direction ? "height": "width";
									if (this.vars.height = window.innerHeight, this.vars.width = window.innerWidth, !this["extends"]) {
										var t = this.dom.section.getBoundingClientRect();
										this.vars.bounding = "vertical" === this.vars.direction ? t.height - (this.vars["native"] ? 0 : this.vars.height) : t.right - (this.vars["native"] ? 0 : this.vars.width)
									}
									this.vars["native"] || this.options.noscrollbar ? this.vars["native"] ? this.dom.scroll.style[e] = this.vars.bounding + "px": this.clampTarget() : (this.dom.scrollbar.drag.height = this.vars.height * (this.vars.height / (this.vars.bounding + this.vars.height)), this.dom.scrollbar.drag.el.style[e] = this.dom.scrollbar.drag.height + "px")
								}
							},
							{
								key: "clampTarget",
								value: function() {
									this.vars.target = Math.round(Math.max(0, Math.min(this.vars.target, this.vars.bounding)))
								}
							},
							{
								key: "destroy",
								value: function() {
									this.vars["native"] ? (o["default"].remove(this.dom.listener, "is-native-scroll"), this.removeFakeScrollHeight()) : (o["default"].remove(this.dom.listener, "is-virtual-scroll"), !this.options.noscrollbar && this.removeFakeScrollBar()),
										"vertical" === this.vars.direction ? o["default"].remove(this.dom.listener, "y-scroll") : o["default"].remove(this.dom.listener, "x-scroll"),
									this.vs && (this.vs.destroy(), this.vs = null),
										this.removeEvents()
								}
							}]),
							e
					} ();
				i["default"] = m,
					window.Smooth = m
			},
				{
					"dom-classes": 5,
					"dom-create-element": 6,
					"dom-events": 7,
					prefix: 11,
					"virtual-scroll": 17
				}],
			4 : [function(e, t, i) {
				"use strict";
				function r(e, t) {
					return function() {
						return e.apply(t, arguments)
					}
				}
				var s = Object.prototype.toString,
					n = Object.prototype.hasOwnProperty;
				t.exports = function(e) {
					if (!e) return console.warn("bindAll requires at least one argument.");
					var t = Array.prototype.slice.call(arguments, 1);
					if (0 === t.length) for (var i in e) n.call(e, i) && "function" == typeof e[i] && "[object Function]" == s.call(e[i]) && t.push(i);
					for (var a = 0; a < t.length; a++) {
						var o = t[a];
						e[o] = r(e[o], e)
					}
				}
			},
				{}],
			5 : [function(e, t, i) {
				function r(e) {
					if (e.classList) return e.classList;
					var t = e.className.replace(/^\s+|\s+$/g, ""),
						i = t.split(h);
					return "" === i[0] && i.shift(),
						i
				}
				function s(e, t) {
					if (e.classList) return void e.classList.add(t);
					var i = r(e),
						s = c(i, t);~s || i.push(t),
						e.className = i.join(" ")
				}
				function n(e, t) {
					return e.classList ? e.classList.contains(t) : !!~c(r(e), t)
				}
				function a(e, t) {
					if ("[object RegExp]" == u.call(t)) return o(e, t);
					if (e.classList) return void e.classList.remove(t);
					var i = r(e),
						s = c(i, t);~s && i.splice(s, 1),
						e.className = i.join(" ")
				}
				function o(e, t, i) {
					for (var s = Array.prototype.slice.call(r(e)), n = 0; n < s.length; n++) t.test(s[n]) && a(e, s[n])
				}
				function l(e, t) {
					return e.classList ? e.classList.toggle(t) : void(n(e, t) ? a(e, t) : s(e, t))
				}
				var c = e("indexof"),
					h = /\s+/,
					u = Object.prototype.toString;
				t.exports = r,
					t.exports.add = s,
					t.exports.contains = n,
					t.exports.has = n,
					t.exports.toggle = l,
					t.exports.remove = a,
					t.exports.removeMatching = o
			},
				{
					indexof: 8
				}],
			6 : [function(e, t, i) {
				function r(e) {
					e = e || {};
					var t = document.createElement(e.selector);
					if (e.attr) for (var i in e.attr) e.attr.hasOwnProperty(i) && t.setAttribute(i, e.attr[i]);
					return "a" == e.selector && e.link && (t.href = e.link, e.target && t.setAttribute("target", e.target)),
					"img" == e.selector && e.src && (t.src = e.src, e.lazyload && (t.style.opacity = 0, t.onload = function() {
						t.style.opacity = 1
					})),
					e.id && (t.id = e.id),
					e.styles && (t.className = e.styles),
					e.html && (t.innerHTML = e.html),
					e.children && t.appendChild(e.children),
						t
				}
				t.exports = r
			},
				{}],
			7 : [function(e, t, i) {
				var r = e("synthetic-dom-events"),
					s = function(e, t, i, r) {
						return e.addEventListener(t, i, r || !1)
					},
					n = function(e, t, i, r) {
						return e.removeEventListener(t, i, r || !1)
					},
					a = function(e, t, i, r) {
						function a(s) {
							n(e, t, a, r),
								i(s)
						}
						s(e, t, a, r)
					},
					o = function(e, t, i) {
						var s = r(t, i);
						e.dispatchEvent(s)
					};
				document.addEventListener || (s = function(e, t, i) {
					return e.attachEvent("on" + t, i)
				}),
				document.removeEventListener || (n = function(e, t, i) {
					return e.detachEvent("on" + t, i)
				}),
				document.dispatchEvent || (o = function(e, t, i) {
					var s = r(t, i);
					return e.fireEvent("on" + s.type, s)
				}),
					t.exports = {
						on: s,
						off: n,
						once: a,
						emit: o
					}
			},
				{
					"synthetic-dom-events": 12
				}],
			8 : [function(e, t, i) {
				var r = [].indexOf;
				t.exports = function(e, t) {
					if (r) return e.indexOf(t);
					for (var i = 0; i < e.length; ++i) if (e[i] === t) return i;
					return - 1
				}
			},
				{}],
			9 : [function(e, t, i) { (function() {
				var e;
				e = "undefined" != typeof i && null !== i ? i: this,
					e.Lethargy = function() {
						function e(e, t, i, r) {
							this.stability = null != e ? Math.abs(e) : 8,
								this.sensitivity = null != t ? 1 + Math.abs(t) : 100,
								this.tolerance = null != i ? 1 + Math.abs(i) : 1.1,
								this.delay = null != r ? r: 150,
								this.lastUpDeltas = function() {
									var e, t, i;
									for (i = [], e = 1, t = 2 * this.stability; t >= 1 ? t >= e: e >= t; t >= 1 ? e++:e--) i.push(null);
									return i
								}.call(this),
								this.lastDownDeltas = function() {
									var e, t, i;
									for (i = [], e = 1, t = 2 * this.stability; t >= 1 ? t >= e: e >= t; t >= 1 ? e++:e--) i.push(null);
									return i
								}.call(this),
								this.deltasTimestamp = function() {
									var e, t, i;
									for (i = [], e = 1, t = 2 * this.stability; t >= 1 ? t >= e: e >= t; t >= 1 ? e++:e--) i.push(null);
									return i
								}.call(this)
						}
						return e.prototype.check = function(e) {
							var t;
							return e = e.originalEvent || e,
								null != e.wheelDelta ? t = e.wheelDelta: null != e.deltaY ? t = -40 * e.deltaY: (null != e.detail || 0 === e.detail) && (t = -40 * e.detail),
								this.deltasTimestamp.push(Date.now()),
								this.deltasTimestamp.shift(),
								t > 0 ? (this.lastUpDeltas.push(t), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(t), this.lastDownDeltas.shift(), this.isInertia( - 1))
						},
							e.prototype.isInertia = function(e) {
								var t, i, r, s, n, a, o;
								return t = -1 === e ? this.lastDownDeltas: this.lastUpDeltas,
									null === t[0] ? e: this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && t[0] === t[2 * this.stability - 1] ? !1 : (r = t.slice(0, this.stability), i = t.slice(this.stability, 2 * this.stability), o = r.reduce(function(e, t) {
										return e + t
									}), n = i.reduce(function(e, t) {
										return e + t
									}), a = o / r.length, s = n / i.length, Math.abs(a) < Math.abs(s * this.tolerance) && this.sensitivity < Math.abs(s) ? e: !1)
							},
							e.prototype.showLastUpDeltas = function() {
								return this.lastUpDeltas
							},
							e.prototype.showLastDownDeltas = function() {
								return this.lastDownDeltas
							},
							e
					} ()
			}).call(this)
			},
				{}],
			10 : [function(e, t, i) {
				"use strict";
				function r(e) {
					if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
					return Object(e)
				}
				var s = Object.prototype.hasOwnProperty,
					n = Object.prototype.propertyIsEnumerable;
				t.exports = Object.assign ||
					function(e, t) {
						for (var i, a, o = r(e), l = 1; l < arguments.length; l++) {
							i = Object(arguments[l]);
							for (var c in i) s.call(i, c) && (o[c] = i[c]);
							if (Object.getOwnPropertySymbols) {
								a = Object.getOwnPropertySymbols(i);
								for (var h = 0; h < a.length; h++) n.call(i, a[h]) && (o[a[h]] = i[a[h]])
							}
						}
						return o
					}
			},
				{}],
			11 : [function(e, t, i) {
				function r(e) {
					if (e = e.replace(/-([a-z])/g,
							function(e, t) {
								return t.toUpperCase()
							}), void 0 !== a[e]) return e;
					for (var t = e.charAt(0).toUpperCase() + e.slice(1), i = o.length; i--;) {
						var r = o[i] + t;
						if (void 0 !== a[r]) return r
					}
					return e
				}
				function s(e) {
					return e in c ? c[e] : c[e] = r(e)
				}
				function n(e) {
					return e = r(e),
					l.test(e) && (e = "-" + e.replace(l, "-$1"), l.lastIndex = 0),
						e.toLowerCase()
				}
				var a = "undefined" != typeof document ? document.createElement("p").style: {},
					o = ["O", "ms", "Moz", "Webkit"],
					l = /([A-Z])/g,
					c = {};
				t.exports = s,
					t.exports.dash = n
			},
				{}],
			12 : [function(e, t, i) {
				function r(e, t) {
					return (e.ctrlKey != (t.ctrlKey || !1) || e.altKey != (t.altKey || !1) || e.shiftKey != (t.shiftKey || !1) || e.metaKey != (t.metaKey || !1) || e.keyCode != (t.keyCode || 0) || e.charCode != (t.charCode || 0)) && (e = document.createEvent("Event"), e.initEvent(t.type, t.bubbles, t.cancelable), e.ctrlKey = t.ctrlKey || !1, e.altKey = t.altKey || !1, e.shiftKey = t.shiftKey || !1, e.metaKey = t.metaKey || !1, e.keyCode = t.keyCode || 0, e.charCode = t.charCode || 0),
						e
				}
				var s = (window, document || {}),
					n = (s.documentElement || {},
						!0);
				try {
					s.createEvent("KeyEvents")
				} catch(a) {
					n = !1
				}
				var o = function(e, t) {
						t = t || {};
						var i = u(e),
							a = i;
						"KeyboardEvent" === i && n && (i = "KeyEvents", a = "KeyEvent");
						var o = s.createEvent(i),
							l = "init" + a,
							h = "function" == typeof o[l] ? l: "initEvent",
							d = c[h],
							f = [],
							p = {};
						t.type = e;
						for (var _ = 0; _ < d.length; ++_) {
							var m = d[_],
								g = t[m];
							void 0 === g && (g = o[m]),
								p[m] = !0,
								f.push(g)
						}
						o[h].apply(o, f),
						"KeyboardEvent" === i && (o = r(o, t));
						for (var m in t) p[m] || (o[m] = t[m]);
						return o
					},
					l = function(e, t) {
						t = t || {};
						var i = s.createEventObject();
						i.type = e;
						for (var r in t) void 0 !== t[r] && (i[r] = t[r]);
						return i
					};
				t.exports = s.createEvent ? o: l;
				var c = e("./init.json"),
					h = e("./types.json"),
					u = function() {
						var e = {};
						for (var t in h) for (var i = h[t], r = 0; r < i.length; r++) e[i[r]] = t;
						return function(t) {
							return e[t] || "Event"
						}
					} ()
			},
				{
					"./init.json": 13,
					"./types.json": 14
				}],
			13 : [function(e, t, i) {
				t.exports = {
					initEvent: ["type", "bubbles", "cancelable"],
					initUIEvent: ["type", "bubbles", "cancelable", "view", "detail"],
					initMouseEvent: ["type", "bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget"],
					initMutationEvent: ["type", "bubbles", "cancelable", "relatedNode", "prevValue", "newValue", "attrName", "attrChange"],
					initKeyboardEvent: ["type", "bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"],
					initKeyEvent: ["type", "bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"]
				}
			},
				{}],
			14 : [function(e, t, i) {
				t.exports = {
					MouseEvent: ["click", "mousedown", "mouseup", "mouseover", "mousemove", "mouseout"],
					KeyboardEvent: ["keydown", "keyup", "keypress"],
					MutationEvent: ["DOMSubtreeModified", "DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMAttrModified", "DOMCharacterDataModified"],
					HTMLEvents: ["load", "unload", "abort", "error", "select", "change", "submit", "reset", "focus", "blur", "resize", "scroll"],
					UIEvent: ["DOMFocusIn", "DOMFocusOut", "DOMActivate"]
				}
			},
				{}],
			15 : [function(e, t, i) {
				function r() {}
				r.prototype = {
					on: function(e, t, i) {
						var r = this.e || (this.e = {});
						return (r[e] || (r[e] = [])).push({
							fn: t,
							ctx: i
						}),
							this
					},
					once: function(e, t, i) {
						function r() {
							s.off(e, r),
								t.apply(i, arguments)
						}
						var s = this;
						return r._ = t,
							this.on(e, r, i)
					},
					emit: function(e) {
						var t = [].slice.call(arguments, 1),
							i = ((this.e || (this.e = {}))[e] || []).slice(),
							r = 0,
							s = i.length;
						for (r; s > r; r++) i[r].fn.apply(i[r].ctx, t);
						return this
					},
					off: function(e, t) {
						var i = this.e || (this.e = {}),
							r = i[e],
							s = [];
						if (r && t) for (var n = 0,
							                 a = r.length; a > n; n++) r[n].fn !== t && r[n].fn._ !== t && s.push(r[n]);
						return s.length ? i[e] = s: delete i[e],
							this
					}
				},
					t.exports = r
			},
				{}],
			16 : [function(e, t, i) {
				"use strict";
				t.exports = function(e) {
					return JSON.parse(JSON.stringify(e))
				}
			},
				{}],
			17 : [function(e, t, i) {
				"use strict";
				function r(e) {
					l(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
						this.el = window,
					e && e.el && (this.el = e.el, delete e.el),
						this.options = s({
								mouseMultiplier: 1,
								touchMultiplier: 2,
								firefoxMultiplier: 15,
								keyStep: 120,
								preventTouch: !1,
								unpreventTouchClass: "vs-touchmove-allowed",
								limitInertia: !1
							},
							e),
					this.options.limitInertia && (this._lethargy = new a),
						this._emitter = new n,
						this._event = {
							y: 0,
							x: 0,
							deltaX: 0,
							deltaY: 0
						},
						this.touchStartX = null,
						this.touchStartY = null,
						this.bodyTouchAction = null
				}
				var s = e("object-assign"),
					n = e("tiny-emitter"),
					a = e("lethargy").Lethargy,
					o = e("./support"),
					l = (e("./clone"), e("bindall-standalone")),
					c = "virtualscroll";
				t.exports = r;
				var h = {
					LEFT: 37,
					UP: 38,
					RIGHT: 39,
					DOWN: 40
				};
				r.prototype._notify = function(e) {
					var t = this._event;
					t.x += t.deltaX,
						t.y += t.deltaY,
						this._emitter.emit(c, {
							x: t.x,
							y: t.y,
							deltaX: t.deltaX,
							deltaY: t.deltaY,
							originalEvent: e
						})
				},
					r.prototype._onWheel = function(e) {
						var t = this.options;
						if (!this._lethargy || this._lethargy.check(e) !== !1) {
							var i = this._event;
							i.deltaX = e.wheelDeltaX || -1 * e.deltaX,
								i.deltaY = e.wheelDeltaY || -1 * e.deltaY,
							o.isFirefox && 1 == e.deltaMode && (i.deltaX *= t.firefoxMultiplier, i.deltaY *= t.firefoxMultiplier),
								i.deltaX *= t.mouseMultiplier,
								i.deltaY *= t.mouseMultiplier,
								this._notify(e)
						}
					},
					r.prototype._onMouseWheel = function(e) {
						if (!this.options.limitInertia || this._lethargy.check(e) !== !1) {
							var t = this._event;
							t.deltaX = e.wheelDeltaX ? e.wheelDeltaX: 0,
								t.deltaY = e.wheelDeltaY ? e.wheelDeltaY: e.wheelDelta,
								this._notify(e)
						}
					},
					r.prototype._onTouchStart = function(e) {
						var t = e.targetTouches ? e.targetTouches[0] : e;
						this.touchStartX = t.pageX,
							this.touchStartY = t.pageY
					},
					r.prototype._onTouchMove = function(e) {
						var t = this.options;
						t.preventTouch && !e.target.classList.contains(t.unpreventTouchClass) && e.preventDefault();
						var i = this._event,
							r = e.targetTouches ? e.targetTouches[0] : e;
						i.deltaX = (r.pageX - this.touchStartX) * t.touchMultiplier,
							i.deltaY = (r.pageY - this.touchStartY) * t.touchMultiplier,
							this.touchStartX = r.pageX,
							this.touchStartY = r.pageY,
							this._notify(e)
					},
					r.prototype._onKeyDown = function(e) {
						var t = this._event;
						switch (t.deltaX = t.deltaY = 0, e.keyCode) {
							case h.LEFT:
							case h.UP:
								t.deltaY = this.options.keyStep;
								break;
							case h.RIGHT:
							case h.DOWN:
								t.deltaY = -this.options.keyStep;
								break;
							default:
								return
						}
						this._notify(e)
					},
					r.prototype._bind = function() {
						o.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel),
						o.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel),
						o.hasTouch && (this.el.addEventListener("touchstart", this._onTouchStart), this.el.addEventListener("touchmove", this._onTouchMove)),
						o.hasPointer && o.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
						o.hasKeyDown && document.addEventListener("keydown", this._onKeyDown)
					},
					r.prototype._unbind = function() {
						o.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
						o.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel),
						o.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)),
						o.hasPointer && o.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
						o.hasKeyDown && document.removeEventListener("keydown", this._onKeyDown)
					},
					r.prototype.on = function(e, t) {
						this._emitter.on(c, e, t);
						var i = this._emitter.e;
						i && i[c] && 1 === i[c].length && this._bind()
					},
					r.prototype.off = function(e, t) {
						this._emitter.off(c, e, t);
						var i = this._emitter.e; (!i[c] || i[c].length <= 0) && this._unbind()
					},
					r.prototype.reset = function() {
						var e = this._event;
						e.x = 0,
							e.y = 0
					},
					r.prototype.destroy = function() {
						this._emitter.off(),
							this._unbind()
					}
			},
				{
					"./clone": 16,
					"./support": 18,
					"bindall-standalone": 4,
					lethargy: 9,
					"object-assign": 10,
					"tiny-emitter": 15
				}],
			18 : [function(e, t, i) {
				"use strict";
				t.exports = function() {
					return {
						hasWheelEvent: "onwheel" in document,
						hasMouseWheelEvent: "onmousewheel" in document,
						hasTouch: "ontouchstart" in document,
						hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
						hasPointer: !!window.navigator.msPointerEnabled,
						hasKeyDown: "onkeydown" in document,
						isFirefox: navigator.userAgent.indexOf("Firefox") > -1
					}
				} ()
			},
				{}]
		},
		{},
		[2]);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global: this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
	"use strict";
	_gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
		function(e, t, i) {
			var r = function(e) {
					var t, i = [],
						r = e.length;
					for (t = 0; t !== r; i.push(e[t++]));
					return i
				},
				s = function(e, t, r) {
					i.call(this, e, t, r),
						this._cycle = 0,
						this._yoyo = this.vars.yoyo === !0,
						this._repeat = this.vars.repeat || 0,
						this._repeatDelay = this.vars.repeatDelay || 0,
						this._dirty = !0,
						this.render = s.prototype.render
				},
				n = 1e-10,
				a = i._internals,
				o = a.isSelector,
				l = a.isArray,
				c = s.prototype = i.to({},
					.1, {}),
				h = [];
			s.version = "1.16.0",
				c.constructor = s,
				c.kill()._gc = !1,
				s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf,
				s.getTweensOf = i.getTweensOf,
				s.lagSmoothing = i.lagSmoothing,
				s.ticker = i.ticker,
				s.render = i.render,
				c.invalidate = function() {
					return this._yoyo = this.vars.yoyo === !0,
						this._repeat = this.vars.repeat || 0,
						this._repeatDelay = this.vars.repeatDelay || 0,
						this._uncache(!0),
						i.prototype.invalidate.call(this)
				},
				c.updateTo = function(e, t) {
					var r, s = this.ratio,
						n = this.vars.immediateRender || e.immediateRender;
					t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
					for (r in e) this.vars[r] = e[r];
					if (this._initted || n) if (t) this._initted = !1,
					n && this.render(0, !0, !0);
					else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
						var a = this._time;
						this.render(0, !0, !1),
							this._initted = !1,
							this.render(a, !0, !1)
					} else if (this._time > 0 || n) {
						this._initted = !1,
							this._init();
						for (var o, l = 1 / (1 - s), c = this._firstPT; c;) o = c.s + c.c,
							c.c *= l,
							c.s = o - c.c,
							c = c._next
					}
					return this
				},
				c.render = function(e, t, i) {
					this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
					var r, s, o, l, c, u, d, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
						_ = this._time,
						m = this._totalTime,
						g = this._cycle,
						v = this._duration,
						y = this._rawPrevTime;
					if (e >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > y || y === n) && y !== e && (i = !0, y > n && (s = "onReverseComplete")), this._rawPrevTime = f = !t || e || y === e ? e: n)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && y > 0) && (s = "onReverseComplete", r = this._reversed), 0 > e && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = f = !t || e || y === e ? e: n)), this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v: 0 > this._time && (this._time = 0)), this._easeType ? (c = this._time / v, u = this._easeType, d = this._easePower, (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === d ? c *= c: 2 === d ? c *= c * c: 3 === d ? c *= c * c * c: 4 === d && (c *= c * c * c * c), this.ratio = 1 === u ? 1 - c: 2 === u ? c: .5 > this._time / v ? c / 2 : 1 - c / 2) : this.ratio = this._ease.getRatio(this._time / v)), _ === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)));
					if (!this._initted) {
						if (this._init(), !this._initted || this._gc) return;
						if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = _,
							this._totalTime = m,
							this._rawPrevTime = y,
							this._cycle = g,
							a.lazyTweens.push(this),
							void(this._lazy = [e, t]);
						this._time && !r ? this.ratio = this._ease.getRatio(this._time / v) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== _ && e >= 0 && (this._active = !0), 0 === m && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
						o = o._next;
					this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._totalTime !== m || r) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)),
					this._cycle !== g && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || h)),
					s && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || h), 0 === v && this._rawPrevTime === n && f !== n && (this._rawPrevTime = 0))
				},
				s.to = function(e, t, i) {
					return new s(e, t, i)
				},
				s.from = function(e, t, i) {
					return i.runBackwards = !0,
						i.immediateRender = 0 != i.immediateRender,
						new s(e, t, i)
				},
				s.fromTo = function(e, t, i, r) {
					return r.startAt = i,
						r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
						new s(e, t, r)
				},
				s.staggerTo = s.allTo = function(e, t, n, a, c, u, d) {
					a = a || 0;
					var f, p, _, m, g = n.delay || 0,
						v = [],
						y = function() {
							n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments),
								c.apply(d || this, u || h)
						};
					for (l(e) || ("string" == typeof e && (e = i.selector(e) || e), o(e) && (e = r(e))), e = e || [], 0 > a && (e = r(e), e.reverse(), a *= -1), f = e.length - 1, _ = 0; f >= _; _++) {
						p = {};
						for (m in n) p[m] = n[m];
						p.delay = g,
						_ === f && c && (p.onComplete = y),
							v[_] = new s(e[_], t, p),
							g += a
					}
					return v
				},
				s.staggerFrom = s.allFrom = function(e, t, i, r, n, a, o) {
					return i.runBackwards = !0,
						i.immediateRender = 0 != i.immediateRender,
						s.staggerTo(e, t, i, r, n, a, o)
				},
				s.staggerFromTo = s.allFromTo = function(e, t, i, r, n, a, o, l) {
					return r.startAt = i,
						r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
						s.staggerTo(e, t, r, n, a, o, l)
				},
				s.delayedCall = function(e, t, i, r, n) {
					return new s(t, 0, {
						delay: e,
						onComplete: t,
						onCompleteParams: i,
						onCompleteScope: r,
						onReverseComplete: t,
						onReverseCompleteParams: i,
						onReverseCompleteScope: r,
						immediateRender: !1,
						useFrames: n,
						overwrite: 0
					})
				},
				s.set = function(e, t) {
					return new s(e, 0, t)
				},
				s.isTweening = function(e) {
					return i.getTweensOf(e, !0).length > 0
				};
			var u = function(e, t) {
					for (var r = [], s = 0, n = e._first; n;) n instanceof i ? r[s++] = n: (t && (r[s++] = n), r = r.concat(u(n, t)), s = r.length),
						n = n._next;
					return r
				},
				d = s.getAllTweens = function(t) {
					return u(e._rootTimeline, t).concat(u(e._rootFramesTimeline, t))
				};
			s.killAll = function(e, i, r, s) {
				null == i && (i = !0),
				null == r && (r = !0);
				var n, a, o, l = d(0 != s),
					c = l.length,
					h = i && r && s;
				for (o = 0; c > o; o++) a = l[o],
				(h || a instanceof t || (n = a.target === a.vars.onComplete) && r || i && !n) && (e ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
			},
				s.killChildTweensOf = function(e, t) {
					if (null != e) {
						var n, c, h, u, d, f = a.tweenLookup;
						if ("string" == typeof e && (e = i.selector(e) || e), o(e) && (e = r(e)), l(e)) for (u = e.length; --u > -1;) s.killChildTweensOf(e[u], t);
						else {
							n = [];
							for (h in f) for (c = f[h].target.parentNode; c;) c === e && (n = n.concat(f[h].tweens)),
								c = c.parentNode;
							for (d = n.length, u = 0; d > u; u++) t && n[u].totalTime(n[u].totalDuration()),
								n[u]._enabled(!1, !1)
						}
					}
				};
			var f = function(e, i, r, s) {
				i = i !== !1,
					r = r !== !1,
					s = s !== !1;
				for (var n, a, o = d(s), l = i && r && s, c = o.length; --c > -1;) a = o[c],
				(l || a instanceof t || (n = a.target === a.vars.onComplete) && r || i && !n) && a.paused(e)
			};
			return s.pauseAll = function(e, t, i) {
				f(!0, e, t, i)
			},
				s.resumeAll = function(e, t, i) {
					f(!1, e, t, i)
				},
				s.globalTimeScale = function(t) {
					var r = e._rootTimeline,
						s = i.ticker.time;
					return arguments.length ? (t = t || n, r._startTime = s - (s - r._startTime) * r._timeScale / t, r = e._rootFramesTimeline, s = i.ticker.frame, r._startTime = s - (s - r._startTime) * r._timeScale / t, r._timeScale = e._rootTimeline._timeScale = t, t) : r._timeScale
				},
				c.progress = function(e) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e: e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
				},
				c.totalProgress = function(e) {
					return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
				},
				c.time = function(e, t) {
					return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
				},
				c.duration = function(t) {
					return arguments.length ? e.prototype.duration.call(this, t) : this._duration
				},
				c.totalDuration = function(e) {
					return arguments.length ? -1 === this._repeat ? this: this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
				},
				c.repeat = function(e) {
					return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
				},
				c.repeatDelay = function(e) {
					return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
				},
				c.yoyo = function(e) {
					return arguments.length ? (this._yoyo = e, this) : this._yoyo
				},
				s
		},
		!0),
		_gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
			function(e, t, i) {
				var r = function(e) {
						t.call(this, e),
							this._labels = {},
							this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
							this.smoothChildTiming = this.vars.smoothChildTiming === !0,
							this._sortChildren = !0,
							this._onUpdate = this.vars.onUpdate;
						var i, r, s = this.vars;
						for (r in s) i = s[r],
						l(i) && -1 !== i.join("").indexOf("{self}") && (s[r] = this._swapSelfInParams(i));
						l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
					},
					s = 1e-10,
					n = i._internals,
					a = r._internals = {},
					o = n.isSelector,
					l = n.isArray,
					c = n.lazyTweens,
					h = n.lazyRender,
					u = [],
					d = _gsScope._gsDefine.globals,
					f = function(e) {
						var t, i = {};
						for (t in e) i[t] = e[t];
						return i
					},
					p = a.pauseCallback = function(e, t, i, r) {
						var n, a = e._timeline,
							o = a._totalTime,
							l = e._startTime,
							c = e.ratio ? s: 0,
							h = e.ratio ? 0 : s;
						if (t || !this._forcingPlayhead) {
							for (a.pause(l), n = e._prev; n && n._startTime === l;) n._rawPrevTime = h,
								n = n._prev;
							for (n = e._next; n && n._startTime === l;) n._rawPrevTime = c,
								n = n._next;
							t && t.apply(r || a, i || u),
							this._forcingPlayhead && a.seek(o)
						}
					},
					_ = function(e) {
						var t, i = [],
							r = e.length;
						for (t = 0; t !== r; i.push(e[t++]));
						return i
					},
					m = r.prototype = new t;
				return r.version = "1.16.0",
					m.constructor = r,
					m.kill()._gc = m._forcingPlayhead = !1,
					m.to = function(e, t, r, s) {
						var n = r.repeat && d.TweenMax || i;
						return t ? this.add(new n(e, t, r), s) : this.set(e, r, s)
					},
					m.from = function(e, t, r, s) {
						return this.add((r.repeat && d.TweenMax || i).from(e, t, r), s)
					},
					m.fromTo = function(e, t, r, s, n) {
						var a = s.repeat && d.TweenMax || i;
						return t ? this.add(a.fromTo(e, t, r, s), n) : this.set(e, s, n)
					},
					m.staggerTo = function(e, t, s, n, a, l, c, h) {
						var u, d = new r({
							onComplete: l,
							onCompleteParams: c,
							onCompleteScope: h,
							smoothChildTiming: this.smoothChildTiming
						});
						for ("string" == typeof e && (e = i.selector(e) || e), e = e || [], o(e) && (e = _(e)), n = n || 0, 0 > n && (e = _(e), e.reverse(), n *= -1), u = 0; e.length > u; u++) s.startAt && (s.startAt = f(s.startAt)),
							d.to(e[u], t, f(s), u * n);
						return this.add(d, a)
					},
					m.staggerFrom = function(e, t, i, r, s, n, a, o) {
						return i.immediateRender = 0 != i.immediateRender,
							i.runBackwards = !0,
							this.staggerTo(e, t, i, r, s, n, a, o)
					},
					m.staggerFromTo = function(e, t, i, r, s, n, a, o, l) {
						return r.startAt = i,
							r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
							this.staggerTo(e, t, r, s, n, a, o, l)
					},
					m.call = function(e, t, r, s) {
						return this.add(i.delayedCall(0, e, t, r), s)
					},
					m.set = function(e, t, r) {
						return r = this._parseTimeOrLabel(r, 0, !0),
						null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused),
							this.add(new i(e, 0, t), r)
					},
					r.exportRoot = function(e, t) {
						e = e || {},
						null == e.smoothChildTiming && (e.smoothChildTiming = !0);
						var s, n, a = new r(e),
							o = a._timeline;
						for (null == t && (t = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, s = o._first; s;) n = s._next,
						t && s instanceof i && s.target === s.vars.onComplete || a.add(s, s._startTime - s._delay),
							s = n;
						return o.add(a, 0),
							a
					},
					m.add = function(s, n, a, o) {
						var c, h, u, d, f, p;
						if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, s)), !(s instanceof e)) {
							if (s instanceof Array || s && s.push && l(s)) {
								for (a = a || "normal", o = o || 0, c = n, h = s.length, u = 0; h > u; u++) l(d = s[u]) && (d = new r({
									tweens: d
								})),
									this.add(d, c),
								"string" != typeof d && "function" != typeof d && ("sequence" === a ? c = d._startTime + d.totalDuration() / d._timeScale: "start" === a && (d._startTime -= d.delay())),
									c += o;
								return this._uncache(!0)
							}
							if ("string" == typeof s) return this.addLabel(s, n);
							if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
							s = i.delayedCall(0, s)
						}
						if (t.prototype.add.call(this, s, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (f = this, p = f.rawTime() > s._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1),
							f = f._timeline;
						return this
					},
					m.remove = function(t) {
						if (t instanceof e) return this._remove(t, !1);
						if (t instanceof Array || t && t.push && l(t)) {
							for (var i = t.length; --i > -1;) this.remove(t[i]);
							return this
						}
						return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
					},
					m._remove = function(e, i) {
						t.prototype._remove.call(this, e, i);
						var r = this._last;
						return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
							this
					},
					m.append = function(e, t) {
						return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
					},
					m.insert = m.insertMultiple = function(e, t, i, r) {
						return this.add(e, t || 0, i, r)
					},
					m.appendMultiple = function(e, t, i, r) {
						return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, r)
					},
					m.addLabel = function(e, t) {
						return this._labels[e] = this._parseTimeOrLabel(t),
							this
					},
					m.addPause = function(e, t, r, s) {
						var n = i.delayedCall(0, p, ["{self}", t, r, s], this);
						return n.data = "isPause",
							this.add(n, e)
					},
					m.removeLabel = function(e) {
						return delete this._labels[e],
							this
					},
					m.getLabelTime = function(e) {
						return null != this._labels[e] ? this._labels[e] : -1
					},
					m._parseTimeOrLabel = function(t, i, r, s) {
						var n;
						if (s instanceof e && s.timeline === this) this.remove(s);
						else if (s && (s instanceof Array || s.push && l(s))) for (n = s.length; --n > -1;) s[n] instanceof e && s[n].timeline === this && this.remove(s[n]);
						if ("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, r);
						if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
						else {
							if (n = t.indexOf("="), -1 === n) return null == this._labels[t] ? r ? this._labels[t] = this.duration() + i: i: this._labels[t] + i;
							i = parseInt(t.charAt(n - 1) + "1", 10) * Number(t.substr(n + 1)),
								t = n > 1 ? this._parseTimeOrLabel(t.substr(0, n - 1), 0, r) : this.duration()
						}
						return Number(t) + i
					},
					m.seek = function(e, t) {
						return this.totalTime("number" == typeof e ? e: this._parseTimeOrLabel(e), t !== !1)
					},
					m.stop = function() {
						return this.paused(!0)
					},
					m.gotoAndPlay = function(e, t) {
						return this.play(e, t)
					},
					m.gotoAndStop = function(e, t) {
						return this.pause(e, t)
					},
					m.render = function(e, t, i) {
						this._gc && this._enabled(!0, !1);
						var r, n, a, o, l, d = this._dirty ? this.totalDuration() : this._totalDuration,
							f = this._time,
							p = this._startTime,
							_ = this._timeScale,
							m = this._paused;
						if (e >= d) this._totalTime = this._time = d,
						this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === e || 0 > this._rawPrevTime || this._rawPrevTime === s) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > s && (o = "onReverseComplete"))),
							this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e: s,
							e = d + 1e-4;
						else if (1e-7 > e) if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > e) this._active = !1,
							this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0),
							this._rawPrevTime = e;
						else {
							if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e: s, 0 === e && n) for (r = this._first; r && 0 === r._startTime;) r._duration || (n = !1),
								r = r._next;
							e = 0,
							this._initted || (l = !0)
						} else this._totalTime = this._time = this._rawPrevTime = e;
						if (this._time !== f && this._first || i || l) {
							if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && e > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= f) for (r = this._first; r && (a = r._next, !this._paused || m);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)),
								r = a;
							else for (r = this._last; r && (a = r._prev, !this._paused || m);)(r._active || f >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)),
								r = a;
							this._onUpdate && (t || (c.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))),
							o && (this._gc || (p === this._startTime || _ !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (n && (c.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || u)))
						}
					},
					m._hasPausedChild = function() {
						for (var e = this._first; e;) {
							if (e._paused || e instanceof r && e._hasPausedChild()) return ! 0;
							e = e._next
						}
						return ! 1
					},
					m.getChildren = function(e, t, r, s) {
						s = s || -9999999999;
						for (var n = [], a = this._first, o = 0; a;) s > a._startTime || (a instanceof i ? t !== !1 && (n[o++] = a) : (r !== !1 && (n[o++] = a), e !== !1 && (n = n.concat(a.getChildren(!0, t, r)), o = n.length))),
							a = a._next;
						return n
					},
					m.getTweensOf = function(e, t) {
						var r, s, n = this._gc,
							a = [],
							o = 0;
						for (n && this._enabled(!0, !0), r = i.getTweensOf(e), s = r.length; --s > -1;)(r[s].timeline === this || t && this._contains(r[s])) && (a[o++] = r[s]);
						return n && this._enabled(!1, !0),
							a
					},
					m.recent = function() {
						return this._recent
					},
					m._contains = function(e) {
						for (var t = e.timeline; t;) {
							if (t === this) return ! 0;
							t = t.timeline
						}
						return ! 1
					},
					m.shiftChildren = function(e, t, i) {
						i = i || 0;
						for (var r, s = this._first,
							     n = this._labels; s;) s._startTime >= i && (s._startTime += e),
							s = s._next;
						if (t) for (r in n) n[r] >= i && (n[r] += e);
						return this._uncache(!0)
					},
					m._kill = function(e, t) {
						if (!e && !t) return this._enabled(!1, !1);
						for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = i.length, s = !1; --r > -1;) i[r]._kill(e, t) && (s = !0);
						return s
					},
					m.clear = function(e) {
						var t = this.getChildren(!1, !0, !0),
							i = t.length;
						for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
						return e !== !1 && (this._labels = {}),
							this._uncache(!0)
					},
					m.invalidate = function() {
						for (var t = this._first; t;) t.invalidate(),
							t = t._next;
						return e.prototype.invalidate.call(this)
					},
					m._enabled = function(e, i) {
						if (e === this._gc) for (var r = this._first; r;) r._enabled(e, !0),
							r = r._next;
						return t.prototype._enabled.call(this, e, i)
					},
					m.totalTime = function() {
						this._forcingPlayhead = !0;
						var t = e.prototype.totalTime.apply(this, arguments);
						return this._forcingPlayhead = !1,
							t
					},
					m.duration = function(e) {
						return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
					},
					m.totalDuration = function(e) {
						if (!arguments.length) {
							if (this._dirty) {
								for (var t, i, r = 0,
									     s = this._last,
									     n = 999999999999; s;) t = s._prev,
								s._dirty && s.totalDuration(),
									s._startTime > n && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : n = s._startTime,
								0 > s._startTime && !s._paused && (r -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren( - s._startTime, !1, -9999999999), n = 0),
									i = s._startTime + s._totalDuration / s._timeScale,
								i > r && (r = i),
									s = t;
								this._duration = this._totalDuration = r,
									this._dirty = !1
							}
							return this._totalDuration
						}
						return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e),
							this
					},
					m.paused = function(t) {
						if (!t) for (var i = this._first,
							             r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = r),
							i = i._next;
						return e.prototype.paused.apply(this, arguments)
					},
					m.usesFrames = function() {
						for (var t = this._timeline; t._timeline;) t = t._timeline;
						return t === e._rootFramesTimeline
					},
					m.rawTime = function() {
						return this._paused ? this._totalTime: (this._timeline.rawTime() - this._startTime) * this._timeScale
					},
					r
			},
			!0),
		_gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"],
			function(e, t, i) {
				var r = function(t) {
						e.call(this, t),
							this._repeat = this.vars.repeat || 0,
							this._repeatDelay = this.vars.repeatDelay || 0,
							this._cycle = 0,
							this._yoyo = this.vars.yoyo === !0,
							this._dirty = !0
					},
					s = 1e-10,
					n = [],
					a = t._internals,
					o = a.lazyTweens,
					l = a.lazyRender,
					c = new i(null, null, 1, 0),
					h = r.prototype = new e;
				return h.constructor = r,
					h.kill()._gc = !1,
					r.version = "1.16.0",
					h.invalidate = function() {
						return this._yoyo = this.vars.yoyo === !0,
							this._repeat = this.vars.repeat || 0,
							this._repeatDelay = this.vars.repeatDelay || 0,
							this._uncache(!0),
							e.prototype.invalidate.call(this)
					},
					h.addCallback = function(e, i, r, s) {
						return this.add(t.delayedCall(0, e, r, s), i)
					},
					h.removeCallback = function(e, t) {
						if (e) if (null == t) this._kill(null, e);
						else for (var i = this.getTweensOf(e, !1), r = i.length, s = this._parseTimeOrLabel(t); --r > -1;) i[r]._startTime === s && i[r]._enabled(!1, !1);
						return this
					},
					h.removePause = function(t) {
						return this.removeCallback(e._internals.pauseCallback, t)
					},
					h.tweenTo = function(e, i) {
						i = i || {};
						var r, s, a, o = {
							ease: c,
							useFrames: this.usesFrames(),
							immediateRender: !1
						};
						for (s in i) o[s] = i[s];
						return o.time = this._parseTimeOrLabel(e),
							r = Math.abs(Number(o.time) - this._time) / this._timeScale || .001,
							a = new t(this, r, o),
							o.onStart = function() {
								a.target.paused(!0),
								a.vars.time !== a.target.time() && r === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale),
								i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || n)
							},
							a
					},
					h.tweenFromTo = function(e, t, i) {
						i = i || {},
							e = this._parseTimeOrLabel(e),
							i.startAt = {
								onComplete: this.seek,
								onCompleteParams: [e],
								onCompleteScope: this
							},
							i.immediateRender = i.immediateRender !== !1;
						var r = this.tweenTo(t, i);
						return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
					},
					h.render = function(e, t, i) {
						this._gc && this._enabled(!0, !1);
						var r, a, c, h, u, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
							p = this._duration,
							_ = this._time,
							m = this._totalTime,
							g = this._startTime,
							v = this._timeScale,
							y = this._rawPrevTime,
							w = this._paused,
							T = this._cycle;
						if (e >= f) this._locked || (this._totalTime = f, this._cycle = this._repeat),
						this._reversed || this._hasPausedChild() || (a = !0, h = "onComplete", 0 === this._duration && (0 === e || 0 > y || y === s) && y !== e && this._first && (u = !0, y > s && (h = "onReverseComplete"))),
							this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e: s,
							this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = p, e = p + 1e-4);
						else if (1e-7 > e) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== _ || 0 === p && y !== s && (y > 0 || 0 > e && y >= 0) && !this._locked) && (h = "onReverseComplete", a = this._reversed), 0 > e) this._active = !1,
							this._timeline.autoRemoveChildren && this._reversed ? (u = a = !0, h = "onReverseComplete") : y >= 0 && this._first && (u = !0),
							this._rawPrevTime = e;
						else {
							if (this._rawPrevTime = p || !t || e || this._rawPrevTime === e ? e: s, 0 === e && a) for (r = this._first; r && 0 === r._startTime;) r._duration || (a = !1),
								r = r._next;
							e = 0,
							this._initted || (u = !0)
						} else 0 === p && 0 > y && (u = !0),
							this._time = this._rawPrevTime = e,
						this._locked || (this._totalTime = e, 0 !== this._repeat && (d = p + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, e = p + 1e-4) : 0 > this._time ? this._time = e = 0 : e = this._time));
						if (this._cycle !== T && !this._locked) {
							var b = this._yoyo && 0 !== (1 & T),
								x = b === (this._yoyo && 0 !== (1 & this._cycle)),
								P = this._totalTime,
								O = this._cycle,
								S = this._rawPrevTime,
								k = this._time;
							if (this._totalTime = T * p, T > this._cycle ? b = !b: this._totalTime += p, this._time = _, this._rawPrevTime = 0 === p ? y - 1e-4: y, this._cycle = T, this._locked = !0, _ = b ? 0 : p, this.render(_, t, 0 === p), t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), x && (_ = b ? p + 1e-4: -1e-4, this.render(_, !0, !1)), this._locked = !1, this._paused && !w) return;
							this._time = k,
								this._totalTime = P,
								this._cycle = O,
								this._rawPrevTime = S
						}
						if (! (this._time !== _ && this._first || i || u)) return void(m !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)));
						if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && e > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= _) for (r = this._first; r && (c = r._next, !this._paused || w);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)),
							r = c;
						else for (r = this._last; r && (c = r._prev, !this._paused || w);)(r._active || _ >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)),
							r = c;
						this._onUpdate && (t || (o.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n))),
						h && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (a && (o.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || n)))
					},
					h.getActive = function(e, t, i) {
						null == e && (e = !0),
						null == t && (t = !0),
						null == i && (i = !1);
						var r, s, n = [],
							a = this.getChildren(e, t, i),
							o = 0,
							l = a.length;
						for (r = 0; l > r; r++) s = a[r],
						s.isActive() && (n[o++] = s);
						return n
					},
					h.getLabelAfter = function(e) {
						e || 0 !== e && (e = this._time);
						var t, i = this.getLabelsArray(),
							r = i.length;
						for (t = 0; r > t; t++) if (i[t].time > e) return i[t].name;
						return null
					},
					h.getLabelBefore = function(e) {
						null == e && (e = this._time);
						for (var t = this.getLabelsArray(), i = t.length; --i > -1;) if (e > t[i].time) return t[i].name;
						return null
					},
					h.getLabelsArray = function() {
						var e, t = [],
							i = 0;
						for (e in this._labels) t[i++] = {
							time: this._labels[e],
							name: e
						};
						return t.sort(function(e, t) {
							return e.time - t.time
						}),
							t
					},
					h.progress = function(e, t) {
						return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e: e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
					},
					h.totalProgress = function(e, t) {
						return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
					},
					h.totalDuration = function(t) {
						return arguments.length ? -1 === this._repeat ? this: this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
					},
					h.time = function(e, t) {
						return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
					},
					h.repeat = function(e) {
						return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
					},
					h.repeatDelay = function(e) {
						return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
					},
					h.yoyo = function(e) {
						return arguments.length ? (this._yoyo = e, this) : this._yoyo
					},
					h.currentLabel = function(e) {
						return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
					},
					r
			},
			!0),
		function() {
			var e = 180 / Math.PI,
				t = [],
				i = [],
				r = [],
				s = {},
				n = _gsScope._gsDefine.globals,
				a = function(e, t, i, r) {
					this.a = e,
						this.b = t,
						this.c = i,
						this.d = r,
						this.da = r - e,
						this.ca = i - e,
						this.ba = t - e
				},
				o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
				l = function(e, t, i, r) {
					var s = {
							a: e
						},
						n = {},
						a = {},
						o = {
							c: r
						},
						l = (e + t) / 2,
						c = (t + i) / 2,
						h = (i + r) / 2,
						u = (l + c) / 2,
						d = (c + h) / 2,
						f = (d - u) / 8;
					return s.b = l + (e - l) / 4,
						n.b = u + f,
						s.c = n.a = (s.b + n.b) / 2,
						n.c = a.a = (u + d) / 2,
						a.b = d - f,
						o.b = h + (r - h) / 4,
						a.c = o.a = (a.b + o.b) / 2,
						[s, n, a, o]
				},
				c = function(e, s, n, a, o) {
					var c, h, u, d, f, p, _, m, g, v, y, w, T, b = e.length - 1,
						x = 0,
						P = e[0].a;
					for (c = 0; b > c; c++) f = e[x],
						h = f.a,
						u = f.d,
						d = e[x + 1].d,
						o ? (y = t[c], w = i[c], T = .25 * (w + y) * s / (a ? .5 : r[c] || .5), p = u - (u - h) * (a ? .5 * s: 0 !== y ? T / y: 0), _ = u + (d - u) * (a ? .5 * s: 0 !== w ? T / w: 0), m = u - (p + ((_ - p) * (3 * y / (y + w) + .5) / 4 || 0))) : (p = u - .5 * (u - h) * s, _ = u + .5 * (d - u) * s, m = u - (p + _) / 2),
						p += m,
						_ += m,
						f.c = g = p,
						f.b = 0 !== c ? P: P = f.a + .6 * (f.c - f.a),
						f.da = u - h,
						f.ca = g - h,
						f.ba = P - h,
						n ? (v = l(h, P, g, u), e.splice(x, 1, v[0], v[1], v[2], v[3]), x += 4) : x++,
						P = _;
					f = e[x],
						f.b = P,
						f.c = P + .4 * (f.d - P),
						f.da = f.d - f.a,
						f.ca = f.c - f.a,
						f.ba = P - f.a,
					n && (v = l(f.a, P, f.c, f.d), e.splice(x, 1, v[0], v[1], v[2], v[3]))
				},
				h = function(e, r, s, n) {
					var o, l, c, h, u, d, f = [];
					if (n) for (e = [n].concat(e), l = e.length; --l > -1;)"string" == typeof(d = e[l][r]) && "=" === d.charAt(1) && (e[l][r] = n[r] + Number(d.charAt(0) + d.substr(2)));
					if (o = e.length - 2, 0 > o) return f[0] = new a(e[0][r], 0, 0, e[ - 1 > o ? 0 : 1][r]),
						f;
					for (l = 0; o > l; l++) c = e[l][r],
						h = e[l + 1][r],
						f[l] = new a(c, 0, 0, h),
					s && (u = e[l + 2][r], t[l] = (t[l] || 0) + (h - c) * (h - c), i[l] = (i[l] || 0) + (u - h) * (u - h));
					return f[l] = new a(e[l][r], 0, 0, e[l + 1][r]),
						f
				},
				u = function(e, n, a, l, u, d) {
					var f, p, _, m, g, v, y, w, T = {},
						b = [],
						x = d || e[0];
					u = "string" == typeof u ? "," + u + ",": o,
					null == n && (n = 1);
					for (p in e[0]) b.push(p);
					if (e.length > 1) {
						for (w = e[e.length - 1], y = !0, f = b.length; --f > -1;) if (p = b[f], Math.abs(x[p] - w[p]) > .05) {
							y = !1;
							break
						}
						y && (e = e.concat(), d && e.unshift(d), e.push(e[1]), d = e[e.length - 3])
					}
					for (t.length = i.length = r.length = 0, f = b.length; --f > -1;) p = b[f],
						s[p] = -1 !== u.indexOf("," + p + ","),
						T[p] = h(e, p, s[p], d);
					for (f = t.length; --f > -1;) t[f] = Math.sqrt(t[f]),
						i[f] = Math.sqrt(i[f]);
					if (!l) {
						for (f = b.length; --f > -1;) if (s[p]) for (_ = T[b[f]], v = _.length - 1, m = 0; v > m; m++) g = _[m + 1].da / i[m] + _[m].da / t[m],
							r[m] = (r[m] || 0) + g * g;
						for (f = r.length; --f > -1;) r[f] = Math.sqrt(r[f])
					}
					for (f = b.length, m = a ? 4 : 1; --f > -1;) p = b[f],
						_ = T[p],
						c(_, n, a, l, s[p]),
					y && (_.splice(0, m), _.splice(_.length - m, m));
					return T
				},
				d = function(e, t, i) {
					t = t || "soft";
					var r, s, n, o, l, c, h, u, d, f, p, _ = {},
						m = "cubic" === t ? 3 : 2,
						g = "soft" === t,
						v = [];
					if (g && i && (e = [i].concat(e)), null == e || m + 1 > e.length) throw "invalid Bezier data";
					for (d in e[0]) v.push(d);
					for (c = v.length; --c > -1;) {
						for (d = v[c], _[d] = l = [], f = 0, u = e.length, h = 0; u > h; h++) r = null == i ? e[h][d] : "string" == typeof(p = e[h][d]) && "=" === p.charAt(1) ? i[d] + Number(p.charAt(0) + p.substr(2)) : Number(p),
						g && h > 1 && u - 1 > h && (l[f++] = (r + l[f - 2]) / 2),
							l[f++] = r;
						for (u = f - m + 1, f = 0, h = 0; u > h; h += m) r = l[h],
							s = l[h + 1],
							n = l[h + 2],
							o = 2 === m ? 0 : l[h + 3],
							l[f++] = p = 3 === m ? new a(r, s, n, o) : new a(r, (2 * s + r) / 3, (2 * s + n) / 3, n);
						l.length = f
					}
					return _
				},
				f = function(e, t, i) {
					for (var r, s, n, a, o, l, c, h, u, d, f, p = 1 / i,
						     _ = e.length; --_ > -1;) for (d = e[_], n = d.a, a = d.d - n, o = d.c - n, l = d.b - n, r = s = 0, h = 1; i >= h; h++) c = p * h,
						u = 1 - c,
						r = s - (s = (c * c * a + 3 * u * (c * o + u * l)) * c),
						f = _ * i + h - 1,
						t[f] = (t[f] || 0) + r * r
				},
				p = function(e, t) {
					t = t >> 0 || 6;
					var i, r, s, n, a = [],
						o = [],
						l = 0,
						c = 0,
						h = t - 1,
						u = [],
						d = [];
					for (i in e) f(e[i], a, t);
					for (s = a.length, r = 0; s > r; r++) l += Math.sqrt(a[r]),
						n = r % t,
						d[n] = l,
					n === h && (c += l, n = r / t >> 0, u[n] = d, o[n] = c, l = 0, d = []);
					return {
						length: c,
						lengths: o,
						segments: u
					}
				},
				_ = _gsScope._gsDefine.plugin({
					propName: "bezier",
					priority: -1,
					version: "1.3.4",
					API: 2,
					global: !0,
					init: function(e, t, i) {
						this._target = e,
						t instanceof Array && (t = {
							values: t
						}),
							this._func = {},
							this._round = {},
							this._props = [],
							this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
						var r, s, n, a, o, l = t.values || [],
							c = {},
							h = l[0],
							f = t.autoRotate || i.vars.orientToBezier;
						this._autoRotate = f ? f instanceof Array ? f: [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]] : null;
						for (r in h) this._props.push(r);
						for (n = this._props.length; --n > -1;) r = this._props[n],
							this._overwriteProps.push(r),
							s = this._func[r] = "function" == typeof e[r],
							c[r] = s ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r: "get" + r.substr(3)]() : parseFloat(e[r]),
						o || c[r] !== l[0][r] && (o = c);
						if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? u(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, o) : d(l, t.type, c), this._segCount = this._beziers[r].length, this._timeRes) {
							var _ = p(this._beziers, this._timeRes);
							this._length = _.length,
								this._lengths = _.lengths,
								this._segments = _.segments,
								this._l1 = this._li = this._s1 = this._si = 0,
								this._l2 = this._lengths[0],
								this._curSeg = this._segments[0],
								this._s2 = this._curSeg[0],
								this._prec = 1 / this._curSeg.length
						}
						if (f = this._autoRotate) for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
							for (a = 0; 3 > a; a++) r = f[n][a],
								this._func[r] = "function" == typeof e[r] ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r: "get" + r.substr(3)] : !1;
							r = f[n][2],
								this._initialRotations[n] = this._func[r] ? this._func[r].call(this._target) : this._target[r]
						}
						return this._startRatio = i.vars.runBackwards ? 1 : 0,
							!0
					},
					set: function(t) {
						var i, r, s, n, a, o, l, c, h, u, d = this._segCount,
							f = this._func,
							p = this._target,
							_ = t !== this._startRatio;
						if (this._timeRes) {
							if (h = this._lengths, u = this._curSeg, t *= this._length, s = this._li, t > this._l2 && d - 1 > s) {
								for (c = d - 1; c > s && t >= (this._l2 = h[++s]););
								this._l1 = h[s - 1],
									this._li = s,
									this._curSeg = u = this._segments[s],
									this._s2 = u[this._s1 = this._si = 0]
							} else if (this._l1 > t && s > 0) {
								for (; s > 0 && (this._l1 = h[--s]) >= t;);
								0 === s && this._l1 > t ? this._l1 = 0 : s++,
									this._l2 = h[s],
									this._li = s,
									this._curSeg = u = this._segments[s],
									this._s1 = u[(this._si = u.length - 1) - 1] || 0,
									this._s2 = u[this._si]
							}
							if (i = s, t -= this._l1, s = this._si, t > this._s2 && u.length - 1 > s) {
								for (c = u.length - 1; c > s && t >= (this._s2 = u[++s]););
								this._s1 = u[s - 1],
									this._si = s
							} else if (this._s1 > t && s > 0) {
								for (; s > 0 && (this._s1 = u[--s]) >= t;);
								0 === s && this._s1 > t ? this._s1 = 0 : s++,
									this._s2 = u[s],
									this._si = s
							}
							o = (s + (t - this._s1) / (this._s2 - this._s1)) * this._prec
						} else i = 0 > t ? 0 : t >= 1 ? d - 1 : d * t >> 0,
							o = (t - i * (1 / d)) * d;
						for (r = 1 - o, s = this._props.length; --s > -1;) n = this._props[s],
							a = this._beziers[n][i],
							l = (o * o * a.da + 3 * r * (o * a.ca + r * a.ba)) * o + a.a,
						this._round[n] && (l = Math.round(l)),
							f[n] ? p[n](l) : p[n] = l;
						if (this._autoRotate) {
							var m, g, v, y, w, T, b, x = this._autoRotate;
							for (s = x.length; --s > -1;) n = x[s][2],
								T = x[s][3] || 0,
								b = x[s][4] === !0 ? 1 : e,
								a = this._beziers[x[s][0]],
								m = this._beziers[x[s][1]],
							a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = m.a + (m.b - m.a) * o, w = m.b + (m.c - m.b) * o, v += (w - v) * o, w += (m.c + (m.d - m.c) * o - w) * o, l = _ ? Math.atan2(w - v, y - g) * b + T: this._initialRotations[s], f[n] ? p[n](l) : p[n] = l)
						}
					}
				}),
				m = _.prototype;
			_.bezierThrough = u,
				_.cubicToQuadratic = l,
				_._autoCSS = !0,
				_.quadraticToCubic = function(e, t, i) {
					return new a(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
				},
				_._cssRegister = function() {
					var e = n.CSSPlugin;
					if (e) {
						var t = e._internals,
							i = t._parseToProxy,
							r = t._setPluginRatio,
							s = t.CSSPropTween;
						t._registerComplexSpecialProp("bezier", {
							parser: function(e, t, n, a, o, l) {
								t instanceof Array && (t = {
									values: t
								}),
									l = new _;
								var c, h, u, d = t.values,
									f = d.length - 1,
									p = [],
									m = {};
								if (0 > f) return o;
								for (c = 0; f >= c; c++) u = i(e, d[c], a, o, l, f !== c),
									p[c] = u.end;
								for (h in t) m[h] = t[h];
								return m.values = p,
									o = new s(e, "bezier", 0, 0, u.pt, 2),
									o.data = u,
									o.plugin = l,
									o.setRatio = r,
								0 === m.autoRotate && (m.autoRotate = !0),
								!m.autoRotate || m.autoRotate instanceof Array || (c = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [["left", "top", "rotation", c, !1]] : null != u.end.x ? [["x", "y", "rotation", c, !1]] : !1),
								m.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform),
									l._onInitTween(u.proxy, m, a._tween),
									o
							}
						})
					}
				},
				m._roundProps = function(e, t) {
					for (var i = this._overwriteProps,
						     r = i.length; --r > -1;)(e[i[r]] || e.bezier || e.bezierThrough) && (this._round[i[r]] = t)
				},
				m._kill = function(e) {
					var t, i, r = this._props;
					for (t in this._beziers) if (t in e) for (delete this._beziers[t], delete this._func[t], i = r.length; --i > -1;) r[i] === t && r.splice(i, 1);
					return this._super._kill.call(this, e)
				}
		} (),
		_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"],
			function(e, t) {
				var i, r, s, n, a = function() {
						e.call(this, "css"),
							this._overwriteProps.length = 0,
							this.setRatio = a.prototype.setRatio
					},
					o = _gsScope._gsDefine.globals,
					l = {},
					c = a.prototype = new e("css");
				c.constructor = a,
					a.version = "1.16.0",
					a.API = 2,
					a.defaultTransformPerspective = 0,
					a.defaultSkewType = "compensated",
					c = "px",
					a.suffixMap = {
						top: c,
						right: c,
						bottom: c,
						left: c,
						width: c,
						height: c,
						fontSize: c,
						padding: c,
						margin: c,
						perspective: c,
						lineHeight: ""
					};
				var h, u, d, f, p, _, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
					g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
					v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
					y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
					w = /(?:\d|\-|\+|=|#|\.)*/g,
					T = /opacity *= *([^)]*)/i,
					b = /opacity:([^;]*)/i,
					x = /alpha\(opacity *=.+?\)/i,
					P = /^(rgb|hsl)/,
					O = /([A-Z])/g,
					S = /-([a-z])/gi,
					k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
					M = function(e, t) {
						return t.toUpperCase()
					},
					E = /(?:Left|Right|Width)/i,
					R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
					A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
					L = /,(?=[^\)]*(?:\(|$))/gi,
					I = Math.PI / 180,
					j = 180 / Math.PI,
					C = {},
					D = document,
					$ = function(e) {
						return D.createElementNS ? D.createElementNS("http://www.w3.org/1999/xhtml", e) : D.createElement(e)
					},
					X = $("div"),
					N = $("img"),
					F = a._internals = {
						_specialProps: l
					},
					z = navigator.userAgent,
					q = function() {
						var e = z.indexOf("Android"),
							t = $("a");
						return d = -1 !== z.indexOf("Safari") && -1 === z.indexOf("Chrome") && ( - 1 === e || Number(z.substr(e + 8, 1)) > 3),
							p = d && 6 > Number(z.substr(z.indexOf("Version/") + 8, 1)),
							f = -1 !== z.indexOf("Firefox"),
						(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(z)) && (_ = parseFloat(RegExp.$1)),
							t ? (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity)) : !1
					} (),
					U = function(e) {
						return T.test("string" == typeof e ? e: (e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
					},
					B = function(e) {
						window.console && console.log(e)
					},
					H = "",
					Y = "",
					V = function(e, t) {
						t = t || X;
						var i, r, s = t.style;
						if (void 0 !== s[e]) return e;
						for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + e];);
						return r >= 0 ? (Y = 3 === r ? "ms": i[r], H = "-" + Y.toLowerCase() + "-", Y + e) : null
					},
					G = D.defaultView ? D.defaultView.getComputedStyle: function() {},
					Q = a.getStyle = function(e, t, i, r, s) {
						var n;
						return q || "opacity" !== t ? (!r && e.style[t] ? n = e.style[t] : (i = i || G(e)) ? n = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(O, "-$1").toLowerCase()) : e.currentStyle && (n = e.currentStyle[t]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n: s) : U(e)
					},
					W = F.convertToPixels = function(e, i, r, s, n) {
						if ("px" === s || !s) return r;
						if ("auto" === s || !r) return 0;
						var o, l, c, h = E.test(i),
							u = e,
							d = X.style,
							f = 0 > r;
						if (f && (r = -r), "%" === s && -1 !== i.indexOf("border")) o = r / 100 * (h ? e.clientWidth: e.clientHeight);
						else {
							if (d.cssText = "border:0 solid red;position:" + Q(e, "position") + ";line-height:0;", "%" !== s && u.appendChild) d[h ? "borderLeftWidth": "borderTopWidth"] = r + s;
							else {
								if (u = e.parentNode || D.body, l = u._gsCache, c = t.ticker.frame, l && h && l.time === c) return l.width * r / 100;
								d[h ? "width": "height"] = r + s
							}
							u.appendChild(X),
								o = parseFloat(X[h ? "offsetWidth": "offsetHeight"]),
								u.removeChild(X),
							h && "%" === s && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {},
								l.time = c, l.width = 100 * (o / r)),
							0 !== o || n || (o = W(e, i, r, s, !0))
						}
						return f ? -o: o
					},
					J = F.calculateOffset = function(e, t, i) {
						if ("absolute" !== Q(e, "position", i)) return 0;
						var r = "left" === t ? "Left": "Top",
							s = Q(e, "margin" + r, i);
						return e["offset" + r] - (W(e, t, parseFloat(s), s.replace(w, "")) || 0)
					},
					K = function(e, t) {
						var i, r, s, n = {};
						if (t = t || G(e, null)) if (i = t.length) for (; --i > -1;) s = t[i],
						( - 1 === s.indexOf("-transform") || xe === s) && (n[s.replace(S, M)] = t.getPropertyValue(s));
						else for (i in t)( - 1 === i.indexOf("Transform") || be === i) && (n[i] = t[i]);
						else if (t = e.currentStyle || e.style) for (i in t)"string" == typeof i && void 0 === n[i] && (n[i.replace(S, M)] = t[i]);
						return q || (n.opacity = U(e)),
							r = Le(e, t, !1),
							n.rotation = r.rotation,
							n.skewX = r.skewX,
							n.scaleX = r.scaleX,
							n.scaleY = r.scaleY,
							n.x = r.x,
							n.y = r.y,
						Oe && (n.z = r.z, n.rotationX = r.rotationX, n.rotationY = r.rotationY, n.scaleZ = r.scaleZ),
						n.filters && delete n.filters,
							n
					},
					Z = function(e, t, i, r, s) {
						var n, a, o, l = {},
							c = e.style;
						for (a in i)"cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof t[a] || "" === t[a].replace(y, "") ? n: 0 : J(e, a), void 0 !== c[a] && (o = new fe(c, a, c[a], o)));
						if (r) for (a in r)"className" !== a && (l[a] = r[a]);
						return {
							difs: l,
							firstMPT: o
						}
					},
					ee = {
						width: ["Left", "Right"],
						height: ["Top", "Bottom"]
					},
					te = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
					ie = function(e, t, i) {
						var r = parseFloat("width" === t ? e.offsetWidth: e.offsetHeight),
							s = ee[t],
							n = s.length;
						for (i = i || G(e, null); --n > -1;) r -= parseFloat(Q(e, "padding" + s[n], i, !0)) || 0,
							r -= parseFloat(Q(e, "border" + s[n] + "Width", i, !0)) || 0;
						return r
					},
					re = function(e, t) { (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
						var i = e.split(" "),
							r = -1 !== e.indexOf("left") ? "0%": -1 !== e.indexOf("right") ? "100%": i[0],
							s = -1 !== e.indexOf("top") ? "0%": -1 !== e.indexOf("bottom") ? "100%": i[1];
						return null == s ? s = "center" === r ? "50%": "0": "center" === s && (s = "50%"),
						("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"),
						t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== s.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === s.charAt(1), t.ox = parseFloat(r.replace(y, "")), t.oy = parseFloat(s.replace(y, ""))),
						r + " " + s + (i.length > 2 ? " " + i[2] : "")
					},
					se = function(e, t) {
						return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
					},
					ne = function(e, t) {
						return null == e ? t: "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t: parseFloat(e)
					},
					ae = function(e, t, i, r) {
						var s, n, a, o, l, c = 1e-6;
						return null == e ? o = t: "number" == typeof e ? o = e: (s = 360, n = e.split("_"), l = "=" === e.charAt(1), a = (l ? parseInt(e.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * ( - 1 === e.indexOf("rad") ? 1 : j) - (l ? 0 : t), n.length && (r && (r[i] = t + a), -1 !== e.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s: a - s)), -1 !== e.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s: -1 !== e.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)), o = t + a),
						c > o && o > -c && (o = 0),
							o
					},
					oe = {
						aqua: [0, 255, 255],
						lime: [0, 255, 0],
						silver: [192, 192, 192],
						black: [0, 0, 0],
						maroon: [128, 0, 0],
						teal: [0, 128, 128],
						blue: [0, 0, 255],
						navy: [0, 0, 128],
						white: [255, 255, 255],
						fuchsia: [255, 0, 255],
						olive: [128, 128, 0],
						yellow: [255, 255, 0],
						orange: [255, 165, 0],
						gray: [128, 128, 128],
						purple: [128, 0, 128],
						green: [0, 128, 0],
						red: [255, 0, 0],
						pink: [255, 192, 203],
						cyan: [0, 255, 255],
						transparent: [255, 255, 255, 0]
					},
					le = function(e, t, i) {
						return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e,
						0 | 255 * (1 > 6 * e ? t + 6 * (i - t) * e: .5 > e ? i: 2 > 3 * e ? t + 6 * (i - t) * (2 / 3 - e) : t) + .5
					},
					ce = a.parseColor = function(e) {
						var t, i, r, s, n, a;
						return e && "" !== e ? "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), oe[e] ? oe[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), i = e.charAt(2), r = e.charAt(3), e = "#" + t + t + i + i + r + r), e = parseInt(e.substr(1), 16), [e >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(m), s = Number(e[0]) % 360 / 360, n = Number(e[1]) / 100, a = Number(e[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, t = 2 * a - i, e.length > 3 && (e[3] = Number(e[3])), e[0] = le(s + 1 / 3, t, i), e[1] = le(s, t, i), e[2] = le(s - 1 / 3, t, i), e) : (e = e.match(m) || oe.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : oe.black
					},
					he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
				for (c in oe) he += "|" + c + "\\b";
				he = RegExp(he + ")", "gi");
				var ue = function(e, t, i, r) {
						if (null == e) return function(e) {
							return e
						};
						var s, n = t ? (e.match(he) || [""])[0] : "",
							a = e.split(n).join("").match(v) || [],
							o = e.substr(0, e.indexOf(a[0])),
							l = ")" === e.charAt(e.length - 1) ? ")": "",
							c = -1 !== e.indexOf(" ") ? " ": ",",
							h = a.length,
							u = h > 0 ? a[0].replace(m, "") : "";
						return h ? s = t ?
							function(e) {
								var t, d, f, p;
								if ("number" == typeof e) e += u;
								else if (r && L.test(e)) {
									for (p = e.replace(L, "|").split("|"), f = 0; p.length > f; f++) p[f] = s(p[f]);
									return p.join(",")
								}
								if (t = (e.match(he) || [n])[0], d = e.split(t).join("").match(v) || [], f = d.length, h > f--) for (; h > ++f;) d[f] = i ? d[0 | (f - 1) / 2] : a[f];
								return o + d.join(c) + c + t + l + ( - 1 !== e.indexOf("inset") ? " inset": "")
							}: function(e) {
								var t, n, d;
								if ("number" == typeof e) e += u;
								else if (r && L.test(e)) {
									for (n = e.replace(L, "|").split("|"), d = 0; n.length > d; d++) n[d] = s(n[d]);
									return n.join(",")
								}
								if (t = e.match(v) || [], d = t.length, h > d--) for (; h > ++d;) t[d] = i ? t[0 | (d - 1) / 2] : a[d];
								return o + t.join(c) + l
							}: function(e) {
							return e
						}
					},
					de = function(e) {
						return e = e.split(","),
							function(t, i, r, s, n, a, o) {
								var l, c = (i + "").split(" ");
								for (o = {},
									     l = 0; 4 > l; l++) o[e[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
								return s.parse(t, o, n, a)
							}
					},
					fe = (F._setPluginRatio = function(e) {
						this.plugin.setRatio(e);
						for (var t, i, r, s, n = this.data,
							     a = n.proxy,
							     o = n.firstMPT,
							     l = 1e-6; o;) t = a[o.v],
							o.r ? t = Math.round(t) : l > t && t > -l && (t = 0),
							o.t[o.p] = t,
							o = o._next;
						if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === e) for (o = n.firstMPT; o;) {
							if (i = o.t, i.type) {
								if (1 === i.type) {
									for (s = i.xs0 + i.s + i.xs1, r = 1; i.l > r; r++) s += i["xn" + r] + i["xs" + (r + 1)];
									i.e = s
								}
							} else i.e = i.s + i.xs0;
							o = o._next
						}
					},
						function(e, t, i, r, s) {
							this.t = e,
								this.p = t,
								this.v = i,
								this.r = s,
							r && (r._prev = this, this._next = r)
						}),
					pe = (F._parseToProxy = function(e, t, i, r, s, n) {
						var a, o, l, c, h, u = r,
							d = {},
							f = {},
							p = i._transform,
							_ = C;
						for (i._transform = null, C = t, r = h = i.parse(e, t, r, s), C = _, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); r && r !== u;) {
							if (1 >= r.type && (o = r.p, f[o] = r.s + r.c, d[o] = r.s, n || (c = new fe(r, "s", o, c, r.r), r.c = 0), 1 === r.type)) for (a = r.l; --a > 0;) l = "xn" + a,
								o = r.p + "_" + l,
								f[o] = r.data[l],
								d[o] = r[l],
							n || (c = new fe(r, l, o, c, r.rxp[l]));
							r = r._next
						}
						return {
							proxy: d,
							end: f,
							firstMPT: c,
							pt: h
						}
					},
						F.CSSPropTween = function(e, t, r, s, a, o, l, c, h, u, d) {
							this.t = e,
								this.p = t,
								this.s = r,
								this.c = s,
								this.n = l || t,
							e instanceof pe || n.push(this.n),
								this.r = c,
								this.type = o || 0,
							h && (this.pr = h, i = !0),
								this.b = void 0 === u ? r: u,
								this.e = void 0 === d ? r + s: d,
							a && (this._next = a, a._prev = this)
						}),
					_e = a.parseComplex = function(e, t, i, r, s, n, a, o, l, c) {
						i = i || n || "",
							a = new pe(e, t, 0, 0, a, c ? 2 : 1, null, !1, o, i, r),
							r += "";
						var u, d, f, p, _, v, y, w, T, b, x, O, S = i.split(", ").join(",").split(" "),
							k = r.split(", ").join(",").split(" "),
							M = S.length,
							E = h !== !1;
						for (( - 1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(L, ", ").split(" "), k = k.join(" ").replace(L, ", ").split(" "), M = S.length), M !== k.length && (S = (n || "").split(" "), M = S.length), a.plugin = l, a.setRatio = c, u = 0; M > u; u++) if (p = S[u], _ = k[u], w = parseFloat(p), w || 0 === w) a.appendXtra("", w, se(_, w), _.replace(g, ""), E && -1 !== _.indexOf("px"), !0);
						else if (s && ("#" === p.charAt(0) || oe[p] || P.test(p))) O = "," === _.charAt(_.length - 1) ? "),": ")",
							p = ce(p),
							_ = ce(_),
							T = p.length + _.length > 6,
							T && !q && 0 === _[3] ? (a["xs" + a.l] += a.l ? " transparent": "transparent", a.e = a.e.split(k[u]).join("transparent")) : (q || (T = !1), a.appendXtra(T ? "rgba(": "rgb(", p[0], _[0] - p[0], ",", !0, !0).appendXtra("", p[1], _[1] - p[1], ",", !0).appendXtra("", p[2], _[2] - p[2], T ? ",": O, !0), T && (p = 4 > p.length ? 1 : p[3], a.appendXtra("", p, (4 > _.length ? 1 : _[3]) - p, O, !1)));
						else if (v = p.match(m)) {
							if (y = _.match(g), !y || y.length !== v.length) return a;
							for (f = 0, d = 0; v.length > d; d++) x = v[d],
								b = p.indexOf(x, f),
								a.appendXtra(p.substr(f, b - f), Number(x), se(y[d], x), "", E && "px" === p.substr(b + x.length, 2), 0 === d),
								f = b + x.length;
							a["xs" + a.l] += p.substr(f)
						} else a["xs" + a.l] += a.l ? " " + p: p;
						if ( - 1 !== r.indexOf("=") && a.data) {
							for (O = a.xs0 + a.data.s, u = 1; a.l > u; u++) O += a["xs" + u] + a.data["xn" + u];
							a.e = O + a["xs" + u]
						}
						return a.l || (a.type = -1, a.xs0 = a.e),
						a.xfirst || a
					},
					me = 9;
				for (c = pe.prototype, c.l = c.pr = 0; --me > 0;) c["xn" + me] = 0,
					c["xs" + me] = "";
				c.xs0 = "",
					c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null,
					c.appendXtra = function(e, t, i, r, s, n) {
						var a = this,
							o = a.l;
						return a["xs" + o] += n && o ? " " + e: e || "",
							i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = t + i, a.rxp["xn" + o] = s, a["xn" + o] = t, a.plugin || (a.xfirst = new pe(a, "xn" + o, t, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
								s: t + i
							},
								a.rxp = {},
								a.s = t, a.c = i, a.r = s, a)) : (a["xs" + o] += t + (r || ""), a)
					};
				var ge = function(e, t) {
						t = t || {},
							this.p = t.prefix ? V(e) || e: e,
							l[e] = l[this.p] = this,
							this.format = t.formatter || ue(t.defaultValue, t.color, t.collapsible, t.multi),
						t.parser && (this.parse = t.parser),
							this.clrs = t.color,
							this.multi = t.multi,
							this.keyword = t.keyword,
							this.dflt = t.defaultValue,
							this.pr = t.priority || 0
					},
					ve = F._registerComplexSpecialProp = function(e, t, i) {
						"object" != typeof t && (t = {
							parser: i
						});
						var r, s, n = e.split(","),
							a = t.defaultValue;
						for (i = i || [a], r = 0; n.length > r; r++) t.prefix = 0 === r && t.prefix,
							t.defaultValue = i[r] || a,
							s = new ge(n[r], t)
					},
					ye = function(e) {
						if (!l[e]) {
							var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
							ve(e, {
								parser: function(e, i, r, s, n, a, c) {
									var h = o.com.greensock.plugins[t];
									return h ? (h._cssRegister(), l[r].parse(e, i, r, s, n, a, c)) : (B("Error: " + t + " js file not loaded."), n)
								}
							})
						}
					};
				c = ge.prototype,
					c.parseComplex = function(e, t, i, r, s, n) {
						var a, o, l, c, h, u, d = this.keyword;
						if (this.multi && (L.test(i) || L.test(t) ? (o = t.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : d && (o = [t], l = [i])), l) {
							for (c = l.length > o.length ? l.length: o.length, a = 0; c > a; a++) t = o[a] = o[a] || this.dflt,
								i = l[a] = l[a] || this.dflt,
							d && (h = t.indexOf(d), u = i.indexOf(d), h !== u && ( - 1 === u ? o[a] = o[a].split(d).join("") : -1 === h && (o[a] += " " + d)));
							t = o.join(", "),
								i = l.join(", ")
						}
						return _e(e, this.p, t, i, this.clrs, this.dflt, r, this.pr, s, n)
					},
					c.parse = function(e, t, i, r, n, a) {
						return this.parseComplex(e.style, this.format(Q(e, this.p, s, !1, this.dflt)), this.format(t), n, a)
					},
					a.registerSpecialProp = function(e, t, i) {
						ve(e, {
							parser: function(e, r, s, n, a, o) {
								var l = new pe(e, s, 0, 0, a, 2, s, !1, i);
								return l.plugin = o,
									l.setRatio = t(e, r, n._tween, s),
									l
							},
							priority: i
						})
					},
					a.useSVGTransformAttr = d;
				var we, Te = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
					be = V("transform"),
					xe = H + "transform",
					Pe = V("transformOrigin"),
					Oe = null !== V("perspective"),
					Se = F.Transform = function() {
						this.perspective = parseFloat(a.defaultTransformPerspective) || 0,
							this.force3D = a.defaultForce3D !== !1 && Oe ? a.defaultForce3D || "auto": !1
					},
					ke = window.SVGElement,
					Me = function(e, t, i) {
						var r, s = D.createElementNS("http://www.w3.org/2000/svg", e),
							n = /([a-z])([A-Z])/g;
						for (r in i) s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
						return t.appendChild(s),
							s
					},
					Ee = D.documentElement,
					Re = function() {
						var e, t, i, r = _ || /Android/i.test(z) && !window.chrome;
						return D.createElementNS && !r && (e = Me("svg", Ee), t = Me("rect", e, {
							width: 100,
							height: 50,
							x: 100
						}), i = t.getBoundingClientRect().width, t.style[Pe] = "50% 50%", t.style[be] = "scaleX(0.5)", r = i === t.getBoundingClientRect().width && !(f && Oe), Ee.removeChild(e)),
							r
					} (),
					Ae = function(e, t, i, r) {
						var s, n;
						r && (n = r.split(" ")).length || (s = e.getBBox(), t = re(t).split(" "), n = [( - 1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * s.width: parseFloat(t[0])) + s.x, ( - 1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * s.height: parseFloat(t[1])) + s.y]),
							i.xOrigin = parseFloat(n[0]),
							i.yOrigin = parseFloat(n[1]),
							e.setAttribute("data-svg-origin", n.join(" "))
					},
					Le = F.getTransform = function(e, t, i, r) {
						if (e._gsTransform && i && !r) return e._gsTransform;
						var n, o, l, c, h, u, d, f, p, _, m = i ? e._gsTransform || new Se: new Se,
							g = 0 > m.scaleX,
							v = 2e-5,
							y = 1e5,
							w = Oe ? parseFloat(Q(e, Pe, t, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
							T = parseFloat(a.defaultTransformPerspective) || 0;
						if (be ? o = Q(e, xe, t, !0) : e.currentStyle && (o = e.currentStyle.filter.match(R), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), m.x || 0, m.y || 0].join(",") : ""), n = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o, m.svg = !!(ke && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM)), m.svg && (n && -1 !== (e.style[be] + "").indexOf("matrix") && (o = e.style[be], n = !1), Ae(e, Q(e, Pe, s, !1, "50% 50%") + "", m, e.getAttribute("data-svg-origin")), we = a.useSVGTransformAttr || Re, l = e.getAttribute("transform"), n && l && -1 !== l.indexOf("matrix") && (o = l, n = 0)), !n) {
							for (l = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], c = l.length; --c > -1;) h = Number(l[c]),
								l[c] = (u = h - (h |= 0)) ? (0 | u * y + (0 > u ? -.5 : .5)) / y + h: h;
							if (16 === l.length) {
								var b, x, P, O, S, k = l[0],
									M = l[1],
									E = l[2],
									A = l[3],
									L = l[4],
									I = l[5],
									C = l[6],
									D = l[7],
									$ = l[8],
									X = l[9],
									N = l[10],
									F = l[12],
									z = l[13],
									q = l[14],
									U = l[11],
									B = Math.atan2(C, N);
								m.zOrigin && (q = -m.zOrigin, F = $ * q - l[12], z = X * q - l[13], q = N * q + m.zOrigin - l[14]),
									m.rotationX = B * j,
								B && (O = Math.cos( - B), S = Math.sin( - B), b = L * O + $ * S, x = I * O + X * S, P = C * O + N * S, $ = L * -S + $ * O, X = I * -S + X * O, N = C * -S + N * O, U = D * -S + U * O, L = b, I = x, C = P),
									B = Math.atan2($, N),
									m.rotationY = B * j,
								B && (O = Math.cos( - B), S = Math.sin( - B), b = k * O - $ * S, x = M * O - X * S, P = E * O - N * S, X = M * S + X * O, N = E * S + N * O, U = A * S + U * O, k = b, M = x, E = P),
									B = Math.atan2(M, k),
									m.rotation = B * j,
								B && (O = Math.cos( - B), S = Math.sin( - B), k = k * O + L * S, x = M * O + I * S, I = M * -S + I * O, C = E * -S + C * O, M = x),
								m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY += 180),
									m.scaleX = (0 | Math.sqrt(k * k + M * M) * y + .5) / y,
									m.scaleY = (0 | Math.sqrt(I * I + X * X) * y + .5) / y,
									m.scaleZ = (0 | Math.sqrt(C * C + N * N) * y + .5) / y,
									m.skewX = 0,
									m.perspective = U ? 1 / (0 > U ? -U: U) : 0,
									m.x = F,
									m.y = z,
									m.z = q,
								m.svg && (m.x -= m.xOrigin - (m.xOrigin * k - m.yOrigin * L), m.y -= m.yOrigin - (m.yOrigin * M - m.xOrigin * I))
							} else if (! (Oe && !r && l.length && m.x === l[4] && m.y === l[5] && (m.rotationX || m.rotationY) || void 0 !== m.x && "none" === Q(e, "display", t))) {
								var H = l.length >= 6,
									Y = H ? l[0] : 1,
									V = l[1] || 0,
									G = l[2] || 0,
									W = H ? l[3] : 1;
								m.x = l[4] || 0,
									m.y = l[5] || 0,
									d = Math.sqrt(Y * Y + V * V),
									f = Math.sqrt(W * W + G * G),
									p = Y || V ? Math.atan2(V, Y) * j: m.rotation || 0,
									_ = G || W ? Math.atan2(G, W) * j + p: m.skewX || 0,
								Math.abs(_) > 90 && 270 > Math.abs(_) && (g ? (d *= -1, _ += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (f *= -1, _ += 0 >= _ ? 180 : -180)),
									m.scaleX = d,
									m.scaleY = f,
									m.rotation = p,
									m.skewX = _,
								Oe && (m.rotationX = m.rotationY = m.z = 0, m.perspective = T, m.scaleZ = 1),
								m.svg && (m.x -= m.xOrigin - (m.xOrigin * Y - m.yOrigin * V), m.y -= m.yOrigin - (m.yOrigin * W - m.xOrigin * G))
							}
							m.zOrigin = w;
							for (c in m) v > m[c] && m[c] > -v && (m[c] = 0)
						}
						return i && (e._gsTransform = m, m.svg && (we && e.style[be] ? $e(e.style, be) : !we && e.getAttribute("transform") && e.removeAttribute("transform"))),
							m
					},
					Ie = function(e) {
						var t, i, r = this.data,
							s = -r.rotation * I,
							n = s + r.skewX * I,
							a = 1e5,
							o = (0 | Math.cos(s) * r.scaleX * a) / a,
							l = (0 | Math.sin(s) * r.scaleX * a) / a,
							c = (0 | Math.sin(n) * -r.scaleY * a) / a,
							h = (0 | Math.cos(n) * r.scaleY * a) / a,
							u = this.t.style,
							d = this.t.currentStyle;
						if (d) {
							i = l,
								l = -c,
								c = -i,
								t = d.filter,
								u.filter = "";
							var f, p, m = this.t.offsetWidth,
								g = this.t.offsetHeight,
								v = "absolute" !== d.position,
								y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + c + ", M22=" + h,
								b = r.x + m * r.xPercent / 100,
								x = r.y + g * r.yPercent / 100;
							if (null != r.ox && (f = (r.oxp ? .01 * m * r.ox: r.ox) - m / 2, p = (r.oyp ? .01 * g * r.oy: r.oy) - g / 2, b += f - (f * o + p * l), x += p - (f * c + p * h)), v ? (f = m / 2, p = g / 2, y += ", Dx=" + (f - (f * o + p * l) + b) + ", Dy=" + (p - (f * c + p * h) + x) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(A, y) : y + " " + t, (0 === e || 1 === e) && 1 === o && 0 === l && 0 === c && 1 === h && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
								var P, O, S, k = 8 > _ ? 1 : -1;
								for (f = r.ieOffsetX || 0, p = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > o ? -o: o) * m + (0 > l ? -l: l) * g)) / 2 + b), r.ieOffsetY = Math.round((g - ((0 > h ? -h: h) * g + (0 > c ? -c: c) * m)) / 2 + x), me = 0; 4 > me; me++) O = te[me],
									P = d[O],
									i = -1 !== P.indexOf("px") ? parseFloat(P) : W(this.t, O, parseFloat(P), P.replace(w, "")) || 0,
									S = i !== r[O] ? 2 > me ? -r.ieOffsetX: -r.ieOffsetY: 2 > me ? f - r.ieOffsetX: p - r.ieOffsetY,
									u[O] = (r[O] = Math.round(i - S * (0 === me || 2 === me ? 1 : k))) + "px"
							}
						}
					},
					je = F.set3DTransformRatio = function(e) {
						var t, i, r, s, n, a, o, l, c, h, u, d, p, _, m, g, v, y, w, T, b, x = this.data,
							P = this.t.style,
							O = x.rotation * I,
							S = x.scaleX,
							k = x.scaleY,
							M = x.scaleZ,
							E = x.x,
							R = x.y,
							A = x.z,
							L = x.perspective;
						if (! (1 !== e && 0 !== e && x.force3D || x.force3D === !0 || x.rotationY || x.rotationX || 1 !== M || L || A || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) return void Ce.call(this, e);
						if (f && (_ = 1e-4, _ > S && S > -_ && (S = M = 2e-5), _ > k && k > -_ && (k = M = 2e-5), !L || x.z || x.rotationX || x.rotationY || (L = 0)), O || x.skewX) m = t = Math.cos(O),
							g = s = Math.sin(O),
						x.skewX && (O -= x.skewX * I, m = Math.cos(O), g = Math.sin(O), "simple" === x.skewType && (v = Math.tan(x.skewX * I), v = Math.sqrt(1 + v * v), m *= v, g *= v)),
							i = -g,
							n = m;
						else {
							if (! (x.rotationY || x.rotationX || 1 !== M || L || x.svg)) return void(P[be] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(": "translate3d(") + E + "px," + R + "px," + A + "px)" + (1 !== S || 1 !== k ? " scale(" + S + "," + k + ")": ""));
							t = n = 1,
								i = s = 0
						}
						c = 1,
							r = a = o = l = h = u = 0,
							d = L ? -1 / L: 0,
							p = x.zOrigin,
							_ = 1e-6,
							T = ",",
							b = "0",
							O = x.rotationY * I,
						O && (m = Math.cos(O), g = Math.sin(O), o = -g, h = d * -g, r = t * g, a = s * g, c = m, d *= m, t *= m, s *= m),
							O = x.rotationX * I,
						O && (m = Math.cos(O), g = Math.sin(O), v = i * m + r * g, y = n * m + a * g, l = c * g, u = d * g, r = i * -g + r * m, a = n * -g + a * m, c *= m, d *= m, i = v, n = y),
						1 !== M && (r *= M, a *= M, c *= M, d *= M),
						1 !== k && (i *= k, n *= k, l *= k, u *= k),
						1 !== S && (t *= S, s *= S, o *= S, h *= S),
						(p || x.svg) && (p && (E += r * -p, R += a * -p, A += c * -p + p), x.svg && (E += x.xOrigin - (x.xOrigin * t + x.yOrigin * i), R += x.yOrigin - (x.xOrigin * s + x.yOrigin * n)), _ > E && E > -_ && (E = b), _ > R && R > -_ && (R = b), _ > A && A > -_ && (A = 0)),
							w = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(": "matrix3d(",
							w += (_ > t && t > -_ ? b: t) + T + (_ > s && s > -_ ? b: s) + T + (_ > o && o > -_ ? b: o),
							w += T + (_ > h && h > -_ ? b: h) + T + (_ > i && i > -_ ? b: i) + T + (_ > n && n > -_ ? b: n),
							x.rotationX || x.rotationY ? (w += T + (_ > l && l > -_ ? b: l) + T + (_ > u && u > -_ ? b: u) + T + (_ > r && r > -_ ? b: r), w += T + (_ > a && a > -_ ? b: a) + T + (_ > c && c > -_ ? b: c) + T + (_ > d && d > -_ ? b: d) + T) : w += ",0,0,0,0,1,0,",
							w += E + T + R + T + A + T + (L ? 1 + -A / L: 1) + ")",
							P[be] = w
					},
					Ce = F.set2DTransformRatio = function(e) {
						var t, i, r, s, n, a, o, l, c, h, u, d, f = this.data,
							p = this.t,
							_ = p.style,
							m = f.x,
							g = f.y;
						return ! (f.rotationX || f.rotationY || f.z || f.force3D === !0 || "auto" === f.force3D && 1 !== e && 0 !== e) || f.svg && we || !Oe ? (s = f.scaleX, n = f.scaleY, void(f.rotation || f.skewX || f.svg ? (t = f.rotation * I, i = f.skewX * I, r = 1e5, a = Math.cos(t) * s, o = Math.sin(t) * s, l = Math.sin(t - i) * -n, c = Math.cos(t - i) * n, i && "simple" === f.skewType && (d = Math.tan(i), d = Math.sqrt(1 + d * d), l *= d, c *= d), f.svg && (m += f.xOrigin - (f.xOrigin * a + f.yOrigin * l), g += f.yOrigin - (f.xOrigin * o + f.yOrigin * c), u = 1e-6, u > m && m > -u && (m = 0), u > g && g > -u && (g = 0)), h = (0 | a * r) / r + "," + (0 | o * r) / r + "," + (0 | l * r) / r + "," + (0 | c * r) / r + "," + m + "," + g + ")", f.svg && we ? p.setAttribute("transform", "matrix(" + h) : _[be] = (f.xPercent || f.yPercent ? "translate(" + f.xPercent + "%," + f.yPercent + "%) matrix(": "matrix(") + h) : _[be] = (f.xPercent || f.yPercent ? "translate(" + f.xPercent + "%," + f.yPercent + "%) matrix(": "matrix(") + s + ",0,0," + n + "," + m + "," + g + ")")) : (this.setRatio = je, void je.call(this, e))
					};
				c = Se.prototype,
					c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = 0,
					c.scaleX = c.scaleY = c.scaleZ = 1,
					ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
						parser: function(e, t, i, r, n, o, l) {
							if (r._lastParsedTransform === l) return n;
							r._lastParsedTransform = l;
							var c, h, u, d, f, p, _, m = r._transform = Le(e, s, !0, l.parseTransform),
								g = e.style,
								v = 1e-6,
								y = Te.length,
								w = l,
								T = {};
							if ("string" == typeof w.transform && be) u = X.style,
								u[be] = w.transform,
								u.display = "block",
								u.position = "absolute",
								D.body.appendChild(X),
								c = Le(X, null, !1),
								D.body.removeChild(X);
							else if ("object" == typeof w) {
								if (c = {
										scaleX: ne(null != w.scaleX ? w.scaleX: w.scale, m.scaleX),
										scaleY: ne(null != w.scaleY ? w.scaleY: w.scale, m.scaleY),
										scaleZ: ne(w.scaleZ, m.scaleZ),
										x: ne(w.x, m.x),
										y: ne(w.y, m.y),
										z: ne(w.z, m.z),
										xPercent: ne(w.xPercent, m.xPercent),
										yPercent: ne(w.yPercent, m.yPercent),
										perspective: ne(w.transformPerspective, m.perspective)
									},
										_ = w.directionalRotation, null != _) if ("object" == typeof _) for (u in _) w[u] = _[u];
								else w.rotation = _;
								"string" == typeof w.x && -1 !== w.x.indexOf("%") && (c.x = 0, c.xPercent = ne(w.x, m.xPercent)),
								"string" == typeof w.y && -1 !== w.y.indexOf("%") && (c.y = 0, c.yPercent = ne(w.y, m.yPercent)),
									c.rotation = ae("rotation" in w ? w.rotation: "shortRotation" in w ? w.shortRotation + "_short": "rotationZ" in w ? w.rotationZ: m.rotation, m.rotation, "rotation", T),
								Oe && (c.rotationX = ae("rotationX" in w ? w.rotationX: "shortRotationX" in w ? w.shortRotationX + "_short": m.rotationX || 0, m.rotationX, "rotationX", T), c.rotationY = ae("rotationY" in w ? w.rotationY: "shortRotationY" in w ? w.shortRotationY + "_short": m.rotationY || 0, m.rotationY, "rotationY", T)),
									c.skewX = null == w.skewX ? m.skewX: ae(w.skewX, m.skewX),
									c.skewY = null == w.skewY ? m.skewY: ae(w.skewY, m.skewY),
								(h = c.skewY - m.skewY) && (c.skewX += h, c.rotation += h)
							}
							for (Oe && null != w.force3D && (m.force3D = w.force3D, p = !0), m.skewType = w.skewType || m.skewType || a.defaultSkewType, f = m.force3D || m.z || m.rotationX || m.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, f || null == w.scale || (c.scaleZ = 1); --y > -1;) i = Te[y],
								d = c[i] - m[i],
							(d > v || -v > d || null != w[i] || null != C[i]) && (p = !0, n = new pe(m, i, m[i], d, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = o, r._overwriteProps.push(n.n));
							return d = w.transformOrigin,
							m.svg && (d || w.svgOrigin) && (Ae(e, re(d), c, w.svgOrigin), n = new pe(m, "xOrigin", m.xOrigin, c.xOrigin - m.xOrigin, n, -1, "transformOrigin"), n.b = m.xOrigin, n.e = n.xs0 = c.xOrigin, n = new pe(m, "yOrigin", m.yOrigin, c.yOrigin - m.yOrigin, n, -1, "transformOrigin"), n.b = m.yOrigin, n.e = n.xs0 = c.yOrigin, d = we ? null: "0px 0px"),
							(d || Oe && f && m.zOrigin) && (be ? (p = !0, i = Pe, d = (d || Q(e, i, s, !1, "50% 50%")) + "", n = new pe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, Oe ? (u = m.zOrigin, d = d.split(" "), m.zOrigin = (d.length > 2 && (0 === u || "0px" !== d[2]) ? parseFloat(d[2]) : u) || 0, n.xs0 = n.e = d[0] + " " + (d[1] || "50%") + " 0px", n = new pe(m, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = d) : re(d + "", m)),
							p && (r._transformType = m.svg && we || !f && 3 !== this._transformType ? 2 : 3),
								n
						},
						prefix: !0
					}),
					ve("boxShadow", {
						defaultValue: "0px 0px 0px 0px #999",
						prefix: !0,
						color: !0,
						multi: !0,
						keyword: "inset"
					}),
					ve("borderRadius", {
						defaultValue: "0px",
						parser: function(e, t, i, n, a) {
							t = this.format(t);
							var o, l, c, h, u, d, f, p, _, m, g, v, y, w, T, b, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
								P = e.style;
							for (_ = parseFloat(e.offsetWidth), m = parseFloat(e.offsetHeight), o = t.split(" "), l = 0; x.length > l; l++) this.p.indexOf("border") && (x[l] = V(x[l])),
								u = h = Q(e, x[l], s, !1, "0px"),
							-1 !== u.indexOf(" ") && (h = u.split(" "), u = h[0], h = h[1]),
								d = c = o[l],
								f = parseFloat(u),
								v = u.substr((f + "").length),
								y = "=" === d.charAt(1),
								y ? (p = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), p *= parseFloat(d), g = d.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(d), g = d.substr((p + "").length)),
							"" === g && (g = r[i] || v),
							g !== v && (w = W(e, "borderLeft", f, v), T = W(e, "borderTop", f, v), "%" === g ? (u = 100 * (w / _) + "%", h = 100 * (T / m) + "%") : "em" === g ? (b = W(e, "borderLeft", 1, "em"), u = w / b + "em", h = T / b + "em") : (u = w + "px", h = T + "px"), y && (d = parseFloat(u) + p + g, c = parseFloat(h) + p + g)),
								a = _e(P, x[l], u + " " + h, d + " " + c, !1, "0px", a);
							return a
						},
						prefix: !0,
						formatter: ue("0px 0px 0px 0px", !1, !0)
					}),
					ve("backgroundPosition", {
						defaultValue: "0 0",
						parser: function(e, t, i, r, n, a) {
							var o, l, c, h, u, d, f = "background-position",
								p = s || G(e, null),
								m = this.format((p ? _ ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
								g = this.format(t);
							if ( - 1 !== m.indexOf("%") != ( - 1 !== g.indexOf("%")) && (d = Q(e, "backgroundImage").replace(k, ""), d && "none" !== d)) {
								for (o = m.split(" "), l = g.split(" "), N.setAttribute("src", d), c = 2; --c > -1;) m = o[c],
									h = -1 !== m.indexOf("%"),
								h !== ( - 1 !== l[c].indexOf("%")) && (u = 0 === c ? e.offsetWidth - N.width: e.offsetHeight - N.height, o[c] = h ? parseFloat(m) / 100 * u + "px": 100 * (parseFloat(m) / u) + "%");
								m = o.join(" ")
							}
							return this.parseComplex(e.style, m, g, n, a)
						},
						formatter: re
					}),
					ve("backgroundSize", {
						defaultValue: "0 0",
						formatter: re
					}),
					ve("perspective", {
						defaultValue: "0px",
						prefix: !0
					}),
					ve("perspectiveOrigin", {
						defaultValue: "50% 50%",
						prefix: !0
					}),
					ve("transformStyle", {
						prefix: !0
					}),
					ve("backfaceVisibility", {
						prefix: !0
					}),
					ve("userSelect", {
						prefix: !0
					}),
					ve("margin", {
						parser: de("marginTop,marginRight,marginBottom,marginLeft")
					}),
					ve("padding", {
						parser: de("paddingTop,paddingRight,paddingBottom,paddingLeft")
					}),
					ve("clip", {
						defaultValue: "rect(0px,0px,0px,0px)",
						parser: function(e, t, i, r, n, a) {
							var o, l, c;
							return 9 > _ ? (l = e.currentStyle, c = 8 > _ ? " ": ",", o = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", t = this.format(t).split(",").join(c)) : (o = this.format(Q(e, this.p, s, !1, this.dflt)), t = this.format(t)),
								this.parseComplex(e.style, o, t, n, a)
						}
					}),
					ve("textShadow", {
						defaultValue: "0px 0px 0px #999",
						color: !0,
						multi: !0
					}),
					ve("autoRound,strictUnits", {
						parser: function(e, t, i, r, s) {
							return s
						}
					}),
					ve("border", {
						defaultValue: "0px solid #000",
						parser: function(e, t, i, r, n, a) {
							return this.parseComplex(e.style, this.format(Q(e, "borderTopWidth", s, !1, "0px") + " " + Q(e, "borderTopStyle", s, !1, "solid") + " " + Q(e, "borderTopColor", s, !1, "#000")), this.format(t), n, a)
						},
						color: !0,
						formatter: function(e) {
							var t = e.split(" ");
							return t[0] + " " + (t[1] || "solid") + " " + (e.match(he) || ["#000"])[0]
						}
					}),
					ve("borderWidth", {
						parser: de("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
					}),
					ve("float,cssFloat,styleFloat", {
						parser: function(e, t, i, r, s) {
							var n = e.style,
								a = "cssFloat" in n ? "cssFloat": "styleFloat";
							return new pe(n, a, 0, 0, s, -1, i, !1, 0, n[a], t)
						}
					});
				var De = function(e) {
					var t, i = this.t,
						r = i.filter || Q(this.data, "filter") || "",
						s = 0 | this.s + this.c * e;
					100 === s && ( - 1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), t = !Q(this.data, "filter")) : (i.filter = r.replace(x, ""), t = !0)),
					t || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(T, "opacity=" + s))
				};
				ve("opacity,alpha,autoAlpha", {
					defaultValue: "1",
					parser: function(e, t, i, r, n, a) {
						var o = parseFloat(Q(e, "opacity", s, !1, "1")),
							l = e.style,
							c = "autoAlpha" === i;
						return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + o),
						c && 1 === o && "hidden" === Q(e, "visibility", s) && 0 !== t && (o = 0),
							q ? n = new pe(l, "opacity", o, t - o, n) : (n = new pe(l, "opacity", 100 * o, 100 * (t - o), n), n.xn1 = c ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = e, n.plugin = a, n.setRatio = De),
						c && (n = new pe(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit": "hidden", 0 === t ? "hidden": "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)),
							n
					}
				});
				var $e = function(e, t) {
						t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(O, "-$1").toLowerCase())) : e.removeAttribute(t))
					},
					Xe = function(e) {
						if (this.t._gsClassPT = this, 1 === e || 0 === e) {
							this.t.setAttribute("class", 0 === e ? this.b: this.e);
							for (var t = this.data,
								     i = this.t.style; t;) t.v ? i[t.p] = t.v: $e(i, t.p),
								t = t._next;
							1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
						} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
					};
				ve("className", {
					parser: function(e, t, r, n, a, o, l) {
						var c, h, u, d, f, p = e.getAttribute("class") || "",
							_ = e.style.cssText;
						if (a = n._classNamePT = new pe(e, r, 0, 0, a, 2), a.setRatio = Xe, a.pr = -11, i = !0, a.b = p, h = K(e, s), u = e._gsClassPT) {
							for (d = {},
								     f = u.data; f;) d[f.p] = 1,
								f = f._next;
							u.setRatio(1)
						}
						return e._gsClassPT = a,
							a.e = "=" !== t.charAt(1) ? t: p.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""),
						n._tween._duration && (e.setAttribute("class", a.e), c = Z(e, h, K(e), l, d), e.setAttribute("class", p), a.data = c.firstMPT, e.style.cssText = _, a = a.xfirst = n.parse(e, c.difs, a, o)),
							a
					}
				});
				var Ne = function(e) {
					if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
						var t, i, r, s, n = this.t.style,
							a = l.transform.parse;
						if ("all" === this.e) n.cssText = "",
							s = !0;
						else for (t = this.e.split(" ").join("").split(","), r = t.length; --r > -1;) i = t[r],
						l[i] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? Pe: l[i].p),
							$e(n, i);
						s && ($e(n, be), this.t._gsTransform && delete this.t._gsTransform)
					}
				};
				for (ve("clearProps", {
					parser: function(e, t, r, s, n) {
						return n = new pe(e, r, 0, 0, n, 2),
							n.setRatio = Ne,
							n.e = t,
							n.pr = -10,
							n.data = s._tween,
							i = !0,
							n
					}
				}), c = "bezier,throwProps,physicsProps,physics2D".split(","), me = c.length; me--;) ye(c[me]);
				c = a.prototype,
					c._firstPT = c._lastParsedTransform = c._transform = null,
					c._onInitTween = function(e, t, o) {
						if (!e.nodeType) return ! 1;
						this._target = e,
							this._tween = o,
							this._vars = t,
							h = t.autoRound,
							i = !1,
							r = t.suffixMap || a.suffixMap,
							s = G(e, ""),
							n = this._overwriteProps;
						var l, c, f, _, m, g, v, y, w, T = e.style;
						if (u && "" === T.zIndex && (l = Q(e, "zIndex", s), ("auto" === l || "" === l) && this._addLazySet(T, "zIndex", 0)), "string" == typeof t && (_ = T.cssText, l = K(e, s), T.cssText = _ + ";" + t, l = Z(e, l, K(e)).difs, !q && b.test(t) && (l.opacity = parseFloat(RegExp.$1)), t = l, T.cssText = _), this._firstPT = c = this.parse(e, t, null), this._transformType) {
							for (w = 3 === this._transformType, be ? d && (u = !0, "" === T.zIndex && (v = Q(e, "zIndex", s), ("auto" === v || "" === v) && this._addLazySet(T, "zIndex", 0)), p && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible": "hidden"))) : T.zoom = 1, f = c; f && f._next;) f = f._next;
							y = new pe(e, "transform", 0, 0, null, 2),
								this._linkCSSP(y, null, f),
								y.setRatio = w && Oe ? je: be ? Ce: Ie,
								y.data = this._transform || Le(e, s, !0),
								y.tween = o,
								n.pop()
						}
						if (i) {
							for (; c;) {
								for (g = c._next, f = _; f && f.pr > c.pr;) f = f._next; (c._prev = f ? f._prev: m) ? c._prev._next = c: _ = c,
									(c._next = f) ? f._prev = c: m = c,
									c = g
							}
							this._firstPT = _
						}
						return ! 0
					},
					c.parse = function(e, t, i, n) {
						var a, o, c, u, d, f, p, _, m, g, v = e.style;
						for (a in t) f = t[a],
							o = l[a],
							o ? i = o.parse(e, f, a, this, i, n, t) : (d = Q(e, a, s) + "", m = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && P.test(f) ? (m || (f = ce(f), f = (f.length > 3 ? "rgba(": "rgb(") + f.join(",") + ")"), i = _e(v, a, d, f, !0, "transparent", i, 0, n)) : !m || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (c = parseFloat(d), p = c || 0 === c ? d.substr((c + "").length) : "", ("" === d || "auto" === d) && ("width" === a || "height" === a ? (c = ie(e, a, s), p = "px") : "left" === a || "top" === a ? (c = J(e, a, s), p = "px") : (c = "opacity" !== a ? 0 : 1, p = "")), g = m && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), _ = f.replace(w, "")) : (u = parseFloat(f), _ = m ? f.replace(w, "") : ""), "" === _ && (_ = a in r ? r[a] : p), f = u || 0 === u ? (g ? u + c: u) + _: t[a], p !== _ && "" !== _ && (u || 0 === u) && c && (c = W(e, a, c, p), "%" === _ ? (c /= W(e, a, 100, "%") / 100, t.strictUnits !== !0 && (d = c + "%")) : "em" === _ ? c /= W(e, a, 1, "em") : "px" !== _ && (u = W(e, a, u, _), _ = "px"), g && (u || 0 === u) && (f = u + c + _)), g && (u += c), !c && 0 !== c || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v, a, u || c || 0, 0, i, -1, a, !1, 0, d, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f: d) : B("invalid " + a + " tween value: " + t[a]) : (i = new pe(v, a, c, u - c, i, 0, a, h !== !1 && ("px" === _ || "zIndex" === a), 0, d, f), i.xs0 = _)) : i = _e(v, a, d, f, !0, null, i, 0, n)),
						n && i && !i.plugin && (i.plugin = n);
						return i
					},
					c.setRatio = function(e) {
						var t, i, r, s = this._firstPT,
							n = 1e-6;
						if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; s;) {
							if (t = s.c * e + s.s, s.r ? t = Math.round(t) : n > t && t > -n && (t = 0), s.type) if (1 === s.type) if (r = s.l, 2 === r) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2;
							else if (3 === r) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
							else if (4 === r) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
							else if (5 === r) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
							else {
								for (i = s.xs0 + t + s.xs1, r = 1; s.l > r; r++) i += s["xn" + r] + s["xs" + (r + 1)];
								s.t[s.p] = i
							} else - 1 === s.type ? s.t[s.p] = s.xs0: s.setRatio && s.setRatio(e);
							else s.t[s.p] = t + s.xs0;
							s = s._next
						} else for (; s;) 2 !== s.type ? s.t[s.p] = s.b: s.setRatio(e),
							s = s._next;
						else for (; s;) 2 !== s.type ? s.t[s.p] = s.e: s.setRatio(e),
							s = s._next
					},
					c._enableTransforms = function(e) {
						this._transform = this._transform || Le(this._target, s, !0),
							this._transformType = this._transform.svg && we || !e && 3 !== this._transformType ? 2 : 3
					};
				var Fe = function() {
					this.t[this.p] = this.e,
						this.data._linkCSSP(this, this._next, null, !0)
				};
				c._addLazySet = function(e, t, i) {
					var r = this._firstPT = new pe(e, t, 0, 0, this._firstPT, 2);
					r.e = i,
						r.setRatio = Fe,
						r.data = this
				},
					c._linkCSSP = function(e, t, i, r) {
						return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next: this._firstPT === e && (this._firstPT = e._next, r = !0), i ? i._next = e: r || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i),
							e
					},
					c._kill = function(t) {
						var i, r, s, n = t;
						if (t.autoAlpha || t.alpha) {
							n = {};
							for (r in t) n[r] = t[r];
							n.opacity = 1,
							n.autoAlpha && (n.visibility = 1)
						}
						return t.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null),
							e.prototype._kill.call(this, n)
					};
				var ze = function(e, t, i) {
					var r, s, n, a;
					if (e.slice) for (s = e.length; --s > -1;) ze(e[s], t, i);
					else for (r = e.childNodes, s = r.length; --s > -1;) n = r[s],
						a = n.type,
					n.style && (t.push(K(n)), i && i.push(n)),
					1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || ze(n, t, i)
				};
				return a.cascadeTo = function(e, i, r) {
					var s, n, a, o, l = t.to(e, i, r),
						c = [l],
						h = [],
						u = [],
						d = [],
						f = t._internals.reservedProps;
					for (e = l._targets || l.target, ze(e, h, d), l.render(i, !0, !0), ze(e, u), l.render(0, !0, !0), l._enabled(!0), s = d.length; --s > -1;) if (n = Z(d[s], h[s], u[s]), n.firstMPT) {
						n = n.difs;
						for (a in r) f[a] && (n[a] = r[a]);
						o = {};
						for (a in n) o[a] = h[s][a];
						c.push(t.fromTo(d[s], i, o, n))
					}
					return c
				},
					e.activate([a]),
					a
			},
			!0),
		function() {
			var e = _gsScope._gsDefine.plugin({
					propName: "roundProps",
					priority: -1,
					API: 2,
					init: function(e, t, i) {
						return this._tween = i,
							!0
					}
				}),
				t = e.prototype;
			t._onInitAllProps = function() {
				for (var e, t, i, r = this._tween,
					     s = r.vars.roundProps instanceof Array ? r.vars.roundProps: r.vars.roundProps.split(","), n = s.length, a = {},
					     o = r._propLookup.roundProps; --n > -1;) a[s[n]] = 1;
				for (n = s.length; --n > -1;) for (e = s[n], t = r._firstPT; t;) i = t._next,
					t.pg ? t.t._roundProps(a, !0) : t.n === e && (this._add(t.t, e, t.s, t.c), i && (i._prev = t._prev), t._prev ? t._prev._next = i: r._firstPT === t && (r._firstPT = i), t._next = t._prev = null, r._propLookup[e] = o),
					t = i;
				return ! 1
			},
				t._add = function(e, t, i, r) {
					this._addTween(e, t, i, i + r, t, !0),
						this._overwriteProps.push(t)
				}
		} (),
		_gsScope._gsDefine.plugin({
			propName: "attr",
			API: 2,
			version: "0.3.3",
			init: function(e, t) {
				var i, r, s;
				if ("function" != typeof e.setAttribute) return ! 1;
				this._target = e,
					this._proxy = {},
					this._start = {},
					this._end = {};
				for (i in t) this._start[i] = this._proxy[i] = r = e.getAttribute(i),
					s = this._addTween(this._proxy, i, parseFloat(r), t[i], i),
					this._end[i] = s ? s.s + s.c: t[i],
					this._overwriteProps.push(i);
				return ! 0
			},
			set: function(e) {
				this._super.setRatio.call(this, e);
				for (var t, i = this._overwriteProps,
					     r = i.length,
					     s = 1 === e ? this._end: e ? this._proxy: this._start; --r > -1;) t = i[r],
					this._target.setAttribute(t, s[t] + "")
			}
		}),
		_gsScope._gsDefine.plugin({
			propName: "directionalRotation",
			version: "0.2.1",
			API: 2,
			init: function(e, t) {
				"object" != typeof t && (t = {
					rotation: t
				}),
					this.finals = {};
				var i, r, s, n, a, o, l = t.useRadians === !0 ? 2 * Math.PI: 360,
					c = 1e-6;
				for (i in t)"useRadians" !== i && (o = (t[i] + "").split("_"), r = o[0], s = parseFloat("function" != typeof e[i] ? e[i] : e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i: "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof r && "=" === r.charAt(1) ? s + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, a = n - s, o.length && (r = o.join("_"), -1 !== r.indexOf("short") && (a %= l, a !== a % (l / 2) && (a = 0 > a ? a + l: a - l)), -1 !== r.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l: -1 !== r.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)), (a > c || -c > a) && (this._addTween(e, i, s, s + a, i), this._overwriteProps.push(i)));
				return ! 0
			},
			set: function(e) {
				var t;
				if (1 !== e) this._super.setRatio.call(this, e);
				else for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p],
					t = t._next
			}
		})._autoCSS = !0,
		_gsScope._gsDefine("easing.Back", ["easing.Ease"],
			function(e) {
				var t, i, r, s = _gsScope.GreenSockGlobals || _gsScope,
					n = s.com.greensock,
					a = 2 * Math.PI,
					o = Math.PI / 2,
					l = n._class,
					c = function(t, i) {
						var r = l("easing." + t,
							function() {},
							!0),
							s = r.prototype = new e;
						return s.constructor = r,
							s.getRatio = i,
							r
					},
					h = e.register ||
						function() {},
					u = function(e, t, i, r) {
						var s = l("easing." + e, {
								easeOut: new t,
								easeIn: new i,
								easeInOut: new r
							},
							!0);
						return h(s, e),
							s
					},
					d = function(e, t, i) {
						this.t = e,
							this.v = t,
						i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
					},
					f = function(t, i) {
						var r = l("easing." + t,
							function(e) {
								this._p1 = e || 0 === e ? e: 1.70158,
									this._p2 = 1.525 * this._p1
							},
							!0),
							s = r.prototype = new e;
						return s.constructor = r,
							s.getRatio = i,
							s.config = function(e) {
								return new r(e)
							},
							r
					},
					p = u("Back", f("BackOut",
						function(e) {
							return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
						}), f("BackIn",
						function(e) {
							return e * e * ((this._p1 + 1) * e - this._p1)
						}), f("BackInOut",
						function(e) {
							return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
						})),
					_ = l("easing.SlowMo",
						function(e, t, i) {
							t = t || 0 === t ? t: .7,
								null == e ? e = .7 : e > 1 && (e = 1),
								this._p = 1 !== e ? t: 0,
								this._p1 = (1 - e) / 2,
								this._p2 = e,
								this._p3 = this._p1 + this._p2,
								this._calcEnd = i === !0
						},
						!0),
					m = _.prototype = new e;
				return m.constructor = _,
					m.getRatio = function(e) {
						var t = e + (.5 - e) * this._p;
						return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e: t - (e = 1 - e / this._p1) * e * e * e * t: e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e: t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e: this._calcEnd ? 1 : t
					},
					_.ease = new _(.7, .7),
					m.config = _.config = function(e, t, i) {
						return new _(e, t, i)
					},
					t = l("easing.SteppedEase",
						function(e) {
							e = e || 1,
								this._p1 = 1 / e,
								this._p2 = e + 1
						},
						!0),
					m = t.prototype = new e,
					m.constructor = t,
					m.getRatio = function(e) {
						return 0 > e ? e = 0 : e >= 1 && (e = .999999999),
						(this._p2 * e >> 0) * this._p1
					},
					m.config = t.config = function(e) {
						return new t(e)
					},
					i = l("easing.RoughEase",
						function(t) {
							t = t || {};
							for (var i, r, s, n, a, o, l = t.taper || "none",
								     c = [], h = 0, u = 0 | (t.points || 20), f = u, p = t.randomize !== !1, _ = t.clamp === !0, m = t.template instanceof e ? t.template: null, g = "number" == typeof t.strength ? .4 * t.strength: .4; --f > -1;) i = p ? Math.random() : 1 / u * f,
								r = m ? m.getRatio(i) : i,
								"none" === l ? s = g: "out" === l ? (n = 1 - i, s = n * n * g) : "in" === l ? s = i * i * g: .5 > i ? (n = 2 * i, s = .5 * n * n * g) : (n = 2 * (1 - i), s = .5 * n * n * g),
								p ? r += Math.random() * s - .5 * s: f % 2 ? r += .5 * s: r -= .5 * s,
							_ && (r > 1 ? r = 1 : 0 > r && (r = 0)),
								c[h++] = {
									x: i,
									y: r
								};
							for (c.sort(function(e, t) {
								return e.x - t.x
							}), o = new d(1, 1, null), f = u; --f > -1;) a = c[f],
								o = new d(a.x, a.y, o);
							this._prev = new d(0, 0, 0 !== o.t ? o: o.next)
						},
						!0),
					m = i.prototype = new e,
					m.constructor = i,
					m.getRatio = function(e) {
						var t = this._prev;
						if (e > t.t) {
							for (; t.next && e >= t.t;) t = t.next;
							t = t.prev
						} else for (; t.prev && t.t >= e;) t = t.prev;
						return this._prev = t,
						t.v + (e - t.t) / t.gap * t.c
					},
					m.config = function(e) {
						return new i(e)
					},
					i.ease = new i,
					u("Bounce", c("BounceOut",
						function(e) {
							return 1 / 2.75 > e ? 7.5625 * e * e: 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
						}), c("BounceIn",
						function(e) {
							return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e: 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
						}), c("BounceInOut",
						function(e) {
							var t = .5 > e;
							return e = t ? 1 - 2 * e: 2 * e - 1,
								e = 1 / 2.75 > e ? 7.5625 * e * e: 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
								t ? .5 * (1 - e) : .5 * e + .5
						})),
					u("Circ", c("CircOut",
						function(e) {
							return Math.sqrt(1 - (e -= 1) * e)
						}), c("CircIn",
						function(e) {
							return - (Math.sqrt(1 - e * e) - 1)
						}), c("CircInOut",
						function(e) {
							return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
						})),
					r = function(t, i, r) {
						var s = l("easing." + t,
							function(e, t) {
								this._p1 = e >= 1 ? e: 1,
									this._p2 = (t || r) / (1 > e ? e: 1),
									this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0),
									this._p2 = a / this._p2
							},
							!0),
							n = s.prototype = new e;
						return n.constructor = s,
							n.getRatio = i,
							n.config = function(e, t) {
								return new s(e, t)
							},
							s
					},
					u("Elastic", r("ElasticOut",
						function(e) {
							return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
						},
						.3), r("ElasticIn",
						function(e) {
							return - (this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
						},
						.3), r("ElasticInOut",
						function(e) {
							return 1 > (e *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) + 1
						},
						.45)),
					u("Expo", c("ExpoOut",
						function(e) {
							return 1 - Math.pow(2, -10 * e)
						}), c("ExpoIn",
						function(e) {
							return Math.pow(2, 10 * (e - 1)) - .001
						}), c("ExpoInOut",
						function(e) {
							return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
						})),
					u("Sine", c("SineOut",
						function(e) {
							return Math.sin(e * o)
						}), c("SineIn",
						function(e) {
							return - Math.cos(e * o) + 1
						}), c("SineInOut",
						function(e) {
							return - .5 * (Math.cos(Math.PI * e) - 1)
						})),
					l("easing.EaseLookup", {
							find: function(t) {
								return e.map[t]
							}
						},
						!0),
					h(s.SlowMo, "SlowMo", "ease,"),
					h(i, "RoughEase", "ease,"),
					h(t, "SteppedEase", "ease,"),
					p
			},
			!0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function(e, t) {
		"use strict";
		var i = e.GreenSockGlobals = e.GreenSockGlobals || e;
		if (!i.TweenLite) {
			var r, s, n, a, o, l = function(e) {
					var t, r = e.split("."),
						s = i;
					for (t = 0; r.length > t; t++) s[r[t]] = s = s[r[t]] || {};
					return s
				},
				c = l("com.greensock"),
				h = 1e-10,
				u = function(e) {
					var t, i = [],
						r = e.length;
					for (t = 0; t !== r; i.push(e[t++]));
					return i
				},
				d = function() {},
				f = function() {
					var e = Object.prototype.toString,
						t = e.call([]);
					return function(i) {
						return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
					}
				} (),
				p = {},
				_ = function(r, s, n, a) {
					this.sc = p[r] ? p[r].sc: [],
						p[r] = this,
						this.gsClass = null,
						this.func = n;
					var o = [];
					this.check = function(c) {
						for (var h, u, d, f, m = s.length,
							     g = m; --m > -1;)(h = p[s[m]] || new _(s[m], [])).gsClass ? (o[m] = h.gsClass, g--) : c && h.sc.push(this);
						if (0 === g && n) for (u = ("com.greensock." + r).split("."), d = u.pop(), f = l(u.join("."))[d] = this.gsClass = n.apply(n, o), a && (i[d] = f, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/": "") + r.split(".").pop(), [],
							function() {
								return f
							}) : r === t && "undefined" != typeof module && module.exports && (module.exports = f)), m = 0; this.sc.length > m; m++) this.sc[m].check()
					},
						this.check(!0)
				},
				m = e._gsDefine = function(e, t, i, r) {
					return new _(e, t, i, r)
				},
				g = c._class = function(e, t, i) {
					return t = t ||
						function() {},
						m(e, [],
							function() {
								return t
							},
							i),
						t
				};
			m.globals = i;
			var v = [0, 0, 1, 1],
				y = [],
				w = g("easing.Ease",
					function(e, t, i, r) {
						this._func = e,
							this._type = i || 0,
							this._power = r || 0,
							this._params = t ? v.concat(t) : v
					},
					!0),
				T = w.map = {},
				b = w.register = function(e, t, i, r) {
					for (var s, n, a, o, l = t.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;) for (n = l[h], s = r ? g("easing." + n, null, !0) : c.easing[n] || {},
						                                                                                                                       a = u.length; --a > -1;) o = u[a],
						T[n + "." + o] = T[o + n] = s[o] = e.getRatio ? e: e[o] || new e
				};
			for (n = w.prototype, n._calcEnd = !1, n.getRatio = function(e) {
				if (this._func) return this._params[0] = e,
					this._func.apply(null, this._params);
				var t = this._type,
					i = this._power,
					r = 1 === t ? 1 - e: 2 === t ? e: .5 > e ? 2 * e: 2 * (1 - e);
				return 1 === i ? r *= r: 2 === i ? r *= r * r: 3 === i ? r *= r * r * r: 4 === i && (r *= r * r * r * r),
					1 === t ? 1 - r: 2 === t ? r: .5 > e ? r / 2 : 1 - r / 2
			},
				     r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = r.length; --s > -1;) n = r[s] + ",Power" + s,
				b(new w(null, null, 1, s), n, "easeOut", !0),
				b(new w(null, null, 2, s), n, "easeIn" + (0 === s ? ",easeNone": "")),
				b(new w(null, null, 3, s), n, "easeInOut");
			T.linear = c.easing.Linear.easeIn,
				T.swing = c.easing.Quad.easeInOut;
			var x = g("events.EventDispatcher",
				function(e) {
					this._listeners = {},
						this._eventTarget = e || this
				});
			n = x.prototype,
				n.addEventListener = function(e, t, i, r, s) {
					s = s || 0;
					var n, l, c = this._listeners[e],
						h = 0;
					for (null == c && (this._listeners[e] = c = []), l = c.length; --l > -1;) n = c[l],
						n.c === t && n.s === i ? c.splice(l, 1) : 0 === h && s > n.pr && (h = l + 1);
					c.splice(h, 0, {
						c: t,
						s: i,
						up: r,
						pr: s
					}),
					this !== a || o || a.wake()
				},
				n.removeEventListener = function(e, t) {
					var i, r = this._listeners[e];
					if (r) for (i = r.length; --i > -1;) if (r[i].c === t) return void r.splice(i, 1)
				},
				n.dispatchEvent = function(e) {
					var t, i, r, s = this._listeners[e];
					if (s) for (t = s.length, i = this._eventTarget; --t > -1;) r = s[t],
					r && (r.up ? r.c.call(r.s || i, {
						type: e,
						target: i
					}) : r.c.call(r.s || i))
				};
			var P = e.requestAnimationFrame,
				O = e.cancelAnimationFrame,
				S = Date.now ||
					function() {
						return (new Date).getTime()
					},
				k = S();
			for (r = ["ms", "moz", "webkit", "o"], s = r.length; --s > -1 && !P;) P = e[r[s] + "RequestAnimationFrame"],
				O = e[r[s] + "CancelAnimationFrame"] || e[r[s] + "CancelRequestAnimationFrame"];
			g("Ticker",
				function(e, t) {
					var i, r, s, n, l, c = this,
						u = S(),
						f = t !== !1 && P,
						p = 500,
						_ = 33,
						m = "tick",
						g = function(e) {
							var t, a, o = S() - k;
							o > p && (u += o - _),
								k += o,
								c.time = (k - u) / 1e3,
								t = c.time - l,
							(!i || t > 0 || e === !0) && (c.frame++, l += t + (t >= n ? .004 : n - t), a = !0),
							e !== !0 && (s = r(g)),
							a && c.dispatchEvent(m)
						};
					x.call(c),
						c.time = c.frame = 0,
						c.tick = function() {
							g(!0)
						},
						c.lagSmoothing = function(e, t) {
							p = e || 1 / h,
								_ = Math.min(t, p, 0)
						},
						c.sleep = function() {
							null != s && (f && O ? O(s) : clearTimeout(s), r = d, s = null, c === a && (o = !1))
						},
						c.wake = function() {
							null !== s ? c.sleep() : c.frame > 10 && (k = S() - p + 5),
								r = 0 === i ? d: f && P ? P: function(e) {
									return setTimeout(e, 0 | 1e3 * (l - c.time) + 1)
								},
							c === a && (o = !0),
								g(2)
						},
						c.fps = function(e) {
							return arguments.length ? (i = e, n = 1 / (i || 60), l = this.time + n, void c.wake()) : i
						},
						c.useRAF = function(e) {
							return arguments.length ? (c.sleep(), f = e, void c.fps(i)) : f
						},
						c.fps(e),
						setTimeout(function() {
								f && (!s || 5 > c.frame) && c.useRAF(!1)
							},
							1500)
				}),
				n = c.Ticker.prototype = new c.events.EventDispatcher,
				n.constructor = c.Ticker;
			var M = g("core.Animation",
				function(e, t) {
					if (this.vars = t = t || {},
							this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, U) {
						o || a.wake();
						var i = this.vars.useFrames ? q: U;
						i.add(this, i._time),
						this.vars.paused && this.paused(!0)
					}
				});
			a = M.ticker = new c.Ticker,
				n = M.prototype,
				n._dirty = n._gc = n._initted = n._paused = !1,
				n._totalTime = n._time = 0,
				n._rawPrevTime = -1,
				n._next = n._last = n._onUpdate = n._timeline = n.timeline = null,
				n._paused = !1;
			var E = function() {
				o && S() - k > 2e3 && a.wake(),
					setTimeout(E, 2e3)
			};
			E(),
				n.play = function(e, t) {
					return null != e && this.seek(e, t),
						this.reversed(!1).paused(!1)
				},
				n.pause = function(e, t) {
					return null != e && this.seek(e, t),
						this.paused(!0)
				},
				n.resume = function(e, t) {
					return null != e && this.seek(e, t),
						this.paused(!1)
				},
				n.seek = function(e, t) {
					return this.totalTime(Number(e), t !== !1)
				},
				n.restart = function(e, t) {
					return this.reversed(!1).paused(!1).totalTime(e ? -this._delay: 0, t !== !1, !0)
				},
				n.reverse = function(e, t) {
					return null != e && this.seek(e || this.totalDuration(), t),
						this.reversed(!0).paused(!1)
				},
				n.render = function() {},
				n.invalidate = function() {
					return this._time = this._totalTime = 0,
						this._initted = this._gc = !1,
						this._rawPrevTime = -1,
					(this._gc || !this.timeline) && this._enabled(!0),
						this
				},
				n.isActive = function() {
					var e, t = this._timeline,
						i = this._startTime;
					return ! t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && i + this.totalDuration() / this._timeScale > e
				},
				n._enabled = function(e, t) {
					return o || a.wake(),
						this._gc = !e,
						this._active = this.isActive(),
					t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)),
						!1
				},
				n._kill = function() {
					return this._enabled(!1, !1)
				},
				n.kill = function(e, t) {
					return this._kill(e, t),
						this
				},
				n._uncache = function(e) {
					for (var t = e ? this: this.timeline; t;) t._dirty = !0,
						t = t.timeline;
					return this
				},
				n._swapSelfInParams = function(e) {
					for (var t = e.length,
						     i = e.concat(); --t > -1;)"{self}" === e[t] && (i[t] = this);
					return i
				},
				n.eventCallback = function(e, t, i, r) {
					if ("on" === (e || "").substr(0, 2)) {
						var s = this.vars;
						if (1 === arguments.length) return s[e];
						null == t ? delete s[e] : (s[e] = t, s[e + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[e + "Scope"] = r),
						"onUpdate" === e && (this._onUpdate = t)
					}
					return this
				},
				n.delay = function(e) {
					return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
				},
				n.duration = function(e) {
					return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
				},
				n.totalDuration = function(e) {
					return this._dirty = !1,
						arguments.length ? this.duration(e) : this._totalDuration
				},
				n.time = function(e, t) {
					return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration: e, t)) : this._time
				},
				n.totalTime = function(e, t, i) {
					if (o || a.wake(), !arguments.length) return this._totalTime;
					if (this._timeline) {
						if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
							this._dirty && this.totalDuration();
							var r = this._totalDuration,
								s = this._timeline;
							if (e > r && !i && (e = r), this._startTime = (this._paused ? this._pauseTime: s._time) - (this._reversed ? r - e: e) / this._timeScale, s._dirty || this._uncache(!1), s._timeline) for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0),
								s = s._timeline
						}
						this._gc && this._enabled(!0, !1),
						(this._totalTime !== e || 0 === this._duration) && (this.render(e, t, !1), j.length && H())
					}
					return this
				},
				n.progress = n.totalProgress = function(e, t) {
					return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
				},
				n.startTime = function(e) {
					return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
				},
				n.endTime = function(e) {
					return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
				},
				n.timeScale = function(e) {
					if (!arguments.length) return this._timeScale;
					if (e = e || h, this._timeline && this._timeline.smoothChildTiming) {
						var t = this._pauseTime,
							i = t || 0 === t ? t: this._timeline.totalTime();
						this._startTime = i - (i - this._startTime) * this._timeScale / e
					}
					return this._timeScale = e,
						this._uncache(!1)
				},
				n.reversed = function(e) {
					return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime: this._totalTime, !0)), this) : this._reversed
				},
				n.paused = function(e) {
					if (!arguments.length) return this._paused;
					var t, i, r = this._timeline;
					return e != this._paused && r && (o || e || a.wake(), t = r.rawTime(), i = t - this._pauseTime, !e && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t: null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && this.render(r.smoothChildTiming ? this._totalTime: (t - this._startTime) / this._timeScale, !0, !0)),
					this._gc && !e && this._enabled(!0, !1),
						this
				};
			var R = g("core.SimpleTimeline",
				function(e) {
					M.call(this, 0, e),
						this.autoRemoveChildren = this.smoothChildTiming = !0
				});
			n = R.prototype = new M,
				n.constructor = R,
				n.kill()._gc = !1,
				n._first = n._last = n._recent = null,
				n._sortChildren = !1,
				n.add = n.insert = function(e, t) {
					var i, r;
					if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren) for (r = e._startTime; i && i._startTime > r;) i = i._prev;
					return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e),
						e._next ? e._next._prev = e: this._last = e,
						e._prev = i,
						this._recent = e,
					this._timeline && this._uncache(!0),
						this
				},
				n._remove = function(e, t) {
					return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next: this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev: this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)),
						this
				},
				n.render = function(e, t, i) {
					var r, s = this._first;
					for (this._totalTime = this._time = this._rawPrevTime = e; s;) r = s._next,
					(s._active || e >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, i) : s.render((e - s._startTime) * s._timeScale, t, i)),
						s = r
				},
				n.rawTime = function() {
					return o || a.wake(),
						this._totalTime
				};
			var A = g("TweenLite",
				function(t, i, r) {
					if (M.call(this, i, r), this.render = A.prototype.render, null == t) throw "Cannot tween a null target.";
					this.target = t = "string" != typeof t ? t: A.selector(t) || t;
					var s, n, a, o = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
						l = this.vars.overwrite;
					if (this._overwrite = l = null == l ? z[A.defaultOverwrite] : "number" == typeof l ? l >> 0 : z[l], (o || t instanceof Array || t.push && f(t)) && "number" != typeof t[0]) for (this._targets = a = u(t), this._propLookup = [], this._siblings = [], s = 0; a.length > s; s++) n = a[s],
						n ? "string" != typeof n ? n.length && n !== e && n[0] && (n[0] === e || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[s] = Y(n, this, !1), 1 === l && this._siblings[s].length > 1 && G(n, this, null, 1, this._siblings[s])) : (n = a[s--] = A.selector(n), "string" == typeof n && a.splice(s + 1, 1)) : a.splice(s--, 1);
					else this._propLookup = {},
						this._siblings = Y(t, this, !1),
					1 === l && this._siblings.length > 1 && G(t, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render( - this._delay))
				},
				!0),
				L = function(t) {
					return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
				},
				I = function(e, t) {
					var i, r = {};
					for (i in e) F[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!$[i] || $[i] && $[i]._autoCSS) || (r[i] = e[i], delete e[i]);
					e.css = r
				};
			n = A.prototype = new M,
				n.constructor = A,
				n.kill()._gc = !1,
				n.ratio = 0,
				n._firstPT = n._targets = n._overwrittenProps = n._startAt = null,
				n._notifyPluginsOfEnabled = n._lazy = !1,
				A.version = "1.16.0",
				A.defaultEase = n._ease = new w(null, null, 1, 1),
				A.defaultOverwrite = "auto",
				A.ticker = a,
				A.autoSleep = 120,
				A.lagSmoothing = function(e, t) {
					a.lagSmoothing(e, t)
				},
				A.selector = e.$ || e.jQuery ||
					function(t) {
						var i = e.$ || e.jQuery;
						return i ? (A.selector = i, i(t)) : "undefined" == typeof document ? t: document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
					};
			var j = [],
				C = {},
				D = A._internals = {
					isArray: f,
					isSelector: L,
					lazyTweens: j
				},
				$ = A._plugins = {},
				X = D.tweenLookup = {},
				N = 0,
				F = D.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1
				},
				z = {
					none: 0,
					all: 1,
					auto: 2,
					concurrent: 3,
					allOnStart: 4,
					preexisting: 5,
					"true": 1,
					"false": 0
				},
				q = M._rootFramesTimeline = new R,
				U = M._rootTimeline = new R,
				B = 30,
				H = D.lazyRender = function() {
					var e, t = j.length;
					for (C = {}; --t > -1;) e = j[t],
					e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
					j.length = 0
				};
			U._startTime = a.time,
				q._startTime = a.frame,
				U._active = q._active = !0,
				setTimeout(H, 1),
				M._updateRoot = A.render = function() {
					var e, t, i;
					if (j.length && H(), U.render((a.time - U._startTime) * U._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), j.length && H(), a.frame >= B) {
						B = a.frame + (parseInt(A.autoSleep, 10) || 120);
						for (i in X) {
							for (t = X[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
							0 === t.length && delete X[i]
						}
						if (i = U._first, (!i || i._paused) && A.autoSleep && !q._first && 1 === a._listeners.tick.length) {
							for (; i && i._paused;) i = i._next;
							i || a.sleep()
						}
					}
				},
				a.addEventListener("tick", M._updateRoot);
			var Y = function(e, t, i) {
					var r, s, n = e._gsTweenID;
					if (X[n || (e._gsTweenID = n = "t" + N++)] || (X[n] = {
							target: e,
							tweens: []
						}), t && (r = X[n].tweens, r[s = r.length] = t, i)) for (; --s > -1;) r[s] === t && r.splice(s, 1);
					return X[n].tweens
				},
				V = function(e, t, i, r) {
					var s, n, a = e.vars.onOverwrite;
					return a && (s = a(e, t, i, r)),
						a = A.onOverwrite,
					a && (n = a(e, t, i, r)),
					s !== !1 && n !== !1
				},
				G = function(e, t, i, r, s) {
					var n, a, o, l;
					if (1 === r || r >= 4) {
						for (l = s.length, n = 0; l > n; n++) if ((o = s[n]) !== t) o._gc || V(o, t) && o._enabled(!1, !1) && (a = !0);
						else if (5 === r) break;
						return a
					}
					var c, u = t._startTime + h,
						d = [],
						f = 0,
						p = 0 === t._duration;
					for (n = s.length; --n > -1;)(o = s[n]) === t || o._gc || o._paused || (o._timeline !== t._timeline ? (c = c || Q(t, 0, p), 0 === Q(o, c, p) && (d[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (d[f++] = o)));
					for (n = f; --n > -1;) if (o = d[n], 2 === r && o._kill(i, e, t) && (a = !0), 2 !== r || !o._firstPT && o._initted) {
						if (2 !== r && !V(o, t)) continue;
						o._enabled(!1, !1) && (a = !0)
					}
					return a
				},
				Q = function(e, t, i) {
					for (var r = e._timeline,
						     s = r._timeScale,
						     n = e._startTime; r._timeline;) {
						if (n += r._startTime, s *= r._timeScale, r._paused) return - 100;
						r = r._timeline
					}
					return n /= s,
						n > t ? n - t: i && n === t || !e._initted && 2 * h > n - t ? h: (n += e.totalDuration() / e._timeScale / s) > t + h ? 0 : n - t - h
				};
			n._init = function() {
				var e, t, i, r, s, n = this.vars,
					a = this._overwrittenProps,
					o = this._duration,
					l = !!n.immediateRender,
					c = n.ease;
				if (n.startAt) {
					this._startAt && (this._startAt.render( - 1, !0), this._startAt.kill()),
						s = {};
					for (r in n.startAt) s[r] = n.startAt[r];
					if (s.overwrite = !1, s.immediateRender = !0, s.lazy = l && n.lazy !== !1, s.startAt = s.delay = null, this._startAt = A.to(this.target, 0, s), l) if (this._time > 0) this._startAt = null;
					else if (0 !== o) return
				} else if (n.runBackwards && 0 !== o) if (this._startAt) this._startAt.render( - 1, !0),
					this._startAt.kill(),
					this._startAt = null;
				else {
					0 !== this._time && (l = !1),
						i = {};
					for (r in n) F[r] && "autoCSS" !== r || (i[r] = n[r]);
					if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = A.to(this.target, 0, i), l) {
						if (0 === this._time) return
					} else this._startAt._init(),
						this._startAt._enabled(!1),
					this.vars.immediateRender && (this._startAt = null)
				}
				if (this._ease = c = c ? c instanceof w ? c: "function" == typeof c ? new w(c, n.easeParams) : T[c] || A.defaultEase: A.defaultEase, n.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {},
					this._siblings[e], a ? a[e] : null) && (t = !0);
				else t = this._initProps(this.target, this._propLookup, this._siblings, a);
				if (t && A._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards) for (i = this._firstPT; i;) i.s += i.c,
					i.c = -i.c,
					i = i._next;
				this._onUpdate = n.onUpdate,
					this._initted = !0
			},
				n._initProps = function(t, i, r, s) {
					var n, a, o, l, c, h;
					if (null == t) return ! 1;
					C[t._gsTweenID] && H(),
					this.vars.css || t.style && t !== e && t.nodeType && $.css && this.vars.autoCSS !== !1 && I(this.vars, t);
					for (n in this.vars) {
						if (h = this.vars[n], F[n]) h && (h instanceof Array || h.push && f(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[n] = h = this._swapSelfInParams(h, this));
						else if ($[n] && (l = new $[n])._onInitTween(t, this.vars[n], this)) {
							for (this._firstPT = c = {
								_next: this._firstPT,
								t: l,
								p: "setRatio",
								s: 0,
								c: 1,
								f: !0,
								n: n,
								pg: !0,
								pr: l._priority
							},
								     a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT; (l._priority || l._onInitAllProps) && (o = !0),
							(l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
						} else this._firstPT = i[n] = c = {
							_next: this._firstPT,
							t: t,
							p: n,
							f: "function" == typeof t[n],
							n: n,
							pg: !1,
							pr: 0
						},
							c.s = c.f ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n: "get" + n.substr(3)]() : parseFloat(t[n]),
							c.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - c.s || 0;
						c && c._next && (c._next._prev = c)
					}
					return s && this._kill(s, t) ? this._initProps(t, i, r, s) : this._overwrite > 1 && this._firstPT && r.length > 1 && G(t, this, i, this._overwrite, r) ? (this._kill(i, t), this._initProps(t, i, r, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (C[t._gsTweenID] = !0), o)
				},
				n.render = function(e, t, i) {
					var r, s, n, a, o = this._time,
						l = this._duration,
						c = this._rawPrevTime;
					if (e >= l) this._totalTime = this._time = l,
						this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
					this._reversed || (r = !0, s = "onComplete"),
					0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > c || c === h && "isPause" !== this.data) && c !== e && (i = !0, c > h && (s = "onReverseComplete")), this._rawPrevTime = a = !t || e || c === e ? e: h);
					else if (1e-7 > e) this._totalTime = this._time = 0,
						this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
					(0 !== o || 0 === l && c > 0) && (s = "onReverseComplete", r = this._reversed),
					0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !t || e || c === e ? e: h)),
					this._initted || (i = !0);
					else if (this._totalTime = this._time = e, this._easeType) {
						var u = e / l,
							d = this._easeType,
							f = this._easePower; (1 === d || 3 === d && u >= .5) && (u = 1 - u),
						3 === d && (u *= 2),
							1 === f ? u *= u: 2 === f ? u *= u * u: 3 === f ? u *= u * u * u: 4 === f && (u *= u * u * u * u),
							this.ratio = 1 === d ? 1 - u: 2 === d ? u: .5 > e / l ? u / 2 : 1 - u / 2
					} else this.ratio = this._ease.getRatio(e / l);
					if (this._time !== o || i) {
						if (!this._initted) {
							if (this._init(), !this._initted || this._gc) return;
							if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o,
								this._rawPrevTime = c,
								j.push(this),
								void(this._lazy = [e, t]);
							this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
						}
						for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && e >= 0 && (this._active = !0), 0 === o && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
							n = n._next;
						this._onUpdate && (0 > e && this._startAt && e !== -1e-4 && this._startAt.render(e, t, i), t || (this._time !== o || r) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)),
						s && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || y), 0 === l && this._rawPrevTime === h && a !== h && (this._rawPrevTime = 0))
					}
				},
				n._kill = function(e, t, i) {
					if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1,
						this._enabled(!1, !1);
					t = "string" != typeof t ? t || this._targets || this.target: A.selector(t) || t;
					var r, s, n, a, o, l, c, h, u;
					if ((f(t) || L(t)) && "number" != typeof t[0]) for (r = t.length; --r > -1;) this._kill(e, t[r]) && (l = !0);
					else {
						if (this._targets) {
							for (r = this._targets.length; --r > -1;) if (t === this._targets[r]) {
								o = this._propLookup[r] || {},
									this._overwrittenProps = this._overwrittenProps || [],
									s = this._overwrittenProps[r] = e ? this._overwrittenProps[r] || {}: "all";
								break
							}
						} else {
							if (t !== this.target) return ! 1;
							o = this._propLookup,
								s = this._overwrittenProps = e ? this._overwrittenProps || {}: "all"
						}
						if (o) {
							if (c = e || o, h = e !== s && "all" !== s && e !== o && ("object" != typeof e || !e._tempKill), i && (A.onOverwrite || this.vars.onOverwrite)) {
								for (n in c) o[n] && (u || (u = []), u.push(n));
								if (!V(this, i, t, u)) return ! 1
							}
							for (n in c)(a = o[n]) && (a.pg && a.t._kill(c) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next: a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]),
							h && (s[n] = 1); ! this._firstPT && this._initted && this._enabled(!1, !1)
						}
					}
					return l
				},
				n.invalidate = function() {
					return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this),
						this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
						this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
						this._propLookup = this._targets ? {}: [],
						M.prototype.invalidate.call(this),
					this.vars.immediateRender && (this._time = -h, this.render( - this._delay)),
						this
				},
				n._enabled = function(e, t) {
					if (o || a.wake(), e && this._gc) {
						var i, r = this._targets;
						if (r) for (i = r.length; --i > -1;) this._siblings[i] = Y(r[i], this, !0);
						else this._siblings = Y(this.target, this, !0)
					}
					return M.prototype._enabled.call(this, e, t),
						this._notifyPluginsOfEnabled && this._firstPT ? A._onPluginEvent(e ? "_onEnable": "_onDisable", this) : !1
				},
				A.to = function(e, t, i) {
					return new A(e, t, i)
				},
				A.from = function(e, t, i) {
					return i.runBackwards = !0,
						i.immediateRender = 0 != i.immediateRender,
						new A(e, t, i)
				},
				A.fromTo = function(e, t, i, r) {
					return r.startAt = i,
						r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
						new A(e, t, r)
				},
				A.delayedCall = function(e, t, i, r, s) {
					return new A(t, 0, {
						delay: e,
						onComplete: t,
						onCompleteParams: i,
						onCompleteScope: r,
						onReverseComplete: t,
						onReverseCompleteParams: i,
						onReverseCompleteScope: r,
						immediateRender: !1,
						lazy: !1,
						useFrames: s,
						overwrite: 0
					})
				},
				A.set = function(e, t) {
					return new A(e, 0, t)
				},
				A.getTweensOf = function(e, t) {
					if (null == e) return [];
					e = "string" != typeof e ? e: A.selector(e) || e;
					var i, r, s, n;
					if ((f(e) || L(e)) && "number" != typeof e[0]) {
						for (i = e.length, r = []; --i > -1;) r = r.concat(A.getTweensOf(e[i], t));
						for (i = r.length; --i > -1;) for (n = r[i], s = i; --s > -1;) n === r[s] && r.splice(i, 1)
					} else for (r = Y(e).concat(), i = r.length; --i > -1;)(r[i]._gc || t && !r[i].isActive()) && r.splice(i, 1);
					return r
				},
				A.killTweensOf = A.killDelayedCallsTo = function(e, t, i) {
					"object" == typeof t && (i = t, t = !1);
					for (var r = A.getTweensOf(e, t), s = r.length; --s > -1;) r[s]._kill(i, e)
				};
			var W = g("plugins.TweenPlugin",
				function(e, t) {
					this._overwriteProps = (e || "").split(","),
						this._propName = this._overwriteProps[0],
						this._priority = t || 0,
						this._super = W.prototype
				},
				!0);
			if (n = W.prototype, W.version = "1.10.1", W.API = 2, n._firstPT = null, n._addTween = function(e, t, i, r, s, n) {
					var a, o;
					return null != r && (a = "number" == typeof r || "=" !== r.charAt(1) ? Number(r) - i: parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))) ? (this._firstPT = o = {
						_next: this._firstPT,
						t: e,
						p: t,
						s: i,
						c: a,
						f: "function" == typeof e[t],
						n: s || t,
						r: n
					},
					o._next && (o._next._prev = o), o) : void 0
				},
					n.setRatio = function(e) {
						for (var t, i = this._firstPT,
							     r = 1e-6; i;) t = i.c * e + i.s,
							i.r ? t = Math.round(t) : r > t && t > -r && (t = 0),
							i.f ? i.t[i.p](t) : i.t[i.p] = t,
							i = i._next
					},
					n._kill = function(e) {
						var t, i = this._overwriteProps,
							r = this._firstPT;
						if (null != e[this._propName]) this._overwriteProps = [];
						else for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
						for (; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)),
							r = r._next;
						return ! 1
					},
					n._roundProps = function(e, t) {
						for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t),
							i = i._next
					},
					A._onPluginEvent = function(e, t) {
						var i, r, s, n, a, o = t._firstPT;
						if ("_onInitAllProps" === e) {
							for (; o;) {
								for (a = o._next, r = s; r && r.pr > o.pr;) r = r._next; (o._prev = r ? r._prev: n) ? o._prev._next = o: s = o,
									(o._next = r) ? r._prev = o: n = o,
									o = a
							}
							o = t._firstPT = s
						}
						for (; o;) o.pg && "function" == typeof o.t[e] && o.t[e]() && (i = !0),
							o = o._next;
						return i
					},
					W.activate = function(e) {
						for (var t = e.length; --t > -1;) e[t].API === W.API && ($[(new e[t])._propName] = e[t]);
						return ! 0
					},
					m.plugin = function(e) {
						if (! (e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
						var t, i = e.propName,
							r = e.priority || 0,
							s = e.overwriteProps,
							n = {
								init: "_onInitTween",
								set: "setRatio",
								kill: "_kill",
								round: "_roundProps",
								initAll: "_onInitAllProps"
							},
							a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
								function() {
									W.call(this, i, r),
										this._overwriteProps = s || []
								},
								e.global === !0),
							o = a.prototype = new W(i);
						o.constructor = a,
							a.API = e.API;
						for (t in n)"function" == typeof e[t] && (o[n[t]] = e[t]);
						return a.version = e.version,
							W.activate([a]),
							a
					},
					r = e._gsQueue) {
				for (s = 0; r.length > s; s++) r[s]();
				for (n in p) p[n].func || e.console.log("GSAP encountered missing dependency: com.greensock." + n)
			}
			o = !1
		}
	} ("undefined" != typeof module && module.exports && "undefined" != typeof global ? global: this || window, "TweenMax"),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		var e = createjs.PreloadJS = createjs.PreloadJS || {};
		e.version = "0.6.0",
			e.buildDate = "Thu, 11 Dec 2014 23:32:09 GMT"
	} (),
	this.createjs = this.createjs || {},
	createjs.extend = function(e, t) {
		"use strict";
		function i() {
			this.constructor = e
		}
		return i.prototype = t.prototype,
			e.prototype = new i
	},
	this.createjs = this.createjs || {},
	createjs.promote = function(e, t) {
		"use strict";
		var i = e.prototype,
			r = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
		if (r) {
			i[(t += "_") + "constructor"] = r.constructor;
			for (var s in r) i.hasOwnProperty(s) && "function" == typeof r[s] && (i[t + s] = r[s])
		}
		return e
	},
	this.createjs = this.createjs || {},
	createjs.indexOf = function(e, t) {
		"use strict";
		for (var i = 0,
			     r = e.length; r > i; i++) if (t === e[i]) return i;
		return - 1
	},
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		createjs.proxy = function(e, t) {
			var i = Array.prototype.slice.call(arguments, 2);
			return function() {
				return e.apply(t, Array.prototype.slice.call(arguments, 0).concat(i))
			}
		}
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e() {
			throw "BrowserDetect cannot be instantiated"
		}
		var t = e.agent = window.navigator.userAgent;
		e.isWindowPhone = t.indexOf("IEMobile") > -1 || t.indexOf("Windows Phone") > -1,
			e.isFirefox = t.indexOf("Firefox") > -1,
			e.isOpera = null != window.opera,
			e.isChrome = t.indexOf("Chrome") > -1,
			e.isIOS = (t.indexOf("iPod") > -1 || t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1) && !e.isWindowPhone,
			e.isAndroid = t.indexOf("Android") > -1 && !e.isWindowPhone,
			e.isBlackberry = t.indexOf("Blackberry") > -1,
			createjs.BrowserDetect = e
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t, i) {
			this.type = e,
				this.target = null,
				this.currentTarget = null,
				this.eventPhase = 0,
				this.bubbles = !!t,
				this.cancelable = !!i,
				this.timeStamp = (new Date).getTime(),
				this.defaultPrevented = !1,
				this.propagationStopped = !1,
				this.immediatePropagationStopped = !1,
				this.removed = !1
		}
		var t = e.prototype;
		t.preventDefault = function() {
			this.defaultPrevented = this.cancelable && !0
		},
			t.stopPropagation = function() {
				this.propagationStopped = !0
			},
			t.stopImmediatePropagation = function() {
				this.immediatePropagationStopped = this.propagationStopped = !0
			},
			t.remove = function() {
				this.removed = !0
			},
			t.clone = function() {
				return new e(this.type, this.bubbles, this.cancelable)
			},
			t.set = function(e) {
				for (var t in e) this[t] = e[t];
				return this
			},
			t.toString = function() {
				return "[Event (type=" + this.type + ")]"
			},
			createjs.Event = e
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t, i) {
			this.Event_constructor("error"),
				this.title = e,
				this.message = t,
				this.data = i
		}
		var t = createjs.extend(e, createjs.Event);
		t.clone = function() {
			return new createjs.ErrorEvent(this.title, this.message, this.data)
		},
			createjs.ErrorEvent = createjs.promote(e, "Event")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e() {
			this._listeners = null,
				this._captureListeners = null
		}
		var t = e.prototype;
		e.initialize = function(e) {
			e.addEventListener = t.addEventListener,
				e.on = t.on,
				e.removeEventListener = e.off = t.removeEventListener,
				e.removeAllEventListeners = t.removeAllEventListeners,
				e.hasEventListener = t.hasEventListener,
				e.dispatchEvent = t.dispatchEvent,
				e._dispatchEvent = t._dispatchEvent,
				e.willTrigger = t.willTrigger
		},
			t.addEventListener = function(e, t, i) {
				var r;
				r = i ? this._captureListeners = this._captureListeners || {}: this._listeners = this._listeners || {};
				var s = r[e];
				return s && this.removeEventListener(e, t, i),
					s = r[e],
					s ? s.push(t) : r[e] = [t],
					t
			},
			t.on = function(e, t, i, r, s, n) {
				return t.handleEvent && (i = i || t, t = t.handleEvent),
					i = i || this,
					this.addEventListener(e,
						function(e) {
							t.call(i, e, s),
							r && e.remove()
						},
						n)
			},
			t.removeEventListener = function(e, t, i) {
				var r = i ? this._captureListeners: this._listeners;
				if (r) {
					var s = r[e];
					if (s) for (var n = 0,
						            a = s.length; a > n; n++) if (s[n] == t) {
						1 == a ? delete r[e] : s.splice(n, 1);
						break
					}
				}
			},
			t.off = t.removeEventListener,
			t.removeAllEventListeners = function(e) {
				e ? (this._listeners && delete this._listeners[e], this._captureListeners && delete this._captureListeners[e]) : this._listeners = this._captureListeners = null
			},
			t.dispatchEvent = function(e) {
				if ("string" == typeof e) {
					var t = this._listeners;
					if (!t || !t[e]) return ! 1;
					e = new createjs.Event(e)
				} else e.target && e.clone && (e = e.clone());
				try {
					e.target = this
				} catch(i) {}
				if (e.bubbles && this.parent) {
					for (var r = this,
						     s = [r]; r.parent;) s.push(r = r.parent);
					var n, a = s.length;
					for (n = a - 1; n >= 0 && !e.propagationStopped; n--) s[n]._dispatchEvent(e, 1 + (0 == n));
					for (n = 1; a > n && !e.propagationStopped; n++) s[n]._dispatchEvent(e, 3)
				} else this._dispatchEvent(e, 2);
				return e.defaultPrevented
			},
			t.hasEventListener = function(e) {
				var t = this._listeners,
					i = this._captureListeners;
				return !! (t && t[e] || i && i[e])
			},
			t.willTrigger = function(e) {
				for (var t = this; t;) {
					if (t.hasEventListener(e)) return ! 0;
					t = t.parent
				}
				return ! 1
			},
			t.toString = function() {
				return "[EventDispatcher]"
			},
			t._dispatchEvent = function(e, t) {
				var i, r = 1 == t ? this._captureListeners: this._listeners;
				if (e && r) {
					var s = r[e.type];
					if (!s || !(i = s.length)) return;
					try {
						e.currentTarget = this
					} catch(n) {}
					try {
						e.eventPhase = t
					} catch(n) {}
					e.removed = !1,
						s = s.slice();
					for (var a = 0; i > a && !e.immediatePropagationStopped; a++) {
						var o = s[a];
						o.handleEvent ? o.handleEvent(e) : o(e),
						e.removed && (this.off(e.type, o, 1 == t), e.removed = !1)
					}
				}
			},
			createjs.EventDispatcher = e
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t) {
			this.Event_constructor("progress"),
				this.loaded = e,
				this.total = null == t ? 1 : t,
				this.progress = 0 == t ? 0 : this.loaded / this.total
		}
		var t = createjs.extend(e, createjs.Event);
		t.clone = function() {
			return new createjs.ProgressEvent(this.loaded, this.total)
		},
			createjs.ProgressEvent = createjs.promote(e, "Event")
	} (window),
	function() {
		function e(t, r) {
			function n(e) {
				if (n[e] !== m) return n[e];
				var t;
				if ("bug-string-char-index" == e) t = "a" != "a" [0];
				else if ("json" == e) t = n("json-stringify") && n("json-parse");
				else {
					var i, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
					if ("json-stringify" == e) {
						var l = r.stringify,
							h = "function" == typeof l && y;
						if (h) { (i = function() {
							return 1
						}).toJSON = i;
							try {
								h = "0" === l(0) && "0" === l(new a) && '""' == l(new o) && l(v) === m && l(m) === m && l() === m && "1" === l(i) && "[1]" == l([i]) && "[null]" == l([m]) && "null" == l(null) && "[null,null,null]" == l([m, v, null]) && l({
									a: [i, !0, !1, null, "\x00\b\n\f\r	"]
								}) == s && "1" === l(null, i) && "[\n 1,\n 2\n]" == l([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == l(new c( - 864e13)) && '"+275760-09-13T00:00:00.000Z"' == l(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == l(new c( - 621987552e5)) && '"1969-12-31T23:59:59.999Z"' == l(new c( - 1))
							} catch(u) {
								h = !1
							}
						}
						t = h
					}
					if ("json-parse" == e) {
						var d = r.parse;
						if ("function" == typeof d) try {
							if (0 === d("0") && !d(!1)) {
								i = d(s);
								var f = 5 == i.a.length && 1 === i.a[0];
								if (f) {
									try {
										f = !d('"	"')
									} catch(u) {}
									if (f) try {
										f = 1 !== d("01")
									} catch(u) {}
									if (f) try {
										f = 1 !== d("1.")
									} catch(u) {}
								}
							}
						} catch(u) {
							f = !1
						}
						t = f
					}
				}
				return n[e] = !!t
			}
			t || (t = s.Object()),
			r || (r = s.Object());
			var a = t.Number || s.Number,
				o = t.String || s.String,
				l = t.Object || s.Object,
				c = t.Date || s.Date,
				h = t.SyntaxError || s.SyntaxError,
				u = t.TypeError || s.TypeError,
				d = t.Math || s.Math,
				f = t.JSON || s.JSON;
			"object" == typeof f && f && (r.stringify = f.stringify, r.parse = f.parse);
			var p, _, m, g = l.prototype,
				v = g.toString,
				y = new c( - 0xc782b5b800cec);
			try {
				y = -109252 == y.getUTCFullYear() && 0 === y.getUTCMonth() && 1 === y.getUTCDate() && 10 == y.getUTCHours() && 37 == y.getUTCMinutes() && 6 == y.getUTCSeconds() && 708 == y.getUTCMilliseconds()
			} catch(w) {}
			if (!n("json")) {
				var T = "[object Function]",
					b = "[object Date]",
					x = "[object Number]",
					P = "[object String]",
					O = "[object Array]",
					S = "[object Boolean]",
					k = n("bug-string-char-index");
				if (!y) var M = d.floor,
					E = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
					R = function(e, t) {
						return E[t] + 365 * (e - 1970) + M((e - 1969 + (t = +(t > 1))) / 4) - M((e - 1901 + t) / 100) + M((e - 1601 + t) / 400)
					};
				if ((p = g.hasOwnProperty) || (p = function(e) {
						var t, i = {};
						return (i.__proto__ = null, i.__proto__ = {
							toString: 1
						},
							i).toString != v ? p = function(e) {
							var t = this.__proto__,
								i = e in (this.__proto__ = null, this);
							return this.__proto__ = t,
								i
						}: (t = i.constructor, p = function(e) {
							var i = (this.constructor || t).prototype;
							return e in this && !(e in i && this[e] === i[e])
						}),
							i = null,
							p.call(this, e)
					}), _ = function(e, t) {
						var r, s, n, a = 0; (r = function() {
							this.valueOf = 0
						}).prototype.valueOf = 0,
							s = new r;
						for (n in s) p.call(s, n) && a++;
						return r = s = null,
							a ? _ = 2 == a ?
								function(e, t) {
									var i, r = {},
										s = v.call(e) == T;
									for (i in e) s && "prototype" == i || p.call(r, i) || !(r[i] = 1) || !p.call(e, i) || t(i)
								}: function(e, t) {
									var i, r, s = v.call(e) == T;
									for (i in e) s && "prototype" == i || !p.call(e, i) || (r = "constructor" === i) || t(i); (r || p.call(e, i = "constructor")) && t(i)
								}: (s = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], _ = function(e, t) {
								var r, n, a = v.call(e) == T,
									o = !a && "function" != typeof e.constructor && i[typeof e.hasOwnProperty] && e.hasOwnProperty || p;
								for (r in e) a && "prototype" == r || !o.call(e, r) || t(r);
								for (n = s.length; r = s[--n]; o.call(e, r) && t(r));
							}),
							_(e, t)
					},
						!n("json-stringify")) {
					var A = {
							92 : "\\\\",
							34 : '\\"',
							8 : "\\b",
							12 : "\\f",
							10 : "\\n",
							13 : "\\r",
							9 : "\\t"
						},
						L = "000000",
						I = function(e, t) {
							return (L + (t || 0)).slice( - e)
						},
						j = "\\u00",
						C = function(e) {
							for (var t = '"',
								     i = 0,
								     r = e.length,
								     s = !k || r > 10,
								     n = s && (k ? e.split("") : e); r > i; i++) {
								var a = e.charCodeAt(i);
								switch (a) {
									case 8:
									case 9:
									case 10:
									case 12:
									case 13:
									case 34:
									case 92:
										t += A[a];
										break;
									default:
										if (32 > a) {
											t += j + I(2, a.toString(16));
											break
										}
										t += s ? n[i] : e.charAt(i)
								}
							}
							return t + '"'
						},
						D = function(e, t, i, r, s, n, a) {
							var o, l, c, h, d, f, g, y, w, T, k, E, A, L, j, $;
							try {
								o = t[e]
							} catch(X) {}
							if ("object" == typeof o && o) if (l = v.call(o), l != b || p.call(o, "toJSON"))"function" == typeof o.toJSON && (l != x && l != P && l != O || p.call(o, "toJSON")) && (o = o.toJSON(e));
							else if (o > -1 / 0 && 1 / 0 > o) {
								if (R) {
									for (d = M(o / 864e5), c = M(d / 365.2425) + 1970 - 1; R(c + 1, 0) <= d; c++);
									for (h = M((d - R(c, 0)) / 30.42); R(c, h + 1) <= d; h++);
									d = 1 + d - R(c, h),
										f = (o % 864e5 + 864e5) % 864e5,
										g = M(f / 36e5) % 24,
										y = M(f / 6e4) % 60,
										w = M(f / 1e3) % 60,
										T = f % 1e3
								} else c = o.getUTCFullYear(),
									h = o.getUTCMonth(),
									d = o.getUTCDate(),
									g = o.getUTCHours(),
									y = o.getUTCMinutes(),
									w = o.getUTCSeconds(),
									T = o.getUTCMilliseconds();
								o = (0 >= c || c >= 1e4 ? (0 > c ? "-": "+") + I(6, 0 > c ? -c: c) : I(4, c)) + "-" + I(2, h + 1) + "-" + I(2, d) + "T" + I(2, g) + ":" + I(2, y) + ":" + I(2, w) + "." + I(3, T) + "Z"
							} else o = null;
							if (i && (o = i.call(t, e, o)), null === o) return "null";
							if (l = v.call(o), l == S) return "" + o;
							if (l == x) return o > -1 / 0 && 1 / 0 > o ? "" + o: "null";
							if (l == P) return C("" + o);
							if ("object" == typeof o) {
								for (L = a.length; L--;) if (a[L] === o) throw u();
								if (a.push(o), k = [], j = n, n += s, l == O) {
									for (A = 0, L = o.length; L > A; A++) E = D(A, o, i, r, s, n, a),
										k.push(E === m ? "null": E);
									$ = k.length ? s ? "[\n" + n + k.join(",\n" + n) + "\n" + j + "]": "[" + k.join(",") + "]": "[]"
								} else _(r || o,
									function(e) {
										var t = D(e, o, i, r, s, n, a);
										t !== m && k.push(C(e) + ":" + (s ? " ": "") + t)
									}),
									$ = k.length ? s ? "{\n" + n + k.join(",\n" + n) + "\n" + j + "}": "{" + k.join(",") + "}": "{}";
								return a.pop(),
									$
							}
						};
					r.stringify = function(e, t, r) {
						var s, n, a, o;
						if (i[typeof t] && t) if ((o = v.call(t)) == T) n = t;
						else if (o == O) {
							a = {};
							for (var l, c = 0,
								     h = t.length; h > c; l = t[c++], o = v.call(l), (o == P || o == x) && (a[l] = 1));
						}
						if (r) if ((o = v.call(r)) == x) {
							if ((r -= r % 1) > 0) for (s = "", r > 10 && (r = 10); s.length < r; s += " ");
						} else o == P && (s = r.length <= 10 ? r: r.slice(0, 10));
						return D("", (l = {},
							l[""] = e, l), n, a, s, "", [])
					}
				}
				if (!n("json-parse")) {
					var $, X, N = o.fromCharCode,
						F = {
							92 : "\\",
							34 : '"',
							47 : "/",
							98 : "\b",
							116 : "	",
							110 : "\n",
							102 : "\f",
							114 : "\r"
						},
						z = function() {
							throw $ = X = null,
								h()
						},
						q = function() {
							for (var e, t, i, r, s, n = X,
								     a = n.length; a > $;) switch (s = n.charCodeAt($)) {
								case 9:
								case 10:
								case 13:
								case 32:
									$++;
									break;
								case 123:
								case 125:
								case 91:
								case 93:
								case 58:
								case 44:
									return e = k ? n.charAt($) : n[$],
										$++,
										e;
								case 34:
									for (e = "@", $++; a > $;) if (s = n.charCodeAt($), 32 > s) z();
									else if (92 == s) switch (s = n.charCodeAt(++$)) {
										case 92:
										case 34:
										case 47:
										case 98:
										case 116:
										case 110:
										case 102:
										case 114:
											e += F[s],
												$++;
											break;
										case 117:
											for (t = ++$, i = $ + 4; i > $; $++) s = n.charCodeAt($),
											s >= 48 && 57 >= s || s >= 97 && 102 >= s || s >= 65 && 70 >= s || z();
											e += N("0x" + n.slice(t, $));
											break;
										default:
											z()
									} else {
										if (34 == s) break;
										for (s = n.charCodeAt($), t = $; s >= 32 && 92 != s && 34 != s;) s = n.charCodeAt(++$);
										e += n.slice(t, $)
									}
									if (34 == n.charCodeAt($)) return $++,
										e;
									z();
								default:
									if (t = $, 45 == s && (r = !0, s = n.charCodeAt(++$)), s >= 48 && 57 >= s) {
										for (48 == s && (s = n.charCodeAt($ + 1), s >= 48 && 57 >= s) && z(), r = !1; a > $ && (s = n.charCodeAt($), s >= 48 && 57 >= s); $++);
										if (46 == n.charCodeAt($)) {
											for (i = ++$; a > i && (s = n.charCodeAt(i), s >= 48 && 57 >= s); i++);
											i == $ && z(),
												$ = i
										}
										if (s = n.charCodeAt($), 101 == s || 69 == s) {
											for (s = n.charCodeAt(++$), (43 == s || 45 == s) && $++, i = $; a > i && (s = n.charCodeAt(i), s >= 48 && 57 >= s); i++);
											i == $ && z(),
												$ = i
										}
										return + n.slice(t, $)
									}
									if (r && z(), "true" == n.slice($, $ + 4)) return $ += 4,
										!0;
									if ("false" == n.slice($, $ + 5)) return $ += 5,
										!1;
									if ("null" == n.slice($, $ + 4)) return $ += 4,
										null;
									z()
							}
							return "$"
						},
						U = function(e) {
							var t, i;
							if ("$" == e && z(), "string" == typeof e) {
								if ("@" == (k ? e.charAt(0) : e[0])) return e.slice(1);
								if ("[" == e) {
									for (t = []; e = q(), "]" != e; i || (i = !0)) i && ("," == e ? (e = q(), "]" == e && z()) : z()),
									"," == e && z(),
										t.push(U(e));
									return t
								}
								if ("{" == e) {
									for (t = {}; e = q(), "}" != e; i || (i = !0)) i && ("," == e ? (e = q(), "}" == e && z()) : z()),
									("," == e || "string" != typeof e || "@" != (k ? e.charAt(0) : e[0]) || ":" != q()) && z(),
										t[e.slice(1)] = U(q());
									return t
								}
								z()
							}
							return e
						},
						B = function(e, t, i) {
							var r = H(e, t, i);
							r === m ? delete e[t] : e[t] = r
						},
						H = function(e, t, i) {
							var r, s = e[t];
							if ("object" == typeof s && s) if (v.call(s) == O) for (r = s.length; r--;) B(s, r, i);
							else _(s,
									function(e) {
										B(s, e, i)
									});
							return i.call(e, t, s)
						};
					r.parse = function(e, t) {
						var i, r;
						return $ = 0,
							X = "" + e,
							i = U(q()),
						"$" != q() && z(),
							$ = X = null,
							t && v.call(t) == T ? H((r = {},
								r[""] = i, r), "", t) : i
					}
				}
			}
			return r.runInContext = e,
				r
		}
		var t = "function" == typeof define && define.amd,
			i = {
				"function": !0,
				object: !0
			},
			r = i[typeof exports] && exports && !exports.nodeType && exports,
			s = i[typeof window] && window || this,
			n = r && i[typeof module] && module && !module.nodeType && "object" == typeof global && global;
		if (!n || n.global !== n && n.window !== n && n.self !== n || (s = n), r && !t) e(s, r);
		else {
			var a = s.JSON,
				o = s.JSON3,
				l = !1,
				c = e(s, s.JSON3 = {
					noConflict: function() {
						return l || (l = !0, s.JSON = a, s.JSON3 = o, a = o = null),
							c
					}
				});
			s.JSON = {
				parse: c.parse,
				stringify: c.stringify
			}
		}
		t && define(function() {
			return c
		})
	}.call(this),
	function() {
		var e = {};
		e.parseXML = function(e, t) {
			var i = null;
			try {
				if (window.DOMParser) {
					var r = new DOMParser;
					i = r.parseFromString(e, t)
				} else i = new ActiveXObject("Microsoft.XMLDOM"),
					i.async = !1,
					i.loadXML(e)
			} catch(s) {}
			return i
		},
			e.parseJSON = function(e) {
				if (null == e) return null;
				try {
					return JSON.parse(e)
				} catch(t) {
					throw t
				}
			},
			createjs.DataUtils = e
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e() {
			this.src = null,
				this.type = null,
				this.id = null,
				this.maintainOrder = !1,
				this.callback = null,
				this.data = null,
				this.method = createjs.LoadItem.GET,
				this.values = null,
				this.headers = null,
				this.withCredentials = !1,
				this.mimeType = null,
				this.crossOrigin = null,
				this.loadTimeout = 8e3
		}
		var t = e.prototype = {},
			i = e;
		i.create = function(t) {
			if ("string" == typeof t) {
				var r = new e;
				return r.src = t,
					r
			}
			if (t instanceof i) return t;
			if (t instanceof Object) return t;
			throw new Error("Type not recognized.")
		},
			t.set = function(e) {
				for (var t in e) this[t] = e[t];
				return this
			},
			createjs.LoadItem = i
	} (),
	function() {
		var e = {};
		e.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i,
			e.RELATIVE_PATT = /^[.\/]*?\//i,
			e.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i,
			e.parseURI = function(t) {
				var i = {
					absolute: !1,
					relative: !1
				};
				if (null == t) return i;
				var r = t.indexOf("?");
				r > -1 && (t = t.substr(0, r));
				var s;
				return e.ABSOLUTE_PATT.test(t) ? i.absolute = !0 : e.RELATIVE_PATT.test(t) && (i.relative = !0),
				(s = t.match(e.EXTENSION_PATT)) && (i.extension = s[1].toLowerCase()),
					i
			},
			e.formatQueryString = function(e, t) {
				if (null == e) throw new Error("You must specify data.");
				var i = [];
				for (var r in e) i.push(r + "=" + escape(e[r]));
				return t && (i = i.concat(t)),
					i.join("&")
			},
			e.buildPath = function(e, t) {
				if (null == t) return e;
				var i = [],
					r = e.indexOf("?");
				if ( - 1 != r) {
					var s = e.slice(r + 1);
					i = i.concat(s.split("&"))
				}
				return - 1 != r ? e.slice(0, r) + "?" + this._formatQueryString(t, i) : e + "?" + this._formatQueryString(t, i)
			},
			e.isCrossDomain = function(e) {
				var t = document.createElement("a");
				t.href = e.src;
				var i = document.createElement("a");
				i.href = location.href;
				var r = "" != t.hostname && (t.port != i.port || t.protocol != i.protocol || t.hostname != i.hostname);
				return r
			},
			e.isLocal = function(e) {
				var t = document.createElement("a");
				return t.href = e.src,
				"" == t.hostname && "file:" == t.protocol
			},
			e.isBinary = function(e) {
				switch (e) {
					case createjs.AbstractLoader.IMAGE:
					case createjs.AbstractLoader.BINARY:
						return ! 0;
					default:
						return ! 1
				}
			},
			e.isImageTag = function(e) {
				return e instanceof HTMLImageElement
			},
			e.isAudioTag = function(e) {
				return window.HTMLAudioElement ? e instanceof HTMLAudioElement: !1
			},
			e.isVideoTag = function(e) {
				return window.HTMLVideoElement ? e instanceof HTMLVideoElement: void 0
			},
			e.isText = function(e) {
				switch (e) {
					case createjs.AbstractLoader.TEXT:
					case createjs.AbstractLoader.JSON:
					case createjs.AbstractLoader.MANIFEST:
					case createjs.AbstractLoader.XML:
					case createjs.AbstractLoader.CSS:
					case createjs.AbstractLoader.SVG:
					case createjs.AbstractLoader.JAVASCRIPT:
						return ! 0;
					default:
						return ! 1
				}
			},
			e.getTypeByExtension = function(e) {
				if (null == e) return createjs.AbstractLoader.TEXT;
				switch (e.toLowerCase()) {
					case "jpeg":
					case "jpg":
					case "gif":
					case "png":
					case "webp":
					case "bmp":
						return createjs.AbstractLoader.IMAGE;
					case "ogg":
					case "mp3":
					case "webm":
						return createjs.AbstractLoader.SOUND;
					case "mp4":
					case "webm":
					case "ts":
						return createjs.AbstractLoader.VIDEO;
					case "json":
						return createjs.AbstractLoader.JSON;
					case "xml":
						return createjs.AbstractLoader.XML;
					case "css":
						return createjs.AbstractLoader.CSS;
					case "js":
						return createjs.AbstractLoader.JAVASCRIPT;
					case "svg":
						return createjs.AbstractLoader.SVG;
					default:
						return createjs.AbstractLoader.TEXT
				}
			},
			createjs.RequestUtils = e
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t, i) {
			this.EventDispatcher_constructor(),
				this.loaded = !1,
				this.canceled = !1,
				this.progress = 0,
				this.type = i,
				this.resultFormatter = null,
				this._item = e ? createjs.LoadItem.create(e) : null,
				this._preferXHR = t,
				this._result = null,
				this._rawResult = null,
				this._loadedItems = null,
				this._tagSrcAttribute = null,
				this._tag = null
		}
		var t = createjs.extend(e, createjs.EventDispatcher),
			i = e;
		i.POST = "POST",
			i.GET = "GET",
			i.BINARY = "binary",
			i.CSS = "css",
			i.IMAGE = "image",
			i.JAVASCRIPT = "javascript",
			i.JSON = "json",
			i.JSONP = "jsonp",
			i.MANIFEST = "manifest",
			i.SOUND = "sound",
			i.VIDEO = "video",
			i.SPRITESHEET = "spritesheet",
			i.SVG = "svg",
			i.TEXT = "text",
			i.XML = "xml",
			t.getItem = function() {
				return this._item
			},
			t.getResult = function(e) {
				return e ? this._rawResult: this._result
			},
			t.getTag = function() {
				return this._tag
			},
			t.setTag = function(e) {
				this._tag = e
			},
			t.load = function() {
				this._createRequest(),
					this._request.on("complete", this, this),
					this._request.on("progress", this, this),
					this._request.on("loadStart", this, this),
					this._request.on("abort", this, this),
					this._request.on("timeout", this, this),
					this._request.on("error", this, this);
				var e = new createjs.Event("initialize");
				e.loader = this._request,
					this.dispatchEvent(e),
					this._request.load()
			},
			t.cancel = function() {
				this.canceled = !0,
					this.destroy()
			},
			t.destroy = function() {
				this._request && (this._request.removeAllEventListeners(), this._request.destroy()),
					this._request = null,
					this._item = null,
					this._rawResult = null,
					this._result = null,
					this._loadItems = null,
					this.removeAllEventListeners()
			},
			t.getLoadedItems = function() {
				return this._loadedItems
			},
			t._createRequest = function() {
				this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
			},
			t._createTag = function() {
				return null
			},
			t._sendLoadStart = function() {
				this._isCanceled() || this.dispatchEvent("loadstart")
			},
			t._sendProgress = function(e) {
				if (!this._isCanceled()) {
					var t = null;
					"number" == typeof e ? (this.progress = e, t = new createjs.ProgressEvent(this.progress)) : (t = e, this.progress = e.loaded / e.total, t.progress = this.progress, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)),
					this.hasEventListener("progress") && this.dispatchEvent(t)
				}
			},
			t._sendComplete = function() {
				if (!this._isCanceled()) {
					this.loaded = !0;
					var e = new createjs.Event("complete");
					e.rawResult = this._rawResult,
					null != this._result && (e.result = this._result),
						this.dispatchEvent(e)
				}
			},
			t._sendError = function(e) { ! this._isCanceled() && this.hasEventListener("error") && (null == e && (e = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(e))
			},
			t._isCanceled = function() {
				return null == window.createjs || this.canceled ? !0 : !1
			},
			t.resultFormatter = null,
			t.handleEvent = function(e) {
				switch (e.type) {
					case "complete":
						this._rawResult = e.target._response;
						var t = this.resultFormatter && this.resultFormatter(this),
							i = this;
						t instanceof Function ? t(function(e) {
							i._result = e,
								i._sendComplete()
						}) : (this._result = t || this._rawResult, this._sendComplete());
						break;
					case "progress":
						this._sendProgress(e);
						break;
					case "error":
						this._sendError(e);
						break;
					case "loadstart":
						this._sendLoadStart();
						break;
					case "abort":
					case "timeout":
						this._isCanceled() || this.dispatchEvent(e.type)
				}
			},
			t.buildPath = function(e, t) {
				return createjs.RequestUtils.buildPath(e, t)
			},
			t.toString = function() {
				return "[PreloadJS AbstractLoader]"
			},
			createjs.AbstractLoader = createjs.promote(e, "EventDispatcher")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t, i) {
			this.AbstractLoader_constructor(e, t, i),
				this.resultFormatter = this._formatResult,
				this._tagSrcAttribute = "src"
		}
		var t = createjs.extend(e, createjs.AbstractLoader);
		t.load = function() {
			this._tag || (this._tag = this._createTag(this._item.src)),
				this._tag.preload = "auto",
				this._tag.load(),
				this.AbstractLoader_load()
		},
			t._createTag = function() {},
			t._createRequest = function() {
				this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
			},
			t._formatResult = function(e) {
				return this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler),
					this._tag.onstalled = null,
				this._preferXHR && (e.getTag().src = e.getResult(!0)),
					e.getTag()
			},
			createjs.AbstractMediaLoader = createjs.promote(e, "AbstractLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		var e = function(e) {
				this._item = e
			},
			t = createjs.extend(e, createjs.EventDispatcher);
		t.load = function() {},
			t.destroy = function() {},
			t.cancel = function() {},
			createjs.AbstractRequest = createjs.promote(e, "EventDispatcher")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t, i) {
			this.AbstractRequest_constructor(e),
				this._tag = t,
				this._tagSrcAttribute = i,
				this._loadedHandler = createjs.proxy(this._handleTagComplete, this),
				this._addedToDOM = !1,
				this._startTagVisibility = null
		}
		var t = createjs.extend(e, createjs.AbstractRequest);
		t.load = function() {
			null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0),
				this._tag.onload = createjs.proxy(this._handleTagComplete, this),
				this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
			var e = new createjs.Event("initialize");
			e.loader = this._tag,
				this.dispatchEvent(e),
				this._hideTag(),
				this._tag[this._tagSrcAttribute] = this._item.src
		},
			t.destroy = function() {
				this._clean(),
					this._tag = null,
					this.AbstractRequest_destroy()
			},
			t._handleReadyStateChange = function() {
				clearTimeout(this._loadTimeout);
				var e = this._tag; ("loaded" == e.readyState || "complete" == e.readyState) && this._handleTagComplete()
			},
			t._handleTagComplete = function() {
				this._rawResult = this._tag,
					this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult,
					this._clean(),
					this._showTag(),
					this.dispatchEvent("complete")
			},
			t._clean = function() {
				this._tag.onload = null,
					this._tag.onreadystatechange = null,
				this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag)
			},
			t._hideTag = function() {
				this._startTagVisibility = this._tag.style.visibility,
					this._tag.style.visibility = "hidden"
			},
			t._showTag = function() {
				this._tag.style.visibility = this._startTagVisibility
			},
			t._handleStalled = function() {},
			createjs.TagRequest = createjs.promote(e, "AbstractRequest")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t, i) {
			this.AbstractRequest_constructor(e),
				this._tag = t,
				this._tagSrcAttribute = i,
				this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
		}
		var t = createjs.extend(e, createjs.TagRequest);
		t.load = function() {
			this._tag.onstalled = createjs.proxy(this._handleStalled, this),
				this._tag.onprogress = createjs.proxy(this._handleProgress, this),
			this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1),
				this.TagRequest_load()
		},
			t._handleReadyStateChange = function() {
				clearTimeout(this._loadTimeout);
				var e = this._tag; ("loaded" == e.readyState || "complete" == e.readyState) && this._handleTagComplete()
			},
			t._handleStalled = function() {},
			t._handleProgress = function(e) {
				if (e && !(e.loaded > 0 && 0 == e.total)) {
					var t = new createjs.ProgressEvent(e.loaded, e.total);
					this.dispatchEvent(t)
				}
			},
			t._clean = function() {
				this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler),
					this._tag.onstalled = null,
					this._tag.onprogress = null,
					this.TagRequest__clean()
			},
			createjs.MediaTagRequest = createjs.promote(e, "TagRequest")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e) {
			this.AbstractRequest_constructor(e),
				this._request = null,
				this._loadTimeout = null,
				this._xhrLevel = 1,
				this._response = null,
				this._rawResponse = null,
				this._canceled = !1,
				this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this),
				this._handleProgressProxy = createjs.proxy(this._handleProgress, this),
				this._handleAbortProxy = createjs.proxy(this._handleAbort, this),
				this._handleErrorProxy = createjs.proxy(this._handleError, this),
				this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this),
				this._handleLoadProxy = createjs.proxy(this._handleLoad, this),
				this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this),
				!this._createXHR(e)
		}
		var t = createjs.extend(e, createjs.AbstractRequest);
		e.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"],
			t.getResult = function(e) {
				return e && this._rawResponse ? this._rawResponse: this._response
			},
			t.cancel = function() {
				this.canceled = !0,
					this._clean(),
					this._request.abort()
			},
			t.load = function() {
				if (null == this._request) return void this._handleError();
				this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1),
					this._request.addEventListener("progress", this._handleProgressProxy, !1),
					this._request.addEventListener("abort", this._handleAbortProxy, !1),
					this._request.addEventListener("error", this._handleErrorProxy, !1),
					this._request.addEventListener("timeout", this._handleTimeoutProxy, !1),
					this._request.addEventListener("load", this._handleLoadProxy, !1),
					this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1),
				1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
				try {
					this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
				} catch(e) {
					this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, e))
				}
			},
			t.setResponseType = function(e) {
				this._request.responseType = e
			},
			t.getAllResponseHeaders = function() {
				return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
			},
			t.getResponseHeader = function(e) {
				return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(e) : null
			},
			t._handleProgress = function(e) {
				if (e && !(e.loaded > 0 && 0 == e.total)) {
					var t = new createjs.ProgressEvent(e.loaded, e.total);
					this.dispatchEvent(t)
				}
			},
			t._handleLoadStart = function() {
				clearTimeout(this._loadTimeout),
					this.dispatchEvent("loadstart")
			},
			t._handleAbort = function(e) {
				this._clean(),
					this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, e))
			},
			t._handleError = function(e) {
				this._clean(),
					this.dispatchEvent(new createjs.ErrorEvent(e.message))
			},
			t._handleReadyStateChange = function() {
				4 == this._request.readyState && this._handleLoad()
			},
			t._handleLoad = function() {
				if (!this.loaded) {
					this.loaded = !0;
					var e = this._checkError();
					if (e) return void this._handleError(e);
					this._response = this._getResponse(),
						this._clean(),
						this.dispatchEvent(new createjs.Event("complete"))
				}
			},
			t._handleTimeout = function(e) {
				this._clean(),
					this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, e))
			},
			t._checkError = function() {
				var e = parseInt(this._request.status);
				switch (e) {
					case 404:
					case 0:
						return new Error(e)
				}
				return null
			},
			t._getResponse = function() {
				if (null != this._response) return this._response;
				if (null != this._request.response) return this._request.response;
				try {
					if (null != this._request.responseText) return this._request.responseText
				} catch(e) {}
				try {
					if (null != this._request.responseXML) return this._request.responseXML
				} catch(e) {}
				return null
			},
			t._createXHR = function(e) {
				var t = createjs.RequestUtils.isCrossDomain(e),
					i = {},
					r = null;
				if (window.XMLHttpRequest) r = new XMLHttpRequest,
				t && void 0 === r.withCredentials && window.XDomainRequest && (r = new XDomainRequest);
				else {
					for (var n = 0,
						     a = s.ACTIVEX_VERSIONS.length; a > n; n++) {
						s.ACTIVEX_VERSIONS[n];
						try {
							r = new ActiveXObject(axVersions);
							break
						} catch(o) {}
					}
					if (null == r) return ! 1
				}
				e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
					this._xhrLevel = "string" == typeof r.responseType ? 2 : 1;
				var l = null;
				if (l = e.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(e.src, e.values) : e.src, r.open(e.method || createjs.AbstractLoader.GET, l, !0), t && r instanceof XMLHttpRequest && 1 == this._xhrLevel && (i.Origin = location.origin), e.values && e.method == createjs.AbstractLoader.POST && (i["Content-Type"] = "application/x-www-form-urlencoded"), t || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), e.headers) for (var c in e.headers) i[c] = e.headers[c];
				for (c in i) r.setRequestHeader(c, i[c]);
				return r instanceof XMLHttpRequest && void 0 !== e.withCredentials && (r.withCredentials = e.withCredentials),
					this._request = r,
					!0
			},
			t._clean = function() {
				clearTimeout(this._loadTimeout),
					this._request.removeEventListener("loadstart", this._handleLoadStartProxy),
					this._request.removeEventListener("progress", this._handleProgressProxy),
					this._request.removeEventListener("abort", this._handleAbortProxy),
					this._request.removeEventListener("error", this._handleErrorProxy),
					this._request.removeEventListener("timeout", this._handleTimeoutProxy),
					this._request.removeEventListener("load", this._handleLoadProxy),
					this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)
			},
			t.toString = function() {
				return "[PreloadJS XHRRequest]"
			},
			createjs.XHRRequest = createjs.promote(e, "AbstractRequest")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t, i) {
			this.AbstractLoader_constructor(),
				this.init(e, t, i)
		}
		var t = createjs.extend(e, createjs.AbstractLoader),
			i = e;
		t.init = function(e, t, i) {
			this.useXHR = !0,
				this.preferXHR = !0,
				this._preferXHR = !0,
				this.setPreferXHR(e),
				this.stopOnError = !1,
				this.maintainScriptOrder = !0,
				this.next = null,
				this._paused = !1,
				this._basePath = t,
				this._crossOrigin = i,
				this._typeCallbacks = {},
				this._extensionCallbacks = {},
				this._loadStartWasDispatched = !1,
				this._maxConnections = 1,
				this._currentlyLoadingScript = null,
				this._currentLoads = [],
				this._loadQueue = [],
				this._loadQueueBackup = [],
				this._loadItemsById = {},
				this._loadItemsBySrc = {},
				this._loadedResults = {},
				this._loadedRawResults = {},
				this._numItems = 0,
				this._numItemsLoaded = 0,
				this._scriptOrder = [],
				this._loadedScripts = [],
				this._lastProgress = NaN,
				this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader],
				this._defaultLoaderLength = this._availableLoaders.length
		},
			i.loadTimeout = 8e3,
			i.LOAD_TIMEOUT = 0,
			i.BINARY = createjs.AbstractLoader.BINARY,
			i.CSS = createjs.AbstractLoader.CSS,
			i.IMAGE = createjs.AbstractLoader.IMAGE,
			i.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT,
			i.JSON = createjs.AbstractLoader.JSON,
			i.JSONP = createjs.AbstractLoader.JSONP,
			i.MANIFEST = createjs.AbstractLoader.MANIFEST,
			i.SOUND = createjs.AbstractLoader.SOUND,
			i.VIDEO = createjs.AbstractLoader.VIDEO,
			i.SVG = createjs.AbstractLoader.SVG,
			i.TEXT = createjs.AbstractLoader.TEXT,
			i.XML = createjs.AbstractLoader.XML,
			i.POST = createjs.AbstractLoader.POST,
			i.GET = createjs.AbstractLoader.GET,
			t.registerLoader = function(e) {
				if (!e || !e.canLoadItem) throw new Error("loader is of an incorrect type.");
				if ( - 1 != this._availableLoaders.indexOf(e)) throw new Error("loader already exists.");
				this._availableLoaders.unshift(e)
			},
			t.unregisterLoader = function(e) {
				var t = this._availableLoaders.indexOf(e); - 1 != t && t < this._defaultLoaderLength - 1 && this._availableLoaders.splice(t, 1)
			},
			t.setUseXHR = function(e) {
				return this.setPreferXHR(e)
			},
			t.setPreferXHR = function(e) {
				return this.preferXHR = 0 != e && null != window.XMLHttpRequest,
					this.preferXHR
			},
			t.removeAll = function() {
				this.remove()
			},
			t.remove = function(e) {
				var t = null;
				if (!e || e instanceof Array) {
					if (e) t = e;
					else if (arguments.length > 0) return
				} else t = [e];
				var i = !1;
				if (t) {
					for (; t.length;) {
						var r = t.pop(),
							s = this.getResult(r);
						for (n = this._loadQueue.length - 1; n >= 0; n--) if (a = this._loadQueue[n].getItem(), a.id == r || a.src == r) {
							this._loadQueue.splice(n, 1)[0].cancel();
							break
						}
						for (n = this._loadQueueBackup.length - 1; n >= 0; n--) if (a = this._loadQueueBackup[n].getItem(), a.id == r || a.src == r) {
							this._loadQueueBackup.splice(n, 1)[0].cancel();
							break
						}
						if (s) delete this._loadItemsById[s.id],
							delete this._loadItemsBySrc[s.src],
							this._disposeItem(s);
						else for (var n = this._currentLoads.length - 1; n >= 0; n--) {
							var a = this._currentLoads[n].getItem();
							if (a.id == r || a.src == r) {
								this._currentLoads.splice(n, 1)[0].cancel(),
									i = !0;
								break
							}
						}
					}
					i && this._loadNext()
				} else {
					this.close();
					for (var o in this._loadItemsById) this._disposeItem(this._loadItemsById[o]);
					this.init(this.preferXHR, this._basePath)
				}
			},
			t.reset = function() {
				this.close();
				for (var e in this._loadItemsById) this._disposeItem(this._loadItemsById[e]);
				for (var t = [], i = 0, r = this._loadQueueBackup.length; r > i; i++) t.push(this._loadQueueBackup[i].getItem());
				this.loadManifest(t, !1)
			},
			t.installPlugin = function(e) {
				if (null != e && null != e.getPreloadHandlers) {
					var t = e.getPreloadHandlers();
					if (t.scope = e, null != t.types) for (var i = 0,
						                                       r = t.types.length; r > i; i++) this._typeCallbacks[t.types[i]] = t;
					if (null != t.extensions) for (i = 0, r = t.extensions.length; r > i; i++) this._extensionCallbacks[t.extensions[i]] = t
				}
			},
			t.setMaxConnections = function(e) {
				this._maxConnections = e,
				!this._paused && this._loadQueue.length > 0 && this._loadNext()
			},
			t.loadFile = function(e, t, i) {
				if (null == e) {
					var r = new createjs.ErrorEvent("PRELOAD_NO_FILE");
					return void this._sendError(r)
				}
				this._addItem(e, null, i),
					this.setPaused(t !== !1 ? !1 : !0)
			},
			t.loadManifest = function(e, t, r) {
				var s = null,
					n = null;
				if (e instanceof Array) {
					if (0 == e.length) {
						var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
						return void this._sendError(a)
					}
					s = e
				} else if ("string" == typeof e) s = [{
					src: e,
					type: i.MANIFEST
				}];
				else {
					if ("object" != typeof e) {
						var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
						return void this._sendError(a)
					}
					if (void 0 !== e.src) {
						if (null == e.type) e.type = i.MANIFEST;
						else if (e.type != i.MANIFEST) {
							var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
							this._sendError(a)
						}
						s = [e]
					} else void 0 !== e.manifest && (s = e.manifest, n = e.path)
				}
				for (var o = 0,
					     l = s.length; l > o; o++) this._addItem(s[o], n, r);
				this.setPaused(t !== !1 ? !1 : !0)
			},
			t.load = function() {
				this.setPaused(!1)
			},
			t.getItem = function(e) {
				return this._loadItemsById[e] || this._loadItemsBySrc[e]
			},
			t.getResult = function(e, t) {
				var i = this._loadItemsById[e] || this._loadItemsBySrc[e];
				if (null == i) return null;
				var r = i.id;
				return t && this._loadedRawResults[r] ? this._loadedRawResults[r] : this._loadedResults[r]
			},
			t.getItems = function(e) {
				for (var t = [], i = 0, r = this._loadQueueBackup.length; r > i; i++) {
					var s = this._loadQueueBackup[i],
						n = s.getItem(); (e !== !0 || s.loaded) && t.push({
						item: n,
						result: this.getResult(n.id),
						rawResult: this.getResult(n.id, !0)
					})
				}
				return t
			},
			t.setPaused = function(e) {
				this._paused = e,
				this._paused || this._loadNext()
			},
			t.close = function() {
				for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
				this._scriptOrder.length = 0,
					this._loadedScripts.length = 0,
					this.loadStartWasDispatched = !1,
					this._itemCount = 0,
					this._lastProgress = NaN
			},
			t._addItem = function(e, t, i) {
				var r = this._createLoadItem(e, t, i);
				if (null != r) {
					var s = this._createLoader(r);
					null != s && (r._loader = s, this._loadQueue.push(s), this._loadQueueBackup.push(s), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && r.type == createjs.LoadQueue.JAVASCRIPT || r.maintainOrder === !0) && (this._scriptOrder.push(r), this._loadedScripts.push(null)))
				}
			},
			t._createLoadItem = function(e, t, r) {
				var s = createjs.LoadItem.create(e);
				if (null == s) return null;
				var n = createjs.RequestUtils.parseURI(s.src);
				n.extension && (s.ext = n.extension),
				null == s.type && (s.type = createjs.RequestUtils.getTypeByExtension(s.ext));
				var a = "",
					o = r || this._basePath,
					l = s.src;
				if (!n.absolute && !n.relative) if (t) {
					a = t;
					var c = createjs.RequestUtils.parseURI(t);
					l = t + l,
					null == o || c.absolute || c.relative || (a = o + a)
				} else null != o && (a = o);
				s.src = a + s.src,
					s.path = a,
				(void 0 === s.id || null === s.id || "" === s.id) && (s.id = l);
				var h = this._typeCallbacks[s.type] || this._extensionCallbacks[s.ext];
				if (h) {
					var u = h.callback.call(h.scope, s, this);
					if (u === !1) return null;
					u === !0 || null != u && (s._loader = u),
						n = createjs.RequestUtils.parseURI(s.src),
					null != n.extension && (s.ext = n.extension)
				}
				return this._loadItemsById[s.id] = s,
					this._loadItemsBySrc[s.src] = s,
				null == s.loadTimeout && (s.loadTimeout = i.loadTimeout),
				null == s.crossOrigin && (s.crossOrigin = this._crossOrigin),
					s
			},
			t._createLoader = function(e) {
				if (null != e._loader) return e._loader;
				for (var t = this.preferXHR,
					     i = 0; i < this._availableLoaders.length; i++) {
					var r = this._availableLoaders[i];
					if (r && r.canLoadItem(e)) return new r(e, t)
				}
				return null
			},
			t._loadNext = function() {
				if (!this._paused) {
					this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0),
						this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
					for (var e = 0; e < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); e++) {
						var t = this._loadQueue[e];
						this._canStartLoad(t) && (this._loadQueue.splice(e, 1), e--, this._loadItem(t))
					}
				}
			},
			t._loadItem = function(e) {
				e.on("fileload", this._handleFileLoad, this),
					e.on("progress", this._handleProgress, this),
					e.on("complete", this._handleFileComplete, this),
					e.on("error", this._handleError, this),
					e.on("fileerror", this._handleFileError, this),
					this._currentLoads.push(e),
					this._sendFileStart(e.getItem()),
					e.load()
			},
			t._handleFileLoad = function(e) {
				e.target = null,
					this.dispatchEvent(e)
			},
			t._handleFileError = function(e) {
				var t = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, e.item);
				this._sendError(t)
			},
			t._handleError = function(e) {
				var t = e.target;
				this._numItemsLoaded++,
					this._finishOrderedItem(t, !0),
					this._updateProgress();
				var i = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, t.getItem());
				this._sendError(i),
				this.stopOnError || (this._removeLoadItem(t), this._loadNext())
			},
			t._handleFileComplete = function(e) {
				var t = e.target,
					i = t.getItem(),
					r = t.getResult();
				this._loadedResults[i.id] = r;
				var s = t.getResult(!0);
				null != s && s !== r && (this._loadedRawResults[i.id] = s),
					this._saveLoadedItems(t),
					this._removeLoadItem(t),
				this._finishOrderedItem(t) || this._processFinishedLoad(i, t)
			},
			t._saveLoadedItems = function(e) {
				var t = e.getLoadedItems();
				if (null !== t) for (var i = 0; i < t.length; i++) {
					var r = t[i].item;
					this._loadItemsBySrc[r.src] = r,
						this._loadItemsById[r.id] = r,
						this._loadedResults[r.id] = t[i].result,
						this._loadedRawResults[r.id] = t[i].rawResult
				}
			},
			t._finishOrderedItem = function(e, t) {
				var i = e.getItem();
				if (this.maintainScriptOrder && i.type == createjs.LoadQueue.JAVASCRIPT || i.maintainOrder) {
					e instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
					var r = createjs.indexOf(this._scriptOrder, i);
					return - 1 == r ? !1 : (this._loadedScripts[r] = t === !0 ? !0 : i, this._checkScriptLoadOrder(), !0)
				}
				return ! 1
			},
			t._checkScriptLoadOrder = function() {
				for (var e = this._loadedScripts.length,
					     t = 0; e > t; t++) {
					var i = this._loadedScripts[t];
					if (null === i) break;
					if (i !== !0) {
						var r = this._loadedResults[i.id];
						i.type == createjs.LoadQueue.JAVASCRIPT && (document.body || document.getElementsByTagName("body")[0]).appendChild(r);
						var s = i._loader;
						this._processFinishedLoad(i, s),
							this._loadedScripts[t] = !0
					}
				}
			},
			t._processFinishedLoad = function(e, t) {
				this._numItemsLoaded++,
					this._updateProgress(),
					this._sendFileComplete(e, t),
					this._loadNext()
			},
			t._canStartLoad = function(e) {
				if (!this.maintainScriptOrder || e.preferXHR) return ! 0;
				var t = e.getItem();
				if (t.type != createjs.LoadQueue.JAVASCRIPT) return ! 0;
				if (this._currentlyLoadingScript) return ! 1;
				for (var i = this._scriptOrder.indexOf(t), r = 0; i > r;) {
					var s = this._loadedScripts[r];
					if (null == s) return ! 1;
					r++
				}
				return this._currentlyLoadingScript = !0,
					!0
			},
			t._removeLoadItem = function(e) {
				var t = e.getItem();
				delete t._loader;
				for (var i = this._currentLoads.length,
					     r = 0; i > r; r++) if (this._currentLoads[r] == e) {
					this._currentLoads.splice(r, 1);
					break
				}
			},
			t._handleProgress = function(e) {
				var t = e.target;
				this._sendFileProgress(t.getItem(), t.progress),
					this._updateProgress()
			},
			t._updateProgress = function() {
				var e = this._numItemsLoaded / this._numItems,
					t = this._numItems - this._numItemsLoaded;
				if (t > 0) {
					for (var i = 0,
						     r = 0,
						     s = this._currentLoads.length; s > r; r++) i += this._currentLoads[r].progress;
					e += i / t * (t / this._numItems)
				}
				this._lastProgress != e && (this._sendProgress(e), this._lastProgress = e)
			},
			t._disposeItem = function(e) {
				delete this._loadedResults[e.id],
					delete this._loadedRawResults[e.id],
					delete this._loadItemsById[e.id],
					delete this._loadItemsBySrc[e.src]
			},
			t._sendFileProgress = function(e, t) {
				if (this._isCanceled()) return void this._cleanUp();
				if (this.hasEventListener("fileprogress")) {
					var i = new createjs.Event("fileprogress");
					i.progress = t,
						i.loaded = t,
						i.total = 1,
						i.item = e,
						this.dispatchEvent(i)
				}
			},
			t._sendFileComplete = function(e, t) {
				if (!this._isCanceled()) {
					var i = new createjs.Event("fileload");
					i.loader = t,
						i.item = e,
						i.result = this._loadedResults[e.id],
						i.rawResult = this._loadedRawResults[e.id],
					e.completeHandler && e.completeHandler(i),
					this.hasEventListener("fileload") && this.dispatchEvent(i)
				}
			},
			t._sendFileStart = function(e) {
				var t = new createjs.Event("filestart");
				t.item = e,
				this.hasEventListener("filestart") && this.dispatchEvent(t)
			},
			t.toString = function() {
				return "[PreloadJS LoadQueue]"
			},
			createjs.LoadQueue = createjs.promote(e, "AbstractLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e) {
			this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.TEXT)
		}
		var t = (createjs.extend(e, createjs.AbstractLoader), e);
		t.canLoadItem = function(e) {
			return e.type == createjs.AbstractLoader.TEXT
		},
			createjs.TextLoader = createjs.promote(e, "AbstractLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e) {
			this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.BINARY),
				this.on("initialize", this._updateXHR, this)
		}
		var t = createjs.extend(e, createjs.AbstractLoader),
			i = e;
		i.canLoadItem = function(e) {
			return e.type == createjs.AbstractLoader.BINARY
		},
			t._updateXHR = function(e) {
				e.loader.setResponseType("arraybuffer")
			},
			createjs.BinaryLoader = createjs.promote(e, "AbstractLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t) {
			this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.CSS),
				this.resultFormatter = this._formatResult,
				this._tagSrcAttribute = "href",
				this._tag = document.createElement(t ? "style": "link"),
				this._tag.rel = "stylesheet",
				this._tag.type = "text/css"
		}
		var t = createjs.extend(e, createjs.AbstractLoader),
			i = e;
		i.canLoadItem = function(e) {
			return e.type == createjs.AbstractLoader.CSS
		},
			t._formatResult = function(e) {
				if (this._preferXHR) {
					var t = e.getTag(),
						i = document.getElementsByTagName("head")[0];
					if (i.appendChild(t), t.styleSheet) t.styleSheet.cssText = e.getResult(!0);
					else {
						var r = document.createTextNode(e.getResult(!0));
						t.appendChild(r)
					}
				} else t = this._tag;
				return t
			},
			createjs.CSSLoader = createjs.promote(e, "AbstractLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t) {
			this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.IMAGE),
				this.resultFormatter = this._formatResult,
				this._tagSrcAttribute = "src",
				createjs.RequestUtils.isImageTag(e) ? this._tag = e: createjs.RequestUtils.isImageTag(e.src) ? this._tag = e.src: createjs.RequestUtils.isImageTag(e.tag) && (this._tag = e.tag),
				null != this._tag ? this._preferXHR = !1 : this._tag = document.createElement("img"),
				this.on("initialize", this._updateXHR, this)
		}
		var t = createjs.extend(e, createjs.AbstractLoader),
			i = e;
		i.canLoadItem = function(e) {
			return e.type == createjs.AbstractLoader.IMAGE
		},
			t.load = function() {
				if ("" != this._tag.src && this._tag.complete) return void this._sendComplete();
				var e = this._item.crossOrigin;
				1 == e && (e = "Anonymous"),
				null == e || createjs.RequestUtils.isLocal(this._item.src) || (this._tag.crossOrigin = e),
					this.AbstractLoader_load()
			},
			t._updateXHR = function(e) {
				e.loader.mimeType = "text/plain; charset=x-user-defined-binary",
				e.loader.setResponseType && e.loader.setResponseType("blob")
			},
			t._formatResult = function(e) {
				var t = this;
				return function(i) {
					var r = t._tag,
						s = window.URL || window.webkitURL;
					if (t._preferXHR) if (s) {
						var n = s.createObjectURL(e.getResult(!0));
						r.src = n,
							r.onload = function() {
								s.revokeObjectURL(t.src)
							}
					} else r.src = e.getItem().src;
					r.complete ? i(r) : r.onload = function() {
						i(this)
					}
				}
			},
			createjs.ImageLoader = createjs.promote(e, "AbstractLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t) {
			this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.JAVASCRIPT),
				this.resultFormatter = this._formatResult,
				this._tagSrcAttribute = "src",
				this.setTag(document.createElement("script"))
		}
		var t = createjs.extend(e, createjs.AbstractLoader),
			i = e;
		i.canLoadItem = function(e) {
			return e.type == createjs.AbstractLoader.JAVASCRIPT
		},
			t._formatResult = function(e) {
				var t = e.getTag();
				return this._preferXHR && (t.text = e.getResult(!0)),
					t
			},
			createjs.JavaScriptLoader = createjs.promote(e, "AbstractLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e) {
			this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.JSON),
				this.resultFormatter = this._formatResult
		}
		var t = createjs.extend(e, createjs.AbstractLoader),
			i = e;
		i.canLoadItem = function(e) {
			return e.type == createjs.AbstractLoader.JSON && !e._loadAsJSONP
		},
			t._formatResult = function(e) {
				var t = null;
				try {
					t = createjs.DataUtils.parseJSON(e.getResult(!0))
				} catch(i) {
					var r = new createjs.ErrorEvent("JSON_FORMAT", null, i);
					return this._sendError(r),
						i
				}
				return t
			},
			createjs.JSONLoader = createjs.promote(e, "AbstractLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e) {
			this.AbstractLoader_constructor(e, !1, createjs.AbstractLoader.JSONP),
				this.setTag(document.createElement("script")),
				this.getTag().type = "text/javascript"
		}
		var t = createjs.extend(e, createjs.AbstractLoader),
			i = e;
		i.canLoadItem = function(e) {
			return e.type == createjs.AbstractLoader.JSONP || e._loadAsJSONP
		},
			t.cancel = function() {
				this.AbstractLoader_cancel(),
					this._dispose()
			},
			t.load = function() {
				if (null == this._item.callback) throw new Error("callback is required for loading JSONP requests.");
				if (null != window[this._item.callback]) throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
				window[this._item.callback] = createjs.proxy(this._handleLoad, this),
					window.document.body.appendChild(this._tag),
					this._tag.src = this._item.src
			},
			t._handleLoad = function(e) {
				this._result = this._rawResult = e,
					this._sendComplete(),
					this._dispose()
			},
			t._dispose = function() {
				window.document.body.removeChild(this._tag),
					delete window[this._item.callback]
			},
			createjs.JSONPLoader = createjs.promote(e, "AbstractLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e) {
			this.AbstractLoader_constructor(e, null, createjs.AbstractLoader.MANIFEST),
				this._manifestQueue = null
		}
		var t = createjs.extend(e, createjs.AbstractLoader),
			i = e;
		i.MANIFEST_PROGRESS = .25,
			i.canLoadItem = function(e) {
				return e.type == createjs.AbstractLoader.MANIFEST
			},
			t.load = function() {
				this.AbstractLoader_load()
			},
			t._createRequest = function() {
				var e = this._item.callback;
				this._request = null != e ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item)
			},
			t.handleEvent = function(e) {
				switch (e.type) {
					case "complete":
						return this._rawResult = e.target.getResult(!0),
							this._result = e.target.getResult(),
							this._sendProgress(i.MANIFEST_PROGRESS),
							void this._loadManifest(this._result);
					case "progress":
						return e.loaded *= i.MANIFEST_PROGRESS,
							this.progress = e.loaded / e.total,
						(isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0),
							void this._sendProgress(e)
				}
				this.AbstractLoader_handleEvent(e)
			},
			t.destroy = function() {
				this.AbstractLoader_destroy(),
					this._manifestQueue.close()
			},
			t._loadManifest = function(e) {
				if (e && e.manifest) {
					var t = this._manifestQueue = new createjs.LoadQueue;
					t.on("fileload", this._handleManifestFileLoad, this),
						t.on("progress", this._handleManifestProgress, this),
						t.on("complete", this._handleManifestComplete, this, !0),
						t.on("error", this._handleManifestError, this, !0),
						t.loadManifest(e)
				} else this._sendComplete()
			},
			t._handleManifestFileLoad = function(e) {
				e.target = null,
					this.dispatchEvent(e)
			},
			t._handleManifestComplete = function() {
				this._loadedItems = this._manifestQueue.getItems(!0),
					this._sendComplete()
			},
			t._handleManifestProgress = function(e) {
				this.progress = e.progress * (1 - i.MANIFEST_PROGRESS) + i.MANIFEST_PROGRESS,
					this._sendProgress(this.progress)
			},
			t._handleManifestError = function(e) {
				var t = new createjs.Event("fileerror");
				t.item = e.data,
					this.dispatchEvent(t)
			},
			createjs.ManifestLoader = createjs.promote(e, "AbstractLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t) {
			this.AbstractMediaLoader_constructor(e, t, createjs.AbstractLoader.SOUND),
				createjs.RequestUtils.isAudioTag(e) ? this._tag = e: createjs.RequestUtils.isAudioTag(e.src) ? this._tag = e: createjs.RequestUtils.isAudioTag(e.tag) && (this._tag = createjs.RequestUtils.isAudioTag(e) ? e: e.src),
			null != this._tag && (this._preferXHR = !1)
		}
		var t = createjs.extend(e, createjs.AbstractMediaLoader),
			i = e;
		i.canLoadItem = function(e) {
			return e.type == createjs.AbstractLoader.SOUND
		},
			t._createTag = function(e) {
				var t = document.createElement("audio");
				return t.autoplay = !1,
					t.preload = "none",
					t.src = e,
					t
			},
			createjs.SoundLoader = createjs.promote(e, "AbstractMediaLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t) {
			this.AbstractMediaLoader_constructor(e, t, createjs.AbstractLoader.VIDEO),
				createjs.RequestUtils.isVideoTag(e) || createjs.RequestUtils.isVideoTag(e.src) ? (this.setTag(createjs.RequestUtils.isVideoTag(e) ? e: e.src), this._preferXHR = !1) : this.setTag(this._createTag())
		}
		var t = createjs.extend(e, createjs.AbstractMediaLoader),
			i = e;
		t._createTag = function() {
			return document.createElement("video")
		},
			i.canLoadItem = function(e) {
				return e.type == createjs.AbstractLoader.VIDEO
			},
			createjs.VideoLoader = createjs.promote(e, "AbstractMediaLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e) {
			this.AbstractLoader_constructor(e, null, createjs.AbstractLoader.SPRITESHEET),
				this._manifestQueue = null
		}
		var t = createjs.extend(e, createjs.AbstractLoader),
			i = e;
		i.SPRITESHEET_PROGRESS = .25,
			i.canLoadItem = function(e) {
				return e.type == createjs.AbstractLoader.SPRITESHEET
			},
			t.destroy = function() {
				this.AbstractLoader_destroy,
					this._manifestQueue.close()
			},
			t._createRequest = function() {
				var e = this._item.callback;
				this._request = null != e && e instanceof Function ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item)
			},
			t.handleEvent = function(e) {
				switch (e.type) {
					case "complete":
						return this._rawResult = e.target.getResult(!0),
							this._result = e.target.getResult(),
							this._sendProgress(i.SPRITESHEET_PROGRESS),
							void this._loadManifest(this._result);
					case "progress":
						return e.loaded *= i.SPRITESHEET_PROGRESS,
							this.progress = e.loaded / e.total,
						(isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0),
							void this._sendProgress(e)
				}
				this.AbstractLoader_handleEvent(e)
			},
			t._loadManifest = function(e) {
				if (e && e.images) {
					var t = this._manifestQueue = new createjs.LoadQueue;
					t.on("complete", this._handleManifestComplete, this, !0),
						t.on("fileload", this._handleManifestFileLoad, this),
						t.on("progress", this._handleManifestProgress, this),
						t.on("error", this._handleManifestError, this, !0),
						t.loadManifest(e.images)
				}
			},
			t._handleManifestFileLoad = function(e) {
				var t = e.result;
				if (null != t) {
					var i = this.getResult().images,
						r = i.indexOf(e.item.src);
					i[r] = t
				}
			},
			t._handleManifestComplete = function() {
				this._result = new createjs.SpriteSheet(this._result),
					this._loadedItems = this._manifestQueue.getItems(!0),
					this._sendComplete()
			},
			t._handleManifestProgress = function(e) {
				this.progress = e.progress * (1 - i.SPRITESHEET_PROGRESS) + i.SPRITESHEET_PROGRESS,
					this._sendProgress(this.progress)
			},
			t._handleManifestError = function(e) {
				var t = new createjs.Event("fileerror");
				t.item = e.data,
					this.dispatchEvent(t)
			},
			createjs.SpriteSheetLoader = createjs.promote(e, "AbstractLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e, t) {
			this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.SVG),
				this.resultFormatter = this._formatResult,
				this._tagSrcAttribute = "data",
				t ? this.setTag(document.createElement("svg")) : (this.setTag(document.createElement("object")), this.getTag().type = "image/svg+xml"),
				this.getTag().style.visibility = "hidden"
		}
		var t = createjs.extend(e, createjs.AbstractLoader),
			i = e;
		i.canLoadItem = function(e) {
			return e.type == createjs.AbstractLoader.SVG
		},
			t._formatResult = function(e) {
				var t = createjs.DataUtils.parseXML(e.getResult(!0), "text/xml"),
					i = e.getTag();
				return ! this._preferXHR && document.body.contains(i) && document.body.removeChild(i),
					null != t.documentElement ? (i.appendChild(t.documentElement), i.style.visibility = "visible", i) : t
			},
			createjs.SVGLoader = createjs.promote(e, "AbstractLoader")
	} (),
	this.createjs = this.createjs || {},
	function() {
		"use strict";
		function e(e) {
			this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.XML),
				this.resultFormatter = this._formatResult
		}
		var t = createjs.extend(e, createjs.AbstractLoader),
			i = e;
		i.canLoadItem = function(e) {
			return e.type == createjs.AbstractLoader.XML
		},
			t._formatResult = function(e) {
				return createjs.DataUtils.parseXML(e.getResult(!0), "text/xml")
			},
			createjs.XMLLoader = createjs.promote(e, "AbstractLoader")
	} (),
(screen.width < 500 || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) && $("header").removeClass("sound");
var ua, msie;
msieversion();
var scroll, preload = new createjs.LoadQueue,
	sortie_ok, ajax_ok, contenu_nouvelle_page, lien_en_cours, scroll = new global_custom2["default"]({
		preload: !0,
		"native": !1,
		section: document.querySelector(".vs-section"),
		divs: document.querySelectorAll(".vs-div")
	});
scroll.init(),
	scroll.init(),
	scroll.resize(),
	$(document).ready(function() {
		function e(e, t) {
			r++,
				n = r / s,
				TweenLite.to(a, 2, {
					progress: n,
					ease: Linear.easeNone,
					delay: 2.8
				})
		}
		function t() {
			n = Math.round(100 * a.progress()),
				$(".txt-perc").text(n + "%")
		}
		function i() {
			TweenMax.staggerTo($(".loader-a"), .6, {
					top: "-30px",
					opacity: 0,
					skewX: "30deg",
					ease: Power2.easeInOut,
					delay: 0
				},
				.05),
				TweenMax.staggerTo($(".loader-a"), .3, {
						skewX: "0deg",
						ease: Power2.easeInOut,
						delay: .3
					},
					.05),
				TweenMax.to($(".txt-perc"), .1, {
					opacity: "0",
					ease: Power1.easeInOut,
					delay: 0
				}),
				TweenMax.to($(".b"), 0, {
					top: "-11vw",
					opacity: "0",
					ease: Power2.easeInOut,
					delay: 1
				}),
				TweenMax.staggerTo($(".b"), .2, {
						top: "0vw",
						opacity: "1",
						ease: Power2.easeInOut,
						delay: 1.5
					},
					.07),
				TweenMax.staggerTo($(".b"), .2, {
						opacity: "0",
						top: "12vw",
						ease: Power2.easeInOut,
						delay: 2.2
					},
					.07),
				TweenMax.to($("#preloader"), 0, {
					display: "none",
					ease: Power2.easeInOut,
					delay: 3
				}),
				setTimeout(function() {
						o()
					},
					3e3)
		}
		var r = 0,
			s = $(".toload").length,
			n = 0;
		$(".toload").imagesLoaded({
			background: !0
		}).progress(function(t, i) {
			e()
		}),
			TweenMax.to($("#mask-loader"), 1.2, {
				left: "0%",
				skewX: "30deg",
				ease: Power1.easeInOut,
				delay: 0
			}),
			TweenMax.to($("#mask-loader"), .6, {
				skewX: "0deg",
				ease: Power1.easeInOut,
				delay: .6
			}),
			TweenMax.staggerTo($(".loader-a"), .6, {
					top: "0px",
					opacity: 1,
					skewX: "-30deg",
					ease: Power2.easeInOut,
					delay: 1.2
				},
				.05),
			TweenMax.staggerTo($(".loader-a"), .3, {
					skewX: "0deg",
					ease: Power2.easeInOut,
					delay: 1.5
				},
				.05),
			TweenMax.to($(".txt-perc"), .4, {
				opacity: "1",
				ease: Power1.easeInOut,
				delay: 2.4
			});
		var a = new TimelineMax({
			paused: !0,
			onUpdate: t,
			onComplete: i
		});
		a.to($(".progress span"), 2, {
			width: 100,
			ease: Linear.easeNone
		}),
			$(document).on("click", ".agency-link",
				function() {
					TweenMax.to($(".wa"), 0, {
						top: "-11vw",
						opacity: "0",
						ease: Power2.easeInOut,
						delay: 0
					}),
						TweenMax.staggerTo($(".wa"), .2, {
								top: "0vw",
								opacity: "1",
								ease: Power2.easeInOut,
								delay: 0
							},
							.07),
						TweenMax.staggerTo($(".wa"), .2, {
								opacity: "0",
								top: "12vw",
								ease: Power2.easeInOut,
								delay: .7
							},
							.07);
					var e = $(".circle");
					TweenMax.to(e, .5, {
						css: {
							width: "20px",
							height: "20px"
						},
						ease: Power1.easeOut
					})
				}),
			$(document).on("click", ".work-link",
				function() {
					TweenMax.to($(".cp"), 0, {
						top: "-11vw",
						opacity: "0",
						ease: Power2.easeInOut,
						delay: 0
					}),
						TweenMax.staggerTo($(".cp"), .2, {
								top: "0vw",
								opacity: "1",
								ease: Power2.easeInOut,
								delay: 0
							},
							.07),
						TweenMax.staggerTo($(".cp"), .2, {
								opacity: "0",
								top: "12vw",
								ease: Power2.easeInOut,
								delay: .7
							},
							.07);
					var e = $(".circle");
					TweenMax.to(e, .5, {
						css: {
							width: "20px",
							height: "20px"
						},
						ease: Power1.easeOut
					})
				}),
			$(document).on("click", ".yo-link",
				function() {
					TweenMax.to($(".salut"), 0, {
						top: "-11vw",
						opacity: "0",
						ease: Power2.easeInOut,
						delay: 0
					}),
						TweenMax.staggerTo($(".salut"), .2, {
								top: "0vw",
								opacity: "1",
								ease: Power2.easeInOut,
								delay: 0
							},
							.07),
						TweenMax.staggerTo($(".salut"), .2, {
								opacity: "0",
								top: "12vw",
								ease: Power2.easeInOut,
								delay: .7
							},
							.07);
					var e = $(".circle");
					TweenMax.to(e, .5, {
						css: {
							width: "20px",
							height: "20px"
						},
						ease: Power1.easeOut
					})
				}),
			$(document).on("click", "#call-credit",
				function() {
					TweenMax.to($(".cr"), 0, {
						top: "-11vw",
						opacity: "0",
						ease: Power2.easeInOut,
						delay: 0
					}),
						TweenMax.staggerTo($(".cr"), .2, {
								top: "0vw",
								opacity: "1",
								ease: Power2.easeInOut,
								delay: 0
							},
							.07),
						TweenMax.staggerTo($(".cr"), .2, {
								opacity: "0",
								top: "12vw",
								ease: Power2.easeInOut,
								delay: .7
							},
							.07);
					var e = $(".circle");
					TweenMax.to(e, .5, {
						css: {
							width: "20px",
							height: "20px"
						},
						ease: Power1.easeOut
					})
				}),
			$(document).on("click", ".seeproject",
				function() {
					TweenMax.to($(".ip"), 0, {
						top: "-11vw",
						opacity: "0",
						ease: Power2.easeInOut,
						delay: 0
					}),
						TweenMax.staggerTo($(".ip"), .2, {
								top: "0vw",
								opacity: "1",
								ease: Power2.easeInOut,
								delay: 0
							},
							.07),
						TweenMax.staggerTo($(".ip"), .2, {
								opacity: "0",
								top: "12vw",
								ease: Power2.easeInOut,
								delay: .7
							},
							.07);
					var e = $(".circle");
					TweenMax.to(e, .5, {
						css: {
							width: "20px",
							height: "20px"
						},
						ease: Power1.easeOut
					})
				}),
			$(document).on("click", "#next-background",
				function() {
					TweenMax.to($(".ip"), 0, {
						top: "-11vw",
						opacity: "0",
						ease: Power2.easeInOut,
						delay: 0
					}),
						TweenMax.staggerTo($(".ip"), .2, {
								top: "0vw",
								opacity: "1",
								ease: Power2.easeInOut,
								delay: 0
							},
							.07),
						TweenMax.staggerTo($(".ip"), .2, {
								opacity: "0",
								top: "12vw",
								ease: Power2.easeInOut,
								delay: .7
							},
							.07);
					var e = $(".circle");
					TweenMax.to(e, .5, {
						css: {
							width: "20px",
							height: "20px"
						},
						ease: Power1.easeOut
					})
				}),
			$(document).on("click", ".home-link",
				function() {
					TweenMax.to($(".ghg"), 0, {
						top: "-11vw",
						opacity: "0",
						ease: Power2.easeInOut,
						delay: 0
					}),
						TweenMax.staggerTo($(".ghg"), .2, {
								top: "0vw",
								opacity: "1",
								ease: Power2.easeInOut,
								delay: 0
							},
							.07),
						TweenMax.staggerTo($(".ghg"), .2, {
								opacity: "0",
								top: "12vw",
								ease: Power2.easeInOut,
								delay: .7
							},
							.07);
					var e = $(".circle");
					TweenMax.to(e, .5, {
						css: {
							width: "20px",
							height: "20px"
						},
						ease: Power1.easeOut
					})
				});
		var o = ($("#main"),
				function() {
					function e(e) {
						TweenLite.to(i, 0, {
							css: {
								left: e.pageX + "px",
								top: e.pageY + "px"
							},
							ease: Power1.easeOut
						})
					}
					sortie_ok = !1,
						ajax_ok = !1,
						lien_en_cours = !1,
						scroll.destroy(),
						scroll = null,
						scroll = new global_custom2["default"]({
							preload: !0,
							"native": !1,
							section: document.querySelector(".vs-section"),
							divs: document.querySelectorAll(".vs-div")
						}),
						c();
					var t = !0;
					$("#mute-btn").click(function() {
						t ? ($("header").removeClass("sound"), $(this).addClass("inactif-call"), $(this).removeClass("actif-call")) : ($("header").addClass("sound"), $(this).removeClass("inactif-call"), $(this).addClass("actif-call")),
							t = !t
					});
					var i = $(".circle");
					$(window).on("mousemove", e);
					var i = $(".circle");
					$(".hovered").on("mouseenter",
						function() {
							TweenMax.to(i, .5, {
								css: {
									width: "35px",
									height: "35px"
								},
								ease: Power1.easeOut
							})
						}),
						$(".hovered").on("mouseleave",
							function() {
								TweenMax.to(i, .5, {
									css: {
										width: "20px",
										height: "20px"
									},
									ease: Power1.easeOut
								})
							});
					var r = ($(".square--level-1"), $(".work-block-col")),
						s = r.width(),
						n = r.height();
					$(".work-block-col").on("mousemove.parallax",
						function(e) {
							var t = e.pageX,
								i = e.pageY,
								r = 0,
								a = 0;
							r = s / 2 + t,
								a = n / 2 - i,
								TweenMax.to($(this).find(".work-number"), .5, {
									css: {
										transform: "translateX(" + r / 12 + "px) translateY(" + a / 10 + "px)"
									},
									ease: Power1.easeOut
								})
						}),
						$(".work-block-col").on("click",
							function() {
								TweenMax.to($(".ip"), 0, {
									top: "-11vw",
									opacity: "0",
									ease: Power2.easeInOut,
									delay: 0
								}),
									TweenMax.staggerTo($(".ip"), .2, {
											top: "0vw",
											opacity: "1",
											ease: Power2.easeInOut,
											delay: 0
										},
										.07),
									TweenMax.staggerTo($(".ip"), .2, {
											opacity: "0",
											top: "12vw",
											ease: Power2.easeInOut,
											delay: .7
										},
										.07);
								var e = $(".circle");
								TweenMax.to(e, .5, {
									css: {
										width: "20px",
										height: "20px"
									},
									ease: Power1.easeOut
								})
							}),
						$(".row-projet").on("click",
							function() {
								TweenMax.to($(".ip"), 0, {
									top: "-11vw",
									opacity: "0",
									ease: Power2.easeInOut,
									delay: 0
								}),
									TweenMax.staggerTo($(".ip"), .2, {
											top: "0vw",
											opacity: "1",
											ease: Power2.easeInOut,
											delay: 0
										},
										.07),
									TweenMax.staggerTo($(".ip"), .2, {
											opacity: "0",
											top: "12vw",
											ease: Power2.easeInOut,
											delay: .7
										},
										.07);
								var e = $(".circle");
								TweenMax.to(e, .5, {
									css: {
										width: "20px",
										height: "20px"
									},
									ease: Power1.easeOut
								})
							}),
						$(".hovered-projet").on("mouseenter",
							function() {
								TweenMax.to($(this).find(".background-row"), .6, {
									skewY: "-20deg",
									top: "0%",
									transformOrigin: "left top",
									ease: Power2.easeInOut,
									delay: 0
								}),
									TweenMax.to($(this).find(".background-row"), .4, {
										skewY: "0deg",
										transformOrigin: "left top",
										ease: Power2.easeInOut,
										delay: .25
									}),
									TweenMax.to($(this).find(".col-t"), .4, {
										color: "#161616",
										ease: Power2.easeInOut,
										delay: .25
									})
							}),
						$(".hovered-projet").on("mouseleave",
							function() {
								var e = function() {
									TweenMax.to($(".hovered").find(".background-row"), 0, {
										top: "-100%",
										ease: Power2.easeInOut
									})
								};
								TweenMax.to($(this).find(".background-row"), .6, {
									skewY: "0deg",
									top: "100%",
									ease: Power2.easeInOut,
									delay: 0,
									onComplete: e
								}),
									TweenMax.to($(this).find(".col-t"), .4, {
										color: "#FFFFFF",
										ease: Power2.easeInOut,
										delay: .25
									})
							});
					var r = ($(".img-skew"), $("#photo-top")),
						a = r.width(),
						o = r.height();
					$("#about-pres").on("mousemove.parallax",
						function(e) {
							var t = e.pageX,
								i = e.pageY,
								r = 0,
								s = 0;
							r = a / 2 - t,
								s = o / 2 - i,
								TweenMax.to($("#photo-top").find(".img-skew"), .6, {
									css: {
										transform: "skewX(" + r / 18 + "deg)"
									},
									ease: Power1.easeOut
								})
						}),
						$("#about-pres").on("mouseleave.parallax",
							function(e) {
								TweenMax.to($("#photo-top").find(".img-skew"), 1, {
									css: {
										transform: "skewX(0deg) skewY(0deg)"
									},
									ease: Power1.easeOut
								})
							});
					var l = ($(".title-bonjour1"), $(".parrallax-container")),
						h = l.width(),
						u = l.height();
					$("#top-about").on("mousemove.parallax",
						function(e) {
							var t = e.pageX,
								i = e.pageY,
								r = 0,
								s = 0;
							r = h / 2 - t,
								s = u / 2 - i,
								TweenMax.to($(this).find("#yooo"), 1, {
									css: {
										transform: "skewX(" + r / 22 + "deg) skewY(" + s / 98 + "deg)"
									},
									ease: Power1.easeOut
								})
						}),
						$(".work-block-col").on("mouseenter",
							function() {
								TweenMax.to($(this).find(".mask-title-work"), .6, {
									skewX: "30deg",
									left: "0%",
									ease: Power1.easeInOut,
									delay: 0
								}),
									TweenMax.to($(this).find(".mask-title-work"), .3, {
										skewX: "0deg",
										ease: Power1.easeInOut,
										delay: .3
									}),
									TweenMax.to($(this).find(".title-work"), 0, {
										opacity: "0",
										ease: Power1.easeInOut,
										delay: .6
									}),
									TweenMax.to($(this).find(".discover-work"), 0, {
										opacity: "1",
										ease: Power1.easeInOut,
										delay: .6
									}),
									TweenMax.to($(this).find(".mask-title-work"), .6, {
										skewX: "-30deg",
										left: "-100%",
										ease: Power1.easeInOut,
										delay: .6
									}),
									TweenMax.to($(this).find(".mask-title-work"), .3, {
										skewX: "0deg",
										ease: Power1.easeInOut,
										delay: .9
									})
							}),
						$(".work-block-col").on("mouseleave",
							function() {
								TweenMax.to($(this).find(".mask-title-work"), .6, {
									skewX: "-30deg",
									left: "0%",
									ease: Power1.easeInOut,
									delay: 0
								}),
									TweenMax.to($(this).find(".mask-title-work"), .3, {
										skewX: "0deg",
										ease: Power1.easeInOut,
										delay: .3
									}),
									TweenMax.to($(this).find(".title-work"), 0, {
										opacity: "1",
										ease: Power1.easeInOut,
										delay: .6
									}),
									TweenMax.to($(this).find(".discover-work"), 0, {
										opacity: "0",
										ease: Power1.easeInOut,
										delay: .6
									}),
									TweenMax.to($(this).find(".mask-title-work"), .6, {
										skewX: "30deg",
										left: "100%",
										ease: Power1.easeInOut,
										delay: .6
									}),
									TweenMax.to($(this).find(".mask-title-work"), .3, {
										skewX: "0deg",
										ease: Power1.easeInOut,
										delay: .9
									})
							}),
						$("#next-background").on("mouseenter",
							function() {
								TweenMax.to($("#block-img-single-center-next"), .8, {
									marginLeft: "0px",
									ease: Power2.easeOut,
									delay: 0
								}),
									TweenMax.to($("#img-single-center-next"), .8, {
										left: "0%",
										ease: Power2.easeOut,
										delay: 0
									}),
									TweenMax.to($("#text-projet-next"), .4, {
										opacity: "1",
										ease: Power2.easeOut,
										delay: .4
									})
							}),
						$("#next-background").on("mouseleave",
							function() {
								TweenMax.to($("#block-img-single-center-next"), .8, {
									marginLeft: "-300px",
									ease: Power2.easeOut,
									delay: 0
								}),
									TweenMax.to($("#img-single-center-next"), .8, {
										left: "100%",
										ease: Power2.easeOut,
										delay: 0
									}),
									TweenMax.to($("#text-projet-next"), .4, {
										opacity: "0",
										ease: Power2.easeOut,
										delay: .4
									})
							}),
						$(function() {
							"use strict";
							var e = new ScrollMagic;
							if (document.getElementById("mission-detail")) {
								var t = (new TimelineLite).add(TweenMax.staggerTo($(".line-baseline-mission"), .6, {
										top: "0",
										opacity: "1",
										ease: Power1.easeOut,
										delay: 0
									},
									.1)),
									i = (new ScrollScene({
										triggerElement: "#mission-detail",
										offset: 100,
										reverse: !1
									}).setTween(t).addTo(e), (new TimelineLite).add(TweenMax.to($(".titre-actions"), .2, {
										opacity: "1",
										ease: Power2.easeInOut,
										delay: .4
									})).add(TweenMax.staggerTo(".mision-s", .8, {
											skewX: "0deg",
											left: "0px",
											opacity: "1",
											ease: Power2.easeInOut,
											delay: -.2
										},
										.15))),
									r = (new ScrollScene({
										triggerElement: "#mission-detail",
										offset: 200,
										reverse: !1
									}).setTween(i).addTo(e), (new TimelineLite).add(TweenMax.staggerTo(".mision-d", .8, {
											skewX: "0deg",
											left: "0px",
											opacity: "1",
											ease: Power2.easeInOut,
											delay: .4
										},
										.15))),
									s = (new ScrollScene({
										triggerElement: "#mission-detail",
										offset: 200,
										reverse: !1
									}).setTween(r).addTo(e), (new TimelineLite).add(TweenMax.staggerTo(".mision-m", .8, {
											skewX: "0deg",
											left: "0px",
											opacity: "1",
											ease: Power2.easeInOut,
											delay: .4
										},
										.15))),
									n = (new ScrollScene({
										triggerElement: "#mission-detail",
										offset: 200,
										reverse: !1
									}).setTween(s).addTo(e), (new TimelineLite).add(TweenMax.staggerTo(".logo-client", .8, {
											skewX: "0deg",
											left: "0px",
											opacity: "1",
											ease: Power2.easeInOut,
											delay: .4
										},
										.15)));
								new ScrollScene({
									triggerElement: "#about-clients",
									offset: 0,
									reverse: !1
								}).setTween(n).addTo(e)
							}
							if (document.getElementById("IMG1")) {
								var a = (new TimelineLite).add(TweenMax.to($("#IMG1"), .9, {
									skewY: "-4deg",
									ease: Power2.easeInOut,
									delay: 0
								}));
								new ScrollScene({
									triggerElement: "#web-anim",
									offset: 0,
									reverse: !0
								}).setTween(a).addTo(e)
							}
							if (document.getElementById("music-cover")) {
								var o = (new TimelineLite).add(TweenMax.to($(".mask-cover5"), 0, {
									skewX: "0deg",
									left: "0%",
									ease: Power2.easeInOut,
									delay: 0
								})).add(TweenMax.to($(".mask-cover5"), 1.3, {
									skewX: "-20deg",
									left: "100%",
									ease: Power2.easeInOut,
									delay: 0
								})).add(TweenMax.to($(".mask-cover5"), .7, {
									skewX: "0deg",
									ease: Power2.easeInOut,
									delay: -.7
								}));
								new ScrollScene({
									triggerElement: "#music-cover",
									offset: 0,
									reverse: !0
								}).setTween(o).addTo(e)
							}
							if (document.getElementById("IMG1-V")) {
								var l = (new TimelineLite).add(TweenMax.to($("#IMG1-V"), .9, {
									skewY: "-4deg",
									ease: Power2.easeInOut,
									delay: 0
								}));
								new ScrollScene({
									triggerElement: "#IMG1-V",
									offset: 0,
									reverse: !0
								}).setTween(l).addTo(e)
							}
							if (document.getElementById("IMG2")) {
								var l = (new TimelineLite).add(TweenMax.to($(".image-2"), .9, {
									skewY: "-4deg",
									ease: Power2.easeInOut,
									delay: 0
								}));
								new ScrollScene({
									triggerElement: ".image-2",
									offset: 0,
									reverse: !0
								}).setTween(l).addTo(e)
							}
							if (document.getElementById("IMG3")) {
								var c = (new TimelineLite).add(TweenMax.to($("#IMG3"), .9, {
									skewY: "-4deg",
									ease: Power2.easeInOut,
									delay: 0
								}));
								new ScrollScene({
									triggerElement: ".image-3",
									offset: 0,
									reverse: !0
								}).setTween(c).addTo(e)
							}
						})
				}),
			l = function(e) {
				contenu_nouvelle_page = e,
					ajax_ok = !0
			},
			c = function() {
				$(".page-template-agency")[0] ? (TweenMax.to($("#background-transition"), 0, {
					top: "-100vh",
					ease: Power2.easeInOut,
					delay: 0
				}), TweenMax.to($(".mask-cover2"), 1.3, {
					skewX: "-20deg",
					left: "100%",
					ease: Power2.easeInOut,
					delay: 0
				}), TweenMax.to($(".mask-cover2"), .8, {
					skewX: "0deg",
					ease: Power2.easeInOut,
					delay: .6,
					onComplete: function() {
						scroll.init(),
							scroll.resize()
					}
				}), TweenMax.to($("#bottom-work"), 0, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: 1.6
				}), TweenMax.to($(".block-desc"), .8, {
					opacity: 1,
					marginTop: "-40px",
					ease: Power2.easeInOut,
					delay: 1.1
				}), TweenMax.staggerTo($(".linetexte-agence"), .6, {
						skewX: "0deg",
						opacity: "1",
						marginLeft: "0px",
						ease: Power1.easeOut,
						delay: 1.1
					},
					.15), TweenMax.staggerTo($(".line-baseline"), .6, {
						top: "0",
						opacity: "1",
						ease: Power1.easeOut,
						delay: .5
					},
					.1)) : $(".page-template-work")[0] ? (TweenMax.to($("#background-transition"), 0, {
					top: "-100vh",
					ease: Power2.easeInOut,
					delay: 0
				}), TweenMax.to($(".block-first").find(".mask-cover3"), .8, {
					skewX: "30deg",
					left: "100%",
					ease: Power1.easeInOut,
					delay: .4
				}), TweenMax.to($(".block-first").find(".mask-cover3"), .4, {
					skewX: "0deg",
					ease: Power1.easeInOut,
					delay: .8
				}), TweenMax.to($(".block-first").find(".work-projet-title"), .4, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: .1
				}), TweenMax.to($(".block-first").find(".mask-title-work"), .8, {
					skewX: "30deg",
					left: "100%",
					ease: Power1.easeInOut,
					delay: 1.2
				}), TweenMax.to($(".block-first").find(".mask-title-work"), .4, {
					skewX: "0deg",
					ease: Power1.easeInOut,
					delay: 1.6,
					onComplete: function() {
						scroll.init(),
							scroll.resize()
					}
				}), TweenMax.to($(".block-first").find(".title-work"), 0, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: 1.2
				}), TweenMax.to($(".work-block-col").find(".work-letter"), .4, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: .1
				}), TweenMax.to($(".work-block-col").find(".work-number"), .4, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: .1
				}), TweenMax.to($(".block-second"), 0, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: .1
				}), TweenMax.to($("#bottom-work"), 0, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: 1.6
				})) : $(".home")[0] ? (TweenMax.to($("#background-transition"), 0, {
					top: "-100vh",
					ease: Power2.easeInOut,
					delay: 0
				}), TweenMax.to($(".line"), 0, {
					opacity: "0",
					ease: Power1.easeInOut,
					delay: 0
				}), TweenMax.to($(".active").find(".number-project"), 0, {
					opacity: "0",
					display: "block",
					ease: Power1.easeInOut,
					delay: 0
				}), TweenMax.to($(".mask-white"), 0, {
					left: "-100%",
					skewX: "0deg",
					ease: Power1.easeInOut,
					delay: 0
				}), TweenMax.to($(".mask-white"), .8, {
					left: "0%",
					skewX: "-30deg",
					ease: Power1.easeInOut,
					delay: .2
				}), TweenMax.to($(".mask-white"), .4, {
					skewX: "0deg",
					ease: Power1.easeInOut,
					delay: .6
				}), TweenMax.to($(".mask-white"), .8, {
					left: "100%",
					skewX: "30deg",
					ease: Power1.easeInOut,
					delay: 1.2
				}), TweenMax.to($(".mask-white"), .4, {
					skewX: "0deg",
					ease: Power1.easeInOut,
					delay: 1.6
				}), TweenMax.to($(".mask-grabient"), .8, {
					left: "100%",
					skewX: "30deg",
					ease: Power1.easeInOut,
					delay: .4
				}), TweenMax.to($(".mask-grabient"), .4, {
					skewX: "0deg",
					ease: Power1.easeInOut,
					delay: .8
				}), TweenMax.to($(".mask-cover"), 0, {
					left: "0%",
					ease: Power1.easeInOut,
					delay: 0
				}), TweenMax.to($(".active").find(".infos-projet-home"), 0, {
					opacity: "1",
					display: "block",
					ease: Power1.easeInOut,
					delay: 0
				}), TweenMax.to($(".mask-cover-home"), 0, {
					left: "-100%",
					ease: Power1.easeInOut,
					delay: 0
				}), TweenMax.to($(".appear-photo"), 0, {
					left: "-100%",
					ease: Power2.easeInOut,
					delay: 0
				}), TweenMax.to($(".appear-photo"), .8, {
					left: "0%",
					ease: Power2.easeInOut,
					delay: 1.2
				}), TweenMax.to($(".photo-projet"), 0, {
					left: "100%",
					ease: Power2.easeInOut,
					delay: 0
				}), TweenMax.to($(".photo-projet"), .8, {
					left: "0%",
					ease: Power2.easeInOut,
					delay: 1.2
				}), TweenMax.to($("#number"), .2, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: 1.2
				}), TweenMax.to($(".seeproject"), .8, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: 1.2
				}), TweenMax.to($(".line"), .2, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: 1.2
				}), TweenMax.to($("#scroller"), .2, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: 1.2
				}), TweenMax.to($(".align"), 0, {
					color: "#FFFFFF",
					ease: Power1.easeInOut,
					delay: 1.2
				}), TweenMax.to($(".active").find(".mask-grabient"), 0, {
					opacity: "1",
					display: "block",
					ease: Power1.easeInOut,
					delay: 0
				}), TweenMax.to($(".active").find(".grabient"), 0, {
					opacity: "1",
					display: "block",
					ease: Power1.easeInOut,
					delay: .4
				}), TweenMax.to($(".active"), 0, {
					display: "block",
					ease: Power1.easeInOut,
					delay: 0
				}), TweenMax.to($(".active").find(".photo-projet"), 0, {
					opacity: "1",
					display: "block",
					ease: Power1.easeInOut,
					delay: 0
				}), TweenMax.to($(".active").find(".number-project"), .2, {
					opacity: "1",
					display: "block",
					ease: Power1.easeInOut,
					delay: 1.2
				}), scroll.init(), scroll.resize()) : $(".page-template-yo")[0] ? (TweenMax.to($("#background-transition"), 0, {
					top: "-100vh",
					ease: Power2.easeInOut,
					delay: 0
				}), scroll.init(), scroll.resize(), TweenMax.to($("#yooo"), .4, {
					opacity: "1",
					ease: Power2.easeInOut,
					delay: 0
				}), TweenMax.to($("#yooo"), .8, {
					skewX: "30deg",
					ease: Power2.easeInOut,
					delay: .4
				}), TweenMax.to($("#yooo"), .8, {
					skewY: "10deg",
					ease: Power2.easeInOut,
					delay: 1.2
				}), TweenMax.to($("#yooo"), .8, {
					skewY: "0deg",
					ease: Power2.easeInOut,
					delay: 2
				}), TweenMax.to($("#yooo"), .8, {
					skewX: "0deg",
					ease: Power2.easeInOut,
					delay: 2
				}), TweenMax.to($("#about-text"), 0, {
					top: "50%",
					opacity: "1",
					ease: Power1.easeOut,
					delay: .1
				}), TweenMax.staggerTo($(".linetexte-agence"), .6, {
						skewX: "0deg",
						opacity: "1",
						marginLeft: "0px",
						ease: Power1.easeOut,
						delay: .4
					},
					.15)) : $(".single")[0] ? (TweenMax.to($("#background-transition"), 0, {
					top: "-100vh",
					ease: Power2.easeInOut,
					delay: 0
				}), TweenMax.to($("#background-single"), 1.1, {
					left: "0%",
					skewX: "30deg",
					ease: Power1.easeInOut,
					delay: 0
				}), TweenMax.to($("#background-single"), .7, {
					skewX: "0deg",
					ease: Power1.easeInOut,
					delay: .4
				}), TweenMax.to($("#block-img-single-left"), 0, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: .82
				}), TweenMax.to($("#block-img-single-center"), 0, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: .82
				}), TweenMax.to($(".block-cover-mask-single"), 0, {
					skewX: "0deg",
					left: "0%",
					ease: Power2.easeInOut,
					delay: 0
				}), TweenMax.to($(".block-cover-mask-single"), 1.1, {
					skewX: "20deg",
					left: "100%",
					ease: Power2.easeInOut,
					delay: .8
				}), TweenMax.to($(".block-cover-mask-single"), .6, {
					skewX: "0deg",
					ease: Power2.easeInOut,
					delay: 1.3
				}), TweenMax.staggerTo($("#info-single h3"), .6, {
						top: "0",
						opacity: "1",
						ease: Power1.easeOut,
						delay: 1.6
					},
					.1), TweenMax.to($(".scroll-single"), .6, {
					opacity: "1",
					ease: Power1.easeOut,
					delay: 2.4,
					onComplete: function() {
						scroll.init(),
							scroll.resize()
					}
				}), TweenMax.to($("#next-background"), 0, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: 2
				}), TweenMax.to($("#bottom-single"), 0, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: 2
				}), TweenMax.to($("#block-presentation"), 0, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: 2
				}), TweenMax.to($("#visuels"), 0, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: 2
				})) : $(".page-template-credits")[0] && (TweenMax.to($("#background-transition"), 0, {
					top: "-100vh",
					ease: Power2.easeInOut,
					delay: 0
				}), TweenMax.staggerTo($(".anim-cred"), .4, {
						skewX: "0deg",
						opacity: "1",
						ease: Power1.easeOut,
						delay: 0
					},
					.15), TweenMax.to($(".title-session-credits"), .6, {
					opacity: "1",
					ease: Power1.easeInOut,
					delay: .2
				}), scroll.init(), scroll.resize())
			},
			h = function(e) {
				if (scroll.off(onscroll), $.get(e, l), $(".home")[0]) {
					if (TweenMax.to($(".mask-white"), 0, {
							left: "-100%",
							skewX: "0deg",
							ease: Power1.easeInOut,
							delay: 0
						}), TweenMax.to($(".mask-white"), .8, {
							left: "0%",
							skewX: "30deg",
							ease: Power1.easeInOut,
							delay: 1.2
						}), TweenMax.to($(".mask-white"), .4, {
							skewX: "0deg",
							ease: Power1.easeInOut,
							delay: 1.6
						}), TweenMax.to($(".mask-white"), .8, {
							left: "100%",
							skewX: "-30deg",
							ease: Power1.easeInOut,
							delay: 2
						}), TweenMax.to($(".mask-white"), .4, {
							skewX: "0deg",
							ease: Power1.easeInOut,
							delay: 2.4
						}), TweenMax.to($(".mask-grabient"), 0, {
							left: "-100%",
							display: "block",
							opacity: "1",
							ease: Power1.easeInOut,
							delay: 2.7
						}), TweenMax.to($(".mask-grabient"), .8, {
							left: "0%",
							skewX: "30deg",
							ease: Power1.easeInOut,
							delay: 2.8
						}), TweenMax.to($(".mask-grabient"), .4, {
							skewX: "0deg",
							ease: Power1.easeInOut,
							delay: 3.2,
							onComplete: function() {
								sortie_ok = !0
							}
						}), TweenMax.to($(".mask-cover-home"), 0, {
							left: "-100%",
							skewX: "0deg",
							ease: Power1.easeInOut,
							delay: 2.7
						}), TweenMax.to($(".mask-cover-home"), .8, {
							left: "0%",
							skewX: "30deg",
							ease: Power1.easeInOut,
							delay: 2.8
						}), TweenMax.to($(".mask-cover-home"), .4, {
							skewX: "0deg",
							ease: Power1.easeInOut,
							delay: 3.2
						}), TweenMax.to($("#number"), .2, {
							opacity: "0",
							ease: Power1.easeInOut,
							delay: 1.2
						}), TweenMax.to($(".seeproject"), .8, {
							opacity: "0",
							ease: Power1.easeInOut,
							delay: 1.2
						}), TweenMax.to($(".number-project"), .2, {
							opacity: "0",
							ease: Power1.easeInOut,
							delay: 1.2
						}), TweenMax.to($(".line"), .2, {
							opacity: "0",
							ease: Power1.easeInOut,
							delay: 1.2
						}), TweenMax.to($("#scroller"), .2, {
							opacity: "0",
							ease: Power1.easeInOut,
							delay: 1.2
						}), $("header").hasClass("sound")) {
						var t = new Audio("http://ccccontemple.com/wp-content/themes/contemple/sounds/sufjan2def.mp3");
						t.play()
					}
					TweenMax.to($(".align"), 0, {
						color: "#161616",
						ease: Power1.easeInOut,
						delay: 2
					})
				} else if ($(".page-template-credits")[0]) TweenMax.to($("#background-transition"), 0, {
					top: "-100vh",
					ease: Power2.easeInOut,
					delay: 0
				}),
					TweenMax.staggerTo($(".anim-cred"), .3, {
							skewX: "20deg",
							opacity: "0",
							ease: Power1.easeOut,
							delay: 1.2
						},
						-.15),
					TweenMax.to($(".title-session-credits"), .4, {
						opacity: "0",
						ease: Power1.easeInOut,
						delay: 2.8,
						onComplete: function() {
							sortie_ok = !0
						}
					});
				else if ($(".single")[0]) {
					if (TweenMax.to($("#background-transition"), .6, {
							top: "0%",
							ease: Power1.easeInOut,
							delay: 0
						}), TweenMax.to($("#background-transition"), 0, {
							top: "0%",
							ease: Power2.easeInOut,
							delay: 1.8,
							onComplete: function() {
								sortie_ok = !0
							}
						}), $("header").hasClass("sound")) {
						var t = new Audio("http://ccccontemple.com/wp-content/themes/contemple/sounds/Hadef.mp3");
						t.play()
					}
				} else if ($(".page-template-work")[0]) {
					if (TweenMax.to($(".work-block-col").find(".mask-title-work"), .8, {
							skewX: "30deg",
							left: "0%",
							ease: Power1.easeInOut,
							delay: 1
						}), TweenMax.to($(".work-block-col").find(".mask-title-work"), .4, {
							skewX: "0deg",
							ease: Power1.easeInOut,
							delay: 1.4
						}), TweenMax.to($(".work-block-col").find(".title-work"), 0, {
							opacity: "0",
							ease: Power1.easeInOut,
							delay: 1.8
						}), TweenMax.to($(".work-block-col").find(".mask-title-work"), .8, {
							skewX: "-30deg",
							left: "-100%",
							ease: Power1.easeInOut,
							delay: 1.8
						}), TweenMax.to($(".work-block-col").find(".mask-title-work"), .4, {
							skewX: "0deg",
							ease: Power1.easeInOut,
							delay: 2.2
						}), TweenMax.to($("#mask-table"), 1.2, {
							skewX: "30deg",
							left: "0%",
							ease: Power1.easeInOut,
							delay: 1.2
						}), TweenMax.to($("#mask-table"), .6, {
							skewX: "0deg",
							ease: Power1.easeInOut,
							delay: 1.8
						}), TweenMax.to($(".work-block-col").find(".mask-cover3"), .8, {
							skewX: "30deg",
							left: "0%",
							ease: Power1.easeInOut,
							delay: 1.8
						}), TweenMax.to($(".work-block-col").find(".mask-cover3"), .4, {
							skewX: "0deg",
							ease: Power1.easeInOut,
							delay: 2.2
						}), TweenMax.to($(".work-block-col").find(".work-letter"), .4, {
							opacity: "0",
							ease: Power1.easeInOut,
							delay: 2.4
						}), TweenMax.to($(".work-block-col").find(".discover-work"), 0, {
							opacity: "0",
							ease: Power1.easeInOut,
							delay: 1.8
						}), TweenMax.to($(".work-block-col").find(".letter_mea"), 0, {
							opacity: "0",
							ease: Power1.easeInOut,
							delay: 2.6
						}), TweenMax.to($(".work-block-col").find(".work-number"), 0, {
							opacity: "0",
							ease: Power1.easeInOut,
							delay: 2.6,
							onComplete: function() {
								sortie_ok = !0
							}
						}), $("header").hasClass("sound")) {
						var t = new Audio("http://ccccontemple.com/wp-content/themes/contemple/sounds/mgmtdef.mp3");
						t.play()
					}
				} else if ($(".page-template-yo")[0]) {
					if (TweenMax.to($("#background-transition"), .6, {
							top: "0%",
							ease: Power2.easeInOut,
							delay: 0
						}), TweenMax.to($("#about-text"), 0, {
							top: "55%",
							opacity: "0",
							ease: Power1.easeOut,
							delay: .6
						}), TweenMax.to($("#yooo"), 0, {
							opacity: "0",
							ease: Power1.easeOut,
							delay: .6
						}), TweenMax.to($("#background-transition"), 0, {
							top: "-100vh",
							ease: Power2.easeInOut,
							delay: 1.8,
							onComplete: function() {
								sortie_ok = !0
							}
						}), $("header").hasClass("sound")) {
						var t = new Audio("http://ccccontemple.com/wp-content/themes/contemple/sounds/sonicyouthdef.mp3");
						t.play()
					}
				} else if ($(".page-template-agency")[0] && (TweenMax.to("body", 2.4, {
						backgroundColor: "#161616",
						onComplete: function() {
							sortie_ok = !0
						}
					}), TweenMax.to($("#mask-table"), 1.2, {
						skewX: "30deg",
						left: "0%",
						ease: Power1.easeInOut,
						delay: 1.2
					}), TweenMax.to($("#mask-table"), .6, {
						skewX: "0deg",
						ease: Power1.easeInOut,
						delay: 1.8
					}), TweenMax.to($(".mask-cover2"), 0, {
						skewX: "0deg",
						left: "-100%",
						ease: Power2.easeInOut,
						delay: 0
					}), TweenMax.to($(".mask-cover2"), 1.3, {
						skewX: "-20deg",
						left: "0%",
						ease: Power2.easeInOut,
						delay: 1.2
					}), TweenMax.to($(".mask-cover2"), .8, {
						skewX: "0deg",
						ease: Power2.easeInOut,
						delay: 1.8
					}), TweenMax.staggerTo($(".linetexte-agence"), .6, {
							skewX: "20deg",
							opacity: "0",
							marginLeft: "50px",
							ease: Power1.easeOut,
							delay: 1.2
						},
						.15), TweenMax.staggerTo($(".line-baseline"), .6, {
							top: "-50px",
							opacity: "0",
							ease: Power1.easeOut,
							delay: 1.2
						},
						.1), $("header").hasClass("sound"))) {
					var t = new Audio("http://ccccontemple.com/wp-content/themes/contemple/sounds/beachhousedef.mp3");
					t.play()
				}
			},
			u = function(e) {
				document.title = $("<div>", {
					html: e
				}).find("title").text(),
					$("body").attr("class", "").addClass(e.match(/<body class="(.*?)">/)[1]),
					$("#main").html($("<div>", {
						html: e
					}).find("#main").html()),
					o()
			},
			d = function() {
				raf_chargement = requestAnimationFrame(d),
				sortie_ok === !0 && ajax_ok === !0 && (u(contenu_nouvelle_page), cancelAnimationFrame(raf_chargement))
			},
			f = function() {
				raf = requestAnimationFrame(f)
			};
		$(document).on("click", ".linka, area",
			function(e) {
				if (lien_en_cours !== !1) return ! 1;
				lien_en_cours = !0;
				var t = $(this).attr("href");
				return t.indexOf(document.domain) > -1 || -1 === t.indexOf(":") ? (history.pushState({},
					"", t), h(t), d(), !1) : void 0
			}),
			$(window).on("popstate",
				function(e) {
					null !== e.originalEvent.state && (h(location.href), d())
				}),
			history.pushState({},
				"", location),
			f()
	}),
	function(e, t) {
		if ("function" == typeof define && define.amd) define(["jquery", "TweenMax", "TimelineMax"], t);
		else {
			var i = t(e.jQuery, e.TweenMax, e.TimelineMax);
			e.ScrollMagic = i.Controller,
				e.ScrollScene = i.Scene
		}
	} (this,
		function(e, t, i) {
			var r = function(t) {
				var i, r, l = "ScrollMagic",
					u = {
						container: window,
						vertical: !0,
						globalSceneOptions: {},
						loglevel: 2,
						refreshInterval: 100
					},
					d = this,
					f = e.extend({},
						u, t),
					p = [],
					_ = !1,
					m = 0,
					g = "PAUSED",
					v = !0,
					y = 0,
					w = !0,
					T = function() {
						if (d.version = d.constructor.version, e.each(f,
								function(e, t) {
									u.hasOwnProperty(e) || (k(2, 'WARNING: Unknown option "' + e + '"'), delete f[e])
								}), f.container = e(f.container).first(), 0 === f.container.length) throw k(1, "ERROR creating object " + l + ": No valid scroll container supplied"),
						l + " init failed.";
						v = !e.contains(document, f.container.get(0)),
						v || f.container.on("resize",
							function(e) {
								e.stopPropagation()
							}),
							y = f.vertical ? f.container.height() : f.container.width(),
							f.container.on("scroll resize", O),
							f.refreshInterval = parseInt(f.refreshInterval),
						f.refreshInterval > 0 && (r = window.setInterval(S, f.refreshInterval)),
							i = c(P),
							k(3, "added new " + l + " controller (v" + d.version + ")")
					},
					b = function() {
						return f.vertical ? f.container.scrollTop() : f.container.scrollLeft()
					},
					x = function(e) {
						f.vertical ? f.container.scrollTop(e) : f.container.scrollLeft(e)
					},
					P = function() {
						if (i = c(P), w && _) {
							var t = e.isArray(_) ? _: p.slice(0),
								r = m;
							m = d.scrollPos();
							var s = m - r;
							g = 0 === s ? "PAUSED": s > 0 ? "FORWARD": "REVERSE",
							0 > s && t.reverse(),
								e.each(t,
									function(e, i) {
										k(3, "updating Scene " + (e + 1) + "/" + t.length + " (" + p.length + " total)"),
											i.update(!0)
									}),
							0 === t.length && f.loglevel >= 3 && k(3, "updating 0 Scenes (nothing added to controller)"),
								_ = !1
						}
					},
					O = function(e) {
						"resize" == e.type && (y = f.vertical ? f.container.height() : f.container.width()),
							_ = !0
					},
					S = function() {
						v || y != (f.vertical ? f.container.height() : f.container.width()) && f.container.trigger("resize"),
							e.each(p,
								function(e, t) {
									t.refresh()
								})
					},
					k = function(e, t) {
						if (f.loglevel >= e) {
							var i = "(" + l + ") ->",
								r = Array.prototype.splice.call(arguments, 1);
							r.unshift(e, i),
								n.apply(window, r)
						}
					},
					M = function(e) {
						if (e.length <= 1) return e;
						var t = e.slice(0);
						return t.sort(function(e, t) {
							return e.scrollOffset() > t.scrollOffset() ? 1 : -1
						}),
							t
					};
				return this.addScene = function(t) {
					return e.isArray(t) ? e.each(t,
						function(e, t) {
							d.addScene(t)
						}) : t instanceof s ? t.parent() != d ? t.addTo(d) : e.inArray(t, p) < 0 && (p.push(t), p = M(p), t.on("shift." + l + "_sort",
						function() {
							p = M(p)
						}), e.each(f.globalSceneOptions,
						function(e, i) {
							t[e] && t[e].call(t, i)
						}), k(3, "added Scene (" + p.length + " total)")) : k(1, "ERROR: invalid argument supplied for '.addScene()'"),
						d
				},
					this.removeScene = function(t) {
						if (e.isArray(t)) e.each(t,
							function(e, t) {
								d.removeScene(t)
							});
						else {
							var i = e.inArray(t, p);
							i > -1 && (t.off("shift." + l + "_sort"), p.splice(i, 1), t.remove(), k(3, "removed Scene (" + p.length + " total)"))
						}
						return d
					},
					this.updateScene = function(t, i) {
						return e.isArray(t) ? e.each(t,
							function(e, t) {
								d.updateScene(t, i)
							}) : i ? t.update(!0) : (e.isArray(_) || (_ = []), -1 == e.inArray(t, _) && _.push(t), _ = M(_)),
							d
					},
					this.update = function(e) {
						return O({
							type: "resize"
						}),
						e && P(),
							d
					},
					this.scrollTo = function(t) {
						if (t instanceof s) t.parent() === d ? d.scrollTo(t.scrollOffset()) : k(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", t);
						else if ("string" === e.type(t) || o(t) || t instanceof e) {
							var i = e(t).first();
							if (i[0]) {
								var r = f.vertical ? "top": "left",
									n = a(f.container),
									l = a(i);
								v || (n[r] -= d.scrollPos()),
									d.scrollTo(l[r] - n[r])
							} else k(2, "scrollTo(): The supplied element could not be found. Scroll cancelled.", t)
						} else e.isFunction(t) ? x = t: x.call(f.container[0], t);
						return d
					},
					this.scrollPos = function(t) {
						return arguments.length ? (e.isFunction(t) ? b = t: k(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), d) : b.call(d)
					},
					this.info = function(e) {
						var t = {
							size: y,
							vertical: f.vertical,
							scrollPos: m,
							scrollDirection: g,
							container: f.container,
							isDocument: v
						};
						return arguments.length ? void 0 !== t[e] ? t[e] : void k(1, 'ERROR: option "' + e + '" is not available') : t
					},
					this.loglevel = function(e) {
						return arguments.length ? (f.loglevel != e && (f.loglevel = e), d) : f.loglevel
					},
					this.enabled = function(e) {
						return arguments.length ? (w != e && (w = !!e, d.updateScene(p, !0)), d) : w
					},
					this.destroy = function(e) {
						window.clearTimeout(r);
						for (var t = p.length; t--;) p[t].destroy(e);
						return f.container.off("scroll resize", O),
							h(i),
							k(3, "destroyed " + l + " (reset: " + (e ? "true": "false") + ")"),
							null
					},
					T(),
					d
			};
			r.version = "1.3.0";
			var s = function(t) {
					var s, o, c, h, u, d, f, p = {
							onCenter: .5,
							onEnter: 1,
							onLeave: 0
						},
						_ = "ScrollScene",
						m = {
							duration: 0,
							offset: 0,
							triggerElement: null,
							triggerHook: "onCenter",
							reverse: !0,
							tweenChanges: !1,
							loglevel: 2
						},
						g = this,
						v = e.extend({},
							m, t),
						y = "BEFORE",
						w = 0,
						T = {
							start: 0,
							end: 0
						},
						b = 0,
						x = !0,
						P = {
							unknownOptionSupplied: function() {
								e.each(v,
									function(e, t) {
										m.hasOwnProperty(e) || (S(2, 'WARNING: Unknown option "' + e + '"'), delete v[e])
									})
							},
							duration: function() {
								if (e.isFunction(v.duration)) {
									s = v.duration;
									try {
										v.duration = parseFloat(s())
									} catch(t) {
										S(1, 'ERROR: Invalid return value of supplied function for option "duration":', v.duration),
											s = void 0,
											v.duration = m.duration
									}
								} else v.duration = parseFloat(v.duration),
								(!e.isNumeric(v.duration) || v.duration < 0) && (S(1, 'ERROR: Invalid value for option "duration":', v.duration), v.duration = m.duration)
							},
							offset: function() {
								v.offset = parseFloat(v.offset),
								e.isNumeric(v.offset) || (S(1, 'ERROR: Invalid value for option "offset":', v.offset), v.offset = m.offset)
							},
							triggerElement: function() {
								null !== v.triggerElement && 0 === e(v.triggerElement).length && (S(1, 'ERROR: Element defined in option "triggerElement" was not found:', v.triggerElement), v.triggerElement = m.triggerElement)
							},
							triggerHook: function() {
								v.triggerHook in p || (e.isNumeric(v.triggerHook) ? v.triggerHook = Math.max(0, Math.min(parseFloat(v.triggerHook), 1)) : (S(1, 'ERROR: Invalid value for option "triggerHook": ', v.triggerHook), v.triggerHook = m.triggerHook))
							},
							reverse: function() {
								v.reverse = !!v.reverse
							},
							tweenChanges: function() {
								v.tweenChanges = !!v.tweenChanges
							},
							loglevel: function() {
								if (v.loglevel = parseInt(v.loglevel), !e.isNumeric(v.loglevel) || v.loglevel < 0 || v.loglevel > 3) {
									var t = v.loglevel;
									v.loglevel = m.loglevel,
										S(1, 'ERROR: Invalid value for option "loglevel":', t)
								}
							}
						},
						O = function() {
							k(),
								g.on("change.internal",
									function(e) {
										"loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? A() : "reverse" === e.what && g.update())
									}).on("shift.internal",
									function(e) {
										E(),
											g.update(),
										("AFTER" === y && "duration" === e.reason || "DURING" === y && 0 === v.duration) && I()
									}).on("progress.internal",
									function(e) {
										L(),
											I()
									}).on("destroy",
									function(e) {
										e.preventDefault()
									})
						},
						S = function(e, t) {
							if (v.loglevel >= e) {
								var i = "(" + _ + ") ->",
									r = Array.prototype.splice.call(arguments, 1);
								r.unshift(e, i),
									n.apply(window, r)
							}
						},
						k = function(t) {
							if (arguments.length) e.isArray(t) || (t = [t]);
							else {
								t = [];
								for (var i in P) t.push(i)
							}
							e.each(t,
								function(e, t) {
									P[t] && P[t]()
								})
						},
						M = function(e, t) {
							var i = !1,
								r = v[e];
							return v[e] != t && (v[e] = t, k(e), i = r != v[e]),
								i
						},
						E = function() {
							T = {
								start: b + v.offset
							},
							o && v.triggerElement && (T.start -= o.info("size") * g.triggerHook()),
								T.end = T.start + v.duration
						},
						R = function(e) {
							if (s) {
								var t = "duration";
								M(t, s.call(g)) && !e && (g.trigger("change", {
									what: t,
									newval: v[t]
								}), g.trigger("shift", {
									reason: t
								}))
							}
						},
						A = function(t) {
							var i = 0;
							if (o && v.triggerElement) {
								for (var r = e(v.triggerElement).first(), s = o.info(), n = a(s.container), l = s.vertical ? "top": "left"; r.parent().data("ScrollMagicPinSpacer");) r = r.parent();
								var c = a(r);
								s.isDocument || (n[l] -= o.scrollPos()),
									i = c[l] - n[l]
							}
							var h = i != b;
							b = i,
							h && !t && g.trigger("shift", {
								reason: "triggerElementPosition"
							})
						},
						L = function(e) {
							if (c) {
								var t = e >= 0 && 1 >= e ? e: w;
								if ( - 1 === c.repeat()) if ("DURING" === y && c.paused()) c.play();
								else {
									if ("DURING" === y || c.paused()) return ! 1;
									c.pause()
								} else {
									if (t == c.progress()) return ! 1;
									0 === v.duration ? "DURING" === y ? c.play() : c.reverse() : v.tweenChanges ? c.tweenTo(t * c.duration()) : c.progress(t).pause()
								}
								return ! 0
							}
							return ! 1
						},
						I = function(e) {
							if (h && o) {
								var t = o.info();
								if (e || "DURING" !== y) {
									var i = {
											position: u.inFlow ? "relative": "absolute",
											top: 0,
											left: 0
										},
										r = h.css("position") != i.position;
									u.pushFollowers ? v.duration > 0 && ("AFTER" === y && 0 === parseFloat(u.spacer.css("padding-top")) ? r = !0 : "BEFORE" === y && 0 === parseFloat(u.spacer.css("padding-bottom")) && (r = !0)) : i[t.vertical ? "top": "left"] = v.duration * w,
										h.css(i),
									r && (h.removeClass(u.pinnedClass), j())
								} else {
									"fixed" != h.css("position") && (h.css("position", "fixed"), j(), h.addClass(u.pinnedClass));
									var s = a(u.spacer, !0),
										n = v.reverse || 0 === v.duration ? t.scrollPos - T.start: Math.round(w * v.duration * 10) / 10;
									s.top -= parseFloat(u.spacer.css("margin-top")),
										s[t.vertical ? "top": "left"] += n,
										h.css({
											top: s.top,
											left: s.left
										})
								}
							}
						},
						j = function() {
							if (h && o && u.inFlow) {
								var t = "AFTER" === y,
									i = "BEFORE" === y,
									r = "DURING" === y,
									s = "fixed" == h.css("position"),
									n = o.info("vertical"),
									a = u.spacer.children().first(),
									c = l(u.spacer.css("display")),
									d = {};
								c ? (d["margin-top"] = i || r && s ? h.css("margin-top") : "auto", d["margin-bottom"] = t || r && s ? h.css("margin-bottom") : "auto") : d["margin-top"] = d["margin-bottom"] = "auto",
									u.relSize.width || u.relSize.autoFullWidth ? s ? e(window).width() == u.spacer.parent().width() ? h.css("width", u.relSize.autoFullWidth ? "100%": "inherit") : h.css("width", u.spacer.width()) : h.css("width", "100%") : (d["min-width"] = a.outerWidth(!a.is(h)), d.width = s ? d["min-width"] : "auto"),
									u.relSize.height ? s ? e(window).height() == u.spacer.parent().height() ? h.css("height", "inherit") : h.css("height", u.spacer.height()) : h.css("height", "100%") : (d["min-height"] = a.outerHeight(!c), d.height = s ? d["min-height"] : "auto"),
								u.pushFollowers && (d["padding" + (n ? "Top": "Left")] = v.duration * w, d["padding" + (n ? "Bottom": "Right")] = v.duration * (1 - w)),
									u.spacer.css(d)
							}
						},
						C = function() {
							o && h && "DURING" === y && !o.info("isDocument") && I()
						},
						D = function() {
							o && h && "DURING" === y && ((u.relSize.width || u.relSize.autoFullWidth) && e(window).width() != u.spacer.parent().width() || u.relSize.height && e(window).height() != u.spacer.parent().height()) && j()
						},
						$ = function(e) {
							o && h && "DURING" === y && !o.info("isDocument") && (e.preventDefault(), o.scrollTo(o.info("scrollPos") - (e.originalEvent.wheelDelta / 3 || 30 * -e.originalEvent.detail)))
						};
					return this.parent = function() {
						return o
					},
						this.duration = function(t) {
							var i = "duration";
							return arguments.length ? (e.isFunction(t) || (s = void 0), M(i, t) && (g.trigger("change", {
								what: i,
								newval: v[i]
							}), g.trigger("shift", {
								reason: i
							})), g) : v[i]
						},
						this.offset = function(e) {
							var t = "offset";
							return arguments.length ? (M(t, e) && (g.trigger("change", {
								what: t,
								newval: v[t]
							}), g.trigger("shift", {
								reason: t
							})), g) : v[t]
						},
						this.triggerElement = function(e) {
							var t = "triggerElement";
							return arguments.length ? (M(t, e) && g.trigger("change", {
								what: t,
								newval: v[t]
							}), g) : v[t]
						},
						this.triggerHook = function(t) {
							var i = "triggerHook";
							return arguments.length ? (M(i, t) && (g.trigger("change", {
								what: i,
								newval: v[i]
							}), g.trigger("shift", {
								reason: i
							})), g) : e.isNumeric(v[i]) ? v[i] : p[v[i]]
						},
						this.reverse = function(e) {
							var t = "reverse";
							return arguments.length ? (M(t, e) && g.trigger("change", {
								what: t,
								newval: v[t]
							}), g) : v[t]
						},
						this.tweenChanges = function(e) {
							var t = "tweenChanges";
							return arguments.length ? (M(t, e) && g.trigger("change", {
								what: t,
								newval: v[t]
							}), g) : v[t]
						},
						this.loglevel = function(e) {
							var t = "loglevel";
							return arguments.length ? (M(t, e) && g.trigger("change", {
								what: t,
								newval: v[t]
							}), g) : v[t]
						},
						this.state = function() {
							return y
						},
						this.triggerPosition = function() {
							var e = v.offset;
							return o && (e += v.triggerElement ? b: o.info("size") * g.triggerHook()),
								e
						},
						this.triggerOffset = function() {
							return g.triggerPosition()
						},
						this.scrollOffset = function() {
							return T.start
						},
						this.update = function(e) {
							if (o) if (e) if (o.enabled() && x) {
								var t, i = o.info("scrollPos");
								t = v.duration > 0 ? (i - T.start) / (T.end - T.start) : i >= T.start ? 1 : 0,
									g.trigger("update", {
										startPos: T.start,
										endPos: T.end,
										scrollPos: i
									}),
									g.progress(t)
							} else h && "DURING" === y && I(!0);
							else o.updateScene(g, !1);
							return g
						},
						this.refresh = function() {
							return R(),
								A(),
								g
						},
						this.progress = function(e) {
							if (arguments.length) {
								var t = !1,
									i = y,
									r = o ? o.info("scrollDirection") : "PAUSED",
									s = v.reverse || e >= w;
								if (0 === v.duration ? (t = w != e, w = 1 > e && s ? 0 : 1, y = 0 === w ? "BEFORE": "DURING") : 0 >= e && "BEFORE" !== y && s ? (w = 0, y = "BEFORE", t = !0) : e > 0 && 1 > e && s ? (w = e, y = "DURING", t = !0) : e >= 1 && "AFTER" !== y ? (w = 1, y = "AFTER", t = !0) : "DURING" !== y || s || I(), t) {
									var n = {
											progress: w,
											state: y,
											scrollDirection: r
										},
										a = y != i,
										l = function(e) {
											g.trigger(e, n)
										};
									a && "DURING" !== i && (l("enter"), l("BEFORE" === i ? "start": "end")),
										l("progress"),
									a && "DURING" !== y && (l("BEFORE" === y ? "start": "end"), l("leave"))
								}
								return g
							}
							return w
						},
						this.setTween = function(t) {
							if (!i) return S(1, "ERROR: TimelineMax wasn't found. Please make sure GSAP is loaded before ScrollMagic or use asynchronous loading."),
								g;
							c && g.removeTween();
							try {
								c = new i({
									smoothChildTiming: !0
								}).add(t).pause()
							} catch(r) {
								S(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject")
							} finally {
								t.repeat && -1 === t.repeat() && (c.repeat( - 1), c.yoyo(t.yoyo()))
							}
							if (c && o && v.triggerElement && v.loglevel >= 2) {
								var s = c.getTweensOf(e(v.triggerElement)),
									n = o.info("vertical");
								e.each(s,
									function(e, t) {
										var i = t.vars.css || t.vars,
											r = n ? void 0 !== i.top || void 0 !== i.bottom: void 0 !== i.left || void 0 !== i.right;
										return r ? (S(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1) : void 0
									})
							}
							if (parseFloat(TweenLite.version) >= 1.14) for (var a, l, h = c.getChildren(!0, !0, !1), u = function() {
									S(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
								},
								                                                d = 0; d < h.length; d++) a = h[d],
							l !== u && (l = a.vars.onOverwrite, a.vars.onOverwrite = function() {
								l && l.apply(this, arguments),
									u.apply(this, arguments)
							});
							return S(3, "added tween"),
								L(),
								g
						},
						this.removeTween = function(e) {
							return c && (e && L(0), c.kill(), c = void 0, S(3, "removed tween (reset: " + (e ? "true": "false") + ")")),
								g
						},
						this.setPin = function(t, i) {
							var r = {
								pushFollowers: !0,
								spacerClass: "scrollmagic-pin-spacer",
								pinnedClass: ""
							};
							if (i = e.extend({},
									r, i), t = e(t).first(), 0 === t.length) return S(1, "ERROR calling method 'setPin()': Invalid pin element supplied."),
								g;
							if ("fixed" == t.css("position")) return S(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),
								g;
							if (h) {
								if (h === t) return g;
								g.removePin()
							}
							h = t,
								h.parent().hide();
							var s = "absolute" != h.css("position"),
								n = h.css(["display", "top", "left", "bottom", "right"]),
								a = h.css(["width", "height"]);
							h.parent().show(),
							"0px" === a.width && s && l(n.display),
							!s && i.pushFollowers && (S(2, "WARNING: If the pinned element is positioned absolutely pushFollowers is disabled."), i.pushFollowers = !1);
							var o = e("<div></div>").addClass(i.spacerClass).css(n).data("ScrollMagicPinSpacer", !0).css({
									position: s ? "relative": "absolute",
									"margin-left": "auto",
									"margin-right": "auto",
									"box-sizing": "content-box"
								}),
								c = h[0].style;
							return u = {
								spacer: o,
								relSize: {
									width: "%" === a.width.slice( - 1),
									height: "%" === a.height.slice( - 1),
									autoFullWidth: "0px" === a.width && s && l(n.display)
								},
								pushFollowers: i.pushFollowers,
								inFlow: s,
								origStyle: {
									width: c.width || "",
									position: c.position || "",
									top: c.top || "",
									left: c.left || "",
									bottom: c.bottom || "",
									right: c.right || "",
									"box-sizing": c["box-sizing"] || "",
									"-moz-box-sizing": c["-moz-box-sizing"] || "",
									"-webkit-box-sizing": c["-webkit-box-sizing"] || ""
								},
								pinnedClass: i.pinnedClass
							},
							u.relSize.width && o.css("width", a.width),
							u.relSize.height && o.css("height", a.height),
								h.before(o).appendTo(o).css({
									position: s ? "relative": "absolute",
									top: "auto",
									left: "auto",
									bottom: "auto",
									right: "auto"
								}),
							(u.relSize.width || u.relSize.autoFullWidth) && h.css("box-sizing", "border-box"),
								e(window).on("scroll." + _ + "_pin resize." + _ + "_pin", C),
								h.on("mousewheel DOMMouseScroll", $),
								S(3, "added pin"),
								I(),
								g
						},
						this.removePin = function(t) {
							return h && (t || !o ? (h.insertBefore(u.spacer).css(u.origStyle), u.spacer.remove()) : "DURING" === y && I(!0), e(window).off("scroll." + _ + "_pin resize." + _ + "_pin"), h.off("mousewheel DOMMouseScroll", $), h = void 0, S(3, "removed pin (reset: " + (t ? "true": "false") + ")")),
								g
						},
						this.setClassToggle = function(t, i) {
							var r = e(t);
							return 0 === r.length || "string" !== e.type(i) ? (S(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === r.length ? "element": "classes") + " supplied."), g) : (d = i, f = r, g.on("enter.internal_class leave.internal_class",
								function(e) {
									f.toggleClass(d, "enter" === e.type)
								}), g)
						},
						this.removeClassToggle = function(e) {
							return f && e && f.removeClass(d),
								g.off("start.internal_class end.internal_class"),
								d = void 0,
								f = void 0,
								g
						},
						this.addTo = function(e) {
							return e instanceof r ? o != e && (o && o.removeScene(g), o = e, k(), R(!0), A(!0), E(), j(), o.info("container").on("resize." + _,
								function() {
									D(),
									g.triggerHook() > 0 && g.trigger("shift", {
										reason: "containerSize"
									})
								}), S(3, "added " + _ + " to controller"), e.addScene(g), g.update()) : S(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic controller"),
								g
						},
						this.enabled = function(e) {
							return arguments.length ? (x != e && (x = !!e, g.update(!0)), g) : x
						},
						this.remove = function() {
							if (o) {
								o.info("container").off("resize." + _);
								var e = o;
								o = void 0,
									S(3, "removed " + _ + " from controller"),
									e.removeScene(g)
							}
							return g
						},
						this.destroy = function(e) {
							return g.removeTween(e),
								g.removePin(e),
								g.removeClassToggle(e),
								g.trigger("destroy", {
									reset: e
								}),
								g.remove(),
								g.off("start end enter leave progress change update shift destroy shift.internal change.internal progress.internal"),
								S(3, "destroyed " + _ + " (reset: " + (e ? "true": "false") + ")"),
								null
						},
						this.on = function(t, i) {
							if (e.isFunction(i)) {
								var r = e.trim(t).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1." + _ + "_$2").replace(/( |^)(\w+)(?= |$)/g, "$1$2." + _);
								e(g).on(r, i)
							} else S(1, "ERROR calling method 'on()': Supplied argument is not a valid callback!");
							return g
						},
						this.off = function(t, i) {
							var r = e.trim(t).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1." + _ + "_$2").replace(/( |^)(\w+)(?= |$)/g, "$1$2." + _ + "$3");
							return e(g).off(r, i),
								g
						},
						this.trigger = function(t, i) {
							S(3, "event fired:", t, "->", i);
							var r = e.Event(e.trim(t).toLowerCase(), i);
							return e(g).trigger(r),
								g
						},
						O(),
						g
				},
				n = function(e) {
					var t = ["error", "warn", "log"];
					e.log || (e.log = function() {});
					for (var i, r = 0; r < t.length; r++) i = t[r],
					e[i] || (e[i] = e.log);
					return function(i) { (i > t.length || 0 >= i) && (i = t.length);
						var r = new Date,
							s = ("0" + r.getHours()).slice( - 2) + ":" + ("0" + r.getMinutes()).slice( - 2) + ":" + ("0" + r.getSeconds()).slice( - 2) + ":" + ("00" + r.getMilliseconds()).slice( - 3),
							n = t[i - 1],
							a = Array.prototype.splice.call(arguments, 1),
							o = Function.prototype.bind.call(e[n], e);
						a.unshift(s),
							o.apply(e, a)
					}
				} (window.console = window.console || {}),
				a = function(e, t) {
					var i = {
						top: 0,
						left: 0
					};
					if (e = e[0], e && e.getBoundingClientRect) {
						var r = e.getBoundingClientRect();
						i.top = r.top,
							i.left = r.left,
						t || (i.top += (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), i.left += (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0));
					}
					return i
				},
				o = function(e) {
					return "object" == typeof HTMLElement ? e instanceof HTMLElement: e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
				},
				l = function(e) {
					return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
				},
				c = window.requestAnimationFrame,
				h = window.cancelAnimationFrame;
			return function(e) {
				var t, i = 0,
					r = ["ms", "moz", "webkit", "o"];
				for (t = 0; ! c && t < r.length; ++t) c = e[r[t] + "RequestAnimationFrame"],
					h = e[r[t] + "CancelAnimationFrame"] || e[r[t] + "CancelRequestAnimationFrame"];
				c || (c = function(t) {
					var r = (new Date).getTime(),
						s = Math.max(0, 16 - (r - i)),
						n = e.setTimeout(function() {
								t(r + s)
							},
							s);
					return i = r + s,
						n
				}),
				h || (h = function(t) {
					e.clearTimeout(t)
				})
			} (window),
				{
					Controller: r,
					Scene: s
				}
		}),
	function() {
		var e;
		e = function() {
			var e, t, i;
			return t = [],
				i = function(e, r) {
					return e = e || t,
						e.__proto__ = i.prototype,
						e.selector = r || "",
						e
				},
				e = function(t, r) {
					var s;
					return t ? (s = e.getDOMObject(t, r), r && (t += " " + r), i(s, t)) : i()
				},
				e.extend = function(e) {
					return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
						var i, r;
						r = [];
						for (i in t) r.push(e[i] = t[i]);
						return r
					}),
						e
				},
				i.prototype = e.fn = {},
				e
		} (),
			window.Quo = e,
		"$$" in window || (window.$$ = e)
	}.call(this),
	function() { !
		function(e) {
			var t, i, r, s, n, a, o, l;
			t = [],
				s = Object.prototype,
				r = /^\s*<(\w+|!)[^>]*>/,
				n = document.createElement("table"),
				a = document.createElement("tr"),
				i = {
					tr: document.createElement("tbody"),
					tbody: n,
					thead: n,
					tfoot: n,
					td: a,
					th: a,
					"*": document.createElement("div")
				},
				e.toType = function(e) {
					return s.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
				},
				e.isOwnProperty = function(e, t) {
					return s.hasOwnProperty.call(e, t)
				},
				e.getDOMObject = function(t, i) {
					var s, n, a;
					return s = null,
						n = [1, 9, 11],
						a = e.toType(t),
						"array" === a ? s = o(t) : "string" === a && r.test(t) ? (s = e.fragment(t.trim(), RegExp.$1), t = null) : "string" === a ? (s = e.query(document, t), i && (s = 1 === s.length ? e.query(s[0], i) : e.map(function() {
							return e.query(s, i)
						}))) : (n.indexOf(t.nodeType) >= 0 || t === window) && (s = [t], t = null),
						s
				},
				e.map = function(t, i) {
					var r, s, n;
					if (n = [], r = void 0, "array" === e.toType(t)) for (r = 0; r < t.length;) s = i(t[r], r),
					null != s && n.push(s),
						r++;
					else for (r in t) s = i(t[r], r),
					null != s && n.push(s);
					return l(n)
				},
				e.each = function(t, i) {
					var r;
					if (r = void 0, "array" === e.toType(t)) for (r = 0; r < t.length && i.call(t[r], r, t[r]) !== !1;) r++;
					else for (r in t) if (i.call(t[r], r, t[r]) === !1) break;
					return t
				},
				e.mix = function() {
					var t, i, r, s, n;
					for (r = {},
						     t = 0, s = arguments.length; s > t;) {
						i = arguments[t];
						for (n in i) e.isOwnProperty(i, n) && void 0 !== i[n] && (r[n] = i[n]);
						t++
					}
					return r
				},
				e.fragment = function(t, r) {
					var s;
					return null == r && (r = "*"),
					r in i || (r = "*"),
						s = i[r],
						s.innerHTML = "" + t,
						e.each(Array.prototype.slice.call(s.childNodes),
							function() {
								return s.removeChild(this)
							})
				},
				e.fn.map = function(t) {
					return e.map(this,
						function(e, i) {
							return t.call(e, i, e)
						})
				},
				e.fn.instance = function(e) {
					return this.map(function() {
						return this[e]
					})
				},
				e.fn.filter = function(t) {
					return e([].filter.call(this,
						function(i) {
							return i.parentNode && e.query(i.parentNode, t).indexOf(i) >= 0
						}))
				},
				e.fn.forEach = t.forEach,
				e.fn.indexOf = t.indexOf,
				o = function(e) {
					return e.filter(function(e) {
						return void 0 !== e && null !== e
					})
				},
				l = function(e) {
					return e.length > 0 ? [].concat.apply([], e) : e
				}
		} (Quo)
	}.call(this),
	function() { !
		function(e) {
			e.fn.attr = function(t, i) {
				return "string" === e.toType(t) && void 0 === i ? this[0].getAttribute(t) : this.each(function() {
					return this.setAttribute(t, i)
				})
			},
				e.fn.data = function(e, t) {
					return this.attr("data-" + e, t)
				},
				e.fn.val = function(t) {
					return "string" === e.toType(t) ? this.each(function() {
						return this.value = t
					}) : this.length > 0 ? this[0].value: null
				},
				e.fn.show = function() {
					return this.style("display", "block")
				},
				e.fn.hide = function() {
					return this.style("display", "none")
				},
				e.fn.height = function() {
					return this.offset().height
				},
				e.fn.width = function() {
					return this.offset().width
				},
				e.fn.offset = function() {
					var e;
					return e = this[0].getBoundingClientRect(),
						{
							left: e.left + window.pageXOffset,
							top: e.top + window.pageYOffset,
							width: e.width,
							height: e.height
						}
				},
				e.fn.remove = function() {
					return this.each(function() {
						return null != this.parentNode ? this.parentNode.removeChild(this) : void 0
					})
				}
		} (Quo)
	}.call(this),
	function() { !
		function(e) {
			var t, i, r, s, n, a, o;
			r = null,
				t = /WebKit\/([\d.]+)/,
				i = {
					Android: /(Android)\s+([\d.]+)/,
					ipad: /(iPad).*OS\s([\d_]+)/,
					iphone: /(iPhone\sOS)\s([\d_]+)/,
					blackberry: /(BlackBerry).*Version\/([\d.]+)/,
					webos: /(webOS|hpwOS)[\s\/]([\d.]+)/
				},
				e.isMobile = function() {
					return r = r || n(),
						r.isMobile
				},
				e.environment = function() {
					return r = r || n()
				},
				e.isOnline = function() {
					return navigator.onLine
				},
				n = function() {
					var e, t;
					return t = navigator.userAgent,
						e = {},
						e.browser = s(t),
						e.os = a(t),
						e.isMobile = !!e.os,
						e.screen = o(),
						e
				},
				s = function(e) {
					var i;
					return (i = e.match(t)) ? i[0] : e
				},
				a = function(e) {
					var t, r, s;
					t = null;
					for (r in i) if (s = e.match(i[r])) {
						t = {
							name: "iphone" === r || "ipad" === r ? "ios": r,
							version: s[2].replace("_", ".")
						};
						break
					}
					return t
				},
				o = function() {
					return {
						width: window.innerWidth,
						height: window.innerHeight
					}
				}
		} (Quo)
	}.call(this),
	function() { !
		function(e) {
			var t;
			e.fn.text = function(t) {
				return t || "number" === e.toType(t) ? this.each(function() {
					return this.textContent = t
				}) : this[0].textContent
			},
				e.fn.html = function(t) {
					var i;
					return i = e.toType(t),
						t || "number" === i || "null" === i ? this.each(function() {
							return "string" === i || "number" === i || "null" === i ? this.innerHTML = t: (this.innerHTML = null, this.appendChild(t))
						}) : this[0].innerHTML
				},
				e.fn.append = function(i) {
					return this.each(function() {
						return "string" !== e.toType(i) ? this.insertBefore(i) : i ? this.appendChild(t(i)) : void 0
					})
				},
				e.fn.prepend = function(t) {
					return this.each(function() {
						var i;
						return "string" === e.toType(t) ? this.innerHTML = t + this.innerHTML: (i = this.parentNode, i.insertBefore(t, i.firstChild))
					})
				},
				e.fn.replaceWith = function(i) {
					return this.each(function() {
						var r;
						return "string" === e.toType(i) && (i = t(i)),
						(r = this.parentNode) && r.insertBefore(i, this),
							e(this).remove()
					})
				},
				e.fn.empty = function() {
					return this.each(function() {
						this.innerHTML = null
					})
				},
				t = function(e) {
					var t;
					return t = document.createElement("div"),
						t.innerHTML = e,
						t.firstChild
				}
		} (Quo)
	}.call(this),
	function() { !
		function(e) {
			var t, i;
			e.query = function(e, t) {
				var i;
				return i = e.querySelectorAll(t),
					i = Array.prototype.slice.call(i)
			},
				e.fn.find = function(t) {
					var i;
					return i = 1 === this.length ? Quo.query(this[0], t) : this.map(function() {
						return Quo.query(this, t)
					}),
						e(i)
				},
				e.fn.parent = function(e) {
					var r;
					return r = e ? i(this) : this.instance("parentNode"),
						t(r, e)
				},
				e.fn.siblings = function(e) {
					var i;
					return i = this.map(function(e, t) {
						return Array.prototype.slice.call(t.parentNode.children).filter(function(e) {
							return e !== t
						})
					}),
						t(i, e)
				},
				e.fn.children = function(e) {
					var i;
					return i = this.map(function() {
						return Array.prototype.slice.call(this.children)
					}),
						t(i, e)
				},
				e.fn.get = function(e) {
					return void 0 === e ? this: this[e]
				},
				e.fn.first = function() {
					return e(this[0])
				},
				e.fn.last = function() {
					return e(this[this.length - 1])
				},
				e.fn.closest = function(t, i) {
					var r, s;
					for (s = this[0], r = e(t), r.length || (s = null); s && r.indexOf(s) < 0;) s = s !== i && s !== document && s.parentNode;
					return e(s)
				},
				e.fn.each = function(e) {
					return this.forEach(function(t, i) {
						return e.call(t, i, t)
					}),
						this
				},
				i = function(t) {
					var i;
					for (i = []; t.length > 0;) t = e.map(t,
						function(e) {
							return (e = e.parentNode) && e !== document && i.indexOf(e) < 0 ? (i.push(e), e) : void 0
						});
					return i
				},
				t = function(t, i) {
					return void 0 === i ? e(t) : e(t).filter(i)
				}
		} (Quo)
	}.call(this),
	function() { !
		function(e) {
			var t, i;
			e.fn.addClass = function(e) {
				return this.each(function() {
					return i(e, this.className) ? void 0 : (this.className += " " + e, this.className = this.className.trim())
				})
			},
				e.fn.removeClass = function(e) {
					return this.each(function() {
						return e ? i(e, this.className) ? this.className = this.className.replace(e, " ").replace(/\s+/g, " ").trim() : void 0 : this.className = ""
					})
				},
				e.fn.toggleClass = function(e) {
					return this.each(function() {
						return i(e, this.className) ? this.className = this.className.replace(e, " ") : (this.className += " " + e, this.className = this.className.trim())
					})
				},
				e.fn.hasClass = function(e) {
					return i(e, this[0].className)
				},
				e.fn.style = function(e, i) {
					return i ? this.each(function() {
						return this.style[e] = i
					}) : this[0].style[e] || t(this[0], e)
				},
				i = function(e, t) {
					return t.split(/\s+/g).indexOf(e) >= 0
				},
				t = function(e, t) {
					return document.defaultView.getComputedStyle(e, "")[t]
				}
		} (Quo)
	}.call(this),
	function() { !
		function(e) {
			var t, i, r, s, n, a, o, l, c, h, u;
			t = {
				TYPE: "GET",
				MIME: "json"
			},
				r = {
					script: "text/javascript, application/javascript",
					json: "application/json",
					xml: "application/xml, text/xml",
					html: "text/html",
					text: "text/plain"
				},
				i = 0,
				e.ajaxSettings = {
					type: t.TYPE,
					async: !0,
					success: {},
					error: {},
					context: null,
					dataType: t.MIME,
					headers: {},
					xhr: function() {
						return new window.XMLHttpRequest
					},
					crossDomain: !1,
					timeout: 0
				},
				e.ajax = function(i) {
					var r, o, h;
					if (o = e.mix(e.ajaxSettings, i), o.type === t.TYPE ? o.url += e.serializeParameters(o.data, "?") : o.data = e.serializeParameters(o.data), s(o.url)) return e.jsonp(o);
					h = o.xhr(),
						h.onreadystatechange = function() {
							return 4 === h.readyState ? (clearTimeout(r), c(h, o)) : void 0
						},
						h.open(o.type, o.url, o.async),
						l(h, o),
					o.timeout > 0 && (r = setTimeout(function() {
							return u(h, o)
						},
						o.timeout));
					try {
						h.send(o.data)
					} catch(d) {
						h = d,
							a("Resource not found", h, o)
					}
					return o.async ? h: n(h, o)
				},
				e.jsonp = function(t) {
					var r, s, n, a;
					return t.async ? (s = "jsonp" + ++i, n = document.createElement("script"), a = {
						abort: function() {
							return e(n).remove(),
								s in window ? window[s] = {}: void 0
						}
					},
						r = void 0, window[s] = function(i) {
						return clearTimeout(r),
							e(n).remove(),
							delete window[s],
							h(i, a, t)
					},
						n.src = t.url.replace(/=\?/, "=" + s), e("head").append(n), t.timeout > 0 && (r = setTimeout(function() {
							return u(a, t)
						},
						t.timeout)), a) : console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")
				},
				e.get = function(t, i, r, s) {
					return e.ajax({
						url: t,
						data: i,
						success: r,
						dataType: s
					})
				},
				e.post = function(e, t, i, r) {
					return o("POST", e, t, i, r)
				},
				e.put = function(e, t, i, r) {
					return o("PUT", e, t, i, r)
				},
				e["delete"] = function(e, t, i, r) {
					return o("DELETE", e, t, i, r)
				},
				e.json = function(i, r, s) {
					return e.ajax({
						url: i,
						data: r,
						success: s,
						dataType: t.MIME
					})
				},
				e.serializeParameters = function(e, t) {
					var i, r;
					null == t && (t = ""),
						r = t;
					for (i in e) e.hasOwnProperty(i) && (r !== t && (r += "&"), r += i + "=" + e[i]);
					return r === t ? "": r
				},
				c = function(e, t) {
					e.status >= 200 && e.status < 300 || 0 === e.status ? t.async && h(n(e, t), e, t) : a("QuoJS.ajax: Unsuccesful request", e, t)
				},
				h = function(e, t, i) {
					i.success.call(i.context, e, t)
				},
				a = function(e, t, i) {
					i.error.call(i.context, e, t, i)
				},
				l = function(e, t) {
					var i;
					t.contentType && (t.headers["Content-Type"] = t.contentType),
					t.dataType && (t.headers.Accept = r[t.dataType]);
					for (i in t.headers) e.setRequestHeader(i, t.headers[i])
				},
				u = function(e, t) {
					e.onreadystatechange = {},
						e.abort(),
						a("QuoJS.ajax: Timeout exceeded", e, t)
				},
				o = function(t, i, r, s, n) {
					return e.ajax({
						type: t,
						url: i,
						data: r,
						success: s,
						dataType: n,
						contentType: "application/x-www-form-urlencoded"
					})
				},
				n = function(e, i) {
					var r;
					if (r = e.responseText) if (i.dataType === t.MIME) try {
						r = JSON.parse(r)
					} catch(s) {
						r = s,
							a("QuoJS.ajax: Parse Error", e, i)
					} else "xml" === i.dataType && (r = e.responseXML);
					return r
				},
				s = function(e) {
					return /=\?/.test(e)
				}
		} (Quo)
	}.call(this),
	function() { !
		function(e) {
			var t, i;
			t = /complete|loaded|interactive/,
				i = {
					touch: "touchstart",
					tap: "tap"
				},
				["touch", "tap"].forEach(function(t) {
					return e.fn[t] = function(r) {
						return e(document.body).delegate(this.selector, i[t], r)
					},
						this
				}),
				e.fn.on = function(t, i, r) {
					return void 0 === i || "function" === e.toType(i) ? this.bind(t, i) : this.delegate(i, t, r)
				},
				e.fn.off = function(t, i, r) {
					return void 0 === i || "function" === e.toType(i) ? this.unbind(t, i) : this.undelegate(i, t, r)
				},
				e.fn.ready = function(i) {
					return t.test(document.readyState) ? i(e) : e.fn.addEvent(document, "DOMContentLoaded",
						function() {
							return i(e)
						}),
						this
				}
		} (Quo)
	}.call(this),
	function() { !
		function(e) {
			var t, i, r, s, n, a, o, l, c, h, u;
			t = 1,
				s = {},
				r = {
					preventDefault: "isDefaultPrevented",
					stopImmediatePropagation: "isImmediatePropagationStopped",
					stopPropagation: "isPropagationStopped"
				},
				i = {
					touchstart: "mousedown",
					touchmove: "mousemove",
					touchend: "mouseup",
					tap: "click",
					doubletap: "dblclick",
					orientationchange: "resize"
				},
				e.Event = function(e, t) {
					var i, r;
					if (i = document.createEvent("Events"), i.initEvent(e, !0, !0, null, null, null, null, null, null, null, null, null, null, null, null), t) for (r in t) i[r] = t[r];
					return i
				},
				e.fn.bind = function(e, t) {
					return this.each(function() {
						h(this, e, t)
					})
				},
				e.fn.unbind = function(e, t) {
					return this.each(function() {
						u(this, e, t)
					})
				},
				e.fn.delegate = function(t, i, r) {
					return this.each(function(s, a) {
						h(a, i, r, t,
							function(i) {
								return function(r) {
									var s, o;
									return (o = e(r.target).closest(t, a).get(0)) ? (s = e.extend(n(r), {
										currentTarget: o,
										liveFired: a
									}), i.apply(o, [s].concat([].slice.call(arguments, 1)))) : void 0
								}
							})
					})
				},
				e.fn.undelegate = function(e, t, i) {
					return this.each(function() {
						u(this, t, i, e)
					})
				},
				e.fn.trigger = function(t, i) {
					return "string" === e.toType(t) && (t = e.Event(t, i)),
						this.each(function() {
							this.dispatchEvent(t)
						})
				},
				e.fn.addEvent = function(e, t, i) {
					return e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i
				},
				e.fn.removeEvent = function(e, t, i) {
					return e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent ? e.detachEvent("on" + t, i) : e["on" + t] = null
				},
				h = function(t, i, r, n, l) {
					var h;
					return i = o(i),
						h = c(t),
						h = s[h] || (s[h] = []),
						l = l && l(r, i),
						i = {
							event: i,
							callback: r,
							selector: n,
							proxy: a(l, r, t),
							delegate: l,
							index: h.length
						},
						h.push(i),
						e.fn.addEvent(t, i.event, i.proxy)
				},
				u = function(t, i, r, n) {
					var a;
					return i = o(i),
						a = c(t),
						l(a, i, r, n).forEach(function(i) {
							return delete s[a][i.index],
								e.fn.removeEvent(t, i.event, i.proxy)
						})
				},
				c = function(e) {
					return e._id || (e._id = t++)
				},
				o = function(t) {
					return (e.isMobile() ? t: i[t]) || t
				},
				a = function(e, t, i) {
					return t = e || t,
						function(e) {
							var r;
							return r = t.apply(i, [e].concat(e.data)),
							r === !1 && e.preventDefault(),
								r
						}
				},
				l = function(e, t, i, r) {
					return (s[e] || []).filter(function(e) {
						return e && (!t || e.event === t) && (!i || e.fn === i) && (!r || e.selector === r)
					})
				},
				n = function(t) {
					var i;
					return i = e.extend({
							originalEvent: t
						},
						t),
						e.each(r,
							function(e, r) {
								return i[e] = function() {
									return this[r] = function() {
										return ! 0
									},
										t[e].apply(t, arguments)
								},
									i[r] = function() {
										return ! 1
									}
							}),
						i
				}
		} (Quo)
	}.call(this),
	function() { !
		function(a) {
			var i, h, b, f, n, p, s, r, j, m, l, d, c, e, k, q, v, y, x, u;
			b = {},
				h = [],
				i = [],
				f = void 0,
				["doubleTap", "hold", "swipe", "swiping", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "rotate", "rotating", "rotateLeft", "rotateRight", "pinch", "pinching", "pinchIn", "pinchOut", "drag", "dragLeft", "dragRight", "dragUp", "dragDown"].forEach(function(e) {
					a.fn[e] = function(t) {
						return this.on(e, t)
					}
				}),
				a(document).ready(function() {
					return e()
				}),
				e = function() {
					var e;
					return e = a(document.body),
						e.bind("touchstart", v),
						e.bind("touchmove", q),
						e.bind("touchend", k),
						e.bind("touchcancel", r)
				},
				v = function(e) {
					var t, i, r;
					return i = Date.now(),
						t = i - (b.last || i),
					f && clearTimeout(f),
						r = l(e),
						e = r.length,
						h = m(r, e),
						b.el = a(y(r[0].target)),
						b.fingers = e,
						b.last = i,
						1 === e ? (b.isDoubleTap = t > 0 && 250 >= t, setTimeout(d, 650)) : 2 === e ? (b.initial_angle = parseInt(n(h), 10), b.initial_distance = parseInt(j(h), 10), b.angle_difference = 0, b.distance_difference = 0) : void 0
				},
				q = function(e) {
					var t, n;
					return b.el && (n = l(e), t = n.length, t === b.fingers ? (i = m(n, t), c(e) && u("swiping"), 2 === t && (s(), p(), e.preventDefault())) : r()),
						!0
				},
				c = function() {
					var e, t;
					return e = !1,
					i[0] && (e = Math.abs(h[0].x - i[0].x) > 30, t = Math.abs(h[0].y - i[0].y) > 30, e = b.el && (e || t)),
						e
				},
				k = function() {
					var e;
					return b.isDoubleTap ? (u("doubleTap"), r()) : 1 === b.fingers ? c() ? (u("swipe"), e = x(h[0].x, i[0].x, h[0].y, i[0].y), u("swipe" + e), r()) : (u("tap"), f = setTimeout(r, 250)) : 2 === b.fingers ? (e = !1, 0 !== b.angle_difference && (u("rotate", {
						angle: b.angle_difference
					}), e = b.angle_difference > 0 ? "rotateRight": "rotateLeft", u(e, {
						angle: b.angle_difference
					}), e = !0), 0 !== b.distance_difference && (u("pinch", {
						angle: b.distance_difference
					}), e = b.distance_difference > 0 ? "pinchOut": "pinchIn", u(e, {
						distance: b.distance_difference
					}), e = !0), !e && i[0] && (Math.abs(h[0].x - i[0].x) > 10 || Math.abs(h[0].y - i[0].y) > 10) && (u("drag"), e = x(h[0].x, i[0].x, h[0].y, i[0].y), u("drag" + e)), r()) : void 0
				},
				m = function(e, t) {
					var i, r;
					for (r = [], i = 0; t > i;) r.push({
						x: e[i].pageX,
						y: e[i].pageY
					}),
						i++;
					return r
				},
				s = function() {
					var g, o, t;
					if (g = parseInt(n(i), 10), g = parseInt(b.initial_angle - g, 10), Math.abs(g) > 20 || 0 !== b.angle_difference) {
						for (o = 0, t = b.angle_difference < 0 ? "-": "+"; Math.abs(g - b.angle_difference) > 90 && o++<10;) eval("diff " + t + "= 180;");
						return b.angle_difference = parseInt(g, 10),
							u("rotating", {
								angle: b.angle_difference
							})
					}
				},
				p = function() {
					var e;
					return e = parseInt(j(i), 10),
						e = b.initial_distance - e,
						Math.abs(e) > 10 ? (b.distance_difference = e, u("pinching", {
							distance: e
						})) : void 0
				},
				u = function(e, t) {
					return b.el ? (t = t || {},
					i[0] && (t.iniTouch = b.fingers > 1 ? h: h[0], t.currentTouch = b.fingers > 1 ? i: i[0]), b.el.trigger(e, t)) : void 0
				},
				r = function() {
					return h = [],
						i = [],
						b = {},
						clearTimeout(f)
				},
				n = function(e) {
					var t;
					return t = e[0],
						e = e[1],
						t = Math.atan( - 1 * (e.y - t.y) / (e.x - t.x)) * (180 / Math.PI),
						0 > t ? t + 180 : t
				},
				j = function(e) {
					var t;
					return t = e[0],
						e = e[1],
					-1 * Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y))
				},
				l = function(e) {
					return a.isMobile() ? e.touches: [e]
				},
				y = function(e) {
					return "tagName" in e ? e: e.parentNode
				},
				x = function(e, t, i, r) {
					return Math.abs(e - t) >= Math.abs(i - r) ? e - t > 0 ? "Left": "Right": i - r > 0 ? "Up": "Down"
				},
				d = function() {
					return b.last && Date.now() - b.last >= 650 ? u("hold") : void 0
				}
		} (Quo)
	}.call(this);