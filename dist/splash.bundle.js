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


(function () {
	var dot1 = document.getElementById('top'),
	    dot2 = document.getElementById('bottom-left'),
	    dot3 = document.getElementById('bottom-right'),
	    svg = document.getElementById('master-artboard'),
	    center = document.getElementById('center');

	var box = svg.getBBox();
	console.log('Box:', box);

	var tl = new TimelineMax({ repeat: -1, repeatDelay: 0.1 });

	tl.set([dot1, dot2, dot3], { autoAlpha: 0.3 }).add('start').to(dot1, 1.5, {
		transformOrigin: "center center",
		y: -125,
		autoAlpha: 1,
		scale: 0.65,
		ease: Power2.easeOut
	}, 'start').to(dot2, 1.5, {
		transformOrigin: "center center",
		x: -125,
		y: 75,
		autoAlpha: 1,
		scale: 0.65,
		ease: Power2.easeOut
		// repeat: -1
	}, 'start').to(dot3, 1.5, {
		transformOrigin: "center center",
		x: 125,
		y: 75,
		autoAlpha: 1,
		scale: 0.65,
		ease: Power2.easeOut
		// repeat: -1
	}, 'start').to(center, 1.5, {
		scale: 0.75,
		autoAlpha: 0.25,
		transformOrigin: "center center"
	}, 'start').add('rotate').to(dot1, 1, {
		rotation: -720,
		// svgOrigin: "700 500"
		svgOrigin: "700 507",
		ease: Power2.easeOut
		// repeat: -1
	}, 'rotate').to(dot2, 1, {
		rotation: -720,
		// svgOrigin: "700 500"
		svgOrigin: "700 507",
		ease: Power2.easeOut
		// repeat: -1
	}, 'rotate').to(dot3, 1, {
		rotation: -720,
		// svgOrigin: "700 500"
		svgOrigin: "700 507",
		ease: Power2.easeOut

	}, 'rotate').to(center, 1, {
		rotation: 1440,
		svgOrigin: "700 507",
		ease: Power2.easeOut
	}, 'rotate').add('end').to(center, 1, {
		autoAlpha: 1,
		scale: 1.2
	}, 'end').to(dot1, 1, {
		transformOrigin: "center center",
		scale: 1.2,
		y: -3
	}, 'end').to(dot2, 1, {
		scale: 1.2,
		transformOrigin: "center center",
		x: -11,
		y: 15,
		delay: 0.2
	}, 'end').to(dot3, 1, {
		scale: 1.2,
		transformOrigin: "center center",
		x: 12,
		y: 14,
		delay: 0.4
	}, 'end');
})();

/***/ })

/******/ });