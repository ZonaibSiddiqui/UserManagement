/**
 * Created with IntelliJ IDEA.
 * User: zonaib.siddiqui
 * Date: 3/27/13
 * Time: 1:37 PM
 * To change this template use File | Settings | File Templates.
 *
 * User  controller, used to fire events in the user module of the app.
 */

Ext.define('UserManagement.controller.userController', {
    extend: 'Ext.app.Controller',
    config : {
        init : function(){
            this.control({
               "[action = userProfileSaveBtn]" : {
                    click : this.userProfileSaveFn
                },
                '[action = userProfileDeleteBtn]' : {
                    click : this.userProfileDeleteFn
                },
                '[action = addUserBtnAction]' : {
                    click : this.addUserBtnFn
                },
                '[action = userGridPanelAction]' : {
                    itemdblclick : this.userGridItemdblclick
                },
//                '[action = userGridPanelAction]' : {
//                    itemclick : this.userGridItemclick
//                },
                '[action = addUserActionBtn]' : {
                    click : this.addUserActionBtnFn
                },
                '[action = deleteUserGridBtnAction]' : {
                    click : this.deleteUserGridBtnFn
                },
                '[action = userNameBtnAction]' : {
                    click : this.userNameBtnActionFn
                }
            });
        }

    },

//    open window for user profile
    addUserActionBtnFn : function(){
//        createWindow('profile', 'Edit / Delete User Profile')
    },

//       call on grid double call
    userGridItemdblclick : function(userGrids, record, item, index, e, eOpts ){
        var userData = record.data;                          ;
        createWindow('profile', 'User Profile');
        Ext.getCmp('profileUserNameLabelID').setText(userData.userName+' '+userData.lastName);
        Ext.getCmp('profileEmailLabelID').setText(userData.email);
        Ext.getCmp('profileCCLabelID').setText(userData.city + ', '+userData.country );
        Ext.getCmp('profileUserImageID').setSrc(userData.imgSrc);
    },

    userNameBtnActionFn : function(){
        createWindow('profile', 'User Profile');
        Ext.getCmp('profileUserNameLabelID').setText('Zonaib Siddiqui');
        Ext.getCmp('profileEmailLabelID').setText('zonaib.siddiqui@zintechnologies.com');
        Ext.getCmp('profileCCLabelID').setText('Lahore, Pakistan');
        Ext.getCmp('profileUserImageID').setSrc('resources/images/zonaib.png');
    },

//    Call on grid single call
    userGridItemclick : function(grids, record, item, index, e, eOpts ){
        localStorage.setItem('userProfileID', index);

    },

    // user profile button to save the inserted data
    userProfileSaveFn : function(btn, rec){
        var userProfileID   = localStorage.getItem('userProfileDataID');
        var firstName 		= Ext.getCmp('editfirstNameTFId').getValue();
        var lastName 		= Ext.getCmp('editlastNameTFId').getValue();
        var userName  		= Ext.getCmp('edituserNameTFId').getValue();
        var password 		= Ext.getCmp('editpasswordTFId').getValue();
        var confirmPassword = Ext.getCmp('editconfirmPasswordTFId').getValue();
        if(firstName == '' || firstName == undefined){
            Ext.Msg.alert('Caution', 'Please enter proper first name');
            return;
        }
        if(lastName == '' || lastName == undefined){
            Ext.Msg.alert('Caution', 'Please enter proper last name');
            return;
        }
        if(userName == '' || userName == undefined){
            Ext.Msg.alert('Caution', 'Please enter proper user name');
            return;
        }
        if(password == '' || password == undefined){
            Ext.Msg.alert('Caution', 'Please enter password');
            return;
        }
        if(confirmPassword == '' || confirmPassword == undefined){
            Ext.Msg.alert('Caution', 'Please enter confirm password');
            return;
        }
        if(password != confirmPassword){
            Ext.Msg.alert('Caution', 'Password do not match, please try again');
            return;
        }
        var userStore  = Ext.getStore('UserStore');
        userStore.each(function(rec){
            if(rec.data.id == userProfileID){
                rec.data.firstName = firstName;
                rec.data.lastName = lastName;
                rec.data.userName = userName;
                rec.data.password = password;
                Ext.Msg.alert('Congrats', 'Your profile is successfully editted');
                Ext.getCmp('UserWindowID').close();
            }
        });
//        userStore.clearFilter();
//        userStore.load(function(rec, operation, success) {
//            console.log(rec[userProfileID].data.id)
//            if(rec[userProfileID].data.id == userProfileID){
//                rec[userProfileID].data.firstName = firstName;
//                rec[userProfileID].data.lastName = lastName;
//                rec[userProfileID].data.userName = userName;
//                rec[userProfileID].data.password = password;
//                Ext.Msg.alert('Congrats', 'Your profile is successfully editted');
//                Ext.getCmp('UserWindowID').close();
//            }
//        });
//        userStore.proxy.extraParams = { firstName: firstName };userStore.load();
//        userStore.load();
//            userStore.sync({
//
//            success: function( response ) {
//                userStore.load();
//            }
//        });
    },

    //UserProfileDeleteFn() used to delete user profile data
    userProfileDeleteFn : function(){
        var userProfileID   = localStorage.getItem('userProfileID');
        var userStore  = Ext.getStore('UserStore');
        userStore.removeAt(parseInt(userProfileID));
        Ext.getCmp('UserWindowID').close();
    },
        // grid delete btn
    deleteUserGridBtnFn : function(){
        var userProfileID   = localStorage.getItem('userProfileID');
        var userStore  = Ext.getStore('UserStore');
        userStore.removeAt(parseInt(userProfileID));
    }
    // add user in the grid by openning a window to insert user data
    ,addUserBtnFn : function(){
//		alert('User is added successfully')
        Ext.create('Ext.window.Window', {
            title: 'Add USer',
            id: 'addUserWindowID',
            height: 240,
            width: 400,
            layout: 'auto',

            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        pack: 'center'
                    },
                    margin: '0 0 0 60',
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    forId: 'addfirstNameId',
                                    margin: '5 50 0 0',
                                    text: 'First Name'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'addfirstNameTFId',
                                    margin: '5 0 0 0',
                                    fieldStyle: 'height:25px;',
                                    hideLabel: true
                                }

                            ]

                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox'
                            }, items: [
                            {
                                xtype: 'label',
                                forId: 'addlastNameId',
                                margin: '5 50 0 0',
                                text: 'Last Name'
                            },
                            {
                                xtype: 'textfield',
                                id: 'addlastNameTFId',
                                margin: '5 0 0 0',
                                fieldStyle: 'height:25px;',
                                hideLabel: true
                            }

                        ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    margin: '5 49 0 0',
                                    forId: 'adduserNameId',
                                    text: 'User Name'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'adduserNameTFId',
                                    margin: '5 0 0 0',
                                    fieldStyle: 'height:25px;',
                                    hideLabel: true
                                }

                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    forId: 'addpasswordId',
                                    margin: '5 57 0 0',
                                    text: 'Password'

                                },
                                {
                                    xtype: 'textfield',
                                    inputType: 'password',
                                    margin: '5 0 0 0',
                                    id: 'addpasswordTFId',
                                    fieldStyle: 'height:25px;',
                                    hideLabel: true

                                }

                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    margin: '5 13 0 0',
                                    forId: 'addconfirmPasswordId',
                                    text: 'Confirm Password'

                                },
                                {
                                    xtype: 'textfield',
                                    inputType: 'password',
                                    margin: '5 0 0 0',
                                    id: 'addconfirmPasswordTFId',
                                    fieldStyle: 'height:25px;',
                                    hideLabel: true
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox'
                            },
                            margin: '5 0 0 40',
                            items: [
                                {
                                    xtype: 'button',
                                    flex: 2,
                                    text: 'Save',
                                    width: buttonWidth,
                                    margin: '0 5 0 0',
                                    cls: 'loginbtncls my-btn',
                                    listeners: {
                                        click: function () {
                                            addBtnSave();
                                        }
                                    }


                                },
                                {
                                    xtype: 'button',
                                    flex: 2,
                                    text: 'Cancel',
                                    width: buttonWidth,
                                    action: '',
                                    cls: 'loginbtncls my-btn',
                                    listeners: {
                                        click: function () {
                                            Ext.getCmp('addUserWindowID').close()
                                        }
                                    }
                                }

                            ]
                        }
                    ]
                }

            ]
        }).show();
//		Ext.Msg.alert('Congrats', 'User is added successfully');
    }
});


// add user window data into the store and show on grid
addBtnSave = function(){
    var userProfileID   = localStorage.getItem('adduserProfileID');
    var firstName 		= Ext.getCmp('addfirstNameTFId').getValue();
    var lastName 		= Ext.getCmp('addlastNameTFId').getValue();
    var userName  		= Ext.getCmp('adduserNameTFId').getValue();
    var password 		= Ext.getCmp('addpasswordTFId').getValue() ;
    var confirmPassword = Ext.getCmp('addconfirmPasswordTFId').getValue();
    if(firstName == '' || firstName == undefined){
        Ext.Msg.alert('Caution', 'Please enter proper first name');
        return;
    }
    if(lastName == '' || lastName == undefined){
        Ext.Msg.alert('Caution', 'Please enter proper last name');
        return;
    }
    if(userName == '' || userName == undefined){
        Ext.Msg.alert('Caution', 'Please enter proper user name');
        return;
    }
    if(password == '' || password == undefined){
        Ext.Msg.alert('Caution', 'Please enter password');
        return;
    }
    if(confirmPassword == '' || confirmPassword == undefined){
        Ext.Msg.alert('Caution', 'Please enter confirm password');
        return;
    }
    if(password != confirmPassword){
        Ext.Msg.alert('Caution', 'Password do not match, please try again');
        return;
    }
    var userStore  = Ext.getStore('UserStore');
    userStore.add({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password
    });
    Ext.getCmp('addUserWindowID').close();
};