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
    views : [
        'user.UserList',
        'user.Profile',
        //1: Profile
        //2: EditProfile (Button: Save, Cancel)
        //  2.1: _UserForm.js
        //3: AddProfile (Button: Save, Cancel)
        //  3.1: _UserForm.js
    'user.EditableUserProfile', // Merge these two components (Add+Edit)
        'user.UserProfile'
    ],

    config: {
        init: function () {
            this.control({
                "[action = editUserProfileSaveBtnAction]": {
                    click: this.onEditUserProfileSaveBtnClick
                },
                '[action = editUserProfileDeleteBtnAction]': {
                    click: this.onEditUserProfileDeleteBtnClick
                },
                '[action = addUserBtnAction]': {
                    click: this.addUserBtnFn
                },
                '[action = userGridPanelAction]' : {
                    itemdblclick : this.onUserGridItemdblclick
                },
//                '[action = userGridPanelAction]': {
//                    select: this.userGridItemclick //, this, {buffer: 300}
//                    itemclick : Ext.Function.createBuffered(this.userGridItemclick, 1000, this)
//                    itemclick : Ext.Function.createDelayed  (this.userGridItemclick, 1000, this)

//                },
                '[action = addUserActionBtn]': {
                    click: this.addUserActionBtnFn
                },
                '[action = deleteUserGridBtnAction]': {
                    click: this.deleteUserGridBtnFn
                },
                '[action = userNameBtnAction]': {
                    click: this.onUserNameBtnClick
                },
                '[action = userProfileCancelBtnAction]' : {
                    click  : this.onUserProfileCancelBtnClick
                },
                '[action = userProfileSaveBtnAction]' : {
                    click  : this.onUserProfileSaveBtnClick
                }
            });
        }
    },

    onUserProfileSaveBtnClick : function(){
        var firstName = Ext.ComponentQuery.query('textfield[itemId=txtfirstName]')[0].getValue();
        var lastName = Ext.ComponentQuery.query('textfield[itemId=txtlastName]')[0].getValue();
        var userName = Ext.ComponentQuery.query('textfield[itemId=txtuserName]')[0].getValue();
        var password = Ext.ComponentQuery.query('textfield[itemId=txtpassword]')[0].getValue();
        var confirmPassword = Ext.ComponentQuery.query('textfield[itemId=txtconfirmPassword]')[0].getValue();

        // validate the add user form
        var formValidation = Ext.getCmp('userProfileForm').getForm().isValid()
        if(formValidation == 0){
            Ext.Msg.alert('Caution', 'Please Fill all the fields');
            return;
        }

        // add new user to the store
        var userStore = Ext.getStore('UserStore');
        userStore.add({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password
        });

        // Activate first tab of tab panel
        Ext.getCmp('userListID').getLayout().setActiveItem(0)
    },

    // user profile cancel button which is used to reset text fields
    onUserProfileCancelBtnClick : function(){
        Ext.getCmp('userProfileForm').getForm().reset();
        Ext.getCmp('userListID').getLayout().setActiveItem(0)
    },

//    open window for user profile
    addUserActionBtnFn: function () {
//        createWindow('profile', 'Edit / Delete User Profile')
    },

//       call on grid double call
    onUserGridItemdblclick: function (userGrids, record, item, index, e, eOpts) {
        localStorage.setItem('userProfileID', index);
        var userData = record.data;
        createWindow('profile', capitaliseFirstLetter(userData.userName) + ' ' + capitaliseFirstLetter(userData.lastName) + "'s Profile", userData);
    },

    // open window when click on user name on toolbar having user info
    onUserNameBtnClick: function () {
        createWindow('profile', "Zonaib Siddiqui's Profile");
    },

//    Call on grid single call
    userGridItemclick: function (grids, record, item, index, e, eOpts) {
//        alert('sss')
//        localStorage.setItem('userProfileID', index);
//        var userData = record.data;
//        createWindow('profile', capitaliseFirstLetter(userData.userName) + ' ' + capitaliseFirstLetter(userData.lastName) + "'s Profile");
//        Ext.getCmp('profileUserNameLabelID').setText(capitaliseFirstLetter(userData.userName) + ' ' + capitaliseFirstLetter(userData.lastName));
//        Ext.getCmp('profileEmailLabelID').setText(userData.email);
//        Ext.getCmp('profileCCLabelID').setText(userData.city + ', ' + userData.country);
//        Ext.getCmp('profileUserImageID').setSrc(userData.imgSrc);

    },

    // user profile button to save the inserted data
    onEditUserProfileSaveBtnClick : function (btn, rec) {
        var userProfileID = localStorage.getItem('userProfileDataID');
        var firstName = Ext.ComponentQuery.query('textfield[itemId=txtfirstName]')[0].getValue();
        var lastName = Ext.ComponentQuery.query('textfield[itemId=txtlastName]')[0].getValue();
        var userName = Ext.ComponentQuery.query('textfield[itemId=txtuserName]')[0].getValue();
        var password = Ext.ComponentQuery.query('textfield[itemId=txtpassword]')[0].getValue();
        var confirmPassword = Ext.ComponentQuery.query('textfield[itemId=txtconfirmPassword]')[0].getValue();

        var formValidation = Ext.getCmp('userProfileForm').getForm().isValid()
        if(formValidation == 0){
            Ext.Msg.alert('Caution', 'Please Fill all the fields');
            return;
        }

        var userStore = Ext.getStore('UserStore');
        //Use filter on store, don't use loop
        userStore.add({firstName : firstName, lastName : lastName, userName : userName, password : password})
//        userStore.each(function (rec) {
//            if (rec.data.id == userProfileID) {
//                rec.data.firstName = firstName;
//                rec.data.lastName = lastName;
//                rec.data.userName = userName;
//                rec.data.password = password;
//                Ext.Msg.alert('Congrats', 'Your profile is successfully editted');
//                Ext.getCmp('UserWindowID').close();
//            }
//        });

    },

    //UserProfileDeleteFn() used to delete user profile data
    onEditUserProfileDeleteBtnClick : function () {
        recordDelete()
        Ext.getCmp('UserWindowID').close();
    },

    // grid delete btn
    deleteUserGridBtnFn: function () {
        recordDelete()
    },

    // add user in the grid by openning a window to insert user data
    addUserBtnFn: function () {
           createWindow('userProfile','Add User')
        // Remove the following code and use addUser component
        // Keep windows object separate from all inner items
//                                        click save btn: function () {
//                                            addBtnSave();
//                                        }
//                                {
//                                        click cancel btn: function () {
//                                            Ext.getCmp('txtaddfirstName').reset();
//                                            Ext.getCmp('txtaddlastName').reset();
//                                            Ext.getCmp('txtaddpassword').reset();
//                                            Ext.getCmp('txtadduserName').reset();
//                                            Ext.getCmp('addUserWindowID').close();
},

    actionColumnClick : function(rec){
        Ext.ComponentQuery.query('textfield[itemId=txteditfirstName]')[0].setValue(rec.get('firstName'));
        Ext.ComponentQuery.query('textfield[itemId=txteditlastName]')[0].setValue(rec.get('lastName'));
        Ext.ComponentQuery.query('textfield[itemId=txtedituserName]')[0].setValue(rec.get('userName'));
        Ext.ComponentQuery.query('textfield[itemId=txteditpassword]')[0].setValue(rec.get('password'));
        Ext.ComponentQuery.query('textfield[itemId=txteditconfirmPassword]')[0].setValue(rec.get('password'));
    }
});

