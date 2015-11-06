/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-06 11:38:53
 * @version $Id$
 */
if (window.HTMLElement) {
    // 使用原型扩展DOM自定义事件
    
    HTMLElement.prototype.addEvent = function(type, fn, capture) {
        var el = this;
        if (window.addEventListener) {
            el.addEventListener(type, function(e) {
                fn.call(el, e);
            }, capture);
        } else if (window.attachEvent) {
            el.attachEvent("on" + type, function(e) {
                fn.call(el, e);
            });
        } 
    };
} else {
    // 如果是不支持HTMLElement扩展的浏览器
    // 通过遍历所有元素扩展DOM事件
    var elAll = document.all, lenAll = elAll.length;
    for (var iAll=0; iAll<lenAll; iAll+=1) {
        elAll[iAll].addEvent = function(type, fn) {
            var el = this;
            el.attachEvent("on" + type, function(e) {
                fn.call(el, e);
            });
        };
    }
    
}
