(function () {
  'use strict';

  angular.module('RestaurantApp')
  .component('items', {
    templateUrl: 'template/items.component.template.html',
    bindings: {
      items: '<'
    }
  });

})();
