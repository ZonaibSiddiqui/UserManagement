/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('UserManagement.view.user.UserProfile', {extend: 'Ext.container.Container',
    alias: 'widget.userProfile',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'stretch'
    },
//    requires : ['UserManagement.view.user.UserList'],
    cls: 'addEditPanelBgCls ',
    minWidth: 500,
    minHeight: 447,
    items: [
        {
            xtype: 'form',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            id : 'userProfileForm',
            baseCls: 'addEditPanelBgCls ',
            margin: '10 0 0 0',
            deafult : {
                blankText : 'should not be blank'
            },
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
                            forId: 'firstName',
                            margin: '5 50 5 0',
                            text: 'First Names'
                        },
                        {
                            xtype: 'textfield',
                            itemId : 'txtfirstName',
                            fieldStyle: 'height:30px;width:250px;',
                            cls: 'textFieldBgCls',

                            allowBlank : false
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
                            forId: 'lastName',
                            margin: '5 50 5 0',
                            text: 'Last Name'
                        },
                        {
                            xtype: 'textfield',
                            itemId : 'txtlastName',
                            cls: 'textFieldBgCls',
                            allowBlank : false,
                            fieldStyle: 'height:30px;width:250px;'
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
                            forId: 'userName',
                            margin: '5 50 5 0',
                            text: 'User Name'
                        },
                        {
                            xtype: 'textfield',
                            itemId : 'txtuserName',
                            cls: 'textFieldBgCls',
                            allowBlank : false,
                            fieldStyle: 'height:30px;width:250px;'
                        }
                    ]
                }, {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        pack : 'left'

                    },
                    margin: '0 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            forId: 'Country',
                            margin: '5 58 5 0',
                            text: 'Choose Country'
                        },
                        {
                            xtype : 'combo',
                            store: 'CountryStore',
                            width : 250,
                            ui : 'round',
                            queryMode: 'local',
                            cls: 'textFieldBgCls',
                            fieldStyle: 'height:24px;width:250px;',
                            displayField: 'countryName',
                            valueField: 'countryName'
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
                            forId: 'password',
                            margin: '5 58 5 0',
                            text: 'Password'
                        },
                        {
                            xtype: 'textfield',
                            inputType: 'password',
                            cls: 'textFieldBgCls',
                            itemId : 'txtpassword',
                            allowBlank : false,
                            fieldStyle: 'height:30px;width:250px;'
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
                            forId: 'confirmPassword',
                            margin: '5 15 5 0',
                            text: 'Confirm Password'
                        },
                        {
                            xtype: 'textfield',
                            inputType: 'password',
                            cls: 'textFieldBgCls',
                            itemId : 'txtconfirmPassword',
                            allowBlank : false,
                            fieldStyle: 'height:30px;width:250px;'
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
                            formBind: true, //only enabled once the form is valid
                            disabled: true,
                            margin: '10 0 0 0',
                            text: 'Save',
                            width: 100,
                            height: 30,
                            cls: 'editProfileBtnCls my-btns',
                            action: 'userProfileSaveBtnAction'
                        },
                        {
                            xtype: 'button',
                            margin: '10 0 0 10',
                            text: 'Cancels',
                            width: 100,
                            height: 30,
                            cls: 'editProfileBtnCls my-btns',
                            action: 'userProfileCancelBtnAction'
                        }
                    ]
                }
            ]
        }
    ]
})

/*
 *







 * */