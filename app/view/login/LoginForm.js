Ext.define("SenchaLogin.view.login.LoginForm", {
    extend: 'Ext.container.Container',
    xtype: 'LoginForm',
    requires: ['Ext.toolbar.Spacer'],
    renderTo: Ext.getBody(),
    autoScroll: true,
    layout: 'auto',
    id: 'LoginFormID',
    items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center'
            },
            height: 665,
            cls: 'mainContainerCls',
            autoScroll: true,
            width: 1300,
            items: [

                {
                    // use form !
                    xtype: 'fieldset',
                    cls: 'mainfieldsetcls mainToolbarfontcls fieldsetBaseCls',
                    height: 290,
                    width: 408,
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                pack: 'center'
                            },
                            style: 'margin-top:5px;',
                            // dnt use html tag
                            items: [
                                {
                                    xtype: 'container',
                                    html: '<span class="feildsetHtmlcls textfeildbordercls"> Sign in </span>'
                                },
                                {
                                    xtype: 'container',
                                    html: ['<span><img class="googleLogoCls" src="resources/images/google.png"></span>']
                                }
                            ]
                        },
                        {

                            xtype: 'textfield',
                            // use dynamic heights and widths
                            width: 325,
                            fieldLabel: 'User name',
                            cls: 'mainTextFeildcls mytxtcls',
                            fieldStyle: 'height:35px;',
                            labelAlign: 'top',
                            allowBlank: false,

                            id: 'mainUserNameTextfieldID'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Password',
                            width: 325,
                            labelAlign: 'top',
                            inputType: 'password',
                            fieldStyle: 'height:35px;',
                            cls: 'mainTextFeildcls',
                            allowBlank: false,
                            id: 'mainPasswprdTextfieldID'
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox'
                            },
                            cls: 'mainTextFeildcls textfeildbordercls',
                            width: 350,
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'Sign in',
                                    id: 'loginBtnID',
                                    width: buttonWidth,
                                    cls: 'loginbtncls my-btn',
                                    // try listeners
                                    action: 'btnClicked'
                                },
                                {
                                    xtype: 'checkbox',
                                    cls: 'maincheckboxcls',
                                    boxLabel: 'Stay signed in',
                                    labelCls: 'checkboxLabelCls'
                                }

                            ]

                        },
                        {
                            xtype: 'container',
                            cls: 'signBottomCls',
                            html: [
                                "<span class='signinBottomTextCls'><a href='www.google.com'>Can't access your account?</a></span>"
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});

