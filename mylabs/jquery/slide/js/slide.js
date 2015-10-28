/**
 * 
 * @authors fudapeng (icefirefdp@163.com)
 * @date    2015-10-20 22:09:31
 * @version 1.0.0
 */

+ function($) {
    function checkTransition() {
        var el = document.createElement('test');
        var result = {};
        var transEndEventNames = {
            MozTransition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        };
        var transitionNames = {
            MozTransition: '-moz-transition',
            WebkitTransition: '-webkit-transition',
            OTransition: '-o-transition',
            transition: 'transition'
        };
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                result.end = transEndEventNames[name];
            }
        }
        for (var name in transitionNames) {
            if (el.style[name] !== undefined) {
                result.trans = transitionNames[name]
            }
        }
        return result;
    };

    var transition = checkTransition();
    if (!!transition.hasOwnProperty('end')) {
        $.event.special['mmTransitionEnd'] = {
            bindType: transition.end,
            delegateType: transition.end,
        };
    };
    var Slide = function(el, options) {
        this.init = function() {
            console.log('init slide....');
            //这里一定先算高度、宽度，由于加上css可能有会有滚动条会影响的width的计算
            that.width = that.findWidth();
            that.height = that.findHeight();
            css.container();//给容器加上css
            // image.children();// 由于要给image加一层wrap 为什么加wrap？由于要让缩小时图片看不到的地方能够遮盖。
            css.image();

            pagination.setup();
            $(window).on('resize', function() {
            	// $slide_container.css({
             //        	display: 'none'
             //        });
                var tid = setTimeout(function() {
                    var $children = $slide_container.children();

                    that.width = that.findWidth();
                    that.height = that.findHeight();
                    css.container();
                    css.image();
                }, 10);
            });
        };
        var that = this;
        this.options = $.extend({
            play: false,
            animation_speed: 600,
            animation_easing: 'swing',
            animation: 'slide',
            inherit_width_from: window,
            inherit_height_from: window,
            pagination: true,
            hashchange: false,
            scrollable: true,
            elements: {
                preserve: '.preserve',
                nav: '.slides-navigation',
                container: '.slides-container',
                pagination: '.slides-pagination'
            },
            options
        });
        var $el = $(el);// class=slides
        var $slide_container = $el.find(this.options.elements.container); //class = slides-container


        var control$ = $('<div>', {
            'class': 'slide-control'
        });

        var _current = 0;

        var transCss = {
            height: '100%',
            overflow: 'hidden',
            display: 'block',
            // display: 'none',
            margin: '0',
            padding: '0',
            listStyle: 'none',
            position: 'relative',
            width: this.findWidth() * 2
        };

        transCss[transition.trans] = 'all 5s ease';


        var css = {
            container: function() {
                $slide_container.css(transCss);
                $('body').css({
                    margin: 0
                });
                $el.css({
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    height: that.height //屏幕宽度 
                });
            },
            image: function() {
                var $children = $slide_container.find('img');
                $children.removeAttr('width').removeAttr('height')
                    .css({
                        "-webkit-backface-visibility": 'hidden',
                        "-ms-interpolation-mode": 'bicubic',
                        "position": 'absolute',
                        "left": '0',
                        "top": '0',
                        "z-index": '-1',
                        "max-width": 'none',
                        'overflow': 'hidden'
                    });

                $children.each(function() {
                    var img = this;
                    var image_aspect_ratio = image.ratio(img);
                    image.scale(img, image_aspect_ratio);
                    image.center(img, image_aspect_ratio);
                });
            },
        };

        var image = {
            centerY: function(image) {
                var $image = $(image);
                var ch = (that.height - $image.height()) / 2;
                $image.css({
                    top: ch
                });
            },
            centerX: function(image) {
                var $image = $(image);
                var cw = (that.width - $image.width()) / 2;
                $image.css({
                    left: cw
                });
            },

            center: function(img) {
                image.centerX(img);
                image.centerY(img);
            },
            ratio: function(image) {
                if (!image.naturaHeight && !image.naturaWidth) {
                    var img = new Image();
                    img.src = image.src;
                    image.naturaHeight = img.height;
                    image.naturaWidth = img.width;
                }
                return image.naturaHeight / image.naturaWidth;
            },
            scale: function(image, ratio) {
                var r = ratio || that.image.ratio(image);
                var cr = that.height / that.width;
                if (cr > r) {
                    $(image).css({
                        height: that.height,
                        width: that.height / ratio
                    });
                } else {

                    $(image).css({
                        width: that.width,
                        height: that.width * ratio
                    });
                }
            },
            children: function() {
                var $children = $slide_container.children();
                $children.each(function() {
                    var $img = $(this);
                    if ($img.is('img')) {
                        $img.wrap('<div>');
                    }
                    var id = $img.attr('id');
                    $img.removeAttr('id');
                    $img.parent().attr('id', id);
                });

                $children = $slide_container.children();
                $children.css({
                    position: 'absolute',
                    overflow: 'hidden',
                    height: '100%',
                    width: that.width,
                    top: 0,
                    zIndex: 0
                });

            }

        };

        var pagination = {
            setup: function() {
                var count = $slide_container.children().length;
                var $nav = $("<nav>", {
                    'class': that.options.elements.pagination.replace(/^\./, '')
                });
                $nav.appendTo($el);
                for (var i = 0; i < count; i++) {
                    pagination.addItem($nav, i);
                }
            },
            addItem: function($container, index) {
                var $item = $('<a>href</a>', {
                    'href': index + 1,
                    'text': ''
                });
                $item.appendTo($container);
            }

        };



    };
    Slide.prototype = {
        size: function() {
            return $slide_container.children().length();
        },
        next: function() {
            if (this.current >= this.size() - 1) {
                this.current = 0;
            } else {
                this.current += 1;
            }
            return this.current;
        },
        pre: function() {
            if (this.current >= 0) {
                this.current = this.size() - 1;
            } else {
                this.current -= 1;
            }
            return this.current;
        },
        findWidth: function() {
            return $(this.options.inherit_width_from).width();
        },
        findHeight: function() {
            return $(this.options.inherit_width_from).height();
        },
        animate: function(direction, userCallback) {
            var orientation = {};
            if (orientation === undefined) {
                orientation.direction = 'next';
            }
            orientation.currentPage = this.current;
            if ((/next/).test(orientation.direction)) {
                orientation.nextPage = this.next();
            } else if ((/pre/).test(orientation.direction)) {
                orientation.nextPage = this.pre();
            }
            orientation.from = this.findWidth() * 2;
            orientation.to = 0;

            $slide_container.one('mmTransitionEnd', function() {

            });
        }
    };
    $.fn.slide = function(options) {
        this.each(function() {
            var this$ = $(this);
            var slideIns = this$.data('slide');
            this$.data('slide', slideIns || new Slide(this, options))
            var data = this$.data('slide');
            data.init();
        });
    };

}(jQuery);
