
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'ext/src/ux');

Ext.application({

    controllers : [
        'loginController',
        'userController',
        'mainController'
    ],
    views :[
        'Viewport' // Remove
    ],
    requires : [
        // Remove Extra Requires from everywhere and put them into their appropriate class
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

    // Put them into Controller
	models : [
         'UserModel'
	],
	stores : [
         'UserStore'
	],
    name : 'UserManagement',
    autoCreateViewport : true
});
