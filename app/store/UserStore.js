Ext.define('UserManagement.store.UserStore', {
    extend: 'Ext.data.Store',
    model: 'UserManagement.model.UserModel',
    pageSize: itemsPerPage,
    autoLoad: true,
    storeId: 'UserStore',
    proxy: {
		type: 'localstorage',
        id: 'userproxy'
//        type: 'pagingmemory'
//	    reader: {
//	        type: 'array'
//	    }
    }
});
