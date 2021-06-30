$('document').ready(function(){

	$('.topbtn').click(function(event){
		event.preventDefault();
		$('html,body').animate({
			scrollTop:0
		},750);
	});

    $('.link > a').click(function(event){
		event.preventDefault();
		$(this).parent().toggleClass('act');
        $(this).parent().siblings().removeClass('act');
        $(this).parent().find('ul').toggleClass('act');
        $(this).parent().siblings().find('ul').removeClass('act');
        $(this).parent().siblings().find('ul').removeClass('act');
	});

});