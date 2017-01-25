(function () {
  'use strict';

    angular.module('BlurAdmin.pages.home', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/pages/_home/home.html',
            title: 'Home',
            controller: 'homeCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 10,
          },
        });
  }

})();
