Ext.define('SenchaLogin.store.UserStore', {
    extend: 'Ext.data.Store',
    model: 'SenchaLogin.model.UserModel',
    remoteSort: true,
    pageSize: itemsPerPage,
    autoLoad: false,
    data: [
        {id: '1', firstName: 'hisham', userName: 'hisham', lastName: 'javid', password: '123', city : 'Lahore', country : 'Pakistan', email : 'hisham.javed@zintechnologies.com', imgSrc : 'resources/images/hisham.png'},
        {id: '2', firstName: 'ali', userName: 'ali', lastName: 'khan', password: '123', city : 'Lahore', country : 'Pakistan', email : 'ali.khan@zintechnologies.com', imgSrc : 'resources/images/ali.png'},
        {id: '3', firstName: 'amir', userName: 'amir', lastName: 'iqbal', password: '123', city : 'Lahore', country : 'Pakistan', email : 'amir.iqbal@zintechnologies.com', imgSrc : 'resources/images/amir.png'},
        {id: '4', firstName: 'zonaib', userName: 'zonaib', lastName: 'siddiqui', password: '123', city : 'Kasur', country : 'Pakistan', email : 'zonaib.siddiqui@zintechnologies.com', imgSrc : 'resources/images/zonaib.png'},

        {id: '5', firstName: 'hisham', userName: 'hisham', lastName: 'javid', password: '123', city : 'Lahore', country : 'Pakistan', email : 'hisham.javed@zintechnologies.com', imgSrc : 'resources/images/hisham.png'},
        {id: '6', firstName: 'ali', userName: 'ali', lastName: 'khan', password: '123', city : 'Lahore', country : 'Pakistan', email : 'ali.khan@zintechnologies.com', imgSrc : 'resources/images/ali.png'},
        {id: '7', firstName: 'amir', userName: 'amir', lastName: 'iqbal', password: '123', city : 'Lahore', country : 'Pakistan', email : 'amir.iqbal@zintechnologies.com', imgSrc : 'resources/images/amir.png'},
        {id: '8', firstName: 'zonaib', userName: 'zonaib', lastName: 'siddiqui', password: '123', city : 'Kasur', country : 'Pakistan', email : 'zonaib.siddiqui@zintechnologies.com', imgSrc : 'resources/images/zonaib.png'},

        {id: '9', firstName: 'hisham', userName: 'hisham', lastName: 'javid', password: '123', city : 'Lahore', country : 'Pakistan', email : 'hisham.javed@zintechnologies.com', imgSrc : 'resources/images/hisham.png'},
        {id: '10', firstName: 'ali', userName: 'ali', lastName: 'khan', password: '123', city : 'Lahore', country : 'Pakistan', email : 'ali.khan@zintechnologies.com', imgSrc : 'resources/images/ali.png'},
        {id: '11', firstName: 'amir', userName: 'amir', lastName: 'iqbal', password: '123', city : 'Lahore', country : 'Pakistan', email : 'amir.iqbal@zintechnologies.com', imgSrc : 'resources/images/amir.png'},
        {id: '12', firstName: 'zonaib', userName: 'zonaib', lastName: 'siddiqui', password: '123', city : 'Kasur', country : 'Pakistan', email : 'zonaib.siddiqui@zintechnologies.com', imgSrc : 'resources/images/zonaib.png'},

        {id: '13', firstName: 'hisham', userName: 'hisham', lastName: 'javid', password: '123', city : 'Lahore', country : 'Pakistan', email : 'hisham.javed@zintechnologies.com', imgSrc : 'resources/images/hisham.png'},
        {id: '14', firstName: 'ali', userName: 'ali', lastName: 'khan', password: '123', city : 'Lahore', country : 'Pakistan', email : 'ali.khan@zintechnologies.com', imgSrc : 'resources/images/ali.png'},
        {id: '15', firstName: 'amir', userName: 'amir', lastName: 'iqbal', password: '123', city : 'Lahore', country : 'Pakistan', email : 'amir.iqbal@zintechnologies.com', imgSrc : 'resources/images/amir.png'},
        {id: '16', firstName: 'zonaib', userName: 'zonaib', lastName: 'siddiqui', password: '123', city : 'Kasur', country : 'Pakistan', email : 'hisham.javed@zintechnologies.com', imgSrc : 'resources/images/zonaib.png'},

        {id: '17', firstName: 'hisham', userName: 'hisham', lastName: 'javid', password: '123', city : 'Lahore', country : 'Pakistan', email : 'hisham.javed@zintechnologies.com', imgSrc : 'resources/images/hisham.png'},
        {id: '18', firstName: 'ali', userName: 'ali', lastName: 'khan', password: '123', city : 'Lahore', country : 'Pakistan', email : 'ali.khan@zintechnologies.com', imgSrc : 'resources/images/ali.png'},
        {id: '19', firstName: 'amir', userName: 'amir', lastName: 'iqbal', password: '123', city : 'Lahore', country : 'Pakistan', email : 'amir.iqbal@zintechnologies.com', imgSrc : 'resources/images/amir.png'},
        {id: '20', firstName: 'zonaib', userName: 'zonaib', lastName: 'siddiqui', password: '123', city : 'Kasur', country : 'Pakistan', email : 'zonaib.siddiqui@zintechnologies.com', imgSrc : 'resources/images/zonaib.png'},

        {id: '21', firstName: 'hisham', userName: 'hisham', lastName: 'javid', password: '123', city : 'Lahore', country : 'Pakistan', email : 'hisham.javed@zintechnologies.com', imgSrc : 'resources/images/hisham.png'},
        {id: '22', firstName: 'ali', userName: 'ali', lastName: 'khan', password: '123', city : 'Lahore', country : 'Pakistan', email : 'ali.khan@zintechnologies.com', imgSrc : 'resources/images/ali.png'},
        {id: '23', firstName: 'amir', userName: 'amir', lastName: 'iqbal', password: '123', city : 'Lahore', country : 'Pakistan', email : 'amir.iqbal@zintechnologies.com', imgSrc : 'resources/images/amir.png'},
        {id: '24', firstName: 'zonaib', userName: 'zonaib', lastName: 'siddiqui', password: '123', city : 'Kasur', country : 'Pakistan', email : 'zonaib.siddiqui@zintechnologies.com', imgSrc : 'resources/images/zonaib.png'}
    ],
    storeId: 'UserStore',
    proxy: {
//		type: 'localstorage',
        id: 'userproxy',
        type: 'pagingmemory'

//	    reader: {
//	        type: 'array'
//	    }
    }
//    proxy: {
//	        type: 'ajax',
//	        url: 'resources/examples.json',  // url that will load data with respect to start and limit params
//	        reader: {
//	            type: 'json',
//	            root: 'items',
//	            totalProperty: 'total'
//	        }
//    }
});
