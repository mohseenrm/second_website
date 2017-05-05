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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    var me = "Mohseen";

    console.log('hello ' + me + '!');

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
})();

(function () {
    /**
    * @function addClass
    * @param  {element} element      Element whose class name needs to be altered
    * @param  {String } newClassName Class Name
    * @return None
    */
    var addClass = function addClass(element, newClassName) {
        if (element !== undefined && newClassName !== undefined) {
            var classNames = element.className;
            if (!classNames.includes(newClassName)) {
                element.className += ' ' + newClassName;
            }
        }
        return;
    };

    /**
    * @function removeClass
    * @param  {element} element      Element whose class name needs to be altered
    * @param  {String } delClassName Class Name
    * @return None
    */
    var removeClass = function removeClass(element, delClassName) {
        if (element !== undefined && delClassName !== undefined) {
            if (element.className.includes(delClassName)) {
                element.className = element.className.replace(new RegExp('(?:^|\\s)' + delClassName + '(?:\\s|$)'), '');
            }
        }
        return;
    };

    //http://codepen.io/madebyjam/pen/eBpegv
    //Animation on Scroll: https://github.com/michalsnik/aos
    //Pie Chart: http://codepen.io/Siddharth11/pen/LVQmjN

    window.onscroll = function () {
        var win = window;
        //
        // let navHeight = win.innerHeight - 70;
        // let nav = document.getElementById("nav-bar");
        // if( win.scrollY > navHeight ){
        //     if( nav.className.includes("fixed") ){}
        //     else
        //         nav.className += " fixed";
        // }
        // else
        //     nav.className = "";

        //titles reveal
        if (win.scrollY > 400)
            // document.querySelector('.visible').className += " animated slideInUp";
            addClass(document.querySelector('.visible'), 'animated slideInUp');else removeClass(document.querySelector('.visible'), 'animated slideInUp');

        if (win.scrollY > 0.12 * win.innerHeight) {
            document.getElementById('first-header').style.visibility = 'visible';
            addClass(document.getElementById('first-header'), 'animated zoomInDown');
        } else removeClass(document.getElementById('first-header'), 'animated zoomInDown');
    };
})();

// (()=>{
//     setTimeout(()=>{
//         document.getElementById("dev").className += " magictime spaceInUp";
//     }, 2000);
// })();

(function () {})();

/***/ })
/******/ ]);