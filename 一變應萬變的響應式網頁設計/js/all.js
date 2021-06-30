$('document').ready(function(){

	// $('.topbtn').click(function(event){
	// 	event.preventDefault();
	// 	$('html,body').animate({
	// 		scrollTop:0
	// 	},750);
	// });

    $('.ham > a').click(function(event){
		event.preventDefault();
		$(this).parent().parent().siblings().find('li').toggleClass('act');
        $('.title').toggle();
        // $(this).parent().siblings().removeClass('act');
        // $(this).parent().find('ul').toggleClass('act');
        // $(this).parent().siblings().find('ul').removeClass('act');
        // $(this).parent().siblings().find('ul').removeClass('act');
	});

});