(function () {
    'use strict';

    angular.module('BlurAdmin.pages', [
      'ui.router',
       'dndLists',
      'BlurAdmin.pages.home',

    ])
    .config(routeConfig);

    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {

    }

})();
