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
eval("\n\nconsole.log('This is homepage with canvas');\n\nfunction drawStar(cxt, x, y, scale) {\n    var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#FFFFFF';\n\n    cxt.moveTo(x, 0.5 * scale + y);\n    cxt.lineTo(0.45 * scale + x, 0.45 * scale + y);\n    cxt.lineTo(0.5 * scale + x, y);\n    cxt.lineTo(0.55 * scale + x, 0.45 * scale + y);\n    cxt.lineTo(scale + x, 0.5 * scale + y);\n    cxt.lineTo(0.55 * scale + x, 0.55 * scale + y);\n    cxt.lineTo(0.5 * scale + x, scale + y);\n    cxt.lineTo(0.45 * scale + x, 0.55 * scale + y);\n    cxt.lineTo(x, 0.5 * scale + y);\n    cxt.fillStyle = '#FFFFFF';\n    cxt.fill();\n    cxt.strokeStyle = color;\n    cxt.stroke();\n}\n\nfunction drawNarrowStar(cxt, x, y, scale) {\n    var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#FFFFFF';\n\n    cxt.moveTo(0.2 * scale + x, 0.5 * scale + y);\n    cxt.lineTo(0.45 * scale + x, 0.45 * scale + y);\n    cxt.lineTo(0.5 * scale + x, y);\n    cxt.lineTo(0.55 * scale + x, 0.45 * scale + y);\n    cxt.lineTo(0.8 * scale + x, 0.5 * scale + y);\n    cxt.lineTo(0.55 * scale + x, 0.55 * scale + y);\n    cxt.lineTo(0.5 * scale + x, scale + y);\n    cxt.lineTo(0.45 * scale + x, 0.55 * scale + y);\n    cxt.lineTo(0.2 * scale + x, 0.5 * scale + y);\n    cxt.fillStyle = '#FFFFFF';\n    cxt.fill();\n    cxt.strokeStyle = color;\n    cxt.stroke();\n}\n\nfunction initCanva() {\n    var canvas = document.getElementById('background_star_sky');\n    var cxt = canvas.getContext('2d');\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    cxt.fillStyle = '#66CCFF';\n    cxt.fillRect(0, 0, canvas.width, canvas.height);\n    drawStar(cxt, 0, 0, 80, '#FFFF00');\n    drawNarrowStar(cxt, 540, 210, 40, '#FFFF00');\n}\n\ndocument.addEventListener('DOMContentLoaded', initCanva);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lcGFnZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL3BhZ2VzL2hvbWVwYWdlL2luZGV4LmpzPzhiZTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ1RoaXMgaXMgaG9tZXBhZ2Ugd2l0aCBjYW52YXMnKTtcblxuZnVuY3Rpb24gZHJhd1N0YXIoY3h0LCB4LCB5LCBzY2FsZSwgY29sb3IgPSAnI0ZGRkZGRicpIHtcbiAgICBjeHQubW92ZVRvKHgsIDAuNSpzY2FsZSArIHkpXG4gICAgY3h0LmxpbmVUbygwLjQ1KnNjYWxlICsgeCwgMC40NSpzY2FsZSArIHkpO1xuICAgIGN4dC5saW5lVG8oMC41KnNjYWxlICsgeCwgeSk7XG4gICAgY3h0LmxpbmVUbygwLjU1KnNjYWxlICsgeCwgMC40NSpzY2FsZSArIHkpO1xuICAgIGN4dC5saW5lVG8oc2NhbGUgKyB4LCAwLjUqc2NhbGUgKyB5KTtcbiAgICBjeHQubGluZVRvKDAuNTUqc2NhbGUgKyB4LCAwLjU1KnNjYWxlICsgeSk7XG4gICAgY3h0LmxpbmVUbygwLjUqc2NhbGUgKyB4LCBzY2FsZSArIHkpO1xuICAgIGN4dC5saW5lVG8oMC40NSpzY2FsZSArIHgsIDAuNTUqc2NhbGUgKyB5KTtcbiAgICBjeHQubGluZVRvKHgsIDAuNSpzY2FsZSArIHkpO1xuICAgIGN4dC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgY3h0LmZpbGwoKTtcbiAgICBjeHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjeHQuc3Ryb2tlKCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdOYXJyb3dTdGFyKGN4dCwgeCwgeSwgc2NhbGUsIGNvbG9yID0gJyNGRkZGRkYnKSB7XG4gICAgY3h0Lm1vdmVUbygwLjIqc2NhbGUgKyB4LCAwLjUqc2NhbGUgKyB5KVxuICAgIGN4dC5saW5lVG8oMC40NSpzY2FsZSArIHgsIDAuNDUqc2NhbGUgKyB5KTtcbiAgICBjeHQubGluZVRvKDAuNSpzY2FsZSArIHgsIHkpO1xuICAgIGN4dC5saW5lVG8oMC41NSpzY2FsZSArIHgsIDAuNDUqc2NhbGUgKyB5KTtcbiAgICBjeHQubGluZVRvKDAuOCpzY2FsZSArIHgsIDAuNSpzY2FsZSArIHkpO1xuICAgIGN4dC5saW5lVG8oMC41NSpzY2FsZSArIHgsIDAuNTUqc2NhbGUgKyB5KTtcbiAgICBjeHQubGluZVRvKDAuNSpzY2FsZSArIHgsIHNjYWxlICsgeSk7XG4gICAgY3h0LmxpbmVUbygwLjQ1KnNjYWxlICsgeCwgMC41NSpzY2FsZSArIHkpO1xuICAgIGN4dC5saW5lVG8oMC4yKnNjYWxlICsgeCwgMC41KnNjYWxlICsgeSk7XG4gICAgY3h0LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcbiAgICBjeHQuZmlsbCgpO1xuICAgIGN4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIGN4dC5zdHJva2UoKTtcbn1cblxuZnVuY3Rpb24gaW5pdENhbnZhKCkge1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZF9zdGFyX3NreScpO1xuICAgIHZhciBjeHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGN4dC5maWxsU3R5bGUgPSAnIzY2Q0NGRic7XG4gICAgY3h0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgZHJhd1N0YXIoY3h0LCAwLCAwLCA4MCwgJyNGRkZGMDAnKTtcbiAgICBkcmF3TmFycm93U3RhcihjeHQsIDU0MCwgMjEwLCA0MCwgJyNGRkZGMDAnKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRDYW52YSk7XG5cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/homepage/index.js\n");

/***/ })

/******/ });