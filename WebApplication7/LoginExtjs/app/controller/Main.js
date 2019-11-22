Ext.define('LoginExtjs.controller.Main', {
    extend: 'Ext.app.Controller',
    views: ['LoginForm'],
    init: function () {
        this.control({
            'loginform button': {
                click: this.onButtonClick
            }
        });
    },
    onButtonClick: function (button) {
        console.log("buttonclick");

        var formPanel = button.up('form'),
            login = button.up('login'),
            username = formPanel.down('textfield[name=username]').getValue(),
            password = formPanel.down('textfield[name=password]').getValue();
        var loginPass = {
            username: username,
            password: password
        };
        if (formPanel.getForm().isValid()) { 
            Ext.Ajax.request({
                url: '../../Login/LoginUser',
                params: {
                    loginPass: Ext.JSON.encode(loginPass)
                },
                success: function (response) {
                    var json = Ext.JSON.decode(response.responseText);
                    Ext.Msg.alert('Success', json['message']);
                }//,
                //failure: function (response, opts) {
                //    var json = Ext.JSON.decode(response.responseText);
                //    Ext.Msg.alert('Failure', json['message']);
                //}
            });
        }
    }
});

    //}
    //onButtonClickSubmit: function (button, e, options) {
    //    var formPanel = button.up('form'),
    //        login = button.up('login'),
    //        username = formPanel.down('textfield[name=username]').getValue(),
    //        password = formPanel.down('textfield[name=password]').getValue();
    //    var loginPass = {
    //        Login: username,
    //        Password: password
    //    };
    //    if (formPanel.getForm().isValid()) {
    //        Ext.Ajax.request({
    //            url: 'Login/login',
    //            params:
    //            {
    //                loginPass: Ext.JSON.encode(loginPass)
    //            },
    //            success: function (response) {
    //                var json = Ext.JSON.decode(response.responseText);
    //                Ext.Msg.alert('Success', json['message']);
    //            }
    //        })
    //    }
//    //}
//});


    //onLogin: function (loginDialog, loginForm, loginCredentials) {
    //    console.log(loginCredentials);

    //    var me = this;

    //init: function (application) {
    //    this.control({
    //        "loginform": {
    //            click: this.onButtonClickSubmit
    //        }
    //    });

    //},
//   onButtonClick
//    //onButtonClickSubmit: function (button, e, options, loginForm, loginDialog) {
//        //console.log("1,2");
//    onLogin: function (loginDialog, loginForm, loginCredentials){

//            //var formPanel = button.up('form'),
//            //login = button.up('login'),
//            //username = formPanel.down('textfield[name=username]').getValue(),
//            //password = formPanel.down('textfield[name=password]').getValue();
//        //var loginPass = {
//        //    username: username,
//        //    password: password
//        //};
//        console.log("123");
//        Ext.Ajax.request({
//            url: 'Login/Login',
//            params: {
//                loginPass: Ext.JSON.encode(loginPass)
//            },
//            success: function (response) {

//                var resp = response.responseText;
//                if (resp != '"No"') {
//                    var profile = JSON.parse(response.responseText);
//                }
//                //else {
//                //    var kaprem = Ext.get('Login.Login');
//                //    var viewport = Ext.create('Ext.container.Viewport', {
//                //        layout: 'fit',
//                //        itemId: 'viewDesktop',
//                //        renderTo: Ext.getBody(),
//                //        items: [
//                //            {
//                //                xtype: 'desktop'
//                //            }

//                //        ]
//                //    });
//                //    viewport.show();
//                //}
//            }
//        });
//    }
//});