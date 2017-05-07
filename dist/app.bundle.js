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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataset = [1, 1, 3, 1, 2, 1, 1, 1];

var colors = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598'];
//, '#3288bd', '#5e4fa2', '#abdda4', '#66c2a5'
var ajax = {};
ajax.x = function () {
  if (typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest();
  }
  var versions = ["MSXML2.XmlHttp.6.0", "MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"];

  var xhr;
  for (var i = 0; i < versions.length; i++) {
    try {
      xhr = new ActiveXObject(versions[i]);
      break;
    } catch (e) {}
  }
  return xhr;
};

ajax.send = function (url, callback, method, data, async) {
  if (async === undefined) {
    async = true;
  }
  var x = ajax.x();
  x.open(method, url, async);
  x.onreadystatechange = function () {
    if (x.readyState == 4) {
      callback(x.responseText);
    }
  };
  if (method == 'POST') {
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  }
  x.send(data);
};

ajax.get = function (url, data, callback, async) {
  var query = [];
  for (var key in data) {
    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
  }
  ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async);
};

ajax.post = function (url, data, callback, async) {
  var query = [];
  for (var key in data) {
    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
  }
  ajax.send(url, callback, 'POST', query.join('&'), async);
};
ajax.get('https://rawgit.com/mohseenrm/mohseenrm.github.io/master/stats.json', {}, function (response) {
  console.log(response);
  response = JSON.parse(response);
  console.log(response["JavaScript"]);
  dataset = [response['JavaScript'] / 10, response['Python'], response['Sass'], response['TypeScript'], response['C'], response['Java']];
  draw();
});

/**
 * Credits: http://codepen.io/Siddharth11/pen/LVQmjN
 * Author: Siddharth Parmar
 */
var width = document.querySelector('.chart-wrapper').offsetWidth,
    height = document.querySelector('.chart-wrapper').offsetHeight,
    minOfWH = Math.min(width, height) / 2,
    initialAnimDelay = 300,
    arcAnimDelay = 150,
    arcAnimDur = 3000,
    secDur = 1000,
    secIndividualdelay = 150;

var radius = void 0;

// calculate minimum of width and height to set chart radius
if (minOfWH > 200) {
  radius = 200;
} else {
  radius = minOfWH;
}

// append svg
var svg = d3.select('.chart-wrapper').append('svg').attr({
  'width': width,
  'height': height,
  'class': 'pieChart'
}).append('g');

svg.attr({
  'transform': 'translate(' + width / 2 + ', ' + height / 2 + ')'
});

// for drawing slices
var arc = d3.svg.arc().outerRadius(radius * 0.6).innerRadius(radius * 0.45);

// for labels and polylines
var outerArc = d3.svg.arc().innerRadius(radius * 0.85).outerRadius(radius * 0.85);

// d3 color generator
// let c10 = d3.scale.category10();

var pie = d3.layout.pie().value(function (d) {
  return d;
});

var draw = function draw() {

  svg.append("g").attr("class", "lines");
  svg.append("g").attr("class", "slices");
  svg.append("g").attr("class", "labels");

  // define slice
  var slice = svg.select('.slices').datum(dataset).selectAll('path').data(pie);
  slice.enter().append('path').attr({
    'fill': function fill(d, i) {
      return colors[i];
    },
    'd': arc,
    'stroke-width': '25px'
  }).attr('transform', function (d, i) {
    return 'rotate(-180, 0, 0)';
  }).style('opacity', 0).transition().delay(function (d, i) {
    return i * arcAnimDelay + initialAnimDelay;
  }).duration(arcAnimDur).ease('elastic').style('opacity', 1).attr('transform', 'rotate(0,0,0)');

  slice.transition().delay(function (d, i) {
    return arcAnimDur + i * secIndividualdelay;
  }).duration(secDur).attr('stroke-width', '5px');

  var midAngle = function midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  };

  var text = svg.select(".labels").selectAll("text").data(pie(dataset));

  text.enter().append('text').attr('dy', '0.35em').style("opacity", 0).style('fill', function (d, i) {
    return colors[i];
  }).text(function (d, i) {
    return colors[i];
  }).attr('transform', function (d) {
    // calculate outerArc centroid for 'this' slice
    var pos = outerArc.centroid(d);
    // define left and right alignment of text labels 							
    pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
    return 'translate(' + pos + ')';
  }).style('text-anchor', function (d) {
    return midAngle(d) < Math.PI ? "start" : "end";
  }).transition().delay(function (d, i) {
    return arcAnimDur + i * secIndividualdelay;
  }).duration(secDur).style('opacity', 1);

  var polyline = svg.select(".lines").selectAll("polyline").data(pie(dataset));

  polyline.enter().append("polyline").style("opacity", 0.5).attr('points', function (d) {
    var pos = outerArc.centroid(d);
    pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
    return [arc.centroid(d), arc.centroid(d), arc.centroid(d)];
  }).transition().duration(secDur).delay(function (d, i) {
    return arcAnimDur + i * secIndividualdelay;
  }).attr('points', function (d) {
    var pos = outerArc.centroid(d);
    pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
    return [arc.centroid(d), outerArc.centroid(d), pos];
  });
};

// draw();

// let button = document.querySelector('button');

// let replay = () => {

//   d3.selectAll('.slices').transition().ease('back').duration(500).delay(0).style('opacity', 0).attr('transform', 'translate(0, 250)').remove()
//   d3.selectAll('.lines').transition().ease('back').duration(500).delay(100).style('opacity', 0).attr('transform', 'translate(0, 250)').remove()
//   d3.selectAll('.labels').transition().ease('back').duration(500).delay(200).style('opacity', 0).attr('transform', 'translate(0, 250)').remove()

//   setTimeout(draw, 800)

// }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// let ajax = require( './ajax' );
// ajax = ajax.__proto__;


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

    __webpack_require__(0);
})();

// (()=>{
//     setTimeout(()=>{
//         document.getElementById("dev").className += " magictime spaceInUp";
//     }, 2000);
// })();

/***/ })
/******/ ]);