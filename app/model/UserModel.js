Ext.define('SenchaLogin.model.UserModel', {
    extend: 'Ext.data.Model',
    idProperty: 'User',
    fields: [
        {name: 'id'},
        {name: 'firstName'},
        {name: 'lastName'},
        {name: 'userName'},
        {name: 'password'},
        {name : 'city'},
        {name : 'country'},
        {name : 'email'},
        {name : 'imgSrc'}
    ]
});