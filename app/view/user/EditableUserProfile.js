/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//editableUserProfile

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaLogin.view.user.EditableUserProfile',{extend : 'Ext.container.Container',
	xtype : 'EditableUserProfile',
	renderTo : Ext.getBody(),
	id : 'EditableUserProfileID',
	layout : {
	     type  : 'vbox',
	     pack : 'center',
	     align : 'stretch'
	},
	items : [
		{
			xtype: 'toolbar',
	        baseCls : 'mainToolbarcls',
			flex : 2,
	        title : 'Edit User Profile',
			layout : {
				type : 'hbox',
				pack : 'center',
				align : 'stretch'
			},
			width : 200,
	        items : [
		        {
		        	xtype: 'tbspacer',
		        	flex : 2
		        },{
		        	xtype : 'container',
		        	flex : 5,
                    margin : '0 0 0 25',
		        	html : [
	        	        '<span style="font-size:20px;color :#FFFFFF;">Edit User Profile</span>'
		        	]
		        }
	        ]
		},{
			xtype : 'container',
			layout : {
			     type : 'vbox',
			     align : 'center'
			},
			margin : '20 0 0 0',
			items : [
			     {
			    	 xtype : 'container',
			    	 layout : {
			    	 	type : 'hbox'
			    	 },
			    	 margin : '15 0 0 250',
						items : [
					     {
					    	 xtype : 'label',
					    	 forId: 'editfirstNameId',
					    	 margin : '5 50 0 0',
					    	 text: 'First Name'
					         
					     },{
				         	 xtype: 'textfield',
					         id : 'editfirstNameTFId',
					         fieldStyle: 'height:25px;',
					         hideLabel: true
					    }
					     
					]
			     
			     },{
			    	 xtype : 'container',
			    	 layout : {
			    	 	type : 'hbox'
			    	 },
			    	 margin : '15 0 0 250',
						items : [
					     {
					    	 xtype : 'label',
					    	 forId: 'editlastNameId',
					    	 margin : '5 50 0 0',
					    	 text: 'Last Name'
					     },{
					         xtype: 'textfield',
					         id : 'editlastNameTFId',
					         fieldStyle: 'height:25px;',
					         hideLabel: true
					    }
					     
					]
			     },{
			    	 xtype : 'container',
			    	 layout : {
			    	 	type : 'hbox'
			    	 },
			    	 margin : '15 0 0 250',
						items : [
					     {
					    	 xtype : 'label',
					    	 forId: 'edituserNameId',
					    	 margin : '5 50 0 0',
					    	 text: 'User Name'
					     },{
					         xtype: 'textfield',
					         id : 'edituserNameTFId',
					         fieldStyle: 'height:25px;',
					         hideLabel: true
					    }
					     
					]
			     },{
			    	 xtype : 'container',
			    	 layout : {
			    	 	type : 'hbox'
			    	 },
			    	 margin : '15 0 0 0',
						items : [
					     {
					    	 xtype : 'label',
					    	 forId: 'editpasswordId',
					    	 margin : '5 58 0 0',
					    	 text: 'Password'
					    	 
					     },{
					         xtype: 'textfield',
					         inputType : 'password',
					         id : 'editpasswordTFId',
					         fieldStyle: 'height:25px;',
					         hideLabel: true
					    }
					     
					]
			     },{
			    	 xtype : 'container',
			    	 layout : {
			    	 	type : 'hbox'
			    	 },
			    	 margin : '15 0 0 35px',
						items : [
					     {
					    	 xtype : 'label',
					    	 forId: 'editconfirmPasswordId',
					    	 margin : '5 15 0 0',
					    	 text: 'Confirm Password'
					    	 
					     },{
					         xtype: 'textfield',
					         inputType : 'password',
//				        	 readOnly : true,
					         id : 'editconfirmPasswordTFId',
					         fieldStyle: 'height:25px;',
					         hideLabel: true

					    }
 					]
			     },{
			    	 xtype : 'container',
			    	 layout : {
			    	 	type : 'hbox'
			     	 },
			     	margin : '15 0 20 0',
			     	 items : [
			     	      {
			     	    	 xtype : 'button',
					    	 margin : '15 0 0 0',
					    	 flex : 2,
					    	 text : 'Save',
					         width : buttonWidth,
					    	 action : 'userProfileSaveBtn',
					    	 cls : 'loginbtncls my-btn'
			     	      },{
			     	    	 xtype : 'button',
					    	 margin : '15 0 0 10',
					    	 flex : 2,
					    	 text : 'Delete',
					         width : buttonWidth,
					    	 action : 'userProfileDeleteBtn',
					    	 cls : 'loginbtncls my-btn'
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
