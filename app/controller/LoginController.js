Ext.define('UserManagement.controller.loginController', {
    extend: 'Ext.app.Controller',
    config : {
	    init : function(){
			this.control({
				'[action = btnClicked]' : {
					click: this.loginAuth
				}
            })
		}

	},
	
	loginAuth : function(){

		var mainUserNameTextfield = Ext.getCmp('mainUserNameTextfieldID').getValue();
		var mainPasswprdTextfield = Ext.getCmp('mainPasswprdTextfieldID').getValue();
		var usersStore = Ext.getStore('UserStore')
		if(mainUserNameTextfield == null || mainUserNameTextfield == ''){
			Ext.Msg.alert('Caution', 'User name cannot be empty');
	        return;
	   }else if(mainPasswprdTextfield == undefined || mainPasswprdTextfield == ''){
	       Ext.Msg.alert('Caution', 'Password cannot be empty');
	       return;
	   }
	   flag = 0;
		usersStore.filterBy(function(rec){
			if(rec.data.userName == mainUserNameTextfield && rec.data.password == mainPasswprdTextfield){
	        	flag = 1;
	        	window.location='index.html'
	            return;
	        }
	   })
	    if(flag == 0 ){
	    	Ext.Msg.alert('Caution', 'Check your credantials');
	        return;
	    }
	}
})
