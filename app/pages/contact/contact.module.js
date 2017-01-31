(function() {
    "use strict";

    angular.module("BlurAdmin.pages.contact", [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state("contact",
            {
                templateUrl: "app/pages/contact/contact.html",
                title: "Contact",
                controller: "contactCtrl",
                sidebarMeta: {
                    icon: "ion-ios-telephone",
                    order: 40,
                },
            });
    }

})();