(function($){
	$(document).ready(function(){
		$('.md.md-scr-title').each(function(){
			scrEffect($(this));
		});
		$('.md.md-scr-title').on('scroll', function(event){
			scrEffect($(this));
		});
		$(window).scroll(function(){
			if($('body').is('.md.md-scr-title')) scrEffect($('body'));
		});
		$(window).resize(function(){
			$('.md.md-scr-title').each(function(){
				scrEffect($(this));
			});
		});
	});
	function scrEffect($this){
		var $contain, origin, cOfs;
		$contain = $this;
		cOfs = $contain.offset();
		if($this.is('body')){
			origin = $(window).scrollTop();
		} else {
			origin = cOfs.top;
		}
		$contain.find('.md.md-section').each(function(){
			var sOfs = $(this).offset();
			sOfs.height = $(this).outerHeight(true);
			sOfs.width = $(this).outerWidth();
			sOfs.bottom = sOfs.top + $(this).outerHeight(true);
			var $title = $(this).find('.md.md-title'); var tLeft;
			if($contain.hasClass('md-right')){
				tLeft = sOfs.width - $title.outerWidth();
			} else {
				tLeft = 0;
			}
			if(sOfs.top <= origin && sOfs.bottom > origin) {
				if(sOfs.bottom - origin <= $title.outerHeight()){
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
					top: 0, left: tLeft
				});
			}
		});
	}
})(jQuery);
