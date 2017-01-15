var app = angular.module('app');

app.controller('listproductCtrl', ['$scope','$location', '$http', 
  function ($scope, $location, $http) {
  	/**url = $location.path('/list');

    $http.get(url).then(function(data) {
      $scope.products = data;
    });
**/
   
  }]);
