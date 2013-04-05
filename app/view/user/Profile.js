/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('UserManagement.view.user.Profile', {extend: 'Ext.container.Container',
    xtype: 'profile',
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
            id: 'profileUserImageID',
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
            layout: {
                type: 'vbox',
                pack: 'right',
                align: 'stretch'
            },
            height: 108,
            margin: '11 10 0 0',
            border: 2,
            style: {
                borderLeftColor: '#C6C6C6',
                borderRightColor: '#F7F7F7',
                borderBottomColor: '#F7F7F7',
                borderTopColor: '#F7F7F7',
                borderStyle: 'dotted',
                backgroundColor: '#F7F7F7 !important'
            },
            items: [
                {
                    xtype: 'label',
                    id: 'profileUserNameLabelID',
                    frame: true,
                    text: 'User Name',
                    margin: '0 0 0 7',
                    style: 'font-size:22px;font-weight:10px;font-family:Times New Roman;'
                },
                {
                    xtype: 'label',
                    frame: true,
                    id: 'profileEmailLabelID',
                    text: 'User email address',
                    margin: '0 0 0 7',
                    style: 'font-size:16px;font-weight:10px;color : #6C6C6C;'
                },
                {
                    xtype: 'label',
                    frame: true,
                    id: 'profileCCLabelID',
                    text: 'User city and country',
                    margin: '0 0 0 7',
                    style: 'font-size:15px;font-weight:10px;color : #BCB2B2;'
                }
            ]
        }
    ]
});
