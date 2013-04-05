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
    config: {
        views : [
            'user.User',
            'user.Profile',
            'user.EditableUserProfile',
            'user.UserProfile'
        ],
        init: function () {
            this.control({
                "[action = userProfileSaveBtn]": {
                    click: this.userProfileSaveFn
                },
                '[action = userProfileDeleteBtn]': {
                    click: this.userProfileDeleteFn
                },
                '[action = addUserBtnAction]': {
                    click: this.addUserBtnFn
                },
//                '[action = userGridPanelAction]' : {
//                    itemdblclick : this.userGridItemdblclick
//                },
                '[action = userGridPanelAction]': {
                    itemclick: this.userGridItemclick
                },
                '[action = addUserActionBtn]': {
                    click: this.addUserActionBtnFn
                },
                '[action = deleteUserGridBtnAction]': {
                    click: this.deleteUserGridBtnFn
                },
                '[action = userNameBtnAction]': {
                    click: this.userNameBtnActionFn
                }
            });
        }

    },

//    open window for user profile
    addUserActionBtnFn: function () {
//        createWindow('profile', 'Edit / Delete User Profile')
    },

//       call on grid double call
    userGridItemdblclick: function (userGrids, record, item, index, e, eOpts) {
        var u
        p('profileUserImageID').setSrc(userData.imgSrc);
    },

    userNameBtnActionFn: function () {
        createWindow('profile', 'User Profile');
        Ext.getCmp('profileUserNameLabelID').setText('Zonaib Siddiqui');
        Ext.getCmp('profileEmailLabelID').setText('zonaib.siddiqui@zintechnologies.com');
        Ext.getCmp('profileCCLabelID').setText('Lahore, Pakistan');
        Ext.getCmp('profileUserImageID').setSrc('resources/images/zonaib.png');
    },

//    Call on grid single call
    userGridItemclick: function (grids, record, item, index, e, eOpts) {
        localStorage.setItem('userProfileID', index);
        var userData = record.data;
        createWindow('profile', capitaliseFirstLetter(userData.userName) + ' ' + capitaliseFirstLetter(userData.lastName) + "'s Profile");
        Ext.getCmp('profileUserNameLabelID').setText(capitaliseFirstLetter(userData.userName) + ' ' + capitaliseFirstLetter(userData.lastName));
        Ext.getCmp('profileEmailLabelID').setText(userData.email);
        Ext.getCmp('profileCCLabelID').setText(userData.city + ', ' + userData.country);
        Ext.getCmp('profileUserImageID').setSrc(userData.imgSrc);

    },

    // user profile button to save the inserted data
    userProfileSaveFn: function (btn, rec) {
        var userProfileID = localStorage.getItem('userProfileDataID');
        var firstName = Ext.getCmp('editfirstNameTFId').getValue();
        var lastName = Ext.getCmp('editlastNameTFId').getValue();
        var userName = Ext.getCmp('edituserNameTFId').getValue();
        var password = Ext.getCmp('editpasswordTFId').getValue();
        var confirmPassword = Ext.getCmp('editconfirmPasswordTFId').getValue();
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
        var userStore = Ext.getStore('UserStore');
        userStore.each(function (rec) {
            if (rec.data.id == userProfileID) {
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
    userProfileDeleteFn: function () {
        var userProfileID   = localStorage.getItem('userProfileID');
        var userStore  = Ext.getStore('UserStore');
        userStore.removeAt(parseInt(userProfileID));
        Ext.getCmp('UserWindowID').close();
    },
    // grid delete btn
    deleteUserGridBtnFn: function () {
        var userProfileID = localStorage.getItem('userProfileID');
        var userStore = Ext.getStore('UserStore');
        var userRec = userStore.getAt(userProfileID)
        Ext.Msg.alert('Caution', 'Do u really want to delete ' + capitaliseFirstLetter(userRec.data.userName) + ' ' + capitaliseFirstLetter(userRec.data.lastName), function (txt) {
            if (txt == 'ok') {
                userStore.removeAt(parseInt(userProfileID));
            }
        })
    }

    // add user in the grid by openning a window to insert user data
    , addUserBtnFn: function () {
//		alert('User is added successfully')
        Ext.create('Ext.window.Window', {
            title: 'Add User',
            id: 'addUserWindowID',
            height: 400,
            width: 500,
            modal: true,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            bodyCls: 'editPanelBgCls',
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'center'
                    },
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox'
                            },
                            margin: '0 0 0 250',
                            items: [
                                {
                                    xtype: 'label',
                                    forId: 'addfirstNameId',
                                    margin: '5 50 5 0',
                                    text: 'First Name'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'addfirstNameTFId',
                                    fieldStyle: 'height:30px;width:250px;',
                                    cls: 'textFieldBgCls',
                                    hideLabel: true
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox'
                            },
                            margin: '0 0 0 250',
                            items: [
                                {
                                    xtype: 'label',
                                    forId: 'addlastNameId',
                                    margin: '5 50 5 0',
                                    text: 'Last Name'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'addlastNameTFId',
                                    cls: 'textFieldBgCls',
                                    fieldStyle: 'height:30px;width:250px;',
                                    hideLabel: true
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox'
                            },
                            margin: '0 0 0 250',
                            items: [
                                {
                                    xtype: 'label',
                                    forId: 'adduserNameId',
                                    margin: '5 50 5 0',
                                    text: 'User Name'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'adduserNameTFId',
                                    cls: 'textFieldBgCls',
                                    fieldStyle: 'height:30px;width:250px;',
                                    hideLabel: true
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox'
                            },
                            margin: '0 0 0 0',
                            items: [
                                {
                                    xtype: 'label',
                                    forId: 'addpasswordId',
                                    margin: '5 58 5 0',
                                    text: 'Password'
                                },
                                {
                                    xtype: 'textfield',
                                    inputType: 'password',
                                    cls: 'textFieldBgCls',
                                    id: 'addpasswordTFId',
                                    fieldStyle: 'height:30px;width:250px;',
                                    hideLabel: true
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox'
                            },
                            margin: '0 0 0 35px',
                            items: [
                                {
                                    xtype: 'label',
                                    forId: 'addconfirmPasswordId',
                                    margin: '5 15 5 0',
                                    text: 'Confirm Password'

                                },
                                {
                                    xtype: 'textfield',
                                    inputType: 'password',
                                    cls: 'textFieldBgCls',
                                    id: 'addconfirmPasswordTFId',
                                    fieldStyle: 'height:30px;width:250px;',
                                    hideLabel: true
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox'
                            },
                            margin: '0 0 20 0',
                            items: [
                                {
                                    xtype: 'button',
                                    margin: '10 0 0 0',
                                    flex: 2,
                                    text: 'Save',
                                    width: 100,
                                    height: 30,
                                    cls: 'editProfileBtnCls my-btns',
                                    listeners: {
                                        click: function () {
                                            addBtnSave();
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    margin: '10 0 0 10',
                                    flex: 2,
                                    text: 'Cancel',
                                    width: 100,
                                    height: 30,
                                    cls: 'editProfileBtnCls my-btns',
                                    listeners: {
                                        click: function () {
                                            Ext.getCmp('addUserWindowID').close();
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
addBtnSave = function () {
    var userProfileID = localStorage.getItem('adduserProfileID');
    var firstName = Ext.getCmp('addfirstNameTFId').getValue();
    var lastName = Ext.getCmp('addlastNameTFId').getValue();
    var userName = Ext.getCmp('adduserNameTFId').getValue();
    var password = Ext.getCmp('addpasswordTFId').getValue();
    var confirmPassword = Ext.getCmp('addconfirmPasswordTFId').getValue();
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
    var userStore = Ext.getStore('UserStore');
    userStore.add({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password
    });
    Ext.getCmp('addUserWindowID').close();
};