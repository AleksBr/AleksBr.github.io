(function($) {
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();

	$("body").mousemove(function(e){

		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);

		var newvalueX = width * pageX * -1 - 25;
		var newvalueY = height * pageY * -1 - 50;


		$('.grad-01').css("background-position", newvalueX * 1 + "px " + newvalueY * 1 + "px");
		$('.grad-02').css("background-position", newvalueX * 4 + "px " + newvalueY * 4 + "px");
		$('.grad-03').css("background-position", newvalueX * 8 + "px " + newvalueY * 8 + "px");
		$('.grad-04').css("background-position", newvalueX * 12 + "px " + newvalueY * 12 + "px");
		$('.grad-05').css("background-position", newvalueX * 16 + "px " + newvalueY * 16 + "px");
	});

	$("body").bind('mousewheel', function(e){
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueY = height * pageY * -1 - 50;
		var newvalueX = 0;

		console.log(e.originalEvent);

		if(e.originalEvent.wheelDelta /120 > 0) {
			$('.grad-01').css("background-position", newvalueX * 1 + "px " + newvalueY * 1 + "px");
			$('.grad-02').css("background-position", newvalueX * 4 + "px " + newvalueY * 4 + "px");
			$('.grad-03').css("background-position", newvalueX * 8 + "px " + newvalueY * 8 + "px");
			$('.grad-04').css("background-position", newvalueX * 12 + "px " + newvalueY * 12 + "px");
			$('.grad-05').css("background-position", newvalueX * 16 + "px " + newvalueY * 16 + "px");
		} else{
			$('.grad-01').css("background-position", newvalueX * 1 + "px " + newvalueY * 1 + "px");
			$('.grad-02').css("background-position", newvalueX * 4 + "px " + newvalueY * 4 + "px");
			$('.grad-03').css("background-position", newvalueX * 8 + "px " + newvalueY * 8 + "px");
			$('.grad-04').css("background-position", newvalueX * 12 + "px " + newvalueY * 12 + "px");
			$('.grad-05').css("background-position", newvalueX * 16 + "px " + newvalueY * 16 + "px");
		}
	});

})(jQuery);