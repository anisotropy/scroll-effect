$('.container').scrEffectOfTitle({
	section: '.part',
	title: '.title',
	position: 'right',
	beforework: function(){
		console.log('before fixing title');
	},
	afterwork: function(){
		console.log('after fixing title');
	}
});
$('.container').scrEffectOfBgcolor({
	section: '.part',
	bgcolors: '#5882FA #FACC2E #9FF781 #FA8258',
	background: '',
	text:'.status, .part .title',
	border: '.status',
	transition: 0.5,
	beforework: function(){
		console.log('before changing color');
	},
	afterwork: function(){
		console.log('after changing color');
	}
});
