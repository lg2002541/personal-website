(function($) {
	$(function() {
		$('#languages .container .row .logo img.icon').mouseover( function() {
			$(this).css( "height", "120px");
			$(this).css( "width", "120px");
		});
		$('#languages .container .row .logo img.icon').mouseleave( function() {
			$(this).css( "height", "100px");
			$(this).css( "width", "100px");
		});

		$('#tools .container .row .logo img.icon').mouseover( function() {
			$(this).css( "height", "120px");
			$(this).css( "width", "120px");
		});
		$('#tools .container .row .logo img.icon').mouseleave( function() {
			$(this).css( "height", "100px");
			$(this).css( "width", "100px");
		});
	});
})(jQuery);


