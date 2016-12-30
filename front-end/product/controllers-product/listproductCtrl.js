var productControllers = angular.module('productControllers', []);

phonecatControllers.controller('listProductCtrl', ['$scope', '$http', 
  function ($scope, $http) {
    $http.get('products/procuts.json').success(function(data) {
      $scope.products = data;
    });

    //$scope.orderProp = 'age';
  }]);