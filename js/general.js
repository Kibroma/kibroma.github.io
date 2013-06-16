$(document).ready(function(){

	var squares = $("#leftcolumn li");
	squares.each(function() {
	
		var sqop = Math.random().toFixed(1);
		$(this).css({'opacity' : sqop});
	
	});

});