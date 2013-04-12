Ext.define('UserManagement.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    layout: {
		type:'vbox',
		align:'stretch',
		pack:'top'
	},
    minHeight : 500,
    minWidth : 999,
    autoScroll : true,
    items: [
        {xtype : 'main'}
    ]
});
