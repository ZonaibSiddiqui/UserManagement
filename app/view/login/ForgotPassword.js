Ext.define('SenchaLogin.view.login.ForgotPassword', {
	extend : 'Ext.Panel',
	xtype: 'ForgotPassword',
	config : {
		id : 'ForgotPasswordID',
		scrollable : true,
		items : [
		      {
	        	xtype: 'fieldset',
	        	title : 'Forgot Password',
	        	items  : [
	        	          {
	        	        	xtype : 'textfield',
	        	        	label  : 'Password',
	        	        	fieldLabel   : 'Enter Password'
	        	          },{
	        	        	xtype : 'textfield',
	        	        	label  : 'Confirm Password',
	        	            fieldLabel : 'Enter Confirmed Password'
	        	          },{
	        	        	  xtype : 'button',
	        	        	  text : 'Submit password'
	        	          }
	        	          
	        	          
	        	]
	        }
		]
		         
	
	}
})