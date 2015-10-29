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

    var transition = this.transition = checkTransition();

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
            css.children();
            css.image();
            image.children();
            pagination.setup();
            that.animate(0,function(){

            });

            $(window).on('resize', function() {
                var tid = setTimeout(function() {
                    // that.initing = false;
                    var $children = $slide_container.children();
                    that.width = that.findWidth();
                    that.height = that.findHeight();
                    css.container();
                    css.image();
                    that.animate(that.current,function(){

                    });
                }, 10);
            });
            that.initing = true;
        };
        var that = this;
        this.initing = false;
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
        this.$slide_container = $slide_container;

        var control$ = $('<div>', {
            'class': 'slide-control'
        });

        this.current = -1;
        this.animating = false;
        var transCss = {
            height: '100%',
            display: 'block',
            margin: '0',
            padding: '0',
            listStyle: 'none',
            position: 'relative',
            left:'0',
            width: that.findWidth()
        };

        var css = this.css = {
            container: function() {
                css.trans(true);
                $('body').css({
                    margin: 0
                });
                $el.css({
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    height: that.height, //屏幕宽度 
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
            children: function(){
                var $imageList = $slide_container.children();
                $imageList.css({left:that.width});
            },
            trans: function(has){
                if(has){
                    transCss[transition.trans] = 'all 1s ease';
                }else{
                    transCss[transition.trans] = 'all 0s ease';
                }
                $slide_container.css(transCss);
            },
            selected: function(){

            }
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
            scale: function(img, ratio) {
                var r = ratio || image.ratio(img);
                var cr = that.height / that.width;
                if (cr > r) {
                    $(img).css({
                        height: that.height,
                        width: that.height / ratio
                    });
                } else {

                    $(img).css({
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

        var pagination = this.pagination = {
            setup: function() {
                var count = $slide_container.children().length;
                var $nav = $("<nav>", {
                    'class': that.options.elements.pagination.replace(/^\./, '')
                });
                $nav.appendTo($el);
                for (var i = 0; i < count; i++) {
                    pagination.addItem($nav, i);
                }
                that.$nav = $nav;
            },
            addItem: function($container, index) {
                var $item = $('<a>', {
                    'href': index + 1,
                    'text': index + 1
                });
                $item.appendTo($container);
                $item.on('click',function(e){
                    e.preventDefault();
                    if(that.animating) 
                    return false;
                    var ct = e.currentTarget;
                    var $ct = $(ct);
                    var index = $ct.attr('href') - 1;
                    if(index != this.current){
                        that.animate(index,function(){
                        })
                    }
                    pagination.active(index);
                });
            },
            active: function(index){
                var $alist = that.$nav.children();
                var $a = $alist.eq(index);
                $alist.removeClass('active');
                $alist.eq(index)
                  .addClass('active');
            }

        };
    };
    Slide.prototype = {
        size: function() {
            return this.$slide_container.children().length;
        },
        next: function() {
            var index = 0;
            if (this.current >= this.size() - 1) {
                index = 0;
            } else {
                index = this.current + 1;
            }
            return index;
        },
        pre: function() {
            var index = 0;
            if (this.current >= 0) {
                index = this.size() - 1;
            } else {
                index = this.current - 1;
            }
            return index;
        },
        findWidth: function() {
            return $(this.options.inherit_width_from).width();
        },
        findHeight: function() {
            return $(this.options.inherit_width_from).height();
        },
        animate: function(index, userCallback) {
            this.css.trans(true);
            var that = this;
            var orientation = {};
            if(index === this.current)return;
            if (orientation === undefined || index > this.current) {
                orientation.direction = -1;
            }else{
                orientation.direction = 1;
            }
            orientation.from = this.width;
            orientation.currentPage = this.current;
            orientation.nextPage = index;
            orientation.to = 0;
            this.animating = true;
            var $target = this.$slide_container.children().eq(orientation.nextPage);
            var $current = this.$slide_container.children().eq(orientation.currentPage);
            if(this.initing){
                this.$slide_container.one('mmTransitionEnd', function() {
                    console.log('transition end ...');
                    that.css.trans(false);
                    that.current = index;
                    that.animating = false;
                    that.$slide_container.css({
                        left: 0
                    });
                    $target.css({left: 0,'z-index': '2',display:'block'});
                    $current.css({left:0,'z-index': '0',display:'none'});
                });

                $target.css({display:'block'});

                $target.css({left: -orientation.from * orientation.direction});
                this.$slide_container.css({
                    left: orientation.from * orientation.direction
                });
                
            }else{
                this.$slide_container.children().css({
                    'z-index': '0'
                });
                $target.css({
                    "z-index": '2'
                });
                if(this.current == -1)
                this.current = 0;
                that.animating = false;
                this.pagination.active(that.current);
            }
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
