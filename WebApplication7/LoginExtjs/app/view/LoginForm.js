Ext.define("LoginExtjs.view.LoginForm", {
    extend: 'Ext.window.Window',
    alias: 'widget.loginform',
    requires: ['Ext.form.Panel'],
    title: 'Please Log In',
    autoShow: true,
    height: 150,
    width: 300,
    closable: false,
    resizable: false,
    layout: 'fit',
    items: [
        {
            xtype: 'form',
            bodyPadding: 5,
            defaults: {
                xtype: 'textfield',
                anchor: '100%'
            },
            items: [
                {
                    fieldLabel: 'User Name:',
                    name: 'username',
                    allowBlank: false
                },
                {
                    fieldLabel: 'password:',
                    name: 'password',
                    allowBlank: false
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'submit',
                            formBind: true, 
                            //iconCls: 'key-go',
                            text: "Log in",
                            handler: function () {
                                var form = this.up('form').getForm();
                                form.submit();
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
