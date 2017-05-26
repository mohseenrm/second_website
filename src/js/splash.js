/* eslint indent: ["error", "tab"] */
/* global TimelineMax, Power2 */
(()=>{
	const dot1 = document.getElementById('top'),
		dot2 = document.getElementById('bottom-left'),
		dot3 = document.getElementById('bottom-right'),
		svg = document.getElementById('master-artboard'),
		center = document.getElementById('center');
	
	let box = svg.getBBox();
	console.log('Box:', box);
	//test
	let tl = new TimelineMax({repeat: -1, repeatDelay: 0.1});

	tl
		.set([dot1, dot2, dot3], {autoAlpha: 0.3})
		.add('start')
		.to(dot1, 1.5, {
			transformOrigin: 'center center',
			y: -125,
			autoAlpha: 1,
			scale: 0.65,
			ease: Power2.easeOut
		}, 'start')
		.to(dot2, 1.5, {
			transformOrigin: 'center center',
			x: -125,
			y: 75,
			autoAlpha: 1,
			scale: 0.65,
			ease: Power2.easeOut
			// repeat: -1
		}, 'start')
		.to(dot3, 1.5, {
			transformOrigin: 'center center',
			x: 125,
			y: 75,
			autoAlpha: 1,
			scale: 0.65,
			ease: Power2.easeOut
			// repeat: -1
		}, 'start')
		.to(center, 1.5, {
			scale: 0.75,
			autoAlpha: 0.25,
			transformOrigin: 'center center'
		}, 'start')
		.add('rotate')
		.to(dot1, 1, {
			rotation: -720,
			// svgOrigin: "700 500"
			svgOrigin: '700 507',
			ease: Power2.easeOut
			// repeat: -1
		}, 'rotate')
		.to(dot2, 1, {
			rotation: -720,
			// svgOrigin: '700 500'
			svgOrigin: '700 507',
			ease: Power2.easeOut
			// repeat: -1
		}, 'rotate')
		.to(dot3, 1, {
			rotation: -720,
			// svgOrigin: '700 500'
			svgOrigin: '700 507',
			ease: Power2.easeOut

		}, 'rotate')
		.to(center, 1, {
			rotation: 1440,
			svgOrigin: '700 507',
			ease: Power2.easeOut
		}, 'rotate')
		.add('end')
		.to(center, 1, {
			autoAlpha: 1,
			scale: 1.2
		}, 'end')
		.to(dot1, 1, {
			transformOrigin: 'center center',
			scale: 1.2,
			y: -3
		}, 'end')
		.to(dot2, 1, {
			scale: 1.2,
			transformOrigin: 'center center',
			x: -11,
			y: 15,
			delay: 0.2
		}, 'end')
		.to(dot3, 1, {
			scale: 1.2,
			transformOrigin: 'center center',
			x: 12,
			y: 14,
			delay: 0.4
		}, 'end');
})();