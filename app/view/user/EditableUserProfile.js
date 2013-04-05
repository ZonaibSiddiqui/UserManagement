/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//editableUserProfile

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('UserManagement.view.user.EditableUserProfile',{extend : 'Ext.container.Container',
	xtype : 'editableUserProfile',
	id : 'EditableUserProfileID',
//    renderTo : Ext.getBody(),
	layout : {
	     type  : 'vbox',
	     pack : 'center',
	     align : 'stretch'
	},
    cls  : 'editPanelBgCls',
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
					    	 forId: 'editfirstNameId',
					    	 margin : '5 50 5 0',
					    	 text: 'First Name'
					         
					     },{

				         	 xtype: 'textfield',
//                             width : '100%',
					         id : 'editfirstNameTFId',
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
					    	 forId: 'editlastNameId',
					    	 margin : '5 50 5 0',
					    	 text: 'Last Name'
					     },{
					         xtype: 'textfield',
					         id : 'editlastNameTFId',
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
					    	 forId: 'edituserNameId',
					    	 margin : '5 50 5 0',
					    	 text: 'User Name'
					     },{
					         xtype: 'textfield',
					         id : 'edituserNameTFId',
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
					    	 forId: 'editpasswordId',
					    	 margin : '5 58 5 0',
					    	 text: 'Password'
					    	 
					     },{
					         xtype: 'textfield',
					         inputType : 'password',
                             cls : 'textFieldBgCls',
					         id : 'editpasswordTFId',
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
					    	 forId: 'editconfirmPasswordId',
					    	 margin : '5 15 5 0',
					    	 text: 'Confirm Password'
					    	 
					     },{
					         xtype: 'textfield',
					         inputType : 'password',
//				        	 readOnly : true,
                             cls : 'textFieldBgCls',
					         id : 'editconfirmPasswordTFId',
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
					    	 action : 'userProfileSaveBtn',
					    	 cls : 'editProfileBtnCls my-btns'
			     	      },{
			     	    	 xtype : 'button',
					    	 margin : '10 0 0 10',
					    	 flex : 2,
					    	 text : 'Delete',
					         width : 100,
                             height: 30,
					    	 action : 'userProfileDeleteBtn',
					    	 cls : 'editProfileBtnCls my-btns'
			     	      }
			     	      
			     	      
			     	 ]
			     
			    	 
			     }
			     
			]
		}
	],
	listeners : {
        afterRender: function () {
            var userProfileID = localStorage.getItem('userProfileID')
            var userStore = Ext.getStore('UserStore');
            userStore.each(function (rec) {
//				
                if (rec.data.id == userProfileID) {
                    Ext.getCmp('editfirstNameTFId').setValue(rec.data.firstName)
                    Ext.getCmp('editlastNameTFId').setValue(rec.data.lastName)
                    Ext.getCmp('edituserNameTFId').setValue(rec.data.userName)
                    Ext.getCmp('editpasswordTFId').setValue(rec.data.password)
                    Ext.getCmp('editconfirmPasswordTFId').setValue(rec.data.password)
                }

            })
        }
	}
		
	
})
