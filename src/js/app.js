
angular

// .module(name, dependencies)
    .module('starter', [
        'ionic',
        'starter.controller',
        'starter.filters'
    ])

      .run(function($ionicPlatform) {

          $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
              }
              if(window.StatusBar) {
                StatusBar.styleDefault();
              }
          });

    })


.config(function() {

})

