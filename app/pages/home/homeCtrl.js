(function () {
    'use strict';

    angular.module('BlurAdmin.pages.home')
      .controller('homeCtrl', homeCtrl);

    /** @ngInject */
    function homeCtrl($scope, $rootScope, $uibModal, $filter, $state, leafletData, $stateParams, $window, $location, $timeout, toastr) {

        $scope.navAbout = function () { $state.go("about") }

        $scope.navCareer = function () { $state.go("career") }

    }

})();