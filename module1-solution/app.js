(function () {
  'use strict';


  angular.module('LunchCheckerApp',[])

  .controller('LunchCheckerController',LunchCheckerController) ;


LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController = function ($scope) {
    $scope.lunchItems = "";
    $scope.message = "";
    $scope.checker = function () {
      var lunchItems= $scope.lunchItems;
      if (lunchItems=="") {
        $scope.message ="Please enter data first"
      }
          var arrayOfLunchItems = lunchItems.split(',');



          if(0<arrayOfLunchItems.length<=3){
                $scope.message = "Enjoy!" }
          else if (arrayOfLunchItems.length>3) {
                $scope.message = "Too much!"
          }
          else if (arrayOfLunchItems.length==0) {
                $scope.message = "Too much!"
          }


    };
  }

})();
