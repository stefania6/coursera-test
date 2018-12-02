(function() {
  'use strict';

  angular.module('NarrowItDownApp', ['ngRoute'])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
      this.getMatchedMenuItems = function(searchTerm) {
        console.log("searchTerm: ", this.searchTerm);
        this.found = [];

        if (!this.searchTerm) {
          this.found = [];
        } else {
          MenuSearchService.getMatchedMenuItems(this.searchTerm)
            .then(response => {
              this.found = response;
            });
        }

      this.removeItem = function(index) {
        this.found.splice(index, 1);
      }
    }
  };

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
      this.getMatchedMenuItems = function(searchTerm) {
          var foundItems = [];
          if (searchTerm === undefined) {
              return foundItems;
          }

          return $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
          }).then(function(result) {
            debugger;
            var resultedItems = result.data.menu_items;

            for (var i = 0; i < resultedItems.length; i++){
                var descriptionToLowerCase = resultedItems[i].description.toLowerCase();

                if (descriptionToLowerCase.indexOf(searchTerm.toLowerCase()) >= 0){
                  foundItems.push(resultedItems[i]);
                }
            }
            return foundItems;
          }).catch(function(error) {
            console.log("Error inside service!");
          });
      }
    }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&',
        message: '<'
      },
      controller: FoundItemsDirectiveCtrl,
      controllerAs: 'myController',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveCtrl() {
    this.isNothingFound = function() {
      if (this.items.length === 0) {
        return true;
      }
      return false;
    };
  }

})();
