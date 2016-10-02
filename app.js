(function () {
    'use strict';

    angular.module('lunchCheckApp', [])

.controller('lunchCheckerController', lunchCheckerController) ;
 lunchCheckerController.$inject = ['$scope'];
 
  function lunchCheckerController($scope) {
        $scope.checkiftoomuch = function () {
            $scope.size = calLunchSize($scope.lunch);
        };


        function calLunchSize(string) {
            //function to preform biz logic
            if (string == "") {//check for empty string
                return "Empty.";
            }

            if (string) {//if input is not null
                var totalStringValue = string.split(',');
                if (totalStringValue.length <= 3) {
                    return "Enjoy!";
                }
                else if (totalStringValue.length > 3) {
                    return "Too much!";
                }
            } else {//no value added at all
                return "Please enter data first.";
            }

        }

    };

})();


