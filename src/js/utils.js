/*eslint no-unused-vars: 0*/
module.exports = {
	isMobile: {
		Android: function () {
			return navigator.userAgent.match( /Android/i );
		},
		BlackBerry: function () {
			return navigator.userAgent.match( /BlackBerry/i );
		},
		iOS: function () {
			return navigator.userAgent.match( /iPhone|iPad|iPod/i );
		},
		Opera: function () {
			return navigator.userAgent.match( /Opera Mini/i );
		},
		Windows: function () {
			return navigator.userAgent.match( /IEMobile/i ) || navigator.userAgent.match( /WPDesktop/i );
		},
		any: function () {
			return ( this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows() );
		}
	},

	isTablet: () => {
		if( screen.width > 721 && screen.width < 1280 )
			return true;
		return false;
	},
	/**
	* @function addClass
	* @param  {element} element      Element whose class name needs to be altered
	* @param  {String } newClassName Class Name
	* @return None
	*/
	addClass: ( element, newClassName ) => {
		if( element !== undefined && newClassName !== undefined ){
			let classNames = element.className;
			if( classNames === undefined || classNames === null ){
				element.className = '';
				classNames = '';
			}
			if( !classNames.includes( newClassName ) ){
				element.className += ` ${ newClassName }`;
			}
		}
		return;
	},

	/**
	* @function removeClass
	* @param  {element} element      Element whose class name needs to be altered
	* @param  {String } delClassName Class Name
	* @return None
	*/
	removeClass: ( element, delClassName ) => {
		if( element !== undefined && delClassName !== undefined ){
			if( element.className === undefined || element.className === null )
				element.className = '';
			if( element.className.includes( delClassName ) ){
				element.className = element.className.replace( new RegExp( `(?:^|\\s)${ delClassName }(?:\\s|$)` ), '' );
			}
		}
		return;
	},
	normalizeNames: ( name ) => {
		if( name !== undefined || name !== null )
			return name.replace( '_', ' ' );
	}
};