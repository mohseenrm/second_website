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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
	console.log('splash hello!');
	var tl = new TimelineMax();
	// var loader = document.querySelector('.st0');
	var loader = document.getElementById('triangles'),
	    firstTriangle = document.querySelector('.st1'),
	    secondTriangle = document.querySelector('.st0');

	var firstTriangleLength = firstTriangle.getTotalLength(),
	    secondTriangleLength = secondTriangle.getTotalLength();

	console.log(firstTriangleLength);
	console.log(secondTriangleLength);
	// tl.add( TweenLite.from( loader, 4, {rotation: 180} ) );
	// tl.play();
	function sample() {
		console.log('plain offset: ', firstTriangle.style);

		var offset = parseInt(firstTriangle.style.strokeDashoffset);

		console.log('Type: ', _typeof(firstTriangle.style.strokeDashoffset));
		console.log('Offset: ', offset);
		if (offset < 7602) {
			offset += 250;
			firstTriangle.style.strokeDashoffset = offset.toString();
		} else {
			offset -= 50;
			firstTriangle.style.strokeDashoffset = offset.toString();
		}
	}
	tl.add('start', 0.5).to(loader, 5, { rotation: 180, transformOrigin: "50% 50%" }, 'start').to(firstTriangle, 5, {
		attr: {
			'stroke-dashoffset': 7602,
			'stroke-dasharray': 7602
		},
		onUpdate: sample,
		ease: Linear.easeNone
	}, 'start').to(secondTriangle, 5, {
		attr: {
			'stroke-dashoffset': 0
		},
		ease: Linear.easeNone
	}, 'start');
})();

/***/ })

/******/ });