/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-04 10:07:16
 * @version $Id$
 */

$(function() {

    function fix_height() {
        var navHeight = $('.navbar.navbar-static-side').outerHeight();
        var wrappageHeight = $('#page-wrapper').outerHeight();
        if (navHeight > wrappageHeight) {
            $('#page-wrapper').css("min-height", navHeight + 'px');
        } else {
            $('#page-wrapper').css("min-height", $(window).height() + 'px');
        }
    }
    fix_height();

    function smoothNav() { //|| $('body').hasClass('body-small')
        if ($(this).width() > 769) {
            if (!$('body').hasClass('mini-navbar')) { //当 展开 nav 是先把nav 隐藏 ，然后在fadein
                $('.navbar.navbar-static-side').hide();
                setTimeout(
                    function() {
                        $('.navbar.navbar-static-side').fadeIn(500);
                    }, 500);
            }
        } else if ($('body').hasClass('small-menu')) {
            $('body.small-menu .navbar-static-side .list-group.clear-list').css('display', 'none');
            $('body.small-menu .navbar-static-side .list-group.clear-list').css('position', 'absolute');
            var targetOffset = $('.navbar-minimalize').offset();
            var targetheight = $('.navbar-minimalize').outerHeight();
            var top = targetOffset.top + targetheight;
            $('body .navbar-static-side').css('display', 'block');

            $('body .navbar-static-side').offset({ 'top': top, 'left': targetOffset.left });
            $('body.small-menu .navbar-static-side .list-group.clear-list').fadeIn();
            // $('body.small-menu .navbar-static-side .list-group.clear-list').show();
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('body .navbar-static-side').removeAttr('style');
        }
    }

    $('.navbar-minimalize').on('click', function() {
    	// alert('ok')
        $("body").toggleClass("mini-navbar");
        $("body").toggleClass("small-menu");
        smoothNav();
    });


    // if ($(this).width() < 769) {
    //     $('body').addClass('body-small')
    // } else {
    //     $('body').removeClass('body-small')
    // }


    $(window).bind("load resize scroll", function() {
        if (!$("body").hasClass('small-menu')) {
            fix_height();
        }
    });

    $(window).bind("resize", function() {
        if ($(this).width() < 769) {
            $('body').addClass('mini-navbar')
        } else {
            $('body').removeClass('mini-navbar')
        }
    });



    $('.collapse-link').click(function() {
            var ibox = $(this).closest('div.ibox');
            var button = $(this).find('i');
            var content = ibox.find('div.ibox-content');
            content.slideToggle(200);
            button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
            ibox.toggleClass('').toggleClass('border-bottom');
            setTimeout(function() {
                ibox.resize();
                ibox.find('[id^=map-]').resize();
            }, 50);
        });
});
