
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'ext/src/ux');

Ext.application({

    controllers : [
        'loginController',
        'userController',
        'mainController'
    ],
    views :[
        'Viewport',
        'login.ForgotPassword',
        'login.UserList',
        'login.LoginForm'
    ],
    requires : [
        'UserManagement.view.Viewport',
        'UserManagement.view.user.User',
        'UserManagement.view.user.Profile',
        'UserManagement.view.user.EditableUserProfile',
        'UserManagement.view.user.UserProfile',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.*',
        'Ext.data.*',
        "Ext.form.*",
        'Ext.util.*',
        'Ext.toolbar.Paging',
        'Ext.ux.PreviewPlugin',
        'Ext.ModelManager',
        'Ext.tip.QuickTipManager',
        'Ext.ux.data.PagingMemoryProxy',
        'Ext.grid.plugin.CellEditing'
    ],

	models : [
         'UserModel'
	],
	stores : [
         'UserStore'
	],
    name : 'UserManagement',
    autoCreateViewport : true
});
