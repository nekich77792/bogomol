parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fQel":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=s();return function(){var r,o=u(t);if(e){var i=u(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return n(this,r)}}function n(e,r){if(r&&("object"===t(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,f(o.key),o)}}function a(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function f(e){var r=p(e,"string");return"symbol"===t(r)?r:String(r)}function p(e,r){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,r||"default");if("object"!==t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.State=exports.R=exports.Platform=exports.MECH=exports.LiveObj=exports.LAVAMAN=exports.L=exports.JUMP=exports.Input=exports.IDLE=exports.HERO=exports.GO=exports.ENEMY1=exports.DEATH=exports.CACO=void 0;var h=a(function t(e,r){l(this,t),this.pos={x:e,y:r}}),y=exports.Platform=function(t){e(n,h);var r=o(n);function n(t,e,o){var i;return l(this,n),(i=r.call(this,t,e)).w=o,i}return a(n)}(),b=exports.R=1,x=exports.L=-1,v=exports.IDLE=0,d=exports.GO=1,m=exports.JUMP=2,O=exports.DEATH=3,w=exports.HERO=0,E=exports.ENEMY1=1,j=exports.LAVAMAN=2,P=exports.CACO=3,g=exports.MECH=4,S=exports.LiveObj=function(t){e(n,h);var r=o(n);function n(t,e,o){var i,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.65;return l(this,n),(i=r.call(this,e,o)).vel={x:0,y:0},i.speed=u,i.state=s,i.type=t,i.dir=b,i.attack=-1,i}return a(n)}(),A=exports.State=function(){function t(e){l(this,t),this.hero=new S(w,10,10,v),this.enemies=[new S(E,490,20,d),new S(E,300,100,d),new S(j,250,100,d),new S(P,480,235,d),new S(g,550,235,d,.85)],this.lvl=e}return a(t,[{key:"updateState",value:function(t){var e=t.steering;t.mouse;t.mouseChanged?this.hero.attack=0:this.hero.attack>=20?this.hero.attack=-1:this.hero.attack>=0&&this.hero.attack++;var r=this.hero.state;switch(r){case v:0!=e.x?r=d:1==e.y?(r=m,this.hero.vel.y=-8):r=v;break;case d:0==e.x?r=v:1==e.y?(r=m,this.hero.vel.y=-8):r=d}e.x>0?this.hero.dir=b:e.x<0&&(this.hero.dir=x),this.hero.state=r}}]),t}(),R=exports.Input=a(function t(){l(this,t),this.steering={x:0,y:0},this.mouse=!1,this.mouseChanged=!1});
},{}],"ItmM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=r,exports.readInput=i;var e=require("./classes"),s={w:!1,s:!1,a:!1,d:!1,space:!1},a=!1,n=!1;function r(e){e.addEventListener("keydown",u),e.addEventListener("keyup",d),e.addEventListener("mousedown",c),e.addEventListener("mouseup",t)}function t(e){a=!1}function c(e){a=!0,n=!0}function u(e){switch(e.key){case" ":s.space=!0;break;case"w":s.w=!0;break;case"s":s.s=!0;break;case"a":s.a=!0;break;case"d":s.d=!0}}function d(e){switch(e.key){case" ":s.space=!1;break;case"w":s.w=!1;break;case"s":s.s=!1;break;case"a":s.a=!1;break;case"d":s.d=!1}}function i(r){var t=new e.Input;return t.act=s.space,t.steering.y=Number(s.w)-Number(s.s),t.steering.x=Number(s.d)-Number(s.a),t.mouse=a,t.mouseChanged=n,n=!1,t}
},{"./classes":"fQel"}],"UoLN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyPhysics=a;var e=require("./classes");function r(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=t(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,y=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){y=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(y)throw s}}}}function t(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(r){var t=r.vel,n=r.pos,o=r.state,a=(r.dir,r.speed);o==e.GO?(t.x=-a,t.y+=.25,n.x+=t.x,n.y+=t.y,n.y>250&&(n.y=250,t.y=0)):o==e.DEATH&&(t.x=-.65,t.y+=.25,n.x+=t.x,n.y+=t.y)}function a(t,n){var a,s=r(t.enemies);try{for(s.s();!(a=s.n()).done;){var i=a.value;i.state!=e.DEATH&&(Math.abs(i.pos.x-t.hero.pos.x)<10&&Math.abs(i.pos.y-t.hero.pos.y)<10&&(i.state=e.DEATH,i.vel.y=-3))}}catch(v){s.e(v)}finally{s.f()}t.enemies.forEach(o);var y=t.hero,l=y.vel,u=y.pos,c=y.state;y.dir;switch(c){case e.IDLE:l.x=0;break;case e.GO:l.x=n.steering.x;break;case e.JUMP:l.x=n.steering.x}l.y+=.25,u.x+=2*l.x,u.y+=l.y,u.y>250&&(t.hero.state=0==n.steering.x?e.IDLE:e.GO,u.y=250,l.y=0);for(var f=0;f<t.lvl.length;f++){var p=t.lvl[f];u.y>p.pos.y&&u.x+5>p.pos.x&&u.x-5<p.pos.x+p.w&&u.y<p.pos.y+10&&l.y>0&&(t.hero.state=0==n.steering.x?e.IDLE:e.GO,u.y=p.pos.y,l.y=0)}}
},{"./classes":"fQel"}],"GqCh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createLvl=r;var e=require("./classes");function r(){return[new e.Platform(200,200,50),new e.Platform(250,150,50),new e.Platform(300,100,50),new e.Platform(350,50,50),new e.Platform(400,0,50)]}
},{"./classes":"fQel"}],"jPWE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=exports.default={n:0};
},{}],"knfB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawAxes=r,exports.drawSqrt=t;var e=250,o=10;function r(r){r.beginPath(),r.moveTo(0,e),r.lineTo(500,e),r.moveTo(e,0),r.lineTo(e,500),r.font="9px arial";for(var t=0;t<=25;t++){r.fillText(t,t*o+e,260)}r.strokeStyle="rgb(0, 0, 0)",r.closePath(),r.stroke()}function t(r){r.beginPath(),r.moveTo(e,e);for(var t=0;t<=25;t++){var a=Math.sqrt(t);r.lineTo(t*o+e,-a*o+e)}r.strokeStyle="rgb(255, 0, 0)",r.stroke()}
},{}],"f5wB":[function(require,module,exports) {
module.exports="ForestBoy.d03341c0.png";
},{}],"gAqn":[function(require,module,exports) {
module.exports="enemies.3a09b266.png";
},{}],"Q2Vl":[function(require,module,exports) {
module.exports="lavaman.0e9f52c3.png";
},{}],"wY0q":[function(require,module,exports) {
module.exports="cacodaemon-combined.49a16f4d.png";
},{}],"n3nE":[function(require,module,exports) {
module.exports="mech.af03dda2.png";
},{}],"eDKP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sprite=exports.Anim=void 0;var t=require("./../classes");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,o(i.key),i)}}function n(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t){var r=s(t,"string");return"symbol"===e(r)?r:String(r)}function s(t,r){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,r||"default");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}var a=exports.Sprite=function(){function e(t,i){r(this,e),this.img=t,this.anims=i,this.currentFrame=0,this.currentState}return n(e,[{key:"draw",value:function(e,r,i,n,o){this.currentState!=r&&(this.currentState=r,this.currentFrame=0);var s=o>=0?"attack":r;0==o&&(this.currentFrame=0);var a=this.anims.get(s),c=a.n,l=a.x0,f=a.y0,m=a.w,h=a.h,y=a.spriteTime,p=a.shift,v=c*y,b=l+Math.floor(this.currentFrame/y)*m;if(n==t.L){e.save(),e.strokeStyle="red",e.translate(i.x,0),e.scale(-1,1);var S=m-p,g=i.y-h,d=-m,w=h;e.drawImage(this.img,b,f,m,h,S,g,d,w),e.strokeRect(S,g,d,w),u(e,0,i.y),e.restore()}else{e.save(),e.translate(i.x,0);var x=-p,k=i.y-h,T=m,P=h;e.drawImage(this.img,b,f,m,h,x,k,T,P),e.strokeRect(x,k,T,P),u(e,0,i.y),e.restore()}this.currentFrame++,this.currentFrame%=v}}]),e}();function u(t,e,r){t.save(),t.strokeStyle="green",t.lineWidth=1,t.beginPath(),t.moveTo(e,r-20),t.lineTo(e,r+20),t.moveTo(e-20,r),t.lineTo(e+20,r),t.closePath(),t.stroke(),t.restore()}var c=exports.Anim=n(function t(e,i,n,o,s,a,u){r(this,t),this.n=e,this.x0=i,this.y0=n,this.w=o,this.shift=u||o/2,this.h=s,this.spriteTime=a});
},{"./../classes":"fQel"}],"NfpW":[function(require,module,exports) {
"use strict";function e(){}Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawPlatform=e;
},{}],"h5JB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.coords=M,exports.initRender=w,exports.loadAssets=m,exports.render=b;var e=require("./../graph"),r=u(require("./../ForestBoy.png")),t=u(require("./../enemies.png")),n=u(require("./../assets/lavaman.png")),a=u(require("./../assets/cacodaemon-combined.png")),o=u(require("./../assets/mech.png")),i=require("./../classes"),s=require("./sprite");function u(e){return e&&e.__esModule?e:{default:e}}function l(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=c(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw o}}}}function c(e,r){if(e){if("string"==typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,r):void 0}}function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}require("./../levelEditor");var p,v=new Map,d={x:250,y:0};function w(){var e=document.getElementById("tututu");(p=e.getContext("2d")).fillStyle="rgba(0, 0, 200, 0.5)"}function m(e){var r=h();v.set(e.hero,r);for(var t=0;t<e.enemies.length;t++){var n=e.enemies[t];switch(n.type){case i.ENEMY1:v.set(n,y(n));break;case i.LAVAMAN:v.set(n,A(n));break;case i.CACO:v.set(n,g(n));break;case i.MECH:v.set(n,x(n))}}}function h(){var e=new Map;e.set(i.GO,new s.Anim(6,11,43,16,17,5)),e.set(i.IDLE,new s.Anim(3,11,12,16,18,14)),e.set(i.JUMP,new s.Anim(3,59,44,16,18,10)),e.set("attack",new s.Anim(4,8,122,26,18,5,6));var t=new Image;return t.src=r.default,new s.Sprite(t,e)}function y(e){var r=new Map;r.set(i.GO,new s.Anim(4,0,0,30,15,8)),r.set(i.DEATH,new s.Anim(4,0,0,30,15,8));var n=new Image;return n.src=t.default,new s.Sprite(n,r)}function A(e){var r=new Map;r.set(i.GO,new s.Anim(50,0,0,64,64,1)),r.set(i.DEATH,new s.Anim(50,0,0,64,64,1));var t=new Image;return t.src=n.default,new s.Sprite(t,r)}function g(e){var r=new Map;r.set(i.GO,new s.Anim(90,0,0,64,64,1)),r.set(i.DEATH,new s.Anim(90,0,0,64,64,1));var t=new Image;return t.src=a.default,new s.Sprite(t,r)}function x(e){var r=new Map;r.set(i.GO,new s.Anim(54,0,0,64,64,1)),r.set(i.DEATH,new s.Anim(54,0,0,64,64,1));var t=new Image;return t.src=o.default,new s.Sprite(t,r)}function M(e,r){e.font="15px arial",e.fillText(Math.round(r.pos.x)+":"+Math.round(r.pos.y),350,470),e.fillText(Math.round(r.vel.x)+":"+Math.round(r.vel.y),350,485)}function b(r){r.hero.pos.x>d.x&&(d.x=r.hero.pos.x),r.hero.pos.x<d.x-240&&(d.x=r.hero.pos.x+240),d.y=r.hero.pos.y-250,p.clearRect(0,0,p.canvas.width,p.canvas.height),p.save(),p.translate(-(d.x-250),-d.y),M(p,r.hero),(0,e.drawAxes)(p),(0,e.drawSqrt)(p);for(var t=0;t<r.lvl.length;t++){var n=r.lvl[t];p.fillStyle="lwn",p.fillRect(n.pos.x,n.pos.y,n.w,50)}var a=r.hero,o=a.dir,i=a.pos,s=a.state,u=a.attack;v.get(r.hero).draw(p,s,i,o,u);var c,f=l(r.enemies);try{for(f.s();!(c=f.n()).done;){var w=c.value;v.get(w).draw(p,w.state,w.pos,w.dir)}}catch(m){f.e(m)}finally{f.f()}p.restore()}
},{"./../graph":"knfB","./../ForestBoy.png":"f5wB","./../enemies.png":"gAqn","./../assets/lavaman.png":"Q2Vl","./../assets/cacodaemon-combined.png":"wY0q","./../assets/mech.png":"n3nE","./../classes":"fQel","./sprite":"eDKP","./../levelEditor":"NfpW"}],"DWv3":[function(require,module,exports) {
"use strict";var e,n=require("./inputs"),r=require("./physics"),i=require("./platforms"),t=require("./classes"),a=u(require("./time")),s=require("./canvasRenderer/canvasRenderer");function u(e){return e&&e.__esModule?e:{default:e}}function o(){(0,s.initRender)(),(0,n.init)(window),c(),(0,s.loadAssets)(e)}function c(){e=new t.State((0,i.createLvl)())}function d(e){return e*(198/108*Math.pow(10,-5))}function f(){if(a.default.n%10==0)for(var n=0;n<e.enemies.length;n++){var r=e.enemies[n].pos,i=r.x;(r.y>300||i<-10)&&e.enemies.splice(n,1)}}function l(){window.requestAnimationFrame(l);var i=(0,n.readInput)(e,i);e.updateState(i),(0,r.applyPhysics)(e,i),f(),(0,s.render)(e),a.default.n++}o(),l();
},{"./inputs":"ItmM","./physics":"UoLN","./platforms":"GqCh","./classes":"fQel","./time":"jPWE","./canvasRenderer/canvasRenderer":"h5JB"}]},{},["DWv3"], null)
//# sourceMappingURL=code.cfb7dfea.js.map