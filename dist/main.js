"use strict";!function(){document.getElementById("first-header").style.visibility="hidden"}();
"use strict";!function(){var e="Mohseen";console.log("hello "+e+"!");var n=document.getElementById("scene");new Parallax(n)}(),function(){var e=function(e,n){if(void 0!==e&&void 0!==n){var i=e.className;i.includes(n)||(e.className+=" "+n)}},n=function(e,n){void 0!==e&&void 0!==n&&e.className.includes(n)&&(e.className=e.className.replace(new RegExp("(?:^|\\s)"+n+"(?:\\s|$)"),""))};window.onscroll=function(){var i=window,l=i.innerHeight-70,s=document.getElementById("nav-bar");i.scrollY>l?s.className.includes("fixed")||(s.className+=" fixed"):s.className="",i.scrollY>400?e(document.querySelector(".visible"),"animated slideInUp"):n(document.querySelector(".visible"),"animated slideInUp"),i.scrollY>.12*i.innerHeight?(document.getElementById("first-header").style.visibility="visible",e(document.getElementById("first-header"),"animated zoomInDown")):n(document.getElementById("first-header"),"animated zoomInDown")}}();
//# sourceMappingURL=main.js.map
