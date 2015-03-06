/*

tabs面板插件，版本1.0(2011.08.24)

用法：$("#myDiv").tabs({switchingMode:"click"});

参数解释：switchingMode是面板切换的模式，如switchingMode:"mouseover"则鼠标移动至选项卡切换面板,默认为click。

整体tabs骨架不变，依然是常用的结构如下：

<div id="tabs">
    选项卡区域ul
    <ul>
        <li><a href="#div1">选项1</a></li>
        <li><a href="#div2">选项2</a></li>
    </ul>
    面板区域div
    <div id="div1">面板1</div>
    <div id="div2">面板2</div>
</div>

样式：此样式为默认无任何效果样式，可根据需要修改插件样式。

*/
(function ($) {
    $.fn.tabs = function (options) {

        var defualts = { switchingMode: "click" };

        var opts = $.extend({}, defualts, options);

        var obj = $(this);
        
        var clickIndex = 0;
        obj.addClass("tabsDiv");

        $("ul li:first", obj).addClass("tabsSeletedLi");
        $("ul li", obj).not(":first").addClass("tabsUnSeletedLi");
        $("div", obj).not(":first").hide();

        $("ul li", obj).bind(opts.switchingMode, function () {
            if (clickIndex != $("ul li", obj).index($(this))) {
                clickIndex = $("ul li", obj).index($(this));
                $(".tabsSeletedLi", obj).removeClass("tabsSeletedLi").addClass("tabsUnSeletedLi");
                $(this).removeClass("tabsUnSeletedLi").addClass("tabsSeletedLi");
                var divid = $("a", $(this)).attr("href").substr(1);
                $("div", obj).hide();
                $("#" + divid, obj).show();
            };
        });

    };
})(jQuery);