/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\n__webpack_require__(2);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2Nyb2xsLWVmZmVjdC5qcz84NzE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vc2Nyb2xsLXRpdGxlLmpzJyk7XG5yZXF1aXJlKCcuL3Njcm9sbC1iZ2NvbG9yLmpzJyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL3Njcm9sbC1lZmZlY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("(function($){\n\t$.fn.scrEffectOfTitle = function(arg){\n\t\tvar selector = this.selector;\n\t\tif($(selector).length) scrEffectOfTitle(selector, arg);\n\t\telse $(document).ready(function(){ scrEffectOfTitle(selector, arg); });\n\t}\n\tfunction scrEffectOfTitle(selector, arg){\n\t\t$(selector).css({ 'overflow-y': 'scroll', '-webkit-overflow-scrolling': 'touch' });\n\t\t$(selector).children(arg.section).css({ 'position': 'relative' });\n\t\t$(selector).children(arg.section).children(arg.title).css({ 'position': 'absolute', 'top': 0, 'left': 0 });\n\t\t$(selector).each(function(){\n\t\t\tfixTitle($(this), arg);\n\t\t\tif($(this).is('body')){\n\t\t\t\t$(window).scroll(function(){ fixTitle($('body'), arg); });\n\t\t\t} else {\n\t\t\t\t$(this).on('scroll', function(){ fixTitle($(this), arg); });\n\t\t\t}\n\t\t});\n\t\t$(window).resize(function(){\n\t\t\t$(selector).each(function(){ fixTitle($(this), arg); });\n\t\t});\n\t}\n\tfunction fixTitle($contain, arg){\n\t\tif(arg.beforework) arg.beforework();\n\n\t\tvar cOfs = $contain.offset();\n\t\tvar origin = cOfs.top;\n\t\tif($contain.is('body')){ origin = $(window).scrollTop(); }\n\t\t$contain.children(arg.section).each(function(){\n\t\t\tvar sOfs = $(this).offset();\n\t\t\tsOfs.height = $(this).outerHeight(true);\n\t\t\tsOfs.width = $(this).outerWidth();\n\t\t\tsOfs.bottom = sOfs.top + $(this).outerHeight(true);\n\t\t\tvar $title = $(this).children(arg.title);\n\t\t\tvar tLeft = 0;\n\t\t\tif(arg.position === 'right') tLeft = sOfs.width - $title.outerWidth();\n\t\t\tif(sOfs.top <= origin && sOfs.bottom > origin) {\n\t\t\t\tif(sOfs.bottom - origin < $title.outerHeight()){\n\t\t\t\t\t$title.css({\n\t\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\t\ttop: sOfs.height - $title.outerHeight(),\n\t\t\t\t\t\tleft: tLeft\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\t$title.css({\n\t\t\t\t\t\tposition: 'fixed',\n\t\t\t\t\t\ttop: cOfs.top,\n\t\t\t\t\t\tleft: sOfs.left + tLeft\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\t$title.css({\n\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\ttop: 0,\n\t\t\t\t\tleft: tLeft\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\n\t\tif(arg.afterwork) arg.afterwork();\n\t}\n})(jQuery);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2Nyb2xsLXRpdGxlLmpzP2Q1YTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUNBQWlDLEVBQUU7QUFDdkU7QUFDQTtBQUNBLG1CQUFtQixnRUFBZ0U7QUFDbkYseUNBQXlDLHlCQUF5QjtBQUNsRSw2REFBNkQsOENBQThDO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywwQkFBMEIsRUFBRTtBQUM1RCxJQUFJO0FBQ0osb0NBQW9DLHdCQUF3QixFQUFFO0FBQzlEO0FBQ0EsR0FBRztBQUNIO0FBQ0EsK0JBQStCLHdCQUF3QixFQUFFO0FBQ3pELEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixnQ0FBZ0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCl7XG5cdCQuZm4uc2NyRWZmZWN0T2ZUaXRsZSA9IGZ1bmN0aW9uKGFyZyl7XG5cdFx0dmFyIHNlbGVjdG9yID0gdGhpcy5zZWxlY3Rvcjtcblx0XHRpZigkKHNlbGVjdG9yKS5sZW5ndGgpIHNjckVmZmVjdE9mVGl0bGUoc2VsZWN0b3IsIGFyZyk7XG5cdFx0ZWxzZSAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpeyBzY3JFZmZlY3RPZlRpdGxlKHNlbGVjdG9yLCBhcmcpOyB9KTtcblx0fVxuXHRmdW5jdGlvbiBzY3JFZmZlY3RPZlRpdGxlKHNlbGVjdG9yLCBhcmcpe1xuXHRcdCQoc2VsZWN0b3IpLmNzcyh7ICdvdmVyZmxvdy15JzogJ3Njcm9sbCcsICctd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZyc6ICd0b3VjaCcgfSk7XG5cdFx0JChzZWxlY3RvcikuY2hpbGRyZW4oYXJnLnNlY3Rpb24pLmNzcyh7ICdwb3NpdGlvbic6ICdyZWxhdGl2ZScgfSk7XG5cdFx0JChzZWxlY3RvcikuY2hpbGRyZW4oYXJnLnNlY3Rpb24pLmNoaWxkcmVuKGFyZy50aXRsZSkuY3NzKHsgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJywgJ3RvcCc6IDAsICdsZWZ0JzogMCB9KTtcblx0XHQkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRmaXhUaXRsZSgkKHRoaXMpLCBhcmcpO1xuXHRcdFx0aWYoJCh0aGlzKS5pcygnYm9keScpKXtcblx0XHRcdFx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpeyBmaXhUaXRsZSgkKCdib2R5JyksIGFyZyk7IH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXsgZml4VGl0bGUoJCh0aGlzKSwgYXJnKTsgfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xuXHRcdFx0JChzZWxlY3RvcikuZWFjaChmdW5jdGlvbigpeyBmaXhUaXRsZSgkKHRoaXMpLCBhcmcpOyB9KTtcblx0XHR9KTtcblx0fVxuXHRmdW5jdGlvbiBmaXhUaXRsZSgkY29udGFpbiwgYXJnKXtcblx0XHRpZihhcmcuYmVmb3Jld29yaykgYXJnLmJlZm9yZXdvcmsoKTtcblxuXHRcdHZhciBjT2ZzID0gJGNvbnRhaW4ub2Zmc2V0KCk7XG5cdFx0dmFyIG9yaWdpbiA9IGNPZnMudG9wO1xuXHRcdGlmKCRjb250YWluLmlzKCdib2R5JykpeyBvcmlnaW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7IH1cblx0XHQkY29udGFpbi5jaGlsZHJlbihhcmcuc2VjdGlvbikuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNPZnMgPSAkKHRoaXMpLm9mZnNldCgpO1xuXHRcdFx0c09mcy5oZWlnaHQgPSAkKHRoaXMpLm91dGVySGVpZ2h0KHRydWUpO1xuXHRcdFx0c09mcy53aWR0aCA9ICQodGhpcykub3V0ZXJXaWR0aCgpO1xuXHRcdFx0c09mcy5ib3R0b20gPSBzT2ZzLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cdFx0XHR2YXIgJHRpdGxlID0gJCh0aGlzKS5jaGlsZHJlbihhcmcudGl0bGUpO1xuXHRcdFx0dmFyIHRMZWZ0ID0gMDtcblx0XHRcdGlmKGFyZy5wb3NpdGlvbiA9PT0gJ3JpZ2h0JykgdExlZnQgPSBzT2ZzLndpZHRoIC0gJHRpdGxlLm91dGVyV2lkdGgoKTtcblx0XHRcdGlmKHNPZnMudG9wIDw9IG9yaWdpbiAmJiBzT2ZzLmJvdHRvbSA+IG9yaWdpbikge1xuXHRcdFx0XHRpZihzT2ZzLmJvdHRvbSAtIG9yaWdpbiA8ICR0aXRsZS5vdXRlckhlaWdodCgpKXtcblx0XHRcdFx0XHQkdGl0bGUuY3NzKHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0XHRcdFx0dG9wOiBzT2ZzLmhlaWdodCAtICR0aXRsZS5vdXRlckhlaWdodCgpLFxuXHRcdFx0XHRcdFx0bGVmdDogdExlZnRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkdGl0bGUuY3NzKHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdFx0dG9wOiBjT2ZzLnRvcCxcblx0XHRcdFx0XHRcdGxlZnQ6IHNPZnMubGVmdCArIHRMZWZ0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCR0aXRsZS5jc3Moe1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRsZWZ0OiB0TGVmdFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmKGFyZy5hZnRlcndvcmspIGFyZy5hZnRlcndvcmsoKTtcblx0fVxufSkoalF1ZXJ5KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvc2Nyb2xsLXRpdGxlLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("(function($){\n\t$.fn.scrEffectOfBgcolor = function(arg){\n\t\tvar selector = this.selector;\n\t\tif($(selector).length) scrEffectOfBgcolor(selector, arg);\n\t\telse $(document).ready(function(){ scrEffectOfBgcolor(selector, arg); });\n\t}\n\tfunction scrEffectOfBgcolor(selector, arg){\n\t\tconvArg(arg);\n\t\t$(selector).css('background-color', arg.bgcolors[0]);\n\t\t$(selector).css({'transition': arg.transition, '-webkit-transition': arg.transition});\n\t\t$(selector).each(function(){\n\t\t\tchangeColor($(this), arg);\n\t\t\t$(this).on('scroll', function(){ changeColor($(this), arg); });\n\t\t});\n\t}\n\tfunction convArg(arg){\n\t\targ.bgcolors = arg.bgcolors.split(' ');\n\t\targ.transition = arg.transition ? arg.transition +'s' : '1s';\n\t}\n\tfunction changeColor($contain, arg){\n\t\tif(arg.beforework) arg.beforework();\n\n\t\tvar $contain, conHeight, origin;\n\t\tif(!$contain.is('body')){\n\t\t\tconHeight = $contain.outerHeight();\n\t\t\torigin = $contain.offset().top;\n\t\t}\n\t\telse {\n\t\t\tconHeight = $(window).outerHeight();\n\t\t\torigin = $(window).scrollTop();\n\t\t}\n\t\t$contain.find(arg.section).each(function(index){\n\t\t\tvar top = $(this).offset().top - origin;\n\t\t\tvar bottom = top + $(this).outerHeight(true);\n\t\t\tif(bottom / conHeight > 0.5 || top / conHeight >= 0.5){\n\t\t\t\t$contain.css('background-color', arg.bgcolors[index]);\n\t\t\t\t$(arg.background).css('background-color', arg.bgcolors[index]);\n\t\t\t\t$(arg.text).css('color', arg.bgcolors[index]);\n\t\t\t\t$(arg.border).css('border-color', arg.bgcolors[index]);\n\t\t\t\treturn false;\n\t\t\t}\n\t\t});\n\n\t\tif(arg.afterwork) arg.afterwork();\n\t}\n})(jQuery);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2Nyb2xsLWJnY29sb3IuanM/YWU3ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQ0FBbUMsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtRUFBbUU7QUFDdEY7QUFDQTtBQUNBLG1DQUFtQywyQkFBMkIsRUFBRTtBQUNoRSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCl7XG5cdCQuZm4uc2NyRWZmZWN0T2ZCZ2NvbG9yID0gZnVuY3Rpb24oYXJnKXtcblx0XHR2YXIgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yO1xuXHRcdGlmKCQoc2VsZWN0b3IpLmxlbmd0aCkgc2NyRWZmZWN0T2ZCZ2NvbG9yKHNlbGVjdG9yLCBhcmcpO1xuXHRcdGVsc2UgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXsgc2NyRWZmZWN0T2ZCZ2NvbG9yKHNlbGVjdG9yLCBhcmcpOyB9KTtcblx0fVxuXHRmdW5jdGlvbiBzY3JFZmZlY3RPZkJnY29sb3Ioc2VsZWN0b3IsIGFyZyl7XG5cdFx0Y29udkFyZyhhcmcpO1xuXHRcdCQoc2VsZWN0b3IpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGFyZy5iZ2NvbG9yc1swXSk7XG5cdFx0JChzZWxlY3RvcikuY3NzKHsndHJhbnNpdGlvbic6IGFyZy50cmFuc2l0aW9uLCAnLXdlYmtpdC10cmFuc2l0aW9uJzogYXJnLnRyYW5zaXRpb259KTtcblx0XHQkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRjaGFuZ2VDb2xvcigkKHRoaXMpLCBhcmcpO1xuXHRcdFx0JCh0aGlzKS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXsgY2hhbmdlQ29sb3IoJCh0aGlzKSwgYXJnKTsgfSk7XG5cdFx0fSk7XG5cdH1cblx0ZnVuY3Rpb24gY29udkFyZyhhcmcpe1xuXHRcdGFyZy5iZ2NvbG9ycyA9IGFyZy5iZ2NvbG9ycy5zcGxpdCgnICcpO1xuXHRcdGFyZy50cmFuc2l0aW9uID0gYXJnLnRyYW5zaXRpb24gPyBhcmcudHJhbnNpdGlvbiArJ3MnIDogJzFzJztcblx0fVxuXHRmdW5jdGlvbiBjaGFuZ2VDb2xvcigkY29udGFpbiwgYXJnKXtcblx0XHRpZihhcmcuYmVmb3Jld29yaykgYXJnLmJlZm9yZXdvcmsoKTtcblxuXHRcdHZhciAkY29udGFpbiwgY29uSGVpZ2h0LCBvcmlnaW47XG5cdFx0aWYoISRjb250YWluLmlzKCdib2R5Jykpe1xuXHRcdFx0Y29uSGVpZ2h0ID0gJGNvbnRhaW4ub3V0ZXJIZWlnaHQoKTtcblx0XHRcdG9yaWdpbiA9ICRjb250YWluLm9mZnNldCgpLnRvcDtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25IZWlnaHQgPSAkKHdpbmRvdykub3V0ZXJIZWlnaHQoKTtcblx0XHRcdG9yaWdpbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHR9XG5cdFx0JGNvbnRhaW4uZmluZChhcmcuc2VjdGlvbikuZWFjaChmdW5jdGlvbihpbmRleCl7XG5cdFx0XHR2YXIgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBvcmlnaW47XG5cdFx0XHR2YXIgYm90dG9tID0gdG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCh0cnVlKTtcblx0XHRcdGlmKGJvdHRvbSAvIGNvbkhlaWdodCA+IDAuNSB8fCB0b3AgLyBjb25IZWlnaHQgPj0gMC41KXtcblx0XHRcdFx0JGNvbnRhaW4uY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgYXJnLmJnY29sb3JzW2luZGV4XSk7XG5cdFx0XHRcdCQoYXJnLmJhY2tncm91bmQpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGFyZy5iZ2NvbG9yc1tpbmRleF0pO1xuXHRcdFx0XHQkKGFyZy50ZXh0KS5jc3MoJ2NvbG9yJywgYXJnLmJnY29sb3JzW2luZGV4XSk7XG5cdFx0XHRcdCQoYXJnLmJvcmRlcikuY3NzKCdib3JkZXItY29sb3InLCBhcmcuYmdjb2xvcnNbaW5kZXhdKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYoYXJnLmFmdGVyd29yaykgYXJnLmFmdGVyd29yaygpO1xuXHR9XG59KShqUXVlcnkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9zY3JvbGwtYmdjb2xvci5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);