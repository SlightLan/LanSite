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
eval("\n\nconsole.log('This is homepage with canvas');\n\nwindow.requestAnimationFrame = function () {\n    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n        window.setTimeout(callback, 1000 / 60);\n    };\n}();\n\nvar starList = [];\nvar vertexList = [];\nvar opacityList = [];\n\nvar fps = 5;\nvar now = void 0;\nvar before = Date.now();\nvar interval = 1000 / fps;\nvar past = void 0;\n\nfunction playTwinkle() {\n    requestAnimationFrame(playTwinkle);\n    now = Date.now();\n    past = now - before;\n    if (past > interval) {\n        before = now - past % interval;\n        starTwinkle();\n    }\n}\n\nfunction starTwinkle() {\n    for (var i = 0; i < starList.length; i++) {\n        var star = starList[i];\n        var cxt = star.getContext('2d');\n        var size = star.width;\n        cxt.clearRect(0, 0, size, size);\n        cxt.save();\n        cxt.globalAlpha = (Math.random() + opacityList[i] * 2) / 3.0;\n        drawStar(cxt, vertexList[i], size);\n        cxt.restore();\n    }\n}\n\nvar starInit = function starInit(star, cxt, vertexNum, size) {\n    var transX = Math.floor(Math.random() * window.innerWidth - size);\n    var transY = Math.floor(Math.random() * window.innerHeight - size);\n    star.style.position = 'absolute';\n    star.style.left = transX + 'px';\n    star.style.top = transY + 'px';\n    cxt.globalCompositeOperation = 'lighter';\n    cxt.save();\n    cxt.restore();\n    drawStar(cxt, vertexNum, size);\n};\n\nfunction drawStar(cxt, vertexNum, size) {\n    cxt.clearRect(0, 0, size, size);\n    var radius = size * 0.5;\n    for (var i = 0, count = vertexNum * 2; i < count; i++) {\n        var r = i % 2 ? radius * 0.1 : radius;\n        var a = Math.PI * 2 * i / count;\n        cxt[i === 0 ? 'moveTo' : 'lineTo'](radius + r * Math.cos(a), radius + r * Math.sin(a));\n    }\n    cxt.fill();\n}\n\nfunction initCanva() {\n    var canvas = document.getElementsByClassName('background_star_sky');\n    var bg = document.createElement('div');\n    canvas[0].appendChild(bg);\n    bg.style.width = window.innerWidth.toString() + 'px';\n    bg.style.height = window.innerHeight.toString() + 'px';\n\n    for (var starNum = 0; starNum < 60; starNum += 1) {\n        var star = document.createElement('canvas');\n        star.className = 'star_canvas';\n        star.id = starNum.toString();\n        var size = Math.floor(Math.random() * (8 - 1) + 1);\n\n        if (size >= 6) {\n            vertexList.push(Math.floor(Math.random() * (5 - 3) + 3) * 2);\n        } else {\n            vertexList.push(Math.floor(Math.random() * (4 - 2) + 2) * 2);\n        }\n        opacityList.push(1);\n        star.width = star.height = size;\n        var starCxt = star.getContext('2d');\n        starCxt.fillStyle = '#FFFFFF';\n        starInit(star, starCxt, vertexList[starNum], size);\n        bg.appendChild(star);\n        starList.push(star);\n    }\n    playTwinkle();\n\n    // requestAnimationFrame(starTwinkle);\n}\n\ndocument.addEventListener('DOMContentLoaded', initCanva);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lcGFnZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL3BhZ2VzL2hvbWVwYWdlL2luZGV4LmpzPzhiZTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ1RoaXMgaXMgaG9tZXBhZ2Ugd2l0aCBjYW52YXMnKTtcblxud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IChmdW5jdGlvbigpe1xuICAgIHJldHVybiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgICB8fFxuICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxuICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8XG4gICAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykgeyB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTsgfTtcbn0pKCk7XG5cbmxldCBzdGFyTGlzdCA9IFtdO1xubGV0IHZlcnRleExpc3QgPSBbXTtcbmxldCBvcGFjaXR5TGlzdCA9IFtdO1xuXG5sZXQgZnBzID0gNTtcbmxldCBub3c7XG5sZXQgYmVmb3JlID0gRGF0ZS5ub3coKTtcbmxldCBpbnRlcnZhbCA9IDEwMDAvZnBzO1xubGV0IHBhc3Q7XG5cbmZ1bmN0aW9uIHBsYXlUd2lua2xlKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShwbGF5VHdpbmtsZSk7XG4gICAgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBwYXN0ID0gbm93IC0gYmVmb3JlO1xuICAgIGlmKHBhc3QgPiBpbnRlcnZhbCl7XG4gICAgICAgIGJlZm9yZSA9IG5vdyAtIChwYXN0ICUgaW50ZXJ2YWwpO1xuICAgICAgICBzdGFyVHdpbmtsZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3RhclR3aW5rbGUoKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YXJMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHN0YXIgPSBzdGFyTGlzdFtpXTtcbiAgICAgICAgbGV0IGN4dCA9IHN0YXIuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgbGV0IHNpemUgPSBzdGFyLndpZHRoO1xuICAgICAgICBjeHQuY2xlYXJSZWN0KDAsMCxzaXplLHNpemUpO1xuICAgICAgICBjeHQuc2F2ZSgpO1xuICAgICAgICBjeHQuZ2xvYmFsQWxwaGEgPSAoTWF0aC5yYW5kb20oKSArIG9wYWNpdHlMaXN0W2ldICogMikgLyAzLjA7XG4gICAgICAgIGRyYXdTdGFyKGN4dCwgdmVydGV4TGlzdFtpXSwgc2l6ZSk7XG4gICAgICAgIGN4dC5yZXN0b3JlKCk7XG4gICAgfVxufVxuXG5sZXQgc3RhckluaXQgPSBmdW5jdGlvbihzdGFyLCBjeHQsIHZlcnRleE51bSwgc2l6ZSkge1xuICAgIGxldCB0cmFuc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCAtIHNpemUpO1xuICAgIGxldCB0cmFuc1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBzaXplKTtcbiAgICBzdGFyLnN0eWxlLnBvc2l0aW9uID0nYWJzb2x1dGUnO1xuICAgIHN0YXIuc3R5bGUubGVmdCA9IHRyYW5zWCsncHgnO1xuICAgIHN0YXIuc3R5bGUudG9wID0gdHJhbnNZKydweCc7XG4gICAgY3h0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdsaWdodGVyJztcbiAgICBjeHQuc2F2ZSgpO1xuICAgIGN4dC5yZXN0b3JlKCk7XG4gICAgZHJhd1N0YXIoY3h0LCB2ZXJ0ZXhOdW0sIHNpemUpO1xufTtcblxuZnVuY3Rpb24gZHJhd1N0YXIoY3h0LCB2ZXJ0ZXhOdW0sIHNpemUpIHtcbiAgICBjeHQuY2xlYXJSZWN0KDAsMCxzaXplLHNpemUpO1xuICAgIGxldCByYWRpdXMgPSBzaXplICogMC41O1xuICAgIGZvcihsZXQgaSA9IDAsIGNvdW50ID0gdmVydGV4TnVtICogMjsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgbGV0IHIgPSBpICUgMiA/IHJhZGl1cyAqIDAuMSA6IHJhZGl1cztcbiAgICAgICAgbGV0IGEgPSBNYXRoLlBJICogMiAqIGkgLyBjb3VudDtcbiAgICAgICAgY3h0WyBpID09PSAwID8gJ21vdmVUbycgOiAnbGluZVRvJ10ocmFkaXVzICsgciAqIE1hdGguY29zKGEpLCByYWRpdXMgKyByICogTWF0aC5zaW4oYSkpO1xuICAgIH1cbiAgICBjeHQuZmlsbCgpO1xufVxuXG5mdW5jdGlvbiBpbml0Q2FudmEoKSB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JhY2tncm91bmRfc3Rhcl9za3knKTtcbiAgICBsZXQgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYW52YXNbMF0uYXBwZW5kQ2hpbGQoYmcpO1xuICAgIGJnLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGgudG9TdHJpbmcoKSsncHgnO1xuICAgIGJnLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodC50b1N0cmluZygpKydweCc7XG5cbiAgICBmb3IobGV0IHN0YXJOdW0gPSAwOyBzdGFyTnVtIDwgNjA7IHN0YXJOdW0gKz0gMSkge1xuICAgICAgICBsZXQgc3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBzdGFyLmNsYXNzTmFtZSA9ICdzdGFyX2NhbnZhcyc7XG4gICAgICAgIHN0YXIuaWQgPSBzdGFyTnVtLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBzaXplID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDggLSAxKSsgMSk7XG5cbiAgICAgICAgaWYoc2l6ZSA+PSA2KXtcbiAgICAgICAgICAgIHZlcnRleExpc3QucHVzaChNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKCA1IC0gMykgKyAzKSkgKiAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlcnRleExpc3QucHVzaChNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKCA0IC0gMikgKyAyKSkgKiAyKTtcbiAgICAgICAgfVxuICAgICAgICBvcGFjaXR5TGlzdC5wdXNoKDEpO1xuICAgICAgICBzdGFyLndpZHRoID0gc3Rhci5oZWlnaHQgPSBzaXplO1xuICAgICAgICBsZXQgc3RhckN4dCA9IHN0YXIuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgc3RhckN4dC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgIHN0YXJJbml0KHN0YXIsIHN0YXJDeHQsIHZlcnRleExpc3Rbc3Rhck51bV0sc2l6ZSk7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKHN0YXIpO1xuICAgICAgICBzdGFyTGlzdC5wdXNoKHN0YXIpO1xuICAgIH1cbiAgICBwbGF5VHdpbmtsZSgpO1xuXG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0YXJUd2lua2xlKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRDYW52YSk7XG5cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/homepage/index.js\n");

/***/ })

/******/ });