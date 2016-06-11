(function($){
	$.fn.scrEffectOfBgcolor = function(arg){
		var selector = this.selector;
		if($(selector).length) scrEffectOfBgcolor(selector, arg);
		else $(document).ready(function(){ scrEffectOfBgcolor(selector, arg); });
	}
	function scrEffectOfBgcolor(selector, arg){
		convArg(arg);
		$(selector).css('background-color', arg.bgcolors[0]);
		$(selector).css({'transition': arg.transition, '-webkit-transition': arg.transition});
		$(selector).each(function(){
			changeColor($(this), arg);
			$(this).on('scroll', function(){ changeColor($(this), arg); });
		});
	}
	function convArg(arg){
		arg.bgcolors = arg.bgcolors.split(' ');
		arg.transition = arg.transition ? arg.transition +'s' : '1s';
	}
	function changeColor($contain, arg){
		if(arg.beforework) arg.beforework();

		var $contain, conHeight, origin;
		if(!$contain.is('body')){
			conHeight = $contain.outerHeight();
			origin = $contain.offset().top;
		}
		else {
			conHeight = $(window).outerHeight();
			origin = $(window).scrollTop();
		}
		$contain.find(arg.section).each(function(index){
			var top = $(this).offset().top - origin;
			var bottom = top + $(this).outerHeight(true);
			if(bottom / conHeight > 0.5 || top / conHeight >= 0.5){
				$contain.css('background-color', arg.bgcolors[index]);
				$(arg.background).css('background-color', arg.bgcolors[index]);
				$(arg.text).css('color', arg.bgcolors[index]);
				$(arg.border).css('border-color', arg.bgcolors[index]);
				return false;
			}
		});

		if(arg.afterwork) arg.afterwork();
	}
})(jQuery);
