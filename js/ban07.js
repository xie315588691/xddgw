// JavaScript Document
// JavaScript Document
// JavaScript Document
$(function () {
    //鏂伴椈5鏉￠棿璺�
    for (i = 0; i < $(".newsList li").length; i++) {
        if ((i + 1) % 5 == 0) $(".newsList li").eq(i).css({"margin-bottom": "20px"});
    }
    //闈㈠寘灞戞渶鍚庝竴涓彉鑹插姞绮楁牱寮忓啓鍦╯pan閲屼緥濡傦細.crumb span{}
    var alast = $(".loadd a:last").html();
    $(".loadd a:last").html("<span>" + alast + "</span>");
    $(".loadd a:last").attr("href", "javascript:;");
    $(".loadd a:last").bind("mouseover", function () {
        $(this).css({"text-decoration": "none", "cursor": "default"});
    });
    //浜岀骇瀵艰埅

    $(document).ready(function () {
        $(".banner").skitter({/*甯哥敤閰嶇疆*/
            theme: 'default',
            animation: 'random',/*36绉嶆晥鏋滐紝鐜颁负闅忔満*/
            label: false,
            numbers_align: 'center',
            progressbar: false,
            dots: false,/*涓篺lase鏄暟瀛楋紝true鏄渾鐐�*/
            interval: 1000
        });
    });

});


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright 漏 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright 漏 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */


(function ($) {
    $.fn.cxSlide = function (settings) {
        if (!this.length) {
            return
        }
        ;settings = $.extend({
            events: "click",
            type: "x",
            start: 0,
            speed: 800,
            time: 5000,
            auto: true,
            btn: true,
            plus: false,
            minus: false,
            mouseon: true,
            btnRoll: false,
            btnNum: 1,
            btnWid: 100
        }, settings);
        var obj = this;
        var slide = {};
        var _html;
        slide.box = obj.find(".box");
        slide.list = slide.box.find(".list");
        slide.arr = slide.list.find("li");
        slide.sum = slide.arr.length;
        slide.btn = obj.find(".btn");
        slide.btn_arr = slide.btn.find("li");
        slide.plus = obj.find(".plus");
        slide.minus = obj.find(".minus");
        slide.w = slide.box.width();
        slide.h = slide.box.height();
        slide.caption = obj.find(".caption").find("li");
        slide.s = 0;
        if (slide.sum <= 1) {
            return
        }
        ;slide.on = function () {
            if (!settings.auto) {
                return
            }
            slide.off();
            slide.run = setTimeout(function () {
                slide.goto()
            }, settings.time)
        };
        slide.off = function () {
            if (typeof (slide.run) !== "undefined") {
                clearTimeout(slide.run)
            }
        };
        slide.clear = function () {
            if (slide.btn.length) {
                slide.btn.remove()
            }
            ;
            if (slide.plus.length) {
                slide.plus.remove()
            }
            ;
            if (slide.minus.length) {
                slide.minus.remove()
            }
            ;slide.off()
        };
        slide.checkBtn = function (n, e) {
            if (slide.btn.length) {
                slide.btn_arr.removeClass("selected");
                slide.caption.hide();
                slide.btn_arr.eq(n).addClass("selected");
                slide.caption.eq(n).show();
                if (settings.btnRoll) {
                    var btnwid = slide.btn.width();
                    var currentWid = settings.btnWid * (n + 1);
                    if (currentWid > btnwid) {
                        if (n % settings.btnNum == 0) {
                            slide.btn.stop().animate({"scrollLeft": (settings.btnWid * n)}, 200)
                        } else if (e == "l" && n % (settings.btnNum) > 0) {
                            slide.btn.stop().animate({"scrollLeft": (settings.btnWid * settings.btnNum * parseInt(n / settings.btnNum))}, 200)
                        }
                    } else {
                        slide.btn.stop().animate({"scrollLeft": (0)}, 200)
                    }
                }
            }
        };
        slide.goto = function (n, e) {
            slide.off();
            if (n === undefined) {
                var n = slide.s + 1
            } else if (n == slide.s) {
                slide.checkBtn(n, e);
                slide.on();
                return
            }
            ;
            if (n > slide.sum) {
                n = 0
            }
            ;
            if (n < 0) {
                n = slide.sum - 1
            }
            ;slide.checkBtn(n, e);
            switch (settings.type) {
                case"x":
                    slide.box.stop(true, false).animate({"scrollLeft": (slide.w * n)}, settings.speed);
                    if (n >= slide.sum) {
                        slide.arr.eq(0).css({"left": slide.w * n});
                        slide.checkBtn(0);
                        n = 0;
                        slide.box.queue(function () {
                            slide.box.scrollLeft(0);
                            $(this).dequeue()
                        })
                    }
                    ;slide.box.queue(function () {
                    slide.arr.eq(0).css({"left": ""});
                    $(this).dequeue()
                });
                    break;
                case"y":
                    slide.box.stop(true, false).animate({"scrollTop": (slide.h * n)}, settings.speed);
                    if (n == slide.sum) {
                        slide.arr.eq(0).css({"top": slide.h * n});
                        slide.checkBtn(0);
                        n = 0;
                        slide.box.queue(function () {
                            slide.box.scrollTop(0);
                            $(this).dequeue()
                        })
                    }
                    ;slide.box.queue(function () {
                    slide.arr.eq(0).css({"top": ""});
                    $(this).dequeue()
                });
                    break;
                case"fade":
                    if (n == slide.sum) {
                        slide.checkBtn(0);
                        n = 0
                    }
                    ;slide.arr.css({"display": "none", "position": "relative", "zIndex": ""});
                    slide.arr.eq(slide.s).css({"display": "", "position": "absolute", "zIndex": 1});
                    slide.arr.eq(n).css({
                        "display": "none",
                        "position": "absolute",
                        "top": 0,
                        "left": 0,
                        "zIndex": 2
                    }).fadeIn(settings.speed);
                    break;
                case"toggle":
                    if (n == slide.sum) {
                        slide.checkBtn(0);
                        n = 0
                    }
                    ;slide.arr.hide();
                    slide.arr.eq(n).show();
                    break
            }
            ;slide.s = n;
            slide.box.queue(function () {
                slide.on();
                $(this).dequeue()
            })
        };
        if (settings.btn && !slide.btn.length) {
            _html = "";
            for (var i = 1; i <= slide.sum; i++) {
                _html += "<li class='b_" + i + "'>" + i + "</li>"
            }
            ;slide.btn = $("<ul></ul>", {"class": "btn", "html": _html}).appendTo(obj);
            slide.btn_arr = slide.btn.find("li")
        }
        ;
        if (settings.plus && !slide.plus.length) {
            slide.plus = $("<div></div>", {"class": "plus"}).appendTo(obj)
        }
        ;
        if (settings.minus && !slide.minus.length) {
            slide.minus = $("<div></div>", {"class": "minus"}).appendTo(obj)
        }
        ;
        if (settings.mouseon) {
            slide.box.hover(function () {
                slide.off()
            }, function () {
                slide.on()
            })
        }
        ;
        if (settings.btn) {
            slide.btn_arr.bind(settings.events, function () {
                slide.goto(slide.btn_arr.index($(this)))
            })
        }
        ;
        if (settings.plus) {
            slide.plus.bind("click", function () {
                slide.goto()
            })
        }
        ;
        if (settings.minus) {
            slide.minus.bind("click", function () {
                slide.goto(slide.s - 1, "l")
            })
        }
        ;slide.goto(settings.start)
    }
})(jQuery);//骞荤伅鐗囨晥鏋�


/**
 * jQuery Skitter Slideshow
 * @name jquery.skitter.js
 * @description Slideshow
 * @author Thiago Silva Ferreira - http://thiagosf.net
 * @version 4.2.1
 * @date August 04, 2010
 * @update April 25, 2013
 * @copyright (c) 2010 Thiago Silva Ferreira - http://thiagosf.net
 * @license Dual licensed under the MIT or GPL Version 2 licenses
 * @example http://thiagosf.net/projects/jquery/skitter/
 */
;eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function (e) {
            return r[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    }
    ;
    while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('(q($){f 2P=0,5G=[];$.2o.3G=q(D){Z c.3H(q(){l($(c).5H(\'5I\')==1W){$(c).5H(\'5I\',2P);5G.5J(2K $3e(c,D,2P));++2P}})};f 5K={1f:1,2L:8d,47:\'\',48:S,49:S,2z:S,N:\'\',k:1w,8e:1w,1m:1w,1s:1w,1N:1w,3f:1w,3g:\'4V\',B:1w,O:1w,1y:1,19:R,2X:R,4a:1w,5L:R,4b:R,3h:R,4c:R,4d:R,2p:R,4e:R,3i:R,3I:R,3J:1w,2q:0.75,2a:1L,2r:2Q,4W:1w,4X:1w,8f:20,4Y:\'r\',3j:R,2M:R,2R:R,4Z:\'4f\',2Y:R,51:\'4f\',1E:R,2s:{},2A:R,3k:R,3l:R,4g:0,2b:0,2Z:S,5M:R,4h:[],5N:1w,5O:1w,3K:S,4i:\'4j\',52:1w,5P:\'<a 1O="#" 1u="2c">8g</a>\'+\'<a 1O="#" 1u="23">8h</a>\'+\'<2S 1u="1B"></2S>\'+\'<1p 1u="4k">\'+\'<1p 1u="1K">\'+\'<a 1O=""><P 1u="1a" /></a>\'+\'<1p 1u="2t"></1p>\'+\'</1p>\'+\'</1p>\'};$.3G=q(3L,D,5Q){c.k=$(3L);c.31=1w;c.g=$.1P({},5K,D||{});c.2P=5Q;c.5R()};f $3e=$.3G;$3e.2o=$3e.53={};$3e.2o.1P=$.1P;$3e.2o.1P({5R:q(){f h=c;l(c.g.4e){f C=$(32).C();f H=$(32).H();c.k.C(C).H(H);c.k.w({\'2B\':\'54\',\'s\':0,\'r\':0,\'z-5S\':5T});c.g.2Z=R;$(\'55\').w({\'8i\':\'8j\'})}c.g.B=3m(c.k.w(\'C\'));c.g.O=3m(c.k.w(\'H\'));l(!c.g.B||!c.g.O){8k.8l(\'8m 5U H 4l 5V 1w! - 8n 8o\');Z R}l(c.g.52){c.k.3n(\'3G-\'+c.g.52)}c.k.1F(c.g.5P);c.g.N=c.5W(c.g.L);l(c.g.1f>=2)c.g.1f=1.3;l(c.g.1f<=0)c.g.1f=1;c.k.j(\'.1B\').1q();c.k.j(\'.2t\').1q();c.k.j(\'.2c\').1q();c.k.j(\'.23\').1q();c.k.j(\'.4k\').C(c.g.B);c.k.j(\'.4k\').H(c.g.O);f 3J=c.g.3J?c.g.3J:c.g.B;c.k.j(\'.2t\').C(3J);f 4m=\' 33\',u=0;c.g.1m=2K 4n();f 56=q(2T,W,24,2z,26){h.g.1m.5J([W,2T,24,2z,26]);l(h.g.4b){f 4o=\'\';l(h.g.B>h.g.O){4o=\'H="1v"\'}13{4o=\'C="1v"\'}h.k.j(\'.1B\').1F(\'<2S 1u="1X\'+4m+\'" 3o="\'+(u-1)+\'" 4p="57\'+u+\'58\'+h.2P+\'">\'+\'<P W="\'+W+\'" \'+4o+\' />\'+\'</2S> \')}13{h.k.j(\'.1B\').1F(\'<2S 1u="1X\'+4m+\'" 3o="\'+(u-1)+\'" 4p="57\'+u+\'58\'+h.2P+\'">\'+u+\'</2S> \')}4m=\'\'};l(c.g.3i){$.8p({4q:\'8q\',5X:c.g.3i,8r:R,8s:\'3i\',8t:q(3i){f 2C=$(\'<2C></2C>\');$(3i).j(\'3G 8u\').3H(q(){++u;f 2T=($(c).j(\'2T\').3p())?$(c).j(\'2T\').3p():\'#\';f W=$(c).j(\'1K\').3p();f 24=$(c).j(\'1K\').U(\'4q\');f 2z=$(c).j(\'2z\').3p();f 26=($(c).j(\'26\').3p())?$(c).j(\'26\').3p():\'4V\';56(2T,W,24,2z,26)})}})}13 l(c.g.8v){}13{c.k.j(\'2C 3q\').3H(q(){++u;f 2T=($(c).j(\'a\').1z)?$(c).j(\'a\').U(\'1O\'):\'#\';f W=$(c).j(\'P\').U(\'W\');f 24=$(c).j(\'P\').U(\'1u\');f 2z=$(c).j(\'.8w\').34();f 26=($(c).j(\'a\').1z&&$(c).j(\'a\').U(\'26\'))?$(c).j(\'a\').U(\'26\'):\'4V\';56(2T,W,24,2z,26)})}l(h.g.4b&&!h.g.4e){h.g.3h={V:0.3};h.g.4c={V:0.5};h.g.4d={V:1};h.k.j(\'.1B\').3n(\'2N\');f 4r=(u+1)*h.k.j(\'.2N .1X\').C();h.k.j(\'.2N\').C(4r);h.k.w({H:h.k.H()+h.k.j(\'.1B\').H()});h.k.1F(\'<1p 1u="5Y"></1p>\');f 5Z=h.k.j(\'.1B\').8x();h.k.j(\'.1B\').28();h.k.j(\'.5Y\').C(h.g.B).1F(5Z);f 59=0,B=c.g.B,O=c.g.O,3M=0,2N=h.k.j(\'.2N\'),5a=0,60=h.k.3r().s;2N.j(\'.1X\').3H(q(){59+=$(c).8y()});2N.C(59+\'11\');3M=2N.C();4s=c.g.B;4s=B-1v;l(4r>h.g.B){h.k.8z(q(e){5a=h.k.3r().r+90;f x=e.8A,y=e.8B,35=0;x=x-5a;y=y-60;61=3M-4s;35=-((61*x)/4s);l(35>0)35=0;l(35<-(3M-B))35=-(3M-B);l(y>O){2N.w({r:35})}})}h.k.j(\'.8C\').w({\'r\':10});l(4r<h.g.B){h.k.j(\'.1B\').C(\'36\');h.k.j(\'.8D\').1q();f 1Q=\'.1B\';2D(h.g.4Y){J\'4f\':f 18=(h.g.B-h.k.j(1Q).C())/2;h.k.j(1Q).w({\'r\':18});K;J\'2d\':h.k.j(1Q).w({\'r\':\'36\',\'2d\':\'-8E\'});K;J\'r\':h.k.j(1Q).w({\'r\':\'8F\'});K}}}13{f 1Q=\'.1B\';l(h.g.3I){h.k.j(\'.1B\').3n(\'5b\').5c(\'1B\');1Q=\'.5b\'}2D(h.g.4Y){J\'4f\':f 18=(h.g.B-h.k.j(1Q).C())/2;h.k.j(1Q).w({\'r\':18});K;J\'2d\':h.k.j(1Q).w({\'r\':\'36\',\'2d\':\'62\'});K;J\'r\':h.k.j(1Q).w({\'r\':\'62\'});K}l(!h.g.3I){l(h.k.j(\'.1B\').H()>20){h.k.j(\'.1B\').1q()}}}c.k.j(\'2C\').1q();l(c.g.5L)c.g.1m.63(q(a,b){Z E.1n()-0.5});c.g.1s=c.g.1m[0][0];c.g.1N=c.g.1m[0][1];c.g.3f=c.g.1m[0][3];c.g.3g=c.g.1m[0][4];l(c.g.1m.1z>1){c.k.j(\'.2c\').2O(q(){l(h.g.19==R){h.g.1y-=2;l(h.g.1y==-2){h.g.1y=h.g.1m.1z-2}13 l(h.g.1y==-1){h.g.1y=h.g.1m.1z-1}h.4t(h.g.1y)}Z R});c.k.j(\'.23\').2O(q(){h.4t(h.g.1y);Z R});h.k.j(\'.23, .2c\').4u(\'5d\',h.g.5N);h.k.j(\'.23, .2c\').4u(\'64\',h.g.5O);c.k.j(\'.1X\').3s(q(){l($(c).U(\'1u\')!=\'1X 33\'){l(h.g.4c){$(c).1R().I(h.g.4c,2Q)}}},q(){l($(c).U(\'1u\')!=\'1X 33\'){l(h.g.3h){$(c).1R().I(h.g.3h,1S)}}});c.k.j(\'.1X\').2O(q(){l($(c).U(\'1u\')!=\'1X 33\'){f 4v=3t($(c).U(\'3o\'));h.4t(4v)}Z R});l(h.g.3h){c.k.j(\'.1X\').w(h.g.3h)}l(h.g.4d){c.k.j(\'.1X:8G(0)\').w(h.g.4d)}l(h.g.3j&&h.g.3I){f 3j=$(\'<1p 1u="4w"><2C></2C></1p>\');1h(f i=0;i<c.g.1m.1z;i++){f 3q=$(\'<3q></3q>\');f P=$(\'<P />\');P.U(\'W\',c.g.1m[i][0]);3q.1F(P);3j.j(\'2C\').1F(3q)}f 65=3t(c.g.1m.1z*1v);3j.j(\'2C\').C(65);$(1Q).1F(3j);h.k.j(1Q).j(\'.1X\').8H(q(){f 66=3m(h.k.j(1Q).3r().r);f 67=3m($(c).3r().r);f 68=(67-66)-43;f 3o=3t($(c).U(\'3o\'));f 8I=h.k.j(\'.8J P\').U(\'W\');f 69=-(3o*1v);h.k.j(\'.4w\').j(\'2C\').I({r:69},{4x:1L,3N:R,L:\'6a\'});h.k.j(\'.4w\').1T(1,1).I({r:68},{4x:1L,3N:R})});h.k.j(1Q).64(q(){$(\'.4w\').I({V:\'1q\'},{4x:1L,3N:R})})}}l(h.g.2M){h.6b()}l(h.g.2Y){h.6c()}l(h.g.1E&&h.g.3K){h.6d()}l(h.g.2p){h.2p()}l(h.g.5M){h.6e()}c.6f()},6f:q(){f h=c;f 2E=$(\'<1p 1u="2E">8K</1p>\');c.k.1F(2E);f t=c.g.1m.1z;f u=0;$.3H(c.g.1m,q(i){f 6g=c;f 2E=$(\'<2S 1u="4y"></2S>\');2E.w({2B:\'54\',s:\'-8L\'});h.k.1F(2E);f P=2K 8M();$(P).8N(q(){++u;l(u==t){h.k.j(\'.2E\').28();h.k.j(\'.4y\').28();h.6h()}}).8O(q(){h.k.j(\'.2E, .4y, .1X, .23, .2c\').28();h.k.34(\'<p 2e="8P:8Q;4z:8R;">8S 2E 6i. 8T 5U 8U 6i 8V 8W 8X.</p>\')}).U(\'W\',6g[0])})},6h:q(){f h=c;f 5e=R;l(c.g.48||c.g.4b)c.k.j(\'.1B\').3O(1S);l(c.g.3I)c.k.j(\'.5b\').3O(1S);l(c.g.2z)c.k.j(\'.2t\').T();l(c.g.49){c.k.j(\'.2c\').3O(1S);c.k.j(\'.23\').3O(1S)}l(h.g.3K){h.3P()}h.6j();h.1Y();h.k.j(\'.1K a P\').U({\'W\':h.g.1s});4A=h.k.j(\'.1K a\');4A=h.4B(4A);4A.j(\'P\').3O(8Y);h.3Q();h.5f();l(h.g.3K){h.6k()}f 5g=q(){l(h.g.2Z){5e=S;h.g.2X=S;h.2F(S);h.5h()}};h.k.5d(5g);h.k.j(\'.23\').5d(5g);l(h.g.1m.1z>1&&!5e){l(h.g.3K){h.31=3R(q(){h.4C()},h.g.2L)}}13{h.k.j(\'.2E, .4y, .1X, .23, .2c\').28()}l($.6l(h.g.4W))h.g.4W(h)},4t:q(4v){l(c.g.19==R){c.g.2b=0;c.k.j(\'.n\').1R();c.2F(S);c.g.1y=E.6m(4v);c.k.j(\'.1K a\').U({\'1O\':c.g.1N});c.k.j(\'.1a\').U({\'W\':c.g.1s});c.k.j(\'.n\').28();c.4C()}},4C:q(){f h=c;3S=[\'6n\',\'6o\',\'6p\',\'6q\',\'6r\',\'6s\',\'6t\',\'6u\',\'6v\',\'6w\',\'6x\',\'6y\',\'6z\',\'6A\',\'6B\',\'6C\',\'6D\',\'6E\',\'6F\',\'6G\',\'6H\',\'6I\',\'6J\',\'6K\',\'6L\',\'6M\',\'6N\',\'6O\',\'6P\',\'6Q\',\'6R\',\'6S\',\'6T\',\'6U\',\'6V\'];l(h.g.1E)h.6W();24=(c.g.47==\'\'&&c.g.1m[c.g.1y][2])?c.g.1m[c.g.1y][2]:(c.g.47==\'\'?\'3a\':c.g.47);l(24==\'8Z\'){l(!c.g.4a){3S.63(q(){Z 0.5-E.1n()});c.g.4a=3S}24=c.g.4a[c.g.1y]}13 l(24==\'1n\'){f 6X=3t(E.1n()*3S.1z);24=3S[6X]}13 l(h.g.4h.1z>0){f 6Y=h.g.4h.1z;l(c.g.3u==1W){c.g.3u=0}24=h.g.4h[c.g.3u];++c.g.3u;l(c.g.3u>=6Y)c.g.3u=0}2D(24){J\'6n\':c.5i();K;J\'6o\':c.5i({1n:S});K;J\'6p\':c.6Z();K;J\'6q\':c.5j();K;J\'6r\':c.5j({1n:S});K;J\'6s\':c.71();K;J\'6t\':c.72();K;J\'6u\':c.73();K;J\'6v\':c.5k();K;J\'6w\':c.5k({1n:S});K;J\'6x\':c.5l();K;J\'6y\':c.74();K;J\'6z\':c.76();K;J\'6A\':c.77();K;J\'6B\':c.78();K;J\'6C\':c.5m({H:S});K;J\'6D\':c.5m({H:R,F:2u,1b:50});K;J\'6E\':c.3T({2v:\'s\'});K;J\'6F\':c.3T({2v:\'3b\'});K;J\'6G\':c.3T({2v:\'2d\',t:5});K;J\'6H\':c.3T({2v:\'r\',t:5});K;J\'6I\':c.79();K;J\'91\':c.7a();K;J\'6J\':c.7b();K;J\'6K\':c.7c();K;J\'6L\':c.7d();K;J\'6M\':c.7e();K;J\'6N\':c.7f();K;J\'6O\':c.7g();K;J\'6P\':c.5n({2v:\'s\'});K;J\'6Q\':c.5n({2v:\'3b\'});K;J\'6R\':c.7h();K;J\'6S\':c.5o();K;J\'6T\':c.5o({L:\'5p\'});K;J\'6U\':c.7i();K;J\'6V\':c.7j();K;3a:c.5l();K}},5i:q(D){f h=c;f D=$.1P({},{1n:R},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'3c\':c.g.N;f F=3U/c.g.1f;c.1l();f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/3));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=c.g.O+1L;f 1g=c.g.O+1L;f X=0;f 14=0;1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X)+(X*5q);f 18=-h.g.B;f 1r=-(A*X);f 1o=-(v*14);f Y=(A*X);f 17=(v*14);f n=c.1x();n.1q();f G=50*(i);l(D.1n){G=40*(14);n.w({r:18+\'11\',s:1c+\'11\',C:v,H:A})}13{F=1S;n.w({r:(c.g.B)+(v*i),s:c.g.O+(A*i),C:v,H:A})}c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.T().1b(G).I({s:Y+\'11\',r:17+\'11\'},F,L,Q);l(D.1n){n.j(\'P\').w({r:1o+1v,s:1r+50});n.j(\'P\').1b(G+(F/2)).I({r:1o,s:1r},5T,\'5p\')}13{n.j(\'P\').w({r:1o,s:1r});n.j(\'P\').1b(G+(F/2)).1T(1v,0.5).1T(2Q,1)}X++;l(X==1j){X=0;14++}}},6Z:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=1S/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/15));f v=E.M(c.g.B/t);f A=(c.g.O);1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:c.g.B+1v,s:0,C:v,H:A});n.j(\'P\').w({r:-(v*i)});c.1d(n);f G=80*(i);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.T().1b(G).I({s:Y,r:17},F,L);n.j(\'P\').1q().1b(G+1v).I({V:\'T\'},F+2Q,L,Q)}},5j:q(D){f h=c;f D=$.1P({},{1n:R},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'4D\':c.g.N;f F=2Q/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.B/8));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;f 1G=c.g.B/16;1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c-1G;f 17=18-1G;f n=c.1U(1i);n.w({r:18+\'11\',s:1c+\'11\',C:v,H:A});n.j(\'P\').w({r:1o,s:1r});c.1d(n);n.T();f G=50*i;l(D.1n){F=(2u*(h.3V(2)+1))/c.g.1f;Y=1c;17=18;G=E.M(30*h.3V(30))}l(D.1n&&i==(t-1)){F=2u*3;G=30*30}f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({V:\'1q\',s:Y+\'11\',r:17+\'11\'},F,L,Q);X++;l(X==1j){X=0;14++}}},71:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=1S/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/3));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c-50;f 17=18-50;f n=c.1U(1i);n.w({r:18+\'11\',s:1c+\'11\',C:v,H:A});n.j(\'P\').w({r:1o,s:1r});c.1d(n);n.T();f G=50*i;G=(i==(t-1))?(t*50):G;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({V:\'1q\'},F,L,Q);X++;l(X==1j){X=0;14++}}},7a:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'7k\':c.g.N;f F=2Q/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/3));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;f u=-1;1h(i=0;i<t;i++){l(14%2!=0){l(X==0){u=u+1j+1}u--}13{l(14>0&&X==0){u=u+2}u++}1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c-50;f 17=18-50;f n=c.1U(1i);n.w({r:18+\'11\',s:1c+\'11\',C:v,H:A});n.j(\'P\').w({r:1o,s:1r});c.1d(n);n.T();f G=(50*i);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({C:\'+=2G\',H:\'+=2G\',s:\'-=7l\',r:\'-=7l\',V:\'1q\'},F,L,Q);X++;l(X==1j){X=0;14++}}},72:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'3d\':c.g.N;f F=7m/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/3));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;f 1G=E.M(c.g.B/6);1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c-1G;f 17=18-1G;f n=c.1U(1i);n.w({r:18,s:1c,C:v,H:A});n.j(\'P\').w({r:1o,s:1r});c.1d(n);n.T();f G=50*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({V:\'1q\',C:\'1q\',H:\'1q\',s:1c+(v*1.5),r:18+(A*1.5)},F,L,Q);X++;l(X==1j){X=0;14++}}},73:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'3c\':c.g.N;f F=3U/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/7));f v=(c.g.B);f A=E.M(c.g.O/t);1h(i=0;i<t;i++){f 17=(i%2==0?\'\':\'\')+v;f Y=(i*A);f n=c.1x();n.w({r:17+\'11\',s:Y+\'11\',C:v,H:A});n.j(\'P\').w({r:0,s:-Y});c.1d(n);f G=90*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({V:\'T\',s:Y,r:0},F,L,Q)}},5k:q(D){f h=c;f D=$.1P({},{1n:R},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=2u/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10));f v=E.M(c.g.B/t);f A=(c.g.O);1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:17,s:Y-50,C:v,H:A});n.j(\'P\').w({r:-(v*i),s:0});c.1d(n);l(D.1n){f 1n=c.3V(t);f G=50*1n;G=(i==(t-1))?(50*t):G}13{f G=70*(i);F=F-(i*2)}f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({V:\'T\',s:Y+\'11\',r:17+\'11\'},F,L,Q)}},5l:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'7n\':c.g.N;f F=7m/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10));f v=E.M(c.g.B/t);f A=c.g.O;1h(i=0;i<t;i++){f Y=0;f 1c=A;f 5r=v*i;f n=c.1x();n.w({r:5r,s:1c,H:A,C:v});n.j(\'P\').w({r:-(5r)});c.1d(n);f 1n=c.3V(t);f G=30*1n;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.T().1b(G).I({s:Y},F,L,Q)}},74:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=7o/c.g.1f;c.1l();f v=c.g.B;f A=c.g.O;f t=2;1h(i=0;i<t;i++){f 1c=0;f 18=0;f n=c.1x();n.w({r:18,s:1c,C:v,H:A});c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.I({V:\'T\',r:0,s:0},F,L,Q)}},76:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=1S/c.g.1f;c.1l();f v=c.g.B;f A=c.g.O;f t=4;1h(i=0;i<t;i++){l(i==0){f 1c=\'-2G\';f 18=\'-2G\'}13 l(i==1){f 1c=\'-2G\';f 18=\'2G\'}13 l(i==2){f 1c=\'2G\';f 18=\'-2G\'}13 l(i==3){f 1c=\'2G\';f 18=\'2G\'}f n=c.1x();n.w({r:18,s:1c,C:v,H:A});c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.I({V:\'T\',r:0,s:0},F,L,Q)}},77:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=2u/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/16));f v=E.M(c.g.B/t);f A=c.g.O;1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:17,s:Y-c.g.O,C:v,H:A});n.j(\'P\').w({r:-(v*i),s:0});c.1d(n);f G;l(i<=((t/2)-1)){G=7p-(i*1L)}13 l(i>((t/2)-1)){G=((i-(t/2))*1L)}G=G/2.5;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({s:Y+\'11\',r:17+\'11\',V:\'T\'},F,L,Q)}},78:q(D){f h=c;f D=$.1P({},{H:R},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=2u/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/16));f v=E.M(c.g.B/t);f A=c.g.O;1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:17,s:Y,C:v,H:A});n.j(\'P\').w({r:-(v*i),s:0});c.1d(n);f G;l(!D.H){l(i<=((t/2)-1)){G=7p-(i*1L)}13 l(i>((t/2)-1)){G=((i-(t/2))*1L)}f Q=(i==(t-1))?q(){h.1k()}:\'\'}13{l(i<=((t/2)-1)){G=1L+(i*1L)}13 l(i>((t/2)-1)){G=(((t/2)-i)*1L)+(t*1v)}f Q=(i==(t/2))?q(){h.1k()}:\'\'}G=G/2.5;l(!D.H){n.1b(G).I({V:\'T\',s:Y+\'11\',r:17+\'11\',C:\'T\'},F,L,Q)}13{F=F+(i*2);f L=\'1M\';n.1b(G).I({V:\'T\',s:Y+\'11\',r:17+\'11\',H:\'T\'},F,L,Q)}}},5m:q(D){f h=c;f D=$.1P({},{H:S,F:1S,1b:1v},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=D.F/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/16));f v=E.M(c.g.B/t);f A=c.g.O;1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:17,s:Y,C:v,H:A});n.j(\'P\').w({r:-(v*i),s:0});c.1d(n);f G=D.1b*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';l(!D.H){n.1b(G).I({V:\'T\',s:Y+\'11\',r:17+\'11\',C:\'T\'},F,L,Q)}13{f L=\'1M\';n.1b(G).I({V:\'T\',s:Y+\'11\',r:17+\'11\',H:\'T\'},F,L,Q)}}},3T:q(D){f h=c;f D=$.1P({},{2v:\'s\',4E:\'4F\',t:7},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'4G\':c.g.N;f F=92/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});c.k.j(\'.1a\').1q();f t=D.t;1h(i=0;i<t;i++){2D(D.2v){3a:J\'s\':f v=E.M(c.g.B/t);f A=c.g.O;f 1Z=0;f 1C=(v*i);f 3v=-A;f 2U=1C;f 3w=A;f 3x=1C;f 3y=0;f 3z=1C;f 1r=0;f 1o=-1C;K;J\'3b\':f v=E.M(c.g.B/t);f A=c.g.O;f 1Z=0;f 1C=(v*i);f 3v=A;f 2U=1C;f 3w=-A;f 3x=1C;f 3y=0;f 3z=1C;f 1r=0;f 1o=-1C;K;J\'2d\':f v=c.g.B;f A=E.M(c.g.O/t);f 1Z=(A*i);f 1C=0;f 3v=1Z;f 2U=v;f 3w=1Z;f 3x=-2U;f 3y=1Z;f 3z=0;f 1r=-1Z;f 1o=0;K;J\'r\':f v=c.g.B;f A=E.M(c.g.O/t);f 1Z=(A*i);f 1C=0;f 3v=1Z;f 2U=-v;f 3w=1Z;f 3x=-2U;f 3y=1Z;f 3z=0;f 1r=-1Z;f 1o=0;K}2D(D.4E){J\'7q\':3a:f G=(i%2==0)?0:5q;K;J\'1n\':f G=30*(E.1n()*30);K;J\'4F\':f G=i*1v;K}f n=c.1U(1i);n.j(\'P\').w({r:1o,s:1r});n.w({s:1Z,r:1C,C:v,H:A});c.1d(n);n.T();n.1b(G).I({s:3v,r:2U},F,L);f 2f=c.1x();2f.j(\'P\').w({r:1o,s:1r});2f.w({s:3w,r:3x,C:v,H:A});c.1d(2f);2f.T();f Q=(i==(t-1))?q(){h.1k()}:\'\';2f.1b(G).I({s:3y,r:3z},F,L,Q)}},79:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=3U/c.g.1f;c.1l();f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.B/8));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;f 4H=2K 4n;f 3A=2K 4n;1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));4H[i]=[1c,18];X++;l(X==1j){X=0;14++}}X=0;14=0;1h(i=0;i<t;i++){3A[i]=i};f 3A=h.7r(3A);1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c;f 17=18;1c=4H[3A[i]][0];18=4H[3A[i]][1];f n=c.1x();n.w({r:18+\'11\',s:1c+\'11\',C:v,H:A});n.j(\'P\').w({r:1o,s:1r});c.1d(n);f G=30*(E.1n()*30);l(i==(t-1))G=30*30;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({V:\'T\',s:Y+\'11\',r:17+\'11\'},F,L,Q);X++;l(X==1j){X=0;14++}}},7b:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'3c\':c.g.N;f F=1S/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10))*2;f v=E.M(c.g.B/t)*2;f A=(c.g.O)/2;f 14=0;1h(i=0;i<t;i++){4I=(i%2)==0?S:R;f 1H=(v*(14));f 1I=(4I)?-h.g.O:h.g.O;f 2g=(v*(14));f 1G=(4I)?0:(A);f 17=-(v*14);f Y=(4I)?0:-(A);f G=93*14;f n=c.1x();n.w({r:1H,s:1I,C:v,H:A});n.j(\'P\').w({r:17+(v/1.5),s:Y}).1b(G).I({r:17,s:Y},(F*1.9),\'1M\');c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.T().1b(G).I({s:1G,r:2g},F,L,Q);l((i%2)!=0)14++}},7c:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'3c\':c.g.N;f F=3U/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10));f v=E.M(c.g.B/t);f A=(c.g.O);1h(i=0;i<t;i++){f 1H=(v*(i));f 1I=0;f 2g=(v*(i));f 1G=0;f 17=-(v*(i));f Y=0;f G=1v*i;f n=c.1x();n.w({r:1H,s:1I,C:v,H:A});n.j(\'P\').w({r:17+(v/1.5),s:Y}).1b(G).I({r:17,s:Y},(F*1.1),\'3d\');c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({s:1G,r:2g,V:\'T\'},F,L,Q)}},7d:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'4D\':c.g.N;f F=1S/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10));f 1A=1v;f 1D=E.5s(E.3B((c.g.B),2)+E.3B((c.g.O),2));f 1D=E.M(1D);1h(i=0;i<t;i++){f 1H=(h.g.B/2)-(1A/2);f 1I=(h.g.O/2)-(1A/2);f 2g=1H;f 1G=1I;f n=1w;n=c.4J({1K:h.g.1s,r:1H,s:1I,C:1A,H:1A,2B:{s:-1I,r:-1H}}).3W({\'4K-1D\':1D+\'11\'});1A+=1v;c.1d(n);f G=70*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({s:1G,r:2g,V:\'T\'},F,L,Q)}},7e:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'4D\':c.g.N;f F=1S/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f t=E.M(c.g.B/(c.g.B/10));f 1D=E.5s(E.3B((c.g.B),2)+E.3B((c.g.O),2));f 1D=E.M(1D);f 1A=1D;1h(i=0;i<t;i++){f 1H=(h.g.B/2)-(1A/2);f 1I=(h.g.O/2)-(1A/2);f 2g=1H;f 1G=1I;f n=1w;n=c.4J({1K:1i,r:1H,s:1I,C:1A,H:1A,2B:{s:-1I,r:-1H}}).3W({\'4K-1D\':1D+\'11\'});1A-=1v;c.1d(n);n.T();f G=70*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({s:1G,r:2g,V:\'1q\'},F,L,Q)}},7f:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=1S/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f t=E.M(c.g.B/(c.g.B/10));f 1D=E.5s(E.3B((c.g.B),2)+E.3B((c.g.O),2));f 1D=E.M(1D);f 1A=1D;1h(i=0;i<t;i++){f 1H=(h.g.B/2)-(1A/2);f 1I=(h.g.O/2)-(1A/2);f 2g=1H;f 1G=1I;f n=1w;l($.94.95){n=c.1U(1i);n.w({r:1H,s:1I,C:1A,H:1A}).3W({\'4K-1D\':1D+\'11\'});n.j(\'P\').w({r:-1H,s:-1I})}13{n=c.4J({1K:1i,r:1H,s:1I,C:1A,H:1A,2B:{s:-1I,r:-1H}}).3W({\'4K-1D\':1D+\'11\'})}1A-=1v;c.1d(n);n.T();f G=1v*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';f 7s=(i%2==0)?\'7t\':\'-7t\';n.1b(G).I({s:1G,r:2g,V:\'1q\',2h:7s},F,L,Q)}},7g:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=2u/c.g.1f;c.1l();f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/4));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 96=R;f Y=0;f 17=0;f 3X=0;f 14=0;1h(i=0;i<t;i++){Y=A*3X;17=v*14;f G=30*(i);f n=c.1x();n.w({r:17,s:Y,C:v,H:A}).1q();n.j(\'P\').w({r:-17,s:-Y});c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({C:\'T\',H:\'T\'},F,L,Q);3X++;l(3X==1j){3X=0;14++}}},5n:q(D){f h=c;f D=$.1P({},{2v:\'s\'},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'3d\':c.g.N;f F=2u/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f t=12;f v=E.M(c.g.B/t);f A=c.g.O;f 1G=(D.2v==\'s\')?-A:A;1h(i=0;i<t;i++){f 1c=0;f 18=(v*i);f 1r=0;f 1o=-(v*i);f n=c.1U(1i);n.w({r:18+\'11\',s:1c+\'11\',C:v,H:A});n.j(\'P\').w({r:1o,s:1r});c.1d(n);n.T();f G=70*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({s:1G},F,L,Q)}},7h:q(D){f h=c;f D=$.1P({},{1n:R},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'5t\':c.g.N;f F=3U/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/10));f t=1t;f v=E.M(c.g.B/1t);f A=c.g.O;1h(i=0;i<t;i++){f 1c=0;f 18=v*i;f 1r=0;f 1o=-(v*i);f 2g=\'+=\'+v;f n=c.1U(1i);n.w({r:0,s:0,C:v,H:A});n.j(\'P\').w({r:1o,s:1r});f 3Y=c.1U(1i);3Y.w({r:18+\'11\',s:1c+\'11\',C:v,H:A});3Y.34(n);c.1d(3Y);n.T();3Y.T();f G=50*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({r:2g},F,L,Q)}},5o:q(D){f h=c;f D=$.1P({},{2v:\'s\',4E:\'4F\',t:7,L:\'5t\'},D||{});c.g.19=S;f L=(c.g.N==\'\')?D.L:c.g.N;f F=1S/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});c.k.j(\'.1a\').1q();f t=D.t;1h(i=0;i<t;i++){f v=E.M(c.g.B/t);f A=c.g.O;f 1Z=0;f 1C=(v*i);f 3v=-A;f 2U=1C+v;f 3w=A;f 3x=1C;f 3y=0;f 3z=1C;f 1r=0;f 1o=-1C;2D(D.4E){J\'7q\':3a:f G=(i%2==0)?0:5q;K;J\'1n\':f G=30*(E.1n()*30);K;J\'4F\':f G=i*1v;K}f n=c.1U(1i);n.j(\'P\').w({r:1o,s:0});n.w({s:0,r:0,C:v,H:A});f 2f=c.1x();2f.j(\'P\').w({r:1o,s:0});2f.w({s:0,r:-v,C:v,H:A});f 3Z=c.1x();3Z.34(\'\').1F(n).1F(2f);3Z.w({s:0,r:1C,C:v,H:A});c.1d(3Z);3Z.T();n.T();2f.T();f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({r:v},F,L);2f.1b(G).I({r:0},F,L,Q)}},7i:q(D){f h=c;f D=$.1P({},{2H:\'3d\',2I:\'1M\'},D||{});c.g.19=S;f 2H=(c.g.N==\'\')?D.2H:c.g.N;f 2I=(c.g.N==\'\')?D.2I:c.g.N;f F=7o/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});c.k.j(\'.1a\').1q();f t=2;f v=c.g.B;f A=E.M(c.g.O/t);f 21=c.1U(1i),22=c.1U(1i);21.j(\'P\').w({r:0,s:0});21.w({s:0,r:0,C:v,H:A});22.j(\'P\').w({r:0,s:-A});22.w({s:A,r:0,C:v,H:A});f 2i=c.1x(),2j=c.1x();2i.j(\'P\').w({r:0,s:A});2i.w({s:0,r:0,C:v,H:A});2j.j(\'P\').w({r:0,s:-(A*t)});2j.w({s:A,r:0,C:v,H:A});c.1d(2i);c.1d(2j);c.1d(21);c.1d(22);21.T();22.T();2i.T();2j.T();f Q=q(){h.1k()};21.j(\'P\').I({s:A},F,2H,q(){21.28()});22.j(\'P\').I({s:-(A*t)},F,2H,q(){22.28()});2i.j(\'P\').I({s:0},F,2I);2j.j(\'P\').I({s:-A},F,2I,Q)},7j:q(D){f h=c;f D=$.1P({},{2H:\'4G\',2I:\'4G\'},D||{});c.g.19=S;f 2H=(c.g.N==\'\')?D.2H:c.g.N;f 2I=(c.g.N==\'\')?D.2I:c.g.N;f F=97/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});c.k.j(\'.1a\').1q();f t=2;f v=c.g.B;f A=E.M(c.g.O/t);f 21=c.1U(1i),22=c.1U(1i);21.j(\'P\').w({r:0,s:0});21.w({s:0,r:0,C:v,H:A});22.j(\'P\').w({r:0,s:-A});22.w({s:A,r:0,C:v,H:A});f 2i=c.1x(),2j=c.1x();2i.j(\'P\').w({r:0,s:0});2i.w({s:0,r:v,C:v,H:A});2j.j(\'P\').w({r:0,s:-A});2j.w({s:A,r:-v,C:v,H:A});c.1d(2i);c.1d(2j);c.1d(21);c.1d(22);21.T();22.T();2i.T();2j.T();f Q=q(){h.1k()};21.I({r:-v},F,2H,q(){21.28()});22.I({r:v},F,2H,q(){22.28()});2i.I({r:0},F,2I);2j.I({r:0},F,2I,Q)},1k:q(D){f h=c;c.k.j(\'.1a\').T();c.5f();c.g.19=R;c.k.j(\'.1a\').U({\'W\':c.g.1s});c.k.j(\'.1K a\').U({\'1O\':c.g.1N});l(!c.g.2X&&!c.g.2A&&!c.g.3k){c.31=3R(q(){h.41()},c.g.2L)}h.3P()},41:q(){c.2F(S);c.k.j(\'.n\').28();l(!c.g.2A&&!c.g.3k)c.4C()},1l:q(){l($.6l(c.g.4X))c.g.4X(c.g.1y,c);c.7u();c.7v();c.7w();c.7x()},7u:q(){f 7y=c.g.1m[c.g.1y][0];f 7z=c.g.1m[c.g.1y][1];f 7A=c.g.1m[c.g.1y][3];f 7B=c.g.1m[c.g.1y][4];c.g.1s=7y;c.g.1N=7z;c.g.3f=7A;c.g.3g=7B},7v:q(){f h=c;c.k.j(\'.33\').5c(\'33\');$(\'#57\'+(c.g.1y+1)+\'58\'+h.2P).3n(\'33\')},7x:q(){c.g.1y++;l(c.g.1y==c.g.1m.1z){c.g.1y=0}},1x:q(){l(c.g.1N!=\'#\'){f 1V=$(\'<a 1O="\'+c.g.1N+\'"><P W="\'+c.g.1s+\'" /></a>\');1V.U({\'26\':c.g.3g})}13{f 1V=$(\'<P W="\'+c.g.1s+\'" />\')}1V=c.4B(1V);f n=$(\'<1p 1u="n"></1p>\');n.1F(1V);Z n},1U:q(1i){l(c.g.1N!=\'#\'){f 1V=$(\'<a 1O="\'+c.g.1N+\'"><P W="\'+1i+\'" /></a>\');1V.U({\'26\':c.g.3g})}13{f 1V=$(\'<P W="\'+1i+\'" />\')}1V=c.4B(1V);f n=$(\'<1p 1u="n"></1p>\');n.1F(1V);Z n},4B:q(1V){l(c.g.4e){1V.j(\'P\').H(c.g.O)}Z 1V},1d:q(n){c.k.j(\'.4k\').1F(n)},5W:q(L){f 7C=[\'4D\',\'1M\',\'3d\',\'99\',\'9a\',\'9b\',\'9c\',\'9d\',\'9e\',\'9f\',\'9g\',\'9h\',\'9i\',\'6a\',\'9j\',\'9k\',\'3c\',\'4G\',\'9l\',\'5t\',\'9m\',\'9n\',\'7n\',\'9o\',\'7k\',\'5p\',\'9p\',\'9q\',\'9r\',\'9s\',];l(4L.9t(L,7C)>0){Z L}13{Z\'\'}},3V:q(i){Z E.6m(E.1n()*i)},3Q:q(){c.k.j(\'.2t\').34(c.g.3f)},5f:q(){f h=c;l(c.g.3f!=1W&&c.g.3f!=\'\'&&h.g.2z){2D(h.g.4i){J\'4j\':3a:h.k.j(\'.2t\').9u(2u);K;J\'r\':J\'2d\':h.k.j(\'.2t\').I({r:0},2u,\'3d\');K;J\'7D\':K}}},7w:q(){f h=c;2D(h.g.4i){J\'4j\':3a:c.k.j(\'.2t\').4j(1L,q(){h.3Q()});K;J\'r\':J\'2d\':f 2w=(h.g.4i==\'r\')?-(h.k.j(\'.2t\').C()):(h.k.j(\'.2t\').C());h.k.j(\'.2t\').I({r:2w},2u,\'3d\',q(){h.3Q()});K;J\'7D\':h.3Q();K}},6k:q(){f h=c;l(h.g.2Z){h.k.3s(q(){l(h.g.2Z)h.g.2X=S;l(!h.g.3l){h.4M()}h.42(\'3s\');h.2F(S)},q(){l(h.g.2Z)h.g.2X=R;l(h.g.2b==0&&!h.g.19&&!h.g.2A){h.3P()}13 l(!h.g.2A){h.44()}h.42(\'7E\');h.2F(S);l(!h.g.19&&h.g.1m.1z>1){h.31=3R(q(){h.41()},h.g.2L-h.g.2b);h.k.j(\'.1a\').U({\'W\':h.g.1s});h.k.j(\'.1K a\').U({\'1O\':h.g.1N})}})}13{h.k.3s(q(){h.42(\'3s\')},q(){h.42(\'7E\')})}},42:q(4q){f h=c;f 2q=h.g.2q;f 2a=h.g.2a;f 2r=h.g.2r;l(4q==\'3s\'){l(h.g.2p){l(h.g.48){h.k.j(\'.1B\').T().w({V:0}).I({V:2q},2a)}l(h.g.49){h.k.j(\'.2c, .23\').T().w({V:0}).I({V:2q},2a)}l(h.g.2M&&!h.g.2R){h.k.j(\'.29\').1R().T().w({V:0}).I({V:2q},2a)}l(h.g.2Y){h.k.j(\'.2x\').1R().T().w({V:0}).I({V:2q},2a)}}l(h.g.2M&&!h.g.2R&&!h.g.2p){h.k.j(\'.29\').1R().I({V:1},2a)}l(h.g.2Y&&!h.g.2p){h.k.j(\'.2x\').1R().I({V:1},2a)}}13{l(h.g.2p){l(h.g.48){h.k.j(\'.1B\').3N("2k",[]).T().w({V:2q}).I({V:0},2r)}l(h.g.49){h.k.j(\'.2c, .23\').3N("2k",[]).T().w({V:2q}).I({V:0},2r)}l(h.g.2M&&!h.g.2R){h.k.j(\'.29\').1R().w({V:2q}).I({V:0},2r)}l(h.g.2Y){h.k.j(\'.2x\').1R().w({V:2q}).I({V:0},2r)}}l(h.g.2M&&!h.g.2R&&!h.g.2p){h.k.j(\'.29\').1R().I({V:0.3},2r)}l(h.g.2Y&&!h.g.2p){h.k.j(\'.2x\').1R().I({V:0.3},2r)}}},2F:q(9v){f h=c;9w(h.31)},1Y:q(){l(c.g.1N!=\'#\'&&c.g.1N!=\'\'){c.k.j(\'.1K a\').U({\'1O\':c.g.1N,\'26\':c.g.3g})}13{c.k.j(\'.1K a\').9x(\'1O\')}},2p:q(){c.k.j(\'.1B\').1T(0,0);c.k.j(\'.2c\').1T(0,0);c.k.j(\'.23\').1T(0,0);c.k.j(\'.29\').1T(0,0);c.k.j(\'.2x\').1T(0,0)},6b:q(){f h=c;f 29=$(\'<a 1O="#" 1u="29">2M</a>\');h.k.1F(29);f 2w=(h.g.B-29.C())/2;f 3C=0;l(h.g.2Y)2w-=25;l(h.g.51==h.g.4Z)3C=29.C()+5;f 2l={r:2w};2D(h.g.4Z){J\'7F\':2l={r:5+3C,s:30};K;J\'7G\':2l={2d:5+3C,s:30};K;J\'7H\':2l={r:5+3C,3b:5,s:\'36\'};K;J\'7I\':2l={2d:5+3C,3b:5,s:\'36\'};K}29.w(2l).I({V:0.3},h.g.2a);$(5u).9y(q(e){f 7J=(e.3D?e.3D:e.9z);l(7J==27)$(\'#4N\').5v(\'2O\')});f 5w=$(\'.k\').3r().s;f 2w=$(\'.k\').3r().r;h.k.j(\'.29\').2O(q(){l(h.g.2R)Z R;h.g.2R=S;$(c).1R().I({V:0},h.g.2r);f 1p=$(\'<1p 4p="4N"></1p>\').H($(5u).H()).1q().1T(h.g.2a,0.98);f 7K=(($(32).H()-$(\'.k\').H())/2)+$(5u).9A();f 7L=($(32).C()-$(\'.k\').C())/2;h.k.7M(\'<1p 4p="4O"></1p>\');$(\'55\').7N(1p);$(\'55\').7N(h.k);h.k.w({\'s\':5w,\'r\':2w,\'2B\':\'54\',\'z-5S\':9B}).I({\'s\':7K,\'r\':7L},9C,\'3c\');$(\'#4O\').C($(\'.k\').C()).H($(\'.k\').H()).w({\'4z\':\'4P\'}).1T(2Q,0.3);Z R});$(\'#4N\').9D(\'2O\',q(){l($(c).9E(\'7O\'))Z R;h.g.2R=R;$(c).3n(\'7O\');l(!h.g.2p)h.k.j(\'.29\').I({V:0.3},1L);h.k.1R().I({\'s\':5w,\'r\':2w},1L,\'3c\',q(){$(\'#4O\').7M(h.k);$(c).w({\'2B\':\'9F\',\'s\':0,\'r\':0});$(\'#4O\').28()});$(\'#4N\').1T(h.g.2r,0,q(){$(c).28()});Z R})},6c:q(){f h=c;f 2x=$(\'<a 1O="#" 1u="2x">7P</a>\');h.k.1F(2x);f 2w=(h.g.B-2x.C())/2;l(h.g.2M)2w+=25;f 2l={r:2w};2D(h.g.51){J\'7F\':2l={r:5,s:30};K;J\'7G\':2l={2d:5,s:30};K;J\'7H\':2l={r:5,3b:5,s:\'36\'};K;J\'7I\':2l={2d:5,3b:5,s:\'36\'};K}2x.w(2l).I({V:0.3},h.g.2a);2x.2O(q(){l(!h.g.2A){$(c).34(\'9G\');$(c).1T(1v,0.5).1T(1v,1);$(c).3n(\'7Q\');h.4M();h.g.2A=S;h.2F(S)}13{l(!h.g.19&&!h.k.j(\'.1E\').5V(\':9H\')){h.g.2b=0}13{h.44()}l(!h.g.1E)h.44();h.g.2A=R;$(c).34(\'7P\');$(c).1T(1v,0.5).1T(1v,1);$(c).5c(\'7Q\');l(!h.g.2Z){h.2F(S);l(!h.g.19&&h.g.1m.1z>1){h.31=3R(q(){h.41()},h.g.2L-h.g.2b);h.k.j(\'.1a\').U({\'W\':h.g.1s});h.k.j(\'.1K a\').U({\'1O\':h.g.1N})}}}Z R})},5x:q(3L){f 4l=0,5y;1h(5y 7R 3L){l(3L.9I(5y))4l++}Z 4l},6d:q(){f h=c;f 1E=$(\'<1p 1u="1E"></1p>\');h.k.1F(1E);l(h.5x(h.g.2s)==0){l(3t(1E.w(\'C\'))>0){h.g.2s.C=3t(1E.w(\'C\'))}13{h.g.2s={C:h.g.B,H:5}}}l(h.5x(h.g.2s)>0&&h.g.2s.C==1W){h.g.2s.C=h.g.B}1E.w(h.g.2s).1q()},7S:q(){f h=c;l(h.g.2X||h.g.2A||h.g.3k||!h.g.1E)Z R;h.k.j(\'.1E\').1q().7T().C(h.g.2s.C).I({C:\'T\'},h.g.2L,\'7U\')},5h:q(){f h=c;l(!h.g.19){h.k.j(\'.1E\').1R()}},7V:q(){f h=c;l(h.g.2X||h.g.2A||!h.g.1E)Z R;h.k.j(\'.1E\').7T().I({C:h.g.2s.C},(h.g.2L-h.g.2b),\'7U\')},6W:q(){f h=c;l(!h.g.1E)Z R;h.k.j(\'.1E\').1R().9J(2Q,q(){$(c).C(h.g.2s.C)})},3P:q(){f h=c;h.g.3l=R;f 3E=2K 5z();h.g.2b=0;h.g.4g=3E.5A();h.7S()},4M:q(){f h=c;l(h.g.3l)Z R;h.g.3l=S;f 3E=2K 5z();h.g.2b+=3E.5A()-h.g.4g;h.5h()},44:q(){f h=c;h.g.3l=R;f 3E=2K 5z();h.g.4g=3E.5A();h.7V()},6e:q(){f h=c;$(32).9K(q(e){l(e.3D==39||e.3D==40){h.k.j(\'.23\').5v(\'2O\')}13 l(e.3D==37||e.3D==38){h.k.j(\'.2c\').5v(\'2O\')}})},4J:q(D){f n=$(\'<1p 1u="n"></1p>\');n.w({\'r\':D.r,\'s\':D.s,\'C\':D.C,\'H\':D.H,\'4z-1K\':\'5X(\'+D.1K+\')\',\'4z-2B\':D.2B.r+\'11 \'+D.2B.s+\'11\'});Z n},7r:q(45){f h=c;f 4Q=2K 4n();f 4R;5B(45.1z>0){4R=h.7W(0,45.1z-1);4Q[4Q.1z]=45[4R];45.9L(4R,1)}Z 4Q},7W:q(5C,7X){f 4S;9M 4S=E.1n();5B(4S==1);Z(4S*(7X-5C+1)+5C)|0},6j:q(){f h=c;$(32).4u(\'9N\',q(){h.g.3k=S;h.4M();h.2F(S)});$(32).4u(\'2M\',q(){l(h.g.1m.1z>1){h.g.3k=R;l(h.g.2b==0){h.3P()}13{h.44()}l(h.g.2b<=h.g.2L){h.2F(S);h.31=3R(q(){h.41()},h.g.2L-h.g.2b);h.k.j(\'.1a\').U({\'W\':h.g.1s});h.k.j(\'.1K a\').U({\'1O\':h.g.1N})}}})}});$.2o.3W=q(3F){f w={};f 5D=[\'9O\',\'9P\',\'o\',\'9Q\'];1h(f 2y 7R 3F){1h(f i=0;i<5D.1z;i++)w[\'-\'+5D[i]+\'-\'+2y]=3F[2y];w[2y]=3F[2y]}c.w(w);Z c};f 46=\'9R\';$.2o.2h=q(2V){f 2e=$(c).w(\'1J\')||\'4P\';l(2m 2V==\'1W\'){l(2e){f m=2e.4T(/2h\\(([^)]+)\\)/);l(m&&m[1]){Z m[1]}}Z 0}f m=2V.7Y().4T(/^(-?\\d+(\\.\\d+)?)(.+)?$/);l(m){l(m[3])46=m[3];$(c).w(\'1J\',2e.7Z(/4P|2h\\([^)]*\\)/,\'\')+\'2h(\'+m[1]+46+\')\')}Z c};$.2o.2W=q(2V,4x,D){f 2e=$(c).w(\'1J\');l(2m 2V==\'1W\'){l(2e){f m=2e.4T(/2W\\(([^)]+)\\)/);l(m&&m[1]){Z m[1]}}Z 1}$(c).w(\'1J\',2e.7Z(/4P|2W\\([^)]*\\)/,\'\')+\'2W(\'+2V+\')\');Z c};f 81=$.2k.53.82;$.2k.53.82=q(){l(c.2y==\'2h\'){Z 3m($(c.4U).2h())}13 l(c.2y==\'2W\'){Z 3m($(c.4U).2W())}Z 81.5E(c,5F)};$.2k.83.2h=q(2k){$(2k.4U).2h(2k.84+46)};$.2k.83.2W=q(2k){$(2k.4U).2W(2k.84)};f 85=$.2o.I;$.2o.I=q(2y){l(2m 2y[\'2h\']!=\'1W\'){f m=2y[\'2h\'].7Y().4T(/^(([+-]=)?(-?\\d+(\\.\\d+)?))(.+)?$/);l(m&&m[5]){46=m[5]}2y[\'2h\']=m[1]}Z 85.5E(c,5F)};q 86(87){f 88=[\'1J\',\'9S\',\'9T\',\'9U\',\'9V\'];f p;5B(p=88.9W()){l(2m 87.2e[p]!=\'1W\'){Z p}}Z\'1J\'};f 2J=1w;f 89=$.2o.w;$.2o.w=q(2n,2V){l(2J===1w){l(2m $.8a!=\'1W\'){2J=$.8a}13 l(2m $.3F!=\'1W\'){2J=$.3F}13{2J={}}}l(2m 2J[\'1J\']==\'1W\'&&(2n==\'1J\'||(2m 2n==\'8b\'&&2m 2n[\'1J\']!=\'1W\'))){2J[\'1J\']=86(c.8c(0))}l(2J[\'1J\']!=\'1J\'){l(2n==\'1J\'){2n=2J[\'1J\'];l(2m 2V==\'1W\'&&4L.2e){Z 4L.2e(c.8c(0),2n)}}13 l(2m 2n==\'8b\'&&2m 2n[\'1J\']!=\'1W\'){2n[2J[\'1J\']]=2n[\'1J\'];9X 2n[\'1J\']}}Z 89.5E(c,5F)}})(4L);', 62, 618, '||||||||||||this|||var|settings|self||find|box_skitter|if||box_clone|||function|left|top|total||width_box|css||||height_box|width_skitter|width|options|Math|time_animate|delay_time|height|animate|case|break|easing|ceil|easing_default|height_skitter|img|callback|false|true|show|attr|opacity|src|col_t|_btop|return||px||else|col|||_bleft|_vleft|is_animating|image_main|delay|_vtop|addBoxClone|init_top|velocity|init_left|for|image_old|division_h|finishAnimation|setActualLevel|images_links|random|_vleft_image|div|hide|_vtop_image|image_atual|division_w|class|100|null|getBoxClone|image_i|length|size_box|info_slide|_ileftc|radius|progressbar|append|_ftop|_ileft|_itop|transform|image|200|easeOutQuad|link_atual|href|extend|class_info|stop|500|fadeTo|getBoxCloneImgOld|img_clone|undefined|image_number|setLinkAtual|_itopc||box_clone1|box_clone2|next_button|animation_type||target||remove|focus_button|interval_in_elements|elapsedTime|prev_button|right|style|box_clone_next|_fleft|rotate|box_clone_next1|box_clone_next2|fx|cssPosition|typeof|arg|fn|hideTools|opacity_elements|interval_out_elements|progressbar_css|label_skitter|400|direction|_left|play_pause_button|prop|label|is_paused|position|ul|switch|loading|clearTimer|100px|easing_old|easing_new|_propsObj|new|interval|focus|info_slide_thumb|click|number_skitter|300|foucs_active|span|link|_fleftc|val|scale|is_hover_box_skitter|controls|stop_over||timer|window|image_number_select|html|new_x|auto||||default|bottom|easeOutExpo|easeInOutQuad|sk|label_atual|target_atual|animateNumberOut|xml|preview|is_blur|is_paused_time|parseFloat|addClass|rel|text|li|offset|hover|parseInt|_i_animation|_ftopc|_itopn|_ileftn|_ftopn|_fleftn|spread|pow|_space|keyCode|date|props|skitter|each|dots|width_label|auto_play|obj|w_info_slide_thumb|queue|fadeIn|startTime|setValueBoxText|setTimeout|animations_functions|animationDirection|700|getRandom|css3|line|box_clone_main|box_clone_container||completeMove|setHideTools||resumeTime|arrayOrigem|rotateUnits|animation|numbers|navigation|random_ia|thumbs|animateNumberOver|animateNumberActive|fullscreen|center|timeStart|with_animations|labelAnimation|slideUp|container_skitter|size|initial_select_class|Array|dimension_thumb|id|type|width_info_slide|width_value|jumpToImage|bind|imageNumber|preview_slide|duration|image_loading|background|img_link|resizeImage|nextImage|easeInQuad|delay_type|sequence|easeInOutExpo|order|mod|getBoxCloneBackground|border|jQuery|pauseTime|overlay_skitter|mark_position|none|arrayDestino|indice|numRandom|match|elem|_self|onLoad|imageSwitched|numbers_align|focus_position||controls_position|theme|prototype|absolute|body|addImageLink|image_n_|_|width_image|x_value|info_slide_dots|removeClass|mouseover|init_pause|showBoxText|mouseOverInit|pauseProgressBar|animationCube|animationCubeStop|animationShowBars|animationTube|animationBlindDimension|animationDirectionBars|animationSwapBars|easeOutBack|150|vleft|sqrt|easeOutCirc|document|trigger|_top|objectSize|key|Date|getTime|while|valorIni|prefixes|apply|arguments|skitters|data|skitter_number|push|defaults|show_randomly|enable_navigation_keys|mouseOverButton|mouseOutButton|structure|number|setup|index|1000|or|is|getEasing|url|container_thumbs|copy_info_slide|y_value|novo_width|15px|sort|mouseleave|width_preview_ul|_left_info|_left_image|_left_preview|_left_ul|easeOutSine|focusSkitter|setControls|addProgressBar|enableNavigationKeys|loadImages|self_il|start|images|windowFocusOut|stopOnMouseOver|isFunction|floor|cube|cubeRandom|block|cubeStop|cubeStopRandom|cubeHide|cubeSize|horizontal|showBars|showBarsRandom|tube|fade|fadeFour|paralell|blind|blindHeight|blindWidth|directionTop|directionBottom|directionRight|directionLeft|cubeSpread|glassCube|glassBlock|circles|circlesInside|circlesRotate|cubeShow|upBars|downBars|hideBars|swapBars|swapBarsBack|swapBlocks|cut|hideProgressBar|random_id|total_with_animations|animationBlock||animationCubeHide|animationCubeSize|animationHorizontal|animationFade||animationFadeFour|animationParalell|animationBlind|animationCubeSpread|animationCubeJelly|animationGlassCube|animationGlassBlock|animationCircles|animationCirclesInside|animationCirclesRotate|animationCubeShow|animationHideBars|animationSwapBlocks|animationCut|easeInBack|20px|600|easeOutElastic|800|1400|zebra|shuffleArray|_rotate|20deg|setImageLink|addClassNumber|hideBoxText|increasingImage|name_image|link_image|label_image|target_link|easing_accepts|fixed|out|leftTop|rightTop|leftBottom|rightBottom|code|_topFinal|_leftFinal|before|prepend|finish_overlay_skitter|pause|play_button|in|startProgressBar|dequeue|linear|resumeProgressBar|randomUnique|valorFim|toString|replace||curProxied|cur|step|now|animateProxied|getTransformProperty|element|properties|proxied|cssProps|object|get|2500|time_interval|max_number_height|prev|next|overflown|hidden|console|warn|Width|Skitter|Slideshow|ajax|GET|async|dataType|success|slide|json|label_text|clone|outerWidth|mousemove|pageX|pageY|scroll_thumbs|box_scroll_thumbs|5px|0px|eq|mouseenter|image_current_preview|preview_slide_current|Loading|9999em|Image|load|error|color|white|black|Error|One|more|were|not|found|1500|randomSmart||cubeJelly|1200|120|browser|mozilla|last|900||easeInCubic|easeOutCubic|easeInOutCubic|easeInQuart|easeOutQuart|easeInOutQuart|easeInQuint|easeOutQuint|easeInOutQuint|easeInSine|easeInOutSine|easeInExpo|easeInCirc|easeInOutCirc|easeInElastic|easeInOutElastic|easeInOutBack|easeInBounce|easeOutBounce|easeInOutBounce|inArray|slideDown|force|clearInterval|removeAttr|keypress|which|scrollTop|9999|2000|live|hasClass|relative|play|visible|hasOwnProperty|fadeOut|keydown|splice|do|blur|moz|ms|webkit|deg|WebkitTransform|msTransform|MozTransform|OTransform|shift|delete'.split('|'), 0, {}));// JavaScript Document