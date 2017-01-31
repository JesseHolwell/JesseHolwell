(function() {
    "use strict";

    angular.module("BlurAdmin.pages",
        [
            "ui.router",
            "dndLists",
            "BlurAdmin.pages.home",
            "BlurAdmin.pages.about",
            "BlurAdmin.pages.career",
            "BlurAdmin.pages.contact",
        ])
        .config(routeConfig);

    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {

    }

})();