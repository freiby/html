(function($){

	"use strict";

	/* ---------------------------------------------- /*
	 * Insert switcher into body
	/* ---------------------------------------------- */

	var $code = '<link id="style_switcher" href="" rel="stylesheet" type="text/css">\
		<div class="custom-panel">\
			<div class="panel-options">\
				<p>Choose accent color</p>\
				<ul class="color-picker clearfix">\
					<li><a class="color-1" data-color-name="blue" href="#"></a></li>\
					<li><a class="color-2" data-color-name="wisteria" href="#"></a></li>\
					<li><a class="color-3" data-color-name="sunflower" href="#"></a></li>\
					<li><a class="color-4" data-color-name="carrot" href="#"></a></li>\
					<li><a class="color-5" data-color-name="wetasphalt" href="#"></a></li>\
				</ul>\
				<ul class="color-picker color-picker-last clearfix">\
					<li><a class="color-6" data-color-name="turquoise" href="#"></a></li>\
					<li><a class="color-7" data-color-name="emerald" href="#"></a></li>\
					<li><a class="color-8" data-color-name="greensea" href="#"></a></li>\
					<li><a class="color-9" data-color-name="orange" href="#"></a></li>\
					<li><a class="color-10" data-color-name="silver" href="#"></a></li>\
				</ul>\
			</div>\
			<div class="panel-toggle left">\
				<i class="fa fa-cog fa-spin"></i>\
			</div>\
		</div>';

	/* ---------------------------------------------- /*
	 * Insert switcher into body
	/* ---------------------------------------------- */

	$(document).ready(function () {

		$('.wrapper').after($code);

		$('.color-picker a').click(function(event) {
			event.preventDefault();
			$('.color-picker a').removeClass('selected-color');
			$(this).addClass('selected-color');
			var color_name = $(this).attr('data-color-name');
			$('#style_switcher').attr('href', 'assets/css/colors/' + color_name + '.css');
		});

		/* ---------------------------------------------- /*
		 * Hide panel after 2 seconds
		/* ---------------------------------------------- */

		$('.custom-panel').delay(2000).animate({left: '-230px'}, 250);

		/* ---------------------------------------------- /*
		 * Panel toggle
		/* ---------------------------------------------- */

		$('.panel-toggle').on('click', function() {
			var $panel = $('.custom-panel');
			var left = -230;

			if (parseInt($panel.css('left')) == left) {
				$panel.animate({left: '0px'}, 250);
			} else if ( parseInt($panel.css('left')) == 0) {
				$panel.animate({left: '-230'}, 250);
			}
		});

	});

})(jQuery);