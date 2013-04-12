/**
 * Created with IntelliJ IDEA.
 * User: zonaib.siddiqui
 * Date: 3/28/13
 * Time: 11:13 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('UserManagement.view.main.Main', {extend: 'Ext.container.Container',
    alias: 'widget.main', //use widget at define time
    id: 'MainID',  //Don't use id
//    main view layout vbox
    layout: {
        type: 'vbox',
        pack: 'top',
        align: 'stretch'
    },
    localized : true,
    xLogout : 'Logout',
    items: [
        {
//            toolbar layout hbox to add 3 items and 1st is spacer with flex 1
            xtype: 'toolbar',
            baseCls: 'mainToolbarcls',
            title: 'Welcome User',
            height: 35,
            layout: {
                type: 'hbox',
                pack: 'center',// Remove unused properties from the code
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'tbspacer',
                    flex: 14
                },
                {
                    xtype: 'button',
                    overCls: 'toolbarBgColorCls',
                    pressedCls: 'toolbarBgColorCls',
                    text: 'Zonaib Siddiqui',
                    margin: '0 0 0 -15%', // What is this? explain the use of this hack?
                    cls: 'whiteLabelTextCls whiteLabelTextFontCls',
                    action: 'userNameBtnAction'

                },
                {
                    xtype: 'button',
                    text: this.xLogout,
                    margin: '0 0 0 18%',// Hack?
                    cls: 'logoutbtnCls',
                    overCls: 'toolbarBgColorCls',
                    pressedCls: 'toolbarBgColorCls',
                    action: 'logoutBtnAction'
                },
                {
                    xtype: 'tbspacer',
                    flex: 2
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'mainSenchaCls',
            height: 75,
            layout: {
                type: 'hbox',
                pack: 'left',  // ?????
                align: 'left'
            },
            items: [
                {  //Logo header left spacer
                    xtype: 'container',
                    docked: 'left',
                    flex: 8
                },
                {   //Logo
                    xtype: 'image',
                    src: 'resources/images/senchaLogo.png',
                    align: 'center',
                    margin: '7 0 0 0',
                    height: 60,
                    width: 120,//Choose one width/height or flex
                    flex: 9
                },
                {   //Logo header right spacer
                    xtype: 'container',
                    flex: 56
                }
            ]
        },
        {
//            grid view and left and right and left css classes
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
//                    left container
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        pack: 'left'
                    },
                    items: [
                        {
                            xtype: 'container',
                            width: 155,
                            height: 50,
                            cls: 'mainSenchaCls'
                        },
                        {
                            xtype: 'container',
                            width: '100%',
                            flex: 40,
                            cls: 'senchaMainWhiteClr'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    width: 1,
                    padding: '0 0 0 10',
                    border: true,
                    cls: 'mainLeftRightBlurBorderCls'
                },
                {
                    xtype: 'userList',
                    id: 'mainUserListId',
                    width: '20%',
                    margin: '0 0 12 0',
                    border: 1,
                    style: 'border-radius: 5px;',
                    flex: 1
                },
                {
                    xtype: 'container',
                    width: 1,
                    padding: '0 0 0 10',
                    border: true,
                    cls: 'mainLeftRightBlurBorderCls'
                },
                {
//                    left container
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        pack: 'right',
                        align : 'right'
                    },
                    items: [
                        {
                            xtype: 'container',
                            width: 155,
                            height: 50,
                            cls: 'mainSenchaCls'
                        },
                        {
                            xtype: 'container',
                            width: '100%',
                            height: 80,
                            cls: 'senchaMainWhiteClr'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            height: 2
        },
        {
//                    footer on the bottom
            xtype: 'container',
            baseCls: 'mainFooterCls',
            title: 'Welcome User',
            height: 55,
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'stretch'
            },
            border: 1,
            style: {
                borderColor: '#C8C8C8',
                borderStyle: 'solid'
            },
            items: [
                {
                    xtype: 'container',
                    flex: 2
                },
                {
                    flex: 2,
                    xtype: 'label',
                    text: '@2013 Sencha Inc. All rights are reserved.',
                    dock: 'bottom',
                    style: 'color :#646464',
                    margin: '20 0 0 0'
                },
                {
                    xtype: 'container',
                    flex: 1
                }
            ]
        }
    ]
});

