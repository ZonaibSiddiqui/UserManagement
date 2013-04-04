Ext.define('UserManagement.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    alias : 'widget.Viewport',
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

    items: [
        {xtype : 'main'}
    ]
});