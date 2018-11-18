(function() {
  'use strict';

  angular.module("ShoppingList", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("CheckOffListService", CheckOffListService);

  function PrepolulatedList() {
    return [{name: "milk", quantity: 2},
            {name: "biscuits", quantity: 3},
            {name: "tomatoes", quantity: 2},
            {name: "cheese", quantity: 1},
            {name: "ham", quantity: 4}
    ];
  };

  function CheckOffListService() {
    var itemsToBuy = PrepolulatedList();
    var boughtItems = [];

    this.getItemsToBuy = function() {
      return itemsToBuy;
    };

    this.getBoughtItems = function() {
      return boughtItems;
    }

    this.boughtButton = function (indexOfItem) {
      boughtItems.push(itemsToBuy.splice(indexOfItem, 1)[0]);
    }
  };

  ToBuyController.$inject = ['CheckOffListService'];
  function ToBuyController(CheckOffListService) {
    this.items = CheckOffListService.getItemsToBuy();
    this.boughtButton = function(indexOfItem) {
      CheckOffListService.boughtButton(indexOfItem);
    };
  };

  AlreadyBoughtController.$inject = ['CheckOffListService'];
  function AlreadyBoughtController(CheckOffListService) {
    this.items = CheckOffListService.getBoughtItems();
  }
})();
