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
eval("\n\nconsole.log('This is homepage with canvas');\n\nfunction drawStar(cxt, x, y, scale) {\n    var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#FFFFFF';\n\n    cxt.moveTo(0.45 * scale + x, 0.45 * scale + y);\n    cxt.lineTo(0.5 * scale + x, y);\n    cxt.lineTo(0.55 * scale + x, 0.45 * scale + y);\n    cxt.lineTo(scale + x, 0.5 * scale + y);\n    cxt.lineTo(0.55 * scale + x, 0.55 * scale + y);\n    cxt.lineTo(0.5 * scale + x, scale + y);\n    cxt.lineTo(0.45 * scale + x, 0.55 * scale + y);\n    cxt.lineTo(x, 0.5 * scale + y);\n    cxt.lineTo(0.45 * scale + x, 0.45 * scale + y);\n    cxt.fillStyle = '#FFFFFF';\n    cxt.fill();\n    cxt.strokeStyle = color;\n    cxt.stroke();\n}\n\nfunction drawNarrowStar(cxt, x, y, scale) {\n    var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#FFFFFF';\n\n\n    cxt.moveTo(0.45 * scale + x, 0.45 * scale + y);\n    cxt.lineTo(0.5 * scale + x, y);\n    cxt.lineTo(0.55 * scale + x, 0.45 * scale + y);\n    cxt.lineTo(0.8 * scale + x, 0.5 * scale + y);\n    cxt.lineTo(0.55 * scale + x, 0.55 * scale + y);\n    cxt.lineTo(0.5 * scale + x, scale + y);\n    cxt.lineTo(0.45 * scale + x, 0.55 * scale + y);\n    cxt.lineTo(0.2 * scale + x, 0.5 * scale + y);\n    cxt.lineTo(0.45 * scale + x, 0.45 * scale + y);\n    cxt.fillStyle = '#FFFFFF';\n    cxt.fill();\n    cxt.strokeStyle = color;\n    cxt.stroke();\n}\n\nfunction starTwinkle(star, cxt) {\n    var starCanvaColor = document.getElementById('star_canvas_color');\n    var draw = function draw() {\n        cxt.clearRect(0, 0, star.width, star.height);\n        drawStar(cxt, 5, 5, 10, window.getComputedStyle(starCanvaColor).backgroundColor);\n        requestAnimationFrame(draw);\n        console.log('color is:', window.getComputedStyle(starCanvaColor).backgroundColor);\n    };\n    draw();\n}\n\nfunction initCanva() {\n    var canvas = document.getElementsByClassName('background_star_sky');\n    var bg = document.createElement('div');\n    canvas[0].appendChild(bg);\n    bg.style.width = window.innerWidth.toString() + 'px';\n    bg.style.height = window.innerHeight.toString() + 'px';\n    for (var starNum = 0; starNum < 30; starNum += 1) {\n        var star = document.createElement('canvas');\n        star.className = 'star_canvas';\n        star.id = starNum.toString();\n        star.width = 20;\n        star.height = 20;\n        var starCxt = star.getContext('2d');\n        starTwinkle(star, starCxt);\n        bg.appendChild(star);\n    }\n}\n\ndocument.addEventListener('DOMContentLoaded', initCanva);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lcGFnZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL3BhZ2VzL2hvbWVwYWdlL2luZGV4LmpzPzhiZTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ1RoaXMgaXMgaG9tZXBhZ2Ugd2l0aCBjYW52YXMnKTtcblxuZnVuY3Rpb24gZHJhd1N0YXIoY3h0LCB4LCB5LCBzY2FsZSwgY29sb3IgPSAnI0ZGRkZGRicpIHtcbiAgICBjeHQubW92ZVRvKDAuNDUqc2NhbGUgKyB4LCAwLjQ1KnNjYWxlICsgeSk7XG4gICAgY3h0LmxpbmVUbygwLjUqc2NhbGUgKyB4LCB5KTtcbiAgICBjeHQubGluZVRvKDAuNTUqc2NhbGUgKyB4LCAwLjQ1KnNjYWxlICsgeSk7XG4gICAgY3h0LmxpbmVUbyhzY2FsZSArIHgsIDAuNSpzY2FsZSArIHkpO1xuICAgIGN4dC5saW5lVG8oMC41NSpzY2FsZSArIHgsIDAuNTUqc2NhbGUgKyB5KTtcbiAgICBjeHQubGluZVRvKDAuNSpzY2FsZSArIHgsIHNjYWxlICsgeSk7XG4gICAgY3h0LmxpbmVUbygwLjQ1KnNjYWxlICsgeCwgMC41NSpzY2FsZSArIHkpO1xuICAgIGN4dC5saW5lVG8oeCwgMC41KnNjYWxlICsgeSk7XG4gICAgY3h0LmxpbmVUbygwLjQ1KnNjYWxlICsgeCwgMC40NSpzY2FsZSArIHkpO1xuICAgIGN4dC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgY3h0LmZpbGwoKTtcbiAgICBjeHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjeHQuc3Ryb2tlKCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdOYXJyb3dTdGFyKGN4dCwgeCwgeSwgc2NhbGUsIGNvbG9yID0gJyNGRkZGRkYnKSB7XG5cbiAgICBjeHQubW92ZVRvKDAuNDUqc2NhbGUgKyB4LCAwLjQ1KnNjYWxlICsgeSk7XG4gICAgY3h0LmxpbmVUbygwLjUqc2NhbGUgKyB4LCB5KTtcbiAgICBjeHQubGluZVRvKDAuNTUqc2NhbGUgKyB4LCAwLjQ1KnNjYWxlICsgeSk7XG4gICAgY3h0LmxpbmVUbygwLjgqc2NhbGUgKyB4LCAwLjUqc2NhbGUgKyB5KTtcbiAgICBjeHQubGluZVRvKDAuNTUqc2NhbGUgKyB4LCAwLjU1KnNjYWxlICsgeSk7XG4gICAgY3h0LmxpbmVUbygwLjUqc2NhbGUgKyB4LCBzY2FsZSArIHkpO1xuICAgIGN4dC5saW5lVG8oMC40NSpzY2FsZSArIHgsIDAuNTUqc2NhbGUgKyB5KTtcbiAgICBjeHQubGluZVRvKDAuMipzY2FsZSArIHgsIDAuNSpzY2FsZSArIHkpO1xuICAgIGN4dC5saW5lVG8oMC40NSpzY2FsZSArIHgsIDAuNDUqc2NhbGUgKyB5KTtcbiAgICBjeHQuZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAgIGN4dC5maWxsKCk7XG4gICAgY3h0LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3h0LnN0cm9rZSgpO1xufVxuXG5mdW5jdGlvbiBzdGFyVHdpbmtsZShzdGFyLCBjeHQpIHtcbiAgICBsZXQgc3RhckNhbnZhQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Rhcl9jYW52YXNfY29sb3InKTtcbiAgICBsZXQgZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjeHQuY2xlYXJSZWN0KDAsIDAsIHN0YXIud2lkdGgsIHN0YXIuaGVpZ2h0KTtcbiAgICAgICAgZHJhd1N0YXIoY3h0LCA1LCA1LCAxMCwgd2luZG93LmdldENvbXB1dGVkU3R5bGUoc3RhckNhbnZhQ29sb3IpLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbG9yIGlzOicsIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN0YXJDYW52YUNvbG9yKS5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgIH07XG4gICAgZHJhdygpO1xufVxuXG5mdW5jdGlvbiBpbml0Q2FudmEoKSB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JhY2tncm91bmRfc3Rhcl9za3knKTtcbiAgICBsZXQgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYW52YXNbMF0uYXBwZW5kQ2hpbGQoYmcpO1xuICAgIGJnLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGgudG9TdHJpbmcoKSsncHgnO1xuICAgIGJnLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodC50b1N0cmluZygpKydweCc7XG4gICAgZm9yKGxldCBzdGFyTnVtID0gMDsgc3Rhck51bSA8IDMwOyBzdGFyTnVtICs9IDEpIHtcbiAgICAgICAgbGV0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgc3Rhci5jbGFzc05hbWUgPSAnc3Rhcl9jYW52YXMnO1xuICAgICAgICBzdGFyLmlkID0gc3Rhck51bS50b1N0cmluZygpO1xuICAgICAgICBzdGFyLndpZHRoID0gMjA7XG4gICAgICAgIHN0YXIuaGVpZ2h0ID0gMjA7XG4gICAgICAgIGxldCBzdGFyQ3h0ID0gc3Rhci5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBzdGFyVHdpbmtsZShzdGFyLCBzdGFyQ3h0KTtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc3Rhcik7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdENhbnZhKTtcblxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/homepage/index.js\n");

/***/ })

/******/ });