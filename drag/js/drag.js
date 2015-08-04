/**
 * ''
 * @authors Your Name (you@example.org)
 * @date    2015-08-04 16:03:12
 * @version $Id$
 */

+function($){
	var DragObject = function(el,opts){
		this.container = $(el);
		opts.item_class = opts.item_class || 'drag-item';
	};
	DragObject.prototype.updateContainer = function(first_argument) {
		// body...
	};

	DragObject.prototype.addChildren = function(el, x, y, width, height, auto_position){
		// alert("addchild");
		this.container.append(el);
	};

	$.fn.dragObject = function (opts) {
        return this.each(function () {
            if (!$(this).data('dragObject')) {
                $(this).data('dragObject', new DragObject(this, opts));
                alert("oak");
            }
        });
    };
	
}(jQuery);
