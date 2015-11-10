/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-10 13:52:13
 * @version $Id$
 */

 $(document).ready(function() {

 	var hero  = $('#hero');

/* ---------------------------------------------- /*
 * Intro slider setup
/* ---------------------------------------------- */

	$('#slides').superslides({
		play: 10000,
		animation: 'fade',
		animation_speed: 800,
		pagination: true,
	});

/* ---------------------------------------------- /*
 * Hero height
/* ---------------------------------------------- */

	$(window).resize(function() {
		if (hero.length > 0 && hero.hasClass('js-fullheight') ) {
			hero.height($( window ).height());
		} else if (hero.length > 0) {
			hero.height($( window ).height() * 0.7);
		}
	}).resize();

 });

