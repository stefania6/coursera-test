(function() {
    'use strict';

    angular.module('public')
    .controller('MenuInfoController', MenuInfoController);


    MenuInfoController.$inject = ['MenuService', 'ApiPath'];

    function MenuInfoController(MenuService, ApiPath) {
        this.apiPath = ApiPath;
        this.signedUp = false;

        this.user = MenuService.getUser();

        if (!this.user) {
            this.signedUp = false;
        } else {
            this.signedUp = true;
        }
    };
})();
