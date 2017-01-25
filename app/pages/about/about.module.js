(function () {
  'use strict';

    angular.module('BlurAdmin.pages.about', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'app/pages/about/about.html',
            title: 'About',
            controller: 'aboutCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 20,
          },
        });
  }

})();
