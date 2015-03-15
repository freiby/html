/**
 * wxxr web plugin 
 */

String.prototype.replaceAll = function(AFindText,ARepText) { 
		raRegExp = new RegExp(AFindText,"g");
	return this.replace(raRegExp,ARepText)
}

var WebPlugin = {
	
	init:function(){
	},
	
	currentPage:"",
	//tab
	currentSelectedTab:"",
	initTab:function(region){
		//初始化每个tab 都是未选中
		$(".tab-nav-item-claz").each(function(){
			var id = $(this).attr("id");
			var vsItemid = id.replaceAll("\\.","-");
			$(this).attr("id",vsItemid);
			$(this).addClass("tabsUnSeleted");
		});
		
		
		$(".view-stack-item-claz").each(function(){
			var id = $(this).attr("id");
			var vsItemid = id.replaceAll("\\.","-");
			$(this).attr("id",vsItemid);
			$(this).hide();
		});
		
		if(this.currentSelectedTab === ""){
			this.currentSelectedTab = $(".tab-nav-item-claz:first");
			this.currentSelectedTab.addClass("tabsSeleted");
			this.currentSelectedTab.removeClass("tabsUnSeleted");
			var tabid = $(".tab-nav-item-claz:first").attr("id");
			var vsItemid = "#" + tabid;
			$(".view-stack-wrapper-claz").children(vsItemid).show();
		}
		
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
		if($(this) == webplugin.currentSelectedTab)return;
		$(this).addClass("tabsSeleted");
			$(this).removeClass("tabsUnSeleted");
			var webplugin = arguments.callee.webplugin;
			if(webplugin){
				webplugin.currentSelectedTab.removeClass("tabsSeleted");
				webplugin.currentSelectedTab.addClass("tabsUnSeleted");
			}
			webplugin.currentSelectedTab = $(this);
			
			
			$(".view-stack-item-claz").each(function(){
				$(this).hide();
			});
			
			var tabid = $(this).attr("id");
			var vsItemid = "#" + tabid;
			$(".view-stack-wrapper-claz").children(vsItemid).show();
			var selectedView = tabid.replaceAll("-","\\.");
			var options = 
			{url:"myWorkbenchServlet\com.wxxr.mx.ui.showView.action",param:{selectedViewId:selectedView},success:function(data,status){
				if(status === "success")
				renderTarget(vsItemid,data);
			}};
			var callAjax = arguments.callee.callAjax;
			callAjax(options);
			
	},
	callAjax:function (options){
		var url = options['url'];
		var contextArg = options.context;
		var successfn = options.success;
		var param = options.param
		$.post(url,param,successfn);
	},
	renderTarget:function(target,content){
		console.debug("render " + target + "content " + content);
	}			
};

