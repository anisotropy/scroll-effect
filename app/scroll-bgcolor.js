(function($){
	$.fn.scrEffectOfBgcolor = function(arg){
		var selector = this.selector;
		if($(selector).length) scrEffectOfBgcolor(selctor, arg);
		else $(document).ready(function(){ scrEffectOfBgcolor(selector, arg); });
	}
	function scrEffectOfBgcolor(selector, arg){
		var data = {}; convToObj(arg, data);
		$(selector).css('background-color', data.bgcolors[0]);
		$(selector).css({'transition': data.transition, '-webkit-transition': data.transition});
		$(selector).each(function(){
			changeColor($(this), data);
			$(this).on('scroll', function(){ changeColor($(this), data); });
		});
	}
	function convToObj(arg, data){
		data.section = arg.section;
		data.bgcolors = arg.bgcolors.split(' ');
		data.background = arg.background;
		data.text = arg.text;
		data.border = arg.border;
		data.transition = arg.transition ? arg.transition +'s' : '1s';
	}
	function changeColor($contain, data){
		var $contain, conHeight, origin;
		if(!$contain.is('body')){
			conHeight = $contain.outerHeight();
			origin = $contain.offset().top;
		}
		else {
			conHeight = $(window).outerHeight();
			origin = $(window).scrollTop();
		}
		$contain.find(data.section).each(function(index){
			var top = $(this).offset().top - origin;
			var bottom = top + $(this).outerHeight(true);
			if(bottom / conHeight > 0.5 || top / conHeight >= 0.5){
				$contain.css('background-color', data.bgcolors[index]);
				$(data.background).css('background-color', data.bgcolors[index]);
				$(data.text).css('color', data.bgcolors[index]);
				$(data.border).css('border-color', data.bgcolors[index]);
				return false;
			}
		});
	}
})(jQuery);
