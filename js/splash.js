(function () {
	console.log('splash hello!');
	var tl = new TimelineMax();
	// var loader = document.querySelector('.st0');
	const loader = document.getElementById( 'triangles' ),
			firstTriangle = document.querySelector( '.st0' ),
			secondTriangle = document.querySelector( '.st1' );

	const firstTriangleLength = firstTriangle.getTotalLength(),
			secondTriangleLength = secondTriangle.getTotalLength();

	console.log( firstTriangleLength );
	console.log( secondTriangleLength );
	// tl.add( TweenLite.from( loader, 4, {rotation: 180} ) );
	tl
		.add( 'start', 0.5 )
		.to( loader, 5, {rotation: 180, transformOrigin: "50% 50%"}, 'start' )
		.to( firstTriangle, 5, {
			fill: "transparent",
			stroke: "#E2BC1B"
		}, 'start' )
		.to( secondTriangle, 5, {
			fill: "#E2BC1B",
			stroke: "transparent"
		}, 'start' )
	// console.log(tl);
	// tl.play();
})();