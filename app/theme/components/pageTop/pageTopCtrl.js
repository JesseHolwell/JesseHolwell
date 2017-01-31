(function() {
    "use strict";

    angular.module("BlurAdmin.theme.components")
        .controller("pageTopCtrl", pageTopCtrl);

    function pageTopCtrl($scope, $rootScope, $q, $timeout, $state) {

        $scope.home = function() {
            $state.go("home");
        };
    }
})();