(function(){
  'use strict';

  angular
    .module('quickstartProjectControllers', [])

      .controller('View1Ctrl', ['$scope', '$location',
        function ($scope, $location) {
          $scope.url = $location.$$url;
        }]) // View1Ctrl END

      .controller('View2Ctrl', ['$scope', '$location',
        function ($scope, $location) {
          $scope.url = $location.$$url;
        }]); // View2Ctrl END

})();