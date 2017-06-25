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
/* eslint indent: ["error", "tab"] */
/* global TimelineMax */
import { normalizeNames } from './utils';

const references = {
	Sujith_Menon: {
		text: 'Mohseen is a top talented graduate. He was right on the top delivering Simplified Solutions to make life easier for his peers and provide a quick and better service to our clients / customers. He has demonstrated well on the behavior, as most of his engagement was with Senior Technical people. The feedbacks were really overwhelming about the way he was interacting with them.What really stood out, was the way he has engaged with Messaging to develop the Automation part which helps us to serve our customers efficiently.He is very quick and goes beyond his expert levels to deliver any challenging targets.',
		position: 'APAC Messaging Lead, Barclays'
	},
	Sunil_Bade: {
		text: 'I worked with Mohseen on number of Automation Tasks, which helped us to generate many auto generated reports, thereby reducing the number of hours for us by checking details manually. This helped us to check overall health of our Messaging Applications quickly and was a big service improvement as it reduced number of Incidents coming to our team. He is swift with his work and easily absorbs new technical skills. Apart from good technical person, he is also a good team player who is always available to help …I highly recommend him!',
		position: 'Messaging Engineer, Barclays'
	}
};
( () => {
	const text = document.getElementById( 'reference-text' ),
		author = document.querySelector( '.wrapper--author' ),
		authors = Object.keys( references );

	let playHead = 0;

	const playAnimation = () => {
		let tl = new TimelineMax( {
				repeat: 0,
				repeatDelay: 0.1,
				paused: true
			} ),
			topLine = document.getElementById( 'top-line' ),
			bottomLine = document.getElementById( 'bottom-line' );

		console.log( 'Text', text );

		let Toffset = topLine.getBoundingClientRect(),
			Boffset = bottomLine.getBoundingClientRect();

		const calculateOffset = ( topOffset, bottomOffset ) => {
			if( topOffset || bottomOffset )
				return( ( bottomOffset.top - topOffset.top )/2 - bottomOffset.height/2 );
		};

		let offset = calculateOffset( Toffset, Boffset );
		console.log( offset );

		//weird bug with calculating exact offset onload
		setTimeout( () => {
			Toffset = topLine.getBoundingClientRect();
			Boffset = bottomLine.getBoundingClientRect();
			//TODO: add css prefix for flex
			offset = calculateOffset( Toffset, Boffset );
			tl.set( [ text, author ], {
				css: {
					'display': 'none',
					'opacity': '0'
				}
			} )
			.set( topLine, {
				css: {
					'opacity': '0'
				}
			} )
			.set( [ topLine, bottomLine ], {
				css: {
					'margin': '0',
					// 'display': 'none',
					'width': '3px'
				}
			} );

			tl.add( 'start' )
				.to( [ topLine, bottomLine ], 3, {
					css: {
						'width': '75%',
						'opacity': '1'
					}
				}, 'start' )
				.add( 'move' )
				.to( bottomLine, 3, {
					y: offset
				}, 'move' )
				.to( topLine, 3, {
					y: -offset
				}, 'move' )

				.add( 'reveal' )
				.set( [ topLine, bottomLine ], {
					y: 0
				} )
				.to( [ text, author ], 5, {
					css: {
						'opacity': '1',
						'display': 'flex'
					}
				}, 'reveal' );
			tl.play();
		}, 10 );
	};
	playAnimation();
	console.log( 'Authors: ', authors );
	console.log( 'Author: ', document.createTextNode( authors[playHead] ) );

	// Did this jumping around to prevent XSS attacks [https://stackoverflow.com/questions/1358810/how-do-i-change-the-text-of-a-span-element-in-javascript]
	text.innerHTML = document.createTextNode( references[authors[playHead]].text ).textContent;
	author.innerHTML = `${ normalizeNames( document.createTextNode( authors[playHead] ).textContent ) }<span class="wrapper--author--position">${ references[authors[playHead]].position }</span>`;

	// author.innerHTML = references[ authors[ playHead ] ];

	const rotateReferences = () => {
		// console.log( 'inside rotate' );
	};
	setInterval( rotateReferences, 10000 );
} )();