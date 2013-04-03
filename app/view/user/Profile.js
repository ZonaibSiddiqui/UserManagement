/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('SenchaLogin.view.user.Profile',{extend : 'Ext.container.Container',
    xtype : 'Profile',
    renderTo : Ext.getBody(),
    id  : 'ProfileID',
    layout : {
        type : 'hbox'
    },
    width : '100%',
    height : 130,
    style : 'background-color:#FFFFFF !important;',
    items : [
//        user image
        {
            xtype : 'image',
//            src : 'resources/images/zonaib.png',
            width : '30%',
            id : 'profileUserImageID',
            frame : true,
            border: 2,
            style: {
                borderColor: '#CCCCCC',
                borderStyle: 'solid'
            },
            margin : '10 10 0 10',
            height : 110
        },{
            xtype : 'container',
            layout : {
                type : 'vbox',
                pack : 'right',
                align : 'stretch'
            },
            flex : 1,
            margin : '6 10 0 2',
            items : [
                {
                    xtype : 'label',
                    id : 'profileUserNameLabelID',
                    frame : true,
                    text : 'User Name',
                    style : 'font-size:22px;font-weight:10px;'

                },{
                    xtype : 'label',
                    frame : true,
                    id : 'profileEmailLabelID',
                    text : 'User email address',
                    style : 'font-size:16px;font-weight:10px;color : #6C6C6C;'
                },{
                    xtype : 'label',
                    frame : true,
                    id : 'profileCCLabelID',
                    text : 'User city and country',
                    style : 'font-size:15px;font-weight:10px;color : #BCB2B2;'
                }
            ]
        }
    ]

});


//For card layout

//layout:'card',
//    activeItem: 0,// index or id
//    items : [
//    {
//        id: 'card-0',
//        xtype : 'UserProfile'
//    },{
//        id: 'card-1',
//        xtype : 'EditableUserProfile'
//    }
//]