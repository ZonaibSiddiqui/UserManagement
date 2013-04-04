Ext.define('UserManagement.view.user.User', {
    extend: 'Ext.tab.Panel',
    renderTo: Ext.getBody(),
    xtype: 'userList',
    id: 'UserListID',
    requires: [
        'Ext.toolbar.Paging',
        'Ext.ux.ProgressBarPager',
        'Ext.ModelManager',
        'Ext.tip.QuickTipManager',
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.tip.QuickTipManager',
        'Ext.ux.data.PagingMemoryProxy',
        'Ext.grid.CellEditor',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.plugin.RowEditing',
        'Ext.form.field.Text',
        'Ext.toolbar.TextItem'
    ],
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'stretch'
    },
    enableTabScroll: true,
//    autoScroll : true,
    bodyStyle: {
        background: '#FFFFFF'
    } ,
//    Cls: ['userTabPanelBorderCls'] ,
    cls : 'userTabPanelSideColorCls userTabPanelBorderCls',
    margin : '2% 2% 2% 2%',
    items: [
        {
            title: 'Users List',
            items: [
                {
                    xtype: 'gridpanel',
                    minWidth : 500,
                    minHeight : 453,
                    flex: 1,
                    frame: true,
                    loadMask: true,
                    columns : 5,
                    id : 'userListGridID',
                    name: 'gridpanelName',
//                    title: 'User info Grid',
                    store: Ext.data.StoreManager.lookup('UserStore'),
                    columns: [
                        {
                            text: 'User Name',
                            sortable: true,
                            dataIndex: 'userName',
                            tooltip: "User name",
                            editor: {
                                xtype: 'textfield',
                                allowBlank: false
                            },
                            flex: 1
                        },
                        {
                            text: 'First Name',
                            sortable: true,
                            dataIndex: 'firstName',
                            tooltip: "User's First name",
                            flex: 1
                        },
                        {
                            text: 'Last Name',
                            sortable: true,
                            tooltip: "User's Last name",
                            dataIndex: 'lastName',
                            flex: 1
                        },
                        {
                            text: 'Password',
                            sortable: true,
                            tooltip: "User's password",
                            dataIndex: 'password',
//                            renderer : this.change,
                            flex: 1
                        }
                        , {
                            xtype:'actioncolumn',
                            width:50,
                            items: [{
                                xtype : 'button',
                                icon: 'resources/images/edit.png',
                                tooltip: 'Edit user profile',
                                handler: function(grid, rowIndex, colIndex) {
                                    createWindow('editableUserProfile', 'Edit user profile');
                                    var rec = grid.getStore().getAt(rowIndex);
                                    localStorage.setItem('userProfileID', rowIndex)
                                    localStorage.setItem('userProfileDataID', rec.get('id'))
                                    Ext.getCmp('editfirstNameTFId').setValue(rec.get('firstName'));
                                    Ext.getCmp('editlastNameTFId').setValue(rec.get('lastName'));
                                    Ext.getCmp('edituserNameTFId').setValue(rec.get('userName'));
                                    Ext.getCmp('editpasswordTFId').setValue(rec.get('password'));
                                    Ext.getCmp('editconfirmPasswordTFId').setValue(rec.get('password'));
//                                    Ext.getCmp('editfirstNameTFId').setValue(rec.get('firstName'));
//                                    Ext.getCmp('editfirstNameTFId').setValue(rec.get('firstName'));
                                }
                            }]
                        }
//                        ,
//                        {
//                            header: 'Edit Profile',
//                            renderer: function (v, m, r) {
//                                var id = Ext.id();
//                                Ext.defer(function () {
//                                    Ext.widget('button', {
//                                        renderTo: id,
////                                        src: 'resources/images/edit2.png',
//                                        autoEl: 'div',
//	                                    text: 'Edit / Delete',
//                                        iconCls : 'edit-button',
//                                        width: '100%',
//                                        height: 20,
//                                        action: 'addUserActionBtn'
//                                    });
//                                }, 50);
//                                return Ext.String.format('<div id="{0}"></div>', id);
//                            }
//                        }
                    ],
                    stripeRows: true,
                    frame: true,
                    resizable: {
                        handles: 's'
                    },
//                    plugins: [
//                        Ext.create('Ext.grid.plugin.RowEditing', {
//                            // Ext.grid.plugin.RowEditing
//                            // Ext.grid.plugin.CellEditing
//                            clicksToEdit: 2
//                        })
//                    ],
                    viewConfig: {
                        plugins: {
                            ptype: 'gridviewdragdrop',
                            dragText: 'Drag and drop to reorganize'
                        }
                    },
                    action: 'userGridPanelAction',
                    tbar: Ext.create('Ext.Toolbar', {
                        items: [
                            {
                                iconCls: 'icon-add',
                                text: 'Add',
                                cls : 'userGridTbarBtnCls',
                                tooltip: "Add user",
                                action: 'addUserBtnAction'
                            }, {
                                iconCls: 'icon-delete',
                                text: 'Delete',
                                cls : 'userGridTbarBtnCls',
                                action : 'deleteUserGridBtnAction',
                                tooltip: "Delete User",
                                itemId: 'delete'
                            }
                        ]
                    }),
                    bbar: Ext.create('Ext.PagingToolbar', {
                        pageSize: itemsPerPage,
                        store: Ext.data.StoreManager.lookup('UserStore'),
                        displayInfo: true
                    })
                }
            ]
        } ,
        {
            title: 'Add Users',
            items: [
                {
                    xtype: 'userProfile'
                }
            ]
        }
    ]
});


change = function(val) {
    if (val > 0) {
        return '<span style="color:green;">' + val + '</span>';
    } else if (val < 0) {
        return '<span style="color:red;">' + val + '</span>';
    }
    return val;
}