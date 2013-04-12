Ext.define('UserManagement.view.user.UserList', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.userList',
    requires: [
        'Ext.toolbar.Paging',
        'Ext.ux.ProgressBarPager',
        'Ext.ModelManager',
        'Ext.tip.QuickTipManager',
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.ux.data.PagingMemoryProxy',
        'Ext.form.field.Text',
        'Ext.toolbar.TextItem' ,
        'Ext.ux.PreviewPlugin'
    ],
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'stretch'
    },
    width: '100%',
    id: 'userListID',
    plain : true,
    flex: 1,
    cls: 'userTabPanelSideColorCls userTabPanelBorderCls',
    margin: '2% 2% 2% 2%',
    items: [
        {
            title: 'Users List',
            items: [
                {
                    xtype: 'gridpanel',
                    minWidth: 500,
                    minHeight: 447,
                    flex: 1,
                    loadMask: true,
                    id: 'userListGridID',
                    name: 'gridpanelName',
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
                            flex: 1
                        }
                        ,
                        {
                            xtype: 'actioncolumn',
                            width: 50,
                            items: [
                                {
                                    xtype: 'button',
                                    icon: 'resources/images/edit.png',
                                    tooltip: 'Edit user profile',
                                        handler: function (grid, rowIndex, colIndex) {
                                        var rec = grid.getStore().getAt(rowIndex);
                                        createWindow('editableUserProfile', capitaliseFirstLetter(rec.get('firstName')) + ' ' + capitaliseFirstLetter(rec.get('lastName')) + ' <br>' + rec.get('email'), rec);
                                        localStorage.setItem('userProfileID', rowIndex)
                                        localStorage.setItem('userProfileDataID', rec.get('id'))
                                        UserManagement.getController('userController').actionColumnClick(rec)
                                    }
                                }
                            ]
                        }
                    ],
                    stripeRows: true,
                    frame: true,
                    resizable: {
                        handles: 's'
                    },
                    viewConfig: {
                        plugins: {
                            ptype: 'gridviewdragdrop',
                            dragText: 'Drag and drop to reorganize'
                        }
                    },
                    action: 'userGridPanelAction',
                    tbar: Ext.create('Ext.Toolbar', {
                        id: 'userListGridsID',
                        items: [
                            {
                                iconCls: 'icon-add',
                                text: 'Add',
                                cls: 'userGridTbarBtnCls',
                                tooltip: "Add user",
                                action: 'addUserBtnAction'
                            },
                            {
                                iconCls: 'icon-delete',
                                text: 'Delete',
                                cls: 'userGridTbarBtnCls',
                                scope: this,
                                action: 'deleteUserGridBtnAction',
                                tooltip: "Delete User",
                                itemId: 'delete'
                            }
                        ]
                    }),
                    bbar: Ext.create('Ext.PagingToolbar', {
                        id: 'addd',
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
