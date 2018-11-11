(function() {
  'use strict';

  angular.module("LunchCheck", [])
  .controller("MyController", LunchCheckController);


  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope) {
    $scope.foodList = "";
    $scope.message = "";
    $scope.textColor = "";

    $scope.CheckFoodList = function() {
      var splittedList = "";

      if ($scope.foodList === "" || $scope.foodList === " ") {
        $scope.message = "Please enter data first!";
        $scope.textColor = "red";
      } else {
          $scope.textColor = "green";
          splittedList = $scope.foodList.split(',');

          if(splittedList.length <=3) {
            $scope.message = "Enjoy!";
         } else {
            $scope.message = "Too much!";
         }
      }
    };
  }
})();
