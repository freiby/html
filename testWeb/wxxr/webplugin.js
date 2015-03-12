/**
 * wxxr web plugin 
 */
var WebPlugin = {
	init:function(){
	},
	//tab
	currentSelectedTab:"",
	initTab:function(region){
		//初始化每个tab 都是未选中
		$(".tab-nav-item-claz").each(function(){
			$(this).addClass("tabsUnSeleted");
		});
		if(this.currentSelectedTab === ""){
			this.currentSelectedTab = $(".tab-nav-item-claz:first");
			this.currentSelectedTab.addClass("tabsSeleted");
			this.currentSelectedTab.removeClass("tabsUnSeleted");
		}
		this.selectedTab.webplugin = this;
		$(".tab-nav-item-claz").click(this.selectedTab);
		this.selectedTab.callAjax = this.callAjax;
	},
	selectedTab:function(){
		$(this).addClass("tabsSeleted");
			$(this).removeClass("tabsUnSeleted");
			var webplugin = arguments.callee.webplugin;
			if(webplugin){
				webplugin.currentSelectedTab.removeClass("tabsSeleted");
				webplugin.currentSelectedTab.addClass("tabsUnSeleted");
			}
			webplugin.currentSelectedTab = $(this);
			var options = {url:"Load.txt",success:function(){
				renderTarget("a","b");;
			},target:"aaa"};
			var callAjax = arguments.callee.callAjax;
			callAjax(options);
			
	},
	callAjax:function (options){
		var url = options['url'];
		var contextArg = options.context;
		var successfn = options.success;
		$.ajax({ url: url, context: contextArg, success: successfn});
	},
	renderTarget:function(target,content){
		console.debug("render " + target + "content " + content);
	}			
};

