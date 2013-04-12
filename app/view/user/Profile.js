/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('UserManagement.view.user.Profile', {extend: 'Ext.container.Container',
    alias: 'widget.profile',
    renderTo : Ext.getBody(),
    layout: {
        type: 'hbox'
    },
    width: '100%',
    height: 130,
    style: 'background-color:#FFFFFF !important;',
    items: [
        {
            xtype: 'image',
            width: '100%',
            itemId: 'profileUserImage',
            frame: true,
            border: 2,
            style: {
                borderColor: '#E3E3E3',
                borderStyle: 'solid'
            },
            margin: '10 -16 0 10',
            height: 110
        },
        {
            xtype: 'container',
            itemId : 'profileChildContainer',
            layout: {
                type: 'vbox',
                pack: 'right',
                align: 'stretch'
            },
            height: 108,
            margin: '11 10 0 0',
            border: 2,
            cls : 'profileLeftPanelBgCls',
            items: [
                {
                    xtype: 'label',
                    itemId: 'profileUserNameLabel',
                    frame: true,
                    text: 'User Name',
                    margin: '0 5 0 7',
                    style: 'font-size:22px;font-weight:10px;font-family:Times New Roman;'
                },
                {
                    xtype: 'label',
                    frame: true,
                    itemId: 'profileEmailLabel',
                    text: 'User email address',
                    margin: '0 5 0 7',
                    style: 'font-size:16px;font-weight:10px;color : #6C6C6C;'
                },
                {
                    xtype: 'label',
                    frame: true,
                    itemId: 'profileCCLabel',
                    text: 'User city and country',
                    margin: '0 5 0 7',
                    style: 'font-size:15px;font-weight:10px;color : #BCB2B2;'
                }
            ]
        }
    ]
});
