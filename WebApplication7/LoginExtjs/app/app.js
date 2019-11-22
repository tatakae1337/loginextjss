Ext.application({
    controllers: ["LoginExtjs.controller.Main"],
    views: ["LoginExtjs.view.LoginForm"],
    name: 'LoginExtjs',
    appFolder: '../app',
    launch: function () { 
        var kaprem = LoginExtjs.app.getController('LoginExtjs.controller.Main');
        console.log(kaprem);
    	Ext.create("LoginExtjs.view.LoginForm")
    },
  
    init: function () {
    }
    
//    var viewport = Ext.create('Ext.container.Viewport', {
//        layout: 'fit',
//        itemId: 'viewDesktop',
//        renderTo: Ext.getBody(),
//        items: [
//            {
//                xtype: 'desktop'
//            }

//        ]
//    });
//    viewport.show();
//}
});
