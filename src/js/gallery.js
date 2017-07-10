import { addClass, removeClass } from './utils';
// globals
var imagesLoaded = 0,
	maxPictures = 21,
	slidesLoaded = 0;

let cache = {};

cache.left = document.getElementById( 'gallery-left' ),
cache.minimize = document.getElementById( 'gallery-minimize' ),
cache.right = document.getElementById( 'gallery-right' ),
cache.slideshow = document.getElementById( 'gallery-preview' );

const initGallery = () => {
	createPictures( 8 );
};
const createPictures = ( number ) => {
	const galleryButton = document.getElementById( 'gallery-button' );
	const gallery = galleryButton.parentNode;
	let picture, limit;
	limit = maxPictures;

	if( ( number + imagesLoaded ) < maxPictures )
		limit = ( number + imagesLoaded );

	for( let i = imagesLoaded; i < limit; i++ ){
		// TODO: add optimized image here
		picture = document.createElement( 'div' );
		picture.style = `
			background: url('../../images/${ i }.jpg');
			background-size: cover;
		`;
		picture.id = `picture_${ i }`;
		addClass( picture, 'wrapper--picture' );
		addClass( picture, 'black-and-white' );

		gallery.onclick = getIndexFromPictures;

		gallery.insertBefore( picture, galleryButton );
	}
	if( ( number + slidesLoaded ) < maxPictures )
		imagesLoaded = ( number + imagesLoaded );
	else
		imagesLoaded = maxPictures;
};

const createSlides = ( number ) => {
	const slideshow = document.getElementById( 'slideshow' );

	let slide, limit;
	limit = maxPictures;

	if( ( number + slidesLoaded ) < maxPictures )
		limit = ( number + slidesLoaded );

	for( let i = slidesLoaded; i < limit; i++ ){
		slide = document.createElement( 'div' );
		slide.style = `
			background: url('../../images/${ i }.jpg');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
		`;

		slide.id = `slide_${ i }`;
		addClass( slide, 'slideshow--slide' );
		slideshow.appendChild( slide );
	}
	if( ( number + slidesLoaded ) < maxPictures )
		slidesLoaded = ( number + slidesLoaded );
	else
		slidesLoaded = maxPictures;
};

const initSlideshow = () => {
	createSlides( 8 );
	cache.minimize.onclick = ( e ) => {
		e.preventDefault();
		cache.slideshow.style.display = 'none';
	};

	cache.left.onclick = galleryLeftEventHandler;
	cache.right.onclick = galleryRightEventHandler;
};

const extractIndexFromId = ( id ) => {
	if( id !== undefined )
		return id.split( 'picture_' )[1];
	return;
};

const extractIndexFromIdSlides = ( id ) => {
	if( id !== undefined )
		return id.split( 'slide_' )[1];
	return;
};

const generateIdFromIndex = ( index ) => {
	if( index !== undefined )
		return `slide_${ index }`;
	return;
};

const clearSlideshow = () => {
	console.log( 'slidesLoaded: ', slidesLoaded );
	console.log( 'picturesLoaded: ', imagesLoaded );

	for( let i = 0; i < ( slidesLoaded ); i++ ){
		if( cache[ `slide_${ i }` ] === undefined )
			cache[ `slide_${ i }` ] = document.getElementById( `slide_${ i }` );
		removeClass( cache[ `slide_${ i }` ], 'show' );
	}
};

const getIndexFromPictures = ( e ) => {
	e.preventDefault();

	clearSlideshow();

	// console.log(e);
	const source = e.target || e.srcElement;
	const sourceId = source.id;
	// console.log('sourceId: ', sourceId );
	const targetId = generateIdFromIndex( extractIndexFromId( sourceId ) );
	// add show class to target and make slideshow visible
	var element;

	if( cache[ targetId ] === undefined ){
		element = document.getElementById( targetId );
		cache[ targetId ] = element;
	}	else
		element = cache[ targetId ];
	removeClass( element, 'slideshow--slide' );
	addClass( element, 'slideshow--slide show' );

	cache.slideshow.style.display = 'block';
	cache.current = element;
};
const onClickEventHandler = ( e ) => {
	// FIXME: fix this using 'this'
	const loadButton = document.querySelector( '.wrapper--button' );

	e.preventDefault();
/*	console.log('checking out e: ', e);
	console.log('checking out this: ', this);*/
	addClass( loadButton, 'loading' );
	createPictures( 6 );
	createSlides( 6 );
	setTimeout( () => {
		removeClass( loadButton, 'loading' );
	}, 3500 );
};

const galleryLeftEventHandler = ( e ) => {
	e.preventDefault();
	console.log( 'left clicked' );

	removeClass( cache.current, 'show' );

	const current = extractIndexFromIdSlides( cache.current.id );
	let next = slidesLoaded - 1;

	// This determines next slide to fetch, if hits boundary of slidesloaded
	// fallback to start
	if ( parseInt( current ) > 0 )
		next = parseInt( current ) - 1;

	if( cache[ generateIdFromIndex( `${ next }` ) ] === undefined )
		cache[ generateIdFromIndex( `${ next }` ) ] = document.getElementById( generateIdFromIndex( `${ next }` ) );

	const nextSlide = cache[ generateIdFromIndex( `${ next }` ) ];
	console.log( 'next id: ', generateIdFromIndex( `${ next }` ) );

	removeClass( nextSlide, 'slideshow--slide' );
	addClass( nextSlide, 'slideshow--slide show' );

	cache.current = nextSlide;
};

const galleryRightEventHandler = ( e ) => {
	e.preventDefault();
	console.log( 'right clicked' );

	removeClass( cache.current, 'show' );

	const current = extractIndexFromIdSlides( cache.current.id );
	let next = 0;

	// This determines next slide to fetch, if hits boundary of slidesloaded
	// fallback to start
	if ( parseInt( current ) < ( slidesLoaded - 1 ) )
		next = parseInt( current ) + 1;

	if( cache[ generateIdFromIndex( `${ next }` ) ] === undefined )
		cache[ generateIdFromIndex( `${ next }` ) ] = document.getElementById( generateIdFromIndex( `${ next }` ) );

	const nextSlide = cache[ generateIdFromIndex( `${ next }` ) ];
	console.log( 'next id: ', generateIdFromIndex( `${ next }` ) );

	removeClass( nextSlide, 'slideshow--slide' );
	addClass( nextSlide, 'slideshow--slide show' );

	cache.current = nextSlide;
};

( () => {
	const loadButton = document.querySelector( '.wrapper--button' );
	initGallery();
	initSlideshow();

	imagesLoaded = 8;
	slidesLoaded = 8;

	loadButton.onclick = onClickEventHandler;
} )();