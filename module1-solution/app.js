(function () {
  'use strict';

  angular.module('LunchCheckerApp',[])

  .controller('LunchCheckerController',function ($scope){
       $scope.lunchItems="";
       $scope.message ="";

       $scope.checker = function functionName() {
            var message =checkValue($scope.lunchItems);
            $scope.message =message;
       };

       function checkValue(string) {
            var message ="";

            if(string==""){
                message = "Please enter data first";
                return message;
            }

            var items = string.split(',');
            var length = items.length;
            console.log(length);
            if (length<=3) {
               message = "Enjoy!";
            }
            else if (length>3) {
              message = "Too much!"
            }

            return message;
       }
}) ;
})();
