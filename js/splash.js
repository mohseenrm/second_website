(function () {
	console.log('splash hello!');
	var tl = new TimelineMax();
	// var loader = document.querySelector('.st0');
	const loader = document.getElementById( 'triangles' ),
			firstTriangle = document.querySelector( '.st1' ),
			secondTriangle = document.querySelector( '.st0' );

	const firstTriangleLength = firstTriangle.getTotalLength(),
			secondTriangleLength = secondTriangle.getTotalLength();

	console.log( firstTriangleLength );
	console.log( secondTriangleLength );
	// tl.add( TweenLite.from( loader, 4, {rotation: 180} ) );
	// tl.play();
	function sample(){
		console.log(typeof(firstTriangle.style.strokeDashoffset));
		if( firstTriangle.style.strokeDashoffset < 7602 )
			firstTriangle.style.strokeDashoffset = parseInt(firstTriangle.style.strokeDashoffset) + 250;
		else
			firstTriangle.style.strokeDashoffset -= 50;
	}
	tl
		.add( 'start', 0.5 )
		.to( loader, 5, {rotation: 180, transformOrigin: "50% 50%"}, 'start' )
		.to( firstTriangle, 5, {
			attr: {
				'stroke-dashoffset': 7602,
				'stroke-dasharray': 7602
			},
			onUpdate: sample,
			ease:Linear.easeNone
		}, 'start' )
		.to( secondTriangle, 5, {
			attr: {
				'stroke-dashoffset': 0
			},
			ease:Linear.easeNone
		}, 'start' )
	// console.log(tl);
})();