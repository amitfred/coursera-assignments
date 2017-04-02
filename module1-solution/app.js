(function () {
  'use strict';

  angular.module('LunchCheckerApp',[])

  .controller('LunchCheckerController',LunchCheckerController);

  LunchCheckerController.$inject=['$scope'];
  function LunchCheckerController($scope) {
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

               var itemsForRemoval = string.split(',');
               var oldLength = items.length;
               var length = itemsForRemoval.length;

               for(var i=0; i<oldLength;i++){
                 if(items[i].trim()==""){

                  length= length-1;

                 }
               }
                console.log(itemsForRemoval);



               console.log(length);
               if (length>0 && length<=3) {
                  message = "Enjoy!";
               }
               else if (length>3) {
                 message = "Too much!"
               }
               else if(length<=0){
                 message = "Please enter data first"
               }

               return message;
          }
  }


})();
