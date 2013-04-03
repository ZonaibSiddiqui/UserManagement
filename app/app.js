
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'ext/src/ux');

Ext.application({

    controllers : [
        'LoginController',
        'UserController',
        'MainController'
    ],
    views :[
        'Viewport',
        'login.ForgotPassword',
        'login.UserList',
        'login.LoginForm'
    ],
    requires : [
        'SenchaLogin.view.Viewport',
        'SenchaLogin.view.user.User',
        'SenchaLogin.view.user.Profile',
        'SenchaLogin.view.user.EditableUserProfile',
        'SenchaLogin.view.user.UserProfile',
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
    name : 'SenchaLogin',
    autoCreateViewport : true
});
