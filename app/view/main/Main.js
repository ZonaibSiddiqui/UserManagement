/**
 * Created with IntelliJ IDEA.
 * User: zonaib.siddiqui
 * Date: 3/28/13
 * Time: 11:13 AM
 * To change this template use File | Settings | File Templates.
 */


Ext.define('UserManagement.view.main.Main', {extend: 'Ext.container.Container',
    xtype: 'main',
    renderTo: Ext.getBody(),
    id: 'MainID',
//    main view layout vbox
    layout: {
        type: 'vbox',
        pack: 'top',
        align: 'stretch'
    },
    items: [
        {
//            toolbar layout hbox to add 3 items and 1st is spacer with flex 1
            xtype: 'toolbar',
            baseCls: 'mainToolbarcls',
            title: 'Welcome User',
            height: 35,
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'stretch'
            },
            items: [
                {
                    xtype : 'label',
                    flex : 14.5
                },{
                    xtype : 'button',
                    overCls  : 'logoutBtn',
                    pressedCls : 'logoutBtn',
                    text: 'Zonaib Siddiqui',
                    cls: 'whiteLabelTextCls whiteLabelTextFontCls',
                    action : 'userNameBtnAction'

                },
                {
                    xtype : 'button',
                    text  : 'Logout',
//                    margin : '0 0 0 2%',
//                    flex : 1,
                    cls : 'logoutbtnCls',
                    overCls  : 'logoutBtn',
                    pressedCls : 'logoutBtn',
                    action : 'loginActionBtn'
                },{
                    xtype : 'label',
                    flex : 2
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'mainSenchaLogoImgCls',
            height: 75,
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'
            },
            items: [
                {
                    xtype: 'tbspacer',
                    width: 148
                },
                {
                    xtype: 'image',
                    src: 'resources/images/senchaLogo.png',
                    margin: '7 0 0 0',
                    height: 60,
                    width: 120
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
                            xtype: 'label',
                            width: 155,
                            height: 50,
                            cls: 'mainSenchaLogoImgCls'

                        },
                        {
                            xtype: 'label',
                            width: '100%',
//                            height: 800,
                            flex : 40,
                            cls: 'senchaMainWhiteClr'
                        }
                    ]
                },
                {
                    xtype: 'userList',
                    id : 'mainUserListId',
                    width : '20%',
                    border: 1,
                    style: 'border-radius: 5px;',
                    flex: 1
                },
                {
//                    left container
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        pack: 'right'
                    },
                    items: [
                        {
                            xtype: 'label',
                            width: 155,
                            height: 50,
                            cls: 'mainSenchaLogoImgCls'

                        },
                        {
                            xtype: 'label',
                            width: '100%',
                            height: 80,
                            cls: 'senchaMainWhiteClr'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'label',
            flex : 65,
            height : 2
//            text : 'i m here'
//            height :  30
//            flex : 4
        },
        {
//                    footer on the bottom
            xtype: 'container',
            baseCls: 'mainFooterCls',//'mainFooterCls',
            title: 'Welcome User',
            height: 55,
            flex : 65,
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'stretch'
            },
//            margin :
            border: 1,
            style: {
                borderColor: '#C8C8C8',
                borderStyle: 'solid'
            },
            items: [
                {
                    xtype: 'label',
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
                    xtype: 'label',
                    flex: 1
                }
            ]
        }
    ]

});

