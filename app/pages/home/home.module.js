(function () {
  'use strict';

    angular.module('BlurAdmin.pages.home', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('home', {
            templateUrl: 'app/pages/home/home.html',
            title: 'Home',
            controller: 'homeCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 10,
          },
        });
  }

})();
