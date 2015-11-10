/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-10 18:01:22
 * @version $Id$
 */

/* ---------------------------------------------- /*
 * Transparent navbar animation
/* ---------------------------------------------- */

$(document).ready(function() {
	var navbar  = $('.navbar-custom')
    if (navbar.length > 0 && $('#hero').length > 0) {// hero slidesetup 定义
        $(window).scroll(function() {
            var topScroll = $(window).scrollTop();
            if (topScroll >= 5) {
                navbar.removeClass('navbar-transparent');
            } else {
                navbar.addClass('navbar-transparent');
            }
        }).scroll();
    } else {
        navbar.removeClass('navbar-transparent');
    }
});
