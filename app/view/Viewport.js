Ext.define('UserManagement.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    alias : 'widget.Viewport',  // Remove Unnecessary code
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
        // views are added here
        'UserManagement.view.login.ForgotPassword',
        'UserManagement.view.main.Main'
    ],

    layout: {
		type:'vbox',
		align:'stretch',
		pack:'top'
	},
    minHeight : 10,
    minWidth : 800,
    autoScroll : true,
    items: [
        {xtype : 'main'}
    ]
});
