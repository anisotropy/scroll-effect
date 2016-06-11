$('.container').scrEffectOfTitle({
	section: '.part',
	title: '.title',
	position: 'right'
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
	after: function(){
		//console.log('after changing color');
	}
});
