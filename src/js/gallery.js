/* eslint indent: ["error", "tab"] */

/**
* @function addClass
* @param  {element} element      Element whose class name needs to be altered
* @param  {String } newClassName Class Name
* @return None
*/
const addClass = ( element, newClassName ) => {
	if( element !== undefined && newClassName !== undefined ){
		let classNames = element.className;
		if( classNames === undefined || classNames === null ){
			element.className = '';
			classNames = '';
		}
		if( !classNames.includes( newClassName ) ){
			element.className += ` ${newClassName}`;
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
const removeClass = ( element, delClassName ) => {
	if( element !== undefined && delClassName !== undefined ){
		if( element.className === undefined || element.className === null )
			element.className = '';
		if( element.className.includes( delClassName ) ){
			element.className = element.className.replace( new RegExp('(?:^|\\s)'+ delClassName + '(?:\\s|$)'), '' );
		}
	}
	return;
};
/*const imgCreate = ( src, alt, title ) => {
	let img = document.createElement( 'div' );
	img.src = src;
	if ( alt != null ) img.alt = alt;
	if ( title != null ) img.title = title;
	return img;
};*/
// globals
var imagesLoaded = 0, 
	maxPictures = 21,
	slidesLoaded = 0;

let cache = {};

cache[ 'slideshow' ] = document.getElementById( 'gallery-preview' ),
cache[ 'minimize' ] = document.getElementById( 'gallery-minimize' ),
cache[ 'left' ] = document.getElementById( 'gallery-left' ),
cache[ 'right' ] = document.getElementById( 'gallery-right' );

const initGallery = () => {
	createPictures(8);
};
// TODO: use optimize images for preview
const createPictures = (number) => {
	const galleryButton = document.getElementById( 'gallery-button' );
	const gallery = galleryButton.parentNode;
	let picture, limit;
	limit = maxPictures;

	if((number + imagesLoaded) < maxPictures)
		limit = (number + imagesLoaded);

	for( let i = imagesLoaded; i < limit; i++ ){
		picture = document.createElement( 'div' );
		picture.style = `
			background: url('../../images/${i}.jpg');
			background-size: cover;
		`;
		picture.id = `picture_${i}`;
		addClass( picture, 'wrapper--picture' );
		addClass( picture, 'black-and-white' );

		gallery.onclick = getIndexFromPictures;

		gallery.insertBefore( picture, galleryButton );
	}
	if((number + slidesLoaded) < maxPictures)
		imagesLoaded = (number + imagesLoaded);
	else
		imagesLoaded = maxPictures;
};

const createSlides = (number) => {
	const slideshow = document.getElementById( 'slideshow' );

	let slide, limit;
	limit = maxPictures;

	if((number + slidesLoaded) < maxPictures)
		limit = (number + slidesLoaded);

	for( let i = slidesLoaded; i < limit; i++ ){
		slide = document.createElement( 'div' );
		slide.style = `
			background: url('../../images/${i}.jpg');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
		`;

		/*if(i === 1){
			addClass( slide, 'slideshow--slide show' );
		}
		else
			addClass( slide, 'slideshow--slide' );*/
		slide.id = `slide_${i}`;
		addClass( slide, 'slideshow--slide' );
		slideshow.appendChild( slide );
	}
	if((number + slidesLoaded) < maxPictures)
		slidesLoaded = (number + slidesLoaded);
	else
		slidesLoaded = maxPictures;
};

const initSlideshow = () => {
	createSlides(8);
	cache[ 'minimize' ].onclick = ( e ) => {
		e.preventDefault();
		cache[ 'slideshow' ].style.display = 'none';
	};

	cache[ 'left' ].onclick = galleryLeftEventHandler;
	cache[ 'right' ].onclick = galleryRightEventHandler;
};

const extractIndexFromId = ( id ) => {
	if( id !== undefined )
		return id.split('picture_')[1];
	return;
};

const extractIndexFromIdSlides = ( id ) => {
	if( id !== undefined )
		return id.split('slide_')[1];
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
		if( cache[ `slide_${i}` ] === undefined )
			cache[ `slide_${i}` ] = document.getElementById( `slide_${i}` );
		removeClass( cache[ `slide_${i}` ], 'show' );
	}
};
// Need to take care of navigation control with edge cases
const getIndexFromPictures = ( e ) => {
	e.preventDefault();

	clearSlideshow();

	// console.log(e);
	const source = e.target || e.srcElement;
	const sourceId = source.id;
	// console.log('sourceId: ', sourceId );
	const targetId = generateIdFromIndex( extractIndexFromId( sourceId ) );
	// console.log(extractIndexFromId(source.id));
	// console.log(targetId);
	// add show class to target and make slideshow visible
	var element;

	if( cache[ targetId ] === undefined ){
		element = document.getElementById( targetId );
		cache[ targetId ] = element;
	}
	else
		element = cache[ targetId ];
	removeClass( element, 'slideshow--slide' );
	addClass( element, 'slideshow--slide show' );

	cache[ 'slideshow' ].style.display = 'block';
	cache[ 'current' ] = element;

};
const onClickEventHandler = ( e ) => {
	// FIXME: fix this using 'this'
	const loadButton = document.querySelector('.wrapper--button');

	e.preventDefault();
/*	console.log('checking out e: ', e);
	console.log('checking out this: ', this);*/
	addClass(loadButton, 'loading');
	createPictures(6);
	createSlides(6);
	setTimeout(()=>{
		removeClass(loadButton, 'loading');
	}, 3500);
};

const galleryLeftEventHandler = ( e ) => {
	e.preventDefault();
	console.log('left clicked');
};

const galleryRightEventHandler = ( e ) => {
	e.preventDefault();
	console.log('right clicked');

	console.log(cache['current']);
	removeClass( cache[ 'current' ], 'show' );

	const current = extractIndexFromIdSlides( cache[ 'current' ].id );
	const next = parseInt( current ) + 1;

	if( cache[ generateIdFromIndex( `${next}` ) ] === undefined )
		cache[ generateIdFromIndex( `${next}` ) ] = document.getElementById( generateIdFromIndex( `${next}` ) );

	// TODO: fix edge case of going past loaded slides
	
	const nextSlide = cache[ generateIdFromIndex( `${next}` ) ];
	console.log('next id: ', generateIdFromIndex( `${next}` ));

	removeClass( nextSlide, 'slideshow--slide' );
	addClass( nextSlide, 'slideshow--slide show' );
	console.log( 'next slide: ', cache[ generateIdFromIndex( `${next}` ) ] );

	cache[ 'current' ] = nextSlide;
};

// TODO: refactor location of addClass, removeClass and loadButton
(()=>{
	const loadButton = document.querySelector('.wrapper--button');
	initGallery();
	initSlideshow();

	imagesLoaded = 8;
	slidesLoaded = 8;

	loadButton.onclick = onClickEventHandler;

	// TODO: create modal -> onclick event of pictures change css of modal to reflect new src -> and show modal
	// on close -> modal hide
	// on swipe -> based on current swipe add 1 to id
	// 		-> on edge case -> circle back to first one
	//		-> for this we need to track globally how many images have been loaded

	// TODO: OR grow selected picture and shrink pictures in matrix;
})();