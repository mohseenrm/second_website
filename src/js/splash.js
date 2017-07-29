/* global TimelineMax, Power2, $ */
/*
___  ___      _
|  \/  |     | |
| .  . | ___ | |__  ___  ___  ___ _ __
| |\/| |/ _ \| '_ \/ __|/ _ \/ _ \ '_ \
| |  | | (_) | | | \__ \  __/  __/ | | |
\_|  |_/\___/|_| |_|___/\___|\___|_| |_|
___  ___      _             _     _
|  \/  |     | |           | |   | |
| .  . |_   _| | ____ _  __| | __| | __ _ _ __ ___
| |\/| | | | | |/ / _` |/ _` |/ _` |/ _` | '_ ` _ \
| |  | | |_| |   < (_| | (_| | (_| | (_| | | | | | |
\_|  |_/\__,_|_|\_\__,_|\__,_|\__,_|\__,_|_| |_| |_|

The MIT License

Copyright (c) 2010-2017 Mohseen Mukaddam (mohseenmukaddam6@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
( () => {
	const dot1 = document.getElementById( 'top' ),
		dot2 = document.getElementById( 'bottom-left' ),
		dot3 = document.getElementById( 'bottom-right' ),
		center = document.getElementById( 'center' ),
		screen = $( '#screen-0' );

	let tl = new TimelineMax( {
		// paused: true,
		repeat: -1,
		repeatDelay: 0.1,
		smoothChildTiming: true
	} );

	const onCompleteCycle = () => {
		console.log( 'Cycle complete' );
		if ( /loaded|complete/.test( document.readyState ) ){
			// console.log('content loaded');
			tl.pause();
			screen.fadeOut();
		}
	};

	tl
		.set( [ dot1, dot2, dot3 ], { autoAlpha: 0.3 } )
		.add( 'start' )
		.to( dot1, 1.5, {
			transformOrigin: 'center center',
			y: -125,
			autoAlpha: 1,
			scale: 0.65,
			ease: Power2.easeOut
		}, 'start' )
		.to( dot2, 1.5, {
			transformOrigin: 'center center',
			x: -125,
			y: 75,
			autoAlpha: 1,
			scale: 0.65,
			ease: Power2.easeOut
		}, 'start' )
		.to( dot3, 1.5, {
			transformOrigin: 'center center',
			x: 125,
			y: 75,
			autoAlpha: 1,
			scale: 0.65,
			ease: Power2.easeOut
		}, 'start' )
		.to( center, 1.5, {
			scale: 0.75,
			autoAlpha: 0.25,
			transformOrigin: 'center center'
		}, 'start' )
		.add( 'rotate' )
		.to( dot1, 1, {
			rotation: -720,
			// svgOrigin: "700 500"
			svgOrigin: '700 507',
			ease: Power2.easeOut
		}, 'rotate' )
		.to( dot2, 1, {
			rotation: -720,
			// svgOrigin: '700 500'
			svgOrigin: '700 507',
			ease: Power2.easeOut
		}, 'rotate' )
		.to( dot3, 1, {
			rotation: -720,
			// svgOrigin: '700 500'
			svgOrigin: '700 507',
			ease: Power2.easeOut

		}, 'rotate' )
		.to( center, 1, {
			rotation: 1440,
			svgOrigin: '700 507',
			ease: Power2.easeOut
		}, 'rotate' )
		.add( 'end' )
		.to( center, 1, {
			autoAlpha: 1,
			scale: 1.2
		}, 'end' )
		.to( dot1, 1, {
			transformOrigin: 'center center',
			scale: 1.2,
			y: -3
		}, 'end' )
		.to( dot2, 1, {
			scale: 1.2,
			transformOrigin: 'center center',
			x: -11,
			y: 15,
			delay: 0.2
		}, 'end' )
		.to( dot3, 1, {
			scale: 1.2,
			transformOrigin: 'center center',
			x: 12,
			y: 14,
			delay: 0.4
		}, 'end' )
		.add( onCompleteCycle );
	// tl.pause();
} )();