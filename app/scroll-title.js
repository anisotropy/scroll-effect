(function($){
	$.fn.scrEffectOfTitle = function(arg){
		var selector = this.selector;
		if($(selector).length) scrEffectOfTitle(selector, arg);
		else $(document).ready(function(){ scrEffectOfTitle(selector, arg); });
	}
	function scrEffectOfTitle(selector, arg){
		$(selector).css({ 'overflow-y': 'scroll', '-webkit-overflow-scrolling': 'touch' });
		$(selector).children(arg.section).css({ 'position': 'relative' });
		$(selector).children(arg.section).children(arg.title).css({ 'position': 'absolute', 'top': 0, 'left': 0 });
		$(selector).each(function(){
			fixTitle($(this), arg);
			if($(this).is('body')){
				$(window).scroll(function(){ fixTitle($('body'), arg); });
			} else {
				$(this).on('scroll', function(){ fixTitle($(this), arg); });
			}
		});
		$(window).resize(function(){
			$(selector).each(function(){ fixTitle($(this), arg); });
		});
	}
	function fixTitle($contain, arg){

		var cOfs = $contain.offset();
		var origin = cOfs.top;
		if($contain.is('body')){ origin = $(window).scrollTop(); }
		$contain.children(arg.section).each(function(){
			var sOfs = $(this).offset();
			sOfs.height = $(this).outerHeight(true);
			sOfs.width = $(this).outerWidth();
			sOfs.bottom = sOfs.top + $(this).outerHeight(true);
			var $title = $(this).children(arg.title);
			var tLeft = 0;
			if(arg.position === 'right') tLeft = sOfs.width - $title.outerWidth();
			if(sOfs.top <= origin && sOfs.bottom > origin) {
				if(sOfs.bottom - origin < $title.outerHeight()){
					$title.css({
						position: 'absolute',
						top: sOfs.height - $title.outerHeight(),
						left: tLeft
					});
				} else {
					$title.css({
						position: 'fixed',
						top: cOfs.top,
						left: sOfs.left + tLeft
					});
				}
			} else {
				$title.css({
					position: 'absolute',
					top: 0,
					left: tLeft
				});
			}
		});

		
	}
})(jQuery);
