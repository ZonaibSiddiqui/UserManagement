Ext.define('UserManagement.model.UserModel', {
    extend: 'Ext.data.Model',
    idProperty: 'User',
    fields: [
        {name: 'id', type:'int'},
        {name: 'firstName', type : 'string'},
        {name: 'lastName', type : 'string'},
        {name: 'userName', type : 'string', matcher: /([a-z]+)[0-9]{2,3}/},
        {name: 'password', type : 'string'},
        {name : 'city', type : 'string'},
        {name : 'country', type : 'string'},
        {name : 'email', type : 'string'},
        {name : 'imgSrc', type : 'string', matcher: /([a-z]+)[0-9]{2,3} 03344644336/}
    ]

    //Specify few validations on model fields
});