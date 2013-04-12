Ext.Loader.setConfig({enabled: true});
window.loadLocale();
Ext.Loader.setPath('Ext.ux', 'ext/src/ux');



Ext.application({

    controllers : [
        'userController',
        'mainController'
    ],

    requires : [
        "Ext.form.*",
        'Ext.util.*',
        'Ext.toolbar.Paging',
        'Ext.ModelManager',
        'Ext.grid.*',
        'Ext.ux.PreviewPlugin',
        'Ext.ux.data.PagingMemoryProxy',
        'Ext.grid.plugin.CellEditing'
    ],
    models : [
        'UserModel'
    ],
    stores : [
        'UserStore',
        'CountryStore'
    ],
    name : 'UserManagement',
    autoCreateViewport : true,
    launch: function(){
        UserManagement = this;
        localStorageProxy()

//         console.log(Ext.getStore('UserStore').data.items)
    }
});


function loadLocale() {
    var params = Ext.urlDecode(window.location.search.substring(1));
    if(params.lang){
        Ext.loader.setLocale({
            enabled : true,
            language : params.lang,
            localizedByDefault : false,
            types : ['controller', 'view']
        });
    }
}