(function () {
  'use strict';

    angular.module('BlurAdmin.pages.career', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('career', {
            url: '/career',
            templateUrl: 'app/pages/career/career.html',
            title: 'Career',
            controller: 'careerCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 30,
          },
        });
  }

})();
