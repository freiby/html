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

