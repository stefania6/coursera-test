(function () {
  'use strict';

  angular.module('RestaurantApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    this.items = items;
  }

})();
