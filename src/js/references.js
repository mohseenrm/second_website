/* eslint indent: ["error", "tab"] */
/* global TimelineMax */
(()=>{
	const text = document.getElementById('reference-text'),
		author = document.querySelector('.wrapper--author');
	
	let tl = new TimelineMax({
			repeat: -1, 
			repeatDelay: 0.1,
			paused: true
		}),
		topLine = document.getElementById('top-line'),
		bottomLine = document.getElementById('bottom-line');

	console.log( 'Text', text );
	
	let Toffset = topLine.getBoundingClientRect(),
		Boffset = bottomLine.getBoundingClientRect();
	
	const calculateOffset = (topOffset, bottomOffset) => {
		if(topOffset || bottomOffset)
			return( (bottomOffset.top -topOffset.top)/2 - bottomOffset.height/2 );
	};

	let offset = calculateOffset(Toffset, Boffset);
	console.log(offset);

	//wierd bug with calculating exact offset onload
	setTimeout( () => {

		Toffset = topLine.getBoundingClientRect();
		Boffset = bottomLine.getBoundingClientRect();

		offset = calculateOffset(Toffset, Boffset);
		tl.set([text, author], {
			css: {
				'display': 'none',
				'opacity': '0'
			}
		})
		.set(topLine, {
			css: {
				'opacity': '0'
			}
		})
		.set([topLine, bottomLine], {
			css: {
				'margin': '0',
				// 'display': 'none',
				'width': '3px'
			}
		});
		
		tl.add('start')
			.to([topLine, bottomLine], 3, {
				css: {
					'width': '75%',
					'opacity': '1'
				}
			}, 'start')
			.add('move')
			.to(bottomLine, 3, {
				y: offset
			}, 'move')
			.to(topLine, 3, {
				y: -offset
			}, 'move')
		
			.add('reveal')
			.set([topLine, bottomLine], {
				y: 0
			})
			.to([text, author], 5, {
				css:{
					'opacity': '1',
					'display': 'flex'
				}
			}, 'reveal');
		tl.play();
	}, 10);

	
})();