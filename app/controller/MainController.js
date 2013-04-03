/**
 * Created with IntelliJ IDEA.
 * User: zonaib.siddiqui
 * Date: 3/28/13
 * Time: 11:13 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('SenchaLogin.controller.MainController', {
    extend: 'Ext.app.Controller',

    config : {
        init : function(){
            this.control({
                '[action = loginActionBtn]' : {
                    mouseout : this.loginActionBtnFn
                }
            })
        }

    },

    loginActionBtnFn : function(){
        console.log('logout button')
//       window.location = 'http://localhost:8080/SenchaLogin/login.html'
    }
})

