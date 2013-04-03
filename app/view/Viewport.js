Ext.define('SenchaLogin.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    alias : 'widget.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
        // views are added here
        'SenchaLogin.view.login.ForgotPassword',
        'SenchaLogin.view.main.Main'
        //'SenchaLogin.view.UserList',
        
    ],

    layout: {
		type:'vbox',
		align:'stretch',
		pack:'top'
	},

    items: [
        {
			xtype : 'Main'
		}
		

    ]
});