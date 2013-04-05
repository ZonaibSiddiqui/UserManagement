/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('UserManagement.view.user.UserProfile', {extend: 'Ext.container.Container',
    xtype: 'userProfile',
    id: 'UserProfileID',
    layout : {
        type  : 'vbox',
        pack : 'center',
        align : 'stretch'
    },
//    renderTo : Ext.getBody(),
//    cls:'user-grid',
    cls  : 'editPanelBgCls ',
    items : [
        {
            xtype : 'container',
            layout : {
                type : 'vbox',
                align : 'center'
            },
            margin : '10 0 0 0',
            items : [
                {
                    xtype : 'container',
                    layout : {
                        type : 'vbox'
                    },
                    margin : '0 0 0 250',
                    items : [
                        {

                            xtype : 'label',
                            forId: 'firstNameId',
                            margin : '5 50 5 0',
                            text: 'First Name'

                        },{

                            xtype: 'textfield',
//                             width : '100%',
                            id : 'firstNameTFId',
                            fieldStyle: 'height:30px;width:250px;',
                            cls : 'textFieldBgCls',
                            hideLabel: true
                        }

                    ]

                },{
                    xtype : 'container',
                    layout : {
                        type : 'vbox'
                    },
                    margin : '0 0 0 250',
                    items : [
                        {
                            xtype : 'label',
                            forId: 'lastNameId',
                            margin : '5 50 5 0',
                            text: 'Last Name'
                        },{
                            xtype: 'textfield',
                            id : 'lastNameTFId',
                            cls : 'textFieldBgCls',
                            fieldStyle: 'height:30px;width:250px;',
                            hideLabel: true
                        }

                    ]
                },{
                    xtype : 'container',
                    layout : {
                        type : 'vbox'
                    },
                    margin : '0 0 0 250',
                    items : [
                        {
                            xtype : 'label',
                            forId: 'userNameId',
                            margin : '5 50 5 0',
                            text: 'User Name'
                        },{
                            xtype: 'textfield',
                            id : 'userNameTFId',
                            cls : 'textFieldBgCls',
                            fieldStyle: 'height:30px;width:250px;',
                            hideLabel: true
                        }

                    ]
                },{
                    xtype : 'container',
                    layout : {
                        type : 'vbox'
                    },
                    margin : '0 0 0 0',
                    items : [
                        {
                            xtype : 'label',
                            forId: 'passwordId',
                            margin : '5 58 5 0',
                            text: 'Password'

                        },{
                            xtype: 'textfield',
                            inputType : 'password',
                            cls : 'textFieldBgCls',
                            id : 'passwordTFId',
                            fieldStyle: 'height:30px;width:250px;',
                            hideLabel: true
                        }

                    ]
                },{
                    xtype : 'container',
                    layout : {
                        type : 'vbox'
                    },
                    margin : '0 0 0 35px',
                    items : [
                        {
                            xtype : 'label',
                            forId: 'confirmPasswordId',
                            margin : '5 15 5 0',
                            text: 'Confirm Password'

                        },{
                            xtype: 'textfield',
                            inputType : 'password',
//				        	 readOnly : true,
                            cls : 'textFieldBgCls',
                            id : 'confirmPasswordTFId',
                            fieldStyle: 'height:30px;width:250px;',
                            hideLabel: true

                        }
                    ]
                },{
                    xtype : 'container',
                    layout : {
                        type : 'hbox'
                    },
                    margin : '0 0 20 0',
                    items : [
                        {
                            xtype : 'button',
                            margin : '10 0 0 0',
                            flex : 2,
                            text : 'Save',
                            width : 100,
                            height: 30,

                            cls : 'editProfileBtnCls my-btns',
                            listeners: {
                                click: function () {
                                    Ext.getCmp('ProfileID').getLayout().setActiveItem(1)
                                }
                            }
                        },{
                            xtype : 'button',
                            margin : '10 0 0 10',
                            flex : 2,
                            text : 'Delete',
                            width : 100,
                            height: 30,

                            cls : 'editProfileBtnCls my-btns',
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
    ]
//    ,listeners: {
//        afte0rRender: function () {
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
//    }
})

/*
*







* */