//$('.container').scrEffectOfTitle();
$('.container').scrEffectOfTitle({
	section: '',
	title: '', // default: .title
	position: '', // left, right
	before: function($contain){
		//console.log('before');
	},
	after: function($contain){
		//console.log('after');
	}
});
$('.container').scrEffectOfBgcolor({
	background: 'black yellow blue red',
	transition: 1
},{
	child: '',
	element: {
		background: '',
		text: '',
		border: ''
	},
	beyond: {
		background: '',
		text: '.status',
		border: ''
	},
	before: function($contain){
		//console.log('before changing color: ' + $contain.css('background-color'));
	},
	after: function($contain){
		//console.log('after changing color');
	}
});

$(document).ready(function(){
	var active = true;
	setInterval(function(){
		if(active){
			console.log('deactive');
			$('.container:first-child').trigger('deactivate-scroll-effect-bgcolor');
			active = false;
		} else {
			console.log('active');
			$('.container:first-child').trigger('activate-scroll-effect-bgcolor');
			active = true;
		}
	}, 2000);
	/*
	setTimeout(function(){
		console.log('second');
		$('.container:last-child').trigger('deactivate-scroll-effect-bgcolor');
	}, 4000);
	*/
});
