$(document).ready(function() { init() })

function init() {
  Tabletop.init( { key: '16CvigNSkrGPKT8KH7Te89mspSwsqm4LK_FF2q-wfBZc',
                   callback: clips,
                   simpleSheet: true } )
};

function clips(data, tabletop) {         
	var clip_data = data;
	_.each(data, function(e, idx, list){
		var compiled = _.template($('script.template-clips').html());
		$('#clips-list').append(compiled({ 'clip': e }));
		console.log(e.title);
	}); 
};

$('.about').on('click', function(){
	$('.clips-expand').removeClass('active');
	$('.resume-expand').removeClass('active');
	$('.about-expand').addClass('active');
});

$('.resume').on('click', function(){
	$('.clips-expand').removeClass('active');
	$('.about-expand').removeClass('active');
	$('.resume-expand').addClass('active');
});

$('.clips').on('click', function(){
	$('.resume-expand').removeClass('active');
	$('.about-expand').removeClass('active');
	$('.clips-expand').addClass('active');
});