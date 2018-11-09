/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/webpack";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/homepage/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/homepage/index.js":
/*!*********************************!*\
  !*** ./pages/homepage/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _expose$Jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'expose?$!jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _expose$Jquery2 = _interopRequireDefault(_expose$Jquery);\n\nvar _star_twinkle = __webpack_require__(/*! ./star_twinkle */ \"./pages/homepage/star_twinkle.js\");\n\nvar _star_twinkle2 = _interopRequireDefault(_star_twinkle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', _star_twinkle2.default);\n\nvar btn = (0, _expose$Jquery2.default)('enter_btn');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lcGFnZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL3BhZ2VzL2hvbWVwYWdlL2luZGV4LmpzPzhiZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnZXhwb3NlPyQhanF1ZXJ5J1xuaW1wb3J0IGluaXRDYW52YSBmcm9tICcuL3N0YXJfdHdpbmtsZSdcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRDYW52YSk7XG5cbmNvbnN0IGJ0biA9ICQoJ2VudGVyX2J0bicpO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/homepage/index.js\n");

/***/ }),

/***/ "./pages/homepage/star_twinkle.js":
/*!****************************************!*\
  !*** ./pages/homepage/star_twinkle.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = initCanva;\nwindow.requestAnimationFrame = function () {\n    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n        window.setTimeout(callback, 1000 / 60);\n    };\n}();\n\nvar starList = [];\nvar vertexList = [];\nvar opacityList = [];\n\nvar fps = 5;\nvar now = void 0;\nvar before = Date.now();\nvar interval = 1000 / fps;\nvar past = void 0;\n\nfunction playTwinkle() {\n    requestAnimationFrame(playTwinkle);\n    now = Date.now();\n    past = now - before;\n    if (past > interval) {\n        before = now - past % interval;\n        starTwinkle();\n    }\n}\n\nfunction starTwinkle() {\n    for (var i = 0; i < starList.length; i++) {\n        var star = starList[i];\n        var cxt = star.getContext('2d');\n        var size = star.width;\n        cxt.clearRect(0, 0, size, size);\n        cxt.save();\n        cxt.globalAlpha = (Math.random() + opacityList[i] * 2) / 3.0;\n        drawStar(cxt, vertexList[i], size);\n        cxt.restore();\n    }\n}\n\nvar starInit = function starInit(star, cxt, vertexNum, size) {\n    var transX = Math.floor(Math.random() * window.innerWidth - size);\n    var transY = Math.floor(Math.random() * window.innerHeight - size);\n    star.style.position = 'absolute';\n    star.style.left = transX + 'px';\n    star.style.top = transY + 'px';\n    cxt.globalCompositeOperation = 'lighter';\n    cxt.save();\n    cxt.restore();\n    drawStar(cxt, vertexNum, size);\n};\n\nfunction drawStar(cxt, vertexNum, size) {\n    cxt.clearRect(0, 0, size, size);\n    var radius = size * 0.5;\n    for (var i = 0, count = vertexNum * 2; i < count; i++) {\n        var r = i % 2 ? radius * 0.1 : radius;\n        var a = Math.PI * 2 * i / count;\n        cxt[i === 0 ? 'moveTo' : 'lineTo'](radius + r * Math.cos(a), radius + r * Math.sin(a));\n    }\n    cxt.fill();\n}\n\nfunction initCanva() {\n    var canvas = document.getElementsByClassName('background_star_sky');\n    var bg = document.createElement('div');\n    canvas[0].appendChild(bg);\n    bg.style.width = window.innerWidth.toString() + 'px';\n    bg.style.height = window.innerHeight.toString() + 'px';\n\n    for (var starNum = 0; starNum < 60; starNum += 1) {\n        var star = document.createElement('canvas');\n        star.className = 'star_canvas';\n        star.id = starNum.toString();\n        var size = Math.floor(Math.random() * (16 - 1) + 1);\n\n        if (size >= 6) {\n            vertexList.push(Math.floor(Math.random() * (5 - 3) + 3) * 2);\n        } else {\n            vertexList.push(Math.floor(Math.random() * (4 - 2) + 2) * 2);\n        }\n        opacityList.push(1);\n        star.width = star.height = size;\n        var starCxt = star.getContext('2d');\n        starCxt.fillStyle = '#FFFFFF';\n        starInit(star, starCxt, vertexList[starNum], size);\n        bg.appendChild(star);\n        starList.push(star);\n    }\n    playTwinkle();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lcGFnZS9zdGFyX3R3aW5rbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9wYWdlcy9ob21lcGFnZS9zdGFyX3R3aW5rbGUuanM/ZWUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XG4gICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxuICAgICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgIHx8XG4gICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHxcbiAgICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApOyB9O1xufSkoKTtcblxubGV0IHN0YXJMaXN0ID0gW107XG5sZXQgdmVydGV4TGlzdCA9IFtdO1xubGV0IG9wYWNpdHlMaXN0ID0gW107XG5cbmxldCBmcHMgPSA1O1xubGV0IG5vdztcbmxldCBiZWZvcmUgPSBEYXRlLm5vdygpO1xubGV0IGludGVydmFsID0gMTAwMC9mcHM7XG5sZXQgcGFzdDtcblxuZnVuY3Rpb24gcGxheVR3aW5rbGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBsYXlUd2lua2xlKTtcbiAgICBub3cgPSBEYXRlLm5vdygpO1xuICAgIHBhc3QgPSBub3cgLSBiZWZvcmU7XG4gICAgaWYocGFzdCA+IGludGVydmFsKXtcbiAgICAgICAgYmVmb3JlID0gbm93IC0gKHBhc3QgJSBpbnRlcnZhbCk7XG4gICAgICAgIHN0YXJUd2lua2xlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdGFyVHdpbmtsZSgpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3Rhckxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgc3RhciA9IHN0YXJMaXN0W2ldO1xuICAgICAgICBsZXQgY3h0ID0gc3Rhci5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBsZXQgc2l6ZSA9IHN0YXIud2lkdGg7XG4gICAgICAgIGN4dC5jbGVhclJlY3QoMCwwLHNpemUsc2l6ZSk7XG4gICAgICAgIGN4dC5zYXZlKCk7XG4gICAgICAgIGN4dC5nbG9iYWxBbHBoYSA9IChNYXRoLnJhbmRvbSgpICsgb3BhY2l0eUxpc3RbaV0gKiAyKSAvIDMuMDtcbiAgICAgICAgZHJhd1N0YXIoY3h0LCB2ZXJ0ZXhMaXN0W2ldLCBzaXplKTtcbiAgICAgICAgY3h0LnJlc3RvcmUoKTtcbiAgICB9XG59XG5cbmxldCBzdGFySW5pdCA9IGZ1bmN0aW9uKHN0YXIsIGN4dCwgdmVydGV4TnVtLCBzaXplKSB7XG4gICAgbGV0IHRyYW5zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoIC0gc2l6ZSk7XG4gICAgbGV0IHRyYW5zWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lckhlaWdodCAtIHNpemUpO1xuICAgIHN0YXIuc3R5bGUucG9zaXRpb24gPSdhYnNvbHV0ZSc7XG4gICAgc3Rhci5zdHlsZS5sZWZ0ID0gdHJhbnNYKydweCc7XG4gICAgc3Rhci5zdHlsZS50b3AgPSB0cmFuc1krJ3B4JztcbiAgICBjeHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2xpZ2h0ZXInO1xuICAgIGN4dC5zYXZlKCk7XG4gICAgY3h0LnJlc3RvcmUoKTtcbiAgICBkcmF3U3RhcihjeHQsIHZlcnRleE51bSwgc2l6ZSk7XG59O1xuXG5mdW5jdGlvbiBkcmF3U3RhcihjeHQsIHZlcnRleE51bSwgc2l6ZSkge1xuICAgIGN4dC5jbGVhclJlY3QoMCwwLHNpemUsc2l6ZSk7XG4gICAgbGV0IHJhZGl1cyA9IHNpemUgKiAwLjU7XG4gICAgZm9yKGxldCBpID0gMCwgY291bnQgPSB2ZXJ0ZXhOdW0gKiAyOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBsZXQgciA9IGkgJSAyID8gcmFkaXVzICogMC4xIDogcmFkaXVzO1xuICAgICAgICBsZXQgYSA9IE1hdGguUEkgKiAyICogaSAvIGNvdW50O1xuICAgICAgICBjeHRbIGkgPT09IDAgPyAnbW92ZVRvJyA6ICdsaW5lVG8nXShyYWRpdXMgKyByICogTWF0aC5jb3MoYSksIHJhZGl1cyArIHIgKiBNYXRoLnNpbihhKSk7XG4gICAgfVxuICAgIGN4dC5maWxsKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRDYW52YSgpIHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmFja2dyb3VuZF9zdGFyX3NreScpO1xuICAgIGxldCBiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbnZhc1swXS5hcHBlbmRDaGlsZChiZyk7XG4gICAgYmcuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aC50b1N0cmluZygpKydweCc7XG4gICAgYmcuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0LnRvU3RyaW5nKCkrJ3B4JztcblxuICAgIGZvcihsZXQgc3Rhck51bSA9IDA7IHN0YXJOdW0gPCA2MDsgc3Rhck51bSArPSAxKSB7XG4gICAgICAgIGxldCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHN0YXIuY2xhc3NOYW1lID0gJ3N0YXJfY2FudmFzJztcbiAgICAgICAgc3Rhci5pZCA9IHN0YXJOdW0udG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IHNpemUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTYgLSAxKSsgMSk7XG5cbiAgICAgICAgaWYoc2l6ZSA+PSA2KXtcbiAgICAgICAgICAgIHZlcnRleExpc3QucHVzaChNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKCA1IC0gMykgKyAzKSkgKiAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlcnRleExpc3QucHVzaChNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKCA0IC0gMikgKyAyKSkgKiAyKTtcbiAgICAgICAgfVxuICAgICAgICBvcGFjaXR5TGlzdC5wdXNoKDEpO1xuICAgICAgICBzdGFyLndpZHRoID0gc3Rhci5oZWlnaHQgPSBzaXplO1xuICAgICAgICBsZXQgc3RhckN4dCA9IHN0YXIuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgc3RhckN4dC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgIHN0YXJJbml0KHN0YXIsIHN0YXJDeHQsIHZlcnRleExpc3Rbc3Rhck51bV0sc2l6ZSk7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKHN0YXIpO1xuICAgICAgICBzdGFyTGlzdC5wdXNoKHN0YXIpO1xuICAgIH1cbiAgICBwbGF5VHdpbmtsZSgpO1xufVxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBaUVBO0FBakVBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/homepage/star_twinkle.js\n");

/***/ })

/******/ });