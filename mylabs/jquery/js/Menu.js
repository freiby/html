/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-10 14:35:45
 * @version $Id$
 */
 'use strict';
+function($){


	function checkTransition(){
		var el = document.createElement('cc');
		var transEndEventNames = {
		      MozTransition: 'transitionend',
		      WebkitTransition: 'webkitTransitionEnd',
		      OTransition: 'oTransitionEnd otransitionend',
		      transition: 'transitionend'
		    };
		for(var name in transEndEventNames){
			if(el.style[name] !== undefined){
				return {end:transEndEventNames[name]};
			}
		}
	}

	var transition = checkTransition();
	if(!!transition){
		$.event.special['mmTransitionEnd'] = {
			bindType: transition.end,
			delegateType: transition.end,
		}; 
	}

	function MyMenu(element,options){
		this.$element = $(element);
		this.options = options;//$.extend({}, options);
		this.transitioning = null;
		this.init();
	}

	MyMenu.DEFAULT = {
		activeClass:'active',
		collapseClass:'collapse',
		collapseInClass:'in',
		collapsingClass:'collapsing'
	};

	MyMenu.prototype.init = function(first_argument) {
		var that = this;
		var activeClass = this.options.activeClass;
		var collapseClass = this.options.collapseClass;
		var collapseInClass = this.options.collapseInClass;

		//对于选中的展开
		this.$element.find('li.' + collapseInClass).has('ul').children('ul').attr('aria-expanded', true).addClass(collapseClass + ' ' + collapseInClass);
		//为选中的折叠
		this.$element.find('li').not('.'+collapseInClass).has('ul').children('ul').attr('aria-expanded', false).addClass(collapseClass);

		

		//对于链接<a> 增加点击事件
		this.$element.find('li').has('ul').children('a').on('click.MyMenu',function(e){
			var $this = $(this);//每个a元素
			var $parent = $this.parent('li');
			var ulList = $parent.children('ul');
			if($parent.hasClass(activeClass)){
				that.hide(ulList);
				$this.attr('aria-expanded',false);
			}else{
				that.show(ulList);
				$this.attr('aria-expanded',true);
			}
		});

	};


	MyMenu.prototype.hide = function(ulList){
		var that = this;
		var $ulList = ulList;
		var activeClass = this.options.activeClass;
		var collapseClass = this.options.collapseClass;
		var collapseInClass = this.options.collapseInClass;
		var collapsingClass = this.options.collapsingClass;

		$ulList.parent().removeClass(activeClass);

		$ulList.height($ulList.height());//这个是动画的关键，由于设置内嵌的css，优先权最高，所有就是下面这行代码，把css设置height为0，也不会生效的的。所以这个时候高度还是不变的
		$ulList.addClass(collapsingClass).removeClass(collapseClass).removeClass(collapseInClass);

		var completed = function(){
			$ulList
        	.removeClass(collapsingClass)
	        .addClass(collapseClass)
	        .attr('aria-expanded', false);
		};
		$ulList.one('mmTransitionEnd',completed);

		$ulList.height(0);
	};

	MyMenu.prototype.show = function(ulList){
		var that = this;
		var $ulList = ulList;
		var activeClass = this.options.activeClass;
		var collapseClass = this.options.collapseClass;
		var collapseInClass = this.options.collapseInClass;
		var collapsingClass = this.options.collapsingClass;

		
		$ulList.parent().addClass(activeClass);

		$ulList.addClass(collapsingClass).removeClass(collapseClass);
		

		that.hide($ulList.parent().siblings().children('ul.' + collapseInClass).attr('aria-expanded', false));


		var completed = function(){
			$ulList
        	.removeClass(collapsingClass)
	        .addClass(collapseClass + ' ' + collapseInClass)
	        .attr('aria-expanded', true);
		};
		$ulList.one('mmTransitionEnd',completed);
		$ulList.height($ulList[0].scrollHeight);
	};


	function Plugin(option){
		//这个this 是 jquery 对象
		return this.each(function(){
			var $this = $(this);//转换成jquery的对象
			var data = $this.data('mm');//查看这个节点的data属性上有没有mm这个
			var options = $.extend({},MyMenu.DEFAULT,typeof option === 'Object' && option);
			if(!data){
				data = new MyMenu(this,options);
				$this.data('mm', data);
			}

		});
	};
	$.fn.metisMenu = Plugin;
}(jQuery);