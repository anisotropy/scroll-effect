(function($){
	$.fn.scrEffectOfTitle = function(arg, option){
		var selector = this.selector;
		if($(selector).length) scrEffectOfTitle(selector, arg);
		else $(document).ready(function(){ scrEffectOfTitle(selector, arg); });
	}
	function scrEffectOfTitle(selector, arg, option){
		if(arg === undefined) arg = {};
		if(!arg.title) arg.title = '.title';
		$(selector).css({ 'overflow-y': 'scroll', '-webkit-overflow-scrolling': 'touch' });
		$(selector).children(arg.section).css({ 'position': 'relative' });
		$(selector).children(arg.section).children(arg.title).css({ 'position': 'absolute', 'top': 0, 'left': 0 });
		$(selector).each(function(){
			var active = true;
			var $contain = $(this);
			if(option !== 'wait') fixTitle($contain, arg);
			$contain.on('scroll', function(){ if(active){
				fixTitle($contain, arg);
			}});
			$contain.on('scroll', function(){ if(active){
				fixTitle($contain, arg);
			}});
			$(window).resize(function(){ if(active){
				fixTitle($contain, arg);
			}});
			$contain.on('activate-scroll-effect-title', function(){ active = true; });
			$contain.on('deactivate-scroll-effect-title', function(){ active = false; fixTitle($contain, arg, false); });
		});
	}
	function fixTitle($contain, arg, active){
		if(arg.before) arg.before($contain);

		var cOfs = $contain.offset();
		var origin = cOfs.top;
		if($contain.is('body')){ origin = $(window).scrollTop(); }
		$contain.children(arg.section).each(function(){
			var $section = $(this);
			var sOfs = $section.offset();
			sOfs.height = $section.outerHeight();
			sOfs.width = $section.outerWidth();
			sOfs.bottom = sOfs.top + sOfs.height;
			var $title = $section.children(arg.title);
			var tLeft = 0;
			if(arg.position === 'right') tLeft = sOfs.width - $title.outerWidth();
			if(active !== false && sOfs.top <= origin && sOfs.bottom > origin) {
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

		if(arg.after) arg.after($contain);
	}
})(jQuery);
