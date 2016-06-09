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

	eval("__webpack_require__(1);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2Nyb2xsLWVmZmVjdC5qcz84NzE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL3Njcm9sbC10aXRsZS5qcycpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9zY3JvbGwtZWZmZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("(function($){\n\t$.fn.scrEffectOfTitle = function(arg){\n\t\tvar selector = this.selector;\n\t\tif($(selector).length) scrEffectOfTitle(selctor, arg);\n\t\telse $(document).ready(function(){ scrEffectOfTitle(selector, arg); });\n\t}\n\tfunction scrEffectOfTitle(selector, arg){\n\t\t$(selector).css({ 'overflow-y': 'scroll', '-webkit-overflow-scrolling': 'touch' });\n\t\t$(selector).children(arg.section).css({ 'position': 'relative' });\n\t\t$(selector).children(arg.section).children(arg.title).css({ 'position': 'absolute', 'top': 0, 'left': 0 });\n\t\t$(selector).each(function(){\n\t\t\tfixTitle($(this), arg);\n\t\t\tif($(this).is('body')){\n\t\t\t\t$(window).scroll(function(){ fixTitle($('body'), arg); });\n\t\t\t} else {\n\t\t\t\t$(this).on('scroll', function(){ fixTitle($(this), arg); });\n\t\t\t}\n\t\t});\n\t\t$(window).resize(function(){\n\t\t\t$(selector).each(function(){ fixTitle($(this), arg); });\n\t\t});\n\t}\n\tfunction fixTitle($contain, arg){\n\t\tvar cOfs = $contain.offset();\n\t\tvar origin = cOfs.top;\n\t\tif($contain.is('body')){ origin = $(window).scrollTop(); }\n\t\t$contain.children(arg.section).each(function(){\n\t\t\tvar sOfs = $(this).offset();\n\t\t\tsOfs.height = $(this).outerHeight(true);\n\t\t\tsOfs.width = $(this).outerWidth();\n\t\t\tsOfs.bottom = sOfs.top + $(this).outerHeight(true);\n\t\t\tvar $title = $(this).children(arg.title);\n\t\t\tvar tLeft = 0;\n\t\t\tif(arg.position === 'right') tLeft = sOfs.width - $title.outerWidth();\n\t\t\tif(sOfs.top <= origin && sOfs.bottom > origin) {\n\t\t\t\tif(sOfs.bottom - origin < $title.outerHeight()){\n\t\t\t\t\t$title.css({\n\t\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\t\ttop: sOfs.height - $title.outerHeight(),\n\t\t\t\t\t\tleft: tLeft\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\t$title.css({\n\t\t\t\t\t\tposition: 'fixed',\n\t\t\t\t\t\ttop: cOfs.top,\n\t\t\t\t\t\tleft: sOfs.left + tLeft\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\t$title.css({\n\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\ttop: 0,\n\t\t\t\t\tleft: tLeft\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t}\n})(jQuery);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2Nyb2xsLXRpdGxlLmpzP2Q1YTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUNBQWlDLEVBQUU7QUFDdkU7QUFDQTtBQUNBLG1CQUFtQixnRUFBZ0U7QUFDbkYseUNBQXlDLHlCQUF5QjtBQUNsRSw2REFBNkQsOENBQThDO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywwQkFBMEIsRUFBRTtBQUM1RCxJQUFJO0FBQ0osb0NBQW9DLHdCQUF3QixFQUFFO0FBQzlEO0FBQ0EsR0FBRztBQUNIO0FBQ0EsK0JBQStCLHdCQUF3QixFQUFFO0FBQ3pELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQ0FBZ0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCl7XG5cdCQuZm4uc2NyRWZmZWN0T2ZUaXRsZSA9IGZ1bmN0aW9uKGFyZyl7XG5cdFx0dmFyIHNlbGVjdG9yID0gdGhpcy5zZWxlY3Rvcjtcblx0XHRpZigkKHNlbGVjdG9yKS5sZW5ndGgpIHNjckVmZmVjdE9mVGl0bGUoc2VsY3RvciwgYXJnKTtcblx0XHRlbHNlICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7IHNjckVmZmVjdE9mVGl0bGUoc2VsZWN0b3IsIGFyZyk7IH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHNjckVmZmVjdE9mVGl0bGUoc2VsZWN0b3IsIGFyZyl7XG5cdFx0JChzZWxlY3RvcikuY3NzKHsgJ292ZXJmbG93LXknOiAnc2Nyb2xsJywgJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJzogJ3RvdWNoJyB9KTtcblx0XHQkKHNlbGVjdG9yKS5jaGlsZHJlbihhcmcuc2VjdGlvbikuY3NzKHsgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyB9KTtcblx0XHQkKHNlbGVjdG9yKS5jaGlsZHJlbihhcmcuc2VjdGlvbikuY2hpbGRyZW4oYXJnLnRpdGxlKS5jc3MoeyAncG9zaXRpb24nOiAnYWJzb2x1dGUnLCAndG9wJzogMCwgJ2xlZnQnOiAwIH0pO1xuXHRcdCQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdGZpeFRpdGxlKCQodGhpcyksIGFyZyk7XG5cdFx0XHRpZigkKHRoaXMpLmlzKCdib2R5Jykpe1xuXHRcdFx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7IGZpeFRpdGxlKCQoJ2JvZHknKSwgYXJnKTsgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpeyBmaXhUaXRsZSgkKHRoaXMpLCBhcmcpOyB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XG5cdFx0XHQkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCl7IGZpeFRpdGxlKCQodGhpcyksIGFyZyk7IH0pO1xuXHRcdH0pO1xuXHR9XG5cdGZ1bmN0aW9uIGZpeFRpdGxlKCRjb250YWluLCBhcmcpe1xuXHRcdHZhciBjT2ZzID0gJGNvbnRhaW4ub2Zmc2V0KCk7XG5cdFx0dmFyIG9yaWdpbiA9IGNPZnMudG9wO1xuXHRcdGlmKCRjb250YWluLmlzKCdib2R5JykpeyBvcmlnaW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7IH1cblx0XHQkY29udGFpbi5jaGlsZHJlbihhcmcuc2VjdGlvbikuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNPZnMgPSAkKHRoaXMpLm9mZnNldCgpO1xuXHRcdFx0c09mcy5oZWlnaHQgPSAkKHRoaXMpLm91dGVySGVpZ2h0KHRydWUpO1xuXHRcdFx0c09mcy53aWR0aCA9ICQodGhpcykub3V0ZXJXaWR0aCgpO1xuXHRcdFx0c09mcy5ib3R0b20gPSBzT2ZzLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cdFx0XHR2YXIgJHRpdGxlID0gJCh0aGlzKS5jaGlsZHJlbihhcmcudGl0bGUpO1xuXHRcdFx0dmFyIHRMZWZ0ID0gMDtcblx0XHRcdGlmKGFyZy5wb3NpdGlvbiA9PT0gJ3JpZ2h0JykgdExlZnQgPSBzT2ZzLndpZHRoIC0gJHRpdGxlLm91dGVyV2lkdGgoKTtcblx0XHRcdGlmKHNPZnMudG9wIDw9IG9yaWdpbiAmJiBzT2ZzLmJvdHRvbSA+IG9yaWdpbikge1xuXHRcdFx0XHRpZihzT2ZzLmJvdHRvbSAtIG9yaWdpbiA8ICR0aXRsZS5vdXRlckhlaWdodCgpKXtcblx0XHRcdFx0XHQkdGl0bGUuY3NzKHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0XHRcdFx0dG9wOiBzT2ZzLmhlaWdodCAtICR0aXRsZS5vdXRlckhlaWdodCgpLFxuXHRcdFx0XHRcdFx0bGVmdDogdExlZnRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkdGl0bGUuY3NzKHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdFx0dG9wOiBjT2ZzLnRvcCxcblx0XHRcdFx0XHRcdGxlZnQ6IHNPZnMubGVmdCArIHRMZWZ0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCR0aXRsZS5jc3Moe1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRsZWZ0OiB0TGVmdFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSkoalF1ZXJ5KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvc2Nyb2xsLXRpdGxlLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);