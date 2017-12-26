/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-02-29 14:03:01
 * @version $Id$
 */

$(function() {
    /* ---------------------------------------------- /*
     * Setting background of modules
    /* ---------------------------------------------- */
    var modules = $('.module-hero, .module, .module-small');
    modules.each(function() {
        if ($(this).attr('data-background')) {
            $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
        }
    });

    //滚动图片
    var hero = $('#hero');

    $('#slides').superslides({ animation: 'fade' });

    $(window).resize(function() {
        if (hero.height() > 0 && hero.hasClass('js-fullheight')) {
            console.log("$(window).height()" + $(window).height() + " $(document).height()" + $(document).height());
            hero.height($(window).height());
        } else if (hero.height < 0) {
            hero.height($(window).height() * .7);
        }

    });

    /*
     *  dropmenu
     */
    
    var mobileTest;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mobileTest = true;
    } else {
        mobileTest = false;
    }


    $(window).on('resize', function() {
        var width = Math.max($(window).width(), $(window).innerWidth());
        if (width > 991) {
            $('.navbar-custom .navbar-nav > li.dropdown').hover(function() {
                var menuLeftOffset = $('.dropdown-menu', $(this)).offset().left;
                var
                    maxWidth1 = 0,
                    maxWidth2 = 0,
                    menuLevelOne = $(this).children('.dropdown-menu'),
                    menuLevelTwo = $('.dropdown-menu', menuLevelOne),
                    menuLevelOneWidth,
                    menuLevelTwoWidth;

                menuLevelOne.each(function() {
                    if ($(this).width() > maxWidth1) {
                        menuLevelOneWidth = $(this).width();
                    }
                });

                menuLevelTwo.each(function() {
                    if ($(this).width() > maxWidth2) {
                        menuLevelTwoWidth = $(this).width();
                    }
                });

                if (typeof menuLevelTwoWidth === 'undefined') {
                    menuLevelTwoWidth = 0;
                }

                if (width - menuLeftOffset - menuLevelOneWidth < menuLevelOneWidth + 20) {
                    $(this).children('.dropdown-menu').addClass('leftauto');

                    if (menuLevelTwo.length > 0) {
                        if (width - menuLeftOffset - menuLevelOneWidth < menuLevelTwoWidth + 20) {
                            menuLevelTwo.addClass('left-side');
                        } else {
                            menuLevelTwo.removeClass('left-side');
                        }
                    }
                } else {
                    $(this).children('.dropdown-menu').removeClass('leftauto');
                }
            });
        }
    }).resize();


    $(window).resize(function() {
        var setTimeoutConst = 0;
        var width = Math.max($(window).width(), $(window).innerWidth());
        if (width > 991 && mobileTest !== true) {
            $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').removeClass('open');

            $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').hover(function() {
                    var $this = $(this);
                    setTimeoutConst = setTimeout(function() {
                        $this.addClass('open');
                        $this.find('.dropdown-toggle').addClass('disabled');
                    });

                },
                function() {
                    clearTimeout(setTimeoutConst);
                    $(this).removeClass('open');
                    $(this).find('.dropdown-toggle').removeClass('disabled');
                });
        }else{
            $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').unbind('mouseenter mouseleave');
            $('.navbar-custom [data-toggle=dropdown]').not('.binded').addClass('binded').on('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                $(this).parent().siblings().removeClass('open');
                $(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
                $(this).parent().toggleClass('open');
            });
        }
    }).resize();

    /* end drop menu*/


    /* 当 滚轮向下 把nav 变成 非透明 $(window).scrollTop()的距离判断*/
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



})
