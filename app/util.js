/**
 * Created with IntelliJ IDEA.
 * User: zonaib.siddiqui
 * Date: 4/9/13
 * Time: 4:30 PM
 * To change this template use File | Settings | File Templates.
 */


// button width
buttonWidth = 80;
// page size to load data into store
itemsPerPage = 7;

// localStorageProxy laod data to localstorage

localStorageProxy = function(){
    var usersNameArr = new Array();
    usersNameArr.push(
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
        {id: '12', firstName: 'zonaib', userName: 'zonaib', lastName: 'siddiqui', password: '123', city : 'Kasur', country : 'Pakistan', email : 'zonaib.siddiqui@zintechnologies.com', imgSrc : 'resources/images/zonaib.png'}
    );
    // store data to localstorage
    localStorage.setItem('UserData', Ext.JSON.encode(usersNameArr));
    Ext.getStore('UserStore').loadData(Ext.decode(localStorage.getItem('UserData')))

}

//  create window

createWindow = function(itemXtype , windowTitleMsg, userProfileData){
//    console.log(Ext.Viewport().getComponentQuery.query('UserWindowID'))
    console.log(windowTitleMsg)
    Ext.create('Ext.window.Window', {
        title: windowTitleMsg,
        id : 'UserWindowID',
        autoDestroy: true,
        dataArr : userProfileData,
        layout: {
            type  : 'card'
        },
        modal : true,
        items:[
            {
                xtype : itemXtype
            }
        ],
        listeners : {
//            afterrender : function(){
//                var me = this
////                console.log(me.items);
//                var userData = me.dataArr;
//                if(userData){
//                    Ext.ComponentQuery.query('label[itemId=profileUserNameLabel]')[0].setText(capitaliseFirstLetter(userData.userName) + ' ' + capitaliseFirstLetter(userData.lastName))
//                    Ext.ComponentQuery.query('label[itemId=profileEmailLabel]')[0].setText(userData.email);
//                    Ext.ComponentQuery.query('label[itemId=profileCCLabel]')[0].setText(userData.city + ', ' + userData.country);
//                    Ext.ComponentQuery.query('image[itemId=profileUserImage]')[0].setSrc(userData.imgSrc);
//                }else{
//                    Ext.ComponentQuery.query('label[itemId=profileUserNameLabel]')[0].setText('Zonaib Siddiqui');
//                    Ext.ComponentQuery.query('label[itemId=profileEmailLabel]')[0].setText('zonaib.siddiqui@zintechnologies.com');
//                    Ext.ComponentQuery.query('label[itemId=profileCCLabel]')[0].setText('Lahore, Pakistan');
//                    Ext.ComponentQuery.query('image[itemId=profileUserImage]')[0].setSrc('resources/images/zonaib.png');
//                }
//            }
        }
//        initComponent : function(){
//            var me = this
//               if(me.items[0].xtype == 'profile'){
//                   var userData = me.dataArr;
//                   console.log(userData.userName)
////                   Ext.ComponentQuery.query('label[itemId=profileUserNameLabel]')[0].setText(capitaliseFirstLetter(userData.userName) + ' ' + capitaliseFirstLetter(userData.lastName))
////                   Ext.ComponentQuery.query('label[itemId=profileEmailLabel]')[0].setText(userData.email);
////                   Ext.ComponentQuery.query('label[itemId=profileCCLabel]')[0].setText(userData.city + ', ' + userData.country);
////                   Ext.ComponentQuery.query('image[itemId=profileUserImage]')[0].setSrc(userData.imgSrc);
////                   Ext.ComponentQuery.query('label[itemId=profileUserNameLabel]')[0].setText('Zonaib Siddiqui')
////                   Ext.ComponentQuery.query('label[itemId=profileEmailLabel]')[0].setText('zonaib.siddiqui@zintechnologies.com')
////                   Ext.ComponentQuery.query('label[itemId=profileCCLabel]')[0].setText('Lahore, Pakistan')
////                   Ext.ComponentQuery.query('image[itemId=profileUserImage]')[0].setSrc('resources/images/zonaib.png')
//               }
//        }
    }).show();
}

// used to capatilize forst character of the string
function capitaliseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// to validate user input data
userFormValidation = function(firstName, lastName, userName, password, confirmPassword){
    if (firstName == '' || firstName == undefined) {
        Ext.Msg.alert('Caution', 'Please enter proper first name');
        return;
    }
    if (lastName == '' || lastName == undefined) {
        Ext.Msg.alert('Caution', 'Please enter proper last name');
        return;
    }
    if (userName == '' || userName == undefined) {
        Ext.Msg.alert('Caution', 'Please enter proper user name');
        return;
    }
    if (password == '' || password == undefined) {
        Ext.Msg.alert('Caution', 'Please enter password');
        return;
    }
    if (confirmPassword == '' || confirmPassword == undefined) {
        Ext.Msg.alert('Caution', 'Please enter confirm password');
        return;
    }
    if (password != confirmPassword) {
        Ext.Msg.alert('Caution', 'Password do not match, please try again');
        return;
    }
}

recordDelete = function(){
    var userProfileID = localStorage.getItem('userProfileID');
    var userStore = Ext.getStore('UserStore');
    var userRec = userStore.getAt(userProfileID)
    Ext.Msg.alert('Caution', 'Do u really want to delete ' + capitaliseFirstLetter(userRec.data.userName) + ' ' + capitaliseFirstLetter(userRec.data.lastName), function (txt) {
        if (txt == 'ok') {
            userStore.removeAt(parseInt(userProfileID));
        }
    })
}

