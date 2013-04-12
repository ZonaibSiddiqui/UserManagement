/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('UserManagement.view.user.EditableUserProfile', {extend: 'Ext.form.Panel',
    alias: 'widget.editableUserProfile',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'stretch'
    },
    id : 'EditableUserProfileID',
    cls: 'addEditPanelBgCls',
    items: [
        {
            xtype: 'form',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            margin: '10 0 0 0',
            baseCls: 'addEditPanelBgCls ',
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
                            forId: 'editfirstName',
                            margin: '5 50 5 0',
                            text: 'First Name'

                        },
                        {

                            xtype: 'textfield',
                            id: 'txteditfirstName',
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
                            forId: 'editlastName',
                            margin: '5 50 5 0',
                            text: 'Last Name'
                        },
                        {
                            xtype: 'textfield',
                            id: 'txteditlastName',
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
                            forId: 'edituserName',
                            margin: '5 50 5 0',
                            text: 'User Name'
                        },
                        {
                            xtype: 'textfield',
                            id: 'txtedituserName',
                            cls: 'textFieldBgCls',
                            allowBlank : false,
                            fieldStyle: 'height:30px;width:250px;'
                        }
                    ]
                },{
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
                            forId: 'editpassword',
                            margin: '5 58 5 0',
                            text: 'Password'

                        },
                        {
                            xtype: 'textfield',
                            inputType: 'password',
                            cls: 'textFieldBgCls',
                            id: 'txteditpassword',
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
                            forId: 'editconfirmPassword',
                            margin: '5 15 5 0',
                            text: 'Confirm Password'

                        },
                        {
                            xtype: 'textfield',
                            inputType: 'password',
                            cls: 'textFieldBgCls',
                            allowBlank : false,
                            id: 'txteditconfirmPassword',
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
                            text: 'Save',
                            formBind: true, //only enabled once the form is valid
                            disabled: true,
                            width: 100,
                            height: 30,
                            action: 'editUserProfileSaveBtnAction',
                            cls: 'editProfileBtnCls my-btns'
                        },
                        {
                            xtype: 'button',
                            margin: '10 0 0 10',
                            text: 'Cancel',
                            width: 100,
                            height: 30,
                            action: 'editUserProfileDeleteBtnAction',
                            cls: 'editProfileBtnCls my-btns'
                        }
                    ]
                }
            ]
        }
    ]
})
