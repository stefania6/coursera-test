(function () {
  'use strict';

  angular.module('RestaurantApp')
  .controller('CategoryListController', CategoryListController);

  CategoryListController.$inject = ['items'];
  function CategoryListController(items) {
    this.items = items;
  }

})();
