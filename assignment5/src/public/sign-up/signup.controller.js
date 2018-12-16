(function() {
    'use strict';

    angular.module('public')
    .controller('MenuSignUpController', MenuSignUpController);


    MenuSignUpController.$inject = ['MenuService'];

    function MenuSignUpController(MenuService) {
      this.user = {};
      this.favoriteDish = {};
      this.infoSaved = false;

      this.submit = function() {
        var saveduser = this.user;

        MenuService.getFavoriteDish(this.user.favoriteDish).then(function (response) {
          saveduser.favoriteDishDetails = response.data;
          MenuService.saveUser(saveduser);
        });
      }
    };

})();
