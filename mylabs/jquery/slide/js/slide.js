/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-20 22:09:31
 * @version $Id$
 */

 +function($){
 	var Slide = function(el,options){
 		this.init = function(){
 			alert('ok');
 		}
 	};
 	this.options = $.extends{
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
	    },options
 	};
 	var el$ = $(el);
 	var slide_container$ =  el$.find(this.options.elements.container);
 	var control$ = $('<div>',{'class':'slide-control'})

 	var _current = 0;

 	Slide.prototype = {
 		size:function(){
 			return slide_container.children().lenght();
 		},
 		next:function(){
 			if(this.current >= this.size() - 1){
 				this.current = 0;
 			}else{
 				this.current += 1;
 			}
 		},
 		pre:function(){
 			if(this.current >= 0){
 				this.current = this.size() - 1;
 			}else{
 				this.current -= 1;
 			}
 		},
 		findWidth:function(){
 			return $(this.options.inherit_width_from).width();
 		},
 		findHeight:function(){
 			return $(this.options.inherit_width_from).height();
 		}
 	};

 	

 	$.fn.slide = function(options){
 		this.each(function(){
 			var this$ = $(this);
 			var slideIns = this$.data('slide');
 			this$.data('slide',slideIns || new Slide(this,options))
 			var data = this$.data('slide');
 			data.init();
 		});
 	};

 }(jQuery);

