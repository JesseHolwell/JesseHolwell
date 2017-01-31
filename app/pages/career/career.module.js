(function() {
    "use strict";

    angular.module("BlurAdmin.pages.career", [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state("career",
            {
                templateUrl: "app/pages/career/career.html",
                title: "Career",
                controller: "careerCtrl",
                sidebarMeta: {
                    icon: "ion-briefcase",
                    order: 30,
                },
            });
    }

})();