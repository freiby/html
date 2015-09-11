/**
 * 
 */



		function chain(o){
			return EObject.chain(o);
		};
		var TemplateClass = function(){};

		var EObject = {
			chain:  function (object) {
				TemplateClass.prototype = object;
				var result = new TemplateClass();
				TemplateClass.prototype = null;
				return result;
			}
		};


		var x_base = function x_base(){};
		x_base.prototype = {name:"base"};

		var	x_parent = function x_parent(){};
		x_parent.prototype = chain(x_base.prototype);
		x_parent.prototype.xname = "xparent";
		
		

		var	x_children = function x_children(){};
		x_children.prototype = chain(x_parent.prototype);
		x_children.prototype.name = "x_children";
		

		var newIns = new x_children();
		console.log(newIns.name);
		console.log(newIns.xname);