/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-02-25 17:08:11
 * @version $Id$
 */



$(document).ready(function() {
    //PORTFOLIO 部分的布局
    worksgrid = $('#works-grid');
    filters = $('#filters');
    $('a', filters).on('click', function() {
        var selector = $(this).attr('data-filter');

        $('.current', filters).removeClass('current');
        $(this).addClass('current');

        worksgrid.isotope({
            filter: selector
        });

        return false;
    });
    $(window).on('resize', function() {
        worksgrid.imagesLoaded(function() {
            worksgrid.isotope({
                layoutMode: 'masonry',
                itemSelector: '.work-item',
                transitionDuration: '0.3s',
            });
        });
    }).resize();


    //弹出框口 查看图片 PORTFOLIO
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
    });

    $('.video-popup').magnificPopup({
        type: 'iframe'
    });




    /* ---------------------------------------------- /*
     * Setting background of modules
    /* ---------------------------------------------- */
    var modules = $('.module-hero, .module, .module-small');
    modules.each(function() {
        if ($(this).attr('data-background')) {
            $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
        }
    });


    $('a[href="#totop"]').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });


});
