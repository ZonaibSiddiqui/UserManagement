/**
 * Created with IntelliJ IDEA.
 * User: zonaib.siddiqui
 * Date: 4/10/13
 * Time: 4:13 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.store.CountryStore', {
    extend: 'Ext.data.Store',
    storeId: 'CountryStore',
    fields: ['id', 'countryName'],
    data : [
        {"id":"1", "countryName":"Pakistan"},
        {"id":"2", "countryName":"India"},
        {"id":"3", "countryName":"Australia"},
        {"id":"4", "countryName":"Sri Lanka"},
        {"id":"5", "countryName":"Nepal"},
        {"id":"6", "countryName":"Japan"},
        {"id":"7", "countryName":"USA"},
        {"id":"8", "countryName":"UK"},
        {"id":"9", "countryName":"Germany"}

    ]
});
