//$('.container').scrEffectOfTitle();
$('.container').scrEffectOfTitle({
	section: '',
	title: '', // default: .title
	position: 'right', // left, right
	before: function($contain){
		//console.log('before');
	},
	after: function($contain){
		//console.log('after');
	}
});
$('.container').scrEffectOfBgcolor({
	background: 'black yellow blue red'
});
