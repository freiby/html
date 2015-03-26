Ext.define('App.com.wxxr.smlib.Plugin', {
		extend: 'Ext.window.Window',
		title: 'App window',
		width: 300,
		height: 200,
		html: '<h1>Hello,world!</h1>',
		initComponent: function() {
			this.callParent();
		},
		show:function(){
			alert('ok');
		}
});