/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaLogin.view.user.UserProfile', {extend: 'Ext.container.Container',
    xtype: 'UserProfile',
    renderTo: Ext.getBody(),
    id: 'UserProfileID',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'toolbar',
            baseCls: 'mainToolbarcls',
            flex: 2,
            title: 'User Profile',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'stretch'
            },
            width: 200,
            items: [
                {
                    xtype: 'tbspacer',
                    flex: 4
                },
                {
                    xtype: 'container',
                    flex: 5,
                    html: [
                        '<span style="font-size:20px;">User Profile</span>'
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            margin: '20 0 0 0',
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox'
                    },
                    margin: '15 0 0 250',
                    items: [
                        {
                            xtype: 'label',
                            forId: 'firstNameId',
                            margin: '5 50 0 0',
                            text: 'First Name'

                        },
                        {
                            xtype: 'textfield',
                            id: 'firstNameTFId',
                            readOnly: true,
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
                    margin: '15 0 0 250',
                    items: [
                        {
                            xtype: 'label',
                            forId: 'lastNameId',
                            margin: '5 50 0 0',
                            text: 'Last Name'
                        },
                        {
                            xtype: 'textfield',
                            id: 'lastNameTFId',
                            readOnly: true,
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
                    margin: '15 0 0 250',
                    items: [
                        {
                            xtype: 'label',
                            forId: 'userNameId',
                            margin: '5 50 0 0',
                            text: 'User Name'
                        },
                        {
                            xtype: 'textfield', readOnly: true, id: 'userNameTFId', fieldStyle: 'height:25px;', hideLabel: true
                        }

                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox'
                    },
                    margin: '15 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            forId: 'passwordId',
                            margin: '5 58 0 0',
                            text: 'Password'

                        },
                        {
                            xtype: 'textfield',
                            inputType: 'password',
                            readOnly: true,
                            id: 'passwordTFId',
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
                    margin: '15 0 0 35px',
                    items: [
                        {
                            xtype: 'label',
                            forId: 'confirmPasswordId',
                            margin: '5 15 0 0',
                            text: 'Confirm Password'

                        },
                        {
                            xtype: 'textfield',
                            inputType: 'password',
                            readOnly: true,
                            id: 'confirmPasswordTFId',
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
                    margin: '15 0 20 0',
                    items: [
                        {
                            xtype: 'button',
                            margin: '15 0 0 0',
                            flex: 2,
                            text: 'Edit',
                            width: buttonWidth,
                            cls: 'loginbtncls my-btn',
                            listeners: {
                                click: function () {
                                    Ext.getCmp('ProfileID').getLayout().setActiveItem(1)
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            margin: '15 0 0 10',
                            flex: 2,
                            text: 'Cancel',
                            width: buttonWidth,
                            cls: 'loginbtncls my-btn',
                            listeners: {
                                click: function () {
                                    Ext.getCmp('UserWindowID').close()
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
//        afterRender: function () {
//            var userProfileID = Ext.decode(localStorage.getItem('userProfileID'))
//            console.log(userProfileID)
//            var userStore = Ext.getStore('UserStore');
//            userStore.each(function (rec) {
//                if (rec.data.id == userProfileID) {
//                    Ext.getCmp('firstNameTFId').setValue(rec.data.firstName)
//                    Ext.getCmp('lastNameTFId').setValue(rec.data.lastName)
//                    Ext.getCmp('userNameTFId').setValue(rec.data.userName)
//                    Ext.getCmp('passwordTFId').setValue(rec.data.password)
//                    Ext.getCmp('confirmPasswordTFId').setValue(rec.data.password)
//                }
//
//            })
//        }
    }
})
