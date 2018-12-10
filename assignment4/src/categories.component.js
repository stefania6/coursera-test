(function () {
'use strict';

  angular.module('RestaurantApp')
  .component('categories', {
    templateUrl: 'template/categories.component.template.html',
    bindings: {
      items: '<'
    }
  });
})();
