'use strict';

(function (BlurAdmin) {
    BlurAdmin.run(function ($rootScope, $crypto, $state, $stateParams, $cookies, $timeout, $http, $location, $window) {

        $rootScope.version = "1.1.11";
        $rootScope.$on('$stateChangeStart',
         function (event, toState, toParams, fromState, fromParams) {
             $rootScope.prevState = fromState;
             $rootScope.$broadcast("pageChanged", fromState);
         });

        $state.go("home");

    }).$inject = ['$rootScope'];

})(

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'ngCookies',
  'toastr',
  'smart-table',
  'ui.slimscroll',
  'angular-progress-button-styles',
  'BlurAdmin.theme',
  'BlurAdmin.pages',
  'angucomplete-alt',
  'leaflet-directive',
  'mdo-angular-cryptography',
  'ngSanitize',
  'ui.select',


])
);