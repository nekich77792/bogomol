// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"classes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.State = exports.LiveObj = exports.MECH = exports.CACO = exports.LAVAMAN = exports.ENEMY1 = exports.HERO = exports.DEATH = exports.JUMP = exports.GO = exports.IDLE = exports.L = exports.R = exports.Platform = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObj = function GameObj(x, y) {
  _classCallCheck(this, GameObj);

  this.pos = {
    x: x,
    y: y
  };
};

;

var Platform = /*#__PURE__*/function (_GameObj) {
  _inherits(Platform, _GameObj);

  var _super = _createSuper(Platform);

  function Platform(x, y, w) {
    var _this;

    _classCallCheck(this, Platform);

    _this = _super.call(this, x, y);
    _this.w = w;
    return _this;
  }

  return Platform;
}(GameObj); // --- consts ----


exports.Platform = Platform;
var R = 1;
exports.R = R;
var L = -1; //-- states -----

exports.L = L;
var IDLE = 0;
exports.IDLE = IDLE;
var GO = 1;
exports.GO = GO;
var JUMP = 2;
exports.JUMP = JUMP;
var DEATH = 3; //--- types ----

exports.DEATH = DEATH;
var HERO = 0;
exports.HERO = HERO;
var ENEMY1 = 1;
exports.ENEMY1 = ENEMY1;
var LAVAMAN = 2;
exports.LAVAMAN = LAVAMAN;
var CACO = 3;
exports.CACO = CACO;
var MECH = 4;
exports.MECH = MECH;

var LiveObj = /*#__PURE__*/function (_GameObj2) {
  _inherits(LiveObj, _GameObj2);

  var _super2 = _createSuper(LiveObj);

  function LiveObj(type, x, y) {
    var _this2;

    var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : IDLE;
    var speed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.65;

    _classCallCheck(this, LiveObj);

    _this2 = _super2.call(this, x, y);
    _this2.vel = {
      x: 0,
      y: 0
    };
    _this2.speed = speed;
    _this2.state = state;
    _this2.type = type;
    _this2.dir = R;
    _this2.attack = -1;
    return _this2;
  }

  return LiveObj;
}(GameObj);

exports.LiveObj = LiveObj;

var State = /*#__PURE__*/function () {
  function State(lvl) {
    _classCallCheck(this, State);

    this.hero = new LiveObj(HERO, 10, 10, IDLE); //this.enemy = new LiveObj(ENEMY1, 490, 20, GO);

    this.enemies = [new LiveObj(ENEMY1, 490, 20, GO), new LiveObj(ENEMY1, 300, 100, GO), new LiveObj(LAVAMAN, 250, 100, GO), new LiveObj(CACO, 480, 235, GO), new LiveObj(MECH, 550, 235, GO, 0.85)];
    this.lvl = lvl; //this.cam = {x:0,y:0}
  }

  _createClass(State, [{
    key: "updateState",
    value: function updateState(_ref) {
      var steering = _ref.steering,
          mouse = _ref.mouse,
          mouseChanged = _ref.mouseChanged;

      if (mouseChanged) {
        this.hero.attack = 0;
      } else if (this.hero.attack >= 20) {
        this.hero.attack = -1;
      } else if (this.hero.attack >= 0) {
        this.hero.attack++;
      }

      var st = this.hero.state;

      switch (st) {
        case IDLE:
          if (steering.x != 0) {
            st = GO;
          } else if (steering.y == 1) {
            st = JUMP;
            this.hero.vel.y = -8;
          } else {
            st = IDLE;
          }

          break;

        case GO:
          if (steering.x == 0) {
            st = IDLE;
          } else if (steering.y == 1) {
            st = JUMP;
            this.hero.vel.y = -8;
          } else {
            st = GO;
          }

          break;
      }

      if (steering.x > 0) {
        this.hero.dir = R;
      } else if (steering.x < 0) {
        this.hero.dir = L;
      }

      this.hero.state = st;
    }
  }]);

  return State;
}();

exports.State = State;
;

var Input = function Input() {
  _classCallCheck(this, Input);

  this.steering = {
    x: 0,
    y: 0
  };
  this.mouse = false;
  this.mouseChanged = false;
};

exports.Input = Input;
},{}],"inputs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.readInput = readInput;

var _classes = require("./classes");

var keyboard = {
  "w": false,
  "s": false,
  "a": false,
  "d": false,
  "space": false
};
var mouse = false;
var mouseChanged = false;

function init(w) {
  w.addEventListener('keydown', onKeyPress);
  w.addEventListener('keyup', onKeyUp);
  w.addEventListener('mousedown', onMouseDown);
  w.addEventListener('mouseup', onMouseUp);
}

function onMouseUp(e) {
  mouse = false;
}

function onMouseDown(e) {
  mouse = true;
  mouseChanged = true;
}

function onKeyPress(e) {
  switch (e.key) {
    case " ":
      keyboard.space = true;
      break;

    case "w":
      keyboard.w = true;
      break;

    case "s":
      keyboard.s = true;
      break;

    case "a":
      keyboard.a = true;
      break;

    case "d":
      keyboard.d = true;
      break;
  }
}

function onKeyUp(e) {
  switch (e.key) {
    case " ":
      keyboard.space = false;
      break;

    case "w":
      keyboard.w = false;
      break;

    case "s":
      keyboard.s = false;
      break;

    case "a":
      keyboard.a = false;
      break;

    case "d":
      keyboard.d = false;
      break;
  }
}

function readInput(state) {
  var input = new _classes.Input();
  input.act = keyboard.space;
  input.steering.y = Number(keyboard.w) - Number(keyboard.s);
  input.steering.x = Number(keyboard.d) - Number(keyboard.a);
  input.mouse = mouse;
  input.mouseChanged = mouseChanged;
  mouseChanged = false; // ЗЛО!

  return input;
}
},{"./classes":"classes.js"}],"physics.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPhysics = applyPhysics;

var _classes = require("./classes");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//blabla
function applyEnemyPhysics(_ref) {
  var vel = _ref.vel,
      pos = _ref.pos,
      state = _ref.state,
      dir = _ref.dir,
      speed = _ref.speed;

  if (state == _classes.GO) {
    vel.x = -speed;
    vel.y += 0.25;
    pos.x += vel.x;
    pos.y += vel.y;

    if (pos.y > 250) {
      pos.y = 250;
      vel.y = 0;
    }
  } else if (state == _classes.DEATH) {
    vel.x = -0.65;
    vel.y += 0.25;
    pos.x += vel.x;
    pos.y += vel.y;
  }
}

function applyPhysics(s, input) {
  var _iterator = _createForOfIteratorHelper(s.enemies),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var enemy = _step.value;
      if (enemy.state == _classes.DEATH) continue;

      if (Math.abs(enemy.pos.x - s.hero.pos.x) < 10 && Math.abs(enemy.pos.y - s.hero.pos.y) < 10) {
        enemy.state = _classes.DEATH;
        enemy.vel.y = -3;
      }
    } // enemies physics

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  s.enemies.forEach(applyEnemyPhysics); // hero physics

  var _s$hero = s.hero,
      vel = _s$hero.vel,
      pos = _s$hero.pos,
      state = _s$hero.state,
      dir = _s$hero.dir;

  switch (state) {
    case _classes.IDLE:
      vel.x = 0;
      break;

    case _classes.GO:
      vel.x = input.steering.x;
      break;

    case _classes.JUMP:
      vel.x = input.steering.x;

    default:
      break;
  }

  vel.y += 0.25;
  pos.x += vel.x * 2;
  pos.y += vel.y; // collistion with gnd

  if (pos.y > 250) {
    s.hero.state = input.steering.x == 0 ? _classes.IDLE : _classes.GO;
    pos.y = 250;
    vel.y = 0;
  }

  for (var i = 0; i < s.lvl.length; i++) {
    var p = s.lvl[i];

    if (pos.y > p.pos.y && pos.x + 5 > p.pos.x && pos.x - 5 < p.pos.x + p.w && pos.y < p.pos.y + 10) {
      if (vel.y > 0) {
        s.hero.state = input.steering.x == 0 ? _classes.IDLE : _classes.GO;
        pos.y = p.pos.y;
        vel.y = 0;
      }
    }
  }
}
},{"./classes":"classes.js"}],"platforms.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLvl = createLvl;

var _classes = require("./classes");

function createLvl() {
  var w = 50;
  return [new _classes.Platform(200, 200, w), new _classes.Platform(250, 150, w), new _classes.Platform(300, 100, w), new _classes.Platform(350, 50, w), new _classes.Platform(400, 0, w)];
}
},{"./classes":"classes.js"}],"time.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  n: 0
}; // количество дров прошедших со старта игры

exports.default = _default;
},{}],"graph.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawAxes = drawAxes;
exports.drawSqrt = drawSqrt;
var shift = 250;
var step = 10;

function drawAxes(ctx) {
  ctx.beginPath();
  ctx.moveTo(0, shift);
  ctx.lineTo(500, shift);
  ctx.moveTo(shift, 0);
  ctx.lineTo(shift, 500);
  ctx.font = '9px arial';

  for (var x = 0; x <= 25; x++) {
    var y = 260; //ctx.moveTo(x*step + shift, y);

    ctx.fillText(x, x * step + shift, y);
  }

  ctx.strokeStyle = 'rgb(0, 0, 0)';
  ctx.closePath();
  ctx.stroke();
}

function drawSqrt(ctx) {
  ctx.beginPath();
  ctx.moveTo(shift, shift);

  for (var x = 0; x <= 25; x++) {
    var y = Math.sqrt(x);
    ctx.lineTo(x * step + shift, -y * step + shift);
  }

  ctx.strokeStyle = 'rgb(255, 0, 0)'; //ctx.closePath();

  ctx.stroke();
}
},{}],"ForestBoy.png":[function(require,module,exports) {
module.exports = "/ForestBoy.9ce9ce9f.png";
},{}],"enemies.png":[function(require,module,exports) {
module.exports = "/enemies.b6a10c51.png";
},{}],"assets/lavaman.png":[function(require,module,exports) {
module.exports = "/lavaman.25e0ec4d.png";
},{}],"assets/cacodaemon-combined.png":[function(require,module,exports) {
module.exports = "/cacodaemon-combined.7da1f6e6.png";
},{}],"assets/mech.png":[function(require,module,exports) {
module.exports = "/mech.7979e1e1.png";
},{}],"canvasRenderer/sprite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Anim = exports.Sprite = void 0;

var _classes = require("./../classes");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite = /*#__PURE__*/function () {
  function Sprite(img, anims) {
    _classCallCheck(this, Sprite);

    this.img = img;
    this.anims = anims;
    this.currentFrame = 0;
    this.currentState; //this.w = 16
    //this.h = 24
  }

  _createClass(Sprite, [{
    key: "draw",
    value: function draw(ctx, state, pos, dir, attack) {
      if (this.currentState != state) {
        this.currentState = state;
        this.currentFrame = 0;
      } //console.log(attack)


      var animKey = attack >= 0 ? "attack" : state;
      if (attack == 0) this.currentFrame = 0;

      var _this$anims$get = this.anims.get(animKey),
          n = _this$anims$get.n,
          x0 = _this$anims$get.x0,
          y0 = _this$anims$get.y0,
          w = _this$anims$get.w,
          h = _this$anims$get.h,
          spriteTime = _this$anims$get.spriteTime,
          shift = _this$anims$get.shift; //console.log(shift)


      var allFrames = n * spriteTime;
      var currN = Math.floor(this.currentFrame / spriteTime);
      var srcX = x0 + currN * w; //console.log(vel)

      if (dir == _classes.L) {
        ctx.save();
        ctx.strokeStyle = 'red';
        ctx.translate(pos.x, 0);
        ctx.scale(-1, 1);
        var xx = w - shift,
            yy = pos.y - h,
            ww = -w,
            hh = h;
        ctx.drawImage(this.img, srcX, y0, w, h, xx, yy, ww, hh);
        ctx.strokeRect(xx, yy, ww, hh);
        drawOrigin(ctx, 0, pos.y);
        ctx.restore();
      } else {
        ctx.save();
        ctx.translate(pos.x, 0);

        var _xx = -shift,
            _yy = pos.y - h,
            _ww = w,
            _hh = h;

        ctx.drawImage(this.img, srcX, y0, w, h, _xx, //-shift,//pos.x - shift, 
        _yy, _ww, _hh);
        ctx.strokeRect(_xx, _yy, _ww, _hh);
        drawOrigin(ctx, 0, pos.y);
        ctx.restore();
      }

      this.currentFrame++;
      this.currentFrame %= allFrames;
    }
  }]);

  return Sprite;
}();

exports.Sprite = Sprite;

function drawOrigin(ctx, x, y) {
  var d = 20;
  ctx.save();
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x, y - d);
  ctx.lineTo(x, y + d);
  ctx.moveTo(x - d, y);
  ctx.lineTo(x + d, y);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

var Anim = function Anim(n, x0, y0, w, h, spriteTime, shift) {
  _classCallCheck(this, Anim);

  this.n = n;
  this.x0 = x0;
  this.y0 = y0;
  this.w = w;
  this.shift = shift || w / 2;
  this.h = h;
  this.spriteTime = spriteTime;
};

exports.Anim = Anim;
},{"./../classes":"classes.js"}],"levelEditor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawPlatform = drawPlatform;

function drawPlatform() {}
},{}],"canvasRenderer/canvasRenderer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initRender = initRender;
exports.loadAssets = loadAssets;
exports.coords = coords;
exports.render = render;

var _graph = require("./../graph");

var _ForestBoy = _interopRequireDefault(require("./../ForestBoy.png"));

var _enemies = _interopRequireDefault(require("./../enemies.png"));

var _lavaman = _interopRequireDefault(require("./../assets/lavaman.png"));

var _cacodaemonCombined = _interopRequireDefault(require("./../assets/cacodaemon-combined.png"));

var _mech = _interopRequireDefault(require("./../assets/mech.png"));

var _classes = require("./../classes");

var _sprite = require("./sprite");

require("./../levelEditor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// 22:36 воры уехали...
var sprites = new Map();
var cam = {
  x: 250,
  y: 0
};
var ctx;

function initRender() {
  var canvas = document.getElementById('tututu');
  ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
}

function loadAssets(state) {
  // HERO
  var heroSprite = createHeroSprite();
  sprites.set(state.hero, heroSprite); // ENEMY1
  //const enemy = createEnemy1Sprite();

  for (var i = 0; i < state.enemies.length; i++) {
    var enemy = state.enemies[i];

    switch (enemy.type) {
      case _classes.ENEMY1:
        sprites.set(enemy, createEnemy1Sprite(enemy));
        break;

      case _classes.LAVAMAN:
        sprites.set(enemy, createLavamanSprite(enemy));
        break;

      case _classes.CACO:
        sprites.set(enemy, createCacoSprite(enemy));
        break;

      case _classes.MECH:
        sprites.set(enemy, createMechSprite(enemy));
        break;
    }
  } //sprites.set(ENEMY1, enemy);

}

function createHeroSprite() {
  var anims = new Map(); //n, x0, y0, w, h,spriteTime , shift

  anims.set(_classes.GO, new _sprite.Anim(6, 11, 43, 16, 17, 5));
  anims.set(_classes.IDLE, new _sprite.Anim(3, 11, 12, 16, 18, 14));
  anims.set(_classes.JUMP, new _sprite.Anim(3, 59, 44, 16, 18, 10));
  anims.set("attack", new _sprite.Anim(4, 8, 122, 26, 18, 5, 6));
  var heroImage = new Image();
  heroImage.src = _ForestBoy.default; //console.log (forestboy);

  return new _sprite.Sprite(heroImage, anims);
}

function createEnemy1Sprite(enemy) {
  var anims = new Map(); //n, x0, y0, w, h,spriteTime 

  anims.set(_classes.GO, new _sprite.Anim(4, 0, 0, 30, 15, 8));
  anims.set(_classes.DEATH, new _sprite.Anim(4, 0, 0, 30, 15, 8)); //	anims.set(IDLE, new Anim(3, 11, 12, 16, 18, 14))
  //	anims.set(JUMP, new Anim(3, 59, 44, 16, 18, 10))

  var enemyImage = new Image();
  enemyImage.src = _enemies.default;
  return new _sprite.Sprite(enemyImage, anims);
}

function createLavamanSprite(enemy) {
  var anims = new Map(); //n, x0, y0, w, h,spriteTime 

  anims.set(_classes.GO, new _sprite.Anim(50, 0, 0, 64, 64, 1));
  anims.set(_classes.DEATH, new _sprite.Anim(50, 0, 0, 64, 64, 1)); //	anims.set(IDLE, new Anim(3, 11, 12, 16, 18, 14))
  //	anims.set(JUMP, new Anim(3, 59, 44, 16, 18, 10))

  var lavaImage = new Image();
  lavaImage.src = _lavaman.default;
  return new _sprite.Sprite(lavaImage, anims);
}

function createCacoSprite(enemy) {
  var anims = new Map(); //n, x0, y0, w, h,spriteTime 

  anims.set(_classes.GO, new _sprite.Anim(90, 0, 0, 64, 64, 1));
  anims.set(_classes.DEATH, new _sprite.Anim(90, 0, 0, 64, 64, 1)); //	anims.set(IDLE, new Anim(3, 11, 12, 16, 18, 14))
  //	anims.set(JUMP, new Anim(3, 59, 44, 16, 18, 10))

  var cacoImage = new Image();
  cacoImage.src = _cacodaemonCombined.default;
  return new _sprite.Sprite(cacoImage, anims);
}

function createMechSprite(enemy) {
  var anims = new Map(); //n, x0, y0, w, h,spriteTime 

  anims.set(_classes.GO, new _sprite.Anim(54, 0, 0, 64, 64, 1));
  anims.set(_classes.DEATH, new _sprite.Anim(54, 0, 0, 64, 64, 1)); //	anims.set(IDLE, new Anim(3, 11, 12, 16, 18, 14))
  //	anims.set(JUMP, new Anim(3, 59, 44, 16, 18, 10))

  var mechImage = new Image();
  mechImage.src = _mech.default;
  return new _sprite.Sprite(mechImage, anims);
}

function coords(ctx, hero) {
  ctx.font = '15px arial';
  ctx.fillText(Math.round(hero.pos.x) + ':' + Math.round(hero.pos.y), 350, 470);
  ctx.fillText(Math.round(hero.vel.x) + ':' + Math.round(hero.vel.y), 350, 485);
}

function render(state) {
  //console.log(state.hero.x;
  //----- camera ---
  if (state.hero.pos.x > cam.x) {
    cam.x = state.hero.pos.x;
  }

  if (state.hero.pos.x < cam.x - 240) {
    cam.x = state.hero.pos.x + 240;
  }

  cam.y = state.hero.pos.y - 250;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.save();
  ctx.translate(-(cam.x - 250), -cam.y);
  coords(ctx, state.hero);
  (0, _graph.drawAxes)(ctx);
  (0, _graph.drawSqrt)(ctx);

  for (var i = 0; i < state.lvl.length; i++) {
    var p = state.lvl[i]; //ctx.fillStyle = 'rgb(200, 150, 150)'

    ctx.fillStyle = 'lwn';
    ctx.fillRect(p.pos.x, p.pos.y, p.w, 50);
  } //-- hero -------------


  var _state$hero = state.hero,
      dir = _state$hero.dir,
      pos = _state$hero.pos,
      st = _state$hero.state,
      attack = _state$hero.attack;
  sprites.get(state.hero).draw(ctx, st, pos, dir, attack); //-- enemy ------------

  var _iterator = _createForOfIteratorHelper(state.enemies),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var liveObject = _step.value;
      //console.log(liveObject)
      var sprite = sprites.get(liveObject);
      sprite.draw(ctx, liveObject.state, liveObject.pos, liveObject.dir);
    } //shadowPlarform();

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ctx.restore();
}
},{"./../graph":"graph.js","./../ForestBoy.png":"ForestBoy.png","./../enemies.png":"enemies.png","./../assets/lavaman.png":"assets/lavaman.png","./../assets/cacodaemon-combined.png":"assets/cacodaemon-combined.png","./../assets/mech.png":"assets/mech.png","./../classes":"classes.js","./sprite":"canvasRenderer/sprite.js","./../levelEditor":"levelEditor.js"}],"code.js":[function(require,module,exports) {
"use strict";

var _inputs = require("./inputs");

var _physics = require("./physics");

var _platforms = require("./platforms");

var _classes = require("./classes");

var _time = _interopRequireDefault(require("./time"));

var _canvasRenderer = require("./canvasRenderer/canvasRenderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state; // --- init -----------------

function init() {
  (0, _canvasRenderer.initRender)();
  (0, _inputs.init)(window);
  initState();
  (0, _canvasRenderer.loadAssets)(state);
}

function initState() {
  state = new _classes.State((0, _platforms.createLvl)());
}

; // ---  update ----

function pxToKm(y) {
  return y * (198 / 108 * Math.pow(10, -5));
}

function garbageCollector() {
  if (_time.default.n % 10 != 0) return; // hразряжаем

  for (var i = 0; i < state.enemies.length; i++) {
    var _state$enemies$i$pos = state.enemies[i].pos,
        x = _state$enemies$i$pos.x,
        y = _state$enemies$i$pos.y;

    if (y > 300 || x < -10) {
      //delete state.enemies[i];
      state.enemies.splice(i, 1);
    }
  }
}

function loop() {
  window.requestAnimationFrame(loop);
  var input = (0, _inputs.readInput)(state, input);
  state.updateState(input);
  (0, _physics.applyPhysics)(state, input); //console.log(state.enemies[0].pos.y);
  // zzxsz

  garbageCollector();
  (0, _canvasRenderer.render)(state); // update time

  _time.default.n++;
} //--- start -----------


init();
loop();
/*
var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.detune.value = 0; // value in cents
 oscillator.start(0);

setInterval(()=>{
	oscillator.detune.value = 1200; // value in cents
	// oscillator.start(0);
	
	setInterval(()=>{
		oscillator.detune.value = 700; // value in cents
		
			setInterval(()=>{
			oscillator.detune.value = 00; // value in cents
				oscillator.stop(3);
			
		
		}, 1000)
	}, 1000)
}, 1000)

*/
},{"./inputs":"inputs.js","./physics":"physics.js","./platforms":"platforms.js","./classes":"classes.js","./time":"time.js","./canvasRenderer/canvasRenderer":"canvasRenderer/canvasRenderer.js"}],"../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43987" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","code.js"], null)
//# sourceMappingURL=/code.7f948419.js.map