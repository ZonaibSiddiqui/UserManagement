/**
 * Created with IntelliJ IDEA.
 * User: zonaib.siddiqui
 * Date: 3/28/13
 * Time: 11:13 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('UserManagement.controller.mainController', {
    extend: 'Ext.app.Controller',
    views :[
        'main.Main'
    ],
    localized : true,
    config : {
        init : function(){
            this.control({
                '[action = logoutBtnAction]' : {
                    click : this.onLogoutBtnClick
                }
            })
        }
    },

    onLogoutBtnClick : function(){
        window.location = 'http://localhost:8080/UserManagement/login.html'
    }
})

